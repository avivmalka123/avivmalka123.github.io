# המלך של הבקנד — landing page brief (11.11.2026)

## Who / what
Aviv Malka (Israel), 15 years in ecommerce. His agency **"המלך של הבקנד"** builds the whole "backend" of online stores:
email marketing, SMS, WhatsApp automations (flows), segmentation, pop-ups, and an AI customer-service agent that is synced with the automations.

**The offer (irresistible):** Aviv builds all the automations. The store pays NOTHING for the first month.
Target: at least 15% additional revenue on the store's existing turnover, from automations alone (no extra ad spend).
After 30 days they look at the numbers together; the store decides whether to continue (paid). From there the goal is much higher growth.
Why he can do it: he proves results before he charges. Today he manages sites and brands doing millions of dollars.

**Qualification:** stores doing at least ~5,000–10,000 ₪ a month. Everyone else is not a fit (yet).

**Goal of the page:** the visitor fills a short questionnaire (revenue last 30 days + 3 more) and leaves name + phone, OR taps WhatsApp to Aviv directly.

## Audience
Israeli ecommerce store owners (mostly Shopify, some WooCommerce) who already sell, already have customers and often already pay for a mailing system (email/SMS) but barely use it: one promo a month, no flows, pop-up leads that never get a message, customers who bought once and never came back.
Tone: confident, premium, direct, warm. First person singular for Aviv ("אני"), plural "אתם" for the visitor. Short sentences. Zero hype words like "מהפכני". Never mention any competitor/tool brand by name (no Klaviyo, Flashy, Postscript, Ping etc.).

## Design reference
https://yasminuh.co.il/ — screenshots in `king/ref/` (ref_1..6.jpg). What it does well: deep navy (#06143D / #011341) + warm cream (#F5EBE4 / #FBFAF8) + gold (#B39063), big confident Hebrew headlines with one line in gold, 3D gold chess pieces, curved section dividers, generous whitespace, pill buttons (navy filled + outlined), small stat cards, case-study cards, numbered 90-day timeline, about section, FAQ, multi-step questionnaire in a modal, floating WhatsApp pill bottom-left.
We want THAT level of premium — and stronger: more proof, more motion, more conversion.

## Assets (all in king/img/, use relative paths `img/...`)
- `king.jpg` — 3D gold king chess piece on deep navy (3:4). Hero art / brand symbol.
- `engine.jpg` — gold king with orbiting glass icons (email, chat, message, cart, coin) on navy (1:1). For the "what I build" section.
- `fall.jpg` — gold chess pieces tumbling on cream background (4:3), empty space on the right. For a cream section.
- `aviv_round.jpg` — Aviv's real portrait (480×480, already circle-cropped on black corners → display it in a circle).
- Proof screenshots (REAL — never edit or retouch the numbers, never fake new ones):
  - `p_19m.jpg` — his Shopify store analytics: Total sales $19,590,724.23 (Nov 2016 – Nov 2024).
  - `p_total_num.jpg` — small crop: "Total sales over time US$20,645,265.27" (Oct 2016 – Oct 2026).
  - `p_orders_row.jpg` — same store: conversion 1.09%, Orders 370,392, average order value US$52.48.
  - `p_sessions.jpg` — same store: Sessions 6,910,768.
  - `p_sms.jpg` — his text-message (SMS) platform: Total Earned $1,268,777.46, Total Subscribers 91,640.
Facts you may state: 15 שנה באיקומרס · מעל 20 מיליון דולר מכירות בחנות שלו · 370,392 הזמנות · 1.27 מיליון דולר מהודעות טקסט בלבד, מתוך 91,640 נרשמים · מנהל היום אתרים ומותגים של מיליוני דולרים.
Illustrative numbers must be labelled "להמחשה".

## Contacts / tech
- WhatsApp direct: `https://wa.me/972525535537?text=` + encodeURIComponent("היי אביב, הגעתי מהדף של המלך של הבקנד. יש לי חנות איקומרס ואני רוצה לשמוע על החודש הראשון בחינם")
- Form submit: POST JSON to `https://hook.eu2.make.com/aos52nvubr4hbal7r1a9a9i7tvfjqcny` with
  `{source:'backend-king', submitted_at, name, phone, site, answers:[{q,a}], fit:true|false, summary}` (fetch, keepalive, then show thank-you even if the request fails; 2.5 s fallback).
  `summary` is the WhatsApp text Aviv receives, exactly:
  ```
  👑 ליד חדש מהדף "המלך של הבקנד"
  {name} · {phone}
  אתר: {site or "לא צוין"}

  מחזור 30 יום: …
  פלטפורמה: …
  פועל היום: …
  גודל הרשימה: …

  ✅ מעל הרף (5,000 ₪+)   |   ⚠️ מתחת לרף של 5,000 ₪
  ```
