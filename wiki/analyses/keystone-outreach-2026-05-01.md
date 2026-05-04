---
title: "Keystone Outreach — 2026-05-01"
type: analysis
created: 2026-05-01
updated: 2026-05-01
sources: []
tags: [keystone, outreach, author-engagement, monthly-pass]
---

# Keystone Outreach — Monthly Pass — 2026-05-01

## Scoreboard

| Bucket | Count |
|---|---|
| Total keystone sources in vault | 39 |
| Karen-authored (skip — author = Karen) | 3 |
| External keystone sources | 36 |
| **Needs first outreach — author/email present (drafts below)** | **5** |
| Needs author lookup before outreach can be drafted | 31 |
| Needs follow-up (sent >60 days, no response) | 0 |
| Done (responded / corrections-applied / declined) | 0 |
| Flagged for keystone downgrade | 0 |
| **Drafts queued in this report** | **5** |

All 39 vault entries with `keystone: true` were checked. None had a populated `keystone_outreach_status` or `keystone_outreach_date`, so this is the first outreach pass for every external source. The 5 drafts below are the subset where `corresponding_author` and `corresponding_email` are recorded in the source frontmatter; the remaining 31 cannot be drafted until those fields are filled.

## Keystone Criteria Validation

Every external keystone source was checked against the `keystone_criteria_met` list it carries in frontmatter. **Zero** sources have fewer than 3 criteria recorded — no downgrade candidates this pass.

A deeper re-audit (re-reading each PDF and re-scoring against §2d criteria from scratch) is out of scope for the monthly outreach run; this pass trusts the existing labels and only flags the obviously broken case (criteria_met < 3), which is empty.

## Karen-authored sources (skipped)

These three are Karen Pendergrass's own work — outreach is not applicable, but they should still carry `keystone_outreach_status: declined` or be excluded from future scans by another mechanism so they stop appearing in this bucket month after month:

- `pendergrass-2026-heavy-metals-obesity-epidemic.md`
- `pendergrass-2026-microbial-metallomics-parkinsons-ferroptosis.md`
- `pendergrass-2026-pheomelanin-neuromelanin-parkinsons-redheads.md`

## Sources missing corresponding_author / corresponding_email

These 31 keystone sources cannot be drafted into outreach until author lookup is performed. Recommend a one-time backfill batch (extract `corresponding_author` and `corresponding_email` from the original PDFs, paste into frontmatter), then they enter the next monthly outreach cycle automatically.

- ali-2024-heavy-metals-breast-cancer-review.md
- mishra-2022-molecular-mechanisms-heavy-metals-ckd.md
- jaishankar-2014-heavy-metal-toxicity-mechanisms.md
- rasin-2025-cadmium-exposure-health-review.md
- costafrolaz-2026-yjbi-envelope-zinc-stress-antibiotic-caulobacter.md
- saleh-2020-serum-trace-elements-prostate-cancer.md
- guevara-ramirez-2024-dietary-heavy-metals-neurodegeneration.md
- bakulski-2020-heavy-metals-alzheimers-dementias.md
- ogrady-2025-metal-dyshomeostasis-asd.md
- ghosh-2023-heavy-metals-gut-barrier-integrity.md
- patil-2021-infection-metallomics-critical-care.md
- liu-2025-cardiometabolic-nickel.md
- maier-2019-nickel-microbial-pathogenesis.md
- liu-2022-heavy-metals-breast-cancer-meta-analysis.md
- cassat-2012-metal-acquisition-staphylococcus-aureus.md
- microbiota-gut-brain-axis-neurodevelopmental-review.md
- bao-2024-iron-homeostasis-intestinal-immunity-gut-microbiota.md
- giambo-2021-toxic-metal-exposure-gut-microbiota-review.md
- ahmed-2025-metals-alzheimers-mechanistic-review.md
- khan-2014-metals-type2-diabetes.md
- zhu-2024-toxic-essential-metals-gut-microbiota.md
- zhai-2016-probiotics-cadmium.md
- duan-2020-gut-microbiota-heavy-metal-probiotic-strategy.md
- yang-2024-zip8-a391t-crohns-metal-dyshomeostasis-microbiome.md
- scholefield-2024-brain-metallomics-dementia.md
- aquino-2012-cadmium-nickel-metalloestrogens.md
- anchidin-norocel-2025-heavy-metal-gut-probiotics-biosensors.md
- kirmizi-2020-heavy-metals-pcos.md
- chin-chan-2015-environmental-pollutants-ad-pd.md
- tizabi-2023-lead-gut-microbiota-asd.md
- balali-mood-2021-toxic-mechanisms-five-heavy-metals.md

