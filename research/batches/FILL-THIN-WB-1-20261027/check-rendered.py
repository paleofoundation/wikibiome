from pathlib import Path
import json,sys,hashlib,re
from bs4 import BeautifulSoup
P=Path(__file__).resolve().parent;R=P.parents[2];before=Path(sys.argv[1]);after=Path(sys.argv[2]);C=json.loads((P/'ADDITIONS-v2-UNAPPLIED.json').read_text());S=json.loads((P/'SELECTION-GATE-PROPOSAL.json').read_text());selected={r['id']:r for r in S['selectedProposed']};DOI='10.21203/rs.3.rs-4596002/v1';newDOIHtml='. <a href="https://doi.org/'+DOI+'" target="_blank" rel="noopener noreferrer" style="color:#b87333;text-decoration:underline;font-size:12px;">doi:'+DOI+'</a>';sha=lambda b:hashlib.sha256(b).hexdigest();d=json.loads((R/'src/content.generated.json').read_text());meta=d['sourceLookup'];results=[]
def article(path):
 raw=path.read_text();soup=BeautifulSoup(raw,'lxml');ar=soup.select_one('article.static-content');assert ar,path;return raw,soup,ar
for id,sel in selected.items():
 p=Path('article')/id/'index.html';old,ss,oa=article(before/p);new,s,a=article(after/p);rows=[r for r in C['records'] if r['pageId']==id];ids=[n['id'] for n in a.select('[id]')];assert len(ids)==len(set(ids)),id
 for r in rows:
  paras=[p for p in a.find_all('p') if r['text'] in p.get_text(' ',strip=True)];assert len(paras)==1,(id,r['id']);para=paras[0];assert r['locator'] in para.get_text(' ',strip=True);links=para.select('sup.cite-sup a');assert len(links)==1 and links[0]['href'].startswith('#ref-');ref=a.select_one(links[0]['href']);assert ref and any(n.get('href')==r['sourceUrl'] for n in ref.find_all('a')),(r['id'],'reference URL');assert not any(c in para.get_text(' ',strip=True) for c in '\u2013\u2014'),r['id']
 for fix in C['existingNarrowing']:
  if fix['pageId']==id:assert fix['newExact'].split(' (Source locator:')[0] in a.get_text(' ',strip=True);assert fix['oldExact'] not in a.get_text(' ',strip=True)
 results.append({'id':id,'newParagraphs':2,'exactTextSourceLocatorURL':True,'beforeRawSHA256':sha(old.encode()),'afterRawSHA256':sha(new.encode()),'newProseDashes':0,'inheritedPageDashes':sum(a.get_text().count(c) for c in '\u2013\u2014')})
outside=[];doiOnly=[];failed=[]
for f in sorted(before.glob('article/*/index.html')):
 id=f.parent.name
 if id in selected:continue
 rel=f.relative_to(before);g=after/rel;assert g.exists(),rel;aa=article(f)[0];bb=article(g)[0];xa=re.search(r'<article\b[\s\S]*?</article>',aa).group();xb=re.search(r'<article\b[\s\S]*?</article>',bb).group()
 if xa==xb:outside.append({'id':id,'articleRawSHA256':sha(xa.encode())})
 elif newDOIHtml in xb and xa==xb.replace(newDOIHtml,''):doiOnly.append({'id':id,'beforeRawArticleSHA256':sha(xa.encode()),'afterRawArticleSHA256':sha(xb.encode()),'exception':'Exactly granted existing Haddad DOI HTML addition; no other article bytes changed'})
 else:failed.append({'id':id,'before':sha(xa.encode()),'after':sha(xb.encode())})
assert not failed,('unexpected outside article changes',failed)
for name in ['sitemap.xml','sitemap-full.xml','image-sitemap.xml','robots.txt']:assert (before/name).read_bytes()==(after/name).read_bytes(),name+' forbidden change'
# Existing category/home/special visible content must remain exact; only compiled asset paths may differ outside article subtrees.
hubs=[]
for f in sorted(before.glob('**/index.html')):
 rel=f.relative_to(before)
 if rel.parts[0] in ['article','assets']:continue
 g=after/rel;assert g.exists(),str(rel);a=BeautifulSoup(f.read_bytes(),'lxml').select_one('.static-content');b=BeautifulSoup(g.read_bytes(),'lxml').select_one('.static-content');assert str(a)==str(b),('forbidden hub copy change',str(rel));hubs.append({'path':str(rel),'staticContentSHA256':sha(str(a).encode())})
out={'status':'PASS','selected':results,'outsideArticlesRawExact':outside,'outsideArticlesExactlyGrantedDOIOnly':doiOnly,'hubContentExact':hubs,'allSitemapsAndRobotsRawExact':True,'htmlNormalization':'None. For explicitly listed DOI dependents only the one exact granted rendered DOI anchor is removed for comparison; both raw hashes retained.','scientificApproval':False,'humanApproval':False};(P/'RENDERED-CHECK.json').write_text(json.dumps(out,indent=2)+'\n');print(json.dumps({'status':'PASS','selected':len(results),'outsideRawExact':len(outside),'outsideGrantedDoiOnly':len(doiOnly),'hubsExact':len(hubs)}))
