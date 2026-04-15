---

title: Urease
type: concept
created: 2026-04-09
updated: 2026-04-09
sources: [maier-2019-nickel-microbial-pathogenesis.md, pendergrass-2026-nickel-nec-preterm-gut.md, campanale-2014-nickel-free-diet-h-pylori.md, pendergrass-2026-fertilizers-heavy-metals-historical.md, pendergrass-2026-microbial-metallomics-parkinsons-ferroptosis.md, akbari-2022-metal-homeostasis-streptococci.md]
tags: [nickel-enzyme, urease, virulence, acid-resistance, biofilm, urinary-stones, NEC, H-pylori, nickel, metalloenzyme]
platform: wikibiome
---

# Urease

The most widespread [[nickel]]-dependent virulence factor across human pathogens. Urease is found in at least 40 prokaryotic and 9 eukaryotic pathogenic species, making it the single most important enzyme linking dietary/environmental nickel to infectious disease.

## Biochemistry

Urease (EC 3.5.1.5) catalyzes the hydrolysis of urea into ammonia and bicarbonate:

> (NH2)2CO + H2O --> 2 NH3 + CO2 (spontaneously: NH3 + H2O --> NH4+ + OH-; CO2 + H2O --> HCO3- + H+)

The net effect is a **rise in local pH** due to ammonia production, plus generation of a nitrogen source for the microorganism.

### Active site structure

- Contains **2 Ni(II) ions per active subunit**, bridged by a carbamylated lysine residue.
- The dinuclear nickel center is essential for catalysis; without nickel insertion, the enzyme has no urea-hydrolyzing activity.
- Some organisms (e.g., certain *Helicobacter* species) maintain both Ni-containing and Fe-containing ureases, though the Fe form is not catalytically active for urea hydrolysis.

### Maturation and nickel insertion

- Urease maturation requires a dedicated set of **accessory proteins**: UreD (scaffold), UreE (nickel metallochaperone), UreF (conformational gatekeeper), UreG (GTPase that drives nickel insertion), and UreH (in some species).
- In [[helicobacter-pylori]], the maturation pathway shares components with [[hydrogenase]] maturation -- HypA and HypB deliver nickel to both urease (via UreE) and hydrogenase, creating a coordinated nickel allocation system [[maier-2019-nickel-microbial-pathogenesis]].
- In [[proteus-mirabilis]], the HypB accessory protein is **39% histidine** -- one of the most histidine-enriched proteins known -- creating a high-capacity nickel reservoir for urease metalation.

### Dual catalytic and antioxidant function

A key discovery in *H. pylori*: urease has **two distinct activities** [[maier-2019-nickel-microbial-pathogenesis]]:

1. **Holo-urease (Ni-bound)**: catalytic urea hydrolysis + non-catalytic oxidant quenching via a Met/Met-sulfoxide cycle repaired by methionine sulfoxide reductase (MSR).
2. **Apo-urease (Ni-free)**: retains only the antioxidant/oxidant-quenching activity.

Critically, only **2-25% of H. pylori urease is actually nickel-activated**. The remaining 75-98% may serve primarily as an antioxidant defense. This suggests the enzyme's role in protecting against host-generated reactive oxygen species may be as important as -- or more important than -- its catalytic role in acid neutralization.

## Virulence Roles by Pathogen

### [[helicobacter-pylori]] -- The paradigmatic urease-dependent pathogen

- Urease comprises up to **10% of the total proteome** -- an extraordinary metabolic investment.
- **Acid survival**: ammonia/bicarbonate buffer cytoplasmic pH to near-neutral in the gastric lumen (pH 1-3).
- **Persistence at neutral pH**: urease is required for chronic colonization even when gastric pH is not acidic, indicating roles beyond simple acid buffering.
- **Angiogenesis**: urease promotes new blood vessel formation in the gastric mucosa.
- **Apoptosis induction**: urease binds Class II MHC molecules on gastric epithelial cells, triggering programmed cell death.
- **Tight junction disruption**: ammonia-mediated myosin activation opens epithelial tight junctions, increasing permeability.
- **Platelet activation**: urease activates blood platelets via a lipoxygenase-mediated pathway.
- **Mucin gene alteration**: urease modifies mucin gene expression in gastric epithelium.
- **Pro-inflammatory cytokine induction**: stimulates neutrophil and monocyte chemotaxis.
- **Hyperammonemia**: ammonia from urease can cause minimal hepatic encephalopathy in cirrhosis patients.
- **NON-CATALYTIC antioxidant role**: the Met/Met-sulfoxide cycle in apo-urease quenches host-derived oxidants (see above).

