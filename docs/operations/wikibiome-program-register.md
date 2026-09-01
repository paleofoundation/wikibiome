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
- Current accepted release payload commit: `37fea5e`.
- Current upstream content commit: `62e006cf0ced1dce706a6438f6461602229a9f26`.
- Upstream check: synchronized with `paleofoundation/wikibiome` `origin/main` on
  2026-09-01; no source changes.
- Production dependency audit: 0 known vulnerabilities after updating
  `js-yaml` to `4.3.2`; parser/content/build/type/test gates remain green.
- No program task may push, deploy, change DNS, initiate payments, or retire
  rollback resources.

## Program status

| Program | State | Accepted evidence | Remaining definition of done |
| --- | --- | --- | --- |
| Researcher collaboration | Code accepted; activation gated | Commits `2b6444c` and `582c6dc`; combined production build and 39/39 tests pass; migrations 0000-0005 apply cleanly; mutation, trust, ROR, privacy, and fail-closed contracts pass | Apply production D1 migrations, then provision/configure ORCID, Resend, private `MANUSCRIPTS` storage/scanner, moderator IDs, and counsel-approved outreach policy. Saved Sites version 41 contains only `2b6444c` and is superseded; do not deploy it. |
| Editorial completion | Complete and integrated | Integrated commits `1112917` and `dc9a8a9`; 821 records / 714 canonical routes; 699 ready, 122 explicitly documented, 0 review, 0 blocked; 0 invalid generated years or malformed DOI output; combined build, typecheck, 39/39 tests, and corpus audit pass | Future expansion of 101 evidence-insufficient records and 10 source-structure-deferred records must originate from new upstream evidence or source-authored leads. Current limitations are explicit and release-safe. |
| Search visibility | Code accepted; external verification gated | Integrated commits `cacc08a`, `26cf417`, `7b57fa8`, and `c9166a3`; 5,267 rendered routes; 3,375/3,375 indexable HTML routes self-canonical; 4/4 representative metadata/schema pages; 8/8 reviewed image-sitemap records and canonical image endpoints; 0 broken article/source links | Deploy only with the fully gated release candidate, then collect authenticated Search Console/Bing sitemap, coverage, URL Inspection, CWV, and image-discovery evidence. Public Google TXT evidence exists; current dashboard access is unproven and Bing evidence is absent. |
| Scientific media | Batch 001 integrated; program in progress | Source checkpoint `113ae68` integrated as `a3564b5`, with combined-corpus reconciliation `37fea5e`; deterministic register covers 714 canonical routes; 14 reviewed assets and 700 queued routes pass the release gate. Eight legacy derivatives have preservation masters and provenance. The ledger preserves Actinomyces v1 rejection and v2 acceptance. | Continue the exact per-asset approval ledger with controlled identifiers, scientific references, accessibility review, lossless master, article/social derivatives, embedded metadata, and visual acceptance. Complete all 714 canonical routes; identity holds and drafts remain excluded from public registry and image sitemap. |
| Cutover closeout | Pre-gate tooling integrated; final audit date-gated | Baseline commits `343fbdc` and `5106b7b`; audit runner/template commits `384259d` and `16b51a9`; 9/9 evaluator tests pass; default execution refuses network access before the gate; Vercel rollback deployment `dpl_5ShUos99yjK3vWMbarbfmxkDQWEH` remains Ready | Run the public plus authenticated evidence audit no earlier than 2026-09-07 00:00 Asia/Nicosia. Retirement still requires separate explicit approval. |
| Upstream content operations | Active and synchronized | 821 pages, 1,891 sources, 6,424 article-reference placements, 348 recovered inline citations, 0 missing source metadata, 0 malformed DOI values; weekly refresh gate is configured | Continue release-driven review of any upstream diff. Automation may regenerate and test but may not commit or deploy. |

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
