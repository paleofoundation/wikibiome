---
title: "WikiBiome Lint Report — 2026-05-03"
type: analysis
created: 2026-05-03
updated: 2026-05-03
sources: []
tags: [lint, health-check, maintenance, weekly]
---

# WikiBiome / Cureva Lint Report — 2026-05-03

Scope: Full health check of the vault at `~/Documents/Raw`.
Run type: Weekly automated scheduled task (Sunday).
Prior run: [[lint-report-2026-04-26]].
Action policy: Report only. No fixes applied. Karen prioritizes.

Notable deltas vs. 2026-04-26: Vault content essentially frozen since the 04-24 nightly cycle (twelve unshipped deploy nights — see log). No new sources, entities, concepts, signatures, interventions, or STOPs ingested since last lint. Most counts therefore match 04-26 ±1. New observations this cycle: orphan-detection algorithm tightened (slug-normalized matching against link targets; sources orphan baseline is now 649 vs prior 483 — algorithm change, not regression); broken-wikilink count 107 (was 100); asymmetric `associated_conditions` pairs 99 (was 116; −17 from earlier rebalancing). One source page (`yang-2022-preliminary-intestinal-flora-graves-methimazole.md`) still missing `karen_brain_primitives`. Index header counts continue to drift (idx says 1829/30 sources/analyses; actual 1851/46). Three new boundary-language hits — two are self-citations from prior lint reports, one ("first-line therapy" on `concepts/aromatase.md`) is a factual statement about conventional oncology and not a recommendation, but listed for triage.

---

## Scoreboard

| Check | Count | Severity | Δ vs 04-26 |
|------|------|---------|-----------|
| Orphan pages, sources/ excluded | 124 | medium | +57 (algo change) |
| Orphan pages, sources/ only | 649 | informational | +99 (algo change) |
| — entities | 23 | medium | — |
| — concepts | 21 | medium | — |
| — signatures | 1 | medium | new flag |
| — interventions | 8 | medium | — |
| — stops | 35 | medium | — |
| — analyses | 36 | informational | — |
| Broken wikilink targets (unique) | 107 | high | +7 |
| Broken wikilink occurrences | 197 | high | +16 |
| Files containing broken links | 40 | high | — |
| Case-only broken wikilinks | 12 | medium | −2 |
| Duplicate-DOI clusters | 115 | high | +2 |
| Files affected by duplicate DOIs | 239 | high | +4 |
| Sources missing `evidence_level` | 161 | medium | 0 |
| Sources missing `karen_brain_primitives` | 1 | low | 0 |
| Sources with `doi: "not yet verified"` | 219 | medium | 0 |
| Sources with `https://doi.org/…` URL-prefix DOI | 8 | low | −2 (8 from 10) |
| Sources with empty DOI | 0 | — | 0 |
| Sources missing `source_count` | 1850 | informational | source pages don't carry `source_count`; flag retained for visibility |
| Entities missing `seo_target` | 13 | medium | 0 |
| Entities missing `wikipedia_differentiation` | 13 | medium | 0 |
| Disease entities missing `associated_conditions` | 0 | — | 0 |
| Disease entities WITHOUT signature | 24 | medium | 0 |
| Conditions in source frontmatter (≥3 mentions) lacking signature | 12 | medium | 0 (8 are slug-normalization noise — `parkinson-s-disease`, `polycystic-ovary-syndrome`, etc. resolve to existing sigs; 4 real: GERD-as-`gastroesophageal-reflux-disease`, `cervical-cancer`, `perinatal-depression`, `cancer`/`thyroid-cancer`) |
| Signatures missing `confidence` block | 0 | — | 0 |
| Signatures missing any of 5 confidence layers | 0 | — | 0 |
| Signatures missing `associated_conditions` | 0 | — | 0 |
| Signatures with EMPTY `associated_conditions: []` | 0 | — | 0 |
| Signature entries missing `overlap_score` | 0 | — | 0 |
| Asymmetric `associated_conditions` pairs (A→B, no B→A) | 99 | medium | −17 |
| Wiki interventions with no `triangles:` array at all | 9 | high | 0 |
| Wiki interventions: triangles populated but `_sources` arrays missing | 55 | high | 0 |
| Cureva interventions: same defect | 22 | high | 0 |
| Wiki STOPs missing required fields | 2 | high | 0 (both NEC stops, missing `evidence`) |
| Cureva STOPs missing required fields | 2 | high | −1 |
| Sub-threshold publishable pages without `stub: true` (§2f) | 59 | high | −1 |
| Stubs total in vault (`stub: true`) | 18 | — | −5 |
| Stubs older than 90 days | 0 | — | 0 |
| `source_count` mismatch vs `sources` list length | 1 | low | 0 (`entities/breast-cancer.md` says 18, list has 19) |
| Index header counts vs filesystem | 7+ categories drift | medium | unchanged pattern |
| Boundary violations (clinical language on public pages) | 4 | medium | +4 (3 are self-citations from prior lint reports — informational; 1 real: `concepts/aromatase.md`) |
| Pages carrying `NEEDS VERIFICATION` markers | 110 | informational | +3 |
| Pages carrying `UNSOURCED` markers | 2 | informational | +1 |
| Source pages with supersession/contradiction language | 304 | informational | re-baselined from 69 (regex broadened to include "contradict" stems) |
| Wiki-only signatures (no Cureva counterpart) | 14 | medium | 0 |
| Cureva-only signatures (no Wiki counterpart) | 0 | — | 0 |
| Wiki-only STOPs (no Cureva counterpart) | 6 | medium | 0 |
| Cureva-only STOPs (no Wiki counterpart) | 0 | — | 0 |
| Mention-density entity gaps (≥3 source mentions, slug not present) | 2 metals + ~15 taxa-headline gaps | low | most "gaps" resolve to specific child entities; real gaps: `tungsten`, `beryllium` |

