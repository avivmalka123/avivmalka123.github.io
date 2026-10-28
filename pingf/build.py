"""Build pingf/lp.js and pingf/tr.js (Kajabi-injectable) from pingf/src/{lp,tr}.html + src/common.js.

Each page source is a standalone preview (open pingf/src/lp.html locally; add ?api=http://127.0.0.1:8788 for the local worker).
The built file injects fonts + CSS (every rule prefixed with #pf-root for specificity over the Kajabi theme) + markup into
<div id="pf-root"> of a Kajabi Custom Code block, hides the Kajabi header/footer, then runs common.js and the page logic.
Run:  python3 pingf/build.py   (then node --check pingf/lp.js pingf/tr.js)
"""
import re, json, os

D = os.path.dirname(os.path.abspath(__file__)) + '/'
common = open(D + 'src/common.js', encoding='utf-8').read()


def scope(css):
    out, i = [], 0
    at = re.compile(r'@(media|keyframes|supports)[^{]*\{')

    def block(b):
        res = []
        for m in re.finditer(r'([^{}]+)\{([^{}]*)\}', b):
            sels = []
            for x in m.group(1).split(','):
                x = x.strip()
                sels.append(x if re.match(r'^(from|to|\d+%)$', x) else '#pf-root ' + x)
            res.append(','.join(sels) + '{' + m.group(2) + '}')
        return ''.join(res)
    while i < len(css):
        m = at.search(css, i)
        if not m:
            out.append(block(css[i:])); break
        out.append(block(css[i:m.start()]))
        depth, j = 1, m.end()
        while depth:
            depth += {'{': 1, '}': -1}.get(css[j], 0); j += 1
        inner = css[m.end():j - 1]
        out.append(css[m.start():m.end()] + (inner if m.group(1) == 'keyframes' else block(inner)) + '}')
        i = j
    return ''.join(out)


for name, bg in (('lp', '#FAF8F3'), ('tr', '#FAF8F3')):
    s = open(D + 'src/' + name + '.html', encoding='utf-8').read()
    css = re.search(r'<style>(.*?)</style>', s, re.S).group(1)
    markup = re.search(r'<div id="pf-root">(.*)</div>\s*<script src="common.js">', s, re.S).group(1)
    logic = re.findall(r'<script>(.*?)</script>', s, re.S)[-1]
    css = re.sub(r'/\*.*?\*/', '', css, flags=re.S)
    reset = ('#pf-root .pf h1,#pf-root .pf h2,#pf-root .pf h3,#pf-root .pf h4,#pf-root .pf p,#pf-root .pf a,#pf-root .pf button,#pf-root .pf span,#pf-root .pf li,#pf-root .pf label,#pf-root .pf input,#pf-root .pf small,#pf-root .pf b,#pf-root .pf strong'
             '{font-family:Heebo,Arial,sans-serif;letter-spacing:normal;text-transform:none}#pf-root .pf p{margin-bottom:0}#pf-root .pf ul{margin-bottom:0}')
    html = ('<link href="https://fonts.googleapis.com/css2?family=Heebo:wght@400;500;600;700;800;900&display=swap" rel="stylesheet">'
            '<style>' + scope(css) + reset + '</style>' + markup)
    pre = ("/* training funnel · " + name + " (source pingf/src/" + name + ".html, built by pingf/build.py) */\n(function(){\n"
           " var root=document.getElementById('pf-root'); if(!root){root=document.createElement('div');root.id='pf-root';document.body.appendChild(root);}\n"
           " try{ document.body.style.background='" + bg + "'; var p=root.parentElement; while(p && p!==document.body){ p.style.backgroundColor='" + bg + "'; p.style.backgroundImage='none'; if(/section|container|row|col|sizer|block/.test(p.className||'')){ p.style.padding='0'; p.style.margin='0'; p.style.maxWidth='none'; } p=p.parentElement; }"
           " document.querySelectorAll('header.header, footer.footer, .announcement').forEach(function(el){ el.style.display='none'; }); var hs=document.createElement('style'); hs.textContent='.block-type--video{display:none !important}'; document.head.appendChild(hs); }catch(e){}\n"
           " root.innerHTML=" + json.dumps(html, ensure_ascii=False) + ";\n})();\n")
    out = pre + common + '\n' + logic
    open(D + name + '.js', 'w', encoding='utf-8').write(out)
    print(name + '.js', len(out), 'chars')
