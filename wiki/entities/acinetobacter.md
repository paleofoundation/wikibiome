---

title: Acinetobacter
type: entity
subtype: microbe
created: 2026-04-10
updated: 2026-04-16
sources: [alquethamy-2021-acinetobacter-cadmium-resistance, rebelo-2021-enterococcus-metal-antibiotic-resistance, braud-2010-siderophores-pseudomonas-metal-tolerance, liu-2023-cadmium-microbiota-metabolome-rats, gao-2020-gut-microbial-biomarkers-acs-post-stemi, yan-2025-infant-serum-metals-gut-microbiota-china, critchlow-2025-zinc-metalloprotein-migc-cell-wall-acinetobacter, golden-2024-metal-chelation-antibacterial-pseudomonas-acinetobacter, wang-2023-gut-microbiota-signature-asd-gi-symptoms-china]
source_count: 9
metal_dependencies: [zinc, iron, copper -- uses Zn-dependent metalloproteases and Fe-siderophore uptake; harbors Cd/Zn efflux systems; Zn metallochaperone MigC regulates cell wall biogenesis]
tags: [pathogen, ESKAPE, nosocomial, multi-drug-resistant, metal-antibiotic-co-resistance, cadmium-resistance, WHO-critical-priority]
platform: wikibiome
last_substantive_update: 2026-04-16
seo_target: "Acinetobacter baumannii metal resistance antibiotic co-selection"
wikipedia_differentiation: "Cadmium-zinc efflux system (CzcE/CzcCBA) with quantitative MIC data; zinc metallochaperone MigC as a calprotectin-sensitive cell wall biogenesis regulator; ESKAPE metal-resistance framework linking heavy metal exposure to antibiotic co-selection"
gram_stain: "negative"
oxygen_requirement: "aerobic"
key_enzymes: [CzcE-CDF-transporter, CzcCBA-RND-efflux, CadR-MerR-regulator, MigC-COG0523-GTPase, znuA-zinc-importer, siderophore-receptors]
conditions_enriched_in: [nosocomial-infections, acute-coronary-syndrome, necrotizing-enterocolitis, autism-spectrum-disorder]
conditions_depleted_in: []
pathogenic_potential: opportunistic
---

# Acinetobacter

A Gram-negative, aerobic, non-fermenting coccobacillus and a member of the **ESKAPE** group of priority pathogens (Enterococcus, Staphylococcus, Klebsiella, Acinetobacter, Pseudomonas, Enterobacter). *Acinetobacter baumannii* is among the most problematic nosocomial pathogens worldwide, designated **WHO Priority 1: Critical** for antibiotic resistance. Its ability to persist in hospital environments stems from a uniquely sophisticated integration of metal homeostasis, metal resistance, and antibiotic tolerance — systems that are simultaneously vulnerabilities exploitable for new therapeutic strategies.

## Classification and Ecology

The genus *Acinetobacter* contains ~50 named species. *A. baumannii* is the primary clinical pathogen; *A. lwoffii*, *A. pittii*, and *A. nosocomialis* are also clinically significant. *Acinetobacter* species are ubiquitous in soil, water, and hospital environments. Unlike many ESKAPE pathogens, *A. baumannii* is unusual in being a strict aerobe — a factor that limits its gut colonization potential but enhances its environmental persistence on dry surfaces.

## Metal Resistance Mechanisms

### Cadmium Efflux System — CzcE/CzcCBA

*A. baumannii* possesses a two-stage cadmium translocation pathway that is one of the best-characterized Cd efflux systems in Gram-negative bacteria [[alquethamy-2021-acinetobacter-cadmium-resistance]]:

- **CzcE** (CDF family transporter): exports [[cadmium]] from cytoplasm to periplasm. Loss of CzcE renders the bacterium **30-fold more sensitive** to Cd, with **8-fold higher intracellular Cd accumulation**.
- **CzcCBA** (HME-RND efflux system): exports Cd from periplasm to extracellular space, completing the efflux pathway. Also contributes to [[zinc]] resistance and exports certain antibiotics.
- **CadR** (MerR-type regulator): a highly attuned Cd sensor that activates *czcE* expression with approximately **480-fold upregulation** upon Cd exposure — one of the most sensitive metal-responsive regulatory systems known.
- The cadmium resistome involves **at least 67 genes** with significant fitness changes under Cd stress, indicating the breadth of the cellular response extends well beyond the efflux pump itself.

