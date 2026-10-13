/* Aviv Malka · webinar thank-you page (loaded from Kajabi) */
(function(){
 var root=document.getElementById('alm-root'); if(!root){root=document.createElement('div');document.body.appendChild(root);}
 try{ document.body.style.background='#0b0f1a'; var p=root.parentElement; while(p && p!==document.body){ p.style.backgroundColor='#0b0f1a'; p.style.backgroundImage='none'; if(/section|container|row|col|sizer|block/.test(p.className||'')){ p.style.padding='0'; p.style.margin='0'; p.style.maxWidth='none'; } p=p.parentElement; } document.querySelectorAll('header.header, footer.footer').forEach(function(el){ el.style.display='none'; }); }catch(e){}
 root.innerHTML="<!-- ===== Aviv Malka · webinar thank-you page (Kajabi custom code block) ===== -->\n<link rel=\"preconnect\" href=\"https://fonts.googleapis.com\">\n<link href=\"https://fonts.googleapis.com/css2?family=Heebo:wght@400;500;700;800;900&display=swap\" rel=\"stylesheet\">\n<style>\n  .alm{--bg:#0b0f1a;--card:#141a2a;--line:#273049;--gold:#FFD23F;--gold2:#E9A21A;--txt:#ffffff;--mute:#b9c0d4;--ok:#22c55e;\n    direction:rtl;text-align:right;font-family:'Heebo',Arial,sans-serif;color:var(--txt);background:var(--bg);padding:28px 16px 56px;line-height:1.5}\n  .alm *{box-sizing:border-box}\n  .alm-wrap{max-width:760px;margin:0 auto}\n  .alm-steps{display:flex;gap:8px;align-items:center;justify-content:center;margin:0 auto 22px;font-size:15px;color:var(--mute);flex-wrap:wrap}\n  .alm-step{display:flex;align-items:center;gap:8px}\n  .alm-dot{width:26px;height:26px;border-radius:50%;display:flex;align-items:center;justify-content:center;font-weight:800;font-size:14px;background:#222a3f;color:var(--mute)}\n  .alm-step.done .alm-dot{background:var(--ok);color:#fff}\n  .alm-step.now .alm-dot{background:var(--gold);color:#1a1205;box-shadow:0 0 0 4px rgba(255,210,63,.18)}\n  .alm-step.now{color:#fff;font-weight:700}\n  .alm-sep{width:28px;height:2px;background:#273049}\n  .alm-bar{height:10px;border-radius:10px;background:#1c2337;overflow:hidden;margin:0 auto 26px;max-width:520px}\n  .alm-bar i{display:block;height:100%;width:66%;background:linear-gradient(90deg,var(--gold2),var(--gold));border-radius:10px;transition:width .6s}\n  .alm h1{font-size:clamp(30px,6vw,46px);line-height:1.12;font-weight:900;text-align:center;margin:0 0 10px;color:#fff;text-wrap:balance}\n  .alm h1 span{color:var(--gold)}\n  .alm-sub{font-size:clamp(18px,3.6vw,22px);text-align:center;color:#e8ebf3;margin:0 auto 22px;max-width:620px;text-wrap:balance}\n  .alm-len{text-align:center;color:var(--gold);font-weight:700;font-size:16px;margin:-8px 0 12px}\n  .alm-video{border-radius:16px;overflow:hidden;border:2px solid rgba(255,210,63,.55);box-shadow:0 20px 60px rgba(0,0,0,.45);background:#000}\n  .alm-card{background:var(--card);border:1px solid var(--line);border-radius:20px;padding:26px 22px;margin-top:26px;box-shadow:0 18px 50px rgba(0,0,0,.35)}\n  .alm-quiz{border:2px solid var(--gold)}\n  .alm-tag{display:inline-block;background:rgba(255,210,63,.12);color:var(--gold);border:1px solid rgba(255,210,63,.4);border-radius:999px;padding:4px 14px;font-weight:700;font-size:14px;margin-bottom:10px}\n  .alm h2{font-size:clamp(23px,4.6vw,30px);font-weight:900;margin:0 0 6px;line-height:1.2}\n  .alm-hint{color:var(--mute);font-size:16px;margin:0 0 18px}\n  .alm-qbar{display:flex;gap:6px;margin:0 0 18px}\n  .alm-qbar b{flex:1;height:6px;border-radius:6px;background:#273049;transition:background .3s}\n  .alm-qbar b.on{background:var(--gold)}\n  .alm-q{display:none;animation:almIn .35s ease}\n  .alm-q.show{display:block}\n  @keyframes almIn{from{opacity:0;transform:translateX(-18px)}to{opacity:1;transform:none}}\n  .alm-qt{font-size:clamp(20px,4.2vw,25px);font-weight:800;margin:0 0 14px;line-height:1.3}\n  .alm-qn{color:var(--gold);font-weight:900;margin-left:6px}\n  .alm-opt{display:flex;align-items:center;gap:12px;width:100%;text-align:right;background:#1b2236;border:2px solid #2b3552;color:#fff;border-radius:14px;padding:15px 16px;margin:0 0 10px;\n    font-family:inherit;font-size:18px;font-weight:600;cursor:pointer;transition:border-color .15s,background .15s,transform .1s}\n  .alm-opt:hover{border-color:var(--gold);background:#202945}\n  .alm-opt:active{transform:scale(.99)}\n  .alm-opt.sel{border-color:var(--gold);background:rgba(255,210,63,.1)}\n  .alm-opt .e{font-size:22px;width:30px;text-align:center;flex:none}\n  .alm-nav{display:flex;justify-content:center;margin-top:4px}\n  .alm-back{background:none;border:0;color:var(--mute);font-family:inherit;font-size:16px;cursor:pointer;padding:6px 0}\n  .alm-field{display:block;margin:0 0 12px}\n  .alm-field span{display:block;font-weight:700;margin-bottom:6px}\n  .alm-field input{width:100%;padding:14px 14px;border-radius:12px;border:2px solid #2b3552;background:#0f1424;color:#fff;font-family:inherit;font-size:18px}\n  .alm-field input:focus{outline:none;border-color:var(--gold)}\n  .alm-commit{display:flex;gap:12px;align-items:flex-start;background:#10172a;border:1px dashed rgba(255,210,63,.5);border-radius:14px;padding:14px;margin:6px 0 16px;cursor:pointer;font-size:17px}\n  .alm-commit input{width:24px;height:24px;accent-color:#FFD23F;flex:none;margin-top:2px}\n  .alm-cta{display:flex;align-items:center;justify-content:center;gap:10px;width:100%;border:0;border-radius:16px;padding:18px 20px;cursor:pointer;font-family:inherit;font-size:21px;font-weight:900;\n    color:#1a1205;background:linear-gradient(180deg,#FFE27A,var(--gold) 45%,var(--gold2));box-shadow:0 10px 30px rgba(255,190,40,.35);transition:transform .1s,filter .2s}\n  .alm-cta:hover{filter:brightness(1.05)}\n  .alm-cta:active{transform:scale(.99)}\n  .alm-cta[disabled]{opacity:.6;cursor:wait}\n  .alm-green{background:linear-gradient(180deg,#4ade80,#22c55e 50%,#15803d);color:#fff;box-shadow:0 10px 30px rgba(34,197,94,.35)}\n  .alm-err{color:#ff7a70;font-weight:700;margin:4px 0 10px;display:none}\n  .alm-lock{display:flex;gap:10px;align-items:center;justify-content:center;color:var(--mute);font-size:15px;margin-top:12px}\n  .alm-done{display:none;text-align:center}\n  .alm-done .big{font-size:56px;line-height:1}\n  .alm-grid{display:grid;grid-template-columns:1fr 1fr;gap:14px;margin-top:26px}\n  .alm-mini{background:var(--card);border:1px solid var(--line);border-radius:18px;padding:20px}\n  .alm-mini h3{margin:0 0 6px;font-size:20px;font-weight:800}\n  .alm-mini p{margin:0 0 14px;color:var(--mute);font-size:16px}\n  .alm-link{display:inline-flex;align-items:center;gap:8px;color:#1a1205;background:var(--gold);border-radius:12px;padding:10px 16px;font-weight:800;text-decoration:none;font-size:16px}\n  .alm-link.ghost{background:transparent;color:var(--gold);border:2px solid var(--gold)}\n  .alm-list{list-style:none;padding:0;margin:10px 0 0}\n  .alm-list li{display:flex;gap:10px;margin:0 0 10px;font-size:17px}\n  .alm-list li b{color:var(--gold)}\n  .alm-skip{display:block;text-align:center;color:#6f7893;font-size:13px;margin-top:14px;text-decoration:underline}\n  @media (max-width:640px){.alm-grid{grid-template-columns:1fr}.alm-steps{font-size:13px;gap:5px;flex-wrap:nowrap}.alm-dot{width:22px;height:22px;font-size:12px}.alm-step{gap:5px;white-space:nowrap}.alm-sep{width:10px}.alm-opt{font-size:17px;padding:14px}}\n\n  .alm-quiz{background:#ffffff;color:#141824;border:0;padding:28px 22px 22px}\n  .alm-quiz h2{color:#141824;font-size:clamp(24px,5vw,30px);margin:0 0 6px}\n  .alm-quiz .alm-hint{color:#5b6274;font-size:17px;margin:0 0 18px}\n  .alm-kicker{margin:0 0 6px;color:#b7791f;font-weight:800;font-size:15px}\n  .alm-prog{display:flex;align-items:center;gap:12px;margin:0 0 20px;font-weight:700;font-size:15px;color:#141824}\n  .alm-prog span{white-space:nowrap}\n  .alm-track{flex:1;height:8px;border-radius:8px;background:#eceef3;overflow:hidden}\n  .alm-track i{display:block;height:100%;width:25%;background:#141824;border-radius:8px;transition:width .3s}\n  .alm-quiz .alm-qt{font-size:clamp(21px,4.4vw,26px);font-weight:800;margin:0 0 14px;color:#141824}\n  .alm-quiz .alm-opt{background:#fff;border:2px solid #dfe2ea;color:#141824;font-size:18px;font-weight:600;padding:16px 16px;border-radius:14px;gap:14px}\n  .alm-quiz .alm-opt i{width:22px;height:22px;border-radius:50%;border:2px solid #b9bfcc;flex:none;position:relative}\n  .alm-quiz .alm-opt:hover{border-color:#141824;background:#f7f8fb}\n  .alm-quiz .alm-opt.sel{border-color:#141824;background:#f4f5f8}\n  .alm-quiz .alm-opt.sel i{border-color:#141824}\n  .alm-quiz .alm-opt.sel i:after{content:\"\";position:absolute;inset:4px;border-radius:50%;background:#141824}\n  .alm-quiz .alm-field input{background:#fff;color:#141824;border-color:#dfe2ea}\n  .alm-quiz .alm-field input:focus{border-color:#141824}\n  .alm-quiz .alm-commit{background:#f6f7fa;border:1px solid #e3e6ee;color:#141824}\n  .alm-quiz .alm-commit input{accent-color:#141824}\n  .alm-quiz .alm-cta{background:#22c55e;color:#fff;box-shadow:0 8px 22px rgba(34,197,94,.3);font-size:20px}\n  .alm-quiz .alm-back{color:#5b6274;text-decoration:underline}\n  .alm-quiz .alm-err{color:#d93025}\n  .alm-quiz .alm-done h2{margin-bottom:10px}\n  .alm-bul{list-style:none;padding:0;margin:-6px 0 20px}\n  .alm-bul li{position:relative;padding-right:18px;color:#141824;font-size:16px;font-weight:600}\n  .alm-bul li:before{content:\"\";position:absolute;right:2px;top:.6em;width:8px;height:8px;border-radius:50%;background:#22c55e}\n</style>\n\n<div class=\"alm\" id=\"alm\">\n  <div class=\"alm-wrap\">\n\n    <div class=\"alm-steps\" aria-label=\"התקדמות ההרשמה\">\n      <div class=\"alm-step done\"><span class=\"alm-dot\">1</span>נרשמת</div><span class=\"alm-sep\"></span>\n      <div class=\"alm-step now\"><span class=\"alm-dot\">2</span>שאלות קצרות</div><span class=\"alm-sep\"></span>\n      <div class=\"alm-step\"><span class=\"alm-dot\">3</span>הקבוצה הסגורה</div>\n    </div>\n    <div class=\"alm-bar\"><i id=\"almBar\"></i></div>\n\n    <h1>מי שרואה את הסרטון הזה מגיע לשידור <span>צעד אחד לפני כולם</span></h1>\n    <p class=\"alm-sub\">הצצה למועדון: איך 600 אנשים הפכו את זה להכנסה, ומה תוכל לקחת מזה כבר בשלישי</p>\n    <p class=\"alm-len\">▶ 13 דקות · כדאי לראות עד הסוף לפני השידור</p>\n\n    <div class=\"alm-video\">\n      <div id=\"vidalytics_embed_Se74NJ1WF2efAH5A\" style=\"width:100%;position:relative;padding-top:56.25%;\"></div>\n    </div>\n\n    <!-- ===== QUIZ ===== -->\n<div class=\"alm-card alm-quiz\" id=\"almQuiz\">\n<div id=\"almForm\">\n<p class=\"alm-kicker\">שלב אחרון לפני השידור</p>\n<h2 id=\"almHello\">היי, לקראת השידור בשלישי הייתי רוצה להכיר אותך יותר</h2>\n<p class=\"alm-hint\">כדי שאוכל להתייחס בתוכן הוובינר בדיוק למה שמעניין אותך</p>\n<ul class=\"alm-bul\"><li>יש כאן שאלון קצר באורך של 60 שניות, ואז ייפתח לך הלינק לקבוצה, ששם אשלח לך קישור לשידור</li></ul>\n<div class=\"alm-prog\"><span id=\"almCount\">שאלה 1</span><div class=\"alm-track\"><i id=\"almFill\"></i></div></div>\n<div id=\"almStage\"></div>\n<div class=\"alm-nav\"><button class=\"alm-back\" id=\"almBack\" style=\"display:none\">חזרה לשאלה הקודמת</button></div>\n</div>\n<div class=\"alm-done\" id=\"almDone\">\n<h2>תודה! פותחים לך את הקבוצה</h2>\n<p class=\"alm-hint\" id=\"almDoneMsg\">אם הוואטסאפ לא נפתח לבד:</p>\n<a class=\"alm-cta\" id=\"almWa\" href=\"#\" style=\"text-decoration:none\">כניסה לקבוצת הוואטסאפ</a>\n</div>\n</div>\n\n<!-- ===== EXTRAS ===== -->\n    <div class=\"alm-grid\">\n      <div class=\"alm-mini\">\n        <h3>שמור את השעה</h3>\n        <p id=\"almWhen\">יום שלישי · 18:00 · בזום</p>\n        <a class=\"alm-link ghost\" id=\"almCal\" href=\"#\" target=\"_blank\" rel=\"noopener\">הוסף ליומן גוגל</a>\n      </div>\n      <div class=\"alm-mini\">\n        <h3>הקורס הדיגיטלי במתנה</h3>\n        <p>כבר מחכה לך. כדאי לראות את השיעור הראשון לפני השידור.</p>\n        <a class=\"alm-link\" href=\"https://www.avivmalka.com/course-hadira\" target=\"_blank\" rel=\"noopener\">לכניסה לקורס</a>\n      </div>\n    </div>\n\n    <div class=\"alm-card\">\n      <h3 style=\"margin:0 0 4px;font-size:21px;font-weight:800\">מה תראה בשידור</h3>\n      <ul class=\"alm-list\">\n        <li><b>1.</b>איך מוצאים מוצר שאנשים כבר מחפשים</li>\n        <li><b>2.</b>איך בונים מותג וחנות בעזרת AI, בלייב מול העיניים</li>\n        <li><b>3.</b>מה הצעד הראשון שלך כבר מחר בבוקר</li>\n      </ul>\n    </div>\n\n    <a class=\"alm-skip\" id=\"almSkip\" href=\"#\">בעיה בשאלון? לחץ כאן לכניסה לקבוצה</a>\n  </div>\n</div>\n\n";
})();