### [[staphylococcus-aureus]] -- Skin and biofilm survival

- Human sweat contains ~**22 mM urea**; urease-mediated hydrolysis provides ammonia for acid neutralization and nitrogen acquisition on the skin surface [[maier-2019-nickel-microbial-pathogenesis]].
- Required for **kidney colonization** in systemic infection models.
- Urease genes are **upregulated in biofilm-embedded cells**, directly linking nickel metabolism to chronic and device-associated infections.
- Calprotectin at abscess sites sequesters nickel, inhibiting urease activity -- but staphylopine (the *S. aureus* metallophore) counteracts this by scavenging nickel from the host environment.

### [[proteus-mirabilis]] -- Crystalline biofilms and urinary stones

- Urease is the **master virulence factor** for catheter-associated urinary tract infection (CAUTI) [[maier-2019-nickel-microbial-pathogenesis]].
- Ammonia production raises urine pH from ~5-6 to >7, causing precipitation of:
 - **Struvite** (MgNH4PO4) -- the primary stone mineral.
 - **Apatite** (Ca10(PO4)6(OH)2) -- secondary mineral deposition.
- **Crystalline biofilm formation**: urease-mediated crystal precipitation creates a mineralized biofilm on catheter surfaces that physically obstructs urine flow, provides a protected niche, and resists antibiotic penetration.
- **Extracellular crystal clusters in the bladder**: urease induces crystal formation directly in bladder tissue, causing tissue damage and promoting ascending infection.
- Urease-negative mutants are dramatically attenuated in CAUTI models.
- Urea is never substrate-limiting in urine (~200-400 mM); **nickel availability for urease metalation is the bottleneck**.

### [[escherichia-coli]] -- STEC acid survival

- Shiga toxin-producing *E. coli* (STEC/EHEC) use urease for **acid survival during gastric transit** [[maier-2019-nickel-microbial-pathogenesis]].
- Urease-mediated ammonia production buffers pH, enabling survival through the stomach to reach the intestinal colonization site.
- Not all *E. coli* pathotypes carry urease -- it is primarily found in STEC and some UPEC strains.
- In the preterm gut, Ni-activated urease in *E. coli* raises gut pH, favoring Proteobacteria over acid-producing commensals [[pendergrass-2026-nickel-nec-preterm-gut]].

### Cryptococcus neoformans (and related fungi) -- Brain invasion

- Note: this is distinct from [[candida-albicans]]. *Cryptococcus neoformans* uses Ni-dependent urease for **CNS invasion** [[maier-2019-nickel-microbial-pathogenesis]].
- Urease activity promotes crossing of the blood-brain barrier.
- Urease-negative mutants show dramatically reduced brain colonization.
- Ammonia may damage endothelial tight junctions (paralleling *H. pylori* urease disruption of gastric tight junctions).
- **Microvascular sequestration**: urease facilitates trapping in brain microvasculature.
- **Phagolysosomal pH modulation**: urease-generated ammonia alters phagosomal pH, promoting intracellular survival in macrophages.
- *C. neoformans* causes cryptococcal meningitis -- a leading killer of HIV/AIDS patients.
- **C. gattii** and **Coccidioides posadasii** also depend on Ni-urease (pulmonary infection severity for the latter).

### [[brucella|*Brucella*]] species -- Intestinal colonization

