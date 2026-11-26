"""club-vsl v2: the agency design (src/page.html, Cope Media) + our working parts:
hinam1 fit quiz (lead-hold -> Make 9966621, fbq Lead), Vidalytics VSL (no autoplay), real videos/screenshots.
Writes clubvsl/index.html (standalone preview) and clubvsl/cv.js (Kajabi loader target)."""
import os, re, json, html as H
R = os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__)))) + '/'
GH = 'https://avivmalka123.github.io/'
s = open(R + 'clubvsl/src/page.html', encoding='utf-8').read()
lb = open(R + 'course/src/lesson_block.html', encoding='utf-8').read()
CFGJ = json.load(open(R + 'clubvsl/src/cfg.json', encoding='utf-8'))


def rep(old, new, count=1):
    global s
    assert old in s, ('missing: ' + old[:90])
    s = s.replace(old, new, count)


# ---- copy fixes (rules: no mentor claims, exact quotes, one consistent sales number) ----
rep('<b>שיטה, ומישהו שלא נותן לו ליפול.</b>', '<b>שיטה, וקהילה שלא נותנת לו ליפול.</b>')
rep('<div class="stat"><b data-count="19">19</b><span>מיליון דולר במכירות</span></div>',
    '<div class="stat"><b data-count="20.6">20.6</b><span>מיליון דולר מחזור, בחנות שלי</span></div>')
rep('<b>15 שנה באיקומרס. יותר מ־19 מיליון דולר במכירות.</b>', '<b>15 שנה באיקומרס. מחזור של 20.6 מיליון דולר בחנות אחת שלי.</b>')
rep('<p class="quote">בזמן של אזעקות במדינה, גם אצלי נשמעות אזעקות של הזמנות.</p>',
    '<p class="quote">בזמן של אזעקות במדינה, גם אצלי נשמעות של הזמנות 😅</p>')
# ---- hero hook (Aviv 18.11 night, both versions): no orange top bar / eyebrow, his new hook ----
s, k1 = re.subn(r'<div class="topbar">.*?</div>\n', '', s, count=1)
s, k2 = re.subn(r'    <p class="eyebrow rv">.*?</p>\n', '', s, count=1)
s, k3 = re.subn(r'    <h1 class="rv">.*?</h1>\n', '    <h1 class="rv hook">איך בונים חנות אונליין בעזרת AI, עם יעד של <span class="amb">5,000 ₪ רווח נוסף בחודש</span>, בלי לעזוב את העבודה!</h1>\n', s, count=1, flags=re.S)
s, k4 = re.subn(r'    <p class="sub rv">.*?</p>\n', '    <p class="sub rv">השיטה של אביב מלכה לבניית עסק איקומרס משלכם, עם כלי AI שמקצרים את העבודה וליווי אישי בכל שלב, <b>גם אם אתם מתחילים מאפס.</b></p>\n', s, count=1, flags=re.S)
assert (k1, k2, k3, k4) == (1, 1, 1, 1), (k1, k2, k3, k4)

# ---- "תקשיבו למי שכבר עשה את זה!" (Aviv 18.11): student videos right under the hero button, text on top, one by one on mobile ----
VOICES = [
    ('roy', '₪118,000', 'בחצי שנה', 'רואי', '10:28'),
    ('maayan', '832 הזמנות', 'ב־8 חודשים, לצד העבודה', 'מעיין · שכיר ואבא לארבעה', '4:24'),
    ('nivin', '₪27,000', 'ב־3 החודשים הראשונים', 'ניבין · מורה', '6:27'),
    ('sooner', '"הלוואי שהייתי מתחיל קודם"', '', 'תלמיד במועדון', '3:59'),
    ('home', '"עשיתי את זה מהבית"', '', 'תלמידים מספרים', '2:14'),
    ('diff', 'מה עשה את ההבדל', '', 'תלמידים מספרים', '4:53'),
    ('dina', 'פי 7.32', 'החזר על הפרסום', 'דינה · "עלה לי הדופק"', '0:10'),
    ('gennady', 'גנדי מספר', '', 'גנדי · ₪22,185 ב־26 ימים', '1:46'),
]
PLAY = '<span class="play"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M7 4.500v15l13-7.500z"/></svg></span>'
cards = ''.join(
    '<article class="vt-card"><div class="vt-top"><b' + (' class="q"' if big.startswith('"') else '') + '>' + big + '</b>' + ('<em>' + sub + '</em>' if sub else '') + '<span>' + who + '</span></div>'
    + ('<button class="vph r916 tp" type="button" data-video="' + k + '" aria-label="נגן את הסרטון: ' + who + '"><span class="ph-in"><span class="tpq">' + big.strip('"') + '</span>' + PLAY + '<span class="tpw">מועדון האיקומרס · תלמידים מספרים</span></span><span class="dur">' + dur + '</span></button></article>'
     if k == 'diff' else   # Aviv: Roi is already the first video, so this one gets a text cover instead of his face
     '<button class="vph r916" type="button" data-video="' + k + '" style="--poster:url(' + CFGJ['reels'][k]['poster'] + ')" aria-label="נגן את הסרטון: ' + who + '"><span class="ph-in">' + PLAY + '</span><span class="dur">' + dur + '</span></button></article>')
    for k, big, sub, who, dur in VOICES)
voices = ('\n    <div class="vt rv" id="voices"><h2 class="vt-h">תקשיבו למי שכבר <span class="amb">עשה את זה!</span></h2>'
          '<div class="vt-feed" id="vtFeed">' + cards + '</div><div id="vtMore" class="vt-more" aria-hidden="true"></div></div>\n')
h0 = s.index('<p class="cta-sub">2 דקות', s.index('<div class="cta-wrap rv">'))
h1 = s.index('</div>', h0) + len('</div>')
s = s[:h1] + voices + s[h1:]
# the old reels row lower in the proof section moves up here
r0 = s.index('    <div class="reels" id="reels">')
r1 = s.index('    <div class="stories">')
s = s[:r0] + s[r1:]
s = s.replace('href="#reels"', 'href="#voices"')