---

## Drafted Outreach Emails

### 1. Benoit et al. 2019 — Nickel Chelation Therapy as an Approach to Combat MDR Enteric Pathogens

- **Source file:** `wiki/sources/benoit-2019-nickel-chelation-therapy-mdr-enteric-pathogens.md`
- **Corresponding author:** Robert J. Maier
- **Corresponding email:** rmaier@uga.edu
- **Institution:** Department of Microbiology, Center for Metalloenzyme Studies, University of Georgia
- **Criteria met:** 1 (cross-domain bridge), 2 (signature layer dependency), 3 (cross-condition pattern enabler), 4 (mechanistic linchpin), 5 (paradigm reframe) — all five
- **WikiBiome page citing the work:** https://www.wikibiome.com/article/dimethylglyoxime

```
To: rmaier@uga.edu
Subject: Your 2019 nickel-chelation paper as a structural reference in WikiBiome

Dear Dr. Maier,

I'm writing on behalf of WikiBiome (wikibiome.com), a public encyclopedia focused on the microbiome–metallomics interface, and Cureva, a sister platform for clinicians reasoning about microbial metal dependencies.

Your 2019 Scientific Reports paper, "Nickel Chelation Therapy as an Approach to Combat Multi-Drug Resistant Enteric Pathogens," is one of the most structurally important sources in our knowledge graph. It satisfies all five of our keystone criteria: it bridges metalloenzymology and clinical microbiology (Criterion 1), anchors the dimethylglyoxime concept page on WikiBiome and the nickel-restriction layer of our enteric-pathogen signatures (Criterion 2), explains a pattern we observe across multiple Ni-dependent pathobionts (Criterion 3), turns the metal-Achilles'-heel framework from theory into in-vivo demonstration (Criterion 4), and reframes chelation from blunt instrument to selective therapy (Criterion 5).

The page that depends most directly on your work is here:
https://www.wikibiome.com/article/dimethylglyoxime

Would you have time to review it for misrepresentations or missing nuance? Any corrections would be applied directly.

With thanks,
Karen Pendergrass
Paleo Foundation / WikiBiome
```

---

### 2. Bartnicka et al. 2020 — Candida albicans Shields Porphyromonas gingivalis from Host Immune Recognition

- **Source file:** `wiki/sources/bartnicka-2020-candida-shields-pgingivalis-immune-evasion.md`
- **Corresponding author:** Maria Rapala-Kozik
- **Corresponding email:** maria.rapala-kozik@uj.edu.pl
- **Institution:** Faculty of Biochemistry, Biophysics and Biotechnology, Jagiellonian University, Krakow
- **Criteria met:** 1 (cross-domain bridge — fungal–bacterial interkingdom), 2 (signature layer dependency), 4 (mechanistic linchpin)
- **WikiBiome pages citing the work:**
  - https://www.wikibiome.com/article/functional-shielding
  - https://www.wikibiome.com/article/porphyromonas-gingivalis
  - https://www.wikibiome.com/article/periodontitis
  - https://www.wikibiome.com/article/gingipains

