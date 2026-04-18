---
title: "Stephen 2025 — Structurally Distinct Manganese-Sensing Riboswitch Aptamers Regulate Different Expression Platform Architectures"
type: source
created: 2026-04-09
updated: 2026-04-09
authors: [Christine Stephen, Danea E Palmer, Clarisa Bautista, Tatiana V Mishanina]
year: 2025
journal: "Nucleic Acids Research"
doi: "not yet verified"
pmcid: "PMC12153347"
tags: [mismetallation, metal-homeostasis, manganese, riboswitch, metal-sensing, co-transcriptional-folding, yybP-ykoY, gene-regulation, escherichia-coli, manganese-toxicity]
library_category: metal_homeostasis_bacteria
platform: wikibiome
condition: "co-transcriptional RNA metal sensing to prevent manganese toxicity"
metals_discussed: [manganese]
taxa_discussed: [escherichia-coli]
karen_brain_primitives: [3, 4]
key_findings: ["Metal ion sampling begins before the aptamer is fully transcribed", "The alx (3WJ) and mntP (4WJ) aptamers differ fundamentally", "The L3 loop sequence is critical"]
---

# Why This Paper Matters

This study uses co-transcriptional RNA chemical probing to reveal, for the first time, how [[manganese]]-sensing riboswitches fold and respond to metal ions during active transcription -- a fundamentally different approach from previous studies on pre-folded RNAs. For the [[mis-metallation]] framework, the paper demonstrates that bacteria begin sampling ambient Mn2+ before the riboswitch RNA is fully synthesized, meaning that metal sensing occurs co-transcriptionally through a kinetic competition between RNA folding and metal binding. The two E. coli Mn-sensing riboswitches (mntP and alx) share a conserved metal-binding core but diverge in their aptamer architecture (4WJ vs. 3WJ), expression platform behavior, and pH sensitivity. The mntP riboswitch efficiently commits to active (Mn-exporter-expressing) or inactive conformations, while alx samples both conformations frequently regardless of Mn. This architectural difference explains how alx uniquely integrates pH and Mn signals, enabling bacteria to fine-tune their response to the dual threat of Mn toxicity and alkaline stress. Transition metals are described as "harmful in excess due to misincorporation into biomolecules and metal-catalyzed formation of reactive oxygen species."

# Key Claims

- **Metal ion sampling begins before the aptamer is fully transcribed** -- both alx and mntP riboswitches detect Mn2+ co-transcriptionally, challenging the assumption that a complete aptamer fold is required
- **The alx (3WJ) and mntP (4WJ) aptamers differ fundamentally** in their co-transcriptional folding dynamics: mntP efficiently partitions into active/inactive states, while alx samples both states regardless of Mn
- **The L3 loop sequence is critical** for both Mn binding and pH responsiveness -- it differs between alx and mntP and determines riboswitch-specific behavior
- **Alkaline pH alone cannot rearrange alx** into a translationally active conformation; instead, alx senses the increased intracellular Mn2+ brought about by alkaline pH
- **The P1.1 "switch helix"** is a key structural element that alternatively pairs within the aptamer or with the expression platform, determining gene expression outcome
- **Metal sensing occurs within a defined "riboswitching window"** during transcription -- specific transcript lengths where Mn binding produces the largest structural changes
- **The yybP-ykoY family has >1000 unique representatives** across bacterial phyla, making it the largest metal-sensing riboswitch family

# Methods & Findings

## Co-Transcriptional RNA Probing (TECprobe-VL)

Using DMS-MaP (dimethyl sulfate mutational profiling) on transcription elongation complexes at variable transcript lengths, the study maps RNA structure nucleotide-by-nucleotide during transcription:

### Key Findings for mntP Riboswitch (4WJ)
- Aptamer folding begins with formation of the right leg (L1, P1.1, P1.2) at early transcript lengths
- Mn binding stabilizes the docked conformation at specific transcript lengths
- Expression platform efficiently commits to either active or inactive conformation
- Clear "riboswitching window" where Mn presence/absence determines outcome

### Key Findings for alx Riboswitch (3WJ)
- alx uniquely lacks the P2 helix, replaced by L2 "capping loop" (pH-sensing element)
- alx expression platform samples both active and inactive conformations much more frequently than mntP
- This dynamic sampling may explain alx's ability to integrate Mn and pH signals
- The alx L3 sequence (UCAUUAC) differs from mntP L3 (ACAUACU), contributing to pH-dependent Mn sensitivity

## Structural Basis for Dual-Input Sensing (alx only)

The 3WJ architecture of alx enables pH sensitivity through:
1. The L2 capping loop contains pH-sensitive adenosine A114
2. Protonation state of A114 (pKa ~8.5) determines loop structure
3. Loop structure modulates aptamer docking dynamics
4. Docking dynamics determine sensitivity to low Mn2+ concentrations

# Connections

- [[mis-metallation]] -- riboswitches prevent Mn toxicity by controlling Mn exporter expression before misincorporation can occur
- [[manganese]] -- detailed mechanism of Mn sensing at single-nucleotide resolution during transcription
- [[gene-regulation|riboswitch]] -- co-transcriptional folding and metal sampling as fundamental regulatory mechanism
- [[metal-homeostasis]] -- RNA-based metal sensing complementing protein metalloregulators
- [[gene-regulation]] -- kinetic competition between RNA folding and metal binding during transcription
- [[escherichia-coli]] -- model system for mntP and alx riboswitch characterization
- [[oxidative-stress]] -- Mn toxicity through ROS generation at alkaline pH
- [[labile-metal-pool]] -- riboswitches sense the labile Mn2+ pool in real time
- [[pH-sensing]] -- alx riboswitch as paradigm for multi-input RNA regulation
- [[metal-sensing]] -- yybP-ykoY family as largest metal-sensing riboswitch family (>1000 members)
- [[superoxide-dismutase]] -- Mn export regulation balances Mn availability for SOD vs. toxicity
