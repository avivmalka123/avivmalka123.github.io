"""Assemble clubvsl/index.html: dl page CSS + the hinam1 fit-quiz (course/src/lesson_block.html) + src/body.html.
Then run clubvsl/src/build.py to make clubvsl/cv.js for Kajabi."""
import os, re
R = os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__)))) + '/'
dl = open(R + 'dl/index.html', encoding='utf-8').read()
lb = open(R + 'course/src/lesson_block.html', encoding='utf-8').read()
body = open(R + 'clubvsl/src/body.html', encoding='utf-8').read()
dl_css = re.search(r'<style>(.*?)</style>', dl, re.S).group(1)
lb_css = re.search(r'<style>(.*?)</style>', lb, re.S).group(1).split('\n')
keep = [l for l in lb_css if l.startswith('.ls{') or l.startswith('direction:rtl;text-align:right;font-family') or
        any(l.startswith(p) for p in ('.ls-btn', 'background:linear-gradient(180deg,#FFD84D', '@keyframes lsg', '.ls-done', '.ls-q', '.ls-opt', '.ls-opts', '.ls-back', '.ls-res', '.ls-in', '.ls-err', '.ls-lock', '.ls-okbar', '.ls-fsteps', '.ls-who', '.ls-qn', '.ls-ta', '.ls-fnext', '.ls-alt', '.ls-qbar', '.ls-qq'))]
quiz_css = '\n'.join(keep) + '''
.ls{background:transparent !important;padding:0}
.qsec{padding-top:34px}
.ls-q{max-width:640px;margin:0 auto !important;padding:26px 22px !important;border:2px solid #F3C38F !important;box-shadow:0 30px 70px -30px rgba(0,0,0,.6) !important}
.ls h3,.ls .ls-qq{color:#121318 !important}
.ls p{color:inherit}
.vsl{position:relative}
.cv-ph{aspect-ratio:16/9;display:flex;align-items:center;justify-content:center;background:#050a16;color:var(--mute);border-radius:18px;font-weight:700}
'''
fit = lb[lb.index('  function fit(where){'):lb.index("\n  var c = LESSONS")]
logic = r'''
(function(){
  var $ = function(id){ return document.getElementById(id); };
  var WHERE = 'דף הסרטון של המועדון (club-vsl)';
''' + fit + r'''
  fit(WHERE);

  /* main video: the Kajabi video block (uploaded VSL, autoplay off) moves into the hero */
  (function(){
    var tries = 0, t = setInterval(function(){
      var v = document.querySelector('.block-type--video');
      if (v){ clearInterval(t); var box = $('cvVsl'); box.innerHTML = ''; box.appendChild(v); v.style.display = 'block'; return; }
      if (++tries > 80) clearInterval(t);
    }, 150);
  })();

  /* in-page anchors: smooth scroll */
  [].forEach.call(document.querySelectorAll('a[href^="#"]'), function(a){
    a.addEventListener('click', function(e){
      var t = document.getElementById(a.getAttribute('href').slice(1)); if (!t) return;
      e.preventDefault(); t.scrollIntoView({behavior: 'smooth', block: 'start'});
    });
  });

  /* reels slider: nothing autoplays; tap = play with sound, one at a time */
  (function(){
    var track = $('rtrack'); if (!track) return;
    var reels = [].slice.call(track.querySelectorAll('.reel'));
    function load(r){ var v = r.querySelector('video'); if (!v.src){ v.src = r.getAttribute('data-src'); } v.preload = 'metadata'; }
    function stopOthers(cur){ reels.forEach(function(r){ if (r !== cur){ var v = r.querySelector('video'); if (!v.paused) v.pause(); } }); }
    reels.forEach(function(r){
      var v = r.querySelector('video'), bar = r.querySelector('.rbar i');
      r.querySelector('.rplay').addEventListener('click', function(){
        load(r);
        if (v.paused){ stopOthers(r); v.muted = false; var p = v.play(); r.classList.add('on'); r.classList.remove('paused'); if (p && p.catch) p.catch(function(){}); }
        else { v.pause(); }
      });
      v.addEventListener('pause', function(){ r.classList.add('paused'); });
      v.addEventListener('play', function(){ r.classList.remove('paused'); r.classList.add('on'); });
      v.addEventListener('timeupdate', function(){ if (v.duration) bar.style.width = (100 * v.currentTime / v.duration) + '%'; });
      v.addEventListener('ended', function(){ r.classList.remove('on'); r.classList.remove('paused'); bar.style.width = '0'; v.currentTime = 0; });
    });
    var step = function(){ return reels[0].getBoundingClientRect().width + 12; };
    document.querySelector('.rnext').onclick = function(){ track.scrollBy({left: -step(), behavior: 'smooth'}); };
    document.querySelector('.rprev').onclick = function(){ track.scrollBy({left: step(), behavior: 'smooth'}); };
  })();

  /* proof wall: show more */
  $('wallMore').onclick = function(){ $('wallw').classList.remove('clip'); this.style.display = 'none'; };

  /* sticky CTA (mobile): after the hero, hidden while the quiz is on screen */
  var st = $('sticky'), heroBtn = document.querySelector('.hero .btn'), qz = $('cvQuiz');
  function onScroll(){
    var r = qz.getBoundingClientRect(), inQ = r.top < innerHeight && r.bottom > 0;
    st.classList.toggle('on', heroBtn.getBoundingClientRect().bottom < 0 && !inQ);
  }
  addEventListener('scroll', onScroll, {passive: true}); onScroll();

  /* lightbox: videos play only after a click, screenshots zoom */
  var lb = $('lb'), lbIn = $('lbIn');
  function close(){ lb.classList.remove('on'); lbIn.innerHTML = ''; }
  lb.addEventListener('click', function(e){ if (e.target === lb || e.target.classList.contains('x')) close(); });
  addEventListener('keydown', function(e){ if (e.key === 'Escape') close(); });
  document.addEventListener('click', function(e){
    var p = e.target.closest && e.target.closest('.play');
    if (p){
      var src = p.getAttribute('data-local');
      if (src){
        if (p.closest('#maayanBox')){ p.parentNode.innerHTML = '<video src="' + src + '" controls autoplay playsinline></video>'; return; }
        lbIn.innerHTML = '<div class="v tall"><video src="' + src + '" controls autoplay playsinline></video></div>';
      } else {
        lbIn.innerHTML = '<div class="v"><iframe src="https://fast.wistia.net/embed/iframe/' + p.getAttribute('data-w') + '?autoPlay=true&playerColor=F28C28" allow="autoplay; fullscreen" allowfullscreen></iframe></div>';
      }
      lb.classList.add('on'); return;
    }
    var im = e.target.closest && e.target.closest('.shot, .wall img');
    if (im){ lbIn.innerHTML = '<img src="' + im.src + '" alt="">'; lb.classList.add('on'); }
  });
})();
'''
head = dl[:dl.index('<style>')].replace('<title>אביב מלכה · תוכנית ההכשרה</title>', '<title>אביב מלכה · מועדון האיקומרס</title>').replace('<!-- Meta Pixel -->\n', '')
html = head + '<style>' + dl_css + quiz_css + '</style>\n</head>\n<body>\n' + body + '\n<script>' + logic + '</script>\n</body>\n</html>\n'
open(R + 'clubvsl/index.html', 'w', encoding='utf-8').write(html)
print('index.html', len(html))
