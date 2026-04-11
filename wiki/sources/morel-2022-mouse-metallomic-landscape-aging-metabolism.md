---

title: "The mouse metallomic landscape of aging and metabolism"
type: source
created: 2026-04-09
updated: 2026-04-09
authors: [Morel JD, Sauzeat L, Goeminne LJE, Jha P, Williams E, Houtkooper RH, Aebersold R, Auwerx J, Balter V]
journal: Nature Communications
year: 2022
doi: "10.1038/s41467-022-28060-x"
tags: [metallomics, aging, metabolism, copper, zinc, iron, isotope-composition, multi-omics, mouse-model, organ-specific, metabolic-health, OXPHOS, adipogenesis]
platform: wikibiome
---

# The Mouse Metallomic Landscape of Aging and Metabolism

Morel et al. (2022). *Nature Communications* 13:607.

## Overview

This is the first comprehensive analysis of the metallome (16 elements + Cu and Zn isotope compositions) across five mouse organs (liver, brain, kidney, heart, muscle), integrated with the phenome, metabolome, and proteome as a function of age (6, 16, 24 months). The study reveals conserved, reproducible, organ-specific metallomic fingerprints that evolve with aging and demonstrates that the metallome integrates with overlapping biological pathways in the proteome and metabolome -- particularly around mitochondrial function and fatty acid metabolism.

## Key Findings

### Organ-Specific Metallomic Fingerprints
- Each organ has a distinct, reproducible metallomic signature visible through PCA
- Principal component 1 (38.3% variance) separates organs primarily by Cu, Zn, Fe concentrations and isotope compositions
- Liver: highest Cu and Fe; lowest delta-66Zn
- Brain: high Cu; distinctive delta-66Zn
- Kidney: highest Zn; unique isotope composition
- Heart and muscle: intermediate profiles with Ca as distinguishing element

### Aging Effects on the Metallome
- Clear organ signatures are visible, with small shifts with aging
- Most age-dependent changes in metal concentrations in brain: Cu increases (p < 0.05), Fe increases, Co decreases
- Kidney: Rb decreases significantly with age
- Liver: Cu isotope composition (delta-65Cu) is **age-dependent**, extending isotopic aging clocks beyond organic elements
- The aging metallome represents a "conserved and reproducible fingerprint"

### Metallomic Isotopic Aging Clocks
- Liver delta-65Cu is linearly correlated with age -- a **metallomic aging clock**
- These metallomic aging clocks are easier to handle than DNA methylation clocks (formed for a subset of liver not the same animals)
- Cu isotope composition reflects the preferential redistribution of Cu isotopes with aging
- A linear relationship between delta-66Zn and Zn concentration exists between liver, brain, muscle, and heart

### Metals and Metabolic Health
- Fe and delta-65Cu in liver and kidney associate with metabolic traits:
  - **Body weight**: Liver Fe positively correlated (higher Fe in heavier/fatter animals)
  - **Fat percentage**: Liver Fe further correlated
  - **IPGTT AUC** (glucose tolerance): Significant associations with liver delta-65Cu
  - **VO2 increase** (running capacity): Correlates with liver Fe
  - **Muscle ROS**: Correlates with liver Fe
- High liver delta-65Cu is associated with metabolically healthier animals (younger, lighter)
- Indicators of diabetic-like symptoms: iron and delta-65Cu correlate with mitochondrial complex I activity and mtDNA/nuclear DNA ratio

### Multi-Omic Integration
- Metabolite Set Enrichment Analysis (MSEA) and Gene Set Enrichment Analysis (GSEA) performed on liver
- Key converging pathways: amino acids/peptides, organic acids, fatty acid metabolism
- Iron: strong enrichment with OXPHOS and fatty acid metabolism
- Copper: enrichment with long-chain fatty acid metabolism and amino acids
- Network analysis reveals the metallome, metabolome, and proteome converge on mitochondrial function and adipogenesis
- The KEGG pathway "OXPHOS" was a top GSEA enrichment for liver metals

### Metal Correlations
- Rb is the metal most strongly and reproducibly correlated with other elements across organs
- Ca exhibits a unique concentration change with age -- increasing in gastrointestinal organs (stomach, muscle) and decreasing in regulatory organs (kidney, brain)

## Methods

- **Animals**: C57BL/6J mice at 6, 16, and 24 months of age
- **Organs**: Liver, brain, kidney, heart, muscle (5 per age group)
- **Metal analysis**: ICP-AES for major elements (Ca, K, Na, P, S, Mg); ICP-MS for trace elements (Mn, Co, Cu, Zn, Fe, Se, Rb, Mo, Cd)
- **Isotope analysis**: MC-ICP-MS for Cu and Zn isotope compositions
- **Integration**: Metabolomics (Metabolon, Durham NC), proteomics (DIA-SWATH)
- **Statistics**: Spearman Rho correlations, FDR correction, MSEA, GSEA

## Relevance to Wiki

This study establishes the metallome as an overlooked but informative omic layer. The discovery of metallomic aging clocks (liver delta-65Cu) and the convergence of metal concentrations with OXPHOS, adipogenesis, and fatty acid metabolism provides mechanistic links between metal dyshomeostasis and age-related diseases. The organ-specific fingerprints explain why systemic metal measurements (serum/blood) may not capture tissue-level pathology. For the wiki's disease-metal matrix, this paper validates that Fe accumulation and Cu redistribution are fundamental aging processes that intersect with metabolic disease.

## Connections

- [[iron]] -- Liver Fe correlates with metabolic health markers (body weight, fat%, glucose tolerance, muscle ROS)
- [[copper]] -- Liver Cu isotope composition as aging clock; Cu redistribution linked to adipogenesis
- [[zinc]] -- Organ-specific Zn routing; linear delta-66Zn/Zn concentration relationship across organs
- [[aging]] -- Metallomic aging clocks extend isotopic aging beyond organic elements
- [[mitochondria]] -- Metallome converges on OXPHOS and mitochondrial complex I activity
