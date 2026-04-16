---
title: "Shu 2024 — Antibacterial activity of cinnamon essential oil and cinnamaldehyde (CID) in C. elegans / P. aeruginosa model"
type: source
created: 2026-04-14
updated: 2026-04-14
authors: [Chengjie Shu, Ling Ge, Li Zi, Zhuohang Li, Bin Chen, Shengliang Liao, Lu Lu, Qinlin Wu, Xinyi Jiang, Yuhan An, Zongde Wang, Man Qu]
corresponding_author: "Zongde Wang; Man Qu"
corresponding_email: "zongdewang@163.com; man.qu@yzu.edu.cn"
institution: "Jiangxi Agricultural University; Yangzhou University School of Public Health"
year: 2024
journal: "Frontiers in Pharmacology"
doi: "10.3389/fphar.2024.1378434"
evidence_level: in-vitro
sample_size: "C. elegans N2 (in vivo); 5 bacterial strains (in vitro)"
tags: [cinnamon, cinnamaldehyde, essential-oil, antibacterial, Pseudomonas-aeruginosa, Candida-albicans, P38-MAPK, antimicrobial-peptides, MIC]
library_category: interventions
platform: cureva
condition: cross-condition
karen_brain_primitives: [4, 5]
metals_discussed: []
taxa_discussed: [pseudomonas-aeruginosa, escherichia-coli, staphylococcus-aureus, bacillus-subtilis, candida-albicans]
key_findings:
  - "Cinnamaldehyde (CID) composes 86.07% of cinnamon essential oil (CIEO); GC-MS analysis. Most effective inhibition: C. albicans > S. aureus > E. coli > P. aeruginosa."
  - "MIC values: CIEO vs C. albicans = 0.31 mg/mL; CID vs C. albicans = 0.31 mg/mL; CID vs P. aeruginosa = 0.31 mg/mL (superior to CIEO 0.62 mg/mL); CIEO vs S. aureus = 1.25 mg/mL; CID vs S. aureus = 0.62 mg/mL."
  - "Low-dose CIEO/CID (10 mg/L) extended C. elegans lifespan during P. aeruginosa infection via PMK-1 (p38 MAPK)-mediated antimicrobial peptide upregulation (lys-1, lys-8); high-dose (100 mg/L) acts directly on bacteria."
---

## Key Findings

- **Cinnamaldehyde (CID) is 86.07% of cinnamon essential oil (CIEO)** by GC-MS. Additional constituents: 2-methoxycinnamaldehyde (6.25%), α-cubebene (1.04%), diisobutyl phthalate (1.02%), coumarin (0.67%).
- **In vitro MIC data**:
  - *C. albicans* ATCC 10231 — CIEO 0.31 mg/mL; CID 0.31 mg/mL (equal potency)
  - *S. aureus* ATCC 29213 — CIEO 1.25 mg/mL; CID 0.62 mg/mL (CID more potent)
  - *E. coli* ATCC 25922 — CIEO 0.62 mg/mL; CID 1.25 mg/mL
  - *P. aeruginosa* ATCC 27853 — CIEO 0.62 mg/mL; CID 0.31 mg/mL
  - *B. subtilis* ATCC 6633 — CIEO 0.31 mg/mL; CID 0.31 mg/mL
  - MBCs: 2.5 mg/mL for all except *C. albicans* (0.62/0.31 mg/mL).
- **Dual mechanism**: low-dose (10 mg/L) CIEO/CID activates the host PMK-1 p38 MAPK pathway, upregulating antimicrobial peptide genes *lys-1* and *lys-8* (the *C. elegans* equivalent of host defense peptides). At high dose (100 mg/L), direct bactericidal action dominates and AMP gene expression is *suppressed* (because the pathogen burden is already cleared).
- **Antioxidant activity**: CIEO had 5.8× higher reducing power (FRAP) than CID alone — non-CID components of CIEO contribute antioxidant capacity.

## Methods

CIEO purchased from Longqing Agricultural Technology Development. CID purified by vacuum distillation (115-125°C fraction, >99% CID). *C. elegans* N2 infected with *P. aeruginosa* PA14 at L4 stage; locomotion (head thrashes, body bends), lifespan, and bacterial CFU per worm assessed. In vitro inhibition zone diameter and broth MIC/MBC determination.

## Relevance to WikiBiome

- [[cinnamon]] entity/concept — antimicrobial phytochemical with broad spectrum.
- [[cinnamaldehyde]] concept — active compound mechanism, MIC data.
- [[essential-oils]] concept — dual mechanism (direct antimicrobial + host immune modulation).

## Relevance to Cureva

- Intervention candidate for Candida albicans overgrowth signatures (lowest MIC among tested compounds).
- Also effective against Pseudomonas aeruginosa biofilm contexts.
- Triangle evidence supports: I → f (bacterial burden reduced), I → D (extended survival in PA14 model).

## Contradictions / Tensions

- In vitro / nematode data only; human pharmacokinetic barriers to achieving MIC in vivo not addressed.

## Open Questions

- Whether CIEO or purified CID is preferable clinically (CIEO has antioxidant co-benefits; CID has better Gram-negative activity).
- In vivo dosing in mammals and gut tolerance of cinnamaldehyde at antibacterial concentrations.
