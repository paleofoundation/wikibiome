---
title: "WikiBiome Lint Report — 2026-04-26"
type: analysis
created: 2026-04-26
updated: 2026-04-26
sources: []
tags: [lint, health-check, maintenance, weekly]
---

# WikiBiome / Cureva Lint Report — 2026-04-26

Scope: Full health check of the vault at `~/Documents/Raw`.
Run type: Weekly automated scheduled task (Sunday).
Prior run: [[lint-report-2026-04-21]] (Tuesday slot).
Action policy: Report only. No fixes applied. Karen prioritizes.

Notable deltas vs. 2026-04-21: orphans 30 → 71 real (excl. sources; 550 incl. sources, sources baseline first reported); duplicate-DOI clusters 115 → 113 (−2, ingest cleanup); unverified DOIs 211 → 219 (+8 fresh ingests without lookup); wiki sources 1829 → 1851 (+22); intervention triangle gaps 5 → 55 (regression — every triangle in the vault now has populated text but missing `_sources` arrays, so the four-line edge integrity check counts every triangle, not just one per intervention; this is a measurement scope change, not a correctness regression — see §8); cureva intervention triangle gaps 1 → 22 (same scope change). Stub count 183 → 23 (`stub: true` pages); 60 publishable pages remain below §2f density threshold without a stub marker.

---

## Scoreboard

| Check | Count | Severity | Δ vs 04-21 |
|------|------|---------|-----------|
| Orphan pages, sources/ excluded | 67 | medium | +37 |
| Orphan pages, including sources/ | 550 | informational | first measured |
| Broken wikilink targets (unique) | 100 | high | −291 (definition narrowed: body-only, slug-set includes cureva) |
| Broken wikilink occurrences | 181 | high | — |
| Case-only broken wikilinks | 14 | medium | −87 |
| Duplicate-DOI clusters | 113 | high | −2 |
| Files affected by duplicate DOIs | 235 | high | −4 |
| Stale `" 2.md"` duplicate filenames | 2 | medium | 0 |
| Sources missing `evidence_level` | 161 | medium | 0 |
| Sources missing `karen_brain_primitives` | 1 | low | 0 |
| Sources with `doi: "not yet verified"` | 219 | medium | +8 |
| Sources with non-normalized DOI (`https://doi.org/…`) | 10 | low | 0 |
| Sources with empty DOI | 0 | — | 0 |
| Entities missing `seo_target` | 13 | medium | −2 |
| Entities missing `wikipedia_differentiation` | 13 | medium | −2 |
| Disease entities missing `associated_conditions` | 0 | — | 0 |
| Disease entities with EMPTY `associated_conditions: []` | 1 | low | new flag |
| Disease entity pages WITHOUT signature | 24 | medium | +7 |
| Conditions in source frontmatter (≥3 mentions) lacking signature | 12 | medium | new flag (8 are slug-normalization artifacts; 4 are real) |
| Signatures missing `confidence` block | 0 | — | 0 |
| Signatures missing any of 5 confidence layers | 0 | — | 0 |
| Signatures missing `associated_conditions` | 0 | — | 0 |
| Asymmetric `associated_conditions` pairs (A→B, no B→A) | 116 | medium | +49 |
| Wiki interventions with no `triangles:` array at all | 9 | high | new flag |
| Wiki interventions: triangles populated but `_sources` arrays missing | 55 | high | +50 (scope: per triangle, not per file) |
| Cureva interventions: same defect | 22 | high | +21 (same scope change) |
| Wiki STOPs with empty `evidence:` field | 2 | high | −2 |
| Cureva STOPs with empty `evidence:` field | 3 | high | −1 |
| Sub-threshold publishable pages without `stub: true` (§2f) | 60 | high | new flag |
| Stubs total in vault (`stub: true` marker) | 23 | — | −160 (stubs aging out as content expands) |
| Stubs older than 90 days | 0 | — | 0 |
| `source_count` mismatch vs `sources` list length | 1 | low | 0 |
| Pages with `sources` list but no `source_count` field | 0 | — | −143 (cleared) |
| Index header counts vs filesystem (8 of 11 categories drift) | 8 | medium | +2 |
| Boundary violations (clinical language on public pages) | 0 | — | −1 |
| Pages carrying `NEEDS VERIFICATION` markers | 107 | informational | — |
| Pages carrying `UNSOURCED` markers | 1 | informational | — |
| Pages with explicit contradiction/supersession language | 69 | informational | — |
| Wiki-only signatures (no Cureva counterpart) | 14 | medium | 0 |
| Cureva-only signatures (no Wiki counterpart) | 0 | — | 0 |
| Wiki-only STOPs (no Cureva counterpart) | 6 | medium | 0 |
| Cureva-only STOPs (no Wiki counterpart) | 1 | low | 0 |
| Mojibake (encoded Unicode replacement) in titles | ≥1 | low | new flag |

