---
title: "Zheng 2025 — The CueR-Regulated Transporters CopA and CusFABC Coordinate Copper Detoxification in Vibrio parahaemolyticus"
type: source
created: 2026-04-09
updated: 2026-04-09
authors: [Chengkun Zheng, Yimeng Zhai, Mengxian Wang, Zhengzhong Xu, Yunzeng Zhang, Xiaohui Zhou, Xiang Chen, Xinan Jiao]
year: 2025
journal: "Virulence"
doi: "PMC12341060"
tags: [mismetallation, metal-homeostasis, copper, copper-toxicity, copper-efflux, CueR, CopA, CusFABC, vibrio-parahaemolyticus, iron-homeostasis, Fur-regulon, zebrafish, virulence, nutritional-immunity]
library_category: antimicrobial_resistance
platform: wikibiome
condition: "coordinated copper detoxification and iron homeostasis in an enteric pathogen"
---

# Why This Paper Matters

This study reveals that [[copper]] detoxification in the zoonotic pathogen Vibrio parahaemolyticus requires coordinated action of two CueR-regulated export systems -- the P-type ATPase CopA and the RND-type transporter CusFABC -- and that copper stress massively activates the Fur (ferric uptake regulator) regulon. For the [[mis-metallation]] framework, the critical finding is that copper excess triggers upregulation of 64 of 90 genes in the Fur regulon (iron acquisition), indicating that copper intoxication disrupts [[iron]] homeostasis -- likely through Cu+ displacing Fe2+ from iron-sulfur clusters and other iron-binding proteins. The double mutant (delta-copA-delta-cusFABC) is significantly attenuated in colonization of the zebrafish intestine, directly linking copper resistance to virulence and confirming that the host deploys copper as part of [[nutritional-immunity]]. CopA is the primary defense against copper toxicity, while CusFABC provides supplementary protection.

# Key Claims

- **CopA and CusFABC are both regulated by CueR** (MerR-family metalloregulator) and are strongly induced by copper (copA: 43-fold, cusA: 3635-fold by qRT-PCR)
- **Copper treatment activates 172 genes and downregulates 65 genes** (~5% of genome), with CueR and Fur regulons as the most significantly enriched
- **64 of 90 Fur regulon genes are upregulated** by copper excess, indicating copper disrupts iron homeostasis -- consistent with Cu+ targeting iron-sulfur clusters
- **CopA provides the primary copper defense**: delta-copA shows greater sensitivity than delta-cusFABC at all copper concentrations tested
- **The double mutant delta-copA-delta-cusFABC** is significantly attenuated in zebrafish intestinal colonization, while single mutants are not -- demonstrating functional redundancy
- **ICP-MS confirms CopA and CusFABC maintain Cu and Fe homeostasis**: mutants show altered intracellular Cu and Fe levels under copper stress
- **CopA also promotes resistance to pyrithione** (a copper ionophore used as antifouling agent), extending the clinical relevance
- **Cobalt (Co) treatment increases copA expression 4-fold**, suggesting some cross-reactivity of CueR with cobalt

# Methods & Findings

## Transcriptomic Response to Copper (237 DEGs)

| Regulon/Category | Genes Affected | Direction | Significance |
|-----------------|---------------|-----------|-------------|
| CueR regulon (8 genes) | 7 upregulated | Up | Copper efflux activation |
| Fur regulon (90 genes) | 64 upregulated | Up | Iron acquisition activated |
| Siderophore biosynthesis | Multiple | Up | Iron starvation response |
| Iron transport (TonB) | Multiple | Up | Enhanced iron import |
| Heme acquisition | Multiple | Up | Alternative iron source |
| SOD (sodA) | 1 | Up (14.39-fold) | Oxidative stress defense |

## CopA vs. CusFABC Relative Contributions

| Strain | Growth at 0.5 mM Cu | Growth at 1 mM Cu | Colonization (CI) |
|--------|---------------------|-------------------|-------------------|
| WT | Normal | Moderate inhibition | 1.0 (reference) |
| delta-copA | Moderate defect | Severe inhibition | ~1.0 |
| delta-cusFABC | Slight defect | Moderate inhibition | ~1.0 |
| delta-copA-delta-cusFABC | Severe defect | Near-complete inhibition | Significantly reduced |

## Metal Specificity of Copper Efflux

qRT-PCR of copA and cusA after 15-min treatment with various metals (1 mM):
- Cu (CuSO4): copA 43-fold, cusA 3635-fold induction
- Co (CoSO4): copA ~4-fold induction; cusA no change
- Fe, Mn, Zn, Ni: no significant induction of either gene

This confirms CueR is primarily a copper sensor with minor cobalt cross-reactivity.

# Connections

- [[mis-metallation]] -- copper excess disrupts iron homeostasis, activating the entire Fur iron-acquisition regulon
- [[copper]] -- CopA and CusFABC as coordinated copper defense systems
- [[iron]] -- Fur regulon activation indicates copper-induced iron starvation (likely Fe-S cluster damage)
- [[nutritional-immunity]] -- host copper mobilization as antimicrobial defense in zebrafish gut
- [[siderophore]] -- copper stress activates siderophore biosynthesis for iron acquisition
- [[metal-homeostasis]] -- CueR metalloregulator coordinates copper detoxification
- [[virulence]] -- copper resistance required for gut colonization
- [[iron-sulfur-clusters]] -- likely targets of Cu+ explaining iron homeostasis disruption
- [[gut-microbiota]] -- Vibrio as enteric pathogen competing for metals in gut
- [[cobalt]] -- minor CueR cross-reactivity with cobalt
- [[antimicrobial-metals]] -- pyrithione as copper ionophore antimicrobial
