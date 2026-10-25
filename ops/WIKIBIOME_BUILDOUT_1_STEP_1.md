# WIKIBIOME-BUILDOUT-1, Step 1

Status: DRAFT_DONE, waiting for Elon PASS. No Step 2 work.

The current sitemap advertises 443 URLs that fail the new quality rule. This candidate limits the sitemap to 343 qualifying articles, sets every failing article to noindex, follow, and removes the seven live intervention-page templates through the existing vault-to-Sites sync policy. Pages and references remain available.

Sites base: version 86, `7a95e122e81c6d442311db07331bc2dc0b45aa38`. Candidate: `96ddce9e80a3c68c3dd520e4f8eb5984caedee29`. Synchronized vault source stays `8f8608b6f99c8818cae1617aaecc5d2d9760d04a`. Branch: `codex/wikibiome-buildout-1-step-1` in the Sites checkout and this upstream review checkout. The upstream Vite app is not production.

Exact patch: `ops/patches/wikibiome-buildout-1-step-1-sites.patch`. SHA-256: `07b87e0644253263aefecc703675d360c140cf80b39ce17322cb9844814bfe22`. Apply only to the exact Sites base. Reverse applicability was checked against the candidate. The Sites source commit is local and unpushed. This review packet does not publish a Site version.

The shared gate requires 400 body words, three distinct real vault references, no visible template text, and no Evidence-limited disposition. Intervention and STOP exclusions always win. It excludes missing metadata, DOI duplicates, and Karen Pendergrass records from qualifying reference counts. It writes no article body or replacement citation. Existing article and disease renderers remain the single presentation path.

The literal all-page gate also retires the 37-source exception and removes 32 utility URLs, including the home page and category hubs, from the sitemap. Those pages use noindex, follow because they lack a qualifying cited article body. Existing hubs and links remain. No unstated utility exemption was added. Additional noindex utility pages are `/propose`, `/roundtable`, and `/research-governance`. Dynamic researcher, institution, and accepted-proposal route patterns inherit noindex as recorded in counts.json.

Seven live pages cleaned: curcumin, glutathione-supplementation, gluten-free-diet, melatonin, metformin-intervention, resveratrol, and statin-therapy. The same instructions were removed from a hidden duplicate chelation-therapy record and a cardiovascular signature fragment. Displayed history excerpts are cleaned for these nine identities; exact Git revisions, revision counts, raw history records, links, and citations remain intact. The rendered empty maintenance sections and fallback expansion promise are suppressed. No new scientific prose or sources were added.

THIN below means failure of the new eligibility gate, including explicit exclusions. The fixed denominator is the original 717 sitemap articles. Twelve preexisting noindex articles remain outside that cohort; the build checks all 729 canonical article routes. No article crosses the new threshold in Step 1, which changes indexing policy rather than expanding bodies.

| Section | Before THIN | Before OK | After THIN | After OK |
| --- | ---: | ---: | ---: | ---: |
| analysis | 13 | 4 | 13 | 4 |
| defense | 9 | 20 | 9 | 20 |
| disease | 29 | 36 | 29 | 36 |
| entity | 1 | 4 | 1 | 4 |
| intervention | 69 | 0 | 69 | 0 |
| mechanism | 98 | 141 | 98 | 141 |
| metal | 1 | 23 | 1 | 23 |
| microbe | 108 | 114 | 108 | 114 |
| other | 5 | 0 | 5 | 0 |
| reference | 2 | 0 | 2 | 0 |
| signature | 0 | 1 | 0 | 1 |
| stop | 39 | 0 | 39 | 0 |
| Total | 374 | 343 | 374 | 343 |

Sitemap: **786 before, 343 candidate**, with **443 failing URLs before, zero after**. All 86 Evidence-limited sitemap articles, 69 interventions, and 39 STOPs are excluded. These sets overlap. The full changed-URL list is `ops/evidence/wikibiome-buildout-1-step-1/changed-urls.csv`: 457 concrete URLs, including history pages, sitemap output and three utility pages already outside the old sitemap. Three dynamic route patterns are separately listed in counts.json; no production account inventory was queried.

Baseline discrepancy: the order reports 616 THIN / 101 OK under the older under-400-or-zero-references definition. A fresh curl crawl of all 717 live articles reproduces 304 THIN / 413 OK when counting the rendered lead and article sections while excluding headings, navigation, media, citation previews and provenance UI. This does not establish a repair or a ranking gain. Both measurements are retained; the stricter gate consistently classifies the same base and candidate as 374 THIN / 343 OK. Step 2's 436-page comparison has not been re-run or acted on.

| URL | Group | Live HTTP / robots | Candidate HTTP / robots |
| --- | --- | --- | --- |
| https://www.wikibiome.com/article/curcumin | changed | 200 / index, follow | 200 / noindex, follow |
| https://www.wikibiome.com/article/aeromonas | changed | 200 / index, follow | 200 / noindex, follow |
| https://www.wikibiome.com/article/stop-iron-supplementation-ms | changed | 200 / index, follow | 200 / noindex, follow |
| https://www.wikibiome.com/source/scholefield-2024-brain-metallomics-dementia | changed | 200 / index, follow | 200 / noindex, follow |
| https://www.wikibiome.com/ | changed | 200 / index, follow | 200 / noindex, follow |
| https://www.wikibiome.com/article/acidaminococcus | untouched | 200 / index, follow | 200 / index, follow |
| https://www.wikibiome.com/article/acinetobacter-baumannii | untouched | 200 / index, follow | 200 / index, follow |
| https://www.wikibiome.com/article/nickel | untouched | 200 / index, follow | 200 / index, follow |

All sixteen GETs returned 200 with equivalent self-canonical URLs. Curl did not follow redirects. The candidate is the local built Worker, not a public preview. Live still has the previous indexing policy because nothing was deployed. Curcumin's visible template text is present live and absent in the candidate; all candidate sample template checks are clear.

Validation: complete Sites build and typecheck, corpus/editorial/media audits, 17 unit/policy tests, seven selected rendered regressions, 343 rendered sitemap bodies, 390 noindex route checks, indexing-repair verifier, 16 curl checks, browser inspection, focused ESLint and whitespace checks. All pass. ESLint retains five existing img warnings under the image cost lock. The negative lint test proves that reintroducing an excluded sitemap URL exits nonzero. The build starts only a disposable local Worker with local bindings and shuts it down after validation.

Evidence is under `ops/evidence/wikibiome-buildout-1-step-1/`. No new citations or Karen-authored work was used; no article deletion, second generator, new hub, asset regeneration, merge, deploy, GSC, domain, DNS, environment or production database action. Elon owns review and merge. Stop after Step 1 until PASS.
