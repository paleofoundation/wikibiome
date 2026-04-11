---

title: Hydrogenase
type: concept
created: 2026-04-09
updated: 2026-04-09
sources: [maier-2019-nickel-microbial-pathogenesis.md, pendergrass-2026-nickel-nec-preterm-gut.md, campanale-2014-nickel-free-diet-h-pylori.md, pendergrass-2026-microbial-metallomics-parkinsons-ferroptosis.md]
tags: [nickel-enzyme, hydrogenase, NiFe, virulence, hydrogen-metabolism, CagA, cancer, energy-metabolism, H-pylori, Salmonella]
platform: wikibiome
---

# Hydrogenase

[NiFe] hydrogenases are the second major [[nickel]]-dependent virulence factor class in human pathogens. Less widespread than [[urease]] but critical for energy metabolism in gastric, enteric, and intracellular pathogens. The discovery that *H. pylori* hydrogenase powers CagA translocation -- the carcinogenic effector protein -- makes this enzyme a direct link between nickel availability and gastric cancer.

## Biochemistry

### Reaction

Hydrogenases catalyze the reversible oxidation of molecular hydrogen:

> H2 <--> 2H+ + 2e-

In the uptake direction, this provides electrons to the respiratory chain, generating **proton motive force (PMF)** for ATP synthesis. In the evolving direction, protons are reduced to H2 as an electron sink during fermentative metabolism.

### Three classes of hydrogenase

Hydrogenases are classified by their active-site metal content:

1. **[NiFe] hydrogenases**: Bimetallic Ni-Fe active site with CO and CN- ligands on iron. The dominant class in pathogenic bacteria. Typically function as H2-uptake enzymes, feeding electrons into the respiratory chain.
2. **[FeFe] hydrogenases**: Diiron active site. Primarily H2-evolving. Found in anaerobic bacteria and some eukaryotes but less prominent in human pathogens.
3. **[Fe] hydrogenases**: Mononuclear iron. Found only in methanogenic archaea. Not relevant to human pathogenesis.

### [NiFe] hydrogenase maturation

The maturation pathway is elaborate and requires dedicated accessory proteins:

- **HypA**: nickel metallochaperone; delivers Ni to the active site precursor.
- **HypB**: GTPase/nickel metallochaperone; works with HypA.
- **HypC/HypD**: scaffold complex for Fe(CO)(CN)2 assembly.
- **HypE/HypF**: synthesize the CN- ligands from carbamoyl phosphate.
- Endopeptidase: cleaves the C-terminal extension after Ni insertion, locking the metal in place.

**Key interconnection with urease**: In [[helicobacter-pylori]], HypA and HypB are **shared** between hydrogenase and urease maturation pathways. Nickel transfer from HypA to UreE demonstrates that the two enzyme systems are coordinately metalated from a common nickel pool. This means nickel allocation between energy metabolism (hydrogenase) and acid survival (urease) is a regulated decision for the bacterium [[maier-2019-nickel-microbial-pathogenesis]].

## Virulence Roles by Pathogen

### [[helicobacter-pylori]] -- Hydrogenase powers the cancer pathway

*H. pylori* possesses a single H2-uptake [NiFe] hydrogenase encoded by the *hydABCDE* operon [[maier-2019-nickel-microbial-pathogenesis]]:

**Substrate availability**: H2 is chronically available in the human stomach at ~**80 uM** (produced by fermentative gut microbiota), well above the enzyme Km of ~**1.8 uM**. This means the hydrogenase is **always saturated** -- it operates at Vmax continuously during colonization.

**CagA translocation**: This is the critical virulence connection. Hydrogenase-generated PMF powers the Type IV secretion system that translocates **CagA** (cytotoxin-associated gene A) into gastric epithelial cells. CagA is the major carcinogenic effector of *H. pylori*:
- Hydrogenase deletion mutants **cannot translocate CagA**.
- Hydrogenase deletion mutants **do not induce gastric cancer** in Mongolian gerbil models.
- This directly links nickel-dependent energy metabolism to oncogenesis.

**Cancer correlation**: Strains isolated from **cancer patients have higher hydrogenase activity** than strains from patients with gastritis only. Higher hydrogenase activity = more PMF = more CagA translocation = higher cancer risk.

**Mixotrophy**: *H. pylori* hydrogenase enables **H2-stimulated CO2 fixation** -- a growth mode never before described in a human pathogen. This "mixotrophy" allows the bacterium to supplement its carbon metabolism by fixing CO2 using energy derived from H2 oxidation. This provides a growth advantage in the nutrient-limited gastric mucus layer.