# club parts: what Aviv says in the VSL itself
p0 = s.index('<div class="parts">')
p1 = s.index('\n    <div class="tour">')
parts_old = s[p0:p1]
ics = re.findall(r'<span class="ic">(.*?)</span><div>', parts_old, re.S)
assert len(ics) == 5


def P(ic, h, p, me=''):
    return '<div class="part' + me + ' rv"><span class="ic">' + ic + '</span><div><h3>' + h + '</h3><p>' + p + '</p></div></div>'


parts_new = ('<div class="parts">\n      ' + '\n      '.join([
    P(ics[0], 'הכשרה מסודרת, צעד אחרי צעד', 'מעל 100 שעות תוכן, וספריית הזהב: כל ההקלטות מספטמבר 2024 ועד היום.'),
    P(ics[1], 'לייבים כל שבוע', 'מאסטר קלאס שבועי בלייב, ו־4 עד 8 מפגשים חיים בחודש. שואלים, מקבלים תשובה, מתקדמים.'),
    P(ics[2], '666 אנשים שדוחפים אותך', 'קהילה סגורה. שיתופי הצלחות, פרגונים ותוצאות, כל יום.'),
    P(ics[3], 'כלי AI לעבודה השחורה', 'קלוד קוד וצ׳אט ג׳י־פי־טי לעיצוב, תמונות, סרטונים וקריאייטיב.'),
    P(ics[4], 'ואני. בלי פילטר.', 'ספקים חדשים, מוצרים ומה שעובד עכשיו, ישר ממני. לא מפספסים כלום ממה שקורה בתחום.', ' me'),
]) + '\n    </div>\n')
s = s[:p0] + parts_new + s[p1:]
rep('<!-- CONFIRM: חמשת הרכיבים צריכים אישור של אביב. אלה לא פרטים רשמיים. -->', '<!-- חמשת הרכיבים: מה שאביב אומר בסרטון עצמו -->')
rep('<!-- CONFIRM: בדף הקיים כתוב 20.6M. בקופי כתוב 19 מיליון. לבחור אחד ולכתוב אותו זהה בכל המקומות. -->', '<!-- מספר אחד בכל הדף: 20.6 מיליון דולר, כמו בסרטון -->')

# ---- main video: Vidalytics embed slot ----
i0 = s.index('      <button class="vph" type="button" data-video="VSL_EMBED"')
i1 = s.index('</button>', i0) + len('</button>')
s = s[:i0] + ('      <p class="vwarn">שימו לב: הסרטון יוסר ברגע שכל המקומות יתמלאו</p>'   # Aviv 26.11: more Play clicks, red, right above the video
              '<div class="vph vreal" id="cvVsl"><span class="vsl-over"><b>תן לי 17 דקות.</b><span>בלי סיסמאות. ככה זה נראה מבפנים.</span></span>'
              '<div id="cvPlayer" class="vplayer"></div></div>') + s[i1:]

# ---- reels: posters ----
pass  # reel posters are set in the "voices" cards above

# ---- story screenshots ----
for name, src, alt in CFGJ['shots']:
    rep('<div class="shot">כאן צילום המסך של ' + name + '</div>', '<img class="shot img zoom" src="' + src + '" alt="' + H.escape(alt) + '" loading="lazy">')

# ---- WhatsApp wall ----
w0 = s.index('<div class="masonry">')
w1 = s.index('</div>', s.index('צילום מסך מהוואטסאפ 6')) + len('</div>')
w1 = s.index('</div>', w1) + len('</div>')
s = s[:w0] + '<div class="masonry">\n        ' + '\n        '.join('<img class="wimg zoom" src="' + src + '" alt="' + H.escape(alt) + '" loading="lazy">' for src, alt in CFGJ['wall']) + '\n      </div>' + s[w1:]
rep('<p class="p rv">אלה הודעות שקיבלתי בוואטסאפ, באמצע היום, מאנשים שלא האמינו שזה קורה להם.</p>',
    '<p class="p rv">הודעות מקבוצת הוואטסאפ ומהוואטסאפ הפרטי שלי, ופוסטים מהקהילה. מאנשים שלא האמינו שזה קורה להם. <b>לחיצה מגדילה.</b></p>')

# ---- portrait ----
rep('<div class="portrait rv">כאן תמונה של אביב<span class="yr">מאז 2010</span></div>',
    '<div class="portrait rv has"><img src="' + CFGJ['portrait'] + '" alt="אביב מלכה" loading="lazy"><span class="yr">מאז 2010</span></div>')

# ---- quiz: the real fit quiz ----
q0 = s.index('<section class="quiz" id="cvQuiz">')
q1 = s.index('</section>', q0) + len('</section>')
s = s[:q0] + ('<section class="quiz" id="cvQuiz">\n  <div class="wrap ctr"><span class="kick">השלב הבא</span>'
              '<h2 class="h2" style="font-size:clamp(34px,4.6vw,56px)">שאלון ההתאמה. <span class="u">2 דקות, וזהו.</span></h2>'
              '<p class="p" style="max-width:640px;margin-inline:auto">כמה שאלות קצרות, כדי שנבין איפה אתה נמצא היום. חוזרים אליך רק אם יש התאמה.</p>'
              '<div class="cta-wrap"><a class="cta" href="#cvQuiz" data-cta="quiz_section">לשאלון ההתאמה<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.800" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M19 12H5M11 6l-6 6 6 6"/></svg></a>'
              '<p class="cta-sub">2 דקות<i>·</i>בלי התחייבות<i>·</i>חוזרים רק אם יש התאמה</p></div></div>\n</section>') + s[q1:]

