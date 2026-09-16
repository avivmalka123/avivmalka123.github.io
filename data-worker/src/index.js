// LiveCoach data bridge: ToChat + Fireberry → lead journeys, monthly closes, daily digest.
//   GET /lead?phone=05X...        one lead: record + full history + calls + attribution
//   GET /closes?month=YYYY-MM     closed (CLOSED) leads that month, deduped by phone
//   GET /daily?date=YYYY-MM-DD    everything that happened that day (calls, outcomes, touched leads)
//   GET /campaigns
//   POST /hook/<token>/<ToChatEventType>   ToChat webhooks (OutgoingCallLog / IncomingCallLog / CallEndedLog …); token = sha256(APP_KEY)[0:24]
//   GET /active?rep=<name>                the call the rep is on right now (from the webhooks)
//   GET /hooks/log                        last webhook payloads (debug)
// Auth: header x-app-key (or ?key=) must equal APP_KEY (except /hook/<token>/…).
const ALLOWED = ['https://avivmalka123.github.io'];
const TC = 'https://europe-west3-tochat-cannon.cloudfunctions.net/api/integrations/v1';
const FB = 'https://api.fireberry.com';
const LVL = {1:'⭐ הצטרף להדרכה חינמית',2:'👀',3:'💎',4:'❤️ WEBINAR',5:'🔥 צפה בהקלטה',6:'🔴 היה בוובינר',7:'😍 ממתין לוובינר',8:'💪 לא הגיע לוובינר',9:'🤩 צפה בסדרת רשת'};
const ST = {2:'לקוח סגר',5:'חזרה עתידית',9:'ליד חדש',13:'סגר תשלום חלקי',15:'לא רלוונטי',17:'אין מענה',19:'חדש לנסות שוב',20:'שיחה מלאה ולא נסגר'};
const TYPE = {2:'הדרכה חינמית (Aviv CRM)',4:'בורד וובינר'};
const REFN = {'mini-course':'מיני-קורס','fb-hadracha':'הדרכה חינמית (פייסבוק)','mezoraz_yashir':'ישיר (מזורז)'};

