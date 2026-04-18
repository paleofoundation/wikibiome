---
title: "Bastida-Martinez 2025 — PexR Is a Noncanonical Regulator of the Peroxide Stress Response in Bacteria"
type: source
created: 2026-04-09
updated: 2026-04-09
authors: [Eva Bastida-Martinez, Irene del Rey-Navalon, Naike Ye, Catherine L Drennan, S Padmanabhan, Montserrat Elias-Arnanz]
year: 2025
journal: "Nucleic Acids Research"
doi: "not yet verified"  # <!-- DOI lookup needed: Nucleic Acids Research 2025 -->
pmcid: "PMC12754779"
tags: [mismetallation, metal-homeostasis, zinc, iron, peroxide-stress, metal-sensing, GAF-domain, transcription-regulation, myxococcus, oxidative-stress, Fenton-chemistry]
library_category: metal_homeostasis_bacteria
platform: wikibiome
condition: "metal-dependent peroxide sensing and transcriptional regulation"
metals_discussed: [iron, zinc]
karen_brain_primitives: [3, 4, 9]
key_findings: ["PexR is a bacterial enhancer binding protein (bEBP)"]
---

# Why This Paper Matters

This paper discovers a novel metal-dependent peroxide sensor, PexR, in Myxococcus xanthus that directly couples [[iron]]/[[zinc]] binding to H2O2 sensing and antioxidant gene regulation. For the [[mis-metallation]] framework, PexR is remarkable because its N-terminal GAF domain binds both Zn2+ and Fe2+ -- and the identity of the bound metal determines whether the protein is in its resting (repressive, Zn2+/Fe2+-bound) or activated (H2O2-sensing) state. When H2O2 oxidizes the bound Fe2+ via Fenton chemistry, it releases the metal and activates PexR to drive expression of peroxiredoxin (ahpC) and catalase (katB). This represents a "metal switch" where the protein uses metal identity and redox state as an integrated signal for peroxide stress. PexR expands the toolkit of genetically encoded H2O2 sensors beyond the canonical OxyR and PerR regulators, and its dual Zn2+/Fe2+ binding in the GAF domain makes it a direct sensor of the metal-redox interface central to [[mis-metallation]].

# Key Claims

- **PexR is a bacterial enhancer binding protein (bEBP)** that uses sigma-54 (sigma-A in M. xanthus) to activate peroxiredoxin ahpC and catalase katB expression under H2O2 stress
- **The N-terminal GAF domain binds both Zn2+ and Fe2+** and autoinhibits PexR in the resting state; H2O2 senses through Fenton reaction with Fe2+, releasing metal and activating the protein
- **PexR co-regulation of AhpC and KatB is essential** for viability -- deleting ahpC causes pleiotropy and synthetic lethality when combined with katB or pexR deletion
- **PexR operates independently of OxyR and PerR**, which M. xanthus lacks, representing a third pathway for H2O2 sensing in bacteria
- **ICP-MS analysis shows PexR GAF domain binds Zn2+** with Kd = 0.71 x 10^-12 M and Fe2+ with Kd = 1.26 x 10^-15 M aerobically
- **H2O2 exposure releases Zn2+ from the GAF domain**, consistent with oxidation of metal-coordinating residues
- **PexR is conserved across Myxococcota** and frequently co-occurs with OxyR or PerR in other phyla, suggesting complementary rather than redundant roles

# Methods & Findings

## Dual Metal Binding in the GAF Domain

The PexR GAF domain (cGMP-specific phosphodiesterases, adenylyl cyclases, and FhlA domain) coordinates metals through a site that accommodates both Zn2+ and Fe2+:
- Aerobically purified PexR GAF binds Zn2+ (measured by PAR assay, Kd = 0.71 x 10^-12 M)
- Anaerobically reconstituted PexR Fe2+-GAF-AAA+ binds Fe2+ (measured by ferene assay, Kd = 1.26 x 10^-15 M)
- 100 mM H2O2 releases Zn2+ from the aerobic GAF domain and Fe2+ from the anaerobic reconstituted form

## H2O2 Sensing Mechanism

Under resting conditions:
1. PexR GAF domain binds Zn2+ or Fe2+, maintaining autoinhibition
2. PexR dimers are in resting state, bound to UAS sites but unable to activate transcription

Under peroxide stress:
1. H2O2 reacts with bound Fe2+ via Fenton chemistry, generating hydroxyl radicals
2. Oxidation of metal-coordinating residues releases the metal ion
3. Loss of metal binding relieves GAF domain autoinhibition
4. PexR undergoes oligomeric transitions (dimers to higher-order assemblies)
5. Activated PexR drives sigma-54-dependent transcription of ahpC and katB

## Comparison with Canonical H2O2 Sensors

| Sensor | Metal | Mechanism | Distribution |
|--------|-------|-----------|-------------|
| OxyR | None (Cys-based) | Disulfide bond formation | Gram-negative, some Gram-positive |
| PerR | Fe2+ or Mn2+ | His oxidation to 2-oxo-His | Gram-positive (Firmicutes) |
| PexR | Zn2+/Fe2+ | Fenton-mediated metal release from GAF | Myxococcota, possibly broader |

## Genomic Conservation

PexR is conserved across Myxococcota and predicted to operate in other bacterial phyla. It frequently co-occurs with OxyR or PerR homologs, suggesting that bacteria may use multiple, complementary metal-dependent strategies for peroxide defense.

# Connections

- [[mis-metallation]] -- PexR uses dual Zn2+/Fe2+ binding as a metal-identity switch for stress sensing
- [[iron]] -- Fe2+ Fenton chemistry is the sensing mechanism for H2O2
- [[zinc]] -- Zn2+ binding maintains resting-state autoinhibition
- [[oxidative-stress]] -- novel H2O2 sensing pathway complementing OxyR and PerR
- [[fenton-chemistry]] -- Fe2+ + H2O2 reaction directly drives PexR activation
- [[metal-homeostasis]] -- metal binding/release as regulatory switch in transcription
- [[iron-sulfur-clusters]] -- related mechanism to PerR Fe-sensing but in a GAF domain context
- [[gene-regulation]] -- sigma-54-dependent transcription activation by bEBP
- [[superoxide-dismutase]] -- PexR regulates complementary antioxidant systems (peroxiredoxin, catalase)
- [[biofilm]] -- M. xanthus predatory and soil-dwelling lifestyle exposes it to diverse oxidative stresses
- [[metal-sensing]] -- GAF domain as novel metal-sensing module distinct from Fur/DtxR families