**Nickel transfer pathway**: HypA --> HypB --> hydrogenase active site. The same HypA also transfers nickel to UreE for urease maturation, demonstrating the biochemical coordination between the two Ni-enzyme systems.

### [[salmonella-typhimurium]] -- Four hydrogenases, total avirulence without them

*S.* Typhimurium encodes **four distinct [NiFe] hydrogenases** -- the most of any well-characterized human pathogen [[maier-2019-nickel-microbial-pathogenesis]]:

| Hydrogenase | Type | Function | Virulence role |
|---|---|---|---|
| **Hya (Hyd-1)** | Membrane-bound, H2-uptake | Respiratory H2 oxidation | Contributes to energy generation |
| **Hyb (Hyd-2)** | Membrane-bound, H2-uptake | Anaerobic H2 oxidation | **Most important for virulence**; primary macrophage survival factor |
| **Hyc (Hyd-3)** | Cytoplasmic, H2-evolving | Part of formate hydrogenlyase (FHL) complex | Anaerobic gut survival; fermentative H2 production |
| **Hyd (Hyd-4/Hyd-5)** | FHL-associated | Second FHL complex | Expressed under aerobic conditions and in macrophages |

**Avirulence of triple mutant**: The **DeltahyaDeltahybDeltahyd** triple mutant shows **100% survival in a mouse typhoid fever model** -- completely avirulent [[maier-2019-nickel-microbial-pathogenesis]]. This demonstrates that H2 metabolism is not merely advantageous but **essential** for Salmonella systemic virulence.

**Macrophage survival**: After phagocytosis, *S.* Typhimurium resides in the Salmonella-containing vacuole (SCV). Hyb-mediated H2 oxidation provides electrons to the respiratory chain, generating PMF for ATP synthesis in the nutrient-limited SCV. H2 serves as a carbon/energy lifeline when conventional substrates are scarce.

**S. enterica Typhi** (human typhoid agent) is expected to possess the same hydrogenase complement, with analogous virulence roles in systemic human infection.

### Helicobacter hepaticus -- Liver pathogenesis

- Single [NiFe] H2-uptake hydrogenase.
- Supports **amino acid uptake and cell growth** in the hepatobiliary niche.
- Linked to **liver lesions in mice** (hepatitis and hepatocellular carcinoma models).
- H2 concentrations in mouse liver (~**50 uM**) exceed the enzyme Km (~**2.5 uM**), so the hydrogenase is **always saturated** in vivo -- paralleling the H. pylori situation in the stomach.

### Campylobacter jejuni -- Chicken colonization and beyond

- **Membrane-bound [NiFe] uptake-type** hydrogenase.
- Essential for growth and **chicken colonization** -- directly relevant to the food safety chain.
- **hydB deletion** impairs cell division and host cell interaction.
- **Campylobacter concisus** has the **highest H2-uptake activity** of any pathogenic bacterium characterized to date.
- Campylobacter hydrogenases provide competitive advantage in the microaerobic environment of the intestinal mucus layer.

### Shigella flexneri -- Phagolysosomal acid combat

- H2-uptake hydrogenases **Hya and Hyb** combat acid stress in phagolysosomes.
- **Hya activity is three-fold activated within minutes of acid exposure** -- a rapid-response acid defense mechanism.
- H2 oxidation provides energy for maintaining intracellular pH homeostasis during the acid assault within macrophage phagosomes.

### [[escherichia-coli]] -- Multiple hydrogenases, respiratory flexibility

- Contains both H2-uptake (Hyd-1, Hyd-2) and H2-evolving (Hyd-3/Hyc, Hyd-4/Hyf) hydrogenases.
- **Hyd-3 is part of the formate hydrogenlyase (FHL) system**: formate --> CO2 + H2. This is critical for mixed-acid fermentation under anaerobic conditions.
- Provides **respiratory flexibility** in the oxygen-variable gut environment.
- In pathogenic *E. coli*, H2 metabolism supports acid resistance and energy generation in nutrient-limited intracellular niches (for UPEC inside bladder epithelial cells).
- In the preterm gut, [NiFe] hydrogenase enables NEC-associated *E. coli* to use H2 as an energy source in the inflamed anaerobic environment [[pendergrass-2026-nickel-nec-preterm-gut]].

### Bilophila wadsworthia -- H2-fueled taurine metabolism

- Uses H2 as an energy source coupled to taurine/sulfite respiration.
- H2-powered sulfite reduction produces H2S, which may contribute to inflammatory bowel disease pathology.
- Links hydrogen metabolism to bile acid metabolism and gut inflammation.

