---
title: "Ma 2025 — ZntR Is a Critical Regulator for Zinc Homeostasis and Involved in Pathogenicity in Riemerella anatipestifer"
type: source
created: 2026-04-09
updated: 2026-04-09
authors: [Hongmeng Ma, Mengying Wang, Yizhou Yao, Shutong Zhang, Mingshu Wang, Dekang Zhu, Renyong Jia, Shun Chen, Xinxin Zhao, Qiao Yang, Ying Wu, Shaqiu Zhang, Juan Huang, Bin Tian, Xumin Ou, Di Sun, Yu He, Zhen Wu, Ling Zhang, Yanling Yu, Anchun Cheng, Mafeng Liu]
year: 2025
journal: "Microbiology Spectrum"
doi: "PMC11960050"
tags: [mismetallation, metal-homeostasis, zinc, zinc-toxicity, ZntR, metalloregulator, riemerella-anatipestifer, poultry-pathogen, oxidative-stress, virulence, manganese, Irving-Williams-series]
library_category: copper_zinc_toxicity
platform: wikibiome
condition: "zinc homeostasis regulation and mismetallation in an avian pathogen"
---

# Why This Paper Matters

This study identifies ZntR as a critical zinc homeostasis regulator in the Flavobacteriales pathogen Riemerella anatipestifer, a major cause of serositis in ducks and waterfowl. For the [[mis-metallation]] framework, the paper explicitly describes zinc toxicity through "protein mismetallation" -- excess zinc binding to non-homologous metal proteins and causing dysfunction. The delta-zntR mutant accumulates intracellular zinc and becomes hypersensitive to zinc but not to other metals (Mn, Cu, Co, Ni), demonstrating zinc-specific regulatory control. Critically, the delta-zntR mutant shows increased resistance to H2O2 and NaOCl oxidants, consistent with the principle that elevated zinc competitively inhibits iron in Fenton reactions, paradoxically reducing oxidative damage. This connects zinc accumulation to both toxicity (through mismetallation of Mn-dependent enzymes) and protection (through inhibition of Fe-dependent ROS generation). ZntR deletion also affects 35 genes with zinc metabolism functions and attenuates colonization in ducklings, linking zinc homeostasis to virulence.

# Key Claims

- **ZntR (MerR-family) regulates zinc homeostasis** by controlling expression of the zinc importer ZupT; delta-zntR shows zinc accumulation and hypersensitivity to excess zinc
- **Zinc toxicity occurs through protein mismetallation** -- explicitly named as mechanism -- where excess zinc binds non-homologous metal proteins
- **delta-zntR is zinc-specific**: hypersensitive to Zn2+ but not to Mn2+, Cu2+, Co2+, or Ni2+
- **Zinc accumulation increases oxidant resistance**: delta-zntR survives H2O2 and NaOCl better than WT, consistent with zinc competitively inhibiting iron-dependent Fenton reactions
- **ZntR controls 489 DEGs** (291 up, 198 down) at the transcriptome level and 367 differentially abundant proteins at the proteome level, with 35 genes specifically related to zinc metabolism
- **ZntR inhibits ZupT transcription**: ZupT is a ZIP-family zinc importer whose derepression in delta-zntR leads to excessive zinc uptake
- **delta-zntR is attenuated in duckling colonization** in blood, liver, spleen, and brain tissues, demonstrating zinc homeostasis is required for virulence

# Methods & Findings

## Zinc-Specific Metal Sensitivity

| Metal | WT sensitivity | delta-zntR sensitivity | Interpretation |
|-------|---------------|----------------------|---------------|
| Zn2+ (0.4 M ZnSO4) | Normal | Hypersensitive | ZntR-regulated Zn homeostasis disrupted |
| Mn2+ (1 M MnCl2) | Normal | Normal | Not ZntR-regulated |
| Cu2+ (0.2 M CuCl2) | Normal | Normal | Not ZntR-regulated |
| Co2+ (0.2 M CoCl2) | Normal | Normal | Not ZntR-regulated |
| Ni2+ (1 M NiCl2) | Normal | Normal | Not ZntR-regulated |

## Intracellular Metal Content (ICP-MS)

delta-zntR shows significantly higher intracellular zinc in both normal TSB and zinc-supplemented (0.2 mM ZnSO4) conditions. No changes in Mn, Cu, Fe, Co, or Ni levels under normal conditions or zinc supplementation.

## Oxidative Stress Paradox

delta-zntR shows significantly higher survival against 8 mM H2O2 and 0.25% NaOCl compared to WT. This is explained by zinc's Irving-Williams series position: elevated intracellular Zn2+ competitively inhibits Fe2+ binding to biomolecules that catalyze Fenton reactions, reducing ROS generation. This represents a form of "protective mismetallation" where zinc displacement of iron from redox-active sites paradoxically protects against oxidative damage.

## Transcriptomic and Proteomic Changes

Among 35 zinc metabolism-related genes affected:
- 10 TonB-dependent transporters upregulated (metal acquisition)
- 6 TonB-dependent transporters downregulated
- 7 TonB-dependent receptors (siderophore/iron) downregulated
- 1 ZIP family transporter (ZupT) identified as key ZntR target
- 6 efflux RND transporter components upregulated
- 1 P-type ATPase (ZntA homolog) upregulated

# Connections

- [[mis-metallation]] -- zinc toxicity explicitly through protein mismetallation of non-Zn proteins
- [[zinc]] -- ZntR/ZupT regulatory axis controlling zinc import
- [[metalloregulator]] -- ZntR as MerR-family zinc sensor; zinc-specific sensitivity
- [[iron]] -- zinc competitively inhibits iron-dependent Fenton chemistry
- [[manganese]] -- zinc impairs manganese uptake through mismetallation of Mn substrate-binding proteins
- [[oxidative-stress]] -- paradoxical oxidant resistance from zinc accumulation via Fe displacement
- [[Irving-Williams-series]] -- zinc's high binding affinity explains competitive displacement of Fe and Mn
- [[Fenton-chemistry]] -- zinc inhibits Fe-catalyzed ROS generation
- [[virulence]] -- zinc homeostasis required for R. anatipestifer colonization
- [[metal-homeostasis]] -- ZntR coordinates zinc sensing with import/export regulation
- [[nutritional-immunity]] -- host zinc fluctuations during infection
