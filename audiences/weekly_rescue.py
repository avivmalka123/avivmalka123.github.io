# -*- coding: utf-8 -*-
"""Weekly: pull the rescue candidates from the data worker (leads marked irrelevant in the last 7 days that match the
closing pattern) and add the strong ones (score >= 4) to the ToChat campaign "להציל מהמתים רלוונטיים".
Needs LC_APP_KEY in ~/.config/livecoach/.env and the campaign to exist in ToChat (created once by hand)."""
import json, os, sys, urllib.request
ENV = {}
for line in open(os.path.expanduser('~/.config/livecoach/.env')):
    if '=' in line and not line.startswith('#'):
        k, v = line.rstrip('\n').split('=', 1); ENV[k] = v
W = 'https://livecoach-data.aviv1988.workers.dev'; KEY = ENV['LC_APP_KEY']
DAYS = int(sys.argv[1]) if len(sys.argv) > 1 else 7; MIN_SCORE = int(sys.argv[2]) if len(sys.argv) > 2 else 4
def call(path, body=None):
    req = urllib.request.Request(W + path, data=json.dumps(body).encode() if body else None, headers={'x-app-key': KEY, 'content-type': 'application/json'}, method='POST' if body else 'GET')
    with urllib.request.urlopen(req, timeout=300) as r: return json.load(r)
r = call(f'/rescue?days={DAYS}&fresh=1')
picked = [c for c in r['candidates'] if c['score'] >= MIN_SCORE]
print(f"scanned {r['scanned']} irrelevant in {DAYS} days → {len(r['candidates'])} candidates → {len(picked)} with score ≥ {MIN_SCORE}")
if not picked: sys.exit(0)
leads = [{'phone': c['phone'], 'name': c['name'], 'fireberry_id': c['fireberry_id'],
          'notes': 'הצלה: ' + c['why'] + ((' | שיחה אחרונה ' + c['last_call']['rep'] + ' ' + c['last_call']['dur'] + ': ' + (c['last_call']['ai'] or '')[:300]) if c.get('last_call') else '')} for c in picked]
res = call('/rescue/add', {'campaign': 'להציל מהמתים רלוונטיים', 'leads': leads})
print(json.dumps({k: v for k, v in res.items() if k != 'campaigns'}, ensure_ascii=False)[:600])
if ENV.get('TELEGRAM_BOT_TOKEN') is None:
    menv = {}
    for line in open(os.path.expanduser('~/.claude/mcp-servers/meta-ads/.env')):
        if '=' in line and not line.startswith('#'):
            k, v = line.rstrip('\n').split('=', 1); menv[k] = v
    ENV.update({k: menv[k] for k in ('TELEGRAM_BOT_TOKEN', 'TELEGRAM_CHAT_ID') if k in menv})
if ENV.get('TELEGRAM_BOT_TOKEN') and res.get('ok'):
    msg = f"🛟 להציל מהמתים: {len(picked)} לידים נוספו לקמפיין בטוצ'אט (מתוך {r['scanned']} שסומנו לא רלוונטי ב-{DAYS} ימים)\n" + '\n'.join(f"• {c['name']} ({c['score']}): {c['why']}" for c in picked[:15])
    import urllib.parse
    urllib.request.urlopen(urllib.request.Request(f"https://api.telegram.org/bot{ENV['TELEGRAM_BOT_TOKEN']}/sendMessage", data=urllib.parse.urlencode({'chat_id': ENV['TELEGRAM_CHAT_ID'], 'text': msg}).encode())).read()