## The CagA-Hydrogenase-Cancer Connection

This is one of the most consequential pathways in the wiki, linking dietary nickel to gastric cancer through a defined molecular mechanism:

1. **Nickel availability** (dietary, environmental) --> metalation of [NiFe] hydrogenase active site in *H. pylori*.
2. **Hydrogenase activity** --> H2 oxidation --> proton motive force (PMF) generation.
3. **PMF** --> powers the Type IV secretion system (T4SS).
4. **T4SS** --> translocates **CagA oncoprotein** into gastric epithelial cells.
5. **CagA** --> activates SHP-2 phosphatase, disrupts cell polarity, promotes proliferation --> **gastric adenocarcinoma**.

Evidence supporting this chain:
- Hydrogenase deletion mutants cannot translocate CagA and do not cause cancer in animal models.
- Cancer-patient strains have higher hydrogenase activity than gastritis-only strains.
- The nickel-free diet (Campanale 2014) that enhanced *H. pylori* eradication likely works partly by depleting hydrogenase [[campanale-2014-nickel-free-diet-h-pylori]].

**Implication**: Nickel availability indirectly influences gastric cancer risk through hydrogenase activity. This means environmental and dietary nickel exposure has oncogenic potential not through direct metal toxicity (as with nickel compound carcinogenesis via epigenetic mechanisms) but through **enabling a pathogen's carcinogenic machinery**.

## Maturation Pathway Overlap with Urease

In [[helicobacter-pylori]], the nickel insertion pathways for hydrogenase and [[urease]] share critical components [[maier-2019-nickel-microbial-pathogenesis]]:

- **HypA** delivers nickel to both HypB (for hydrogenase) and UreE (for urease).
- **HypB** is a GTPase/nickel chaperone shared between both pathways.
- **Hpn and HpnI** (histidine-rich nickel storage proteins) serve as central nickel reservoirs feeding both enzyme systems.
- **NikR** (nickel-responsive transcriptional regulator) controls expression of both urease and hydrogenase genes.

This shared maturation machinery means:
- Nickel limitation forces a **triage decision**: the bacterium must allocate scarce nickel between acid survival (urease) and energy/CagA translocation (hydrogenase).
- Therapeutic nickel depletion hits both virulence systems simultaneously -- a dual-target anti-virulence strategy.
- The nickel storage proteins (Hpn, HpnI) interact with a much wider array of proteins than originally expected, functioning as **central hubs** in nickel metabolism.

## H2 Availability in Host Environments

A key factor in hydrogenase relevance is substrate availability:

| Environment | H2 concentration | Source | Hydrogenase Km | Saturation |
|---|---|---|---|---|
| Human stomach | ~80 uM | Gut microbial fermentation | ~1.8 uM (*H. pylori*) | Always saturated |
| Mouse liver | ~50 uM | Portal circulation from gut | ~2.5 uM (*H. hepaticus*) | Always saturated |
| Human colon | Variable, 10-100+ uM | Dietary fiber fermentation | Variable | Generally saturated |
| Macrophage SCV | Low but present | Unknown | ~5-10 uM (estimated) | Partially saturated |

The consistently high H2:Km ratios mean that for gastric and hepatic pathogens, **nickel availability -- not H2 availability -- is the rate-limiting factor** for hydrogenase activity.


## Key Sources

- [[pendergrass-2026-microbial-metallomics-parkinsons-ferroptosis]]

## Connections

- [[nickel]] -- essential cofactor for the [NiFe] active site
- [[helicobacter-pylori]] -- single hydrogenase powers CagA translocation and mixotrophy
- [[salmonella-typhimurium]] -- four hydrogenases; triple mutant is 100% avirulent
- [[escherichia-coli]] -- multiple hydrogenases for respiratory flexibility and acid resistance
- [[urease]] -- shares HypA/HypB maturation pathway; co-regulated by NikR
- [[glyoxalase]] -- the third Ni-dependent enzyme class in pathogens
- [[metal-dependent-virulence]] -- hydrogenase as the second major Ni-virulence factor
- [[metal-carcinogenesis]] -- hydrogenase-CagA-cancer pathway; nickel enables cancer through pathogen machinery
- [[nutritional-immunity]] -- host nickel sequestration limits hydrogenase metalation
- [[pathogen-metal-acquisition]] -- nickel transport systems that feed hydrogenase maturation
- [[dietary-nickel-exposure]] -- dietary nickel feeds hydrogenase-dependent pathogenesis
