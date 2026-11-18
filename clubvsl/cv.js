/* club-vsl A/B router (www.avivmalka.com/club-vsl). A = the agency's original page (cv-a.js), B = the sharpened page (cv-b.js). A visitor keeps the same version; ?ab=a / ?ab=b forces one (QA, not counted). */
(function(){
  var f = (location.search.match(/[?&]ab=([ab])\b/i) || [])[1], v;
  try { v = localStorage.getItem('cv_ab'); } catch(e){}
  if (f) v = f.toUpperCase();
  if (v !== 'A' && v !== 'B'){ v = Math.random() < 0.5 ? 'A' : 'B'; try { localStorage.setItem('cv_ab', v); } catch(e){} }
  var me = document.currentScript, ver = (me && me.src.match(/[?&]v=(\d+)/) || [])[1] || Date.now();
  var s = document.createElement('script');
  s.src = 'https://avivmalka123.github.io/clubvsl/cv-' + v.toLowerCase() + '.js?v=' + ver;
  (me && me.parentNode ? me.parentNode : document.body).appendChild(s);
})();
