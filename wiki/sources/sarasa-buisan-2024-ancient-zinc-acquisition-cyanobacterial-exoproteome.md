---
title: "Sarasa-Buisan 2024 — An Ancient Bacterial Zinc Acquisition System Identified from a Cyanobacterial Exoproteome"
type: source
created: 2026-04-09
updated: 2026-04-09
authors: [Cristina Sarasa-Buisan, Jesus A G Ochoa de Alda, Cristina Velazquez-Suarez, Miguel Angel Rubio, Guadalupe Gomez-Baena, Maria F Fillat, Ignacio Luque]
year: 2024
journal: "PLOS Biology"
doi: "10.1371/journal.pbio.3002546"
tags: [mismetallation, metal-homeostasis, zinc, Zur, exoproteome, ZepA, cyanobacteria, Anabaena, ancient-evolution, zinc-acquisition, metallochaperone, COG0523, TonB-dependent-transporter, nutritional-immunity, LBCA]
library_category: copper_zinc_toxicity
platform: wikibiome
condition: "ancient zinc acquisition systems"
---

# Why This Paper Matters

This paper discovers a previously unknown zinc acquisition system -- ZepA -- that has been conserved for **billions of years** across distant bacterial lineages, dating back potentially to the Last Bacterial Common Ancestor (LBCA). For the wiki's [[mis-metallation]] framework, the finding is profound: it demonstrates that zinc scarcity was a defining selective pressure since the earliest bacterial evolution (consistent with the low zinc availability in Archean oceans), and that the Zur zinc uptake regulator may have been one of the **first members of the FUR family to evolve**. The paper also reveals that the exoproteome -- proteins secreted into the extracellular milieu -- plays a previously underappreciated role in metal acquisition, expanding our understanding beyond intracellular metallostasis to extracellular metal scavenging.

# Key Claims

- **ZepA** (encoded by all3515 in Anabaena sp. PCC 7120) is a zinc-binding exoprotein that mediates zinc uptake and is highly enriched in the exoproteome of a Zur-deletion mutant
- ZepA represents a **primordial zinc acquisition system** conserved in a handful of species from distant bacterial lineages for billions of years -- phylogenetic analysis places its origin near the LBCA
- **Zur may have been one of the first FUR-family regulators to evolve**, consistent with zinc scarcity in early Earth ecosystems (Archean eon had minimal zinc bioavailability)
- The Anabaena exoproteome contains **347 identified proteins**; 285 of these were previously unknown as exoproteome components
- Six proteins were significantly **overrepresented** in the Zur-deletion mutant exoproteome, including ZepA, TBDTs (TonB-dependent transporters), and the ZnuA periplasmic subunit of the znuABC zinc transporter
- ZepA expression is controlled by **two overlapping Zur-binding sites** in its promoter region, with Zur binding at Kd ~2.5 nM -- demonstrating tight zinc-responsive regulation
- The exoproteome is enriched for proteins with **signal peptides for Sec or Tat secretion pathways** (131 of 347 proteins), suggesting active secretion rather than cell lysis
- Zinc chelation by TPEN strongly induces ZepA expression, confirming zinc-responsive regulation

# Methods & Findings

## Exoproteome Analysis
- Quantitative DIA (SWATH-MS) proteomics comparing wild-type and Zur-deletion mutant exoproteomes
- Good reproducibility: Pearson's R2 = 0.960 (WT) and 0.789 (Zur mutant) between replicates
- 65% of identified proteins predicted to be secreted or peripherally localized
- Only 9% of the Anabaena genome encodes signal peptides, yet secreted proteins are highly enriched in the exoproteome

## ZepA Characterization
- Western blot confirmed ZepA (All3515) presence in extracellular medium of Zur mutant but not wild-type
- ZepA was NOT detected in cell extracts of the Zur mutant, ruling out cell lysis as source
- Northern blot showed the all3515 transcript is highly induced by zinc chelation (TPEN treatment)
- Two proximal promoters (TSS1 and TSS2) drive all3515 expression; both have overlapping ZBSs that block RNA polymerase when Zur is bound
- EMSA confirmed high-affinity Zur binding to the all3515 upstream region

## Evolutionary Analysis
- ZepA homologs found in phylogenetically distant bacteria including Firmicutes, Proteobacteria, and Cyanobacteria
- Conservation across billions of years suggests strong selective pressure to maintain this zinc acquisition system
- The finding supports the hypothesis that zinc was limiting in early Earth environments and that zinc homeostasis systems were among the earliest metal regulatory networks

## Other Zur-Regulated Exoproteins
- Alr3242 and Alr4028-4029: TonB-dependent transporters of the outer membrane (potential zincophore importers)
- All0833: periplasmic subunit (ZnuA) of the zinc-specific ZnuABC transporter
- All4336: S10 ribosomal protein (zinc-independent paralog)
- All1691: FurA ferric uptake regulator -- suggesting a Zur-Fe-Zn regulatory crosstalk

# Connections

- [[mis-metallation]] -- zinc scarcity drives evolution of specialized acquisition systems; mis-metallation risk increases under zinc limitation
- [[zinc]] -- novel exoprotein-based zinc acquisition pathway
- [[metal-homeostasis]] -- Zur as master regulator of zinc homeostasis in cyanobacteria
- [[nutritional-immunity]] -- host zinc restriction targets these ancient acquisition systems
- [[metallochaperone]] -- ZepA as extracellular zinc-binding protein analogous to intracellular chaperones
- [[iron]] -- FurA regulation by Zur suggests iron-zinc regulatory crosstalk
- [[COG0523]] -- previously identified Zur-regulated metallochaperones in same organism
- [[ocean-biogeochemistry]] -- zinc scarcity in open ocean drives cyanobacterial zinc acquisition strategies
