/* Ping AI training funnel · tr (source pingf/src/tr.html, built by pingf/build.py) */
(function(){
 var root=document.getElementById('pf-root'); if(!root){root=document.createElement('div');root.id='pf-root';document.body.appendChild(root);}
 try{ document.body.style.background='#f6f8fd'; var p=root.parentElement; while(p && p!==document.body){ p.style.backgroundColor='#f6f8fd'; p.style.backgroundImage='none'; if(/section|container|row|col|sizer|block/.test(p.className||'')){ p.style.padding='0'; p.style.margin='0'; p.style.maxWidth='none'; } p=p.parentElement; } document.querySelectorAll('header.header, footer.footer, .announcement').forEach(function(el){ el.style.display='none'; }); var hs=document.createElement('style'); hs.textContent='.block-type--video{display:none !important}'; document.head.appendChild(hs); }catch(e){}
 root.innerHTML="<link href=\"https://fonts.googleapis.com/css2?family=Heebo:wght@400;500;600;700;800;900&display=swap\" rel=\"stylesheet\"><style>#pf-root .pf{--navy:#0b1640;--ink:#18213f;--mut:#5d6788;--line:#e2e7f4;--bg:#f6f8fd;--blue:#2f6bff;--blue2:#1f4fd8;--vio:#7c5cff;--cyan:#19c3ff;--ok:#0f9d68;--wa:#1fa855;--err:#d33b3b;\n  font-family:'Heebo',Arial,sans-serif;color:var(--ink);background:var(--bg);direction:rtl;text-align:right;line-height:1.55;font-size:17px;-webkit-font-smoothing:antialiased;overflow-x:hidden}#pf-root .pf *{box-sizing:border-box}#pf-root .pf h1,#pf-root .pf h2,#pf-root .pf h3,#pf-root .pf p{margin:0}#pf-root .pf .wrap{max-width:980px;margin:0 auto;padding-inline:20px}#pf-root .pf .top{padding-block:18px;display:flex;justify-content:space-between;align-items:center}#pf-root .pf .brand{display:flex;align-items:center;gap:10px;font-weight:800;font-size:19px;color:var(--navy)}#pf-root .pf .brand svg{width:34px;height:34px;border-radius:9px}#pf-root .pf .top small{color:var(--mut);font-size:14px}#pf-root .pf .head{text-align:center;padding-block:10px 22px}#pf-root .pf .hi{display:inline-block;background:#e9f8f1;color:var(--ok);font-weight:700;font-size:14px;padding:6px 14px;border-radius:99px;margin-bottom:14px}#pf-root .pf h1{font-size:clamp(28px,4vw,44px);line-height:1.15;font-weight:900;color:var(--navy);text-wrap:balance;letter-spacing:-.4px}#pf-root .pf h1 em{font-style:normal;background:linear-gradient(90deg,var(--blue),var(--vio));-webkit-background-clip:text;background-clip:text;color:transparent}#pf-root .pf .vid{position:relative;border-radius:18px;overflow:hidden;background:#0b1640;box-shadow:0 30px 60px -28px rgba(11,22,64,.45);border:1px solid #d8def0}#pf-root .pf .vhint{text-align:center;color:var(--mut);font-size:14px;margin-top:10px}#pf-root .pf .acts{display:grid;grid-template-columns:repeat(3,1fr);gap:14px;margin-top:26px}#pf-root .pf .act{display:flex;flex-direction:column;gap:6px;justify-content:center;text-decoration:none;border-radius:16px;padding:16px 18px;font-weight:700;font-size:16.5px;line-height:1.35;transition:transform .15s,box-shadow .15s;min-height:84px}#pf-root .pf .act small{font-weight:400;font-size:13.5px;opacity:.9}#pf-root .pf .act:hover{transform:translateY(-2px)}#pf-root .pf .act.p{background:linear-gradient(135deg,var(--blue),var(--vio));color:#fff;box-shadow:0 14px 30px -14px rgba(47,107,255,.7)}#pf-root .pf .act.w{background:#fff;color:var(--ink);border:1.5px solid #bfe8d0}#pf-root .pf .act.w b{color:var(--wa)}#pf-root .pf .act.i{background:#fff;color:var(--ink);border:1.5px solid var(--line)}#pf-root .pf .act:focus-visible{outline:3px solid rgba(47,107,255,.45);outline-offset:2px}#pf-root .pf .qz{margin:40px auto 56px;background:#fff;border:1px solid var(--line);border-radius:22px;padding:28px 24px;box-shadow:0 24px 50px -30px rgba(11,22,64,.3);max-width:760px}#pf-root .pf .qz h2{font-size:clamp(23px,3vw,30px);font-weight:900;color:var(--navy);text-align:center;text-wrap:balance}#pf-root .pf .qz .qs{text-align:center;color:var(--mut);margin-top:6px}#pf-root .pf .prog{display:flex;align-items:center;gap:12px;margin:22px 0 18px}#pf-root .pf .prog .bar{flex:1;height:8px;background:#edf0f8;border-radius:99px;overflow:hidden}#pf-root .pf .prog .bar i{display:block;height:100%;width:0;background:linear-gradient(90deg,var(--blue),var(--vio));border-radius:99px;transition:width .35s}#pf-root .pf .prog span{font-size:13px;color:var(--mut);font-variant-numeric:tabular-nums;white-space:nowrap}#pf-root .pf .q h3{font-size:21px;font-weight:800;color:var(--navy);margin-bottom:4px}#pf-root .pf .q .hint{font-size:14px;color:var(--mut);margin-bottom:14px}#pf-root .pf .opts{display:grid;grid-template-columns:repeat(2,1fr);gap:10px}#pf-root .pf .opt{all:unset;box-sizing:border-box;display:flex;align-items:center;gap:10px;padding:15px 16px;border:1.5px solid var(--line);border-radius:14px;background:#fbfcff;cursor:pointer;font-weight:600;font-size:16px;transition:.15s;color:var(--ink);text-align:right}#pf-root .pf .opt:hover{border-color:#b9c9ff;background:#f4f7ff}#pf-root .pf .opt[aria-pressed=true]{border-color:var(--blue);background:#eef3ff;color:var(--blue2)}#pf-root .pf .opt:focus-visible{box-shadow:0 0 0 4px rgba(47,107,255,.25)}#pf-root .pf .opt .bx{flex:0 0 20px;height:20px;border-radius:6px;border:2px solid #c3cbe2;display:grid;place-items:center;font-size:13px;color:#fff}#pf-root .pf .opt[aria-pressed=true] .bx{background:var(--blue);border-color:var(--blue)}#pf-root .pf .opt .bx.r{border-radius:50%}#pf-root .pf .nav{display:flex;justify-content:space-between;align-items:center;margin-top:18px;gap:10px}#pf-root .pf .back{all:unset;cursor:pointer;color:var(--mut);font-weight:600;font-size:15px;padding:8px 4px}#pf-root .pf .back[hidden]{display:none}#pf-root .pf .back:focus-visible{outline:2px solid var(--blue)}#pf-root .pf .next{all:unset;box-sizing:border-box;cursor:pointer;background:linear-gradient(135deg,var(--blue),var(--vio));color:#fff;font-weight:800;padding:12px 22px;border-radius:12px;font-size:16px}#pf-root .pf .next[disabled]{opacity:.45;cursor:not-allowed}#pf-root .pf .next:focus-visible{box-shadow:0 0 0 4px rgba(47,107,255,.3)}#pf-root .pf .q input[type=url],#pf-root .pf .q input[type=text]{width:100%;font:inherit;font-size:17px;padding:14px;border:1.5px solid var(--line);border-radius:12px;background:#fbfcff;direction:ltr;text-align:right}#pf-root .pf .q input:focus{outline:none;border-color:var(--blue);box-shadow:0 0 0 4px rgba(47,107,255,.14)}#pf-root .pf .saved{font-size:12.5px;color:var(--mut);text-align:center;margin-top:12px;min-height:18px}#pf-root .pf .err{color:var(--err);font-size:14px;margin-top:8px}#pf-root .pf .res h3{font-size:24px;font-weight:900;color:var(--navy);text-align:center}#pf-root .pf .res .rs{text-align:center;color:var(--mut);margin:6px 0 20px}#pf-root .pf .imp{display:grid;gap:12px}#pf-root .pf .imp>div{border:1px solid var(--line);border-radius:16px;padding:16px 18px;background:#fbfcff;display:flex;gap:14px}#pf-root .pf .imp b.n{flex:0 0 34px;height:34px;border-radius:10px;display:grid;place-items:center;color:#fff;background:linear-gradient(135deg,var(--blue),var(--vio));font-size:16px}#pf-root .pf .imp h4{margin:0 0 3px;font-size:17px;color:var(--navy)}#pf-root .pf .imp p{color:var(--mut);font-size:15.5px}#pf-root .pf .note{background:#fff8e8;border:1px solid #f3e1b0;border-radius:12px;padding:12px 14px;font-size:14px;color:#6b5617;margin-top:16px}#pf-root .pf .wa{display:flex;align-items:center;justify-content:center;gap:10px;width:100%;margin-top:18px;text-decoration:none;background:var(--wa);color:#fff;font-weight:800;font-size:18px;padding:16px;border-radius:14px;box-shadow:0 14px 30px -14px rgba(31,168,85,.7)}#pf-root .pf .wa:focus-visible{outline:3px solid rgba(31,168,85,.45);outline-offset:2px}#pf-root .pf .wa svg{width:22px;height:22px}#pf-root .pf .small{font-size:13px;color:var(--mut);text-align:center;margin-top:8px}#pf-root .pf .redo{all:unset;cursor:pointer;color:var(--blue);font-size:14px;display:block;margin:12px auto 0;text-decoration:underline}#pf-root .pf .gate{display:grid;gap:12px;max-width:520px;margin:20px auto 0}#pf-root .pf .gate label.l{display:grid;gap:6px;font-weight:600;font-size:15px}#pf-root .pf .gate input[type=text],#pf-root .pf .gate input[type=tel],#pf-root .pf .gate input[type=email]{width:100%;font:inherit;font-size:17px;padding:13px 14px;border:1.5px solid var(--line);border-radius:12px;background:#fbfcff;color:var(--ink);text-align:right}#pf-root .pf .gate input[type=tel],#pf-root .pf .gate input[type=email]{direction:ltr}#pf-root .pf .gate input:focus{outline:none;border-color:var(--blue);box-shadow:0 0 0 4px rgba(47,107,255,.14)}#pf-root .pf .gate .bad input{border-color:var(--err)}#pf-root .pf .gate .em{color:var(--err);font-size:13.5px;font-weight:400;min-height:0}#pf-root .pf .gate fieldset{border:0;padding:0;margin:0;display:grid;gap:6px}#pf-root .pf .gate legend{font-weight:600;font-size:15px;margin-bottom:6px}#pf-root .pf .seg{display:grid;grid-template-columns:repeat(3,1fr);gap:8px}#pf-root .pf .seg label{position:relative}#pf-root .pf .seg input{position:absolute;opacity:0;inset:0;cursor:pointer}#pf-root .pf .seg span{display:block;text-align:center;padding:11px 6px;border:1.5px solid var(--line);border-radius:12px;font-weight:600;font-size:15px;background:#fbfcff;cursor:pointer}#pf-root .pf .seg input:checked+span{border-color:var(--blue);background:#eef3ff;color:var(--blue2)}#pf-root .pf .seg input:focus-visible+span{box-shadow:0 0 0 4px rgba(47,107,255,.25)}#pf-root .pf .chk{display:flex;gap:10px;align-items:flex-start;font-size:13.5px;color:var(--mut);line-height:1.45}#pf-root .pf .chk input{margin-top:3px;width:18px;height:18px;accent-color:var(--blue);flex:0 0 18px}#pf-root .pf .gate .next{text-align:center;width:100%;padding:15px;font-size:17px}#pf-root .pf .gate .legal{font-size:12.5px;color:var(--mut);text-align:center}#pf-root .pf .hp{position:absolute!important;left:-9999px!important;width:1px;height:1px;overflow:hidden}#pf-root .pf .foot{padding-block:22px 40px;text-align:center;font-size:12.5px;color:var(--mut)}#pf-root .pf .fade{animation:pfIn .3s ease}@keyframes pfIn{from{opacity:0;transform:translateY(6px)}to{opacity:1;transform:none}}@media (max-width:760px){#pf-root .pf .acts{grid-template-columns:1fr}#pf-root .pf .opts{grid-template-columns:1fr}#pf-root .pf .qz{padding:22px 16px;border-radius:18px}#pf-root .pf .act{min-height:0}}@media (prefers-reduced-motion:reduce){#pf-root .pf .fade{animation:none}#pf-root .pf .prog .bar i{transition:none}}#pf-root .pf h1,#pf-root .pf h2,#pf-root .pf h3,#pf-root .pf h4,#pf-root .pf p,#pf-root .pf a,#pf-root .pf button,#pf-root .pf span,#pf-root .pf li,#pf-root .pf label,#pf-root .pf input,#pf-root .pf small,#pf-root .pf b,#pf-root .pf strong{font-family:Heebo,Arial,sans-serif;letter-spacing:normal;text-transform:none}#pf-root .pf p{margin-bottom:0}#pf-root .pf ul{margin-bottom:0}</style><div class=\"pf\" id=\"pfTr\">\n  <div class=\"wrap top\">\n    <div class=\"brand\"><svg viewBox=\"0 0 64 64\" aria-hidden=\"true\"><defs><linearGradient id=\"pfg2\" x1=\"0\" y1=\"0\" x2=\"1\" y2=\"1\"><stop offset=\"0\" stop-color=\"#2f6bff\"/><stop offset=\"1\" stop-color=\"#7c5cff\"/></linearGradient></defs><rect width=\"64\" height=\"64\" rx=\"14\" fill=\"url(#pfg2)\"/><path d=\"M20 44V20h12.5c6 0 9.5 3.5 9.5 8.6S38.5 37 32.5 37H26v7h-6zm6-12h6c2.6 0 4-1.3 4-3.4S38.6 25 36 25h-6v7z\" fill=\"#fff\"/><circle cx=\"46\" cy=\"18\" r=\"5\" fill=\"#19c3ff\"/></svg>Ping AI</div>\n    <small>הדרכה חינמית</small>\n  </div>\n  <div class=\"wrap\">\n    <div class=\"head\">\n      <span class=\"hi\" id=\"pfHi\">✓ ההרשמה הושלמה</span>\n      <h1>ההדרכה שלכם מוכנה. <em>עכשיו בואו נהפוך את הידע לתוצאות.</em></h1>\n    </div>\n    <div class=\"vid\" id=\"pfVid\"><div id=\"vidalytics_embed_jEvI9jjReBUkk7Bb\" style=\"width:100%;position:relative;padding-top:52.98%\"></div></div>\n    <p class=\"vhint\">מומלץ לצפות עם סאונד ולהשאיר את Shopify פתוח בלשונית ליד.</p>\n\n    <div class=\"acts\">\n      <a class=\"act p\" data-ev=\"PingInstallClick\" href=\"https://apps.shopify.com/ping-ai\" target=\"_blank\" rel=\"noopener\">להתקנת Ping AI ולעבודה לצד ההדרכה <small>נפתח בלשונית חדשה, בחנות האפליקציות של Shopify</small></a>\n      <a class=\"act w\" data-ev=\"WhatsAppClick\" href=\"https://wa.me/972525535537?text=%D7%90%D7%91%D7%99%D7%91%20%D7%90%D7%94%D7%91%D7%AA%D7%99%20%D7%90%D7%AA%20%D7%94%D7%94%D7%93%D7%A8%D7%9B%D7%94%20%D7%95%D7%90%D7%A9%D7%9E%D7%97%20%D7%9C%D7%93%D7%91%D7%A8%20%D7%90%D7%99%D7%AA%D7%9A%20%D7%A2%D7%9C%20%D7%94%D7%90%D7%AA%D7%A8%20%D7%A9%D7%9C%D7%99\" target=\"_blank\" rel=\"noopener\"><span>רוצים עזרה עם החנות? <b>דברו איתי בוואטסאפ</b></span><small>נפתחת הודעה מוכנה, אתם לוחצים שליחה</small></a>\n      <a class=\"act i\" data-ev=\"InstagramClick\" href=\"https://www.instagram.com/aviv_malka7/\" target=\"_blank\" rel=\"noopener\">שתפו אותי בתוצאות שלכם באינסטגרם <small>ניסיתם משהו מההדרכה? אשמח לשמוע מה השתנה אצלכם.</small></a>\n    </div>\n\n    <section class=\"qz\" id=\"pfQuiz\" aria-labelledby=\"pfQT\">\n      <h2 id=\"pfQT\">כמה הזדמנויות להכנסה החנות שלכם מפספסת?</h2>\n      <p class=\"qs\">ענו על כמה שאלות קצרות ונבין יחד איפה כדאי להתחיל לשפר.</p>\n      <div id=\"pfQBody\"></div>\n    </section>\n  </div>\n  <p class=\"foot\">התוכן לצורכי לימוד בלבד ואינו הבטחה להכנסה או לתוצאה. © אביב מלכה · Ping AI</p>\n</div>";
})();
/* Ping AI training funnel — shared client code (lp + training). No personal data ever goes into URLs. */
var PF = (function () {
  var LOCAL = /^(localhost|127\.0\.0\.1)$/.test(location.hostname);
  var API = LOCAL && /[?&]api=([^&]+)/.test(location.search) ? decodeURIComponent(RegExp.$1) : 'https://ping-funnel.aviv1988.workers.dev';
  var PIXEL = '2210072352882860';
  var LP_URL = 'https://www.avivmalka.com/ping-training';
  var TR_URL = 'https://www.avivmalka.com/ping-training-video';
  if (!/(^|\.)avivmalka\.com$|mykajabi\.com$/.test(location.hostname)) { LP_URL = 'lp.html' + location.search; TR_URL = 'tr.html' + location.search; }   // previews stay on their own origin (token lives in localStorage)

  function ls(k, v) { try { if (v === undefined) return localStorage.getItem(k); if (v === null) localStorage.removeItem(k); else localStorage.setItem(k, v); } catch (e) { return null; } }
  function rid(n) { var a = new Uint8Array(n || 12), s = ''; (window.crypto || window.msCrypto).getRandomValues(a); for (var i = 0; i < a.length; i++) s += (a[i] % 36).toString(36); return s; }
  function cookie(n) { var m = document.cookie.match('(?:^|; )' + n + '=([^;]*)'); return m ? decodeURIComponent(m[1]) : ''; }
  var vid = ls('pf_vid'); if (!vid) { vid = 'v' + rid(14); ls('pf_vid', vid); }

  /* first-touch attribution, kept 30 days; read from the URL then removed from the address bar */
  var KEYS = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_content', 'utm_term', 'campaign_id', 'adset_id', 'ad_id', 'fbclid'];
  function captureUtm() {
    var p = new URLSearchParams(location.search), got = {}, any = false;
    KEYS.forEach(function (k) { var v = p.get(k); if (v) { got[k] = v.slice(0, 200); any = true; } });
    var old = {}; try { old = JSON.parse(ls('pf_utm') || '{}'); } catch (e) {}
    if (any && (!old.t || Date.now() - old.t > 30 * 864e5 || !old.utm_source)) { got.t = Date.now(); ls('pf_utm', JSON.stringify(got)); old = got; }
    if (got.fbclid) ls('pf_fbc', 'fb.1.' + Date.now() + '.' + got.fbclid);
    return old;
  }
  function utm() { try { return JSON.parse(ls('pf_utm') || '{}'); } catch (e) { return {}; } }
  function fbc() { return cookie('_fbc') || ls('pf_fbc') || ''; }

  /* Meta pixel: our own pixel, events sent only to it (trackSingle) with the same event_id the server sends to CAPI */
  function pixel() {
    if (!window.fbq) {
      !function (f, b, e, v, n, t, s) { if (f.fbq) return; n = f.fbq = function () { n.callMethod ? n.callMethod.apply(n, arguments) : n.queue.push(arguments); }; if (!f._fbq) f._fbq = n; n.push = n; n.loaded = !0; n.version = '2.0'; n.queue = []; t = b.createElement(e); t.async = !0; t.src = v; s = b.getElementsByTagName(e)[0]; s.parentNode.insertBefore(t, s); }(window, document, 'script', 'https://connect.facebook.net/en_US/fbevents.js');
    }
    if (!window.__pfPixel) { window.fbq('init', PIXEL); window.__pfPixel = 1; }
  }
  var STD = {PageView: 1, Lead: 1};
  function fb(name, eventId, data) {
    try { pixel(); window.fbq(STD[name] ? 'trackSingle' : 'trackSingleCustom', PIXEL, name, data || {}, {eventID: eventId}); } catch (e) {}
  }

  function api(path, body, auth) {
    var h = {'Content-Type': 'application/json'};
    if (auth) h.Authorization = 'Bearer ' + auth;
    return fetch(API + path, {method: body ? 'POST' : 'GET', headers: h, body: body ? JSON.stringify(body) : undefined, keepalive: !!body && JSON.stringify(body).length < 6e4})
      .then(function (r) { return r.json().then(function (j) { j._status = r.status; return j; }); });
  }
  /* funnel event: pixel (browser) + server log/CAPI with the same id; once per page per name unless repeat=true */
  var sent = {};
  function track(name, opt) {
    opt = opt || {};
    if (sent[name] && !opt.repeat) return; sent[name] = 1;
    var id = name.toLowerCase().slice(0, 12) + '_' + rid(14);
    if (!opt.noPixel) fb(name, id, opt.data);
    api('/api/event', {name: name, event_id: id, vid: vid, variant: ls('pf_var') || '', utm: utm(), url: location.origin + location.pathname, fbc: fbc(), fbp: cookie('_fbp')}, token()).catch(function () {});
  }
  function token() { var t = ls('pf_tok'); if (!t) return null; var exp = +(t.split('.')[1] || 0); if (exp && exp < Date.now()) { ls('pf_tok', null); return null; } return t; }

  return {API: API, LP_URL: LP_URL, TR_URL: TR_URL, ls: ls, rid: rid, vid: vid, captureUtm: captureUtm, utm: utm, fbc: fbc, cookie: cookie, fb: fb, api: api, track: track, token: token, pixel: pixel};
})();