- Urease enables survival during gastrointestinal passage and intestinal colonization.
- **Immunization with urease protects against [[brucella|*Brucella*]] infection** -- direct evidence that urease is a targetable virulence factor and a viable vaccine antigen.

### Klebsiella pneumoniae -- GI stress resistance

- Urease supports intestinal colonization and gastrointestinal stress resistance.
- Host calprotectin sequesters nickel from *K. pneumoniae*, inhibiting urease activity [[maier-2019-nickel-microbial-pathogenesis]].
- A key NEC-associated pathogen whose urease is fueled by dietary nickel in infant formula [[pendergrass-2026-nickel-nec-preterm-gut]].

### Ureaplasma spp. -- The genus defined by urease

- The genus name literally means "urea plasma" -- urease is the **defining metabolic feature**.
- Urease-generated ammonia contributes to the **proton motive force (PMF)**, which drives ATP synthesis. This is a unique metabolic arrangement: urease activity is directly coupled to energy generation rather than merely serving as a pH buffer.
- Also associated with **struvite stone formation** in the urinary tract.

### Actinomyces naeslundii -- Oral plaque formation

- Urease enables survival and plaque formation in the **acidic oral environment** by neutralizing acids produced by cariogenic bacteria.

### Corynebacterium urealyticum -- UTI pathogenesis

- A urease-positive organism implicated in **urinary tract infection** pathogenesis, particularly in catheterized patients.

### Yersinia enterocolitica -- Low-pH survival

- Urease enables survival at low pH during gastric transit and intestinal colonization.

### Morganella morganii -- Acid survival

- Urease-mediated acid survival in the gastrointestinal environment.

### Haemophilus influenzae -- Respiratory acid resistance

- Urease contributes to acid resistance during respiratory tract infection.

### Campylobacter jejuni -- Notable absence

- *C. jejuni* does **NOT** have urease. This is a notable exception among enteric pathogens.
- However, *Helicobacter hepaticus* (a related Epsilonproteobacterium) does possess urease alongside its [NiFe] [[hydrogenase]].

## The Dietary Nickel Connection

### Clinical evidence: nickel-free diet enhances H. pylori eradication

The Campanale 2014 pilot study provides **direct clinical evidence** that dietary nickel feeds urease-dependent pathogenesis [[campanale-2014-nickel-free-diet-h-pylori]]:

- Patients receiving a **nickel-free diet + standard triple therapy** achieved an **84% eradication rate** vs. **46% with triple therapy alone** (p<0.01).
- The nickel-free diet likely works by depleting the metalloenzymes urease (acid resistance) and [[hydrogenase]] (energy production) that are critical for *H. pylori* survival in the stomach.
- This is the first study demonstrating that a dietary metal intervention can enhance antibiotic eradication of a pathogen.

### Nickel in infant formula and NEC

Pendergrass 2026 proposes that dietary nickel from infant formula activates urease-positive pathogens in the preterm gut [[pendergrass-2026-nickel-nec-preterm-gut]]:

- Soy-based formula contains **~10x more nickel** than cow's milk formula (0.45 vs. 0.03 mg/L) and orders of magnitude more than human breast milk (0.005-0.016 mg/L).
- Key NEC-associated pathogens (*E. coli*, *Klebsiella*, *Enterobacter*, *Citrobacter*, *Ureaplasma*) all deploy Ni-dependent urease.
- Urease-generated ammonia raises gut pH, favoring Proteobacteria over acid-producing commensals like *Lactobacillus*, creating a **positive feedback loop of dysbiosis**.
- Human breast milk is naturally nickel-poor -- potentially an evolved mechanism of [[nutritional-immunity]] starving Ni-dependent pathogens of their essential cofactor.
- Proposed biomarkers: fecal urease activity, ammonia levels, and stool nickel content as early NEC risk indicators.

### Environmental nickel in agriculture

Nickel in urea fertilizers (peaking at 3.5-4.2 mg/kg during the 1990s-2000s) enters the food chain through soil bioaccumulation, contributing to dietary nickel exposure that may ultimately feed urease-positive pathogens [[pendergrass-2026-fertilizers-heavy-metals-historical]].

