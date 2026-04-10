---
title: "Association between infants' serum levels of 26 metals and gut microbiota: a hospital-based cross-sectional study in China"
type: source
created: 2026-04-09
updated: 2026-04-09
authors: [Yan X, Qiu J, Huang RW, Peng XM, Xiang ST, Zhao KY, Peng YL, Zhuang Y, Peng Y, Zhuang Y, Ma Y, Wu MY, Yang F]
journal: Frontiers in Microbiology
year: 2025
tags: [infants, metals-mixture, gut-microbiota, arsenic, copper, cadmium, manganese, Mendelian-randomization, BKMR, metal-interactions, alpha-diversity, preterm]
doi: "10.3389/fmicb.2025.1669475"
---

# Key Claims

- Barium (Ba) and [[Arsenic Toxicity|arsenic]] (As) were positively associated with the Chao1 index (alpha diversity) in infant gut microbiota, while chromium (Cr), antimony (Sb), cobalt (Co), copper (Cu), lanthanum (La), praseodymium (Pr), and uranium (U) showed negative associations
- Six significant antagonistic metal-metal interactions were identified (Cr-W, Cr-La, Tl-As, As-La, As-Pr, La-Pr), alongside two synergistic interactions (Sb-Pr and Sb-U)
- Bayesian kernel machine regression (BKMR) identified manganese (Mn) as a key contributor to Burkholderia-Caballeronia-Paraburkholderia abundance (PIP = 0.535), with As driving Ralstonia abundance (PIP = 0.886)
- Cu was the primary driver of Clostridium_sensu_stricto_1 abundance (PIP = 0.867), with synergistic Mn-Cu and Ba-Cu interactions
- [[Cadmium Toxicity|Cadmium]] was significantly associated with increased Acinetobacter abundance, a finding previously unreported in humans but supported by murine models

# Methods/Findings

- **Study type**: Hospital-based cross-sectional study of 342 infants at Hunan Children's Hospital, China (2018-2019)
- **Metal measurement**: 26 metals/metalloids measured in serum by ICP-MS (Cr, Mn, Ni, Cd, Sn, Sb, Ba, W, Hg, Tl, Pb, Fe, Co, Cu, Zn, As, Se, Rb, Sr, Mo, La, Ce, Pr, Th, U)
- **Microbiome**: 16S rRNA V4-V5 region; DADA2 pipeline; RDP classifier
- **Statistical methods**: GLR models, elastic net regression (ENR), BKMR, weighted quantile sum (WQS) regression, PERMANOVA
- **Alpha diversity**: Tl identified as key predictor for Shannon and Simpson indices; Ba and As for Chao1 (Figure 1A)
- **Beta diversity**: As exposure significantly associated with Bray-Curtis dissimilarity (R2 ~1.4%), though not maintained in stratified analyses
- **Preterm subgroup effects**: Associations remained significant in both preterm (N=191) and very preterm (N=56) subgroups; Cr, Mn, Ba, Pb, Cu, As, La, Th significantly associated with several genera in preterm infants
- **Metal-metal interaction table (Table 2)**: 6 antagonistic and 2 synergistic interactions affecting Chao1 index
- **Genus-metal associations (Figure 3)**: Cladogram showing distinct metal-genus relationships stratified by preterm status

# Connections

- Novel mixture exposure approach advances beyond single-metal studies in [[Gut Microbiome and Metal Exposure]]
- BKMR methodology provides causal inference framework relevant to [[Mendelian randomization]] approaches in microbiome research
- Infant vulnerability to metal-microbiome disruption connects to developmental windows discussed in [[eggers-2023-prenatal-lead-gut-microbiome-childhood]]
- Cu-Clostridium_sensu_stricto_1 finding complements [[abdel-azim-2018-heavy-metals-vfas-methanococcus]] copper toxicity mechanisms
- Metal-metal antagonistic interactions (As-La, As-Pr) suggest protective combinations relevant to [[Environmental Exposures]] mitigation
- Cd-Acinetobacter association connects to broader [[Cadmium Toxicity]] microbiome effects
