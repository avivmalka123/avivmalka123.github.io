/* Store Autopilot article page · mounts into <div id="sk-root"></div> (Kajabi Hero custom code) */
(function () {
  var BASE = 'https://avivmalka123.github.io/skill/';
  var ZIP = BASE + 'store-autopilot.zip';
  var root = document.getElementById('sk-root');
  if (!root) return;

  var css = `
#sk{--b:#FF4206;--ink:#141418;--mu:#5E5E68;--line:#E7E2D9;--bg:#F6F3EE;--card:#fff;--soft:#EFEAE2;font-family:Heebo,Assistant,system-ui,sans-serif;direction:rtl;text-align:right;color:var(--ink);background:var(--bg);line-height:1.75;font-size:18px}
#sk *{box-sizing:border-box}
#sk a{color:inherit}
#sk .sk-wrap{max-width:780px;margin:0 auto;padding:0 20px}
#sk .sk-hero{background:radial-gradient(900px 420px at 80% -10%,rgba(255,66,6,.45),transparent 60%),linear-gradient(160deg,#141418,#2A2420);color:#F7F4EE;padding:56px 0 46px;border-radius:0 0 32px 32px}
#sk .sk-tag{display:inline-block;background:var(--b);color:#fff;font-weight:800;font-size:14px;border-radius:999px;padding:4px 14px;margin-bottom:16px}
#sk h1{font-size:42px;line-height:1.12;margin:0 0 14px;font-weight:900;letter-spacing:-.5px;color:#fff}
#sk h1 em{font-style:normal;color:var(--b)}
#sk .sk-lead{font-size:19px;color:rgba(255,255,255,.78);margin:0 0 24px}
#sk .sk-dl{display:inline-flex;align-items:center;gap:10px;background:var(--b);color:#fff!important;text-decoration:none;font-weight:900;font-size:19px;border-radius:999px;padding:15px 28px;box-shadow:0 10px 30px rgba(255,66,6,.4);transition:transform .15s}
#sk .sk-dl:hover{transform:translateY(-2px)}
#sk .sk-note{display:block;margin-top:10px;font-size:14px;color:rgba(255,255,255,.6)}
#sk .sk-heroimg{margin-top:30px;border-radius:18px;overflow:hidden;box-shadow:0 20px 50px rgba(0,0,0,.35)}
#sk img{width:100%;display:block;border-radius:14px}
#sk h2{font-size:30px;line-height:1.2;margin:56px 0 12px;font-weight:900;letter-spacing:-.3px}
#sk h3{font-size:22px;margin:30px 0 6px;font-weight:800}
#sk p{margin:0 0 14px}
#sk .sk-fig{margin:18px 0 8px;border:1px solid var(--line);border-radius:18px;overflow:hidden;background:var(--card)}
#sk .sk-cap{font-size:13.5px;color:var(--mu);margin:6px 0 20px}
#sk .sk-num{display:inline-flex;width:32px;height:32px;border-radius:10px;background:var(--ink);color:#fff;align-items:center;justify-content:center;font-weight:900;font-size:15px;margin-inline-end:10px;vertical-align:middle}
#sk .sk-box{background:var(--card);border:1px solid var(--line);border-radius:18px;padding:18px 20px;margin:16px 0}
#sk .sk-copy{background:#16161A;color:#F3F1EC;border-radius:18px;padding:20px;margin:16px 0;font-size:17px}
#sk .sk-copy b{color:#fff}
#sk .sk-copy .sk-opts{display:flex;flex-wrap:wrap;gap:8px;margin-top:12px}
#sk .sk-copy .sk-opts span{background:rgba(255,255,255,.1);border:1px solid rgba(255,255,255,.2);border-radius:999px;padding:4px 12px;font-size:14px}
#sk .sk-cbtn{margin-top:14px;background:transparent;border:1.5px solid rgba(255,255,255,.4);color:#fff;border-radius:999px;padding:7px 16px;font-family:inherit;font-weight:700;font-size:14px;cursor:pointer}
#sk .sk-grid{display:grid;grid-template-columns:1fr 1fr;gap:14px;margin:16px 0}
#sk .sk-card{background:var(--card);border:1px solid var(--line);border-radius:16px;padding:16px}
#sk .sk-card b{display:block;font-size:17px;margin-bottom:2px}
#sk .sk-card span{font-size:15px;color:var(--mu)}
#sk .sk-steps{counter-reset:s;list-style:none;padding:0;margin:16px 0}
#sk .sk-steps li{counter-increment:s;background:var(--card);border:1px solid var(--line);border-radius:16px;padding:16px 18px 16px 18px;margin-bottom:10px;position:relative;padding-inline-start:62px}
#sk .sk-steps li:before{content:counter(s);position:absolute;right:16px;top:16px;width:32px;height:32px;border-radius:10px;background:var(--b);color:#fff;font-weight:900;display:flex;align-items:center;justify-content:center}
#sk code{background:var(--soft);border-radius:6px;padding:2px 7px;font-size:15px;direction:ltr;unicode-bidi:embed;font-family:ui-monospace,monospace}
#sk .sk-faq details{background:var(--card);border:1px solid var(--line);border-radius:14px;padding:12px 16px;margin-bottom:8px}
#sk .sk-faq summary{font-weight:800;cursor:pointer}
#sk .sk-faq p{margin:8px 0 0;color:var(--mu)}
#sk .sk-end{background:linear-gradient(160deg,#141418,#2A2420);color:#fff;border-radius:24px;padding:34px 24px;text-align:center;margin:56px 0 30px}
#sk .sk-end h2{color:#fff;margin:0 0 8px}
#sk .sk-end p{color:rgba(255,255,255,.75)}
#sk .sk-demo{font-size:12.5px;color:var(--mu)}
#sk .sk-foot{text-align:center;color:var(--mu);font-size:13px;padding:10px 0 40px}
#sk .sk-flow{display:flex;align-items:stretch;gap:8px;margin:26px 0 0;flex-wrap:wrap}
#sk .sk-flow div{flex:1;min-width:150px;background:rgba(255,255,255,.07);border:1px solid rgba(255,255,255,.16);border-radius:16px;padding:12px 14px}
#sk .sk-flow div.hot{background:rgba(255,66,6,.18);border-color:rgba(255,66,6,.7)}
#sk .sk-flow b{display:inline-flex;width:26px;height:26px;border-radius:8px;background:#fff;color:#141418;align-items:center;justify-content:center;font-weight:900;font-size:14px;margin-inline-end:8px}
#sk .sk-flow div.hot b{background:var(--b);color:#fff}
#sk .sk-flow span{font-weight:800;font-size:16px;color:#fff}
#sk .sk-flow small{display:block;margin-top:4px;font-size:13px;color:rgba(255,255,255,.62);direction:rtl}
#sk .sk-flow i{font-style:normal;align-self:center;color:rgba(255,255,255,.45);font-size:18px}
#sk .sk-claude{display:flex;gap:14px;align-items:flex-start;background:#fff;border:2px solid var(--b);border-radius:20px;padding:18px 20px;margin:34px 0 0;font-size:17.5px}
#sk .sk-claude-ic{font-size:30px;line-height:1}
@media (max-width:640px){#sk .sk-flow i{display:none}#sk .sk-flow div{min-width:100%}}
@media (max-width:640px){#sk{font-size:17px}#sk h1{font-size:31px}#sk h2{font-size:25px}#sk .sk-grid{grid-template-columns:1fr}#sk .sk-dl{font-size:17px;padding:14px 22px}}
`;

  function img(name, alt) { return '<figure class="sk-fig"><img loading="lazy" src="' + BASE + 'img/' + name + '.jpg" alt="' + alt + '"></figure>'; }
  function dl(label) { return '<a class="sk-dl" href="' + ZIP + '" download="store-autopilot.zip" data-sk-dl>⬇ ' + label + '</a>'; }

  var html = `
<div id="sk">
  <div class="sk-hero"><div class="sk-wrap">
    <span class="sk-tag">🤖 סקיל לקלוד · הורדה חינם · בלי הרשמה</span>
    <h1>מעלים לקלוד סקיל אחד, והוא בונה לחנות שלכם את <em>כל השיווק האוטומטי</em></h1>
    <p class="sk-lead">כותבים לקלוד "תבנה לי את כל האוטומציות לחנות", עונים על שש שאלות, וקלוד בונה: 8 אוטומציות במייל, בוואטסאפ וב־SMS, בוט שעונה גם בלילה, גאנט ל־90 יום עם כל החגים בישראל, ודוח בוקר לוואטסאפ שלכם.</p>
    ${dl('להורדת הסקיל בחינם')}
    <span class="sk-note">קובץ zip אחד · 58KB · בלי טופס ובלי מייל</span>
    <div class="sk-flow">
      <div><b>1</b><span>מורידים את הסקיל</span><small>קובץ אחד, בלי הרשמה</small></div>
      <i>⬅</i>
      <div class="hot"><b>2</b><span>מעלים אותו לקלוד</span><small>Settings ⬅ Skills ⬅ Upload</small></div>
      <i>⬅</i>
      <div><b>3</b><span>כותבים לקלוד משפט אחד</span><small>"תבנה לי את כל האוטומציות לחנות"</small></div>
    </div>
    <div class="sk-heroimg"><img src="${BASE}img/gantt-hero.jpg" alt="הגאנט ל־90 יום שהסקיל פותח"></div>
    <div class="sk-note">התמונות בכתבה מחנות לדוגמה</div>
  </div></div>

  <div class="sk-wrap">
    <div class="sk-claude">
      <div class="sk-claude-ic">🤖</div>
      <div><b>זה סקיל לקלוד.</b> לא תוכנה שמתקינים, ולא עוד אפליקציה. מורידים קובץ, מעלים אותו לקלוד (claude.ai), ומאותו רגע קלוד יודע לבנות לחנות שלכם את כל השיווק האוטומטי בתוך פינג. כל העבודה קורית בשיחה איתו.</div>
    </div>
    <h2>רגע, מה זה סקיל?</h2>
    <p>סקיל הוא חבילת הוראות שמלמדת את קלוד לעשות עבודה מסוימת כמו מומחה. הסקיל הזה מלמד אותו לבנות לחנות שופיפיי את כל ה"בקאנד": ההודעות שיוצאות לבד ללקוחות שכבר היו אצלכם, ומחזירות אותם לקנות.</p>
    <p>את העבודה עצמה הוא עושה בתוך <b>פינג</b>, תוכנת האוטומציות לשופיפיי שאני עובד איתה. פינג מחוברת לקלוד, אז כמעט הכול קורה מתוך השיחה, ואתם רק מאשרים.</p>

    <h2>מה הסקיל עושה, שלב אחרי שלב</h2>

    <h3><span class="sk-num">1</span>בודק כמה כסף נשאר לכם בעגלות</h3>
    <p>עוד לפני שמתקינים משהו: חמש שאלות, מבט על האתר מבחוץ, ועשר שאלות של כן ולא. יוצא ציון מתוך 100, הערכה של הכסף שנשאר בעגלות נטושות, והשוואה בשלוש שורות: כמה אתם משלמים היום, וכמה זה יעלה בפינג לאותו נפח.</p>
    ${img('check', 'בדיקת הבקאנד וההשוואה')}

    <h3><span class="sk-num">2</span>בונה 8 אוטומציות, כל אחת עם מבחן A/B</h3>
    <p>עגלה נטושה, ליד מפופאפ, מי שצפה במוצר ולא קנה, תודה אחרי קנייה, הזמנה שנייה, לקוחות שנעלמו 90 יום, מי שחזר לאתר, ו־VIP. במייל, בוואטסאפ וב־SMS, כל ערוץ בצעד שבו הוא הכי חזק. הנחות לפי סולם, ואף פעם לא מעל המקסימום שקבעתם.</p>
    ${img('flow', 'אוטומציית העגלה הנטושה')}

    <h3><span class="sk-num">3</span>מלמד את הבוט את החנות שלכם</h3>
    <p>הוא קורא את האתר וכותב 15 עובדות: משלוחים, החזרות, תשלום, מידות. אתם מאשרים או מתקנים, בשלושה סבבים של חמש. מאז הבוט עונה ללקוחות בוואטסאפ ובאתר, גם בשתיים בלילה, ורק עם עובדות שאישרתם.</p>
    ${img('bot', 'הגדרת הבוט ב־15 שאלות')}

    <h3><span class="sk-num">4</span>פותח לכם גאנט ל־90 יום עם כל החגים</h3>
    <p>בלאק פריידיי, חנוכה, ט״ו בשבט, יום המשפחה, פסח, ראש השנה. לכל אירוע ארבע שליחות: טיזר, גישה מוקדמת ל־VIP, היום עצמו, ו"היום האחרון לקבל בזמן". ימים שאסור לשווק בהם מסומנים באדום. הגאנט נפתח אצלכם במחשב, וכל נקודה בו היא שליחה מוכנה בפינג.</p>
    ${img('gantt', 'הגאנט ל־90 יום')}
    ${img('strategy', 'האסטרטגיה המלאה של המותג')}
    <p class="sk-cap">לצד הגאנט: האסטרטגיה המלאה של המותג. בקאנד, קהלים, לוח שיווק, קהלים לפרסום, בריפים לתמונות ושירות. מסומן מה כבר רץ בפינג ומה תכנית של קלוד.</p>

    <h3><span class="sk-num">5</span>דוח בוקר לוואטסאפ שלכם</h3>
    <p>כל בוקר, בשעה שתבחרו: מה החנות עשתה אתמול, כמה עגלות חזרו בזכות האוטומציות, לידים חדשים, ומי מחכה לתשובה. אתם יודעים מה קרה בחנות עוד לפני שפתחתם מחשב.</p>
    ${img('assistant', 'דוח הבוקר בוואטסאפ')}

    <h3><span class="sk-num">6</span>ועוד 5 תוספות</h3>
    <div class="sk-grid">
      <div class="sk-card"><b>💬 כפתור וואטסאפ באתר</b><span>לקוח שמתלבט כותב בלחיצה, והבוט עונה מיד</span></div>
      <div class="sk-card"><b>🎡 גלגל מזל + משלוח חינם</b><span>פופאפ שאוסף טלפונים, ופס "עוד ₪X למשלוח חינם"</span></div>
      <div class="sk-card"><b>🎁 באנדלים</b><span>לפי מה שהלקוחות שלכם כבר קונים ביחד</span></div>
      <div class="sk-card"><b>♿ נגישות</b><span>וידג'ט והצהרת נגישות. צעד ראשון, לא נגישות מלאה</span></div>
      <div class="sk-card"><b>🎂 יום הולדת</b><span>קוד שמגיע 3 ימים לפני</span></div>
      <div class="sk-card"><b>🔒 הכול נבנה כבוי</b><span>שום הודעה לא יוצאת בלי שאתם לוחצים אישור</span></div>
    </div>

    <h2>הודעה אחת שאפשר לקחת כבר היום</h2>
    <p>גם בלי הסקיל: למי שנטש עגלה לא שולחים "שכחת משהו?". הוא לא שכח, משהו עצר אותו. שואלים אותו:</p>
    <div class="sk-copy" id="sk-msg">
      <b>היי, ראיתי שלא סיימת את ההזמנה. אפשר לשאול מה עצר אותך?</b>
      <div class="sk-opts"><span>המחיר</span><span>זמן המשלוח</span><span>מידה או התאמה</span><span>משהו אחר</span></div>
      <button class="sk-cbtn" type="button" data-sk-copy>להעתקת ההודעה</button>
    </div>
    <p>מי שלוחץ "המחיר" מקבל קוד ל־24 שעות. מי שלוחץ "זמן המשלוח" מקבל תשובה מדויקת. ב"מידה" שולחים טבלת מידות ומזכירים שאפשר להחליף, וב"משהו אחר" עונה בן אדם. ככה רק מי שבאמת נתקע במחיר מקבל הנחה.</p>

    <h2>איך מתקינים (5 דקות)</h2>
    <ol class="sk-steps">
      <li><b>מורידים את הסקיל.</b> הכפתור למטה, קובץ zip אחד.</li>
      <li><b>מעלים אותו לקלוד 🤖</b> ב־claude.ai: <code>Settings ⬅ Capabilities ⬅ Skills ⬅ Upload</code>, ובוחרים את הקובץ. צריך תוכנית בתשלום של קלוד.</li>
      <li><b>מחברים את פינג לקלוד.</b> <code>Settings ⬅ Connectors ⬅ Add custom connector</code>. שם: <code>Ping</code>. כתובת: <code>https://pingai.org/api/mcp</code>. לוחצים Connect ומתחברים לחשבון של החנות. אין עדיין פינג? הסקיל ילווה אתכם בהתקנה מ־<a href="https://apps.shopify.com/ping-ai" target="_blank" rel="noopener">חנות האפליקציות של שופיפיי</a>.</li>
      <li><b>פותחים צ'אט חדש וכותבים:</b> "תבנה לי את כל האוטומציות לחנות". מכאן הסקיל מוביל אתכם.</li>
    </ol>
    <p class="sk-demo">משתמשים ב־Claude Code? מעתיקים את התיקייה <code>store-autopilot</code> אל <code>~/.claude/skills/</code>, ומוסיפים את פינג עם <code>claude mcp add --transport http ping https://pingai.org/api/mcp</code>.</p>

    <h2>שאלות נפוצות</h2>
    <div class="sk-faq">
      <details><summary>זה בטוח? מה אם משהו ישלח ללקוחות בטעות?</summary><p>הכול נבנה כבוי. אוטומציות, קמפיינים והבוט מחכים ללחיצת אישור שלכם בתוך פינג. לפני שמשהו מגיע ללקוחות, תראו תצוגה מקדימה.</p></details>
      <details><summary>כמה זה עולה?</summary><p>הסקיל חינם. פינג מתחילה במסלול חינמי, שבו רצות עד 3 אוטומציות במקביל. המסלולים בתשלום מתחילים ב־$20 לחודש, לפי חנות האפליקציות של שופיפיי. הסקיל מראה לכם השוואה מול מה שאתם משלמים היום, עוד לפני שמתקינים.</p></details>
      <details><summary>אני כבר עם מערכת דיוור אחרת. מה קורה עם אנשי הקשר?</summary><p>הסקיל מלווה אתכם להעביר את כולם לפינג, כולל מי שהסיר את עצמו, כדי שהוא לא יקבל מיילים. את המערכת הקודמת לא מבטלים עד שרואים שבוע של תוצאות.</p></details>
      <details><summary>הסקיל עובד גם עם תוכנות אחרות?</summary><p>לא. הוא נבנה לפינג בלבד.</p></details>
      <details><summary>אין לי וואטסאפ עסקי רשמי.</summary><p>אפשר להתחיל בלעדיו. בחנות עם מעט הודעות אפשר לחבר מספר רגיל בסריקת QR, ואם אין וואטסאפ בכלל, SMS נכנס במקומו בצעדים החשובים.</p></details>
      <details><summary>מה עם החגים והשבת?</summary><p>הגאנט כולל את כל החגים בישראל, ובימים כמו יום כיפור ויום הזיכרון לא יוצאת שום הודעה שיווקית. פינג לא שולחת הודעות בשבת.</p></details>
    </div>

    <div class="sk-end">
      <h2>מוכנים?</h2>
      <p>משפט אחד, שש שאלות, וכל הבקאנד של החנות בנוי.</p>
      ${dl('להורדת הסקיל בחינם')}
    </div>
    <div class="sk-foot">אביב מלכה · מועדון האיקומרס · הסקיל עובד עם פינג, תוכנת האוטומציות שאני עובד איתה</div>
  </div>
</div>`;

  var st = document.createElement('style'); st.textContent = css; document.head.appendChild(st);
  if (!document.querySelector('link[href*="Heebo"]')) {
    var f = document.createElement('link'); f.rel = 'stylesheet';
    f.href = 'https://fonts.googleapis.com/css2?family=Heebo:wght@400;500;700;800;900&display=swap';
    document.head.appendChild(f);
  }
  root.innerHTML = html;

  root.addEventListener('click', function (e) {
    var d = e.target.closest('[data-sk-dl]');
    if (d && window.fbq) { try { fbq('trackCustom', 'SkillDownload'); } catch (x) {} }
    var c = e.target.closest('[data-sk-copy]');
    if (c) {
      var t = 'היי, ראיתי שלא סיימת את ההזמנה. אפשר לשאול מה עצר אותך?\n1. המחיר\n2. זמן המשלוח\n3. מידה או התאמה\n4. משהו אחר';
      (navigator.clipboard ? navigator.clipboard.writeText(t) : Promise.reject()).then(function () { c.textContent = '✓ הועתק'; }, function () { c.textContent = 'סמנו והעתיקו את הטקסט'; });
    }
  });
})();
