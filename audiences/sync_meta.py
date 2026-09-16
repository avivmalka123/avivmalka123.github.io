# -*- coding: utf-8 -*-
"""Create / refresh the LiveCoach custom audiences (+ lookalikes) in Meta from /tmp/audiences.json.
Members are uploaded as SHA-256 hashes of phone (E.164 digits) + email, per Meta's customer-list spec.
Only the audience ids are kept on disk (audiences/meta_audiences.json). Run: python3 sync_meta.py [--telegram]
"""
import json, hashlib, os, re, sys, time, urllib.request, urllib.parse

ENV = {}
for line in open(os.path.expanduser('~/.claude/mcp-servers/meta-ads/.env')):
    if '=' in line and not line.startswith('#'):
        k, v = line.rstrip('\n').split('=', 1)
        ENV[k] = v
TOKEN = ENV['META_ACCESS_TOKEN']
ACT = 'act_359760337062556'          # Aviv Malka Ecom (training account)
API = 'https://graph.facebook.com/v21.0/'
HERE = os.path.dirname(os.path.abspath(__file__))
IDS_FILE = os.path.join(HERE, 'meta_audiences.json')

# key → (audience name in Meta, description). The name carries the creative angle.
DEFS = {
    'hot_long_call':    ('LC · דיברו 10+ דק׳ ולא סגרו | סיפור לקוח + הוובינר הבא', 'שיחה של 10+ דקות ב-180 הימים האחרונים, לא נסגרו. קריאייטיב: סיפור לקוח שהתלבט וסגר + הזמנה לוובינר הבא'),
    'webinar_no_close': ('LC · נרשמו לוובינר ולא סגרו | ההקלטה + הוובינר הבא', 'נרשמו / היו / לא הגיעו לוובינר ב-180 יום ולא נסגרו. קריאייטיב: ההקלטה + "הוובינר הבא ב-..."'),
    'one_content_only': ('LC · צרכו תוכן אחד בלבד | הרשמה לוובינר', 'הדרכה חינמית או מיני-קורס בלי וובינר. קריאייטיב: הרשמה לוובינר (התוכן השני מכפיל סגירה)'),
    'followup_repeat':  ('LC · Follow Up / השאירו פרטים שוב | הצעה ישירה + קביעת שיחה', 'פתוחים ב-Follow Up או השאירו פרטים פעם נוספת ב-90 יום. קריאייטיב: הצעה ישירה + קביעת שיחה'),
    'never_called':     ('LC · חדשים שלא נגעו בהם | חימום + קבע שיחה', 'לידים מ-90 הימים האחרונים בלי שיחה. קריאייטיב: חימום + "קבע שיחה"'),
    'customers_2026':   ('LC · לקוחות 2026 | Seed ל-Lookalike, לא לטרגט', 'לקוחות שסגרו ב-2026. לא לטרגט, רק ליצירת Lookalike 1-2%'),
}
LOOKALIKES = [  # (seed audience key, ratio, name)
    ('customers_2026', 0.01, 'LC · Lookalike 1% לקוחות 2026 | קהל קר איכותי'),
    ('customers_2026', 0.02, 'LC · Lookalike 2% לקוחות 2026 | קהל קר רחב'),
    ('hot_long_call',  0.01, 'LC · Lookalike 1% חמים (דיברו 10+ דק׳) | דומים למתעניינים'),
]


def api(path, data=None, method='POST'):
    d = dict(data or {})
    d['access_token'] = TOKEN
    body = urllib.parse.urlencode(d).encode() if method == 'POST' else None
    url = API + path + ('' if method == 'POST' else '?' + urllib.parse.urlencode(d))
    req = urllib.request.Request(url, data=body, method=method)
    last = None
    for _ in range(3):
        try:
            with urllib.request.urlopen(req, timeout=180) as r:
                return json.load(r)
        except urllib.error.HTTPError as e:
            last = e.read().decode()[:300]
            time.sleep(3)
    raise RuntimeError(last)


