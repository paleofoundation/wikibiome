# WIKIBIOME-BUILDOUT-1, Step 1

Status: PR #16 merged as cfac925d. The authorized count correction is ready for follow-up review, with final Sites source `b02e4533ef717e7b3aa85d76950c24294c83609b`. Published through Sites as version87 on2026-10-25 following Karen’s renewed direct instruction in the CONDUCTOR chat. Live curl verification passed; Step2 still requires explicit WB-STEP-2 GO.

Final combined patch from live v86: `ops/patches/wikibiome-buildout-1-final-sites.patch`, SHA-256 `36bc6cbcfc247dbdbd91b9c11a24a435d44f87341d67527fa0c0e6bef2178459`. Counts-only patch after the approved Step 1 candidate: `ops/patches/wikibiome-release-counts-sites.patch`, SHA-256 `ae919e1faebd799507d3c1c8451d38dc7b8036bb78c40a450ae97458f6a71f80`. Evidence: `ops/reports/wikibiome-release-counts/checks.json` and local build, test, curl and browser artifacts. Both patches reverse-check against the final exact source. Use the combined patch when opening v86's canonical source; never deploy this legacy Vite application.

Public counters derive from the canonical quality-gated release and real distinct cited references. Search labels omit inventory totals. The original accepted Step 1 packet below remains the historical base.

The article gate now applies only to article pages. The sitemap contains **375 URLs: 343 qualifying articles and the original 32 home, category, organization and utility routes**. Home, About, all 12 category hubs and the other established public routes retain `index, follow`. The 37 previously advertised citation-only source pages remain `noindex, follow` and excluded. No source page already passes the article-body/reference gate.

Sites base: version 86, `7a95e122e81c6d442311db07331bc2dc0b45aa38`. Candidate: `79a4ff1e4ae5f21d4c9ff7f5ff748bbb10273fcd`. Vault source remains `8f8608b6f99c8818cae1617aaecc5d2d9760d04a`. Same branch: `codex/wikibiome-buildout-1-step-1`. The upstream Vite application remains legacy.

Exact patch: `ops/patches/wikibiome-buildout-1-step-1-sites.patch`. SHA-256: `89c5aef899789ac982a2eb18aba1010e6680dbc564f95509105595bc6f4b84d3`. Apply only to the exact v86 base. Forward and reverse applicability verified. The Sites source commit remains local; this packet updates PR #16 by plain push.

The shared article gate remains 400 body words, three distinct real references, no visible placeholder text, no Evidence-limited disposition, and no intervention/STOP section. Duplicate DOI, missing metadata and Karen-authored records cannot satisfy the reference threshold. Existing source exclusions, search/query exclusions and history noindex behavior remain intact.

The original 32 public sitemap routes are restored without adding hubs. Public metadata defaults and the institution directory’s query handling are restored to v86 behavior; existing public researcher/profile metadata is restored as well. Routes already outside the v86 sitemap remain outside it. The lint explicitly accepts and requires the established public routes while applying the body/reference gate to articles. Its negative test still fails when curcumin is inserted, and also fails when home is removed or a source record is added.

Seven live intervention-page templates remain removed: curcumin, glutathione-supplementation, gluten-free-diet, melatonin, metformin-intervention, resveratrol, statin-therapy. The hidden chelation duplicate and cardiovascular fragment cleanup and displayed-history cleanup are retained. No new scientific text or citations.

The accepted fixed cohort remains 717 baseline sitemap articles: **374 THIN / 343 OK**, unchanged by this correction. Twelve previously noindex articles are outside that cohort; all 729 canonical articles are checked.

| Section | THIN | OK |
| --- | ---: | ---: |
| analysis | 13 | 4 |
| defense | 9 | 20 |
| disease | 29 | 36 |
| entity | 1 | 4 |
| intervention | 69 | 0 |
| mechanism | 98 | 141 |
| metal | 1 | 23 |
| microbe | 108 | 114 |
| other | 5 | 0 |
| reference | 2 | 0 |
| signature | 0 | 1 |
| stop | 39 | 0 |
| Total | 374 | 343 |