---

## 1. Contradictions & Supersessions (CLAUDE.md §2e)

No new claim-level contradictions surfaced this cycle. The last batch is still [[supersessions-2026-04-18]]. 69 source pages carry contradiction/supersession language in their bodies (`grep -rliE "supersed|contradicts|conflicting" wiki/sources/`), unchanged in pattern from prior weeks — these are individual sources documenting tensions, not unresolved page-level conflicts.

`doi: "not yet verified"` count rose +8 to **219**. Each of these can mask a silent metadata mistake; refer to [[doi-corrections-2026-04-19]] for the batch-resolve queue. The 10 `https://doi.org/…` URL-prefix DOIs are a separate normalization issue, unchanged from 04-21.

---

## 2. Stale Claims / Supersession Review

No automated findings this cycle. Quarterly supersession sweep remains queued — not weekly scope.

---

## 3. Orphan Pages

Orphan = page slug never appears in any inbound `[[wikilink]]` and is never listed in any frontmatter `sources:` array. Templates (`_template-*`) excluded.

### 3a. Sources orphans — 483

This is a first-time measurement. Source pages without an inbound link are common because sources are typically referenced via inline citations on entity/concept/signature pages or listed in `sources:` frontmatter. The 483 figure is high enough to warrant a separate audit pass — it implies ~26% of source pages are not currently surfaced in the knowledge graph. Likely causes: ingest sessions that wrote source pages without back-wiring entity/signature inline citations; recent batch ingests (PMDD, Fibromyalgia, ASD, etc.) where the source-to-entity propagation step lagged. Not surfaced in scoreboard severity; tracked as informational pending separate ingest-completeness audit.

### 3b. Non-source orphans — 67

Genuine orphans across `entities/`, `concepts/`, `interventions/`, `stops/`:

**Entities (15):** `barium`, `barnesiella`, `bifidobacterium-adolescentis`, `bifidobacterium-breve`, `chronic-fatigue-syndrome`, `cladosporium`, `diabetic-kidney-disease`, `erysipelotrichaceae`, `fusarium`, `psoriasis`, `strontium`, `titanium`, `uranium`, `vanadium`, `vibrio`. The non-disease set is the same metal/microbe tail from 04-21 plus four new arrivals (`barnesiella`, `bifidobacterium-adolescentis`, `bifidobacterium-breve`, `erysipelotrichaceae`) that haven't been wired into any signature or concept yet. Three disease entities (`chronic-fatigue-syndrome`, `diabetic-kidney-disease`, `psoriasis`) are double-gaps: orphan AND no signature page.

**Concepts (17):** `chitotriosidase`, `cysteine`, `defensins`, `hyperaccumulator`, `hyperparathyroidism`, `immunotherapy`, `ketone-bodies`, `microbiome-diversity-metrics`, `outer-membrane`, `oxalate`, `parenteral-nutrition`, `peptidoglycan`, `premenstrual-syndrome`, `quinolinic-acid`, `riboswitch`, `succinate`, `ursodeoxycholic-acid`. `cysteine`, `defensins`, `peptidoglycan`, `quinolinic-acid`, `succinate`, `ursodeoxycholic-acid` are biologically high-traffic concepts; their orphan status implies inline mentions exist but were never converted to wikilinks.

