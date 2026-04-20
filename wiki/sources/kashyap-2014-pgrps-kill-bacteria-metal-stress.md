---
title: "Kashyap et al. 2014 — Peptidoglycan Recognition Proteins Kill Bacteria by Inducing Oxidative, Thiol, and Metal Stress"
type: source
created: 2026-04-14
updated: 2026-04-14
authors: [Dipika R. Kashyap, Minhui Wang, Li-Hung Liu, Guido J. Boons, Dominik Gupta, Roman Dziarski]
year: 2014
journal: "PLoS Pathogens"
doi: "10.1371/journal.ppat.1004280"
evidence_level: in-vitro
sample_size: "N/A"
tags: [pgrp, peptidoglycan-recognition, zinc-intoxication, copper-intoxication, oxidative-stress, thiol-depletion, innate-immunity]
library_category: mechanistic-insights
platform: both
condition: "cross-condition"
karen_brain_primitives: [2, 3, 4]
metals_discussed: [zinc, copper, iron]
taxa_discussed: [escherichia-coli, bacillus]
key_findings:
  - "PGRPs kill bacteria via synergistic triple stress: oxidative + thiol depletion + metal intoxication"
  - "60-100x increase in intracellular Zn2+ and Cu+ induced by host PGRPs"
  - "Chelation of Zn or Cu completely inhibited bactericidal activity — metal stress is REQUIRED"
---

## Key Findings

- **Host PGRPs kill bacteria through three synergistic stresses** simultaneously: oxidative stress, thiol (glutathione) depletion, and metal intoxication ([[kashyap-2014-pgrps-kill-bacteria-metal-stress]], in-vitro).
- **PGRPs induce 60-100x increases in intracellular Zn2+ and Cu+** in target bacteria, far exceeding normal cytosolic levels.
- **Metal stress is not optional**: chelation of either Zn or Cu completely abolished PGRP bactericidal activity, demonstrating that metal intoxication is a required component, not a side effect.
- Demonstrated in both Gram-negative (*E. coli*) and Gram-positive (*Bacillus*) organisms.

## Methods

Intracellular metal quantification using fluorescent probes (FluoZin-3 for Zn2+, Phen Green for Cu+) and ICP-MS for total metal content. Glutathione levels measured by enzymatic recycling assay. Reactive oxygen species detected by fluorescent probes. Critical chelation rescue experiments: TPEN (Zn chelator) and BCS (Cu chelator) were added during PGRP treatment to determine whether metal stress is required for killing or merely coincidental. Experiments performed in both Gram-negative (*E. coli*) and Gram-positive (*Bacillus subtilis*) to test generalizability across bacterial architectures.

## Detailed Summary

Kashyap et al. establish that host peptidoglycan recognition proteins (PGRPs) kill bacteria through a synergistic triple-stress mechanism in which metal intoxication is not a secondary effect but an essential component.

**The triple-stress model.** PGRPs simultaneously induce three distinct cellular stresses: (1) oxidative stress via reactive oxygen species generation, (2) thiol stress via glutathione and cysteine depletion, and (3) metal intoxication via massive increases in intracellular Zn2+ and Cu+. These three stresses are synergistic — each amplifies the others. Oxidative stress depletes glutathione, which normally buffers excess metals; metal accumulation catalyzes further ROS generation via Fenton-type chemistry; and thiol depletion removes the cell's primary metal detoxification pathway.

**Quantifying metal intoxication.** The study measures a 60-100x increase in intracellular Zn2+ and Cu+ within bacteria exposed to PGRPs. These concentrations far exceed the narrow buffered range within which metal sensors maintain specificity ([[osman-2017-fine-control-metal-zinc-cobalt]]), and are sufficient to trigger [[mis-metallation]] of key metalloenzymes ([[chandrangsu-2016-zinc-intoxication-perr-heme-toxicity]]).

**The chelation proof.** The most important result is the chelation rescue experiment. When either TPEN (a zinc-specific chelator) or BCS (a copper-specific chelator) is added during PGRP treatment, bactericidal activity is completely abolished. The bacteria survive despite ongoing oxidative stress and thiol depletion. This demonstrates unequivocally that metal intoxication is a **required** component of PGRP killing, not a side effect. This is among the strongest evidence that innate immunity depends on metal weaponization.

**Gram-positive and Gram-negative generality.** The triple-stress mechanism operates in both *[[escherichia-coli]]* (Gram-negative) and *[[bacillus]]* subtilis (Gram-positive), despite their fundamentally different cell envelope architectures. This suggests the mechanism targets conserved intracellular pathways rather than surface-specific interactions.

**Glutathione as the critical buffer.** The study positions [[glutathione]] as the linchpin connecting all three stresses. Glutathione simultaneously (a) scavenges ROS, (b) provides the major thiol buffer, and (c) chelates excess intracellular metals. When PGRPs deplete glutathione, all three protective functions fail simultaneously, creating a catastrophic positive feedback loop.

## Relevance to WikiBiome

Definitive demonstration that innate immune killing depends on metal weaponization. Essential for [[zinc]], [[copper]], [[nutritional-immunity]], [[mis-metallation]], and [[glutathione]] pages. The chelation experiment is particularly powerful evidence — it transforms the metal-immunity connection from correlative to causal. The triple-stress model also informs the [[oxidative-stress]] concept page. The glutathione depletion finding connects environmental metal exposure (which also depletes glutathione) to impaired immune function, providing a mechanistic bridge between metal pollution and infection susceptibility.

## Relevance to Cureva

Supports Primitives 2, 3, and 4. Critically important: if metal stress is REQUIRED for immune killing, then any intervention that chelates metals at infection sites could impair immunity. This generates a potential **STOP signal for aggressive chelation therapy during active infections** — removing zinc and copper from infection sites would abolish PGRP bactericidal activity and potentially worsen outcomes. Conversely, the glutathione depletion finding supports glutathione supplementation between infections to restore metal buffering capacity and immune readiness. The triple-stress model also suggests that interventions targeting multiple stress pathways simultaneously may be more effective than single-target approaches.

## Open Questions

- Whether gut epithelial PGRPs use the same metal-dependent killing mechanism — the gut expresses PGRP-L isoforms whose bactericidal mechanisms are less characterized.
- How PGRP metal weaponization interacts with calprotectin and lactoferrin at mucosal surfaces — potential synergy or redundancy.
- Whether chronic glutathione depletion (from environmental metal exposure, oxidative stress, or poor diet) measurably impairs PGRP-mediated immunity in the gut.
- The source of the zinc and copper that PGRPs mobilize — is it released from host metallothionein stores, imported from extracellular pools, or liberated from bacterial targets?