---

## 1. Contradictions & Supersessions (CLAUDE.md §2e)

No new claim-level contradictions surfaced this cycle. Vault has been frozen since 04-24, so the supersession queue has not advanced. Last batch is still [[supersessions-2026-04-18]]. 304 source pages carry supersession/contradiction-stem language in their bodies (`grep -rliE "supersed|contradict|conflicting" wiki/sources/`); the jump from prior weeks is regex broadening (added `contradict.*` stem coverage), not new conflicts. Deploy gate: clear.

`doi: "not yet verified"` count holds at **219**. See [[doi-corrections-2026-04-19]] for the batch-resolve queue. The 8 `https://doi.org/…` URL-prefix DOIs are normalization-only (down from 10 — two reformatted in passing).

---

## 2. Stale Claims / Supersession Review

No newly-detected stale claims this cycle (vault frozen). Pending review queue from 04-26 still contains the [[supersessions-2026-04-18]] candidates. Reminder: claim-level contradictions vs. older sources are surfaced here only; per-page-versus-page conflicts go to §1.

---

## 3. Orphan Pages

Algorithm tightened this cycle: link targets now matched against page slugs after both case-normalization and slug-normalization (`re.sub(r'[^a-z0-9]+','-')`). Source orphan baseline jumped 483 → 649 because the prior pass over-counted resolved links via case-only fallback; the 04-26 number was a measurement artifact. The non-source orphan total (124) is the operationally meaningful figure.

By type (sample paths):

