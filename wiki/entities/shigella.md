---
title: "Shigella"
type: entity
subtype: microbe
created: 2026-04-19
updated: 2026-04-21
last_substantive_update: 2026-04-21
sources:
  - maier-2019-nickel-microbial-pathogenesis
  - kaliannan-2018-estrogen-gut-microbiome-metabolic-syndrome
  - wang-2024-ibd-integrated-16s-metagenomics-virulence-factors
  - ata-2019-endobiota-study-vaginal-cervical-gut-microbiota-endometriosis
  - hicks-2025-oral-vaginal-stool-microbial-signatures-endometriosis
  - ser-2023-current-updates-microbiome-endometriosis-review
  - cronin-2023-diet-microbiome-crohns-hidradenitis
  - strati-2017-altered-gut-microbiota-mycobiota-asd
  - hayashi-2019-gut-microbiome-metabolites-heart-failure
  - gao-2020-gut-microbial-biomarkers-acs-post-stemi
  - kang-2023-diagnosis-crohns-uc-microbiome
  - zhu-2024-toxic-essential-metals-gut-microbiota
  - khan-2011-novel-approach-enterobacteriaceae-identification-clinical
  - miranda-2022-metalloids-antibiotic-resistance-ckd-gut
source_count: 14
tags: [pathogen, gram-negative, enterobacteriaceae, dysentery, iron-dependent, siderophores, invasive, nickel, endometriosis, IBD]
seo_target: "Shigella gut microbiome iron siderophores dysbiosis"
wikipedia_differentiation: "Metal dependency profile linking iron/nickel-dependent virulence to disease signatures; enrichment in endometriosis vaginal/cervical microbiome; Escherichia-Shigella complex as dysbiosis marker across 15+ conditions"
gram_stain: "negative"
oxygen_requirement: "facultative anaerobe"
metal_dependencies: [iron, nickel]
key_enzymes: [type-III-secretion-system, aerobactin, enterobactin, IcsA-actin-polymerization]
pathogenic_potential: "obligate"
conditions_enriched_in: [endometriosis, inflammatory-bowel-disease, dysentery]
conditions_depleted_in: []
platform: wikibiome
---

# Shigella

Shigella is a genus of Gram-negative, facultatively anaerobic bacteria in the family Enterobacteriaceae, closely related to *Escherichia coli* — so closely that many 16S rRNA-based studies report them as the *Escherichia/Shigella* complex, unable to distinguish the two genera at the amplicon level. Shigella species (*S. dysenteriae*, *S. flexneri*, *S. sonnei*, *S. boydii*) are the causative agents of bacillary dysentery and are among the most invasive enteric pathogens, capable of penetrating and destroying colonic epithelial cells.

In the WikiBiome framework, Shigella is notable for two reasons: its metal-dependent virulence (iron and nickel requirements that make it vulnerable to nutritional immunity) and its frequent appearance as part of the *Escherichia/Shigella* bloom that characterizes dysbiosis across dozens of disease signatures.

## Metal Dependencies

### Iron — Siderophore Arsenal

Shigella possesses multiple iron acquisition systems, reflecting the critical importance of iron for its intracellular survival and replication:

- Enterobactin: The primary catecholate siderophore shared with *E. coli*, with the highest known Fe3+ binding affinity (Kd ~10^-49 M). Countered by host [[lipocalin-2]] [[maier-2019-nickel-microbial-pathogenesis]].
- Aerobactin: A hydroxamate siderophore that evades lipocalin-2 neutralization, providing a backup iron acquisition system when enterobactin is blocked.
- Heme uptake: Shigella can acquire iron directly from host hemoglobin and heme proteins during tissue invasion.

