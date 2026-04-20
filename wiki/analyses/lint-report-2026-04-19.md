---
title: "WikiBiome Lint Report — 2026-04-19"
type: analysis
created: 2026-04-19
updated: 2026-04-19
sources: []
tags: [lint, health-check, maintenance, weekly]
---

# WikiBiome / Cureva Lint Report — 2026-04-19

**Scope:** Full health check of the vault at `~/Documents/Raw`.
**Run type:** Weekly automated scheduled task (Sunday lint).
**Prior run:** [[lint-report-2026-04-14]] (not [[lint-report-2026-04-12]] — that was the last deploy-gate lint).
**Action policy:** Report only. No fixes applied. Karen prioritizes.

---

## Scoreboard

| Check | Count | Severity |
|------|------|---------|
| Orphan pages (no inbound wikilinks) | **65** | medium |
| Broken wikilinks (non-source targets) | **144** | high |
| Broken wikilinks (all — incl. missing source pages) | **1,266** | critical |
| Duplicate-DOI clusters (true dupes, excl. "not yet verified") | **98** | high |
| Files affected by duplicate DOIs | **204** | high |
| Stale `" 2.md"` duplicate filenames | **2** | medium |
| Sources missing `evidence_level` | **163** | medium |
| Sources missing `karen_brain_primitives` | 0 | — |
| Sources with `doi: "not yet verified"` | **201** | medium |
| Sources with empty DOI | 0 | — |
| Entities missing `seo_target` | **22** | medium |
| Entities missing `wikipedia_differentiation` | **22** | medium |
| Disease entities missing `associated_conditions` | 0 | — |
| Disease entities WITHOUT signature (wiki or cureva) | **16** | medium |
| Signatures missing `confidence` block | 0 | — |
| Signatures missing any of 5 confidence layers | 0 | — |
| Signatures missing `associated_conditions` | 0 | — |
| Signatures missing `karen_brain_primitives` | 0 | — |
| Asymmetric `associated_conditions` pairs (A→B but not B→A) | **62** | medium |
| Wiki interventions: triangles populated but `_sources` edge fields missing | **15** | high |
| Cureva interventions with same defect | **1** | low |
| Wiki STOPs without Cureva counterpart (Cureva lag) | **6** | medium |
| Wiki-only signatures (no Cureva counterpart) | **14** | medium |
| Concept pages missing `karen_brain_primitives` | 0 | — |
| Concept pages missing `seo_target` | 0 | — |
| Boundary violations (clinical language on public pages) | **2** | low |
| Index count mismatches | **4** | medium |
| Stubs older than 90 days (last_substantive_update < 2026-01-19) | 0 tracked | — |
| `audit_passed` frontmatter markers in vault | 0 | low |
| Contradiction pairs logged via Supersession Protocol (new this week) | 0 | — |

---

## 1. Contradictions & Supersessions (CLAUDE.md §2e)

No new contradictions surfaced this cycle. Last supersession batch was logged 2026-04-18 in [[supersessions-2026-04-18]]. DOI corrections from 2026-04-19 (Chin-Chan et al.) are factual-metadata fixes, not claim-level supersessions.

**Finding:** 201 sources still carry `doi: "not yet verified"` — any of these could be masking a silent contradiction if the cited paper is actually different from the one referenced. Link-health audit ([[link-health-2026-04-19]]) already flagged 67 similarity-0 cases. Four corrected 2026-04-19. Remaining 63 need Crossref or manual PubMed.

---

## 2. Stale Claims / Supersession Review

No automated finding this cycle. A full claim-level supersession sweep would require re-reading every source's `key_findings` and comparing publication dates within condition clusters — that is a separate multi-hour pass, not part of weekly lint.

**Recommendation:** Queue a quarterly supersession sweep on the 15 highest-traffic disease entities (those with 20+ sources).

---

## 3. Orphan Pages (65)

Files with no inbound `[[wikilink]]`. Grouped by type:

