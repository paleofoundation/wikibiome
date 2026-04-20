---
title: "Zhang 2023 — Causal Effects of Gut Microbiota on Erectile Dysfunction: A Two-Sample Mendelian Randomization Study"
type: source
created: 2026-04-19
updated: 2026-04-19
authors: [Yuyang Zhang, Yuxi Chen, Yangyang Mei, Renfang Xu, Hong Zhang, Xingliang Feng]
corresponding_author: "Xingliang Feng"
corresponding_email: "xingliang-feng@czfph.com"
institution: "The First Affiliated Hospital of Anhui Medical University; Jiangyin People's Hospital of Jiangsu Province; The Third Affiliated Hospital of Soochow University; First People's Hospital of Changzhou"
year: 2023
journal: "Frontiers in Microbiology"
doi: "10.3389/fmicb.2023.1257114"
pmid: ""
evidence_level: cross-sectional
sample_size: "n=18,340 (microbiota GWAS); n=223,805 (ED GWAS: 6,175 cases, 217,630 controls)"
tags: [erectile-dysfunction, gut-microbiota, mendelian-randomization, lachnospiraceae, ruminococcaceae, oscillibacter, tyzzerella, senegalimassilia, causality]
library_category: causal
platform: both
condition: "erectile dysfunction"
karen_brain_primitives: [1, 5]
metals_discussed: []
taxa_discussed: [lachnospiraceae, senegalimassilia, ruminococcaceae, oscillibacter, tyzzerella, allisonella, romboutsia, peptostreptococcaceae, bifidobacterium, actinobacteria, gastranaerphilales]
key_findings:
  - "Genetically predicted increased abundance of Lachnospiraceae (family), Senegalimassilia, Lachnospiraceae NC2004 group, Tyzzerella3, and Oscillibacter causally increases ED risk"
  - "Increased abundance of Ruminococcaceae UCG013 is causally protective against ED (OR 0.770)"
  - "First Mendelian randomization study establishing causal direction between gut microbiota and erectile dysfunction"
keystone: false
---

## Key Findings

- **Genetically predicted increased abundance of family Lachnospiraceae is causally associated with higher ED risk** (OR: 1.265, 95% CI: 1.054-1.519, P = 0.012) via inverse variance weighted (IVW) analysis, consistent across weighted median method (OR: 1.321, P = 0.028).
- **Four genera are causally linked to increased ED risk**: Senegalimassilia (OR: 1.320, 95% CI: 1.064-1.638, P = 0.012), Lachnospiraceae NC2004 group (OR: 1.197, 95% CI: 1.018-1.407, P = 0.030), Tyzzerella3 (OR: 1.138, 95% CI: 1.017-1.273, P = 0.024), and Oscillibacter (OR: 1.201, 95% CI: 1.035-1.393, P = 0.016).
- **Genus Ruminococcaceae UCG013 is causally protective against ED** (OR: 0.770, 95% CI: 0.615-0.965, P = 0.023), consistent with its known role as a butyrate producer with anti-inflammatory properties.
- At the stricter genome-wide significance threshold (P < 5e-08), order Gastranaerphilales showed the strongest risk association (OR: 1.874, 95% CI: 1.291-2.719, P = 0.001), and genus Romboutsia showed a protective effect (OR: 0.388, 95% CI: 0.224-0.673, P = 0.001).
- No significant heterogeneity or horizontal pleiotropy was detected across all six primary causal associations, confirming robustness.

## Methods

- **Design**: Two-sample Mendelian randomization (MR) study using publicly available GWAS summary-level data.
- **Exposure data**: Gut microbiota GWAS from the MiBioGen consortium — 18,340 individuals from 24 cohorts, predominantly European descent (13,266 individuals). A total of 211 microbiota taxa were classified across 9 phyla, 16 classes, 20 orders, 35 families, and 131 genera.
- **Outcome data**: ED GWAS meta-analysis from the IEU Open GWAS database incorporating three cohorts (Partners HealthCare Biobank, Estonian Genome Center at University of Tartu, UK Biobank) — 223,805 participants total (6,175 ED cases, 217,630 controls). ED diagnosed via ICD-10 codes N48.4 and F52.2, medical intervention history, oral drug prescriptions, or self-report.
- **Instrumental variables (IVs)**: SNPs selected at two P-value thresholds (P < 1e-05 locus-wide; P < 5e-08 genome-wide). LD clumping (r2 < 0.001, kb = 10,000), palindromic/incompatible allele removal, minor allele frequency > 0.01, F-statistic > 10.
- **Primary analysis**: Inverse variance weighted (IVW) method, supplemented by MR-Egger regression, weighted median, weighted mode, and simple mode.
- **Sensitivity analyses**: Cochran's Q test for heterogeneity, MR-Egger intercept for horizontal pleiotropy, MR-PRESSO global test for outliers, forest test, leave-one-out test, MR Steiger directionality test. FDR correction applied (Benjamini-Hochberg).
- **Software**: R version 4.1.2, packages "TwoSampleMR" and "MRPRESSO."

