# WikiBiome program register

This is the control task's release ledger for the WikiBiome redesign and
production transition. A program is not release-ready because a task says it
is finished: the control task must reproduce its evidence, accept an exact
commit, integrate it into one release candidate, and verify the combined
result. Only the control task may publish, change DNS, or retire rollback
resources.

Last reconciled: **2026-09-06** (Asia/Nicosia)

## Release authority

- Production release controller: WikiBiome program control tower.
- Current integration branch: `main`.
- Current evidenced production release: public Sites version 44 at outer commit
  `b353882397f86318376982419ec0d3400c9a478d`.
- Current production Sites environment revision: 3, activated by redeploying
  saved version 43 on 2026-09-02 without DNS changes.
- Current production scientific-media coverage: 129 reviewed assets.
- Current accepted local control lineage includes batch-035 review and promotion
  `9f46070` and `e7426a2`, Researcher Network dashboard/event integration `cc0ace2`, upstream provenance refresh
  `babc86a`, and the hardened public-routing verifier `6fdaa53`.
- Current accepted local scientific-media promotion commit:
  `e7426a2` (batch 035).
- Current accepted local scientific-media review commit:
  `9f46070` (batch 035).
- Current synchronized upstream content commit:
  `449e8005c3156d1b7943d2cdedd5b4386b9f5703`.
- Upstream check: the only source-content delta from `c6481eaf` to `449e8005`
  was five technical-SEO log entries. The public corpus is semantically
  unchanged; commit-bound editorial, revision, manifest, and media provenance
  were re-attested and regenerated explicitly.
- Production dependency audit: 0 known vulnerabilities after updating
  `js-yaml` to `4.3.2`; parser/content/build/type/test gates remain green.
- No program task may make a further push, deployment, DNS change, payment, or
  rollback-retirement action without a new bounded release authorization from
  the user and control-register reconciliation.

## Current production evidence

- Sites version 44 is the last evidenced public artifact, from exact source
  commit `b353882`.
- The live scientific-media payload contains 129 reviewed records. The accepted
  local candidate contains 192; the sixty-three-asset batch-024/025/026/027/028/029/030/031/032/033/034/035 delta is not yet
  released.
- The Sites production error log returned no events for the three-hour release
  verification window.
- The retained Vercel deployment remains the rollback target; version 41 is a
  superseded saved version and must not be deployed.
- ORCID production activation smoke test passed on 2026-09-02 after
  environment revision 3 activation: `/researcher/dashboard` returned `200`,
  `/api/auth/orcid/start` returned `303` to ORCID instead of
  `orcid=not_configured`, the ORCID authorization callback returned to
  WikiBiome, and the researcher dashboard loaded Karen Pendergrass
  (`0000-0002-2348-7259`) with email verification required. Browser UI and
  console checks found no client secret, bearer token, Sites source token, or
  `not_configured` leakage.
- A fresh saved version for local commit `aa7d438` was not created because the
  Sites source repository remained at `65b3fc3`; `save_site_version` correctly
  rejected `aa7d438` as stale source provenance. The production ORCID
  activation therefore used the already-saved v43 artifact.

## Program status