- Phone validation: Israeli mobile `^(\+?972|0)5\d{8}$` after stripping non-digits/+.
- The page will be embedded in Kajabi through one Custom Code block (a build script scopes all CSS under `#kb` and injects the markup). So:
  - Build it as ONE file `king/<your-dir>/index.html` with a single `<style>` in head, markup in body, and ONE `<script>` at the end wrapped in an IIFE `(function(){ ... })();`.
  - Do NOT use these class names (Kajabi CSS hides/overrides them): `modal`, `hidden`, `container`, `row`, `col-*`, `btn`, `section`, `hero`, `header`, `footer`. Prefix every class with `kb-`.
  - All ids prefixed `kb`. No external JS libraries. Fonts: Google Fonts allowed (load via `<link>` in head). Hebrew-capable only (e.g. Frank Ruhl Libre / Noto Serif Hebrew / David Libre for display, Heebo / Assistant / Rubik for body).
  - `dir="rtl"` root, everything right-aligned unless centered on purpose.
  - Mobile first: 375–430 px is where 80% of the traffic is. No horizontal scroll, ≥16 px body text, tap targets ≥44 px. Must also look superb at 1440 px.
  - Images `loading="lazy"` except the hero. Respect `prefers-reduced-motion`.
  - Sticky bottom CTA bar on mobile after the hero (button + WhatsApp icon). Floating WhatsApp pill on desktop.
  - Every CTA opens the questionnaire modal (class `kb-qm`, not "modal"). Esc/back/✕ closes; answers persist if reopened.

## Page copy (Hebrew — use it, polish only if you keep the meaning; keep facts exact)

### 1. Top bar
Logo text: "👑 המלך של הבקנד" (or a crown mark + text) · small "אביב מלכה" · right/left: button "בדיקת התאמה".

### 2. Hero
- Kicker (pill): "לחנויות אונליין שמוכרות 5,000 ₪ ומעלה בחודש"
- H1 line 1: "החודש הראשון עליי."
- H1 line 2 (gold): "אני בונה לכם את כל הבקנד, ואתם רואים את הכסף לפני שאתם משלמים."
- Sub: "מייל, סמס ווואטסאפ שעובדים לבד, ושירות לקוחות בבינה מלאכותית שמחובר אליהם. המטרה: לפחות 15% הכנסה נוספת על המחזור שכבר יש לכם, בלי להוסיף שקל לפרסום."
- 3 ticks: "בלי לשלם על החודש הראשון" · "בלי להגדיל תקציב פרסום" · "בלי להחליף את החנות או את המערכות"
- Primary CTA: "בודקים אם החנות מתאימה ←" + micro "4 שאלות קצרות · פחות מדקה"
- Secondary: "מעדיפים וואטסאפ? דברו איתי ישירות"
- Stat cards: "מעל 20 מיליון דולר | מכירות בחנות שאני מנהל" · "1.27 מיליון דולר | מהודעות טקסט בלבד" · "15 שנה | באיקומרס"
- Visual: king.jpg + Aviv's round portrait + 1–2 floating real proof chips (p_total_num / p_sms).

### 3. Proof strip (marquee or row of real screenshots with captions)
Caption above: "לא סיפורים. מסכים אמיתיים."

### 4. The leak (cream section)
- H2: "הכסף שאתם מחפשים" / gold: "כבר נמצא אצלכם בחנות."
- P: "רוב החנויות שאני פוגש משלמות מאות דולרים בחודש על מערכת דיוור, ושולחות ממנה מבצע אחד בחודש. בינתיים, הכסף נוזל מכל פינה:"
- 6 leak cards (icon + title + one line):
  1. "עגלות נטושות" — "7 מתוך 10 עגלות ננטשות, ורובן לא מקבלות אפילו תזכורת אחת."
  2. "גולשים שנעלמו" — "מישהו הסתכל על מוצר שלוש פעמים, ואף אחד לא דיבר איתו."
  3. "נרשמים ששותקים" — "השאירו פרטים בפופאפ, ומאז לא קיבלו מכם כלום."
  4. "לקוחות של פעם אחת" — "קנו, היו מרוצים, ופשוט שכחו מכם."
  5. "לקוחות טובים במבצע של כולם" — "הלקוחות הכי שווים שלכם מקבלים את אותה הודעה כמו כל השאר."
  6. "שאלות בלי תשובה" — "לקוח שאל בצ'אט באחת בלילה, ועד הבוקר כבר קנה במקום אחר."
