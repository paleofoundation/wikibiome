---

title: Gallium
type: entity
subtype: metal
created: 2026-04-14
updated: 2026-04-16
last_substantive_update: 2026-04-16
sources: [pandey-2021-galbofloxacin-gallium-siderophore-staph, ikhazuagbe-2025-gallium-nanoparticles-antimicrobial, golden-2024-metal-chelation-antibacterial-pseudomonas-acinetobacter, carvalho-2014-siderophores-trojan-horses-mdr, passari-2023-siderophores-medical-applications, han-2024-lgg-gallium-polyphenol-intratumor-microbiota-pancreatic-cancer, nguyen-2024-antibacterial-bioceramics-design-mechanisms, patil-2021-infection-metallomics-covid-era]
source_count: 8
symbol: "Ga"
atomic_number: 31
tags: [gallium, trojan-horse, iron-mimic, siderophore, antimicrobial, cefiderocol, mis-metallation, MRSA, Pseudomonas]
platform: wikibiome
seo_target: "gallium antimicrobial iron mimic Trojan horse siderophore bacteria"
wikipedia_differentiation: "Gallium as therapeutic iron mimic exploiting bacterial siderophore uptake systems; Ga3+ mimics Fe3+ but is redox-inactive, irreversibly inhibiting ribonucleotide reductase and cytochromes; cefiderocol as FDA-approved siderophore-antibiotic; galbofloxacin achieving 93 nM MIC against S. aureus; gallium-polyphenol probiotics against intratumoral Proteobacteria in pancreatic cancer; clinical trial data for cystic fibrosis lung infections"
---

# Gallium (Ga)

A group 13 post-transition metal (atomic number 31) with no known biological function in any organism — yet one of the most promising antimicrobial metals precisely because of what it *cannot* do. **Ga3+ is nearly identical to Fe3+ in ionic radius (0.62 Å vs 0.645 Å) and coordination chemistry**, but it cannot be reduced to Ga2+ under physiological conditions. This makes gallium a perfect Trojan horse: bacteria import it through their iron uptake systems, and it irreversibly jams the iron-dependent enzymes they need to survive.

## The Iron Mimic Principle

The core insight is deceptively simple. **Bacterial iron acquisition is a life-or-death process** — iron is essential for DNA synthesis (ribonucleotide reductase), electron transport (cytochromes, Fe-S clusters), and many other central metabolic reactions. Bacteria have evolved extraordinarily efficient systems to acquire scarce iron from the environment: siderophores, transferrin receptors, hemoglobin piracy. These systems cannot easily distinguish Ga3+ from Fe3+, because the ionic properties are so similar.

When Ga3+ is imported in place of Fe3+:
- It binds iron-coordination sites but cannot undergo Fe3+ → Fe2+ redox cycling
- Iron-dependent enzymes that require electron transfer are irreversibly blocked
- The bacterium has consumed metabolic energy to import a metal it cannot use
- There is no Ga3+-rescue mechanism: bacteria have no gallium efflux systems optimized for Ga3+ because they did not evolve under gallium selection pressure

This makes gallium effective against bacteria that have evolved resistance to conventional antibiotics — the resistance mechanisms (efflux pumps, porin loss, target modification) address the antibiotic, not the underlying iron acquisition process that gallium exploits.

## Mechanisms of Antimicrobial Action

**1. Siderophore hijacking**
Bacteria secrete siderophores to scavenge scarce iron. These chelators bind Ga3+ with similar affinity to Fe3+, and bacteria import the gallium-loaded siderophore through their normal outer membrane receptors [[carvalho-2014-siderophores-trojan-horses-mdr]]. Every siderophore-mediated iron import is a potential gallium delivery route.

**2. Ribonucleotide reductase (RNR) inhibition**
Ga3+ occupies the Fe3+ active site in class I RNR — the enzyme that reduces ribonucleotides to deoxyribonucleotides, an obligate step in DNA synthesis. RNR requires redox-active iron to generate the tyrosyl radical needed for catalysis. Ga3+ is coordination-compatible but redox-inactive, producing a dead-end inhibited enzyme complex and halting DNA replication [[ikhazuagbe-2025-gallium-nanoparticles-antimicrobial]].