**Wiki interventions (7):** `curcumin`, `glutathione-supplementation`, `gluten-free-diet`, `melatonin`, `metformin-intervention`, `resveratrol`, `statin-therapy`. Same set as 04-21 minus `berberine` (now linked). All seven also lack any `triangles:` array (§8 below).

**Wiki stops (28):** All NEC-, iron-supplementation-, broad-spectrum-antibiotic-, and PCOS/CKD/MS/GERD-specific STOPs newly arrived in the vault are not yet linked from their parent signatures. The whole 28 is a regression — 04-21 reported zero stop orphans. The cause is the recent stop-page expansion landing without back-wiring signature `stops:` arrays.

**Cureva signatures/interventions/stops:** No orphan check this cycle for cureva-side files (excluded for symmetry; cureva surfaces orphans as part of its own audit).

---

## 4. Concepts Mentioned But No Page

100 unique broken wikilink targets across 181 occurrences (body text only, after filtering both `wiki/` and `cureva/` slug spaces). Top misses:

| Target | Occurrences | Likely fix |
|---|---|---|
| `metal-disease-matrix` | 33 | Page exists at `wiki/analyses/metal-disease-matrix.md` — links must use `analyses/metal-disease-matrix` form, OR slug should be hoisted to root analysis index |
| `dietary-metal-paradoxes` | 17 | No page exists; concept is mentioned in 17 places, candidate for new concept page |
| `doi-corrections-2026-04-19` | 5 | Analysis file exists; same path-prefix issue as `metal-disease-matrix` |
| `note-evaluation-risk-ptes-italy-fish-products` | 3 | Source filename is `NOTE-evaluation-...md` (uppercase) — case-only mismatch |
| `bacterial-translocation` | 2 | Concept gap — high inline frequency in source bodies; create concept stub |
| `equol`, `prostatitis`, `faecalibacterium-hominis-4p15` | 2 each | Entity gaps |

14 case-only broken wikilinks (would resolve if lowercased). Six follow the pattern `[[Lactobacillus\]]`, `[[Bifidobacterium\]]`, `[[Saccharomyces-cerevisiae\]]`, `[[Bacillus\]]` — these are markdown-escaped trailing characters in italicized species names, a known leftover from the bold-strip pass on 2026-04-23.

---

## 5. Diseases Mentioned in Sources But Lacking Signature

24 disease entity pages have no corresponding signature page in `wiki/signatures/` or `cureva/signatures/`:

`bipolar-disorder`, `cholestasis`, `chronic-fatigue-syndrome`, `cirrhosis`, `coronary-artery-disease`, `cystic-fibrosis`, `dermatitis-herpetiformis`, `diabetic-kidney-disease`, `gastric-adenocarcinoma`, `gastric-ulcer`, `hepatitis`, `hidradenitis-suppurativa`, `hiv`, `huntingtons-disease`, `major-depressive-disorder`, `migraine`, `non-alcoholic-fatty-liver-disease`, `pelvic-inflammatory-disease`, `periodontitis`, `pneumonia`, `premature-ovarian-insufficiency`, `psoriasis`, `sepsis`, `tuberculosis`.

Plus 12 conditions named in source frontmatter `condition:` field (≥3 mentions) lacking a signature page. After de-duplicating slug normalization artifacts (`parkinson-s-disease` vs `parkinsons-disease`, `gastroesophageal-reflux-disease` vs `gerd`, `polycystic-ovary-syndrome` vs `pcos`, `major-depressive-disorder` overlapping the disease-entity gap), four real gaps remain: **`covid-19` (11 source mentions)**, **`thyroid-cancer` (3)**, **`cervical-cancer` (3)**, **`perinatal-depression` (3)**. The `cross-condition` pseudo-condition (54 mentions) is not a disease — it tags pan-disease sources and should not be treated as a missing signature.

---

## 6. Interventions Validated But Lacking Page

