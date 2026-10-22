"""Build skira/skira.js (Kajabi-injectable) from skira/index.html.
CSS scoped under #sk, markup injected into #sk-root (created at the end of <body>), asset URLs absolute.
The original Kajabi sections stay in the DOM (hidden) so the real form 2148213109 still submits;
their video players are removed so nothing plays twice.
Run:  python3 skira/build.py   then   node --check skira/skira.js
"""
import re, json, os

D = os.path.dirname(os.path.abspath(__file__)) + '/'
GH = 'https://avivmalka123.github.io/'
BASE = GH + 'skira/'
BG = '#FAF8F3'

s = open(D + 'index.html', encoding='utf-8').read()
css = re.search(r'<style>(.*?)</style>', s, re.S).group(1)
body = re.search(r'<body>(.*?)<script>\n\(function', s, re.S).group(1)
logic = s[s.index('<script>\n(function') + len('<script>'):s.rindex('</script>')]
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
                sels.append('#sk'); continue
            if x == '*':
                sels.append('#sk *'); continue
            if re.match(r'^(from|to|\d+%)', x):
                sels.append(x); continue
            sels.append('#sk ' + x)
        out.append(','.join(dict.fromkeys(sels)) + '{' + decl + '}')
    return '\n'.join(out)


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

scoped = '\n'.join(res) + (
    "\n#sk h1,#sk h2,#sk h3,#sk p,#sk a,#sk button,#sk span,#sk b,#sk small,#sk li,#sk input,#sk label,#sk em"
    "{font-family:'Heebo',Arial,sans-serif;letter-spacing:normal;text-transform:none}"
    "\n#sk h1,#sk h2,#sk h3{color:#121318}#sk p{margin-top:0}#sk ol,#sk ul{margin-top:0}#sk img{height:auto}"
    "\n#sk .cover img,#sk .it .th img,#sk .un img,#sk .sc img,#sk .mt img{height:100%}#sk .mt img{height:300px}"
    "\n@media (max-width:620px){#sk .mt img{height:230px}}#sk .sc img{height:200px}"
)
markup = ('<link href="https://fonts.googleapis.com/css2?family=Heebo:wght@400;500;700;800;900&display=swap" rel="stylesheet">'
          '<style>' + scoped + '</style><div id="sk" dir="rtl">' + body + '</div>')

pre = ("/* Aviv Malka: skira-weekly 9-day challenge page (loaded from Kajabi; source skira/index.html, built by skira/build.py) */\n(function(){\n"
       " var root=document.getElementById('sk-root'); if(!root){root=document.createElement('div');root.id='sk-root';document.body.appendChild(root);}\n"
       " try{ document.body.style.background='" + BG + "';"
       " document.querySelectorAll('[data-section-id], section.section, header.header, footer.footer').forEach(function(el){ if(!el.contains(root)){ el.style.position='absolute'; el.style.left='-9999px'; el.style.height='0'; el.style.overflow='hidden'; } });"
       " document.querySelectorAll('[id^=vidalytics_embed_], .wistia_embed, .wistia_responsive_padding, .block-type--video').forEach(function(el){ if(!el.closest('#sk-root')) el.parentNode && el.parentNode.removeChild(el); });"
       " }catch(e){}\n"
       " root.innerHTML=" + json.dumps(markup, ensure_ascii=False) + ";\n})();\n")

open(D + 'skira.js', 'w', encoding='utf-8').write(pre + logic)
print('skira.js', len(pre + logic), 'chars')