# ---- Aviv 18.11 night: only hook + video + button + an endless testimonials grid. Everything else out. ----
t0 = s.index('  <div class="ticker"'); t1 = s.index('</section>', t0)
s = s[:t0] + s[t1:]                                        # ticker + stats (inside the hero section)
x0 = s.index('<!-- ================= עוד מעט'); x1 = s.index('<!-- ================= השאלון')
s = s[:x0] + s[x1:]                                        # all agency sections between the hero and the quiz
IMGS = [
    ('aw/img/maayan-graph.jpg', '832 הזמנות · ₪135,813', 'מעיין · דצמבר 2025 עד ספטמבר 2026'),
    ('dl/img/nivin-sales.jpg', '₪31,641 ב־30 יום', 'ניבין · 237 הזמנות'),
    ('aw/img/dvir.jpg', '₪22,947 ב־23 ימים', 'דביר · ההודעה שלו בקבוצת התלמידים'),
    ('clubvsl/img/ilan.png', '32 הזמנות', 'אילן · אחרי חודשיים וחצי, מאפס'),
    ('aw/img/yahav.jpg', '₪12,775 ב־30 יום', 'יהב · 137 הזמנות'),
    ('clubvsl/img/maayan-chat-full.webp', '"ב־8 חודשים"', 'מעיין · מהוואטסאפ של אביב'),
    ('aw/img/ron.jpg', 'ההזמנה הראשונה', 'רון'),
    ('aw/img/hani.jpg', '"עזבתי קורס אחר כי לא היה מענה"', 'חני · בקהילה'),
    ('club/img/chat-75k.jpg', '75K בחודש שעבר', 'מהוואטסאפ הפרטי של אביב'),
    ('club/img/sales-778k.jpg', '₪778,889 ב־2024', 'איתמר'),
    ('club/img/chat-daniel.jpg', '₪507 · 3 הזמנות', 'דניאל · ההזמנות הראשונות'),
    ('club/img/orders-1.jpg', 'עוד הזמנה, ועוד הזמנה', 'איתמר · התראות הזמנה'),
    ('club/img/sales-22k.jpg', '₪22,185 ב־26 ימים', 'גנדי'),
    ('club/img/chat-raviv.jpg', 'מקבוצת הוואטסאפ', 'הודעה מתלמיד'),
    ('aw/img/maayan-chat.jpg', 'מעיין', 'מהוואטסאפ של אביב'),
    ('club/img/orders-2.jpg', 'עוד הזמנה, ועוד הזמנה', 'איתמר · התראות הזמנה'),
    ('club/img/community.jpg', 'הקהילה הסגורה', 'פוסטים של תלמידים'),
]
IMGS = IMGS[:4] + [tuple(x) for x in CFGJ.get('more_imgs', [])] + IMGS[4:]
vids = re.findall(r'<article class="vt-card">.*?</article>', s, re.S)
def img_card(src, big, who):
    full = src if src.startswith('http') else GH + src
    return ('<article class="vt-card"><div class="vt-top"><b' + (' class="q"' if big.startswith('"') or not re.search(r'\d', big) else '') + '>' + big + '</b><span>' + who + '</span></div>'
            '<button class="vimg zoom-btn" type="button" aria-label="הגדלת צילום המסך"><img class="zoom" src="' + full + '" alt="' + H.escape(big + ' · ' + who) + '" loading="lazy"></button></article>')
imgs = [img_card(*x) for x in IMGS]
CTA = ('<article class="vt-card vt-cta"><p>הם היו בדיוק איפה שאתה עכשיו.</p><b>אתה יכול להיות הסיפור הבא.</b>'
       '<a class="cta" href="#cvQuiz" data-cta="feed">לשאלון ההתאמה<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.800" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M19 12H5M11 6l-6 6 6 6"/></svg></a><small>2 דקות · בלי התחייבות</small></article>')
feed, vi, ii = [], 0, 0
while vi < len(vids) or ii < len(imgs):          # 1 video, 2 screenshots, …; a sign-up card after every 9
    if vi < len(vids): feed.append(vids[vi]); vi += 1
    for _ in range(2):
        if ii < len(imgs): feed.append(imgs[ii]); ii += 1
    if len(feed) % 10 == 9: feed.append(CTA)
if not feed[-1].startswith('<article class="vt-card vt-cta"'): feed.append(CTA)
f0 = s.index('<div class="vt-feed" id="vtFeed">') + len('<div class="vt-feed" id="vtFeed">'); f1 = s.index('</div><div id="vtMore"', f0)
s = s[:f0] + ''.join(feed) + s[f1:]
print('feed items', len(feed), 'videos', len(vids), 'images', len(imgs))
# agency script: the removed sections are no longer on the page
rep("var dots=$('#dots'),", "var dots=$('#dots')||document.createElement('div'),")
rep("var ph=$('#phone'),cap=$('#phCap'),", "var ph=$('#phone')||document.createElement('div'),cap=$('#phCap')||document.createElement('p'),")
rep("eio.observe($('#excuses'));", "if($('#excuses'))eio.observe($('#excuses'));")

# ---- extra CSS ----
lb_css = re.search(r'<style>(.*?)</style>', lb, re.S).group(1).split('\n')
keep = [l for l in lb_css if l.startswith('.ls{') or l.startswith('direction:rtl;text-align:right;font-family') or
        any(l.startswith(p) for p in ('.ls-btn', 'background:linear-gradient(180deg,#FFD84D', '@keyframes lsg', '.ls-done', '.ls-q', '.ls-opt', '.ls-opts', '.ls-back', '.ls-res', '.ls-in', '.ls-err', '.ls-lock', '.ls-okbar', '.ls-fsteps', '.ls-who', '.ls-qn', '.ls-ta', '.ls-fnext', '.ls-alt', '.ls-qbar', '.ls-qq'))]
