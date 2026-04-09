---
title: Metal-Dependent Virulence
type: concept
created: 2026-04-09
updated: 2026-04-09
sources: [maier-2019-nickel-microbial-pathogenesis, cassat-2012-metal-acquisition-staphylococcus-aureus, akbari-2022-metal-homeostasis-streptococci, pendergrass-2026-nickel-nec-preterm-gut, romero-espejel-2013-streptococcus-pneumoniae-iron, patil-2021-infection-metallomics-critical-care, braud-2010-siderophores-pseudomonas-metal-tolerance, pendergrass-2026-microbial-metallomics-parkinsons-ferroptosis]
tags: [virulence, metals, nickel, iron, zinc, copper, manganese, urease, hydrogenase, siderophores, nutritional-immunity, pathogenesis]
---

# Metal-Dependent Virulence

## Overview

Transition metals serve as essential cofactors for pathogen virulence factors across virtually all domains of microbial life. The dependence of pathogens on metals they must scavenge from the host environment creates a fundamental tension at the heart of infectious disease: the pathogen's metabolic need for metal cofactors versus the host's strategy of [[nutritional-immunity]] (metal sequestration). This concept ties together pathogen biology, host defense, and the environmental dimension -- dietary and environmental metal exposure can tip the balance in the pathogen's favor.

## Nickel-Dependent Virulence Factors

Nickel is unique among biometals because **mammals do not synthesize known Ni-requiring proteins**, making it an ideal target for host sequestration. Yet at least 40 prokaryotic and 9 eukaryotic pathogens depend on Ni-enzymes for virulence [[[maier-2019-nickel-microbial-pathogenesis]]].

### Urease

The most widespread Ni-dependent virulence factor. Catalyzes urea hydrolysis to bicarbonate and ammonia, serving dual roles in nitrogen acquisition and acid neutralization.

- **[[helicobacter-pylori]]**: Urease comprises up to 10% of the total proteome. Essential for gastric acid survival. Ammonia production causes epithelial damage, disrupts tight junctions, induces apoptosis via Class II MHC binding, activates blood platelets, promotes angiogenesis, and stimulates pro-inflammatory cytokines. The holo-urease (Ni-bound) also has a non-catalytic antioxidant function via a Met/Met-sulfoxide redox cycle; apo-urease retains only this antioxidant activity [[[maier-2019-nickel-microbial-pathogenesis]]].
- **[[staphylococcus-aureus]]**: Urease enables skin survival (human sweat contains ~22 mM urea), kidney colonization, and biofilm formation. Urease genes are upregulated in biofilm-embedded cells [[[maier-2019-nickel-microbial-pathogenesis]]].
- **[[proteus-mirabilis]]**: Urease drives crystalline biofilm formation on urinary catheters, urinary stone formation, and UTI pathogenesis.
- **Ureaplasma spp.**: Urease is genus-defining; ammonia contributes to proton motive force-driven ATP synthesis and struvite stone formation.
- **Eukaryotic pathogens**: *Cryptococcus neoformans* uses urease for brain invasion. *Coccidioides posadasii* requires it for pulmonary infection severity. *C. gattii* also depends on urease.
- **NEC-associated pathogens**: *E. coli*, *Klebsiella*, *Enterobacter*, *Citrobacter*, and *Ureaplasma* all deploy Ni-dependent urease in the preterm gut. Urease-generated ammonia raises gut pH, favoring Proteobacteria over acid-producing commensals like *Lactobacillus*, creating a positive feedback loop of dysbiosis [[[pendergrass-2026-nickel-nec-preterm-gut]]].

### [NiFe] Hydrogenase

Catalyzes H2 oxidation, providing energy (proton motive force) to the pathogen.

