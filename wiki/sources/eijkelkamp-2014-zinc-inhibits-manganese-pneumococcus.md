---
title: "Eijkelkamp et al. 2014 — Extracellular Zinc Competitively Inhibits Manganese Uptake in Streptococcus pneumoniae"
type: source
created: 2026-04-14
updated: 2026-04-14
authors: [Bart A. Eijkelkamp, Jacqueline R. Morey, Stephanie L. Neville, Aimee Tan, Victoria G. Pederick, Nerida Cole, Prashant Singh, Chaille T. Webb, Roxana Fulber, Renato Morona, James C. Paton, Christopher A. McDevitt]
year: 2014
journal: "PLoS ONE"
doi: "10.1371/journal.pone.0089427"
evidence_level: in-vitro
sample_size: "N/A"
tags: [zinc, manganese, competitive-inhibition, pneumococcus, psaa, superoxide-dismutase, metal-ratio]
library_category: mechanistic-insights
platform: both
condition: "cross-condition"
karen_brain_primitives: [2, 3, 4]
metals_discussed: [zinc, manganese, iron]
taxa_discussed: [streptococcus-pneumoniae]
key_findings:
  - "Zn competitively inhibits Mn uptake via PsaA (EC50=30.2 uM at 1 uM Mn)"
  - "Zn-induced Mn starvation makes SOD Fe-loaded (inactive for superoxide)"
  - "Zn:Mn RATIO determines vulnerability, not absolute Zn"
---

## Key Findings

- **Zinc competitively inhibits manganese uptake** through the PsaA permease in *S. pneumoniae* with an EC50 of 30.2 uM Zn at 1 uM Mn ([[eijkelkamp-2014-zinc-inhibits-manganese-pneumococcus]], in-vitro).
- **Mn-starved pneumococcus loads its SOD with iron instead of manganese**, rendering the enzyme inactive against superoxide — a direct mis-metallation event that leaves the bacterium vulnerable to oxidative killing.
- **The Zn:Mn ratio, not absolute zinc concentration**, determines bacterial vulnerability. This ratio-dependent effect means even moderate zinc elevation is lethal if manganese is simultaneously restricted.
- **PsaA is the sole high-affinity Mn importer** in pneumococcus, making it a single point of failure when zinc competitively blocks it.

## Methods

- **Study design**: In-vitro mechanistic study
- **Organism**: *Streptococcus pneumoniae* D39 (reference strain)
- **Key measurements**: Growth kinetics under varied Zn:Mn ratios; ICP-MS quantification of intracellular metal content; SOD activity assays with metal cofactor identification; PsaA transporter competition kinetics
- **Controls**: Systematic variation of Zn and Mn concentrations independently and in combination to establish that the ratio, not absolute concentration, drives the phenotype
- **Sample size**: N/A (in-vitro)

## Detailed Summary

This study systematically characterized the competitive interaction between zinc and manganese at the PsaA transporter in *[[streptococcus-pneumoniae]]*. PsaA is an ABC-type solute-binding protein and the primary high-affinity manganese importer. The authors demonstrated that zinc binds PsaA with sufficient affinity to competitively block manganese uptake, with an EC50 of 30.2 uM Zn at 1 uM Mn. When manganese import is blocked, the bacterium's Mn-dependent superoxide dismutase (SodA) loads with iron instead — a classic **[[mis-metallation]]** event. Iron-loaded SodA cannot catalyze superoxide dismutation, leaving pneumococcus acutely vulnerable to the oxidative burst from host phagocytes. This connects directly to the host's **[[nutritional-immunity]]** strategy: calprotectin, released by neutrophils at infection sites, chelates both zinc and manganese, but the local zinc released from degranulating neutrophils creates exactly the high-Zn:low-Mn environment this study shows is lethal. The critical insight is that the **Zn:Mn ratio** — not the absolute concentration of either metal — is the determinant of toxicity. This ratio-dependent framework extends the understanding of how host metal redistribution creates zones of microbial inhibition.

## Relevance to WikiBiome

Essential reference for **[[zinc]]**, **[[manganese]]**, **[[streptococcus-pneumoniae]]**, **[[streptococcus]]**, **[[mis-metallation]]**, and **[[nutritional-immunity]]** pages. The ratio-dependent framework is a foundational concept: it explains why absolute metal measurements in clinical specimens can be misleading without considering the ratios between competing metals. This study is a textbook example of Primitive 3 (mis-metallation) operating through Primitive 2 (nutritional immunity).

## Relevance to Cureva

Supports Primitives 2, 3, and 4. The ratio insight is clinically actionable: interventions targeting Zn:Mn ratios rather than absolute zinc may be more effective. Informs zinc-based intervention strategies for pneumococcal and related infections. The PsaA competitive inhibition mechanism could generalize to other Mn-dependent pathogens with ABC-type importers (e.g., *Streptococcus* group A, enterococci). Potential intervention hypothesis: zinc supplementation titrated to achieve Zn:Mn ratios above the competitive threshold.

## Contradictions / Tensions

None identified. The findings are consistent with and mechanistically extend [[neville-2020-cadmium-carbon-flux-membrane-pneumococcus]] on pneumococcal metal vulnerability and [[martin-2022-manganese-homeostasis-stress-pathogenesis]] on manganese's role in bacterial virulence.

## Open Questions

- Whether Zn:Mn ratio effects extend to other Mn-dependent pathogens with ABC-type importers (enterococci, group A strep).
- In vivo Zn:Mn ratios at mucosal surfaces during infection — are they sufficient to reach the competitive threshold?
- Whether dietary or supplemental zinc could shift mucosal Zn:Mn ratios enough to be clinically relevant.
- How pneumococcal resistance mechanisms (if any) might evolve to circumvent PsaA zinc sensitivity.