extra = '\n'.join(keep) + '''
/* ===== club-vsl v2: real media + quiz in the agency look ===== */
.vph.tp .ph-in{background:radial-gradient(120% 80% at 50% 0%,#1C3360 0%,#0A1428 70%);gap:22px;padding:24px}
.vph.tp .tpq{font-family:var(--he);font-weight:900;font-size:34px;line-height:1.05;color:#fff;letter-spacing:-.02em;text-wrap:balance}
.vph.tp .tpw{font-size:13px;font-weight:800;color:var(--amb);letter-spacing:.06em}

.vimg{display:block;width:100%;border-radius:16px;overflow:hidden;background:#fff;padding:0;cursor:zoom-in}
.vimg img{width:100%;height:auto;display:block}
.vt-cta{background:var(--amb) !important;border-color:var(--amb) !important;color:var(--ink);justify-content:center;text-align:center;padding:26px 18px !important;gap:10px !important;min-height:300px}
.vt-cta p{font-family:var(--he);font-weight:800;font-size:18px;margin:0;color:var(--ink)}
.vt-cta b{font-family:var(--he);font-weight:900;font-size:30px;line-height:1.05;letter-spacing:-.02em;color:var(--ink)}
.vt-cta .cta{background:var(--ink);color:#fff;box-shadow:0 6px 0 #000;font-size:19px;padding:16px 20px;margin-top:8px}
.vt-cta .cta::after{display:none}
.vt-cta small{font-weight:700;color:rgba(10,20,40,.75)}
.vt{padding-bottom:60px}

.vt{margin:56px auto 0;max-width:1140px;text-align:right}
.vt-h{font-family:var(--he);font-weight:900;font-size:clamp(30px,4.4vw,52px);line-height:1.05;letter-spacing:-.03em;text-align:center;margin:0 0 26px;text-wrap:balance}
.vt-feed{display:grid;grid-template-columns:repeat(4,1fr);gap:16px;align-items:start}
.vt-card{background:var(--bg2);border:1px solid var(--line);border-radius:22px;padding:14px;display:flex;flex-direction:column;gap:12px;transition:border-color .3s,opacity .5s,transform .5s var(--e)}
.vt-card.wait{display:none}
.vt-card.new{opacity:0;transform:translateY(24px)}
.vt-card:hover{border-color:var(--amb)}
.vt-top{min-height:84px;display:flex;flex-direction:column;justify-content:flex-end;gap:2px;border-right:4px solid var(--amb);padding:2px 12px 0 4px}
.vt-top b{font-family:var(--he);font-weight:900;font-size:30px;line-height:1;color:var(--amb);letter-spacing:-.02em}
.vt-top b.q{font-size:21px;line-height:1.15;color:#fff}
.vt-top em{font-style:normal;font-weight:800;font-size:15px;color:#fff}
.vt-top span{font-size:14px;color:var(--mut);font-weight:700}
.vt-card .vph{border-radius:16px;border:0}
.vt-card .play{width:70px;height:70px}.vt-card .play svg{width:28px;height:28px;margin-right:-4px}
.vt-more{height:2px}
@media (max-width:1000px){.vt-feed{grid-template-columns:repeat(3,1fr)}}@media (max-width:760px){.vt-feed{grid-template-columns:1fr 1fr}}
@media (max-width:600px){.vt{margin-top:44px}.vt-feed{grid-template-columns:1fr;max-width:420px;margin:0 auto;gap:16px}.vt-top b{font-size:34px}.vt-top b.q{font-size:24px}}

.hero h1.hook{font-size:clamp(34px,4.6vw,62px);line-height:1.12;letter-spacing:-.03em;max-width:1000px;margin-top:6px}
@media (max-width:600px){.hero h1.hook{font-size:32px;line-height:1.15}}
.ls{--gold:#FFA826;--gold2:#E08A00;--soft:#FFF1D6;background:transparent !important;font-family:'Assistant','Heebo',system-ui,sans-serif}
.ls-q{max-width:720px;margin:0 auto !important;padding:30px 26px !important;border:2px solid var(--amb) !important;border-radius:22px !important;box-shadow:0 30px 70px -30px rgba(0,0,0,.7) !important}
.ls h3,.ls .ls-qq{color:#121318 !important;font-family:'Heebo',system-ui,sans-serif}
.ls-btn{font-family:'Heebo',system-ui,sans-serif;background:var(--amb) !important;color:#0A1428 !important;box-shadow:0 6px 0 var(--ambd) !important;animation:none !important}
.ls-btn.wa{background:linear-gradient(180deg,#3BDC7A,#1FA855) !important;color:#fff !important;box-shadow:0 6px 0 #137a3c !important}
.vreal{background:#050B17}
.vreal .vplayer{position:absolute;inset:0}
.vreal .vplayer>div{position:absolute !important;inset:0;padding-top:0 !important;height:100% !important}
.vsl-over{transition:opacity .4s}
.vreal.played .vsl-over{opacity:0}
.vph[style*="--poster"] .ph-in{background:var(--poster) center/cover no-repeat}
.vph[style*="--poster"] .ph-in small{display:none}
.vph[style*="--poster"] .ph-in::before{content:'';position:absolute;inset:0;background:linear-gradient(transparent 50%,rgba(5,11,23,.65))}
.vph[style*="--poster"] .play{position:relative}
.vph video{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;background:#000}
.vph video.fit{object-fit:contain}
.shot.img{display:block;width:100%;height:auto;min-height:0;padding:0;border:1px solid #E5DCCB;background:#fff;object-fit:contain;max-height:520px}
.masonry .wimg{display:block;width:100%;height:auto;break-inside:avoid;margin-bottom:14px;border-radius:14px;border:1px solid var(--line);background:#fff}
.zoom{cursor:zoom-in}
.portrait.has{padding:0;border:0;overflow:visible}
.portrait.has img{width:100%;height:100%;object-fit:cover;border-radius:22px}
.lbx{position:fixed;inset:0;z-index:90;background:rgba(5,11,23,.92);display:none;align-items:center;justify-content:center;padding:16px;cursor:zoom-out}
.lbx.on{display:flex}
.lbx img{max-width:100%;max-height:92vh;border-radius:12px}
.qm{position:fixed;inset:0;z-index:95;background:rgba(5,11,23,.86);display:none;align-items:flex-start;justify-content:center;padding:max(16px,env(safe-area-inset-top)) 12px 16px;overflow-y:auto;-webkit-overflow-scrolling:touch;overscroll-behavior:contain}
.qm.on{display:flex}
.qmi{position:relative;width:100%;max-width:720px;margin:auto 0;animation:qmIn .35s var(--e)}
@keyframes qmIn{from{opacity:0;transform:translateY(24px) scale(.98)}to{opacity:1;transform:none}}
.qx{position:absolute;top:-6px;left:-4px;z-index:3;width:44px;height:44px;border-radius:50%;background:#fff;color:#0A1428;font:900 28px/1 'Heebo',sans-serif;box-shadow:0 6px 20px rgba(0,0,0,.4);display:grid;place-items:center}
.qm .ls-q{margin:14px 0 0 !important}
.ls-opt .e{flex:none;width:30px;height:30px;border-radius:50%;background:#0A1428;color:#FFA826;font:900 15px/30px 'Heebo',sans-serif;text-align:center;direction:ltr}
.ls-opt:hover .e{background:#FFA826;color:#0A1428}
.qinline .ls-q{margin:0 auto !important}
'''
import quiz_tiers as _qt; extra += _qt.CSS
extra += '\n.vwarn{color:#FF5A4A;font-family:var(--he);font-weight:900;font-size:clamp(17px,2vw,21px);text-align:center;margin:0 0 12px;letter-spacing:-.01em}\n'
s = s.replace('</style>', extra + '</style>', 1)
rep('<div class="toast" id="toast" role="status"></div>', '<div class="toast" id="toast" role="status"></div>\n<div class="lbx" id="lbx" role="dialog" aria-label="צילום מסך מוגדל"><img alt=""></div>\n<div class="qm" id="qm" role="dialog" aria-modal="true" aria-label="שאלון ההתאמה"><div class="qmi"><button class="qx" id="qmX" type="button" aria-label="סגירה">×</button><div class="ls"><div class="ls-q" id="lsQ"></div></div></div></div>')
# every CTA opens the quiz popup (no long scroll through the reveal animations)
rep("if(internal){var t=$(CFG.QUIZ_URL);if(t){e.preventDefault();t.scrollIntoView({behavior:reduce?'auto':'smooth',block:'start'});}}",
    "if(internal){e.preventDefault();if(window.cvOpenQuiz)window.cvOpenQuiz(a.dataset.cta);}")

