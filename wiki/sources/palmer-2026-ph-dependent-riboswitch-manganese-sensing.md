---
title: "Palmer 2026 — pH-Dependent Allosteric Remodeling of a Bacterial Riboswitch Couples Alkaline Activation to Metal Sensing"
type: source
created: 2026-04-09
updated: 2026-04-09
authors: [Danea Palmer, Adrien Chauvier, Tomas F D Silva, Avery Ontiveros, Giovanni Bussi, Nils G Walter, Tatiana V Mishanina]
year: 2026
journal: "bioRxiv"
doi: "PMC12934788"
tags: [mismetallation, metal-homeostasis, manganese, riboswitch, pH-sensing, metal-sensing, manganese-toxicity, alkaline-stress, escherichia-coli, gene-regulation]
library_category: metal_homeostasis_bacteria
platform: wikibiome
condition: "RNA-based dual-input metal and pH sensing in bacteria"
---

# Why This Paper Matters

This study reveals how bacteria integrate two distinct environmental signals -- [[manganese]] concentration and pH -- through a single RNA regulatory element, the alx riboswitch. For the [[mis-metallation]] framework, this is significant because it demonstrates how bacteria use sophisticated RNA-based sensors to prevent manganese toxicity before it causes [[mis-metallation]]. At elevated pH, Mn(II) is oxidized to Mn(IV), which can cleave RNA and DNA, and Mn2+ hydroxide increases free radical generation. Simultaneously, Mn2+ can substitute for [[iron]] in certain enzymes during [[oxidative-stress]], providing a protective benefit -- but excess free Mn2+ is toxic. The alx riboswitch solves this problem by coupling Mn2+ export to alkaline conditions, precisely when Mn2+ toxicity is most dangerous. This dual-input sensing represents a sophisticated metallostasis mechanism that prevents the labile [[manganese]] pool from reaching levels where mis-metallation of non-Mn enzymes would occur.

# Key Claims

- **The alx riboswitch integrates two orthogonal signals** -- Mn2+ concentration and cytoplasmic pH -- into a single gene expression output controlling the Mn2+ exporter MntP
- **Alkaline pH primes the riboswitch** for Mn2+ sensitivity by favoring an undocked (open) aptamer conformation, enabling response to low-micromolar Mn2+ concentrations
- **At neutral pH, the aptamer favors docked sampling** that is less sensitive to Mn2+, providing a built-in threshold for when Mn2+ export is needed
- **The L2 capping loop** is unique to the 3WJ alx architecture and is the pH-sensing element; protonation of adenosine A114 at neutral pH stabilizes a 4-nt loop that resists docking
- **The L3 loop sequence** containing the Mn2+-binding core (conserved A37 adenosine) is essential for pH-dependent Mn2+ response; swapping with the non-pH-responsive mntP L3 abolishes pH coupling
- **Mn2+ binding slows undocking** by >2-fold regardless of pH, shifting the conformational equilibrium toward the docked (active) state
- **Phylogenetic analysis** shows alx-like 3WJ architecture and L3 sequence are conserved in Bacillales from alkaline-associated environments (soil, ocean, pH 36-41)

# Methods & Findings

## Single-Molecule FRET Reveals pH-Dependent Mn2+ Sensing

Using smFRET with Cy3/Cy5 fluorophore pairs on each leg of the riboswitch aptamer:

| Condition | % Stably Docked (SD) | % Dynamic (DU+DD) | % Stably Undocked (SU) |
|-----------|---------------------|-------------------|----------------------|
| pH 7.2, no Mn2+ | 17% | 41% | 42% |
| pH 8.5, no Mn2+ | 9% | 41% | 50% |
| pH 7.2, 1 mM Mn2+ | 29% | 40% | 30% |
| pH 8.5, 1 mM Mn2+ | 31% | 40% | 30% |
| pH 8.5, 1 uM Mn2+ | 37% docked | Enhanced sensitivity | -- |

The critical finding: at pH 8.5, just 1 uM Mn2+ is sufficient to shift the aptamer population toward docking, whereas at pH 7.2, 1 uM Mn2+ has essentially no effect. This 1000-fold sensitization enables the riboswitch to respond to physiologically relevant Mn2+ fluctuations specifically under alkaline stress.

## Molecular Mechanism: pH-Tuned Nucleobase Protonation

MD simulations revealed that protonation of A114 in the L2 capping loop at neutral pH enables formation of a C19-A114+ wobble base pair, stabilizing a 4-nt loop that favors docking. At alkaline pH, A114 is deprotonated, favoring a 3-nt loop that destabilizes docking. The apparent pKa of this switch is approximately 8.5, shifted from the solution pKa of adenosine (~3.5) by the local RNA structural context.

## Biological Significance of Dual Sensing

At elevated pH:
- Mn(II) is oxidized to Mn(IV), which cleaves RNA and DNA
- Mn2+ hydroxide increases ROS generation
- Intracellular Mn2+ increases ~1.5-fold in E. coli at alkaline pH
- Mn2+ can substitute for Fe in SOD and other enzymes, providing oxidative stress protection
- But excess Mn2+ is toxic, necessitating tight homeostatic control

The dual Mn2+/pH riboswitch thus balances Mn2+ as both protector (anti-oxidant cofactor) and threat (RNA/DNA-damaging agent) under alkaline stress.

# Connections

- [[mis-metallation]] -- riboswitch prevents Mn2+ accumulation to levels that would cause mis-metallation of non-Mn enzymes
- [[manganese]] -- detailed mechanism of Mn2+ sensing, toxicity, and export regulation
- [[metal-homeostasis]] -- RNA-based metallosensing as complement to protein-based metalloregulators
- [[iron]] -- Mn2+ can substitute for Fe in enzymes during oxidative stress, representing beneficial mis-metallation
- [[oxidative-stress]] -- alkaline pH exacerbates Mn2+ toxicity through ROS generation
- [[escherichia-coli]] -- primary model for alx and mntP riboswitch characterization
- [[labile-metal-pool]] -- riboswitch responds to the labile Mn2+ pool to prevent toxicity
- [[superoxide-dismutase]] -- Mn-SOD as example of beneficial Mn2+ enzyme cofactor
- [[bacillus]] -- alx-like riboswitches conserved in alkaline-adapted Bacillales
- [[gene-regulation]] -- RNA-based combinatorial signal integration in metallostasis
- [[riboswitch]] -- paradigmatic example of multi-input riboswitch regulation
