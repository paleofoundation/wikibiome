---

title: Superoxide Dismutase
type: concept
created: 2026-04-17
updated: 2026-04-17
last_substantive_update: 2026-04-17
sources: [nong-2026-sod-deficiency-oxidative-stress-ecoli, londono-2025-epr-manganese-antioxidant-borrelia-burgdorferi, mcfarlane-2025-manganese-sparing-response-rsac-saureus-infection, goh-2024-group-b-streptococcus-metal-stress-mismetallation-ros, cassat-2012-metal-acquisition-staphylococcus-aureus, akbari-2022-metal-homeostasis-streptococci, de-lay-2024-ccn-srnas-zinc-resistance-pneumococcus-virulence, wang-2025-zinc-ionophore-pbt2-tigecycline-resistance-klebsiella, ouattara-2025-prrf-srnas-brnd-iron-peroxide-pseudomonas, wei-2022-oxidative-stress-parkinsons-meta-analysis, abudawood-2021-antioxidant-heavy-metals-pcos, jaishankar-2014-heavy-metal-toxicity-mechanisms]
source_count: 12
tags: [metalloenzyme, antioxidant, oxidative-stress, manganese-SOD, copper-zinc-SOD, virulence-factor, nutritional-immunity, mis-metallation]
karen_brain_primitives: [1, 2, 3, 4, 5, 8, 9]
seo_target: "superoxide dismutase microbiome metal cofactor virulence"
platform: wikibiome
---

# Superoxide Dismutase (SOD)

## Overview

**Superoxide dismutases** are metalloenzymes that catalyze the dismutation of superoxide radical (O2-) into hydrogen peroxide (H2O2) and molecular oxygen -- the first line of defense against oxidative damage in all aerobic organisms. What makes SOD uniquely important in microbiome biology is that different SOD isoforms require different metal cofactors (Mn, Cu/Zn, Fe, or Ni), creating a direct link between metal availability and oxidative defense capacity. Host nutritional immunity exploits this dependency: by sequestering manganese and zinc via [[calprotectin]], the immune system disables pathogen SODs and leaves bacteria vulnerable to the oxidative burst.

## Isoforms and Metal Cofactors

| Isoform | Cofactor | Location | Significance |
|---------|----------|----------|-------------|
| **SOD1 (Cu/Zn-SOD)** | Cu, Zn | Cytoplasm | Most abundant intracellular SOD in mammals; also produced by pathogens for phagosome survival |
| **SOD2 (Mn-SOD)** | Mn | Mitochondria | Essential for life (knockout lethal in mice); primary defense against ETC-generated superoxide |
| **SOD3 (EC-SOD)** | Cu, Zn | Extracellular | Protects extracellular matrix from oxidative damage |
| **SodB (Fe-SOD)** | Fe | Bacterial cytoplasm | Common in Gram-negative bacteria; regulated by Fur and PrrF sRNAs [[ouattara-2025-prrf-srnas-brnd-iron-peroxide-pseudomonas]] |
| **Ni-SOD** | Ni | Prokaryotic | Found in *Streptomyces* spp.; uses nickel as sole cofactor |
| **SodM (cambialistic)** | Mn or Fe | Bacterial | Can use either cofactor; provides metabolic flexibility under metal limitation (e.g., *S. aureus*) |

**SOD metalation is irreversible** -- once a SOD protein binds its cofactor, it cannot exchange it. This makes SODs an "irrecoverable metal sink," and cells must carefully allocate scarce metals between SOD and other essential enzymes [[mcfarlane-2025-manganese-sparing-response-rsac-saureus-infection]].

## SOD as a Virulence Factor

Pathogen-produced SODs are bona fide virulence factors -- they neutralize the superoxide component of the host oxidative burst (neutrophils, macrophages), enabling survival within phagosomes.

### Key Pathogen SOD Systems

- **[[staphylococcus-aureus]]**: Expresses both SodA (Mn-dependent) and SodM (cambialistic, Mn or Fe). Under calprotectin-mediated Mn starvation, *S. aureus* deploys the **RsaC sRNA** to deliberately suppress SodA, sparing Mn for other essential processes. SodM provides backup antioxidant defense using Fe when Mn is unavailable [[mcfarlane-2025-manganese-sparing-response-rsac-saureus-infection]], [[cassat-2012-metal-acquisition-staphylococcus-aureus]].
- **[[streptococcus-pneumoniae]]**: Mn-dependent SodA is the primary antioxidant. Zinc can displace manganese from SodA via the [[irving-williams-series]], inactivating the enzyme -- this is how zinc intoxication by macrophages kills pneumococci [[de-lay-2024-ccn-srnas-zinc-resistance-pneumococcus-virulence]].
- **[[streptococcus-agalactiae]]** (GBS): Mn-dependent SodA; zinc displaces Mn from SodA as a host defense mechanism [[goh-2024-group-b-streptococcus-metal-stress-mismetallation-ros]].
- **[[candida-albicans]]**: Cu-SOD (Sod1) is critical for surviving the phagosomal oxidative burst.
- **[[candida-auris]]**: Cu/Zn-SOD (Sod1) in key virulence enzymes.
- **[[pseudomonas-aeruginosa]]**: Both MnSOD and Cu/Zn-SOD; Fe-SOD (SodB) regulated by PrrF sRNAs under iron limitation [[ouattara-2025-prrf-srnas-brnd-iron-peroxide-pseudomonas]].
- **[[salmonella-typhimurium]]**: SodCI (Cu/Zn-SOD) is a periplasmic virulence factor essential for intracellular survival.
- **[[porphyromonas-gingivalis]]**: Mn-SOD critical for survival in the inflammatory periodontal environment.
- **[[fusobacterium-nucleatum]]**: Mn-SOD critical for survival in the inflamed tumor microenvironment.
- **[[neisseria-meningitidis]]**: MnSOD protects against neutrophil oxidative burst.

