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
- Current production release: public Sites version 43 at outer commit
  `65b3fc33348354af3539b8ce73e66f682d366b90`.
- Current production scientific-media payload commit: `3eb7810`.
- Current accepted local scientific-media integration commit:
  `7a4b261ef83b6100430df8ed147aae599895d696`.
- Current local upstream content commit: `c6481eaf721d80b46d6f192b19d4c0b351e670d8`.
- Upstream check: the paired *Lachnospira eligens*/*Agathobacter rectalis*
  identity commit is applied directly after synchronized source commit
  `66a773667b1f6c06592eca878d5023138c602b39`. That parent is the verified
  `paleofoundation/wikibiome` `origin/main`; the corrective commit remains local
  and has not been pushed.
- Production dependency audit: 0 known vulnerabilities after updating
  `js-yaml` to `4.3.2`; parser/content/build/type/test gates remain green.
- No program task may make a further push, deployment, DNS change, payment, or
  rollback-retirement action without a new bounded release authorization from
  the user and control-register reconciliation.

## Current production evidence

- Sites version 43 is saved and public from exact source commit `65b3fc3`.
- The live image sitemap exposes exactly 93 reviewed records.
- All six batch-016 article routes return `200`; all six registry-defined
  article-image endpoints return `200 image/webp`.
- The Sites production error log returned no events for the three-hour release
  verification window.
- The retained Vercel deployment remains the rollback target; version 41 is a
  superseded saved version and must not be deployed.

## Program status

| Program | State | Accepted evidence | Remaining definition of done |
| --- | --- | --- | --- |
| Researcher collaboration | Code accepted; activation gated | Final accepted commit `582c6dc` is integrated. The program adds 9 routes, 24 added/hardened API route files, 5 additive migrations and 25 researcher-network tables; combined production build and 42/42 control tests pass, fresh migrations 0000-0005 apply cleanly, and mutation, discussion-trust, authoritative-ROR, privacy, structured-data, and fail-closed contracts pass. | Apply production D1 migrations, then provision/configure ORCID, Resend, private `MANUSCRIPTS` storage/scanner, moderator IDs, and counsel-approved outreach policy. Keep manuscript uploads and outreach disabled until those gates are evidenced. Saved Sites version 41 contains only `2b6444c` and is superseded; do not deploy it. |
| Editorial completion | Complete in control main; production through version 43 | Integrated editorial commits `1112917` and `dc9a8a9`, Wikipedia-style inline treatment `0213f60`, the prior identity series through source packet `66a77366`, and local source packet `c6481eaf`, plus the outer alias/reconciliation series; 817 records / 710 canonical routes; 696 ready, 121 explicitly documented, 0 review, 0 blocked; 0 invalid years or malformed DOI output. The current-name records *Lachnospira eligens* (NCBITaxon:39485) and *Agathobacter rectalis* (NCBITaxon:39491) preserve source-era labels, controlled-name evidence, revision provenance, and the published objection to the latter transfer without retaining unsupported mechanisms. | Future expansion of evidence-insufficient and source-structure-deferred records must originate from new upstream evidence or source-authored leads. Thirteen retired taxon/source-label URLs remain permanent aliases only; current limitations are explicit and release-safe. The two newest aliases are local until a later authorized release. |
| Search visibility | Production code live through version 43; local identity/media delta accepted; external verification gated | Integrated commits `cacc08a`, `26cf417`, `7b57fa8`, and `c9166a3`; version 43 serves 2,685 ordinary sitemap URLs and 93/93 reviewed image records. The accepted local candidate passes 5,368 rendered routes, 3,415/3,415 indexable self-canonicals, 2,692 ordinary sitemap URLs, 115/115 image registry/sitemap/endpoints, and all internal-link checks. | Collect authenticated Search Console/Bing sitemap, coverage, URL Inspection, CWV, and image-discovery evidence. Public Google TXT evidence exists; current dashboard access is unproven and Bing evidence is absent. The local identity/media delta remains unreleased. |
| Scientific media | Batches 001-016 live; batches 017-020 integrated locally | Production media commit `3eb7810` provides 93 reviewed assets. Accepted batch-017 commit `6906bc3` and promotions `a1398fe`, `b16ffc2`, and `7a4b261` add twenty-two exact current-identity reconstructions with immutable draft/master/derivative hashes, literal output counts, canonical filenames, lossless masters, page/social WebPs, embedded XMP/IPTC including creation dates, controlled identifiers, CC BY-SA, trained-algorithmic-media disclosure, visible attribution, review keys, and Schema image linkage. Batch 019 adds validated per-record social `contain`; batch 020 adds a social-safe generator composition rule and proves that `cover` may be retained only after native 1200×630 inspection confirms every audited subject and appendage remains visible. The deterministic register now covers 710 canonical routes with 115 reviewed assets and 595 queued routes; microorganisms are 112/229 reviewed with 117 remaining. Thirteen identity/label holds are resolved and zero remain active. The obsolete `eubacterium-eligens` and `eubacterium-rectale` routes remain asset-free aliases only. | Continue from the exact next queue: Intestinimonas, Klebsiella, *Klebsiella pneumoniae*, Lachnobacterium, Lachnoclostridium, and Lachnospira. Complete all 710 canonical routes; drafts remain excluded until their promotion packet passes every release gate. Batches 017-020 remain local until a later authorized release. |
| Cutover closeout | Pre-gate tooling integrated; final audit date-gated | Baseline commits `343fbdc` and `5106b7b`; audit runner/template commits `384259d` and `16b51a9`; 9/9 evaluator tests pass; default execution refuses network access before the gate; Vercel rollback deployment `dpl_5ShUos99yjK3vWMbarbfmxkDQWEH` remains Ready | Run the public plus authenticated evidence audit no earlier than 2026-09-07 00:00 Asia/Nicosia. Retirement still requires separate explicit approval. |
| Upstream content operations | Active; paired corrective packet accepted locally | 817 pages, 1,939 sources, 6,447 article-reference placements, 349 recovered inline citations, 0 missing source metadata, 0 malformed DOI values; local source commit `c6481eaf` is one commit ahead of verified `origin/main` `66a77366`; weekly refresh gate is configured. | Preserve local source commit `c6481eaf` until an authorized upstream push. Continue release-driven review of every upstream diff. Automation may regenerate and test but may not commit or deploy. |

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