(function(){
  /* ====== settings ====== */
  var MAKE_WEBHOOK = 'https://hook.eu2.make.com/nltpw48e2sf4of2g8ijohahvrat6angt';
  var WA_GROUP = 'https://chat.whatsapp.com/KHTXLAhvAdpJiR3nciIlBP';
  var WEBINAR_DAY = 2, WEBINAR_HOUR = 18; // Tuesday 18:00 Israel time

  /* ====== video (Vidalytics, same as before) ====== */
  (function (v, i, d, a, l, y, t, c, s) {
    y='_'+d.toLowerCase();c=d+'L';if(!v[d]){v[d]={};}if(!v[c]){v[c]={};}if(!v[y]){v[y]={};}var vl='Loader',vli=v[y][vl],vsl=v[c][vl + 'Script'],vlf=v[c][vl + 'Loaded'],ve='Embed';
    if (!vsl){vsl=function(u,cb){if(t){cb();return;}s=i.createElement("script");s.type="text/javascript";s.async=1;s.src=u;
      if(s.readyState){s.onreadystatechange=function(){if(s.readyState==="loaded"||s.readyState=="complete"){s.onreadystatechange=null;vlf=1;cb();}};}else{s.onload=function(){vlf=1;cb();};}
      i.getElementsByTagName("head")[0].appendChild(s);};}
    vsl(l+'loader.min.js',function(){if(!vli){var vlc=v[c][vl];vli=new vlc();}vli.loadScript(l+'player.min.js',function(){var vec=v[d][ve];t=new vec();t.run(a);});});
  })(window, document, 'Vidalytics', 'vidalytics_embed_Se74NJ1WF2efAH5A', 'https://fast.vidalytics.com/embeds/YxS8sQvf/Se74NJ1WF2efAH5A/');

  /* ====== lead details saved by the registration page ====== */
  var lead = {};
  try { lead = JSON.parse(localStorage.getItem('alm_lead') || '{}') || {}; } catch(e) {}
  var $ = function(id){ return document.getElementById(id); };
  var hasContact = !!(lead.name && lead.phone);
  var first = (lead.name || '').trim().split(/\s+/)[0];
  if (first) $('almHello').textContent = 'היי ' + first + ', לקראת השידור בשלישי הייתי רוצה להכיר אותך יותר';
  

  /* ====== next webinar date + calendar link ====== */
  var now = new Date();
  var il = new Date(now.toLocaleString('en-US', {timeZone:'Asia/Jerusalem'}));
  var add = (WEBINAR_DAY - il.getDay() + 7) % 7;
  if (add === 0 && (il.getHours() * 60 + il.getMinutes()) >= WEBINAR_HOUR * 60 + 1) add = 7; // rolls to next Tuesday at 18:01
  var d = new Date(il); d.setDate(il.getDate() + add);
  var pad = function(n){ return (n<10?'0':'')+n; };
  var ymd = d.getFullYear() + pad(d.getMonth()+1) + pad(d.getDate());
  $('almWhen').textContent = 'יום שלישי ' + d.getDate() + '.' + (d.getMonth()+1) + ' · 18:00 · בזום';
  $('almCal').href = 'https://calendar.google.com/calendar/render?action=TEMPLATE&text=' + encodeURIComponent('שידור חי עם אביב מלכה: איקומרס עם AI') +
    '&dates=' + ymd + 'T' + pad(WEBINAR_HOUR) + '0000/' + ymd + 'T' + pad(WEBINAR_HOUR+1) + '3000&ctz=Asia/Jerusalem&details=' +
    encodeURIComponent('הקישור לזום יישלח בקבוצת הוואטסאפ ובמייל לפני השידור.');

  /* ====== branching quiz ====== */
  var FLOW = {
    stage: {k:'שלב', q:'איפה אתה עומד היום?', o:[
      ['מתחיל מאפס',0,'goal','מתחיל'], ['התעניינתי, אבל עוד לא התחלתי',1,'goal','מתחיל'],
      ['ניסיתי בעבר ונתקעתי',2,'where','נתקע'], ['יש לי חנות או ניסיון במכירות',3,'state','מנוסה']]},
    goal: {k:'מטרה', q:'מה המטרה שלך מאיקומרס?', o:[['הכנסה נוספת לצד העבודה',1,'time'],['להחליף את המשכורת',2,'time'],['לבנות מותג גדול',2,'time'],['עוד לא בטוח, באתי לבדוק',0,'time']]},
    time: {k:'זמן בשבוע', q:'כמה זמן בשבוע תוכל להקדיש לזה?', o:[['עד 3 שעות',0,'learn'],['3 עד 6 שעות',1,'learn'],['6 עד 10 שעות',2,'learn'],['יותר מ-10 שעות',2,'learn']]},
    learn: {k:'מעדיף', q:'איך אתה מעדיף להתקדם?', o:[['לבד, מסרטונים חינמיים',0,'start'],['קורס מוקלט בקצב שלי',1,'start'],['תוכנית מסודרת עם ליווי צמוד',3,'start'],['עוד לא יודע',1,'start']]},
    where: {k:'נתקע ב', q:'איפה נתקעת?', o:[['בבחירת מוצר',1,'spent'],['בבניית החנות',1,'spent'],['בפרסום ובשיווק',1,'spent'],['החנות עלתה ולא הגיעו מכירות',2,'spent']]},
    spent: {k:'השקיע עד היום', q:'כמה השקעת עד היום (קורסים, פרסום, מלאי)?', o:[['לא השקעתי',0,'help'],['עד 2,000 ש״ח',1,'help'],['2,000 עד 10,000 ש״ח',2,'help'],['יותר מ-10,000 ש״ח',3,'help']]},
    help: {k:'צריך', q:'מה היה עוזר לך הכי הרבה עכשיו?', o:[['שמישהו יבדוק מה עשיתי ויגיד מה לתקן',2,'start'],['תוכנית צעד אחר צעד',1,'start'],['ליווי צמוד עד המכירה הראשונה',3,'start'],['רק להבין מה השתנה בתחום',0,'start']]},
    start: {k:'רוצה להתחיל', q:'אם תראה בשידור דרך שמתאימה לך, מתי היית רוצה להתחיל?', o:[['מיד, אני מוכן',3,'end'],['בחודש הקרוב',2,'end'],['בעוד כמה חודשים',0,'end'],['רק בודק בינתיים',0,'end']]},
    state: {k:'מצב', q:'מה המצב שלך היום?', o:[['יש לי חנות שמוכרת',3,'rev'],['יש לי חנות, אבל בלי מכירות קבועות',2,'rev'],['מכרתי באמזון, איביי או בשוק',2,'rev'],['ניסיון במכירות, בלי חנות משלי',1,'rev']]},
    rev: {k:'מחזור חודשי', q:'מה המחזור החודשי שלך בערך?', o:[['עוד אין מחזור',0,'next'],['עד 10 אלף ש״ח',1,'next'],['10 עד 50 אלף ש״ח',2,'next'],['מעל 50 אלף ש״ח',3,'next']]},
    next: {k:'צעד הבא', q:'מה הצעד הבא שאתה מחפש?', o:[['להגדיל את המכירות',1,'start'],['לבנות מותג משלי',2,'start'],['להכניס AI ואוטומציות',1,'start'],['לצאת למכירות בחו״ל',2,'start']]}
  };
  var EST = 5, hist = [], path = '', wantsCall = '', callTime = '';
  var stage = $('almStage');
  function render(id){
    var n = FLOW[id];
    $('almBack').style.display = hist.length ? 'inline' : 'none';
    var k = hist.length + 1;
    if (id === 'end') {
      $('almCount').textContent = 'שליחה'; $('almFill').style.width = '100%';
      stage.innerHTML = '<div class="alm-q show"><p class="alm-qt">' + 'מעולה, נשאר רק לשלוח' + '</p>' +
        '<label class="alm-commit"><input type="checkbox" id="almCommit" checked><span>אני מגיע לשידור ביום שלישי ב-18:00</span></label>' +
        '<button class="alm-cta" id="almSend">שליחה וכניסה לקבוצת הוואטסאפ</button></div>';
      $('almSend').addEventListener('click', send);
      return;
    }
    $('almCount').textContent = 'שאלה ' + k; $('almFill').style.width = Math.min(92, k / EST * 100) + '%';
    var h = '<div class="alm-q show"><p class="alm-qt">' + n.q + '</p>';
    n.o.forEach(function(o, i){ h += '<button class="alm-opt" data-i="' + i + '"><i></i>' + o[0] + '</button>'; });
    stage.innerHTML = h + '</div>';
    [].slice.call(stage.querySelectorAll('.alm-opt')).forEach(function(b){
      b.addEventListener('click', function(){
        var o = n.o[+b.getAttribute('data-i')];
        b.classList.add('sel');
        hist.push({id:id, k:n.k, q:n.q, a:o[0], s:o[1], path:o[3], call:n.call});
        if (o[3]) path = o[3];
        if (n.call) wantsCall = o[0] === 'כן, אשמח' ? 'כן' : (o[0] === 'עדיף אחרי השידור' ? 'אחרי השידור' : 'לא');
        if (id === 'when') callTime = o[0];
        setTimeout(function(){ render(o[2]); }, 200);
      });
    });
  }
  $('almBack').addEventListener('click', function(){
    var last = hist.pop(); if (!last) return;
    if (last.id === 'when') callTime = '';
    if (last.call) wantsCall = '';
    path = ''; hist.forEach(function(h){ if (h.path) path = h.path; });
    render(last.id);
  });
  render('stage');

  function goWa(){ window.location.href = WA_GROUP; }
  $('almWa').href = WA_GROUP;
  $('almSkip').addEventListener('click', function(e){ e.preventDefault(); goWa(); });

  function send(){
    var score = 0; hist.forEach(function(h){ score += h.s; });
    var ready = hist.some(function(h){ return h.id === 'start' && h.a === 'מיד, אני מוכן'; });
    var tier = (ready && score >= 6) || score >= 9 ? 'חם' : score >= 5 ? 'פושר' : 'קר';
    var name = lead.name || '', phone = (lead.phone || '').replace(/[^\d+]/g,'');
    var lines = hist.filter(function(h){ return h.id !== 'when'; }).map(function(h){ return h.k + ': ' + h.a; });
    var summary = 'ליד חדש מהוובינר (' + tier + ')\n' + (name || 'ללא שם') + ' · ' + (phone || 'ללא טלפון') + '\nמסלול: ' + path +
      '\n\n' + lines.join('\n');
    var payload = {source:'webinar-thanks', submitted_at:new Date().toISOString(), webinar_date:d.getDate()+'.'+(d.getMonth()+1),
      name:name, phone:phone, email:lead.email || '', path:path, wants_call:wantsCall, call_time:callTime, score:score, tier:tier,
      committed: ($('almCommit') && $('almCommit').checked) ? 'כן' : 'לא', answers:hist.map(function(h){ return {id:h.id, k:h.k, q:h.q, a:h.a}; }), summary:summary};
    $('almSend').disabled = true; $('almSend').textContent = 'שולח...';
    var done = false;
    function finish(){ if (done) return; done = true; $('almForm').style.display='none'; $('almDone').style.display='block'; $('almBar').style.width='100%'; setTimeout(goWa, 900); }
    try { if (window.fbq) fbq('trackCustom', 'WebinarQuiz', {tier: tier, path: path}); if (window.gtag) gtag('event', 'webinar_quiz_submit', {tier: tier}); } catch(e) {}
    try { fetch(MAKE_WEBHOOK, {method:'POST', headers:{'Content-Type':'application/json'}, body: JSON.stringify(payload), keepalive: true}).then(finish, finish); } catch(e) { finish(); }
    setTimeout(finish, 2500);
  }
})();
