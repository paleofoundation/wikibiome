from pathlib import Path
import json,subprocess,hashlib,re,copy
P=Path(__file__).resolve().parent;R=P.parents[2];BASE='11f98e336f46648b5440f14816680c5deac1c82b';F='src/content.generated.json';srcid='haddad-2024-heavy-metals-vitamin-d-pth-ra-fibromyalgia';doi='10.21203/rs.3.rs-4596002/v1';sha=lambda b:hashlib.sha256(b).hexdigest();base=lambda f:subprocess.check_output(['git','-C',str(R),'show',BASE+':'+f]);C=json.loads((P/'ADDITIONS-v2-UNAPPLIED.json').read_text());S=json.loads((P/'SELECTION-GATE-PROPOSAL.json').read_text());selected={r['id'] for r in S['selectedProposed']};oldraw=base(F).decode();newraw=(R/F).read_text();a=json.loads(oldraw);b=json.loads(newraw);dec=json.JSONDecoder()
def array_spans(text,key):
 i=re.search('"'+key+'"\\s*:\\s*\\[',text).end();out=[]
 while True:
  while text[i].isspace() or text[i]==',':i+=1
  if text[i]==']':return out
  start=i;x,i=dec.raw_decode(text,i);out.append((x,text[start:i]))
def source_spans(text):
 i=re.search('"sourceLookup"\\s*:\\s*\\{',text).end();out={}
 while True:
  while text[i].isspace() or text[i]==',':i+=1
  if text[i]=='}':return out
  key,i=dec.raw_decode(text,i)
  while text[i].isspace() or text[i]==':':i+=1
  start=i;x,i=dec.raw_decode(text,i);out[key]=(x,text[start:i])
for k in a:
 if k not in ['pages','sourceLookup']:assert a[k]==b[k],k
old=array_spans(oldraw,'pages');new=array_spans(newraw,'pages');assert len(old)==len(new)==863;unchanged=[];changed=[]
for i,((x,xraw),(y,yraw)) in enumerate(zip(old,new)):
 assert x['id']==y['id']
 if x['id'] not in selected:assert xraw==yraw;unchanged.append({'index':i,'id':x['id'],'rawSha256':sha(xraw.encode())})
 else:
  for k in x:
   if k not in ['overview','sections','wikilinks']:assert x[k]==y[k],(i,x['id'],k)
  added=[r for r in C['records'] if r['pageId']==x['id']];assert len(added)==2
  for row in added:assert sum((row['text']+row['publicSuffix']) in sec['body'] for sec in y['sections'])==1
  changed.append({'index':i,'id':x['id'],'beforeRawSha256':sha(xraw.encode()),'afterRawSha256':sha(yraw.encode())})
assert len(unchanged)==853 and len(changed)==10
sa=source_spans(oldraw);sb=source_spans(newraw);assert set(sa)==set(sb) and len(sa)==1939;sourcehashes=[]
for id,(x,xraw) in sa.items():
 y,yraw=sb[id]
 if id==srcid:assert yraw==xraw.replace('"doi": "not yet verified"','"doi": "'+doi+'"')
 else:assert xraw==yraw
 sourcehashes.append({'id':id,'beforeRawSha256':sha(xraw.encode()),'afterRawSha256':sha(yraw.encode()),'authorizedDoiOnly':id==srcid})
allowed={F,'wiki/log.md','wiki/sources/'+srcid+'.md',*[r['sourcePath'] for r in S['selectedProposed']]};frozen=json.loads((P/'BASE-FROZEN-TRACKED.json').read_text());preserved=[]
for f,h in frozen.items():
 if f in allowed:continue
 assert sha((R/f).read_bytes())==h,f;preserved.append(f)
for x in S['selectedProposed']:
 f=x['sourcePath'];text=base(f).decode()
 for fix in C['existingNarrowing']:
  if fix['pageId']==x['id']:text=text.replace(fix['oldExact'],fix['newExact'])
 text=text.rstrip()+'\n\n## Reading the cited evidence\n\n'+'\n\n'.join(r['text']+r['publicSuffix'] for r in C['records'] if r['pageId']==x['id'])+'\n';assert (R/f).read_text()==text,f
assert (R/('wiki/sources/'+srcid+'.md')).read_bytes()==base('wiki/sources/'+srcid+'.md').replace(b'doi: "not yet verified"',('doi: "'+doi+'"').encode())
assert (R/'wiki/log.md').read_bytes().startswith(base('wiki/log.md'));lines=(R/'wiki/log.md').read_text()[len(base('wiki/log.md').decode()):].strip().splitlines();assert len(lines)==1 and lines[0].startswith('2026-10-27 - FILL-THIN-WB-1:')
for row in C['records']:
 assert not re.search(r'\d|%',row['text'].replace('HPV16','HPV'));assert not any(c in row['text']+row['publicSuffix'] for c in '\u2013\u2014');assert row['sourceId'] in a['sourceLookup'];assert row['sourceUrl']=='https://doi.org/'+b['sourceLookup'][row['sourceId']]['doi']
for f in ['thin_audit.py','audit_pages.py']:assert (P/f).read_bytes()==(R.parents[1]/'fill-thin-pep-1/checkout/research/batches/FILL-THIN-PEP-6-20261027'/f).read_bytes()
paths=subprocess.check_output(['git','-C',str(R),'diff','--name-only',BASE],text=True).splitlines();assert set(paths)<=allowed
out={'status':'PASS','base':BASE,'canonicalSha256':sha((R/F).read_bytes()),'selectedOrderedOccurrences':changed,'outside853OrderedRawPageObjectsExact':unchanged,'all1939RawSources':sourcehashes,'all4915OtherTrackedFilesExact':preserved,'globalTimestampStatsGraphBacklinksCountsExact':True,'newScientificNumbers':0,'newPublicProseDashes':0,'newRecords':0,'producerScriptsUnchanged':True,'analyzerUnchanged':True,'oneGrantedDoiOnly':srcid,'oneLogBookend':True,'scientificApproval':False,'humanApproval':False};(P/'PRESERVATION.json').write_text(json.dumps(out,indent=2)+'\n');print(json.dumps({k:v for k,v in out.items() if k not in ['outside853OrderedRawPageObjectsExact','all1939RawSources','all4915OtherTrackedFilesExact','selectedOrderedOccurrences']}))