### Stops (30 orphans — all need linkbacks from their signature pages)
`stop-antibiotics-during-chemotherapy-ovarian-cancer`, `stop-broad-spectrum-antibiotics-crohns`, `stop-broad-spectrum-antibiotics-long-covid`, `stop-broad-spectrum-antibiotics-pre-nec`, `stop-diagnostic-overclaiming-discovery-phase`, `stop-formula-feeding-without-supplementation-nec`, `stop-high-protein-keto-diet-ckd`, `stop-iodine-supplementation-graves`, `stop-iodine-supplementation-hashimotos`, `stop-iron-phosphate-binders-ckd`, `stop-iron-supplementation-alzheimers`, `stop-iron-supplementation-asd`, `stop-iron-supplementation-cardiovascular-disease`, `stop-iron-supplementation-crohns`, `stop-iron-supplementation-depression`, `stop-iron-supplementation-endometriosis`, `stop-iron-supplementation-graves`, `stop-iron-supplementation-long-covid`, `stop-iron-supplementation-ms`, `stop-iron-supplementation-obesity`, `stop-iron-supplementation-parkinsons`, `stop-iron-supplementation-schizophrenia`, `stop-iron-supplementation-type-2-diabetes`, `stop-isolated-zinc-supplementation-pcos`, `stop-neglecting-constipation-ckd`, `stop-nsaids-ckd`, `stop-ppi-monotherapy-without-microbiome-support-gerd`, `stop-probiotics-without-stress-management-ovarian-cancer`, `stop-scfa-replacement-without-dysbiosis-restoration-ms`, `stop-wrong-strain-probiotics-schizophrenia`, `stop-zinc-supplementation-endometriosis`.

**Pattern:** Every signature page's `stops: [...]` array should link back via `[[stop-...]]` in body text. Currently the stops exist as frontmatter array entries but no page body cites them. This is the bulk of the orphan count.

### Interventions (11 orphans)
`_template-intervention` (expected — template), `berberine`, `curcumin`, `glutathione-supplementation`, `gluten-free-diet`, `melatonin`, `metformin-intervention`, `omega-3-fatty-acids`, `resveratrol`, `statin-therapy`.
Plus: `essential-oils`, `immunotherapy`.

### Entities (13 orphans)
`barium`, `cladosporium`, `fusarium`, `megamonas`, `proteus`, `pseudomonas`, `shigella`, `strontium`, `titanium`, `treponema`, `uranium`, `vanadium`, `vibrio`.

### Disease entity orphans (3)
`chronic-fatigue-syndrome`, `coronary-artery-disease`, `diabetic-kidney-disease`, `hyperparathyroidism`, `premenstrual-syndrome`.

### Concept orphans (4)
`colonization-resistance`, `outer-membrane`, `parenteral-nutrition`, `riboswitch`.

**Action items:** None taken. Recommendation is to add body-text cross-references from parent pages (signatures → stops, disease entities → signatures, etc.). Every orphan is a page already paid-for but not routing traffic.

---

## 4. Concepts Mentioned But No Page (40 candidates)

Broken wikilink targets that look concept-shaped (lowercase, hyphenated, not a source slug, not a stop, not a date-formatted name):

