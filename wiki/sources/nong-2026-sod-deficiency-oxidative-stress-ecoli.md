---
title: "Nong 2026 — Despite Inducing Antioxidant Regulation, Superoxide Dismutase Deficiency Makes E. coli More Sensitive to Hydrogen Peroxide"
type: source
created: 2026-04-09
updated: 2026-04-09
authors: [Yuejuan Nong, Jiaxin Qiao, Yixuan Zhao, Jingjing Wang, Li Xin, Weijie Wang, Weiwei Zhu]
year: 2026
journal: "Frontiers in Microbiology"
doi: "PMC13010160"
tags: [mismetallation, metal-homeostasis, superoxide-dismutase, oxidative-stress, iron-sulfur-clusters, manganese, iron, escherichia-coli, metabolic-reprogramming, siderophore]
library_category: metal_homeostasis_bacteria
platform: wikibiome
condition: "bacterial oxidative stress and metal cofactor biology"
---

# Why This Paper Matters

This study directly illuminates the metabolic consequences of losing the two primary [[superoxide-dismutase]] enzymes in [[escherichia-coli]] -- SodA ([[manganese]]-dependent) and SodB ([[iron]]-dependent). For the [[mis-metallation]] framework, this is critical because SOD enzymes are among the most important metalloenzymes that protect against oxidative damage, and their metal cofactors (Mn vs. Fe) determine catalytic function. When SOD is absent, superoxide attacks [[iron-sulfur-clusters]], releasing free iron that fuels Fenton chemistry and hydroxyl radical generation. The paper reveals that SOD-deficient cells undergo massive metabolic reprogramming -- suppressing oxidative phosphorylation, upregulating the pentose phosphate pathway (PPP), and stimulating [[siderophore]] (enterobactin) synthesis -- yet paradoxically become more sensitive to hydrogen peroxide. This demonstrates that [[metal-homeostasis]] disruption cascades into proteome-wide metabolic rewiring that cannot fully compensate for the loss of metal-dependent antioxidant defenses.

# Key Claims

- **SodA/SodB double deletion** induces SoxSR-mediated oxidative stress response, upregulating catalase KatE and organic peroxidases Tpx and BtuE
- **SOD deficiency suppresses oxidative phosphorylation** by reducing NADH dehydrogenase (Complex I) and succinate dehydrogenase expression, lowering superoxide production at the source
- **PPP is globally upregulated** in SOD-deficient cells, producing NADPH as an antioxidant and feeding aromatic amino acid synthesis (histidine, tryptophan, phenylalanine)
- **Enterobactin biosynthesis** is significantly increased -- all Ent proteins are upregulated, linking SOD deficiency to enhanced iron acquisition via [[siderophore]] production
- **Despite antioxidant upregulation**, SOD-deficient cells are more sensitive to H2O2 killing in a concentration-dependent manner, revealing that preemptive stress responses do not confer additional protection
- **Fatty acid degradation pathway** operates independently of PPP but contributes to antioxidant capacity; combined loss of zwf and fadE amplifies H2O2 sensitivity

# Methods & Findings

## Proteomic Analysis of SOD-Deficient E. coli

The study used CRISPR-constructed sodA-sodB double-deletion mutants in E. coli K-12 BW25113, with proteomics performed during exponential growth (OD450 = 0.15-0.2). Key proteomic changes:

| Pathway | Direction | Key Proteins | Functional Consequence |
|---------|-----------|-------------|----------------------|
| Oxidative phosphorylation | Suppressed | NuoABC, SdhABC decreased | Reduced superoxide production |
| PPP | Upregulated | Zwf, TktA, TalAb increased | NADPH production, antioxidant |
| Histidine synthesis | Upregulated | His proteins increased | PPP-derived antioxidant substrates |
| Aromatic amino acid synthesis | Upregulated | Trp, PheA increased | Tryptophan, phenylalanine elevated |
| Enterobactin synthesis | Upregulated | All Ent proteins increased | Enhanced iron acquisition |
| Fatty acid degradation | Upregulated | FadE increased | Acetyl-CoA from beta-oxidation |
| TCA cycle | Mixed | GltA increased, SdhABC/FumAB decreased | Glyoxylate cycle exacerbated |

## Iron-Sulfur Cluster Vulnerability

Superoxide directly attacks iron-sulfur clusters, releasing free iron ions. SOD deficiency therefore elevates the labile [[iron]] pool, creating conditions for Fenton reactions (Fe2+ + H2O2 -> Fe3+ + OH- + OH radical). This connects directly to [[mis-metallation]] because the released iron can mismetalate other metalloproteins, and the cell responds by upregulating enterobactin to recapture iron -- a compensatory response that highlights the centrality of iron homeostasis.

## Genetic Validation of Antioxidant Pathways

- Deletion of hisD or pheA (disrupting histidine/phenylalanine synthesis) increased H2O2 sensitivity of SOD mutants
- Deletion of fadE (blocking fatty acid degradation) increased sensitivity independently
- Combined deletion of zwf + fadE amplified sensitivity further, confirming both PPP and fatty acid degradation contribute to antioxidant defense
- Supplemental histidine and phenylalanine did not rescue H2O2 sensitivity, suggesting the antioxidant effect comes from intermediate metabolic pathways, not the final amino acid products

# Connections

- [[mis-metallation]] -- SOD metal cofactor identity (Mn in SodA, Fe in SodB, Cu/Zn in SodC) determines catalytic activity; loss releases metals from iron-sulfur clusters
- [[iron-sulfur-clusters]] -- primary targets of superoxide attack, releasing labile iron
- [[iron]] -- Fenton chemistry from released Fe2+ drives hydroxyl radical toxicity
- [[manganese]] -- SodA is Mn-dependent; Mn can substitute for Fe in some enzymes as a mis-metallation defense
- [[oxidative-stress]] -- comprehensive view of bacterial oxidative stress response hierarchy
- [[siderophore]] -- enterobactin upregulation links oxidative stress to iron acquisition
- [[escherichia-coli]] -- model organism for metal-dependent stress responses
- [[metal-homeostasis]] -- SOD deficiency disrupts the entire metal-dependent redox balance
- [[pentose-phosphate-pathway]] -- NADPH production as primary antioxidant strategy
- [[labile-metal-pool]] -- superoxide-mediated iron release increases the labile iron pool
- [[nutritional-immunity]] -- bacterial iron acquisition responses relevant to host-pathogen metal competition
