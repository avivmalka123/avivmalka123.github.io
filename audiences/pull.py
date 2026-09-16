# -*- coding: utf-8 -*-
"""Pull everything the scorer needs into /tmp (PII stays local): Fireberry accounts, ToChat campaigns/open/closed YTD, call-summary notes YTD."""
import json,sys,subprocess,time,datetime as dt
A,B,T=sys.argv[1:4]
def curl(url,hdr):
    for i in range(3):
        r=subprocess.run(['curl','-s','--max-time','180','-H',hdr,url],capture_output=True,text=True).stdout
        try: return json.loads(r)
        except: time.sleep(2)
    return None
def fbq(body):
    for i in range(3):
        r=subprocess.run(['curl','-s','--max-time','180','-X','POST','https://api.fireberry.com/api/query','-H','tokenid: '+T,'-H','Content-Type: application/json','-d',json.dumps(body)],capture_output=True,text=True).stdout
        try:
            d=json.loads(r)
            if isinstance(d.get('data'),dict): return d['data']
        except: pass
        time.sleep(2)
    return {}
def fb_all(ot,fields,query=None):
    out=[]; page=1
    while True:
        b={'objecttype':ot,'page_size':500,'page_number':page,'fields':fields,'sort_by':'createdon','sort_type':'asc'}
        if query: b['query']=query
        rows=fbq(b).get('Data') or []; out+=rows
        if len(rows)<500: break
        page+=1
    return out
year=dt.date.today().year; today=dt.date.today().isoformat()
camps=curl(f"{B}/campaigns",'Authorization: Basic '+A) or []
json.dump(camps,open('/tmp/tc_campaigns.json','w'),ensure_ascii=False)
acc=fb_all(1,'accountid,accountname,telephone1,emailaddress1,statuscode,accounttypecode,pcfsystemfield104,pcfsystemfield106,pcfsystemfield138,pcfsystemfield135,pcfsystemfield127,pcfsystemfield107,pcfsystemfield134,ownername,createdon,modifiedon')
json.dump(acc,open('/tmp/fb_all_accounts.json','w'),ensure_ascii=False); print('accounts',len(acc),flush=True)
op=[]; cl=[]
for c in camps:
    rows=curl(f"{B}/tenants/AvivMedia/campaigns/{c['id']}/openLeads",'Authorization: Basic '+A) or []
    for x in rows: x['campaign']=c['name']; op.append(x)
    rows=curl(f"{B}/tenants/AvivMedia/campaigns/{c['id']}/closedLeads?start={year}-01-01&end={today}",'Authorization: Basic '+A) or []
    for x in rows: x['campaign']=c['name']; cl.append(x)
json.dump(op,open('/tmp/tc_open_all.json','w'),ensure_ascii=False); json.dump(cl,open('/tmp/tc_closed_ytd.json','w'),ensure_ascii=False); print('open',len(op),'closed',len(cl),flush=True)
notes=[{'o':x['objectid'],'t':x['createdon'],'n':(x.get('notetext') or '')[:400]} for x in fb_all(7,'noteid,objectid,createdon,notetext',f"(subject = 'סיכום שיחה') AND (createdon >= '{year}-01-01')")]
json.dump(notes,open('/tmp/fb_call_notes_ytd.json','w'),ensure_ascii=False); print('call notes',len(notes),flush=True)
