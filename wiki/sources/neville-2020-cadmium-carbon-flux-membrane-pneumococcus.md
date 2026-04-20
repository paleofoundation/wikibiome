---
title: "Neville et al. 2020 — Cadmium Stress Dictates Central Carbon Flux and Alters Membrane Composition in Streptococcus pneumoniae"
type: source
created: 2026-04-14
updated: 2026-04-14
authors: [Stephanie L. Neville, Jacqueline R. Morey, Erin B. Gillen, Bart A. Eijkelkamp, Mordechai Z. Kornfeld-Neville, Kenji M. Tan, James C. Paton, Christopher A. McDevitt]
year: 2020
journal: "Communications Biology"
doi: "10.1038/s42003-020-01417-y"
evidence_level: in-vitro
sample_size: "N/A"
tags: [cadmium, mis-metallation, glycolysis, pentose-phosphate, membrane-composition, capsule, metalloproteomics]
library_category: mechanistic-insights
platform: both
condition: "cross-condition"
karen_brain_primitives: [3, 4]
metals_discussed: [cadmium, zinc, manganese, iron, magnesium]
taxa_discussed: [streptococcus-pneumoniae]
key_findings:
  - "Cd mis-metallation identified in 16 metalloproteins including glycolytic enzymes and SOD"
  - "Cd disrupts glycolysis; pneumococcus reroutes to pentose phosphate pathway"
  - "Membrane fatty acid composition altered — reduced capsule production"
---

## Key Findings

- **Cd mis-metalates at least 16 metalloproteins** in *S. pneumoniae*, including glycolytic enzymes (enolase, phosphofructokinase) and superoxide dismutase, quantified by metalloproteomics ([[neville-2020-cadmium-carbon-flux-membrane-pneumococcus]], in-vitro).
- **Glycolysis is disrupted** by Cd-mediated enzyme inactivation, forcing metabolic rerouting to the pentose phosphate pathway — a systems-level metabolic rewiring from a single toxic metal.
- **Membrane fatty acid composition changes** under Cd stress, leading to **reduced capsule production** — a key virulence factor — potentially attenuating pathogenicity.
- **Cd displaces zinc and manganese** from their cognate metalloproteins, with downstream effects cascading through central carbon metabolism, oxidative stress defense, and cell surface architecture.
- **16+ mis-metallation targets identified** makes this the most comprehensive catalogue of mis-metallation in a single organism, demonstrating that toxic metal effects are proteome-wide, not single-enzyme events.

## Methods

- **Study design**: In-vitro systems biology study
- **Organism**: *Streptococcus pneumoniae* D39 (reference strain)
- **Key measurements**: Metalloproteomics (ICP-MS coupled to size-exclusion chromatography to identify which proteins bind Cd); metabolomics (tracking carbon flux through glycolysis vs. pentose phosphate pathway); lipidomics (membrane fatty acid composition); capsule quantification assays
- **Approach**: Multi-omic integration — connecting metal binding events (metalloproteomics) to metabolic consequences (metabolomics) to phenotypic outcomes (capsule, membrane)
- **Builds on**: [[begg-2015-cadmium-toxicity-transition-metal-pneumococcus]] (earlier characterization of Cd toxicity in pneumococcus)
- **Sample size**: N/A (in-vitro)

## Detailed Summary

This Communications Biology paper provides the most comprehensive systems-level view of cadmium mis-metallation in any bacterium. Using a multi-omic approach in **[[streptococcus-pneumoniae]]** D39, the authors mapped the entire cascade from Cd entry → metalloprotein displacement → metabolic rewiring → phenotypic change. Cadmium (Cd²⁺) enters bacterial cells through divalent cation transporters (primarily those intended for [[zinc]] and [[manganese]]) and displaces these metals from their cognate enzymes. The metalloproteomics data identified **16 specific proteins** that became Cd-loaded, including critical glycolytic enzymes (enolase, phosphofructokinase), superoxide dismutase (SOD), and several biosynthetic enzymes. When glycolytic enzymes are inactivated by Cd mis-metallation, central carbon metabolism reroutes from glycolysis to the pentose phosphate pathway (PPP). This metabolic rerouting has two consequences: (1) reduced ATP generation (glycolysis is the primary ATP source for this organism, which lacks a respiratory chain); and (2) increased NADPH production via the PPP, potentially an adaptive response to offset Cd-induced oxidative stress. The downstream effects on membrane composition and capsule production are particularly significant for pathogenesis. The pneumococcal capsule is the primary virulence factor enabling immune evasion — Cd-induced capsule reduction would attenuate virulence. Membrane fatty acid changes under Cd stress may reflect altered fatty acid biosynthesis enzyme activity (also metalloprotein-dependent) or a stress-response remodeling of membrane fluidity. This study extends the work of [[begg-2015-cadmium-toxicity-transition-metal-pneumococcus]] by moving from single-metal toxicity characterization to a systems-wide map of mis-metallation consequences.

## Relevance to WikiBiome

Essential reference for **[[cadmium]]**, **[[mis-metallation]]**, **[[streptococcus-pneumoniae]]**, and **[[nutritional-immunity]]** pages. Demonstrates that mis-metallation is not a single-enzyme event but a proteome-wide metabolic rewiring with cascading consequences — a critical conceptual insight for WikiBiome's public audience. The Cd → capsule loss finding is a compelling story: an environmental toxin accidentally disarming a pathogen's primary defense. Connects to [[eijkelkamp-2014-zinc-inhibits-manganese-pneumococcus]] (zinc competition at PsaA) and [[martin-2022-manganese-homeostasis-stress-pathogenesis]] (manganese homeostasis), forming a trio of studies that comprehensively map pneumococcal metal vulnerability.

## Relevance to Cureva

Supports Primitive 3 (mis-metallation scope is far broader than previously assumed — 16+ targets, affecting metabolism, defense, and surface architecture simultaneously). Supports Primitive 4 (Achilles' heels — Cd-induced capsule loss shows metal stress can disarm virulence, potentially exploitable therapeutically). Implications for understanding how environmental Cd exposure reshapes pathogen fitness in the gut and respiratory tract. The metabolic rerouting from glycolysis to PPP could be a targetable vulnerability: inhibiting the PPP in Cd-stressed bacteria might block their escape pathway.

## Contradictions / Tensions

None with existing wiki content. Consistent with and extends [[eijkelkamp-2014-zinc-inhibits-manganese-pneumococcus]] (Zn → Mn displacement) and [[martin-2022-manganese-homeostasis-stress-pathogenesis]] (Mn homeostasis review). Together, these three studies establish pneumococcus as the model organism for understanding bacterial metal vulnerability.

## Open Questions

- Whether the metabolic rerouting under Cd stress creates exploitable vulnerabilities for antimicrobial strategies — can PPP inhibitors synergize with Cd stress?
- How these proteome-wide effects scale across different bacterial species — is pneumococcus uniquely sensitive, or is it just the best-studied?
- Does environmental Cd exposure (dietary, occupational) alter pneumococcal virulence in human carriers?
- Can the Cd-induced capsule reduction be replicated with less toxic metals (e.g., bismuth, gallium) for therapeutic purposes?
- What is the threshold Cd concentration at which metabolic rerouting occurs, and is it achievable at mucosal surfaces?
