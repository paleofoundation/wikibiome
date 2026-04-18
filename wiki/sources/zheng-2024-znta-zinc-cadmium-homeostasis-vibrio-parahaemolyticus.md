---
title: "Zheng 2024 — ZntA Maintains Zinc and Cadmium Homeostasis and Promotes Oxidative Stress Resistance and Virulence in Vibrio parahaemolyticus"
type: source
created: 2026-04-09
updated: 2026-04-09
authors: [Chengkun Zheng, Yimeng Zhai, Jun Qiu, Mengxian Wang, Zhengzhong Xu, Xiang Chen, Xiaohui Zhou, Xinan Jiao]
year: 2024
journal: "Gut Microbes"
doi: "10.1080/19490976.2024.2327403"
tags: [mismetallation, metal-homeostasis, zinc, cadmium, nickel, ZntA, ZntR, P-type-ATPase, Vibrio-parahaemolyticus, iron-homeostasis, oxidative-stress, virulence, zebrafish, food-borne-pathogen, metal-efflux]
library_category: copper_zinc_toxicity
platform: wikibiome
condition: "zinc/cadmium homeostasis in Vibrio"
evidence_level: animal-model
metals_discussed: [cadmium, iron, nickel, zinc]
taxa_discussed: [escherichia-coli, vibrio]
karen_brain_primitives: [3, 4]
---

# Why This Paper Matters

This paper provides a detailed mechanistic study of how the food-borne pathogen V. parahaemolyticus uses the ZntA P-type ATPase to maintain zinc and cadmium homeostasis while simultaneously contributing to oxidative stress resistance and virulence. For the wiki's [[mis-metallation]] framework, the key finding is that ZntA-mediated zinc homeostasis is **required for growth under iron-restricted conditions** -- connecting zinc efflux to iron availability in a pathogenically relevant context. The paper also demonstrates that ferrous iron supplementation rescues the growth of ZntA-deficient bacteria under excess Zn, Ni, or Cd, revealing a previously unknown metal cross-talk where iron can compensate for zinc homeostasis defects. This is critical for understanding how pathogens navigate the metal-restricted environments imposed by host [[nutritional-immunity]].

# Key Claims

- **ZntA** is a Zn-transporting P-type ATPase and the most highly upregulated gene in V. parahaemolyticus grown under zinc-replete conditions
- ZntA expression is induced ~19-fold by Zn, ~18-fold by Cu, ~8-fold by Co and Ni, and ~19-fold by Cd -- but NOT by Fe(II) or Mn, indicating specificity for divalent metal toxicity
- ZntA promotes growth under **excess Zn, Ni, and Cd** by maintaining intracellular Zn and Cd homeostasis through efflux
- The ZntA deletion mutant (delta-zntA) accumulates **significantly higher intracellular Zn** under zinc stress, confirming its role as a Zn exporter
- **Iron-restricted conditions** severely impair delta-zntA growth -- this growth defect is attributable to **Zn homeostasis disturbance** (rescued by the Zn chelator TPEN)
- **Ferrous iron (Fe2+) supplementation** at just 0.25 mM almost completely restores growth of delta-zntA under excess Zn, Ni, or Cd conditions -- revealing functional cross-talk between Fe and Zn homeostasis
- ZntA contributes to **oxidative stress resistance**: delta-zntA is hypersensitive to H2O2 combined with Zn or Ni, but not H2O2 alone
- ZntA contributes to **virulence** in a zebrafish infection model: delta-zntA shows attenuated pathogenicity
- **ZntR** positively regulates zntA expression by binding its promoter -- confirmed by qRT-PCR, mutagenesis, and beta-galactosidase assays

# Methods & Findings

## Metal Specificity of ZntA
- Growth assays with WT, delta-zntA, and complemented strains across 6 metals
- Zn, Ni, and Cd inhibited delta-zntA growth in a concentration-dependent manner
- Fe(II), Mn, Cu, and Co supplementation did not produce significant growth differences
- This metal specificity profile differs from some ZntA orthologs (e.g., E. coli ZntA also exports Pb2+)

## Iron-Zinc Cross-Talk
- delta-zntA grows poorly under iron restriction (150 uM 2,2'-dipyridyl) compared to WT
- Growth was restored by the zinc chelator TPEN (10 uM), indicating that zinc toxicity -- not direct iron requirement -- underlies the iron restriction phenotype
- Fe2+ supplementation rescued delta-zntA growth under Zn, Ni, and Cd excess at doses as low as 0.25 mM
- Mechanism likely involves Fe2+ competing with or compensating for Zn2+ at metalloprotein active sites, preventing zinc mis-metallation

## Oxidative Stress Connection
- delta-zntA showed no sensitivity to H2O2 alone (75 uM)
- Combined Zn + H2O2 or Ni + H2O2 completely inhibited delta-zntA growth
- This suggests that zinc/nickel overload and oxidative stress are synergistically toxic when Zn efflux is compromised
- Mechanism may involve zinc-mediated displacement of iron from Fe-S clusters, releasing free Fe for Fenton chemistry

## Virulence
- Zebrafish infection model: delta-zntA showed reduced virulence compared to WT and complemented strains
- ZntA is therefore a potential virulence factor, linking metal homeostasis to pathogenicity

# Connections

- [[mis-metallation]] -- Fe2+ rescue of Zn excess suggests competitive metal replacement at enzyme active sites
- [[zinc]] -- ZntA as primary Zn efflux pump in V. parahaemolyticus
- [[iron]] -- iron supplementation compensates for zinc homeostasis defects
- [[metal-homeostasis]] -- ZntR/ZntA regulatory circuit as core zinc efflux system
- [[oxidative-stress]] -- synergistic toxicity of zinc excess + H2O2
- [[virulence-factors|virulence]] -- ZntA required for full virulence in zebrafish model
- [[nutritional-immunity]] -- host iron restriction exacerbates zinc homeostasis defects in pathogens
- [[cadmium]] -- ZntA dual function in Zn and Cd efflux
