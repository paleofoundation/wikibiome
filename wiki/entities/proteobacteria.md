---

title: Proteobacteria (Pseudomonadota)
type: entity
subtype: microbe
created: 2026-04-17
updated: 2026-04-17
last_substantive_update: 2026-04-17
sources: [wallen-2022-metagenomics-parkinsons-microbiome-signature, richardson-2018-toxic-metals-rat-gut-microbiota, chen-2021-imbalanced-zinc-gut-microbiota-markers, li-2019-heavy-metal-metabolic-health-gut-microbiome, sampah-2021-prenatal-immunity-nec, khorsand-2022-enterobacteriaceae-ecoli-ibd-ibdmdb-metagenomics, wang-2024-ibd-integrated-16s-metagenomics-virulence-factors, miranda-2022-metalloids-antibiotic-resistance-ckd-gut, han-2024-lgg-gallium-polyphenol-intratumor-microbiota-pancreatic-cancer, agarwal-2024-airborne-arg-mrg-ewaste-recycling]
source_count: 10
tags: [phylum, Pseudomonadota, pathobiont, LPS, siderophore, facultative-aerobe, dysbiosis-marker, AMR-co-selection]
platform: wikibiome
seo_target: "Proteobacteria gut dysbiosis pathobiont bloom"
wikipedia_differentiation: "Proteobacteria bloom as the most consistent microbiome signature across inflammatory and neurodegenerative diseases; metal tolerance as the mechanism for Proteobacteria expansion under heavy metal exposure; AMR co-selection via metal resistance genes; gallium as therapeutic exploit of siderophore uptake"
gram_stain: "negative"
oxygen_requirement: "facultative anaerobe (most gut members)"
metal_dependencies: [iron]
key_enzymes: [siderophores, LPS-biosynthesis, type-III-secretion]
pathogenic_potential: "commensal-turned-pathogen"
conditions_enriched_in: [parkinsons-disease, ibd, crohns-disease, ulcerative-colitis, necrotizing-enterocolitis, ckd, schizophrenia, celiac-disease, long-covid, pancreatic-cancer, hashimotos-thyroiditis]
conditions_depleted_in: []
---

# Proteobacteria (Pseudomonadota)

## Overview

**Proteobacteria** (recently reclassified as **Pseudomonadota**) is the phylum that signals trouble. In a healthy adult gut, Proteobacteria comprise **less than 1% of the community**. When they bloom to 10-50% of the microbiome, it marks a fundamental ecological shift -- the collapse of obligate anaerobe dominance and the expansion of facultative aerobes that thrive in the inflamed, oxygenated, metal-rich environment of the dysbiotic gut.

**Proteobacteria enrichment is the most consistent microbiome signature across inflammatory and neurodegenerative diseases** -- more reliable than any single species or the [[firmicutes]]/[[bacteroidetes]] ratio. This phylum houses the major gut pathobionts (*E. coli*, *Klebsiella*, *Pseudomonas*) and its expansion represents a qualitative ecological state change, not merely a quantitative shift.

## Key Genera with WikiBiome Entity Pages

### Major Pathobionts

| Genus/Family | Notable Species | Key Virulence Features |
|---|---|---|
| **[[escherichia-coli]]** | AIEC, UPEC, EHEC strains | Siderophores (enterobactin, yersiniabactin); LPS; Fe-S enzymes |
| **[[klebsiella-pneumoniae]]** | *K. pneumoniae* | Capsule; siderophores; carbapenem resistance |
| **[[pseudomonas-aeruginosa]]** | *P. aeruginosa* | Biofilm; pyoverdine siderophore; MnSOD + Cu/Zn-SOD |
| **[[enterobacteriaceae]]** | Family | Shared siderophore systems; LPS; type III secretion |
| **[[salmonella-typhimurium]]** | *S.* Typhimurium | SodCI (Cu/Zn-SOD); intracellular survival |
| **[[shigella-flexneri]]** | *S. flexneri* | Intracellular invasion; iron acquisition |
| **[[proteus-mirabilis]]** | *P. mirabilis* | Urease (Ni-dependent); urinary stones |