- **[[helicobacter-pylori]]**: Single H2-uptake hydrogenase (*hydABCDE* operon). H2 is chronically available in the human stomach (~80 uM, well above the enzyme Km of ~1.8 uM). Powers **CagA translocation** -- the carcinogenic effector protein. Hydrogenase deletion mutants cannot translocate CagA or induce gastric cancer in gerbils. Higher hydrogenase activity correlates with strains from cancer patients vs. gastritis patients. Also enables H2-stimulated CO2 fixation ("mixotrophy"), a growth mode never before described in a human pathogen [[[maier-2019-nickel-microbial-pathogenesis]]].
- **[[helicobacter-hepaticus]]**: Hydrogenase supports amino acid uptake and cell growth; linked to liver lesions in mice.
- **[[salmonella-typhimurium]]**: Possesses 4 distinct [NiFe] hydrogenases (Hya, Hyb, Hyc, Hyd). Hyb is most important for virulence. Triple mutant (delta-hya/delta-hyb/delta-hyd) is completely avirulent -- 100% survival in a typhoid fever mouse model.
- **[[campylobacter-jejuni]]**: Membrane-bound [NiFe] hydrogenase essential for growth and chicken colonization.
- **[[shigella-flexneri]]**: H2-uptake hydrogenases combat acid stress in phagolysosomes.

### Glyoxalase I (GloI)

Detoxifies methylglyoxal, a toxic glycolysis byproduct. The Ni-dependent form is found in prokaryotic pathogens including *P. aeruginosa*, *N. meningitidis*, *Y. pestis*, and *Clostridia*. Essential in *Leishmania donovani* and proposed as a drug target. In the preterm gut, Ni-activated GloI helps NEC-associated *E. coli* survive metabolic stress [[[pendergrass-2026-nickel-nec-preterm-gut]]].

### Acireductone Dioxygenase (ARD)

Part of the methionine salvage pathway. The Ni-bound form produces different products than the Fe-bound form (a rare example of a single enzyme with metal-dependent reaction specificity). Found across all pathogenic gamma-proteobacteriaceae [[[maier-2019-nickel-microbial-pathogenesis]]].

### Ni-Superoxide Dismutase (Ni-SOD)

Rare among pathogens; found in *Streptomyces* spp. Important for defense against oxidative stress in plant hosts.

## Iron-Dependent Virulence

Iron is the most universally required metal for pathogen virulence, and its acquisition is arguably the best-studied host-pathogen battleground.

### Siderophore-Mediated Acquisition

- **[[staphylococcus-aureus]]**: Produces staphyloferrin A and staphyloferrin B. Inactivation of siderophore production reduces colony recovery from infected organs. See [[siderophores-metallophores]] for detail [[[cassat-2012-metal-acquisition-staphylococcus-aureus]]].
- **[[pseudomonas-aeruginosa]]**: Pyoverdine and pyochelin acquire iron and also chelate toxic metals extracellularly, providing dual protection [[[braud-2010-siderophores-pseudomonas-metal-tolerance]]].
- Enterobacteriaceae produce enterobactin, aerobactin, and yersiniabactin [[[patil-2021-infection-metallomics-critical-care]]].

### Heme Uptake

- **[[staphylococcus-aureus]]**: The Isd (iron-regulated surface determinant) system is the preferred iron source during infection. Hemolysins lyse red blood cells to release hemoglobin, which is captured by IsdB on the cell surface [[[cassat-2012-metal-acquisition-staphylococcus-aureus]]].
- **[[streptococcus-pneumoniae]]**: Uses two membrane proteins (22 and 37 kDa) to bind hemoglobin and haem. Cannot use transferrin or lactoferrin as iron sources -- only Hb and haem [[[romero-espejel-2013-streptococcus-pneumoniae-iron]]].
- Streptococcal species employ the Shp/Shr heme relay system and dedicated heme ABC transporters [[[akbari-2022-metal-homeostasis-streptococci]]].

### Iron-Dependent Enzymes

- **Fe-SOD and catalase**: Critical for defending against the oxidative burst in phagocytes.
- **Aconitase, succinate dehydrogenase, cytochrome oxidases**: Iron-sulfur cluster enzymes essential for core metabolism.
- Iron availability in the gut lumen determines competitive outcomes between commensals and pathogens; siderophore-producing Enterobacteriaceae outcompete commensals under high-iron conditions [[[pendergrass-2026-microbial-metallomics-parkinsons-ferroptosis]]].

### Host Iron Restriction

Transferrin, lactoferrin, hemopexin, haptoglobin, and hepcidin all restrict free iron. NRAMP1 (SLC11A1) exports iron from macrophage phagolysosomes. See [[nutritional-immunity]].

## Zinc-Dependent Virulence

### Zn-Metalloproteases

Zinc-dependent endopeptidases, including [[matrix-metalloproteases]], are produced by both pathogens and host cells for tissue invasion and remodeling. Bacterial Zn-metalloproteases facilitate tissue penetration and immune evasion.

