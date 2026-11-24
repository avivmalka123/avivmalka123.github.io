# Aviv 24.11.2026: score every finished quiz as hot / warm / cold and show a different end screen.
#   hot  -> Aviv's own booking page https://aviv.webi-web.com/book (opens in a new tab)
#   warm -> content (the VSL, member stories, the free webinar) + WhatsApp, a rep calls back
#   cold -> free content (free course, webinar), no Zoom
# The group message starts with 🔥 / 🟡 / ⚪ so reps call the hot ones first.
# Live only when cfg.json "tiers": true, or on the page with ?cal=1 (for testing before launch).

CSS = r'''
/* ===== quiz tiers (24.11) ===== */
.tz-sub{color:#5b5446;font-size:15.5px;margin:0 0 14px;text-align:center}
.tz-cards{display:grid;gap:10px;margin:0 0 16px;text-align:right}
.tz-card{display:flex;align-items:center;gap:12px;border:1.5px solid #E4DCCB;background:#FBFAF6;border-radius:14px;padding:14px 15px;text-decoration:none;color:#0A1428;cursor:pointer;width:100%;text-align:right;font-family:inherit}
.tz-card:hover{border-color:var(--amb)}
.tz-card i{flex:0 0 34px;height:34px;border-radius:50%;background:var(--amb);color:#0A1428;font-style:normal;font-weight:900;display:grid;place-items:center;font-size:15px}
.tz-card span{display:block;min-width:0}
.tz-card b{display:block;font-size:16.5px;line-height:1.3}
.tz-card small{display:block;color:#6b6253;font-size:14px;margin-top:2px;line-height:1.4}
.tz-link{display:block;text-align:center;color:#6b6253;font-size:14.5px;margin-top:12px;text-decoration:underline}
.tz-sub{color:#3d372c !important}
.ls-res .tz-p{color:#3d372c;font-size:16.5px;line-height:1.55;margin:0 auto 16px;max-width:520px;background:none;padding:0}
'''