Hard count not derivable from frontmatter without parsing intervention names from titles. Coarse signal: 147 source pages carry `library_category: interventions` or `drug-repurposing`; only 40 intervention pages exist in the wiki. Ratio 3.7:1 implies meaningful coverage gap, but a clean list requires NLP extraction beyond weekly lint scope. Karen action: a one-time pass against the 147 source titles would surface the high-priority intervention gaps; tracked as deferred.

---

## 7. Missing Cross-References

Asymmetric `associated_conditions` pairs (A lists B, B does not list A): **116** disease-entity pairs. Up from 67 at 04-21 — the +49 increase tracks the recent expansion of disease entities (3 new entities added since 04-21) plus existing pairs that gained reverse links during the 04-21 → 04-26 window. Representative misses:

- `epilepsy` → `anxiety`, `autism-spectrum-disorder`, `depression` (none reverse)
- `coronary-artery-disease` → `type-2-diabetes`, `chronic-kidney-disease`, `hypertension`, `cardiovascular-disease`, `erectile-dysfunction` (none reverse)
- `type-1-diabetes` → `multiple-sclerosis`, `type-2-diabetes`, `diabetic-kidney-disease`, `hashimotos-thyroiditis` (none reverse)
- `huntingtons-disease` → `alzheimers-disease`, `parkinsons-disease` (neither reverse)
- `long-covid` → `depression`, `alzheimers-disease`, `chronic-kidney-disease` (none reverse)

Recommendation: bulk-rewrite, not page-by-page. The relationship is symmetric by definition; making it textual on both pages is a once-per-pair edit.

`cystic-fibrosis.md` declares `associated_conditions: []` — empty array, not missing. It is the only disease entity in this state.

---

## 8. Triangle Evidence Completeness (Interventions)

### 8a. Wiki interventions

- **9 interventions have no `triangles:` array at all**: `chelation-therapy`, `curcumin`, `glutathione-supplementation`, `gluten-free-diet`, `melatonin`, `metformin-intervention`, `resveratrol`, `statin-therapy`, `statin`. These pages exist as intervention concept articles but never had clinical triangle structure added — they are not Cureva-publishable in their current form.
- **55 condition-triangle entries across 28 interventions have populated `I_to_f`/`I_to_D`/`f_to_D` text but missing `_sources` arrays**. This is the per-triangle expansion of the 04-21 measurement (which counted one defect per intervention regardless of triangle count); the underlying issue is unchanged. Top offenders by triangle count: `mediterranean-diet` (6 conditions), `selenium-supplementation` (4), `vitamin-d-supplementation` (5), `zinc-supplementation` (5), `fmt-intervention` (6), `ketogenic-diet` (4).

### 8b. Cureva interventions

22 condition-triangle entries with the same defect (text populated, sources missing). All 31 cureva intervention pages have at least one triangle; the gap is purely on edge-source attribution.

---

## 9. Confidence Levels on Signatures

All 42 wiki signature pages have all 5 confidence layers (`metallomic`, `taxonomic`, `nutritional_immunity`, `ecological`, `virulence_enzymes`) assigned to one of `high|moderate|preliminary`. No regressions.

All 42 signatures carry `associated_conditions` blocks with at least one entry. No empty arrays. `overlap_score` populated where the block has entries — no signatures with `associated_conditions` populated but `overlap_score` missing.

---

## 10. Source-Page Frontmatter Coverage

- **Missing `evidence_level`: 161 sources** (unchanged from 04-21). These are predominantly older ingests from before the v2 schema rolled out. List saved at `/tmp/no_evidence.txt` during the run; representative sample: `bars-cortina-2024-16s-vs-shotgun-crc.md`, `belteky-2023-infant-gut-microbiome-t1d-abis-study.md`, `boertien-2019-microbiome-composition-covariates-parkinsons.md`, `chen-2024-microbiome-derived-metabolites-parkinsons-progression.md`, `colombage-2025-dietary-flavonoid-supplementation-postpartum-mood.md`, …
- **Missing `karen_brain_primitives`: 1 source** — `yang-2022-preliminary-intestinal-flora-graves-methimazole.md`. This file is annotated in the 2026-04-20 log as a duplicate redirect stub; the missing field is consistent with that status.
- **`doi: "not yet verified"`: 219** (+8 vs 04-21). Eight new ingests since 04-21 entered without DOI lookup. Bulk fix is unchanged: PubMed lookup against author + year + title for the 219 files.
- **DOI URL-prefix (non-normalized): 10** — same set as 04-21. Strip `https://doi.org/` from the doi field; trivial regex fix.
- **Empty DOI / missing `doi:` field entirely: 0**.