### Cross-Metal Toxicity Cascade

Cadmium exposure in *A. baumannii* causes cascading disruption of the cellular metallome:

- [[zinc]] depletion below detection limits at 15 µM Cd, triggering zinc starvation responses (znuA upregulation).
- [[copper]] hyperaccumulation, likely from compensatory upregulation of copper import (oprC).
- [[iron]] levels remain unaffected, suggesting metal-specific vulnerability rather than global metal dysregulation.

This cross-metal toxicity pattern is a model system for understanding how single-metal exposure can dysregulate the entire metallome — a principle with direct relevance to [[mis-metallation]] and to how environmental heavy metal contamination amplifies pathogen virulence.

### MigC — Zinc Metallochaperone for Cell Wall Biogenesis

A newly characterized zinc-dependent mechanism connects nutritional immunity to antibiotic susceptibility [[critchlow-2025-zinc-metalloprotein-migc-cell-wall-acinetobacter]]:

- **MigC** (A1S_0934) is a COG0523-family zinc-binding GTPase metallochaperone that interacts with and inhibits **MurD**, an essential Mur ligase required for peptidoglycan (cell wall) biosynthesis.
- **Zn-MigC inhibits MurD** with Ki = 32 ± 6 µM (noncompetitive/allosteric), creating a zinc-dependent regulatory switch on cell wall synthesis.
- MigC binds zinc with extremely high affinity (KZn₁ = 7.0 × 10¹⁰ M⁻¹), increasing ~40-fold with GTP bound.
- When the host deploys **calprotectin** (the primary [[nutritional-immunity]] zinc-chelating protein), Zn sequestration triggers loss of MigC function → elongated bacterial morphology, thinner peptidoglycan, increased HADA incorporation.
- **delta-migC cells are sensitized to ceftriaxone** (beta-lactam), revealing that zinc starvation through nutritional immunity creates a window of enhanced antibiotic susceptibility.
- The delta-migC mutant shows **reduced lung and heart colonization** in murine pneumonia models, confirming in vivo relevance.

This finding establishes a direct mechanistic link between host zinc-sequestration and enhanced antibiotic killing — a potential basis for combination therapy strategies.

## Metal-Antibiotic Co-Resistance

The co-occurrence of metal resistance and antibiotic resistance genes on mobile genetic elements is a defining concern for *Acinetobacter* in clinical settings:

- Efflux systems like CzcCBA export both metal ions and certain antimicrobials; heavy metal exposure selects for multi-drug resistant clones in hospital wastewater and environmental reservoirs [[rebelo-2021-enterococcus-metal-antibiotic-resistance]].
- Metal resistance genes (Cd, Zn, Cu, Hg) are frequently co-located with carbapenem resistance determinants on integrons and conjugative plasmids, enabling environmental metal selection to maintain antibiotic resistance.
- This has direct public health relevance: agricultural and industrial zinc/copper use can maintain populations of carbapenem-resistant *A. baumannii* in environmental reservoirs even in the absence of antibiotic selection pressure.

## Siderophore-Based Iron Acquisition and Therapeutic Targeting

*A. baumannii* produces **acinetobactin** and **baumannoferrin** siderophores for iron acquisition under iron-limiting conditions:

- These species-specific siderophore uptake systems are exploitable for **Trojan horse** antibiotic delivery — conjugating antibiotics to siderophore scaffolds allows bacterial self-import of otherwise poorly penetrating antibiotics [[golden-2024-metal-chelation-antibacterial-pseudomonas-acinetobacter]].
- Competitive iron deprivation via chelators that outcompete acinetobactin offers a virulence-disarmament strategy distinct from conventional bactericidal approaches, with reduced resistance selection pressure.
- Disrupting metal homeostasis to disarm virulence rather than kill bacteria is a promising paradigm that *A. baumannii*'s metal biology has helped define [[golden-2024-metal-chelation-antibacterial-pseudomonas-acinetobacter]].

