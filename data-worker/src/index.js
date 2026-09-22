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

function cors(req){ const o=req.headers.get('Origin')||''; const ok=ALLOWED.includes(o)||/^https?:\/\/(localhost|127\.0\.0\.1)(:\d+)?$/.test(o); return {'Access-Control-Allow-Origin':ok?o:ALLOWED[0],'Access-Control-Allow-Methods':'GET,POST,OPTIONS','Access-Control-Allow-Headers':'content-type,x-app-key,x-cal-pw','Vary':'Origin'}; }
const json=(d,s=200,h={})=>new Response(JSON.stringify(d),{status:s,headers:{'content-type':'application/json; charset=utf-8',...h}});
function safeEq(a,b){ if(a.length!==b.length) return false; let d=0; for(let i=0;i<a.length;i++) d|=a.charCodeAt(i)^b.charCodeAt(i); return d===0; }
const digits=s=>String(s||'').replace(/\D/g,'');
const num=v=>(v==null||v==='')?null:(isNaN(+v)?null:+v);
// the v1 query API returns picklist LABELS (e.g. "לא רלוונטי", "⭐", "בורד וובינר", "כן"); /api/record returns codes
const stName=v=>v==null||v===''?'':(num(v)!=null?(ST[num(v)]||String(v)):String(v));
const lvName=v=>v==null||v===''?'':(num(v)!=null?(LVL[num(v)]||''):lvlName(String(v)));
const tpName=v=>v==null||v===''?'':(num(v)!=null?(TYPE[num(v)]||''):(String(v).includes('וובינר')?'בורד וובינר':String(v).includes('Aviv')?'הדרכה חינמית (Aviv CRM)':String(v)));
const lvCode=v=>{ const n=lvName(v); for(const [k,x] of Object.entries(LVL)) if(x===n) return +k; return null; };
const tpCode=v=>{ const n=tpName(v); return n==='בורד וובינר'?4:n.startsWith('הדרכה')?2:null; };
const yes=v=>v===2||v==='2'||String(v).trim()==='כן';
const normName=s=>String(s||'').toLowerCase().replace(/["'׳״.\-_]/g,'').replace(/\s+/g,'');
async function hookToken(env){ const b=await crypto.subtle.digest('SHA-256',new TextEncoder().encode(env.APP_KEY||'')); return [...new Uint8Array(b)].map(x=>x.toString(16).padStart(2,'0')).join('').slice(0,24); }
function deepFind(obj,pred,depth=0){ if(!obj||typeof obj!=='object'||depth>4) return null; for(const [k,v] of Object.entries(obj)){ if(pred(k,v)) return v; if(v&&typeof v==='object'){ const r=deepFind(v,pred,depth+1); if(r!=null) return r; } } return null; }
function extractCall(type,body){
  // exact ToChat keys first (seen 2026-09-16: userName, userEmail, customerDisplayPhone, customerId, customerName, externalId, campaignName, sessionId)
  const b=body||{};
  if(b.customerDisplayPhone||b.customerId){ return {type,phone:'0'+nine(b.customerDisplayPhone||b.customerId),agent:b.userName||b.userEmail||'',email:b.userEmail||'',name:b.customerName||'',campaign:b.campaignName||'',externalId:b.externalId||'',sessionId:b.sessionId||'',
      duration:(v=>v==null||v===''?null:(typeof v==='number'?Math.round(v):(/^\d+$/.test(String(v))?+v:mmss(v))))(b.timeInCall??b.duration??b.callDuration),
      summary:b.aiSummary||b.summary||b.text||'',recording:b.link||b.recordUrl||b.recordingUrl||b.url||b.fileUrl||''}; }
  const phone=deepFind(body,(k,v)=>/phone|number|msisdn|caller|callee|destination/i.test(k)&&typeof v!=='object'&&digits(v).length>=9)||deepFind(body,(k,v)=>typeof v==='string'&&/^\+?\d[\d\s-]{8,14}$/.test(v.trim()));
  const agent=deepFind(body,(k,v)=>/agentname|repname|username|agent$|userDisplayName|displayName/i.test(k)&&typeof v==='string'&&v.length>1)||deepFind(body,(k,v)=>/agentemail|useremail|email/i.test(k)&&typeof v==='string'&&v.includes('@'));
  const name=deepFind(body,(k,v)=>/fullname|customername|leadname|contactname|^name$/i.test(k)&&typeof v==='string');
  const campaign=deepFind(body,(k,v)=>/campaignname/i.test(k)&&typeof v==='string');
  const duration=deepFind(body,(k,v)=>/duration|length|seconds/i.test(k)&&(typeof v==='number'||/^[\d:]+$/.test(String(v))));
  const summary=deepFind(body,(k,v)=>/summary|aisummary|transcript/i.test(k)&&typeof v==='string'&&v.length>20);
  const recording=deepFind(body,(k,v)=>/record|url|mp3|audio/i.test(k)&&typeof v==='string'&&/^https?:\/\//.test(v));
  return {type,phone:phone?'0'+nine(phone):null,agent:agent||'',name:name||'',campaign:campaign||'',duration:duration==null?null:(typeof duration==='number'?duration:mmss(duration)),summary:summary||'',recording:recording||''};
}
const nine=s=>digits(s).slice(-9);
const fullPhone=s=>{ const d=digits(s); return d.startsWith('972')?d:'972'+d.replace(/^0/,''); };

// ── Supabase store for webhook state (KV free tier allows only 1,000 writes/day) ──
function sbReady(env){ return !!(env.SUPABASE_URL&&env.SUPABASE_KEY); }
async function sb(env,path,method='GET',body=null,prefer=''){ const k=env.SUPABASE_KEY; const r=await fetch(env.SUPABASE_URL.replace(/\/+$/,'')+'/rest/v1/'+path,{method,headers:{'content-type':'application/json',apikey:k,...(k.startsWith('eyJ')?{Authorization:'Bearer '+k}:{}),...(prefer?{Prefer:prefer}:{})},body:body?JSON.stringify(body):undefined}); if(!r.ok) throw new Error('supabase '+r.status+' '+(await r.text()).slice(0,120)); return method==='GET'||prefer.includes('representation')?r.json():null; }
async function kvPutSafe(env,k,v,opt){ try{ await env.CACHE.put(k,v,opt); }catch(e){} }
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
  const j=buildJourney({phone:'0'+n9,record,notes,cust,closedRow});
  try{ let hooks=[]; if(sbReady(env)){ hooks=(await sb(env,'tc_calls?select=t,type,rep,sec,rec,ai&phone=eq.0'+n9+'&order=t.asc&limit=200')).map(e=>({...e,t:String(e.t).slice(0,19)})); } else { hooks=JSON.parse((await env.CACHE.get('calls:'+n9))||'[]'); }
    const ms=t=>new Date(t.replace(' ','T')).getTime(); const same=(a,b)=>normName(a.rep)===normName(b.rep)&&Math.abs(ms(a.t)-ms(b.t))<=4*3600e3;
    const merged={}; for(const e of hooks){ const ex=j.calls.find(c=>same(c,e)); if(ex){ if(!ex.ai&&e.ai) ex.ai=e.ai; if(!ex.rec&&e.rec) ex.rec=e.rec; continue; } const k=normName(e.rep)+'|'+e.t.slice(0,13); let m=Object.values(merged).find(x=>same(x,e)); if(!m){ m=merged[k]={t:e.t,rep:e.rep,sec:0,dur:'',rec:'',ai:'',src:'webhook'}; } if(e.sec) m.sec=Math.max(m.sec,e.sec); if(e.ai) m.ai=e.ai; if(e.rec) m.rec=e.rec; }
    for(const m of Object.values(merged)){ if(m.sec<15&&!m.ai) continue; m.dur=String(Math.floor(m.sec/60)).padStart(2,'0')+':'+String(m.sec%60).padStart(2,'0'); j.calls.push(m); j.timeline.push({t:m.t,k:'call',text:`שיחה · ${m.rep} · ${m.dur}`}); }
    if(Object.keys(merged).length){ j.calls.sort((a,b)=>a.t.localeCompare(b.t)); j.timeline.sort((a,b)=>a.t.localeCompare(b.t)); j.n_calls=j.calls.length; j.talk_min=Math.round(j.calls.reduce((s,c)=>s+c.sec,0)/6)/10; j.reps=[...new Set(j.calls.map(c=>c.rep).filter(Boolean))]; const last=j.calls[j.calls.length-1]; j.last_call={rep:last.rep,dur:last.dur,t:last.t,ai:(last.ai||'').slice(0,1200),rec:last.rec,days_ago:Math.floor((Date.now()-new Date(last.t).getTime())/864e5)}; const talk=j.calls.filter(c=>c.sec>=120); const lg=talk.length?talk.reduce((a,b)=>b.sec>a.sec?b:a):null; j.longest=lg?{rep:lg.rep,dur:lg.dur,t:lg.t,ai:(lg.ai||'').slice(0,3000),rec:lg.rec}:j.longest; }
  }catch(e){}
  return j;
}

async function followupsFor(env,repName){ const rep=normName(repName); const url={searchParams:{get:k=>k==='rep'?repName:null}};

          const camps=await campaigns(env); const out=[]; const today=new Date().toISOString().slice(0,10);
          await Promise.all(camps.filter(c=>c.status!=='OFF'&&c.active!==false).map(async c=>{ const rows=await tcGet(env,`/tenants/${env.TOCHAT_TENANT}/campaigns/${c.id}/openLeads`); for(const l of rows||[]){ const rn=normName(l.repName||l.followByName||''); if(!rn||!(rn===rep||rn.includes(rep)||rep.includes(rn))) continue; out.push({phone:'0'+nine(l.displayPhone||l.phone),name:l.fullName||'',status:l.status,sub:l.subStatusName||'',attempts:l.callAttempts||0,lastCall:l.lastCall||null,followDate:l.followDate||null,comment:l.followupComment||'',notes:(l.notes||'').slice(0,300),campaign:c.name,fireberry_id:l.externalId||null,priority:l.priority||null}); } }));
          const fu=dedupeByPhone(out.map(x=>({...x,displayPhone:x.phone}))).filter(x=>x.status==='FOLLOWUP'||x.status==='INCOMING_FOLLOWUP'||(x.followDate&&String(x.followDate).slice(0,10)===today));
          // enrich the most recent 120 with Fireberry record + last call summary (batched)
          const cand=fu.sort((a,b)=>String(b.lastCall||'').localeCompare(String(a.lastCall||''))).slice(0,120); const ids=[...new Set(cand.map(x=>x.fireberry_id).filter(Boolean))]; const recs={}; const notes={};
          for(let i=0;i<ids.length;i+=50){ const q=await fbQuery(env,{objecttype:1,page_size:200,page_number:1,fields:'accountid,accountname,statuscode,pcfsystemfield104,pcfsystemfield106,pcfsystemfield138,pcfsystemfield135,accounttypecode,createdon',query:ids.slice(i,i+50).map(x=>`(accountid = '${x}')`).join(' OR ')}); for(const r of q.Data||[]) recs[r.accountid]=r; }
          for(let i=0;i<ids.length;i+=40){ const q=await fbQuery(env,{objecttype:7,page_size:500,page_number:1,fields:'noteid,notetext,objectid,createdon',query:'('+ids.slice(i,i+40).map(x=>`(objectid = '${x}')`).join(' OR ')+") AND (subject = 'סיכום שיחה')",sort_by:'createdon',sort_type:'asc'}); for(const n of q.Data||[]) (notes[n.objectid]=notes[n.objectid]||[]).push(n); }
          for(const x of cand){ const r=recs[x.fireberry_id]||{}; const ns=notes[x.fireberry_id]||[]; const calls=ns.map(n=>{ const tx=String(n.notetext||''); const dur=(tx.match(/משך שיחה:\s*([\d:]+)/)||[])[1]||'0'; return {t:String(n.createdon).slice(0,19),rep:(tx.match(/נציג:\s*(.+)/)||[])[1]?.trim()||'',sec:mmss(dur),dur,ai:((tx.match(/סיכום AI:\s*([\s\S]+)/)||[])[1]||'').trim()}; }).filter(c=>c.sec>=15);
            const longest=calls.length?calls.reduce((a,b)=>b.sec>a.sec?b:a):null; const last=calls[calls.length-1]||null; const lv=lvCode(r.pcfsystemfield104); const ref=r.pcfsystemfield106||''; const content=new Set(); if(lv===1||tpCode(r.accounttypecode)===2||ref==='fb-hadracha') content.add('הדרכה חינמית'); if(lv===3||ref==='mini-course') content.add('מיני-קורס'); if(r.pcfsystemfield138||[4,5,6,7,8].includes(lv)) content.add('וובינר');
            let score=0; const why=[]; if(longest&&longest.sec>=600){ score+=3; why.push('שיחה של '+Math.floor(longest.sec/60)+" דק'"); } else if(longest&&longest.sec>=180){ score+=1; why.push('שיחה של '+Math.floor(longest.sec/60)+" דק'"); } if(calls.length>=2){ score+=1; why.push(calls.length+' שיחות'); } if(content.size>=2){ score+=2; why.push('2+ תכנים'); } if(r.pcfsystemfield138){ score+=1; why.push('נרשם לוובינר'); } if(x.followDate&&String(x.followDate).slice(0,10)===today){ score+=2; why.push('פולואפ להיום'); } if(x.comment){ score+=1; }
            Object.assign(x,{score,why:why.join(' · '),content:[...content],level:lvName(r.pcfsystemfield104),fb_status:stName(r.statuscode),created:r.createdon?String(r.createdon).slice(0,10):null,n_calls:calls.length,talk_min:Math.round(calls.reduce((s,c)=>s+c.sec,0)/6)/10,longest:longest?{rep:longest.rep,dur:longest.dur,t:longest.t,ai:longest.ai.slice(0,900)}:null,last_call:last?{rep:last.rep,dur:last.dur,t:last.t,ai:last.ai.slice(0,700)}:null}); }
          cand.sort((a,b)=>b.score-a.score||String(a.followDate||'9').localeCompare(String(b.followDate||'9')));
          return {rep:url.searchParams.get('rep'),today,total:fu.length,items:cand,generated:new Date().toISOString()};

}
async function campaigns(env){ const c=await tcGet(env,'/campaigns'); return Array.isArray(c)?c:[]; }
async function closesForRange(env,start,end,reasons){
  const camps=await campaigns(env); const out=[];
  await Promise.all(camps.map(async c=>{ const rows=await tcGet(env,`/tenants/${env.TOCHAT_TENANT}/campaigns/${c.id}/closedLeads?start=${start}&end=${end}`); for(const x of rows||[]) if(!reasons||reasons.includes(x.reason)) out.push({...x,campaign:c.name,campaignId:c.id}); }));
  return out.sort((a,b)=>String(a.timestamp).localeCompare(String(b.timestamp)));
}
function dedupeByPhone(rows){ const seen=new Map(); for(const x of rows){ const k=nine(x.displayPhone||x.phone); if(!seen.has(k)) seen.set(k,x); } return [...seen.values()]; }

// ── Claude (Sonnet) from the worker: nightly preparation of tomorrow's morning screens and day reviews ──
async function claude(env,system,user,schema,max=6000){ if(!env.ANTHROPIC_API_KEY) throw new Error('ANTHROPIC_API_KEY missing (npx wrangler secret put ANTHROPIC_API_KEY)'); const r=await fetch('https://api.anthropic.com/v1/messages',{method:'POST',headers:{'content-type':'application/json','x-api-key':env.ANTHROPIC_API_KEY,'anthropic-version':'2023-06-01','anthropic-beta':'server-side-fallback-2026-07-01'},body:JSON.stringify({model:'claude-sonnet-5',max_tokens:max,fallbacks:'default',output_config:{effort:'low',format:{type:'json_schema',schema}},system,messages:[{role:'user',content:user}]})}); const j=await r.json(); if(!r.ok) throw new Error('claude '+r.status+' '+(j.error&&j.error.message||'').slice(0,160)); const t=(j.content||[]).filter(b=>b.type==='text').map(b=>b.text).join(''); try{ return JSON.parse(t); }catch(e){ const m=t.match(/\{[\s\S]*\}/); if(m) return JSON.parse(m[0]); throw new Error('bad json'); } }
const MORNING_SCHEMA={type:'object',additionalProperties:false,required:['headline','items'],properties:{headline:{type:'string'},items:{type:'array',items:{type:'object',additionalProperties:false,required:['phone','name','priority','group','why','status','next_move','time','message'],properties:{phone:{type:'string'},name:{type:'string'},priority:{type:'integer'},group:{type:'string',enum:['פולואפ להיום','לבדוק הבוקר','איפה זה עומד','ליד שמחכה']},why:{type:'string'},status:{type:'string'},next_move:{type:'string',enum:['הודעה','שיחה','הודעה ואז שיחה']},time:{type:'string'},message:{type:'string'}}}}}};
const REVIEW_SCHEMA={type:'object',additionalProperties:false,required:['headline','day_score','how_was','wins','work_on','tomorrow','note'],properties:{headline:{type:'string'},day_score:{type:'integer'},how_was:{type:'string'},wins:{type:'array',items:{type:'string'}},work_on:{type:'array',items:{type:'string'}},tomorrow:{type:'array',items:{type:'string'}},note:{type:'string'}}};
const ilDate=(d=new Date())=>new Date(d.getTime()+3*3600e3).toISOString().slice(0,10);
async function prepareRep(env,repName,what){
  const out={rep:repName}; const today=ilDate(); const tomorrow=ilDate(new Date(Date.now()+864e5));
  if(what.includes('morning')){
    const d=await followupsFor(env,repName); let plans=[]; try{ plans=await sb(env,'followups?select=phone,name,plan,next_at&rep=eq.'+encodeURIComponent(repName)+'&status=eq.open&order=next_at.asc&limit=60'); }catch(e){}
    const byPhone={}; for(const x of d.items||[]) byPhone[x.phone]=x; for(const p of plans){ const k=p.phone; byPhone[k]=byPhone[k]||{phone:k,name:p.name,score:2,why:'תוכנית פולואפ',n_calls:0}; byPhone[k].plan=p.plan; byPhone[k].plan_next=p.next_at; byPhone[k].score=(byPhone[k].score||0)+2; }
    const items=Object.values(byPhone).sort((a,b)=>(b.score||0)-(a.score||0)).slice(0,40);
    const compact=items.map(x=>({phone:x.phone,name:x.name,score:x.score,why:x.why,followDate:x.followDate,comment:x.comment,fb_status:x.fb_status,content:x.content,n_calls:x.n_calls,talk_min:x.talk_min,last_call:x.last_call&&{rep:x.last_call.rep,t:x.last_call.t,dur:x.last_call.dur,summary:(x.last_call.ai||'').slice(0,350)},plan:x.plan&&{next_step:x.plan.next_step,unresolved:x.plan.unresolved,facts:x.plan.facts,interest_hook:x.plan.interest_hook,first_step:(x.plan.plan||[])[0]},plan_next:x.plan_next}));
    if(items.length){
      const plan=await claude(env,`אתה המאמן האישי של ${repName} במועדון האיקומרס של אביב מלכה (ליווי להקמת עסק איקומרס). בוקר: בנה לו את היום מהפולואפים והלידים שלו. עדיפות ללקוחות משמעותיים (שיחה ארוכה, כמה שיחות, 2+ תכנים, פולואפ שנקבע להיום, חסם פתוח שאפשר לפתור) על פני לידים שנדחו אחרי דקה. קבץ: "פולואפ להיום" (נקבע להיום: תזכורת חמה + הכנה), "לבדוק הבוקר" (לשאול אם צפה בתוכן / על פרט אישי שציין), "איפה זה עומד" (לקוחות טובים שנעלמו), "ליד שמחכה" (לא דיברו עדיין, אבל ההיסטוריה טובה). בחר 8-14 לקוחות. ההודעות: אישיות, אכפתיות, מתייחסות למשהו ספציפי שהלקוח אמר או עשה, קצרות, ירידות שורה, לכל היותר אימוג׳י אחד, בלי Markdown, חתומות "${repName}". לשון לפי שם הלקוח; אם לא בטוח, ניטרלי בלי לוכסנים. אל תמציא עובדות.`,`היום: ${tomorrow} (מסך הבוקר). הלקוחות (JSON):\n${JSON.stringify(compact)}`,MORNING_SCHEMA,9000);
      plan.total=d.total; plan.generated=new Date().toISOString(); plan.prepared_by='worker';
      for(const day of [today,tomorrow]) await sb(env,'morning_plans?on_conflict=rep,day','POST',{rep:repName,day,data:plan,updated_at:new Date().toISOString()},'resolution=merge-duplicates,return=minimal');
      out.morning={items:(plan.items||[]).length,total:d.total};
    } else out.morning={items:0,total:0};
  }
  if(what.includes('review')){
    const calls=await sb(env,'calls?select=id,started_at,duration_sec,score,outcome,stage_reached,summary_json,lead_name&rep=eq.'+encodeURIComponent(repName)+'&mode=neq.sim&started_at=gte.'+today+'T00:00:00&order=started_at.asc&limit=60');
    if(calls.length){
      let c=null; try{ const cc=await sb(env,'day_commits?select=data&rep=eq.'+encodeURIComponent(repName)+'&day=eq.'+today); c=cc[0]&&cc[0].data; }catch(e){}
      const L=calls; const r=await claude(env,`אתה המאמן האישי של ${repName} במועדון האיקומרס. סוף יום: סיכום כן, חם וישיר של היום שלו, מבוסס רק על הנתונים. בלי Markdown, בלי קלישאות. headline עד 12 מילים; day_score 1-10; how_was 3-4 משפטים; wins 2-3 עם דוגמה; work_on 3 עם הכלי מהפלייבוק; tomorrow 3 פעולות קונקרטיות (כולל מי לחזור אליו); note משפט אישי אחד.`,
        `התחייבות: ${c?c.fullCalls+' מלאות, '+c.closes+' סליקות. למה: '+(c.why||''):'לא התחייב'}.\nביצוע: ${L.length} שיחות, ${L.filter(x=>(x.duration_sec||0)>=420).length} מלאות, ${L.filter(x=>x.outcome==='closed').length} סליקות.\nהשיחות:\n${L.slice(0,25).map(x=>{ const sj=x.summary_json||{}; return `- ${String(x.started_at).slice(11,16)} ${Math.floor((x.duration_sec||0)/60)} דק' ציון ${x.score} ${x.outcome} שלב ${x.stage_reached}. ${x.lead_name?'ליד: '+x.lead_name+'. ':''}הדבר האחד: ${sj.one_thing||''}. ${(sj.unresolved||[]).length?'לא נפתר: '+sj.unresolved.join('; ')+'. ':''}${(sj.skipped||[]).length?'דילג: '+sj.skipped.join('; ')+'.':''}`; }).join('\n')}`,REVIEW_SCHEMA,2000);
      await sb(env,'day_reviews?on_conflict=rep,day','POST',{rep:repName,day:today,data:r,seen:false,updated_at:new Date().toISOString()},'resolution=merge-duplicates,return=minimal');
      out.review={calls:L.length,score:r.day_score};
    } else out.review={calls:0};
  }
  return out;
}
async function activeReps(env){ const names=new Set(); try{ for(const r of await sb(env,'calls?select=rep&started_at=gte.'+new Date(Date.now()-14*864e5).toISOString()+'&limit=1000')) if(r.rep&&r.rep!=='ללא שם') names.add(r.rep); }catch(e){} try{ for(const r of await sb(env,'tc_events?select=agent&ts=gte.'+new Date(Date.now()-7*864e5).toISOString()+'&limit=1000')) if(r.agent) names.add(r.agent); }catch(e){} const junk=/טסט|test|SYSTEM|בדיקה|ללא שם/i; const arr=[...names].filter(n=>n&&!junk.test(n)).sort((a,b)=>b.length-a.length); const kept=[]; for(const n of arr){ const nn=normName(n); if(kept.some(k=>{ const kk=normName(k); return kk!==nn&&(kk.includes(nn)||nn.includes(kk)); })) continue; kept.push(n); } return kept; }
async function pendingReps(env,what){ const reps=await activeReps(env); const today=ilDate(); const tomorrow=ilDate(new Date(Date.now()+864e5)); const out=[];
  let plans=[],reviews=[],withCalls=new Set(); try{ plans=await sb(env,'morning_plans?select=rep,day,updated_at&day=eq.'+tomorrow); }catch(e){} try{ reviews=await sb(env,'day_reviews?select=rep,day&day=eq.'+today); }catch(e){} try{ for(const c of await sb(env,'calls?select=rep&mode=neq.sim&started_at=gte.'+today+'T00:00:00&limit=1000')) withCalls.add(c.rep); }catch(e){}
  for(const r of reps){ const needM=what.includes('morning')&&!plans.some(p=>p.rep===r&&(Date.now()-new Date(p.updated_at).getTime())<10*3600e3); const needR=what.includes('review')&&withCalls.has(r)&&!reviews.some(x=>x.rep===r); if(needM||needR) out.push({rep:r,what:[needR?'review':null,needM?'morning':null].filter(Boolean).join(',')}); }
  return {reps,pending:out}; }
async function prepareNext(env,what,max=1){ const {reps,pending}=await pendingReps(env,what); const results=[]; for(const p of pending.slice(0,max)){ try{ results.push(await prepareRep(env,p.rep,p.what)); }catch(e){ results.push({rep:p.rep,error:String(e.message||e).slice(0,200)}); } } return {reps:reps.length,pending:pending.length,done:results}; }

export default {
  async scheduled(event,env,ctx){ const h=new Date(event.scheduledTime).getUTCHours(); const what=h>=15?'review,morning':'morning'; ctx.waitUntil(prepareNext(env,what,1)); },
  async fetch(req,env){
    const h=cors(req); if(req.method==='OPTIONS') return new Response(null,{status:204,headers:h});
    const url=new URL(req.url); const key=req.headers.get('x-app-key')||url.searchParams.get('key')||'';
    if(url.pathname==='/health') return json({ok:true},200,h);
    if(url.pathname==='/diag'){ if(!env.APP_KEY||!safeEq(key,env.APP_KEY)) return json({error:'unauthorized'},401,h); const k=env.SUPABASE_KEY||''; let probe=null; try{ const r=await fetch(env.SUPABASE_URL.replace(/\/+$/,'')+'/rest/v1/tc_events?select=id&limit=1',{headers:{apikey:k,...(k.startsWith('eyJ')?{Authorization:'Bearer '+k}:{})}}); probe=r.status+' '+(await r.text()).slice(0,160); const r2=await fetch(env.SUPABASE_URL.replace(/\/+$/,'')+'/rest/v1/calls?select=say_a,readiness,whisper,lead_phone&limit=1',{headers:{apikey:k,...(k.startsWith('eyJ')?{Authorization:'Bearer '+k}:{})}}); probe+=' | calls columns: '+r2.status+' '+(await r2.text()).slice(0,120); for(const t of ['followups','day_reviews','lead_journeys','daily_digests','day_commits','morning_plans','tc_calls','tc_active']){ const r3=await fetch(env.SUPABASE_URL.replace(/\/+$/,'')+'/rest/v1/'+t+'?select=*&limit=1',{headers:{apikey:k,...(k.startsWith('eyJ')?{Authorization:'Bearer '+k}:{})}}); probe+=' | '+t+': '+r3.status; } }catch(e){ probe=String(e.message); }
      return json({supabase_url:env.SUPABASE_URL,key_prefix:k.slice(0,15),key_len:k.length,key_has_ws:/\s/.test(k),key_charset_ok:/^[A-Za-z0-9_\-.]+$/.test(k),probe},200,h); }
    const hm=url.pathname.match(/^\/hook\/([a-f0-9]{24})\/([A-Za-z]+)\/?$/);
    if(hm){ if(hm[1]!==await hookToken(env)) return json({error:'bad token'},401,h);
      let body=null; const ct=req.headers.get('content-type')||''; try{ body=ct.includes('json')?await req.json():Object.fromEntries((await req.formData()).entries()); }catch(e){ body={raw:await req.text().catch(()=>'')}; }
      const ev={...extractCall(hm[2],body),ts:new Date().toISOString(),raw:JSON.stringify(body).slice(0,4000)};
      const ak=normName(ev.agent)||'_'; const isEnd=/CallEnded|CallRecordCreated|AISummary|Done|Followup|SubStatus/i.test(ev.type); const isStart=!!ev.phone&&/Outgoing|Incoming|Call/i.test(ev.type)&&!isEnd;
      const callRec=(ev.phone&&/CallEnded|CallRecordCreated|AISummary/i.test(ev.type))?{phone:ev.phone,t:ev.ts,type:ev.type,rep:ev.agent,sec:ev.duration||0,rec:ev.recording||'',ai:ev.summary||'',name:ev.name||'',campaign:ev.campaign||''}:null;
      if(sbReady(env)){
        try{ await sb(env,'tc_events','POST',{ts:ev.ts,type:ev.type,phone:ev.phone,agent:ev.agent,name:ev.name,campaign:ev.campaign,external_id:ev.externalId||null,raw:body},'return=minimal'); }catch(e){}
        try{ if(isStart) await sb(env,'tc_active?on_conflict=agent_key','POST',{agent_key:ak,phone:ev.phone,agent:ev.agent,name:ev.name,campaign:ev.campaign,external_id:ev.externalId||null,type:ev.type,ts:ev.ts},'resolution=merge-duplicates,return=minimal');
             else if(isEnd&&ak!=='_') await sb(env,'tc_active?agent_key=eq.'+encodeURIComponent(ak)+(ev.phone?'&phone=eq.'+encodeURIComponent(ev.phone):''),'DELETE'); }catch(e){}
        try{ if(callRec) await sb(env,'tc_calls','POST',callRec,'return=minimal'); }catch(e){}
      }else{ // fallback: KV (limited to 1,000 writes/day on the free plan)
        const idxRaw=await env.CACHE.get('active:index'); const idx=idxRaw?JSON.parse(idxRaw):{};
        if(isEnd){ if(idx[ak]&&(!ev.phone||idx[ak].phone===ev.phone)) delete idx[ak]; } else if(isStart){ idx[ak]={phone:ev.phone,agent:ev.agent,name:ev.name,campaign:ev.campaign,externalId:ev.externalId||'',type:ev.type,ts:ev.ts}; }
        await kvPutSafe(env,'active:index',JSON.stringify(idx),{expirationTtl:6*3600});
        if(callRec){ const pk='calls:'+nine(ev.phone); const pa=JSON.parse((await env.CACHE.get(pk))||'[]'); pa.push({t:ev.ts.slice(0,19),type:ev.type,rep:ev.agent,sec:callRec.sec,rec:callRec.rec,ai:callRec.ai}); await kvPutSafe(env,pk,JSON.stringify(pa.slice(-60)),{expirationTtl:120*86400}); }
      }
      return json({ok:true,parsed:{type:ev.type,phone:ev.phone,agent:ev.agent,duration:ev.duration,hasSummary:!!ev.summary},store:sbReady(env)?'supabase':'kv'},200,h); }
// ── interviews calendar (password-gated, no app key: the public page holds no secrets) ──
    if(url.pathname.startsWith('/cal/')){
      const pw=req.headers.get('x-cal-pw')||url.searchParams.get('pw')||''; const role=(env.CAL_ADMIN_PW&&safeEq(pw,env.CAL_ADMIN_PW))?'admin':(env.CAL_PW&&safeEq(pw,env.CAL_PW))?'sales':null;
      if(!role) return json({error:'password'},401,h); if(!sbReady(env)) return json({error:'no supabase'},500,h);
      try{
      if(url.pathname==='/cal/list'){ const from=url.searchParams.get('from')||new Date(Date.now()-30*864e3).toISOString(); const to=url.searchParams.get('to')||new Date(Date.now()+120*864e3).toISOString();
        let rows=await sb(env,'interviews?select=*&order=meet_at.asc&limit=1000&meet_at=gte.'+encodeURIComponent(from)+'&meet_at=lte.'+encodeURIComponent(to));
        const pending=await sb(env,'interviews?select=*&status=eq.pending&order=meet_at.asc&limit=300');
        if(role==='sales') rows=rows.filter(r=>r.status==='approved');
        return json({role,rows,pending:role==='admin'?pending:[],pendingCount:pending.length},200,h); }
      if(url.pathname==='/cal/decide'&&req.method==='POST'){ if(role!=='admin') return json({error:'admin only'},403,h); const b=await req.json().catch(()=>({})); if(!b.id||!['pending','approved','rejected','moved'].includes(b.status)) return json({error:'id/status'},400,h);
        await sb(env,'interviews?id=eq.'+encodeURIComponent(b.id),'PATCH',{status:b.status,manager_note:b.note||null,decided_by:b.by||'מנהל המסלול',decided_at:new Date().toISOString(),updated_at:new Date().toISOString()},'return=minimal'); return json({ok:true},200,h); }
      return json({error:'not found'},404,h); }catch(e){ const m=String(e.message||e); return json({error:/PGRST205|does not exist/.test(m)?'טבלת interviews עוד לא קיימת ב-Supabase. הרץ את supabase.sql ב-SQL Editor.':m},500,h); } }
    if(!env.APP_KEY||!safeEq(key,env.APP_KEY)) return json({error:'unauthorized'},401,h);
    const cache=async(k,ttl,fn)=>{ if(url.searchParams.get('fresh')!=='1'){ try{ const v=await env.CACHE.get(k); if(v) return JSON.parse(v); }catch(e){} } const d=await fn(); await kvPutSafe(env,k,JSON.stringify(d),{expirationTtl:ttl}); return d; };
    try{
      if(url.pathname==='/campaigns') return json(await campaigns(env),200,h);
      if(url.pathname==='/prepare'){ const rep=url.searchParams.get('rep')||''; const what=url.searchParams.get('what')||'morning,review'; if(!rep) return json({error:'rep'},400,h); if(rep==='all') return json(await prepareNext(env,what,1),200,h); if(rep==='status') return json(await pendingReps(env,what),200,h); try{ return json(await prepareRep(env,rep,what),200,h); }catch(e){ return json({rep,error:String(e.message||e).slice(0,300)},500,h); } }
      if(url.pathname==='/reps') return json({reps:await activeReps(env)},200,h);

      if(url.pathname==='/mycalls'){ const rp=url.searchParams.get('rep')||''; const d=url.searchParams.get('date')||ilDate(); if(!rp||!sbReady(env)) return json({calls:[]},200,h); const next=new Date(new Date(d+'T00:00:00Z').getTime()+864e5).toISOString().slice(0,10);
        const rows=await sb(env,`tc_calls?select=phone,t,type,rep,sec,rec,ai,name,campaign&t=gte.${d}T00:00:00&t=lt.${next}T00:00:00&order=t.asc&limit=2000`); const rn=normName(rp); const mine=rows.filter(r=>{ const k=normName(r.rep); return k&&(k===rn||k.includes(rn)||rn.includes(k)); });
        const agg={}; for(const e of mine){ const k=nine(e.phone)+'|'+String(e.t).slice(0,13); const m=agg[k]||(agg[k]={phone:'0'+nine(e.phone),t:String(e.t).slice(0,19),rep:e.rep,name:e.name||'',campaign:e.campaign||'',sec:0,rec:'',ai:''}); if(e.sec) m.sec=Math.max(m.sec,e.sec); if(e.ai) m.ai=e.ai; if(e.rec) m.rec=e.rec; if(e.name) m.name=e.name; }
        return json({rep:rp,date:d,calls:Object.values(agg).filter(c=>c.sec>=15||c.ai).sort((a,b)=>a.t.localeCompare(b.t))},200,{...h,'Cache-Control':'no-store'}); }
      if(url.pathname==='/lastcall'){ const ph=nine(url.searchParams.get('phone')); const since=url.searchParams.get('since')||new Date(Date.now()-3600e3).toISOString(); if(ph.length!==9||!sbReady(env)) return json({call:null},200,h);
        const rows=await sb(env,`tc_calls?select=phone,t,type,rep,sec,rec,ai,name&phone=eq.0${ph}&t=gte.${encodeURIComponent(since)}&order=t.desc&limit=10`); const m={t:null,rep:'',sec:0,rec:'',ai:'',name:''}; for(const e of rows){ if(!m.t) m.t=String(e.t).slice(0,19); if(e.sec) m.sec=Math.max(m.sec,e.sec); if(e.ai&&!m.ai) m.ai=e.ai; if(e.rec&&!m.rec) m.rec=e.rec; if(e.rep) m.rep=e.rep; if(e.name) m.name=e.name; }
        return json({call:m.t?m:null},200,{...h,'Cache-Control':'no-store'}); }
      if(url.pathname==='/calls'){ const ph=url.searchParams.get('phone'); const rp=url.searchParams.get('rep'); let q='calls?select=id,rep,started_at,ended_at,duration_sec,status,mode,score,outcome,stage_reached,stage,readiness,bottom_line,to_solve,solved,barriers,facts,summary,summary_json,events,ammo,transcript,checks,lead_name,lead_phone&order=started_at.desc&limit='+(parseInt(url.searchParams.get('limit'))||5); if(ph) q+='&lead_phone=eq.0'+nine(ph); if(rp) q+='&rep=eq.'+encodeURIComponent(rp); if(url.searchParams.get('since')) q+='&started_at=gte.'+url.searchParams.get('since'); return json(await sb(env,q),200,h); }
      if(url.pathname==='/diag/claude'){ try{ const r=await fetch('https://api.anthropic.com/v1/messages',{method:'POST',headers:{'content-type':'application/json','x-api-key':env.ANTHROPIC_API_KEY||'','anthropic-version':'2023-06-01'},body:JSON.stringify({model:'claude-haiku-4-5-20251001',max_tokens:5,messages:[{role:'user',content:'hi'}]})}); const j=await r.json(); return json({ok:r.ok,status:r.status,error:j.error&&j.error.message,key_prefix:(env.ANTHROPIC_API_KEY||'').slice(0,14),key_len:(env.ANTHROPIC_API_KEY||'').length},200,h); }catch(e){ return json({ok:false,error:String(e.message)},200,h); } }
      if(url.pathname==='/hooks/purge'){ const agent=url.searchParams.get('agent')||''; if(!agent||!sbReady(env)) return json({error:'agent'},400,h); for(const t of ['tc_events','tc_calls']) await sb(env,t+'?'+(t==='tc_events'?'agent':'rep')+'=eq.'+encodeURIComponent(agent),'DELETE'); await sb(env,'tc_active?agent=eq.'+encodeURIComponent(agent),'DELETE'); return json({ok:true},200,h); }
      if(url.pathname==='/hooks/log'){ let events=[]; if(sbReady(env)){ try{ events=(await sb(env,'tc_events?select=ts,type,phone,agent,name,raw&order=ts.desc&limit=40')).map(e=>({...e,raw:JSON.stringify(e.raw).slice(0,4000)})); }catch(e){ events=[{error:String(e.message)}]; } } return json({token:await hookToken(env),store:sbReady(env)?'supabase':'kv',events},200,h); }
      if(url.pathname==='/active'){ const rep=normName(url.searchParams.get('rep')); let idx={}; if(sbReady(env)){ try{ for(const r of await sb(env,'tc_active?select=*&ts=gt.'+new Date(Date.now()-2*3600e3).toISOString())) idx[r.agent_key]={phone:r.phone,agent:r.agent,name:r.name,campaign:r.campaign,externalId:r.external_id||'',type:r.type,ts:r.ts}; }catch(e){} } else { const idxRaw=await env.CACHE.get('active:index'); idx=idxRaw?JSON.parse(idxRaw):{}; } const fresh=e=>e&&(Date.now()-new Date(e.ts).getTime())<2*3600e3;
        let hit=null; if(rep){ hit=idx[rep]||Object.entries(idx).find(([k,v])=>k!=='_last'&&k!=='_'&&(k.includes(rep)||rep.includes(k)))?.[1]||null; }
        if(!hit&&rep){ const first=rep.slice(0,3); hit=Object.entries(idx).find(([k])=>k!=='_last'&&k!=='_'&&k.startsWith(first))?.[1]||null; }
        return json({active:fresh(hit)?hit:null,agents:Object.keys(idx).filter(k=>k!=='_last'&&k!=='_')},200,{...h,'Cache-Control':'no-store'}); }
      if(url.pathname==='/lead'){ const ph=nine(url.searchParams.get('phone')); if(ph.length!==9) return json({error:'phone'},400,h); return json(await fetchLead(env,ph,null),200,{...h,'Cache-Control':'private, max-age=600'}); }
      if(url.pathname==='/closes'){ const m=url.searchParams.get('month')||''; if(!/^\d{4}-\d{2}$/.test(m)) return json({error:'month'},400,h); const [y,mo]=m.split('-').map(Number); const last=new Date(Date.UTC(y,mo,0)).getUTCDate(); const cur=new Date().toISOString().slice(0,7)===m;
        return json(await cache('closes:'+m,cur?600:21600,async()=>dedupeByPhone(await closesForRange(env,`${m}-01`,`${m}-${String(last).padStart(2,'0')}`,['CLOSED'])).map(x=>({phone:'0'+nine(x.displayPhone),name:x.fullName||'',closed:String(x.timestamp).replace('Z','').slice(0,19),closer:x.repName||'',reason:(x.subReason&&x.subReason.name)||'',note:x.note||'',campaign:x.campaign,fireberry_id:x.externalId||null}))),200,h); }
      if(url.pathname==='/daily'){ const d=url.searchParams.get('from')||url.searchParams.get('date')||new Date(Date.now()-864e5).toISOString().slice(0,10); const dTo=url.searchParams.get('to')||d; if(!/^\d{4}-\d{2}-\d{2}$/.test(d)||!/^\d{4}-\d{2}-\d{2}$/.test(dTo)||dTo<d) return json({error:'date'},400,h);
        return json(await cache('daily:'+d+':'+dTo,900,async()=>{
          const next=new Date(new Date(dTo+'T00:00:00Z').getTime()+864e5).toISOString().slice(0,10);
          const notesAll=[]; for(let pg=1;pg<=6;pg++){ const q=await fbQuery(env,{objecttype:7,page_size:500,page_number:pg,fields:'noteid,notetext,objectid,createdon',query:`(subject = 'סיכום שיחה') AND (createdon >= '${d}') AND (createdon < '${next}')`,sort_by:'createdon',sort_type:'asc'}); notesAll.push(...(q.Data||[])); if((q.Data||[]).length<500) break; }
          const notesQ={Data:notesAll};
          const [outcomesRaw,camps]=await Promise.all([closesForRange(env,d,dTo,null), campaigns(env)]);
          const calls=(notesQ.Data||[]).map(n=>{ const tx=String(n.notetext||''); return {t:String(n.createdon).slice(0,19),fireberry_id:n.objectid,rep:(tx.match(/נציג:\s*(.+)/)||[])[1]?.trim()||'',dur:(tx.match(/משך שיחה:\s*([\d:]+)/)||[])[1]||'',sec:mmss((tx.match(/משך שיחה:\s*([\d:]+)/)||[])[1]),rec:(tx.match(/קישור להקלטה:\s*(\S+)/)||[])[1]||'',ai:((tx.match(/סיכום AI:\s*([\s\S]+)/)||[])[1]||'').trim().slice(0,2500)}; });
          // names/phones for the called records (one query, up to 100 ids)
          const ids=[...new Set(calls.map(c=>c.fireberry_id))].slice(0,400); const recs={};
          for(let i=0;i<ids.length;i+=50){ const q=await fbQuery(env,{objecttype:1,page_size:200,page_number:1,fields:'accountid,accountname,telephone1,statuscode,pcfsystemfield104,pcfsystemfield106,accounttypecode,createdon,ownername',query:ids.slice(i,i+50).map(x=>`(accountid = '${x}')`).join(' OR ')}); for(const r of q.Data||[]) recs[r.accountid]=r; }
          for(const c of calls){ const r=recs[c.fireberry_id]; if(r){ c.name=r.accountname; c.phone='0'+nine(r.telephone1); c.fb_status=stName(r.statuscode); c.level=lvName(r.pcfsystemfield104); c.ref=REFN[r.pcfsystemfield106]||r.pcfsystemfield106||''; c.type=tpName(r.accounttypecode); c.created=String(r.createdon).slice(0,10); c.owner=r.ownername||''; } }
          const outcomes=outcomesRaw.filter(x=>{ const t=String(x.timestamp).slice(0,10); return t>=d&&t<=dTo; }).map(x=>({t:String(x.timestamp).replace('Z','').slice(0,19),phone:'0'+nine(x.displayPhone),name:x.fullName||'',rep:x.repName||'',reason:x.reason,sub:(x.subReason&&x.subReason.name)||'',note:x.note||'',campaign:x.campaign,fireberry_id:x.externalId||null}));
          // open leads touched that day (last call on that date)
          const touched=[]; await Promise.all(camps.filter(c=>c.status!=='OFF'&&c.active!==false).map(async c=>{ const rows=await tcGet(env,`/tenants/${env.TOCHAT_TENANT}/campaigns/${c.id}/openLeads`); for(const l of rows||[]) if(l.lastCall&&String(l.lastCall).slice(0,10)>=d&&String(l.lastCall).slice(0,10)<=dTo) touched.push({t:String(l.lastCall).replace('Z','').slice(0,19),phone:'0'+nine(l.displayPhone||l.phone),name:l.fullName||'',rep:l.repName||l.followByName||'',status:l.status,sub:l.subStatusName||l.subStatus||'',attempts:l.callAttempts||0,followDate:l.followDate||null,comment:l.followupComment||'',campaign:c.name,fireberry_id:l.externalId||null,notes:(l.notes||'').slice(0,300)}); }));
          try{ let hooks=[]; if(sbReady(env)){ hooks=(await sb(env,`tc_calls?select=phone,t,type,rep,sec,rec,ai,name,campaign&t=gte.${d}T00:00:00&t=lt.${next}T00:00:00&order=t.asc&limit=5000`)).map(e=>({...e,t:String(e.t).slice(0,19)})); }
            const msx=t=>new Date(String(t).replace(' ','T')).getTime(); const dup=(e)=>calls.some(c=>c.phone&&nine(c.phone)===nine(e.phone)&&normName(c.rep)===normName(e.rep)&&Math.abs(msx(c.t)-msx(e.t))<=4*3600e3); hooks=hooks.filter(e=>{ if(dup(e)){ const c=calls.find(c=>c.phone&&nine(c.phone)===nine(e.phone)&&normName(c.rep)===normName(e.rep)&&Math.abs(msx(c.t)-msx(e.t))<=4*3600e3); if(c&&!c.rec&&e.rec) c.rec=e.rec; if(c&&!c.ai&&e.ai) c.ai=e.ai; return false; } return true; }); const have=new Set(calls.map(c=>c.t.slice(0,13)+'|'+normName(c.rep))); const agg={};
            for(const e of hooks){ const k=e.t.slice(0,13)+'|'+normName(e.rep)+'|'+e.phone; if(have.has(e.t.slice(0,13)+'|'+normName(e.rep))) continue; const m=agg[k]||(agg[k]={t:e.t,rep:e.rep,phone:e.phone,name:e.name,sec:0,dur:'',rec:'',ai:'',src:'webhook',campaign:e.campaign}); if(e.sec) m.sec=Math.max(m.sec,e.sec); if(e.ai) m.ai=e.ai; if(e.rec) m.rec=e.rec; }
            for(const m of Object.values(agg)){ if(m.sec<15&&!m.ai) continue; m.dur=String(Math.floor(m.sec/60)).padStart(2,'0')+':'+String(m.sec%60).padStart(2,'0'); calls.push(m); } calls.sort((a,b)=>a.t.localeCompare(b.t)); }catch(e){}
          return {date:d,from:d,to:dTo,calls,outcomes,touched,generated:new Date().toISOString()};
        }),200,h); }
      if(url.pathname==='/rescue'){ const days=Math.min(60,Math.max(1,parseInt(url.searchParams.get('days')||'7'))); const to=new Date().toISOString().slice(0,10); const from=new Date(Date.now()-days*864e5).toISOString().slice(0,10);
        return json(await cache('rescue:'+from+':'+to,1800,async()=>{
          const raw=await closesForRange(env,from,to,['IRRELEVANT','CALL_ATTEMPTS_EXCEEDED']); const DNC=/לא להתקשר|שם פרטים בטעות|לא נרשם|מספר שגוי|טעות/;
          const cand=dedupeByPhone(raw.filter(x=>!DNC.test((x.subReason&&x.subReason.name)||'')).sort((a,b)=>String(b.timestamp).localeCompare(String(a.timestamp)))).slice(0,400);
          const ids=[...new Set(cand.map(x=>x.externalId).filter(Boolean))]; const recs={}; const notes={};
          for(let i=0;i<ids.length;i+=50){ const q=await fbQuery(env,{objecttype:1,page_size:200,page_number:1,fields:'accountid,accountname,telephone1,statuscode,pcfsystemfield104,pcfsystemfield106,pcfsystemfield138,pcfsystemfield135,accounttypecode,createdon,ownername',query:ids.slice(i,i+50).map(x=>`(accountid = '${x}')`).join(' OR ')}); for(const r of q.Data||[]) recs[r.accountid]=r; }
          for(let i=0;i<ids.length;i+=40){ const q=await fbQuery(env,{objecttype:7,page_size:500,page_number:1,fields:'noteid,notetext,objectid,createdon',query:'('+ids.slice(i,i+40).map(x=>`(objectid = '${x}')`).join(' OR ')+") AND (subject = 'סיכום שיחה')",sort_by:'createdon',sort_type:'asc'}); for(const n of q.Data||[]) (notes[n.objectid]=notes[n.objectid]||[]).push(n); }
          const out=[];
          for(const x of cand){ const r=recs[x.externalId]||{}; const ns=notes[x.externalId]||[]; if(/לקוח סגר|תשלום חלקי/.test(stName(r.statuscode))) continue;
            const calls=ns.map(n=>{ const tx=String(n.notetext||''); const dur=(tx.match(/משך שיחה:\s*([\d:]+)/)||[])[1]||'0'; return {t:String(n.createdon).slice(0,19),rep:(tx.match(/נציג:\s*(.+)/)||[])[1]?.trim()||'',sec:mmss(dur),dur,ai:((tx.match(/סיכום AI:\s*([\s\S]+)/)||[])[1]||'').trim()}; }).filter(c=>c.sec>=15);
            const longest=calls.length?calls.reduce((a,b)=>b.sec>a.sec?b:a):null; const lv=lvCode(r.pcfsystemfield104); const ref=r.pcfsystemfield106||''; const tcode=tpCode(r.accounttypecode); const rep135=yes(r.pcfsystemfield135)?2:0;
            const content=new Set(); if(lv===1||tcode===2||ref==='fb-hadracha') content.add('הדרכה חינמית'); if(lv===3||ref==='mini-course') content.add('מיני-קורס'); if(r.pcfsystemfield138||[4,5,6,7,8].includes(lv)) content.add('וובינר');
            let score=0; const why=[]; if(longest&&longest.sec>=600){ score+=3; why.push('שיחה של '+Math.floor(longest.sec/60)+" דק'"); } else if(longest&&longest.sec>=180){ score+=1; why.push('שיחה של '+Math.floor(longest.sec/60)+" דק'"); }
            if(calls.length>=2){ score+=1; why.push(calls.length+' שיחות'); } if(content.size>=2){ score+=2; why.push('צרך '+content.size+' תכנים'); } if(r.pcfsystemfield138){ score+=1; why.push('נרשם לוובינר'); } if(rep135===2){ score+=1; why.push('השאיר פרטים שוב'); } if([4,6].includes(lv)){ score+=1; why.push('❤️/היה בוובינר'); }
            if(score<2) continue;
            const last=calls[calls.length-1]||null;
            out.push({phone:'0'+nine(x.displayPhone),name:x.fullName||r.accountname||'',fireberry_id:x.externalId||null,marked:String(x.timestamp).replace('Z','').slice(0,19),marked_by:x.repName||'',reason:x.reason,sub:(x.subReason&&x.subReason.name)||'',note:x.note||'',campaign:x.campaign,score,why:why.join(' · '),content:[...content],level:lvName(r.pcfsystemfield104),fb_status:stName(r.statuscode),owner:r.ownername||'',created:r.createdon?String(r.createdon).slice(0,10):null,n_calls:calls.length,talk_min:Math.round(calls.reduce((s,c)=>s+c.sec,0)/6)/10,longest:longest?{rep:longest.rep,dur:longest.dur,t:longest.t,ai:longest.ai.slice(0,900)}:null,last_call:last?{rep:last.rep,dur:last.dur,t:last.t,ai:last.ai.slice(0,700)}:null}); }
          out.sort((a,b)=>b.score-a.score||String(b.marked).localeCompare(String(a.marked)));
          return {from,to,candidates:out.slice(0,120),scanned:cand.length,generated:new Date().toISOString()};
        }),200,h); }
      if(url.pathname==='/followups'){ const rep=normName(url.searchParams.get('rep')); if(!rep) return json({error:'rep'},400,h); return json(await cache('followups:'+rep,600,()=>followupsFor(env,url.searchParams.get('rep'))),200,h); }
      if(url.pathname==='/rescue/add'&&req.method==='POST'){ const body=await req.json().catch(()=>({})); const name=body.campaign||'להציל מהמתים רלוונטיים'; const camps=await campaigns(env); const c=camps.find(x=>(x.name||'').trim()===name.trim())||camps.find(x=>(x.name||'').includes(name)); if(!c) return json({error:'campaign not found: '+name,campaigns:camps.map(x=>x.name)},404,h);
        const customers=(body.leads||[]).slice(0,500).map(l=>({firstName:String(l.name||'').slice(0,60),phone:l.phone,externalId:l.fireberry_id||undefined,notes:String(l.notes||'').slice(0,900),audience:'rescue'}));
        const r=await fetch(TC+`/tenants/${env.TOCHAT_TENANT}/campaigns/${c.id}/customers`,{method:'POST',headers:{Authorization:'Basic '+btoa(env.TOCHAT_TENANT+':'+env.TOCHAT_API_KEY),'content-type':'application/json'},body:JSON.stringify({customers,dataSource:'LiveCoach rescue'})}); const j=await r.json().catch(()=>({})); return json({ok:r.ok,status:r.status,campaign:c.name,result:j},r.ok?200:502,h); }
      return json({error:'not found'},404,h);
    }catch(e){ return json({error:String(e&&e.message||e)},500,h); }
  }
};