## Therapeutic Targeting of Urease

### Urease inhibitors

- **Acetohydroxamic acid (AHA)**: a competitive urease inhibitor that has been used clinically to manage infection-related urinary stones (though side effects limit use).
- Fluorofamide and other hydroxamic acid derivatives are under investigation.
- Challenge: most urease inhibitors lack pathogen specificity and may affect commensal urease-positive organisms.

### Nickel restriction (dietary)

- The nickel-free diet approach demonstrated by Campanale 2014 represents a **non-antibiotic anti-virulence strategy**: reduce dietary nickel to deplete pathogen metalloenzymes.
- Applicable beyond *H. pylori*: any urease-dependent pathogen is theoretically susceptible to nickel restriction.
- Dietary nickel restriction for formula-fed preterm infants is proposed as a NEC prevention strategy [[pendergrass-2026-nickel-nec-preterm-gut]].

### Nickel sequestration (host defense)

- **Calprotectin (S100A8/A9)**: coordinates Ni(II) preferentially over Zn(II) at the hexahistidine site; sequesters nickel from *S. aureus* and *K. pneumoniae*, directly inhibiting urease [[maier-2019-nickel-microbial-pathogenesis]].
- **Lactoferrin**: can bind nickel via histidine/tyrosine ligands -- nickel-sequestering effect plausible but underexplored.
- **NRAMP1**: exports Ni(II) from macrophage phagolysosomes, restricting availability to engulfed pathogens.
- **Aspergillomarasmine A**: a proposed nickel chelation therapy that could disarm pathogens without killing them (anti-virulence approach) [[pendergrass-2026-nickel-nec-preterm-gut]].

### Urease-based vaccines

- **HspA in H. pylori**: a GroES homolog with a unique His-rich C-terminus for nickel binding. Intranasal administration provides partial protection in mouse models. Candidate for anti-*H. pylori* vaccine [[maier-2019-nickel-microbial-pathogenesis]].
- **Urease immunization for Brucella**: urease-based vaccination protects against Brucella infection, demonstrating the antigen's viability as a vaccine target.

## Key Sources

- [[pendergrass-2026-microbial-metallomics-parkinsons-ferroptosis]]
- [[akbari-2022-metal-homeostasis-streptococci]]

## Connections

- [[nickel]] -- essential cofactor; the urease-nickel axis is the most clinically significant nickel-pathogen interaction
- [[helicobacter-pylori]] -- the paradigmatic urease-dependent pathogen; up to 10% of proteome
- [[staphylococcus-aureus]] -- urease for skin/biofilm/kidney colonization
- [[proteus-mirabilis]] -- urease-driven crystalline biofilm and struvite stones
- [[escherichia-coli]] -- STEC acid survival; NEC-associated urease activity
- [[candida-albicans]] -- page covers *Cryptococcus neoformans* Ni-urease for brain invasion
- [[salmonella-typhimurium]] -- does not use urease but shares nickel maturation machinery (HypA/HypB) with hydrogenase
- [[pseudomonas-aeruginosa]] -- does not use urease but has Ni-dependent [[glyoxalase]]
- [[hydrogenase]] -- shares nickel maturation pathway (HypA/HypB) with urease in H. pylori
- [[glyoxalase]] -- the third Ni-dependent enzyme class in pathogens
- [[metal-dependent-virulence]] -- urease as the most widespread Ni-virulence factor
- [[nutritional-immunity]] -- calprotectin/lactoferrin/NRAMP1 restrict nickel from urease
- [[dietary-nickel-exposure]] -- dietary nickel feeds urease-positive pathogens
- [[nickel-allergy]] -- nickel-free diet (used for allergy management) also enhances H. pylori eradication
- [[inter-kingdom-metal-shielding]] -- biofilm communities modulate nickel access to urease
- [[pathogen-metal-acquisition]] -- nickel transport systems that feed urease metalation
- [[gut-metal-microbiome]] -- urease-driven pH shift reshapes gut microbial communities