### Zn-SOD

Cu/Zn-SOD is deployed by many pathogens to defend against the host oxidative burst in phagocytes.

### Zinc Transporters and Regulation

- Streptococcal AdcABC/AdcAII zinc import systems are essential for colonization in rat tooth, nasopharynx, meningitis, and skin infection models [[[akbari-2022-metal-homeostasis-streptococci]]].
- Host calprotectin sequesters Zn at infection sites; the pathogen's ability to overcome this determines infection outcome.
- Zinc intoxication in neutrophil phagosomes is an additional host weapon -- flooding engulfed bacteria with toxic Zn concentrations [[[akbari-2022-metal-homeostasis-streptococci]]].

## Copper and Manganese in Virulence

### Copper

- Macrophages deliver copper into phagolysosomes as an antimicrobial strategy. Pathogens must possess copper efflux systems (CopA P-type ATPase) to survive intracellular killing [[[akbari-2022-metal-homeostasis-streptococci]]].
- Cu/Zn-SOD is a key virulence factor in many pathogens for defense against the oxidative burst.
- Copper also has direct antiviral properties through ROS generation [[[patil-2021-infection-metallomics-critical-care]]].

### Manganese

- **Mn-SOD** (SodA/SodM in *S. aureus*): The primary superoxide dismutase in many pathogens. Manganese is the critical cofactor for oxidative stress defense.
- **MntABC/MntH transporters**: High-affinity Mn import systems essential for virulence in staphylococci and streptococci.
- Host calprotectin binds both Mn and Zn to limit staphylococcal survival in abscesses [[[cassat-2012-metal-acquisition-staphylococcus-aureus]]].

## The Key Insight: The Arms Race and Environmental Metal Exposure

The fundamental dynamic is an **arms race**: pathogens evolve increasingly sophisticated metal acquisition systems (transporters, metallophores, storage proteins) to overcome host [[nutritional-immunity]] (calprotectin, lactoferrin, hepcidin, NRAMP1).

**Who wins this arms race determines infection outcome.** And critically, this balance can be externally disrupted:

- **Dietary/environmental metal excess**: Soy-based infant formula delivers 10x more nickel than cow's milk formula, potentially overwhelming calprotectin-mediated Ni sequestration and fueling NEC-associated pathogen virulence [[[pendergrass-2026-nickel-nec-preterm-gut]]]. Iron supplementation in infants increases Enterobacteriaceae and decreases *Lactobacillus* [[[bao-2024-iron-homeostasis-intestinal-immunity-gut-microbiota]]].
- **Metal-driven dysbiosis**: Heavy metals selectively enrich metal-tolerant pathobionts over SCFA-producing commensals, creating conditions favorable to infection [[[pendergrass-2026-microbial-metallomics-parkinsons-ferroptosis]]].
- **Co-selection of metal and antibiotic resistance**: Environmental metal exposure drives co-selection for antibiotic resistance genes on the same mobile elements, compounding the virulence threat [[[rebelo-2021-enterococcus-metal-antibiotic-resistance]]].

Human breast milk may represent an evolved countermeasure: it is naturally nickel-poor (0.005-0.016 mg/L), potentially starving Ni-dependent gut pathogens of their essential cofactor [[[pendergrass-2026-nickel-nec-preterm-gut]]].

## Connections

- [[nutritional-immunity]] -- the host defense this concept is in tension with
- [[siderophores-metallophores]] -- the metal-scavenging molecules pathogens deploy
- [[pathogen-metal-acquisition]] -- the cellular machinery for metal import, storage, and regulation
- [[inter-kingdom-metal-shielding]] -- how biofilms and polymicrobial communities modulate metal access
- [[matrix-metalloproteases]] -- Zn-dependent enzymes at the intersection of pathogen and host tissue invasion
- [[iron]] -- the most contested metal in host-pathogen interactions
- [[nickel]] -- the metal with the most asymmetric host-pathogen biology
- [[zinc]] -- cofactor for metalloproteases and SODs
- [[oxidative-stress]] -- the host weapon that metal-dependent SODs defend against
- [[gut-metal-microbiome]] -- environmental metal exposure reshaping microbial communities
- [[dietary-nickel-exposure]] -- the environmental input that can tip the arms race