## Detailed Summary

This study represents the first application of Mendelian randomization to assess causal relationships between gut microbiota composition and erectile dysfunction. The MR framework uses genetic variants (SNPs) as instrumental variables to infer causality, leveraging the random assignment of alleles at conception to mimic a natural experiment — thereby overcoming the confounding and reverse causation limitations of observational studies.

**Primary results (locus-wide threshold, P < 1e-05):**

A total of 14,587 SNPs were identified as genetic instruments at the locus-wide significance level, correlated with 211 gut microbiota traits. After quality control and MR analysis, six taxa showed statistically significant causal associations with ED:

| Taxa | Level | SNPs | OR (95% CI) | P-value | FDR | Direction |
|------|-------|------|-------------|---------|-----|-----------|
| [[lachnospiraceae]] | Family | 17 | 1.265 (1.054-1.519) | 0.012 | 0.0288 | Risk |
| Senegalimassilia | Genus | 5 | 1.320 (1.064-1.638) | 0.012 | 0.0288 | Risk |
| Lachnospiraceae NC2004 group | Genus | 8 | 1.197 (1.018-1.407) | 0.030 | 0.0300 | Risk |
| [[ruminococcaceae]] UCG013 | Genus | 12 | 0.770 (0.615-0.965) | 0.023 | 0.0288 | Protective |
| Tyzzerella3 | Genus | 13 | 1.138 (1.017-1.273) | 0.024 | 0.0288 | Risk |
| [[oscillibacter]] | Genus | 13 | 1.201 (1.035-1.393) | 0.016 | 0.0288 | Risk |

All FDR-corrected P-values remained below 0.05, though the authors note these are "suggestive" associations given the FDR correction. The remaining four MR methods (MR-Egger, weighted median, weighted mode, simple mode) were directionally consistent with IVW for all six taxa.

**Secondary results (genome-wide threshold, P < 5e-08):**

At the stricter threshold, only 1,394 SNPs qualified as instruments. No significant causal effect was found when treating the gut microbiota as a whole (OR: 1.028, P = 0.732). At the individual taxon level, order Gastranaerphilales (OR: 1.874, P = 0.001), family Peptostreptococcaceae (OR: 0.384, P = 0.001), and genus Romboutsia (OR: 0.388, P = 0.001) showed significant associations. However, these were based on single-SNP Wald ratio tests and could not undergo full sensitivity analysis.

**Sensitivity analyses:**

All F-statistics exceeded 10, ruling out weak instrument bias. Cochran's Q test P-values ranged from 0.239 to 0.523 (all > 0.05), confirming no significant heterogeneity. MR-Egger intercept P-values ranged from 0.278 to 0.488, and MR-PRESSO global test P-values from 0.280 to 0.694 — all non-significant, confirming no directional horizontal pleiotropy. MR Steiger directionality test confirmed correct causal direction for all six associations, with > 70% of power satisfied.

**Mechanistic discussion:**

The authors propose that the risk-associated taxa (Lachnospiraceae, Senegalimassilia, Oscillibacter, Tyzzerella3, Lachnospiraceae NC2004 group) contribute to ED through metabolic and inflammatory pathways. Lachnospiraceae abundance has been linked to high BMI and saturated fat intake. Tyzzerella has been associated with high CVD risk. Oscillibacter depletion by polysaccharides is associated with reduced high-fat-diet-induced obesity, implying its abundance may worsen metabolic dysfunction.