- **Entities (23)** — `barium`, `barnesella`, `barnesiella`, `bifidobacterium-adolescentis`, `bifidobacterium-breve`, `chlamydia`, `chronic-fatigue-syndrome`, `cladosporium`, `diabetic-kidney-disease`, `erysipelotrichaceae`, `fusarium`, `megamonas`, `mycoplasma-hominis`, `pneumonia`, `porphyromonas-bennonis`, `psoriasis`, `ruminococcus-albus`, `strontium`, `titanium`, `uranium`, `ureaplasma-urealyticum`, `vanadium`, `vibrio`. Cluster: most are auto-discovery stubs (Rule 13) that have not yet been linked from disease pages or signatures.
- **Concepts (21)** — `aromatase`, `cox-2`, `cysteine`, `defensins`, `hyperaccumulator`, `hyperparathyroidism`, `il-17`, `immunotherapy`, `ketone-bodies`, `microbiome-diversity-metrics`, `outer-membrane`, `oxalate`, `parenteral-nutrition`, `peptidoglycan`, `phage-therapy`, `postbiotic`, `premenstrual-syndrome`, `quinolinic-acid`, `riboswitch`, `succinate`, `ursodeoxycholic-acid`.
- **Signatures (1)** — `wiki/signatures/atherosclerosis-signature.md`. New flag — needs at least one inbound link from `entities/atherosclerosis.md` or `entities/cardiovascular-disease.md`.
- **Interventions (8)** — `curcumin`, `glutathione-supplementation`, `gluten-free-diet`, `melatonin`, `metformin-intervention`, `resveratrol`, `statin-therapy`, `statin`. Note: `statin` and `statin-therapy` look like duplicates; recommend consolidation.
- **STOPs (35)** — Of 39 STOPs in `wiki/stops/`, 35 have no inbound links from any wiki page. This is the largest absolute orphan pool. Each STOP should be linked from its corresponding disease entity page and signature page (per CLAUDE.md §4 — STOP frontmatter has `condition: "[[condition-name]]"` but nothing back-links the STOP). Sample: `stop-iron-supplementation-crohns`, `stop-iron-supplementation-endometriosis`, `stop-broad-spectrum-antibiotics-crohns`, `stop-isolated-zinc-supplementation-pcos`, etc.
- **Analyses (36)** — Most are dated reports (lint, batch-preview, gaps-and-improvements). Linking is not strictly required for analyses.

Full list: see `/tmp/orphans.txt` produced during this run.

Grep used:
```
python3  # builds slug map across wiki+cureva, walks every [[wikilink]],
         # increments inbound[target_slug], lists pages with inbound==0
```

---

## 4. Concepts Mentioned but Lacking a Page

Sample mention-density scan against IL-6/LPS/SCFA/iNOS/NLRP3/IL-22/IL-1β/NF-κB/TNF-α revealed the following real gaps (term resolves to no existing concept slug, even after normalization):

| Term | Distinct files mentioning | Resolved page? |
|------|--------------------------|----------------|
| LPS | 375 | YES — `lipopolysaccharide.md` (already a concept; consider adding LPS as alias/redirect in build) |
| SCFAs | 330 | YES — `short-chain-fatty-acids.md` |
| IL-6 | 279 | YES — `interleukin-6.md` |
| propionate | 237 | YES — `propionic-acid.md` |
| **iNOS** | 211 | **NO** — gap |
| IL-1B / IL-1β | 100/25 | YES — `il-1beta.md` |
| **NLRP3** | 76 | **NO** — gap |
| TNF-α | 40 | YES — `tnf-alpha.md` |
| **IL-22** | 33 | **NO** — gap |
| NF-κB | 24 | YES — `nf-kappa-b.md` |

**Real concept gaps to create as Rule 15 stubs:** `iNOS` (inducible nitric oxide synthase), `NLRP3` (inflammasome), `IL-22` (interleukin-22). All three exceed the §Rule 15 critical-gap threshold of 50 distinct files (NLRP3 is borderline at 76, iNOS at 211).

Also visible to Rule 13 from source frontmatter — metals_discussed and taxa_discussed unification:

