---

title: Mollicutes
type: entity
subtype: microbe
created: 2026-04-17
updated: 2026-04-17
last_substantive_update: 2026-04-17
sources: [wang-2024-causal-gut-microbiota-gerd-bidirectional-mr, yang-2017-ketamine-gut-microbiota-brain-axis-antidepressant]
source_count: 2
metal_dependencies: []
key_enzymes: []
tags: [tenericutes, class-level, GERD-risk, depression-related, ketamine-responsive, cell-wall-deficient, minimal-genome, parasitic]
platform: wikibiome
seo_target: "Mollicutes gut bacteria GERD depression ketamine microbiome"
wikipedia_differentiation: "Mendelian randomization evidence establishing class Mollicutes as a causal GERD risk factor (OR 1.09); ketamine's selective restoration of Mollicutes in depression-susceptible mice distinguishing (R)-ketamine from (S)-ketamine; ecological significance of cell-wall-deficient bacteria in the gut microbiome context"
conditions_enriched_in: [gerd]
conditions_depleted_in: [depression]
pathogenic_potential: commensal
gram_stain: "none (cell-wall-deficient)"
oxygen_requirement: "facultative anaerobe"

---

# Mollicutes

A class of bacteria within the phylum Tenericutes defined by the **complete absence of a cell wall** -- the smallest self-replicating organisms known, with minimal genomes (580 kb-1.4 Mb). While Mollicutes are best known through their pathogenic members (*Mycoplasma pneumoniae*, *Ureaplasma urealyticum*), gut-resident Mollicutes have gained attention through Mendelian randomization studies linking the class to **GERD risk** and through antidepressant research showing that ketamine selectively restores Mollicutes abundance in depression-susceptible mice.

## Taxonomy

- Class Mollicutes, phylum Tenericutes (sometimes placed within Firmicutes based on phylogenomics).
- Key orders: Mycoplasmatales (includes *Mycoplasma*, *Ureaplasma*), Entomoplasmatales, Acholeplasmatales, Anaeroplasmatales.
- Gut-relevant members: *Anaeroplasma* (strict anaerobe, found in ruminant and human gut), *Erysipelothrix*-related lineages (some classifications overlap with Erysipelotrichia).
- Defining characteristic: cell wall deficiency renders Mollicutes inherently resistant to beta-lactam antibiotics (penicillins, cephalosporins) which target cell wall synthesis.

## Metal Dependencies

Mollicutes have **dramatically reduced metal requirements** compared to other bacteria, consistent with their minimal genomes:
- Most Mollicutes lack siderophore systems and complex iron acquisition machinery
- Reduced respiratory chain components minimize iron-sulfur cluster requirements
- Some species are entirely fermentative, further reducing metal cofactor needs
- This metabolic minimalism may explain their survival strategy: parasitism and cross-feeding rather than independent metabolic capability

## Ecological Role

### In the Healthy Gut
Gut-resident Mollicutes (primarily *Anaeroplasma* and related genera) are low-abundance members of the colonic microbiota. Their cell wall deficiency makes them osmotically fragile and dependent on the relatively stable osmotic environment of the colon.

### In Disease States
The absence of a cell wall gives Mollicutes unusual properties in the gut:
- **Antibiotic resistance**: Inherent resistance to beta-lactams means Mollicutes can expand during antibiotic therapy that depletes cell-wall-bearing competitors
- **Immune evasion**: Without peptidoglycan (the primary PAMP detected by NOD receptors), Mollicutes may evade innate immune detection pathways
- **Biofilm participation**: Some Mollicutes integrate into polymicrobial biofilms despite lacking a cell wall

## Conditions Associated

### GERD (Causal Risk Factor)
Class Mollicutes **causally increases GERD risk** (OR = 1.09, 95% CI 1.01-1.19, p = 0.037) [[wang-2024-causal-gut-microbiota-gerd-bidirectional-mr]]. The phylum Tenericutes (which contains only Mollicutes) showed a similar signal (OR = 1.11, p = 0.024). The mechanism is unclear but may involve Mollicutes-derived metabolites affecting esophageal motility or lower esophageal sphincter tone via the gut-esophageal axis.

### Depression (Depleted; Ketamine-Responsive)
Mollicutes are **significantly decreased** in chronic social defeat stress (CSDS)-susceptible mice. Notably, **(R)-ketamine but not (S)-ketamine** significantly restored Mollicutes levels [[yang-2017-ketamine-gut-microbiota-brain-axis-antidepressant]], providing one of the earliest demonstrations that antidepressant efficacy may partly operate through microbiome modulation. The stereoselective difference (R vs. S enantiomer) suggests a specific receptor-mediated or metabolic pathway rather than a nonspecific drug effect.

### Pancreatitis (Depleted)
Acute pancreatitis decreases Mollicutes alongside other Firmicutes classes, consistent with broad inflammatory disruption of gut ecology.

### Guillain-Barre Syndrome (Risk Factor)
Mollicutes and Tenericutes are risk factors for GBS (OR = 3.016) via MR, suggesting involvement in autoimmune neuropathy.

## Key Studies

- [[wang-2024-causal-gut-microbiota-gerd-bidirectional-mr]] (Mendelian randomization) -- Established Mollicutes as a causal GERD risk factor (OR 1.09).
- [[yang-2017-ketamine-gut-microbiota-brain-axis-antidepressant]] (animal model) -- Demonstrated stereoselective ketamine restoration of Mollicutes in depression-susceptible mice.

## Open Questions

1. **Which gut-resident Mollicutes species mediate the GERD and depression signals?** Class-level MR and 16S data lack species resolution; metagenomic studies are needed.
2. **Does Mollicutes' inherent beta-lactam resistance contribute to post-antibiotic dysbiosis?** Antibiotic-driven expansion of Mollicutes at the expense of cell-wall-bearing commensals could exacerbate GERD or other conditions.
3. **What metabolites do gut Mollicutes produce that could affect esophageal or neural function?** The minimal genomes of Mollicutes limit their metabolic repertoire, but the specific products remain uncharacterized.

## Cross-References

- [[gerd]] -- Mollicutes causally increase GERD risk
- [[depression]] -- depleted in susceptible mice; restored by (R)-ketamine
- [[anaerostipes]] -- co-identified as GERD risk taxon in the same MR study
- [[methanobrevibacter]] -- causally protective against GERD in the same study
- [[lachnospiraceae]] -- co-depleted in multiple conditions where Mollicutes are affected