## Role in Disease

### Nosocomial Infections
The primary clinical burden: ventilator-associated pneumonia (VAP), catheter-associated bloodstream infections (CLABSI), wound infections, and urinary tract infections — predominantly in ICU patients. Carbapenem-resistant *A. baumannii* (CRAB) is a WHO Priority 1 pathogen with limited treatment options.

### Cardiovascular Associations
Enriched in the gut microbiome of **acute coronary syndrome** patients post-STEMI compared to healthy controls [[gao-2020-gut-microbial-biomarkers-acs-post-stemi]]. Its presence in the gut — despite being an aerobic organism that prefers environmental over gut niches — suggests translocation or metabolic product-mediated systemic inflammation in cardiovascular disease.

### Infant Gut and Metal Exposure
Serum metal levels in infants correlate with *Acinetobacter* abundance, suggesting that **early-life metal exposure shapes initial colonization** [[yan-2025-infant-serum-metals-gut-microbiota-china]]. Elevated heavy metal burden in infants may select for metal-resistant *Acinetobacter* strains in the developing gut microbiome.

### Neonatal Conditions and ASD
*Acinetobacter* is enriched in necrotizing enterocolitis (NEC) gut microbiomes and in ASD children with GI symptoms, where it correlates positively with autism severity (CARS score) [[wang-2023-gut-microbiota-signature-asd-gi-symptoms-china]].

## Environmental Persistence

*A. baumannii* survives on dry hospital surfaces for weeks to months — far longer than most Gram-negative pathogens — owing to:
- Desiccation tolerance mechanisms linked to biofilm formation
- Metal efflux capacity enabling survival in zinc/copper-enriched disinfection environments
- Genetic plasticity via natural competence for transformation, allowing rapid acquisition of resistance genes

## What Wikipedia Doesn't Cover

Wikipedia's *Acinetobacter* coverage focuses on antibiotic resistance and nosocomial infections. This page adds: the quantified CzcE/CzcCBA cadmium efflux pathway with 30-fold sensitivity and 480-fold regulatory induction data; MigC zinc metallochaperone as a calprotectin-responsive cell wall regulator that creates antibiotic susceptibility windows; the cross-metal toxicity cascade from single-metal Cd exposure; and the mechanistic basis for metal-antibiotic co-resistance via mobile genetic elements.

## Key Sources

- [[alquethamy-2021-acinetobacter-cadmium-resistance]] — CzcE/CzcCBA quantitative characterization
- [[critchlow-2025-zinc-metalloprotein-migc-cell-wall-acinetobacter]] — MigC zinc metallochaperone, calprotectin sensitivity
- [[golden-2024-metal-chelation-antibacterial-pseudomonas-acinetobacter]] — siderophore Trojan horse and metal-chelation strategies
- [[gao-2020-gut-microbial-biomarkers-acs-post-stemi]] — gut enrichment in ACS

## Cross-References

- [[cadmium]] — CzcE/CzcCBA is one of the best-characterized Cd efflux systems in Gram-negatives
- [[zinc]] — MigC metallochaperone; Zn depletion sensitizes to beta-lactams; CzcCBA Zn resistance
- [[nutritional-immunity]] — calprotectin-mediated Zn starvation activates MigC pathway; Cd-induced Zn depletion mimics host strategy
- [[mis-metallation]] — Cd-induced cross-metal toxicity; Mn mis-metallation of MurD disrupts peptidoglycan
- [[metal-homeostasis]] — demonstrates cross-metal toxicity cascades from single-metal exposure
- [[pseudomonas-aeruginosa]] — shares siderophore-based metal acquisition strategies; co-target for metal-chelation therapeutics
- [[antimicrobial-resistance]] — carbapenem-resistant A. baumannii is WHO Priority 1 critical pathogen
- [[cardiovascular-disease]] — enriched in ACS gut microbiome profiles
- [[iron]] — acinetobactin/baumannoferrin siderophores; Trojan horse delivery target
