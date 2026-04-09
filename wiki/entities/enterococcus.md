---
title: Enterococcus
type: entity
created: 2026-04-09
updated: 2026-04-09
sources: [cheng-2021-cadmium-enterococcus-metabolic.md, rebelo-2021-enterococcus-metal-antibiotic-resistance.md]
tags: [pathogen, cadmium, mercury, arsenic, copper, antibiotic-resistance, co-selection, hospital-acquired, VRE, mobile-genetic-elements]
---

# Enterococcus

A genus of Gram-positive bacteria (primarily *E. faecalis* and *E. faecium*) that exemplifies the **metal-antibiotic resistance co-selection crisis**. Enterococci carry diverse metal tolerance genes for mercury, arsenic, copper, and cadmium on the **same mobile genetic elements** as antibiotic resistance genes -- meaning environmental metal pollution directly drives the evolution of antibiotic-resistant hospital pathogens. A 120-year survey reveals accelerating co-evolution of metal and drug resistance since the 1990s.

## Metal-Dependent Biology

### Cadmium-Triggered Metabolic Reprogramming
Cadmium stress causes **massive transcriptional reorganization** in *E. faecium* [[[cheng-2021-cadmium-enterococcus-metabolic]]]:

- **1,152 differentially expressed genes** (47% of the genome) under cadmium exposure.
- **Three distinct response groups**:
  - **G1 (310 genes)**: Downregulated -- nucleotide metabolism and DNA replication inhibited (growth arrest).
  - **G2 (658 genes)**: Upregulated at low Cd -- ribosome and protein translation increased (stress response machinery).
  - **G3 (184 genes)**: Highly upregulated at high Cd -- carbohydrate transport, anion transport, and **exopolysaccharide (EPS) production**.
- **EPS production** under cadmium stress is a key defense: the extracellular polysaccharide matrix sequesters cadmium ions before they can enter the cell, analogous to siderophore-based metal chelation in [[pseudomonas-aeruginosa]].
- **P-type ATPase transporters** highly upregulated for active cadmium efflux.

### Metal Efflux Systems
- **P-type ATPases**: primary cadmium and copper efflux pumps.
- **CDF (cation diffusion facilitator) family**: zinc and cadmium export.
- These efflux systems are shared with related genera: parallels the CzcD system in [[streptococcus-pneumoniae]] [[[akbari-2022-metal-homeostasis-streptococci]]].

## Metal-Antibiotic Resistance Co-Selection

### The 120-Year Survey
A landmark study of 381 isolates spanning 1900-2019 reveals the co-evolution of metal and antibiotic resistance [[[rebelo-2021-enterococcus-metal-antibiotic-resistance]]]:

- **Metal tolerance genes surveyed**: arsA (arsenic), merA (mercury), tcrB (copper).
- **Prevalence**: arsA most frequent (82% of MeT-carrying isolates); merA 97% prevalence; tcrB less common.
- **13 phylogenetic variants** of ArsA protein and **6 variants** of MerA distributed across diverse ecological contexts (human clinical, animal, food, aquatic).
- **Temporal acceleration**: co-occurrence of metal tolerance and antibiotic resistance genes increased dramatically since the 1990s, correlating with increased antimicrobial and metal use in agriculture and medicine.

### Co-Occurrence on Mobile Elements
- Metal tolerance and antibiotic resistance genes **systematically co-occur** on conjugative plasmids [[[rebelo-2021-enterococcus-metal-antibiotic-resistance]]]:
  - **vanA** (vancomycin resistance) near mercury/arsenic tolerance regions.
  - **tet(M)** (tetracycline), **erm(B)** (macrolide), **aac6'-Ie-aph2''-Ia** (aminoglycoside) co-located with MeT genes.
  - Flanked by IS elements (IS110, IS256, IS200/605) enabling mobilization.
  - Associated with conjugation genes (TraC, TraE, TraG) for horizontal transfer.
- This means: **selecting for metal resistance automatically selects for antibiotic resistance** and vice versa.

### Cross-Phylum Gene Exchange
- Metal resistance gene variants are shared between *Enterococcus* and distant taxa including *Lactobacillus malefermentans*, *Streptococcus*, and *Staphylococcus* [[[rebelo-2021-enterococcus-metal-antibiotic-resistance]]].
- Overlapping ecosystems (gut, food production, hospital, agricultural) enable gene flow across bacterial phyla.
- This has implications for [[staphylococcus-aureus]] MRSA co-resistance evolution and even for probiotic safety (probiotic Lactobacillus may acquire resistance determinants from Enterococcus).

## Nutritional Immunity Context

- Enterococci are not classic "metal-dependent virulence" pathogens like urease-producers -- their metal story is about **resistance and co-selection** rather than metal-dependent enzymes.
- However, metal homeostasis is still critical: manganese is required for superoxide dismutase, and zinc for multiple metalloenzymes.
- Host nutritional immunity (calprotectin-mediated Zn/Mn sequestration) affects Enterococcal survival at infection sites.
- The cadmium metabolic reprogramming demonstrates that Enterococci have sophisticated metal stress responses that likely also engage during host-imposed metal challenges.

## Disease Associations

- **Vancomycin-resistant Enterococcus (VRE)**: a top hospital-acquired infection threat; vanA on same mobile elements as metal resistance.
- **Endocarditis**: *E. faecalis* is a leading cause of infective endocarditis.
- **Urinary tract infections**: common hospital-acquired UTI pathogen.
- **Bacteremia**: especially in ICU patients, post-surgical, immunocompromised.
- **Intra-abdominal/pelvic infections**: as part of polymicrobial infections.
- **Wound infections**: surgical site infections.

## Connection to Environmental Metal Exposure

- **Agricultural metal use**: copper and zinc as growth promoters in livestock feed; arsenic historically used in poultry production. These directly select for metal-tolerant Enterococci carrying antibiotic resistance genes.
- **Hospital environments**: copper-surfaced fittings intended to reduce hospital infections may paradoxically select for copper-tolerant (and therefore antibiotic-resistant) Enterococci.
- **Food chain**: metal-resistant Enterococci from animal production enter the human food chain, transferring resistance genes to human gut flora.
- **Wastewater/sewage**: convergence point for antibiotic and metal residues, driving co-selection in environmental Enterococcus populations.
- *Enterococcus* is proposed as a **bioindicator** for metal pollution across diverse environments [[[rebelo-2021-enterococcus-metal-antibiotic-resistance]]].

## Connections

- [[metal-dependent-virulence]] -- metal-antibiotic co-resistance on shared mobile elements; Mn-SOD for oxidative defense
- [[cadmium]] -- triggers massive metabolic reprogramming; cadmium resistance genes co-selected with antibiotic resistance
- [[mercury]] -- merA mercury resistance genes on same plasmids as vanA
- [[arsenic]] -- arsA arsenic resistance is the most prevalent metal tolerance gene
- [[copper]] -- tcrB copper resistance; hospital copper surfaces may drive co-selection
- [[staphylococcus-aureus]] -- parallel metal-antibiotic co-resistance in MRSA; shared gene exchange network
- [[streptococcus-pneumoniae]] -- related metal homeostasis machinery; shared CDF pump family
- [[pseudomonas-aeruginosa]] -- EPS-mediated extracellular metal sequestration parallels siderophore strategy
- [[nutritional-immunity]] -- host metal restriction affects Enterococcal infection dynamics
