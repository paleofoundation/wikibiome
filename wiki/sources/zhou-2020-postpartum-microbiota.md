---
title: "Zhou 2020 — Fecal Microbiota Changes in Postpartum Depressive Disorder"
type: source
created: 2026-04-14
updated: 2026-04-14
authors: [Yumei Zhou, Chen Chen, Haibo Yu, Zhuoxin Yang]
corresponding_author: "Zhuoxin Yang"
corresponding_email: "001188@gzucm.edu.cn"
institution: "Fourth Clinical Medical College of Guangzhou University of Chinese Medicine, Shenzhen, China"
year: 2020
journal: "Frontiers in Cellular and Infection Microbiology"
doi: "10.3389/fcimb.2020.567268"
pmid: "not yet verified"
evidence_level: cross-sectional
sample_size: "n=44 (28 PPD patients, 16 healthy controls)"
tags: [postpartum-depression, microbiota, 16S-rRNA, dysbiosis, gut-brain-axis]
library_category: signatures
platform: both
condition: "postpartum depression"
karen_brain_primitives: [5, 7, 8]
metals_discussed: []
taxa_discussed: [faecalibacterium, phascolarctobacterium, butyricicoccus, lachnospiraceae, enterobacteriaceae, firmicutes]
key_findings: 
  - "Reduced Firmicutes phylum in PPD patients compared to healthy controls"
  - "Significant depletion of SCFA-producing bacteria: Faecalibacterium, Phascolarctobacterium, Butyricicoccus, Lachnospiraceae"
  - "Increased Enterobacteriaceae family abundance in PPD group"
---

## Key Findings

1. **Firmicutes Depletion** — PPD patients showed significantly lower relative abundance of Firmicutes phylum compared to healthy controls (16S rRNA sequencing, n=44, cross-sectional).

2. **SCFA-Producer Depletion** — Faecalibacterium, Phascolarctobacterium, Butyricicoccus, and Lachnospiraceae were all significantly reduced in PPD patients (cross-sectional, n=28 PPD vs 16 HC).

3. **Enterobacteriaceae Enrichment** — Enterobacteriaceae family showed increased abundance in PPD patients (cross-sectional).

4. **Symptom Correlation** — Levels of Phascolarctobacterium, Lachnospiraceae, Faecalibacterium, and Tyzzerella 3 correlated with severity of depressive symptoms on 17-item Hamilton Depression Rating Scale (17-HAMD) and Edinburgh Postnatal Depression Scale (EPDS).

5. **Hormone Association** — Reduced Lachnospiraceae and Faecalibacterium correlated with lower estradiol (E2) and testosterone levels; elevated prolactin (PRL) in PPD group compared to healthy controls.

## Methods

**Study Design:** Cross-sectional observational study.

**Participants:** 28 PPD patients (age 20-49, diagnosed by psychiatrist per DSM-IV, HAMD score 7-24, onset within 12 months postpartum) and 16 healthy controls (age 20-49, no discomfort, normal health exam, HAMD <7). Participants recruited from Shenzhen Traditional Chinese Medicine Hospital and Shenzhen Maternity & Child Healthcare Hospital, June-October 2019.

**Sample Collection:** Fecal samples collected within 2 days after clinical assessment, stored at −80°C until analysis.

**Sequencing:** V4 region of 16S rRNA gene amplified with barcoded primers (515F/806R). Amplicons sequenced on Illumina MiSeq V3 (PE150, 300 cycles). Raw sequences processed using QIIME 2.0 into Amplicon Sequence Variants (ASVs) at 97% similarity. ASVs assigned to taxa via SILVA database.

**Analysis:** Alpha-diversity measured by Shannon, Faith-PD, observed species, and evenness indices. Beta-diversity measured by UniFrac with principal coordinate analysis (PCoA). Kruskal-Wallis test (α=0.05) for differential abundance analysis. Wilcoxon rank-sum test for biological consistency. LEfSe applied for biomarker identification (LDA threshold=2). Spearman correlation for clinical variables and bacterial taxa.

