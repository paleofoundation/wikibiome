from pathlib import Path
import json,subprocess,hashlib,copy,re
P=Path(__file__).resolve().parent;R=P.parents[2];BASE='11f98e336f46648b5440f14816680c5deac1c82b';SOURCE='haddad-2024-heavy-metals-vitamin-d-pth-ra-fibromyalgia';DOI='10.21203/rs.3.rs-4596002/v1';C=json.loads((P/'ADDITIONS-v2-UNAPPLIED.json').read_text());S=json.loads((P/'SELECTION-GATE-PROPOSAL.json').read_text());sha=lambda b:hashlib.sha256(b).hexdigest();get=lambda f:subprocess.check_output(['git','-C',str(R),'show',BASE+':'+f]);oldraw=get('src/content.generated.json');old=json.loads(oldraw);assert len(C['records'])==20
# Exact prospective candidate application. The source review receipt must exist before executing.
assert (P/'ROOT-SOURCE-AUDIT.json').exists(),'Independent source audit is required before application'
for x in S['selectedProposed']:
 f=x['sourcePath'];text=get(f).decode();assert (R/f).read_bytes()==get(f),'working source changed unexpectedly: '+f
 for fix in C['existingNarrowing']:
  if fix['pageId']==x['id']:assert text.count(fix['oldExact'])==1;text=text.replace(fix['oldExact'],fix['newExact'])
 rows=[r for r in C['records'] if r['pageId']==x['id']];assert len(rows)==2
 text=text.rstrip()+'\n\n## Reading the cited evidence\n\n'+'\n\n'.join(r['text']+r['publicSuffix'] for r in rows)+'\n';(R/f).write_text(text)
f='wiki/sources/'+SOURCE+'.md';text=get(f).decode();assert (R/f).read_bytes()==get(f);assert text.count('doi: "not yet verified"')==1;text=text.replace('doi: "not yet verified"','doi: "'+DOI+'"');(R/f).write_text(text)
# Reuse the unchanged canonical producer. Only its private output destination is redirected.
scratch=R.parent/'candidate-generator.json';producer=R/'scripts/build-content.cjs';nodecode="""const fs=require('fs'),path=require('path'),Module=require('module');const f=path.resolve('scripts/build-content.cjs');let s=fs.readFileSync(f,'utf8');const old=\"const OUTPUT_PATH = path.join(__dirname, '..', 'src', 'content.generated.json');\";if(!s.includes(old))throw Error('unexpected producer');s=s.replace(old,'const OUTPUT_PATH = '+JSON.stringify(process.argv[1])+';');const m=new Module(f,module);m.filename=f;m.paths=Module._nodeModulePaths(path.dirname(f));m._compile(s,f);"""
result=subprocess.run(['node','-e',nodecode,str(scratch)],cwd=R,capture_output=True,text=True);(P/'GENERATOR-final.log').write_text(result.stdout+result.stderr);assert result.returncode==0,result.stderr;raw=scratch.read_text();new=json.loads(raw);fresh=new['_generated'];new['_generated']=old['_generated'];selected={r['id'] for r in S['selectedProposed']}
for k in old:
 if k not in ['pages','sourceLookup']:assert old[k]==new[k],'forbidden top-level collateral: '+k
assert len(old['pages'])==len(new['pages'])==863
for i,(a,b) in enumerate(zip(old['pages'],new['pages'])):
 assert a['id']==b['id']
 if a['id'] not in selected:assert a==b,('unselected page collateral',i,a['id'])
 else:
  for k in a:
   if k not in ['overview','sections','wikilinks']:assert a[k]==b[k],('forbidden selected field',a['id'],k)
assert set(old['sourceLookup'])==set(new['sourceLookup'])
for sid,a in old['sourceLookup'].items():
 expected=copy.deepcopy(a)
 if sid==SOURCE:expected['doi']=DOI
 assert new['sourceLookup'][sid]==expected,('unallowed source change',sid)
# Freeze the one global generated timestamp. No other producer field is edited.
assert raw.count('"_generated": '+json.dumps(fresh))==1;raw=raw.replace('"_generated": '+json.dumps(fresh),'"_generated": '+json.dumps(old['_generated']),1);assert json.loads(raw)==new;(R/'src/content.generated.json').write_text(raw)
f='wiki/log.md';log=get(f).decode();assert (R/f).read_bytes()==get(f);(R/f).write_text(log+('\n' if not log.endswith('\n\n') else '')+'2026-10-27 - FILL-THIN-WB-1: added 20 source-located qualitative passages to ten existing concept pages, narrowed the Irving-Williams universal-ligand statement, and applied only the granted Haddad preprint DOI binding; no new records, counts, renderer, index, sitemap or release. Scientific and human review remain pending.\n')
(P/'APPLIED.json').write_text(json.dumps({'base':BASE,'candidateSha256':sha((P/'ADDITIONS-v2-UNAPPLIED.json').read_bytes()),'newParagraphs':20,'existingNarrowings':1,'selectedIds':sorted(selected),'sourceDOIChangeOnly':SOURCE,'globalTimestampRetained':old['_generated'],'canonicalSha256':sha((R/'src/content.generated.json').read_bytes()),'allForbiddenTopLevelObjectsExact':True,'allOtherSourceObjectsExact':True,'newCanonicalRecords':0,'newScientificNumbers':0,'scientificApproval':False},indent=2)+'\n');print((P/'APPLIED.json').read_text())
