---
title: "Haberman 2014 — Pediatric Crohn disease patients exhibit specific ileal transcriptome and microbiome signature"
type: source
created: 2026-04-14
updated: 2026-04-14
authors: [Yael Haberman, Timothy L. Tickle, Phillip J. Dexheimer, Mi-Ok Kim, Dora Tang, Rebekah Karns, Robert N. Baldassano, Joshua D. Noe, Joel Rosh, James Markowitz, Melvin B. Heyman, Anne M. Griffiths, Wallace V. Crandall, David R. Mack, Susan S. Baker, Curtis Huttenhower, David J. Keljo, Jeffrey S. Hyams, Subra Kugathasan, Thomas D. Walters, Bruce Aronow, Ramnik J. Xavier, Dirk Gevers, Lee A. Denson]
corresponding_author: "Lee A. Denson"
corresponding_email: "lee.denson@cchmc.org"
institution: "Cincinnati Children's Hospital Medical Center; Broad Institute; Harvard School of Public Health"
year: 2014
journal: "Journal of Clinical Investigation"
doi: "10.1172/JCI75436"
evidence_level: prospective-cohort
sample_size: "n=359 treatment-naive pediatric subjects (43 Ctl, 45 UC, 37 cCD, 28 UC2, 26 cCD2, 90 iCD, 180 All iCD)"
tags: [crohns, pediatric, ibd, ileal-microbiome, transcriptome, duox2, apoa1, proteobacteria, risk-cohort]
library_category: signatures
platform: both
condition: "crohns-disease"
karen_brain_primitives: [4, 5, 9]
metals_discussed: [iron]
taxa_discussed: [enterobacteriaceae, pasteurellaceae, veillonellaceae, fusobacteriaceae, erysipelotrichaceae, bacteroidales, clostridiales, proteobacteria]
key_findings:
  - "Ileal DUOX2 expression elevated and APOA1 depressed at diagnosis of ileal CD (iCD); pattern specific to CD and preserved in iCD vs UC and cCD (colon-only CD). Signature persists even in non-inflamed ileum of iCD"
  - "iCD ileal microbiome increased in Enterobacteriaceae, Pasteurellaceae, Veillonellaceae, Fusobacteriaceae and decreased in Erysipelotrichaceae, Bacteroidales, Clostridiales — linking CD-specific taxa to oxidative stress and Th17 polarization via DUOX2 activation"
  - "Regression model combining APOA1 gene expression + microbial abundance predicted 6-month steroid-free remission better than clinical factors alone — first demonstration that CD-specific host/microbe profile at diagnosis identifies ileum as primary inductive site for CD"
---

# Haberman 2014 — Pediatric CD ileal transcriptome + microbiome

## Key Findings

- **DUOX2 up, APOA1 down defines ileal CD.** In the RISK pediatric treatment-naive cohort (n=359), whole-transcriptome RNA-seq of ileal biopsies at diagnosis showed increased DUOX2 (dual oxidase, generates H₂O₂) and decreased APOA1 (apolipoprotein A-I) expression specifically in ileal CD (iCD). The signature distinguishes iCD from both UC and colon-only CD (cCD) and persists even in macroscopically non-inflamed ileum of iCD patients.
- **Ileal microbiome shifts align with transcriptome.** 16S rRNA sequencing of mucosal samples from 180 treatment-naive iCD (78 ileo-colonic with DU-, 102 colon-only) showed increased abundance of Enterobacteriaceae, Pasteurellaceae, Veillonellaceae, Fusobacteriaceae and decreased Erysipelotrichaceae, Bacteroidales, Clostridiales in iCD. Microbial axis correlated strongly with DUOX2/APOA1 transcriptional shift. Antibiotics use before biopsy amplified the microbial signature.
- **Integrated host+microbe model predicts remission.** A regression model combining APOA1 gene expression and microbial abundance accurately predicted 6-month steroid-free remission, outperforming clinical factors alone. This was a landmark demonstration (supported by subsequent replication) that CD-specific host/microbe profiles at diagnosis identify the ileum as the primary inductive site of CD and may direct prognostic and therapeutic approaches.

## Methods

RISK cohort: 1,276 pediatric IBD patients at diagnosis across 28 North American sites (2008–2012). From these, 359 treatment-naive subjects had ileal biopsies with RNA-seq. 180 had mucosal 16S rRNA sequencing. Montreal classification applied. Regression models built to predict 6-month steroid-free remission.

## Relevance to WikiBiome

- Supports [[crohns-disease]] and [[pediatric-crohns]] entity pages.
- Informs [[oxidative-stress|duox2]] concept page — NADPH oxidase family enzyme producing H₂O₂ as innate antimicrobial defense; elevated DUOX2 in iCD suggests ongoing oxidative host response to Enterobacteriaceae/Pasteurellaceae burden.
- Feeds [[cardiovascular-disease|apoa1]] concept/entity — reduced APOA1 in ileal CD links lipid homeostasis and anti-inflammatory HDL function to disease.
- Supports the thesis that [[enterobacteriaceae]], [[pasteurellaceae]], [[fusobacteriaceae]] are the trio enriched in CD ileum.

## Relevance to Cureva

- **Strong [[crohns-disease-signature]] layer 2 (taxonomic) and layer 4 (ecological features) evidence.** Enterobacteriaceae + Pasteurellaceae + Veillonellaceae + Fusobacteriaceae bloom with simultaneous Erysipelotrichaceae/Bacteroidales/Clostridiales depletion = the classic iron-rich hypoxic ileal niche in CD.
- **Clinical intelligence: APOA1+microbe model predicts remission response.** Could inform Cureva clinical outputs — pre-treatment DUOX2/APOA1 RNA-seq + microbiome panel may stratify patients for EEN vs anti-TNF vs biologic pathway.
- Primitive 4 (Enterobacteriaceae iron dependencies), primitive 5 (restore lost Clostridiales SCFA producers), primitive 9 (DUOX2-driven ROS indicates oxygenation-rich niche for facultative anaerobes) all active.

## Open Questions

- Does metal exposure (prenatal Pb, dietary Cd) modulate DUOX2/APOA1 baseline expression?
- Can pre-treatment Fusobacteriaceae abundance predict anti-TNF response independently of APOA1?