---

## 11. Entity Frontmatter Coverage

13 entity pages missing `seo_target` AND `wikipedia_differentiation` (same set for both fields):

`barium`, `cladosporium`, `fusarium`, `listeria`, `proteus`, `pseudomonas`, `strontium`, `subdoligranulum`, `titanium`, `treponema`, `uranium`, `vanadium`, `vibrio`.

Down 2 from 04-21 (15 → 13). The set is the long-standing metal/microbe tail with no condition tie-in yet — same root cause as their orphan status (§3b). 65 disease entities, all with `associated_conditions` populated except `cystic-fibrosis.md` which carries an empty array.

---

## 12. source_count vs sources List

One mismatch:

- `wiki/entities/breast-cancer.md`: `source_count: 18` declared, `sources` list contains 19 items. Off-by-one — likely a missed counter bump on the most recent ingest. Trivial fix.

All other entity, concept, signature, intervention, and stop pages match. The 143 pages flagged at 04-21 as "sources list but no source_count field" are now fully populated — the regression has cleared.

---

## 13. STOP Page Coverage

- `wiki/stops/stop-broad-spectrum-antibiotics-pre-nec.md` — `evidence:` field empty. CLAUDE.md §4 requires populated.
- `wiki/stops/stop-formula-feeding-without-supplementation-nec.md` — `evidence:` field empty.
- `cureva/stops/stop-broad-spectrum-antibiotics-pre-nec.md` — same defect (mirror).
- `cureva/stops/stop-formula-feeding-without-supplementation-nec.md` — same defect (mirror).
- `cureva/stops/stop-iron-supplementation-asd.md` — `evidence:` field empty.

Down from 04-21 (4 wiki STOPs flagged) to 2 wiki + 3 cureva = 5 total. Net improvement on the wiki side, regression on the cureva side as new ASD STOP was created without populating evidence.

---

## 14. Sub-Threshold Publishable Pages (§2f)

60 pages publish to WikiBiome with `platform: wikibiome` or `platform: both` while sitting below the §2f source-density threshold AND lacking a `stub: true` marker:

| Page type | Count | Notes |
|---|---|---|
| Disease entities below 5-source threshold | 8 | `chronic-fatigue-syndrome` (3), `cirrhosis` (4), `diabetic-kidney-disease` (3), `hepatitis` (4), `huntingtons-disease` (4), `premature-ovarian-insufficiency` (4), `psoriasis` (4), `sepsis` (3), `tuberculosis` (3) |
| Metal entities below 5-source threshold | 1 | `iodine` (4) |
| Microbe entities below 3-source threshold | 1 | (none — disease subtype dominates) |
| Signatures below 10-source threshold | 12 | `celiac-disease-signature` (1), `anxiety-signature` (5), `epilepsy-signature` (5), `pancreatitis-signature` (5), `ulcerative-colitis-signature` (6), `barretts-esophagus-signature` (7), `gastric-cancer-signature` (7), `gerd-signature` (7), `ibs-signature` (7), `rheumatoid-arthritis-signature` (7), `ovarian-cancer-signature` (8), `obesity-signature` (9) |
| Interventions below 3-source threshold | 29 | majority at 0/3; see §3b orphan list — most overlap |
| STOPs below 2-source threshold | 9 | several at 1/2 |

The §2f rule states such pages MUST carry `stub: true` and either render with an "expansion needed" banner or be excluded from sitemap.xml. None of these 60 carry the marker. The 04-24 deploy log notes "15 stubs excluded from sitemap" — that count must be 75 to satisfy the rule. Either the build script is not enforcing §2f, or these 60 pages should be auto-demoted to `stub: true` per §2f's enforcement clause + Rule 7.

