---
title: "Zhou 2020 — Fecal Microbiota Changes in Patients With Postpartum Depressive Disorder"
type: source
created: 2026-04-09
updated: 2026-04-16
authors: [Yumei Zhou, Chen Chen, Haibo Yu, Zhuoxin Yang]
corresponding_author: "Zhuoxin Yang"
corresponding_email: "001188@gzucm.edu.cn"
institution: "Fourth Clinical Medical College, Guangzhou University of Chinese Medicine, Shenzhen, China"
year: 2020
journal: "Frontiers in Cellular and Infection Microbiology"
doi: "10.3389/fcimb.2020.567268"
pmid: "not yet verified"
evidence_level: case-control
sample_size: "n=57 (39 PPD, 18 healthy controls); fecal n=44 (28 PPD, 16 HC)"
tags: [postpartum-depression, gut-microbiota, 16S-rRNA, dysbiosis, fecal-microbiota, sex-hormones, biomarkers, faecalibacterium, lachnospiraceae, enterobacteriaceae, firmicutes]
library_category: signatures
platform: wikibiome
condition: "postpartum-depression"
karen_brain_primitives: [1, 5, 7]
metals_discussed: []
taxa_discussed: [faecalibacterium, phascolarctobacterium, butyricicoccus, lachnospiraceae, enterobacteriaceae, megasphaera, tyzzerella, acidaminococcaceae, eubacterium]
key_findings:
  - "Firmicutes phylum significantly lower in PPD patients (74.57% in PPD vs. 88.91% in HC); Proteobacteria and Actinobacteria lower in PPD group"
  - "Faecalibacterium, Phascolarctobacterium, Butyricicoccus, and Lachnospiraceae significantly depleted in PPD; Enterobacteriaceae family markedly increased"
  - "EPDS scores correlated positively with Dialister, Clostridium sensustricto.1, Senegalimassilia; negatively with Butyricicoccus, Lachnospiraceae UCG001, and Faecalibacterium (all P<0.05)"
keystone: false
---

## Key Findings

- **Firmicutes phylum depletion**: 74.57% relative abundance in PPD vs. 88.91% in HC group. *Actinobacteria* and *Bacteroidetes* also relatively lower in PPD.
- **Depleted genera in PPD** (LDA>2, P<0.05 by LEfSe): *Faecalibacterium* (most dominant genus in HC; 19.79% HC vs. 9.22% PPD, P=0.003), *Phascolarctobacterium* (P=0.022), *Butyricicoccus* (P=0.024), and *Megasphaera* (P=0.047). These are all SCFA-producing butyrate producers.
- **Enriched in PPD**: *Enterobacteriaceae* family markedly elevated. *Escherichia/Shigella* enriched in PPD group.
- **EPDS severity correlations**: EPDS positively correlated with *Dialister*, *Clostridium sensustricto.1*, *Enterococcus*; negatively with *Butyricicoccus*, *Lachnospiraceae UCG001*, *Faecalibacterium*, *Tyzzerella.3* at genus level.
- **17-HAMD severity correlations**: 17-HAMD positively correlated with *Escherichia/Shigella*; negatively with *Butyricicoccus*, *Lachnospiraceae UCG001*, and *Tyzzerella.3*.
- **Sex hormone associations**: Multiple genera significantly correlated with estradiol (E2), progesterone (PROG), prolactin (PRL), LH, and testosterone levels in Spearman correlation analysis — suggesting the gut microbiome interacts with the hormonal changes driving postpartum mood.

## Methods

Case-control study. Participants recruited June–October 2019 at Shenzhen Traditional Chinese Medicine Hospital and Shenzhen Maternity & Child Healthcare Hospital. PPD diagnosed via 17-HAMD (≥7) and EPDS at approximately 112 days postpartum (mean 142 days HC, 112 days PPD). Blood (serum hormones) and fecal samples collected simultaneously. 44 fecal samples analyzed (28 PPD, 16 HC) by 16S rRNA sequencing of V3-V4 gene region (Illumina MiSeq). 1,765,950 raw sequences filtered to 979 qualified ASVs; 92.70 mean sequences/sample. Beta-diversity by weighted UniFrac. LEfSe for differential taxa. Spearman correlation for hormone-bacteria associations. **Exclusions**: antibiotics within 1 month, steatohepatitis, hypertension, diabetes, IBS, bowel cancer.

## Detailed Summary

This is the foundational observational study characterizing fecal microbiome dysbiosis in clinical PPD.

**SCFA depletion as core pattern**: The four most significantly depleted taxa — *Faecalibacterium*, *Phascolarctobacterium*, *Butyricicoccus*, and *Lachnospiraceae* — are all major butyrate and SCFA producers. Butyrate supports colonocyte energy, reduces gut permeability, and modulates systemic inflammation. Its depletion in PPD creates conditions for increased LPS translocation and systemic inflammatory signaling, consistent with the neuroinflammatory hypothesis of depression.

**Sex hormone-microbiome axis**: The significant correlations between gut bacteria and serum E2, PROG, PRL, and testosterone levels establish bidirectional connections between the estrobolome and postpartum mood disorders. *Faecalibacterium* was negatively correlated with PRL; multiple *Lachnospiraceae* members were negatively correlated with LH and TESTO. This positions the PPD microbiome as responsive to the dramatic hormonal changes of the postpartum period, not merely a passenger.

**Comparison with MDD**: The PPD microbiome pattern (depleted Firmicutes/Faecalibacterium, increased Enterobacteriaceae) largely parallels MDD findings in the literature, supporting a shared dysbiosis architecture between postpartum and major depressive disorder, while the specific hormonal associations are unique to PPD.

## Relevance to WikiBiome

- Primary observational evidence for [[postpartum-depression]] entity's microbiome section.
- Connects to [[faecalibacterium]] entity page (depleted in PPD; correlates with EPDS severity).
- Connects to [[lachnospiraceae]] entity page (depleted; correlated with hormone levels).
- Supports [[dysbiosis]] concept page with PPD-specific microbiome signature data.

## Relevance to Cureva

- Primitive 5 (Two-Sided Ecological Engineering): Faecalibacterium/Lachnospiraceae restoration as target alongside pathogen suppression.
- Primitive 7 (Estrobolome and Hormone Recirculation): Sex hormone-bacteria correlations imply beta-glucuronidase activity from enriched taxa may affect estrogen recirculation postpartum.
- Provides the baseline dysbiosis signature for building a PPD microbiome signature page.

## Contradictions / Tensions

- Small sample (44 fecal samples); cross-sectional design cannot confirm causality.
- PPD assessed at ~4 months postpartum (well beyond standard 6-week window); some participants may be in recovery phase.
- No dietary data; confounding from diet cannot be excluded.

## Open Questions

- Do the SCFA-depletion patterns precede PPD onset or result from it?
- What is the mechanistic link between sex hormone levels and specific bacterial genera?
- Can restoring butyrate-producing bacteria prevent PPD or accelerate recovery?