Sitemap: **786 live → 375 candidate**, with **411 excluded article/source URLs before → zero failing sitemap URLs after**. The prior 343-URL draft omitted 32 public routes; this correction restores them. All 86 Evidence-limited sitemap articles, 69 intervention articles and 39 STOP articles remain excluded (overlapping sets).

`changed-urls.csv` records 422 final concrete URL changes versus v86, including removed article/source sitemap entries, cleaned history views and the sitemap. `fix-restored-urls.csv` lists the 32 restored URLs versus the earlier draft. Dynamic public-profile indexing is restored to baseline.

The earlier coarser 616 THIN / 101 OK audit and the 304 / 413 reproduction remain provenance only. Elon accepted 374 / 343 as the working article-gate baseline. No content expansion or indexing/ranking gain is claimed.

Fresh curl GETs, redirects not followed, run on both the local built candidate and live production:

| URL | Candidate HTTP | Candidate robots | In candidate sitemap |
| --- | ---: | --- | --- |
| https://www.wikibiome.com/ | 200 | index, follow | Yes |
| https://www.wikibiome.com/about | 200 | index, follow | Yes |
| https://www.wikibiome.com/category/microbe | 200 | index, follow | Yes |
| https://www.wikibiome.com/category/metal | 200 | index, follow | Yes |
| https://www.wikibiome.com/category/mechanism | 200 | index, follow | Yes |
| https://www.wikibiome.com/article/curcumin | 200 | noindex, follow | No |
| https://www.wikibiome.com/article/aeromonas | 200 | noindex, follow | No |
| https://www.wikibiome.com/article/stop-iron-supplementation-ms | 200 | noindex, follow | No |
| https://www.wikibiome.com/source/scholefield-2024-brain-metallomics-dementia | 200 | noindex, follow | No |
| https://www.wikibiome.com/article/acidaminococcus | 200 | index, follow | Yes |
| https://www.wikibiome.com/article/acinetobacter-baumannii | 200 | index, follow | Yes |
| https://www.wikibiome.com/article/nickel | 200 | index, follow | Yes |

All 24 requests return 200 with self-canonical URLs and the expected sitemap membership. Live still has 786 URLs and its pre-release indexing policy. This fix is not published.

Validation: prebuild corpus/editorial/media audits, Sites compilation, typecheck, 17 unit/policy tests, seven rendered regressions, all 375 rendered sitemap URLs, 423 retained noindex article/source routes, indexing verifier, 24 curl checks, focused ESLint and whitespace. The build’s first postbuild run hit the sandbox loopback restriction; the permitted local Worker passed. The 37-source check canonicalizes the registry’s mixed-case alias before fetching.

Elon owns review and merge. Karen publishes the approved batch through Sites. Step 2 waits for that publish and live curl verification. This runner stops after the plain push and bridge STATUS.

## HI-014 batched public guide

A normal source child adds only public/llms.txt. Existing site/article JSON-LD is preserved. Local rebuilt Worker serves the exact text asset200 and all eight public guide links200 with existing structured data; zero outbound calls. The full rebuilt gate remains375/0,423 retained noindex and32 public entrypoints. No image, count, telemetry or menu changes. Both reviewed patches now include this guide and have refreshed exact hashes above. This supersedes the previous patch hashes and needs review on the same single release PR; credential stays HOLD, no version saved or published.

## WB-PUBLISH-1 live publication

Karen directly reissued the publish instruction in CONDUCTOR at22:30, authorizing the necessary temporary Sites source access for this one release. The exact source and matching archive were pushed/saved and deployed once as version87, deployment appgdep_6ade67b92238819184f192f0ade08e43, succeeded2026-10-25T20:34:39.960338+00:00. No PR was merged by CONDUCTOR. Temporary source credentials were passed only through hidden stdin and discarded from session memory after the source push. Existing public audience, Sites hosting, DB/R2 bindings, images, telemetry and menus were preserved.

Live custom-domain curl checks: sitemap786 before to375 after; home343 indexed articles/1,199 cited sources, indexfollow and no stale count labels;5 selected articles200; missing route404; llms.txt200. Exact response hashes and source/deployment provenance are in ops/reports/wikibiome-publication. [Live WikiBiome](https://wikibiome.com). WB-Step2 still waits for Elon’s live check and explicit GO.
