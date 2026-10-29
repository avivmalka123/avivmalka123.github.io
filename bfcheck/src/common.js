/* bfcheck: shared client helpers (adapted from pingf/src/common.js, own storage keys so attribution is per funnel). No personal data ever goes into URLs. */
var BFX = (function () {
  var LOCAL = /^(localhost|127\.0\.0\.1)$/.test(location.hostname);
  var API = LOCAL && /[?&]api=([^&]+)/.test(location.search) ? decodeURIComponent(RegExp.$1) : 'https://ping-funnel.aviv1988.workers.dev';
  var PIXEL = '2210072352882860';

  function ls(k, v) { try { if (v === undefined) return localStorage.getItem(k); if (v === null) localStorage.removeItem(k); else localStorage.setItem(k, v); } catch (e) { return null; } }
  function rid(n) { var a = new Uint8Array(n || 12), s = ''; (window.crypto || window.msCrypto).getRandomValues(a); for (var i = 0; i < a.length; i++) s += (a[i] % 36).toString(36); return s; }
  function cookie(n) { var m = document.cookie.match('(?:^|; )' + n + '=([^;]*)'); return m ? decodeURIComponent(m[1]) : ''; }
  var vid = ls('bf_vid'); if (!vid) { vid = 'v' + rid(14); ls('bf_vid', vid); }

  /* attribution of this funnel: the latest ad click wins (kept 30 days) */
  var KEYS = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_content', 'utm_term', 'campaign_id', 'adset_id', 'ad_id', 'fbclid'];
  function captureUtm() {
    var p = new URLSearchParams(location.search), got = {}, any = false;
    KEYS.forEach(function (k) { var v = p.get(k); if (v) { got[k] = v.slice(0, 200); any = true; } });
    var old = utm();
    if (any) { got.t = Date.now(); ls('bf_utm', JSON.stringify(got)); old = got; }
    else if (old.t && Date.now() - old.t > 30 * 864e5) { ls('bf_utm', null); old = {}; }
    if (got.fbclid) ls('bf_fbc', 'fb.1.' + Date.now() + '.' + got.fbclid);
    return old;
  }
  function utm() { try { return JSON.parse(ls('bf_utm') || '{}'); } catch (e) { return {}; } }
  function fbc() { return cookie('_fbc') || ls('bf_fbc') || ''; }

  /* Meta pixel: events go only to this pixel (trackSingle), with the same event_id the server sends to CAPI */
  function pixel() {
    if (!window.fbq) {
      !function (f, b, e, v, n, t, s) { if (f.fbq) return; n = f.fbq = function () { n.callMethod ? n.callMethod.apply(n, arguments) : n.queue.push(arguments); }; if (!f._fbq) f._fbq = n; n.push = n; n.loaded = !0; n.version = '2.0'; n.queue = []; t = b.createElement(e); t.async = !0; t.src = v; s = b.getElementsByTagName(e)[0]; s.parentNode.insertBefore(t, s); }(window, document, 'script', 'https://connect.facebook.net/en_US/fbevents.js');
    }
    if (!window.__bfPixel) { window.fbq('init', PIXEL); window.__bfPixel = 1; }
  }
  var STD = {PageView: 1, Lead: 1};
  function fb(name, eventId, data) {
    try { pixel(); window.fbq(STD[name] ? 'trackSingle' : 'trackSingleCustom', PIXEL, name, data || {}, eventId ? {eventID: eventId} : undefined); } catch (e) {}
  }

  function api(path, body, ms) {
    var ctl = window.AbortController ? new AbortController() : null, tm = ctl && setTimeout(function () { ctl.abort(); }, ms || 9000);
    return fetch(API + path, {method: body ? 'POST' : 'GET', headers: {'Content-Type': 'application/json'}, body: body ? JSON.stringify(body) : undefined, keepalive: !!body && JSON.stringify(body).length < 6e4, signal: ctl ? ctl.signal : undefined})
      .then(function (r) { clearTimeout(tm); return r.json().catch(function () { return {}; }).then(function (j) { j._status = r.status; return j; }); }, function (e) { clearTimeout(tm); throw e; });
  }
  /* funnel event: pixel (browser) + server log (and CAPI once a token is set) with the same id; once per page per name unless repeat */
  var sent = {};
  function track(name, data, opt) {
    opt = opt || {};
    if (sent[name] && !opt.repeat) return; sent[name] = 1;
    var id = name.toLowerCase().slice(0, 12) + '_' + rid(14), d = data || {};
    d.content_name = 'bf-quiz';
    fb(name, id, d);
    if (opt.server === false) return;
    api('/api/event', {name: name, event_id: id, vid: vid, utm: utm(), url: location.origin + location.pathname, fbc: fbc(), fbp: cookie('_fbp')}).catch(function () {});
  }

  return {API: API, ls: ls, rid: rid, vid: vid, captureUtm: captureUtm, utm: utm, fbc: fbc, cookie: cookie, fb: fb, api: api, track: track};
})();
