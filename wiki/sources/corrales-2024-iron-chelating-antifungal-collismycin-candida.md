---
title: "Corrales 2024 — Characterization of a Selective, Iron-Chelating Antifungal Compound That Disrupts Fungal Metabolism and Synergizes with Fluconazole"
type: source
created: 2026-04-09
updated: 2026-04-09
authors: [Jeanne Corrales, Lucia Ramos-Alonso, Javier Gonzalez-Sabin, Nicolas Rios-Lombardia, Nuria Trevijano-Contador, Henriette Engen Berg, Froydis Sved Skottvoll, Francisco Moris, Oscar Zaragoza, Pierre Chymkowitch, Ignacio Garcia, Jorrit M Enserink, Renato Kovacs]
year: 2024
journal: "Microbiology Spectrum"
doi: "10.1128/spectrum.03009-23"
tags: [mismetallation, metal-homeostasis, iron, iron-chelation, antifungal, Candida-albicans, Candida-glabrata, collismycin, fluconazole-synergy, mitochondrial-dysfunction, ROS, ATP-depletion, Aft1, iron-sulfur-clusters, mis-metallation]
library_category: metal_homeostasis_bacteria
platform: wikibiome
condition: "iron chelation as antifungal strategy"
---

# Why This Paper Matters

This paper demonstrates that selective iron chelation by a bacterial natural product analog (NR-6226C, derived from collismycin A produced by Streptomyces) is a potent antifungal strategy that acts by starving Candida of iron, causing mitochondrial dysfunction, ROS accumulation, and ATP depletion. For the wiki's [[mis-metallation]] framework, the study reveals a remarkable finding: Cu2+ and Zn2+ -- which cannot be bound by NR-6226C -- actually **ameliorate** the iron chelation effect, likely through mis-metallation of iron-binding proteins by non-cognate metals that induces compensatory iron uptake. This directly connects metal chelation, mis-metallation, and antifungal activity. The compound synergizes strongly with fluconazole, offering a potential combination therapy for drug-resistant fungal infections.

# Key Claims

- **NR-6226C** is a collismycin A analog that selectively chelates Fe2+ (forming a 2:1 compound-iron complex via three nitrogen atoms as tridentate chelator) and has potent antifungal activity against wild-type and drug-resistant Candida species
- NR-6226C has a **favorable therapeutic window**: EC50 of ~3 uM against Candida vs. 37-29 uM against human cell lines (HEK-293 and HS-5)
- The analog **ColH** (which cannot chelate iron due to hydroxymethyl substitution) lacks antifungal activity entirely, confirming iron chelation as the mechanism
- **Exogenous FeCl2** rescues Candida growth in the presence of NR-6226C, confirming iron deprivation as the cause of growth inhibition
- **Cu2+ and Zn2+ also ameliorate** NR-6226C activity despite not being bound by the compound -- this suggests that Cu2+ and Zn2+ binding to iron-dependent proteins (mis-metallation) induces a compensatory iron uptake response
- NR-6226C treatment induces an **iron starvation transcriptional response**: upregulation of TRR1 (thioredoxin), HMX1 (heme oxygenase), HBN1 (oxidoreductase), and iron import genes
- **Iron-sulfur cluster enzyme genes** are downregulated by NR-6226C treatment: SDH2 (succinate dehydrogenase), ACO1/2 (aconitase), and ISA1 (Fe-S assembly)
- NR-6226C causes **severe mitochondrial dysfunction**, metabolic reprogramming, and a severe reduction in ATP levels
- NR-6226C **synergizes strongly with fluconazole** against C. albicans, providing inroads for combination therapy that may prevent azole resistance
- The iron starvation response is mediated by **Aft1** transcription factor; aft1-deletion attenuates NR-6226C-induced gene expression in S. cerevisiae

# Methods & Findings

## Selectivity and Mechanism
- 26 collismycin-related compounds screened against Candida panel and human cell lines
- NR-6226C, NR-6226K, and NR-6226V showed best antifungal selectivity
- NR-6226C chosen for further study due to superior solubility and activity against drug-resistant strains
- HPLC and mass spectrometry confirmed selective Fe2+ binding (2:1 stoichiometry)

## Transcriptomic Response
- RNA-seq of C. glabrata treated with 10 uM NR-6226C for 1 hour
- 224 genes upregulated and 220 downregulated (log2 fold change > 0.5, adjusted P < 0.01)
- 58% overlap with transcriptional response to known iron chelator Dp44mT
- GO analysis: upregulated genes enriched for iron starvation and oxidative damage response; downregulated genes enriched for mitochondrial function, Fe-S cluster enzymes, catalytic activity

## Mis-metallation Connection
- CaCl2 and FeCl3 slightly increased EC50 (FeCl3 likely converted to Fe2+ by ferric reductases)
- Cu2+ and Zn2+ significantly increased EC50 despite not being chelated by NR-6226C
- Authors suggest Cu2+ and Zn2+ bind iron-binding proteins (mis-metallation), triggering compensatory Fe uptake that partially overcomes chelation
- This provides in vivo evidence for the functional consequences of metal competition at protein binding sites

## Synergy with Fluconazole
- NR-6226C + fluconazole shows strong synergistic killing of C. albicans
- May reduce or prevent development of azole resistance
- In vivo model: NR-6226C significantly increased survival of Candida-infected Galleria mellonella larvae

# Connections

- [[mis-metallation]] -- Cu2+ and Zn2+ compensating for iron chelation via mis-metallation of iron-binding proteins
- [[iron]] -- selective iron chelation as antifungal mechanism
- [[iron-sulfur-clusters]] -- Fe-S cluster enzyme genes downregulated by iron chelation
- [[oxidative-stress]] -- ROS accumulation from mitochondrial dysfunction under iron starvation
- [[nutritional-immunity]] -- iron chelation mimics host iron withholding strategies
- [[antimicrobial-resistance]] -- synergy with fluconazole to combat azole resistance
- [[metal-homeostasis]] -- Aft1-mediated iron starvation response
- [[copper]] -- Cu2+ mis-metallation of iron-binding proteins as compensatory mechanism