- **Real metal entity gaps**: `tungsten` (3 mentions), `beryllium` (3 mentions). Both should become entity stubs.
- **Apparent taxa gaps that aren't real gaps** (resolve to more specific entities): `akkermansia` → `akkermansia-muciniphila`/`akkermansia-mucinicola`; `candida` → `candida-albicans`/`auris`/`glabrata`/`tropicalis`; `desulfovibrionaceae` → `desulfovibrio.md`/`desulfovibrionales.md`. Recommendation: add genus-level pages or aliases so the broader term resolves cleanly.

Grep used:
```
grep -rliF '<TERM>' /sessions/.../wiki/   # distinct file count
python3  # parse metals_discussed/taxa_discussed across all source frontmatter
```

---

## 5. Diseases Mentioned in Sources but Lacking a Signature

24 disease entity pages have no corresponding signature in `wiki/signatures/` or `cureva/signatures/`:

`bipolar-disorder`, `cholestasis`, `chronic-fatigue-syndrome`, `cirrhosis`, `coronary-artery-disease`, `cystic-fibrosis`, `dermatitis-herpetiformis`, `diabetic-kidney-disease`, `gastric-adenocarcinoma`, `gastric-ulcer`, `hepatitis`, `hidradenitis-suppurativa`, `hiv`, `huntingtons-disease`, `major-depressive-disorder`, `migraine`, `non-alcoholic-fatty-liver-disease`, `pelvic-inflammatory-disease`, `periodontitis`, `pneumonia`, `premature-ovarian-insufficiency`, `psoriasis`, `sepsis`, `tuberculosis`.

Top-priority candidates by source-frontmatter mentions (≥3): `major-depressive-disorder` (3), `cervical-cancer` (3), `perinatal-depression` (3). Most others are auto-discovered entity stubs that have not accumulated source density yet.

Grep used:
```
python3  # parse subtype:disease entity stems, normalize signature stems,
         # diff to find disease entities w/o matching signature
```

---

## 6. Interventions Validated in Sources but Lacking an Intervention Page

Vault has 41 wiki interventions and 32 cureva interventions. Of the 9 wiki interventions with `no triangles: array at all`, several look more like placeholder/orphan pages than missing-coverage gaps (e.g., `chelation-therapy`, `melatonin`, `resveratrol`). Ingested sources covering interventions for endometriosis, PMDD, fibromyalgia, and PCOS over 04-19 → 04-21 surfaced the following intervention candidates that may not yet have dedicated pages:

- **EFA / essential fatty acids for PMS/PMDD** — Rocha-Filho 2011 RCT n=116, ingested 04-21; no dedicated `interventions/essential-fatty-acids.md`.
- **Anti-inflammatory + low-FODMAP diet for fibromyalgia** — Silva 2022 RCT, ingested 04-20; partial coverage in `low-fodmap-diet.md` (if present) but no FM-specific triangle.
- **Metformin / GLP-1 for DM-PMS** — Nabeh 2024 review, ingested 04-21; `metformin-intervention.md` exists but is orphan and triangle-empty.
- **Probiotics for menstrual health** — Fakruddin 2025 SR 15 studies, ingested 04-21; no dedicated `interventions/probiotics-menstrual-health.md`; existing `probiotics-general.md` and `probiotics-lactobacillus-bifidobacterium.md` are both 0-source stubs.

Recommend cross-checking the 04-19 → 04-21 ingest log against the intervention directory before next cycle.

---

## 7. Missing Cross-References

- 99 asymmetric `associated_conditions` edges remain (down from 116). When signature A lists B as associated, B should reciprocate. Sample: `ovarian-cancer-signature → colorectal-cancer` (no return), `postpartum-depression-signature → pcos` (no return), `long-covid-signature → alzheimers-disease` (no return). Symmetry repair was started 04-26 but not completed.
- **STOP back-links (35 orphans)** — Each STOP's `condition:` frontmatter points to a disease entity, but disease entity pages do not include a "STOPs to consider" section linking back. This is the single largest cross-reference gap in the vault.
- **Atherosclerosis signature (1 orphan)** — Needs inbound link from `entities/atherosclerosis.md` (and likely `coronary-artery-disease`, `cardiovascular-disease`).
- **Disease entity → signature back-links** — For the 41 disease entities that DO have a signature, only some carry an explicit `signature_page:` frontmatter pointer per CLAUDE.md §4 schema. Spot-check recommended.

