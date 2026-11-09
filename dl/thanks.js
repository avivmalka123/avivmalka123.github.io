/* Aviv Malka direct lead page — thank-you page www.avivmalka.com/ecom-start-thanks (loaded from Kajabi).
   No pixel events here on purpose: Kajabi's site pixel fires its own PageView, and the campaigner defines the Lead by this URL (Aviv, 9.11). */
(function(){
  var GIFT_URL = 'https://aviv-malka.com/guide/'; /* the gift training; the visitor is forwarded there after a few seconds */
  var WAIT = 6;
  var BG = '#0B1426';
  var root = document.getElementById('dl-root');
  if (!root){ root = document.createElement('div'); root.id = 'dl-root'; document.body.appendChild(root); }
  try {
    document.body.style.background = BG;
    var p = root.parentElement;
    while (p && p !== document.body){ p.style.backgroundColor = BG; p.style.backgroundImage = 'none'; if (/section|container|row|col|sizer|block/.test(p.className || '')){ p.style.padding = '0'; p.style.margin = '0'; p.style.maxWidth = 'none'; } p = p.parentElement; }
    document.querySelectorAll('header.header, footer.footer').forEach(function(el){ el.style.display = 'none'; });
    var hs = document.createElement('style'); hs.textContent = '.block-type--video{display:none !important}'; document.head.appendChild(hs);
  } catch(e){}

  var name = '';
  try { var L = JSON.parse(localStorage.getItem('alm_lead') || '{}'); name = (L.name || '').split(' ')[0]; } catch(e){}
  var esc = function(s){ return String(s).replace(/[&<>"']/g, function(c){ return {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]; }); };

  var css =
    '#dlt{min-height:100vh;display:flex;align-items:center;justify-content:center;padding:28px 16px;box-sizing:border-box;background:radial-gradient(120% 70% at 50% 0%,#15233F 0%,' + BG + ' 60%);direction:rtl;text-align:center;font-family:Heebo,Arial,sans-serif;color:#F5F7FB}' +
    '#dlt *{box-sizing:border-box;font-family:Heebo,Arial,sans-serif;letter-spacing:normal;text-transform:none}' +
    '#dlt .card{width:100%;max-width:560px;background:#101C33;border:1px solid rgba(255,255,255,.1);border-radius:24px;padding:34px 24px 28px;box-shadow:0 30px 80px -30px rgba(0,0,0,.7)}' +
    '#dlt .ok{width:74px;height:74px;margin:0 auto 18px;border-radius:50%;display:flex;align-items:center;justify-content:center;background:rgba(43,182,115,.14);border:2px solid #2BB673;color:#2BB673;font-size:38px;font-weight:900}' +
    '#dlt h1{margin:0 0 10px;font-size:clamp(28px,7vw,40px);line-height:1.15;font-weight:900;color:#fff}' +
    '#dlt p{margin:0 0 12px;font-size:clamp(16.5px,4.3vw,19px);line-height:1.55;color:#A7B2C6}' +
    '#dlt p b{color:#fff}' +
    '#dlt .gift{margin:20px 0 18px;padding:18px;border-radius:18px;background:rgba(242,140,40,.08);border:1px solid rgba(242,140,40,.35)}' +
    '#dlt .gift b{display:block;color:#FFB547;font-size:clamp(17px,4.5vw,20px);margin-bottom:4px}' +
    '#dlt .btn{display:flex;align-items:center;justify-content:center;width:100%;min-height:58px;border-radius:16px;padding:14px 20px;font-size:clamp(17.5px,4.5vw,20px);font-weight:900;color:#1b1205;text-decoration:none;background:linear-gradient(180deg,#FFC05A,#F28C28 58%,#E0700F);box-shadow:0 14px 34px -14px rgba(242,140,40,.75)}' +
    '#dlt .cd{margin-top:12px;font-size:15px;color:#7f8aa0}';

  root.innerHTML = '<style>' + css + '</style>' +
    '<div id="dlt"><div class="card">' +
      '<div class="ok">✓</div>' +
      '<h1>תודה' + (name ? ', ' + esc(name) : '') + '! קיבלנו את הפרטים</h1>' +
      '<p>הבקשה שלך להצטרף לתוכנית ההכשרה התקבלה.<br><b>מישהו מהצוות שלי יחזור אליך לשיחת התאמה קצרה</b>, למספר שהשארת.</p>' +
      '<div class="gift"><b>🎁 ובינתיים, ההדרכה שהבטחתי לך</b>' +
      '<p style="margin:0">7 השלבים להקמת חנות איקומרס מצליחה עם כלי AI</p></div>' +
      '<a class="btn" id="dltGo" href="' + GIFT_URL + '">לצפייה בהדרכה עכשיו</a>' +
      '<div class="cd" id="dltCd">מעביר אותך להדרכה בעוד ' + WAIT + ' שניות…</div>' +
    '</div></div>';

  var left = WAIT, cd = document.getElementById('dltCd');
  var t = setInterval(function(){
    left--;
    if (left <= 0){ clearInterval(t); cd.textContent = 'מעביר אותך להדרכה…'; location.href = GIFT_URL; return; }
    cd.textContent = 'מעביר אותך להדרכה בעוד ' + left + ' שניות…';
  }, 1000);
})();
