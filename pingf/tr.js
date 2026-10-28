/* training funnel · tr (source pingf/src/tr.html, built by pingf/build.py) */
(function(){
 var root=document.getElementById('pf-root'); if(!root){root=document.createElement('div');root.id='pf-root';document.body.appendChild(root);}
 try{ document.body.style.background='#FAF8F3'; var p=root.parentElement; while(p && p!==document.body){ p.style.backgroundColor='#FAF8F3'; p.style.backgroundImage='none'; if(/section|container|row|col|sizer|block/.test(p.className||'')){ p.style.padding='0'; p.style.margin='0'; p.style.maxWidth='none'; } p=p.parentElement; } document.querySelectorAll('header.header, footer.footer, .announcement').forEach(function(el){ el.style.display='none'; }); var hs=document.createElement('style'); hs.textContent='.block-type--video{display:none !important}'; document.head.appendChild(hs); }catch(e){}
 root.innerHTML="<link href=\"https://fonts.googleapis.com/css2?family=Heebo:wght@400;500;600;700;800;900&display=swap\" rel=\"stylesheet\"><style>#pf-root .pf{position:relative;--bg:#FAF8F3;--card:#FFFFFF;--line:#E8E3D8;--ink:#121318;--ink2:#2a2c35;--mut:#5F6170;--gold:#F2B705;--gold2:#E08A00;--soft:#FFF6DA;--ok:#16A34A;--okbg:#EEF9F1;--wa:#1FA855;--err:#c0262d;\n  font-family:'Heebo',Arial,sans-serif;color:var(--ink);background:var(--bg);direction:rtl;text-align:right;line-height:1.55;font-size:17px;-webkit-font-smoothing:antialiased;overflow-x:hidden}#pf-root .pf *{box-sizing:border-box}#pf-root .pf h1,#pf-root .pf h2,#pf-root .pf h3,#pf-root .pf p{margin:0}#pf-root .pf .wrap{max-width:760px;margin:0 auto;padding-inline:18px}#pf-root .pf .tb{position:sticky;top:0;z-index:50;background:#121318;color:#fff;display:flex;justify-content:center;gap:8px;align-items:center;padding:10px 14px;font-weight:800;font-size:14.5px;flex-wrap:wrap;text-align:center}#pf-root .pf .tb b{color:#FFD84D}#pf-root .pf .head{text-align:center;padding-block:24px 18px}#pf-root .pf .hi{display:inline-block;background:var(--okbg);border:1px solid #BFE5CB;color:var(--ok);font-weight:800;font-size:14.5px;padding:6px 14px;border-radius:99px;margin-bottom:12px}#pf-root .pf h1{font-size:clamp(27px,6.8vw,42px);line-height:1.14;font-weight:900;color:var(--ink);text-wrap:balance}#pf-root .pf h1 em{font-style:normal;background:linear-gradient(180deg,transparent 58%,#FFE07A 58%);padding:0 2px}#pf-root .pf .vid{position:relative;border-radius:20px;overflow:hidden;background:#000;box-shadow:0 30px 60px -30px rgba(30,20,0,.5),0 0 0 1px var(--line)}#pf-root .pf .vhint{text-align:center;color:var(--mut);font-size:14.5px;margin-top:10px}#pf-root .pf .acts{display:grid;gap:10px;margin-top:20px}#pf-root .pf .act{display:flex;align-items:center;justify-content:center;gap:10px;text-decoration:none;border-radius:16px;padding:16px 18px;font-weight:900;font-size:18px;line-height:1.2;text-align:center;transition:transform .1s}#pf-root .pf .act:active{transform:scale(.98)}#pf-root .pf .act svg{width:22px;height:22px;flex:none}#pf-root .pf .act.p{background:linear-gradient(180deg,#FFD84D,var(--gold) 50%,var(--gold2));color:#1a1205;box-shadow:0 14px 30px -10px rgba(224,138,0,.6);font-size:20px;padding:18px}#pf-root .pf .act.w{background:linear-gradient(180deg,#3BDC7A,var(--wa));color:#fff;box-shadow:0 14px 30px -12px rgba(31,168,85,.55)}#pf-root .pf .act.i{background:#fff;color:var(--ink);border:2px solid var(--line)}#pf-root .pf .act.i:hover{border-color:var(--gold)}#pf-root .pf .act:focus-visible{outline:3px solid #121318;outline-offset:3px}#pf-root .pf .two{display:grid;grid-template-columns:1fr 1fr;gap:10px}#pf-root .pf .qz{margin:34px auto 56px;background:#fff;border:1px solid var(--line);border-radius:22px;padding:22px 18px;box-shadow:0 24px 50px -34px rgba(0,0,0,.35)}#pf-root .pf .qz .lab{display:block;font-weight:800;font-size:13px;letter-spacing:.14em;color:var(--gold2);margin-bottom:6px;text-align:center}#pf-root .pf .qz h2{font-size:clamp(23px,5.6vw,30px);font-weight:900;color:var(--ink);text-align:center;text-wrap:balance;line-height:1.2}#pf-root .pf .qz .qs{text-align:center;color:var(--mut);margin-top:6px}#pf-root .pf .prog{display:flex;align-items:center;gap:10px;margin:20px 0 14px}#pf-root .pf .prog .bar{flex:1;height:7px;background:#ECE7DA;border-radius:7px;overflow:hidden}#pf-root .pf .prog .bar i{display:block;height:100%;width:0;background:linear-gradient(90deg,var(--gold2),var(--gold));border-radius:7px;transition:width .35s}#pf-root .pf .prog span{font-size:13.5px;font-weight:800;color:var(--mut);font-variant-numeric:tabular-nums;white-space:nowrap}#pf-root .pf .q h3{font-size:20px;font-weight:900;color:var(--ink);margin-bottom:4px;line-height:1.35}#pf-root .pf .q .hint{font-size:14.5px;color:var(--mut);margin-bottom:12px}#pf-root .pf .opts{display:grid;grid-template-columns:repeat(2,1fr);gap:9px}#pf-root .pf .opt{all:unset;box-sizing:border-box;display:flex;align-items:center;gap:12px;padding:14px 15px;border:1.5px solid var(--line);border-radius:14px;background:#FBFAF6;cursor:pointer;font-weight:700;font-size:16.5px;transition:border-color .15s,background .15s;color:var(--ink);text-align:right}#pf-root .pf .opt:hover{border-color:var(--gold);background:var(--soft)}#pf-root .pf .opt[aria-pressed=true]{border-color:var(--gold2);background:var(--soft);color:#7A5300}#pf-root .pf .opt:focus-visible{box-shadow:0 0 0 4px rgba(242,183,5,.35)}#pf-root .pf .opt .bx{flex:0 0 20px;height:20px;border-radius:6px;border:2px solid #CFC8B6;display:grid;place-items:center;font-size:13px;color:#1a1205}#pf-root .pf .opt[aria-pressed=true] .bx{background:var(--gold);border-color:var(--gold2)}#pf-root .pf .opt .bx.r{border-radius:50%}#pf-root .pf .nav{display:flex;justify-content:space-between;align-items:center;margin-top:16px;gap:10px}#pf-root .pf .back{all:unset;cursor:pointer;color:var(--mut);font-weight:700;font-size:15px;padding:8px 4px}#pf-root .pf .back[hidden]{display:none}#pf-root .pf .back:focus-visible{outline:2px solid var(--gold2)}#pf-root .pf .next{all:unset;box-sizing:border-box;cursor:pointer;background:linear-gradient(180deg,#FFD84D,var(--gold) 50%,var(--gold2));color:#1a1205;font-weight:900;padding:13px 24px;border-radius:14px;font-size:17px;box-shadow:0 10px 24px -12px rgba(224,138,0,.6)}#pf-root .pf .next[disabled]{opacity:.45;cursor:not-allowed}#pf-root .pf .next:focus-visible{outline:3px solid #121318;outline-offset:2px}#pf-root .pf .q input[type=url],#pf-root .pf .q input[type=text]{width:100%;font:inherit;font-size:18px;padding:14px 15px;border:2px solid var(--line);border-radius:14px;background:#fff;direction:ltr;text-align:right}#pf-root .pf .q input:focus{outline:none;border-color:var(--gold2)}#pf-root .pf .saved{font-size:12.5px;color:var(--mut);text-align:center;margin-top:12px;min-height:18px}#pf-root .pf .err{color:var(--err);font-size:14px;font-weight:700;margin-top:8px}#pf-root .pf .res h3{font-size:24px;font-weight:900;color:var(--ink);text-align:center;text-wrap:balance}#pf-root .pf .res .rs{text-align:center;color:var(--mut);margin:6px 0 18px}#pf-root .pf .imp{display:grid;gap:10px}#pf-root .pf .imp>div{border:1px solid var(--line);border-radius:16px;padding:14px 16px;background:#fff;display:flex;gap:14px}#pf-root .pf .imp b.n{flex:0 0 40px;height:40px;border-radius:12px;display:grid;place-items:center;color:var(--gold2);background:var(--soft);font-size:18px;font-weight:900}#pf-root .pf .imp h4{margin:0 0 3px;font-size:17px;font-weight:900;color:var(--ink)}#pf-root .pf .imp p{color:var(--mut);font-size:15.5px}#pf-root .pf .note{background:linear-gradient(135deg,#FFF3C4,#FFFBEA);border:1px solid #F5D77A;border-radius:14px;padding:12px 14px;font-size:14.5px;color:#3a3220;margin-top:14px}#pf-root .pf .wa{display:flex;align-items:center;justify-content:center;gap:10px;width:100%;margin-top:16px;text-decoration:none;background:linear-gradient(180deg,#3BDC7A,var(--wa));color:#fff;font-weight:900;font-size:19px;padding:18px;border-radius:16px;box-shadow:0 14px 30px -10px rgba(31,168,85,.6)}#pf-root .pf .wa:focus-visible{outline:3px solid #121318;outline-offset:2px}#pf-root .pf .wa svg{width:22px;height:22px}#pf-root .pf .small{font-size:13px;color:var(--mut);text-align:center;margin-top:8px}#pf-root .pf .redo{all:unset;cursor:pointer;color:var(--gold2);font-weight:700;font-size:14px;display:block;margin:12px auto 0;text-decoration:underline}#pf-root .pf .foot{padding-block:10px 36px;text-align:center;font-size:12px;color:#8a8c98}#pf-root .pf .fade{animation:pfIn .3s ease}@keyframes pfIn{from{opacity:0;transform:translateY(6px)}to{opacity:1;transform:none}}@media (max-width:600px){#pf-root .pf .opts{grid-template-columns:1fr}#pf-root .pf .two{grid-template-columns:1fr}}@media (prefers-reduced-motion:reduce){#pf-root .pf .fade{animation:none}#pf-root .pf .prog .bar i{transition:none}}#pf-root .pf h1,#pf-root .pf h2,#pf-root .pf h3,#pf-root .pf h4,#pf-root .pf p,#pf-root .pf a,#pf-root .pf button,#pf-root .pf span,#pf-root .pf li,#pf-root .pf label,#pf-root .pf input,#pf-root .pf small,#pf-root .pf b,#pf-root .pf strong{font-family:Heebo,Arial,sans-serif;letter-spacing:normal;text-transform:none}#pf-root .pf p{margin-bottom:0}#pf-root .pf ul{margin-bottom:0}</style><div class=\"pf\" id=\"pfTr\">\n  <div class=\"tb\">🎁 הדרכת וידאו חינמית · <b>לבעלי חנויות איקומרס</b></div>\n  <div class=\"wrap\">\n    <div class=\"head\">\n      <span class=\"hi\" id=\"pfHi\">✓ ההדרכה שלכם</span>\n      <h1>ההדרכה שלכם מוכנה. <em>עכשיו בואו נהפוך את הידע לתוצאות.</em></h1>\n    </div>\n    <div class=\"vid\" id=\"pfVid\"><div id=\"vidalytics_embed_jEvI9jjReBUkk7Bb\" style=\"width:100%;position:relative;padding-top:52.98%\"></div></div>\n    <p class=\"vhint\">מומלץ לצפות עם סאונד ולהשאיר את Shopify פתוח בלשונית ליד.</p>\n\n    <div class=\"acts\">\n      <a class=\"act p\" data-ev=\"PingInstallClick\" href=\"https://apps.shopify.com/ping-ai\" target=\"_blank\" rel=\"noopener\">להתקנת Ping AI <span aria-hidden=\"true\">←</span></a>\n      <div class=\"two\">\n        <a class=\"act w\" data-ev=\"WhatsAppClick\" href=\"https://wa.me/972525535537?text=%D7%90%D7%91%D7%99%D7%91%20%D7%90%D7%94%D7%91%D7%AA%D7%99%20%D7%90%D7%AA%20%D7%94%D7%94%D7%93%D7%A8%D7%9B%D7%94%20%D7%95%D7%90%D7%A9%D7%9E%D7%97%20%D7%9C%D7%93%D7%91%D7%A8%20%D7%90%D7%99%D7%AA%D7%9A%20%D7%A2%D7%9C%20%D7%94%D7%90%D7%AA%D7%A8%20%D7%A9%D7%9C%D7%99\" target=\"_blank\" rel=\"noopener\"><svg viewBox=\"0 0 24 24\" aria-hidden=\"true\"><path fill=\"#fff\" d=\"M12 2a10 10 0 00-8.6 15.1L2 22l5-1.3A10 10 0 1012 2zm5.8 14.2c-.2.7-1.4 1.3-2 1.4-.5.1-1.2.1-1.9-.1a17 17 0 01-1.8-.7 13.5 13.5 0 01-5.1-4.5c-.4-.5-1.3-1.7-1.3-3.3s.8-2.3 1.1-2.6c.3-.3.6-.4.8-.4h.6c.2 0 .4 0 .6.5l.9 2.1c.1.2.1.4 0 .6l-.3.5-.4.5c-.2.2-.3.4-.1.7.2.4.8 1.4 1.8 2.2 1.2 1.1 2.2 1.4 2.6 1.6.3.1.5.1.7-.1l.9-1.1c.2-.3.4-.2.7-.1l2 1c.3.1.5.2.6.3.1.2.1.8-.1 1.5z\"/></svg>דברו איתי בוואטסאפ</a>\n        <a class=\"act i\" data-ev=\"InstagramClick\" href=\"https://www.instagram.com/aviv_malka7/\" target=\"_blank\" rel=\"noopener\"><svg viewBox=\"0 0 24 24\" aria-hidden=\"true\"><path fill=\"#121318\" d=\"M12 7a5 5 0 100 10 5 5 0 000-10zm0 8.2a3.2 3.2 0 110-6.4 3.2 3.2 0 010 6.4zM17.3 5.5a1.2 1.2 0 100 2.4 1.2 1.2 0 000-2.4zM12 2c-2.7 0-3 0-4.1.1-1 0-1.8.2-2.4.5-.7.3-1.2.6-1.8 1.2S2.9 5 2.6 5.6c-.3.6-.4 1.4-.5 2.4C2 9 2 9.3 2 12s0 3 .1 4.1c0 1 .2 1.8.5 2.4.3.7.6 1.2 1.2 1.8s1.1.9 1.8 1.2c.6.3 1.4.4 2.4.5 1 .1 1.4.1 4.1.1s3 0 4.1-.1c1 0 1.8-.2 2.4-.5.7-.3 1.2-.6 1.8-1.2s.9-1.1 1.2-1.8c.3-.6.4-1.4.5-2.4.1-1 .1-1.4.1-4.1s0-3-.1-4.1c0-1-.2-1.8-.5-2.4-.3-.7-.6-1.2-1.2-1.8S19 2.9 18.4 2.6c-.6-.3-1.4-.4-2.4-.5C15 2 14.7 2 12 2zm0 1.8c2.7 0 3 0 4 .1.9 0 1.5.2 1.8.3.5.2.8.4 1.2.8.4.4.6.7.8 1.2.1.3.3.9.3 1.8.1 1 .1 1.3.1 4s0 3-.1 4c0 .9-.2 1.5-.3 1.8-.2.5-.4.8-.8 1.2-.4.4-.7.6-1.2.8-.3.1-.9.3-1.8.3-1 .1-1.3.1-4 .1s-3 0-4-.1c-.9 0-1.5-.2-1.8-.3-.5-.2-.8-.4-1.2-.8-.4-.4-.6-.7-.8-1.2-.1-.3-.3-.9-.3-1.8-.1-1-.1-1.3-.1-4s0-3 .1-4c0-.9.2-1.5.3-1.8.2-.5.4-.8.8-1.2.4-.4.7-.6 1.2-.8.3-.1.9-.3 1.8-.3 1-.1 1.3-.1 4-.1z\"/></svg>שתפו אותי באינסטגרם</a>\n      </div>\n    </div>\n\n    <section class=\"qz\" id=\"pfQuiz\" aria-labelledby=\"pfQT\">\n      <span class=\"lab\">אבחון חינמי · 7 שאלות</span>\n      <h2 id=\"pfQT\">כמה הזדמנויות להכנסה החנות שלכם מפספסת?</h2>\n      <p class=\"qs\">ענו על כמה שאלות קצרות ונבין יחד איפה כדאי להתחיל לשפר.</p>\n      <div id=\"pfQBody\"></div>\n    </section>\n  </div>\n  <p class=\"foot\">התוכן לצורכי לימוד בלבד ואינו הבטחה להכנסה או לתוצאה. © אביב מלכה · מועדון האיקומרס</p>\n</div>";
})();
/* Training funnel — shared client code (lp + training). No personal data ever goes into URLs. */
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
  PF.captureUtm();
  /* hook + video + buttons, then the quiz, which starts at once with no details step (they came from the lead page form).
     With the saved token every answer goes to the lead; without one (another device) the quiz still works and ends in the summary + WhatsApp */
  var TOK = PF.token();
  var first = TOK ? PF.ls('pf_first') || '' : '';
  var hi = root.querySelector('#pfHi');
  if (first) hi.textContent = '✓ ' + first + ', ההרשמה הושלמה';
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
    if (!TOK) return Promise.resolve({ok: false, local: true});
    var msg = root.querySelector('.saved'); if (msg) msg.textContent = 'שומר…';
    saving++;
    var evId = isDone ? 'quizcomp_' + PF.rid(14) : undefined;
    return PF.api('/api/quiz', {answers: A, website: website, done: !!isDone, event_id: evId, url: location.origin + location.pathname}, TOK).then(function (r) {
      saving--;
      if (r._status === 401) { PF.ls('pf_tok', null); TOK = null; return r; }
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
        if (!TOK) { PF.track('QuizCompleted', {noPixel: true}); done = true; render(); return; }   // no saved registration on this device: summary + WhatsApp only
        nx.setAttribute('disabled', ''); nx.textContent = 'מכין את הסיכום…';
        save(true).then(function (r) { if (r && !r.ok && !TOK) { done = true; render(); return {ok: true, skip: true}; } return r; }).then(function (r) { if (r && r.skip) return; if (r && r.ok) { done = true; render(); } else { nx.removeAttribute('disabled'); nx.textContent = 'לסיכום שלי ←'; var m = root.querySelector('.saved'); if (m && r && r.fields) { body.querySelector('#pfWebErr').hidden = false; } } });
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
    var lines = ['היי אביב, אני ' + (first || '') + '. עשיתי את האבחון בדף ההדרכה החינמית.', ''];
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

  /* resume from the server (source of truth), local copy as fallback */
  function boot() {
  if (!TOK) { step = firstOpen(); render(); return; }
  PF.api('/api/me', null, TOK).then(function (r) {
    if (r._status === 401 || r._status === 404) { PF.ls('pf_tok', null); TOK = null; step = firstOpen(); render(); return; }
    if (r.ok) {
      if (r.first) { first = r.first; PF.ls('pf_first', first); hi.textContent = '✓ ' + first + ', ההרשמה הושלמה'; }
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
