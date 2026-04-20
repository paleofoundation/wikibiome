---
title: "Ni 2020 — Fecal Metabolomics and Gut Microbiota Correlation in Endometriosis Mice"
type: source
created: 2026-04-09
updated: 2026-04-19
authors: [Zhexin Ni, Shuai Sun, Yanli Bi, Jie Ding, Wen Cheng, Jin Yu, Ling Zhou, Mingqing Li, Chaoqin Yu]
corresponding_author: "Mingqing Li; Chaoqin Yu"
corresponding_email: "mqli@fudan.edu.cn; chqyu81@163.com"
institution: "Department of Gynecology of Traditional Chinese Medicine, Changhai Hospital, Naval Medical University, Shanghai; Shanghai Key Laboratory of Female Reproductive Endocrine Related Diseases, Hospital of Obstetrics and Gynecology, Fudan University, Shanghai"
year: 2020
journal: "American Journal of Reproductive Immunology"
doi: "10.1111/aji.13307"
pmid: ""
evidence_level: animal-model
sample_size: "n=12 mice (6 EMS model, 6 sham-operated control)"
tags: [endometriosis, gut-microbiota, fecal-metabolomics, bile-acids, alpha-linolenic-acid, dysbiosis, mouse-model, 16s-rRNA, metabolomics]
library_category: signatures
platform: both
condition: "endometriosis"
karen_brain_primitives: [1, 5, 9]
metals_discussed: []
taxa_discussed: [allobaculum, akkermansia, parasutterella, rikenella, lachnospiraceae, lactobacillus, bacteroides, citrobacter, parabacteroides, ruminococcaceae, blautia, roseburia, gordonibacter, turicibacter, faecalibaculum, coprococcus, butyricicoccus, tyzzerella, bifidobacterium, helicobacter, ruminococcus, candidatus-stoquefichus, eubacterium-coprostanoligenes-group, desulfovibrio, clostridium-sensu-stricto]
key_findings:
  - "156 named differential metabolites identified between EMS and control mice, with secondary bile acid biosynthesis and alpha-linolenic acid metabolism as key pathways"
  - "Gut microbiota diversity and abundance decreased in EMS mice, with increased Proteobacteria and Verrucomicrobia and decreased Bacteroidetes and Firmicutes"
  - "Four differential metabolites (CDCA, UDCA, ALA, 12,13-EOTrE) with AUC >0.8 identified as potential biomarkers distinguishing EMS from controls"
keystone: false
---

## Key Findings

- **156 named differential fecal metabolites** were identified between EMS model mice and controls using non-targeted LC-MS metabolomics, with 296 total differential metabolites (VIP > 1, P < .05) ([[ni-2020-fecal-metabolomics-gut-microbiota-endometriosis-mice]], animal model).
- **Secondary bile acid biosynthesis and alpha-linolenic acid (ALA) metabolism** were the two KEGG pathways significantly enriched in both the differential metabolite and gut microbiota functional prediction analyses, indicating these pathways are critical nodes in the metabolomics-microbiota interaction ([[ni-2020-fecal-metabolomics-gut-microbiota-endometriosis-mice]], animal model).
- **Chenodeoxycholic acid (CDCA) and ursodeoxycholic acid (UDCA) were increased**, while **ALA and 12,13-EOTrE were decreased** in EMS mouse feces. All four metabolites achieved AUC values > 0.8 (CDCA: 0.94, UDCA: 0.89, ALA: 0.92, 12,13-EOTrE: 0.81), suggesting potential as non-invasive biomarkers ([[ni-2020-fecal-metabolomics-gut-microbiota-endometriosis-mice]], animal model).
- **Gut microbiota diversity was reduced** in EMS mice (Shannon index P < .05, Sobs index P > .05), with significantly increased abundance of [[akkermansia]], [[allobaculum]], [[parasutterella]], and [[rikenella]] at the genus level (P < .05), while [[lachnospiraceae]] NK4A136 group, [[lactobacillus]], and [[bacteroides]] decreased significantly ([[ni-2020-fecal-metabolomics-gut-microbiota-endometriosis-mice]], animal model).
- **At the phylum level**, the Firmicutes/Bacteroidetes ratio decreased (2.25 vs 2.01), with increased [[proteobacteria]] and [[verrucomicrobia]] (P < .05) and decreased [[bacteroidetes]] and [[firmicutes]] (P > .05) in EMS mice ([[ni-2020-fecal-metabolomics-gut-microbiota-endometriosis-mice]], animal model).

