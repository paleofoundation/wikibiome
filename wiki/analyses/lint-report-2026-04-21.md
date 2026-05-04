---
title: "WikiBiome Lint Report — 2026-04-21"
type: analysis
created: 2026-04-21
updated: 2026-04-21
sources: []
tags: [lint, health-check, maintenance, weekly]
---

# WikiBiome / Cureva Lint Report — 2026-04-21

Scope: Full health check of the vault at `~/Documents/Raw`.
Run type: Weekly automated scheduled task (Tuesday — slot shifted from Sunday 04-19 cycle).
Prior run: [[lint-report-2026-04-19]].
Action policy: Report only. No fixes applied. Karen prioritizes.

Notable deltas vs. 2026-04-19: orphans 65 → 33 (halved — stop/intervention links landed); duplicate-DOI clusters 98 → 115 (+17, driven by new ingest sessions for PMDD, Fibromyalgia, Graves that dropped near-duplicates); unverified DOIs 201 → 211 (+10 new ingests without PubMed lookup); wiki entities 274 → 318 (+44 — microbe expansion). Triangle edge-source gaps 15 → 5 (significant cleanup).

---

## Scoreboard

| Check | Count | Severity | Δ vs 04-19 |
|------|------|---------|-----------|
| Orphan pages (vault-wide, excl. `_template*`) | 30 | medium | −35 |
| Broken wikilink targets (all, incl. source slugs that don't exist) | 391 | high | — |
| Broken wikilinks — concept-shape missing pages | 209 | high | — |
| Broken wikilinks — case-sensitivity (should resolve if lowercased) | 101 | medium | +48 |
| Templating leaks in wikilink positions | 14 | high | ≈flat |
| Duplicate-DOI clusters (true dupes, excl. "not yet verified") | 115 | high | +17 |
| Files affected by duplicate DOIs | 239 | high | +35 |
| Stale `" 2.md"` duplicate filenames | 2 | medium | 0 |
| Sources missing `evidence_level` | 161 | medium | −2 |
| Sources missing `karen_brain_primitives` | 1 | low | +1 |
| Sources with `doi: "not yet verified"` | 211 | medium | +10 |
| Sources with non-normalized DOI (`https://doi.org/…` prefix) | 10 | low | flagged new |
| Sources with empty DOI | 0 | — | 0 |
| Entities missing `seo_target` | 15 | medium | −7 |
| Entities missing `wikipedia_differentiation` | 15 | medium | −7 |
| Disease entities missing `associated_conditions` | 0 | — | 0 |
| Disease entities WITHOUT signature (wiki or cureva) | 17 | medium | +1 |
| Signatures missing `confidence` block | 0 | — | 0 |
| Signatures missing any of 5 confidence layers | 0 | — | 0 |
| Signatures missing `associated_conditions` | 0 | — | 0 |
| Signatures missing `karen_brain_primitives` | 0 | — | 0 |
| Asymmetric `associated_conditions` pairs (A→B but not B→A) | 67 | medium | +5 |
| Wiki interventions: triangles populated but `_sources` edge fields missing | 5 | high | −10 |
| Cureva interventions with same defect | 1 | low | 0 |
| Wiki STOPs without Cureva counterpart | 6 | medium | 0 |
| Wiki-only signatures (no Cureva counterpart) | 14 | medium | 0 |
| STOPs missing required `evidence` field | 4 | high | new flag |
| Concept pages missing `karen_brain_primitives` | 0 | — | 0 |
| Concept pages missing `seo_target` | 0 | — | 0 |
| Boundary violations (clinical language on public pages) | 1 | low | −1 |
| `source_count` mismatch vs `sources` list length | 1 | low | +1 |
| Pages with `sources` list but NO `source_count` field | 143 | low | new flag |
| Index count mismatches (header vs filesystem) | 6 | medium | +2 |
| Stubs total in vault | 183 | — | −4 |
| Stubs older than 90 days (`last_substantive_update` < 2026-01-21) | 0 | — | 0 |
| `audit_passed` frontmatter markers across vault | 0 | low | 0 |
| Contradiction pairs logged via Supersession Protocol (new this week) | 0 | — | 0 |
| Promised pages from 2026-04-18 log not yet created | 5 | medium | new flag |

---

## 1. Contradictions & Supersessions (CLAUDE.md §2e)

No new claim-level contradictions surfaced this cycle. Last supersession batch logged 2026-04-18 in [[supersessions-2026-04-18]]. DOI corrections 2026-04-19 remain factual-metadata fixes, not claim-level supersessions.

Finding: 211 source pages carry `doi: "not yet verified"` (up from 201). The 10-file increase traces directly to recent ingest sessions (PMDD, Fibromyalgia, Graves/methimazole additions) where authors were extracted but DOIs not looked up. Any of these can mask a silent contradiction; refer to [[doi-corrections-2026-04-19]] for the batch-resolve queue.

---

## 2. Stale Claims / Supersession Review

No automated findings this cycle. Quarterly supersession sweep remains queued — not weekly scope.

---

## 3. Orphan Pages (30 real, 33 including templates)

After rebuilding the orphan graph against both `wiki/` and `cureva/` link spaces, the orphan count drops sharply from the 04-19 baseline. The 04-19 report counted 30 stop orphans that were in fact linked from Cureva signature bodies — those are now correctly resolved. Genuine orphans remaining:

### Entities (9)

`barium`, `cladosporium`, `diabetic-kidney-disease`, `fusarium`, `strontium`, `titanium`, `uranium`, `vanadium`, `vibrio`.

All 8 non-disease entities are the same metal/microbe tail from 04-19 — still no inbound links, still missing `seo_target` and `wikipedia_differentiation` (cf. §11). `diabetic-kidney-disease` is a disease entity with no inbound links and no signature page — double gap.

### Concepts (7)

`colonization-resistance`, `hyperparathyroidism`, `immunotherapy`, `outer-membrane`, `parenteral-nutrition`, `premenstrual-syndrome`, `riboswitch`.

### Interventions (9, wiki)

`_template-intervention` (expected), `berberine`, `curcumin`, `glutathione-supplementation`, `gluten-free-diet`, `melatonin`, `metformin-intervention`, `resveratrol`, `statin-therapy`.

Canonical wiki intervention pages with no body-text inbound links. Most are mentioned by name across signatures but not as wikilinks. The Cureva variants (`statin-simvastatin-colorectal-cancer`, `berberine-methimazole`, etc.) ARE linked from Cureva signatures.

### Cureva interventions (6)

`dietary-fiber-colorectal-cancer`, `dietary-fiber-probiotics-cp-constipation`, `mediterranean-diet-fibromyalgia`, `probiotics-ppd`, `statin-simvastatin-colorectal-cancer`, `synbiotics-pdac`.

These are condition-scoped intervention nodes not referenced from their parent Cureva signatures.

### Cureva signatures / stops (2)

`_template-signature`, `_template-stop` — both templates, expected.

### Stops (0)

The 28 stop orphans from 04-19 are now resolved (links added during 04-19/04-20 session cleanup). Victory lap minor.

---

## 4. Concepts Mentioned But No Page

209 concept-shape broken wikilink targets after filtering out audit/date files. Representative critical gaps (inline across ≥5 source and signature pages):

- `bile-acids` — 323 inline mentions across wiki/. Existing page is `bile-acid-metabolism`; `bile-acids` wikilink target is ambiguous — either create a redirect stub or bulk-rewrite `[[bile-acids]]` → `[[bile-acid-metabolism]]`.
- `adenomyosis` / `adenomyosis-signature` — promised in 04-18 log, not created.
- `chlamydia-tubal-infertility-signature` — promised 04-18, not created.
- `systemic-nickel-allergy-syndrome` — core Karen's Brain topic referenced in multiple entity and concept pages.
- `attention-deficit-hyperactivity-disorder` — disease entity-shaped, no page.
- `akkermansia` — referenced as bare genus name; page exists as `akkermansia-muciniphila`. Either create genus-level stub or bulk-rewrite.
- `bacterial-translocation` — high-frequency concept in CKD, Crohns, long-covid signatures; no page.
- `diabetes` — bare term; page exists as `type-1-diabetes` / `type-2-diabetes`. Should be disambiguated.
- `fmt` — acronym; page exists as `fmt-intervention`. Bulk-rewrite candidate.
- `cobalamin`, `bile-acids`, `fodmap`, `essential-fatty-acids`, `polyphenols`, `short-chain-fatty-acids`, `vitamin-b12` — metabolite/nutrient gaps.
- `endothelial-function`, `blood-testis-barrier`, `central-sensitization`, `circadian-rhythms-gut-microbiome` — process/pathway gaps.
- `aggregatibacter-actinomycetemcomitans`, `bacillus-anthracis`, `clostridium-scindens`, `clostridium-cluster-iv`, `clostridium-beijerinckii`, `butyrivibrio`, `anaerobutyricum-hallii`, `bacteroides-intestinalis`, `cupriavidus`, `faecalibaculum`, `faecalibacillus`, `faecalibacterium-hominis-4p15`, `cardiobacterium`, `allobaculum`, `anaerococcus`, `desulfovibrionaceae`, `clostridiaceae`, `fusobacteria`, `butyrivibrio` — taxon gaps.

Case-sensitivity broken links (101): `Alistipes`, `Bifidobacterium`, `Bacteroides`, `CKD`, `Cadmium`, `Calprotectin`, `Crohns-disease`, `Depression`, `Escherichia coli`, `Hashimoto's thyroiditis`, `IBD`, `Lactobacillus`, `Metformin`, `Probiotics`, `Proteobacteria`, `Ruminococcus`, `Shigella`, `Short-chain-fatty-acids`, `TLR4`, `TMAO`, `Tryptophan`, `Zinc` and ~80 more. All should resolve to existing lowercase-hyphenated pages via a case-insensitive wikilink rewrite.

Templating leaks (14): `${target}`, `${target}${displayText}`, `${target}${display}`, `slug`, `source-filename`, `wikilink`, plus escape-rot targets `bacillus\`, `bifidobacterium\`, `lachnospiraceae-family\`, `lactobacillus\`, `oscillibacter\`, `ruminococcaceae\`, `saccharomyces-cerevisiae\`, `senegalimassilia\`. Same template-rot signature as 04-19 — an HTML/JS helper is rendering placeholders literally into markdown somewhere. The trailing-`\` set is a different signature — wikilink escape slipping out of a generator.

---

## 5. Diseases Mentioned But No Signature Page (17)

Disease entity pages exist but no corresponding signature in `wiki/signatures/` or `cureva/signatures/`:

`bipolar-disorder`, `cholestasis`, `chronic-fatigue-syndrome`, `coronary-artery-disease`, `cystic-fibrosis`, `dermatitis-herpetiformis`, `diabetic-kidney-disease`, `gastric-adenocarcinoma`, `gastric-ulcer`, `hidradenitis-suppurativa`, `huntingtons-disease`, `major-depressive-disorder`, `migraine`, `non-alcoholic-fatty-liver-disease`, `pelvic-inflammatory-disease`, `premature-ovarian-insufficiency`, `psoriasis`.

Net +1 vs 04-19: `major-depressive-disorder` appeared as a new disease entity without signature; `pelvic-inflammatory-disease` was already gapped.

Under CLAUDE.md §9, signatures are Cureva-primary. Rule 13 (auto-discovery) should surface these as stubs if ≥3 sources mention each condition. No stub demotions were logged in this cycle for these — auto-discovery may not be running against the new entity subset.

Also missing from 2026-04-18 log promises (candidate signatures not created):

- `adenomyosis-signature`
- `chlamydia-tubal-infertility-signature`
- `t2d-infertility-signature`

---

## 6. Interventions Validated in Sources But No Intervention Page

Heuristic list (full precision requires per-condition intervention-graph diff, out of weekly scope):

- `glp-1-agonist-combination-pcos` — promised 04-18, not created.
- `lactobacillus-crispatus-probiotic` — promised 04-18, not created.
- `azithromycin-without-crispatus-restoration-snas` — flagged 04-18 as STOP candidate, not created.
- `butyrate-supplementation` (SCFA replacement) — cited across ≥8 signatures, no page.
- `low-fodmap-diet` — cited in IBS / IBD / GERD signatures.
- `polyphenol-rich-diet` — scattered across Mediterranean-diet, curcumin, resveratrol; no unifying page.
- `psychobiotics` — mentioned in depression, PPD, schizophrenia signatures.

---

## 7. Missing Cross-References

67 asymmetric `associated_conditions` pairs (A lists B; B does not list A) across 42 wiki signatures. Net +5 vs 04-19 — new signature (`pmdd-signature`) added three outgoing conditions (`depression`, `endometriosis`, `anxiety`) without reverse-links, and `major-depressive-disorder` gaps widened.

Representative new or still-unresolved cases:

- `pmdd` → `depression` / `endometriosis` / `anxiety` — all three reverse-links missing.
- `alzheimers-disease` → `depression`; reverse missing.
- `crohns-disease` → `depression`; reverse missing.
- `endometriosis` → `colorectal-cancer`; reverse missing.
- `female-infertility` → `pcos` / `endometriosis` / `breast-cancer` / `depression`; none reverse.
- `erectile-dysfunction` → `cardiovascular-disease` / `type-2-diabetes` / `depression`; none reverse.
- `gastric-cancer` → `colorectal-cancer`; reverse missing.
- `gerd` → `celiac-disease` / `ibs`; neither reverse.
- `gestational-diabetes` → `obesity` / `pcos` / `type-2-diabetes`; none reverse.
- `graves-disease` → `depression`; reverse missing.
- `atherosclerosis` → `chronic-kidney-disease` / `obesity` / `type-2-diabetes`; none reverse.
- `cerebral-palsy` → `autism-spectrum-disorder`; reverse missing.
- `epilepsy` → `autism-spectrum-disorder` / `depression`; neither reverse.
- `fibromyalgia` → `depression`; reverse missing.

Full list of 67 regeneratable via §Grep-commands.

Interpretation: Drift, not principled asymmetry. `depression` is the most-commonly-pointed-to with no outbound cross-links — the depression signature itself needs a sweep to inherit reciprocal connections from ~20 other signatures.

---

## 8. Triangle Evidence Completeness

CLAUDE.md §4 Intervention schema requires `I_to_f_sources`, `I_to_D_sources`, `f_to_D_sources` arrays at each triangle edge.

### wiki/interventions — 5 of 39 violate (13%, down from 38%)

All have narrative triangle fields and evidence-level tags but zero source-filename arrays:

`mediterranean-diet`, `probiotics-general`, `selenium-supplementation`, `vitamin-d-supplementation`, `zinc-supplementation`.

Cleanup since 04-19 landed edge-sources on `berberine`, `chelation-therapy`, `curcumin`, `glutathione-supplementation`, `gluten-free-diet`, `melatonin`, `metformin-intervention`, `omega-3-fatty-acids`, `resveratrol`, `statin-therapy`. Ten files closed — good progress. Remaining 5 are the nutrient-supplement cluster with the broadest condition coverage (all have 4+ triangle conditions each), so the deferred cost is real.

### cureva/interventions — 1 of 32 violates

`probiotics-asd-dysbiosis.md` — unchanged from 04-19.

### STOP pages — NEW FINDING: 4 missing required fields

Per §4 STOP schema, `conventional_rationale`, `why_counterproductive`, `evidence`, `alternative` are required. Missing `evidence` array (sources list):

- `wiki/stops/stop-broad-spectrum-antibiotics-pre-nec.md`
- `wiki/stops/stop-formula-feeding-without-supplementation-nec.md`
- `cureva/stops/stop-broad-spectrum-antibiotics-pre-nec.md`
- `cureva/stops/stop-formula-feeding-without-supplementation-nec.md`

Both NEC STOPs in both trees. The narrative rationale/counterproductive text exists; source-list population was skipped during creation.

---

## 9. Confidence Levels on Signature Pages

All 42 `wiki/signatures/` and 29 `cureva/signatures/` carry a `confidence:` block with all five required keys. No gaps. All 42 wiki signatures have at least one `overlap_score` populated on their `associated_conditions` entries. Score currency (i.e., whether the Jaccard values reflect the present corpus) not verified — quarterly pass.

---

## 10. Source Page Completeness

- `evidence_level` missing on 161 of 1,837 (8.8%, was 9.5%). Two-file net decrease against a 121-file source growth — i.e., most new ingests ARE carrying evidence_level. Batch-inference still owed for the long tail.
- `karen_brain_primitives` missing on 1 source: `yang-2022-preliminary-intestinal-flora-graves-methimazole.md` (flagged in the 04-20 stub-redirect note — the replacement file was demoted but its frontmatter is incomplete).
- `doi: "not yet verified"` on 211 source pages (+10). Tracked in [[doi-corrections-2026-04-19]].
- Non-normalized DOIs (stored with `https://doi.org/` prefix instead of bare `10.…`): 10 files, all from early endometriosis / male-reproductive-tract ingest batches. Renderer tolerates but `scripts/fix-wikilinks.cjs` and any DOI-dedupe logic may miscount them as separate DOIs.

The 10 non-normalized DOI files:
`aderaldo-2022-shotgun-metagenomic-semen-microbiome`, `borrelli-2018-herbal-supplements-erectile-dysfunction`, `geng-2021-gut-microbiota-diversity-erectile-dysfunction`, `molina-morales-2023-male-reproductive-tract-microbiome` (hdl.handle.net — not a DOI at all), `shamloul-2013-erectile-dysfunction-seminar` (dx.doi.org prefix), `shan-2021-gut-microbiota-imbalance-hormone-inflammatory-endometriosis`, `stevens-2022-phage-endolysin-chronic-bacterial-prostatitis`, `svensson-2021-associations-endometriosis-gut-microbiota`, `vocca-2025-probiotics-chronic-bacterial-prostatitis-rct`, `zhang-2024-cbc-inflammatory-biomarkers-erectile-dysfunction`.

No memory-generated DOI patterns detected (no fake-looking 10.XXX/bogus sequences).

---

## 11. Entity Page Completeness

### `seo_target` and `wikipedia_differentiation` (15 entities missing both, down from 22)

Same 15 files missing both — cleanup of `citrobacter`, `corynebacterium`, `faecalibacterium`, `megasphaera`, `propionibacterium`, `salmonella`, `shigella` since 04-19.

Still missing both fields:
`barium`, `cladosporium`, `enterobacter`, `fusarium`, `listeria`, `proteus`, `pseudomonas`, `ruminococcaceae`, `strontium`, `subdoligranulum`, `titanium`, `treponema`, `uranium`, `vanadium`, `vibrio`.

Overlap with orphan set remains near-total — 8 of these 15 also have no inbound wikilinks (§3). These are dead weight: stub-demote (§2f) or fill SEO metadata + add body-text inbound links from their parent condition pages.

---

## 12. Disease Entity `associated_conditions`

All 58 disease entity pages carry `associated_conditions`. No gaps.

---

## 13. `source_count` Field Integrity

- 1 mismatch: `wiki/entities/breast-cancer.md` — frontmatter `source_count: 18`, actual `sources:` length `19`. Drift from an ingest that appended to the list without bumping the count.
- 143 pages with `sources:` but no `source_count` field (mostly `wiki/interventions/*` and `wiki/stops/*`). Schema in §4 Entity block shows `source_count` as required on entity pages; it's not explicitly required for interventions/stops but the evidence-density display in the site renderer assumes it. New flag this cycle; treat as backlog.

---

## 14. DOI Format Sanity

All 1,837 source DOIs either start with `10.` (1,616), are `"not yet verified"` (211), or carry an unnormalized URL prefix (10). No fabricated DOI patterns. No empty DOI strings.

98 → 115 duplicate-DOI clusters. 239 source files affected (up from 204). The increase is driven by recent ingest sessions creating multiple slugs for the same paper:

Net-new 3-file clusters since 04-19:
- `10.1186/s40168-024-01815-y` (Troeseid 2024 HIV cardiometabolic — 3 slugs)
- `10.3389/fmicb.2023.1193919` (Eggers 2023 prenatal lead — 3 slugs)
- `10.3389/fmicb.2020.01604` (Liu 2020 high-fat-diet heavy metals — 3 slugs)
- `10.3389/fimmu.2023.1096323` (Morse 2023 virus-induced dysbiosis T1D — 3 slugs)

Pre-existing clusters still unresolved:
- `10.1038/s41398-021-01254-5` (Zhang 2021 antidepressants — 3 files)
- `10.15252/embr.202255664` (Spivak 2022/2023 microbiome metabolites — 3 files, also year inconsistency)
- `10.3389/fimmu.2021.746998` (Xu 2022 autoimmune MR — 3 files)
- `10.3389/fimmu.2022.1089295` (Zou 2022 mycobiome hypertension — 3 files)
- `10.3390/nu12082277` (Borghini 2020 low-nickel diet — 3 files)

Finder-style " 2.md" filename duplicates (unchanged since 04-19):
- `wiki/sources/Bernard-Raichon2022-dysbiosis-translocation-bacteremia-covid 2.md`
- `wiki/sources/Ke2022-microbiome-covid-metagenome-genomes 2.md`

Both have canonical lowercase counterparts in the same directory.

---

## 15. Cross-Condition Overlap Score Currency

All 42 wiki signatures carry ≥1 `overlap_score` entry on `associated_conditions`. No automated proof that values are current given the 121 source pages added in the past two weeks — full recompute is quarterly scope. Flag: the new PMDD signature (`pmdd-signature.md`) inherits no reverse links from depression/endometriosis/anxiety (§7), which means `pmdd`'s presence in the graph is currently half-connected.

---

## 16. Index Drift (wiki/index.md)

Header updated 2026-04-21 but counts still reflect an earlier snapshot:

| Category | Index says | Actual | Δ |
|----------|-----------|--------|---|
| Sources | 1829 | 1837 | −8 |
| Entities | 315 | 318 | −3 |
| — Metals/Metalloids | 24 | 29 (27 metal + 2 metalloid) | −5 |
| — Microbes | 187 | 208 | −21 |
| — Fungi | 21 | 18 | +3 |
| — Archaea | 1 | 1 | 0 |
| — Diseases | 54 | 58 | −4 |
| — Other | 3 | 4 (3 metabolite + 1 pharmaceutical) | −1 |
| Concepts | 220 | 220 | 0 |
| Disease Signatures | 42 | 42 | 0 |
| Interventions | 29 | 40 | −11 |
| STOPs | 39 | 39 | 0 |

Six mismatches. Microbes undercount of 21 is the worst — that's the 04-18 ingest batch (Alloprevotella, Parasutterella, Mortierella, Hungatella, and the auto-discovered microbe stubs) never propagated to the index regeneration.

---

## 17. Cureva vs Wiki Divergence

### Wiki signatures without a Cureva counterpart (14)

`anxiety`, `atherosclerosis`, `barretts-esophagus`, `breast-cancer`, `celiac-disease`, `epilepsy`, `gastric-cancer`, `gestational-diabetes`, `hypertension`, `ibs`, `inflammatory-bowel-disease`, `pancreatitis`, `rheumatoid-arthritis`, `ulcerative-colitis`.

PMDD got a Cureva counterpart this cycle (`cureva/signatures/pmdd.md`). Wiki-only list is flat at 14.

### Wiki STOPs without a Cureva counterpart (6)

`stop-broad-spectrum-antibiotics-dysbiosis`, `stop-calcium-supplementation-cadmium-exposure`, `stop-iron-supplementation-ibd`, `stop-nickel-rich-foods-snas`, `stop-standard-probiotics-endometriosis`, `stop-zinc-supplementation-h-pylori`.

Unchanged from 04-19.

### Intervention divergence

Wiki has 40 (was 39), Cureva has 32. The wiki-vs-cureva split appears deliberate (wiki = canonical intervention reference; cureva = condition-scoped nodes). Not flagged as error.

---

## 18. Boundary Violations (§9 / Rule 8)

Real violations: 1.

- `wiki/analyses/dietary-metal-paradoxes.md` — "patients should be aware", "clinicians managing endometriosis patients should not reflexively supplement zinc", "anti-inflammatory and plant-forward diets are the standard nutritional recommendation for…". This is prescriptive framing on a WikiBiome path. Either rewrite in descriptive voice ("anti-inflammatory diets are prescribed for…") or move to `cureva/analyses/`. Flagged in 04-19 lint too — still untouched.

False positives reviewed and cleared:
- `wiki/entities/gerd.md` / `wiki/entities/metformin.md` / `wiki/concepts/statins.md` — "most widely prescribed medication/drug class" is descriptive scale-setting, not recommendation.
- `wiki/concepts/hepcidin.md` — "Clinicians interpret low iron markers as deficiency and prescribe iron supplementation" describes common clinical practice as context for the nutritional-immunity framing; this is the standard pivot structure Karen uses and is not a boundary violation.
- `wiki/concepts/co-selection.md` / `wiki/concepts/horizontal-gene-transfer.md` / `wiki/concepts/oxalates.md` / `wiki/concepts/pharmacomicrobiomics.md` — "prescribed" appears in factual descriptions of cited literature or describes mechanisms, not vault recommendations.

`prescribe` appears across 10+ files; only `dietary-metal-paradoxes.md` crosses the recommendation-voice line.

---

## 19. Stub Aging (Rule 7)

183 vault pages carry `stub: true` (110 entities, 53 concepts, 8 interventions, 6 signatures, 6 sources). Down 4 from 04-19.

Zero stubs older than 90 days. All stubs carry `last_substantive_update` within threshold (2026-01-21). Monthly aging report remains a no-op.

---

## 20. Adversarial Audit Marker Coverage (Rule 12)

Zero `audit_passed:` stamps in the vault, unchanged from 04-19. The adversarial audit machinery continues to run ([[adversarial-audit-2026-04-19]] exists) but is not writing back. Weighted-sampling is broken — every audit cycle resamples the same pool.

Severity: Low tactically, high structurally. Wire the stamp-writeback into the audit script — one-line fix.

---

## 21. Promised-But-Not-Created Pages (2026-04-18 log audit)

Cross-checking 2026-04-18 log entries against current vault:

| Promise | Status |
|--------|--------|
| Create `adenomyosis-signature` | MISSING |
| Create `chlamydia-tubal-infertility-signature` | MISSING |
| Create `t2d-infertility-signature` | MISSING |
| Create `glp-1-agonist-combination-pcos` intervention | MISSING |
| Create `lactobacillus-crispatus-probiotic` intervention | MISSING |
| Update `cadmium` entity with Liu 2023 mechanism | (not checked — claim-level) |
| Update `female-infertility` entity — T2D/adenomyosis/CT subtypes | (not checked — claim-level) |
| Create new taxa (`alloprevotella`, `parasutterella`, `mortierella`, `hungatella`) | EXISTS (all 4) |
| STOP candidate `azithromycin alone for CT + tubal infertility` | MISSING |

Five promised pages not yet created; one promised STOP not yet created. Not critical — promises age fine — but if Karen was planning to deploy these this week, they need ingest cycles.

---

## Grep Commands Used (Auditable)

```bash
# File counts
ls wiki/sources/*.md | wc -l                                   # 1837
ls wiki/entities/*.md | wc -l                                  # 318
ls wiki/concepts/*.md | wc -l                                  # 220
ls wiki/signatures/*.md | wc -l                                # 42
ls wiki/interventions/*.md | wc -l                             # 40
ls wiki/stops/*.md | wc -l                                     # 39
ls cureva/signatures/*.md | wc -l                              # 29
ls cureva/interventions/*.md | wc -l                           # 32
ls cureva/stops/*.md | wc -l                                   # 34
grep -h "^subtype:" wiki/entities/*.md | sort | uniq -c        # subtype distribution

# Source frontmatter
grep -L "^evidence_level:" wiki/sources/*.md | wc -l            # 161
grep -L "^karen_brain_primitives:" wiki/sources/*.md            # yang-2022-preliminary...
grep -l 'doi:.*"not yet verified"' wiki/sources/*.md | wc -l    # 211
grep -l 'doi:.*https://doi\.org/' wiki/sources/*.md | wc -l     # 8  (10 incl. hdl + dx.doi.org)

# Entity frontmatter
grep -L "^seo_target:" wiki/entities/*.md                       # 15 files
grep -L "^wikipedia_differentiation:" wiki/entities/*.md        # 15 files (same set)
grep -l "^subtype: disease" wiki/entities/*.md | \
  xargs grep -L "^associated_conditions:" | wc -l               # 0

# Orphans (recomputed against wiki+cureva link space)
grep -rhoE '\[\[[^]|#]+' wiki/ cureva/ | sed 's/^\[\[//' | \
  sort -u > /tmp/all_targets.txt                                # 2421
for d in wiki/entities wiki/concepts wiki/signatures \
         wiki/interventions wiki/stops \
         cureva/signatures cureva/interventions cureva/stops; do
  ls "$d"/*.md | sed 's|.*/||; s/\.md$//'
done | sort -u > /tmp/all_pages.txt                             # 689
comm -23 /tmp/all_pages.txt /tmp/all_targets.txt | wc -l        # 33 (30 non-template)

# Broken wikilinks (concept-shape, filter out date-tagged analysis files)
ls wiki/sources/*.md | sed 's|.*/||; s/\.md$//' | sort -u > /tmp/all_sources.txt
cat /tmp/all_pages.txt /tmp/all_sources.txt | sort -u > /tmp/resolvable.txt
comm -23 /tmp/all_targets.txt /tmp/resolvable.txt > /tmp/missing.txt  # 391

# Duplicate DOI clusters (Python)
python3 -c "
import os, collections
m=collections.defaultdict(list)
for f in os.listdir('wiki/sources'):
  if not f.endswith('.md'): continue
  for l in open('wiki/sources/'+f):
    if l.startswith('doi:'):
      v=l.split(':',1)[1].strip().strip('\"\\'').replace('https://doi.org/','').lower()
      if v and v!='not yet verified': m[v].append(f)
      break
dup={k:v for k,v in m.items() if len(v)>1}
print('clusters', len(dup), 'files', sum(len(v) for v in dup.values()))
"                                                               # 115 / 239

# Intervention triangle edge-source completeness (Python)
# Per-file scan: has 'triangles:' block AND narrative edges AND _sources arrays?
# Violators: 5 in wiki/interventions, 1 in cureva/interventions

# STOP required-field completeness (Python yaml.safe_load)
# 4 STOPs missing `evidence` array

# Asymmetric associated_conditions (Python)
# 67 A->B without B->A across 42 wiki signatures

# Stub aging (Python)
# 183 stubs; 0 older than 2026-01-21

# audit_passed stamps
grep -rl "^audit_passed:" wiki/ cureva/ | wc -l                 # 0

# Finder-style filename duplicates
find wiki cureva -name '* 2.md'                                 # 2

# Index drift
grep -E "^\| " wiki/index.md | head -20                         # visual diff vs actual counts
```

---

## Prioritization (for Karen)

Tier 1 — fix before next deploy:
1. Update `wiki/index.md` counts. Six mismatches; microbes are off by 21.
2. 5 wiki/interventions + 1 cureva/intervention missing `_sources` arrays on triangle edges (mediterranean-diet, probiotics-general, selenium, vitamin-d, zinc, probiotics-asd-dysbiosis).
3. Delete / merge the two ` 2.md` Finder duplicates (identical DOIs to canonical variants).
4. Fix the boundary violation in `dietary-metal-paradoxes.md` or relocate to `cureva/analyses/`.
5. Populate `evidence` arrays on the 4 NEC STOP pages.

Tier 2 — this week:
6. De-dupe the 115 duplicate-DOI clusters; 6 are brand-new since 04-19 (recent ingest multi-slug accidents — each cluster is 3 slugs for 1 paper).
7. Resolve 10 non-normalized `https://doi.org/` prefixed DOIs to bare `10.…`.
8. Resolve the 63 remaining "not yet verified" DOIs from [[doi-corrections-2026-04-19]] plus 10 newly flagged this week.
9. Normalize 101 case-sensitivity broken wikilinks via bulk lowercase-hyphenate rewrite (preview 3 files first per Rule 5).
10. Purge the 14 templating-leak wikilink targets (`${target}`, `\`-suffixed taxa names, `slug`/`source-filename`/`wikilink`) — trace the generator.

Tier 3 — when scoped:
11. Fill 161 source `evidence_level` fields via batch inference from `library_category` + study-design keywords.
12. Fill `seo_target` + `wikipedia_differentiation` on the 15 remaining entity pages (or demote the 8 orphan-set overlap to stubs).
13. Resolve 67 asymmetric `associated_conditions` pairs. Priority: `depression` (most-pointed-to, fewest outgoing), then the new `pmdd` reverse-links.
14. Build signature pages for the 17 disease entities currently signature-less.
15. Create the 5 promised pages from 04-18 log (2 signatures + 3 interventions).
16. Wire `audit_passed:` stamping into the Rule 12 adversarial audit script.
17. Fix the 1 `source_count` mismatch (`breast-cancer.md`) and backfill `source_count` on the 143 interventions/stops that don't have it.

---

## Out of Scope (Deferred)

- Full claim-level supersession sweep (quarterly).
- Overlap-score recomputation across all 42 signatures (quarterly).
- Cureva-vs-wiki intervention tree rationalization (architectural; requires Karen's call).
- Stubs-older-than-90-days aging report (monthly).
- Rule-11 claim-level citation-density sweep across the full vault (sampled: 6 of 22 entity pages at <1 citation per 3 paragraphs; full-vault pass deferred to monthly).
