---
title: "Shared Pathobionts Across Disease Signatures"
type: analysis
created: 2026-04-11
updated: 2026-04-11
sources: [maier-2019-nickel-microbial-pathogenesis, pendergrass-2026-endometriosis-conference, pendergrass-2026-microbial-metallomics-parkinsons-ferroptosis]
tags: [cross-condition, pathobionts, taxonomic-overlap, shared-mechanisms, metal-dependencies]
platform: wikibiome
---

# Shared Pathobionts Across Disease Signatures

An analysis of which microbial taxa appear across multiple disease signatures in this knowledge base, what metal dependencies they share, and what the taxonomic overlap reveals about shared pathogenic mechanisms. This analysis covers the 13 disease signatures currently in the wiki.

## Cross-Signature Pathobiont Frequency

The following taxa appear as enriched in 4 or more disease signatures:

| Taxon | Signatures Where Enriched | Metal Dependencies | Key Virulence |
|-------|--------------------------|-------------------|---------------|
| [[escherichia-coli|E. coli]] | Endometriosis, PCOS, Crohn's, CRC, CVD, T2D, Obesity, Graves', MS, Parkinson's, Alzheimer's, ASD, Depression | Ni, Fe, Zn, Mn, Co | Siderophores, NiFe-hydrogenase, urease, beta-glucuronidase, zinc-metalloproteinase |
| [[bacteroides-fragilis|B. fragilis]] | Endometriosis, PCOS, Crohn's, CRC, Obesity, T2D, CVD | Zn, Fe | BFT toxin (Zn), iron piracy, beta-glucuronidase |
| [[klebsiella-pneumoniae|Klebsiella]] | Crohn's, Graves', MS, ASD, Parkinson's | Fe, Mn, Zn | Siderophores, capsule, urease |
| [[prevotella-copri|P. copri]] | Graves', PCOS, RA (enriched in some, depleted in others) | Fe | Thrives in iron-rich inflammatory environments |
| [[fusobacterium-nucleatum|F. nucleatum]] | CRC, Crohn's, CVD, Obesity | Fe | Adhesin (FadA), tissue invasion, Fap2 lectin |
| [[ruminococcus-gnavus|R. gnavus]] | Crohn's, MS, Obesity, Depression | Fe (indirect) | Mucin-degrading glycosidases, inflammatory polysaccharide |
| [[desulfovibrio|Desulfovibrio]] | CRC, Parkinson's, ASD, Obesity | Fe, Ni, Mo | H₂S production (Fe-S cluster enzymes), sulfate reduction |
| [[candida-albicans|C. albicans]] | Endometriosis, Crohn's, CRC, Depression | Fe, Zn, Cu | Morphogenesis (yeast-to-hyphae), biofilm, iron piracy |

## The E. coli Problem

E. coli appears in all 13 disease signatures. This is not an artifact of detection bias — pathogenic E. coli strains combine an unmatched portfolio of metal-dependent virulence:

- 5 metal dependencies (Ni, Fe, Zn, Mn, Co) — the most of any taxon in the knowledge base
- Enterobactin — the strongest known iron chelator in biology (binding affinity 10⁵² M⁻¹)
- Stealth siderophores (salmochelin) — resist host [[lipocalin-2]] counter-measures
- NiFe-hydrogenase — respiratory flexibility across oxygen gradients
- Beta-glucuronidase — deconjugates estrogens, driving the [[estrobolome|estrogen recirculation]] pathway in endometriosis and PCOS
- Zinc metalloproteinases — tissue invasion and immune evasion