```
To: maria.rapala-kozik@uj.edu.pl
Subject: Your 2020 C. albicans / P. gingivalis paper as a keystone reference in WikiBiome

Dear Professor Rapala-Kozik,

I'm writing on behalf of WikiBiome (wikibiome.com), a public encyclopedia of microbiome–metallomics relationships.

Your 2020 IJMS paper on Candida albicans shielding Porphyromonas gingivalis from host immune recognition is one of the structurally essential sources in our knowledge graph. It meets three of our keystone criteria: it bridges interkingdom microbiology and host immunology (Criterion 1), it underpins the interkingdom-shielding layer of our oral-cavity and periodontitis signatures (Criterion 2), and the Als3–RgpA co-aggregation mechanism you characterised is the mechanistic linchpin behind our entire "functional shielding" concept (Criterion 4).

The pages most directly dependent on your work are:
https://www.wikibiome.com/article/functional-shielding
https://www.wikibiome.com/article/porphyromonas-gingivalis
https://www.wikibiome.com/article/periodontitis

Would you have time to read them for accuracy? We would apply any corrections directly and credit your review on the page history.

With thanks,
Karen Pendergrass
Paleo Foundation / WikiBiome
```

---

### 3. Brylinski et al. 2025 — Effects of Trace Elements on Endocrine Function and Thyroid Diseases

- **Source file:** `wiki/sources/brylinski-2025-trace-elements-thyroid-diseases.md`
- **Corresponding author:** Jacek Baj
- **Corresponding email:** jacek.baj@umlub.pl
- **Institution:** Medical University of Lublin, Poland
- **Criteria met:** 2 (signature layer dependency), 3 (cross-condition pattern enabler), 4 (mechanistic linchpin)
- **WikiBiome pages citing the work:**
  - https://www.wikibiome.com/article/graves-disease
  - https://www.wikibiome.com/article/metallomics
  - https://www.wikibiome.com/article/mis-metallation
  - https://www.wikibiome.com/article/iron
  - https://www.wikibiome.com/article/selenium
  - https://www.wikibiome.com/article/manganese

```
To: jacek.baj@umlub.pl
Subject: Your 2025 Nutrients trace-element review as a keystone reference in WikiBiome

Dear Professor Baj,

I'm writing on behalf of WikiBiome (wikibiome.com), a public encyclopedia of the microbiome–metallomics interface.

Your 2025 Nutrients review of trace elements in thyroid disease is one of the structurally important sources in our knowledge graph. It satisfies three of our keystone criteria: it provides the trace-element layer for both Graves' disease and Hashimoto's thyroiditis pages (Criterion 2), it surfaces the recurring pattern of Fe / Se / Cu / Cd dyshomeostasis that runs across all seven thyroid disease categories you cover (Criterion 3), and your element-by-element mechanism mapping is the linchpin connecting metal status to TPO activity, deiodinase function, and ferroptosis/cuproptosis on multiple concept pages (Criterion 4).

The pages most directly built on your work include:
https://www.wikibiome.com/article/graves-disease
https://www.wikibiome.com/article/metallomics
https://www.wikibiome.com/article/mis-metallation

Would you have time to review them for misrepresentation? Any corrections would be applied directly.

With thanks,
Karen Pendergrass
Paleo Foundation / WikiBiome
```

---

### 4. Street et al. 2024 — Environmental Factors and Contaminants on Thyroid Function

- **Source file:** `wiki/sources/street-2024-environmental-factors-thyroid-function.md`
- **Corresponding author:** Maria E. Street
- **Corresponding email:** mariaelisabeth.street@unipr.it
- **Institution:** Department of Medicine and Surgery, University of Parma; University Hospital of Parma
- **Criteria met:** 1 (cross-domain bridge — environmental exposure ↔ thyroid pathogenesis), 2 (signature layer dependency), 4 (mechanistic linchpin)
- **WikiBiome pages citing the work:**
  - https://www.wikibiome.com/article/hashimotos-thyroiditis
  - https://www.wikibiome.com/article/nickel
  - https://www.wikibiome.com/article/chromium
  - https://www.wikibiome.com/article/lead
  - https://www.wikibiome.com/article/selenium