# ---- script ----
c0 = s.index('var CFG={')
c1 = s.index('};', c0) + 2
cfg = {'QUIZ_URL': '#cvQuiz', 'TIERS': bool(CFGJ.get('tiers')), 'VSL_VID': CFGJ['vsl_vid'], 'VSL_ACC': 'YxS8sQvf', 'TOUR_EMBED': CFGJ['tour'],
       'VIDEOS': {k: v['src'] for k, v in CFGJ['reels'].items()}}
s = s[:c0] + 'var CFG=' + json.dumps(cfg, ensure_ascii=False) + ';' + s[c1:]
rep("function embedFor(k){return k==='VSL_EMBED'?CFG.VSL_EMBED:k==='TOUR_EMBED'?CFG.TOUR_EMBED:(CFG.VIDEOS[k]||'');}",
    "function embedFor(k){return k==='TOUR_EMBED'?CFG.TOUR_EMBED:(CFG.VIDEOS[k]||'');}")
rep("  var f=document.createElement('iframe');f.src=u+(u.indexOf('?')>-1?'&':'?')+'autoplay=1&playsinline=1';f.allow='autoplay; fullscreen; picture-in-picture';f.allowFullscreen=true;f.title='סרטון';\n  box.innerHTML='';box.appendChild(f);box.removeAttribute('data-video');",
    "  var f;if(/\\.mp4(\\?|$)/.test(u)){$$('.vph video').forEach(function(v){try{v.pause();}catch(x){}});f=document.createElement('video');f.src=u;f.controls=true;f.playsInline=true;f.setAttribute('playsinline','');if(k==='roy'||k==='sooner')f.className='fit';}\n"
    "  else{f=document.createElement('iframe');f.src=u+(u.indexOf('?')>-1?'&':'?')+'autoplay=1&playsinline=1';f.allow='autoplay; fullscreen; picture-in-picture';f.allowFullscreen=true;f.title='סרטון';}\n"
    "  box.innerHTML='';box.appendChild(f);box.removeAttribute('data-video');if(f.play){var pp=f.play();if(pp&&pp.catch)pp.catch(function(){});}")
rep("el.textContent=Math.round(to*(1-Math.pow(1-p,3))).toLocaleString('en-US');",
    "var dec=(el.dataset.count.split('.')[1]||'').length,vv=to*(1-Math.pow(1-p,3));el.textContent=dec?vv.toFixed(dec):Math.round(vv).toLocaleString('en-US');")

fit = lb[lb.index('  function fit(where){'):lb.index("\n  var c = LESSONS")]
# Aviv 19.11: leads from this page go to the WhatsApp group "לידים רותחים טפסים/וובינר" (Make 10015312 via lead-hold dest 'dl'), not to his private chat
fit = fit.replace("var HOOK = 'https://hook.eu2.make.com/aos52nvubr4hbal7r1a9a9i7tvfjqcny';", "var HOOK = 'https://hook.eu2.make.com/vyco5ocnauh8o7ue72gj2lldn1wfv0xt';", 1)
fit = fit.replace("var body = {op: op, id: LID, name: lead.name, phone: lead.phone, total: N, where: where, lines: lines()};", "var body = {op: op, id: LID, name: lead.name, phone: lead.phone, total: N, where: where, dest: 'dl', lines: lines()};", 1)
fit = fit.replace("hold('start').catch(", "window.cvTrack && cvTrack('lead');\n        hold('start').catch(", 1)
fit = fit.replace("    function step(i, fresh){\n", "    function step(i, fresh){\n      window.cvTrack && cvTrack('q', i + 1);\n", 1)
fit = fit.replace("    function done(){\n", "    function done(){\n      window.cvTrack && cvTrack('done');\n", 1)
assert fit.count('cvTrack') == 6, fit.count('cvTrack')
fit = fit.replace("<span class=\"e\">' + o[0] + '</span>", "<span class=\"e\">' + String.fromCharCode(65 + j) + '</span>", 1)
for emo in ('🎯 ', '✅ ', '🔒 ', '💬 ', '👆 ', '↺ '):
    fit = fit.replace(emo, '')