E. coli is the clearest example of Primitive 4 (Microbial Metal Dependencies as Achilles' Heels) at scale: its virulence depends on multiple metals, and restricting any one of them degrades its pathogenic capacity.

## The Metal Dependency Lens

Grouping pathobionts by their metal dependencies reveals targetable clusters:

### Iron-Dependent Cluster (all pathobionts)
Every enriched pathobiont across all 13 signatures depends on iron to some degree. This is why [[nutritional-immunity]] (hepcidin, lactoferrin, calprotectin, lipocalin-2) is the host's universal first-line defense, and why [[dietary-iron-gut-ecology|dietary iron]] is the single most impactful metal for gut ecology.

### Nickel-Dependent Cluster
- E. coli (NiFe-hydrogenase, urease in STEC)
- [[helicobacter-pylori|H. pylori]] (urease, NiFe-hydrogenase)
- [[desulfovibrio|Desulfovibrio]] (NiFe-hydrogenase)
- [[proteus-mirabilis|P. mirabilis]] (urease)

These taxa share the nickel-dependent hydrogenase/urease machinery. [[dietary-nickel-exposure|Dietary nickel restriction]] targets this entire cluster simultaneously — a potential explanation for why low-nickel diets produce improvements across seemingly unrelated conditions.

### Zinc-Dependent Cluster
- E. coli (zinc metalloproteinase)
- B. fragilis (BFT toxin — zinc-dependent)
- [[pseudomonas-aeruginosa|P. aeruginosa]] (elastase/LasB)
- [[staphylococcus-aureus|S. aureus]] (aureolysin)

The zinc-metalloproteinase family is the primary tissue-invasion mechanism across Gram-negative and Gram-positive pathobionts alike. Calprotectin (host zinc/manganese sequestration) is the body's counter-strategy.

## Depleted Taxa: The Mirror Image

The taxa consistently depleted across disease signatures are equally informative:

| Taxon | Signatures Where Depleted | Characterization |
|-------|--------------------------|-----------------|
| [[faecalibacterium-prausnitzii|F. prausnitzii]] | Crohn's, CRC, T2D, Obesity, CVD, Depression, MS, Parkinson's, Alzheimer's | Butyrate producer; iron-independent; anti-inflammatory |
| [[lachnospiraceae|Lachnospiraceae]] | Endometriosis, PCOS, CRC, CVD, Obesity, T2D | SCFA producers; lose competitive advantage in iron-rich environments |
| [[bifidobacterium|Bifidobacterium]] | Crohn's, CRC, ASD, T2D, Depression, Graves' | Iron-independent; adapted to low-iron niches; lactoferrin-utilizing |
| [[roseburia|Roseburia]] | CRC, T2D, Obesity, Depression | Butyrate producer; fiber-dependent |
| [[akkermansia-muciniphila|Akkermansia]] | Obesity, T2D, MS, Parkinson's | Mucin-specialist; sensitive to metal perturbation |

The depleted taxa share a common feature: they are poor iron competitors. They thrive in iron-restricted environments where siderophore-producing pathobionts are suppressed. The disease state — with its iron-rich, inflamed gut — selects against them.

## Implications for the Metal-Disease Framework

This cross-signature analysis supports three conclusions:

1. Disease categories are a poor taxonomy for the gut microbiome. The same pathobionts (E. coli, B. fragilis, Klebsiella) appear across gynecological, neurological, autoimmune, metabolic, and oncological conditions. The gut microbial ecology doesn't respect organ-system boundaries.

2. Metal dependencies provide a more useful classification. Grouping pathobionts by which metals they require — rather than which disease they're associated with — reveals targetable clusters that span conditions. This is the foundation of the metallomic approach.

3. The depleted taxa tell you what the ecosystem needs. Restoring F. prausnitzii, Bifidobacterium, and Lachnospiraceae requires iron restriction (denying the pathobionts their advantage) plus fiber (feeding the commensals). This dual approach (Primitive 5: Two-Sided Ecological Engineering) applies across all 13 conditions.

## Key Sources

- [[maier-2019-nickel-microbial-pathogenesis]]
- [[pendergrass-2026-endometriosis-conference]]
- [[pendergrass-2026-microbial-metallomics-parkinsons-ferroptosis]]

## Connections

- [[iron-management|iron supplementation STOPs]] — the clinical consequence of the shared iron-dependent pathobiont pattern
- [[metal-disease-matrix]] — the comprehensive metal-disease interaction landscape
- [[dietary-metal-paradoxes]] — paradoxes arising from shared dietary metal sources
- [[nutritional-immunity]] — the host defense that pathobionts are evolved to overcome
- [[dietary-iron-gut-ecology]] — how dietary iron creates the selective pressure