**3. Cytochrome disruption**
Ga3+ displaces iron in cytochrome complexes in the electron transport chain. Without functional cytochromes, oxidative phosphorylation collapses. This effect is particularly potent in biofilm-embedded bacteria that depend on cytochrome-mediated respiration for the sustained energy demands of biofilm maintenance [[ikhazuagbe-2025-gallium-nanoparticles-antimicrobial]].

**4. Fe-S cluster poisoning**
Incorporation of Ga3+ into iron-sulfur cluster assembly machinery renders clusters non-functional. Fe-S clusters are involved in central metabolic enzymes (aconitase, succinate dehydrogenase) and transcriptional regulators (Fur, IscR). Their failure disrupts metabolism at multiple levels simultaneously [[golden-2024-metal-chelation-antibacterial-pseudomonas-acinetobacter]].

**5. Biofilm disruption**
*Pseudomonas aeruginosa* biofilms require iron acquisition for structural integrity and maintenance. Gallium nitrate (Ga(NO3)3) disrupts biofilm formation and eradicates established *P. aeruginosa* biofilms by starving biofilm-embedded cells of functional iron [[golden-2024-metal-chelation-antibacterial-pseudomonas-acinetobacter]]. This anti-biofilm activity is significant because biofilm-embedded organisms are notoriously resistant to conventional antibiotics.

## Pharmacological Applications

### Gallium Nitrate (Ga(NO3)3)

The simplest clinical form. Previously approved for hypercalcemia of malignancy — providing extensive human safety data for systemic gallium exposure [[ikhazuagbe-2025-gallium-nanoparticles-antimicrobial]]. Now under investigation as an antimicrobial, particularly for:

- *Pseudomonas aeruginosa* lung infections in cystic fibrosis (CF): Phase 1/2 trial (NCT01093521) demonstrated that inhaled gallium nitrate reduced *P. aeruginosa* burden and improved lung function in CF patients — the first prospective clinical evidence for gallium antimicrobial activity.
- Biofilm-associated infections where conventional antibiotics fail due to penetration barriers.

### Galbofloxacin

A gallium-siderophore-fluoroquinolone conjugate: gallium is conjugated to a hydroxamate siderophore that is itself linked to a fluoroquinolone antibiotic. The result is **dual targeting** — Ga3+ mimics iron to gain entry, and once inside, the fluoroquinolone inhibits DNA gyrase [[pandey-2021-galbofloxacin-gallium-siderophore-staph]].

Against *Staphylococcus aureus*, galbofloxacin achieves an MIC of **93 nM versus 920 nM for ciprofloxacin alone** — a 10-fold potency improvement through siderophore-mediated targeted delivery. The specificity of the siderophore determines which bacteria import the conjugate, theoretically enabling pathogen-selective activity.

### Cefiderocol

FDA-approved in 2019. A siderophore-cephalosporin conjugate (catechol siderophore linked to a cephalosporin) that exploits bacterial iron transporters — specifically the catechol siderophore receptors of Gram-negative bacteria — to bypass porin-mediated resistance [[carvalho-2014-siderophores-trojan-horses-mdr]].

Active against carbapenem-resistant *Acinetobacter baumannii*, *Pseudomonas aeruginosa*, and *Klebsiella pneumoniae* — the most feared hospital-acquired pathogens in the antimicrobial resistance crisis. Phase 3 trial (CREDIBLE-CR, n=152) demonstrated clinical success rates comparable to best available therapy.

### Gallium Nanoparticles

Enhanced antimicrobial activity through sustained Ga3+ release, increased surface area, and potential membrane interaction that supplements the iron-mimic mechanism [[ikhazuagbe-2025-gallium-nanoparticles-antimicrobial]]. Nanoparticle formulations also enable controlled local delivery — relevant for implant coatings and wound care.

### Gallium-Hydroxyapatite (Ga/HA) Bioceramics

Used in implant coatings to prevent MRSA and *P. aeruginosa* implant infections; disrupts bacterial iron metabolism at the implant surface through sustained Ga3+ release from the ceramic matrix [[nguyen-2024-antibacterial-bioceramics-design-mechanisms]]. Addresses the critical clinical problem of implant-associated infection without requiring systemic antibiotic exposure.