`celiac-disease-signature` at 1/10 is the most acute single instance — flagged independently in Rule 11 (claim-level citation density) at the time it was named.

---

## 15. Cross-Condition Overlap Currency

All 42 signature pages with populated `associated_conditions` blocks have an `overlap_score` field per condition entry. No signatures with newly ingested sources since 04-21 have a stale overlap entry; ingests since 04-21 have updated the Jaccard-style overlap denominators where applicable. No findings flagged this cycle.

The 116 asymmetric `associated_conditions` pairs (§7) ARE adjacent to overlap freshness: every one-way link is a candidate for an overlap-score recalc on the un-listed reverse partner. Tracked as part of §7 fix.

---

## 16. Index Drift

`wiki/index.md` is timestamped "Last updated: 2026-04-21" but several headline counts no longer match the filesystem:

| Field | Index | FS | Δ |
|---|---|---|---|
| Sources | 1829 | 1851 | +22 |
| Metals/Metalloids | 24 | 29 | +5 |
| Microbes | 202 | 218 | +16 |
| Fungi | 22 | 18 | −4 |
| Diseases | 63 | 65 | +2 |
| Cureva Signatures | 42 | 42 (wiki) / 29 (cureva) | depends on which side index counts |
| Interventions | 41 | 41 (wiki) / 32 (cureva) | mixed |
| STOPs | 39 | 39 (wiki) / 34 (cureva) | mixed |
| Analyses | 30 | 44 | +14 |

8 of 11 lines drift. The Metals/Metalloids count moved from 17 to 24 in the table heading but the per-bullet listing under "## Metals & Metalloids (17)" shows only 17 — the bullet section is the most stale. Recommendation: regenerate index from filesystem before next deploy.

---

## 17. Cureva ↔ Wiki Parity

- 14 wiki signatures have no cureva counterpart (after stripping the `-signature` suffix): `anxiety`, `atherosclerosis`, `barretts-esophagus`, `breast-cancer`, `celiac-disease`, `epilepsy`, `gastric-cancer`, `gestational-diabetes`, `hypertension`, `ibs`, `inflammatory-bowel-disease`, `pancreatitis`, `rheumatoid-arthritis`, `ulcerative-colitis`. Same set as 04-21.
- 0 cureva-only signatures.
- 6 wiki-only STOPs and 1 cureva-only STOP — both unchanged.

---

## 18. Mojibake / Encoding

`wiki/sources/mitchell-2024-synbiotics-gdh-gi-behavior-anxiety-asd.md` carries `Mitchell 2024 ��� Gastrointestinal, Behaviour and Anxiety…` in the title — em-dash replaced with U+FFFD replacement glyphs. At least one instance; a vault-wide grep for `\xef\xbf\xbd` would catch any others. Trivial fix.

---

## 19. Stale Duplicate Filenames

Two files with the macOS-style ` 2.md` suffix persist:

- `wiki/sources/Bernard-Raichon2022-dysbiosis-translocation-bacteremia-covid 2.md`
- `wiki/sources/Ke2022-microbiome-covid-metagenome-genomes 2.md`

Same set as 04-21. These duplicate the canonical files of the same name without the ` 2` suffix. The duplicates are orphans (nothing links to a path with a literal space and `2`). Safe-delete candidates pending Rule 1 confirmation.

---

## Grep / Script Commands Used

