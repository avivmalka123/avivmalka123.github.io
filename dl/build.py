"""Build dl/dl.js (Kajabi-injectable) from dl/index.html.

Same approach as the after-webinar builder (aw/index.html -> aw/aw.js):
all CSS scoped under #dl, markup injected into #dl-root, asset URLs made absolute,
Kajabi header/footer hidden. The Meta Pixel init in <head> is NOT copied: the page
script only calls fbq('track', ...) when window.fbq already exists on Kajabi.
Run:  python3 dl/build.py   then   node --check dl/dl.js
"""
import re, json, os

D = os.path.dirname(os.path.abspath(__file__)) + '/'
GH = 'https://avivmalka123.github.io/'
BASE = GH + 'dl/'
BG = '#0B1426'

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
                sels.append('#dl'); continue
            if x == '*':
                sels.append('#dl *'); continue
            if re.match(r'^(from|to|\d+%)', x):
                sels.append(x); continue
            sels.append('#dl ' + x)
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
    "\n#dl h1,#dl h2,#dl h3,#dl p,#dl a,#dl button,#dl span,#dl b,#dl small,#dl li,#dl summary,#dl input,#dl label"
    "{font-family:'Heebo',Arial,sans-serif;letter-spacing:normal;text-transform:none}"
    "\n#dl h1,#dl h2,#dl h3{color:#fff}#dl .light h2,#dl .light h3{color:#0B1426}#dl p{margin-top:0}"
    "\n#dl ul,#dl ol{margin-top:0}#dl img{height:auto}#dl .play img,#dl .vsl .poster img{height:100%}"
)
markup = ('<link href="https://fonts.googleapis.com/css2?family=Heebo:wght@400;500;700;800;900&display=swap" rel="stylesheet">'
          '<style>' + scoped + '</style><div id="dl" dir="rtl">' + body + '</div>')

pre = ("/* Aviv Malka direct lead page (loaded from Kajabi; source dl/index.html, built by dl/build.py) */\n(function(){\n"
       " var root=document.getElementById('dl-root'); if(!root){root=document.createElement('div');root.id='dl-root';document.body.appendChild(root);}\n"
       " try{ document.body.style.background='" + BG + "'; var p=root.parentElement; while(p && p!==document.body){ p.style.backgroundColor='" + BG + "'; p.style.backgroundImage='none'; if(/section|container|row|col|sizer|block/.test(p.className||'')){ p.style.padding='0'; p.style.margin='0'; p.style.maxWidth='none'; } p=p.parentElement; } document.querySelectorAll('header.header, footer.footer').forEach(function(el){ el.style.display='none'; }); }catch(e){}\n"
       " root.innerHTML=" + json.dumps(markup, ensure_ascii=False) + ";\n})();\n")

open(D + 'dl.js', 'w', encoding='utf-8').write(pre + logic)
print('dl.js', len(pre + logic), 'chars')