Iron availability in the gut directly affects Shigella virulence — iron supplementation in endemic regions has been associated with increased dysentery severity, while host [[hepcidin]]-driven iron sequestration during infection represents nutritional immunity against Shigella (Karen's Brain Primitive 2).

### Nickel

*Shigella flexneri* harbors nickel-dependent enzymes relevant to its acid resistance and survival during gastric transit [[maier-2019-nickel-microbial-pathogenesis]]. The nickel connection links Shigella to the broader pattern of nickel-dependent enteric pathogens in this wiki.

## Key Virulence Factors

- Type III secretion system (T3SS): Encoded on the virulence plasmid; injects effector proteins (IpaB, IpaC, IpaD) into host epithelial cells to trigger bacterial uptake and intracellular spread.
- IcsA/VirG: Surface protein enabling actin-based motility within host cells — Shigella propels itself through the cytoplasm and spreads directly to adjacent cells without extracellular exposure.
- Shiga toxin: Produced by *S. dysenteriae* type 1; inhibits protein synthesis; causes hemorrhagic colitis and hemolytic uremic syndrome (HUS).
- LPS endotoxin: Drives the intense inflammatory response characteristic of shigellosis.

## The Escherichia/Shigella Complex in Dysbiosis

Because 16S rRNA sequencing cannot reliably distinguish *Escherichia* from *Shigella*, most microbiome studies report an *Escherichia/Shigella* operational taxonomic unit. This complex is one of the most consistently enriched taxa across disease signatures in this wiki:

- Endometriosis: *Escherichia/Shigella* enriched in cervical samples of endometriosis patients, with decreased Gardnerella, Atopobium, and Megasphaera [[ata-2019-endobiota-study-vaginal-cervical-gut-microbiota-endometriosis]] [[hicks-2025-oral-vaginal-stool-microbial-signatures-endometriosis]] [[ser-2023-current-updates-microbiome-endometriosis-review]].
- Inflammatory bowel disease: Enrichment of *Escherichia/Shigella* is one of the most reproducible IBD microbiome findings, driven by inflammation-associated iron availability favoring siderophore producers [[wang-2024-ibd-integrated-16s-metagenomics-virulence-factors]] [[kang-2023-diagnosis-crohns-uc-microbiome]] [[cronin-2023-diet-microbiome-crohns-hidradenitis]].
- Heart failure: Part of the Enterobacteriaceae bloom in decompensated heart failure [[hayashi-2019-gut-microbiome-metabolites-heart-failure]] [[gao-2020-gut-microbial-biomarkers-acs-post-stemi]].
- ASD: Enrichment reported in altered gut microbiota of ASD children [[strati-2017-altered-gut-microbiota-mycobiota-asd]].
- CKD: *Escherichia/Shigella* enrichment associated with metalloid resistance genes in CKD gut microbiome [[miranda-2022-metalloids-antibiotic-resistance-ckd-gut]].
- Estrogen recirculation: *Escherichia/Shigella* species possess beta-glucuronidase activity, contributing to estrogen deconjugation in the estrobolome [[kaliannan-2018-estrogen-gut-microbiome-metabolic-syndrome]].

## Metal-Antibiotic Resistance

Shigella species, like other Enterobacteriaceae, carry metal resistance genes co-located with antibiotic resistance determinants on mobile genetic elements. Environmental metal exposure selects for multidrug-resistant Shigella strains — a direct example of the co-selection paradigm [[miranda-2022-metalloids-antibiotic-resistance-ckd-gut]] [[zhu-2024-toxic-essential-metals-gut-microbiota]].

## Cross-References

- [[escherichia-coli]] — phylogenetically near-identical; reported together in most 16S studies
- [[adherent-invasive-e-coli]] — shares iron-dependent invasive strategy
- [[iron]] — siderophore-dependent virulence; nutritional immunity target
- [[siderophores]] — enterobactin and aerobactin as primary iron acquisition systems
- [[nickel]] — nickel-dependent acid resistance
- [[lipocalin-2]] — host counter-siderophore defense
- [[estrobolome]] — beta-glucuronidase activity contributes to estrogen recirculation
- [[co-selection]] — metal and antibiotic resistance on shared mobile elements
- [[enterobacteriaceae]] — family-level enrichment in dysbiosis across conditions
