---
title: "Svensson 2021 — Associations Between Endometriosis and Gut Microbiota"
type: source
created: 2026-04-19
updated: 2026-04-19
authors: [Agnes Svensson, Louise Brunkwall, Bodil Roth, Marju Orho-Melander, Bodil Ohlsson]
corresponding_author: "Bodil Ohlsson"
corresponding_email: "Bodil.ohlsson@med.lu.se"
institution: "Department of Internal Medicine, Skane University Hospital, Lund University, Malmo, Sweden"
year: 2021
journal: "Reproductive Sciences"
doi: "https://doi.org/10.1007/s43032-021-00506-5"
pmid: ""
evidence_level: cross-sectional
sample_size: "n=264 (66 patients, 198 controls)"
tags: [endometriosis, gut-microbiota, 16S-rRNA, alpha-diversity, beta-diversity, gastrointestinal-symptoms, cross-sectional, dysbiosis]
library_category: signatures
platform: both
condition: "endometriosis"
karen_brain_primitives: [1, 5, 9]
metals_discussed: []
taxa_discussed: [paraprevotella, adlercreutzia, lachnospira, oscillospira, bacteroides, parabacteroides, turicibacter, coprococcus, lachnobacterium, prevotella, odoribacter, lactococcus, blautia, ruminococcus, butyricimonas, SMB53, enterobacteriaceae, gammaproteobacter]
key_findings:
  - "Alpha diversity (Shannon index) was significantly higher in controls than endometriosis patients (p=4.9e-05), while beta diversity difference was small (R-squared=0.02, p=0.02)"
  - "19 gut bacteria at genus level differed between endometriosis patients and controls, reduced to 12 after FDR correction — spanning Bacteroidia, Clostridia, Coriobacteriia, Bacilli, and Gammaproteobacter classes"
  - "Differences in gut microbiota within the endometriosis cohort lost significance after FDR adjustment, suggesting disease subtype (localization, GI symptoms, hormone treatment) does not independently drive microbiota composition"
keystone: false
---

## Key Findings

- **Alpha diversity was significantly reduced in endometriosis patients** compared to matched controls (Shannon index, ANOVA p=4.9x10^-5), while beta diversity (Bray-Curtis) showed a statistically significant but very small difference (R^2=0.02, p=0.02) ([[svensson-2021-associations-endometriosis-gut-microbiota]], cross-sectional, n=264).
- **19 bacteria at genus level differed in abundance** between endometriosis patients and controls before FDR correction; 12 remained significant after FDR at q<0.05. These belonged to the classes Bacteroidia (N=4), Clostridia (N=4), Coriobacteriia (N=2), Bacilli (N=1), and Gammaproteobacter (N=1) ([[svensson-2021-associations-endometriosis-gut-microbiota]]).
- **Fecal calprotectin correlated with Ruminococcus abundance** (R=0.260, p=0.038) in the endometriosis cohort, suggesting gut inflammation tracks with specific taxa. Plasma AXIN1 did not correlate with any bacterial abundance ([[svensson-2021-associations-endometriosis-gut-microbiota]]).
- **Subgroup analyses within the endometriosis cohort** (isolated ovarian vs. spread disease; GI symptoms vs. none; hormonal treatment vs. none) showed initial differences in specific genera, but **all lost significance after FDR correction** ([[svensson-2021-associations-endometriosis-gut-microbiota]]).
- **Sensitivity analysis excluding antibiotic-treated participants** reduced significant bacteria from 17 to 3 after FDR (Lachnospira, Oscillospira, and a Bacteroidales genus), confirming that antibiotic exposure is a major confounder ([[svensson-2021-associations-endometriosis-gut-microbiota]]).

## Methods

**Design:** Cross-sectional case-control study with matched controls from a population-based cohort.

**Patients:** 66 women with laparoscopically or laparotomy-confirmed endometriosis (ICD-10: N80), recruited from the Department of Gynaecology at Skane University Hospital, Malmo, Sweden, between September 2016 and March 2017. Originally 266 women met inclusion criteria; 196 were excluded (162 unwilling, 23 non-surgical diagnosis, 7 too distant from hospital, 2 uncertain diagnosis, 2 no stool sample). Median age 37.8 years, median BMI 25.0 kg/m^2.

**Controls:** 198 women (3:1 matching) from the Malmo Offspring Study (MOS), a population-based cohort. Matched on sex, age (plus/minus 730 days), BMI (plus/minus 2 units), and smoking status. Controls with celiac disease, Crohn's disease, ulcerative colitis, IBS, or lactose intolerance were excluded.

**Microbiota analysis:** 16S rRNA gene sequencing (V1-V3 regions) using QIAamp column Stool Kit extraction, paired-end 300bp reads on HiSeq Illumina (GATC Biotech). 937,892,146 total reads, average 434,008 per sample. Classified at genus level using QIIME with Greengenes reference database. Bacteria occurring in fewer than 10 samples excluded, leaving 58 bacteria in the statistical analysis.

**Biomarkers:** Plasma AXIN1 by ELISA; fecal calprotectin.