**Clinical Scales:** 17-HAMD (scores 0-52: <7 no depression, 7-17 mild, 17-24 moderate, >24 severe) and EPDS (scores 0-30: >13 clinically significant depression).

**Hormone Assays:** Serum FSH, LH, PRL, progesterone, estradiol (E2), and testosterone measured via ELISA (RayBiotech) on blood collected after clinical assessment.

**Exclusion Criteria:** Bipolar disorder, schizophrenia, pregnancy, antibiotic/probiotic use within sampling period, hepatitis, significant suicidality (HAMD suicide item >2), anorexia nervosa, dysnoesia/cognitive impairment. Controls also excluded if pregnant or had suicide attempt in prior year.

## Detailed Summary

**Demographics:** No significant differences between groups in age, BMI, education, duration postpartum. PPD group: mean age 33.6±4.27 years, BMI 21.5±2.87. HC group: mean age 32.6±3.98 years, BMI 20.9±2.24. 

**Sequencing Results:** 44 samples yielded 1,765,950 qualified sequences (filtered from 1,852,840 raw). 979 ASVs clustered for analysis. Mean ASVs per sample: 92.70±23.86 (SD).

**α-Diversity:** Observed species appeared higher in HC group than PPD group, though Shannon and other diversity indices not significantly different between groups (Figures 2A-C).

**β-Diversity:** Wilcoxon rank-sum test showed significantly higher sample-based differences in PPD group vs HC group (P=2e-14). PCoA revealed significant difference in bacterial communities between groups (P=0.038).

**Compositional Changes at Genus Level:**
- **Depleted in PPD:** Faecalibacterium, Phascolarctobacterium, Butyricicoccus, Lachnospiraceae
- **Enriched in PPD:** Enterobacteriaceae family
- **Firmicutes phylum:** Lower relative abundance in PPD vs HC

**Hormone Profile:**
- Estradiol (E2): Lower in PPD (P=0.036)
- Testosterone (TESTO): Lower in PPD (P=0.012)  
- Prolactin (PRL): Higher in PPD (P=0.001)
- FSH, LH, progesterone: No significant differences

**Clinical Correlations:** Reduced Faecalibacterium, Phascolarctobacterium, Lachnospiraceae, and Tyzzerella 3 all correlated with higher depressive symptom severity (measured by HAMD and EPDS scores).

**Clinical Characteristics:** Baseline demographic and clinical features comparable between groups (P>0.05). Both groups showed normal nutrition and diet patterns (easy-to-digest foods, balanced vegetables/meat).

## Relevance to WikiBiome

This paper establishes the core microbiota signature for postpartum depression, identifying key SCFA-producing bacteria depleted in the condition. The specific taxa (Faecalibacterium, Lachnospiraceae, Butyricicoccus) are prime targets for entity pages explaining their ecological roles and SCFA production. The Firmicutes depletion parallels findings in major depressive disorder and suggests a disease-class signature. The hormonal associations (low E2/testosterone, high prolactin) connect to the estrobolome concept and nutritional immunity.

## Relevance to Cureva

The specific taxa depletions provide mechanistic targets for intervention. SCFA-producer restoration is a candidate intervention strategy. The symptom correlation with bacterial levels suggests microbiota-based biomarkers for PPD severity assessment. Sex hormone dysregulation (low E2/testosterone despite postpartum status) indicates possible nutritional immunity dysfunction—practitioners may use Lachnospiraceae restoration as a lever for hormone stabilization.

## Contradictions / Tensions

None identified with existing content.

## Open Questions

1. Are the specific Faecalibacterium and Lachnospiraceae OTUs unique to PPD, or shared with major depressive disorder?
2. What is the temporal relationship? Do microbial shifts precede symptom onset or follow it?
3. Which factors drive Enterobacteriaceae enrichment—reduced colonization resistance, specific dietary trigger, or altered nutritional immunity?
4. Does probiotic supplementation (mentioned in introduction) specifically restore Faecalibacterium/Lachnospiraceae levels, or work through other mechanisms?
