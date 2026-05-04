---
title: Siderophores
type: concept
created: 2026-04-18
updated: 2026-04-18
last_substantive_update: 2026-04-18
sources: [patil-2021-infection-metallomics-covid-era, khorsand-2022-enterobacteriaceae-ecoli-ibd-ibdmdb-metagenomics, carvalho-2014-siderophores-trojan-horses-mdr, devarajalu-2025-nec-gut-microbiota-indian-preterm-shotgun, pandey-2021-galbofloxacin-gallium-siderophore-staph, chairatana-2015-salmochelin-pathogen-selective-killing, passari-2023-siderophores-medical-applications, braud-2010-siderophores-pseudomonas-metal-tolerance, cassat-2012-metal-acquisition-staphylococcus-aureus, maier-2019-nickel-microbial-pathogenesis, bao-2024-iron-homeostasis-intestinal-immunity-gut-microbiota, pendergrass-2026-nickel-nec-preterm-gut, romero-espejel-2013-streptococcus-pneumoniae-iron, han-2022-berberine-methimazole-graves-microbiome]
source_count: 14
tags: [siderophores, iron-acquisition, virulence, nutritional-immunity, iron, chelation, pathogenesis, competitive-exclusion, Trojan-horse]
karen_brain_primitives: [4, 8]
seo_target: "siderophores iron bacteria"
platform: wikibiome
---

# Siderophores

Siderophores are small, high-affinity iron-chelating molecules secreted by bacteria, fungi, and some plants to scavenge ferric iron (Fe3+) from their environment. In the context of infection, siderophores are the molecular weapons pathogens deploy to break through [[nutritional-immunity]] -- the host strategy of starving invaders of essential metals. The evolutionary arms race between siderophore-producing pathogens and host counter-defenses (like [[lipocalin-2]], [[lactoferrin]], and [[transferrin]]) is one of the most ancient and consequential battles in biology.

For the broader story of metal-scavenging molecules including nickelophores and dual-function metallophores, see [[siderophores-metallophores]].

## Why Siderophores Matter

Free iron in the human body is vanishingly scarce -- approximately 10^-24 M free Fe3+ in serum, far below the ~10^-6 M bacteria need to grow. The host achieves this through an elaborate system of iron-binding proteins: transferrin in blood, lactoferrin at mucosal surfaces, ferritin in storage, and hepcidin-mediated sequestration during infection. Siderophores are how pathogens fight back, producing chelators with binding affinities that can exceed those of host proteins.

This creates a direct link to disease: organisms that produce the most effective siderophores, or that possess the most sophisticated iron-uptake systems, hold a competitive advantage in the metal-scarce gut environment. When [[inflammation]] drives hepcidin up and sequesters iron further, the selective pressure favoring siderophore-producers intensifies -- explaining why dysbiosis during inflammation typically enriches iron-pirating Enterobacteriaceae at the expense of commensals [[khorsand-2022-enterobacteriaceae-ecoli-ibd-ibdmdb-metagenomics]].

## Major Siderophore Classes

| Siderophore | Producer | Type | Fe3+ Affinity | Notable Feature |
|---|---|---|---|---|
| Enterobactin | *E. coli*, Enterobacteriaceae | Catecholate | Kd ~10^-49 M (strongest known) | Countered by host [[lipocalin-2]] |
| Salmochelin | *Salmonella*, uropathogenic *E. coli* | Glucosylated catecholate | High | Evades lipocalin-2 binding |
| Yersiniabactin | *Yersinia*, *Klebsiella*, UPEC | Mixed | High | Also binds nickel (dual metallophore) |
| Pyoverdine | *[[pseudomonas-aeruginosa]]* | Hydroxamate/catecholate | Very high | Fluorescent; also chelates Al, Ni, Zn |
| Staphyloferrin A/B | *[[staphylococcus-aureus]]* | Carboxylate | Moderate | Critical when heme unavailable |
| Mycobactins | *M. tuberculosis* | Mixed | High | Species-specific side chains enable diagnostics |
| TAFC | *Aspergillus fumigatus* | Hydroxamate | High | Detectable in patient urine within hours |

## The Host Counter-Attack

The host has evolved multiple counter-siderophore defenses:

