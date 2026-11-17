"""usage: gen.py NAME ASPECT 'prompt' -> nano-banana-pro 2K into king/img/src (logs credits)"""
import os, sys, json, time, urllib.request
KEY=os.environ['TRICK_STUDIO_API_KEY']; B='https://www.trick-studio.com/api/v1'
OUT=os.path.dirname(os.path.abspath(__file__))+'/img/src'; os.makedirs(OUT,exist_ok=True)
def call(m,p,b=None):
    r=urllib.request.Request(B+p,data=json.dumps(b).encode() if b else None,method=m,headers={'Authorization':'Bearer '+KEY,'Content-Type':'application/json'})
    return json.loads(urllib.request.urlopen(r,timeout=120).read())
name,aspect,prompt=sys.argv[1],sys.argv[2],sys.argv[3]
j=call('POST','/generations',{'model':'nano-banana-pro','prompt':prompt+' Absolutely no text, no letters, no numbers, no logos anywhere.','aspect_ratio':aspect,'resolution':'2K'})
gid=j.get('id') or j.get('generation',{}).get('id'); print('SUBMITTED',name,j.get('credit_cost'))
open(OUT+'/log.jsonl','a').write(json.dumps({'name':name,'id':gid,'cost':j.get('credit_cost')})+'\n')
t0=time.time(); d=3
while time.time()-t0<900:
    time.sleep(d); d=min(d*1.5,15); g=call('GET','/generations/'+gid)
    if g.get('status')=='completed': urllib.request.urlretrieve(g['url'],f'{OUT}/{name}.png'); print('DONE',name); sys.exit(0)
    if g.get('status')=='failed': print('FAILED',name,g.get('error')); sys.exit(1)
print('TIMEOUT'); sys.exit(1)
