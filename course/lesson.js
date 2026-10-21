/* Aviv Malka course page: lesson (loaded from Kajabi; the original sections stay in the DOM so forms/webhooks keep working) */
(function(){
 var root=document.getElementById('ls-root'); if(!root){root=document.createElement('div');root.id='ls-root';document.body.appendChild(root);}
 try{ document.body.style.background='#FAF8F3'; document.querySelectorAll('[data-section-id], section.section, header.header, footer.footer').forEach(function(el){ if(!el.contains(root)){ el.style.position='absolute'; el.style.left='-9999px'; el.style.height='0'; el.style.overflow='hidden'; } }); }catch(e){}
 root.innerHTML="<!-- ===== Aviv Malka · free course lesson pages hinam1-5 (one script, lesson number from ?l=) · new brand ===== -->\n<link rel=\"preconnect\" href=\"https://fonts.googleapis.com\">\n<link href=\"https://fonts.googleapis.com/css2?family=Heebo:wght@400;500;700;800;900&display=swap\" rel=\"stylesheet\">\n<style>\n.ls{--bg:#FAF8F3;--card:#FFFFFF;--line:#E8E3D8;--ink:#121318;--ink2:#2a2c35;--mute:#5F6170;--gold:#F2B705;--gold2:#E08A00;--soft:#FFF6DA;--ok:#16A34A;--okbg:#EEF9F1;\ndirection:rtl;text-align:right;font-family:'Heebo',Arial,sans-serif;color:var(--ink);background:var(--bg);line-height:1.55;-webkit-font-smoothing:antialiased}\n.ls *{box-sizing:border-box}.ls img{max-width:100%;display:block}\n#ls h1,#ls h2,#ls h3,#ls h4,#ls p,#ls li,#ls span,#ls b,#ls a,#ls button,#ls small{font-family:'Heebo',Arial,sans-serif;letter-spacing:normal;text-transform:none}\n#ls h1,#ls h2,#ls h3,#ls h4{color:var(--ink)}\n.ls-w{max-width:760px;margin:0 auto;padding:0 18px}\n.ls-top{display:flex;align-items:center;justify-content:space-between;padding:18px 0 0}\n.ls-brand{font-weight:900;font-size:18px}.ls-brand i{font-style:normal;color:var(--gold2)}\n.ls-tag{font-weight:800;font-size:13px;color:var(--mute);letter-spacing:.1em}\n.ls-steps{display:flex;gap:6px;margin:18px 0 0}\n.ls-steps a,.ls-steps span{flex:1;display:flex;flex-direction:column;gap:6px;text-decoration:none;color:var(--mute);font-size:12.5px;font-weight:800;text-align:center}\n.ls-steps i{height:7px;border-radius:7px;background:#ECE7DA}\n.ls-steps .done i{background:var(--ok)}.ls-steps .done{color:var(--ok)}\n.ls-steps .now i{background:linear-gradient(90deg,var(--gold2),var(--gold))}.ls-steps .now{color:var(--ink)}\n.ls-head{padding:22px 0 0;text-align:center}\n.ls-pill{display:inline-block;background:var(--soft);border:1px solid #F5D77A;color:#7A5300;border-radius:999px;padding:6px 14px;font-weight:800;font-size:14.5px;margin:0 0 12px}\n#ls h1{font-size:clamp(27px,6.8vw,42px);line-height:1.14;font-weight:900;margin:0 0 10px;text-wrap:balance}\n#ls h1 em{font-style:normal;background:linear-gradient(180deg,transparent 58%,#FFE07A 58%);padding:0 2px}\n.ls-sub{color:var(--mute);font-size:clamp(16px,4vw,19px);max-width:600px;margin:0 auto 18px;text-wrap:balance}\n.ls-video{position:relative;border-radius:20px;overflow:hidden;background:#000;box-shadow:0 30px 60px -30px rgba(30,20,0,.5),0 0 0 1px var(--line)}\n.ls-video .yt{position:relative;padding-top:56.25%}.ls-video iframe{position:absolute;inset:0;width:100%;height:100%;border:0}\n.ls-tools{display:grid;gap:10px;margin:16px 0 0}\n.ls-tool{display:flex;align-items:center;gap:14px;background:#fff;border:1px solid var(--line);border-radius:16px;padding:14px 16px;text-decoration:none;color:var(--ink);box-shadow:0 12px 30px -26px rgba(0,0,0,.4)}\n.ls-tool .ic{flex:none;width:46px;height:46px;border-radius:12px;background:var(--soft);display:flex;align-items:center;justify-content:center;font-size:24px}\n.ls-tool b{display:block;font-size:17px}.ls-tool small{color:var(--mute);font-size:14px}\n.ls-tool .go{margin-right:auto;font-weight:900;color:#1a1205;background:linear-gradient(180deg,#FFD84D,var(--gold) 50%,var(--gold2));border-radius:10px;padding:8px 12px;font-size:14.5px;white-space:nowrap}\n.ls-next{margin:22px 0 0;background:var(--card);border:1px solid var(--line);border-radius:22px;padding:20px;box-shadow:0 18px 40px -30px rgba(0,0,0,.3)}\n.ls-next .lab{font-weight:800;font-size:13px;letter-spacing:.14em;color:var(--gold2);margin:0 0 6px}\n.ls-next h3{margin:0 0 6px;font-size:21px;font-weight:900;line-height:1.3}\n.ls-next p{margin:0 0 16px;color:var(--mute);font-size:16px}\n.ls-btn{display:flex;align-items:center;justify-content:center;gap:10px;width:100%;border:0;border-radius:16px;padding:19px 18px;cursor:pointer;font-size:20px;font-weight:900;color:#1a1205;text-decoration:none;\nbackground:linear-gradient(180deg,#FFD84D,var(--gold) 50%,var(--gold2));box-shadow:0 14px 30px -10px rgba(224,138,0,.6);animation:lsg 2.6s ease-in-out infinite}\n@keyframes lsg{0%,100%{box-shadow:0 14px 30px -10px rgba(224,138,0,.6)}50%{box-shadow:0 14px 40px -6px rgba(224,138,0,.85)}}\n.ls-btn.wa{background:linear-gradient(180deg,#3BDC7A,#1FA855);color:#fff;box-shadow:0 14px 30px -10px rgba(31,168,85,.6);animation:none}\n.ls-done{display:flex;align-items:center;justify-content:center;gap:8px;color:var(--mute);font-size:14px;margin-top:10px}\n.ls-final{margin:22px 0 0;background:linear-gradient(160deg,#FFF6DA,#FFFDF5);border:1px solid #F5D77A;border-radius:22px;padding:22px 20px}\n.ls-final p{margin:0 0 10px;font-size:17.5px;color:#3a3220}\n.ls-final b{color:#7A5300}\n.ls-sec{padding:46px 0 0}\n#ls h2{font-size:clamp(24px,5.8vw,32px);font-weight:900;margin:0 0 14px;line-height:1.15;text-wrap:balance}\n.ls-eye{display:block;color:var(--gold2);font-weight:800;font-size:13.5px;letter-spacing:.14em;margin:0 0 6px}\n.ls-ba{display:grid;gap:12px}\n.ls-story{background:#fff;border:1px solid var(--line);border-radius:20px;overflow:hidden;box-shadow:0 18px 40px -32px rgba(0,0,0,.35)}\n.ls-story-h{display:flex;align-items:center;justify-content:space-between;padding:14px 16px 0}\n.ls-story-h b{font-size:20px;font-weight:900}\n.ls-story-h span{background:var(--okbg);color:var(--ok);border-radius:10px;padding:3px 10px;font-weight:800;font-size:14.5px}\n.ls-bae{display:grid;grid-template-columns:1fr 34px 1fr;gap:6px;padding:12px 16px 16px}\n.ls-bae div{border-radius:14px;padding:12px;font-size:15.5px;line-height:1.45}\n.ls-bae .b{background:#F6F4EF;color:var(--mute)}.ls-bae .a{background:var(--okbg);color:#14532d}\n.ls-bae i{display:block;font-style:normal;font-weight:900;font-size:12.5px;letter-spacing:.1em;margin-bottom:4px}\n.ls-bae .ar{display:flex;align-items:center;justify-content:center;color:var(--gold2);font-weight:900;font-size:22px;padding:0;background:none}\n.ls-vg{display:grid;grid-template-columns:1fr 1fr;gap:12px;margin-top:12px}\n.ls-vc{background:#fff;border:1px solid var(--line);border-radius:16px;overflow:hidden;min-width:0}\n.ls-play{position:relative;display:block;width:100%;aspect-ratio:16/9;max-width:100%;border:0;padding:0;cursor:pointer;background:#111}\n.ls-play img{width:100%;height:100%;object-fit:cover}\n.ls-play:after{content:\"\";position:absolute;left:10px;bottom:10px;width:46px;height:46px;border-radius:50%;background:rgba(242,183,5,.95) url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath d='M8 5v14l11-7z' fill='%231a1205'/%3E%3C/svg%3E\") center/22px no-repeat}\n.ls-vc .c{padding:10px 12px 12px}.ls-vc b{font-size:15.5px}.ls-vc small{display:block;color:var(--mute);font-size:13.5px}\n.ls-shots{display:flex;gap:10px;overflow-x:auto;padding-bottom:6px;margin-top:12px;scroll-snap-type:x mandatory}\n.ls-shots img{flex:none;width:170px;height:260px;object-fit:cover;object-position:top;border-radius:14px;border:1px solid var(--line);scroll-snap-align:start;cursor:zoom-in;background:#fff}\n.ls-small{color:#8a8c98;font-size:12.5px;margin:8px 0 0}\n.ls-foot{color:#8a8c98;font-size:12px;text-align:center;padding:40px 18px 30px}\n.ls-lb{position:fixed;inset:0;z-index:10000;background:rgba(10,10,14,.92);display:none;align-items:center;justify-content:center;padding:18px}\n.ls-lb.on{display:flex}.ls-lb .v{width:min(960px,96vw);aspect-ratio:16/9}.ls-lb .v.tall{width:min(420px,92vw);aspect-ratio:9/16}\n.ls-lb iframe{width:100%;height:100%;border:0;border-radius:12px;background:#000}.ls-lb img{max-height:92vh;border-radius:12px}\n.ls-q{margin:18px 0 0;background:#fff;border:1px solid var(--line);border-radius:22px;padding:22px 18px;box-shadow:0 24px 50px -34px rgba(0,0,0,.35)}\n.ls-q .lab{font-weight:800;font-size:13px;letter-spacing:.14em;color:var(--gold2);margin:0 0 6px}\n.ls-q h3{margin:0 0 6px;font-size:23px;font-weight:900;line-height:1.25;text-wrap:balance}\n.ls-q .intro{margin:0 0 16px;color:var(--mute);font-size:16px}\n.ls-qbar{display:flex;align-items:center;gap:10px;margin:0 0 14px;font-weight:800;font-size:13.5px;color:var(--mute)}\n.ls-qbar i{flex:1;height:7px;border-radius:7px;background:#ECE7DA;overflow:hidden}.ls-qbar i b{display:block;height:100%;background:linear-gradient(90deg,var(--gold2),var(--gold));transition:width .35s}\n.ls-qq{font-size:19px;font-weight:900;margin:0 0 12px;line-height:1.35}\n.ls-opts{display:grid;gap:9px}\n.ls-opt{display:flex;align-items:center;gap:12px;width:100%;text-align:right;background:#FBFAF6;border:1.5px solid var(--line);border-radius:14px;padding:14px 15px;font-size:16.5px;font-weight:700;color:var(--ink);cursor:pointer;font-family:inherit;transition:border-color .15s,background .15s}\n.ls-opt:hover{border-color:var(--gold);background:var(--soft)}\n.ls-opt .e{font-size:22px;flex:none}\n.ls-scale{display:grid;grid-template-columns:repeat(5,1fr);gap:8px}\n.ls-scale .ls-opt{justify-content:center;font-size:19px;font-weight:900;padding:14px 0}\n.ls-scl{display:flex;justify-content:space-between;color:var(--mute);font-size:13px;margin-top:8px}\n.ls-back{background:none;border:0;color:var(--mute);font-size:14px;margin-top:12px;cursor:pointer;font-family:inherit;padding:0}\n.ls-res{text-align:center}\n.ls-ring{width:150px;height:150px;margin:4px auto 10px;position:relative}\n.ls-ring svg{width:100%;height:100%;transform:rotate(-90deg)}\n.ls-ring .n{position:absolute;inset:0;display:flex;flex-direction:column;align-items:center;justify-content:center;font-weight:900;font-size:40px;line-height:1}\n.ls-ring .n small{font-size:13px;color:var(--mute);font-weight:800;margin-top:4px}\n.ls-res h3{margin:6px 0 8px}\n.ls-res .why{color:var(--ink2);font-size:16.5px;margin:0 auto 14px;max-width:520px}\n.ls-gap{background:var(--soft);border:1px solid #F5D77A;border-radius:16px;padding:16px 16px 14px;text-align:right;margin:0 0 16px;font-size:16px;color:#3a3220;line-height:1.6}\n.ls-gap p{margin:0 0 8px}.ls-gap .t{font-weight:900;font-size:17px;color:var(--ink)}.ls-gap .m b{color:#7A5300}\n.ls-gap .ask{margin:10px 0 0;padding:10px 12px;background:#fff;border-right:4px solid var(--gold);border-radius:10px;font-weight:800;color:var(--ink)}\n.ls-prof{display:flex;align-items:center;gap:14px;text-align:right;background:linear-gradient(160deg,#FFF6DA,#FFFDF5);border:1px solid #F5D77A;border-radius:16px;padding:14px 16px;margin:6px 0 14px}\n.ls-prof .ic{flex:none;width:54px;height:54px;border-radius:14px;background:#fff;display:flex;align-items:center;justify-content:center;font-size:30px;box-shadow:0 6px 16px -10px rgba(0,0,0,.3)}\n.ls-prof small{display:block;color:var(--gold2);font-weight:800;font-size:12.5px;letter-spacing:.08em}.ls-prof b{display:block;font-size:22px;font-weight:900;line-height:1.2}\n.ls-prof p{margin:2px 0 0;color:var(--ink2);font-size:15px;line-height:1.5}\n.ls-opt .tx{flex:1}.ls-opt .lv{flex:none;background:var(--soft);border:1px solid #F5D77A;color:#7A5300;border-radius:999px;padding:2px 10px;font-size:13.5px;font-weight:900}\n.ls-in{width:100%;border:1.5px solid var(--line);border-radius:14px;padding:15px;font-size:17px;font-family:inherit;margin:0 0 10px;background:#FBFAF6;color:var(--ink)}\n.ls-in:focus{outline:0;border-color:var(--gold)}\n.ls-err{display:none;color:#B42318;font-weight:700;font-size:14.5px;margin:0 0 10px}\n.ls-alt{display:block;text-align:center;color:var(--mute);font-size:14.5px;margin-top:12px}\n.ls-alt a{color:#1FA855;font-weight:800}\n@media (max-width:540px){.ls-vg{grid-template-columns:1fr}.ls-steps span{font-size:0}.ls-steps a{font-size:0}}\n</style>\n\n<div class=\"ls\" id=\"ls\">\n  <div class=\"ls-w\">\n    <div class=\"ls-top\"><span class=\"ls-brand\">אביב מלכה<i>.</i></span><span class=\"ls-tag\">קורס המתחילים · חינם</span></div>\n    <div class=\"ls-steps\" id=\"lsSteps\"></div>\n    <section class=\"ls-head\">\n      <span class=\"ls-pill\" id=\"lsPill\"></span>\n      <h1 id=\"lsTitle\"></h1>\n      <p class=\"ls-sub\" id=\"lsSub\"></p>\n      <div class=\"ls-video\" id=\"lsVideo\"></div>\n      <div class=\"ls-tools\" id=\"lsTools\"></div>\n      <div id=\"lsNext\"></div>\n    </section>\n    <section class=\"ls-sec\">\n      <span class=\"ls-eye\" id=\"lsProofEye\">לפני ואחרי</span>\n      <h2 id=\"lsProofHead\"></h2>\n      <div class=\"ls-ba\" id=\"lsStories\"></div>\n      <div class=\"ls-vg\" id=\"lsVideos\"></div>\n      <div class=\"ls-shots\" id=\"lsShots\"></div>\n      <p class=\"ls-small\">סיפורים וצילומי מסך אמיתיים של תלמידים. התוצאות משתנות מאדם לאדם.</p>\n    </section>\n  </div>\n  <p class=\"ls-foot\">© אביב מלכה · מועדון האיקומרס</p>\n  <div class=\"ls-lb\" id=\"lsLb\"></div>\n</div>\n\n";
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
        video: {yt: 'cCz0oGBcDIY'}, next: ['בשיעור הבא', 'איך מקימים חנות דיגיטלית מאפס, בלי ידע קודם', 'בעזרת בינה מלאכותית שתקצר לכם את הדרך, ותייצר לכם מודל דומה לחנות שמייצרת 100,000 ש״ח בחודש.'], href: BASE + '3'},
    3: {pill: 'שיעור 3', title: 'איך להקים חנות דיגיטלית מאפס <em>עם בינה מלאכותית</em>', sub: 'בלי ידע קודם, עם מודל דומה לחנות שמייצרת 100,000 ש״ח בחודש.',
        video: {vid: '9S02JNxg12Dzzxa3'}, tools: [['🛠️', 'הכלי לבניית האתר', 'הכלי שאני משתמש בו בשיעור', 'https://www.buildyourstore.ai/aviv-malka/', 'לכלי ←']],
        next: ['בשיעור הבא', 'הדבר החשוב ביותר: פסיכולוגיה צרכנית', 'בעוד כולם מחפשים מוצרים שיש להם תוצאות באלי אקספרס, הם מפספסים את העיקרון החשוב ביותר. נתעמק בו, ונמצא מוצר מנצח בעזרת השיטה.'], href: BASE + '4'},
    4: {pill: 'שיעור 4', title: 'פסיכולוגיה צרכנית <em>+ מציאת מוצר</em>', sub: 'העיקרון שרוב מי שמחפש מוצרים באלי אקספרס מפספס, ואיך מוצאים מוצר מנצח בעזרתו.',
        video: {yt: 'KOTHkQxhjY8'}, tools: [['🤖', 'הסוכן האישי', 'סוכן ה־GPT שעוזר לך למצוא מוצר', 'https://chatgpt.com/g/g-6860eaaecc108191a6f5a1f5efe3a3b1-mmn-mvtsr-rshvn-bdrvpshypyng', 'לסוכן ←']],
        next: ['בשיעור הבא, האחרון', 'הצעד הבא שלך', 'איך ממשיכים מכאן לחנות שמוכרת, ומה מפריד בין מי שמצליח למי שנשאר בחוץ.'], href: BASE + '5'},
    5: {pill: 'שיעור 5 · סיום', title: 'חשוב לי <em>שתדעו מראש</em>', sub: 'אחוזי ההצלחה שלנו מטורפים, ואנחנו רוצים לשמר אותם.',
        video: {yt: 'eD0cN1hTcsU'}, final: true,
        href: 'https://api.whatsapp.com/send/?phone=972525535537&text=%D7%94%D7%99%D7%99+%D7%90%D7%91%D7%99%D7%91+%D7%A1%D7%99%D7%99%D7%9E%D7%AA%D7%99+%D7%9C%D7%A6%D7%A4%D7%95%D7%AA+%D7%91%D7%A7%D7%95%D7%A8%D7%A1+%D7%91%D7%9E%D7%95%D7%A2%D7%93%D7%95%D7%9F+%D7%94%D7%A1%D7%92%D7%95%D7%A8+%D7%95%D7%90%D7%A0%D7%99+%D7%A8%D7%95%D7%A6%D7%94+%D7%9C%D7%93%D7%91%D7%A8+%D7%90%D7%99%D7%AA%D7%9A+%D7%9C%D7%92%D7%91%D7%99+%D7%94%D7%9E%D7%A9%D7%9A+%D7%AA%D7%94%D7%9C%D7%99%D7%9A+%D7%90%D7%99%D7%A9%D7%99&type=phone_number&app_absent=0'}
  };
  var ST = {
    roi: ['רואי', '118,000 ש״ח בחצי שנה', 'בלי ניסיון בתחום, לא ידע מאיפה מתחילים', 'חנות שמוכרת כל יום'],
    niven: ['ניבין', '27,000 ש״ח ב־3 חודשים', 'ניסתה לפתוח חנות לבד, ולא היו מכירות', 'מכירות קבועות, אחרי שמישהו ראה את הטעויות'],
    raviv: ['רביד', '5,397 ש״ח ב־30 יום', 'התחיל מאפס, בלי חנות ובלי מוצר', 'מוכר כל חודש, וכבר בונה מותג שני'],
    daniel: ['דניאל', '3 ההזמנות הראשונות', 'ראה את כולם מוכרים, ולא העז להתחיל', '"לאט ובזהירות", וההזמנות התחילו להגיע']
  };
  var VD = {
    roi: ['9jwg71zrya', 'poster-roi.jpg', 'רואי', '118,000 ש״ח בחצי שנה'],
    niven: ['5mntv13f3k', 'poster-niven.jpg', 'ניבין', '27,000 ש״ח ב־3 חודשים'],
    v1: ['4vf0nnjrq6', 'poster-1.jpg', 'תלמידים מספרים', '"עשיתי את זה מהבית"', 1],
    v2: ['uso5vl68e1', 'poster-2.jpg', 'תלמידים מספרים', '"הלוואי שהייתי מתחיל קודם"'],
    v3: ['6ujyzfnt0y', 'poster-3.jpg', 'תלמידים מספרים', '"זה מה שעשה את ההבדל"', 1]
  };
  /* a different mix of proof on every lesson */
  var PROOF = {
    1: {head: 'הם התחילו בדיוק כמוך, מהשיעור הראשון', st: ['daniel', 'niven'], vd: ['v1', 'niven'], sh: ['chat-daniel.jpg', 'orders-1.jpg', 'sales-22k.jpg', 'chat-75k.jpg']},
    2: {head: 'מה עשו אלה שלא נפלו באמצע', st: ['niven', 'raviv'], vd: ['v2', 'roi'], sh: ['chat-raviv.jpg', 'sales-778k.jpg', 'orders-2.jpg', 'chat-daniel.jpg']},
    3: {head: 'אתרים שהוקמו בדיוק בשיטה הזו', st: ['raviv', 'roi'], vd: ['roi', 'v3'], sh: ['sales-22k.jpg', 'orders-1.jpg', 'chat-75k.jpg', 'sales-778k.jpg']},
    4: {head: 'מוצר נכון שינה להם הכל', st: ['roi', 'daniel'], vd: ['niven', 'v1'], sh: ['sales-778k.jpg', 'chat-raviv.jpg', 'orders-2.jpg', 'sales-22k.jpg']},
    5: {head: 'ככה זה נראה כשממשיכים', st: ['roi', 'niven', 'raviv'], vd: ['roi', 'niven', 'v2', 'v3'], sh: ['chat-75k.jpg', 'sales-778k.jpg', 'orders-1.jpg', 'chat-daniel.jpg', 'sales-22k.jpg']}
  };

  /* lesson 5: readiness test (5 questions → personal score → WhatsApp with the answers prefilled) */
  function readiness(waHref){
    var WA = 'https://wa.me/972525535537?text=';
    var Q = [
      {k: 'זמן', q: 'כמה זמן תוכל להקדיש לעסק בשבוע?', o: [['⏱️', 'פחות מ־3 שעות', 6], ['🕒', '3 עד 7 שעות', 15], ['🕘', '7 עד 15 שעות', 20], ['🔥', 'יותר מ־15 שעות', 20]],
       gap: ['זמן', 'כמה שעות בשבוע הולכות היום על גלילה בטלפון, סדרות וקבוצות וואטסאפ? רוב האנשים לא צריכים עוד זמן, הם צריכים להחליט לאן הזמן שלהם הולך. כמה שעות בשבוע שמושקעות בבניית נכס משלך עובדות בשבילך גם בעוד שנה, שעה של גלילה נעלמת.', 'אילו 5 שעות בשבוע אתה מוכן להחזיר לעצמך, כבר מהשבוע הזה?']},
      {k: 'השקעה בעצמי', q: 'כשאתה מוצא את הדרך הנכונה, איך אתה מתייחס להשקעה בעצמך?', o: [['🚀', 'אם אני רואה שזה עובד, אני משקיע בעצמי בלי לחשוב פעמיים', 20], ['💰', 'יש לי סכום בצד שמחכה בדיוק להזדמנות כזו', 20], ['👫', 'אני רוצה, אבל אני מחליט את זה יחד עם בן או בת הזוג', 14], ['⛔', 'כרגע אין לי שום אפשרות להשקיע בעצמי', 2]],
       gap: ['השקעה בעצמך', 'על מה הכסף שלך באמת הולך היום? על דברים שמקדמים אותך, או על דברים שנגמרים בסוף החודש? רוב האנשים משקיעים בטלפון חדש, בחופשה ובבילויים, ואף פעם לא בדבר היחיד שיכול להכפיל את ההכנסה שלהם: הם עצמם.', 'מה היית יכול לשנות כבר עכשיו, כדי לבנות לעצמך נכס דיגיטלי שעובד בשבילך גם כשאתה ישן, בחודשים הקרובים?']},
      {k: 'מה עצר', q: 'בוא נהיה כנים: מה באמת עצר אותך עד היום?', o: [['🧭', 'לא ידעתי מאיפה מתחילים, אז לא התחלתי בכלל', 15], ['😰', 'פחד להפסיד כסף, אבל אני יודע שאני צריך להתגבר', 12], ['🧱', 'ניסיתי לבד ונתקעתי, ואני לא מוכן לוותר', 20], ['📅', 'תירצתי לעצמי שאין לי זמן, ודחיתי', 10]],
       gap: ['להפסיק לדחות', 'כמה פעמים כבר אמרת לעצמך "בחודש הבא"? כל חודש שעובר בלי להתחיל הוא חודש שבו מישהו אחר מוכר את המוצר שאתה יכולת למכור. התירוץ מרגיש אמיתי, אבל המחיר שלו אמיתי עוד יותר.', 'אם תמשיך בדיוק כמו עכשיו, איפה תהיה בעוד שנה?']},
      {k: 'איפה אני', q: 'איפה אתה עומד עכשיו, אחרי 5 השיעורים?', o: [['🛍️', 'כבר פתחתי חנות בזכות הקורס, עכשיו אני רוצה מכירות', 20], ['🎯', 'בחרתי נישה ומוצר, ואני רוצה להתחיל למכור', 20], ['🗺️', 'הבנתי מה עושים, ואני רוצה שיובילו אותי עד המכירה הראשונה', 20], ['🤔', 'עדיין מתלבט, אבל משהו בי יודע שזה הזמן', 8]],
       gap: ['החלטה', 'מה ההבדל בין מי שראה 5 שיעורים לבין מי שיש לו חנות שמוכרת? לא עוד ידע. החלטה אחת שהוא הפסיק לדחות. את רוב מה שצריך לדעת כבר ראית.', 'מה ההחלטה האחת שאתה דוחה עכשיו, ומה היא עולה לך כל יום?']},
      {k: 'רצינות', q: 'כמה אתה רציני להתחיל ב־30 הימים הקרובים?', o: [['🔥', 'מאוד רציני: אני מתחיל השבוע, לא משנה מה', 20, '10/10'], ['💪', 'רציני: רק צריך תוכנית ברורה ומישהו שיוביל', 18, '8/10'], ['🙂', 'רוצה, אבל עוד לא החלטתי סופית', 10, '5/10'], ['👀', 'רק בודק כרגע', 4, '2/10']],
       gap: ['מחויבות', 'דמיין שתי גרסאות שלך בעוד שנה: אחת שהתחילה החודש, ואחת שעדיין "בודקת". המרחק בין שתי התמונות האלה הוא המחיר של לחכות.', 'איזו מהשתיים אתה רוצה לפגוש בעוד שנה?']}
    ];
    /* personality profile from the honest blocker answer (Q3) */
    var PROF = [
      ['המחפש', '🧭', 'הרצון כבר שם, חסרה לך רק מפה. מי שמקבל מפה ברורה מתקדם אצלנו הכי מהר.'],
      ['המחושב', '🧠', 'אתה לא מהמר, אתה מחשב. זה יתרון ענק באיקומרס, בתנאי שיש לך שיטה שמורידה את הסיכון.'],
      ['הלוחם', '🥊', 'נפלת, קמת, ואתה עדיין פה. רוב האנשים מוותרים בדיוק בנקודה שבה אתה נמצא עכשיו.'],
      ['הדחיין המוכשר', '⏳', 'יש לך את היכולת, ואתה יודע את זה. מה שחסר זה רגע אחד של החלטה.']
    ];
    var A = [], box = $('lsQ');
    function bar(i){ return '<div class="ls-qbar"><span>' + (i + 1) + '/5</span><i><b style="width:' + (i / 5 * 100) + '%"></b></i></div>'; }
    function intro(){
      box.innerHTML = '<p class="lab">מבחן אישיות יזמית · 60 שניות</p><h3>מה האישיות שלך אומרת על הכסף שתייצר מאונליין? 💸</h3><p class="intro">5 שאלות כנות. תקבל את הפרופיל היזמי שלך, ציון מוכנות, ומה בדיוק עומד בינך לבין הכסף הראשון שלך.</p><button class="ls-btn" id="lsQGo">בוא נגלה איזה יזם אני ←</button>';
      $('lsQGo').onclick = function(){ step(0); };
    }
    function step(i){
      var q = Q[i], h = bar(i) + '<p class="ls-qq">' + q.q + '</p>';
      h += '<div class="ls-opts">' + q.o.map(function(o, j){ return '<button class="ls-opt" data-j="' + j + '" data-v="' + o[2] + '" data-t="' + o[1] + '"><span class="e">' + o[0] + '</span><span class="tx">' + o[1] + '</span>' + (o[3] ? '<span class="lv">' + o[3] + '</span>' : '') + '</button>'; }).join('') + '</div>';
      if (i) h += '<button class="ls-back" id="lsQB">→ חזרה</button>';
      box.innerHTML = h;
      [].forEach.call(box.querySelectorAll('.ls-opt'), function(b){ b.onclick = function(){ A[i] = {v: +b.getAttribute('data-v'), t: b.getAttribute('data-t'), j: +b.getAttribute('data-j')}; i < 4 ? step(i + 1) : details(); }; });
      if (i) $('lsQB').onclick = function(){ step(i - 1); };
      box.scrollIntoView({block: 'nearest', behavior: 'smooth'});
    }
    var HOOK = 'https://hook.eu2.make.com/aos52nvubr4hbal7r1a9a9i7tvfjqcny';
    var lead = {}; try { lead = JSON.parse(localStorage.getItem('alm_lead') || '{}') || {}; } catch(e){}
    function details(){
      box.innerHTML = bar(5).replace('6/5', '✓') + '<p class="ls-qq">התוצאה שלך מוכנה 🎯 לאן לשלוח אותה?</p>' +
        '<input class="ls-in" id="lsQN" placeholder="השם שלך" autocomplete="name">' +
        '<input class="ls-in" id="lsQP" type="tel" inputmode="tel" placeholder="פלאפון" autocomplete="tel" dir="ltr" style="text-align:right">' +
        '<p class="ls-err" id="lsQE"></p><button class="ls-btn" id="lsQS" style="animation:none">הראו לי את הציון שלי ←</button><button class="ls-back" id="lsQB">→ חזרה</button>';
      $('lsQN').value = lead.name || ''; $('lsQP').value = lead.phone || '';
      $('lsQB').onclick = function(){ step(4); };
      $('lsQS').onclick = function(){
        var name = $('lsQN').value.trim(), phone = $('lsQP').value.replace(/[^\d+]/g, ''), e = $('lsQE');
        var bad = name.length < 2 ? 'רק שם, כדי שנדע איך לפנות אליך' : !/^(\+?972|0)5\d{8}$/.test(phone) ? 'מספר הפלאפון לא נראה מלא' : '';
        if (bad){ e.textContent = bad; e.style.display = 'block'; return; }
        try { lead.name = name; lead.phone = phone; localStorage.setItem('alm_lead', JSON.stringify(lead)); } catch(x){}
        result(name, phone);
      };
    }
    function result(name, phone){
      var score = Math.min(100, A.reduce(function(s, a){ return s + a.v; }, 0));
      var low = 0; A.forEach(function(a, i){ if (a.v < A[low].v) low = i; });
      var tier = score >= 75 ? ['אתה מוכן. באמת.', 'יש לך את הזמן, את הרצון ואת הבסיס. מי שמגיע לציון כזה בדרך כלל לא צריך עוד מידע, הוא צריך תוכנית ומישהו שיחזיק איתו את הקצב.', 'שלח לאביב את התוצאה, ובוא נבנה לך תוכנית']
        : score >= 50 ? ['אתה קרוב. נשאר דבר אחד.', 'הבסיס קיים. יש נקודה אחת שעוצרת אותך, וברגע שהיא נפתרת הדרך פתוחה.', 'שלח לאביב את התוצאה, ונפתור את זה יחד']
        : ['עוד לא הזמן, וזה בסדר.', 'כרגע חסרים כמה דברים כדי להתחיל בצורה בטוחה. שיחה קצרה תעזור לך להבין מה הצעד הנכון בשבילך, בלי התחייבות.', 'שלח לאביב את התוצאה, ונמצא לך את הצעד הנכון'];
      var pr = PROF[A[2].j] || PROF[0], g = Q[low].gap;
      var lines = Q.map(function(q, i){ return q.k + ': ' + A[i].t; }).join('\n');
      var msg = 'היי אביב סיימתי לצפות בקורס במועדון הסגור ואני רוצה לדבר איתך לגבי המשך תהליך אישי\n\nהפרופיל שלי: ' + pr[0] + ' ' + pr[1] + ' · מוכנות ' + score + '%\n' + lines;
      var summary = 'מבחן מוכנות, שיעור 5 בקורס החינמי (' + score + '%, ' + pr[0] + ')\n' + name + ' · ' + phone + '\n\n' + lines + '\n\nהכי חסר: ' + g[0];
      try { fetch(HOOK, {method: 'POST', headers: {'Content-Type': 'application/json'}, keepalive: true, body: JSON.stringify({source: 'course-readiness', submitted_at: new Date().toLocaleString('he-IL', {timeZone: 'Asia/Jerusalem'}), name: name, phone: phone, score: score, profile: pr[0], answers: Q.map(function(q, i){ return {q: q.k, a: A[i].t}; }), summary: summary})}); } catch(x){}
      var R = 64, C = 2 * Math.PI * R;
      box.innerHTML = '<div class="ls-res"><p class="lab">התוצאה שלך</p><div class="ls-ring"><svg viewBox="0 0 150 150"><circle cx="75" cy="75" r="' + R + '" fill="none" stroke="#ECE7DA" stroke-width="12"/><circle id="lsArc" cx="75" cy="75" r="' + R + '" fill="none" stroke="url(#lsg)" stroke-width="12" stroke-linecap="round" stroke-dasharray="' + C + '" stroke-dashoffset="' + C + '" style="transition:stroke-dashoffset 1.2s ease-out"/><defs><linearGradient id="lsg"><stop offset="0" stop-color="#E08A00"/><stop offset="1" stop-color="#F2B705"/></linearGradient></defs></svg><div class="n"><span id="lsNum">0%</span><small>מוכנות</small></div></div>' +
        '<div class="ls-prof"><span class="ic">' + pr[1] + '</span><div><small>הפרופיל היזמי שלך</small><b>' + pr[0] + '</b><p>' + pr[2] + '</p></div></div>' +
        '<h3>' + tier[0] + '</h3><p class="why">' + tier[1] + '</p>' +
        '<div class="ls-gap"><p class="t">🧠 חומר למחשבה עד השיחה</p><p class="m">מה הכי חסר לך עכשיו: <b>' + g[0] + '</b></p><p>' + g[1] + '</p><p class="ask">' + g[2] + '</p></div>' +
        '<a class="ls-btn wa" href="' + WA + encodeURIComponent(msg) + '" target="_blank" rel="noopener">💬 ' + tier[2] + '</a>' +
        '<p class="ls-done">👆 ההודעה עם התשובות שלך כבר כתובה. לוחצים שלח, ונחזור אליך אישית עם הצעד הבא.</p>' +
        '<button class="ls-back" id="lsQR">↺ לעשות שוב</button></div>';
      setTimeout(function(){ $('lsArc').style.strokeDashoffset = C * (1 - score / 100); var n = 0, t = setInterval(function(){ n = Math.min(score, n + 2); $('lsNum').textContent = n + '%'; if (n >= score) clearInterval(t); }, 20); }, 60);
      $('lsQR').onclick = function(){ A = []; step(0); };
      box.scrollIntoView({block: 'start', behavior: 'smooth'});
    }
    intro();
    $('lsNext').insertAdjacentHTML('beforeend', '<p class="ls-alt">מעדיפים לדלג על המבחן? <a href="' + waHref + '" target="_blank" rel="noopener">לבדיקת התאמה לתהליך אישי</a></p>');
  }

  var c = LESSONS[L] || LESSONS[1], P = PROOF[L] || PROOF[1];

  $('lsSteps').innerHTML = [1, 2, 3, 4, 5].map(function(n){
    var cls = n < L ? 'done' : n === L ? 'now' : '';
    var lab = n < L ? '✓ שיעור ' + n : 'שיעור ' + n;
    return n < L ? '<a class="' + cls + '" href="' + BASE + n + '"><i></i>' + lab + '</a>' : '<span class="' + cls + '"><i></i>' + lab + '</span>';
  }).join('');
  $('lsPill').textContent = c.pill; $('lsTitle').innerHTML = c.title; $('lsSub').textContent = c.sub;

  if (c.video.yt) $('lsVideo').innerHTML = '<div class="yt"><iframe src="https://www.youtube.com/embed/' + c.video.yt + '?rel=0&modestbranding=1" title="שיעור ' + L + '" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>';
  else if (document.getElementById('vidalytics_embed_' + c.video.vid)) {
    /* the original Kajabi section already embeds this player (same element id): move it into the new design instead of embedding twice */
    $('lsVideo').appendChild(document.getElementById('vidalytics_embed_' + c.video.vid));
  }
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
    $('lsNext').innerHTML = '<div class="ls-final"><p>זו הסיבה שקיבלתם קורס דיגיטלי בחינם, עוד לפני שבכלל הצטרפתם.</p><p><b>לכן, לפני שמצטרפים, עוברים שיחת התאמה קצרה</b> עם יועץ לימודים מהצוות שלי, לבדיקת התאמה וקבלת פרטים נוספים.</p><div class="ls-done">🎓 סיימת את כל 5 השיעורים. כל הכבוד!</div></div>' +
      '<div class="ls-q" id="lsQ"></div>';
    readiness(c.href);
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
