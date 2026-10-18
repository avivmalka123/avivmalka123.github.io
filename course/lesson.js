/* Aviv Malka course page: lesson (loaded from Kajabi; the original sections stay in the DOM so forms/webhooks keep working) */
(function(){
 var root=document.getElementById('ls-root'); if(!root){root=document.createElement('div');root.id='ls-root';document.body.appendChild(root);}
 try{ document.body.style.background='#FAF8F3'; document.querySelectorAll('[data-section-id], section.section, header.header, footer.footer').forEach(function(el){ if(!el.contains(root)){ el.style.position='absolute'; el.style.left='-9999px'; el.style.height='0'; el.style.overflow='hidden'; } }); }catch(e){}
 root.innerHTML="<!-- ===== Aviv Malka · free course lesson pages hinam1-5 (one script, lesson number from ?l=) · new brand ===== -->\n<link rel=\"preconnect\" href=\"https://fonts.googleapis.com\">\n<link href=\"https://fonts.googleapis.com/css2?family=Heebo:wght@400;500;700;800;900&display=swap\" rel=\"stylesheet\">\n<style>\n.ls{--bg:#FAF8F3;--card:#FFFFFF;--line:#E8E3D8;--ink:#121318;--ink2:#2a2c35;--mute:#5F6170;--gold:#F2B705;--gold2:#E08A00;--soft:#FFF6DA;--ok:#16A34A;--okbg:#EEF9F1;\ndirection:rtl;text-align:right;font-family:'Heebo',Arial,sans-serif;color:var(--ink);background:var(--bg);line-height:1.55;-webkit-font-smoothing:antialiased}\n.ls *{box-sizing:border-box}.ls img{max-width:100%;display:block}\n#ls h1,#ls h2,#ls h3,#ls h4,#ls p,#ls li,#ls span,#ls b,#ls a,#ls button,#ls small{font-family:'Heebo',Arial,sans-serif;letter-spacing:normal;text-transform:none}\n#ls h1,#ls h2,#ls h3,#ls h4{color:var(--ink)}\n.ls-w{max-width:760px;margin:0 auto;padding:0 18px}\n.ls-top{display:flex;align-items:center;justify-content:space-between;padding:18px 0 0}\n.ls-brand{font-weight:900;font-size:18px}.ls-brand i{font-style:normal;color:var(--gold2)}\n.ls-tag{font-weight:800;font-size:13px;color:var(--mute);letter-spacing:.1em}\n.ls-steps{display:flex;gap:6px;margin:18px 0 0}\n.ls-steps a,.ls-steps span{flex:1;display:flex;flex-direction:column;gap:6px;text-decoration:none;color:var(--mute);font-size:12.5px;font-weight:800;text-align:center}\n.ls-steps i{height:7px;border-radius:7px;background:#ECE7DA}\n.ls-steps .done i{background:var(--ok)}.ls-steps .done{color:var(--ok)}\n.ls-steps .now i{background:linear-gradient(90deg,var(--gold2),var(--gold))}.ls-steps .now{color:var(--ink)}\n.ls-head{padding:22px 0 0;text-align:center}\n.ls-pill{display:inline-block;background:var(--soft);border:1px solid #F5D77A;color:#7A5300;border-radius:999px;padding:6px 14px;font-weight:800;font-size:14.5px;margin:0 0 12px}\n#ls h1{font-size:clamp(27px,6.8vw,42px);line-height:1.14;font-weight:900;margin:0 0 10px;text-wrap:balance}\n#ls h1 em{font-style:normal;background:linear-gradient(180deg,transparent 58%,#FFE07A 58%);padding:0 2px}\n.ls-sub{color:var(--mute);font-size:clamp(16px,4vw,19px);max-width:600px;margin:0 auto 18px;text-wrap:balance}\n.ls-video{position:relative;border-radius:20px;overflow:hidden;background:#000;box-shadow:0 30px 60px -30px rgba(30,20,0,.5),0 0 0 1px var(--line)}\n.ls-video .yt{position:relative;padding-top:56.25%}.ls-video iframe{position:absolute;inset:0;width:100%;height:100%;border:0}\n.ls-tools{display:grid;gap:10px;margin:16px 0 0}\n.ls-tool{display:flex;align-items:center;gap:14px;background:#fff;border:1px solid var(--line);border-radius:16px;padding:14px 16px;text-decoration:none;color:var(--ink);box-shadow:0 12px 30px -26px rgba(0,0,0,.4)}\n.ls-tool .ic{flex:none;width:46px;height:46px;border-radius:12px;background:var(--soft);display:flex;align-items:center;justify-content:center;font-size:24px}\n.ls-tool b{display:block;font-size:17px}.ls-tool small{color:var(--mute);font-size:14px}\n.ls-tool .go{margin-right:auto;font-weight:900;color:#1a1205;background:linear-gradient(180deg,#FFD84D,var(--gold) 50%,var(--gold2));border-radius:10px;padding:8px 12px;font-size:14.5px;white-space:nowrap}\n.ls-next{margin:22px 0 0;background:var(--card);border:1px solid var(--line);border-radius:22px;padding:20px;box-shadow:0 18px 40px -30px rgba(0,0,0,.3)}\n.ls-next .lab{font-weight:800;font-size:13px;letter-spacing:.14em;color:var(--gold2);margin:0 0 6px}\n.ls-next h3{margin:0 0 6px;font-size:21px;font-weight:900;line-height:1.3}\n.ls-next p{margin:0 0 16px;color:var(--mute);font-size:16px}\n.ls-btn{display:flex;align-items:center;justify-content:center;gap:10px;width:100%;border:0;border-radius:16px;padding:19px 18px;cursor:pointer;font-size:20px;font-weight:900;color:#1a1205;text-decoration:none;\nbackground:linear-gradient(180deg,#FFD84D,var(--gold) 50%,var(--gold2));box-shadow:0 14px 30px -10px rgba(224,138,0,.6);animation:lsg 2.6s ease-in-out infinite}\n@keyframes lsg{0%,100%{box-shadow:0 14px 30px -10px rgba(224,138,0,.6)}50%{box-shadow:0 14px 40px -6px rgba(224,138,0,.85)}}\n.ls-btn.wa{background:linear-gradient(180deg,#3BDC7A,#1FA855);color:#fff;box-shadow:0 14px 30px -10px rgba(31,168,85,.6);animation:none}\n.ls-done{display:flex;align-items:center;justify-content:center;gap:8px;color:var(--mute);font-size:14px;margin-top:10px}\n.ls-final{margin:22px 0 0;background:linear-gradient(160deg,#FFF6DA,#FFFDF5);border:1px solid #F5D77A;border-radius:22px;padding:22px 20px}\n.ls-final p{margin:0 0 10px;font-size:17.5px;color:#3a3220}\n.ls-final b{color:#7A5300}\n.ls-sec{padding:46px 0 0}\n#ls h2{font-size:clamp(24px,5.8vw,32px);font-weight:900;margin:0 0 14px;line-height:1.15;text-wrap:balance}\n.ls-eye{display:block;color:var(--gold2);font-weight:800;font-size:13.5px;letter-spacing:.14em;margin:0 0 6px}\n.ls-ba{display:grid;gap:12px}\n.ls-story{background:#fff;border:1px solid var(--line);border-radius:20px;overflow:hidden;box-shadow:0 18px 40px -32px rgba(0,0,0,.35)}\n.ls-story-h{display:flex;align-items:center;justify-content:space-between;padding:14px 16px 0}\n.ls-story-h b{font-size:20px;font-weight:900}\n.ls-story-h span{background:var(--okbg);color:var(--ok);border-radius:10px;padding:3px 10px;font-weight:800;font-size:14.5px}\n.ls-bae{display:grid;grid-template-columns:1fr 34px 1fr;gap:6px;padding:12px 16px 16px}\n.ls-bae div{border-radius:14px;padding:12px;font-size:15.5px;line-height:1.45}\n.ls-bae .b{background:#F6F4EF;color:var(--mute)}.ls-bae .a{background:var(--okbg);color:#14532d}\n.ls-bae i{display:block;font-style:normal;font-weight:900;font-size:12.5px;letter-spacing:.1em;margin-bottom:4px}\n.ls-bae .ar{display:flex;align-items:center;justify-content:center;color:var(--gold2);font-weight:900;font-size:22px;padding:0;background:none}\n.ls-vg{display:grid;grid-template-columns:1fr 1fr;gap:12px;margin-top:12px}\n.ls-vc{background:#fff;border:1px solid var(--line);border-radius:16px;overflow:hidden;min-width:0}\n.ls-play{position:relative;display:block;width:100%;aspect-ratio:16/9;max-width:100%;border:0;padding:0;cursor:pointer;background:#111}\n.ls-play img{width:100%;height:100%;object-fit:cover}\n.ls-play:after{content:\"\";position:absolute;left:10px;bottom:10px;width:46px;height:46px;border-radius:50%;background:rgba(242,183,5,.95) url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath d='M8 5v14l11-7z' fill='%231a1205'/%3E%3C/svg%3E\") center/22px no-repeat}\n.ls-vc .c{padding:10px 12px 12px}.ls-vc b{font-size:15.5px}.ls-vc small{display:block;color:var(--mute);font-size:13.5px}\n.ls-shots{display:flex;gap:10px;overflow-x:auto;padding-bottom:6px;margin-top:12px;scroll-snap-type:x mandatory}\n.ls-shots img{flex:none;width:170px;height:260px;object-fit:cover;object-position:top;border-radius:14px;border:1px solid var(--line);scroll-snap-align:start;cursor:zoom-in;background:#fff}\n.ls-small{color:#8a8c98;font-size:12.5px;margin:8px 0 0}\n.ls-foot{color:#8a8c98;font-size:12px;text-align:center;padding:40px 18px 30px}\n.ls-lb{position:fixed;inset:0;z-index:10000;background:rgba(10,10,14,.92);display:none;align-items:center;justify-content:center;padding:18px}\n.ls-lb.on{display:flex}.ls-lb .v{width:min(960px,96vw);aspect-ratio:16/9}.ls-lb .v.tall{width:min(420px,92vw);aspect-ratio:9/16}\n.ls-lb iframe{width:100%;height:100%;border:0;border-radius:12px;background:#000}.ls-lb img{max-height:92vh;border-radius:12px}\n@media (max-width:540px){.ls-vg{grid-template-columns:1fr}.ls-steps span{font-size:0}.ls-steps a{font-size:0}}\n</style>\n\n<div class=\"ls\" id=\"ls\">\n  <div class=\"ls-w\">\n    <div class=\"ls-top\"><span class=\"ls-brand\">אביב מלכה<i>.</i></span><span class=\"ls-tag\">קורס המתחילים · חינם</span></div>\n    <div class=\"ls-steps\" id=\"lsSteps\"></div>\n    <section class=\"ls-head\">\n      <span class=\"ls-pill\" id=\"lsPill\"></span>\n      <h1 id=\"lsTitle\"></h1>\n      <p class=\"ls-sub\" id=\"lsSub\"></p>\n      <div class=\"ls-video\" id=\"lsVideo\"></div>\n      <div class=\"ls-tools\" id=\"lsTools\"></div>\n      <div id=\"lsNext\"></div>\n    </section>\n    <section class=\"ls-sec\">\n      <span class=\"ls-eye\" id=\"lsProofEye\">לפני ואחרי</span>\n      <h2 id=\"lsProofHead\"></h2>\n      <div class=\"ls-ba\" id=\"lsStories\"></div>\n      <div class=\"ls-vg\" id=\"lsVideos\"></div>\n      <div class=\"ls-shots\" id=\"lsShots\"></div>\n      <p class=\"ls-small\">סיפורים וצילומי מסך אמיתיים של תלמידים. התוצאות משתנות מאדם לאדם.</p>\n    </section>\n  </div>\n  <p class=\"ls-foot\">© אביב מלכה · מועדון האיקומרס</p>\n  <div class=\"ls-lb\" id=\"lsLb\"></div>\n</div>\n\n";
})();