The protective effect of Ruminococcaceae UCG013 is attributed to its role as a butyrate producer. Butyrate exerts anti-inflammatory effects, supports intestinal barrier function, and the genus has been identified as a significant biomarker for alleviating obesity and reducing hypertension.

## Relevance to WikiBiome

This study provides genetic-level causal evidence for the gut-penis axis — the concept that gut microbiota composition directly influences erectile function. This strengthens the basis for WikiBiome entity pages on:

- **[[erectile-dysfunction]]** — adds causal (not merely associative) evidence for microbiome involvement, supporting a dedicated disease entity page with microbiome associations.
- **[[lachnospiraceae]]** — extends the conditions-enriched-in profile to include ED, adding to existing associations with obesity, metabolic syndrome, and CVD.
- **[[ruminococcaceae]]** — reinforces the protective/butyrate-producing narrative, now with causal evidence in the ED context.
- **[[oscillibacter]]** — adds ED to conditions associated with this genus, alongside its known roles in metabolic inflammation.
- The concept of the **gut-penis axis** as an extension of gut-organ axis thinking, analogous to gut-brain axis and gut-liver axis.

## Relevance to Cureva

- **Signature development**: Supports building an [[erectile-dysfunction-signature]] with a taxonomic layer identifying Lachnospiraceae, Senegalimassilia, Lachnospiraceae NC2004 group, Tyzzerella3, and Oscillibacter as enriched taxa, and Ruminococcaceae UCG013 as depleted/protective.
- **Intervention hypotheses**: The protective role of Ruminococcaceae UCG013 (butyrate producer) suggests dietary fiber interventions or targeted probiotics that promote butyrate production may be relevant. Conversely, interventions reducing Lachnospiraceae or Oscillibacter abundance could be explored.
- **Cross-condition overlap**: The shared taxa (Lachnospiraceae, Oscillibacter) overlap with obesity, type 2 diabetes, and CVD signatures, supporting the known clinical comorbidity between ED and cardiovascular/metabolic disease.
- **STOP signal potential**: The link between ED and metabolic/inflammatory taxa raises questions about whether conventional ED treatments (PDE5 inhibitors) address root cause vs. symptom, though this study does not directly generate a STOP.

## Contradictions / Tensions

- **Evidence level limitation**: Mendelian randomization is classified as cross-sectional evidence (genetic variants measured at a single point). While it strengthens causal inference beyond observational studies, it does not reach the level of a randomized controlled trial. The authors acknowledge this.
- **FDR correction**: While raw P-values were all < 0.05, FDR-corrected P-values were described as "suggestive" rather than definitive, introducing uncertainty about the strength of the causal claims.
- **Prior cross-sectional study conflict**: A Japanese cross-sectional study (Okamoto et al., 2020) found no significant difference in major bacterial genera between ED patients and controls, though species-level differences were present. This study's MR approach claims to resolve that ambiguity through causal inference, but the underlying observational evidence base remains mixed.
- **Taxonomic resolution**: The MiBioGen study classified taxa only to genus level, not species level. The authors note this as a limitation — species-level or strain-level resolution might reveal different patterns.
- **Population bias**: The gut microbiota GWAS included a small proportion of non-European descent participants, which may limit generalizability.

## Open Questions

1. **What are the specific metabolic or inflammatory mediators** through which Lachnospiraceae, Oscillibacter, and other risk-associated taxa increase ED risk? The study identifies causal direction but not mechanism.
2. **Does the protective effect of Ruminococcaceae UCG013 operate through butyrate specifically**, or through other short-chain fatty acids or metabolites? Targeted metabolomic studies are needed.
3. **How do these taxa interact with the metallomic environment** in ED? No metals were discussed in this study, but ED is associated with zinc deficiency and cadmium exposure in other literature — the intersection of metal ecology and these taxa is unexplored.
4. **Would species-level or strain-level MR analysis** (when larger metagenomic GWAS become available) confirm or refine these genus-level findings?
5. **Do these causal relationships hold for organic vs. psychogenic ED subtypes?** The study could not distinguish between ED subtypes due to the summary-level data design.
6. **What is the relationship between Peptostreptococcaceae (protective at genome-wide threshold) and the Lachnospiraceae/Oscillibacter risk pattern?** The strict-threshold protective taxa may represent competitive exclusion dynamics worth investigating.
