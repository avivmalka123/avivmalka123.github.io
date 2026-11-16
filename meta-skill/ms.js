/* Meta holiday campaign skill · download page · mounts into <div id="ms-root"></div> (Kajabi custom code) */
(function () {
  var BASE = 'https://avivmalka123.github.io/meta-skill/';
  var ZIP = BASE + 'meta-holiday-campaign.zip';
  var PROMPT = 'תבנה לי קמפיין לחגים במטא';
  var BF = new Date('2026-11-27T00:00:00+02:00').getTime();
  var root = document.getElementById('ms-root');
  if (!root) return;

  var css = `
#ms{--ink:#0B0F1A;--mu:#4A5468;--soft:#8A93A3;--line:#CDD5E1;--b:#1F6BFF;--b2:#5B9BFF;--bs:#E4EEFF;--red:#E3343A;--card:#fff;--paper:#F3F5F8;
  font-family:Heebo,Assistant,system-ui,sans-serif;direction:rtl;text-align:right;color:var(--ink);line-height:1.7;font-size:17px;-webkit-font-smoothing:antialiased;
  background:radial-gradient(520px 360px at 92% 4%,rgba(91,155,255,.20),transparent 70%),radial-gradient(460px 380px at 0% 30%,rgba(91,155,255,.13),transparent 70%),radial-gradient(520px 420px at 100% 66%,rgba(91,155,255,.12),transparent 70%),radial-gradient(420px 360px at 6% 94%,rgba(91,155,255,.14),transparent 70%),var(--paper);
  overflow-x:hidden}
#ms *{box-sizing:border-box}
#ms a{color:inherit}
#ms .ms-w{max-width:760px;margin:0 auto;padding:0 18px}
#ms .ms-hero{padding:40px 0 10px}
#ms .ms-tag{display:inline-flex;align-items:center;gap:8px;background:var(--b);color:#fff;font-weight:800;font-size:14.5px;border-radius:999px;padding:5px 15px;margin-bottom:18px;box-shadow:0 6px 18px rgba(31,107,255,.28)}
#ms .ms-tag i{width:8px;height:8px;border-radius:50%;background:#fff;display:inline-block}
#ms h1{font-size:34px;line-height:1.24;margin:0 0 20px;font-weight:900;letter-spacing:-.6px}
#ms .u{position:relative;white-space:nowrap;color:var(--b)}
#ms .u svg{position:absolute;left:-4px;right:-4px;bottom:-9px;width:calc(100% + 8px);height:15px;overflow:visible;pointer-events:none}
#ms .ms-lead{font-size:18.5px;color:var(--mu);margin:0 0 24px}
#ms .ms-lead b{color:var(--ink);font-weight:800}
#ms .ms-dl{display:flex;align-items:center;justify-content:center;gap:12px;width:100%;background:var(--b);color:#fff!important;text-decoration:none;font-weight:900;font-size:21px;border-radius:18px;padding:18px 26px;border:3px solid var(--ink);box-shadow:0 6px 0 var(--ink);transition:transform .12s,box-shadow .12s}
#ms .ms-dl:hover{transform:translateY(2px);box-shadow:0 4px 0 var(--ink)}
#ms .ms-dl:active{transform:translateY(6px);box-shadow:0 0 0 var(--ink)}
#ms .ms-dl svg{width:26px;height:26px;flex:none}
#ms .ms-note{display:flex;flex-wrap:wrap;gap:6px 14px;justify-content:center;margin-top:14px;font-size:14px;color:var(--mu);font-weight:500}
#ms .ms-note span{display:inline-flex;align-items:center;gap:5px}
#ms .ms-note span:before{content:"";width:6px;height:6px;border-radius:50%;background:var(--b)}

/* chat mock */
#ms .ms-chat{position:relative;margin:34px 0 6px;background:var(--card);border:3px solid var(--ink);border-radius:22px;box-shadow:0 8px 0 var(--ink);overflow:hidden}
#ms .ms-chat-h{display:flex;align-items:center;justify-content:space-between;background:var(--ink);color:#fff;padding:10px 16px;font-weight:800;font-size:14.5px}
#ms .ms-chat-h span{display:inline-flex;align-items:center;gap:8px}
#ms .ms-chat-h span:before{content:"";width:9px;height:9px;border-radius:50%;background:var(--b2);box-shadow:0 0 0 3px rgba(91,155,255,.3)}
#ms .ms-demo{font-size:12px;font-weight:700;color:#C9D4EA;border:1.5px dashed rgba(255,255,255,.45);border-radius:999px;padding:1px 10px}
#ms .ms-chat-b{padding:18px 16px 18px}
#ms .ms-me{margin-inline-start:auto;width:fit-content;max-width:85%;background:var(--b);color:#fff;font-weight:700;border-radius:18px 18px 4px 18px;padding:10px 16px;margin-bottom:14px}
#ms .ms-cl{background:#F1F4F9;border:1.5px solid var(--line);border-radius:18px 18px 18px 4px;padding:14px 16px;font-size:15.5px}
#ms .ms-cl ul{list-style:none;margin:8px 0 12px;padding:0}
#ms .ms-prog{display:flex;align-items:center;gap:10px;flex-wrap:wrap;padding-bottom:8px;border-bottom:1.5px dashed var(--line)}
#ms .ms-prog span{flex:none;width:96px;height:8px;border-radius:99px;background:#D9E3F2;overflow:hidden;display:flex}
#ms .ms-prog span i{display:block;height:100%;background:var(--b);border-radius:99px}
#ms .ms-prog small{font-weight:800;font-size:13.5px;color:var(--ink)}
#ms .ms-cl li{display:flex;gap:9px;align-items:flex-start;margin:6px 0;line-height:1.45}
#ms .ms-cl li svg{flex:none;width:20px;height:20px;margin-top:1px;color:var(--b)}
#ms .ms-cl li.wait svg{color:var(--red)}
#ms .ms-ok{display:flex;gap:8px;flex-wrap:wrap}
#ms .ms-ok span{font-weight:800;font-size:14.5px;border-radius:12px;padding:7px 14px;border:2px solid var(--ink)}
#ms .ms-ok span.y{background:var(--ink);color:#fff}
#ms .ms-ok span.n{background:#fff}

/* sections */
#ms h2{font-size:28px;line-height:1.2;margin:58px 0 8px;font-weight:900;letter-spacing:-.4px}
#ms .ms-lbl{display:block;color:var(--b);font-weight:800;font-size:14.5px;letter-spacing:.5px;margin:58px 0 4px}
#ms .ms-lbl + h2{margin-top:0}
#ms p{margin:0 0 14px}
#ms .ms-sub{color:var(--mu);margin:0 0 18px}

#ms .ms-cards{display:grid;grid-template-columns:1fr;gap:14px}
#ms .ms-card{display:flex;gap:14px;align-items:flex-start;background:var(--card);border:2.5px solid var(--ink);border-radius:18px;padding:16px 16px;box-shadow:0 5px 0 var(--ink)}
#ms .ms-ic{flex:none;width:48px;height:48px;border-radius:14px;background:var(--bs);border:2px solid #BFD6FA;display:flex;align-items:center;justify-content:center;color:var(--b);position:relative}
#ms .ms-ic svg{width:28px;height:28px}
#ms .ms-ic b{position:absolute;top:-9px;left:-9px;width:24px;height:24px;border-radius:50%;background:var(--b);color:#fff;font-size:13px;font-weight:900;display:flex;align-items:center;justify-content:center;border:2px solid #fff}
#ms .ms-card h3{font-size:18.5px;font-weight:900;margin:0 0 3px;line-height:1.3}
#ms .ms-card p{margin:0;color:var(--mu);font-size:15.5px;line-height:1.6}
#ms .ms-card.hot{background:var(--ink);color:#fff}
#ms .ms-card.hot p{color:#C3CCDD}
#ms .ms-card.hot .ms-ic{background:var(--b);border-color:var(--b);color:#fff}
#ms .ms-card.hot .ms-ic b{background:#fff;color:var(--ink);border-color:var(--ink)}

/* steps */
#ms .ms-steps{list-style:none;padding:0;margin:18px 0 0;counter-reset:s;position:relative}
#ms .ms-steps > li{counter-increment:s;position:relative;padding-bottom:26px}
#ms .ms-steps > li:before{content:counter(s);position:absolute;right:0;top:0;width:42px;height:42px;border-radius:13px;background:var(--b);color:#fff;font-weight:900;font-size:20px;display:flex;align-items:center;justify-content:center;border:2.5px solid var(--ink);box-shadow:0 4px 0 var(--ink)}
#ms .ms-steps > li:after{content:"";display:none;position:absolute;right:20px;top:50px;bottom:6px;width:3px;background:repeating-linear-gradient(var(--line) 0 6px,transparent 6px 11px)}
#ms .ms-steps > li:last-child:after{display:none}
#ms .ms-steps h3{font-size:20px;font-weight:900;margin:0 0 8px;line-height:1.3;min-height:42px;display:flex;align-items:center;padding-inline-start:54px}
#ms .ms-steps p{color:var(--mu);margin:0 0 8px;font-size:16px}
#ms .ms-path{display:flex;flex-wrap:wrap;gap:5px;align-items:center;margin:8px 0 10px}
#ms .ms-path span{background:#fff;border:2px solid var(--ink);border-radius:9px;padding:1px 7px;font-weight:800;font-size:13px;direction:ltr;unicode-bidi:isolate}
#ms .ms-path i{font-style:normal;color:var(--b);font-weight:900;font-size:14px}
#ms .ms-con{background:#fff;border:2px solid var(--line);border-radius:16px;padding:12px 14px;margin:10px 0}
#ms .ms-con-t{display:flex;align-items:center;justify-content:space-between;gap:8px;flex-wrap:wrap}
#ms .ms-con-t b{font-size:16.5px}
#ms .ms-pill{font-size:12px;font-weight:800;color:var(--b);background:var(--bs);border-radius:999px;padding:2px 10px}
#ms .ms-url{display:flex;align-items:center;gap:8px;margin-top:8px;background:#F1F4F9;border-radius:10px;padding:6px 6px 6px 10px}
#ms .ms-url code{flex:1;min-width:0;direction:ltr;text-align:left;font-family:ui-monospace,SFMono-Regular,Menlo,monospace;font-size:13.5px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}
#ms .ms-cb{flex:none;background:var(--ink);color:#fff;border:0;border-radius:9px;padding:6px 12px;font-family:inherit;font-weight:800;font-size:13.5px;cursor:pointer}
#ms .ms-cb.ok{background:var(--b)}
#ms .ms-nm{font-size:14px;color:var(--mu);margin-top:8px}
#ms .ms-nm code{direction:ltr;unicode-bidi:isolate;font-family:ui-monospace,SFMono-Regular,Menlo,monospace;font-size:13.5px;background:#F1F4F9;border-radius:6px;padding:1px 7px;color:var(--ink);font-weight:700}
#ms .ms-cc{font-size:13.5px;color:var(--mu);margin:18px 0 0;line-height:1.65}
#ms .ms-cc b{color:var(--ink)}
#ms .ms-cc pre{direction:ltr;text-align:left;font-family:ui-monospace,SFMono-Regular,Menlo,monospace;font-size:12px;line-height:1.6;background:#E8EDF5;border-radius:10px;padding:10px 12px;margin:8px 0;overflow-x:auto;white-space:pre}
#ms .ms-con small{display:block;color:var(--mu);font-size:13.5px;margin-top:6px;line-height:1.5}

/* prompt box */
#ms .ms-prompt{background:var(--ink);color:#fff;border-radius:22px;padding:22px 18px;margin:6px 0 0;box-shadow:0 0 0 6px rgba(31,107,255,.16)}
#ms .ms-prompt small{display:block;color:var(--b2);font-weight:800;font-size:14px;margin-bottom:8px}
#ms .ms-prompt .q{display:block;font-size:25px;font-weight:900;line-height:1.3;margin-bottom:16px}
#ms .ms-prompt .ms-cb{background:var(--b);font-size:16px;padding:11px 20px;border-radius:12px;display:inline-flex;align-items:center;gap:8px}
#ms .ms-prompt .ms-cb svg{width:18px;height:18px}
#ms .ms-prompt .ms-cb.ok{background:#fff;color:var(--ink)}
#ms .ms-prompt p{color:#C3CCDD;font-size:15px;margin:14px 0 0}

/* why now */
#ms .ms-dates{display:grid;grid-template-columns:repeat(3,1fr);gap:10px;margin:18px 0 14px}
#ms .ms-date{background:#fff;border:2.5px solid var(--ink);border-radius:16px;text-align:center;padding:0 6px 12px;overflow:hidden;box-shadow:0 5px 0 var(--ink)}
#ms .ms-date span{display:block;background:var(--b);color:#fff;font-weight:800;font-size:13.5px;margin:0 -6px 8px;padding:6px 4px;line-height:1.3;border-bottom:2.5px solid var(--ink)}
#ms .ms-date b{display:block;font-size:25px;font-weight:900;line-height:1.1;letter-spacing:-.5px;direction:ltr}
#ms .ms-date small{display:block;color:var(--mu);font-size:13px;margin-top:4px}
#ms .ms-date.bf b{color:var(--red)}
#ms .ms-cd{background:var(--ink);color:#fff;border-radius:22px;padding:20px 16px;text-align:center}
#ms .ms-cd-t{font-weight:800;font-size:16px;color:#C3CCDD;margin-bottom:10px}
#ms .ms-cd-t b{color:#fff}
#ms .ms-cd-n{display:flex;justify-content:center;gap:8px;direction:rtl}
#ms .ms-cd-n div{min-width:66px;background:rgba(255,255,255,.07);border:1.5px solid rgba(255,255,255,.16);border-radius:14px;padding:8px 4px}
#ms .ms-cd-n div.d{background:var(--b);border-color:var(--b)}
#ms .ms-cd-n b{display:block;font-size:32px;font-weight:900;line-height:1.1;font-variant-numeric:tabular-nums}
#ms .ms-cd-n small{display:block;font-size:12.5px;color:#C3CCDD}
#ms .ms-cd-n div.d small{color:#fff}
#ms .ms-why{background:#fff;border:2px solid var(--line);border-radius:18px;padding:16px 16px;margin-top:14px;font-size:16px}
#ms .ms-why b{color:var(--ink)}

/* faq */
#ms .ms-faq details{background:#fff;border:2px solid var(--ink);border-radius:16px;margin-bottom:10px;box-shadow:0 4px 0 var(--ink)}
#ms .ms-faq summary{list-style:none;display:flex;justify-content:space-between;align-items:center;gap:10px;font-weight:800;cursor:pointer;padding:14px 16px;font-size:16.5px}
#ms .ms-faq summary::-webkit-details-marker{display:none}
#ms .ms-faq summary:after{content:"+";flex:none;width:28px;height:28px;border-radius:9px;background:var(--bs);color:var(--b);font-weight:900;font-size:20px;display:flex;align-items:center;justify-content:center;line-height:1}
#ms .ms-faq details[open] summary:after{content:"–";background:var(--b);color:#fff}
#ms .ms-faq .a{padding:0 16px 14px;color:var(--mu);font-size:15.5px}
#ms .ms-faq .a b{color:var(--ink)}
#ms .ms-faq .ans{display:inline-block;font-weight:900;color:var(--b);margin-inline-end:4px}

/* end */
#ms .ms-end{background:#fff;border:3px solid var(--ink);border-radius:26px;padding:30px 18px 24px;text-align:center;margin:60px 0 26px;box-shadow:0 8px 0 var(--b)}
#ms .ms-end h2{margin:0 0 8px}
#ms .ms-end p{color:var(--mu);margin:0 0 20px}
#ms .ms-foot{text-align:center;color:var(--soft);font-size:13px;padding:6px 0 40px;line-height:1.6}

@media (min-width:700px){
  #ms{font-size:18px}
  #ms .ms-w{padding:0 24px}
  #ms .ms-hero{padding:64px 0 10px}
  #ms h1{font-size:50px;letter-spacing:-1px}
  #ms .ms-lead{font-size:20.5px}
  #ms .ms-dl{width:auto;display:inline-flex;font-size:22px;padding:18px 40px}
  #ms .ms-note{justify-content:flex-start}
  #ms h2{font-size:36px}
  #ms .ms-cards{grid-template-columns:1fr 1fr}
  #ms .ms-card.hot{grid-column:1 / -1}
  #ms .ms-prompt{padding:26px 28px}
  #ms .ms-prompt .q{font-size:32px}
  #ms .ms-path span{font-size:14.5px;padding:2px 10px}
  #ms .ms-steps > li{padding-inline-start:58px}
  #ms .ms-steps > li:after{display:block}
  #ms .ms-steps h3{padding-inline-start:0;min-height:0;margin:5px 0 6px;display:block}
  #ms h1{line-height:1.18}
  #ms .ms-date b{font-size:32px}
  #ms .ms-cd-n div{min-width:92px}
  #ms .ms-cd-n b{font-size:42px}
  #ms .ms-end{padding:40px 30px 32px}
}
`;

  var ICON = {
    dl: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3v12M6.5 10l5.5 5.5 5.5-5.5M4 20h16"/></svg>',
    link: '<svg viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="3.6" stroke-linecap="round"><path d="M20 28l8-8"/><path d="M22 14l3-3a8 8 0 0111 11l-3 3"/><path d="M26 34l-3 3a8 8 0 01-11-11l3-3"/></svg>',
    eye: '<svg viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="3.6" stroke-linejoin="round"><path d="M4 24s7-13 20-13 20 13 20 13-7 13-20 13S4 24 4 24z"/><circle cx="24" cy="24" r="6"/></svg>',
    grid: '<svg viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="3.6" stroke-linejoin="round"><rect x="17" y="5" width="14" height="10" rx="3"/><rect x="5" y="33" width="12" height="10" rx="3"/><rect x="31" y="33" width="12" height="10" rx="3"/><path d="M24 15v9M11 33v-5h26v5"/></svg>',
    users: '<svg viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="3.5" stroke-linecap="round"><circle cx="18" cy="17" r="7"/><path d="M5 40c1-7 6.5-11 13-11s12 4 13 11"/><circle cx="33" cy="15" r="5.5"/><path d="M34 26c5 .5 8.5 4 9.5 10"/></svg>',
    sun: '<svg viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="3.6" stroke-linecap="round"><path d="M6 36h36"/><path d="M14 36a10 10 0 0120 0"/><path d="M24 12v5M10 20l3 3M38 20l-3 3"/></svg>',
    check: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10" stroke-width="2.2"/><path d="M7.5 12.3l3 3 6-6.3"/></svg>',
    lock: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><rect x="4.5" y="10.5" width="15" height="10" rx="2.5"/><path d="M8 10.5V7.5a4 4 0 018 0v3"/></svg>',
    copy: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"><rect x="8" y="8" width="12" height="13" rx="2.5"/><path d="M16 5V4.5A1.5 1.5 0 0014.5 3h-9A1.5 1.5 0 004 4.5v11A1.5 1.5 0 005.5 17H6"/></svg>'
  };
  var UNDER = '<svg viewBox="0 0 600 46" preserveAspectRatio="none" aria-hidden="true"><path d="M6 24 C 120 13, 300 10, 594 16" fill="none" stroke="#E3343A" stroke-width="9" stroke-linecap="round"/><path d="M30 35 C 190 24, 380 23, 570 27" fill="none" stroke="#E3343A" stroke-width="5" stroke-linecap="round" opacity=".9"/></svg>';

  function dl(label) { return '<a class="ms-dl" href="' + ZIP + '" download="meta-holiday-campaign.zip" data-ms-dl>' + ICON.dl + label + '</a>'; }
  function card(n, ic, title, text, hot) {
    return '<div class="ms-card' + (hot ? ' hot' : '') + '"><div class="ms-ic">' + ICON[ic] + '<b>' + n + '</b></div><div><h3>' + title + '</h3><p>' + text + '</p></div></div>';
  }
  function con(name, pill, label, url, note) {
    return '<div class="ms-con"><div class="ms-con-t"><b>' + name + '</b><span class="ms-pill">' + pill + '</span></div>' +
      '<div class="ms-nm">שם: <code>' + label + '</code></div>' +
      '<div class="ms-url"><code>' + url + '</code><button class="ms-cb" type="button" data-ms-copy="' + url + '">העתקה</button></div>' +
      (note ? '<small>' + note + '</small>' : '') + '</div>';
  }

  var html = `
<div id="ms">
  <div class="ms-w">
    <section class="ms-hero">
      <span class="ms-tag"><i></i>סקיל חינמי לקלוד</span>
      <h1>יש לכם חנות דיגיטלית?<br>קלוד יבנה לכם <span class="u">קמפיין לחגים${UNDER}</span> <span style="white-space:nowrap">במטא, מ־0</span></h1>
      <p class="ms-lead">בלי לדעת להקים טסט. קלוד בונה את המבנה הנכון ל־2026, מחבר את הלקוחות שלכם מפינג, ו<b>מחכה לאישור שלכם לפני כל שקל.</b></p>
      ${dl('להורדת הסקיל')}
      <div class="ms-note"><span>קובץ zip אחד · 22KB</span><span>בלי הרשמה ובלי מייל</span><span>חינם</span></div>

      <div class="ms-chat" aria-label="דוגמה לשיחה עם קלוד">
        <div class="ms-chat-h"><span>השיחה עם קלוד</span><em class="ms-demo">להמחשה</em></div>
        <div class="ms-chat-b">
          <div class="ms-me">${PROMPT}</div>
          <div class="ms-cl">
            <div class="ms-prog"><span><i style="width:80%"></i></span><small>8/10 · בדיקה לפני הדלקה</small></div>
            <ul>
              <li>${ICON.check}<span>חשבון המודעות מחובר</span></li>
              <li>${ICON.check}<span>מטא רואה את הקניות שלכם</span></li>
              <li>${ICON.check}<span>קהל חדש וקהל חם, בלי מי שכבר קנה</span></li>
              <li>${ICON.check}<span>4 מודעות שונות לכל קהל</span></li>
              <li class="wait">${ICON.lock}<span>הכול <b>כבוי</b>. מחכה לאישור שלכם</span></li>
            </ul>
            <div class="ms-ok"><span class="y">מאשר להפעיל</span><span class="n">רגע, לשנות</span></div>
          </div>
        </div>
      </div>
    </section>

    <span class="ms-lbl">מה הוא עושה</span>
    <h2>5 דברים שקלוד עושה בשבילכם</h2>
    <p class="ms-sub">את כל מה שבדרך כלל לוקח לבעל חנות ימים של ניסוי וטעייה, קלוד עושה בשיחה אחת. אתם רק עונים ומאשרים.</p>
    <div class="ms-cards">
      ${card(1, 'link', 'מחבר את חשבון המודעות', 'קלוד מתחבר לחשבון הפרסום שלכם במטא (פייסבוק ואינסטגרם) דרך החיבור הרשמי של מטא. בלי סיסמאות בצ׳אט, הכניסה בדף של מטא.')}
      ${card(2, 'eye', 'בודק שהפיקסל רואה רכישות', 'הפיקסל הוא קוד שמדווח למטא על קניות. בלעדיו מטא מחפשת לכם לוחצים, לא קונים. קלוד בודק את זה לפני שבונים משהו, ואומר בדיוק מה לתקן.')}
      ${card(3, 'grid', 'בונה קמפיין טסט במבנה נכון', 'קמפיין מכירות אחד עם שני חלקים: אנשים חדשים, ומי שכבר הכיר את החנות. 3–5 מודעות שונות בכל חלק, בעברית, ומטא מגלה מה עובד.')}
      ${card(4, 'users', 'קהלים מהלקוחות שלכם', 'קלוד לוקח מפינג את מי שנטש עגלה ואת מי שצפה ולא קנה, ומראה להם מודעות. מי שכבר קנה לא מקבל מודעה על מה שכבר קנה.')}
      ${card(5, 'sun', 'כל בוקר: מה לעצור ומה להגדיל', 'כותבים לקלוד "בוקר מטא" ומקבלים הסבר בעברית פשוטה ו־1–3 המלצות: איזו מודעה לעצור, ואיזו כדאי לתת לה עוד. שום שינוי לא קורה בלי אישור שלכם.', true)}
    </div>

    <span class="ms-lbl">התקנה</span>
    <h2>3 שלבים להתקנה</h2>
    <p class="ms-sub">פעם אחת, בערך 5 דקות. אחרי זה הכול קורה בשיחה עם קלוד.</p>
    <ol class="ms-steps">
      <li>
        <h3>מורידים את הסקיל</h3>
        <p>לוחצים על הכפתור הכחול. יורד קובץ zip אחד. לא פותחים אותו, משאירים אותו כמו שהוא.</p>
      </li>
      <li>
        <h3>מעלים אותו לקלוד</h3>
        <p>נכנסים ל־claude.ai במחשב, ופותחים:</p>
        <div class="ms-path"><span>Settings</span><i>←</i><span>Capabilities</span><i>←</i><span>Skills</span></div>
        <p>מוודאים ש־<b>Code execution and file creation</b> דלוק, ואז ב־<b>Skills</b> לוחצים <b>Upload skill</b> ובוחרים את הקובץ שהורדתם. צריך תוכנית בתשלום של קלוד.</p>
      </li>
      <li>
        <h3>מחברים את מטא ואת פינג</h3>
        <p>באותו מקום בקלוד פותחים:</p>
        <div class="ms-path"><span>Settings</span><i>←</i><span>Connectors</span></div>
        <p>לוחצים <b>Add custom connector</b>, כותבים שם, מדביקים כתובת, ולוחצים <b>Add</b> ואז <b>Connect</b>. עושים את זה פעמיים:</p>
        ${con('מטא, חשבון המודעות', 'חיבור רשמי של מטא · בטא פתוחה', 'Meta Ads', 'https://mcp.facebook.com/ads', 'לוחצים Connect, נכנסים עם הפייסבוק שמנהל את חשבון המודעות, ובוחרים את החשבון של החנות.')}
        ${con('פינג, הלקוחות שלכם', 'יש מסלול חינמי', 'Ping', 'https://pingai.org/api/mcp', 'אין לכם פינג? מתקינים חינם מחנות האפליקציות של שופיפיי או ב־pingai.org. המסלול החינמי מספיק.')}
        <p>בסוף פותחים צ'אט חדש, ובתפריט הכלים שלו מדליקים את שניהם:</p>
        <div class="ms-path"><span>+</span><i>←</i><span>Connectors</span><i>←</i><span>Meta Ads</span><span>Ping</span></div>
      </li>
    </ol>
    <div class="ms-prompt">
      <small>וזהו. באותו צ'אט חדש כותבים:</small>
      <div class="q">${PROMPT}</div>
      <button class="ms-cb" type="button" data-ms-copy="${PROMPT}">${ICON.copy}<span>להעתקת המשפט</span></button>
      <p>מכאן קלוד שואל 6 שאלות פשוטות, אחת בכל פעם, בודק, בונה הכול כבוי, ועוצר לאישור שלכם. נתקעתם באמצע? צ'אט חדש, וכותבים "ממשיכים קמפיין חגים".</p>
    </div>

    <div class="ms-cc"><b>משתמשים ב־Claude Code?</b> מעתיקים את התיקייה מה־zip לתיקיית הסקילים, ומוסיפים את פינג:
      <pre>cp -r meta-holiday-campaign ~/.claude/skills/
claude mcp add --transport http ping https://pingai.org/api/mcp</pre>
      את מטא ב־Claude Code אפשר לחבר רק דרך אפליקציית מפתחים של מטא, אז למי שאינו מפתח עדיף claude.ai.</div>

    <span class="ms-lbl">למה עכשיו</span>
    <h2>החגים כבר כאן</h2>
    <p class="ms-sub">התקופה שבה הכי הרבה אנשים קונים אונליין בשנה. שלושה תאריכים:</p>
    <div class="ms-dates">
      <div class="ms-date bf"><span>בלאק פריידיי</span><b>27.11</b><small>יום שישי</small></div>
      <div class="ms-date"><span>סייבר מאנדיי</span><b>30.11</b><small>יום שני</small></div>
      <div class="ms-date"><span>חנוכה</span><b>4–12.12</b><small>8 ימים</small></div>
    </div>
    <div class="ms-cd" data-ms-cd>
      <div class="ms-cd-t">נשארו עד <b>בלאק פריידיי</b></div>
      <div class="ms-cd-n">
        <div class="d"><b data-u="d">--</b><small>ימים</small></div>
        <div><b data-u="h">--</b><small>שעות</small></div>
        <div><b data-u="m">--</b><small>דקות</small></div>
        <div><b data-u="s">--</b><small>שניות</small></div>
      </div>
    </div>
    <div class="ms-why">קמפיין חדש צריך <b>בדרך כלל כמה ימים</b> עד שמטא לומדת למי להראות את המודעות. לכן עדיף להתחיל את הטסט <b>7–10 ימים לפני בלאק פריידיי</b>, ולהגיע לימים הגדולים עם מודעות שכבר יודעים מה מהן עובד. קלוד גם בונה לכם לוח זמנים עד סוף השנה: טיזר, גישה מוקדמת, הימים עצמם, וחנוכה.</div>

    <span class="ms-lbl">שאלות</span>
    <h2>שאלות נפוצות</h2>
    <div class="ms-faq">
      <details open><summary>צריך לדעת פרסום?</summary><div class="a"><span class="ans">לא.</span>קלוד שואל שאלה אחת בכל פעם, עם תשובה מוצעת בסוגריים, אז הרבה פעמים מספיק לכתוב "אוקיי". את הבנייה הוא עושה. כל מונח שמופיע בדרך, הוא מסביר במילים פשוטות.</div></details>
      <details><summary>זה עולה כסף?</summary><div class="a"><b>הסקיל חינם.</b> קלוד בתשלום: צריך תוכנית בתשלום כדי לחבר את מטא ואת פינג. המודעות רצות על התקציב שלכם, והתקציב הוא המספר שלכם. קלוד לא בוחר אותו בשבילכם, ולא מוציא שקל בלי שאישרתם.</div></details>
      <details><summary>משהו עולה לאוויר בלי אישור שלי?</summary><div class="a"><span class="ans">לעולם לא.</span>כל קמפיין נבנה כבוי. קלוד מראה לכם מה הוא בנה וכמה זה יעלה, ומחכה. רק אחרי שאתם כותבים שאתם מאשרים, משהו מתחיל לרוץ. גם השינויים של כל בוקר מחכים לאישור.</div></details>
      <details><summary>מה זה פינג?</summary><div class="a">פינג היא המערכת שמחזיקה את הלקוחות של החנות: מי קנה, מתי ומה. היא מחוברת לקלוד, ולכן קלוד יכול לבנות קהלים מהלקוחות האמיתיים שלכם. פינג לא מפרסמת במטא, היא רק המקור של הקהלים. <b>יש לה מסלול חינמי</b>, והוא מספיק לזה.</div></details>
      <details><summary>ומה אם מטא עוד לא פתחה לי את החיבור?</summary><div class="a">החיבור הרשמי של מטא נמצא בבטא, ומטא פותחת אותו בהדרגה. אם אצלכם עוד אין אפשרות לבנות דרכו, קלוד מכין לכם דף מוכן להקלקה: כל שדה עם הערך המדויק וכפתור העתקה, ואתם בונים בעצמכם במנהל המודעות. כל השאר ממשיך לעבוד.</div></details>
      <details><summary>מה צריך כדי להתחיל?</summary><div class="a">חנות אונליין, גישת מנהל לחשבון המודעות במטא, ותוכנית בתשלום של קלוד. כדאי שיהיו מוכנים: המוצר שרוצים לדחוף, ההנחה המקסימלית, וסכום ליום שנוח לכם. אם משהו חסר, קלוד יגיד מה ואיך לסדר.</div></details>
      <details><summary>זה מבטיח מכירות?</summary><div class="a">לא, ואף אחד לא יכול להבטיח. הסקיל דואג שהקמפיין בנוי נכון, שהפיקסל עובד, ושכל בוקר תדעו מה לעשות. מה שמוכר בסוף זה המוצר, ההצעה והמודעות.</div></details>
    </div>

    <div class="ms-end">
      <h2>מוכנים לחגים?</h2>
      <p>קובץ אחד, משפט אחד, וקלוד בונה את הקמפיין. אתם מאשרים.</p>
      ${dl('להורדת הסקיל')}
    </div>
    <div class="ms-foot">אביב מלכה · מועדון האיקומרס<br>הסקיל עובד עם קלוד, עם חשבון המודעות שלכם במטא ועם פינג</div>
  </div>
</div>`;

  var st = document.createElement('style'); st.textContent = css; document.head.appendChild(st);
  if (!document.querySelector('link[href*="Heebo"]')) {
    var f = document.createElement('link'); f.rel = 'stylesheet';
    f.href = 'https://fonts.googleapis.com/css2?family=Heebo:wght@400;500;700;800;900&display=swap';
    document.head.appendChild(f);
  }
  root.innerHTML = html;

  /* countdown */
  var cd = root.querySelector('[data-ms-cd]');
  function pad(n) { return (n < 10 ? '0' : '') + n; }
  function tick() {
    var left = BF - Date.now();
    if (left <= 0) {
      cd.innerHTML = '<div class="ms-cd-t" style="margin:0;font-size:20px;color:#fff"><b>בלאק פריידיי כבר כאן.</b> וסייבר מאנדיי וחנוכה עוד לפניכם.</div>';
      return false;
    }
    var s = Math.floor(left / 1000);
    var v = { d: Math.floor(s / 86400), h: pad(Math.floor(s % 86400 / 3600)), m: pad(Math.floor(s % 3600 / 60)), s: pad(s % 60) };
    for (var k in v) { var el = cd.querySelector('[data-u="' + k + '"]'); if (el) el.textContent = v[k]; }
    return true;
  }
  if (tick()) { var iv = setInterval(function () { if (!tick()) clearInterval(iv); }, 1000); }

  /* clicks: download pixel + copy buttons */
  root.addEventListener('click', function (e) {
    var d = e.target.closest('[data-ms-dl]');
    if (d && typeof window.fbq === 'function') { try { window.fbq('trackCustom', 'MetaSkillDownload'); } catch (x) {} }
    var c = e.target.closest('[data-ms-copy]');
    if (c) {
      var t = c.getAttribute('data-ms-copy');
      var lbl = c.querySelector('span') || c;
      var old = lbl.textContent;
      (navigator.clipboard ? navigator.clipboard.writeText(t) : Promise.reject()).then(function () {
        lbl.textContent = '✓ הועתק'; c.classList.add('ok');
        setTimeout(function () { lbl.textContent = old; c.classList.remove('ok'); }, 2200);
      }, function () { lbl.textContent = 'סמנו והעתיקו'; });
    }
  });
})();
