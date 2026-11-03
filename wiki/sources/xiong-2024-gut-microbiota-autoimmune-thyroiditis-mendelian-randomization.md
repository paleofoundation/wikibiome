---
title: "Causal relationship between gut microbiota and autoimmune thyroiditis: A mendelian study"
type: source
created: 2026-11-03
updated: 2026-11-03
authors: [Xiong Y, Zhu X, Luo Q]
corresponding_author: "Qingfeng Luo"
corresponding_email: "luoqf2000@126.com"
institution: "Department of Gastroenterology, Beijing Hospital, National Center of Gerontology, Institute of Geriatric Medicine, Chinese Academy of Medical Sciences, Beijing, China"
journal: "Heliyon"
year: 2024
doi: "10.1016/j.heliyon.2024.e25652"
pmid: "38356548"
pmcid: "PMC10865322"
evidence_level: computational-prediction
sample_size: "Exposure n=18,340 (MiBioGen); outcome FinnGen R8 AIT, 244 cases and 187,684 controls (paper also states 213,746 individuals)"
tags: [hashimotos-thyroiditis, autoimmune-thyroiditis, mendelian-randomization, gut-microbiota, causality, short-chain-fatty-acids, lachnospira, finngen, mibiogen]
library_category: causal
platform: wikibiome
condition: "Hashimoto's thyroiditis"
karen_brain_primitives: [5]
metals_discussed: []
taxa_discussed: [alcaligenaceae, pasteurellaceae, pasteurellales, peptococcaceae, lachnospira, victivallis, gammaproteobacteria]
key_findings: ["Six taxa had inverse IVW associations with AIT: Alcaligenaceae, Pasteurellaceae, Peptococcaceae, Lachnospira, Victivallis, Pasteurellales (OR 0.18 to 0.56)", "No taxon was positively (risk) associated with AIT; no heterogeneity or pleiotropy detected", "Significance rests on IVW alone with no multiple-testing correction and only 244 AIT cases"]
keystone: false
---

# Causal relationship between gut microbiota and autoimmune thyroiditis: A mendelian study

## Key Findings

