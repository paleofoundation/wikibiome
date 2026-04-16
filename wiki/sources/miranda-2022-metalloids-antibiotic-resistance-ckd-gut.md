---
title: "Miranda 2022 — Characterization of Metal(loid)s and Antibiotic Resistance in Bacteria of Human Gut Microbiota from CKD Subjects"
type: source
created: 2026-04-09
updated: 2026-04-16
authors: [María V. Miranda, Fernanda C. González, Osvaldo S. Paredes-Godoy, Mario A. Maulén, Claudio C. Vásquez, Waldo A. Díaz-Vásquez]
corresponding_author: "Waldo A. Díaz-Vásquez"
corresponding_email: "waldo.diaz@gmail.com"
institution: "Molecular Microbiology and Food Research Laboratory, Facultad de Ciencias para el Cuidado de la Salud, Universidad San Sebastián, Santiago, Chile"
year: 2022
journal: "Biological Research"
doi: "10.1186/s40659-022-00389-z"
pmid: "not yet verified"
evidence_level: cross-sectional
sample_size: "n=12 (stage 3 CKD patients vs. healthy controls)"
tags: [chronic-kidney-disease, CKD, heavy-metals, antibiotic-resistance, arsenic, cadmium, lead, mercury, gut-microbiota, metal-resistance-genes, cadA, arsC, Proteobacteria, Firmicutes, co-resistance, CKDu]
library_category: heavy-metals
platform: wikibiome
condition: "chronic-kidney-disease"
karen_brain_primitives: [1, 3, 4]
metals_discussed: [cadmium, arsenic, lead, mercury]
taxa_discussed: [pseudomonas, janibacter, escherichia, bacillus, enterococcus, proteobacteria, firmicutes]
key_findings:
  - "cadA3k and arsC metal resistance genes detected in stage 3 CKD gut bacteria but not healthy controls"
  - "Pathogen-related Firmicutes and Proteobacteria (Pseudomonas, Escherichia/Shigella, Bacillus) predominate in CKD stage 3 gut under metal pressure"
  - "CKD gut bacteria show co-resistance: antibiotic resistance genes (strB, dhfr1, floR, acrB, arr2) co-occur with metal(loid) resistance genes (cadA3k, cadA2k, arsC)"
keystone: false
---

# Miranda 2022 — Metal(loid)s and Antibiotic Resistance in Bacteria of CKD Gut Microbiota

## Key Findings

- **cadA3k** (cadmium resistance) and **arsC** (arsenic resistance) genetic markers detected in CKD stage 3 gut bacteria — absent or reduced in healthy controls [[miranda-2022-metalloids-antibiotic-resistance-ckd-gut]]
- Bacteria from CKD stage 3 patients are **co-resistant** to both metal(loid)s and antibiotics: lead- and arsenic-resistant bacteria showed simultaneous resistance to gentamicin, cefazolin, ceftazidime, and ciprofloxacin
- **Pathogen-enriched community**: *Pseudomonas* spp., *Janibacter* spp., *Escherichia/Shigella* spp., and *Bacillus* spp. isolated from CKD stage 3 fecal samples in metal-selective media; *Enterococcus* spp. also showed resistance
- **Stage-dependent resistance pattern**: different metal and antibiotic resistance genes detected at each CKD stage — cadA3k/arsC in stage 3; acrB/arr2/cadA3k/cadA2k/arsC at stage 4; qnrB1/floR/dhfr1/merA at stage 5
- At stage 5 (pre-dialysis), resistance gene diversity **decreases**, reflecting collapse of Firmicutes:Bacteroidetes ratio under uremic/dialytic conditions
- **H₂S-producing pathways** (Desulfovibrionales context): *Pseudomonas* spp. produce p-cresyl sulfate, a uremic toxin that promotes CKD progression
- Gene marker for Cd/As resistance: **cadA2k** detected in stages 3 and 4 CKD, not healthy controls — suggesting either Cd-mediated selection pressure or co-selection via antibiotic use
- **dhfr1** gene (dihydrofolate reductase, present in some *E. coli* strains) detected in both healthy and CKD groups — a marker of UTI-associated *E. coli* strains, consistent with elevated UTI incidence in CKD patients

## Methods

