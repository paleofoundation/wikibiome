---
title: "Reis 2024 — Study of Excess Manganese Stress Response Highlights the Central Role of Manganese Exporter Mnx for Holding Manganese Homeostasis in Synechocystis sp. PCC 6803"
type: source
created: 2026-04-09
updated: 2026-04-09
authors: [Mara Reis, Sanja Zenker, Prisca Viehoever, Karsten Niehaus, Andrea Braeutigam, Marion Eisenhut]
year: 2024
journal: "Microbiology"
doi: "10.1099/mic.0.001504"
tags: [mismetallation, metal-homeostasis, manganese, manganese-toxicity, iron, Fur, cyanobacteria, Synechocystis, photosystem, oxygen-evolving-complex, Irving-Williams-series, ribosome, protease, chaperone, oxidative-stress]
library_category: metal_homeostasis_bacteria
platform: wikibiome
condition: "manganese excess toxicity in cyanobacteria"
metals_discussed: [iron, manganese]
karen_brain_primitives: [3, 4]
key_findings: ["75% of cellular Mn"]
---

# Why This Paper Matters

This paper provides the first mechanistic dissection of manganese excess toxicity in cyanobacteria, revealing that the Mn stress transcriptome **partly resembles an iron limitation response** even though iron levels are not directly affected. The authors propose that **Fur (ferric uptake regulator) itself becomes mis-metallated by excess Mn**, causing it to erroneously repress iron uptake genes. This is a textbook example of [[mis-metallation]] at the regulatory level: a metal-sensing transcription factor binds the wrong metal, triggering an inappropriate starvation response. The study also shows that cells respond to Mn-dependent mis-metallation by upregulating ribosomes, proteases, and chaperones -- investing in protein quality control to cope with the proteome-wide consequences of incorrect metalation.

# Key Claims

- **Mnx** is the primary Mn exporter in Synechocystis; its knockout (delta-mnx) is highly sensitive to excess Mn (90 uM MnCl2 is lethal) while WT tolerates the same concentration
- Mn excess causes a transcriptional response that **partly resembles iron limitation**: downregulation of PSI and PSII components, phycobilisome genes, and Fe uptake systems
- However, the iron limitation signature genes **isiABDC** were NOT affected by Mn treatment, indicating this is NOT genuine iron starvation but rather **mis-metallation of the iron-sensing regulator Fur by Mn2+**
- The authors propose that **Fur gets partially mis-metallated under Mn excess**: Mn2+ occupying the Fe2+ sensing site on Fur causes it to behave as if iron is sufficient, repressing iron-dependent gene expression even when iron is available
- Cells respond to Mn-dependent mis-metallation stress by **upregulating ribosomes, proteases, and chaperones** -- investing in protein synthesis and quality control to replace mis-metallated proteins
- The delta-mnx mutant additionally shows impaired **energy metabolism** (ATPase, carbon metabolism genes downregulated) and **oxidative stress** response under Mn excess
- **75% of cellular Mn** is stored and bound at the outer membrane or in cupin A; 25% is in the cytoplasm or thylakoid system
- Organisms performing oxygenic photosynthesis have **100-fold higher Mn demand** than non-photosynthetic organisms due to the oxygen-evolving complex (OEC) of Photosystem II
- According to the Irving-Williams series (Mn2+ < Fe2+ < Co2+ < Ni2+ < Cu2+ < Zn2+), Mn binds proteins weakly, meaning correct metalation requires strictly controlled intracellular concentrations

# Methods & Findings

## Growth and Physiology
- WT survives 90 uM MnCl2 and mounts an adequate transcriptional response
- delta-mnx shows pale green phenotype, reduced chlorophyll a, phycocyanin, and carotenoid content under excess Mn
- Growth curves: WT unaffected at 24 h; delta-mnx growth arrested after initial lag phase
- 150 uM MnCl2 is immediately lethal to delta-mnx

## Transcriptomic Analysis (RNA-seq)
- PCA shows Mn treatment (PC1, 44% variance) and mutant status (PC2, 18% variance) as major factors
- delta-mnx has qualitatively different transcriptional response compared to WT under Mn stress
- Both strains show downregulation of PSI, PSII, phycobilisomes under Mn excess
- WT upregulates ribosomal proteins and chaperones as protective response
- delta-mnx additionally shows impaired energy metabolism and oxidative stress signatures

## Evidence for Fur Mis-metallation
- Iron limitation signature (isiABDC operon) NOT induced despite iron-limitation-like transcriptome
- This paradox explained by Mn2+ occupying the Fe2+ sensing site on Fur
- Mn-bound Fur would repress iron uptake genes as if iron were sufficient
- Cells cannot distinguish Mn-Fur from Fe-Fur, leading to inappropriate gene regulation
- Protective response: increased ribosome/protease/chaperone investment to cope with mis-metallated proteome

# Connections

- [[mis-metallation]] -- direct demonstration of Mn2+ mis-metalating the Fur iron sensor, causing inappropriate gene regulation
- [[manganese]] -- Mn excess toxicity mechanism in photosynthetic organisms
- [[iron]] -- Fur mis-metallation by Mn creates a pseudo-iron-sufficiency signal
- [[metal-homeostasis]] -- Mnx exporter as critical gatekeeper of Mn homeostasis
- [[irving-williams-series]] -- Mn's weak binding affinity means excess Mn can displace correctly bound metals
- [[oxidative-stress]] -- Mn excess combined with photosynthesis generates lethal oxidative stress
- [[gene-regulation|ribosome]] -- upregulation of ribosomes as response to mis-metallation-induced protein damage
- [[metal-sensing]] -- Fur as vulnerable target for mis-metallation by competing metals