assert '<span class="e">\' + o[0]' not in fit
fit = fit.replace("var cta = document.querySelector('#lsNext .ls-cta'); if (cta) cta.style.display = 'none';   /* one WhatsApp button at the end */", "")
import quiz_contact; fit = quiz_contact.apply(fit)   # name + WhatsApp at steps 3-4, Fireberry right after (19.11)
import quiz_tiers; fit = quiz_tiers.apply(fit)     # hot / warm / cold end screens, hot → booking link (24.11)
our = r'''
/* ===== club-vsl: our working parts (kept from v1) ===== */
(function(){
  var $ = function(id){ return document.getElementById(id); };
  /* campaign source into the lead message (utm_*), so Aviv sees which ad/page brought the lead */
  /* ===== creative tracking (Aviv 19.11, no more A/B): which ad brought each visit and each lead. Events → club-ab worker (no personal data, a random visitor id only) =====
     Meta ads link here with: utm_source=fb&utm_medium=paid&utm_campaign={{campaign.name}}&utm_term={{adset.name}}&utm_content={{ad.name}}&ad_id={{ad.id}}
     The last ad click is kept for 30 days, so a visitor who comes back later still counts for that ad. */
  var EP = 'https://club-ab.aviv1988.workers.dev/e';
  var qs = new URLSearchParams(location.search), AV = 'B';
  var cut = function(x, n){ if (!x) return ''; x = String(x); for (var i = 0; i < 3 && /%[0-9A-F]{2}/i.test(x); i++){ try { x = decodeURIComponent(x); } catch(e){ break; } }   /* Meta sometimes double-encodes ad names */
    return x.replace(/[\u200e\u200f\u202a-\u202e]/g, '').trim().slice(0, n); };
  var T = {ad: cut(qs.get('utm_content'), 120), adid: cut((qs.get('ad_id') || '').replace(/\D/g, ''), 24), adset: cut(qs.get('utm_term'), 120), camp: cut(qs.get('utm_campaign'), 120), src: cut(qs.get('utm_source') || qs.get('ref'), 60)};   /* ?ref=youtube etc. (Aviv 20.11) */
  if (!T.src && document.referrer){ try { var rh = new URL(document.referrer).hostname.replace(/^www\./, ''); if (!/avivmalka\.com$/.test(rh)) T.src = rh; } catch(e){} }
  if (!T.src && qs.get('fbclid')) T.src = 'fb';
  var paid = !!(T.ad || T.adid || T.camp);
  try { if (paid){ T.t = Date.now(); localStorage.setItem('cv_touch', JSON.stringify(T)); } else { var o = JSON.parse(localStorage.getItem('cv_touch') || 'null'); if (o && Date.now() - o.t < 30 * 864e5) T = o; } } catch(e){}
  var utm = [T.src, T.camp, T.adset, T.ad].filter(Boolean).join(' / ');
  var VID; try { VID = localStorage.getItem('cv_vid'); } catch(e){}
  if (!VID || !/^[a-z0-9]{6,32}$/.test(VID)){ VID = (Date.now().toString(36) + Math.random().toString(36).slice(2, 12)).slice(0, 20); try { localStorage.setItem('cv_vid', VID); } catch(e){} }
  var QA = /[?&](qa=1|ab=[ab]|test=1)\b/i.test(location.search) || /kajabi\.com/.test(document.referrer);   /* Kajabi editor/preview visits don't count */
  var DEV = matchMedia('(max-width:767px)').matches ? 'm' : 'd';
  var sent = {};
  window.cvTrack = function(ev, n, cta){
    var k = ev + (n == null ? '' : n) + (cta || ''); if (sent[k]) return; sent[k] = 1;
    var body = JSON.stringify({v: AV, vv: CFG.VSL_VID, ev: ev, vid: VID, n: n, cta: cta, dev: DEV, src: T.src || '', camp: T.camp || '', adset: T.adset || '', ad: T.ad || '', adid: T.adid || '', qa: QA ? 1 : 0});
    try { if (navigator.sendBeacon) navigator.sendBeacon(EP, new Blob([body], {type: 'text/plain'})); else fetch(EP, {method: 'POST', body: body, keepalive: true}); } catch(e){}
  };
  cvTrack('view');
  document.addEventListener('click', function(e){ if (e.target.closest && e.target.closest('.ls-btn.wa')) cvTrack('wa'); });
  /* main video: play + how far they watched */
  (function(){ var marks = [25, 50, 75, 95];
    document.addEventListener('play', function(e){ if (e.target.closest && e.target.closest('#cvPlayer')) cvTrack('play'); }, true);
    document.addEventListener('timeupdate', function(e){ var v = e.target; if (!(v.closest && v.closest('#cvPlayer')) || !v.duration) return;
      var pc = 100 * v.currentTime / v.duration; marks.forEach(function(m){ if (pc >= m) cvTrack('w' + m); }); }, true);
  })();
  /* ===== our own heatmap + video drop-off (Aviv 20.11): one row per page load → club-ab /h, read by board.html.
     Element-level clicks (which button / which testimonial card), scroll depth, which parts of the page were reached,
     10-second watch buckets of the VSL and skips. No personal data and nothing typed into the quiz. ===== */
  (function(){
    var EPH = 'https://club-ab.aviv1988.workers.dev/h';
    var SID = (Date.now().toString(36) + Math.random().toString(36).slice(2, 12)).slice(0, 20);
    var H = {cl: [], se: {}, sc: 0, wb: {}, sk: [], dur: null}, dirty = false, lastT = 0;
    var cards = function(){ return [].slice.call(document.querySelectorAll('#vtFeed .vt-card')); };
    function key(el){
      var c; if (!el || !el.closest) return null;
      if (el.closest('#qm')) return 'quiz';
      if ((c = el.closest('[data-cta]'))) return 'cta:' + c.getAttribute('data-cta');
      if (el.closest('#cvVsl')) return 'vsl';
      if ((c = el.closest('.vt-card'))){ var i = cards().indexOf(c), sp = c.querySelector('.vt-top span'), b = c.querySelector('.vt-top b');
        return 'card:' + i + ':' + (c.querySelector('[data-video]') ? 'v' : 'i') + ':' + (((sp && sp.textContent.split('·')[0]) || (b && b.textContent) || '').trim().slice(0, 24)); }
      if ((c = el.closest('a,button'))) return 'btn:' + (c.getAttribute('aria-label') || c.textContent || '').trim().slice(0, 30);
      if ((c = el.closest('[id]'))) return 'area:' + c.id;
      return 'other';
    }
    document.addEventListener('click', function(e){ var k = key(e.target); if (!k) return; var d = document.documentElement;
      H.cl.push([k, Math.round(1000 * e.pageX / Math.max(1, d.scrollWidth)), Math.round(1000 * e.pageY / Math.max(1, d.scrollHeight))]); if (H.cl.length > 60) H.cl.shift(); dirty = true; }, true);
    var tk = 0;
    function scan(){ tk = 0; var d = document.documentElement, h = d.scrollHeight - innerHeight, p = h > 0 ? Math.round(100 * scrollY / h) : 100;
      if (p > H.sc){ H.sc = p; dirty = true; }
      var seen = function(el, k){ if (!el || H.se[k] || !el.offsetParent) return; var r = el.getBoundingClientRect(); if (r.top < innerHeight * .8 && r.bottom > 0){ H.se[k] = 1; dirty = true; } };
      seen(document.querySelector('#cvVsl'), 'vsl'); seen(document.querySelector('#voices'), 'voices'); seen(document.querySelector('#cvQuiz'), 'quiz');
      cards().forEach(function(c, i){ seen(c, 'c' + i); });
    }
    addEventListener('scroll', function(){ if (!tk) tk = setTimeout(scan, 300); }, {passive: true});
    setTimeout(scan, 1500);
    var inV = function(v){ return v && v.closest && v.closest('#cvPlayer'); };
    document.addEventListener('timeupdate', function(e){ var v = e.target; if (!inV(v) || !v.duration) return; H.dur = Math.round(v.duration);
      if (!v.paused && !v.seeking){ var b = Math.floor(v.currentTime / 10); if (!H.wb[b]){ H.wb[b] = 1; dirty = true; } lastT = v.currentTime; } }, true);
    document.addEventListener('seeking', function(e){ var v = e.target; if (!inV(v)) return; if (Math.abs(v.currentTime - lastT) > 3){ H.sk.push([Math.round(lastT), Math.round(v.currentTime)]); if (H.sk.length > 40) H.sk.shift(); dirty = true; } }, true);
    function flush(){ if (!dirty) return; dirty = false;
      var body = JSON.stringify({sid: SID, vid: VID, vv: CFG.VSL_VID, dev: DEV, src: T.src || '', qa: QA ? 1 : 0, sc: H.sc, se: Object.keys(H.se), cl: H.cl,
        wb: Object.keys(H.wb).map(Number), sk: H.sk, dur: H.dur});
      try { if (navigator.sendBeacon) navigator.sendBeacon(EPH, new Blob([body], {type: 'text/plain'})); else fetch(EPH, {method: 'POST', body: body, keepalive: true}); } catch(e){}
    }
    document.addEventListener('visibilitychange', function(){ if (document.visibilityState === 'hidden') flush(); });
    addEventListener('pagehide', flush);
    setInterval(flush, 20000);
  })();
  var WHERE = 'דף הסרטון של המועדון (club-vsl)' + (T.ad ? ' · ' + T.ad : utm ? ' · ' + utm : '');
''' + fit + r'''
  fit(WHERE);

  /* main VSL: Vidalytics embed (autoplay is off in the Vidalytics player settings) */
  (function(){
    var id = CFG.VSL_VID, box = $('cvPlayer'), wrap = $('cvVsl');
    if (!id || !box) return;
    box.innerHTML = '<div id="vidalytics_embed_' + id + '" style="width:100%;position:relative;padding-top:56.25%;"></div>';
    (function (v, i, d, a, l, y, t, c, s) {
      y='_'+d.toLowerCase();c=d+'L';if(!v[d]){v[d]={};}if(!v[c]){v[c]={};}if(!v[y]){v[y]={};}var vl='Loader',vli=v[y][vl],vsl=v[c][vl + 'Script'],vlf=v[c][vl + 'Loaded'],ve='Embed';
      if (!vsl){vsl=function(u,cb){if(t){cb();return;}s=i.createElement("script");s.type="text/javascript";s.async=1;s.src=u;
        if(s.readyState){s.onreadystatechange=function(){if(s.readyState==="loaded"||s.readyState=="complete"){s.onreadystatechange=null;vlf=1;cb();}};}else{s.onload=function(){vlf=1;cb();};}
        i.getElementsByTagName("head")[0].appendChild(s);};}
      vsl(l+'loader.min.js',function(){if(!vli){var vlc=v[c][vl];vli=new vlc();}vli.loadScript(l+'player.min.js',function(){var vec=v[d][ve];t=new vec();t.run(a);});});
    })(window, document, 'Vidalytics', 'vidalytics_embed_' + id, 'https://fast.vidalytics.com/embeds/' + CFG.VSL_ACC + '/' + id + '/');
    var hide = function(){ wrap.classList.add('played'); };
    wrap.addEventListener('pointerdown', hide, true);
    document.addEventListener('play', function(e){ if (wrap.contains(e.target)) hide(); }, true);
  })();

  /* quiz popup: every CTA opens it right away (Aviv 18.11: scrolling to the bottom got lost in the reveal animations) */
  var qm = $('qm'), lsBox = document.querySelector('#qm .ls'), lsQ = $('lsQ'), home = null;
  if (AV === 'B'){
    /* B (Aviv 18.11): the button under the video says "מלאו שאלון לבדיקת התאמה"; like A it opens the popup */
    var heroCta = document.querySelector('.hero .cta-wrap'), hb = heroCta && heroCta.querySelector('.cta');
    if (hb){ hb.firstChild.nodeValue = 'מלאו שאלון לבדיקת התאמה'; hb.setAttribute('data-cta', 'hero_b'); }
  }
  window.cvOpenQuiz = function(src){
    cvTrack('cta', null, src || ''); cvTrack('open', null, src || '');
    if (home) lsBox.appendChild(lsQ);
    qm.classList.add('on'); document.documentElement.style.overflow = 'hidden'; document.body.style.overflow = 'hidden';
    qm.scrollTop = 0;
    try { (window.dataLayer = window.dataLayer || []).push({event: 'quiz_open', cta: src || ''}); } catch(x){}
    setTimeout(function(){ var f = qm.querySelector('.ls-btn, .ls-opt, input'); try { f && f.focus({preventScroll: true}); } catch(x){} }, 350);
  };
  function closeQuiz(){ qm.classList.remove('on'); document.documentElement.style.overflow = ''; document.body.style.overflow = ''; if (home) home.appendChild(lsQ); }
  $('qmX').onclick = closeQuiz;
  qm.addEventListener('click', function(e){ if (e.target === qm) closeQuiz(); });
  addEventListener('keydown', function(e){ if (e.key === 'Escape' && qm.classList.contains('on')) closeQuiz(); });
  if (/[#&?](quiz|cvQuiz)\b/.test(location.hash + location.search)) setTimeout(function(){ window.cvOpenQuiz('url'); }, 600);

  /* voices feed: every card is on the page (images load lazily as you get near); each card fades in when it enters the screen */
  (function(){ var feed = $('vtFeed'); if (!feed || !('IntersectionObserver' in window)) return;
    var cards = [].slice.call(feed.children);
    var io = new IntersectionObserver(function(es){ es.forEach(function(e){ if (e.isIntersecting){ e.target.classList.remove('new'); io.unobserve(e.target); } }); }, {rootMargin: '0px 0px -40px 0px'});
    cards.forEach(function(c, i){ if (i > 2){ c.classList.add('new'); io.observe(c); } });
    setTimeout(function(){ cards.forEach(function(c){ c.classList.remove('new'); }); }, 15000);   /* safety: never leave a card invisible */
  })();

  /* screenshots: tap to zoom */
  var lbx = $('lbx');
  document.addEventListener('click', function(e){
    var im = e.target.closest && e.target.closest('.zoom');
    if (im){ lbx.querySelector('img').src = im.src; lbx.classList.add('on'); return; }
    if (e.target.closest && e.target.closest('#lbx')) lbx.classList.remove('on');
  });
  addEventListener('keydown', function(e){ if (e.key === 'Escape') lbx.classList.remove('on'); });
})();
'''
k = s.rindex('})();\n</script>')
s = s[:k] + '})();\n' + our + '</script>' + s[k + len('})();\n</script>'):]
open(R + 'clubvsl/index.html', 'w', encoding='utf-8').write(s)

