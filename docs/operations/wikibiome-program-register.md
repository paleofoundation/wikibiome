# WikiBiome program register

This is the control task's release ledger for the WikiBiome redesign and
production transition. A program is not release-ready because a task says it
is finished: the control task must reproduce its evidence, accept an exact
commit, integrate it into one release candidate, and verify the combined
result. Only the control task may publish, change DNS, or retire rollback
resources.

Last reconciled: **2026-09-07** (Asia/Nicosia)

## Release authority

- Production release controller: WikiBiome program control tower.
- Current integration branch: `main`.
- Current evidenced production release: public Sites version 44 at outer commit
  `b353882397f86318376982419ec0d3400c9a478d`.
- Current production Sites environment revision: 3, activated by redeploying
  saved version 43 on 2026-09-02 without DNS changes.
- Current production scientific-media coverage: 144 reviewed assets.
- Current accepted local control commit:
  `b8174bedcb17ba03cfa3da40f5f5892d9e50897f`. It includes the complete
  29/29 metal and 66/66 disease media sets, Batch 100's accepted and promoted
  N-acetyl-L-cysteine asset, Batch 101's five zero-call host-defense holds, and
  Batches 102 and 103's ten zero-call intervention holds plus quarantined
  berberine and curcumin outputs. Batch 104 adds one reviewed E. coli Nissle
  1917 morphology asset and five evidence-insufficient intervention holds. It
  also preserves 42 previously accepted or superseded project-bound originals
  that were present only in the long-lived checkout, restoring clean-checkout
  hash and decoded-pixel reproducibility.
- Current accepted local scientific-media promotion commit:
  `b8174bedcb17ba03cfa3da40f5f5892d9e50897f` (Batch 104).
