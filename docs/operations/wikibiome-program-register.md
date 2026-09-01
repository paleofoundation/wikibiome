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
- Current accepted integration commit: `582c6dc90d1f2e31ac2b2c8a3b564ca4fa493b0c`.
- Current upstream content commit: `62e006cf0ced1dce706a6438f6461602229a9f26`.
- Upstream check: synchronized with `paleofoundation/wikibiome` `origin/main` on
  2026-09-01; no source changes.
- No program task may push, deploy, change DNS, initiate payments, or retire
  rollback resources.

## Program status

| Program | State | Accepted evidence | Remaining definition of done |
| --- | --- | --- | --- |
| Researcher collaboration | Code accepted; activation gated | Commits `2b6444c` and `582c6dc`; production build; 23/23 tests; clean migrations 0000-0005; lint 0 errors; desktop/mobile checks on five representative routes | Provision and configure ORCID, Resend, private `MANUSCRIPTS` storage/scanner, moderator IDs, and counsel-approved outreach policy. Saved Sites version 41 contains only `2b6444c` and is superseded; do not deploy it. |
| Editorial completion | In progress | Batch 1 commit `1e5e07d` independently reproduced: 821 records, 714 canonical routes, 122 warning routes, 0 blocked; build and 18/18 tests pass | Reconcile all 122 remaining routes through canonical disease evidence or explicit source-bound evidence status. Do not invent prose or silently waive warnings. Integrate only the final accepted handoff. |
| Search visibility | In progress | Full task audit reports 5,267 routes; 3,375 indexable HTML routes with one self-canonical URL; all discovered article/source links resolve; focused gate 19/19 | Receive exact commit and handoff; independently rerun full corpus, schema, sitemap, media endpoint, security/privacy, build, test, and lint gates; then integrate. Search Console/Bing ownership and submission evidence remain account-gated. |
| Scientific media | In progress | Deterministic register covers 714 canonical routes. Eight legacy derivatives have explicit preservation masters and provenance. Batch 001 contains six generated microorganism drafts. | Require exact per-asset approval ledger, controlled identifiers, scientific references, accessibility review, lossless master, article/social derivatives, embedded metadata, and visual acceptance. Current Actinomyces draft is rejected for appendage-like hairs and must be revised. Complete all 714 canonical routes; drafts never publish. |
| Cutover closeout | Baseline complete; final audit date-gated | Baseline commit `7be87b9`; 14 public routes returned 200 and the protected ledger returned the expected 307; no observed 5xx/exception events; Vercel rollback deployment `dpl_5ShUos99yjK3vWMbarbfmxkDQWEH` remains Ready | Correct the baseline tally wording, then run the final audit no earlier than 2026-09-07 00:00 Asia/Nicosia. Retirement still requires separate explicit approval. |
| Upstream content operations | Active and synchronized | 821 pages, 1,891 sources, 6,424 article-reference placements, 348 recovered inline citations, 0 missing source metadata, 0 malformed DOI values; weekly refresh gate is configured | Continue release-driven review of any upstream diff. Automation may regenerate and test but may not commit or deploy. |

## Account- and authority-gated actions

These are not code defects and must not be represented as completed without
owner or counsel evidence.

- ORCID application credentials and production callback approval.
- Resend sending-domain, API, webhook, and unsubscribe secrets.
- Private manuscript storage plus an asynchronous scanner and scanner secret.
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
