# Aviv 19.11: contact details mid-quiz like the Typeform funnels: 2 easy questions, first name (step 3), WhatsApp (step 4).
# Right after the phone: lead-hold start (group message + 5-min partial), fbq Lead, and Fireberry "diamond" direct lead + Smoove
# through Make 10196279 (a clone of 8258616 "לידים דף ישיר" without its 2Chat step).
# Kajabi-style payload so the cloned mappings work as is: id + payload{השם שלך, טלפון, form_title}.

INTRO = r"""    var FB = 'https://hook.eu2.make.com/e27k6us2snsgxmqpnjkg95ybjg4vew6b';
    function intro(){
      box.innerHTML = '<p class="lab">השלב הבא</p>' +
        '<h3>בדיקת התאמה למועדון האיקומרס</h3>' +
        '<p class="intro">המועדון מתאים לאנשים שמוכנים לבנות עסק אמיתי, ולכן לפני שמתקדמים אנחנו רוצים להכיר אותך.</p>' +
        '<div class="ls-fsteps"><span><i>1</i>שאלון התאמה</span><span><i>2</i>תשובה אם זה מתאים</span></div>' +
        '<button class="ls-btn" id="lsQGo">מתחילים ←</button>' +
        '<p class="ls-lock">2 דקות · הפרטים נשמרים רק אצלנו</p>';
      $('lsQGo').onclick = function(){ step(0); };
    }
    function contactErr(c, v){
      if (c === 'name') return v.replace(/[^A-Za-z֐-׿]/g, '').length < 2 ? 'רק שם פרטי, כדי שנדע איך לפנות אליך' : '';
      return /^(\+?972|0)5\d{8}$/.test(v.replace(/[^\d+]/g, '')) ? '' : 'מספר הוואטסאפ לא נראה מלא';
    }
    function captured(){   /* once per quiz: going back and forth doesn't send twice */
      try { localStorage.setItem('alm_lead', JSON.stringify(lead)); } catch(x){}
      if (LID) return;
      LID = (Date.now().toString(36) + Math.random().toString(36).slice(2, 10));
      var name = lead.name, phone = lead.phone;
      window.cvTrack && cvTrack('lead');
      hold('start').catch(function(){ direct = true; toMake({source: 'course-readiness', stage: 'lead', submitted_at: stamp(), name: name, phone: phone, summary: '📝 ליד מ' + where + ': השאיר פרטים באמצע שאלון ההתאמה\n' + name + ' · ' + phone}); });
      try { window.fbq && fbq('track', 'Lead'); } catch(x){}
      if (!QA) try { fetch(FB, {method: 'POST', headers: {'Content-Type': 'application/json'}, keepalive: true, body: JSON.stringify({id: LID, payload: {'השם שלך': name, 'טלפון': phone, form_title: 'שאלון התאמה club-vsl'}})}); } catch(x){}
    }
"""


def apply(fit):
    def R(a, b):
        nonlocal fit
        assert fit.count(a) == 1, a[:70]
        fit = fit.replace(a, b)
    R("      {k: 'עיסוק היום',",
      "      {k: 'שם', c: 'name', q: 'איך קוראים לך?', n: 'שם פרטי מספיק', t: 'שם פרטי'},\n"
      "      {k: 'וואטסאפ', c: 'phone', q: 'מה מספר הוואטסאפ שלך?', n: 'כאן נחזור אליך עם תשובה, אם יש התאמה', t: '050-0000000'},\n"
      "      {k: 'עיסוק היום',")
    R("return A.map(function(a, i){ return a ? Q[i].k", "return A.map(function(a, i){ return a && !Q[i].c ? Q[i].k")
    i0 = fit.index('    function intro(){'); i1 = fit.index('    function next(i){')
    fit = fit[:i0] + INTRO + fit[i1:]
    R("      if (!direct && !sentFull && i < N - 1) hold('update')", "      if (LID && !direct && !sentFull && i < N - 1) hold('update')")
    R("      i < N - 1 ? step(i + 1) : done();", "      i < N - 1 ? step(i + 1, Q[i].c === 'phone') : done();")
    R("'<div class=\"ls-okbar\">נרשמת, ' + esc(lead.name.split(' ')[0]) + '. עכשיו כמה שאלות כדי שנכיר אותך</div>'",
      "'<div class=\"ls-okbar\">תודה ' + esc(lead.name.split(' ')[0]) + ', עוד כמה שאלות קצרות</div>'")
    R(": '<input class=\"ls-in\" id=\"lsQT\"'",
      ": '<input class=\"ls-in\" id=\"lsQT\"' + (q.c === 'phone' ? ' type=\"tel\" inputmode=\"tel\" autocomplete=\"tel\" dir=\"ltr\" style=\"text-align:right\"' : q.c === 'name' ? ' autocomplete=\"given-name\"' : '')")
    R("        var f = $('lsQT'); if (A[i]) f.value = A[i];",
      "        var f = $('lsQT'); if (A[i]) f.value = A[i]; else if (q.c) f.value = q.c === 'name' ? (lead.name || '').split(' ')[0] : (lead.phone || '');\n"
      "        if (!q.long) f.onkeydown = function(e){ if (e.key === 'Enter') $('lsQNx').click(); };")
    R("          var v = f.value.trim().replace(/\\s+/g, ' ');\n",
      "          var v = f.value.trim().replace(/\\s+/g, ' ');\n"
      "          if (q.c){ var er = contactErr(q.c, v); if (er){ var e2 = $('lsQE'); e2.textContent = er; e2.style.display = 'block'; return; }\n"
      "            if (q.c === 'name') lead.name = v.slice(0, 60); else lead.phone = v.replace(/[^\\d+]/g, '');\n"
      "            A[i] = q.c === 'name' ? lead.name : lead.phone; if (q.c === 'phone') captured(); next(i); return; }\n")
    assert "$('lsQN')" not in fit and 'known ?' not in fit, 'leftover intro fields'
    return fit