- Current accepted local scientific-media review commit:
  `a1d6354bc64d00e2b94e91cb873c1956801c0d8c` (Batch 104; exact-hash
  acceptance `e04faaf0e76070bdd3609d65d9c795e7d14d1a5b`).
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
- The September 7 live scientific-media audit found 144 reviewed records. The
  accepted local candidate contains 370; the 226-asset delta is not yet released. This
  production staleness is why only Nickel currently appears with reviewed media
  on the live metal category even though the candidate contains all 29 metals.
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
| Researcher collaboration | Version 3 code accepted; external services partly activated | Researcher Network v3 is integrated at `4aa2cc6` on top of the accepted v2, responsive-navigation, dashboard, and event-consent lineage. ORCID production activation was smoke-tested successfully. The combined production build and 76/76 tests pass; additive migrations 0000-0010 apply cleanly. Public researcher discovery now includes searchable evidence-derived expertise clusters and separate verified-work, Keystone, and linked-article footprint metrics without popularity ranking. Researchers can publish a validated professional portrait through dedicated private-storage/public-delivery routes, confirm ORCID DOI matches through moderated intake without automatic publication, and create human-reviewed provisional organization identities that can later upgrade to ROR without duplication. Roundtable consent, private email, mutual-consent messaging, contribution recognition, authoritative ROR, moderation, privacy, and fail-closed boundaries remain intact. | Apply production D1 migrations through 0010; provision Resend, the private `MANUSCRIPTS` R2 binding used by profile photos and the separately gated manuscript quarantine/scanner workflow, moderator IDs, and counsel-approved outreach policy. Keep manuscript uploads and outreach disabled until those gates are evidenced. The broader forum/Keystone candidate is undergoing current-lineage reconciliation and is not yet accepted. |
| Editorial completion | Complete in control main; local routing delta unreleased | The candidate contains 817 records / 710 canonical routes, 1,939 sources, 6,447 article-reference placements, 349 recovered inline citations, 696 ready records, 121 explicit dispositions, 0 review, 0 blocked, 0 missing source metadata, and 0 malformed DOI output. All 13 retired identities export permanent article/history/suggest aliases, and worker routing parity is integrated through `730615c`. | Future expansion of evidence-insufficient and source-structure-deferred records must originate from new upstream evidence or source-authored leads. Retired labels remain aliases only. Publish only as part of a provenance-matched, control-approved release. |
| Search visibility | Candidate complete; live routing and media remain stale | The accepted candidate passes 5,368 rendered routes, 3,415/3,415 indexable self-canonicals, 2,692 ordinary sitemap URLs, 370/370 image registry/sitemap/endpoints, four representative metadata/structured-data routes, all 43 authoritative redirects, all 46 generated Gone routes, and all internal article/source-link checks. The September 7 count-explicit public verifier found 144/144 healthy live image endpoints, four passing representative structured-data routes, no candidate defects, and three production-drift findings: the apex host still returns 200 instead of redirecting, it does not preserve path/query normalization to `www`, and the live image count differs from the earlier 129-image expectation. The authenticated September 5 checkpoint records 31 indexed and 819 historically not-indexed URLs (August 28 data), successful ordinary/image sitemap reads with only 670/2 discovered pages, representative stored URL Inspection results, 583 Web impressions/2 clicks and zero Image impressions over three months, insufficient CWV field data, healthy HTTPS, and no manual or security issues. | Publish only an exact provenance-matched accepted commit after fresh authorization, then rerun the full public gate with 370 images and recheck Google validation, sitemap discovery, representative selected canonicals, CWV, and Web/Image performance. Bing ownership and evidence remain account-gated. |
| Scientific media | 144 live; 370 reviewed locally; continuous queue active | The deterministic register covers all 710 canonical routes with 370 reviewed assets and 340 remaining. Diseases are complete at 66/66, metals are complete at 29/29, microorganisms are 214/229, mechanisms are 58/233, host defenses are 2/29, and interventions are 1/69. The 370-entry registry, strict review log, image sitemap, canonical endpoints, masters, derivatives, embedded metadata, controlled identifiers, licensing, review state, trained-algorithmic-media disclosure, Schema linkage, accessibility text, and provenance agree. There are 252 rejected/failure/quarantine/hold records, 194 scientific holds, 12 revised records, and zero in-review records. Batch 100 promoted N-acetyl-L-cysteine at `5c6d5a6`. Batches 101-103 accepted only non-public scientific holds or quarantine evidence at `d9f44a6`, `d867f82`, and `2991f48`; the berberine output was rejected for a prohibited charge glyph and irreconcilable overlapping connectors, while curcumin was rejected for a transparent rather than opaque pale field and prohibited oxygen-center glow. Batch 104 promoted only the exact accepted E. coli Nissle 1917 source at `b8174be`; its intervention page retains the scientifically honest `morphology` type through a narrow NCBI-identified-taxon compatibility rule, while five ambiguous intervention routes remain explicit holds. Direct comparison of the live image sitemap and `/category/metal` HTML confirms that production has 144 total images but only Nickel among the 29 metal routes. The candidate has all 29; all metal endpoints and category cards are mandatory post-deploy smoke checks. Forty-two existing project-bound originals have also been brought under version control so clean-checkout source-hash and decoded-pixel audits no longer depend on one machine. | Skip all existing holds, failures, and quarantines. Deterministic Batch 105 is pinned to `ferrichrome-probiotics`, `glutathione-supplementation`, `gluten-free-diet`, `high-fiber-diet`, `high-fiber-prebiotics`, and `hbot`. Complete all 710 canonical routes through reviewed media or explicit scientific holds. |
| Cutover closeout | Audit gate open; production action still authorization-gated | Baseline commits `343fbdc` and `5106b7b`; audit runner/template commits `384259d` and `16b51a9`; 9/9 evaluator tests pass; the 2026-09-07 00:00 Asia/Nicosia time gate has elapsed; Vercel rollback deployment `dpl_5ShUos99yjK3vWMbarbfmxkDQWEH` remains the retained rollback target. | Run and retain the final public plus authenticated evidence audit. Deployment, DNS change, and rollback retirement each still require their own explicit bounded approval. |
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
- For Batch 051 media-only withdrawal, revert promotion `2245bc1` to the exact
  accepted, asset-free parent `8d7e8be`; retain the immutable audit, review,
  acceptance, and project-bound generation evidence. Earlier reviewed batches
  remain intact.
- For Batch 066 media-only withdrawal, revert promotion `5dc90a4`; retain the
  immutable prompt, review, acceptance, rejection, and project-bound generation
  evidence. Earlier reviewed batches remain intact.
- For Batch 067 media-only withdrawal, revert promotion `34c9e3e`; retain the
  immutable prompt, review, acceptance, rejection, and project-bound generation
  evidence. Earlier reviewed batches remain intact.
- For Batch 068 media-only withdrawal, revert promotion `0a490ce`; retain the
  immutable prompt, review, acceptance, rejected-revision, and project-bound
  generation evidence. Earlier reviewed batches remain intact.
- For Batch 069 media-only withdrawal, revert promotion `cf9f165`; retain the
  immutable prompt, review, exact-hash acceptance, failure, quarantine, and
  project-bound generation evidence. Earlier reviewed batches remain intact.
- For Batch 070 media-only withdrawal, revert promotion `8e6e0e6`; retain the
  immutable prompt, review, exact-hash acceptance, quarantine, and
  project-bound generation evidence. Earlier reviewed batches remain intact.
