# -*- coding: utf-8 -*-
"""Score every lead in Fireberry + ToChat and split into Meta audiences.
Inputs (json): fb accounts, tochat open leads, tochat closed YTD, fireberry call-summary notes YTD.
Output: /tmp/audiences.json  {audience_key: [ {phone, email, name, score, reasons} ]}  (PII, never commit)
"""
import json,re,collections,datetime as dt,sys
NOW=dt.datetime.now()
fb=json.load(open(sys.argv[1] if len(sys.argv)>1 else '/tmp/fb_all_accounts.json'))
op=json.load(open('/tmp/tc_open_all.json')); cl=json.load(open('/tmp/tc_closed_ytd.json')); notes=json.load(open('/tmp/fb_call_notes_ytd.json'))
def toi(v):
    try: return int(v)
    except: return 0
def n9(p): d=re.sub(r'\D','',str(p or '')); return d[-9:] if len(d)>=9 else ''
def pd(s):
    try: return dt.datetime.strptime(str(s)[:19],'%Y-%m-%dT%H:%M:%S')
    except:
        try: return dt.datetime.strptime(str(s)[:10],'%Y-%m-%d')
        except: return None
L={}
byid={}
for a in fb:
    p=n9(a.get('telephone1'))
    if not p: continue
    x=L.setdefault(p,{'phone':p,'name':a.get('accountname') or '','email':'','status':None,'level':0,'ref':'','type':None,'webinar':'','repeat':0,'created':None,'modified':None,'owner':'','fb_ids':[],'calls':0,'talk':0,'longest':0,'last_call':None,'reps':set(),'tc_irrelevant':0,'tc_closed':0,'tc_attempts_exceeded':0,'tc_followup':False,'tc_pending':False,'tc_attempts':0,'tc_last':None,'irr_reasons':[]})
    x['fb_ids'].append(a['accountid']); byid[a['accountid']]=p
    if a.get('emailaddress1') and '@' in str(a['emailaddress1']): x['email']=str(a['emailaddress1']).strip().lower()
    c=pd(a.get('createdon')); m=pd(a.get('modifiedon'))
    if c and (not x['created'] or c<x['created']): x['created']=c
    if m and (not x['modified'] or m>x['modified']): x['modified']=m
    st=toi(a.get('statuscode'))
    if st in (2,13): x['status']='customer'
    elif x['status']!='customer': x['status']=st
    lv=toi(a.get('pcfsystemfield104'))
    if lv and (lv in (4,5,6,7,8) or not x['level']): x['level']=lv
    if a.get('pcfsystemfield106'): x['ref']=a['pcfsystemfield106']
    if toi(a.get('accounttypecode')): x['type']=toi(a.get('accounttypecode'))
    if a.get('pcfsystemfield138'): x['webinar']=a['pcfsystemfield138']
    x['repeat']=max(x['repeat'],toi(a.get('pcfsystemfield135')))
    x['owner']=a.get('ownername') or x['owner']
for n in notes:
    p=byid.get(n['o'])
    if not p: continue
    x=L[p]; m=re.search(r'משך שיחה:\s*([\d:]+)',n['n']); r=re.search(r'נציג:\s*(.+)',n['n'])
    sec=0
    if m:
        a=[int(v) for v in m.group(1).split(':')]; sec=a[0]*60+a[1] if len(a)==2 else a[0]*3600+a[1]*60+a[2]
    if sec<15: continue
    x['calls']+=1; x['talk']+=sec; x['longest']=max(x['longest'],sec); t=pd(n['t'])
    if t and (not x['last_call'] or t>x['last_call']): x['last_call']=t
    if r: x['reps'].add(r.group(1).strip())
for c in cl:
    p=n9(c.get('displayPhone'))
    if p not in L: continue
    x=L[p]; t=pd(str(c.get('timestamp','')).replace('Z',''))
    if c['reason']=='CLOSED': x['tc_closed']+=1; x['status']='customer'
    elif c['reason']=='IRRELEVANT': x['tc_irrelevant']+=1; sr=(c.get('subReason') or {}).get('name'); x['irr_reasons'].append(sr or '')
    else: x['tc_attempts_exceeded']+=1
    if t and (not x['tc_last'] or t>x['tc_last']): x['tc_last']=t