### Commensal/Context-Dependent Members

| Genus | Notable Species | Ecological Role |
|---|---|---|
| **[[helicobacter-pylori]]** | *H. pylori* | Gastric pathogen; Ni-dependent [[nickel-urease]] |
| **[[campylobacter-jejuni]]** | *C. jejuni* | Foodborne pathogen; microaerophilic |
| **[[desulfovibrio]]** | Multiple species | Sulfate reduction; H2S production; Fe-S dependent |
| **[[bilophila]]** | *B. wadsworthensis* | Taurine-derived H2S production; dsrAB Fe-S clusters |
| **[[oxalobacter]]** | *O. formigenes* | Oxalate degradation; calcium bioavailability |
| **[[sutterella]]** | *S. wadsworthensis* | Mucosa-associated; IgA protease |
| **[[parasutterella]]** | Multiple species | Depleted in multiple conditions |
| **[[acinetobacter]]** | *A. baumannii* | Nosocomial pathogen; metal resistance |
| **[[neisseria-meningitidis]]** | *N. meningitidis* | Invasive pathogen; MnSOD; calprotectin target |

## Why Proteobacteria Bloom in Dysbiosis

The Proteobacteria bloom is not random -- it reflects specific ecological advantages these organisms possess in the inflamed gut:

1. **Facultative aerobiosis**: Unlike obligate anaerobe commensals ([[firmicutes]], [[bacteroidetes]]), Proteobacteria can respire oxygen. When inflammation disrupts the epithelial barrier and oxygenates the normally anaerobic lumen, Proteobacteria gain a respiratory advantage [[sampah-2021-prenatal-immunity-nec]].

2. **Superior iron acquisition**: Proteobacteria encode the most sophisticated [[siderophores-metallophores]] systems in the gut. When [[calprotectin]] and [[lactoferrin]] sequester free iron, organisms with high-affinity siderophores (enterobactin Kd ~10^-52 M) outcompete commensals for the remaining iron [[khorsand-2022-enterobacteriaceae-ecoli-ibd-ibdmdb-metagenomics]].

3. **Metal tolerance**: Proteobacteria carry dedicated metal resistance genes (cadA for cadmium, arsR for arsenic, merA for mercury) that enable survival under heavy metal stress that kills sensitive commensals [[miranda-2022-metalloids-antibiotic-resistance-ckd-gut]].

4. **LPS as inflammatory amplifier**: Proteobacterial LPS activates TLR4, driving NF-kB-mediated inflammation that further oxygenates the lumen and damages the epithelial barrier -- a self-reinforcing cycle [[wang-2024-ibd-integrated-16s-metagenomics-virulence-factors]].

## Metal Interactions

| Metal | Effect on Proteobacteria | Mechanism |
|-------|--------------------------|-----------|
| **Cadmium** | Enriched | Cd-resistant strains carry cadA efflux genes; sensitive commensals are eliminated [[li-2019-heavy-metal-metabolic-health-gut-microbiome]] |
| **Iron excess** | Enriched | Siderophore-producing [[enterobacteriaceae]] thrive; iron supplementation displaces Lactobacillus |
| **Zinc deficiency** | Enriched | Low Zn increases Proteobacteria + [[desulfovibrio]] [[chen-2021-imbalanced-zinc-gut-microbiota-markers]] |
| **Nickel** | Enriched | Urease-mediated pH increase favors Proteobacteria; enriches *Escherichia-Shigella* |
| **Arsenic/Mercury** | Enriched | Selects for metal-resistant pathogenic strains |
| **Lead** | Decreased | Unusual -- opposite direction from most metals |
| **Gallium** | Therapeutic target | Ga3+ mimics Fe3+, exploiting siderophore uptake to deliver a redox-inactive Trojan horse that poisons Fe-dependent enzymes [[han-2024-lgg-gallium-polyphenol-intratumor-microbiota-pancreatic-cancer]] |