### Gallium-Polyphenol Probiotics (LGG@Ga-poly)

A novel delivery approach: *Lactobacillus rhamnosus* GG engineered with a gallium-polyphenol surface network. The gallium coating selectively eradicates tumor-promoting Proteobacteria within the pancreatic tumor microenvironment while preserving the probiotic core [[han-2024-lgg-gallium-polyphenol-intratumor-microbiota-pancreatic-cancer]]. In preclinical pancreatic cancer models, this approach:
- Reduced microbiota-derived LPS in the tumor microenvironment
- Decreased PD-L1 and IL-1β expression
- Improved CD8+ cytotoxic T cell infiltration
- Enhanced efficacy of anti-PD-1 immune checkpoint blockade

This represents a convergence of gallium antimicrobial chemistry with the emerging field of intratumoral microbiome modulation.

## Microbiome Selectivity: The Key Advantage

The most compelling property of siderophore-gallium strategies is their **taxonomic selectivity**. Different bacterial genera use different siderophore structures and receptor systems:

- Enteric pathogens (Enterobacteriaceae) use enterobactin-type catechol siderophores
- *Pseudomonas* uses pyoverdine and pyochelin
- *Staphylococcus* uses staphyloferrin-type siderophores
- Commensals like *Lactobacillus* and *Bifidobacterium* have minimal or absent siderophore-dependent iron acquisition

Salmochelin conjugates — derived from the enterobactin of *E. coli* — selectively kill Enterobacteriaceae while sparing *Lactobacillus* and other commensals [[passari-2023-siderophores-medical-applications]]. This intrinsic selectivity is not achievable with conventional antibiotics, which kill broadly regardless of pathogen status.

## Advantages Over Conventional Antibiotics

- **Targets fundamental metabolism**: Iron-dependent processes are not optional for bacteria; developing resistance requires rewiring core biochemistry, not just modifying a single target site [[passari-2023-siderophores-medical-applications]].
- **Exploits bacterial weaponry against itself**: Siderophores bacteria evolved for iron acquisition become the delivery vehicle for their own destruction.
- **Reduced resistance evolution**: Bypasses porin mutations and efflux pumps — the primary resistance mechanisms in carbapenem-resistant Gram-negatives [[carvalho-2014-siderophores-trojan-horses-mdr]].
- **Host compatibility**: Human cells do not express bacterial-type siderophore receptors; gallium's iron-mimic toxicity is bacterium-specific.

## Connection to WikiBiome Metallomics Framework

Gallium therapeutics represent a **deliberate application of mis-metallation as antimicrobial strategy** — the same principle that makes cadmium and lead toxic to humans (displacement of correct metal cofactors) is weaponized here against bacterial pathogens. The difference is directionality: toxic metal contamination poisons human enzymes through mis-metallation; gallium therapy poisons bacterial enzymes through the same mechanism, but selectively in organisms with iron-dependent biochemistry. This positions gallium as a therapeutic inversion of the nutritional immunity concept: where the host withholds iron from pathogens, gallium provides a counterfeit iron that poisons rather than feeds.

## Cross-References

- [[iron]] — The metal gallium mimics; ionic radius and coordination chemistry similarity enable the deception
- [[siderophores-metallophores]] — The uptake systems gallium exploits for pathogen-selective delivery
- [[mis-metallation]] — The mechanism by which gallium poisons bacterial iron-dependent enzymes
- [[nutritional-immunity]] — The host strategy gallium therapeutically amplifies
- [[pseudomonas-aeruginosa]] — Primary target; biofilm-active; Phase 1/2 CF trial conducted
- [[acinetobacter]] — Carbapenem-resistant target; cefiderocol active
- [[staphylococcus-aureus]] — Target of galbofloxacin (93 nM MIC)
- [[klebsiella-pneumoniae]] — Cefiderocol target
- [[bismuth]] — Synergistic partner in siderophore-antibiotic combinations
- [[antimicrobial-resistance]] — The crisis driving siderophore-gallium development
- [[biofilm]] — Gallium disrupts iron-dependent biofilm maintenance
- [[pancreatic-cancer]] — LGG@Ga-poly modulates intratumoral Proteobacteria
