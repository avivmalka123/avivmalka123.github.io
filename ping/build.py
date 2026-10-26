"""Build ping/pg.js (Kajabi-injectable) from ping/index.html.

Same approach as the after-webinar builder (aw/index.html -> aw/aw.js):
all CSS scoped under #dl, markup injected into #pg-root, asset URLs made absolute,
Kajabi header/footer hidden. The Meta Pixel init in <head> is NOT copied: the page
script only calls fbq('track', ...) when window.fbq already exists on Kajabi.
Run:  python3 dl/build.py   then   node --check ping/pg.js
"""
import re, json, os

D = os.path.dirname(os.path.abspath(__file__)) + '/'
GH = 'https://avivmalka123.github.io/'
BASE = GH + 'ping/'
BG = '#0B0A14'

s = open(D + 'index.html', encoding='utf-8').read()
css = re.search(r'<style>(.*?)</style>', s, re.S).group(1)
body = re.search(r'<body>(.*?)<script>\n\(function', s, re.S).group(1)
logic = s[s.index('<script>\n(function') + len('<script>'):s.rindex('</script>')]

# asset URLs: "../aw/..", "../club/.." -> github pages root; "img/.." -> dl/img/
body = body.replace('"../', '"' + GH).replace('"img/', '"' + BASE + 'img/')
assert '"../' not in body


def scope_block(block):
    out = []
    for m in re.finditer(r'([^{}]+)\{([^{}]*)\}', block):
        sel, decl = m.group(1).strip(), m.group(2)
        sels = []
        for x in sel.split(','):
            x = x.strip()
            if x in (':root', 'html', 'body'):
                sels.append('#pg'); continue
            if x == '*':
                sels.append('#pg *'); continue
            if re.match(r'^(from|to|\d+%)', x):
                sels.append(x); continue
            sels.append('#pg ' + x)
        out.append(','.join(dict.fromkeys(sels)) + '{' + decl + '}')
    return '\n'.join(out)


res = []
i = 0
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

scoped = '\n'.join(res) + (
    "\n#pg h1,#pg h2,#pg h3,#pg p,#pg a,#pg button,#pg span,#pg b,#pg small,#pg li,#pg summary,#pg input,#pg label"
    "{font-family:'Heebo',Arial,sans-serif;letter-spacing:normal;text-transform:none}"
    "\n#pg h1,#pg h2,#pg h3{color:#fff}#pg .light h2,#pg .light h3{color:#0B1426}#pg p{margin-top:0}"
    "\n#pg ul,#pg ol{margin-top:0}#pg img{height:auto}#pg .vid .cover img{height:100%}#pg h1 em{color:#F2B705}"
)
markup = ('<link href="https://fonts.googleapis.com/css2?family=Heebo:wght@400;500;700;800;900&display=swap" rel="stylesheet">'
          '<style>' + scoped + '</style><div id="pg" dir="rtl">' + body + '</div>')

pre = ("/* Aviv Malka direct lead page (loaded from Kajabi; source ping/index.html, built by dl/build.py) */\n(function(){\n"
       " var root=document.getElementById('pg-root'); if(!root){root=document.createElement('div');root.id='pg-root';document.body.appendChild(root);}\n"
       " try{ document.body.style.background='" + BG + "'; var p=root.parentElement; while(p && p!==document.body){ p.style.backgroundColor='" + BG + "'; p.style.backgroundImage='none'; if(/section|container|row|col|sizer|block/.test(p.className||'')){ p.style.padding='0'; p.style.margin='0'; p.style.maxWidth='none'; } p=p.parentElement; } document.querySelectorAll('header.header, footer.footer').forEach(function(el){ el.style.display='none'; }); var hs=document.createElement('style'); hs.textContent='.block-type--video{display:none !important}'; document.head.appendChild(hs); }catch(e){}\n"
       " root.innerHTML=" + json.dumps(markup, ensure_ascii=False) + ";\n})();\n")

open(D + 'pg.js', 'w', encoding='utf-8').write(pre + logic)
print('pg.js', len(pre + logic), 'chars')
