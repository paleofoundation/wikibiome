---

title: Proteus mirabilis
type: entity
subtype: microbe
created: 2026-04-09
updated: 2026-04-11
sources: [maier-2019-nickel-microbial-pathogenesis.md]
tags: [pathogen, nickel, urease, urinary-tract-infection, catheter, biofilm, struvite, CAUTI]
metal_dependencies: [nickel, iron, zinc, manganese]
key_enzymes: [urease (Ni-dependent — major virulence factor), zinc-metalloprotease (ZapA), siderophores (proteobactin, yersiniabactin-like)]
platform: wikibiome
last_substantive_update: 2026-04-13
seo_target: "Proteus mirabilis nickel urease catheter UTI struvite kidney stones"
wikipedia_differentiation: "39% histidine accessory protein for nickel handling and urease-mediated struvite crystallization mechanism in CAUTI pathogenesis"
conditions_enriched_in: [catheter-associated-UTI, kidney-stones]
conditions_depleted_in: []
pathogenic_potential: opportunistic
---

# Proteus mirabilis

A Gram-negative uropathogen whose **Ni-dependent urease** is the central driver of catheter-associated urinary tract infection (CAUTI) pathogenesis. Urease-mediated urea hydrolysis alkalinizes urine, triggering precipitation of **struvite (magnesium ammonium phosphate) and apatite crystals** that form kidney stones and encrust urinary catheters. *P. mirabilis* has evolved specialized nickel handling proteins, including an accessory protein that is **39% histidine** -- one of the most histidine-enriched proteins known.

## Metal-Dependent Virulence Factors

### Ni-Dependent Urease -- The Master Virulence Factor
- Urease is **essential** for CAUTI pathogenesis and urinary stone formation [[maier-2019-nickel-microbial-pathogenesis]].
- Catalyzes: urea -> ammonia + bicarbonate.
- Ammonia production **raises urine pH** from ~5-6 to >7, causing precipitation of:
 - **Struvite** (MgNH4PO4): the primary stone mineral.
 - **Apatite** (Ca10(PO4)6(OH)2): secondary mineral deposition.
- **Crystalline biofilm formation**: urease-mediated crystal precipitation creates a mineralized biofilm on catheter surfaces that:
 - Physically obstructs urine flow.
 - Provides a protected niche for bacterial communities.
 - Resists antibiotic penetration.
- **Extracellular crystal clusters in the bladder**: urease induces crystal formation directly in bladder tissue, causing tissue damage and promoting ascending infection.
- Urease-negative mutants are dramatically attenuated in CAUTI models.

### Urease Maturation -- The HypB Accessory Protein
- **HypB** (also called UreG in some nomenclature): a GTPase required for nickel insertion into the urease active site.
- The *P. mirabilis* HypB is remarkable: **39% histidine content** in its histidine-rich region [[maier-2019-nickel-microbial-pathogenesis]].
- This extreme His-richness creates a high-capacity nickel-binding domain that likely serves as a **nickel reservoir** for urease metalation, ensuring urease is fully activated even under nickel-limited conditions.
- Parallels the Hpn storage protein of [[helicobacter-pylori]] (47% histidine) -- convergent evolution of His-rich nickel buffers in urease-dependent pathogens.

## Metal Acquisition Systems

### Nickel Import
- ABC-type nickel transporters import Ni(II) from the urinary tract environment.
- Urea is abundant in urine (~200-400 mM), so substrate is never limiting -- nickel availability for urease metalation is the bottleneck.
- Nickel transport genes are co-regulated with urease genes, ensuring coordinated expression.

### Nickel Export -- PMI1518
- **PMI1518**: a nickel export protein essential for CAUTI pathogenesis [[maier-2019-nickel-microbial-pathogenesis]].
- Required for nickel homeostasis: prevents nickel toxicity under conditions of high nickel availability.
- PMI1518 mutants are attenuated in CAUTI models, demonstrating that nickel export (not just import) is critical.
- This highlights the importance of **balanced nickel flux** -- too little nickel means inactive urease; too much is toxic.

### Iron Acquisition
- Proteobactin and other siderophores for iron scavenging in the urinary tract.
- Heme uptake systems for accessing host hemoglobin during tissue-invasive infection.
- Iron acquisition is important for growth but urease/nickel is the dominant virulence axis.

## Nutritional Immunity Evasion

- The urinary tract has relatively low metal restriction compared to blood/abscess environments, but:
 - **Urinary lactoferrin and lipocalin-2** restrict iron availability.
 - **Tamm-Horsfall protein (uromodulin)** may modulate metal availability in urine.
- *P. mirabilis* compensates with high-affinity nickel transporters and the His-rich HypB nickel buffer to ensure urease metalation.
- Catheter surfaces may concentrate metals from urine, creating a metal-enriched microenvironment favorable for *P. mirabilis* biofilm.

## Disease Associations

- **Catheter-associated urinary tract infections (CAUTI)**: primary clinical significance; *P. mirabilis* is a leading cause.
- **Urinary stone disease (urolithiasis)**: struvite stones ("infection stones") are directly caused by urease activity.
- **Pyelonephritis**: ascending kidney infection, often complicated by staghorn calculi.
- **Bacteremia**: secondary to urinary tract infection.
- **Wound infections**: less common but *P. mirabilis* can colonize chronic wounds.

## Connection to Environmental Metal Exposure

- Dietary nickel is excreted primarily through urine, meaning **higher dietary nickel intake increases urinary nickel concentration** -- potentially providing more cofactor for *P. mirabilis* urease.
- Patients with indwelling catheters who consume nickel-rich diets may inadvertently support *P. mirabilis* urease activity.
- Environmental nickel exposure (occupational, dietary) could theoretically influence CAUTI severity, though this has not been directly studied.

## Connections

- [[metal-dependent-virulence]] -- Ni-urease as master CAUTI virulence factor; HypB 39% histidine
- [[nickel]] -- essential cofactor for urease; the His-rich HypB is one of nature's most concentrated Ni-binding proteins
- [[helicobacter-pylori]] -- both use Ni-urease as a master virulence factor with His-rich nickel storage proteins
- [[staphylococcus-aureus]] -- both use urease for niche-specific colonization (catheter vs. skin/kidney)
- [[nutritional-immunity]] -- urinary tract metal restriction is less characterized than blood/abscess but still relevant
- [[escherichia-coli]] -- UPEC competes with *P. mirabilis* in the urinary tract; both use nickel-dependent enzymes
- [[candida-albicans]] -- *C. neoformans* urease parallels *P. mirabilis* urease in Ni-dependence
