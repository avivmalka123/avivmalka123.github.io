/* "פתחו חנות חינמית" (www.avivmalka.com/free-store) · Kajabi Custom Code block: <div id="fs-root"></div> + this file.
   Landing page → sign-up (name/phone/email) → step-by-step wizard: niche → colors → store name → open Shopify (affiliate link) → $1 plan →
   Hebrew theme ZIP (built in the browser from theme/base.zip + the user's choices) → 3-product CSV → Ping AI install + ready setup → done.
   Leads and progress go to the ping-funnel worker /api/fs/* → admin tab "פתחו חנות חינמית". Products and texts come from products.json. */
(function () {
  var SHOPIFY_AFF = 'https://shopify.pxf.io/ZdgJ40';
  var PING_APP = 'https://apps.shopify.com/ping-ai';
  var PING_SETUP = 'https://pingai.org/setup/vn4QJ9uS';
  var WA_HELP = 'https://wa.me/972525535537?text=' + encodeURIComponent('היי, פתחתי חנות דרך "פתחו חנות חינמית" ואשמח לעזרה');
  var COURSE = 'https://www.avivmalka.com/course-hadira';
  var PX = '2210072352882860';
  var BG = '#FAF8F3';
  var FFLATE = 'https://cdn.jsdelivr.net/npm/fflate@0.8.2/umd/index.js';
  var QS = new URLSearchParams(location.search);
  var me = document.currentScript && document.currentScript.src;
  var BASE = me ? me.replace(/[^/]*$/, '') : 'https://avivmalka123.github.io/fs/';
  var LOCAL = /^(localhost|127\.0\.0\.1)$/.test(location.hostname);
  var API = (LOCAL && QS.get('api')) || 'https://ping-funnel.aviv1988.workers.dev';
  var T0 = Date.now();
  var VID = (function () { try { var v = localStorage.getItem('fs_vid'); if (!v) { v = Date.now().toString(36) + Math.random().toString(36).slice(2, 10); localStorage.setItem('fs_vid', v); } return v; } catch (e) { return ''; } })();

  var NICHES = [
    {id: 'pets', icon: '🐾'}, {id: 'home', icon: '🏠'}, {id: 'fitness', icon: '💪'},
    {id: 'beauty', icon: '✨'}, {id: 'gadgets', icon: '🔌'}, {id: 'baby', icon: '🍼'}
  ];
  var PALETTES = [
    {id: 'sand', name: 'חול', c: {BG: '#FBF8F3', BG2: '#F3EADD', TEXT: '#2A2420', ACCENT: '#B5793F', ACCENT_TEXT: '#FFFFFF', DARK: '#2A2420'}},
    {id: 'ocean', name: 'אוקיינוס', c: {BG: '#F7FAFC', BG2: '#E6F0F7', TEXT: '#10283A', ACCENT: '#1F6FB2', ACCENT_TEXT: '#FFFFFF', DARK: '#0E2233'}},
    {id: 'forest', name: 'יער', c: {BG: '#F8FAF6', BG2: '#E7EFE3', TEXT: '#1E2B1F', ACCENT: '#2F6B45', ACCENT_TEXT: '#FFFFFF', DARK: '#18261B'}},
    {id: 'blush', name: 'ורוד פודרה', c: {BG: '#FFF9F8', BG2: '#FBE9E7', TEXT: '#3A2326', ACCENT: '#C9536E', ACCENT_TEXT: '#FFFFFF', DARK: '#3A2326'}},
    {id: 'night', name: 'לילה', c: {BG: '#FFFFFF', BG2: '#F2F2F4', TEXT: '#121214', ACCENT: '#121214', ACCENT_TEXT: '#FFFFFF', DARK: '#121214'}},
    {id: 'sun', name: 'שמש', c: {BG: '#FFFDF6', BG2: '#FFF1CC', TEXT: '#2B2410', ACCENT: '#E9A100', ACCENT_TEXT: '#1E1A10', DARK: '#2B2410'}}
  ];
  // wizard steps (codes match FS_STEPS in the worker)
  var STEPS = ['niche', 'palette', 'name', 'shop', 'plan', 'theme', 'products', 'ping', 'done'];
  var TITLES = {niche: 'נישה', palette: 'צבעים', name: 'שם', shop: 'פתיחת חנות', plan: 'מסלול', theme: 'תבנית', products: 'מוצרים', ping: 'עוזר AI', done: 'סיום'};

  var root = document.getElementById('fs-root');
  if (!root) { root = document.createElement('div'); root.id = 'fs-root'; document.body.appendChild(root); }

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
  function px(ev, params, custom, eventID) {
    try { fbq(custom ? 'trackSingleCustom' : 'trackSingle', PX, ev, params || {}, {eventID: eventID || ev + '-' + Date.now() + '-' + Math.random().toString(36).slice(2, 8)}); } catch (e) {}
  }
  try { fbq('init', PX); fbq('trackSingle', PX, 'PageView'); } catch (e) {}

  var css = [
    '#fs-root{direction:rtl;text-align:right;background:' + BG + ';color:#141414;font-family:Heebo,Arial,sans-serif;min-height:100vh;-webkit-font-smoothing:antialiased;line-height:1.5}',
    '#fs-root *{box-sizing:border-box;font-family:inherit;letter-spacing:normal;text-transform:none}',
    '#fs-root .bar{background:#141414;color:#fff;text-align:center;font-size:14px;font-weight:600;padding:9px 16px}',
    '#fs-root .wrap{max-width:680px;margin:0 auto;padding:28px 16px 48px}',
    '#fs-root .pill{display:inline-block;background:#141414;color:#fff;border-radius:999px;padding:6px 14px;font-size:14px;font-weight:700;margin:0 0 14px}',
    '#fs-root h1{font-size:32px;line-height:1.2;font-weight:900;margin:0 0 14px;color:#141414}',
    '#fs-root h1 em,#fs-root h2 em{font-style:normal;background:linear-gradient(transparent 58%,#FFD84D 58%)}',
    '#fs-root h2{font-size:24px;line-height:1.3;font-weight:900;margin:0 0 14px;color:#141414;outline:none}',
    '#fs-root h3{font-size:18px;font-weight:800;margin:0 0 6px}',
    '#fs-root p{margin:0 0 10px}',
    '#fs-root .lead{font-size:18px;color:#2b2b2b;margin:0 0 18px}',
    '#fs-root .muted{color:#5c5c5c;font-size:15px}',
    '#fs-root section{margin:40px 0 0}',
    '#fs-root .btn{display:block;width:100%;border:0;border-radius:14px;padding:16px;font-size:19px;font-weight:800;color:#141414;background:linear-gradient(180deg,#F5C451,#E0A21E);cursor:pointer;text-align:center;text-decoration:none;box-shadow:0 6px 18px rgba(201,138,18,.25)}',
    '#fs-root .btn:hover{filter:brightness(1.03)}',
    '#fs-root .btn[disabled]{opacity:.45;cursor:not-allowed}',
    '#fs-root .btn.dark{background:#141414;color:#fff;box-shadow:none}',
    '#fs-root .btn.white{background:#fff;color:#141414;border:2px solid #141414;box-shadow:none}',
    '#fs-root .btn.wa{background:#1FA855;color:#fff;box-shadow:none}',
    '#fs-root .btn small{display:block;font-size:14px;font-weight:600;opacity:.8}',
    '#fs-root .under{text-align:center;font-size:14px;color:#5c5c5c;margin:8px 0 0}',
    '#fs-root .card{background:#fff;border:1px solid #E6E1D6;border-radius:18px;padding:22px 18px;box-shadow:0 6px 24px rgba(20,20,20,.06)}',
    '#fs-root .steps3{display:grid;gap:12px;counter-reset:s}',
    '#fs-root .steps3 li{list-style:none;background:#fff;border:1px solid #E6E1D6;border-radius:16px;padding:16px 16px 16px 16px;display:grid;grid-template-columns:44px 1fr;gap:12px;align-items:start}',
    '#fs-root .steps3 li:before{counter-increment:s;content:counter(s);width:44px;height:44px;border-radius:50%;background:#141414;color:#FFD84D;font-weight:900;font-size:20px;display:grid;place-items:center}',
    '#fs-root .steps3,#fs-root .gets{padding:0;margin:0}',
    '#fs-root .gets{display:grid;gap:10px;grid-template-columns:1fr}',
    '#fs-root .gets li{list-style:none;background:#fff;border:1px solid #E6E1D6;border-radius:14px;padding:14px 16px;display:flex;gap:12px;align-items:flex-start;font-size:16px}',
    '#fs-root .gets li b{display:block;font-size:17px}',
    '#fs-root .gets .ic{font-size:24px;line-height:1}',
    '#fs-root .nichegrid{display:grid;grid-template-columns:repeat(2,1fr);gap:10px}',
    '#fs-root .ncard{background:#fff;border:1px solid #E6E1D6;border-radius:16px;overflow:hidden;text-align:right}',
    '#fs-root .ncard img{display:block;width:100%;aspect-ratio:1;object-fit:cover;background:#EFEAE0}',
    '#fs-root .ncard div{padding:10px 12px;font-weight:800;font-size:16px}',
    '#fs-root details{background:#fff;border:1px solid #E6E1D6;border-radius:14px;padding:14px 16px;margin:0 0 10px}',
    '#fs-root summary{font-weight:800;font-size:17px;cursor:pointer}',
    '#fs-root details p{margin:10px 0 0;color:#2b2b2b}',
    '#fs-root .foot{text-align:center;font-size:13px;color:#7a7a7a;margin-top:30px}',
    '#fs-root .foot button{background:none;border:0;color:#7a7a7a;text-decoration:underline;cursor:pointer;font-size:13px}',
    // mock store
    '#fs-root .mock{border-radius:22px;border:8px solid #141414;background:var(--bg);overflow:hidden;max-width:300px;margin:22px auto 0;box-shadow:0 18px 40px rgba(20,20,20,.18);color:var(--tx);text-align:right}',
    '#fs-root .mock .an{background:var(--dk);color:#fff;font-size:11px;padding:6px;text-align:center;font-weight:600}',
    '#fs-root .mock .hd{display:flex;justify-content:space-between;align-items:center;padding:10px 12px;font-weight:900;font-size:15px;border-bottom:1px solid rgba(0,0,0,.06)}',
    '#fs-root .mock .hero{background:var(--bg2);padding:18px 14px}',
    '#fs-root .mock .hero b{display:block;font-size:17px;line-height:1.25;margin:0 0 6px}',
    '#fs-root .mock .hero span{display:block;font-size:12px;opacity:.8;margin:0 0 10px}',
    '#fs-root .mock .hero span.cta{display:inline-block;opacity:1;margin:0;background:var(--ac);color:var(--act);border-radius:10px;padding:8px 14px;font-size:12px;font-weight:800}',
    '#fs-root .mock .prods{display:grid;grid-template-columns:repeat(3,1fr);gap:6px;padding:10px}',
    '#fs-root .mock .prods div{font-size:10px;font-weight:700;line-height:1.25}',
    '#fs-root .mock .prods img{width:100%;aspect-ratio:1;object-fit:cover;border-radius:8px;display:block;margin:0 0 4px;background:#eee}',
    '#fs-root .mock .prods i{font-style:normal;color:var(--ac);display:block;margin-top:2px}',
    // wizard
    '#fs-root .prog{display:flex;justify-content:space-between;align-items:center;font-size:14px;font-weight:600;color:#5c5c5c;margin:0 0 8px}',
    '#fs-root .track{height:6px;background:#EFEAE0;border-radius:6px;overflow:hidden;margin:0 0 20px}',
    '#fs-root .fill{height:100%;background:linear-gradient(90deg,#E8B33A,#C98A12);transition:width .3s}',
    '#fs-root .opts{display:grid;gap:10px;grid-template-columns:repeat(2,1fr)}',
    '#fs-root .opt{width:100%;text-align:right;background:#FAF8F3;border:2px solid #E6E1D6;border-radius:14px;padding:12px;font-size:17px;font-weight:700;color:#141414;cursor:pointer;min-height:56px;display:flex;gap:10px;align-items:center}',
    '#fs-root .opt img{width:52px;height:52px;border-radius:10px;object-fit:cover;flex:none;background:#EFEAE0}',
    '#fs-root .opt:hover{border-color:#C98A12;background:#FFF8E6}',
    '#fs-root .opt[aria-pressed="true"]{border-color:#C98A12;background:#FFF3D1}',
    '#fs-root .opt.full{grid-column:1/-1;justify-content:center}',
    '#fs-root .sw{display:flex;gap:4px;flex:none}',
    '#fs-root .sw i{width:20px;height:20px;border-radius:50%;display:block;border:1px solid rgba(0,0,0,.12)}',
    '#fs-root .opt:focus-visible,#fs-root .btn:focus-visible,#fs-root .back:focus-visible,#fs-root input:focus-visible,#fs-root a:focus-visible,#fs-root .chip:focus-visible,#fs-root summary:focus-visible{outline:3px solid #1D4ED8;outline-offset:2px}',
    '#fs-root label.f{display:block;font-weight:700;font-size:16px;margin:0 0 12px}',
    '#fs-root input[type=text],#fs-root input[type=tel],#fs-root input[type=email]{display:block;width:100%;margin-top:6px;border:2px solid #E6E1D6;border-radius:12px;padding:13px 14px;font-size:17px;background:#FAF8F3;color:#141414}',
    '#fs-root input.bad{border-color:#C0392B}',
    '#fs-root .err{color:#B42318;font-size:14px;font-weight:600;margin:4px 0 0;display:block}',
    '#fs-root .chk{display:flex;gap:10px;align-items:flex-start;font-size:14px;color:#2b2b2b;margin:0 0 10px;font-weight:500}',
    '#fs-root .chk input{width:20px;height:20px;margin-top:2px;flex:none}',
    '#fs-root .chips{display:flex;flex-wrap:wrap;gap:8px;margin:0 0 16px}',
    '#fs-root .chip{background:#fff;border:1.5px solid #E6E1D6;border-radius:999px;padding:8px 14px;font-size:15px;font-weight:700;cursor:pointer;color:#141414}',
    '#fs-root .chip:hover{border-color:#C98A12}',
    '#fs-root .back{background:none;border:0;color:#5c5c5c;font-size:15px;font-weight:600;cursor:pointer;padding:10px 0 0;display:block;margin:0 auto}',
    '#fs-root ol.how{margin:0 0 16px;padding:0 20px 0 0;display:grid;gap:8px;font-size:16px}',
    '#fs-root ol.how b{font-weight:800}',
    '#fs-root .note{background:#FFF8E6;border:1px solid #F1D48A;border-radius:12px;padding:12px 14px;font-size:15px;line-height:1.5;margin:14px 0}',
    '#fs-root .ok{background:#E9F6EE;border:1px solid #9DD3B0;border-radius:12px;padding:12px 14px;font-size:15px;margin:14px 0;color:#14532D;font-weight:600}',
    '#fs-root .row{display:grid;gap:10px;margin:0 0 10px}',
    '#fs-root .kbd{display:inline-block;background:#141414;color:#fff;border-radius:6px;padding:1px 7px;font-size:14px;font-weight:700}',
    '#fs-root .ltr{direction:ltr;unicode-bidi:isolate}',
    '#fs-root .modal{position:fixed;inset:0;background:rgba(20,20,20,.55);display:flex;align-items:flex-end;justify-content:center;z-index:99999;padding:0}',
    '#fs-root .modal .card{width:100%;max-width:520px;border-radius:22px 22px 0 0;max-height:92vh;overflow:auto;padding:22px 18px 26px}',
    '#fs-root .x{float:left;background:none;border:0;font-size:26px;line-height:1;cursor:pointer;color:#5c5c5c;padding:0 4px}',
    '#fs-root .sr{position:absolute;width:1px;height:1px;overflow:hidden;clip:rect(0 0 0 0);white-space:nowrap}',
    '#fs-root .hp{position:absolute;left:-9999px;width:1px;height:1px;overflow:hidden}',
    '#fs-root .spin{display:inline-block;width:18px;height:18px;border:3px solid rgba(0,0,0,.15);border-top-color:#141414;border-radius:50%;animation:fsspin 1s linear infinite;vertical-align:middle;margin-left:8px}',
    '@keyframes fsspin{to{transform:rotate(360deg)}}',
    '@media (min-width:720px){#fs-root h1{font-size:42px}#fs-root .wrap{padding-top:44px}#fs-root .gets{grid-template-columns:1fr 1fr}#fs-root .nichegrid{grid-template-columns:repeat(3,1fr)}#fs-root .modal{align-items:center}#fs-root .modal .card{border-radius:22px}}',
    '@media (prefers-reduced-motion:reduce){#fs-root .fill,#fs-root .opt{transition:none}#fs-root .spin{animation:none}}'
  ].join('');
  var st = document.createElement('style'); st.textContent = css; document.head.appendChild(st);
  if (!document.querySelector('link[href*="family=Heebo"]')) {
    var fl = document.createElement('link'); fl.rel = 'stylesheet'; fl.href = 'https://fonts.googleapis.com/css2?family=Heebo:wght@400;500;600;700;800;900&display=swap'; document.head.appendChild(fl);
  }

  function esc(s) { return String(s == null ? '' : s).replace(/[&<>"']/g, function (c) { return {'&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'}[c]; }); }
  function $(s) { return root.querySelector(s); }
  function ls(k, v) { try { if (v === undefined) return localStorage.getItem(k); if (v === null) localStorage.removeItem(k); else localStorage.setItem(k, v); } catch (e) { return null; } }
  function cookie(n) { var m = document.cookie.match('(?:^|; )' + n + '=([^;]*)'); return m ? decodeURIComponent(m[1]) : ''; }
  function utm() { var u = {}; ['utm_source', 'utm_medium', 'utm_campaign', 'utm_content', 'utm_term'].forEach(function (k) { if (QS.get(k)) u[k] = QS.get(k); }); return u; }
  function post(path, body, tok) {
    var h = {'Content-Type': 'application/json'}; if (tok) h.Authorization = 'Bearer ' + tok;
    return fetch(API + path, {method: 'POST', headers: h, body: JSON.stringify(body), mode: 'cors'}).then(function (r) { return r.json().catch(function () { return {ok: false}; }).then(function (j) { j._status = r.status; return j; }); });
  }
  function track(name) { try { fetch(API + '/api/event', {method: 'POST', headers: {'Content-Type': 'application/json'}, body: JSON.stringify({name: name, vid: VID, url: location.origin + location.pathname, utm: utm(), fbc: cookie('_fbc'), fbp: cookie('_fbp')}), keepalive: true, mode: 'cors'}).catch(function () {}); } catch (e) {} }

  /* ---------- state ---------- */
  var S = {tok: ls('fs_tok'), first: '', niche: null, palette: null, store_name: '', shop: null, steps: {}, cur: 'niche'};
  try { var saved = JSON.parse(ls('fs_state') || 'null'); if (saved) for (var k in saved) S[k] = saved[k]; } catch (e) {}
  S.tok = ls('fs_tok');
  function persist() { ls('fs_state', JSON.stringify({first: S.first, niche: S.niche, palette: S.palette, store_name: S.store_name, shop: S.shop, steps: S.steps, cur: S.cur})); }
  function step(code, extra) {
    S.steps[code] = S.steps[code] || Date.now(); persist();
    if (!S.tok) return Promise.resolve({ok: true});
    var b = {step: code}; for (var k in (extra || {})) b[k] = extra[k];
    return post('/api/fs/step', b, S.tok).catch(function () { return {ok: false}; });
  }

  var CAT = null;   // products.json
  function catalog() { return CAT ? Promise.resolve(CAT) : fetch(BASE + 'products.json', {cache: 'no-cache'}).then(function (r) { return r.json(); }).then(function (j) { CAT = j; return j; }); }
  function N(id) { return CAT && CAT.niches[id === 'unsure' ? 'home' : id]; }
  function img(path) { return BASE + 'img/' + path; }   // on screen: next to this script (works in local previews)
  function pubImg(path) { return (CAT && CAT.base_img || 'https://avivmalka123.github.io/fs/img/') + path; }   // in the CSV: public URL Shopify downloads from
  function pal(id) { for (var i = 0; i < PALETTES.length; i++) if (PALETTES[i].id === id) return PALETTES[i]; return PALETTES[0]; }
  function shopHandle() { return S.shop ? S.shop.replace(/\.myshopify\.com$/, '') : ''; }
  function admin(path) { return 'https://admin.shopify.com/store/' + encodeURIComponent(shopHandle()) + path; }
  function cleanName(s) { return String(s || '').replace(/["\\<>{}`]/g, '').replace(/\s+/g, ' ').trim().slice(0, 40); }
  function fillTokens(s) { return String(s || '').split('__STORE_NAME__').join(S.store_name || 'החנות שלי'); }

  /* ---------- landing page ---------- */
  function mock(nicheId, palId) {
    var n = N(nicheId || 'home'), c = pal(palId || 'sand').c;
    var prods = n ? n.products.slice(0, 3) : [];
    return '<div class="mock" aria-hidden="true" style="--bg:' + c.BG + ';--bg2:' + c.BG2 + ';--tx:' + c.TEXT + ';--ac:' + c.ACCENT + ';--act:' + c.ACCENT_TEXT + ';--dk:' + c.DARK + '">' +
      '<div class="an">' + esc(fillTokens(n ? n.announce : 'משלוח חינם בהזמנה מעל 199 ₪')) + '</div>' +
      '<div class="hd"><span>' + esc(S.store_name || 'החנות שלי') + '</span><span>🛒</span></div>' +
      '<div class="hero"><b>' + esc(fillTokens(n ? n.hero_title : 'החנות שלך מוכנה')) + '</b><span>' + esc(fillTokens(n ? n.hero_text : '')) + '</span><span class="cta">לקנייה עכשיו</span></div>' +
      '<div class="prods">' + prods.map(function (p) { return '<div><img src="' + esc(img(p.images[0])) + '" alt="" loading="lazy">' + esc(p.title.slice(0, 26)) + '<i>₪' + p.price + '</i></div>'; }).join('') + '</div></div>';
  }

  function landing() {
    var cta = function (id) { return '<button class="btn" data-go="start" id="' + id + '">לבנות את החנות שלי בחינם<small>תבנית בעברית + 3 מוצרים מוכנים למכירה</small></button>'; };
    root.innerHTML = '<div class="bar">פתיחת חנות בעברית · בחינם · בלי ידע טכני</div><div class="wrap">' +
      '<span class="pill">אביב מלכה · מועדון האיקומרס</span>' +
      '<h1>חנות שופיפיי בעברית, <em>מוכנה למכירה</em> תוך דקות</h1>' +
      '<p class="lead">בוחרים נישה וצבעים, ומקבלים חנות עם תבנית מעוצבת בעברית ו־3 מוצרים מוכנים: תמונות, תיאורים ומחירים. אנחנו מלווים אתכם צעד אחרי צעד עד שהחנות באוויר.</p>' +
      cta('cta1') + '<p class="under">ההקמה בחינם. שופיפיי: ימי ניסיון בחינם, ואז דולר אחד לחודש בתקופת המבצע</p>' +
      '<div id="mock1">' + mock('home', 'sand') + '</div>' +
      '<section><h2>איך זה <em>עובד</em>?</h2><ol class="steps3">' +
      '<li><div><h3>בוחרים נישה, צבעים ושם</h3><p class="muted">שש נישות שמוכרות טוב בישראל. בוחרים פלטת צבעים ורואים מיד איך החנות תיראה.</p></div></li>' +
      '<li><div><h3>פותחים חנות בשופיפיי</h3><p class="muted">לפי הדרכה קצרה, כולל המבצע של שופיפיי: דולר אחד לחודש בחודשים הראשונים.</p></div></li>' +
      '<li><div><h3>מעלים תבנית ומוצרים, ומתחילים למכור</h3><p class="muted">קובץ תבנית אחד וקובץ מוצרים אחד, מוכנים עם השם והצבעים שלכם. שתי לחיצות והחנות מוכנה.</p></div></li>' +
      '</ol></section>' +
      '<section><h2>מה <em>מקבלים</em> בחינם?</h2><ul class="gets">' +
      '<li><span class="ic">🎨</span><div><b>תבנית מעוצבת בעברית</b>מימין לשמאל, מותאמת לנייד, בצבעים שבחרתם.</div></li>' +
      '<li><span class="ic">📦</span><div><b>3 מוצרים מוכנים למכירה</b>תמונות, תיאורים שיווקיים בעברית ומחירים.</div></li>' +
      '<li><span class="ic">🏠</span><div><b>דף בית מוכן לנישה</b>כותרת, יתרונות, שאלות נפוצות ואיסוף נרשמים.</div></li>' +
      '<li><span class="ic">🤖</span><div><b>עוזר AI ופופאפ לאיסוף לידים</b>מתקינים את Ping AI ומעתיקים סטאפ מוכן: צ׳אט שעונה ללקוחות ופופאפ שאוסף פרטים.</div></li>' +
      '<li><span class="ic">🧭</span><div><b>הדרכה צעד אחרי צעד</b>כל שלב עם הסבר קצר וקישור ישיר למסך הנכון בשופיפיי.</div></li>' +
      '<li><span class="ic">🎓</span><div><b>קורס חינמי להמשך</b>איך מביאים את המכירות הראשונות לחנות.</div></li>' +
      '</ul></section>' +
      '<section><h2>בוחרים <em>נישה</em></h2><div class="nichegrid" id="nichegrid"></div></section>' +
      '<section>' + cta('cta2') + '</section>' +
      '<section><h2>שאלות <em>נפוצות</em></h2>' +
      faq('כמה זה עולה?', 'ההקמה, התבנית והמוצרים בחינם. שופיפיי גובים דמי מנוי: יש ימי ניסיון בחינם, ואז מבצע של דולר אחד לחודש בחודשים הראשונים (לפי התנאים שמופיעים אצלכם במסך). אחרי המבצע המחיר הוא המחיר הרגיל של שופיפיי.') +
      faq('צריך ידע טכני?', 'לא. כל שלב מגיע עם הסבר קצר וכפתור שפותח את המסך הנכון בשופיפיי. מי שמסתדר עם וואטסאפ מסתדר גם עם זה.') +
      faq('מאיפה מגיעים המוצרים ואיך שולחים אותם?', 'המוצרים הם דוגמאות מוכנות למכירה בנישה שבחרתם. לפני שמוכרים, בוחרים ספק ובודקים זמני משלוח ועלויות. בקורס החינמי מוסבר איך עושים את זה נכון.') +
      faq('אפשר לשנות מוצרים, טקסטים וצבעים?', 'כן. הכול נשאר בחנות שלכם בשופיפיי, ואפשר לערוך כל דבר בעורך התבניות ובמסך המוצרים.') +
      faq('החנות שלי? באמת?', 'כן. החנות פתוחה על השם שלכם בחשבון השופיפיי שלכם, וכל ההכנסות שלכם.') +
      faq('מה עם סליקה?', 'בסוף האשף יש הסבר קצר על חיבור סליקה ישראלית ושפת החנות.') +
      '</section>' +
      '<section>' + cta('cta3') + '</section>' +
      '<div class="foot">אביב מלכה · מועדון האיקומרס · <button type="button" data-go="privacy">מדיניות פרטיות</button></div></div>';
    catalog().then(function () {
      $('#mock1').innerHTML = mock('home', 'sand');
      $('#nichegrid').innerHTML = NICHES.map(function (n) { var x = N(n.id); return x ? '<div class="ncard"><img src="' + esc(img(x.products[0].images[0])) + '" alt="' + esc(x.name) + '" loading="lazy"><div>' + n.icon + ' ' + esc(x.name) + '</div></div>' : ''; }).join('');
    }).catch(function () {});
  }
  function faq(q, a) { return '<details><summary>' + esc(q) + '</summary><p>' + esc(a) + '</p></details>'; }

  /* ---------- sign-up modal ---------- */
  function signup() {
    var m = document.createElement('div'); m.className = 'modal'; m.setAttribute('role', 'dialog'); m.setAttribute('aria-modal', 'true'); m.setAttribute('aria-labelledby', 'fsSuT');
    m.innerHTML = '<form class="card" novalidate><button type="button" class="x" aria-label="סגירה">×</button>' +
      '<h2 id="fsSuT" tabindex="-1">לאן לשלוח לכם את <em>פרטי החנות</em>?</h2><p class="muted">ככה נשמור את ההתקדמות שלכם, ותוכלו לחזור לאשף בכל רגע.</p>' +
      '<label class="f">שם מלא<input type="text" name="name" autocomplete="name" required></label>' +
      '<label class="f">טלפון נייד<input type="tel" name="phone" autocomplete="tel" inputmode="tel" dir="ltr" style="text-align:right" required></label>' +
      '<label class="f">אימייל<input type="email" name="email" autocomplete="email" dir="ltr" style="text-align:right" required></label>' +
      '<input class="hp" name="hp" tabindex="-1" autocomplete="off" aria-hidden="true">' +
      '<label class="chk"><input type="checkbox" name="privacy" required> <span>קראתי ואני מסכים/ה ל<button type="button" class="linkbtn" data-go="privacy" style="background:none;border:0;padding:0;color:#141414;text-decoration:underline;cursor:pointer;font-size:14px">מדיניות הפרטיות</button></span></label>' +
      '<label class="chk"><input type="checkbox" name="consent"> <span>אשמח לקבל טיפים ועדכונים במייל ובוואטסאפ (אפשר להסיר בכל רגע)</span></label>' +
      '<span class="err" id="fsErr" role="alert"></span>' +
      '<button class="btn" type="submit" style="margin-top:10px">ממשיכים לבניית החנות</button></form>';
    root.appendChild(m);
    var f = m.querySelector('form'), last = document.activeElement;
    function close() { m.remove(); try { last && last.focus(); } catch (e) {} }
    m.querySelector('.x').onclick = close;
    m.addEventListener('click', function (e) { if (e.target === m) close(); });
    m.addEventListener('keydown', function (e) { if (e.key === 'Escape') close(); });
    setTimeout(function () { f.name.focus(); }, 30);
    f.onsubmit = function (e) {
      e.preventDefault();
      var err = m.querySelector('#fsErr'), btn = f.querySelector('[type=submit]');
      ['name', 'phone', 'email'].forEach(function (k) { f[k].classList.remove('bad'); f[k].removeAttribute('aria-invalid'); });
      var bad = [];
      if (f.name.value.trim().length < 2) bad.push('name');
      if (!/^(\+?972|0)?5\d[\d\s-]{7,9}$/.test(f.phone.value.replace(/[()]/g, '').trim()) && !/^\+[1-9][\d\s-]{7,16}$/.test(f.phone.value.trim())) bad.push('phone');
      if (!/^[^\s@]+@[^\s@]+\.[a-z]{2,}$/i.test(f.email.value.trim())) bad.push('email');
      if (bad.length || !f.privacy.checked) {
        bad.forEach(function (k) { f[k].classList.add('bad'); f[k].setAttribute('aria-invalid', 'true'); });
        err.textContent = bad.length ? 'בדקו את ' + bad.map(function (k) { return {name: 'השם', phone: 'הטלפון', email: 'האימייל'}[k]; }).join(', ') : 'צריך לאשר את מדיניות הפרטיות';
        (bad.length ? f[bad[0]] : f.privacy).focus(); return;
      }
      err.textContent = ''; btn.disabled = true; btn.innerHTML = 'שומרים<span class="spin"></span>';
      var evid = 'fsl-' + Date.now() + '-' + Math.random().toString(36).slice(2, 8);
      post('/api/fs/lead', {name: f.name.value, phone: f.phone.value, email: f.email.value, privacy_ack: true, consent_marketing: f.consent.checked, hp: f.hp.value,
        elapsed: Date.now() - T0, utm: utm(), fbclid: QS.get('fbclid') || '', fbc: cookie('_fbc'), fbp: cookie('_fbp'), referrer: document.referrer, landing_url: location.origin + location.pathname, vid: VID, event_id: evid})
        .then(function (r) {
          if (!r.ok) {
            btn.disabled = false; btn.textContent = 'ממשיכים לבניית החנות';
            if (r.fields) { Object.keys(r.fields).forEach(function (k) { if (f[k]) { f[k].classList.add('bad'); f[k].setAttribute('aria-invalid', 'true'); } }); err.textContent = 'בדקו את הפרטים המסומנים'; }
            else err.textContent = r._status === 429 ? 'יותר מדי ניסיונות. נסו שוב בעוד כמה דקות' : 'משהו השתבש. נסו שוב';
            return;
          }
          if (r.token) { S.tok = r.token; ls('fs_tok', r.token); }
          var stt = r.state || {};
          S.first = stt.first || f.name.value.trim().split(' ')[0];
          ['niche', 'palette', 'store_name', 'shop'].forEach(function (k) { if (stt[k]) S[k] = stt[k]; });
          if (stt.steps) for (var k in stt.steps) S.steps[k] = S.steps[k] || stt.steps[k];
          if (r.new && r.event_id) px('Lead', {content_name: 'free-store'}, false, r.event_id);
          persist(); m.remove(); wizard(nextOpen());
        }).catch(function () { btn.disabled = false; btn.textContent = 'ממשיכים לבניית החנות'; err.textContent = 'אין חיבור. בדקו את האינטרנט ונסו שוב'; });
    };
  }

  function privacy() {
    var m = document.createElement('div'); m.className = 'modal'; m.setAttribute('role', 'dialog'); m.setAttribute('aria-modal', 'true'); m.setAttribute('aria-labelledby', 'fsPrT');
    m.innerHTML = '<div class="card"><button type="button" class="x" aria-label="סגירה">×</button><h2 id="fsPrT" tabindex="-1">מדיניות פרטיות</h2>' +
      '<p>הפרטים שתשאירו (שם, טלפון, אימייל) והבחירות שלכם באשף (נישה, צבעים, שם החנות וכתובת החנות בשופיפיי) נשמרים כדי לשמור את ההתקדמות שלכם, לחזור אליכם ולעזור לכם להקים את החנות.</p>' +
      '<p>אנחנו משתמשים בפיקסל של מטא כדי למדוד את הפרסום. לא נמכור את הפרטים שלכם לאף אחד.</p>' +
      '<p>דיוור יישלח רק אם סימנתם הסכמה, ואפשר להסיר בכל רגע.</p>' +
      '<p>לעיון, תיקון או מחיקה של המידע שלכם: שלחו וואטסאפ ל־<a class="ltr" href="https://wa.me/972525535537">052-5535537</a>.</p></div>';
    root.appendChild(m);
    m.querySelector('.x').onclick = function () { m.remove(); };
    m.addEventListener('click', function (e) { if (e.target === m) m.remove(); });
    m.addEventListener('keydown', function (e) { if (e.key === 'Escape') m.remove(); });
    m.querySelector('h2').focus();
  }

  /* ---------- wizard ---------- */
  function nextOpen() { for (var i = 0; i < STEPS.length; i++) if (!S.steps[STEPS[i]]) return STEPS[i]; return 'done'; }
  function frame(code, body) {
    var i = STEPS.indexOf(code);
    root.innerHTML = '<div class="bar">' + (S.first ? esc(S.first) + ', ' : '') + 'החנות שלך בבנייה · שלב ' + (i + 1) + ' מתוך ' + STEPS.length + '</div><div class="wrap">' +
      '<div class="prog"><span>' + esc(TITLES[code]) + '</span><span>' + Math.round(i / (STEPS.length - 1) * 100) + '%</span></div>' +
      '<div class="track" aria-hidden="true"><div class="fill" style="width:' + Math.max(4, i / (STEPS.length - 1) * 100) + '%"></div></div>' +
      '<div class="card">' + body + '</div>' + (i > 0 && code !== 'done' ? '<button class="back" type="button" data-back="' + STEPS[i - 1] + '">→ חזרה לשלב הקודם</button>' : '') +
      '<div class="foot">צריכים עזרה? <a href="' + WA_HELP + '" target="_blank" rel="noopener">שלחו לנו וואטסאפ</a></div></div>';
    var h = root.querySelector('h2'); if (h) { h.setAttribute('tabindex', '-1'); try { h.focus({preventScroll: true}); } catch (e) {} }
    try { root.scrollIntoView({block: 'start'}); window.scrollTo(0, root.getBoundingClientRect().top + window.pageYOffset); } catch (e) {}
  }
  function wizard(code) {
    if (!S.shop && ['plan', 'theme', 'products', 'ping', 'done'].indexOf(code) >= 0) code = 'shop';
    S.cur = code; persist();
    catalog().then(function () { (VIEWS[code] || VIEWS.niche)(); }).catch(function () { root.innerHTML = '<div class="wrap"><div class="card"><h2>לא הצלחנו לטעון את האשף</h2><p>בדקו את החיבור לאינטרנט ורעננו את הדף.</p></div></div>'; });
  }

  var VIEWS = {
    niche: function () {
      frame('niche', '<h2>באיזו <em>נישה</em> תהיה החנות?</h2><p class="muted">בכל נישה מחכים לכם 3 מוצרים מוכנים. אפשר להחליף אותם אחר כך.</p><div class="opts" role="group" aria-label="נישות">' +
        NICHES.map(function (n) { var x = N(n.id); return '<button type="button" class="opt" data-niche="' + n.id + '" aria-pressed="' + (S.niche === n.id) + '"><img src="' + esc(img(x.products[0].images[0])) + '" alt="">' + esc(x.name) + '</button>'; }).join('') +
        '<button type="button" class="opt full" data-niche="unsure" aria-pressed="' + (S.niche === 'unsure') + '">עוד לא בטוח/ה, תבחרו בשבילי</button></div>');
    },
    palette: function () {
      frame('palette', '<h2>בוחרים <em>צבעים</em> לחנות</h2><p class="muted">לחיצה על פלטה מראה מיד איך החנות תיראה.</p><div class="opts" role="group" aria-label="פלטות צבע">' +
        PALETTES.map(function (p) { return '<button type="button" class="opt" data-pal="' + p.id + '" aria-pressed="' + (S.palette === p.id) + '"><span class="sw"><i style="background:' + p.c.ACCENT + '"></i><i style="background:' + p.c.BG2 + '"></i><i style="background:' + p.c.DARK + '"></i></span>' + esc(p.name) + '</button>'; }).join('') +
        '</div><div id="pmock">' + mock(S.niche, S.palette || 'sand') + '</div><button class="btn" type="button" id="palNext" style="margin-top:18px"' + (S.palette ? '' : ' disabled') + '>אהבתי, ממשיכים</button>');
    },
    name: function () {
      var n = N(S.niche);
      frame('name', '<h2>איך <em>תיקרא</em> החנות?</h2><p class="muted">שם קצר וקליט. אפשר לבחור מההצעות או לכתוב שם משלכם.</p>' +
        '<div class="chips">' + (n.store_names || []).map(function (s) { return '<button type="button" class="chip" data-name="' + esc(s) + '">' + esc(s) + '</button>'; }).join('') + '</div>' +
        '<label class="f">שם החנות<input type="text" id="sname" maxlength="40" value="' + esc(S.store_name) + '" autocomplete="off"></label><span class="err" id="nErr" role="alert"></span>' +
        '<div id="pmock">' + mock(S.niche, S.palette) + '</div><button class="btn" type="button" id="nameNext" style="margin-top:18px">זה השם, ממשיכים</button>');
      var inp = $('#sname');
      inp.oninput = function () { S.store_name = cleanName(inp.value); $('#pmock').innerHTML = mock(S.niche, S.palette); };
    },
    shop: function () {
      frame('shop', '<h2>פותחים <em>חנות בשופיפיי</em></h2>' +
        '<ol class="how"><li>לוחצים על הכפתור. נפתח חלון חדש של שופיפיי.</li><li>נרשמים עם אימייל וסיסמה.</li><li>בשאלות של שופיפיי אפשר ללחוץ <b>דילוג</b>.</li><li>כשנכנסתם לחנות, חוזרים לכאן.</li></ol>' +
        '<a class="btn" id="shopifyGo" href="' + SHOPIFY_AFF + '" target="_blank" rel="noopener">פתיחת חנות בשופיפיי<small>נפתח בחלון חדש</small></a>' +
        '<div class="note" style="margin-top:20px"><b>אחרי שנכנסתם לחנות:</b> העתיקו את הכתובת מהשורה העליונה בדפדפן, היא נראית כך: <span class="ltr">admin.shopify.com/store/<b>my-store</b></span>, והדביקו כאן.</div>' +
        '<label class="f">כתובת החנות שלכם<input type="text" id="shopIn" dir="ltr" style="text-align:left" placeholder="admin.shopify.com/store/my-store" value="' + esc(S.shop || '') + '" autocomplete="off" inputmode="url"></label><span class="err" id="shopErr" role="alert"></span>' +
        '<button class="btn dark" type="button" id="shopNext">פתחתי חנות, ממשיכים</button>');
    },
    plan: function () {
      frame('plan', '<h2>מפעילים את <em>מבצע הדולר</em></h2><p>שופיפיי נותנים לחנויות חדשות מסלול של דולר אחד לחודש בחודשים הראשונים. מפעילים אותו עכשיו כדי שהחנות לא תיסגר בסוף ימי הניסיון.</p>' +
        '<ol class="how"><li>לוחצים על הכפתור. נפתח מסך המסלולים בחנות שלכם.</li><li>בוחרים במסלול <b>Basic</b> (בסיסי) עם החיוב החודשי.</li><li>מוודאים שמופיע המחיר של דולר אחד לחודש, מזינים פרטי תשלום ומאשרים.</li></ol>' +
        '<a class="btn" id="planGo" href="' + admin('/settings/plan') + '" target="_blank" rel="noopener">בחירת מסלול בדולר<small>נפתח בחלון חדש</small></a>' +
        '<p class="under">המחיר והתנאים לפי מה שמופיע אצלכם במסך של שופיפיי.</p>' +
        '<button class="btn white" type="button" id="planNext" style="margin-top:14px">סיימתי, ממשיכים</button>');
    },
    theme: function () {
      frame('theme', '<h2>מתקינים את <em>התבנית בעברית</em></h2><p>הכנו לכם קובץ תבנית עם השם, הצבעים והטקסטים של ' + esc(S.store_name || 'החנות') + '.</p>' +
        '<button class="btn" type="button" id="themeDl">1. הורדת קובץ התבנית</button><span class="err" id="thErr" role="alert"></span>' +
        '<ol class="how" style="margin-top:18px"><li>לוחצים על הכפתור למטה. נפתח מסך התבניות בחנות.</li><li>לוחצים על <b>הוספת תבנית</b> (Add theme) ואז <b>העלאת קובץ ZIP</b> (Upload zip file).</li><li>בוחרים את הקובץ שהורדתם (בתיקיית ההורדות) ומחכים שיעלה.</li><li>ליד התבנית החדשה לוחצים <b>פרסום</b> (Publish).</li></ol>' +
        '<a class="btn dark" id="themeGo" href="' + admin('/themes') + '" target="_blank" rel="noopener">2. פתיחת מסך התבניות</a>' +
        '<div class="note">מעלים מהטלפון? אפשר, אבל מהמחשב זה הכי נוח. הקובץ נשמר בתיקיית ההורדות.</div>' +
        '<button class="btn white" type="button" id="themeNext">התבנית עלתה, ממשיכים</button>');
    },
    products: function () {
      var n = N(S.niche);
      frame('products', '<h2>מעלים <em>3 מוצרים</em> לחנות</h2>' +
        '<div class="mock" style="max-width:100%;border-width:0;box-shadow:none;--bg:#fff;--tx:#141414;--ac:#C98A12"><div class="prods">' + n.products.map(function (p) { return '<div><img src="' + esc(img(p.images[0])) + '" alt="">' + esc(p.title) + '<i>₪' + p.price + '</i></div>'; }).join('') + '</div></div>' +
        '<button class="btn" type="button" id="prodDl">1. הורדת קובץ המוצרים</button>' +
        '<ol class="how" style="margin-top:18px"><li>לוחצים על הכפתור למטה. נפתח מסך המוצרים.</li><li>לוחצים <b>ייבוא</b> (Import) למעלה.</li><li>בוחרים את קובץ המוצרים שהורדתם, לוחצים <b>העלאה ותצוגה מקדימה</b> ואז <b>ייבוא מוצרים</b>.</li><li>אחרי דקה המוצרים יופיעו בחנות, עם התמונות.</li></ol>' +
        '<a class="btn dark" id="prodGo" href="' + admin('/products') + '" target="_blank" rel="noopener">2. פתיחת מסך המוצרים</a>' +
        '<button class="btn white" type="button" id="prodNext" style="margin-top:14px">המוצרים עלו, ממשיכים</button>');
    },
    ping: function () {
      frame('ping', '<h2>מוסיפים <em>עוזר AI ופופאפ</em> לחנות</h2><p>חנות חדשה צריכה שני דברים מהיום הראשון: מישהו שעונה ללקוחות, ודרך לאסוף פרטים של מי שנכנס ולא קנה. בשביל זה מתקינים את Ping AI.</p>' +
        '<ol class="how"><li>לוחצים על הכפתור הראשון ומתקינים את האפליקציה בחנות (<b>התקנה</b> / Install).</li><li>חוזרים לכאן ולוחצים על הכפתור השני. הוא מעתיק לחנות סטאפ מוכן: צ׳אט AI ופופאפ לאיסוף לידים.</li></ol>' +
        '<a class="btn" id="pingGo" href="' + PING_APP + '" target="_blank" rel="noopener">1. התקנת Ping AI בשופיפיי<small>נפתח בחלון חדש</small></a>' +
        '<a class="btn dark" id="setupGo" href="' + PING_SETUP + '" target="_blank" rel="noopener" style="margin-top:12px">2. העתקת הסטאפ המוכן + הפופאפ</a>' +
        '<button class="btn white" type="button" id="pingNext" style="margin-top:14px">הותקן, ממשיכים</button>');
    },
    done: function () {
      var url = S.shop ? 'https://' + S.shop : '';
      frame('done', '<h2>🎉 ' + esc(S.store_name || 'החנות שלך') + ' <em>מוכנה</em></h2><p>יש לכם חנות בעברית, תבנית מעוצבת, 3 מוצרים ועוזר AI. עכשיו מתחילים למכור.</p>' +
        (url ? '<a class="btn" href="' + esc(url) + '" target="_blank" rel="noopener">לצפייה בחנות שלי</a>' : '') +
        '<h3 style="margin-top:22px">עוד שלוש הגדרות קטנות</h3><ol class="how"><li><b>שפת החנות:</b> <a href="' + admin('/settings/languages') + '" target="_blank" rel="noopener">הגדרות ← שפות</a>, מוסיפים עברית וקובעים אותה כשפת ברירת המחדל (גם הקופה תהיה בעברית).</li>' +
        '<li><b>סליקה:</b> <a href="' + admin('/settings/payments') + '" target="_blank" rel="noopener">הגדרות ← תשלומים</a>, מחברים חברת סליקה שעובדת בישראל או PayPal.</li>' +
        '<li><b>הסרת הסיסמה:</b> כשהכול מוכן, <a href="' + admin('/online_store/preferences') + '" target="_blank" rel="noopener">חנות מקוונת ← העדפות</a>, מבטלים את הגנת הסיסמה והחנות פתוחה לכולם.</li></ol>' +
        '<a class="btn dark" href="' + COURSE + '" target="_blank" rel="noopener" style="margin-top:18px">לקורס החינמי: איך מביאים את המכירות הראשונות</a>' +
        '<a class="btn wa" href="' + WA_HELP + '" target="_blank" rel="noopener" style="margin-top:12px">נתקעתם? שלחו לנו וואטסאפ</a>');
    }
  };

  /* ---------- files built in the browser ---------- */
  function loadFflate() {
    if (window.fflate) return Promise.resolve(window.fflate);
    return new Promise(function (res, rej) { var s = document.createElement('script'); s.src = FFLATE; s.onload = function () { res(window.fflate); }; s.onerror = rej; document.head.appendChild(s); });
  }
  function slug() { return (shopHandle() || 'my-store').replace(/[^a-z0-9-]/g, '') || 'my-store'; }
  function download(blob, name) {
    var a = document.createElement('a'); a.href = URL.createObjectURL(blob); a.download = name; document.body.appendChild(a); a.click();
    setTimeout(function () { URL.revokeObjectURL(a.href); a.remove(); }, 4000);
  }
  function themeTokens() {
    var n = N(S.niche), c = pal(S.palette).c, name = S.store_name || 'החנות שלי';
    var t = {__STORE_NAME__: name, __HERO_TITLE__: n.hero_title, __HERO_TEXT__: n.hero_text, __ANNOUNCE__: n.announce, __USP1__: n.usp[0], __USP2__: n.usp[1], __USP3__: n.usp[2], __ABOUT__: n.about};
    for (var k in c) t['__' + k + '__'] = c[k];
    for (var j in t) t[j] = String(t[j]).split('__STORE_NAME__').join(name);
    return t;
  }
  function buildTheme() {
    return Promise.all([loadFflate(), fetch(BASE + 'theme/base.zip', {cache: 'no-cache'}).then(function (r) { if (!r.ok) throw new Error('zip'); return r.arrayBuffer(); })]).then(function (x) {
      var ff = x[0], files = ff.unzipSync(new Uint8Array(x[1])), tok = themeTokens(), keys = Object.keys(tok), dec = new TextDecoder(), enc = new TextEncoder();
      Object.keys(files).forEach(function (path) {
        if (!/\.(json|liquid|css|js)$/.test(path)) return;
        var s = dec.decode(files[path]), isJson = /\.json$/.test(path), changed = false;
        keys.forEach(function (k) {
          if (s.indexOf(k) < 0) return;
          // texts: HTML-escape (& < > ") everywhere, then JSON-escape inside .json files (see theme/TOKENS.md); colors go in as-is
          var v = /^__(BG|BG2|TEXT|ACCENT|ACCENT_TEXT|DARK)__$/.test(k) ? tok[k] : String(tok[k]).replace(/[&<>"]/g, function (c) { return {'&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;'}[c]; });
          if (isJson) v = JSON.stringify(v).slice(1, -1);
          s = s.split(k).join(v); changed = true;
        });
        if (changed) files[path] = enc.encode(s);
      });
      return new Blob([ff.zipSync(files, {level: 6})], {type: 'application/zip'});
    });
  }
  function csvCell(v) { var s = v == null ? '' : String(v); return /[",\n\r]/.test(s) ? '"' + s.replace(/"/g, '""') + '"' : s; }
  function buildCsv() {
    var n = N(S.niche), name = S.store_name || 'החנות שלי';
    var H = ['Handle', 'Title', 'Body (HTML)', 'Vendor', 'Type', 'Tags', 'Published', 'Option1 Name', 'Option1 Value', 'Variant SKU', 'Variant Grams', 'Variant Inventory Tracker', 'Variant Inventory Qty',
      'Variant Inventory Policy', 'Variant Fulfillment Service', 'Variant Price', 'Variant Compare At Price', 'Variant Requires Shipping', 'Variant Taxable', 'Image Src', 'Image Position', 'Image Alt Text', 'Status'];
    var rows = [H];
    n.products.forEach(function (p) {
      var vals = p.option_name && p.option_values && p.option_values.length ? p.option_values : [null];
      var lines = Math.max(vals.length, p.images.length);
      for (var i = 0; i < lines; i++) {
        var r = {};
        r.Handle = p.handle;
        if (i === 0) { r.Title = p.title; r['Body (HTML)'] = String(p.body_html).split('__STORE_NAME__').join(name); r.Vendor = name; r.Type = p.product_type; r.Tags = p.tags; r.Published = 'TRUE'; r['Option1 Name'] = p.option_name || 'Title'; r.Status = 'active'; }
        if (i < vals.length) {
          r['Option1 Value'] = vals[i] || 'Default Title'; r['Variant SKU'] = p.handle.toUpperCase().slice(0, 20) + (vals[i] ? '-' + (i + 1) : ''); r['Variant Grams'] = p.grams || 300;
          r['Variant Inventory Qty'] = 100; r['Variant Inventory Policy'] = 'continue'; r['Variant Fulfillment Service'] = 'manual'; r['Variant Price'] = p.price; r['Variant Compare At Price'] = p.compare_at || '';
          r['Variant Requires Shipping'] = 'TRUE'; r['Variant Taxable'] = 'TRUE';
        }
        if (i < p.images.length) { r['Image Src'] = pubImg(p.images[i]); r['Image Position'] = i + 1; r['Image Alt Text'] = p.alt || p.title; }
        rows.push(H.map(function (h) { return r[h] == null ? '' : r[h]; }));
      }
    });
    return new Blob(['\ufeff' + rows.map(function (r) { return r.map(csvCell).join(','); }).join('\r\n')], {type: 'text/csv;charset=utf-8'});
  }

  /* ---------- events ---------- */
  root.addEventListener('click', function (e) {
    var t = e.target.closest('button, a'); if (!t || !root.contains(t)) return;
    var d = t.dataset;
    if (d.go === 'start') { px('FSStart', {}, true); track('FSStart'); if (S.tok) wizard(nextOpen()); else signup(); return; }
    if (d.go === 'privacy') { e.preventDefault(); privacy(); return; }
    if (d.back) { wizard(d.back); return; }
    if (d.niche) {
      S.niche = d.niche; step('niche', {niche: d.niche}); px('FSNiche', {niche: d.niche}, true);
      if (d.niche === 'unsure') S.niche = 'home';
      wizard('palette'); return;
    }
    if (d.pal) {
      S.palette = d.pal; persist();
      root.querySelectorAll('[data-pal]').forEach(function (b) { b.setAttribute('aria-pressed', String(b === t)); });
      $('#pmock').innerHTML = mock(S.niche, S.palette); $('#palNext').disabled = false; return;
    }
    if (d.name) { $('#sname').value = d.name; S.store_name = cleanName(d.name); $('#pmock').innerHTML = mock(S.niche, S.palette); return; }
    switch (t.id) {
      case 'palNext': step('palette', {palette: S.palette}); wizard('name'); return;
      case 'nameNext':
        S.store_name = cleanName($('#sname').value);
        if (S.store_name.length < 2) { $('#nErr').textContent = 'כתבו שם לחנות (לפחות 2 אותיות)'; $('#sname').focus(); return; }
        step('name', {store_name: S.store_name}); wizard('shop'); return;
      case 'shopifyGo': step('shopify'); px('FSShopifyClick', {}, true); return;
      case 'shopNext': {
        var v = $('#shopIn').value.trim().toLowerCase(), err = $('#shopErr');
        var m = v.match(/admin\.shopify\.com\/store\/([a-z0-9][a-z0-9-]{1,60})/) || v.match(/^(?:https?:\/\/)?([a-z0-9][a-z0-9-]{1,60})\.myshopify\.com/) || v.match(/^([a-z0-9][a-z0-9-]{1,60})$/);
        if (!m) { err.textContent = 'הדביקו את הכתובת מהדפדפן, למשל admin.shopify.com/store/my-store'; $('#shopIn').focus(); return; }
        S.shop = m[1] + '.myshopify.com'; err.textContent = '';
        step('shop', {shop: S.shop}); px('FSShopLinked', {}, true); wizard('plan'); return;
      }
      case 'planGo': step('plan'); return;
      case 'planNext': step('plan'); wizard('theme'); return;
      case 'themeDl': {
        t.disabled = true; t.innerHTML = 'מכינים את התבנית שלכם<span class="spin"></span>';
        buildTheme().then(function (blob) { download(blob, slug() + '-theme.zip'); t.disabled = false; t.textContent = '✓ הקובץ ירד · להורדה חוזרת'; px('FSThemeDownload', {}, true); })
          .catch(function () { t.disabled = false; t.textContent = '1. הורדת קובץ התבנית'; $('#thErr').textContent = 'ההורדה נכשלה. נסו שוב, או שלחו לנו וואטסאפ'; });
        return;
      }
      case 'themeNext': step('theme'); wizard('products'); return;
      case 'prodDl': download(buildCsv(), slug() + '-products.csv'); t.textContent = '✓ הקובץ ירד · להורדה חוזרת'; px('FSProductsDownload', {}, true); return;
      case 'prodNext': step('products'); wizard('ping'); return;
      case 'pingGo': step('ping'); px('PingInstallClick', {source: 'free-store'}, true); return;
      case 'setupGo': step('setup'); px('FSSetupClick', {}, true); return;
      case 'pingNext': step('ping'); step('done'); px('FSDone', {}, true); wizard('done'); return;
    }
  });

  /* ---------- start ---------- */
  track('FSPageView');
  if (S.tok) {
    // returning visitor: resume the wizard where they stopped (server state wins over this device's copy)
    fetch(API + '/api/fs/me', {headers: {Authorization: 'Bearer ' + S.tok}, mode: 'cors'}).then(function (r) { return r.json(); }).then(function (r) {
      if (!r.ok) { S.tok = null; ls('fs_tok', null); landing(); return; }
      var stt = r.state; S.first = stt.first;
      ['niche', 'palette', 'store_name', 'shop'].forEach(function (k) { if (stt[k]) S[k] = stt[k]; });
      if (S.niche === 'unsure') S.niche = 'home';
      for (var k in stt.steps) S.steps[k] = S.steps[k] || stt.steps[k];
      persist(); wizard(QS.get('step') && STEPS.indexOf(QS.get('step')) >= 0 ? QS.get('step') : (STEPS.indexOf(S.cur) >= 0 ? S.cur : nextOpen()));
    }).catch(function () { landing(); });
  } else landing();
})();
