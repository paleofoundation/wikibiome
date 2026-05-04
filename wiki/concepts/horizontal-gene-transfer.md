---

title: Horizontal Gene Transfer and Mobile Genetic Elements
type: concept
created: 2026-04-17
updated: 2026-04-17
last_substantive_update: 2026-04-17
sources: [baker-austin-2006-co-selection-antibiotic-metal-resistance, miranda-2022-metalloids-antibiotic-resistance-ckd-gut, rebelo-2021-enterococcus-metal-antibiotic-resistance, hu-2016-nickel-contamination-antibiotic-resistance-soils, agarwal-2024-airborne-arg-mrg-ewaste-recycling, shen-2025-high-fat-low-fiber-diet-gut-resistome, maurya-2020-arg-soil-microbiomes-co-selection, wales-2015-co-selection-resistance-antibiotics-biocides-metals]
source_count: 8
tags: [HGT, mobile-genetic-elements, plasmid, transposon, integron, intI1, ARG, MRG, co-selection, resistome, conjugation]
karen_brain_primitives: [1, 4, 6]
seo_target: "horizontal gene transfer mobile genetic elements antibiotic metal resistance"
platform: wikibiome
---

# Horizontal Gene Transfer and Mobile Genetic Elements

## Overview

Horizontal gene transfer (HGT) is the movement of genetic material between organisms outside of parent-to-offspring inheritance. In the gut microbiome, HGT -- primarily mediated by mobile genetic elements (MGEs) including plasmids, transposons, integrons, and integrative conjugative elements (ICEs) -- is the primary mechanism by which antibiotic resistance genes (ARGs) and metal resistance genes (MRGs) spread across bacterial species and phyla.

For WikiBiome, HGT is the genetic vehicle for [[co-selection]]: when metal resistance genes and antibiotic resistance genes co-locate on the same MGE, selecting for one automatically selects for both. This means environmental heavy metal contamination directly drives antibiotic resistance through MGE-mediated co-transfer.

## Types of Mobile Genetic Elements

### Plasmids
Self-replicating extrachromosomal DNA elements; the primary vehicles for conjugative transfer of resistance genes between bacteria.

Key example: A single transferable *Enterococcus* plasmid carries tcrB (copper resistance) + vanA (vancomycin resistance) + ermB (macrolide resistance) -- copper in pig feed selects for vancomycin-resistant enterococci (VRE) without any antibiotic exposure [[wales-2015-co-selection-resistance-antibiotics-biocides-metals]].

### Transposons
DNA segments that can "jump" between chromosomal and plasmid locations.

Tn21-type transposons: The canonical vehicle for co-resistance spread. Carry mercury resistance (mer operon) + class 1 integron with multiple ARG cassettes [[baker-austin-2006-co-selection-antibiotic-metal-resistance]]. Other notable transposons: Tn916 (tetracycline resistance; enriched in high-fat diets), ISBf10, IS91 [[shen-2025-high-fat-low-fiber-diet-gut-resistome]].

### Integrons
Gene capture and expression systems that can accumulate multiple resistance gene cassettes.

intI1 (class 1 integron integrase): The single most important genetic marker for anthropogenic resistance gene dissemination. Present at elevated levels in all metal-contaminated environments studied. Correlated with ARG abundance in nickel-contaminated soils [[hu-2016-nickel-contamination-antibiotic-resistance-soils]].

### Integrative Conjugative Elements (ICEs)
Chromosomally integrated elements that can excise, transfer by conjugation, and integrate into new hosts. Larger than transposons; often carry multiple resistance determinants.

## Co-Location of Metal and Antibiotic Resistance

The co-location of MRGs and ARGs on shared MGEs is the genetic basis for [[co-selection]]:

| MGE Type | Metal Resistance | Antibiotic Resistance | Context | Source |
|----------|-----------------|----------------------|---------|--------|
| Tn21 transposon | merA (mercury) | Multiple ARGs via integron cassettes | Canonical co-resistance | [[baker-austin-2006-co-selection-antibiotic-metal-resistance]] |
| Enterococcus plasmid | tcrB (copper) | vanA (vancomycin), ermB (macrolide) | Pig farming | [[wales-2015-co-selection-resistance-antibiotics-biocides-metals]] |
| CKD gut MGEs | cadA3k/cadA2k (cadmium) | strB, floR, acrB, arr2 | Never prescribed antibiotics | [[miranda-2022-metalloids-antibiotic-resistance-ckd-gut]] |
| Soil integrons | Ni/Cu/Zn resistance | 149 ARGs in Ni-contaminated soils | E-waste | [[hu-2016-nickel-contamination-antibiotic-resistance-soils]] |
| Airborne MGEs | Multiple MRGs | Multiple ARGs | E-waste recycling aerosols | [[agarwal-2024-airborne-arg-mrg-ewaste-recycling]] |

## Temporal Evolution

Rebelo et al. (2021) traced 120 years of *Enterococcus* isolates, revealing that metal tolerance genes (MeT) have been present since the 1900s, but their co-occurrence with ARGs accelerated dramatically since the 1990s -- coinciding with intensified antibiotic use in agriculture and medicine [[rebelo-2021-enterococcus-metal-antibiotic-resistance]]. HGT has assembled increasingly complex resistance cassettes over time.

## Diet Shapes MGE Abundance

The gut resistome is modulated by diet:
- High-fat diet increases Tn916, IS91, intI1 abundance in the gut microbiome.
- High-fiber diet reduces MGE abundance.
- This suggests dietary intervention can modulate HGT-mediated resistance spread [[shen-2025-high-fat-low-fiber-diet-gut-resistome]].

## The Persistence Problem

Metals are permanent selective pressures -- unlike antibiotics, which degrade and can be withdrawn, heavy metals persist indefinitely in soils, water, and the food chain. This means MGEs carrying co-located MRGs and ARGs are maintained in bacterial populations even in the complete absence of antibiotic use, as long as metal contamination persists [[baker-austin-2006-co-selection-antibiotic-metal-resistance]].

## Biofilm and HGT

[[biofilm]] environments amplify HGT rates:
- High cell density increases conjugation frequency.
- Extracellular DNA (eDNA) in biofilm matrix is available for natural transformation.
- [[functional-shielding]] in polymicrobial biofilms creates mixed communities where cross-phylum MGE transfer occurs.

## Cross-References

- [[co-selection]] -- The selection mechanism; this page covers the genetic vehicles
- [[antimicrobial-resistance]] -- The public health consequence
- [[proteobacteria]] -- MGE-rich phylum; primary reservoir
- [[enterobacteriaceae]] -- Major ARG/MRG carriers
- [[enterococcus]] -- Key reservoir organism with 120-year MGE history
- [[biofilm]] -- Environment amplifying HGT rates
- [[antimicrobial-metals]] -- Therapeutic metal use and resistance selection
- [[cadmium]] -- cadA genes on mobile elements
- [[nickel]] -- Ni contamination drives intI1 and ARG enrichment
