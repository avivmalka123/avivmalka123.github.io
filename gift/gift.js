/* Instagram follower gift page (www.avivmalka.com/gift) · Kajabi Custom Code block: <div id="gift-root"></div> + this file.
   Linked from the ManyChat "Say hi to new followers" DM. Three paths: beginners → webinar, store owners → copy-setup training,
   private chat → Aviv's WhatsApp. Clicks fire a GiftChoice custom event on whatever pixel Kajabi loaded. */
(function () {
  var BG = '#FAF8F3';
  var IMG = 'https://avivmalka123.github.io/gift/aviv.jpg';
  var UTM = 'utm_source=instagram&utm_medium=manychat&utm_campaign=follow-gift';
  var WEBINAR = 'https://www.avivmalka.com/webinar-live?' + UTM + '&utm_content=beginner';
  var TRAINING = 'https://www.avivmalka.com/copy-setup?' + UTM + '&utm_content=store-owner';
  var WA = 'https://wa.me/972525535537?text=' + encodeURIComponent('היי אביב, הגעתי מהאינסטגרם ואשמח לדבר איתך 🙂');

  var root = document.getElementById('gift-root');
  if (!root) { root = document.createElement('div'); root.id = 'gift-root'; document.body.appendChild(root); }

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

  if (!document.querySelector('link[href*="family=Heebo"]')) {
    var fl = document.createElement('link'); fl.rel = 'stylesheet';
    fl.href = 'https://fonts.googleapis.com/css2?family=Heebo:wght@400;500;700;800;900&display=swap';
    document.head.appendChild(fl);
  }

  var css = [
    '#gift-root{direction:rtl;text-align:right;background:' + BG + ';color:#141414;font-family:Heebo,Arial,sans-serif;min-height:100vh;-webkit-font-smoothing:antialiased}',
    '#gift-root *{box-sizing:border-box;font-family:inherit;letter-spacing:normal;text-transform:none}',
    '#gift-root .wrap{max-width:520px;margin:0 auto;padding:36px 16px 44px}',
    '#gift-root .me{text-align:center;margin:0 0 22px}',
    '#gift-root .ph{width:124px;height:124px;border-radius:50%;padding:4px;margin:0 auto 12px;background:conic-gradient(from 200deg,#F5C451,#C98A12,#F5C451,#E8B33A,#F5C451)}',
    '#gift-root .ph img{display:block;width:100%;height:100%;border-radius:50%;border:4px solid ' + BG + ';object-fit:cover}',
    '#gift-root .name{font-size:20px;font-weight:800;margin:0;color:#141414}',
    '#gift-root .handle{font-size:15px;color:#6b6457;margin:2px 0 0;direction:ltr;display:inline-block}',
    '#gift-root .cred{display:inline-block;margin:10px 0 0;background:#fff;border:1px solid #E6E1D6;border-radius:999px;padding:5px 14px;font-size:14px;font-weight:600;color:#3a352c}',
    '#gift-root .gift{display:inline-block;background:#141414;color:#fff;border-radius:999px;padding:6px 14px;font-size:14px;font-weight:700;margin:0 0 12px}',
    '#gift-root h1{font-size:30px;line-height:1.22;font-weight:900;margin:0 0 10px;color:#141414;text-wrap:balance}',
    '#gift-root h1 em{font-style:normal;background:linear-gradient(transparent 58%,#FFD84D 58%)}',
    '#gift-root .lead{font-size:17px;line-height:1.6;margin:0 0 22px;color:#2b2b2b}',
    '#gift-root .head{text-align:center}',
    '#gift-root .paths{display:grid;gap:12px}',
    '#gift-root a.path{display:flex;gap:14px;align-items:center;background:#fff;border:2px solid #E6E1D6;border-radius:18px;padding:16px;text-decoration:none;color:#141414;box-shadow:0 6px 22px rgba(20,20,20,.05);transition:border-color .15s,transform .15s}',
    '#gift-root a.path:hover{border-color:#C98A12;transform:translateY(-1px)}',
    '#gift-root a.path:focus-visible{outline:3px solid #1D4ED8;outline-offset:2px}',
    '#gift-root .ic{flex:0 0 52px;height:52px;border-radius:14px;display:flex;align-items:center;justify-content:center;font-size:26px;background:#FFF3D1}',
    '#gift-root .tx{flex:1;min-width:0}',
    '#gift-root .who{display:block;font-size:14px;font-weight:700;color:#9A6A0E;margin:0 0 2px}',
    '#gift-root .what{display:block;font-size:19px;line-height:1.3;font-weight:800;margin:0 0 4px}',
    '#gift-root .det{display:block;font-size:15px;line-height:1.45;color:#4a4439}',
    '#gift-root .go{flex:0 0 auto;font-size:22px;font-weight:800;color:#C98A12}',
    '#gift-root a.path.main{border-color:#E0A21E;background:linear-gradient(180deg,#FFFBF0,#fff)}',
    '#gift-root a.path.wa .ic{background:#E3F6EA}',
    '#gift-root a.path.wa .who{color:#1F7A3A}',
    '#gift-root a.path.wa .go{color:#1FA855}',
    '#gift-root .foot{text-align:center;font-size:13px;color:#7a7a7a;margin-top:26px;line-height:1.6}',
    '@media (min-width:720px){#gift-root h1{font-size:36px}#gift-root .wrap{padding-top:56px}}',
    '@media (prefers-reduced-motion:reduce){#gift-root a.path{transition:none}#gift-root a.path:hover{transform:none}}'
  ].join('');

  function path(cls, key, href, icon, who, what, det, go) {
    return '<a class="path ' + cls + '" data-k="' + key + '" href="' + href + '" target="_blank" rel="noopener">' +
      '<span class="ic" aria-hidden="true">' + icon + '</span>' +
      '<span class="tx"><span class="who">' + who + '</span><span class="what">' + what + '</span><span class="det">' + det + '</span></span>' +
      '<span class="go" aria-hidden="true">←</span></a>';
  }

  root.innerHTML = '<style>' + css + '</style><main class="wrap">' +
    '<div class="me"><div class="ph"><img src="' + IMG + '" alt="אביב מלכה" width="116" height="116"></div>' +
    '<p class="name">אביב מלכה</p><span class="handle">@aviv_malka7</span><br>' +
    '<span class="cred">15 שנה באיקומרס · מועדון האיקומרס</span></div>' +
    '<div class="head"><span class="gift">🎁 המתנה שלך</span>' +
    '<h1>מאיפה <em>מתחילים</em> אצלך?</h1>' +
    '<p class="lead">בחרו את מה שמתאים לכם היום, ושם מחכה המתנה.</p></div>' +
    '<div class="paths">' +
    path('main', 'beginner', WEBINAR, '🚀', 'מתחילים באיקומרס מאפס', 'וובינר חי וחינמי', 'ביום שלישי ב־18:00. איך בונים חנות אונליין שמכניסה כסף, צעד אחרי צעד.') +
    path('', 'store-owner', TRAINING, '📈', 'כבר יש לכם חנות פעילה', 'הדרכה: עוד 30% מכירות מאותו אתר', 'הדרכה חינמית עם שינויים שאפשר ליישם באתר כבר מחר.') +
    path('wa', 'whatsapp', WA, '💬', 'רוצים לדבר איתי בפרטי', 'שלחו לי הודעה בוואטסאפ', 'כתבו לי מה אתם צריכים, ואני חוזר אליכם.') +
    '</div>' +
    '<p class="foot">אביב מלכה · מועדון האיקומרס</p></main>';

  root.addEventListener('click', function (e) {
    var a = e.target.closest && e.target.closest('a.path');
    if (!a) return;
    try { if (window.fbq) fbq('trackCustom', 'GiftChoice', { choice: a.getAttribute('data-k') }); } catch (er) {}
  });
})();
