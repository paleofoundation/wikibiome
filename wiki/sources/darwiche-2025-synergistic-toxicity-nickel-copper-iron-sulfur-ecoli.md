---
title: "Darwiche 2025 — The Molecular Basis of the Synergistic Toxicity of Nickel and Copper, Common Environmental Co-Contaminants"
type: source
created: 2026-04-09
updated: 2026-04-09
authors: [Linda Darwiche, Carlos A Rodriguez-Bornot, Rebecca A Ingrassia, Max J Loccisano, Gray Waldschmidt, Jennifer L Goff, Jennifer B Glass]
year: 2025
journal: "Applied and Environmental Microbiology"
doi: "PMC12724342"
tags: [mismetallation, metal-homeostasis, nickel, copper, iron-sulfur-clusters, synergistic-toxicity, sulfur-metabolism, cysteine, histidine, escherichia-coli, environmental-contamination, metal-mixtures]
library_category: metal_homeostasis_bacteria
platform: wikibiome
condition: "synergistic metal toxicity through iron-sulfur cluster disruption"
---

# Why This Paper Matters

This study provides the first mechanistic explanation for why [[nickel]] and [[copper]] are synergistically toxic when co-occurring -- a critically important finding because these metals commonly co-contaminate freshwater environments (log-log correlation R2 = 0.493 across 239 global water bodies). For the [[mis-metallation]] framework, the central discovery is that neither metal alone causes significant toxicity at environmentally relevant concentrations (30 uM Ni, 15 uM Cu), but their combination triggers massive transcriptomic and metabolomic disruption centered on [[iron-sulfur-clusters]]. The ISC Fe-S cluster assembly machinery genes are upregulated only during combined metal exposure, and deletion mutants of ISC components are growth-impaired only under the combination. This reveals an emergent property of metal mixtures -- synergistic toxicity not predictable from individual metal effects -- with 70% of differentially expressed genes uniquely affected by the combination. The paper explicitly names "metalloenzyme mismetallation (i.e., insertion of the incorrect metal cofactor)" as a mechanism of metal ion toxicity.

# Key Claims

- **Ni and Cu are synergistically toxic** in E. coli at environmentally relevant concentrations (30 uM Ni + 15 uM Cu) where neither metal alone causes significant growth defects
- **70% of differentially expressed genes (360/512)** are uniquely affected by the combined treatment, not by either metal alone
- **Iron-sulfur cluster assembly (ISC) machinery** genes are upregulated only during combined metal exposure; ISC deletion mutants confirm requirement for survival under combined stress
- **Sulfur starvation response is activated** during combined exposure, consistent with increased sulfur demand for Fe-S cluster repair/biosynthesis
- **Cysteine synthase (cysK) deletion** impairs growth only under combined metal exposure, linking sulfur amino acid metabolism to metal stress defense
- **ROS are NOT significantly elevated** during Ni/Cu co-exposure under aerobic conditions -- the synergistic toxicity operates primarily through Fe-S cluster disruption rather than oxidative stress
- **Histidine supplementation rescues growth** under combined metal stress because histidine chelates both Ni2+ and Cu2+, reducing free metal bioavailability
- **Histidine biosynthesis genes (his operon)** are uniquely upregulated during combined exposure, and intracellular histidine is elevated

# Methods & Findings

## Environmental Co-occurrence of Ni and Cu

Analysis of 239 global rivers and lakes (1972-2017) reveals a significant positive log-log correlation: [Ni] = 2.107[Cu]^0.784 (R2 = 0.493, P = 1e-15). At environmentally relevant concentrations (1 ug/L Cu = 0.016 uM; 1 ug/L Ni = 0.017 uM), both metals are present but individually non-toxic to microorganisms.

## Transcriptomic Analysis

| Category | Ni alone | Cu alone | Ni+Cu combined | Combined-unique |
|----------|---------|---------|---------------|----------------|
| Total DEGs | ~50 | ~100 | 512 | 360 (70%) |
| ISC Fe-S assembly | Not affected | Not affected | Upregulated | Yes |
| Sulfur assimilation | Not affected | Affected | Strongly upregulated | Partially |
| Histidine biosynthesis | Not affected | Not affected | Upregulated | Yes |
| OxyR regulon | Minimal | Minimal | Minimal | -- |

## Fe-S Cluster Disruption as Central Mechanism

Both Cu+ and Ni2+ can displace Fe2+ from iron-sulfur clusters, but the combination produces synergistic effects:
- Cu+ has high affinity for thiolate sulfur ligands in Fe-S clusters
- Ni2+ can occupy Fe2+ binding sites in Fe-S cluster assembly scaffolds
- Combined exposure overwhelms the ISC repair/assembly capacity
- The cell responds by upregulating ISC genes and sulfur assimilation for new cysteine/Fe-S synthesis

## Metabolomic Evidence

182 metabolites (35.6% of total) were uniquely differentially abundant only under combined treatment. Many differentially abundant metabolites shared between Cu alone and the combination (41.4%), suggesting Cu drives the metabolomic response more than Ni. The PCA clearly separates combined treatment from all single-metal exposures.

## Genetic Validation

Keio collection deletion mutants tested by spot dilution assay:
- **ISC mutants** (iscA, iscS, iscU): growth impaired only under Ni+Cu combination
- **cysK** (cysteine synthase): growth impaired only under combination
- **Histidine supplementation**: rescues growth under combination by chelating metals extracellularly

# Connections

- [[mis-metallation]] -- Ni2+ and Cu+ displacing Fe2+ from iron-sulfur clusters as synergistic toxicity mechanism
- [[iron-sulfur-clusters]] -- primary target of combined Ni/Cu toxicity; ISC assembly as essential defense
- [[nickel]] -- environmental co-contaminant; Ni2+ alone minimally toxic at 30 uM
- [[copper]] -- Cu+ targets thiolate ligands in Fe-S clusters; Cu alone drives metabolomic changes
- [[iron]] -- Fe displaced from Fe-S clusters by both Ni and Cu
- [[sulfur-metabolism]] -- sulfur starvation response activated to supply cysteine for Fe-S cluster repair
- [[metal-homeostasis]] -- emergent synergistic effects not predictable from single-metal studies
- [[escherichia-coli]] -- model organism for metal mixture toxicity studies
- [[histidine]] -- metal-chelating amino acid that rescues combined metal toxicity
- [[oxidative-stress]] -- notably NOT the primary mechanism of Ni/Cu synergistic toxicity
- [[environmental-metal-exposure]] -- freshwater Ni/Cu co-contamination threatens microbial ecosystem services
