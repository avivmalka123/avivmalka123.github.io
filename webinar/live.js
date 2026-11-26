/* webinar-live: daily broadcast at 20:00 Israel time, Sun–Thu + Saturday night (no Friday).
   Aviv 26.11.2026: countdown above the Kajabi form that resets every day at 20:00,
   and the "מתי זה קורה?" line + "ביום שלישי הקרוב" text follow the same next broadcast.
   Same rule as Make scenario 3630866 (variable "תאריך"). */
(function () {
  if (window.__wlLive) return; window.__wlLive = 1;
  var HOUR = 20, TZ = 'Asia/Jerusalem';
  var DAYS = ['ראשון', 'שני', 'שלישי', 'רביעי', 'חמישי', 'שישי', 'שבת'];

  // wall-clock "now" in Israel, as a Date whose UTC fields hold Israel local time
  function ilNow() {
    var p = {}; new Intl.DateTimeFormat('en-GB', { timeZone: TZ, year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit', hourCycle: 'h23' })
      .formatToParts(new Date()).forEach(function (x) { p[x.type] = x.value; });
    return new Date(Date.UTC(+p.year, +p.month - 1, +p.day, +p.hour, +p.minute, +p.second));
  }
  function next() {
    var n = ilNow(), t = new Date(Date.UTC(n.getUTCFullYear(), n.getUTCMonth(), n.getUTCDate(), HOUR, 0, 0));
    if (n >= t) t = new Date(t.getTime() + 864e5);
    if (t.getUTCDay() === 5) t = new Date(t.getTime() + 864e5); // no Friday broadcast
    var dd = Math.round((Date.UTC(t.getUTCFullYear(), t.getUTCMonth(), t.getUTCDate()) - Date.UTC(n.getUTCFullYear(), n.getUTCMonth(), n.getUTCDate())) / 864e5);
    var dow = t.getUTCDay();
    var rel = dd === 0 ? (dow === 6 ? 'הערב, במוצאי שבת' : 'היום') : dd === 1 ? (dow === 6 ? 'מחר, במוצאי שבת' : 'מחר') : (dow === 6 ? 'במוצאי שבת' : 'ביום ' + DAYS[dow]);
    return { ms: t - n, dow: dow, dm: t.getUTCDate() + '.' + (t.getUTCMonth() + 1), rel: rel, dd: dd };
  }
  function pad(x) { return (x < 10 ? '0' : '') + x; }

  var css = '' +
    '#wlTimer{direction:rtl;font-family:Heebo,Assistant,Arial,sans-serif;max-width:560px;margin:0 auto 22px;padding:20px 18px 18px;border-radius:20px;' +
    'background:linear-gradient(160deg,rgba(142,68,173,.28),rgba(20,12,32,.55));border:1.5px solid rgba(187,134,252,.55);box-shadow:0 10px 40px rgba(142,68,173,.35);text-align:center;color:#fff;box-sizing:border-box}' +
    '#wlTimer .wl-live{display:inline-flex;align-items:center;gap:8px;font-weight:800;font-size:15px;letter-spacing:.02em;background:rgba(255,59,59,.14);border:1px solid rgba(255,90,90,.6);color:#FF6B6B;border-radius:999px;padding:4px 14px;margin-bottom:12px}' +
    '#wlTimer .wl-dot{width:9px;height:9px;border-radius:50%;background:#FF3B3B;box-shadow:0 0 0 0 rgba(255,59,59,.7);animation:wlPulse 1.6s infinite}' +
    '@keyframes wlPulse{0%{box-shadow:0 0 0 0 rgba(255,59,59,.7)}70%{box-shadow:0 0 0 10px rgba(255,59,59,0)}100%{box-shadow:0 0 0 0 rgba(255,59,59,0)}}' +
    '#wlTimer .wl-when{font-size:clamp(19px,4.6vw,24px);font-weight:800;line-height:1.35;margin:0 0 14px}' +
    '#wlTimer .wl-when b{color:#E2C6FF}' +
    '#wlTimer .wl-k{font-size:15px;color:rgba(255,255,255,.78);margin:0 0 8px;font-weight:500}' +
    '#wlTimer .wl-row{direction:ltr;display:flex;justify-content:center;align-items:flex-start;gap:8px}' +
    '#wlTimer .wl-u{min-width:74px}' +
    '#wlTimer .wl-n{display:block;font-size:clamp(34px,9vw,48px);font-weight:900;line-height:1;padding:12px 6px;border-radius:14px;background:rgba(0,0,0,.38);border:1px solid rgba(255,255,255,.14);font-variant-numeric:tabular-nums}' +
    '#wlTimer .wl-l{display:block;font-size:13px;color:rgba(255,255,255,.7);margin-top:6px}' +
    '#wlTimer .wl-sep{font-size:clamp(28px,7vw,40px);font-weight:900;line-height:1;padding-top:14px;color:rgba(226,198,255,.8)}' +
    '#wlTimer .wl-note{font-size:14px;color:rgba(255,255,255,.75);margin:14px 0 0}' +
    '@media(max-width:420px){#wlTimer .wl-u{min-width:64px}#wlTimer{padding:16px 12px}}';

  function whenHTML(N) {
    return (N.dow === 6 ? N.rel : N.rel + ', יום ' + DAYS[N.dow]) + ' <b>' + N.dm + '</b> · <span style="white-space:nowrap">בשעה <b>20:00</b></span>';
  }
  function build() {
    var form = document.querySelector('form[action*="/forms/2149455870/"]');
    if (!form || document.getElementById('wlTimer')) return !!form;
    var st = document.createElement('style'); st.textContent = css; document.head.appendChild(st);
    var box = document.createElement('div'); box.id = 'wlTimer';
    box.innerHTML = '<div class="wl-live"><span class="wl-dot"></span>שידור חי בזום</div>' +
      '<p class="wl-when" id="wlWhen"></p>' +
      '<p class="wl-k">השידור מתחיל בעוד</p>' +
      '<div class="wl-row"><div class="wl-u"><span class="wl-n" id="wlH">00</span><span class="wl-l">שעות</span></div><div class="wl-sep">:</div>' +
      '<div class="wl-u"><span class="wl-n" id="wlM">00</span><span class="wl-l">דקות</span></div><div class="wl-sep">:</div>' +
      '<div class="wl-u"><span class="wl-n" id="wlS">00</span><span class="wl-l">שניות</span></div></div>' ;
    var host = form.closest('.form') || form;
    host.parentNode.insertBefore(box, host);
    return true;
  }
  var lastKey = '';
  function texts(N) {
    // "מתי זה קורה? ..." line and "ביום שלישי הקרוב" in the page copy
    var key = N.dm + N.rel; if (key === lastKey) return; lastKey = key;
    var hs = document.querySelectorAll('h1,h2,h3,h4,h5,p');
    for (var i = 0; i < hs.length; i++) {
      var el = hs[i];
      if (el.closest('#wlTimer')) continue;
      if (/מתי זה קורה\?/.test(el.textContent) && !el.getAttribute('data-wl')) el.setAttribute('data-wl', 'when');
      if (el.getAttribute('data-wl') === 'when') {
        var sp = el.querySelector('span') || el;
        sp.innerHTML = '<b>מתי זה קורה?</b> ' + (N.dow === 6 ? N.rel : N.rel + ', יום ' + DAYS[N.dow]) + ' | ' + N.dm + ' 🕗 שעה 20:00 (בדיוק, אני לא אוהב לאחר) 📍 לינק לזום יישלח לנרשמים בלבד';
      }
    }
    var w = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT), n;
    while ((n = w.nextNode())) {
      if (!n.__wlT && /ביום\s+שלישי\s+הקרוב/.test(n.nodeValue)) n.__wlT = n.nodeValue;
      if (n.__wlT) n.nodeValue = n.__wlT.replace(/ביום\s+שלישי\s+הקרוב/g, N.rel + ' ב־20:00');
    }
  }
  function tick() {
    var N = next(), s = Math.max(0, Math.floor(N.ms / 1000));
    var h = Math.floor(s / 3600), m = Math.floor(s % 3600 / 60), sec = s % 60;
    var H = document.getElementById('wlH'); if (H) { H.textContent = pad(h); document.getElementById('wlM').textContent = pad(m); document.getElementById('wlS').textContent = pad(sec); document.getElementById('wlWhen').innerHTML = whenHTML(N); }
    texts(N);
  }
  function start() { var ok = build(); tick(); if (!ok) { var tries = 0, iv = setInterval(function () { if (build() || ++tries > 40) { clearInterval(iv); tick(); } }, 250); } setInterval(tick, 1000); }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', start); else start();
})();