## Methods

**Study design:** Animal model study using surgically induced endometriosis in mice. Female C57BL/6J mice (six weeks old) were randomly divided into endometriosis model (EM, n=6) and sham-operated control (CO, n=6) groups. The EMS model was constructed by intraperitoneal transplantation of endometrial fragments on day 8 after estrogen priming. Feces were collected three weeks post-modeling at estrus interval.

**Metabolomics:** Non-targeted LC-MS metabolomics using AB SCIEX UPLC-TripleTOF system with BEH C18 column. Data processed with Progenesis QI software, matched against HMDB, METLIN, and Majorbio Cloud Platform. PCA and OPLS-DA used for multivariate analysis. Differential metabolites selected by VIP > 1, P < .05 (Student's t-test). ROC analysis used to identify potential biomarkers.

**Microbiome:** 16S rRNA gene sequencing (V3-V4 region) on Illumina MiSeq PE300 platform. Mothur software (v1.30.1) used for alpha diversity. PCoA with ANOSIM for beta diversity. LDA (LEfSe) for characteristic bacteria identification. PICRUSt for functional prediction. Spearman correlation between key metabolites and top 50 abundant genera.

**Statistical analysis:** SPSS 21.0. Student's t-test for normally distributed data, Wilcoxon rank-sum test for non-normally distributed data. Benjamini-Hochberg FDR correction for multiple comparisons. Two-tailed P < .05 considered significant.

## Detailed Summary

### Metabolomic Profiling

PCA analysis showed distinct clustering between EM and CO groups with some overlap (PC1 = 29.50%, PC2 = 14.10%). OPLS-DA model achieved strong separation (R2X = 0.517, R2Y = 0.996, Q2 = 0.776), confirmed by 200 permutation tests. A total of 296 differential metabolites were detected (VIP > 1, P < .05), including 156 named metabolites. Twenty-four metabolites had VIP > 2, including dehydrocarpaine I, maslinic acid, and goyaglycoside g.

The four most abundant HMDB compound classes among differential metabolites were amino acids/peptides/analytes (13.79%), triterpenoids (6.9%), fatty acids/compounds (5.75%), and glycerophosphocholines (5.75%).

Seventeen KEGG pathway types across four categories were identified, with 45 specific pathways related to differential metabolites. Metabolites were significantly enriched in 10 pathways (P < .05), including choline metabolism in cancer, cutin/suberine/wax biosynthesis, and secondary bile acid biosynthesis. The significantly enriched pathways by topological analysis (high impact value and low P-value) were: cutin/suberine/wax biosynthesis (P = 0.004), alpha-linolenic acid metabolism (P = 0.009), glycerophospholipid metabolism (P = 0.02), and isoflavonoid biosynthesis (P = 0.02).

### Microbiome Composition

The rank-abundance curve of the EM group was steeper than CO, indicating reduced diversity. PCoA analysis showed significant separation between groups (R = 0.8800, P = 0.004). Alpha diversity analysis showed Shannon index was significantly lower in EM (P < .05), while Sobs index trended lower (P > .05).

**Phylum level:** Decreased Bacteroidetes and Firmicutes (P > .05), increased Proteobacteria and Verrucomicrobia (P < .05) in EM group. Firmicutes/Bacteroidetes ratio: CO = 2.25, EM = 2.01.

**Genus level (top 20):** Significantly increased in EM: [[allobaculum]] (LDA 4.8), [[akkermansia]] (LDA 4.3), [[parasutterella]] (LDA 4.1), [[rikenella]] (P < .05). Significantly decreased in EM: [[lachnospiraceae]] NK4A136 group, [[lactobacillus]], [[bacteroides]] (all P < .05). Eight species of bacteria decreased significantly in EM, including Lachnospiraceae NK4A136 group, Lactobacillus, Bacteroides.

**Unique genera:** CO had 9 unique genera (including [[gordonibacter]], [[faecalibaculum]], Tyzzerella 3, Ruminococcaceae UCG-013). EM had 5 unique genera (including [[citrobacter]], Ruminococcaceae NK4A214 group, Rikenellaceae RC9 gut group, Family XIII UCG-001, [[parabacteroides]]). Seventy genera were shared.

**LDA analysis (LEfSe):** Ten characteristic bacteria with LDA > 2 identified in EM group, including [[allobaculum]] (LDA 4.8), [[akkermansia]] (LDA 4.3), and [[parasutterella]] (LDA 4.1).

### Functional Prediction (PICRUSt)

Eighty KEGG pathways showed significant functional differences between groups (P < .05). Sixty-two pathways (including oxidative phosphorylation, alanine/aspartate/glutamate metabolism) were significantly increased in EM (P < .05). Sixteen pathways (including starch/sucrose metabolism, bacterial motility proteins) were significantly decreased in EM (P < .05).

Eleven common pathways were identified between the 80 differential microbiota-functional pathways and 45 metabolite-related KEGG pathways, including primary and secondary bile acid biosynthesis, lysine and xylene degradation, histidine, phenylalanine, tryptophan, arachidonic acid, ALA, and biotin metabolism, and flavonoid biosynthesis.

### Key Metabolite-Microbiota Correlations

The four metabolites involved in the two overlapping pathways (secondary bile acid biosynthesis and ALA metabolism):

| Metabolite | M/Z | FC (CO/EM) | VIP | CO abundance | EM abundance | P value |
|---|---|---|---|---|---|---|
| CDCA | 375.3 | 0.9259 | 1.45 | 3.26 +/- 0.12 | 3.52 +/- 0.16 | 0.009 |
| UDCA | 375.3 | 0.9504 | 1.22 | 3.85 +/- 0.13 | 4.05 +/- 0.13 | 0.022 |
| ALA | 261.2 | 1.0704 | 1.12 | 2.66 +/- 0.09 | 2.49 +/- 0.17 | 0.049 |
| 12,13-EOTrE | 293.2 | 1.072 | 1.1 | 2.65 +/- 0.15 | 2.47 +/- 0.11 | 0.043 |

**ROC analysis:** AUC values — CDCA: 0.94, UDCA: 0.89, ALA: 0.92, 12,13-EOTrE: 0.81, all suggesting strong discriminatory power.

**Spearman correlations:**
- CDCA: negatively correlated with Eubacterium coprostanoligenes group and [[blautia]]
- UDCA: significant negative correlation with Candidatus Stoquefichus
- ALA: positively correlated with [[helicobacter]], Ruminococcus 1, Ruminococcaceae UCG-009; negatively correlated with norank f. Bacteroidales S24-7 group
- 12,13-EOTrE: positively correlated with Candidatus Stoquefichus

## Relevance to WikiBiome

This study informs several entity and concept pages:

- **[[endometriosis]]** — Adds evidence for gut microbiota dysbiosis as a feature of endometriosis, specifically the characteristic enrichment of [[akkermansia]], [[allobaculum]], and [[parasutterella]] and depletion of [[lactobacillus]] and [[lachnospiraceae]]. Supports the concept of a gut-endometriosis axis.
- **[[akkermansia-muciniphila]]** — Counterintuitively, Akkermansia (generally considered beneficial) is enriched in the EMS model. This is notable for the entity page and warrants discussion of context-dependent effects.
- **Bile acid metabolism concept** — The secondary bile acid pathway (CDCA, UDCA) is a key node connecting gut microbiota to endometriosis metabolomics. CDCA blocks LPS-induced inflammation via FXR-MLCK pathway; UDCA protects intestinal barrier via EGFR and COX-2-dependent mechanisms ([[ni-2020-fecal-metabolomics-gut-microbiota-endometriosis-mice]], animal model, citing refs 27-30).
- **[[parasutterella]]** — Enriched in EMS mice; this Proteobacteria genus is emerging as a dysbiosis marker across multiple conditions.
- **[[lactobacillus]]** — Depleted in EMS mice, consistent with the broader pattern of Lactobacillus depletion in inflammatory and estrogen-dependent conditions.
- **[[dysbiosis]]** concept page — The decreased diversity and altered Firmicutes/Bacteroidetes ratio pattern.

## Relevance to Cureva

- **Endometriosis signature (taxonomic layer):** Provides animal-model-level evidence for enrichment of Akkermansia, Allobaculum, Parasutterella, Rikenella and depletion of Lachnospiraceae, Lactobacillus, Bacteroides. Confidence: preliminary (single animal model study).
- **Metabolomic biomarkers:** CDCA, UDCA, ALA, and 12,13-EOTrE as potential non-invasive diagnostic markers. The AUC values are strong (>0.8) but require human validation.
- **Intervention hypotheses:**
  - ALA supplementation may address the decreased ALA levels observed in EMS — ALA has documented anti-inflammatory effects (inhibits TNF-alpha, IL-1beta, IL-6, iNOS, COX-2). This could inform an intervention page for alpha-linolenic acid in endometriosis.
  - The increased CDCA/UDCA suggests altered bile acid metabolism that may be either protective (CDCA blocks LPS-induced inflammation via FXR-MLCK pathway, UDCA protects intestinal barrier via EGFR and COX-2-dependent mechanisms) or a compensatory response to inflammation.
  - Restoring [[lactobacillus]] populations could be a two-sided ecological engineering approach (Primitive 5).
- **Functional prediction:** The increased oxidative phosphorylation pathway in EM gut microbiota may relate to altered oxygen ecology (Primitive 9).

## Contradictions / Tensions

- **Akkermansia enrichment** is surprising. [[akkermansia-muciniphila]] is generally regarded as a beneficial commensal associated with metabolic health. Its enrichment in EMS mice contradicts the typical narrative and may reflect mucin layer degradation in inflammatory states rather than a health benefit. This needs explicit noting on the Akkermansia entity page.
- **Firmicutes/Bacteroidetes ratio:** This study found a slight decrease in F/B ratio in EMS (2.01 vs 2.25, P > .05), which contrasts with Yuan et al. 2018 who found increased F/B ratio in EMS mice. The authors attribute this to differences in modeling methods and stool sampling time points. Both findings should be noted with the conflict flagged.
- **Comparison with prior mouse EMS studies:** The authors note that three prior studies (Yuan et al., Chadchan et al., Hantschel et al.) produced partially contradictory results regarding which taxa are altered in EMS mice, attributed to different surgical approaches, time points, and housing conditions. This limits the confidence assignable to any single taxonomic finding from mouse models.

## Open Questions

1. **Human validation:** All findings are from a mouse model (n=6 per group). Do the same metabolomic and taxonomic signatures hold in human endometriosis patients? The AUC values for CDCA, UDCA, ALA, and 12,13-EOTrE need human cohort validation.
2. **Causal direction:** Is the gut dysbiosis a cause or consequence of endometriosis? Chadchan et al. showed antibiotics/metronidazole reduces EMS progression, suggesting causality, but the mechanism remains unclear.
3. **Bile acid-microbiota causality:** The authors speculate CDCA/UDCA changes are a self-regulation mode of gut microbiota in EMS, but the direct relationship between CDCA and EMS has not been established.
4. **12,13-EOTrE and inflammation:** The relationship between 12,13-EOTrE and inflammation/EMS is lacking — the authors speculate it may be a marker but acknowledge this needs further study.
5. **Temporal dynamics:** Feces were collected at a single time point (3 weeks post-modeling). How does the metabolomic-microbiota correlation evolve over disease progression?
6. **Estrogen-microbiota interaction:** The study used estrogen injections to maintain the model. How much of the observed dysbiosis is driven by exogenous estrogen vs. the endometriotic lesions themselves? This relates to the [[estrobolome]] and Primitive 7.