- [[lipocalin-2|Lipocalin-2]] (siderocalin, NGAL): Binds and neutralizes enterobactin, the most potent bacterial siderophore. However, some pathogens have evolved "stealth siderophores" -- glucosylated variants like salmochelin that evade lipocalin-2 binding [[chairatana-2015-salmochelin-pathogen-selective-killing]].
- [[lactoferrin|Lactoferrin]]: Binds free iron at mucosal surfaces, reducing substrate availability for siderophore loading.
- [[hepcidin|Hepcidin]]: The master regulator of systemic iron; drives iron into macrophages and away from serum during infection, but this creates collateral damage by producing [[iron]]-loaded macrophages that some intracellular pathogens exploit.
- [[calprotectin|Calprotectin]]: Sequesters zinc and manganese rather than iron, but the principle is identical -- metal denial as antimicrobial defense.

## The Siderophore as Achilles' Heel

The dependence of pathogens on siderophores creates therapeutic opportunities:

### Trojan Horse Antibiotics
Siderophore-antibiotic conjugates exploit bacterial iron-uptake machinery to deliver drugs directly into pathogen cells. The bacterium imports what it thinks is an iron-loaded siderophore, but instead internalizes a lethal antibiotic payload. Cefiderocol is the first FDA-approved siderophore-cephalosporin conjugate. Gallium-siderophore hybrids (e.g., galbofloxacin) are in development -- gallium mimics iron but cannot be reduced, jamming iron-dependent enzymes once inside the cell [[pandey-2021-galbofloxacin-gallium-siderophore-staph]] [[carvalho-2014-siderophores-trojan-horses-mdr]].

### Therapeutic Siderophore Upregulation
Berberine supplementation in Graves' disease patients significantly upregulated enterobactin biosynthesis pathways, improving iron acquisition and correlating with thyroid function recovery — since iron is required for thyroid peroxidase (TPO) activity [[han-2022-berberine-methimazole-graves-microbiome]]. This demonstrates that siderophore modulation can be therapeutically beneficial, not just a pathogenic strategy.

### Competitive Exclusion
Probiotic organisms that produce their own siderophores can outcompete pathogens for iron. This is the ecological logic of Karen's Brain Primitive 8 (Siderophore Competition and Iron Ecology): introduce organisms with superior iron-acquisition systems to displace pathogenic siderophore-producers [[passari-2023-siderophores-medical-applications]].

### Diagnostic Applications
Siderophores in patient specimens (urine, serum, sputum) can serve as biomarkers for specific infections. TAFC detection identifies invasive aspergillosis; mycobactin profiles distinguish mycobacterial species [[patil-2021-infection-metallomics-covid-era]].

## Disease Context

Siderophore competition is relevant across multiple disease signatures:

- Inflammatory bowel disease: Inflammation-driven iron sequestration selects for siderophore-producing Enterobacteriaceae, explaining the characteristic bloom of *E. coli* in IBD [[khorsand-2022-enterobacteriaceae-ecoli-ibd-ibdmdb-metagenomics]].
- Necrotizing enterocolitis: Siderophore-producing organisms are enriched in NEC microbiomes, and oral iron supplementation in preterm infants may fuel these populations [[devarajalu-2025-nec-gut-microbiota-indian-preterm-shotgun]].
- Urinary tract infection: UPEC's yersiniabactin enables iron and nickel acquisition in the iron-scarce urinary tract.
- Sepsis and critical illness: Siderophore levels in blood correlate with infection severity and pathogen iron-acquisition capacity [[patil-2021-infection-metallomics-covid-era]].

## Cross-References

- [[siderophores-metallophores]] -- the broader metallophore family including nickelophores
- [[iron]] -- the metal siderophores primarily target
- [[nutritional-immunity]] -- the host strategy siderophores are designed to overcome
- [[lipocalin-2]] -- the primary host counter-siderophore defense
- [[lactoferrin]] -- mucosal iron sequestration
- [[hepcidin]] -- systemic iron regulation during infection
- [[dietary-iron-gut-ecology]] -- how dietary iron influences siderophore competition
- [[functional-shielding]] -- biofilm-mediated protection of siderophore-producers