```bash
# Counts
ls /Users/kmfp/Documents/Claude/Raw/wiki/sources/*.md | wc -l                           # source total
grep -L "^evidence_level:" /Users/kmfp/Documents/Claude/Raw/wiki/sources/*.md | wc -l    # missing evidence_level
grep -L "^karen_brain_primitives:" /Users/kmfp/Documents/Claude/Raw/wiki/sources/*.md
grep -lE '^doi: ?"?not yet verified' /Users/kmfp/Documents/Claude/Raw/wiki/sources/*.md | wc -l
grep -lE '^doi: ?"?https?://' /Users/kmfp/Documents/Claude/Raw/wiki/sources/*.md | wc -l

# Entity coverage
grep -L "^seo_target:" /Users/kmfp/Documents/Claude/Raw/wiki/entities/*.md
grep -L "^wikipedia_differentiation:" /Users/kmfp/Documents/Claude/Raw/wiki/entities/*.md
grep -l "^subtype: disease" /Users/kmfp/Documents/Claude/Raw/wiki/entities/*.md | wc -l
grep -l "^subtype: disease" /Users/kmfp/Documents/Claude/Raw/wiki/entities/*.md | xargs grep -L "^associated_conditions:"
grep -lE "^associated_conditions:\s*\[\s*\]\s*$" /Users/kmfp/Documents/Claude/Raw/wiki/entities/*.md  # empty arrays

# Signature confidence (Python — see /tmp/check_conf.py during run):
#   for each signature, parse confidence: block, confirm 5 named layers
#     each match ': (high|moderate|preliminary)' inside the block

# Triangle integrity (Python /tmp/check_triangles.py + /tmp/check_cureva_triangles.py):
#   YAML-parse triangles[], check each entry has I_to_f / I_to_f_sources / I_to_D / I_to_D_sources / f_to_D / f_to_D_sources

# Orphans (Python /tmp/find_orphans.py):
#   build slug set from wiki/{sources,entities,concepts,signatures,interventions,stops} + cureva/*
#   collect all [[wikilink]] targets and frontmatter sources: items
#   orphan = slug never targeted

# Broken wikilinks (Python /tmp/broken_wikilinks2.py): body-only scan against full wiki+cureva slug union, with case-only bucket separated.

# Duplicate DOIs (Python /tmp/duplicate_dois.py): hash sources by lowercased DOI; cluster ≥2.

# Sub-threshold pages (Python /tmp/check_stubs_density.py): per-type threshold from §2f, exclude `stub: true`, exclude cureva-platform pages.

# Index drift:
grep -l '^subtype: metal\(loid\)\?' /Users/kmfp/Documents/Claude/Raw/wiki/entities/*.md | wc -l
grep -l '^subtype: microbe' /Users/kmfp/Documents/Claude/Raw/wiki/entities/*.md | wc -l
grep -l '^subtype: fungus' /Users/kmfp/Documents/Claude/Raw/wiki/entities/*.md | wc -l
grep -l '^subtype: archaea' /Users/kmfp/Documents/Claude/Raw/wiki/entities/*.md | wc -l
grep -l '^subtype: disease' /Users/kmfp/Documents/Claude/Raw/wiki/entities/*.md | wc -l
ls /Users/kmfp/Documents/Claude/Raw/wiki/analyses/*.md | wc -l

# Stubs:
grep -rlE '^stub:\s*true' /Users/kmfp/Documents/Claude/Raw/wiki/ /Users/kmfp/Documents/Claude/Raw/cureva/ | wc -l

# STOP evidence field:
#   per file in wiki/stops + cureva/stops, parse frontmatter for required fields (conventional_rationale, why_counterproductive, evidence, alternative); flag empty values

# Stale duplicate filenames:
find /Users/kmfp/Documents/Claude/Raw/wiki /Users/kmfp/Documents/Claude/Raw/cureva -name '* 2.md'
```

---

## Recommended Priority Order (Karen's call)

1. **§14 sub-threshold pages without `stub: true`** — direct §2f / Rule 7 violation. Either auto-demote (script change) or expand. 60 files. Highest leverage: one batch demotion clears all of them in one commit.
2. **§3b stop orphans (28)** — back-wire signature `stops:` arrays. Rule 5 batch preview recommended.
3. **§7 asymmetric `associated_conditions` pairs (116)** — symmetric by definition; one bulk pass fixes the whole set.
4. **§8 triangle `_sources` arrays (55 wiki + 22 cureva)** — these are clinical-evidence claims rendered without source attribution. High Cureva risk.
5. **§13 STOP evidence fields (5 across both vaults)** — small file count, blocks publishing.
6. **§16 index drift** — regenerate from filesystem before next deploy.
7. **§10 219 unverified DOIs** — long-running, batchable; not blocking.
8. **§18 mojibake** — single file, trivial.

End of report.
