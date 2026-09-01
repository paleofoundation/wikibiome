# WikiBiome program register

This is the control task's release ledger for the WikiBiome redesign and
production transition. A program is not release-ready because a task says it
is finished: the control task must reproduce its evidence, accept an exact
commit, integrate it into one release candidate, and verify the combined
result. Only the control task may publish, change DNS, or retire rollback
resources.

Last reconciled: **2026-09-01** (Asia/Nicosia)

## Release authority

- Production release controller: WikiBiome program control tower.
- Current integration branch: `main`.
- Current accepted release payload commit: `97b56a7`.
- Current upstream content commit: `9ea549e93d89a831a044e380a62acdbab67792f5`.
- Upstream check: five locally accepted scientific-identity commits are applied
  after `paleofoundation/wikibiome` `origin/main` `62e006cf0ced1dce706a6438f6461602229a9f26`;
  they have not been pushed.
- Production dependency audit: 0 known vulnerabilities after updating
  `js-yaml` to `4.3.2`; parser/content/build/type/test gates remain green.
- No program task may push, deploy, change DNS, initiate payments, or retire
  rollback resources.

## Program status

| Program | State | Accepted evidence | Remaining definition of done |
| --- | --- | --- | --- |
| Researcher collaboration | Code accepted; activation gated | Final accepted commit `582c6dc` is integrated. The program adds 9 routes, 24 added/hardened API route files, 5 additive migrations and 25 researcher-network tables; combined production build and 42/42 control tests pass, fresh migrations 0000-0005 apply cleanly, and mutation, discussion-trust, authoritative-ROR, privacy, structured-data, and fail-closed contracts pass. | Apply production D1 migrations, then provision/configure ORCID, Resend, private `MANUSCRIPTS` storage/scanner, moderator IDs, and counsel-approved outreach policy. Keep manuscript uploads and outreach disabled until those gates are evidenced. Saved Sites version 41 contains only `2b6444c` and is superseded; do not deploy it. |
| Editorial completion | Complete and integrated | Integrated editorial commits `1112917` and `dc9a8a9`, Wikipedia-style inline treatment `0213f60`, identity commits `7e9ce596`, `53b4cb4d`, `3a7b087e`, `0f281e88`, and `9ea549e9`, plus outer alias/reconciliation commits `227592a`, `973121e`, `a14bae6`, `c269fcd`, `482885d`, and `eb2d3ca`; 819 records / 712 canonical routes; 697 ready, 122 explicitly documented, 0 review, 0 blocked; 0 invalid years or malformed DOI output; combined build, typecheck, 42/42 tests, and corpus audit pass. | Future expansion of evidence-insufficient and source-structure-deferred records must originate from new upstream evidence or source-authored leads. Eight retired taxon/source-label URLs remain permanent aliases only; current limitations are explicit and release-safe. |
| Search visibility | Code accepted; external verification gated | Integrated commits `cacc08a`, `26cf417`, `7b57fa8`, and `c9166a3`; 5,333 rendered routes; 3,402/3,402 indexable HTML routes self-canonical; 2,677 ordinary sitemap URLs; 4/4 representative metadata/schema pages; 60/60 reviewed image-sitemap records and canonical image endpoints; 0 broken article/source links. | Deploy only with the fully gated release candidate, then collect authenticated Search Console/Bing sitemap, coverage, URL Inspection, CWV, and image-discovery evidence. Public Google TXT evidence exists; current dashboard access is unproven and Bing evidence is absent. |
| Scientific media | Batches 001-010 integrated; program in progress | Source checkpoints `113ae68`, `8b75bc2`, `2adff37`, `6a71887`, `097140b`, `8da092e`, `f750278`, `c92ff1c`, and `e70f767` are integrated through release commits `7d3cacf`, `a14bae6`, `e35f295`, `52f1800`, `90084ae`, and `97b56a7`; deterministic register covers 712 canonical routes; 60 reviewed assets and 652 queued routes pass the release gate. Microorganisms are 57/231 reviewed with 174 remaining. Eight former identity/label holds are resolved to audited canonical aliases; no unresolved scientific holds remain in the control branch. The two corrected current-name fungal routes remain honestly queued and uncovered. The ledger preserves seven rejected/revised variants, supersession, provenance, and human reconciliation of visible counts rather than treating generation prompts as evidence. | Continue the exact per-asset approval ledger with controlled identifiers, scientific references, accessibility review, lossless master, article/social derivatives, embedded metadata, and visual acceptance. Complete all 712 canonical routes; drafts remain excluded from the public registry and image sitemap. |
| Cutover closeout | Pre-gate tooling integrated; final audit date-gated | Baseline commits `343fbdc` and `5106b7b`; audit runner/template commits `384259d` and `16b51a9`; 9/9 evaluator tests pass; default execution refuses network access before the gate; Vercel rollback deployment `dpl_5ShUos99yjK3vWMbarbfmxkDQWEH` remains Ready | Run the public plus authenticated evidence audit no earlier than 2026-09-07 00:00 Asia/Nicosia. Retirement still requires separate explicit approval. |
| Upstream content operations | Active; local corrective commits accepted | 819 pages, 1,922 sources, 6,435 article-reference placements, 350 recovered inline citations, 0 missing source metadata, 0 malformed DOI values; weekly refresh gate is configured. | Preserve local source commits `7e9ce596`, `53b4cb4d`, `3a7b087e`, `0f281e88`, and `9ea549e9` until an authorized upstream push. Continue release-driven review of any upstream diff. Automation may regenerate and test but may not commit or deploy. |

## Account- and authority-gated actions

These are not code defects and must not be represented as completed without
owner or counsel evidence.

- ORCID application credentials and production callback approval.
- Resend sending-domain, API, webhook, and unsubscribe secrets.
- Private manuscript storage plus an asynchronous scanner and scanner secret.
- Production D1 migrations `0001`-`0005` and the `MANUSCRIPTS` binding must be
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
