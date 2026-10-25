"""Build course/{course,lesson}.js from src/{course,lesson}_block.html (markup + <script>logic</script>).
Run from anywhere:  python3 course/src/build.py   then   node --check course/lesson.js"""
import json, os
D = os.path.dirname(os.path.abspath(__file__)) + '/'
OUT = os.path.dirname(D.rstrip('/')) + '/'
PAGES = {'course': ('course_block.html', 'ch-root'), 'lesson': ('lesson_block.html', 'ls-root')}
for name, (src, root) in PAGES.items():
    s = open(D + src, encoding='utf-8').read()
    i = s.index('<script>'); j = s.rindex('</script>')
    markup, logic = s[:i], s[i + len('<script>'):j]
    pre = ("/* Aviv Malka course page: %s (loaded from Kajabi; the original sections stay in the DOM so forms/webhooks keep working) */\n(function(){\n"
           " var root=document.getElementById('%s'); if(!root){root=document.createElement('div');root.id='%s';document.body.appendChild(root);}\n"
           " try{ document.body.style.background='#FAF8F3'; document.querySelectorAll('[data-section-id], section.section, header.header, footer.footer').forEach(function(el){ if(!el.contains(root)){ el.style.position='absolute'; el.style.left='-9999px'; el.style.height='0'; el.style.overflow='hidden'; } }); }catch(e){}\n"
           " root.innerHTML=%s;\n})();\n") % (name, root, root, json.dumps(markup, ensure_ascii=False))
    open(OUT + name + '.js', 'w', encoding='utf-8').write(pre + logic)
    print(name, len(pre + logic))
