---
title: Silver
type: entity
subtype: metal
created: 2026-04-18
updated: 2026-04-18
last_substantive_update: 2026-04-18
sources: [barras-2018-silver-antibiotic-synergy-mismetallation, godoy-gallardo-2021-antibacterial-metal-ions-nanoparticles-tissue-engineering, do-carmo-2023-metal-nanoparticles-candida-review]
source_count: 3
tags: [antimicrobial-metal, mis-metallation, iron-sulfur-clusters, antibiotic-synergy, nanoparticles, non-essential-metal]
seo_target: "silver antimicrobial bacteria iron sulfur cluster mis-metallation"
wikipedia_differentiation: "Mechanistic depth on silver's Fe-S cluster targeting as primary killing mechanism (not ROS), silver-aminoglycoside synergy through PMF bypass, and silver as paradigmatic mis-metallation agent -- connections to WikiBiome's broader metal toxicity framework that Wikipedia does not make"
platform: wikibiome
---

# Silver (Ag)

A non-essential metal with a 5,000-year history of antimicrobial use, silver has re-emerged as a critical tool in the post-antibiotic era. What makes silver particularly interesting from a metallomics perspective is not that it kills bacteria -- many metals do -- but **how** it kills them. Silver is the paradigmatic example of [[mis-metallation]] as an antimicrobial mechanism: it destroys bacteria not primarily through reactive oxygen species, as long assumed, but by **displacing iron from iron-sulfur clusters and zinc from zinc-finger proteins**, causing proteome-wide metalloprotein dysfunction [[barras-2018-silver-antibiotic-synergy-mismetallation]].

## Mechanism of Antimicrobial Action

### Fe-S Cluster Disruption (Primary Target)

The most significant mechanistic insight of recent silver research: **Fe-S cluster-containing dehydratases** (e.g., fumarase A) are silver's primary protein targets, not respiratory chain complexes as previously believed [[barras-2018-silver-antibiotic-synergy-mismetallation]].

- Ag+ targets the **exposed, solvent-accessible catalytic Fe atom** of [4Fe-4S] clusters in dehydratases, degrading them to [3Fe-4S]
- The damaged clusters can be reactivated by exogenous Fe2+ under reducing conditions, confirming specific iron displacement rather than protein destruction
- NADH dehydrogenase I (a major respiratory chain Fe-S enzyme) is **not** affected, demonstrating target specificity based on cluster accessibility
- Released free iron then participates in [[fenton-chemistry]], generating secondary oxidative damage

### Zinc-Finger Protein Disruption

Silver substitutes for zinc in zinc-finger proteins due to its high thiophilicity, causing:

- Transcription factor dysfunction (zinc fingers control thousands of genes)
- Formation of cytosolic dense granules interpreted as **misfolded protein aggregates**
- Broad transcriptional dysregulation

### Membrane Perturbation

- TEM shows enlarged periplasmic space, inner membrane shrinkage, and thickened cell wall in Gram-positive bacteria
- Alters membrane dipole potential and permeability
- At high concentrations, causes DNA condensation through preferential base binding (guanine, then adenine)

### The ROS Debate

Whether silver **directly** generates ROS is contested [[barras-2018-silver-antibiotic-synergy-mismetallation]]:

- Silver is **not a redox-active metal** -- it cannot catalyze Fenton chemistry directly
- However, silver **indirectly** promotes ROS by: (1) releasing free iron from disrupted Fe-S clusters, (2) depleting [[glutathione]] and cysteine (thiol-based antioxidants), and (3) disrupting OxyR sensing
- The soxS promoter is induced by silver, but OxyR activation is blocked (silver prevents the disulfide bond formation OxyR requires)
- This resolves the paradox: silver causes oxidative damage without being a Fenton catalyst

## Silver-Antibiotic Synergy

Silver potentiates aminoglycoside antibiotics by **bypassing the proton motive force (PMF) requirement** for drug entry [[barras-2018-silver-antibiotic-synergy-mismetallation]]:

| Antibiotic Class | Synergy Level | Mechanism |
|-----------------|---------------|-----------|
| **Aminoglycosides** (gentamicin, kanamycin, tobramycin, streptomycin) | Strong (>10-fold MIC reduction) | Silver bypasses PMF-dependent entry step (EDP-I); aminoglycoside retains translation-dependent membrane damage (EDP-II) |
| **Quinolones** | Moderate | Membrane permeabilization enhances entry |
| **Beta-lactams** | Weak | Limited synergy |

This synergy was confirmed in mutants lacking respiratory complex I/II and Fe-S cluster biosynthesis, definitively demonstrating PMF bypass rather than enhanced respiration.

## Silver Nanoparticles

Silver nanoparticles (AgNPs) combine silver's antimicrobial activity with tunable size-dependent properties [[godoy-gallardo-2021-antibacterial-metal-ions-nanoparticles-tissue-engineering]], [[do-carmo-2023-metal-nanoparticles-candida-review]]:

- Active against bacteria, fungi (including [[candida-albicans]]), and biofilms
- Mechanisms include sustained Ag+ ion release, direct membrane contact, and intracellular accumulation
- Used in wound dressings, catheters, and tissue engineering scaffolds
- Antifungal activity against *Candida* species makes AgNPs relevant to mycobiome management

## Relevance to the Gut Microbiome

Silver's powerful antimicrobial activity raises important questions about microbiome effects:

- **Dietary silver exposure** from colloidal silver supplements and silver-containing food contact materials may affect commensal gut bacteria
- Silver's preferential targeting of Fe-S cluster enzymes would disproportionately affect anaerobic bacteria, which depend heavily on Fe-S cluster-containing enzymes for energy metabolism
- The selective toxicity profile (dehydratases over respiratory complexes) may create predictable shifts in microbial community composition

<!-- NEEDS VERIFICATION: No direct studies of dietary silver effects on human gut microbiome composition identified in current wiki sources -->

## Cross-References

- [[antimicrobial-metals]] -- silver as one of the principal antimicrobial metals
- [[mis-metallation]] -- silver as paradigmatic mis-metallation agent
- [[iron-sulfur-clusters]] -- primary target of silver toxicity
- [[co-selection]] -- silver resistance genes co-located with antibiotic resistance determinants
- [[candida-albicans]] -- silver nanoparticle antifungal activity
- [[fenton-chemistry]] -- secondary oxidative damage from iron released by silver