function cors(req){ const o=req.headers.get('Origin')||''; const ok=ALLOWED.includes(o)||/^https?:\/\/(localhost|127\.0\.0\.1)(:\d+)?$/.test(o); return {'Access-Control-Allow-Origin':ok?o:ALLOWED[0],'Access-Control-Allow-Methods':'GET,OPTIONS','Access-Control-Allow-Headers':'content-type,x-app-key','Vary':'Origin'}; }
const json=(d,s=200,h={})=>new Response(JSON.stringify(d),{status:s,headers:{'content-type':'application/json; charset=utf-8',...h}});
function safeEq(a,b){ if(a.length!==b.length) return false; let d=0; for(let i=0;i<a.length;i++) d|=a.charCodeAt(i)^b.charCodeAt(i); return d===0; }
const digits=s=>String(s||'').replace(/\D/g,'');
const normName=s=>String(s||'').toLowerCase().replace(/["'׳״.\-_]/g,'').replace(/\s+/g,'');
async function hookToken(env){ const b=await crypto.subtle.digest('SHA-256',new TextEncoder().encode(env.APP_KEY||'')); return [...new Uint8Array(b)].map(x=>x.toString(16).padStart(2,'0')).join('').slice(0,24); }
function deepFind(obj,pred,depth=0){ if(!obj||typeof obj!=='object'||depth>4) return null; for(const [k,v] of Object.entries(obj)){ if(pred(k,v)) return v; if(v&&typeof v==='object'){ const r=deepFind(v,pred,depth+1); if(r!=null) return r; } } return null; }
function extractCall(type,body){
  const phone=deepFind(body,(k,v)=>/phone|number|msisdn|caller|callee|destination/i.test(k)&&typeof v!=='object'&&digits(v).length>=9)||deepFind(body,(k,v)=>typeof v==='string'&&/^\+?\d[\d\s-]{8,14}$/.test(v.trim()));
  const agent=deepFind(body,(k,v)=>/agentname|repname|username|agent$|userDisplayName|displayName/i.test(k)&&typeof v==='string'&&v.length>1)||deepFind(body,(k,v)=>/agentemail|useremail|email/i.test(k)&&typeof v==='string'&&v.includes('@'));
  const name=deepFind(body,(k,v)=>/fullname|customername|leadname|contactname|^name$/i.test(k)&&typeof v==='string');
  const campaign=deepFind(body,(k,v)=>/campaignname/i.test(k)&&typeof v==='string');
  return {type,phone:phone?'0'+nine(phone):null,agent:agent||'',name:name||'',campaign:campaign||''};
}
const nine=s=>digits(s).slice(-9);
const fullPhone=s=>{ const d=digits(s); return d.startsWith('972')?d:'972'+d.replace(/^0/,''); };

async function tcGet(env,path){ const r=await fetch(TC+path,{headers:{Authorization:'Basic '+btoa(env.TOCHAT_TENANT+':'+env.TOCHAT_API_KEY)}}); if(!r.ok) return null; return r.json().catch(()=>null); }
async function fbQuery(env,body){ const r=await fetch(FB+'/api/query',{method:'POST',headers:{tokenid:env.FIREBERRY_TOKEN,'content-type':'application/json'},body:JSON.stringify(body)}); const d=await r.json().catch(()=>({})); return (d&&d.data&&typeof d.data==='object')?d.data:{}; }
async function fbRecord(env,id){ const r=await fetch(FB+'/api/record/account/'+id,{headers:{tokenid:env.FIREBERRY_TOKEN}}); const d=await r.json().catch(()=>null); return d&&d.data&&d.data.Record?d.data.Record:null; }

const FORM_SRC=[['כוכב','טופס הדרכה חינמית'],['מוצר חדירה','טופס מיני-קורס'],['וובינר','הרשמה לוובינר'],['Kajabi','Kajabi']];
function formSource(tx){ const m=tx.match(/דרך\s*(.+)/); const s=(m?m[1]:'').trim(); for(const [k,v] of FORM_SRC) if(s.includes(k)) return v; return s||'טופס'; }
function lvlName(b){ b=(b||'').trim(); for(const v of Object.values(LVL)) if(b.startsWith(v[0])) return v; return b; }
const mmss=s=>{ const a=String(s||'0').split(':').map(Number); return a.length===2?a[0]*60+a[1]:a.length===3?a[0]*3600+a[1]*60+a[2]:0; };
const PRI={created:0,webinar_reg:1,field:2,inquiry:3,call:4,note:5,tc_done:6,tc_closed:7,closed:8};

function buildJourney({phone,record,notes,cust,closedRow}){
  const fb=record||{}; const ev=[]; const calls=[];
  for(const n of notes||[]){
    const t=String(n.createdon||'').slice(0,19); const tx=String(n.notetext||'').trim(); const sub=n.subject||'';
    if(!t||tx.startsWith('בוצעה קריאה לכתובת')||tx.startsWith('<')) continue;
    if(n.notetype==='relatedObject'){ ev.push({t,k:'webinar_reg',text:'נרשם לוובינר: '+tx}); continue; }
    if(sub==='סיכום שיחה'||(tx.startsWith('נציג:')&&tx.includes('משך שיחה'))){
      const rep=(tx.match(/נציג:\s*(.+)/)||[])[1]?.trim()||''; const dur=(tx.match(/משך שיחה:\s*([\d:]+)/)||[])[1]||''; const rec=(tx.match(/קישור להקלטה:\s*(\S+)/)||[])[1]||''; const ai=(tx.match(/סיכום AI:\s*([\s\S]+)/)||[])[1]?.trim()||'';
      calls.push({t,rep,dur,sec:mmss(dur),rec,ai}); ev.push({t,k:'call',text:`שיחה · ${rep} · ${dur}`}); continue; }
    if(sub==="הערה טו צ'אט"||tx.startsWith('נציג:')){ ev.push({t,k:'note',text:'הערת נציג: '+tx.replace(/^נציג:\s*/,'').replace(/\n/g,' · ').slice(0,200)}); continue; }
    if(tx.startsWith('נוצרה פנייה נוספת')){ ev.push({t,k:'inquiry',text:'פנייה חוזרת דרך '+formSource(tx)}); continue; }
    const m=tx.match(/^([\s\S]+?) השתנה מ:([\s\S]*?) ל:([\s\S]*)$/);
    if(m){ const f=m[1].trim(); let a=m[2].trim(), b=m[3].trim(); if(['השארת פרטים אחרונה','השארת פרטים פעם נוספת תאריך','נשארו פרטים פעם נוספת','אין מענה'].includes(f)) continue; if(f==='רמת הליד'){ a=a?lvlName(a):a; b=lvlName(b); } ev.push({t,k:'field',text:`${f}: ${a||'ריק'} ← ${b}`,f,a,b}); continue; }
    ev.push({t,k:'other',text:tx.slice(0,200)});
  }
  for(const l of (cust&&cust.inactiveCampaigns)||[]){ const t=String(l.timestamp||'').replace('Z','').slice(0,19); const r=l.reason; const sr=(l.subReason&&l.subReason.name)||''; if(!t) continue; ev.push({t,k:r==='CLOSED'?'tc_closed':'tc_done',text:`טוצ'אט · ${l.name} · ${r==='CLOSED'?'✅ נסגר':r==='IRRELEVANT'?'לא רלוונטי':r==='CALL_ATTEMPTS_EXCEEDED'?'חריגת ניסיונות':r}${sr?' · '+sr:''}${l.agentName?' · '+l.agentName:''}${l.note?' · '+l.note:''}`,reason:r,sub:sr,agent:l.agentName||'',note:l.note||'',campaign:l.name}); }
  for(const l of (cust&&cust.activeLeads)||[]){ if(l.lastCall){ const t=String(l.lastCall).replace('Z','').slice(0,19); ev.push({t,k:'tc_done',text:`טוצ'אט · ${l.campaignName} · ${l.status==='FOLLOWUP'?'Follow Up':'פתוח'} · ניסיונות ${l.callAttempts||0}${l.followupComment?' · '+l.followupComment:''}`,reason:l.status,campaign:l.campaignName}); } }
  calls.sort((a,b)=>a.t.localeCompare(b.t));
  const created=fb.createdon?String(fb.createdon).slice(0,19):null;
  const closed=closedRow?String(closedRow.timestamp).replace('Z','').slice(0,19):null;
  if(closed) ev.push({t:closed,k:'closed',text:`✅ סגירה בטוצ'אט · ${closedRow.repName||''} · ${(closedRow.subReason&&closedRow.subReason.name)||'ללא סיבת סגירה'}${closedRow.note?' · '+closedRow.note:''}`});
  if(created) ev.push({t:created,k:'created',text:'נכנס למערכת'});
  ev.sort((a,b)=>a.t.localeCompare(b.t)||(PRI[a.k]??9)-(PRI[b.k]??9));
  const ms=s=>new Date(s.replace(' ','T')+(s.length===10?'T00:00:00':'')).getTime();
  let first=null; const early=created?ev.filter(e=>ms(e.t)-ms(created)<=6*3600e3&&ms(e.t)>=ms(created)-60e3):[];
  for(const e of early){ if(e.k==='webinar_reg'||(e.k==='field'&&e.f==='מתעניין ב-')){ first='הרשמה לוובינר'; break; } }
  if(!first) for(const e of early){ if(e.k==='field'&&e.f==='רמת הליד'){ first={'⭐':'הדרכה חינמית','💎':'מיני-קורס','🤩':'סדרת רשת','❤':'וובינר'}[e.b[0]]||e.b; break; } if(e.k==='field'&&e.f==='REF'){ first=REFN[e.b]||e.b; break; } }
  if(!first){ const ref=fb.pcfsystemfield106||''; first=REFN[ref]||(fb.accounttypecode===4?'בורד וובינר (ייבוא)':fb.accounttypecode===2?'הדרכה חינמית':record?'לא ידוע':'אין רשומה בפיירברי'); }
  const levels=ev.filter(e=>e.k==='field'&&e.f==='רמת הליד').map(e=>[e.t,e.b]);
  const refs=ev.filter(e=>e.k==='field'&&e.f==='REF').map(e=>[e.t,e.b]);
  const statuses=ev.filter(e=>e.k==='field'&&e.f==='סטטוס').map(e=>[e.t,e.b]);
  const inquiries=ev.filter(e=>e.k==='inquiry').length;
  const webinars=[...new Set([...ev.filter(e=>e.k==='webinar_reg').map(e=>e.text.replace(/.*וובינר\s*/,'').trim()),...ev.filter(e=>e.k==='field'&&e.f==='מתעניין ב-'&&e.b).map(e=>e.b.replace('וובינר','').trim())])].filter(Boolean).sort();
  const content=new Set(); for(const [,b] of levels){ if(b.startsWith('⭐')) content.add('הדרכה חינמית'); if(b.startsWith('💎')) content.add('מיני-קורס'); if(b.startsWith('🔥')) content.add('הקלטת וובינר'); if(b.startsWith('🔴')) content.add('היה בוובינר'); if(b.startsWith('🤩')) content.add('סדרת רשת'); if(b.startsWith('❤')) content.add('וובינר ❤️'); }
  if(fb.pcfsystemfield104===1) content.add('הדרכה חינמית'); if(fb.pcfsystemfield104===3) content.add('מיני-קורס'); if(fb.pcfsystemfield104===6) content.add('היה בוובינר');
  const talk=calls.filter(c=>c.sec>=120); const longest=talk.length?talk.reduce((a,b)=>b.sec>a.sec?b:a):null; const last=calls[calls.length-1]||null;
  const now=Date.now();
  const active=(cust&&cust.activeLeads||[]).map(l=>({campaign:l.campaignName,status:l.status,attempts:l.callAttempts||0,lastCall:l.lastCall||null,followBy:l.followByName||null,followDate:l.followDate||null,comment:l.followupComment||'',notes:l.notes||''}));
  return {
    phone, name:(cust&&cust.customerData&&cust.customerData.fullName)||fb.accountname||'', fireberry_id:fb.accountid||null, fireberry_link:fb.accountid?'https://app.fireberry.com/app/record/1/'+fb.accountid:null,
    email:fb.emailaddress1||null, owner:fb.ownername||null, type:TYPE[fb.accounttypecode]||'-', ref:REFN[fb.pcfsystemfield106]||fb.pcfsystemfield106||'', level_now:levels.length?levels[levels.length-1][1]:(LVL[fb.pcfsystemfield104]||'-'),
    fb_status:ST[fb.statuscode]||(record?String(fb.statuscode):'אין רשומה'), fb_notes:fb.pcfsystemfield108||'', webinar_interest:fb.pcfsystemfield138||'', meeting:fb.pcfsystemfield129||fb.pcfsystemfield121||null,
    created, days_in_system:created?Math.floor((now-ms(created))/864e5):null,
    closed, closer:closedRow?closedRow.repName||'':null, close_reason:closedRow?((closedRow.subReason&&closedRow.subReason.name)||''):null, close_note:closedRow?closedRow.note||'':null, days_to_close:(created&&closed)?Math.floor((ms(closed)-ms(created))/864e5):null,
    first_source:first, content:[...content], webinars, levels, refs, statuses, inquiries,
    calls, n_calls:calls.length, n_talk:talk.length, talk_min:Math.round(calls.reduce((s,c)=>s+c.sec,0)/6)/10, reps:[...new Set(calls.map(c=>c.rep).filter(Boolean))],
    longest:longest?{rep:longest.rep,dur:longest.dur,t:longest.t,ai:longest.ai.slice(0,3000),rec:longest.rec}:null,
    last_call:last?{rep:last.rep,dur:last.dur,t:last.t,ai:last.ai.slice(0,1200),rec:last.rec,days_ago:Math.floor((now-ms(last.t))/864e5)}:null,
    tochat_active:active, timeline:ev.map(e=>({t:e.t,k:e.k,text:e.text}))
  };
}

async function fetchLead(env,phoneIn,closedRow){
  const full=fullPhone(phoneIn); const n9=nine(phoneIn);
  const cust=await tcGet(env,`/tenants/${env.TOCHAT_TENANT}/customers/${full}`);
  let fid=(closedRow&&closedRow.externalId)||null;
  if(!fid&&cust&&cust.customerData&&cust.customerData.link){ const m=String(cust.customerData.link).match(/record\/1\/([0-9a-f-]{36})/); if(m) fid=m[1]; }
  if(!fid){ const q=await fbQuery(env,{objecttype:1,page_size:3,page_number:1,fields:'accountid,createdon',query:`(telephone1 = '${full}') OR (telephone1 = '0${n9}') OR (telephone1 = '${n9}') OR (telephone1 = '+${full}')`}); const rows=(q.Data||[]).sort((a,b)=>String(a.createdon).localeCompare(String(b.createdon))); if(rows[0]) fid=rows[0].accountid; }
  let record=null, notes=[];
  if(fid){ record=await fbRecord(env,fid); let page=1; while(page<=5){ const q=await fbQuery(env,{objecttype:7,page_size:200,page_number:page,fields:'noteid,notetext,subject,objectid,createdon,notetype',query:`objectid = '${fid}'`,sort_by:'createdon',sort_type:'asc'}); const rows=q.Data||[]; notes.push(...rows); if(rows.length<200) break; page++; } }
  if(!closedRow&&cust&&cust.inactiveCampaigns){ const cl=cust.inactiveCampaigns.filter(x=>x.reason==='CLOSED').sort((a,b)=>String(b.timestamp).localeCompare(String(a.timestamp)))[0]; if(cl) closedRow={timestamp:cl.timestamp,repName:cl.agentName,subReason:cl.subReason,note:cl.note}; }
  return buildJourney({phone:'0'+n9,record,notes,cust,closedRow});
}

async function campaigns(env){ const c=await tcGet(env,'/campaigns'); return Array.isArray(c)?c:[]; }
async function closesForRange(env,start,end,reasons){
  const camps=await campaigns(env); const out=[];
  await Promise.all(camps.map(async c=>{ const rows=await tcGet(env,`/tenants/${env.TOCHAT_TENANT}/campaigns/${c.id}/closedLeads?start=${start}&end=${end}`); for(const x of rows||[]) if(!reasons||reasons.includes(x.reason)) out.push({...x,campaign:c.name,campaignId:c.id}); }));
  return out.sort((a,b)=>String(a.timestamp).localeCompare(String(b.timestamp)));
}
function dedupeByPhone(rows){ const seen=new Map(); for(const x of rows){ const k=nine(x.displayPhone||x.phone); if(!seen.has(k)) seen.set(k,x); } return [...seen.values()]; }

export default {
  async fetch(req,env){
    const h=cors(req); if(req.method==='OPTIONS') return new Response(null,{status:204,headers:h});
    const url=new URL(req.url); const key=req.headers.get('x-app-key')||url.searchParams.get('key')||'';
    if(url.pathname==='/health') return json({ok:true},200,h);
    const hm=url.pathname.match(/^\/hook\/([a-f0-9]{24})\/([A-Za-z]+)\/?$/);
    if(hm){ if(hm[1]!==await hookToken(env)) return json({error:'bad token'},401,h);
      let body=null; const ct=req.headers.get('content-type')||''; try{ body=ct.includes('json')?await req.json():Object.fromEntries((await req.formData()).entries()); }catch(e){ body={raw:await req.text().catch(()=>'')}; }
      const ev={...extractCall(hm[2],body),ts:new Date().toISOString(),raw:JSON.stringify(body).slice(0,4000)};
      const logRaw=await env.CACHE.get('hooks:log'); const logArr=logRaw?JSON.parse(logRaw):[]; logArr.unshift({type:ev.type,ts:ev.ts,phone:ev.phone,agent:ev.agent,name:ev.name,raw:ev.raw}); await env.CACHE.put('hooks:log',JSON.stringify(logArr.slice(0,40)),{expirationTtl:7*86400});
      const idxRaw=await env.CACHE.get('active:index'); const idx=idxRaw?JSON.parse(idxRaw):{}; const ak=normName(ev.agent)||'_';
      if(/CallEnded|CallRecordCreated|AISummary|Done|Followup|SubStatus/i.test(ev.type)){ if(idx[ak]&&(!ev.phone||idx[ak].phone===ev.phone)) delete idx[ak]; }
      else if(ev.phone&&/Outgoing|Incoming|Call/i.test(ev.type)){ idx[ak]={phone:ev.phone,agent:ev.agent,name:ev.name,campaign:ev.campaign,type:ev.type,ts:ev.ts}; idx._last=idx[ak]; }
      await env.CACHE.put('active:index',JSON.stringify(idx),{expirationTtl:6*3600});
      return json({ok:true,parsed:{type:ev.type,phone:ev.phone,agent:ev.agent}},200,h); }
    if(!env.APP_KEY||!safeEq(key,env.APP_KEY)) return json({error:'unauthorized'},401,h);
    const cache=async(k,ttl,fn)=>{ if(url.searchParams.get('fresh')!=='1'){ const v=await env.CACHE.get(k); if(v) return JSON.parse(v); } const d=await fn(); await env.CACHE.put(k,JSON.stringify(d),{expirationTtl:ttl}); return d; };
    try{
      if(url.pathname==='/campaigns') return json(await campaigns(env),200,h);
      if(url.pathname==='/hooks/log'){ const raw=await env.CACHE.get('hooks:log'); return json({token:await hookToken(env),events:raw?JSON.parse(raw):[]},200,h); }
      if(url.pathname==='/active'){ const rep=normName(url.searchParams.get('rep')); const idxRaw=await env.CACHE.get('active:index'); const idx=idxRaw?JSON.parse(idxRaw):{}; const fresh=e=>e&&(Date.now()-new Date(e.ts).getTime())<2*3600e3;
        let hit=null; if(rep){ hit=idx[rep]||Object.entries(idx).find(([k,v])=>k!=='_last'&&k!=='_'&&(k.includes(rep)||rep.includes(k)))?.[1]||null; }
        if(!hit&&rep){ const first=rep.slice(0,3); hit=Object.entries(idx).find(([k])=>k!=='_last'&&k!=='_'&&k.startsWith(first))?.[1]||null; }
        return json({active:fresh(hit)?hit:null,agents:Object.keys(idx).filter(k=>k!=='_last'&&k!=='_')},200,{...h,'Cache-Control':'no-store'}); }
      if(url.pathname==='/lead'){ const ph=nine(url.searchParams.get('phone')); if(ph.length!==9) return json({error:'phone'},400,h); return json(await cache('lead:'+ph,1800,()=>fetchLead(env,ph,null)),200,h); }
      if(url.pathname==='/closes'){ const m=url.searchParams.get('month')||''; if(!/^\d{4}-\d{2}$/.test(m)) return json({error:'month'},400,h); const [y,mo]=m.split('-').map(Number); const last=new Date(Date.UTC(y,mo,0)).getUTCDate(); const cur=new Date().toISOString().slice(0,7)===m;
        return json(await cache('closes:'+m,cur?600:21600,async()=>dedupeByPhone(await closesForRange(env,`${m}-01`,`${m}-${String(last).padStart(2,'0')}`,['CLOSED'])).map(x=>({phone:'0'+nine(x.displayPhone),name:x.fullName||'',closed:String(x.timestamp).replace('Z','').slice(0,19),closer:x.repName||'',reason:(x.subReason&&x.subReason.name)||'',note:x.note||'',campaign:x.campaign,fireberry_id:x.externalId||null}))),200,h); }
      if(url.pathname==='/daily'){ const d=url.searchParams.get('date')||new Date(Date.now()-864e5).toISOString().slice(0,10); if(!/^\d{4}-\d{2}-\d{2}$/.test(d)) return json({error:'date'},400,h);
        return json(await cache('daily:'+d,900,async()=>{
          const next=new Date(new Date(d+'T00:00:00Z').getTime()+864e5).toISOString().slice(0,10);
          const [notesQ,outcomesRaw,camps]=await Promise.all([
            fbQuery(env,{objecttype:7,page_size:500,page_number:1,fields:'noteid,notetext,objectid,createdon',query:`(subject = 'סיכום שיחה') AND (createdon >= '${d}') AND (createdon < '${next}')`,sort_by:'createdon',sort_type:'asc'}),
            closesForRange(env,d,d,null), campaigns(env)]);
          const calls=(notesQ.Data||[]).map(n=>{ const tx=String(n.notetext||''); return {t:String(n.createdon).slice(0,19),fireberry_id:n.objectid,rep:(tx.match(/נציג:\s*(.+)/)||[])[1]?.trim()||'',dur:(tx.match(/משך שיחה:\s*([\d:]+)/)||[])[1]||'',sec:mmss((tx.match(/משך שיחה:\s*([\d:]+)/)||[])[1]),rec:(tx.match(/קישור להקלטה:\s*(\S+)/)||[])[1]||'',ai:((tx.match(/סיכום AI:\s*([\s\S]+)/)||[])[1]||'').trim().slice(0,2500)}; });
          // names/phones for the called records (one query, up to 100 ids)
          const ids=[...new Set(calls.map(c=>c.fireberry_id))].slice(0,100); const recs={};
          if(ids.length){ const q=await fbQuery(env,{objecttype:1,page_size:200,page_number:1,fields:'accountid,accountname,telephone1,statuscode,pcfsystemfield104,pcfsystemfield106,accounttypecode,createdon,ownername',query:ids.map(i=>`(accountid = '${i}')`).join(' OR ')}); for(const r of q.Data||[]) recs[r.accountid]=r; }
          for(const c of calls){ const r=recs[c.fireberry_id]; if(r){ c.name=r.accountname; c.phone='0'+nine(r.telephone1); c.fb_status=ST[r.statuscode]||''; c.level=LVL[r.pcfsystemfield104]||''; c.ref=REFN[r.pcfsystemfield106]||r.pcfsystemfield106||''; c.type=TYPE[r.accounttypecode]||''; c.created=String(r.createdon).slice(0,10); c.owner=r.ownername||''; } }
          const outcomes=outcomesRaw.filter(x=>String(x.timestamp).slice(0,10)===d).map(x=>({t:String(x.timestamp).replace('Z','').slice(0,19),phone:'0'+nine(x.displayPhone),name:x.fullName||'',rep:x.repName||'',reason:x.reason,sub:(x.subReason&&x.subReason.name)||'',note:x.note||'',campaign:x.campaign,fireberry_id:x.externalId||null}));
          // open leads touched that day (last call on that date)
          const touched=[]; await Promise.all(camps.filter(c=>c.status!=='OFF'&&c.active!==false).map(async c=>{ const rows=await tcGet(env,`/tenants/${env.TOCHAT_TENANT}/campaigns/${c.id}/openLeads`); for(const l of rows||[]) if(l.lastCall&&String(l.lastCall).slice(0,10)===d) touched.push({t:String(l.lastCall).replace('Z','').slice(0,19),phone:'0'+nine(l.displayPhone||l.phone),name:l.fullName||'',rep:l.repName||l.followByName||'',status:l.status,sub:l.subStatusName||l.subStatus||'',attempts:l.callAttempts||0,followDate:l.followDate||null,comment:l.followupComment||'',campaign:c.name,fireberry_id:l.externalId||null,notes:(l.notes||'').slice(0,300)}); }));
          return {date:d,calls,outcomes,touched,generated:new Date().toISOString()};
        }),200,h); }
      return json({error:'not found'},404,h);
    }catch(e){ return json({error:String(e&&e.message||e)},500,h); }
  }
};