---

## 8. Triangle Evidence Completeness on Intervention Pages

Vault status (unchanged from 04-26):

| Layer | Wiki | Cureva |
|-------|------|--------|
| Interventions with no `triangles:` array | 9 | 0 |
| Triangles with text (`I_to_f`, `I_to_D`, `f_to_D`) but no source arrays | 55 | 22 |
| Triangles missing required text fields | 0 | 0 |

The 9 wiki interventions with no triangles at all are the priority gap (`chelation-therapy`, `curcumin`, `melatonin`, `statin-therapy`, `gluten-free-diet`, `statin`, `resveratrol`, `metformin-intervention`, plus one). Recommend either populating triangles or demoting to `stub: true`.

The 55 + 22 triangle-text-without-sources gap is per CLAUDE.md §4 schema — every triangle requires `I_to_f_sources`, `I_to_D_sources`, `f_to_D_sources` to be populated. Currently the text fields exist but the source arrays are empty or absent.

Grep used:
```
python3  # parse triangles array per intervention page,
         # count entries missing any of the three _sources fields
```

---

## 9. Confidence Levels on Signature Pages

**All 70 signature pages (42 wiki + 28 cureva) carry the `confidence` block with all 5 layers (`metallomic`, `taxonomic`, `nutritional_immunity`, `ecological`, `virulence_enzymes`).** Zero gaps.

Grep used:
```
python3  # parse fm.confidence per signature, check all 5 layer keys present
```

---

## 10. Source Page Frontmatter Completeness

- **Sources missing `evidence_level`: 161 / 1851** (8.7%) — unchanged from 04-26.
- **Sources missing `karen_brain_primitives`: 1 / 1851** — only `sources/yang-2022-preliminary-intestinal-flora-graves-methimazole.md`.

Grep used:
```
grep -L '^evidence_level:' wiki/sources/*.md | wc -l
grep -L '^karen_brain_primitives:' wiki/sources/*.md | wc -l
```

---

## 11. Entity Page Frontmatter Completeness

- **Entities missing `seo_target` AND `wikipedia_differentiation` (same set, 13 pages)**: `barium`, `cladosporium`, `fusarium`, `listeria`, `proteus`, `pseudomonas`, `strontium`, `subdoligranulum`, `titanium`, `treponema`, `uranium`, `vanadium`, `vibrio`. All 13 are also orphans (§3).

Grep used:
```
grep -L '^seo_target:' wiki/entities/*.md
grep -L '^wikipedia_differentiation:' wiki/entities/*.md
```

---

## 12. Disease Entity `associated_conditions` Population

