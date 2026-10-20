/* Aviv Malka · webinar-complete (sign-up during the live webinar), minimal new-brand layer.
   The original Kajabi form 2149233137 stays on the page untouched: we fill its fields and click its own submit,
   so the webhook/automations and the redirect (thank_you_url) keep working exactly as before. */
(function(){
  var css = "#wc{--bg:#FAF8F3;--line:#E8E3D8;--ink:#121318;--mute:#5F6170;--gold:#F2B705;--gold2:#E08A00;--red:#E5484D;direction:rtl;text-align:right;font-family:'Heebo',Arial,sans-serif;color:var(--ink);background:var(--bg);min-height:100vh;min-height:100dvh;display:flex;align-items:center;justify-content:center;padding:28px 18px 40px;box-sizing:border-box;-webkit-font-smoothing:antialiased}" +
    "#wc *{box-sizing:border-box;font-family:'Heebo',Arial,sans-serif;letter-spacing:normal;text-transform:none}" +
    "#wc .in{width:100%;max-width:440px}" +
    "#wc .brand{font-weight:900;font-size:17px;text-align:center;margin:0 0 26px}#wc .brand i{font-style:normal;color:var(--gold2)}" +
    "#wc .live{display:flex;align-items:center;justify-content:center;gap:8px;font-weight:800;font-size:14px;color:var(--mute);margin:0 0 12px}" +
    "#wc .dot{width:9px;height:9px;border-radius:50%;background:var(--red);box-shadow:0 0 0 0 rgba(229,72,77,.6);animation:wcp 1.6s infinite}" +
    "@keyframes wcp{0%{box-shadow:0 0 0 0 rgba(229,72,77,.55)}70%{box-shadow:0 0 0 9px rgba(229,72,77,0)}100%{box-shadow:0 0 0 0 rgba(229,72,77,0)}}" +
    "#wc h1{font-size:clamp(28px,7.6vw,38px);line-height:1.15;font-weight:900;margin:0 0 10px;text-align:center;color:var(--ink);text-wrap:balance}" +
    "#wc h1 em{font-style:normal;background:linear-gradient(180deg,transparent 60%,#FFE07A 60%);padding:0 2px}" +
    "#wc .sub{color:var(--mute);font-size:16.5px;text-align:center;margin:0 0 22px;text-wrap:balance}" +
    "#wc input{display:block;width:100%;border:1.5px solid var(--line);background:#fff;border-radius:14px;padding:16px;font-size:17px;margin:0 0 10px;color:var(--ink);outline:0}" +
    "#wc input:focus{border-color:var(--gold)}" +
    "#wc .err{display:none;color:#B42318;font-weight:700;font-size:14.5px;margin:0 0 10px}" +
    "#wc button{display:block;width:100%;border:0;border-radius:14px;padding:18px;font-size:19px;font-weight:900;color:#1a1205;cursor:pointer;background:linear-gradient(180deg,#FFD84D,var(--gold) 50%,var(--gold2));box-shadow:0 14px 28px -12px rgba(224,138,0,.65)}" +
    "#wc button:disabled{opacity:.7}" +
    "#wc .lock{color:#8a8c98;font-size:13px;text-align:center;margin:12px 0 0}";
  var html = '<link href="https://fonts.googleapis.com/css2?family=Heebo:wght@400;700;800;900&display=swap" rel="stylesheet"><style>' + css + '</style>' +
    '<div id="wc"><div class="in">' +
      '<p class="brand">אביב מלכה<i>.</i></p>' +
      '<p class="live"><span class="dot"></span>הטבה למשתתפי הוובינר</p>' +
      '<h1>שמרו לי את <em>ההטבה של הוובינר</em></h1>' +
      '<p class="sub">10 שניות, ואתם חוזרים לשידור. ההטבה שמורה לכם ל־24 שעות בלבד.</p>' +
      '<form id="wcF" novalidate>' +
        '<input id="wcName" placeholder="השם שלך" autocomplete="name">' +
        '<input id="wcEmail" type="email" inputmode="email" placeholder="מייל" autocomplete="email" dir="ltr" style="text-align:right">' +
        '<input id="wcPhone" type="tel" inputmode="tel" placeholder="פלאפון" autocomplete="tel" dir="ltr" style="text-align:right">' +
        '<p class="err" id="wcErr"></p>' +
        '<button id="wcGo" type="submit">אני רוצה את ההטבה ←</button>' +
      '</form>' +
      '<p class="lock">🔒 הפרטים שלך מוגנים. בלי ספאם.</p>' +
    '</div></div>';

  function start(){
    if (document.getElementById('wc')) return;
    var real = document.querySelector('form[action*="/forms/2149233137/"]');
    var root = document.createElement('div'); root.innerHTML = html; document.body.appendChild(root);
    document.body.style.background = '#FAF8F3';
    /* hide the original page (kept in the DOM so the real form can still submit) */
    document.querySelectorAll('[data-section-id], section.section, header.header, footer.footer').forEach(function(el){
      if (!el.contains(root)){ el.style.position = 'absolute'; el.style.left = '-9999px'; el.style.height = '0'; el.style.overflow = 'hidden'; }
    });
    var $ = function(id){ return document.getElementById(id); };
    try { var s = JSON.parse(localStorage.getItem('alm_lead') || '{}') || {}; if (s.name) $('wcName').value = s.name; if (s.email) $('wcEmail').value = s.email; if (s.phone) $('wcPhone').value = s.phone; } catch(e){}
    $('wcF').addEventListener('submit', function(e){
      e.preventDefault();
      var name = $('wcName').value.trim(), email = $('wcEmail').value.trim(), phone = $('wcPhone').value.replace(/[^\d+]/g, ''), err = $('wcErr');
      var bad = name.length < 2 ? 'רק שם, כדי שנדע איך לפנות אליך' : !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email) ? 'המייל לא נראה תקין' : !/^(\+?972|0)5\d{8}$/.test(phone) ? 'מספר הפלאפון לא נראה מלא' : '';
      if (bad){ err.textContent = bad; err.style.display = 'block'; return; }
      err.style.display = 'none';
      var b = $('wcGo'); b.disabled = true; b.textContent = 'שומר לך את ההטבה...';
      try { localStorage.setItem('alm_lead', JSON.stringify({name: name, phone: phone, email: email})); } catch(x){}
      if (!real){ err.textContent = 'תצוגה מקדימה בלבד: אין כאן טופס קג׳בי, ולכן הפרטים לא נשלחים.'; err.style.display = 'block'; b.disabled = false; b.textContent = 'אני רוצה את ההטבה ←'; return; }
      var set = function(n, v){ var el = real.querySelector('[name="' + n + '"]'); if (el){ el.value = v; el.dispatchEvent(new Event('input', {bubbles: true})); el.dispatchEvent(new Event('change', {bubbles: true})); } };
      set('form_submission[name]', name); set('form_submission[email]', email); set('form_submission[custom_3]', phone);
      var btn = real.querySelector('[type="submit"], button');
      setTimeout(function(){ if (btn) btn.click(); else real.submit(); }, 250);
    });
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', start); else start();
})();
