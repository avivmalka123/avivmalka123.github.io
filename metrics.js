/* LiveCoach metrics engine — one implementation for the browser (manager board) and for offline precompute (node).
   Input: three ToChat/Fireberry exports as arrays of row objects keyed by the original Hebrew headers, plus spend/revenue inputs.
   Output: a month document with KPIs, funnel/rep/channel tables, per-lead journeys (deduplicated by phone) and rule-based insights. */
(function(root){
  const FUNNEL_LABEL={webinar:'משפך וובינר',training:'משפך הדרכה חינמית',direct:'ליד ישיר',course48:'קורס 48 ש״ח',unknown:'לא משויך'};
  const normPhone=p=>{ const d=String(p==null?'':p).replace(/\D/g,''); return d.length>=9?d.slice(-9):''; };
  const secs=t=>{ if(t==null) return 0; if(typeof t==='number') return Math.round(t*86400); const p=String(t).split(':').map(x=>parseInt(x,10)); if(p.some(isNaN)) return 0; return p.length===3?p[0]*3600+p[1]*60+p[2]:p.length===2?p[0]*60+p[1]:0; };
  const parseDate=v=>{ if(v==null||v==='') return null; if(v instanceof Date) return isNaN(v)?null:v; if(typeof v==='number'){ const d=new Date(Math.round((v-25569)*86400*1000)); return isNaN(d)?null:d; }
    const s=String(v).trim(); let m=s.match(/^(\d{1,2})\/(\d{1,2})\/(\d{4})(?:\s+(\d{1,2}):(\d{2}))?/); if(m) return new Date(+m[3],+m[2]-1,+m[1],+(m[4]||0),+(m[5]||0)); const d=new Date(s); return isNaN(d)?null:d; };
  const iso=d=>d?new Date(d.getTime()-d.getTimezoneOffset()*60000).toISOString().slice(0,16):null;
  const clean=v=>{ const s=String(v==null?'':v).trim(); return (s==='-'||s==='nan'||s==='undefined')?'':s; };
  const field=(row,names)=>{ for(const n of names){ if(row[n]!=null&&row[n]!=='') return row[n]; } const keys=Object.keys(row); for(const n of names){ const k=keys.find(k=>k.replace(/\s+/g,'').includes(n.replace(/\s+/g,''))); if(k&&row[k]!=null&&row[k]!=='') return row[k]; } return ''; };
  const noteField=(note,label)=>{ const m=String(note||'').match(new RegExp(label+'[ \\t]*:[ \\t]*([^\\n]*)')); return m?clean(m[1]):''; };
  function funnelOf(sug,ref,level,reason){
    const r=clean(reason); if(/webinar|וובינר/i.test(r)) return 'webinar'; if(/הדרכה/.test(r)) return 'training'; if(/48/.test(r)) return 'course48';
    const s=clean(sug); if(/וובינר/.test(s)) return 'webinar'; if(/aviv crm/i.test(s)) return 'training';
    const f=clean(ref); if(/ליד ישיר|direct/i.test(f)) return 'direct';
    const l=clean(level); if(/webinar|וובינר/i.test(l)) return 'webinar';
    if(/hadracha|hadraha|had\b|balah|mini-course|new-ad|fb-ads|tiktok|youtube|insta|seo|vidalytics|kajabi/i.test(f)) return 'training';
    return 'unknown';
  }
  const channelOf=ref=>{ const f=clean(ref).toLowerCase(); if(!f) return 'ללא REF'; if(/^fb|facebook/.test(f)) return 'Facebook'; if(/tiktok/.test(f)) return 'TikTok'; if(/youtube/.test(f)) return 'YouTube'; if(/insta/.test(f)) return 'Instagram'; if(/seo|google/.test(f)) return 'Google/SEO'; if(/vidalytics|kajabi|mini-course|webinar/.test(f)) return 'תוכן (וובינר/מיני-קורס)'; if(/ליד ישיר|direct/.test(f)) return 'ליד ישיר'; if(/^\d+$/.test(f)) return 'קוד מספרי'; return f; };
  const statusRank={'עסקה נסגרה':4,'Follow Up':3,'ליד חדש':2,'לא רלוונטי':1};

  function build(input){
    const month=input.month; const spend=input.spend||{}; const revenue=input.revenue||{};
    const A=input.general||[], B=input.calls||[], C=input.fireberry||[];
    const leads={};
    const L=ph=>leads[ph]||(leads[ph]={phone:ph,name:'',funnel:'unknown',ref:'',channel:'',level:'',created:null,fb_status:'',fb_manager:'',tc_status:'',reason:'',campaigns:new Set(),calls:0,talk:0,first_call:null,last_call:null,reps:{},closer:'',close_reason:'',close_funnel:'',closed:false,closed_at:null,summaries:[],irrelevant_reason:''});
    // Fireberry: funnel, ref, level, created, status
    for(const r of C){ const ph=normPhone(field(r,['טלפון ראשי','טלפון'])); if(!ph) continue; const l=L(ph);
      l.name=l.name||clean(field(r,['שם לקוח'])); const sug=clean(field(r,['סוג לקוח'])), ref=clean(field(r,['REF'])), lvl=clean(field(r,['רמת הליד']));
      if(sug) l._sug=sug; if(ref) l.ref=l.ref||ref; if(lvl) l.level=lvl; const cr=parseDate(field(r,['נוצר בתאריך'])); if(cr&&(!l.created||cr<l.created)) l.created=cr;
      l.fb_status=clean(field(r,['סטטוס']))||l.fb_status; l.fb_manager=clean(field(r,['מנהל לקוח']))||l.fb_manager; }
    // General (ToChat leads): creation note carries REF / סוג לקוח / רמת הליד
    for(const r of A){ const ph=normPhone(field(r,['טלפון'])); if(!ph) continue; const l=L(ph); const note=field(r,['הערת יצירה']);
      l.name=l.name||clean(field(r,['שם מלא'])); const sug=noteField(note,'סוג לקוח'), ref=noteField(note,'REF'), lvl=noteField(note,'רמת הליד');
      if(!l._sug&&sug) l._sug=sug; if(!l.ref&&ref) l.ref=ref; if(!l.level&&lvl) l.level=lvl;
      const cr=parseDate(field(r,['יצירה'])); if(cr&&(!l.created||cr<l.created)) l.created=cr; l._inGeneral=true;
      const st=clean(field(r,['סטטוס'])); if((statusRank[st]||0)>(statusRank[l.tc_status]||0)) l.tc_status=st; const rs=clean(field(r,['סיבה'])); if(rs) l.reason=l.reason||rs; l.campaigns.add(clean(field(r,['קמפיין']))); }
    // Calls
    const dayCalls={}, dayCloses={};
    for(const r of B){ const ph=normPhone(field(r,['טלפון'])); if(!ph) continue; const l=L(ph); const rep=clean(field(r,['נציג/ה']))||'לא ידוע'; const d=parseDate(field(r,['מועד שיחה'])); const sec=secs(field(r,['אורך הקלטה']));
      l.name=l.name||clean(field(r,['שם לקוח/ה'])); l.calls++; l.talk+=sec; l.reps[rep]=(l.reps[rep]||0)+1; if(d){ if(!l.first_call||d<l.first_call) l.first_call=d; if(!l.last_call||d>l.last_call) l.last_call=d; dayCalls[d.getDate()]=(dayCalls[d.getDate()]||0)+1; }
      const st=clean(field(r,['סטטוס'])); if((statusRank[st]||0)>(statusRank[l.tc_status]||0)) l.tc_status=st; const rs=clean(field(r,['סיבה'])); if(rs&&!l.reason) l.reason=rs; l.campaigns.add(clean(field(r,['קמפיין'])));
      if(st==='עסקה נסגרה'){ // the closer is the rep on the LATEST call of a closed lead (the deal closes at the end of the journey)
        if(!l.closed){ l.closed=true; l.closer=rep; l.close_reason=rs; l.closed_at=d; l._firstClosedDay=d?d.getDate():null; }
        else if(d&&(!l.closed_at||d>l.closed_at)){ l.closed_at=d; l.closer=rep; }
        if(rs&&!l.close_reason) l.close_reason=rs; }
      if(st==='לא רלוונטי'&&rs) l.irrelevant_reason=rs;
      const sm=clean(field(r,['סיכום שיחה (AI)','סיכום שיחה'])); if(sm.length>60) l.summaries.push({ts:iso(d),rep,sec,text:sm.slice(0,1500)}); }
    // finalize leads
    for(const l of Object.values(leads)){ if(l.closed&&l.closed_at){ const dd=new Date(l.closed_at).getDate(); dayCloses[dd]=(dayCloses[dd]||0)+1; } }
    const arr=Object.values(leads).map(l=>{ delete l._firstClosedDay; l.funnel=funnelOf(l._sug,l.ref,l.level,''); l.close_funnel=l.closed?funnelOf('',l.ref,'',l.close_reason)==='unknown'?l.funnel:funnelOf('',l.ref,'',l.close_reason):''; l.channel=channelOf(l.ref); l.campaigns=[...l.campaigns].filter(Boolean);
      l.summaries.sort((a,b)=>b.sec-a.sec); l.summaries=l.summaries.slice(0,3); l.created=iso(l.created); l.first_call=iso(l.first_call); l.last_call=iso(l.last_call); l.closed_at=iso(l.closed_at); l.reps_list=Object.entries(l.reps).sort((a,b)=>b[1]-a[1]).map(([k,v])=>k+' ('+v+')'); l.new_in_month=!!(l.created&&l.created.startsWith(month)); delete l._sug; delete l._inGeneral; return l; });
    const called=arr.filter(l=>l.calls>0), closed=arr.filter(l=>l.closed), newLeads=arr.filter(l=>l.new_in_month);
    const sum=(a,f)=>a.reduce((x,y)=>x+(f(y)||0),0), avg=(a,f)=>a.length?sum(a,f)/a.length:0, pct=(n,d)=>d?Math.round(n/d*1000)/10:0, r1=v=>Math.round(v*10)/10;
    // funnels
    const funnels={}; for(const k of ['webinar','training','direct','course48','unknown']){ const ls=arr.filter(l=>l.funnel===k), nl=newLeads.filter(l=>l.funnel===k), cl=called.filter(l=>l.funnel===k), cz=closed.filter(l=>l.close_funnel===k);
      const sp=spend[k]||0; funnels[k]={key:k,label:FUNNEL_LABEL[k],leads:ls.length,new_leads:nl.length,called:cl.length,calls:sum(cl,l=>l.calls),talk_h:r1(sum(cl,l=>l.talk)/3600),follow_up:cl.filter(l=>l.tc_status==='Follow Up').length,irrelevant:cl.filter(l=>l.tc_status==='לא רלוונטי').length,closes:cz.length,close_rate:pct(cz.length,cl.length),spend:sp,cpl:nl.length&&sp?r1(sp/nl.length):null,cpa:cz.length&&sp?Math.round(sp/cz.length):null,avg_calls_to_close:r1(avg(cz,l=>l.calls)),avg_talk_to_close_min:r1(avg(cz,l=>l.talk)/60)}; }
    // reps
    const reps={}; for(const r of B){ const rep=clean(field(r,['נציג/ה']))||'לא ידוע'; const x=reps[rep]||(reps[rep]={rep,calls:0,talk:0,leads:new Set(),fu:new Set(),irr:new Set(),new:new Set(),long:0}); x.calls++; const sec=secs(field(r,['אורך הקלטה'])); x.talk+=sec; if(sec>=180) x.long++; const ph=normPhone(field(r,['טלפון'])); x.leads.add(ph); const st=clean(field(r,['סטטוס'])); if(st==='Follow Up') x.fu.add(ph); if(st==='לא רלוונטי') x.irr.add(ph); if(st==='ליד חדש') x.new.add(ph); }
    const repRows=Object.values(reps).map(x=>{ const cz=closed.filter(l=>l.closer===x.rep); const rev=revenue[x.rep]||0; const shared=[...x.leads].filter(ph=>leads[ph]&&Object.keys(leads[ph].reps).length>1).length;
      return {rep:x.rep,calls:x.calls,leads:x.leads.size,talk_h:r1(x.talk/3600),avg_len_min:r1(x.calls?x.talk/x.calls/60:0),long_calls:x.long,follow_up:x.fu.size,irrelevant:x.irr.size,closes:cz.length,close_rate:pct(cz.length,x.leads.size),revenue:rev,rev_per_close:cz.length?Math.round(rev/cz.length):null,calls_per_close:cz.length?r1(x.calls/cz.length):null,shared_leads:shared,closes_webinar:cz.filter(l=>l.close_funnel==='webinar').length,closes_training:cz.filter(l=>l.close_funnel==='training').length,avg_calls_on_closed:r1(avg(cz,l=>l.calls)),avg_talk_on_closed_min:r1(avg(cz,l=>l.talk)/60)}; }).sort((a,b)=>b.closes-a.closes||b.calls-a.calls);
    // channels (by REF)
    const ch={}; for(const l of arr){ const c=ch[l.channel]||(ch[l.channel]={channel:l.channel,leads:0,new_leads:0,called:0,closes:0}); c.leads++; if(l.new_in_month) c.new_leads++; if(l.calls) c.called++; if(l.closed) c.closes++; }
    const channels=Object.values(ch).sort((a,b)=>b.leads-a.leads);
    // reasons
    const reasons={}; for(const l of called){ if(l.tc_status==='לא רלוונטי'){ const k=l.irrelevant_reason||l.reason||'ללא סיבה'; reasons[k]=(reasons[k]||0)+1; } }
    const kpis={leads_total:arr.length,new_leads:newLeads.length,called_leads:called.length,calls:B.length,talk_h:r1(sum(called,l=>l.talk)/3600),closes:closed.length,close_rate:pct(closed.length,called.length),follow_up:called.filter(l=>l.tc_status==='Follow Up').length,irrelevant:called.filter(l=>l.tc_status==='לא רלוונטי').length,untouched_new:newLeads.filter(l=>!l.calls).length,
      avg_calls_to_close:r1(avg(closed,l=>l.calls)),avg_talk_to_close_min:r1(avg(closed,l=>l.talk)/60),avg_calls_not_closed:r1(avg(called.filter(l=>!l.closed),l=>l.calls)),avg_talk_not_closed_min:r1(avg(called.filter(l=>!l.closed),l=>l.talk)/60),
      spend_total:Object.values(spend).reduce((a,b)=>a+(b||0),0),revenue_total:Object.values(revenue).reduce((a,b)=>a+(b||0),0),fb_closed_total:arr.filter(l=>/לקוח סגר/.test(l.fb_status)).length,fb_closed_not_in_calls:arr.filter(l=>/לקוח סגר/.test(l.fb_status)&&!l.closed).length,handoff_closes:closed.filter(l=>Object.keys(l.reps).length>1).length};
    kpis.cost_per_close=kpis.closes&&kpis.spend_total?Math.round(kpis.spend_total/kpis.closes):null; kpis.roas=kpis.spend_total&&kpis.revenue_total?r1(kpis.revenue_total/(kpis.spend_total*3.7)):null;
    // insights (rules)
    const ins=[]; const fw=funnels.webinar, ft=funnels.training, fd=funnels.direct;
    if(fw.cpa&&ft.cpa) ins.push({type:fw.cpa<ft.cpa?'good':'warn',t:`עלות לסגירה: וובינר $${fw.cpa} מול הדרכה חינמית $${ft.cpa}. ${fw.cpa<ft.cpa?'הוובינר יעיל יותר ב-'+Math.round((1-fw.cpa/ft.cpa)*100)+'%':'ההדרכה החינמית יעילה יותר ב-'+Math.round((1-ft.cpa/fw.cpa)*100)+'%'}. שם כדאי להוסיף תקציב.`});
    if(fd.spend&&!fd.closes) ins.push({type:'warn',t:`ליד ישיר: $${fd.spend} הוצאה, ${fd.new_leads} לידים חדשים, 0 סגירות מתועדות בטוצ׳אט. לבדוק אם הסגירות נרשמות בפיירברי בלבד, או לעצור.`});
    if(kpis.untouched_new) ins.push({type:'warn',t:`${kpis.untouched_new} לידים שנוצרו החודש לא מופיעים באף שיחה בטוצ׳אט (${pct(kpis.untouched_new,kpis.new_leads)}% מהלידים החדשים). חלקם רשומים לוובינר עתידי, אבל זה תקציב שכבר שולם, ושווה לוודא שכל אחד מהם נכנס לתור חיוג.`});
    const noReason=called.filter(l=>l.tc_status==='לא רלוונטי'&&!(l.irrelevant_reason||l.reason)).length; if(noReason>100) ins.push({type:'warn',t:`${noReason} לידים סומנו "לא רלוונטי" בלי סיבה. בלי סיבה אי אפשר ללמוד מה נכשל במשפך. לחייב בחירת סיבה בטוצ׳אט.`});
    ins.push({type:'info',t:`ליד שנסגר קיבל בממוצע ${kpis.avg_calls_to_close} שיחות ו-${kpis.avg_talk_to_close_min} דקות שיחה, לעומת ${kpis.avg_calls_not_closed} שיחות ו-${kpis.avg_talk_not_closed_min} דקות לליד שלא נסגר. סגירה = התמדה + עומק.`});
    const sdr=repRows.filter(r=>r.calls>200&&r.avg_len_min<2&&r.closes===0); for(const r of sdr) ins.push({type:'info',t:`${r.rep}: ${r.calls} שיחות, ממוצע ${r.avg_len_min} דק׳, 0 סגירות. תפקיד סינון/ראשוני. ${r.irrelevant} לידים סומנו לא רלוונטי. לוודא שהסינון לא זורק לידים טובים.`});
    const fuHeavy=repRows.filter(r=>r.follow_up>150&&r.close_rate<1.5); for(const r of fuHeavy) ins.push({type:'warn',t:`${r.rep}: ${r.follow_up} לידים ב-Follow Up מול ${r.closes} סגירות. פולו-אפ בלי סגירה = חסם שלא טופל. לבדוק את הצ׳ק-ליסט של שלב החסם בשיחות שלו.`});
    const best=repRows.filter(r=>r.closes>0&&r.leads>=30).sort((a,b)=>b.close_rate-a.close_rate)[0]; if(best) ins.push({type:'good',t:`אחוז הסגירה הגבוה ביותר מלידים שנוגעו: ${best.rep} (${best.close_rate}%, ${best.avg_len_min} דק׳ לשיחה בממוצע). לחקור מה הוא עושה אחרת ולהכניס לפלייבוק.`});
    for(const r of repRows) if(r.revenue&&!r.closes) ins.push({type:'warn',t:`${r.rep}: הכנסה ${r.revenue.toLocaleString()} ₪ אבל 0 סגירות בטוצ׳אט. הסגירות שלו לא נרשמות בסטטוס "עסקה נסגרה". צריך לתקן תהליך רישום.`});
    if(kpis.fb_closed_not_in_calls>20) ins.push({type:'warn',t:`${kpis.fb_closed_not_in_calls} לקוחות מסומנים "לקוח סגר" בפיירברי ולא מופיעים כסגורים בטוצ׳אט (כולל חודשים קודמים). שני המקורות לא מסונכרנים, ולכן ספירת הסגירות האמיתית לחודש חייבת להתבסס על טבלת השיחות.`});
    if(kpis.handoff_closes) ins.push({type:'info',t:`${kpis.handoff_closes} מתוך ${kpis.closes} סגירות עברו בין יותר מנציג אחד. העברות עובדות, בתנאי שהסיכום עובר יחד עם הליד.`});
    const topReason=Object.entries(reasons).filter(([k])=>k!=='ללא סיבה').sort((a,b)=>b[1]-a[1])[0]; if(topReason) ins.push({type:'info',t:`סיבת "לא רלוונטי" הנפוצה: "${topReason[0]}" (${topReason[1]}). ${/להתקשר/.test(topReason[0])?'לידים שמבקשים לא להתקשר = בעיה בציפייה שנוצרה במשפך, לא בנציג.':''}`});
    return {month,generated_at:new Date().toISOString(),kpis,funnels:Object.values(funnels),reps:repRows,channels,reasons:Object.entries(reasons).map(([k,v])=>({reason:k,n:v})).sort((a,b)=>b.n-a.n),days:Array.from({length:31},(_,i)=>({d:i+1,calls:dayCalls[i+1]||0,closes:dayCloses[i+1]||0})),insights:ins,spend,revenue,
      leads:called.concat(newLeads.filter(l=>!l.calls)).map(l=>({phone:l.phone,name:l.name,funnel:l.funnel,channel:l.channel,ref:l.ref,level:l.level,created:l.created,fb_status:l.fb_status,fb_manager:l.fb_manager,tc_status:l.tc_status,reason:l.reason,calls:l.calls,talk_min:r1(l.talk/60),first_call:l.first_call,last_call:l.last_call,reps:l.reps_list,closer:l.closer,closed:l.closed,closed_at:l.closed_at,close_reason:l.close_reason,close_funnel:l.close_funnel,new_in_month:l.new_in_month,summaries:l.summaries}))};
  }
  const api={build,FUNNEL_LABEL,normPhone};
  if(typeof module!=='undefined'&&module.exports) module.exports=api; else root.LCMetrics=api;
})(typeof window!=='undefined'?window:globalThis);