def h(v):
    return hashlib.sha256(v.encode()).hexdigest()


def rows(items):
    out = []
    for r in items:
        ph = ''.join(c for c in r['phone'] if c.isdigit())
        ph = '972' + ph[1:] if ph.startswith('0') else ph
        em = (r.get('email') or '').strip().lower()
        out.append([h(ph), h(em) if em and '@' in em else ''])
    return out


def replace_users(aid, data):
    session = int(time.time() * 1000) % 10 ** 9
    n = len(data)
    batches = [data[i:i + 5000] for i in range(0, n, 5000)] or [[]]
    for i, b in enumerate(batches):
        api(f'{aid}/usersreplace', {
            'payload': json.dumps({'schema': ['PHONE', 'EMAIL'], 'data': b}),
            'session': json.dumps({'session_id': session, 'batch_seq': i + 1, 'last_batch_flag': i == len(batches) - 1, 'estimated_num_total': n}),
        })


def main():
    A = json.load(open('/tmp/audiences.json'))
    ids = json.load(open(IDS_FILE)) if os.path.exists(IDS_FILE) else {}
    def norm(n): return re.sub(r'[^\w|+%/]', '', n)
    existing = {norm(a['name']): a['id'] for a in api(f'{ACT}/customaudiences', {'fields': 'name', 'limit': 500}, 'GET').get('data', [])}
    report = []
    for key, (name, desc) in DEFS.items():
        aid = ids.get(key) or existing.get(norm(name))
        if not aid:
            aid = api(f'{ACT}/customaudiences', {'name': name, 'subtype': 'CUSTOM', 'description': desc, 'customer_file_source': 'USER_PROVIDED_ONLY'})['id']
            print('created', name, aid)
        ids[key] = aid
        data = rows(A.get(key, []))
        replace_users(aid, data)
        report.append((name, len(data)))
        print('synced', name, len(data))
    for seed_key, ratio, name in LOOKALIKES:
        lk = 'lookalike:' + name
        aid = ids.get(lk) or existing.get(norm(name))
        if not aid:
            try:
                aid = api(f'{ACT}/customaudiences', {'name': name, 'subtype': 'LOOKALIKE', 'origin_audience_id': ids[seed_key],
                                                     'lookalike_spec': json.dumps({'type': 'similarity', 'ratio': ratio, 'country': 'IL'})})['id']
                print('created lookalike', name, aid)
            except RuntimeError as e:
                if '2654' in str(e):  # same source + country + size already exists under another name: find and rename it
                    lals = api(f'{ACT}/customaudiences', {'fields': 'name,subtype,lookalike_spec', 'limit': 200}, 'GET').get('data', [])
                    for a in lals:
                        spec = a.get('lookalike_spec') or {}
                        if a.get('subtype') == 'LOOKALIKE' and str(spec.get('origin', [{}])[0].get('id')) == str(ids[seed_key]) and abs(float(spec.get('ratio', 0)) - ratio) < 1e-6:
                            aid = a['id']; api(f'{aid}', {'name': name}); print('reused lookalike', a.get('name'), '→', name, aid); break
                if not aid:
                    print('lookalike skipped', name, str(e)[:160]); continue
        ids[lk] = aid
        report.append((name, 'lookalike'))
    json.dump(ids, open(IDS_FILE, 'w'), ensure_ascii=False, indent=1)
    return report


if __name__ == '__main__':
    rep = main()
    if '--telegram' in sys.argv and ENV.get('TELEGRAM_BOT_TOKEN'):
        msg = ' קהלי LiveCoach עודכנו במטא:\n' + '\n'.join(f'• {n}: {c:,}' if isinstance(c, int) else f'• {n}' for n, c in rep)
        urllib.request.urlopen(urllib.request.Request(
            f"https://api.telegram.org/bot{ENV['TELEGRAM_BOT_TOKEN']}/sendMessage",
            data=urllib.parse.urlencode({'chat_id': ENV['TELEGRAM_CHAT_ID'], 'text': msg}).encode())).read()
