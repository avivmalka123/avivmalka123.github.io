/* Closed WhatsApp group quiz (www.avivmalka.com/ecom-group) · Kajabi Custom Code block: <div id="wg-root"></div> + this file.
   4 questions → Meta Lead on pixel 2210072352882860 → redirect to the WhatsApp group.
   Anonymous answers (no name/phone) go to the ping-funnel worker /api/group → admin tab "קבוצה סגורה". */
(function () {
  var GROUP = 'https://chat.whatsapp.com/JhREMAygSXrAVSPKXcHkmr';
  var COURSE = 'https://www.avivmalka.com/course-hadira';
  var PX = '2210072352882860';
  var BG = '#FAF8F3';
  var API = 'https://ping-funnel.aviv1988.workers.dev/api/group';
  var SID = (Date.now().toString(36) + Math.random().toString(36).slice(2) + Math.random().toString(36).slice(2)).replace(/[^a-z0-9]/g, '').slice(0, 24);
  var QS = new URLSearchParams(location.search);

  var root = document.getElementById('wg-root');
  if (!root) { root = document.createElement('div'); root.id = 'wg-root'; document.body.appendChild(root); }

  // Kajabi chrome: hide header/footer, flatten the wrappers around the block
  try {
    document.body.style.background = BG;
    var p = root.parentElement;
    while (p && p !== document.body) {
      p.style.backgroundColor = BG; p.style.backgroundImage = 'none';
      if (/section|container|row|col|sizer|block/.test(p.className || '')) { p.style.padding = '0'; p.style.margin = '0'; p.style.maxWidth = 'none'; }
      p = p.parentElement;
    }
    document.querySelectorAll('header.header, footer.footer, .announcement').forEach(function (el) { el.style.display = 'none'; });
    var hs = document.createElement('style'); hs.textContent = '.block-type--video{display:none !important}'; document.head.appendChild(hs);
  } catch (e) {}

  // Meta pixel (only to PX; Kajabi's site pixel keeps its own PageView)
  if (!window.fbq) {
    !function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,document,'script','https://connect.facebook.net/en_US/fbevents.js');
  }
  function save(status) {
    var utm = {}; ['utm_source', 'utm_medium', 'utm_campaign', 'utm_content', 'utm_term'].forEach(function (k) { if (QS.get(k)) utm[k] = QS.get(k); });
    var body = { sid: SID, status: status, site: A.site, years: A.years, revenue: A.revenue, need: A.need, utm: utm, fbclid: QS.get('fbclid') || '',
      referrer: document.referrer, landing_url: location.origin + location.pathname, hp: (document.getElementById('wgHp') || {}).value || '' };
    try { fetch(API, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(body), keepalive: true, mode: 'cors' }).catch(function () {}); } catch (e) {}
  }
  function px(ev, params, custom) {
    try { fbq(custom ? 'trackSingleCustom' : 'trackSingle', PX, ev, params || {}, { eventID: ev + '-' + Date.now() + '-' + Math.random().toString(36).slice(2, 8) }); } catch (e) {}
  }
  try { fbq('init', PX); fbq('trackSingle', PX, 'PageView'); } catch (e) {}

  var css = [
    '#wg-root{direction:rtl;text-align:right;background:' + BG + ';color:#141414;font-family:Heebo,Arial,sans-serif;min-height:100vh;-webkit-font-smoothing:antialiased}',
    '#wg-root *{box-sizing:border-box;font-family:inherit;letter-spacing:normal;text-transform:none}',
    '#wg-root .bar{background:#141414;color:#fff;text-align:center;font-size:14px;font-weight:600;padding:9px 16px}',
    '#wg-root .wrap{max-width:560px;margin:0 auto;padding:28px 16px 48px}',
    '#wg-root .pill{display:inline-block;background:#141414;color:#fff;border-radius:999px;padding:6px 14px;font-size:14px;font-weight:700;margin:0 0 14px}',
    '#wg-root h1{font-size:30px;line-height:1.2;font-weight:900;margin:0 0 14px;color:#141414}',
    '#wg-root h1 em{font-style:normal;background:linear-gradient(transparent 58%,#FFD84D 58%)}',
    '#wg-root .lead p{font-size:17px;line-height:1.6;margin:0 0 10px;color:#2b2b2b}',
    '#wg-root .lead b{color:#141414}',
    '#wg-root .req{list-style:none;padding:0;margin:16px 0 22px;display:grid;gap:8px}',
    '#wg-root .req li{background:#fff;border:1px solid #E6E1D6;border-radius:12px;padding:11px 14px;font-size:16px;font-weight:600;display:flex;gap:10px;align-items:center}',
    '#wg-root .req li span{color:#1F7A3A;font-weight:900}',
    '#wg-root .card{background:#fff;border:1px solid #E6E1D6;border-radius:18px;padding:22px 18px;box-shadow:0 6px 24px rgba(20,20,20,.06)}',
    '#wg-root .prog{display:flex;justify-content:space-between;align-items:center;font-size:14px;font-weight:600;color:#5c5c5c;margin:0 0 8px}',
    '#wg-root .track{height:6px;background:#EFEAE0;border-radius:6px;overflow:hidden;margin:0 0 18px}',
    '#wg-root .fill{height:100%;background:linear-gradient(90deg,#E8B33A,#C98A12);width:25%;transition:width .3s}',
    '#wg-root h2{font-size:22px;line-height:1.35;font-weight:800;margin:0 0 16px;color:#141414;outline:none}',
    '#wg-root .opts{display:grid;gap:10px}',
    '#wg-root .opt{width:100%;text-align:right;background:#FAF8F3;border:2px solid #E6E1D6;border-radius:14px;padding:15px 16px;font-size:18px;font-weight:600;color:#141414;cursor:pointer;min-height:54px;transition:border-color .15s,background .15s}',
    '#wg-root .opt:hover{border-color:#C98A12;background:#FFF8E6}',
    '#wg-root .opt[aria-pressed="true"]{border-color:#C98A12;background:#FFF3D1}',
    '#wg-root .opt:focus-visible,#wg-root .btn:focus-visible,#wg-root .back:focus-visible,#wg-root textarea:focus-visible,#wg-root a:focus-visible{outline:3px solid #1D4ED8;outline-offset:2px}',
    '#wg-root textarea{width:100%;min-height:120px;border:2px solid #E6E1D6;border-radius:14px;padding:14px;font-size:17px;line-height:1.5;resize:vertical;background:#FAF8F3;color:#141414}',
    '#wg-root .hint{font-size:14px;color:#5c5c5c;margin:6px 0 14px}',
    '#wg-root .hint.ok{color:#1F7A3A}',
    '#wg-root .btn{display:block;width:100%;border:0;border-radius:14px;padding:16px;font-size:19px;font-weight:800;color:#141414;background:linear-gradient(180deg,#F5C451,#E0A21E);cursor:pointer;text-align:center;text-decoration:none;min-height:56px}',
    '#wg-root .btn[disabled]{opacity:.45;cursor:not-allowed}',
    '#wg-root .btn.wa{background:#1FA855;color:#fff}',
    '#wg-root .back{background:none;border:0;color:#5c5c5c;font-size:15px;font-weight:600;cursor:pointer;padding:4px 0}',
    '#wg-root .note{background:#FFF8E6;border:1px solid #F1D48A;border-radius:12px;padding:12px 14px;font-size:16px;line-height:1.5;margin:14px 0}',
    '#wg-root .sub{display:block;text-align:center;margin-top:14px;font-size:16px;color:#141414;font-weight:600}',
    '#wg-root .foot{text-align:center;font-size:13px;color:#7a7a7a;margin-top:22px}',
    '#wg-root .sr{position:absolute;width:1px;height:1px;overflow:hidden;clip:rect(0 0 0 0);white-space:nowrap}',
    '@media (min-width:720px){#wg-root h1{font-size:38px}#wg-root .wrap{padding-top:44px}}',
    '@media (prefers-reduced-motion:reduce){#wg-root .fill,#wg-root .opt{transition:none}}'
  ].join('');

  root.innerHTML =
    '<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Heebo:wght@400;600;700;800;900&display=swap" rel="stylesheet">' +
    '<style>' + css + '</style>' +
    '<div class="bar">מועדון האיקומרס · קבוצה סגורה</div>' +
    '<main class="wrap">' +
      '<span class="pill">🔒 קבוצת וואטסאפ סגורה</span>' +
      '<h1>הקבוצה הסגורה לבעלי חנויות איקומרס <em>פעילות</em></h1>' +
      '<div class="lead">' +
        '<p>הקבוצה נבנתה כדי ללמד וללמוד מכל אחד ואחת שעושים איקומרס, <b>והיא לא נועדה לאנשים חדשים בתחום.</b></p>' +
        '<p>אנחנו שומרים על רמת האיכות הגבוהה ביותר: לא תינתן כניסה למי שלא מראה הוכחה לאתר פעיל שעושה מחזור של <b>לפחות 1,000 ₪ בחודש</b>.</p>' +
        '<p>זה לא לחדשים בתחום, והתוכן כאן מתקדם מאוד.</p>' +
      '</div>' +
      '<ul class="req" aria-label="תנאי הכניסה">' +
        '<li><span aria-hidden="true">✔</span>אתר פעיל שמוכר</li>' +
        '<li><span aria-hidden="true">✔</span>מחזור של לפחות 1,000 ₪ בחודש</li>' +
        '<li><span aria-hidden="true">✔</span>צילום מסך של המחזור לאדמין בכניסה</li>' +
      '</ul>' +
      '<section class="card" aria-label="שאלון הצטרפות">' +
        '<div class="prog"><span id="wgStep" aria-live="polite">שאלה 1 מתוך 4</span><span>פחות מדקה</span></div>' +
        '<div class="track" aria-hidden="true"><div class="fill" id="wgFill"></div></div>' +
        '<div id="wgBody"></div>' +
      '</section>' +
      '<p class="foot">לא מבקשים שם או טלפון. התשובות נשמרות אצלנו בלי פרטים מזהים, רק כדי להכיר את מי שמצטרף לקבוצה.</p>' +
      '<input id="wgHp" name="website" tabindex="-1" autocomplete="off" aria-hidden="true" style="position:absolute;left:-9999px;width:1px;height:1px;opacity:0">' +
    '</main>';

  var Q = [
    { k: 'site', t: 'יש לכם אתר פעיל?', o: ['כן', 'לא'] },
    { k: 'years', t: 'כמה זמן אתם מתעסקים בתחום?', o: ['מתחת לשנה', 'שנה עד שלוש', 'שלוש שנים ומעלה'] },
    { k: 'revenue', t: 'מה מחזור המכירות הממוצע שלכם בחודש?', o: ['מתחת ל־5,000 ₪', '5,000–25,000 ₪', '25,000–100,000 ₪', '100,000 ₪ ומעלה'] },
    { k: 'need', t: 'מה הכי עוצר אתכם מלהתקדם, ובמה הייתם הכי רוצים עזרה?', free: true }
  ];
  var A = {}, i = 0, done = false;
  var body = document.getElementById('wgBody');
  var stepEl = document.getElementById('wgStep');
  var fill = document.getElementById('wgFill');

  function esc(s) { return String(s).replace(/[&<>"]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]; }); }
  function focusTitle() { var h = body.querySelector('h2'); if (h) h.focus({ preventScroll: false }); }
  function backBtn() { return i > 0 ? '<p style="margin:14px 0 0"><button type="button" class="back" id="wgBack">→ חזרה לשאלה הקודמת</button></p>' : ''; }

  function render() {
    var q = Q[i];
    stepEl.textContent = 'שאלה ' + (i + 1) + ' מתוך ' + Q.length;
    fill.style.width = ((i + 1) / Q.length * 100) + '%';
    if (q.free) {
      var v = A[q.k] || '';
      body.innerHTML =
        '<h2 id="wgQ" tabindex="-1"><label for="wgTxt">' + esc(q.t) + '</label></h2>' +
        '<textarea id="wgTxt" maxlength="1000" aria-describedby="wgHint" placeholder="כתבו בחופשיות, לפחות 10 תווים">' + esc(v) + '</textarea>' +
        '<p class="hint" id="wgHint" aria-live="polite"></p>' +
        '<button type="button" class="btn" id="wgDone" disabled>סיום ומעבר לקבוצה ←</button>' + backBtn();
      var ta = document.getElementById('wgTxt'), hint = document.getElementById('wgHint'), btn = document.getElementById('wgDone');
      var check = function () {
        var n = ta.value.trim().length;
        btn.disabled = n < 10;
        hint.className = 'hint' + (n >= 10 ? ' ok' : '');
        hint.textContent = n >= 10 ? '✔ מעולה' : 'עוד ' + (10 - n) + ' תווים לפחות';
      };
      ta.addEventListener('input', check); check();
      btn.addEventListener('click', function () { if (ta.value.trim().length >= 10) { A[q.k] = ta.value.trim(); finish(); } });
    } else {
      body.innerHTML =
        '<h2 id="wgQ" tabindex="-1">' + esc(q.t) + '</h2>' +
        '<div class="opts" role="group" aria-labelledby="wgQ">' +
          q.o.map(function (o, n) { return '<button type="button" class="opt" data-n="' + n + '" aria-pressed="' + (A[q.k] === o) + '">' + esc(o) + '</button>'; }).join('') +
        '</div>' + backBtn();
      body.querySelectorAll('.opt').forEach(function (b) {
        b.addEventListener('click', function () {
          var o = q.o[+b.getAttribute('data-n')];
          A[q.k] = o;
          body.querySelectorAll('.opt').forEach(function (x) { x.setAttribute('aria-pressed', String(x === b)); });
          setTimeout(function () {
            if (q.k === 'site' && o === 'לא') return noSite();
            i++; render(); focusTitle();
          }, 160);
        });
      });
    }
    var bk = document.getElementById('wgBack');
    if (bk) bk.addEventListener('click', function () { i--; render(); focusTitle(); });
  }

  function noSite() {
    save('no_site');
    stepEl.textContent = 'הקבוצה מיועדת לבעלי אתר פעיל';
    body.innerHTML =
      '<h2 tabindex="-1">הקבוצה מיועדת רק לבעלי אתר פעיל</h2>' +
      '<p style="font-size:17px;line-height:1.6;margin:0 0 16px">התוכן בקבוצה מתקדם ונבנה לבעלי חנויות שכבר מוכרות. כשהאתר שלכם יעלה ויתחיל למכור, נשמח לראות אתכם.</p>' +
      '<a class="btn" href="' + COURSE + '">רוצים להתחיל מאפס? לקורס החינמי למתחילים</a>' +
      '<p style="margin:14px 0 0"><button type="button" class="back" id="wgRetry">→ טעיתי, יש לי אתר פעיל</button></p>';
    document.getElementById('wgRetry').addEventListener('click', function () { i = 0; delete A.site; render(); focusTitle(); });
    focusTitle();
  }

  function finish() {
    if (done) return; done = true;
    px('Lead', { content_name: 'whatsapp-group-quiz', content_category: A.revenue || '', years_in_field: A.years || '' });
    save('completed');
    stepEl.textContent = 'סיימתם!';
    fill.style.width = '100%';
    body.innerHTML =
      '<h2 tabindex="-1">✅ מעולה, מעבירים אתכם לקבוצה</h2>' +
      '<div class="note">רגע לפני: בכניסה שלחו לאדמין של הקבוצה <b>צילום מסך של מחזור המכירות</b> מהחודש האחרון, כדי לאשר את ההצטרפות.</div>' +
      '<a class="btn wa" id="wgGo" href="' + GROUP + '">💬 לכניסה לקבוצה</a>';
    focusTitle();
    setTimeout(function () { location.href = GROUP; }, 2200);
  }

  render();
})();
