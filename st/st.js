/* "Copy my setup" training page (www.avivmalka.com/copy-setup) · Kajabi Custom Code block: <div id="st-root"></div> + this file.
   No sign-up: hook + Wistia video + 4 links. Meta pixel 2210072352882860: Lead on the first setup-copy / Ping-install click. */
(function () {
  var WISTIA = 'bk5fkohucp';
  var SETUP = 'https://pingai.org/setup/vn4QJ9uS';
  var PING = 'https://apps.shopify.com/ping-ai';
  var GROUP = 'https://chat.whatsapp.com/JhREMAygSXrAVSPKXcHkmr';
  var IG = 'https://www.instagram.com/aviv_malka7/';
  var PX = '2210072352882860';
  var BG = '#FAF8F3';

  var root = document.getElementById('st-root');
  if (!root) { root = document.createElement('div'); root.id = 'st-root'; document.body.appendChild(root); }

  // Kajabi chrome: hide header/footer and the cloned page's video block, flatten the wrappers
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

  if (!window.fbq) {
    !function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,document,'script','https://connect.facebook.net/en_US/fbevents.js');
  }
  function px(ev, params, custom) {
    try { fbq(custom ? 'trackSingleCustom' : 'trackSingle', PX, ev, params || {}, { eventID: ev + '-' + Date.now() + '-' + Math.random().toString(36).slice(2, 8) }); } catch (e) {}
  }
  try { fbq('init', PX); fbq('trackSingle', PX, 'PageView'); } catch (e) {}

  var css = [
    '#st-root{direction:rtl;text-align:right;background:' + BG + ';color:#141414;font-family:Heebo,Arial,sans-serif;-webkit-font-smoothing:antialiased}',
    '#st-root *{box-sizing:border-box;font-family:inherit;letter-spacing:normal;text-transform:none}',
    '#st-root .bar{background:#141414;color:#fff;text-align:center;font-size:14px;font-weight:600;padding:9px 16px}',
    '#st-root .wrap{max-width:760px;margin:0 auto;padding:26px 16px 48px}',
    '#st-root .pill{display:inline-block;background:#FFE7A3;color:#141414;border-radius:999px;padding:6px 14px;font-size:14px;font-weight:800;margin:0 0 14px}',
    '#st-root h1{font-size:31px;line-height:1.18;font-weight:900;margin:0 0 14px;color:#141414}',
    '#st-root h1 em{font-style:normal;background:linear-gradient(transparent 58%,#FFD84D 58%)}',
    '#st-root .sub{font-size:18px;line-height:1.6;margin:0 0 18px;color:#2b2b2b}',
    '#st-root .sub b{color:#141414}',
    '#st-root .vid{position:relative;border-radius:16px;overflow:hidden;background:#141414;box-shadow:0 10px 30px rgba(20,20,20,.18);aspect-ratio:16/9}',
    '#st-root .vid .wistia_embed{position:absolute;inset:0;width:100%;height:100%}',
    '#st-root .cap{display:flex;justify-content:space-between;gap:10px;font-size:14px;font-weight:600;color:#5c5c5c;margin:10px 2px 22px}',
    '#st-root h2{font-size:22px;font-weight:900;margin:0 0 12px;color:#141414}',
    '#st-root .steps{list-style:none;padding:0;margin:0 0 22px;display:grid;gap:8px;counter-reset:s}',
    '#st-root .steps li{background:#fff;border:1px solid #E6E1D6;border-radius:12px;padding:12px 14px;font-size:16px;line-height:1.45;display:flex;gap:12px;align-items:flex-start}',
    '#st-root .steps li:before{counter-increment:s;content:counter(s);flex:0 0 28px;height:28px;border-radius:50%;background:#141414;color:#fff;font-weight:800;display:flex;align-items:center;justify-content:center;font-size:15px}',
    '#st-root .btns{display:grid;gap:12px}',
    '#st-root .btn{display:flex;flex-direction:column;align-items:center;justify-content:center;width:100%;border-radius:14px;padding:14px 16px;font-size:19px;font-weight:800;text-align:center;text-decoration:none;min-height:60px;line-height:1.25;border:0}',
    '#st-root .btn small{display:block;font-size:14px;font-weight:600;opacity:.85;margin-top:3px}',
    '#st-root .b1{color:#141414;background:linear-gradient(180deg,#F5C451,#E0A21E);box-shadow:0 6px 18px rgba(224,162,30,.35)}',
    '#st-root .b2{color:#fff;background:#141414}',
    '#st-root .b3{color:#fff;background:#1FA855}',
    '#st-root .b4{color:#fff;background:linear-gradient(90deg,#F58529,#DD2A7B,#8134AF)}',
    '#st-root .btn:focus-visible{outline:3px solid #1D4ED8;outline-offset:3px}',
    '#st-root .foot{text-align:center;font-size:13px;line-height:1.5;color:#7a7a7a;margin-top:24px}',
    '@media (min-width:720px){#st-root h1{font-size:42px}#st-root .wrap{padding-top:40px}}'
  ].join('');

  root.innerHTML =
    '<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Heebo:wght@400;600;700;800;900&display=swap" rel="stylesheet">' +
    '<style>' + css + '</style>' +
    '<div class="bar">הדרכה חינמית · בלי הרשמה ובלי להשאיר פרטים</div>' +
    '<main class="wrap">' +
      '<span class="pill">🎄 לבעלי אתר איקומרס, לפני בלאק פריידיי</span>' +
      '<h1>בחגים האלה אנחנו הולכים להוסיף עוד <em>30%–50%</em> למכירות באתר. ככה תעתיקו את זה אצלכם.</h1>' +
      '<p class="sub">זה הסטאפ שאני מפעיל בחנויות שלי לתקופת החגים. <b>בלי להגדיל תקציב פרסום ובלי לרדוף אחרי לקוחות חדשים</b>: הוא עובד על מי שכבר נכנס לחנות שלכם. בהדרכה אני מראה אותו מבפנים, ובסוף אתם מעתיקים אותו לחנות שלכם.</p>' +
      '<div class="vid"><div class="wistia_embed wistia_async_' + WISTIA + ' videoFoam=false" style="height:100%;width:100%">&nbsp;</div></div>' +
      '<div class="cap"><span>▶ הגדלת המכירות באתר בעוד 30%</span><span>15 דקות</span></div>' +
      '<h2>3 צעדים, לפני שהעונה מתחילה</h2>' +
      '<ol class="steps">' +
        '<li>צפו בהדרכה עד הסוף, כדי להבין מה הסטאפ עושה ולמה.</li>' +
        '<li>העתיקו את הסטאפ שלי לחנות שלכם בלחיצה.</li>' +
        '<li>הפעילו אותו עכשיו, כדי שיעבוד בשבילכם כבר בבלאק פריידיי.</li>' +
      '</ol>' +
      '<nav class="btns" aria-label="קישורים">' +
        '<a class="btn b1" data-ev="setup" href="' + SETUP + '" target="_blank" rel="noopener">📋 להעתקת הסטאפ שלי<small>העתקה ישירה לחנות שלכם</small></a>' +
        '<a class="btn b2" data-ev="ping" href="' + PING + '" target="_blank" rel="noopener">להתקנת פינג משופיפיי<small>למי שעוד לא מותקן אצלו</small></a>' +
        '<a class="btn b3" data-ev="group" href="' + GROUP + '" target="_blank" rel="noopener">💬 לקבוצת הוואטסאפ הסגורה<small>לבעלי חנויות פעילות בלבד</small></a>' +
        '<a class="btn b4" data-ev="ig" href="' + IG + '" target="_blank" rel="noopener">📸 לאינסטגרם שלי<small>עוד תוכן על איקומרס כל שבוע</small></a>' +
      '</nav>' +
      '<p class="foot">התוצאות משתנות מחנות לחנות ותלויות במוצר, בקהל ובביצוע.</p>' +
    '</main>';

  var leadSent = false;
  root.querySelectorAll('[data-ev]').forEach(function (a) {
    a.addEventListener('click', function () {
      var ev = a.getAttribute('data-ev');
      if ((ev === 'setup' || ev === 'ping') && !leadSent) { leadSent = true; px('Lead', { content_name: 'copy-setup-' + ev }); }
      px({ setup: 'SetupCopyClick', ping: 'PingInstallClick', group: 'GroupClick', ig: 'InstagramClick' }[ev], {}, true);
    });
  });

  // Wistia player + play / 50% events
  if (WISTIA.indexOf('__') !== 0) {
    ['https://fast.wistia.com/embed/medias/' + WISTIA + '.jsonp', 'https://fast.wistia.com/assets/external/E-v1.js'].forEach(function (src) {
      var s = document.createElement('script'); s.src = src; s.async = true; document.head.appendChild(s);
    });
    window._wq = window._wq || [];
    // the cloned Kajabi video block embeds the same media with a stripped-down player: drop it, then set full controls (pushed after Kajabi's own options)
    var fix = function () {
      document.querySelectorAll('.block-type--video').forEach(function (el) { el.parentNode && el.parentNode.removeChild(el); });
      window._wq.push({ id: WISTIA, options: { playbar: true, fullscreenButton: true, playbackRateControl: true, qualityControl: true, settingsControl: true,
        smallPlayButton: true, playButton: true, controlsVisibleOnLoad: false, stillUrl: 'https://avivmalka123.github.io/st/poster.jpg', playerColor: '#E0A21E' } });
    };
    if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', fix); else fix();
    window._wq.push({ id: WISTIA, onReady: function (v) {
      var played = false, half = false;
      v.bind('play', function () { if (!played) { played = true; px('ViewContent', { content_name: 'copy-setup-video' }); } });
      v.bind('percentwatchedchanged', function (pct) { if (!half && pct >= 0.5) { half = true; px('VideoHalf', {}, true); } });
    } });
  }
})();
