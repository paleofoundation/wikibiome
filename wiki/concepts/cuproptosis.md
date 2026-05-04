---

title: Cuproptosis
type: concept
created: 2026-04-14
updated: 2026-04-14
last_substantive_update: 2026-04-22
sources:
  - wang-2025-engineering-copper-antimicrobial-materials-post-antibiotic
  - xia-2024-drug-repurposing-cancer-therapy
  - chen-2026-metalloimmunology-tumor-microenvironment
  - brylinski-2025-trace-elements-thyroid-diseases
source_count: 4
tags: [cuproptosis, copper, cell-death, lipoylation, FDX1, cancer]
platform: wikibiome
seo_target: "cuproptosis copper dependent cell death cancer"
karen_brain_primitives: [1, 3, 4]
---

# Cuproptosis

A distinct form of regulated cell death caused by excess intracellular copper binding to lipoylated proteins in the TCA cycle, first characterized by Tsvetkov et al. in *Science* (2022). Unlike [[ferroptosis]] (iron-dependent lipid peroxidation) or apoptosis (caspase-dependent), cuproptosis operates through a unique mechanism: copper-induced aggregation of lipoylated mitochondrial proteins and destabilization of iron-sulfur cluster proteins.

## Mechanism

The cuproptotic cascade proceeds through defined steps:

1. Copper accumulation -- Excess Cu2+ enters cells through copper transporters (CTR1/SLC31A1) or when copper chaperones and export systems (ATP7A/ATP7B) are overwhelmed.
2. FDX1-dependent reduction -- Ferredoxin 1 (FDX1) reduces Cu2+ to Cu1+, the biologically active form. FDX1 is the essential upstream regulator of cuproptosis.
3. Lipoylated protein binding -- Cu1+ directly binds lipoylated TCA cycle enzymes including dihydrolipoamide S-acetyltransferase (DLAT, a component of the pyruvate dehydrogenase complex) and dihydrolipoamide S-succinyltransferase (DLST).
4. Protein aggregation -- Copper-bound lipoylated proteins form insoluble aggregates, disrupting TCA cycle function and triggering proteotoxic stress.
5. Fe-S cluster destabilization -- Copper simultaneously destabilizes iron-sulfur cluster proteins, compounding mitochondrial dysfunction.
6. Cell death -- The combined proteotoxic stress and metabolic collapse triggers cell death through a pathway independent of known apoptotic, necroptotic, or ferroptotic machinery.

## Distinction from Ferroptosis

| Feature | Cuproptosis | [[ferroptosis]] |
|---------|------------|------------|
| Metal trigger | Copper (Cu1+) | Iron (Fe2+) |
| Key regulator | FDX1 | GPX4 |
| Target | Lipoylated TCA proteins | Membrane lipids (PUFAs) |
| Mechanism | Protein aggregation | Lipid peroxidation |
| Metabolic dependency | Cells relying on mitochondrial respiration are more sensitive | Cells with high PUFA content are more sensitive |
| Protective factor | Copper chelators (tetrathiomolybdate) | Lipophilic antioxidants (ferrostatin-1) |

Both cuproptosis and ferroptosis are relevant to the [[mis-metallation]] framework: they represent what happens when metal homeostasis fails and the wrong metal accumulates in the wrong compartment.

## Therapeutic Relevance

### Cancer
- Copper chelators (tetrathiomolybdate, disulfiram/Cu) are being explored as anti-cancer agents that reshape the tumor microenvironment by inducing cuproptosis in copper-dependent tumor cells.
- FDX1 expression correlates with cuproptosis sensitivity and may serve as a biomarker for patient stratification.
- Immune checkpoint synergy -- Cuproptosis-induced cell death releases damage-associated molecular patterns (DAMPs) that enhance anti-tumor immunity, potentially synergizing with checkpoint blockade.

### Wilson's Disease and Copper Toxicosis
- Wilson's disease (ATP7B mutations) causes copper accumulation that may partly kill hepatocytes through cuproptosis, not just oxidative damage as traditionally assumed.
- This reframes copper chelation therapy as cuproptosis prevention rather than simply reducing oxidative stress.

### Microbiome Intersection
- Gut bacteria modulate copper bioavailability through copper-binding metallothioneins and siderophore-like molecules. Dysbiosis may alter systemic copper distribution, potentially influencing cuproptosis susceptibility in distant tissues.

## Cross-References

- [[copper]] -- The metal driving cuproptosis
- [[ferroptosis]] -- Parallel metal-dependent cell death pathway
- [[mis-metallation]] -- Framework for understanding metal-triggered pathology
- [[iron]] -- Fe-S cluster destabilization as secondary cuproptosis mechanism
- [[glutathione]] -- Copper detoxification pathway upstream of cuproptosis