for o in op:
    p=n9(o.get('displayPhone'))
    if p not in L: continue
    x=L[p]
    if o.get('status') in ('FOLLOWUP','INCOMING_FOLLOWUP'): x['tc_followup']=True
    else: x['tc_pending']=True
    x['tc_attempts']=max(x['tc_attempts'],o.get('callAttempts') or 0)
    t=pd(str(o.get('lastCall') or '').replace('Z',''))
    if t and (not x['tc_last'] or t>x['tc_last']): x['tc_last']=t
DNC={'ביקש לא להתקשר אליו','שם פרטים בטעות','לא נרשם'}
customers=[]; scored=[]
for x in L.values():
    if x['status']=='customer': customers.append(x); continue
    if any(r in DNC for r in x['irr_reasons']): continue
    s=0; why=[]
    if x['longest']>=600: s+=40; why.append('שיחה של '+str(x['longest']//60)+" דק'")
    elif x['longest']>=180: s+=20; why.append('שיחה של '+str(x['longest']//60)+" דק'")
    if x['calls']>=2: s+=12; why.append(str(x['calls'])+' שיחות')
    if x['webinar']: s+=12; why.append('נרשם לוובינר')
    if x['level'] in (4,6): s+=15; why.append('❤️/היה בוובינר')
    if x['level']==5: s+=10; why.append('צפה בהקלטה')
    if x['level']==8: s+=6; why.append('לא הגיע לוובינר')
    contents=set()
    if x['level']==1 or x['type']==2 or x['ref']=='fb-hadracha': contents.add('training')
    if x['level']==3 or x['ref']=='mini-course': contents.add('mini')
    if x['webinar'] or x['level'] in (4,5,6,7,8): contents.add('webinar')
    if len(contents)>=2: s+=12; why.append('צרך 2+ תכנים')
    if x['repeat']==2: s+=6; why.append('השאיר פרטים שוב')
    if x['tc_followup']: s+=10; why.append('ב-Follow Up')
    last=max([d for d in (x['last_call'],x['tc_last'],x['modified']) if d],default=None)
    age=(NOW-last).days if last else 999
    if age<=30: s+=15
    elif age<=90: s+=8
    elif age>365: s-=15
    if x['tc_irrelevant']>=3 and x['longest']<180: s-=10
    x['score']=s; x['why']=why; x['age']=age; x['contents']=contents
    scored.append(x)
def out(xs): return [{'phone':'0'+x['phone'],'email':x['email'],'name':x['name'],'score':x.get('score',0),'why':', '.join(x.get('why',[])),'last_days':x.get('age'),'owner':x['owner']} for x in xs]
A={}
A['hot_long_call']=out(sorted([x for x in scored if x['longest']>=600 and x['age']<=180],key=lambda x:-x['score']))
A['webinar_no_close']=out(sorted([x for x in scored if (x['webinar'] or x['level'] in (4,5,6,7,8)) and x['age']<=180 and x['longest']<600],key=lambda x:-x['score']))
A['one_content_only']=out(sorted([x for x in scored if len(x['contents'])==1 and 'webinar' not in x['contents'] and x['age']<=120],key=lambda x:-x['score']))
A['followup_repeat']=out(sorted([x for x in scored if (x['tc_followup'] or x['repeat']==2) and x['age']<=90 and x['longest']<600],key=lambda x:-x['score']))
A['never_called']=out(sorted([x for x in scored if x['calls']==0 and x['tc_attempts']==0 and x['created'] and (NOW-x['created']).days<=90],key=lambda x:-x['score']))
A['customers_2026']=out([x for x in customers if (x['tc_last'] and x['tc_last'].year==2026) or (x['modified'] and x['modified'].year==2026)])
A['top_hot_500']=out(sorted(scored,key=lambda x:-x['score'])[:500])
json.dump(A,open('/tmp/audiences.json','w'),ensure_ascii=False)
print('leads:',len(L),'| customers:',len(customers),'| scorable:',len(scored))
for k,v in A.items(): print(k,len(v),'| with email:',sum(1 for r in v if r['email']),'| top:',[ (r['name'],r['score'],r['why'][:60]) for r in v[:2]])
print('score dist:',collections.Counter(min(100,max(-20,x['score'])//10*10) for x in scored).most_common())