- Closing line (big): "אתם לא צריכים עוד תנועה. אתם צריכים להפסיק לאבד את מי שכבר הגיע."
- CTA.

### 5. Why the backend wins (navy section)
- H2: "פרסום מביא לקוח פעם אחת." / gold: "הבקנד מביא אותו שוב ושוב."
- P: "על כל לקוח מפרסום אתם משלמים. על הודעה ללקוח שכבר קנה, כמעט כלום. לכן הכסף הכי רווחי בחנות לא מגיע מהקמפיין הבא, הוא מגיע מהלקוחות שכבר יש לכם."
- Interactive calculator: slider "המחזור החודשי שלכם" 5,000 ₪ → 1,000,000 ₪ (default 100,000) → shows "+15% =" monthly extra and yearly extra (×12), animated count-up. Label "להמחשה. המטרה היא לפחות 15%, התוצאה תלויה בחנות."
- CTA "בואו נבדוק כמה זה אצלכם ←"

### 6. What I build (use engine.jpg)
- H2: "מה אני בונה לכם" / gold: "מערכת אחת שעובדת 24/7."
- 4 big cards:
  - "מייל" — סדרת ברוכים הבאים · נטישת עגלה · נטישת גלישה · אחרי רכישה ובקשת ביקורת · החזרת לקוחות רדומים · חזר למלאי · יום הולדת
  - "סמס" — מבצעים מהירים · השקות · תזכורות דחופות · קודי הנחה
  - "וואטסאפ" — הודעות אישיות · תזכורת לעגלה · תודה אחרי קנייה · מענה לשאלות
  - "שירות לקוחות בבינה מלאכותית" — עונה באתר ובוואטסאפ גם באחת בלילה, מחובר לאוטומציות, ונציג אנושי נכנס כשצריך
- Plus 2 small: "פילוח חכם" (לפי מה קנו, כמה ומתי) · "פופאפים שאוספים נרשמים"
- Optional animated flow line: "לקוח השאיר עגלה → אחרי שעה וואטסאפ → אחרי יום מייל → קנה → תודה + בקשת ביקורת".

### 7. The offer (the core — make it feel like a gift card / certificate)
- H2: "הצעה שאין סיבה לסרב לה."
- 3 numbered steps (timeline):
  01 "שיחת היכרות ובדיקה" — "אני עובר על החנות, על הרשימה ועל מה שכבר קיים, ומראה לכם איפה הכסף נוזל."
  02 "בונה ומעלה לאוויר" — "בונה את כל האוטומציות בשלושת הערוצים ואת שירות הלקוחות בבינה מלאכותית. אתם לא נוגעים בכלום."
  03 "יום 30: מסתכלים על המספרים" — "בודקים יחד את ההכנסה הנוספת. ראיתם לפחות 15%? ממשיכים לשלב הבא. לא ראיתם? לא שילמתם שקל."
- Certificate box: "החודש הראשון עליי." / "למה? כי אני מוכיח תוצאות לפני שאני גובה. ככה אני עובד היום עם אתרים ומותגים של מיליוני דולרים."
- After it: "ואחרי החודש הראשון? שם מתחילים באמת לגדול. יש עוד הרבה מעבר לאוטומציות הראשונות."
- CTA.

### 8. About (cream; aviv_round.jpg)
- H2: "נעים להכיר, אני אביב מלכה"
- P1: "15 שנה אני בונה ומנהל חנויות אונליין. בחנות שאני מנהל עברנו את ה־20 מיליון דולר במכירות, עם יותר מ־370 אלף הזמנות."
- P2: "את רוב הכסף הזה לא הביא הקמפיין הבא. הביאו אותו הלקוחות שחזרו: מיילים, סמסים ווואטסאפ שעבדו בשבילנו כל יום. מהודעות טקסט בלבד הכנסנו 1.27 מיליון דולר."
- P3: "בגלל זה קוראים לי המלך של הבקנד. היום אני מנהל אתרים ומותגים של מיליוני דולרים, ובונה את אותו המנוע גם לחנויות שרוצות לגדול."
- 3 mini stats again or badges.

### 9. Proof wall (navy) — all screenshots with captions, tap to enlarge (lightbox)
- "סך המכירות בחנות: 20,645,265 דולר (10 שנים)" → p_total_num.jpg
- "סך המכירות 2016–2024: 19,590,724 דולר" → p_19m.jpg
- "370,392 הזמנות, ערך הזמנה ממוצע 52.48 דולר" → p_orders_row.jpg
- "6.9 מיליון ביקורים" → p_sessions.jpg
- "1,268,777 דולר מהודעות טקסט, 91,640 נרשמים" → p_sms.jpg

