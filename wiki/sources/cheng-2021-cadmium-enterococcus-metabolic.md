---
title: Cadmium stress triggers significant metabolic reprogramming in Enterococcus faecium CX 2-6
type: source
created: 2026-04-09T00:00:00.000Z
updated: 2026-04-09T00:00:00.000Z
authors:
  - Cheng X
  - Yang B
  - Zheng J
  - Wei H
  - Feng X
  - Yin Y
journal: Computational and Structural Biotechnology Journal
year: 2021
tags:
  - cadmium
  - Enterococcus-faecium
  - metabolic-reprogramming
  - heavy-metal-resistance
  - RNA-seq
  - pan-genome
  - ncRNA
  - gene-expression
  - nucleotide-metabolism
  - ribosome
doi: 10.1016/j.csbj.2021.10.021
platform: wikibiome
keystone: true
keystone_criteria_met:
  - 1
  - 2
  - 3
  - 4
why_keystone: "Demonstrates cadmium-triggered metabolic reprogramming in Enterococcus—downregulation of nucleotide metabolism, upregulation of protein translation and transport systems. This paper reveals how cadmium exposure selects for metabolically crippled but persistent bacteria, a mechanism WikiBiome uses to explain dysbiosis persistence despite antibiotic or antimicrobial intervention."
---

# Cadmium Stress Triggers Significant Metabolic Reprogramming in Enterococcus faecium CX 2-6

## Key Claims

- *[[Enterococcus]] faecium* strain CX 2-6 (isolated from heavy-metal-contaminated farmland) can tolerate [[cadmium]] but with significantly slower growth
- Cadmium treatment causes massive transcriptional reprogramming: 1,152 differentially expressed genes (47% of the genome) falling into three distinct expression groups
- The primary cellular response involves downregulation of nucleotide metabolism (DNA replication inhibited) and upregulation of ribosome/protein translation, carbohydrate transport, and anion transport
- Pan-genome analysis of 138 *E. faecium* genomes shows that most DEGs responding to cadmium are in the core genome, suggesting a conserved stress response
- 55 noncoding RNAs (ncRNAs) were differentially expressed under cadmium stress, including novel asRNAs and igRNAs located on the opposite strand of transposases

## Methods/Findings

- **Organism**: *E. faecium* CX 2-6, isolated from a rural rice paddy in Jiangxi Province, China (heavy metal contaminated farmland)
- **Genome**: Fully assembled using PacBio long-read sequencing; complete chromosome (2,559,204 bp) + complete plasmid (168,866 bp); 2,475 protein-coding genes + 209 plasmid genes
- **Experimental Conditions**: Control (Cd0), 1 mmol cadmium (Cd1), 5 mmol cadmium (Cd5); RNA-seq with three replicates each

 - G1 (310 genes): Downregulated by Cd; enriched for nucleotide metabolism (DNA replication inhibition consistent with slower growth)
 - G2 (658 genes): Upregulated at low Cd; enriched for ribosome-related GO functions (increased protein translation)
 - G3 (184 genes): Highly upregulated at high Cd; enriched for carbohydrate transport, anion transport, and increased exopolysaccharide production
- **Key DEG Clusters**: Physically linked gene clusters on chromosome
 - Cluster 1: Pyrimidine metabolism enzymes (downregulated)
 - Cluster 2: Exopolysaccharide (EPS) production genes (upregulated)
 - Cluster 3: PEP-dependent phosphotransferase system (upregulated)
 - Cluster 4: Pyrimidine metabolism (downregulated)
- **Transporter Response**: P-type ATPase transporters and carbohydrate/anion transporters are highly upregulated, suggesting cells pump Cd out and use carbohydrates/anions for sequestration and neutralization
- **Pan-genome**: 869 core gene families contain most DEGs; CX 2-6 has unique prophage-associated gene cluster activated by cadmium
- **Published Cd Response Genes**: 12 of 17 previously published *E. faecium* Cd response genes have homologs in CX 2-6, and 7/8 are also DEGs in this study

## Connections

- Provides genomic and transcriptomic detail on cadmium resistance complementing the phenotypic metal resistance survey in [[rebelo-2021-enterococcus-metal-antibiotic-resistance]]
- The metabolic reprogramming (shift from nucleotide metabolism to carbohydrate transport and EPS production) parallels the glycolysis/TCA cycle shifts seen in [[libbey-2018-diet-microbiota-eae]] during disease states
- Cadmium efflux via P-type ATPases connects to the CDF/HME systems characterized in [[alquethamy-2021-acinetobacter-cadmium-resistance]]
- The EPS upregulation under cadmium stress is a mechanism for extracellular metal sequestration, analogous to the siderophore-based metal chelation in [[braud-2010-siderophores-pseudomonas-metal-tolerance]]
- *Enterococcus* metal tolerance is relevant to understanding how gut commensals handle [[dietary-nickel-exposure]] and other [[heavy-metals]] in the GI tract
- Metal homeostasis disruption in streptococci and enterococci broadly connects to [[akbari-2022-metal-homeostasis-streptococci]]