| Program | State | Accepted evidence | Remaining definition of done |
| --- | --- | --- | --- |
| Researcher collaboration | Code accepted; external services partly activated | The accepted Researcher Network v2 implementation is integrated through `d0c1254`, responsive navigation hardening at `8516ab9`, and the dashboard/event-consent update at `cc0ace2`. ORCID production activation was smoke-tested successfully. The combined candidate build and 62/62 tests pass; fresh migrations 0000-0009 apply cleanly. The dashboard automatically imports public ORCID works without publishing unconfirmed matches, Roundtable preferences cover conferences/workshops/event types, and early-invite consent remains separate and human-controlled. Mutation, trust, authoritative-ROR, privacy, structured-data, discovery, messaging, notification, fail-closed, and ORCID-feedback contracts pass. | Apply production D1 migrations; provision Resend, private `MANUSCRIPTS` storage/scanner, moderator IDs, and counsel-approved outreach policy. Keep manuscript uploads and outreach disabled until those gates are evidenced. |
| Editorial completion | Complete in control main; local routing delta unreleased | The candidate contains 817 records / 710 canonical routes, 1,939 sources, 6,447 article-reference placements, 349 recovered inline citations, 696 ready records, 121 explicit dispositions, 0 review, 0 blocked, 0 missing source metadata, and 0 malformed DOI output. All 13 retired identities export permanent article/history/suggest aliases, and worker routing parity is integrated through `730615c`. | Future expansion of evidence-insufficient and source-structure-deferred records must originate from new upstream evidence or source-authored leads. Retired labels remain aliases only. Publish only as part of a provenance-matched, control-approved release. |
| Search visibility | Candidate complete; live routing remains stale | The accepted candidate passes 5,368 rendered routes, 3,415/3,415 indexable self-canonicals, 2,692 ordinary sitemap URLs, 192/192 image registry/sitemap/endpoints, four representative metadata/structured-data routes, all 43 authoritative redirects, all 46 generated Gone routes, and all internal article/source-link checks. The count-explicit public verifier confirmed 129/129 live image endpoints and no candidate defects. The authenticated September 5 checkpoint records 31 indexed and 819 historically not-indexed URLs (August 28 data), successful ordinary/image sitemap reads with only 670/2 discovered pages, representative stored URL Inspection results, 583 Web impressions/2 clicks and zero Image impressions over three months, insufficient CWV field data, healthy HTTPS, and no manual or security issues. | The live probe classified 199 findings as production drift: apex host normalization, legacy redirects, 410 boundaries, generic 404 metadata, sitemap compatibility, and three robots exclusions await deployment of the accepted candidate. After release, rerun the full public gate with the deployed registry count and recheck Google validation, sitemap discovery, representative selected canonicals, CWV, and Web/Image performance. Bing ownership and evidence remain account-gated. |
| Scientific media | 129 live; 192 reviewed locally; continuous queue active | Batch 035 review and promotion are integrated at `9f46070` and `e7426a2`. The deterministic register covers all 710 canonical routes with 192 reviewed assets and 518 remaining; microorganisms are 189/229 reviewed with 40 remaining. Registry, approval log, image sitemap, canonical delivery endpoints, lossless masters, page/social derivatives, embedded metadata, controlled identifiers, licensing, review state, trained-algorithmic-media disclosure, Schema linkage, reference parity, and reviewed crop controls pass as a matched 192/192 set. Rejected/quarantined/hold audit records total 27; revised assets total 11. Eleven identity holds remain asset-free: `lachnoclostridium`, `lachnospiraceae-family`, `lactobacillus-plantarum`, `lactobacillus-reuteri`, `lactobacillus-rhamnosus`, `mycoplasma-hominis`, `oscillospirales`, `ruminococcaceae`, `ruminococcus-albus`, `ruminococcus-gnavus`, and `saccharomyces-boulardii`. The latter must be reconciled as a strain/product concept or audited alias under *Saccharomyces cerevisiae*. The rejected Phocaeicola raster remains permanently quarantined and owns no public media artifact. One stale-authority Oscillibacter raster also remains permanently quarantined and asset-free. | Continue with `sphingobium`, `sphingomonas`, `staphylococcus`, `staphylococcus-aureus`, `staphylococcus-epidermidis`, and the next eligible deterministic route after skipping quarantined `phocaeicola`, subject to the same identity audit. Skip rejected, quarantined, or held identities unless new evidence changes their disposition. Do not release the new Oscillibacter media until the verified corbicula-clam source correction is present in the synchronized public corpus. Complete all 710 canonical routes; drafts, quarantine records, and held identities remain excluded until every scientific and release gate passes. |
| Cutover closeout | Pre-gate tooling integrated; final audit date-gated | Baseline commits `343fbdc` and `5106b7b`; audit runner/template commits `384259d` and `16b51a9`; 9/9 evaluator tests pass; default execution refuses network access before the gate; Vercel rollback deployment `dpl_5ShUos99yjK3vWMbarbfmxkDQWEH` remains Ready | Run the public plus authenticated evidence audit no earlier than 2026-09-07 00:00 Asia/Nicosia. Retirement still requires separate explicit approval. |
| Upstream content operations | Remote synchronized; one verified local correction awaits authorization | Generated public content remains synchronized to remote `449e8005`: 817 pages, 1,939 sources, 6,447 article-reference placements, 349 recovered inline citations, 0 missing source metadata, and 0 malformed DOI values. Local upstream commit `c12dac4eb721a4223a48365a83638aaeabcb3a2c` corrects Oscillibacter type-species provenance from “freshwater fish” to Japanese corbicula clam, adds the primary Iino et al. source (PMID 17684268; DOI `10.1099/ijs.0.64717-0`), and passes the upstream build and SEO invariants. | Obtain bounded authorization to push `c12dac4e`, then run the guarded outer content refresh, re-attest commit-bound editorial/media provenance, and reproduce combined gates before any release. Continue release-driven review of every future upstream diff; automation may regenerate and test but may not push or deploy. |

## Account- and authority-gated actions

These are not code defects and must not be represented as completed without
owner or counsel evidence.

- Resend sending-domain, API, webhook, and unsubscribe secrets.
- Private manuscript storage plus an asynchronous scanner and scanner secret.
- Production D1 migrations `0001`-`0009` and the `MANUSCRIPTS` binding must be
  applied/provisioned before releasing the researcher-network routes.
- `WIKIBIOME_MODERATOR_IDS` production assignment.
- Counsel approval for the outreach jurisdiction matrix, privacy/terms
  baseline, and citation-notice template before outreach is enabled.
- Google Search Console and Bing Webmaster ownership/submission evidence.
- Final September 7 owner/moderation, production-log, search, TLS, Stripe, and
  rollback audit.
- Any decision to retire the retained Vercel rollback deployment or former DNS
  coordinate.

## Release gate

The next production candidate may be published only after all of the following
are true:

1. Every included program provides an exact commit and standardized handoff.
2. The control task independently reproduces each program's claimed metrics and
   tests.
3. Accepted commits are integrated into one clean release candidate without
   weakening another program's invariants.
4. Content, editorial, media, search, migration, security, build, rendered-corpus,
   browser, mobile-overflow, and link/canonical gates pass on the combined commit.
5. Sensitive workflows remain disabled unless their external activation gates
   are fully evidenced.
6. A saved hosting version is created from the exact tested commit, inspected,
   and published only by the control task.
7. Production routes, logs, DNS/TLS, sitemap/robots, canonical metadata, image
   delivery, support/thank-you routing, and rollback evidence are verified after
   publication.

## Rollback invariants

- Retain Vercel deployment `dpl_5ShUos99yjK3vWMbarbfmxkDQWEH` and former `www`
  CNAME target `7d875abacccdc8f1.vercel-dns-016.com.` through the September 7
  audit and until a later explicit retirement approval.
- Leave `WIKIBIOME_MANUSCRIPT_UPLOADS_ENABLED` and
  `WIKIBIOME_OUTREACH_ENABLED` unset or `0` until their safety gates are ready.
- Researcher-network migrations are additive. Do not destructively reverse the
  new D1 tables or delete a manuscript quarantine bucket during rollback;
  preserve consent, suppression, moderation, audit, and incident evidence.
- Roll back application release and bindings together when withdrawing a
  dynamic program.