### 10. Fit / not fit (two columns)
- מתאים: "החנות מוכרת 5,000 ₪ ומעלה בחודש" · "יש לכם לקוחות ונרשמים, גם אם הרשימה קטנה" · "שופיפיי, ווקומרס או פלטפורמה דומה" · "אתם רוצים לגדול בלי להגדיל את הפרסום"
- לא מתאים: "חנות שעוד לא מכרה" · "מי שמחפש קסם בלי לתת גישה לחנות" · "מי שרוצה רק עוד קמפיין בפייסבוק"

### 11. FAQ (accordion)
1. "כמה זה עולה אחרי החודש הראשון?" — "זה נקבע לפי גודל החנות ומה שבונים. אנחנו מדברים על זה רק אחרי שראיתם את המספרים."
2. "איך מודדים את ה־15%?" — "משווים את ההכנסות מהאוטומציות ומהערוצים לפני ואחרי, לפי הדוחות בחנות ובמערכת הדיוור. הכול שקוף ואתם רואים הכול."
3. "כבר יש לי מערכת דיוור. צריך להחליף?" — "לא בהכרח. ברוב המקרים עובדים עם מה שיש, ורק מתחילים להשתמש בה באמת."
4. "אין לי שום מערכת. זה מתאים?" — "כן. מקימים מאפס ובוחרים יחד מערכת שמתאימה לגודל החנות."
5. "מה צריך ממני?" — "גישה לחנות ולמערכות, ושיחת היכרות של חצי שעה. את השאר אני עושה."
6. "תוך כמה זמן זה באוויר?" — "רוב האוטומציות עולות כבר בשבועיים הראשונים."
7. "מה זה שירות לקוחות בבינה מלאכותית?" — "עוזר שעונה ללקוחות באתר ובוואטסאפ על מוצרים והזמנות, מכל שעה, מחובר לאוטומציות. כשצריך, אתם או הצוות שלכם נכנסים לשיחה."
8. "יש התחייבות?" — "לא. החודש הראשון בלי התחייבות ובלי תשלום."

### 12. Final CTA (navy, king.jpg)
- H2: "החודש הראשון עליי." / gold: "השאלה היחידה היא אם החנות שלכם מתאימה."
- CTA "בודקים התאמה ←" + WhatsApp button "וואטסאפ ישיר לאביב"
- Tiny: "מספר המקומות בחודש מוגבל, כי אני בונה כל מערכת בעצמי." (OK to keep)

### Questionnaire modal (4 questions → details → thank-you), progress bar, auto-advance on single choice
- Q1 "כמה החנות מכרה ב־30 הימים האחרונים?" — "פחות מ־5,000 ₪" · "5,000–10,000 ₪" · "10,000–30,000 ₪" · "30,000–100,000 ₪" · "100,000–500,000 ₪" · "מעל 500,000 ₪"
- Q2 "על איזו פלטפורמה החנות?" — "שופיפיי" · "ווקומרס" · "אחרת"
- Q3 "מה פועל אצלכם היום?" (multi + "המשך") — "מערכת דיוור במייל" · "סמס" · "וואטסאפ" · "שירות לקוחות בצ'אט" · "עדיין כלום"
- Q4 "כמה לקוחות ונרשמים יש לכם ברשימה?" — "פחות מ־1,000" · "1,000–5,000" · "5,000–20,000" · "מעל 20,000" · "לא יודע/ת"
- Details: title "לאן לחזור אליכם?" — שם מלא · מספר נייד · כתובת האתר (לא חובה). Button "שליחה לאביב ←". Under: "🔒 הפרטים נשארים אצלי. בלי ספאם." and "בשליחה אני מאשר/ת שאביב יחזור אליי."
- Thank-you: "קיבלתי, {first name}! 👑" / "אני עובר אישית על כל פנייה, ואחזור אליכם בהקדם." + button "רוצים לדבר כבר עכשיו? וואטסאפ ←". If Q1 = "פחות מ־5,000 ₪": add a soft line "ההצעה הזאת בנויה לחנויות שכבר מוכרות 5,000 ₪ בחודש, אבל שמרתי את הפרטים ואחזור אליכם."

## Quality bar
Premium agency level (think the reference, Stripe-like polish, Apple-like motion restraint). Real depth: layered gradients, subtle grain, gold hairlines, soft shadows, reveal-on-scroll, count-up numbers, marquee. Typography is the hero: large display serif for headlines, tight leading, one gold line per headline. Mobile must feel as designed as desktop, not squeezed.
Hebrew must be flawless (no broken bidi: wrap numbers/$ amounts in `<bdi>` or use "דולר"/"₪" text; check punctuation at line ends).
