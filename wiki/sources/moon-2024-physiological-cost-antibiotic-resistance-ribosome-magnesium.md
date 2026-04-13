---
title: "Moon 2024 — Physiological Cost of Antibiotic Resistance: Insights from a Ribosome Variant in Bacteria"
type: source
created: 2026-04-09
updated: 2026-04-09
authors: [Eun Chae Moon, Tushar Modi, Dong-yeon D Lee, Danis Yangaliev, Jordi Garcia-Ojalvo, S Banu Ozkan, Gurol M Suel]
year: 2024
journal: "Science Advances"
doi: "10.1126/sciadv.adq5817"
tags: [mismetallation, metal-homeostasis, magnesium, ribosome, antibiotic-resistance, erythromycin, Bacillus-subtilis, metal-competition, ATP, fitness-cost, L22-ribosomal-protein, riboswitch, M-box]
library_category: antimicrobial_resistance
platform: wikibiome
condition: "antibiotic resistance fitness cost"
---

# Why This Paper Matters

This paper reveals a previously unknown connection between antibiotic resistance and metal homeostasis: the antibiotic-resistant L22* ribosome variant in B. subtilis carries a **magnesium-dependent physiological cost** that limits its competitive fitness under Mg2+ limitation. This is a striking example of how metal availability constrains the evolution of antibiotic resistance. The L22* ribosome binds Mg2+ more tightly, depleting the finite intracellular Mg2+ pool and reducing ATP levels (since Mg2+ is the counterion for ATP). For the wiki's [[mis-metallation]] framework, this demonstrates that even changes in essential metal utilization by a single macromolecular complex (the ribosome, which contains >170 structural Mg2+ ions) can cascade into proteome-wide metabolic consequences and alter competitive fitness.

# Key Claims

- The **L22* ribosome variant** of B. subtilis has a SQINKRT sequence duplication in the short loop of the L22 subunit, providing resistance to erythromycin and moderate resistance to spectinomycin
- L22* fitness depends on **extracellular Mg2+ concentration**: above 0.2 mM Mg2+, L22* dominates in coculture with antibiotic pressure; below 0.02 mM, wild-type dominates DESPITE antibiotic presence
- The L22* mutation **reduces the free intracellular Mg2+ pool** -- demonstrated using an M-box riboswitch-based fluorescent reporter sensitive to free Mg2+ levels
- L22* ribosomes have **increased Mg2+ binding affinity** compared to wild-type, shown by coarse-grained elastic network modeling (ENM) revealing reduced Dynamic Flexibility Index (DFI) of Mg2+ ions
- The L22* mutation does NOT reduce ribosome abundance; instead, it INCREASES ribosomal protein content -- the growth deficiency is specifically due to Mg2+ sequestration
- **ATP levels drop** in L22* cells under Mg2+ limitation because ATP requires Mg2+ as counterion (Mg2+-bound ATP is the biologically active form)
- Ribosomes and ATP together constitute the **largest intracellular Mg2+ stores** -- competition between them for a finite Mg2+ pool creates a zero-sum metabolic trade-off
- This represents a novel **vulnerability of antibiotic-resistant bacteria**: environmental Mg2+ limitation can suppress resistant variants

# Methods & Findings

## Coculture Competition Experiments
- WT and L22* strains labeled with distinct fluorescent reporters were cocultured at 1:1 ratio across Mg2+ concentrations (0-2 mM) with/without erythromycin
- Without antibiotics: both strains coexisted at all Mg2+ levels
- With antibiotics: L22* dominated at high Mg2+, but WT dominated at low Mg2+ -- a complete fitness reversal
- The tipping point is ~0.02-0.2 mM extracellular Mg2+

## M-box Riboswitch Reporter
- The M-box riboswitch in the 5'UTR of mgtE senses free intracellular Mg2+ and controls expression of the Mg2+ importer MgtE
- Fusing M-box to YFP creates a live-cell reporter: high YFP = low free Mg2+
- L22* strain showed significantly higher reporter activity (lower free Mg2+) at low extracellular Mg2+
- WT maintained stable free Mg2+ levels across extracellular concentrations

## Structural Modeling
- Elastic Network Model (ENM) analysis of ribosome dynamics reveals that L22* mutation reduces Mg2+ mobility (lower DFI scores)
- Lower DFI = stronger association and higher binding affinity
- The effect is specific to Mg2+ ions; carbon and phosphorus atoms showed much smaller DFI changes
- A control L34 deletion mutant showed NO change in Mg2+ DFI, confirming specificity

## ATP Measurement
- Steady-state model predicts ATP drop in L22* cells under Mg2+ limitation
- Experimental measurement confirmed predicted ATP reduction in L22* but not WT
- ATP and ribosomes compete for the same finite Mg2+ pool

# Connections

- [[mis-metallation]] -- demonstrates how altered metal (Mg2+) utilization by a single complex cascades to metabolic consequences
- [[metal-homeostasis]] -- Mg2+ as an underappreciated essential metal with proteome-wide impact
- [[ribosome]] -- ribosomes as major intracellular Mg2+ sinks containing >170 structural Mg2+ per complex
- [[antimicrobial-resistance]] -- Mg2+ limitation as an environmental constraint on resistance evolution
- [[metal-sensing]] -- M-box riboswitch as intracellular Mg2+ sensor
- [[oxidative-stress]] -- indirect connection through ATP depletion compromising cellular defense
- [[nutritional-immunity]] -- potential for host Mg2+ restriction to suppress resistant bacterial populations
