---
title: "McFarlane 2025 — A Manganese-Sparing Response Balances Competing Cellular Demands to Enable Staphylococcus aureus Infection"
type: source
created: 2026-04-09
updated: 2026-04-09
authors: [Riley A McFarlane, Jana N Radin, Rafat Mazgaj, Kevin J Waldron, David Lalaouna, Thomas E Kehl-Fie, Marthie M Ehlers]
year: 2025
journal: "mBio"
doi: "not yet verified"
evidence_level: animal-model
pmcid: "PMC12421985"
tags: [mismetallation, metal-homeostasis, manganese, iron, superoxide-dismutase, small-RNA, nutritional-immunity, calprotectin, staphylococcus-aureus, oxidative-stress, metal-sparing, virulence]
library_category: metal_homeostasis_bacteria
platform: wikibiome
condition: "sRNA-mediated manganese sparing during host-imposed metal starvation"
metals_discussed: [iron, manganese]
taxa_discussed: [escherichia-coli, helicobacter-pylori, staphylococcus-aureus]
karen_brain_primitives: [2, 3, 4]
key_findings: ["RsaC is a small RNA", "RsaC suppresses SodA translation"]
---

# Why This Paper Matters

This study discovers a previously unrecognized "manganese-sparing response" in [[staphylococcus-aureus]] mediated by the small RNA RsaC, revealing how pathogens resolve a fundamental conflict during infection: the need to maintain essential [[manganese]]-dependent processes while simultaneously defending against host-imposed [[oxidative-stress]] that also requires manganese (for Mn-SOD). Under host [[nutritional-immunity]] via [[calprotectin]], S. aureus faces Mn starvation. RsaC responds by suppressing translation of the Mn-dependent [[superoxide-dismutase]] SodA, thereby freeing Mn for other essential Mn-dependent processes. This is a deliberate sacrifice of antioxidant defense for metabolic survival. The paper demonstrates that RsaC is required for virulence in both subcutaneous and systemic mouse infection models, and that its importance depends on the severity of Mn limitation at specific tissue sites. This connects [[mis-metallation]] to virulence because SOD metalation with the wrong metal (or no metal) directly determines pathogen fitness during infection.

# Key Claims

- **RsaC is a small RNA** encoded in the 3' UTR of the S. aureus Mn transporter mntABC; it is induced by Mn limitation and activates a Mn-sparing response
- **RsaC suppresses SodA translation** (Mn-dependent SOD), reducing cellular Mn demand and freeing Mn for other essential Mn-dependent processes
- **Loss of RsaC sensitizes S. aureus to calprotectin** -- the key host Mn-restriction immune protein -- but benefits the bacterium under concurrent oxidative stress
- **RsaC enables metabolic flexibility** during Mn starvation: it is required for growth on both glucose and amino acids when Mn is limited
- **Iron supplementation rescues the delta-rsaC growth defect**, because many enzymes can use Fe or Mn interchangeably -- a beneficial [[mis-metallation]]
- **RsaC contributes to virulence in vivo**: delta-rsaC is outcompeted in subcutaneous infection; systemic infection outcome depends on tissue-specific Mn availability
- **SOD metalation determines function**: SodA uses Mn (or Fe), while the cambialistic SodM can use both; RsaC suppresses SodA but indirectly upregulates SodM
- **SODs bind their cofactor irreversibly**, making them an irrecoverable Mn sink during Mn limitation

# Methods & Findings

## The Mn-Sparing Response Model

In Mn-replete conditions:
1. MntR represses mntABC-rsaC operon
2. SodA is robustly expressed and metallated with Mn
3. SOD activity is high; oxidative stress resistance is maximal

Under Mn limitation (calprotectin exposure):
1. MntR no longer represses; mntABC and RsaC are expressed
2. RsaC suppresses SodA translation, freeing Mn
3. The Fe-utilizing SodM is induced (by unknown mechanism)
4. Net result: reduced but maintained SOD activity; preserved essential Mn-dependent metabolism

## Experimental Evidence

### Calprotectin Resistance
- delta-rsaC grows less robustly than WT in defined medium with CP and glucose or amino acids
- Ectopic rsaC expression from plasmid rescues the growth defect
- CP variant unable to bind Mn (delta-6His) eliminates the WT/delta-rsaC difference
- Fe supplementation rescues delta-rsaC, confirming Fe can substitute for Mn in affected enzymes

### SOD Activity Under Mn Starvation
- CP treatment reduces total SOD activity in both WT and delta-rsaC
- Loss of RsaC leads to elevated SodA activity in presence of CP and oxidative stress (paraquat)
- Counter-intuitively, delta-rsaC grows worse with CP+PQ despite higher SodA, because Mn is depleted from other essential processes
- delta-rsaC-delta-sodA mutant grows better than delta-rsaC in CP+PQ, confirming that SodA as an irrecoverable Mn sink is the problem

### Virulence
- Subcutaneous infection: delta-rsaC outcompeted by WT at days 1 and 7
- Systemic infection: delta-rsaC shows similar liver/kidney burdens to WT, but delta-rsaC-delta-mntC-delta-mntH shows reduced burdens in Mn-limited tissues

## Broader Implications for sRNA Metal Regulation

RsaC joins a small but growing family of metal-responsive sRNAs:
- **RyhB** (E. coli): Fe-sparing response under Fe limitation
- **s-SodF** (Streptomyces coelicolor): Ni-SOD suppression under Ni limitation
- **NikS** (H. pylori): Ni-responsive sRNA

These parallels suggest sRNAs may broadly coordinate bacterial responses to inorganic nutrient metal availability.

# Connections

- [[mis-metallation]] -- SOD metalation with Fe vs. Mn determines function; Fe substitution as beneficial mis-metallation
- [[manganese]] -- Mn-sparing response sacrifices SOD for essential metabolism
- [[superoxide-dismutase]] -- SodA (Mn-dependent) vs. SodM (cambialistic Fe/Mn) as competing Mn sinks
- [[nutritional-immunity]] -- calprotectin-mediated Mn restriction as host antimicrobial strategy
- [[calprotectin]] -- 40-50% of neutrophil protein; creates Mn-free zones at infection sites
- [[staphylococcus-aureus]] -- model pathogen for Mn-dependent virulence mechanisms
- [[oxidative-stress]] -- SOD suppression creates oxidative stress vulnerability during Mn starvation
- [[iron]] -- Fe substitution for Mn in enzymes as adaptive response
- [[gene-regulation]] -- sRNA-mediated post-transcriptional metal sparing response
- [[metal-homeostasis]] -- MntR metalloregulator controlling mntABC-rsaC operon
- [[virulence-factors|virulence]] -- RsaC required for pathogenesis in tissue-specific Mn-limited environments
