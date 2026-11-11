"""Build king/king.js (Kajabi-injectable) from king/page/index.html.

Same approach as dl/build.py: all CSS scoped under #kb, markup injected into #kb-root,
asset URLs made absolute, Kajabi header/footer hidden, page script appended.
Run:  python3 king/build.py   then   node --check king/king.js
"""
import re, json, os

D = os.path.dirname(os.path.abspath(__file__)) + '/'
GH = 'https://avivmalka123.github.io/'
BASE = GH + 'king/'
SRC = D + 'page/index.html'

s = open(SRC, encoding='utf-8').read()
head = s[:s.index('<body')]
links = ''.join(re.findall(r'<link[^>]+fonts\.(?:googleapis|gstatic)[^>]*>', head))
css = '\n'.join(re.findall(r'<style[^>]*>(.*?)</style>', head, re.S))
bodym = re.search(r'<body[^>]*>(.*)</body>', s, re.S).group(1)
scripts = re.findall(r'<script>(.*?)</script>', bodym, re.S)
body = re.sub(r'<script>.*?</script>', '', bodym, flags=re.S)
logic = '\n'.join(scripts)

# asset URLs: ../img/x -> absolute
for q in ('"', "'", '('):
    body = body.replace(q + '../img/', q + BASE + 'img/')
    css = css.replace(q + '../img/', q + BASE + 'img/')
    logic = logic.replace(q + '../img/', q + BASE + 'img/')
assert '../img/' not in body + css + logic, 'relative img path left'

ROOT = '#kb'


def scope_sel(x):
    x = x.strip()
    if not x:
        return x
    if x in (':root', 'html', 'body', 'html,body'):
        return ROOT
    if x == '*':
        return ROOT + ' *'
    if re.match(r'^(from|to|\d+(\.\d+)?%)$', x):
        return x
    x = re.sub(r'^(html|body)\s+', '', x)
    x = re.sub(r'^:root\s*', '', x)
    if x.startswith('#kb') and not x.startswith('#kb-'):
        return x
    return ROOT + ' ' + x


def scope_block(block):
    out = []
    for m in re.finditer(r'([^{}]+)\{([^{}]*)\}', block):
        sel, decl = m.group(1).strip(), m.group(2)
        sels = [scope_sel(x) for x in sel.split(',')]
        out.append(','.join(dict.fromkeys(sels)) + '{' + decl + '}')
    return '\n'.join(out)


res, i = [], 0
at = re.compile(r'@(media|keyframes|supports|font-face|-webkit-keyframes)[^{]*\{')
while i < len(css):
    m = at.search(css, i)
    if not m:
        res.append(scope_block(css[i:])); break
    res.append(scope_block(css[i:m.start()]))
    depth, j = 1, m.end()
    while depth:
        depth += {'{': 1, '}': -1}.get(css[j], 0); j += 1
    inner = css[m.end():j - 1]
    kind = m.group(1)
    if kind in ('keyframes', '-webkit-keyframes', 'font-face'):
        res.append(css[m.start():m.end()] + inner + '}')
    else:
        res.append(css[m.start():m.end()] + scope_block(inner) + '}')
    i = j

# Kajabi theme resets (its theme styles headings, links, inputs, text-align on mobile)
reset = (
    "\n#kb{direction:rtl;text-align:right}"
    "\n#kb h1,#kb h2,#kb h3,#kb h4,#kb p,#kb ul,#kb ol,#kb figure{margin-top:0}"
    "\n#kb a{text-decoration:none}#kb img{max-width:100%;height:auto}"
    "\n#kb button,#kb input{font-family:inherit;letter-spacing:normal;text-transform:none}"
)
scoped = '\n'.join(res) + reset

# root element from the page: wrap body markup in <div id="kb">
markup = links + '<style>' + scoped + '</style><div id="kb" dir="rtl">' + body + '</div>'

BG = os.environ.get('KB_BG', '#06143D')
pre = ("/* Aviv Malka backend landing page (Kajabi www.avivmalka.com/backend; source king/page/index.html, built by king/build.py) */\n(function(){\n"
       " var root=document.getElementById('kb-root'); if(!root){root=document.createElement('div');root.id='kb-root';document.body.appendChild(root);}\n"
       " try{ document.body.style.background='" + BG + "'; document.body.style.margin='0'; var p=root.parentElement; while(p && p!==document.body){ p.style.backgroundColor='transparent'; p.style.backgroundImage='none'; if(/section|container|row|col|sizer|block/.test(p.className||'')){ p.style.padding='0'; p.style.margin='0'; p.style.maxWidth='none'; p.style.width='100%'; } p=p.parentElement; } document.querySelectorAll('header.header, footer.footer, .header, .footer').forEach(function(el){ if(!root.contains(el)) el.style.display='none'; }); var hs=document.createElement('style'); hs.textContent='.block-type--video{display:none !important} html,body{overflow-x:hidden} @media (max-width:899px){#enable-toolbar-trigger{transform:translateY(-150px) !important}}'; document.head.appendChild(hs); }catch(e){}\n"
       " root.innerHTML=" + json.dumps(markup, ensure_ascii=False) + ";\n})();\n")
open(D + 'king.js', 'w', encoding='utf-8').write(pre + logic + '\n')
print('king.js', len(pre + logic), 'chars')