(function(){
  var $ = function(id){ return document.getElementById(id); };
  var me = document.currentScript || [].slice.call(document.scripts).filter(function(s){ return /course\/lesson\.js/.test(s.src); }).pop();
  var L = +((me && (me.src.match(/[?&]l=(\d)/) || [])[1]) || (location.pathname.match(/hinam(\d)/) || [])[1] || 1);
  var IMG = 'https://avivmalka123.github.io/club/img/';
  var BASE = 'https://aviv.mykajabi.com/hinam';
  var LESSONS = {
    1: {pill: 'שיעור 1 · ברוכים הבאים', title: 'כיצד להתחיל עסק רווחי בעולם האיקומרס <em>והאונליין</em>', sub: 'כך תעשו זאת, צעד אחר צעד. תצפה עד הסוף, ואז ממשיכים לשיעור הבא.',
        video: {yt: 'ZdH7FTfDE5s'}, next: ['בשיעור הבא', 'למה 90% מהאנשים נופלים בקורסים דיגיטליים', 'ומה עליכם לעשות כדי לא להיות כמו אותם האנשים.'], href: BASE + '2'},
    2: {pill: 'שיעור 2', title: 'למה 90% מהאנשים <em>נופלים</em> בקורסים דיגיטליים', sub: 'ומה עליכם לעשות כדי לא להיות כמו אותם האנשים.',
        video: {yt: 'TzJNatsxTbk'}, next: ['בשיעור הבא', 'איך מקימים חנות דיגיטלית מאפס, בלי ידע קודם', 'בעזרת בינה מלאכותית שתקצר לכם את הדרך, ותייצר לכם מודל דומה לחנות שמייצרת 100,000 ש״ח בחודש.'], href: BASE + '3'},
    3: {pill: 'שיעור 3', title: 'איך להקים חנות דיגיטלית מאפס <em>עם בינה מלאכותית</em>', sub: 'בלי ידע קודם, עם מודל דומה לחנות שמייצרת 100,000 ש״ח בחודש.',
        video: {vid: '9S02JNxg12Dzzxa3'}, tools: [['🛠️', 'הכלי לבניית האתר', 'הכלי שאני משתמש בו בשיעור', 'https://www.buildyourstore.ai/aviv-malka/', 'לכלי ←']],
        next: ['בשיעור הבא', 'הדבר החשוב ביותר: פסיכולוגיה צרכנית', 'בעוד כולם מחפשים מוצרים שיש להם תוצאות באלי אקספרס, הם מפספסים את העיקרון החשוב ביותר. נתעמק בו, ונמצא מוצר מנצח בעזרת השיטה.'], href: BASE + '4'},
    4: {pill: 'שיעור 4', title: 'פסיכולוגיה צרכנית <em>+ מציאת מוצר</em>', sub: 'העיקרון שרוב מי שמחפש מוצרים באלי אקספרס מפספס, ואיך מוצאים מוצר מנצח בעזרתו.',
        video: {yt: 'KOTHkQxhjY8'}, tools: [['🤖', 'הסוכן האישי', 'סוכן ה־GPT שעוזר לך למצוא מוצר', 'https://chatgpt.com/g/g-6860eaaecc108191a6f5a1f5efe3a3b1-mmn-mvtsr-rshvn-bdrvpshypyng', 'לסוכן ←']],
        next: ['בשיעור הבא, האחרון', 'הצעד הבא שלך', 'איך ממשיכים מכאן לחנות שמוכרת, ומה מפריד בין מי שמצליח למי שנשאר בחוץ.'], href: BASE + '5'},
    5: {pill: 'שיעור 5 · סיום', title: 'חשוב לי <em>שתדעו מראש</em>', sub: 'אחוזי ההצלחה שלנו מטורפים, ואנחנו רוצים לשמר אותם.',
        video: {yt: 'LxWMa8pJDMI'}, final: true,
        href: 'https://api.whatsapp.com/send/?phone=972525535537&text=%D7%94%D7%99%D7%99+%D7%90%D7%91%D7%99%D7%91+%D7%A1%D7%99%D7%99%D7%9E%D7%AA%D7%99+%D7%9C%D7%A6%D7%A4%D7%95%D7%AA+%D7%91%D7%A7%D7%95%D7%A8%D7%A1+%D7%91%D7%9E%D7%95%D7%A2%D7%93%D7%95%D7%9F+%D7%94%D7%A1%D7%92%D7%95%D7%A8+%D7%95%D7%90%D7%A0%D7%99+%D7%A8%D7%95%D7%A6%D7%94+%D7%9C%D7%93%D7%91%D7%A8+%D7%90%D7%99%D7%AA%D7%9A+%D7%9C%D7%92%D7%91%D7%99+%D7%94%D7%9E%D7%A9%D7%9A+%D7%AA%D7%94%D7%9C%D7%99%D7%9A+%D7%90%D7%99%D7%A9%D7%99&type=phone_number&app_absent=0'}
  };
  var ST = {
    roi: ['רואי', '118,000 ש״ח בחצי שנה', 'בלי ניסיון בתחום, לא ידע מאיפה מתחילים', 'חנות שמוכרת כל יום, עם ליווי צמוד'],
    niven: ['ניבן', '27,000 ש״ח ב־3 חודשים', 'ניסתה לפתוח חנות לבד, ולא היו מכירות', 'מכירות קבועות, אחרי שמישהו ראה את הטעויות'],
    raviv: ['רביד', '5,397 ש״ח ב־30 יום', 'התחיל מאפס, בלי חנות ובלי מוצר', 'מוכר כל חודש, וכבר בונה מותג שני'],
    daniel: ['דניאל', '3 ההזמנות הראשונות', 'ראה את כולם מוכרים, ולא העז להתחיל', '"לאט ובזהירות", וההזמנות התחילו להגיע']
  };
  var VD = {
    roi: ['9jwg71zrya', 'poster-roi.jpg', 'רואי', '118,000 ש״ח בחצי שנה'],
    niven: ['5mntv13f3k', 'poster-niven.jpg', 'ניבן', '27,000 ש״ח ב־3 חודשים'],
    v1: ['4vf0nnjrq6', 'poster-1.jpg', 'תלמידים מספרים', '"עשיתי את זה מהבית"', 1],
    v2: ['uso5vl68e1', 'poster-2.jpg', 'תלמידים מספרים', '"הלוואי שהייתי מתחיל קודם"'],
    v3: ['6ujyzfnt0y', 'poster-3.jpg', 'תלמידים מספרים', '"הליווי עשה את ההבדל"', 1]
  };
  /* a different mix of proof on every lesson */
  var PROOF = {
    1: {head: 'הם התחילו בדיוק כמוך, מהשיעור הראשון', st: ['daniel', 'niven'], vd: ['v1', 'niven'], sh: ['chat-daniel.jpg', 'orders-1.jpg', 'sales-22k.jpg', 'chat-75k.jpg']},
    2: {head: 'מה עשו אלה שלא נפלו באמצע', st: ['niven', 'raviv'], vd: ['v2', 'roi'], sh: ['chat-raviv.jpg', 'sales-778k.jpg', 'orders-2.jpg', 'chat-daniel.jpg']},
    3: {head: 'אתרים שהוקמו בדיוק בשיטה הזו', st: ['raviv', 'roi'], vd: ['roi', 'v3'], sh: ['sales-22k.jpg', 'orders-1.jpg', 'chat-75k.jpg', 'sales-778k.jpg']},
    4: {head: 'מוצר נכון שינה להם הכל', st: ['roi', 'daniel'], vd: ['niven', 'v1'], sh: ['sales-778k.jpg', 'chat-raviv.jpg', 'orders-2.jpg', 'sales-22k.jpg']},
    5: {head: 'ככה זה נראה כשממשיכים', st: ['roi', 'niven', 'raviv'], vd: ['roi', 'niven', 'v2', 'v3'], sh: ['chat-75k.jpg', 'sales-778k.jpg', 'orders-1.jpg', 'chat-daniel.jpg', 'sales-22k.jpg']}
  };
  var c = LESSONS[L] || LESSONS[1], P = PROOF[L] || PROOF[1];

  $('lsSteps').innerHTML = [1, 2, 3, 4, 5].map(function(n){
    var cls = n < L ? 'done' : n === L ? 'now' : '';
    var lab = n < L ? '✓ שיעור ' + n : 'שיעור ' + n;
    return n < L ? '<a class="' + cls + '" href="' + BASE + n + '"><i></i>' + lab + '</a>' : '<span class="' + cls + '"><i></i>' + lab + '</span>';
  }).join('');
  $('lsPill').textContent = c.pill; $('lsTitle').innerHTML = c.title; $('lsSub').textContent = c.sub;

  if (c.video.yt) $('lsVideo').innerHTML = '<div class="yt"><iframe src="https://www.youtube.com/embed/' + c.video.yt + '?rel=0&modestbranding=1" title="שיעור ' + L + '" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>';
  else {
    $('lsVideo').innerHTML = '<div id="vidalytics_embed_' + c.video.vid + '" style="width:100%;position:relative;padding-top:56.25%;"></div>';
    (function (v, i, d, a, l, y, t, cc, s) {
      y='_'+d.toLowerCase();cc=d+'L';if(!v[d]){v[d]={};}if(!v[cc]){v[cc]={};}if(!v[y]){v[y]={};}var vl='Loader',vli=v[y][vl],vsl=v[cc][vl + 'Script'],vlf=v[cc][vl + 'Loaded'],ve='Embed';
      if (!vsl){vsl=function(u,cb){if(t){cb();return;}s=i.createElement("script");s.type="text/javascript";s.async=1;s.src=u;
        if(s.readyState){s.onreadystatechange=function(){if(s.readyState==="loaded"||s.readyState=="complete"){s.onreadystatechange=null;vlf=1;cb();}};}else{s.onload=function(){vlf=1;cb();};}
        i.getElementsByTagName("head")[0].appendChild(s);};}
      vsl(l+'loader.min.js',function(){if(!vli){var vlc=v[cc][vl];vli=new vlc();}vli.loadScript(l+'player.min.js',function(){var vec=v[d][ve];t=new vec();t.run(a);});});
    })(window, document, 'Vidalytics', 'vidalytics_embed_' + c.video.vid, 'https://fast.vidalytics.com/embeds/YxS8sQvf/' + c.video.vid + '/');
  }
  $('lsTools').innerHTML = (c.tools || []).map(function(t){
    return '<a class="ls-tool" href="' + t[3] + '" target="_blank" rel="noopener"><span class="ic">' + t[0] + '</span><span><b>' + t[1] + '</b><small>' + t[2] + '</small></span><span class="go">' + t[4] + '</span></a>';
  }).join('');
  if (c.final){
    $('lsNext').innerHTML = '<div class="ls-final"><p>זו הסיבה שקיבלתם קורס דיגיטלי בחינם, עוד לפני שבכלל הצטרפתם.</p><p><b>לכן, לפני שמצטרפים, עוברים שיחת התאמה קצרה</b> עם יועץ לימודים מהצוות שלי, לבדיקת התאמה וקבלת פרטים נוספים.</p>' +
      '<a class="ls-btn wa" href="' + c.href + '" target="_blank" rel="noopener">💬 לבדיקת התאמה לתהליך אישי</a><div class="ls-done">🎓 סיימת את כל 5 השיעורים. כל הכבוד!</div></div>';
  } else {
    $('lsNext').innerHTML = '<div class="ls-next"><p class="lab">' + c.next[0] + '</p><h3>' + c.next[1] + '</h3><p>' + c.next[2] + '</p><a class="ls-btn" href="' + c.href + '">למעבר לשיעור הבא ←</a><div class="ls-done">✓ סיימת? השיעור הבא מחכה לך</div></div>';
  }

  $('lsProofHead').textContent = P.head;
  $('lsStories').innerHTML = P.st.map(function(k){ var s = ST[k];
    return '<div class="ls-story"><div class="ls-story-h"><b>' + s[0] + '</b><span>' + s[1] + '</span></div><div class="ls-bae"><div class="b"><i>לפני</i>' + s[2] + '</div><div class="ar">←</div><div class="a"><i>אחרי</i>' + s[3] + '</div></div></div>'; }).join('');
  $('lsVideos').innerHTML = P.vd.map(function(k){ var v = VD[k];
    return '<div class="ls-vc"><button class="ls-play" data-w="' + v[0] + '"' + (v[4] ? ' data-tall' : '') + ' aria-label="צפייה: ' + v[2] + '"><img src="' + IMG + v[1] + '" alt="' + v[2] + '" loading="lazy"></button><div class="c"><b>' + v[2] + '</b><small>' + v[3] + '</small></div></div>'; }).join('');
  $('lsShots').innerHTML = P.sh.map(function(f){ return '<img src="' + IMG + f + '" alt="צילום מסך של תלמיד" loading="lazy">'; }).join('');

  var lb = $('lsLb'); var close = function(){ lb.classList.remove('on'); lb.innerHTML = ''; };
  lb.onclick = close; document.addEventListener('keydown', function(e){ if (e.key === 'Escape') close(); });
  document.addEventListener('click', function(e){
    var p = e.target.closest && e.target.closest('#ls .ls-play');
    if (p){ lb.innerHTML = '<div class="v' + (p.hasAttribute('data-tall') ? ' tall' : '') + '"><iframe src="https://fast.wistia.net/embed/iframe/' + p.getAttribute('data-w') + '?autoPlay=true&playerColor=F2B705" allow="autoplay; fullscreen" allowfullscreen></iframe></div>'; lb.classList.add('on'); return; }
    var im = e.target.closest && e.target.closest('#ls .ls-shots img');
    if (im){ lb.innerHTML = '<img src="' + im.src + '" alt="">'; lb.classList.add('on'); }
  });
})();