- **Population**: Stage 3, 4, and 5 CKD patients from Chilean Family Health Centers; healthy controls without CKD; n=12 per stage analysis
- **Metal(loid) exposure**: arsenic (As), lead (Pb), mercury (Hg), cadmium (Cd) in tap water — endemic to the second region of Chile (mining industry)
- **Bacterial isolation**: YCFAm agar with ½ MIC of *E. coli* for As, Pb, Hg, or Cd under aerobic conditions
- **Antibiotic resistance**: Kirby-Bauer method with clinical breakpoints (CLSI); discs for gentamicin, ampicillin, cefazolin, ceftazidime, ciprofloxacin, gentamicin at ½ MIC metal(loid) concentration
- **Genetic analysis**: 16S rRNA amplicon sequencing (V4, Illumina MiSeq); qPCR for metal resistance genes (cadA3k, cadA2k, arsC, arsA, merA, pbrA) and antibiotic resistance genes (strB, dhfr1, floR, acrB, arr2, qnrB1, tetA, ermB)
- **Primer design**: Consensus sequences from MEGARes, CARD, and GenBank databases; validated by in silico PCR (UGENE); qPCR using 2× Mastermix without ROX (ABM)
- **Taxonomic classification**: DADA2 v1.12.1 pipeline; SILVA database; operational taxonomic units ≥0.2% relative abundance and ≥1000 reads per taxon

## Detailed Summary

This study is the **first to characterize metal(loid) resistance genetic markers in the gut microbiota of CKD patients at different disease stages**. The Chilean context is critical: the study region has endemic arsenic and lead contamination from mining — an industrial exposure equivalent to the CKDu agricultural-metal contexts documented elsewhere.

**The co-resistance finding is ecologically important**: In the gut of CKD stage 3 patients, bacteria that survive metal(loid) exposure simultaneously carry antibiotic resistance genes. This is consistent with the co-selection hypothesis — selective pressure from environmental metals selects for bacteria that carry both metal resistance genes and antibiotic resistance genes on the same mobile genetic elements (plasmids, integrons). For CKD patients who receive frequent antibiotics (UTI management is a significant clinical burden in CKD), this creates a compounding resistance problem.

**Stage 3 CKD community profile under metal pressure:**
*Pseudomonas* spp., *Escherichia/Shigella* spp., *Bacillus* spp. predominate. These are Proteobacteria and pathogen-related Firmicutes — not the SCFA-producing commensal Lachnospiraceae/Ruminococcaceae that decline in CKD (Yasuno 2024 [[yasuno-2024-dysbiosis-gut-microbiota-ckd-stages]]). The implication: metal pressure selects for the exact pathogenic community profile that drives uremic toxin production and gut barrier disruption.

**Stage 5 CKD (end-stage):**
Resistance gene diversity paradoxically decreases — only qnrB1, floR, dhfr1 for antibiotics and cadA2k/merA for metals remain. This reflects the dramatic loss of microbial diversity in ESRD, where the uremic milieu selects for a small number of metabolically active strains.

**The Cd resistance geography**: Cadmium accumulates in crops and water from mining waste. The cadA genes detected here are the same family of cadmium-transporting ATPases found in metal-adapted environmental microbes, now appearing in gut bacteria of CKD patients — suggesting dietary Cd is selecting for cadmium-resistant gut bacteria as a secondary ecological consequence of nephrotoxic Cd exposure.

## Relevance to WikiBiome

- Directly connects the metallomics story (Cd/As nephrotoxicity) to the gut microbiome story in CKD — a WikiBiome-exclusive integration
- Identifies specific genetic markers (cadA3k, arsC) as potential biomarkers of metal-driven gut dysbiosis in CKD patients
- Demonstrates that the gut microbiome can function as a **biosensor** of metal exposure history in CKD patients
- UTI susceptibility increase in CKD is linked to pathogen enrichment under metal selection pressure

## Relevance to Cureva

- Co-resistance pattern is a STOP signal: antibiotics commonly used for CKD patients' UTIs (ciprofloxacin, ceftazidime, ampicillin) face resistance in the very bacteria enriched by metal exposure in those patients
- Cadmium-targeted microbiome interventions (Cd-sequestering probiotics, dietary Cd reduction) could reduce cadmium-driven co-resistance selection

## Contradictions / Tensions

- Small sample size (n=12 per CKD stage); single institution in Chile
- The decrease in resistance genes at stage 5 CKD may reflect overall microbial diversity collapse rather than loss of resistance capacity — needs validation with metagenomics

## Open Questions

- Do Cd/As resistance genes in the gut microbiome predict faster CKD progression (stage transition)?
- Is co-selection of antibiotic and metal resistance reversible with Cd exposure reduction?
- Does the cadA3k resistance gene abundance correlate with blood or urine Cd levels in CKD patients?