```
To: mariaelisabeth.street@unipr.it
Subject: Your 2024 Frontiers in Endocrinology review as a keystone reference in WikiBiome

Dear Professor Street,

I'm writing on behalf of WikiBiome (wikibiome.com), a public encyclopedia of the microbiome–metallomics interface.

Your 2024 Frontiers in Endocrinology review on environmental factors and thyroid disease across the life course is one of the structurally important sources in our knowledge graph. It meets three of our keystone criteria: it bridges environmental epidemiology and endocrine pathogenesis in a way little else in the literature does (Criterion 1), it provides the environmental-exposure layer for our Hashimoto's thyroiditis page and several heavy-metal entity pages (Criterion 2), and your synthesis of how Cd, Pb, As, Hg, and Ni perturb TH synthesis, transport, and peripheral deiodination is the mechanistic linchpin we cite when explaining subclinical thyroid dysfunction (Criterion 4).

The pages most directly built on your work include:
https://www.wikibiome.com/article/hashimotos-thyroiditis
https://www.wikibiome.com/article/nickel
https://www.wikibiome.com/article/lead

Would you have time to review them for accuracy? We would apply any corrections directly.

With thanks,
Karen Pendergrass
Paleo Foundation / WikiBiome
```

---

### 5. Kravchenko 2023 — Thyroid Hormones and Minerals in Immunocorrection of AITD

- **Source file:** `wiki/sources/kravchenko-2023-thyroid-hormones-minerals-AITD.md`
- **Corresponding author:** Viktor Kravchenko
- **Corresponding email:** endocrinolog@ukr.net
- **Institution:** Vasily Pavlovich Komisarenko Institute of Endocrinology and Metabolism, Kyiv, Ukraine
- **Criteria met:** 2 (signature layer dependency), 3 (cross-condition pattern enabler), 4 (mechanistic linchpin)
- **WikiBiome pages citing the work:**
  - https://www.wikibiome.com/article/graves-disease
  - https://www.wikibiome.com/article/iron
  - https://www.wikibiome.com/article/selenium
  - https://www.wikibiome.com/article/iodine
  - https://www.wikibiome.com/article/oxidative-stress
  - https://www.wikibiome.com/article/inflammation
  - https://www.wikibiome.com/article/thyroid-autoimmunity

```
To: endocrinolog@ukr.net
Subject: Your 2023 Frontiers in Endocrinology review as a keystone reference in WikiBiome

Dear Professor Kravchenko,

I'm writing on behalf of WikiBiome (wikibiome.com), a public encyclopedia of the microbiome–metallomics interface.

Your 2023 Frontiers in Endocrinology review on thyroid hormones and minerals in immunocorrection of autoimmune thyroid disease is one of the structurally important sources in our knowledge graph. It satisfies three of our keystone criteria: it provides the mineral-status layer for our Graves' disease page and several concept pages (Criterion 2), it surfaces a recurring pattern of Se / Fe / Mg / Zn dyshomeostasis common to both Hashimoto's and Graves' disease (Criterion 3), and the immunocorrection mechanisms you describe — selenium-driven GPx/TR upregulation, magnesium and TgAb risk, zinc and thymulin — are the linchpin we cite when explaining how mineral status shapes autoimmune trajectory (Criterion 4).

The pages most directly built on your work include:
https://www.wikibiome.com/article/graves-disease
https://www.wikibiome.com/article/thyroid-autoimmunity
https://www.wikibiome.com/article/selenium

Would you have time to review them for misrepresentation? We would apply any corrections directly.

With thanks,
Karen Pendergrass
Paleo Foundation / WikiBiome
```

---

## Karen: ready-to-run instruction

Review each draft. Paste into Gmail and send. After sending, update the corresponding source file's frontmatter:

```yaml
keystone_outreach_date: 2026-05-01
keystone_outreach_status: sent
```

(Adjust the date if you send on a different day.) When a response arrives, change `keystone_outreach_status` to `responded`, `corrections-applied`, or `declined` per the schema in CLAUDE.md §4.

## Next monthly pass

The next scheduled run will:
- Re-check the 5 drafted recipients above. If `keystone_outreach_status: sent` and `keystone_outreach_date` is older than 60 days with no later status change, draft a follow-up.
- Re-check the 31 sources missing author info. If any have had `corresponding_author` / `corresponding_email` filled in since this run, draft a first-touch email for them.
- Surface any newly added keystone sources without outreach status set.