- **0 disease entities missing `associated_conditions`** field.
- **0 disease entities with empty `associated_conditions: []`** (last cycle's 1 was repaired).

Grep used:
```
python3  # parse subtype:disease entity frontmatter, check associated_conditions key
```

---

## 13. `source_count` Reconciliation

- **1 mismatch**: `entities/breast-cancer.md` has `source_count: 18` but `sources:` list contains 19 entries.
- 1850 source pages carry no `source_count` field (expected — schema only requires this on entity/concept/signature pages, not source pages).

Grep used:
```
python3  # walk entity/concept/signature frontmatter, compare source_count vs len(sources)
```

---

## 14. DOI Format Audit

| Class | Count |
|-------|-------|
| `doi: "not yet verified"` | 219 |
| `doi: "https://doi.org/…"` (URL-prefix) | 8 |
| `doi: ""` or empty | 0 |
| Non-normalized (other forms) | 2 |
| Duplicate-DOI clusters | 115 |
| Source files affected by duplicate DOIs | 239 |

The 219 unverified DOIs are the standing batch — see [[doi-corrections-2026-04-19]]. Several duplicate clusters arise from the same paper being ingested under two slugs (e.g., a paper ingested first under one author convention and again with a more descriptive title); recommend running a dedup pass on the top-15 clusters after Karen reviews. Top-cluster heads written to `/tmp/dupdois.txt` during this run.

Grep used:
```
python3  # parse doi: per source, normalize (lowercase, strip URL prefix),
         # group by normalized DOI, flag len(group) > 1
```

---

## 15. Cross-Condition Overlap Score Currency

All signature `associated_conditions` entries currently carry an `overlap_score`. Vault was frozen since 04-24, so no new ingests have invalidated existing scores. Once the next ingest batch lands, overlap scores against the affected signatures should be recomputed automatically; lint will re-flag stale scores in the next cycle.

---

## Boundary-Violation Triage (CLAUDE.md §Rule 8)

Four hits this cycle:

1. **`concepts/aromatase.md`** — "Aromatase inhibitors are first-line therapy for ER+ postmenopausal breast cancer." This is a factual statement of conventional oncology practice, not a recommendation to a patient or practitioner about any vault-derived intervention. Borderline — soft flag.
2. **`analyses/lint-report-2026-04-19.md`** — Self-citation: this report contains the phrase "patients should" inside a quoted boundary-violation example. Informational, not a real violation.
3. **`analyses/lint-report-2026-04-21.md`** — Same as #2.
4. **`analyses/metal-disease-matrix.md`** — "clinical guidance" — appears in a row label/description; review for context.

No hard violations on entity, signature, or intervention pages.

---

## Operational Notes

- **Twelve consecutive nightly deploys queued but not shipped** (last deploy: Tue Apr 21 18:30 CDT). Vault content is structurally identical to night-5 of the queue (2026-04-23 references rewrite + 13,737 bold strip + 61 new entities + 72 new concepts + 24 new sources). The 2am clipboard handoff has failed twelve nights running — see log entries 04-25 through 05-03 for the structural-fix recommendations (`touch .auto-deploy-approved`, login-PATH wrapper, launchd job watching `DEPLOY_QUEUED.txt`, or schedule move to wake hours).
- **Index counts drift**: `wiki/index.md` shows Sources 1829 / Analyses 30; actual 1851 / 46. Header timestamp says "Last updated: 2026-04-21". Recommend regeneration in next cycle.
- **Rule 2 follow-up still pending**: `scripts/build-content.cjs` still exits 0 on YAML parse errors (silent-drop risk). Last drop incident 2026-04-23 (3 duplicate-key pages caught only because Karen looked).
- **Stub aging report**: 0 stubs older than 90 days. 18 active stubs across the vault.

---

## Summary for Karen

- **Deploy gate**: clear (0 new contradictions).
- **High-severity items needing decisions**:
  - 107 broken wikilink targets (197 occurrences across 40 files).
  - 9 wiki interventions with no triangle data at all → fix or demote to stub.
  - 55 wiki + 22 cureva intervention triangles missing `_sources` arrays.
  - 59 sub-threshold publishable pages without `stub: true` marker (mostly empty intervention placeholders).
  - 4 wiki STOPs / cureva STOPs missing required fields (the 2 NEC stops, both copies).
  - 35 STOPs orphaned — disease entity pages lack STOP back-links (largest cross-reference gap).
- **Medium-severity items**:
  - 124 non-source orphan pages.
  - 99 asymmetric `associated_conditions` edges.
  - 24 disease entities lacking signatures.
  - 13 entity pages missing `seo_target` / `wikipedia_differentiation` (overlapping the entity-orphan set).
  - 14 wiki-only signatures and 6 wiki-only STOPs without Cureva counterparts.
  - 7+ index header counts drifted from filesystem.
- **Operational backlog**: 12 nights of unshipped deploys, Rule 2 silent-drop risk unresolved, index page two weeks stale.

No fixes applied. Karen prioritizes.