(function () {
  var root = document.getElementById('pfTr'); if (!root) return;
  var t0 = Date.now();
  PF.captureUtm();
  /* the video is open to everyone (people often open this page on another device than the one they registered on);
     only the quiz needs a lead, so without a saved token the quiz starts with a short details step */
  var TOK = PF.token();
  var first = TOK ? PF.ls('pf_first') || '' : '';
  var hi = root.querySelector('#pfHi');
  if (!TOK) hi.textContent = '▶ ההדרכה החינמית המלאה';
  else if (first) hi.textContent = '✓ ' + first + ', ההרשמה הושלמה';
  PF.track('TrainingPageView');

  /* Vidalytics player (embed code from Aviv, 28.10.2026); no autoplay with sound is set in the player */
  (function (v, i, d, a, l, y, t, c, s) {
    y = '_' + d.toLowerCase(); c = d + 'L'; if (!v[d]) { v[d] = {}; } if (!v[c]) { v[c] = {}; } if (!v[y]) { v[y] = {}; } var vl = 'Loader', vli = v[y][vl], vsl = v[c][vl + 'Script'], vlf = v[c][vl + 'Loaded'], ve = 'Embed';
    if (!vsl) { vsl = function (u, cb) { if (t) { cb(); return; } s = i.createElement('script'); s.type = 'text/javascript'; s.async = 1; s.src = u; if (s.readyState) { s.onreadystatechange = function () { if (s.readyState === 'loaded' || s.readyState == 'complete') { s.onreadystatechange = null; vlf = 1; cb(); } }; } else { s.onload = function () { vlf = 1; cb(); }; } i.getElementsByTagName('head')[0].appendChild(s); }; }
    vsl(l + 'loader.min.js', function () { if (!vli) { var vlc = v[c][vl]; vli = new vlc(); } vli.loadScript(l + 'player.min.js', function () { var vec = v[d][ve]; t = new vec(); t.run(a); }); });
  })(window, document, 'Vidalytics', 'vidalytics_embed_jEvI9jjReBUkk7Bb', 'https://fast.vidalytics.com/embeds/YxS8sQvf/jEvI9jjReBUkk7Bb/');

  /* buttons: new tab + event */
  root.querySelectorAll('[data-ev]').forEach(function (a) { a.addEventListener('click', function () { PF.track(a.getAttribute('data-ev'), {repeat: true}); }); });

  /* video progress 25/50/75/90 from the player's <video> element (Vidalytics renders an HTML5 video) */
  (function watch() {
    var marks = [25, 50, 75, 90], fired = {}, tries = 0;
    try { fired = JSON.parse(PF.ls('pf_vmarks') || '{}'); } catch (e) {}
    var iv = setInterval(function () {
      var v = root.querySelector('#pfVid video'); if (!v && ++tries > 120) return clearInterval(iv);
      if (!v) return; clearInterval(iv);
      v.addEventListener('timeupdate', function () {
        if (!v.duration || !isFinite(v.duration) || v.duration < 60) return;   // ignore short preview loops
        var p = v.currentTime / v.duration * 100;
        marks.forEach(function (m) { if (p >= m && !fired[m]) { fired[m] = 1; PF.ls('pf_vmarks', JSON.stringify(fired)); PF.track('Video' + m); } });
      });
    }, 1000);
  })();

  /* ---------- quiz ---------- */
  var QS = [
    {k: 'revenue', l: 'מחזור חודשי', t: 'מה המחזור החודשי הממוצע של החנות?', o: ['עדיין אין מכירות', 'עד ₪10,000', '₪10,000–₪50,000', '₪50,000–₪150,000', '₪150,000–₪500,000', 'מעל ₪500,000']},
    {k: 'visitors', l: 'מבקרים בחודש', t: 'כמה מבקרים נכנסים לחנות בחודש?', o: ['פחות מ-1,000', '1,000–5,000', '5,000–20,000', '20,000–100,000', 'מעל 100,000', 'לא יודע']},
    {k: 'list', l: 'אנשי קשר ברשימת הדיוור', t: 'כמה אנשי קשר יש לכם ברשימת הדיוור?', o: ['פחות מ-1,000', '1,000–5,000', '5,000–20,000', '20,000–50,000', 'מעל 50,000', 'לא יודע']},
    {k: 'tools', l: 'כלים שאני מפעיל', t: 'אילו כלים אתם מפעילים כיום?', hint: 'אפשר לבחור כמה', multi: true, none: 'אין לי מערך מסודר', o: ['אימייל מרקטינג', 'שחזור עגלות', 'WhatsApp אוטומטי', 'SMS', 'בוט שירות לקוחות', 'אין לי מערך מסודר']},
    {k: 'pain', l: 'מה הכי כואב לי', t: 'מה הכי כואב לכם כרגע?', o: ['עלויות הפרסום גבוהות מדי', 'אין מספיק רווח למרות שיש מכירות', 'יותר מדי עגלות נטושות', 'לקוחות לא חוזרים לקנות', 'יותר מדי כלים ועלויות חודשיות', 'אין לי זמן להקים אוטומציות']},
    {k: 'pref', l: 'איך אני רוצה להתקדם', t: 'איך הייתם מעדיפים להתקדם?', o: ['להתקין ולנהל לבד', 'לקבל הדרכה וליווי', 'שמישהו יקים וינהל הכול עבורי']},
    {k: 'website', t: 'מה כתובת האתר שלכם?', hint: 'לא חובה. עוזר לנו להכין את שיחת האבחון.', input: true}
  ];
  var N = QS.length, A = {}, website = '', step = 0, done = false, saving = 0;
  var body = root.querySelector('#pfQBody');
  try { var loc = JSON.parse(PF.ls('pf_quiz') || '{}'); A = loc.a || {}; website = loc.w || ''; } catch (e) {}
  function esc(s) { return String(s).replace(/[&<>"]/g, function (c) { return {'&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;'}[c]; }); }
  function firstOpen() { for (var i = 0; i < N - 1; i++) { var a = A[QS[i].k]; if (a == null || (Array.isArray(a) && !a.length)) return i; } return N - 1; }

  var started = false;
  function save(isDone) {
    PF.ls('pf_quiz', JSON.stringify({a: A, w: website}));
    var msg = root.querySelector('.saved'); if (msg) msg.textContent = 'שומר…';
    saving++;
    var evId = isDone ? 'quizcomp_' + PF.rid(14) : undefined;
    return PF.api('/api/quiz', {answers: A, website: website, done: !!isDone, event_id: evId, url: location.origin + location.pathname}, TOK).then(function (r) {
      saving--;
      if (r._status === 401) { lost(); return r; }
      var m = root.querySelector('.saved'); if (m) m.textContent = r.ok ? 'התשובות נשמרו ✓' : '';
      if (r.ok && !started && Object.keys(A).length) { started = true; PF.fb('QuizStarted', 'quizstart_' + PF.rid(10)); }
      if (r.ok && r.event_id) PF.fb('QuizCompleted', r.event_id);   // same id the server sent to CAPI
      return r;
    }).catch(function () { saving--; var m = root.querySelector('.saved'); if (m) m.textContent = 'אין חיבור, נשמר במכשיר ונשלח שוב'; return {ok: false}; });
  }

  function render() {
    if (done) return result();
    var q = QS[step], pct = Math.round(step / N * 100);
    var h = '<div class="prog"><div class="bar"><i style="width:' + pct + '%"></i></div><span>שאלה ' + (step + 1) + ' מתוך ' + N + '</span></div><div class="q fade" role="group" aria-labelledby="pfQq"><h3 id="pfQq" tabindex="-1">' + esc(q.t) + '</h3>' + (q.hint ? '<p class="hint">' + esc(q.hint) + '</p>' : '<p class="hint"></p>');
    if (q.input) {
      h += '<input type="url" inputmode="url" id="pfWeb" placeholder="mystore.co.il" value="' + esc(website) + '" aria-label="כתובת האתר" maxlength="200"><div class="err" id="pfWebErr" hidden>הכתובת לא נראית תקינה. אפשר גם לדלג.</div>';
    } else {
      h += '<div class="opts">' + q.o.map(function (o, i) {
        var sel = q.multi ? (A[q.k] || []).indexOf(o) >= 0 : A[q.k] === o;
        return '<button type="button" class="opt" data-i="' + i + '" aria-pressed="' + sel + '"><span class="bx' + (q.multi ? '' : ' r') + '">' + (sel ? '✓' : '') + '</span>' + esc(o) + '</button>';
      }).join('') + '</div>';
    }
    h += '</div><div class="nav"><button type="button" class="back"' + (step ? '' : ' hidden') + '>→ חזרה</button>';
    if (q.multi) h += '<button type="button" class="next"' + ((A[q.k] || []).length ? '' : ' disabled') + '>המשך ←</button>';
    if (q.input) h += '<button type="button" class="next">' + (website ? 'לסיכום שלי ←' : 'דלגו לסיכום ←') + '</button>';
    h += '</div><p class="saved" aria-live="polite"></p>';
    body.innerHTML = h;
    var hh = body.querySelector('#pfQq'); if (hh && render.focus) hh.focus({preventScroll: true});
    render.focus = true;

    body.querySelectorAll('.opt').forEach(function (b) {
      b.addEventListener('click', function () {
        var o = q.o[+b.getAttribute('data-i')];
        if (q.multi) {
          var cur = (A[q.k] || []).slice(), at = cur.indexOf(o);
          if (at >= 0) cur.splice(at, 1); else if (o === q.none) cur = [o]; else { cur = cur.filter(function (x) { return x !== q.none; }); cur.push(o); }
          A[q.k] = cur; save(); render();
        } else { A[q.k] = o; save(); setTimeout(function () { step++; render(); }, 180); }
      });
    });
    var back = body.querySelector('.back'); if (back) back.addEventListener('click', function () { step = Math.max(0, step - 1); render(); });
    var nx = body.querySelector('.next');
    if (nx && q.multi) nx.addEventListener('click', function () { if ((A[q.k] || []).length) { step++; render(); } });
    if (q.input) {
      var inp = body.querySelector('#pfWeb');
      inp.addEventListener('input', function () { website = inp.value.trim(); nx.textContent = website ? 'לסיכום שלי ←' : 'דלגו לסיכום ←'; });
      inp.addEventListener('keydown', function (e) { if (e.key === 'Enter') nx.click(); });
      nx.addEventListener('click', function () {
        if (website && !/^(https?:\/\/)?[^\s.\/]+(\.[^\s.\/]+)+(\/\S*)?$/i.test(website)) { body.querySelector('#pfWebErr').hidden = false; return; }
        nx.setAttribute('disabled', ''); nx.textContent = 'מכין את הסיכום…';
        save(true).then(function (r) { if (r && r.ok) { done = true; render(); } else { nx.removeAttribute('disabled'); nx.textContent = 'לסיכום שלי ←'; var m = root.querySelector('.saved'); if (m && r && r.fields) { body.querySelector('#pfWebErr').hidden = false; } } });
      });
    }
  }

  /* ---------- personal summary: rules from the answers, no money figures ---------- */
  function areas() {
    var tools = A.tools || [], has = function (t) { return tools.indexOf(t) >= 0; }, none = has('אין לי מערך מסודר');
    var L = [];
    var P = {
      'עלויות הפרסום גבוהות מדי': ['להוציא יותר מהתנועה שכבר משלמים עליה', 'לפני שמגדילים תקציב, כדאי לבדוק מה קורה עם מי שכבר הגיע: עגלות, נרשמים ולקוחות קיימים.'],
      'אין מספיק רווח למרות שיש מכירות': ['ערוצים שלא עולים כסף על כל הודעה', 'אימייל, WhatsApp ו-SMS לרשימה שכבר שלכם הם ערוצים שבהם לא משלמים שוב על כל חשיפה.'],
      'יותר מדי עגלות נטושות': ['שחזור עגלות בכמה ערוצים', 'תזכורת מסודרת בוואטסאפ, באימייל וב-SMS לפי תזמון, במקום הודעה אחת או בכלל לא.'],
      'לקוחות לא חוזרים לקנות': ['תהליך אחרי רכישה', 'רצף הודעות אחרי הקנייה והמלצות רלוונטיות שמחזירים לקוח לרכישה נוספת.'],
      'יותר מדי כלים ועלויות חודשיות': ['איחוד הכלים למערכת אחת', 'כשאימייל, SMS, WhatsApp ושירות לקוחות יושבים במקום אחד, קל יותר לראות מה עובד ולחסוך כלים.'],
      'אין לי זמן להקים אוטומציות': ['אוטומציות מוכנות שרצות לבד', 'להתחיל מתבניות מוכנות לתהליכים העיקריים, ולהוסיף בהדרגה.']
    };
    if (A.pain && P[A.pain]) L.push(P[A.pain]);
    if ((none || !has('שחזור עגלות')) && A.pain !== 'יותר מדי עגלות נטושות' && A.revenue !== 'עדיין אין מכירות') L.push(['שחזור עגלות נטושות', 'לפי התשובות אין עדיין תהליך שחזור עגלות פעיל. זה בדרך כלל המקום הראשון לבדוק.']);
    if (none || (!has('WhatsApp אוטומטי') && !has('SMS'))) L.push(['ערוץ WhatsApp או SMS', 'הודעות קצרות ללקוחות שנתנו הסכמה, לצד האימייל, בתזמון הנכון.']);
    if (none || !has('אימייל מרקטינג') || ['פחות מ-1,000', 'לא יודע'].indexOf(A.list) >= 0) L.push(['בניית רשימת דיוור ושימוש בה', A.list === 'לא יודע' ? 'כדאי קודם לדעת כמה אנשי קשר יש לכם, כי זה הנכס שאפשר לעבוד איתו בלי לשלם שוב על פרסום.' : 'איסוף מסודר של אנשי קשר באתר ותהליך קבוע שמדבר איתם.']);
    if (!has('בוט שירות לקוחות')) L.push(['מענה אוטומטי ללקוחות', 'בוט שעונה על שאלות נפוצות ומשאיר לכם רק את מה שדורש אתכם.']);
    var seen = {}, out = [];
    L.forEach(function (x) { if (!seen[x[0]] && out.length < 3) { seen[x[0]] = 1; out.push(x); } });
    return out;
  }
  function waText() {
    var lines = ['היי אביב, אני ' + (first || '') + '. עשיתי את האבחון בדף ההדרכה של Ping AI.', ''];
    if (website) lines.push('האתר שלי: ' + website);
    QS.forEach(function (q) { if (q.input) return; var a = A[q.k]; if (a == null) return; lines.push('• ' + q.l + ': ' + (Array.isArray(a) ? a.join(', ') : a)); });
    lines.push('', 'אשמח לשיחת אבחון קצרה על החנות שלי.');
    return lines.join('\n');
  }
  function result() {
    var ar = areas();
    var h = '<div class="prog"><div class="bar"><i style="width:100%"></i></div><span>הושלם</span></div><div class="res fade"><h3 tabindex="-1" id="pfRes">' + (first ? esc(first) + ', הנה ' : 'הנה ') + 'המקומות שכדאי להתחיל מהם</h3><p class="rs">לפי מה שעניתם, אלה ' + (ar.length === 1 ? 'התחום' : ar.length + ' התחומים') + ' עם הפוטנציאל הכי ברור לשיפור:</p><div class="imp">' +
      ar.map(function (x, i) { return '<div><b class="n">' + (i + 1) + '</b><div><h4>' + esc(x[0]) + '</h4><p>' + esc(x[1]) + '</p></div></div>'; }).join('') + '</div>' +
      '<p class="note">לא נציג כאן סכום שהחנות "מפסידה": אין לנו מספיק נתונים אמיתיים מהחנות כדי לחשב אותו בצורה הוגנת. בשיחת אבחון אפשר להסתכל על המספרים שלכם.</p>' +
      '<a class="wa" id="pfWa" target="_blank" rel="noopener" href="https://wa.me/972525535537?text=' + encodeURIComponent(waText()) + '"><svg viewBox="0 0 24 24" aria-hidden="true"><path fill="#fff" d="M12 2a10 10 0 00-8.6 15.1L2 22l5-1.3A10 10 0 1012 2zm5.8 14.2c-.2.7-1.4 1.3-2 1.4-.5.1-1.2.1-1.9-.1a17 17 0 01-1.8-.7 13.5 13.5 0 01-5.1-4.5c-.4-.5-1.3-1.7-1.3-3.3s.8-2.3 1.1-2.6c.3-.3.6-.4.8-.4h.6c.2 0 .4 0 .6.5l.9 2.1c.1.2.1.4 0 .6l-.3.5-.4.5c-.2.2-.3.4-.1.7.2.4.8 1.4 1.8 2.2 1.2 1.1 2.2 1.4 2.6 1.6.3.1.5.1.7-.1l.9-1.1c.2-.3.4-.2.7-.1l2 1c.3.1.5.2.6.3.1.2.1.8-.1 1.5z"/></svg>שלחו את האבחון שלי לאביב בוואטסאפ</a>' +
      '<p class="small">וואטסאפ ייפתח עם הודעה מוכנה. שום דבר לא נשלח עד שתלחצו שליחה.</p><button type="button" class="redo">לתקן תשובה</button></div>';
    body.innerHTML = h;
    var r = body.querySelector('#pfRes'); if (r && render.focus) r.focus({preventScroll: true});
    body.querySelector('#pfWa').addEventListener('click', function () { PF.track('QuizWhatsAppClick', {repeat: true}); });
    body.querySelector('.redo').addEventListener('click', function () { done = false; step = 0; render(); });
  }

  /* token expired or unknown: forget it and ask for details again */
  function lost() { PF.ls('pf_tok', null); TOK = null; gate(); }

  /* details step: same fields and rules as the lead page; an existing phone or email reconnects to the same lead */
  function gate() {
    body.innerHTML = '<form class="gate fade" novalidate><p class="qs" style="margin:0">כדי לקבל אבחון אישי, השאירו פרטים ונתחיל.</p>' +
      '<label class="l" data-f="name">שם מלא<input type="text" name="name" autocomplete="name" required maxlength="80"><span class="em" aria-live="polite"></span></label>' +
      '<label class="l" data-f="phone">טלפון נייד<input type="tel" name="phone" autocomplete="tel" inputmode="tel" required maxlength="20" placeholder="050-0000000"><span class="em" aria-live="polite"></span></label>' +
      '<label class="l" data-f="email">אימייל<input type="email" name="email" autocomplete="email" inputmode="email" required maxlength="120" placeholder="name@example.com"><span class="em" aria-live="polite"></span></label>' +
      '<fieldset data-f="store_status"><legend>יש לך חנות איקומרס פעילה?</legend><div class="seg"><label><input type="radio" name="store" value="yes"><span>כן</span></label><label><input type="radio" name="store" value="building"><span>בהקמה</span></label><label><input type="radio" name="store" value="no"><span>לא</span></label></div><span class="em" aria-live="polite"></span></fieldset>' +
      '<div class="hp" aria-hidden="true"><label>Company<input type="text" name="company" tabindex="-1" autocomplete="off"></label></div>' +
      '<label class="chk"><input type="checkbox" name="consent"><span>אשמח לקבל מאביב מלכה ומ-Ping AI תכנים, עדכונים והצעות באימייל, ב-SMS ובוואטסאפ. לא חובה, ואפשר להסיר בכל עת.</span></label>' +
      '<p class="err" role="alert" hidden></p><button type="submit" class="next">להתחלת האבחון ←</button>' +
      '<p class="legal">הפרטים משמשים כדי לשלוח לכם את האבחון ולחזור אליכם אם תבקשו. לשאלות על פרטיות: privacy@pingai.org</p></form>';
    var f = body.querySelector('form'), err = f.querySelector('.err'), btn = f.querySelector('button[type=submit]');
    var MSG = {name: 'נא למלא שם מלא', phone: 'נא למלא מספר נייד תקין (לדוגמה 050-1234567, או מספר בינלאומי עם +)', email: 'נא למלא כתובת אימייל תקינה', store_status: 'נא לבחור תשובה'};
    function setErr(k, msg) { var el = f.querySelector('[data-f="' + k + '"]'); el.classList.toggle('bad', !!msg); el.querySelector('.em').textContent = msg || ''; }
    function okPhone(s) { s = String(s || '').replace(/[\s\-().]/g, ''); if (s.indexOf('00') === 0) s = '+' + s.slice(2); return /^05\d{8}$/.test(s) || /^\+?9720?5\d{8}$/.test(s) || (/^\+[1-9]\d{7,14}$/.test(s) && s.indexOf('+972') !== 0); }
    f.addEventListener('submit', function (e) {
      e.preventDefault(); err.hidden = true;
      var d = {name: f.name.value.trim().replace(/\s+/g, ' '), phone: f.phone.value, email: f.email.value.trim(), store: (f.querySelector('input[name=store]:checked') || {}).value}, bad = {};
      if (d.name.length < 2) bad.name = 1;
      if (!okPhone(d.phone)) bad.phone = 1;
      if (!/^[^\s@]+@[^\s@]+\.[a-z]{2,}$/i.test(d.email)) bad.email = 1;
      if (!d.store) bad.store_status = 1;
      ['name', 'phone', 'email', 'store_status'].forEach(function (k) { setErr(k, bad[k] ? MSG[k] : ''); });
      var b1 = Object.keys(bad)[0]; if (b1) { var el = f.querySelector('[data-f="' + b1 + '"] input'); if (el) el.focus(); return; }
      btn.disabled = true; btn.textContent = 'שומרים…';
      var u = PF.utm();
      PF.api('/api/lead', {name: d.name, phone: d.phone, email: d.email, store_status: d.store, consent_marketing: f.consent.checked, privacy_ack: true,
        hp: f.company.value, elapsed: Date.now() - t0, event_id: 'lead_' + PF.rid(16), vid: PF.vid, variant: PF.ls('pf_var') || '', utm: u, fbclid: u.fbclid || '', fbc: PF.fbc(), fbp: PF.cookie('_fbp'),
        referrer: document.referrer.slice(0, 300), landing_url: location.origin + location.pathname}).then(function (r) {
        if (r.ok && r.token) {
          TOK = r.token; PF.ls('pf_tok', r.token); first = r.first || ''; PF.ls('pf_first', first);
          if (r.new && r.event_id) PF.fb('Lead', r.event_id, {content_name: 'ping-training'});
          if (first) hi.textContent = '✓ ' + first + ', ההרשמה הושלמה';
          boot(); return;
        }
        if (r.fields) Object.keys(r.fields).forEach(function (k) { if (MSG[k]) setErr(k, MSG[k]); });
        err.textContent = r._status === 429 ? 'יותר מדי ניסיונות. נסו שוב בעוד כמה דקות.' : 'משהו לא עבר. בדקו את הפרטים ונסו שוב.'; err.hidden = r._status === 422;
        btn.disabled = false; btn.textContent = 'להתחלת האבחון ←';
      }).catch(function () { err.textContent = 'בעיית חיבור. בדקו את האינטרנט ונסו שוב.'; err.hidden = false; btn.disabled = false; btn.textContent = 'להתחלת האבחון ←'; });
    });
  }

  /* resume from the server (source of truth), local copy as fallback */
  function boot() {
  if (!TOK) return gate();
  PF.api('/api/me', null, TOK).then(function (r) {
    if (r._status === 401 || r._status === 404) return lost();
    if (r.ok) {
      if (r.first) { first = r.first; PF.ls('pf_first', first); root.querySelector('#pfHi').textContent = '✓ ' + first + ', ההרשמה הושלמה'; }
      if (r.answers && Object.keys(r.answers).length) A = r.answers;
      if (r.website) website = r.website.replace(/^https?:\/\//, '');
      done = r.quiz_status === 'completed';
      if (Object.keys(A).length) started = true;
    }
    step = firstOpen(); render();
  }).catch(function () { step = firstOpen(); render(); });
  }
  boot();
})();