**Questionnaires:** VAS-IBS (Visual Analog Scale for Irritable Bowel Syndrome) for gastrointestinal symptoms on a 0-100mm continuous scale.

**Statistics:** Mann-Whitney U test, Fisher's exact test, Spearman's correlation, Shannon diversity index, Bray-Curtis dissimilarity index. FDR set at 5% (Benjamini-Hochberg). SPSS version 26.

## Detailed Summary

### Diversity

Controls had significantly higher alpha diversity than endometriosis patients (Shannon index, ANOVA p=4.9x10^-5). Beta diversity (Bray-Curtis) was also significantly different (adonis test, p=0.02) but the R^2 was very small (0.02), indicating the explained variance in community composition was minimal.

### Differentially Abundant Taxa (FDR-corrected, q<0.05)

From Table 2, 12 genera remained significant after FDR correction:

| Genus | Class | Controls median (IQR) | Patients median (IQR) | p-value | q-value |
|-------|-------|-----------------------|-----------------------|---------|---------|
| [[paraprevotella]] | Bacteroidia | 0.71 (0.00-4.70) | 0.00 (0.00-1.11) | <0.001 | 0.0058 |
| [[adlercreutzia]] | Coriobacteriia | 6.76 (4.91-8.97) | 5.15 (3.10-7.31) | <0.001 | 0.0029 |
| Unidentified Bacteroidia | Bacteroidia | 0.63 (0.00-2.69) | 0.00 (0.00-0.50) | <0.001 | 0.0019 |
| [[lachnospira]] | Clostridia | 12.43 (11.60-13.31) | 3.47 (1.34-4.88) | <0.001 | 0.00015 |
| [[oscillospira]] | Clostridia | 10.67 (9.81-11.62) | 11.79 (10.60-12.53) | <0.001 | 0.00012 |
| Unidentified Coriobacteriaceae | Coriobacteriia | 8.24 (6.72-9.45) | 6.95 (5.25-8.65) | 0.001 | 0.0096 |
| [[bacteroides]] | Bacteroidia | 15.29 (14.25-16.45) | 16.08 (15.14-17.26) | 0.001 | 0.0083 |
| [[parabacteroides]] | Bacteroidia | 11.27 (9.98-12.47) | 11.92 (10.95-13.20) | 0.001 | 0.0073 |
| SHA98 (unidentified) | Clostridia | 2.63 (0.00-5.70) | 0.00 (0.00-4.01) | 0.004 | 0.026 |
| Enterobacteriaceae (unidentified) | Gammaproteobacter | 3.28 (1.06-5.56) | 4.38 (2.30-7.16) | 0.007 | 0.041 |
| [[turicibacter]] | Bacilli | 4.50 (2.57-6.75) | 2.89 (0.00-5.84) | 0.008 | 0.044 |
| [[coprococcus]] | Clostridia | 10.31 (9.34-11.25) | 10.81 (9.95-11.76) | 0.009 | 0.044 |

**Higher in endometriosis patients:** [[oscillospira]], [[bacteroides]], [[parabacteroides]], unidentified Enterobacteriaceae (Gammaproteobacter), [[coprococcus]].

**Lower in endometriosis patients:** [[paraprevotella]], [[adlercreutzia]], [[lachnospira]], [[turicibacter]], unidentified Bacteroidia, unidentified Coriobacteriaceae, SHA98.

### Subgroup Analyses (all lost significance after FDR)

- **Isolated ovarian (N=27) vs. spread (N=38):** Before FDR, isolated ovarian patients had higher unidentified genus and [[lachnobacterium]] (Clostridia) and lower Christensenellaceae, [[lachnobacterium]], and [[adlercreutzia]] compared to spread (Table 3).
- **GI tract involvement (N=18) vs. none (N=47):** Before FDR, GI tract involvement associated with higher [[lactococcus]] (Bacilli) (p=0.034, q=1.000).
- **GI symptoms (N=57) vs. none (N=8):** Before FDR, symptomatic patients had lower [[SMB53]] (Clostridia) and [[odoribacter]], and higher [[prevotella]] (Table 5).
- **Hormonal treatment (N=41) vs. none (N=24):** Before FDR, treated patients had different [[blautia]], [[ruminococcus]] (Lachnospiraceae), and [[butyricimonas]] abundance (Table 6).

### Biomarker Correlations

- Fecal calprotectin correlated with [[ruminococcus]] abundance (R=0.260, p=0.038).
- [[prevotella]] abundance correlated with constipation (R=0.307, p=0.014), bloating/flatulence (R=0.295, p=0.017), and vomiting/nausea (R=0.297, p=0.016).
- Plasma AXIN1 did not correlate with any bacterial abundance.
- Median plasma AXIN1: 390.0 pg/ml (IQR 357.5-420.0); median fecal calprotectin: 25.00 mg/kg (IQR 25.00-29.50).
- 12.1% of patients had been born by caesarean section.

### Endometriosis Characteristics

