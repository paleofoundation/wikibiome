---
title: "Begg et al. 2015 — Dysregulation of Transition Metal Ion Homeostasis Is the Molecular Basis for Cadmium Toxicity in Streptococcus pneumoniae"
type: source
created: 2026-04-14
updated: 2026-04-14
authors: [Stephanie L. Begg, Bart A. Eijkelkamp, Zhenyao Luo, Rafael M. Couñago, Jacqueline R. Morey, Aimee Tan, Griffith J. Andrews, Bostjan Kobe, Cheryl-lynn Y. Ong, Christopher A. McDevitt, James C. Paton]
year: 2015
journal: "Nature Communications"
doi: "10.1038/ncomms7418"
evidence_level: in-vitro
sample_size: "N/A"
tags: [cadmium, manganese, zinc, competitive-displacement, pneumococcus, psaa, glutathione, toxic-metals]
library_category: mechanistic-insights
platform: both
condition: "cross-condition"
karen_brain_primitives: [1, 3]
metals_discussed: [cadmium, manganese, zinc]
taxa_discussed: [streptococcus-pneumoniae]
key_findings:
  - "Cd reduces cellular Mn and Zn by ~70% at 30 uM"
  - "Cd competes with Mn for PsaA permease"
  - "Glutathione crucial for Cd buffering"
---

## Key Findings

- **Cadmium at 30 uM reduces intracellular Mn and Zn by approximately 70%** in *S. pneumoniae*, causing widespread enzyme dysfunction ([[begg-2015-cadmium-toxicity-transition-metal-pneumococcus]], in-vitro).
- **Cd competes directly with Mn for the PsaA permease**, the primary Mn importer — the same transporter targeted by host zinc (see [[eijkelkamp-2014-zinc-inhibits-manganese-pneumococcus]]).
- **Glutathione is critical for Cd buffering**: strains with impaired glutathione synthesis show heightened Cd sensitivity, linking thiol depletion to metal toxicity.

## Methods

ICP-MS metal quantification of intracellular Mn, Zn, and Cd levels in *S. pneumoniae* D39 under controlled Cd exposure (0-50 uM range). PsaA substrate-binding protein competition studies to determine Cd vs. Mn binding affinity. Growth assays at multiple Cd concentrations. Glutathione biosynthesis mutants tested for Cd sensitivity to identify the role of thiol buffering. The study used a genetically tractable strain (D39) with well-characterized metal transport systems.

## Detailed Summary

Begg et al. provide a molecular-level explanation for how cadmium kills bacteria — not through a single toxicity mechanism, but through widespread disruption of transition metal homeostasis.

**Quantitative metal displacement.** At 30 uM Cd, intracellular Mn and Zn levels each drop by approximately 70%. This is not because Cd directly destroys these metals but because Cd2+ competes for the same uptake and binding pathways. The result is a cell depleted of its essential metal cofactors while loaded with a toxic mimic that cannot substitute functionally.

**PsaA as the competitive gateway.** The primary Mn importer in *[[streptococcus-pneumoniae]]* is the ABC transporter with PsaA as its substrate-binding protein. PsaA binds Mn2+ for import, but Cd2+ binds PsaA with comparable or higher affinity, blocking Mn uptake. This is the same transporter that host zinc targets during [[nutritional-immunity]] — zinc inhibits PsaA-mediated Mn import ([[eijkelkamp-2014-zinc-inhibits-manganese-pneumococcus]]). The convergence of host zinc defense and environmental Cd toxicity on the same transporter demonstrates that PsaA is a critical vulnerability node for the pneumococcus.

**Glutathione as the Cd buffer.** Strains with impaired glutathione biosynthesis showed dramatically increased Cd sensitivity. [[Glutathione]] serves as the primary intracellular Cd chelator, binding free Cd2+ via its thiol groups and preventing it from competing with Mn and Zn for protein binding sites. When glutathione is depleted — whether by genetic mutation, oxidative stress, or metal overload — the cell loses its primary defense against Cd-mediated [[mis-metallation]].

**Cascading enzyme dysfunction.** The 70% reduction in intracellular Mn has far-reaching consequences because Mn serves as the cofactor for MnSOD (superoxide dismutase), which is the primary defense against oxidative stress. Mn depletion by Cd therefore compromises antioxidant defense, creating a synergistic toxicity: Cd displaces the metal needed to combat the oxidative stress that Cd itself generates.

**Implications for microbiome ecology.** The study establishes that environmental Cd exposure at moderate concentrations can selectively eliminate Mn-dependent organisms. Since different bacterial species have different Mn requirements and different Cd tolerance mechanisms, Cd exposure would reshape the microbiome composition — selecting for Cd-tolerant organisms over Mn-dependent ones. This is Primitive 1 (metals as selective pressures) operating through environmental contamination rather than host defense.

## Relevance to WikiBiome

Demonstrates how environmental Cd exposure disrupts essential metal homeostasis in bacteria. Key content for [[cadmium]], [[manganese]], [[zinc]], [[glutathione]], and [[mis-metallation]] pages. Links environmental Cd contamination to microbiome disruption via a specific molecular mechanism. The convergence of Cd toxicity and host zinc defense on PsaA should be highlighted on the [[nutritional-immunity]] concept page as an example of how environmental metals and immune metals can synergize. The glutathione connection links heavy metal exposure to impaired antioxidant defense across multiple pages.

## Relevance to Cureva

Supports Primitive 1 (metals as selective pressures): Cd exposure selectively kills Mn-dependent organisms, potentially reshaping microbiome composition toward Cd-tolerant pathobionts. Supports Primitive 3 (mis-metallation): Cd toxicity operates through competitive displacement of correct cofactors at a specific transporter. Clinically relevant because dietary Cd exposure (from rice, cocoa, leafy greens, cigarette smoke) may create chronic selective pressure on the gut microbiome, contributing to dysbiosis patterns seen in conditions like CKD and colorectal cancer where Cd is elevated.

## Open Questions

- Whether dietary Cd levels (far lower than 30 uM, typically in the nM-low uM range in gut lumen) still measurably alter gut microbiome metal homeostasis — dose-response data at physiological concentrations are needed.
- Cd effects on Mn-dependent commensals vs. pathogens — do beneficial Lactobacillus species (which are Mn-dependent) show greater Cd sensitivity than iron-dependent pathogens?
- Whether chronic low-level Cd exposure depletes glutathione sufficiently to compromise immune metal weaponization (PGRPs, calprotectin) in the gut.
- How Cd-tolerant bacteria (those with dedicated Cd efflux pumps) gain competitive advantage in Cd-contaminated environments.