### The Metal-Free Alternative: Borrelia burgdorferi

**[[borrelia]]** (*B. burgdorferi*) has eliminated iron entirely from its biology and relies on MnSOD as its primary antioxidant. It also accumulates non-proteinaceous H-Mn metabolite complexes (histidine-manganese, citrate-manganese) that provide additional antioxidant capacity independent of SOD protein [[londono-2025-epr-manganese-antioxidant-borrelia-burgdorferi]]. This iron-free lifestyle is a radical evolutionary strategy to evade host nutritional immunity targeting iron.

## Host Nutritional Immunity Targets SOD

The host immune system specifically targets pathogen SOD function through metal sequestration:

1. **[[calprotectin]]** sequesters Mn2+ and Zn2+, starving bacterial Mn-SOD (SodA) of its essential cofactor.
2. **Zinc poisoning**: Macrophages pump Zn2+ into phagosomes, where it displaces Mn from SodA (following the Irving-Williams series: Zn2+ binds more tightly than Mn2+), inactivating the enzyme [[goh-2024-group-b-streptococcus-metal-stress-mismetallation-ros]].
3. **The result**: Pathogens stripped of functional SOD are vulnerable to superoxide-mediated killing.

This is Primitive 4 in action -- microbial metal dependencies as Achilles' heels.

## SOD and Mis-Metallation

SOD is a prime target for [[mis-metallation]]:

- **Zn displaces Mn from SodA** -- zinc's higher Irving-Williams affinity means it outcompetes manganese for the same binding site, but zinc-loaded SodA is catalytically inactive [[wang-2025-zinc-ionophore-pbt2-tigecycline-resistance-klebsiella]].
- **Cu excess can mis-metallate Mn-SOD** in the periplasm before the protein folds correctly.
- **SOD metalation is irreversible**, so a single mis-metallation event permanently inactivates that protein molecule. The cell's only recourse is to synthesize new SOD -- an energy-intensive response during infection.

## SOD Deficiency and Metabolic Rewiring

When SOD is lost or inhibited, bacteria undergo massive metabolic rewiring. In *E. coli* SodA/SodB double deletion mutants [[nong-2026-sod-deficiency-oxidative-stress-ecoli]]:

- Oxidative phosphorylation is suppressed (Fe-S cluster enzymes in the ETC become too vulnerable without SOD protection).
- Pentose phosphate pathway is upregulated (generates NADPH for alternative antioxidant systems).
- Siderophore production (enterobactin) increases -- linking antioxidant loss to iron acquisition.
- [[iron-sulfur-clusters]] become the critical vulnerability, as superoxide directly damages [4Fe-4S] centers.

## SOD as a Disease Biomarker

SOD activity is altered across multiple conditions linked to metal dyshomeostasis:

| Condition | SOD Change | Mechanism |
|-----------|-----------|-----------|
| **[[pcos]]** | Decreased (9.30 vs 17.39 IU/ml) | Cu/Zn imbalance; Zn deficiency impairs SOD1 [[abudawood-2021-antioxidant-heavy-metals-pcos]] |
| **[[parkinsons-disease]]** | Cu depletion impairs SOD1 | Cu loss in substantia nigra [[wei-2022-oxidative-stress-parkinsons-meta-analysis]] |
| **[[alzheimers-disease]]** | Cu/Zn-SOD impaired | Cu depletion in cortex |
| **[[colorectal-cancer]]** | Cu/Zn ratio elevation → SOD1 dysfunction | Cu/Zn imbalance across cancers |
| **[[breast-cancer]]** | Mn depletion → reduced SOD2 | Mn deficiency in tumor microenvironment |
| **[[hashimotos-thyroiditis]]** | Reduced SOD activity | Cu as SOD cofactor linked to thyroid function |

The pattern: **elevated Cu/Zn ratio** (seen across cancer, CVD, PCOS, T2D, IBD) directly compromises SOD1 function by altering the cofactor availability.

## Cross-References

- [[oxidative-stress]] -- SOD as the first-line antioxidant defense
- [[calprotectin]] -- Mn/Zn sequestration targeting pathogen SODs
- [[mis-metallation]] -- Zn displacing Mn from SodA
- [[manganese]] -- Mn-SOD (SOD2) as primary mitochondrial antioxidant
- [[zinc]] -- Cu/Zn-SOD (SOD1) cofactor; zinc intoxication inactivates SodA
- [[copper]] -- Cu/Zn-SOD (SOD1) cofactor
- [[iron-sulfur-clusters]] -- SOD protects Fe-S clusters from superoxide damage
- [[nutritional-immunity]] -- Host strategy targeting pathogen SOD metalation
- [[metal-dependent-virulence]] -- SOD as virulence factor across pathogens
- [[irving-williams-series]] -- Explains Zn→Mn displacement in SodA