- **Six gut taxa showed inverse (putatively protective) genetically predicted associations with autoimmune thyroiditis (AIT)** by inverse variance weighted (IVW) MR: family Alcaligenaceae (OR 0.25, 95% CI 0.09 to 0.74, P=0.012), family Pasteurellaceae (OR 0.50, 95% CI 0.27 to 0.93, P=0.026), family Peptococcaceae (OR 0.35, 95% CI 0.15 to 0.81, P=0.014), genus Lachnospira (OR 0.18, 95% CI 0.04 to 0.90, P=0.037), genus Victivallis (OR 0.56, 95% CI 0.33 to 0.96, P=0.034), order Pasteurellales (OR 0.50, 95% CI 0.27 to 0.93, P=0.026) (computational-prediction)
- **No taxon was identified as a risk factor** for AIT; class Gammaproteobacteria was excluded because its MR-Egger estimate ran opposite to the other four methods (computational-prediction)
- **No heterogeneity** (all Cochran's Q P>0.05) and **no horizontal pleiotropy** (all MR-Egger intercept P>0.55) were detected for the six taxa (computational-prediction)
- **Robustness is weak**: apart from the weighted median for Alcaligenaceae (OR 0.203, P=0.026), MR-Egger, weighted median, simple mode and weighted mode were all non-significant; no FDR or Bonferroni correction was applied across ~210 taxa (computational-prediction)
- Authors interpret the inverse associations through SCFA production by these families, but no SCFA or functional data were analyzed (expert-opinion, authors' interpretation)

## Methods

- **Design**: Two-sample Mendelian randomization (MR), gut microbiota as exposure, AIT as outcome; forward direction only (no reverse MR reported).
- **Exposure data**: MiBioGen consortium GWAS, 18,340 participants, 211 taxa (131 genera, 35 families, 20 orders, 16 classes, 9 phyla), 16S rRNA sequencing.
- **Outcome data**: FinnGen R8 AIT GWAS. The paper states "213,746 individuals, specifically 244 patients with AIT and 187,684 controls"; these figures do not sum and the paper does not reconcile them. Population Finnish/European; no sex or age breakdown available (summary statistics).
- **Instruments**: SNPs at P<1x10^-5; LD clumping R2<0.001, 10,000 kb window (1000 Genomes European reference); F statistic <10 excluded. 1050 SNPs used for 210 taxa; all F>10.
- **Analysis**: IVW (primary) plus MR-Egger, weighted median, simple mode, weighted mode, MR-PRESSO; Cochran's Q for heterogeneity; MR-Egger intercept for pleiotropy; leave-one-out. R 4.3.2, TwoSampleMR. Significance P<0.05, no multiple-testing correction described.

## Detailed Summary

**IVW estimates (Table 2 and text)**

| Taxon | nSNP | IVW OR (95% CI) | P | Weighted median OR, P |
|---|---|---|---|---|
| Family Alcaligenaceae (id.2875) | 11 | 0.25 (0.09 to 0.74) | 0.012 | 0.203, P=0.026 |
| Family Pasteurellaceae (id.3689) | 13 | 0.50 (0.27 to 0.93) | 0.026 | 0.509, P=0.122 |
| Family Peptococcaceae (id.2024) | 9 | 0.35 (0.15 to 0.81) | 0.014 | 0.408, P=0.102 |
| Genus Lachnospira (id.2004) | 5 | 0.18 (0.04 to 0.90) | 0.037 | 0.229, P=0.164 |
| Genus Victivallis (id.2256) | 10 | 0.56 (0.33 to 0.96) | 0.034 | 0.665, P=0.282 |
| Order Pasteurellales (id.3688) | 13 | 0.50 (0.27 to 0.93) | 0.026 | 0.509, P=0.146 |

- Pasteurellaceae and Pasteurellales results are identical (same 13 SNPs), so they are effectively one signal.
- Cochran's Q (IVW) P values ranged 0.362 (Victivallis) to 0.964 (Peptococcaceae). MR-Egger intercept P values ranged 0.559 to 0.984.
- Leave-one-out plots indicated "certain individual SNPs might introduce bias" (authors' wording), without naming which.
- **Internal inconsistencies to note**: the Fig. 2 forest plot lists Alcaligenaceae with nSNP 5 and OR 0.18 (0.04 to 0.90), P=0.037, which duplicates the Lachnospira row and conflicts with Table 2 (nSNP 11, OR 0.254, P=0.012). The abstract's Methods mention "22 gastrointestinal diseases" from UK Biobank, and the limitations paragraph mentions "DN" (diabetic nephropathy); both appear to be carry-over text from a different MR template and are not part of this analysis.
- **Author-stated limitations**: summary statistics only (no sex or subgroup analysis); genus-level resolution only; predominantly European ancestry limits generalizability; MR addresses genetic-prediction-level causality, not direct mechanism.

## Relevance to WikiBiome

- Adds a FinnGen-based MR signal to [[hashimotos-thyroiditis]] and [[gut-thyroid-axis]]; method context in [[mendelian-randomization]].
- Lachnospira (a butyrate-associated Lachnospiraceae genus) as inversely associated fits the [[short-chain-fatty-acids]] and [[butyrate]] narrative, but this paper provides no metabolite data. See also [[lachnospiraceae]].
- Compare with other HT MR sources in the library (e.g. [[fang-2024-gut-microbiota-autoimmune-thyroid-mendelian]], [[zhang-2024-gut-microbiota-metabolites-aitd-mendelian-randomization]]), which used larger HT case sets and report different taxa.

## Relevance to Cureva

- Hypothesis-generating only. Inverse associations for Lachnospira and Victivallis could inform a "restore missing function" (primitive 5) hypothesis around fiber-fermenting taxa, but the evidence does not survive standard robustness checks and cannot support an intervention claim.
- No STOP signal.

## Contradictions / Tensions

- Zhang et al. 2024 (Nutrients), using a much larger HT GWAS (15,654 cases), found no gut genus associations with HT that survived FDR correction. Xiong's six taxa are uncorrected IVW hits from 244 cases and should be weighted accordingly.
- Taxa reported here (Alcaligenaceae, Pasteurellaceae, Peptococcaceae, Victivallis) differ from those in other HT MR studies, a common pattern across MiBioGen-based MR papers that suggests low reproducibility at the P<0.05 IVW threshold.

## Open Questions

- Do these associations replicate in FinnGen later releases (R9 to R12) with many more AIT cases?
- Are Pasteurellaceae (a family containing Haemophilus, typically oral/upper airway) signals in stool GWAS biologically meaningful for the thyroid?
- Would correction for ~210 tests eliminate all six hits?