FUNCS = r'''
    /* ===== hot / warm / cold (Aviv 24.11) ===== */
    var TIERS = !!CFG.TIERS || /[?&]cal=1\b/.test(location.search);
    var BOOK = 'https://aviv.webi-web.com/book';
    function ans(k){
      for (var i = 0; i < N; i++) if (Q[i].k === k){
        var q = Q[i]; if (!q.o || !A[i]) return -1;
        for (var j = 0; j < q.o.length; j++) if (A[i].indexOf(q.o[j][1]) === 0) return j;
        return -1;
      }
      return -1;
    }
    function tierOf(){
      var age = ans('גיל'), bud = ans('תקציב'), biz = ans('עסק אמיתי'), dec = ans('מי מחליט'), rdy = ans('מוכנות'), zm = ans('שיחת זום'),
          tm = ans('זמן בשבוע'), why = ans('למה עכשיו'), nch = ans('אם כלום לא ישתנה');
      var cold = [];
      if (age === 0) cold.push('מתחת ל־18');
      if (bud === 5) cold.push('אין תקציב פנוי');
      if (biz === 2) cold.push('חיפש משהו בלי השקעה');
      if (dec === 3) cold.push('ההחלטה לא בידיים שלו');
      if (rdy === 3) cold.push('רק בודק');
      if (zm === 2) cold.push('לא בטוח שרוצה שיחה');
      if (cold.length) return {t: 'cold', label: 'ליד קר', line: '⚪ ליד קר (' + cold.join(', ') + '): קיבל תוכן חינמי, בלי זום'};
      var miss = [];
      if (!(bud >= 1 && bud <= 4)) miss.push('תקציב עד 5,000');
      if (!(rdy === 0 || rdy === 1)) miss.push('מוכנות 50%');
      if (!(zm === 0 || zm === 1)) miss.push('זום');
      if (!(dec === 0 || dec === 1)) miss.push('תלוי גם במישהו נוסף');
      if (!(tm >= 1)) miss.push('פחות מ־5 שעות בשבוע');
      if (why === 4 || why < 0) miss.push('אין סיבה מיוחדת עכשיו');
      if (nch === 4 || nch < 0) miss.push('סבבה לו גם עכשיו');
      if (!(biz === 0 || biz === 1)) miss.push('עסק אמיתי');
      if (!miss.length) return {t: 'hot', label: 'ליד חם', line: '🔥 ליד חם: קיבל את דף קביעת הפגישה'};
      return {t: 'warm', label: 'ליד פושר', line: '🟡 ליד פושר (' + miss.join(', ') + '): קיבל תכנים, צריך שנציג יחזור אליו'};
    }
    function goTo(sel){ closeQuiz(); var el = document.querySelector(sel); if (el) setTimeout(function(){ el.scrollIntoView({behavior: 'smooth', block: 'start'}); }, 80); }
    function card(n, title, sub, attrs){ return '<' + (attrs.href ? 'a' : 'button type="button"') + ' class="tz-card"' + (attrs.href ? ' href="' + attrs.href + '" target="_blank" rel="noopener"' : '') + (attrs.go ? ' data-go="' + attrs.go + '"' : '') + '><i>' + n + '</i><span><b>' + title + '</b><small>' + sub + '</small></span></' + (attrs.href ? 'a' : 'button') + '>'; }
    function wireCards(){ [].forEach.call(box.querySelectorAll('[data-go]'), function(b){ b.onclick = function(){ goTo(b.getAttribute('data-go')); }; }); }
    function tierScreen(TR, name, phone){
      var first = esc(name.split(' ')[0]);
      window.cvTrack && cvTrack('tier', null, TR.t);
      var REF = '?ref=club-vsl-' + TR.t;
      if (TR.t === 'cold'){
        box.innerHTML = '<div class="ls-res"><p class="lab">השאלון התקבל</p><h3>תודה ' + first + ', קיבלנו את התשובות</h3>' +
          '<p class="tz-p">לפי מה שענית, כרגע עוד מוקדם לשיחת התאמה למועדון. כדי שתתחיל נכון, הכנו לך דרך חינמית להבין את התחום לעומק, צעד אחר צעד.</p>' +
          '<div class="tz-cards">' + card(1, 'הקורס החינמי', '5 שיעורים קצרים: איך עובדת חנות אונליין מאפס', {href: 'https://www.avivmalka.com/course-hadira' + REF}) +
          card(2, 'הוובינר החינמי הקרוב', 'בשידור חי בזום, עם שאלות ותשובות', {href: 'https://www.avivmalka.com/webinar-live' + REF}) + '</div></div>';
      } else if (TR.t === 'warm'){
        box.innerHTML = '<div class="ls-res"><p class="lab">השאלון התקבל</p><h3>תודה ' + first + ', קיבלנו את התשובות</h3>' +
          '<p class="tz-p">מישהו מהצוות יעבור על התשובות שלך ויחזור אליך בוואטסאפ. בינתיים, אלה הדברים ששווה לראות לפני השיחה:</p>' +
          '<div class="tz-cards">' + card(1, 'הסרטון המלא', 'איך עובד המועדון ומה עושים בו בפועל, 17 דקות', {go: '#cvVsl'}) +
          card(2, 'סיפורים של חברי המועדון', 'אנשים שהתחילו מאותה נקודה שלך', {go: '#voices'}) +
          card(3, 'הוובינר החינמי הקרוב', 'בשידור חי בזום, עם שאלות ותשובות', {href: 'https://www.avivmalka.com/webinar-live' + REF}) + '</div>' +
          '<a class="ls-btn wa" href="' + WA + '" target="_blank" rel="noopener">רוצה לדבר כבר עכשיו? שלח הודעה</a></div>';
        wireCards();
      } else {
        box.innerHTML = '<div class="ls-res"><p class="lab">עברת לשלב הבא</p><h3>' + first + ', בוא נקבע את שיחת ההתאמה</h3>' +
          '<p class="tz-sub">לפי התשובות שלך, יש התאמה לשלב הבא: שיחת התאמה אישית, בלי עלות ובלי התחייבות. בוחרים יום ושעה שנוחים לך, וזהו.</p>' +
          '<a class="ls-btn" id="tzBook" href="' + BOOK + '" target="_blank" rel="noopener">לבחירת יום ושעה לשיחה</a>' +
          '<a class="tz-link" href="' + WA + '" target="_blank" rel="noopener">אף שעה לא מתאימה? כתוב לנו בוואטסאפ</a></div>';
        $('tzBook').onclick = function(){ window.cvTrack && cvTrack('book'); };
      }
      box.scrollIntoView({block: 'start', behavior: 'smooth'});
    }
'''


def apply(fit):
    def R(a, b, n=1):
        nonlocal fit
        assert fit.count(a) == n, (fit.count(a), a[:80])
        fit = fit.replace(a, b)
    R("    function done(){\n", FUNCS + "    function done(){\n")
    R("      var summary = 'שאלון התאמה למועדון, ' + where",
      "      var TR = TIERS ? tierOf() : null;\n      var summary = (TR ? TR.line + '\\n\\n' : '') + 'שאלון התאמה למועדון, ' + where")
    R("profile: 'בדיקת התאמה'", "profile: TR ? TR.label : 'בדיקת התאמה'", 2)
    R("      box.innerHTML = '<div class=\"ls-res\"><p class=\"lab\">השאלון התקבל</p>' +\n        '<h3>תודה '",
      "      if (TR){ tierScreen(TR, name, phone); return; }\n      box.innerHTML = '<div class=\"ls-res\"><p class=\"lab\">השאלון התקבל</p>' +\n        '<h3>תודה '")
    return fit