## AMR Co-Selection

A particularly concerning feature: **metal resistance genes and antibiotic resistance genes (ARGs) frequently co-locate on the same mobile genetic elements** (plasmids, integrative conjugative elements). Proteobacteria enriched by heavy metal exposure carry co-selected ARGs, meaning environmental metal contamination drives antibiotic resistance [[agarwal-2024-airborne-arg-mrg-ewaste-recycling]], [[miranda-2022-metalloids-antibiotic-resistance-ckd-gut]]. This is the [[co-selection]] mechanism -- selecting for metal tolerance simultaneously selects for antibiotic resistance.

## Disease Associations

| Condition | Proteobacteria Signature | Key Feature |
|-----------|--------------------------|------------|
| **[[parkinsons-disease]]** | Enriched | Most consistent PD signature; LPS biosynthesis genes elevated [[wallen-2022-metagenomics-parkinsons-microbiome-signature]] |
| **[[necrotizing-enterocolitis]]** | Dominant | Proteobacteria dominance in preterm gut; Ni-fueled urease loop [[sampah-2021-prenatal-immunity-nec]] |
| **IBD / [[crohns-disease]] / [[ulcerative-colitis]]** | Enriched | [[enterobacteriaceae]] enrichment as consistent IBD marker [[khorsand-2022-enterobacteriaceae-ecoli-ibd-ibdmdb-metagenomics]] |
| **[[chronic-kidney-disease]]** | Enriched | Cd-resistant Proteobacteria with cadA; indoxyl sulfate production (nephrotoxic) [[miranda-2022-metalloids-antibiotic-resistance-ckd-gut]] |
| **[[schizophrenia]]** | Enriched | Associated with Pb and As burden |
| **[[celiac-disease]]** | Bloom | Proteobacteria expansion during active disease |
| **[[long-covid]]** | Enriched | LPS production; bacterial translocation to blood |
| **[[pancreatic-cancer]]** | Intratumoral | Proteobacteria within tumor microenvironment; gallium therapeutic target [[han-2024-lgg-gallium-polyphenol-intratumor-microbiota-pancreatic-cancer]] |
| **[[hashimotos-thyroiditis]]** | Enriched | Iodine excess shifts microbiota toward Proteobacteria |

## Ecological Significance

Proteobacteria bloom represents a **phase transition** in gut ecology -- not a gradual shift but a tipping point:

- In a healthy anaerobic gut, Proteobacteria are kept below 1% by competitive exclusion from abundant SCFA producers.
- When SCFA production drops (from Firmicutes Fe-S damage, antibiotic exposure, or dietary changes), butyrate-fueled colonocyte oxygen consumption decreases.
- Luminal oxygen rises, favoring facultative aerobes.
- Proteobacteria expand, produce LPS, drive inflammation, further oxygenate the lumen.
- The system locks into a self-reinforcing dysbiotic state.

Breaking this cycle requires restoring the conditions that suppress Proteobacteria: anaerobiosis (via SCFA production), iron restriction (via nutritional immunity support), and competitive exclusion (via [[probiotics]] and dietary fiber).

## Cross-References

- [[firmicutes]] -- Phylum whose SCFA producers are displaced as Proteobacteria bloom
- [[bacteroidetes]] -- Co-depleted with Firmicutes in severe dysbiosis
- [[siderophores-metallophores]] -- Iron acquisition systems that give Proteobacteria competitive advantage
- [[co-selection]] -- Metal resistance and antibiotic resistance co-located
- [[antimicrobial-resistance]] -- ARG enrichment in metal-tolerant Proteobacteria
- [[iron]] -- Iron excess feeds Proteobacteria; iron restriction suppresses them
- [[gallium]] -- Therapeutic Fe mimic targeting Proteobacteria siderophore uptake
- [[dysbiosis]] -- Proteobacteria bloom as the most reliable dysbiosis marker
- [[nutritional-immunity]] -- Host iron sequestration affects Proteobacteria-commensal competition
