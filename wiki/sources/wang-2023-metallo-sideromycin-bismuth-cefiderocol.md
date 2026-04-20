---
title: "Wang et al. 2023 — Bismuth-Cefiderocol Synergy as Metallo-Sideromycin Strategy"
type: source
created: 2026-04-14
updated: 2026-04-14
authors: [Wang, et al.]
year: 2023
journal: "Nature Communications"
doi: "10.1038/s41467-023-40828-3"
evidence_level: animal-model
tags: [bismuth, cefiderocol, siderophore-antibiotic, biofilm, resistance-prevention, chelation]
library_category: interventions
platform: both
condition: "cross-condition"
karen_brain_primitives: [4, 8]
metals_discussed: [iron, bismuth]
taxa_discussed: [pseudomonas-aeruginosa]
key_findings:
  - "Bismuth + cefiderocol synergy via competitive Bi3+/Fe3+ binding"
  - "Suppresses biofilm and prevents resistance evolution"
  - "Increases mouse survival in pneumonia model"
---

## Key Findings

- **[[bismuth]] synergizes with cefiderocol** via competitive Bi3+/Fe3+ binding — bismuth occupies iron-binding sites on bacterial proteins, amplifying cefiderocol's siderophore-mediated entry ([[wang-2023-metallo-sideromycin-bismuth-cefiderocol]], animal-model).
- **Combination suppresses [[biofilm]] formation and prevents resistance evolution** — dual metal disruption eliminates the two main failure modes of monotherapy.
- **Significantly increased mouse survival** in a [[pseudomonas-aeruginosa]] pneumonia model, confirming in vivo efficacy of the metallo-sideromycin strategy.

## Methods

In-vitro synergy testing of bismuth compounds combined with cefiderocol against *P. aeruginosa* strains including multidrug-resistant clinical isolates. Checkerboard assays and time-kill curves to quantify synergy (fractional inhibitory concentration indices). Biofilm formation assays under bismuth-cefiderocol combination versus monotherapy. Serial passage resistance evolution experiments to test whether the combination prevents resistance emergence. In-vivo mouse pneumonia model with *P. aeruginosa* challenge, treated with bismuth-cefiderocol combination versus cefiderocol alone. Survival monitored as primary endpoint. <!-- NEEDS VERIFICATION: exact mouse numbers and dosing regimen -->

## Detailed Summary

Wang et al. develop a "metallo-sideromycin" strategy that combines two metal-targeting mechanisms — bismuth-mediated iron displacement and cefiderocol's siderophore-mediated Trojan horse entry — to overcome the two main barriers to treating *Pseudomonas aeruginosa* infections: biofilm and resistance.

**The cefiderocol platform.** Cefiderocol is a siderophore-cephalosporin conjugate that exploits bacterial iron acquisition machinery for entry (similar in concept to [[chairatana-2015-salmochelin-pathogen-selective-killing]]). It is actively transported across the outer membrane via iron transporters, bypassing porin-mediated entry that resistance mutations commonly block. However, cefiderocol monotherapy still faces resistance evolution and limited biofilm penetration.

**Bismuth as iron competitor.** Bi3+ has similar ionic radius and coordination chemistry to Fe3+, allowing it to occupy iron-binding sites on bacterial proteins. When bismuth is co-administered with cefiderocol, it disrupts iron homeostasis from the inside while cefiderocol attacks from the outside. Bismuth binding to iron-dependent enzymes impairs energy metabolism, siderophore utilization, and biofilm matrix production. The dual disruption creates a synergistic effect where neither agent alone is as effective.

**Anti-biofilm mechanism.** [[Biofilm]] formation in *[[pseudomonas-aeruginosa]]* depends heavily on iron — for energy metabolism, for the pyoverdine siderophore system, and for biofilm matrix structural components. Bismuth disrupts iron availability within the biofilm, weakening its architecture and making bacteria more susceptible to cefiderocol. The combination was significantly more effective at preventing biofilm formation than either agent alone.

**Resistance prevention.** Serial passage experiments showed that *P. aeruginosa* readily evolves resistance to cefiderocol alone but fails to develop resistance to the bismuth-cefiderocol combination. The dual target mechanism likely raises the evolutionary barrier to resistance — mutations that counteract one mechanism are insufficient when both are operating simultaneously.

**In-vivo efficacy.** In a mouse pneumonia model, the bismuth-cefiderocol combination significantly improved survival compared to cefiderocol monotherapy. This validates the in-vitro synergy findings in a physiologically relevant infection model.

## Relevance to WikiBiome

Introduces bismuth as a therapeutic metal that disrupts iron-dependent pathogenesis. Supports entity pages for [[bismuth]], [[iron]], [[pseudomonas-aeruginosa]], and [[biofilm]]. Demonstrates that metal competition (Bi3+ vs Fe3+) can be engineered therapeutically — expanding the concept of [[nutritional-immunity]] from a host defense mechanism to a designable intervention strategy. The anti-resistance property is important for the [[antimicrobial-resistance]] concept page, as it demonstrates that metal-based combination strategies can prevent resistance evolution.

## Relevance to Cureva

Bismuth-cefiderocol combination as an intervention for conditions with *P. aeruginosa* biofilm in the signature (cystic fibrosis lung infections, chronic wound infections, ventilator-associated pneumonia). The anti-biofilm and resistance-prevention properties address two critical challenges in chronic dysbiotic infections. The "metallo-sideromycin" concept — combining metal disruption with siderophore-mediated drug delivery — is a template for designing interventions against other iron-dependent pathogens in disease signatures. Supports Primitive 4 (metal dependencies as Achilles' heels) and Primitive 8 (siderophore competition).

## Open Questions

- Whether the bismuth-cefiderocol combination is effective against other biofilm-forming Gram-negatives (Klebsiella, Acinetobacter, Enterobacter).
- Bismuth toxicity profile at therapeutically effective doses in humans — bismuth is used clinically (e.g., bismuth subsalicylate) but systemic dosing may differ.
- Whether gut-resident *P. aeruginosa* biofilms (relevant to some IBD and immunocompromised patients) could be targeted by oral bismuth-cefiderocol.
- Can the metallo-sideromycin concept be generalized to other metal pairs (e.g., gallium + cefiderocol)?