High-value gaps:
- `bile-acids` / `bile acids` (also referenced as free-text)
- `interkingdom-relationships` — named in CLAUDE.md §2 and signature bodies
- `systemic-nickel-allergy-syndrome` — core Karen Brain topic
- `occupational-exposure`
- `oral-gut-axis`
- `zinc-finger`
- `malt-lymphoma`
- `attention-deficit-hyperactivity-disorder`
- `periodontitis`
- `primitive-9` (Karen's Brain primitive #9 has no concept page)
- `pregnancy`
- `oxygen`
- `clostridium-cluster-iv`

Case-sensitivity broken links (should resolve to existing lowercase pages — 30+ cases):
`Alistipes`, `Asthma`, `Bifidobacterium`, `Biofilm`, `CKD`, `Cadmium`, `Calprotectin`, `Crohns-disease`, `Depression`, `Dialister`, `Escherichia coli`, `Glutathione`, `Hashimoto's thyroiditis`, `Hashimotos-thyroiditis`, `IBD`, `Lactobacillus`, `Metformin`, `Nickel-allergy`, `Probiotics`, `Proteobacteria`, `Pseudomonas`, `Rheumatoid-arthritis`, `Roseburia`, `Ruminococcus`, `Shigella`, `Short-chain-fatty-acids`, `TLR4`, `TMAO`, `Tryptophan`, `Zinc`.

Template-rot placeholders leaked into content or output:
`${target}`, `${target}${displayText}`, `${target}${display}`, `slug`, `source-filename`, `wikilink`, `bacillus\`, `bifidobacterium\`, `lactobacillus\`, `saccharomyces-cerevisiae\`, `[...`. Latter set suggests an HTML/JS template helper was rendered literally into a markdown file somewhere.

**Action:** Normalize wikilink casing (lowercase-hyphenated is the vault convention). Purge templating leak.

---

## 5. Diseases Mentioned But No Signature Page (16)

Disease entity pages exist but no corresponding `-signature.md` in wiki/signatures/ or cureva/signatures/:

`bipolar-disorder`, `cholestasis`, `chronic-fatigue-syndrome`, `coronary-artery-disease`, `cystic-fibrosis`, `dermatitis-herpetiformis`, `diabetic-kidney-disease`, `gastric-adenocarcinoma`, `gastric-ulcer`, `hidradenitis-suppurativa`, `huntingtons-disease`, `migraine`, `non-alcoholic-fatty-liver-disease`, `pelvic-inflammatory-disease`, `premature-ovarian-insufficiency`, `psoriasis`.

Each has a disease entity page per the public schema but no signature file. Under CLAUDE.md §9, signatures are Cureva-only — these would go into `cureva/signatures/`. Rule 13 (auto-discovery) should surface these as stubs if ≥3 sources mention each condition.

---

## 6. Interventions Validated in Sources But No Intervention Page

Interventions appear in source `key_findings` and in signature body text but have no `wiki/interventions/*.md` or `cureva/interventions/*.md` page. Sampled candidates from signature bodies:

- `acarbose` beyond `acarbose-fiber-synergy`
- `butyrate-supplementation` (frequently cited as SCFA replacement)
- `polyphenol-rich-diet` (generic — exists as components scattered across `mediterranean-diet`, `curcumin`, `resveratrol`, but not as a target page)
- `low-fodmap-diet` (mentioned in IBS, IBD, gerd signatures)
- `psychobiotics` (mentioned in depression, ppd, schizophrenia signatures)

This is a heuristic list. A precise answer requires a per-condition intervention-graph diff against the source corpus — larger than weekly lint scope.

---

## 7. Missing Cross-References

Systemic asymmetries in `associated_conditions` across 42 signature pages: **62 asymmetric pairs** (A lists B, B does not list A). Representative:

- `ovarian-cancer` → `endometriosis`, but `endometriosis-signature` does not list `ovarian-cancer`.
- `ovarian-cancer` → `colorectal-cancer`; reverse missing.
- `schizophrenia` → `alzheimers-disease` / `parkinsons-disease` / `multiple-sclerosis`; none reverse-link.
- `long-covid` → `depression` / `chronic-kidney-disease` / `alzheimers-disease`; none reverse-link.
- `pancreatitis` → `pancreatic-cancer` / `necrotizing-enterocolitis` / `colorectal-cancer`; none reverse-link.
- `postpartum-depression` → `depression` / `pcos`; neither reverse-links.
- `gerd` → `ibs`; reverse missing.

Full list of 62 pairs can be regenerated via the Python block in §Grep commands.

**Interpretation:** `associated_conditions` was likely populated unidirectionally during signature build. Either direction can be correct — not every A→B implies B→A — but the asymmetry on well-studied pairs (endometriosis↔ovarian-cancer, depression↔postpartum-depression) points to drift, not principled asymmetry.

---

## 8. Triangle Evidence Completeness

CLAUDE.md §4 Intervention schema requires `I_to_f_sources`, `I_to_D_sources`, `f_to_D_sources` arrays at each triangle edge.

### wiki/interventions — 15 of 39 violate (38%)

All 15 interventions have the narrative triangle fields populated (`I_to_f`, `I_to_D`, `f_to_D`) and evidence-level tags (`I_to_f_evidence` etc.), but **zero source-filename arrays at the edges**:

`berberine`, `chelation-therapy`, `curcumin`, `glutathione-supplementation`, `gluten-free-diet`, `mediterranean-diet`, `melatonin`, `metformin-intervention`, `omega-3-fatty-acids`, `probiotics-general`, `resveratrol`, `selenium-supplementation`, `statin-therapy`, `vitamin-d-supplementation`, `zinc-supplementation`.

### cureva/interventions — 1 of 32 violates

`probiotics-asd-dysbiosis.md` has a triangles block but no edge-level sources.

**Severity:** High. Under §4 schema, a triangle without source arrays is ungradeable — Cureva cannot surface source-level evidence per edge. Currently the renderer presumably falls back to narrative + evidence-level tag, which is weaker than the schema promises.

---

## 9. Confidence Levels on Signature Pages

All 42 wiki/signatures and 28 cureva/signatures carry a `confidence:` block with all five required keys (`metallomic`, `taxonomic`, `nutritional_immunity`, `ecological`, `virulence_enzymes`). No gaps.

---

## 10. Source Page Completeness

- `evidence_level` missing on **163 of 1,716** source pages (9.5%). Batch-inferrable from existing `library_category` and study-design keywords in body summaries.
- `karen_brain_primitives` missing on **0** source pages. Complete.
- `doi: "not yet verified"` on **201** source pages. Tracked in [[doi-corrections-2026-04-19]].
- Empty DOI strings: **0**.
- Sources with non-standard DOI format (not starting with `10.`, not "not yet verified", not empty): **0** — DOI sanity is clean.

Sample of 10 sources missing `evidence_level` (full list: `grep -L "^evidence_level:" wiki/sources/*.md`):
`bars-cortina-2024-16s-vs-shotgun-crc`, `bastida-martinez-2025-pexr-peroxide-stress-metal-sensing-myxococcus`, `belteky-2023-infant-gut-microbiome-t1d-abis-study`, `bile-acids-t1d-calprotectin-scfa`, `blume-2026-metallomics-metabolomics-metal-homeostasis-c-elegans`, `boertien-2019-microbiome-composition-covariates-parkinsons`, `borghini-2020-endometriosis-nickel-ibs`, `braga-2013-snas-nosologic-framework`, `brann-2021-metabolic-profiling-ppd-diversity`, `branton-2016-brain-microbiota-ms`.

---

## 11. Entity Page Completeness

### `seo_target` and `wikipedia_differentiation` (22 entities missing both)

Same 22 files missing both fields — these were likely created before the v2 schema rolled:

`barium`, `citrobacter`, `cladosporium`, `corynebacterium`, `enterobacter`, `faecalibacterium`, `fusarium`, `listeria`, `megasphaera`, `propionibacterium`, `proteus`, `pseudomonas`, `ruminococcaceae`, `salmonella`, `shigella`, `strontium`, `subdoligranulum`, `titanium`, `treponema`, `uranium`, `vanadium`, `vibrio`.

Overlap with orphan set is near-total — these 22 are mostly orphan entities with no inbound links and missing SEO metadata. They are dead weight until linked and justified. Candidate for either stub-demotion (§2f) or §Rule-13 expansion.

---

## 12. Disease Entity `associated_conditions`

All 57 disease entity pages carry `associated_conditions`. No gaps.

---

## 13. `source_count` Field Integrity

All 274 entity pages have `source_count` matching actual `sources:` array length. No drift.

(Earlier awk-based test erroneously reported 24 mismatches; that was an awk parsing artifact — inline-array vs multi-line YAML. Corrected check via Python-equivalent logic showed zero mismatches.)

---

## 14. DOI Format Sanity

All 1,716 source DOIs either start with `10.` or are placeholder (`"not yet verified"`). **No memory-generated patterns** (e.g., `10.XXX/fake.2024.001`) detected.

However — **98 duplicate-DOI clusters remain** (same DOI in 2+ source files). 204 files affected. This is essentially unchanged from 2026-04-12 and 2026-04-14 lint. Cluster of 3+ cases (9 DOIs each duplicated 3× across files):

- `10.1038/s41398-021-01254-5` (zhang-2021 antidepressant study, 3 files)
- `10.15252/embr.202255664`
- `10.3389/fimmu.2021.746998`, `10.3389/fimmu.2022.1089295`, `10.3389/fimmu.2023.1096323`
- `10.3389/fmicb.2020.01604`, `10.3389/fmicb.2023.1193919`
- `10.3390/nu12082277`

Plus two files with ` 2.md` suffix (Finder-style duplicates):
- `wiki/sources/Bernard-Raichon2022-dysbiosis-translocation-bacteremia-covid 2.md`
- `wiki/sources/Ke2022-microbiome-covid-metagenome-genomes 2.md`

---

## 15. Cross-Condition Overlap Score Currency

All 42 signatures list ≥2 `overlap_score` entries (mean 3.5, max 4 in sampled output). No signatures carry stale zero scores. However, no automated proof that the *values* reflect the current source corpus — a full recompute would require Jaccard over present-day metallomic/taxonomic/ecological sets. Recommended quarterly, not weekly.

---

## 16. Index Drift

`wiki/index.md` header reports:
| Metals/Metalloids | 24 | actual 27 (17 `metal` + 2 `metalloid` = 29 if summed differently; 27 per `subtype: metal`) — **mismatch** |
| Microbes | 172 | actual 167 — **overcount by 5** |
| Fungi | 20 | actual 16 — **overcount by 4** |
| Diseases | 54 | actual 57 — **undercount by 3** |
| Concepts | 190 | actual 191 — **undercount by 1** |
| Interventions | 29 | actual 39 — **undercount by 10** |

Sources (1,716) and STOPs (39) match.

Subtype population in entities:
```
      1 subtype: archaea       # Note: schema says "archaeon" — legacy mismatch
     57 subtype: disease
     16 subtype: fungus
      3 subtype: metabolite
     27 subtype: metal
      2 subtype: metalloid
    167 subtype: microbe
      1 subtype: pharmaceutical
```

---

## 17. Cureva vs Wiki Divergence

### Wiki signatures without a Cureva counterpart (14)
`anxiety`, `atherosclerosis`, `barretts-esophagus`, `breast-cancer`, `celiac-disease`, `epilepsy`, `gastric-cancer`, `gestational-diabetes`, `hypertension`, `ibs`, `inflammatory-bowel-disease`, `pancreatitis`, `rheumatoid-arthritis`, `ulcerative-colitis`.

Cureva has 0 signatures that are not in `wiki/signatures/`. Direction of divergence: wiki is ahead of Cureva by 14 conditions.

### Wiki STOPs without a Cureva counterpart (6)
`stop-broad-spectrum-antibiotics-dysbiosis`, `stop-calcium-supplementation-cadmium-exposure`, `stop-iron-supplementation-ibd`, `stop-nickel-rich-foods-snas`, `stop-standard-probiotics-endometriosis`, `stop-zinc-supplementation-h-pylori`.

### Intervention divergence
Wiki has 39, Cureva has 32. 38 Wiki-unique interventions vs 32 Cureva-unique intervention entries, with little overlap — suggests the two trees serve different purposes (wiki = canonical intervention reference; cureva = condition-scoped intervention nodes). This may be by design. **Not flagged as an error** — surfaced for Karen's review.

---

## 18. Boundary Violations (§9 / Rule 8)

Only two active WikiBiome files contain clinical-recommendation-shaped language:

- `wiki/analyses/boundary-violations-2026-04-18.md` — self-reference. Not a violation; this IS the tracking file.
- `wiki/analyses/dietary-metal-paradoxes.md` — contains "patients should" and "clinicians should". Review whether this analysis belongs on Cureva or should be rewritten in descriptive voice for WikiBiome.

`prescribe` appears in 10 files — all in analyses and source pages where it's describing cited literature, not vault recommendation voice. False-positive set; no action.

---

## 19. Stub Aging (Rule 7)

187 vault pages carry `stub: true` (52 concepts, 117 entities, 18 in interventions/signatures/other).

No stubs have a `last_substantive_update` older than 2026-01-19 (90-day threshold). All stubs are recent (mostly 2026-04-18 / 2026-04-19 — auto-discovered via Rule 13 in the overnight cycle). Aging report per Rule 7 is therefore a no-op this week; run monthly, not weekly.

---

## 20. Adversarial Audit Marker Coverage (Rule 12)

**Zero** pages in the vault carry `audit_passed: YYYY-MM-DD` frontmatter. The adversarial audit machinery (Rule 12) exists ([[adversarial-audit-2026-04-19]]) but is not back-propagating the `audit_passed` stamp to the pages it clears. This breaks the weighted-sampling mechanism: every audit cycle will re-sample the same pages because none are marked clean.

**Severity:** Low for this cycle, high structurally. Needs one-time fix to the audit script.

---

## Grep Commands Used (Auditable)

```bash
# File counts
ls wiki/sources/*.md | wc -l                                  # 1716
ls wiki/entities/*.md | wc -l                                 # 274
grep -h "^subtype:" wiki/entities/*.md | sort | uniq -c       # subtype distribution

# Source frontmatter
grep -L "^evidence_level:" wiki/sources/*.md | wc -l           # 163
grep -L "^karen_brain_primitives:" wiki/sources/*.md | wc -l   # 0
grep -l 'doi:.*"not yet verified"' wiki/sources/*.md | wc -l   # 201
grep -c '^doi: *""' wiki/sources/*.md                          # 0

# Entity frontmatter
grep -L "^seo_target:" wiki/entities/*.md                      # 22 files
grep -L "^wikipedia_differentiation:" wiki/entities/*.md       # 22 files
grep -l "^subtype: disease" wiki/entities/*.md | \
  xargs grep -L "^associated_conditions:" | wc -l              # 0

# Signature frontmatter (per-layer confidence check via Python)
python3 (see script block above in this report)               # 0 issues

# Orphans
ls wiki/entities/ wiki/concepts/ wiki/signatures/ wiki/interventions/ wiki/stops/ \
  | grep '\.md$' | sed 's/\.md$//' | sort -u > /tmp/all_pages.txt
grep -rhoE '\[\[[^]|#]+' wiki/ | sed 's/\[\[//' | sort -u > /tmp/wikilink_targets.txt
comm -23 /tmp/all_pages.txt /tmp/wikilink_targets.txt > /tmp/orphans.txt  # 65

# Broken wikilinks
comm -13 /tmp/all_pages.txt /tmp/wikilink_targets.txt > /tmp/missing_targets.txt
ls wiki/sources/*.md | sed 's|.*/||; s/\.md$//' | sort -u > /tmp/all_sources.txt
comm -23 /tmp/missing_targets.txt /tmp/all_sources.txt > /tmp/missing_truly.txt  # 144

# Duplicate DOI clusters
grep -H "^doi:" wiki/sources/*.md | \
  awk -F: '{key=$NF; gsub(/^ */,"",key); gsub(/"/,"",key); print key"\t"$1":"$2}' | \
  awk -F'\t' '{print $1}' | grep -v "^not yet verified$" | grep -v "^$" | \
  sort | uniq -c | awk '$1>1'                                  # 98 clusters, 204 files

# Intervention triangle edge-sources check
# (Python analysis — see Report §8)

# Index drift
wc -l wiki/index.md
grep -h "^subtype:" wiki/entities/*.md | sort | uniq -c
```

---

## Prioritization (for Karen)

**Tier 1 — fix before next deploy:**
1. 15 wiki/interventions missing `_sources` arrays on triangle edges — schema requires it; Cureva renders stronger evidence with these.
2. Update `wiki/index.md` counts (Metals, Microbes, Fungi, Diseases, Concepts, Interventions).
3. Normalize wikilink casing (30+ broken case-sensitivity targets).

**Tier 2 — this week:**
4. Resolve the 63 remaining "not yet verified" DOIs from the 2026-04-19 corrections queue (per [[doi-corrections-2026-04-19]]).
5. Delete the two " 2.md" filename duplicates (both COVID papers; identical DOIs with canonical variants).
6. De-dupe the 98 duplicate-DOI clusters — this has persisted across three lint cycles.
7. Add body-text `[[stop-...]]` references in signature pages to eliminate 30 stop-orphans.

**Tier 3 — when scoped:**
8. Fill 163 source `evidence_level` fields via batch inference from `library_category`.
9. Add `seo_target` and `wikipedia_differentiation` to the 22 entity pages that lack them.
10. Resolve 62 asymmetric `associated_conditions` pairs (likely most should be bidirectional).
11. Build signature pages for 16 disease entities currently signature-less.
12. Wire `audit_passed` stamping into the Rule 12 adversarial audit script.

---

## Out of Scope (Deferred)

- Full claim-level supersession sweep (quarterly).
- Overlap-score recomputation across all 42 signatures (quarterly).
- Cureva-vs-wiki intervention tree rationalization (architectural; requires Karen's call).
- Stubs-older-than-90-days aging report (monthly).
