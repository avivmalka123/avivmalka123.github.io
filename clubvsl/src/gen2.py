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
s = s[:i0] + ('      <div class="vph vreal" id="cvVsl"><span class="vsl-over"><b>תן לי 17 דקות.</b><span>בלי סיסמאות. ככה זה נראה מבפנים.</span></span>'
              '<div id="cvPlayer" class="vplayer"></div></div>') + s[i1:]

# ---- reels: posters ----
for k, v in CFGJ['reels'].items():
    rep('data-video="' + k + '" aria-label="נגן את הסרטון של', 'data-video="' + k + '" style="--poster:url(' + v['poster'] + ')" aria-label="נגן את הסרטון של')

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
s = s[:q0] + ('<section class="quiz" id="cvQuiz">\n  <div class="wrap"><div class="ctr" style="margin-bottom:34px">'
              '<h2 class="h2" style="font-size:clamp(34px,4.6vw,56px);margin-top:0">שאלון ההתאמה. <span class="u">2 דקות, וזהו.</span></h2></div>'
              '<div class="ls"><div class="ls-q" id="lsQ"></div></div></div>\n</section>') + s[q1:]

# ---- extra CSS ----
lb_css = re.search(r'<style>(.*?)</style>', lb, re.S).group(1).split('\n')
keep = [l for l in lb_css if l.startswith('.ls{') or l.startswith('direction:rtl;text-align:right;font-family') or
        any(l.startswith(p) for p in ('.ls-btn', 'background:linear-gradient(180deg,#FFD84D', '@keyframes lsg', '.ls-done', '.ls-q', '.ls-opt', '.ls-opts', '.ls-back', '.ls-res', '.ls-in', '.ls-err', '.ls-lock', '.ls-okbar', '.ls-fsteps', '.ls-who', '.ls-qn', '.ls-ta', '.ls-fnext', '.ls-alt', '.ls-qbar', '.ls-qq'))]
extra = '\n'.join(keep) + '''
/* ===== club-vsl v2: real media + quiz in the agency look ===== */
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
'''
s = s.replace('</style>', extra + '</style>', 1)
rep('<div class="toast" id="toast" role="status"></div>', '<div class="toast" id="toast" role="status"></div>\n<div class="lbx" id="lbx" role="dialog" aria-label="צילום מסך מוגדל"><img alt=""></div>')

# ---- script ----
c0 = s.index('var CFG={')
c1 = s.index('};', c0) + 2
cfg = {'QUIZ_URL': '#cvQuiz', 'VSL_VID': CFGJ['vsl_vid'], 'VSL_ACC': 'YxS8sQvf', 'TOUR_EMBED': CFGJ['tour'],
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
fit = fit.replace("var cta = document.querySelector('#lsNext .ls-cta'); if (cta) cta.style.display = 'none';   /* one WhatsApp button at the end */", "")
our = r'''
/* ===== club-vsl: our working parts (kept from v1) ===== */
(function(){
  var $ = function(id){ return document.getElementById(id); };
  /* campaign source into the lead message (utm_*), so Aviv sees which ad/page brought the lead */
  var qs = new URLSearchParams(location.search), utm = ['utm_source','utm_campaign','utm_content'].map(function(k){ return qs.get(k); }).filter(Boolean).join(' / ');
  var WHERE = 'דף הסרטון של המועדון (club-vsl)' + (utm ? ' · ' + utm : '');
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