# ---------- Kajabi build: scope CSS under #cv, inject markup into #cv-root ----------
css = re.search(r'<style>(.*?)</style>', s, re.S).group(1)
body = s[s.index('<body>') + 6:s.index('<script>')]
js = s[s.index('<script>') + 8:s.rindex('</script>')]
body = body.replace('src="../', 'src="' + GH).replace('src="img/', 'src="' + GH + 'clubvsl/img/').replace('url(../', 'url(' + GH)
assert 'src="../' not in body


def scope_block(block):
    out = []
    for m in re.finditer(r'([^{}]+)\{([^{}]*)\}', block):
        sel, decl = m.group(1).strip(), m.group(2)
        sels = []
        for x in sel.split(','):
            x = x.strip()
            if x in (':root', 'html', 'body'):
                sels.append('#cv'); continue
            if x == '*':
                sels.append('#cv *'); continue
            if re.match(r'^(from|to|\d+%)', x):
                sels.append(x); continue
            sels.append('#cv ' + x)
        out.append(','.join(dict.fromkeys(sels)) + '{' + decl + '}')
    return '\n'.join(out)


css = re.sub(r'/\*.*?\*/', '', css, flags=re.S)
res, i = [], 0
at = re.compile(r'@(media|keyframes)[^{]*\{')
while i < len(css):
    m = at.search(css, i)
    if not m:
        res.append(scope_block(css[i:])); break
    res.append(scope_block(css[i:m.start()]))
    depth, j = 1, m.end()
    while depth:
        depth += {'{': 1, '}': -1}.get(css[j], 0); j += 1
    inner = css[m.end():j - 1]
    res.append(css[m.start():m.end()] + (inner if m.group(1) == 'keyframes' else scope_block(inner)) + '}')
    i = j