- 40.9% isolated ovarian, 27.3% GI tract involvement.
- 62.1% on current hormonal treatment (48.8% estrogen/combined OCP, 46.3% progestin, 19.5% GnRH analogs).
- 86.4% had GI symptoms in prior 2 weeks.
- 51.5% on analgesic treatment vs. 17.2% of controls (p<0.001).

## Relevance to WikiBiome

This study informs several entity and concept pages:

- **[[endometriosis]]** — Adds gut microbiota diversity data (reduced alpha diversity) as an association. Supports the disease entity page's "Microbiome Associations" section with genus-level data from a matched human cohort.
- **[[lachnospira]]**, **[[oscillospira]]**, **[[bacteroides]]**, **[[parabacteroides]]**, **[[coprococcus]]**, **[[turicibacter]]**, **[[adlercreutzia]]**, **[[paraprevotella]]** — Each can be updated with endometriosis as a condition where these genera are enriched or depleted. Particularly notable is the strong depletion of [[lachnospira]] (median 12.43 in controls vs. 3.47 in patients, q=0.00015).
- **[[calprotectin]]** — Correlation with [[ruminococcus]] in endometriosis patients supports the concept of gut inflammation tracking with specific taxa.
- **[[dysbiosis]]** concept page — This study supports the pattern of reduced diversity in estrogen-dependent inflammatory conditions.
- **[[prevotella]]** — Correlation with GI symptom severity (constipation, bloating, nausea) in endometriosis patients adds functional relevance data.

## Relevance to Cureva

- **[[endometriosis-signature]]** — This study contributes to Layer 2 (taxonomic signature) with genus-level enrichment/depletion data from a human cohort. The enrichment of [[oscillospira]], [[bacteroides]], [[parabacteroides]], and unidentified Enterobacteriaceae, alongside depletion of [[lachnospira]], [[adlercreutzia]], [[paraprevotella]], and [[turicibacter]], should be cross-referenced against the existing signature.
- **Enterobacteriaceae enrichment** (which includes [[escherichia-coli]] and [[shigella]]) aligns with the Ata et al. 2019 finding of Escherichia/Shigella dominance in stage 3-4 endometriosis, though this study did not identify Escherichia/Shigella at genus level (possibly due to 16S V1-V3 region limitations).
- **GI symptom-taxa correlations** (Prevotella with constipation, bloating, nausea) could inform symptom-specific intervention targeting on Cureva.
- **Fecal calprotectin-Ruminococcus correlation** supports the nutritional immunity layer — calprotectin is a metal-sequestering protein (binds zinc and manganese), and its correlation with a specific taxon connects Layer 3 (nutritional immunity) to Layer 2 (taxonomic).
- **Hormonal treatment effects on Blautia and Ruminococcus** are relevant for understanding how standard endometriosis treatments interact with the gut microbiome, potentially informing intervention or STOP considerations.

## Contradictions / Tensions

- **Beta diversity direction conflicts with some animal models.** This study found beta diversity was *higher* in controls, while Yuan et al. 2017 (ref 33 in the paper) found higher beta diversity developed in endometriosis mice after 42 days. The authors attribute this to species differences (human vs. mouse). This tension should be noted on the [[endometriosis]] entity page.
- **Enterobacteriaceae significance.** The Ata et al. 2019 study (ref 29) found Escherichia/Shigella dominance in stage 3-4 endometriosis. This study found a non-significant enrichment of Enterobacteriaceae in endometriosis patients (q=0.041, borderline). The discrepancy may reflect the small sample in Ata (n=14) and different sequencing approaches. This warrants a supersession note if the existing vault treats the Ata finding as established.
- **Subgroup differences vanish after FDR.** Any existing signature content that relies on disease-localization-specific or treatment-specific microbiota differences in endometriosis should note that this larger study (n=66) found no robust subgroup differences after multiple testing correction.

## Open Questions

1. **What drives the Lachnospira depletion?** This was the most statistically robust finding (q=0.00015) with a large effect size (median 12.43 vs. 3.47). Lachnospira is a butyrate-related genus — does its loss connect to the [[short-chain-fatty-acids]] deficit seen in other inflammatory conditions?
2. **Does the Enterobacteriaceae enrichment reflect Escherichia/Shigella expansion?** The 16S V1-V3 approach could not resolve this. Shotgun metagenomics on endometriosis stool samples would clarify whether the Ata et al. Escherichia/Shigella finding replicates at higher resolution.
3. **What is the causal direction?** The cross-sectional design cannot determine whether gut dysbiosis precedes endometriosis or results from it (or its treatments). Longitudinal studies are needed.
4. **How do metals interact with the observed taxonomic shifts?** This study did not measure metals. The enrichment of Enterobacteriaceae (iron-dependent) and depletion of Lachnospira (butyrate producer) would be consistent with an iron-excess, SCFA-depleted gut environment, but this is speculative without metal data.
5. **Does antibiotic exposure fully explain the findings?** The sensitivity analysis showed most differences disappeared after excluding antibiotic-treated participants, raising the question of whether endometriosis itself (vs. its treatment history) drives gut dysbiosis.
