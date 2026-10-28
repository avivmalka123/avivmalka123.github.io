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