scoped = '\n'.join(res) + ("\n#cv h1,#cv h2,#cv h3,#cv p,#cv a,#cv button,#cv span,#cv b,#cv small,#cv li,#cv input,#cv textarea{text-transform:none}"
                           "\n#cv h1,#cv h2,#cv h3{margin-bottom:0;color:#fff}#cv p{margin-bottom:0}#cv .alone .h2{color:#0A1428}#cv .alone .h2 .u{color:#fff}#cv .story h3,#cv .part.me h3{color:#0A1428}"
                           "\n#cv{direction:rtl;text-align:right;background:var(--bg);color:var(--tx);font-family:var(--tf);font-size:19px;line-height:1.6}#cv .ctr{text-align:center}")
fonts = '<link href="https://fonts.googleapis.com/css2?family=Assistant:wght@400;600;700;800&family=Heebo:wght@700;800;900&display=swap" rel="stylesheet">'
markup = fonts + '<style>' + scoped + '</style><div id="cv" dir="rtl">' + body + '</div>'
BG = '#0A1428'
pre = ("/* Aviv Malka club VSL page v2 (agency design) www.avivmalka.com/club-vsl - source clubvsl/src/page.html + gen2.py */\n(function(){\n"
       " var root=document.getElementById('cv-root'); if(!root){root=document.createElement('div');root.id='cv-root';document.body.appendChild(root);}\n"
       " try{ document.body.style.background='" + BG + "'; var p=root.parentElement; while(p && p!==document.body){ p.style.backgroundColor='" + BG + "'; p.style.backgroundImage='none'; if(/section|container|row|col|sizer|block/.test(p.className||'')){ p.style.padding='0'; p.style.margin='0'; p.style.maxWidth='none'; } p=p.parentElement; } document.querySelectorAll('header.header, footer.footer').forEach(function(el){ el.style.display='none'; }); var hs=document.createElement('style'); hs.textContent='.block-type--video{display:none !important}'; document.head.appendChild(hs); }catch(e){}\n"
       " root.innerHTML=" + json.dumps(markup, ensure_ascii=False) + ";\n})();\n")
open(R + 'clubvsl/cv.js', 'w', encoding='utf-8').write(pre + js + '\n')
print('index.html', len(s), 'cv.js', len(pre + js))
