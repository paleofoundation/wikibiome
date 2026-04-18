---
title: Oxidative Stress
type: concept
created: 2026-04-09
updated: 2026-04-09
sources: [liu-2025-cardiometabolic-nickel.md, salnikov-2008-metal-carcinogenesis.md, maier-2019-nickel-microbial-pathogenesis.md, balali-mood-2021-toxic-mechanisms-five-heavy-metals.md, jaishankar-2014-heavy-metal-toxicity-mechanisms.md, briffa-2020-heavy-metal-pollution-environment-toxicology.md, abudawood-2021-antioxidant-heavy-metals-pcos.md, smovrsnik-2023-heavy-metals-oxidative-stress-pcos.md, pendergrass-2026-microbial-metallomics-parkinsons-ferroptosis.md, mishra-2022-molecular-mechanisms-heavy-metals-ckd.md, genchi-2020-cadmium-toxicity.md, tarhonska-2022-cadmium-breast-cancer-mechanisms.md, rasin-2025-cadmium-exposure-health-review.md, blazewicz-2023-metal-profiles-asd.md, piecuch-2022-nutrition-endometriosis-review.md, cassat-2012-metal-acquisition-staphylococcus-aureus.md, akbari-2022-metal-homeostasis-streptococci.md, anchidin-norocel-2025-heavy-metal-gut-probiotics-biosensors.md, bao-2024-iron-homeostasis-intestinal-immunity-gut-microbiota.md, shin-2023-chromium-toxicogenomics.md, kravchenko-2023-thyroid-hormones-minerals-AITD.md, brock-2015-selenium-thyroid-autoimmunity.md, lopez-botella-2023-peritoneal-fluid-metals-endometriosis.md, ogrady-2025-metal-dyshomeostasis-asd.md]
tags: [mechanism, toxicology, ROS, pathogenesis, antioxidant, biomarker, Fenton-reaction, free-radicals]
platform: wikibiome
karen_brain_primitives: [1, 2, 4, 5]
seo_target: "oxidative stress microbiome"
last_substantive_update: 2026-04-09
---

# Oxidative Stress

Oxidative stress is the imbalance between the production of reactive oxygen and nitrogen species (ROS/RNS) and the capacity of biological antioxidant defense systems to detoxify them. It is the single most commonly invoked mechanism across metal toxicology in this wiki, linking exposures to [[iron]], [[copper]], [[chromium]], [[nickel]], [[arsenic]], [[cadmium]], [[lead]], [[mercury]], and [[manganese]] to downstream pathology in virtually every organ system. However, the specific routes by which different metals generate oxidative stress vary substantially, and the role of oxidative stress as a primary versus secondary mechanism differs by metal and disease context.

## Biochemistry of Reactive Oxygen Species

### Major ROS and RNS

| Species | Formula | Half-life | Primary source |
|---|---|---|---|
| Superoxide anion | O2.- | ~1 ms | Mitochondrial ETC (complexes I, III), NADPH oxidase |
| Hydrogen peroxide | H2O2 | Stable (minutes) | Dismutation of O2.- by SOD; direct enzymatic production |
| Hydroxyl radical | OH. | ~1 ns | Fenton reaction, radiolysis of water |
| Peroxynitrite | ONOO- | ~1 s | Reaction of O2.- with NO. |
| Lipid peroxyl radical | LOO. | Seconds | Chain propagation in lipid peroxidation |

Superoxide is the initial ROS produced by one-electron reduction of molecular oxygen. It is relatively unreactive itself but serves as the precursor to more damaging species. Hydrogen peroxide is more stable and membrane-permeable, functioning both as a signaling molecule at low concentrations and as a source of hydroxyl radicals via Fenton chemistry. The hydroxyl radical is the most reactive ROS in biology -- it reacts at near diffusion-limited rates with virtually all biomolecules (DNA, proteins, lipids) and cannot be enzymatically detoxified.

### The Fenton Reaction

The Fenton reaction is the central chemical mechanism linking redox-active metals to oxidative damage:

> Fe2+ + H2O2 --> Fe3+ + OH. + OH-

This reaction generates hydroxyl radicals from hydrogen peroxide, catalyzed by ferrous iron. The resulting Fe3+ can be recycled back to Fe2+ by superoxide (the Haber-Weiss cycle) or by cellular reductants such as ascorbate, making the process catalytic:

> Fe3+ + O2.- --> Fe2+ + O2 (superoxide-driven recycling)

The net Haber-Weiss reaction is therefore:

> O2.- + H2O2 --> OH. + OH- + O2

Copper participates in an analogous Fenton-like reaction (Cu+ + H2O2 --> Cu2+ + OH. + OH-), and both [[iron]] and [[copper]] are the primary endogenous catalysts of hydroxyl radical production in biological systems [[jaishankar-2014-heavy-metal-toxicity-mechanisms]], [[briffa-2020-heavy-metal-pollution-environment-toxicology]]].

### Lipid Peroxidation

Hydroxyl radicals initiate lipid peroxidation by abstracting hydrogen atoms from polyunsaturated fatty acids (PUFAs) in cell membranes. This generates lipid radicals that react with O2 to form lipid peroxyl radicals (LOO.), which propagate chain reactions that can damage thousands of lipid molecules from a single initiating event. End products include malondialdehyde (MDA) and 4-hydroxynonenal (4-HNE), both used as biomarkers. When lipid peroxide accumulation overwhelms repair capacity (particularly GPX4), cells undergo [[ferroptosis]] -- iron-dependent programmed cell death [[pendergrass-2026-microbial-metallomics-parkinsons-ferroptosis]].

## Antioxidant Defense Systems

### Enzymatic Defenses

#### Superoxide Dismutases (SODs)

SODs catalyze the dismutation of superoxide to hydrogen peroxide and oxygen (2 O2.- + 2H+ --> H2O2 + O2). Three isoforms exist in mammals:

- **Cu/Zn-SOD (SOD1)**: Cytoplasmic; requires [[copper]] and [[zinc]] as cofactors. The most abundant intracellular SOD.
- **Mn-SOD (SOD2)**: Mitochondrial; requires [[manganese]] as cofactor. The primary defense against superoxide generated by the electron transport chain. Mn-SOD is essential for life -- homozygous knockout is lethal in mice [[cassat-2012-metal-acquisition-staphylococcus-aureus]].
- **EC-SOD (SOD3)**: Extracellular; Cu/Zn-dependent.
- **Ni-SOD**: Found in *Streptomyces* spp. and some other prokaryotes; uses [[nickel]] as cofactor. Important for oxidative stress defense in plant-colonizing bacteria [[maier-2019-nickel-microbial-pathogenesis]].

In [[nickel]] toxicology, UNi shows an **inverse U-shaped relationship with SOD** activity in humans, and nickel exposure increases SOD activity in liver while reducing catalase in heart and kidneys [[liu-2025-cardiometabolic-nickel]].

#### Catalase (CAT)

Catalase decomposes hydrogen peroxide to water and oxygen (2 H2O2 --> 2 H2O + O2). It contains an iron-heme prosthetic group and is concentrated in peroxisomes. [[lead]] inhibits catalase activity along with other antioxidant enzymes; PbA (500 mg/L) reduces CAT in liver and kidney [[balali-mood-2021-toxic-mechanisms-five-heavy-metals]].

#### Glutathione Peroxidases (GPX)

GPX enzymes reduce hydrogen peroxide and organic hydroperoxides using glutathione (GSH) as a co-substrate. Most GPX isoforms are **selenoproteins**, directly linking [[selenium]] status to antioxidant capacity:

- **GPX1-3**: Reduce H2O2 and small organic hydroperoxides.
- **GPX4**: The only enzyme capable of reducing lipid hydroperoxides within membranes; its loss triggers [[ferroptosis]] [[pendergrass-2026-microbial-metallomics-parkinsons-ferroptosis]], [[mishra-2022-molecular-mechanisms-heavy-metals-ckd]]].
- Se supplementation increases GPx and thioredoxin reductase (TR) activity and decreases oxidative stress markers in [[hashimotos-thyroiditis]] patients [[kravchenko-2023-thyroid-hormones-minerals-AITD]], [[brock-2015-selenium-thyroid-autoimmunity]]].

### Non-Enzymatic Defenses

#### Glutathione (GSH)

Glutathione (gamma-glutamyl-cysteinyl-glycine) is the most abundant intracellular thiol and the primary non-enzymatic antioxidant. It serves as:
- A direct scavenger of ROS via its sulfhydryl group.
- The essential co-substrate for GPX enzymes.
- A conjugation agent for electrophilic xenobiotics (via glutathione S-transferases).
- A reservoir of cysteine for protein synthesis.

The **GSH/GSSG ratio** (reduced-to-oxidized glutathione) is a key indicator of cellular redox status. Heavy metals interact with GSH in multiple ways: [[arsenic]] and [[mercury]] deplete GSH through direct thiol binding and conjugation [[balali-mood-2021-toxic-mechanisms-five-heavy-metals]]; [[cadmium]] forms organo-metallic complexes with GSH sulfhydryl groups [[smovrsnik-2023-heavy-metals-oxidative-stress-pcos]]; [[chromium]](VI) reduction to Cr(III) by GSH generates hydroxyl radicals as intermediates [[balali-mood-2021-toxic-mechanisms-five-heavy-metals]].

PCOS patients show significantly decreased serum GSH levels (6.24 vs 8.09 mg/ml; P < 0.001) with strong negative correlations between heavy metals (As, Pb, Hg) and GSH [[abudawood-2021-antioxidant-heavy-metals-pcos]].

#### Metallothioneins (MTs)

Metallothioneins are low-molecular-weight (7-8 kDa) cysteine-rich proteins (18-23 cysteines per 61-68 amino acids) that bind divalent metal cations. They serve dual roles as metal storage/detoxification proteins and as antioxidants via thiol-mediated ROS scavenging. MTs are principally responsible for [[cadmium]] sequestration -- the Cd-MT complex has a half-life of 25-30 years in the kidneys [[genchi-2020-cadmium-toxicity]]. Cadmium produces dispositional tolerance by inducing MT synthesis, but MT capacity is finite; once saturated, free Cd causes oxidative damage [[balali-mood-2021-toxic-mechanisms-five-heavy-metals]].

#### Ascorbate (Vitamin C) and Tocopherol (Vitamin E)

Ascorbate is a water-soluble antioxidant that scavenges ROS and regenerates vitamin E. Vitamin E (alpha-tocopherol) is the primary lipid-soluble chain-breaking antioxidant in membranes, terminating lipid peroxidation chain reactions. Their roles in metal toxicology are complex -- see the ascorbate-chromium paradox below.

## Metal-Specific ROS Generation

Different metals generate oxidative stress through distinct mechanisms. This is a critical nuance: while oxidative stress is a unifying theme, the biochemical route to that endpoint varies substantially.

### Iron -- Fenton Reaction (Direct)

[[iron]] is the prototypical Fenton-active metal. Excess labile (non-transferrin-bound) iron directly catalyzes hydroxyl radical production. Iron accumulation in the substantia nigra is a hallmark of Parkinson's disease, where it drives lipid peroxidation and [[ferroptosis]] in dopaminergic neurons [[pendergrass-2026-microbial-metallomics-parkinsons-ferroptosis]]. GPX4 downregulation removes the brake on ferroptotic cell death. Iron overload in peritoneal fluid causes embryotoxicity via ferroptosis in [[endometriosis]] [[piecuch-2022-nutrition-endometriosis-review]]. The Fenton reaction is also the basis for ferroptosis-inducing cancer therapies [[bao-2024-iron-homeostasis-intestinal-immunity-gut-microbiota]].

### Copper -- Fenton-Like Reaction (Direct)

[[copper]] participates in analogous Fenton-like chemistry (Cu+ + H2O2 --> Cu2+ + OH. + OH-). Like iron, copper cycles between two oxidation states (Cu+/Cu2+), making it a potent redox-active catalyst. Cu levels are elevated in PCOS, and Cu-serum levels positively correlate with leukocyte count, suggesting a role in oxidative stress response [[smovrsnik-2025-trace-elements-pcos]]. Host immune cells exploit copper toxicity by pumping Cu into phagolysosomes to kill engulfed bacteria [[cassat-2012-metal-acquisition-staphylococcus-aureus]].

### Chromium -- Reduction Intermediates

[[chromium]](VI) generates oxidative stress indirectly through its intracellular reduction pathway. Cr(VI) enters cells via sulfate channels and is reduced: Cr(VI) --> Cr(V) --> Cr(IV) --> Cr(III), primarily by **ascorbate** (~90% of reduction) and GSH. The intermediate Cr(V) and Cr(IV) species are potent oxidants that generate hydroxyl radicals. The dominant DNA damage is Cr-DNA adducts (ternary crosslinks with amino acids, GSH, or ascorbate), not oxidative lesions. Oxidative DNA damage (8-oxo-dG) occurs primarily at supraphysiological concentrations and is **not considered the main carcinogenic mechanism** at realistic exposures [[salnikov-2008-metal-carcinogenesis]]. DNA damage and metastasis are common across all Cr exposure routes (dermal, inhalation, ingestion) [[shin-2023-chromium-toxicogenomics]].

### Nickel -- Indirect/Multifactorial

[[nickel]] generates oxidative stress through several indirect mechanisms rather than direct Fenton chemistry:
- **Ascorbate depletion**: Ni(II) depletes intracellular ascorbate, reducing antioxidant capacity and impairing Fe-dependent hydroxylases [[salnikov-2008-metal-carcinogenesis]].
- **Iron displacement**: Ni(II) oxidizes iron in iron-sulfur clusters and iron-containing enzymes, disrupting iron homeostasis (IRP-1/IRP-2, transferrin receptor, ferritin) [[salnikov-2008-metal-carcinogenesis]].
- **SOD/catalase imbalance**: Nickel increases SOD activity in liver but reduces catalase in heart and kidneys, creating an H2O2 surplus that cannot be adequately detoxified [[liu-2025-cardiometabolic-nickel]].
- Elevated MDA in multiple organs confirms lipid peroxidation as a downstream consequence [[liu-2025-cardiometabolic-nickel]].
- In carcinogenesis, oxidative stress plays a **secondary role** to [[epigenetic-modifications]] and [[hypoxic-signaling]] [[salnikov-2008-metal-carcinogenesis]].

### Arsenic -- GSH Depletion and Reactive Methylated Intermediates

[[arsenic]] generates ROS through multiple routes, though its role as a primary carcinogenic mechanism is **debated** [[salnikov-2008-metal-carcinogenesis]]:
- Inhibits pyruvate dehydrogenase (blocking the Krebs cycle) and uncouples oxidative phosphorylation [[balali-mood-2021-toxic-mechanisms-five-heavy-metals]].
- Biomethylation produces reactive intermediates: DMA(III) is highly reactive and causes oxidative damage.
- Activates MAPK/NF-kB pathways, enhances myeloperoxidase activity [[mishra-2022-molecular-mechanisms-heavy-metals-ckd]].
- Arsenic-induced ROS may be more relevant to **acute toxicity** than to carcinogenesis [[salnikov-2008-metal-carcinogenesis]].
- DNA adduct 8-OHdG is elevated in exposed populations [[balali-mood-2021-toxic-mechanisms-five-heavy-metals]].

### Cadmium -- Thiol Binding and Indirect Mechanisms

[[cadmium]] is **not** redox-active (it does not undergo Fenton chemistry) but generates oxidative stress indirectly:
- Binds sulfhydryl groups of GSH and protein thiols, depleting antioxidant reserves [[smovrsnik-2023-heavy-metals-oxidative-stress-pcos]].
- Inhibits mitochondrial electron transport chain complexes II and III, collapsing membrane potential and generating superoxide [[genchi-2020-cadmium-toxicity]].
- Displaces redox-active metals (Fe, Cu) from protein binding sites, increasing the free/labile pool available for Fenton reactions.
- Disrupts Ca/Zn/Fe homeostasis [[balali-mood-2021-toxic-mechanisms-five-heavy-metals]].
- Inhibits DNA repair enzymes (hOGG1), compounding oxidative DNA damage [[tarhonska-2022-cadmium-breast-cancer-mechanisms]].
- Cd neurotoxicity involves diminished GPx, CAT, and SOD activity; enters neurons via voltage-gated calcium channels [[rasin-2025-cadmium-exposure-health-review]].

### Lead -- ALAD Inhibition and Antioxidant Depletion

[[lead]] generates oxidative stress through:
- **ALAD (aminolevulinic acid dehydratase) inhibition**: Disrupts heme biosynthesis, causing accumulation of aminolevulinic acid (ALA), which auto-oxidizes to generate superoxide and hydrogen peroxide [[balali-mood-2021-toxic-mechanisms-five-heavy-metals]].
- **Ferrochelatase inhibition**: Further disrupts heme synthesis, reducing heme available for catalase and other heme-dependent antioxidant enzymes.
- **Direct antioxidant depletion**: Reduces GSH, SOD, CAT, GPx; increases lipid peroxidation (MDA) and H2O2 [[balali-mood-2021-toxic-mechanisms-five-heavy-metals]].
- Pb follows ionic mechanisms similar to Ca2+, Mg2+, Fe2+, displacing essential metals from binding sites [[jaishankar-2014-heavy-metal-toxicity-mechanisms]].
- In children, blood lead levels >10 ug/dL affect IQ; Pb is taken up by oligodendrocytes, reducing CNPase activity and causing demyelination [[blazewicz-2023-metal-profiles-asd]].

### Mercury -- GSH Depletion and Enzyme Inhibition

[[mercury]] generates oxidative stress primarily through:
- **Thiol binding**: High affinity for sulfhydryl groups leads to GSH conjugation and depletion [[balali-mood-2021-toxic-mechanisms-five-heavy-metals]].
- **Enzyme inhibition**: Inhibits glutathione peroxidase, reducing capacity to detoxify H2O2 and lipid peroxides [[balali-mood-2021-toxic-mechanisms-five-heavy-metals]].
- **Aquaporin disruption**: Reduces aquaporin mRNA, affecting cellular water and solute homeostasis.
- MeHg and ethylHg are more toxic than inorganic Hg; MeHg crosses the BBB and is 95-100% absorbed in the intestinal tract [[jaishankar-2014-heavy-metal-toxicity-mechanisms]].
- In ASD, Hg inhibits GSH and increases ROS, contributing to mitochondrial dysfunction [[blazewicz-2023-metal-profiles-asd]].

### Manganese -- Mitochondrial Dysfunction

[[manganese]] paradoxically serves as the cofactor for the mitochondrial antioxidant Mn-SOD (SOD2) but is neurotoxic at elevated levels:
- Excess Mn disrupts mitochondrial function, inducing cytochrome C release and caspase activation in dopaminergic neurons [[pendergrass-2026-microbial-metallomics-parkinsons-ferroptosis]].
- Mn accumulates preferentially in the globus pallidus and striatum, causing parkinsonism distinct from idiopathic Parkinson's disease.
- Metal-driven gut dysbiosis by Mn (and Fe, Ni) initiates a cascade: loss of barrier integrity, bacterial translocation, systemic inflammation, and neuroinflammation converging on dopaminergic neuron vulnerability [[pendergrass-2026-microbial-metallomics-parkinsons-ferroptosis]].

## Biomarkers of Oxidative Stress

### Lipid Peroxidation

- **MDA/TBARS (Malondialdehyde / Thiobarbituric acid reactive substances)**: The most widely used biomarker of lipid peroxidation. UNi shows a positive linear correlation with MDA in humans [[liu-2025-cardiometabolic-nickel]]. MDA is elevated in PCOS women alongside elevated heavy metals [[smovrsnik-2023-heavy-metals-oxidative-stress-pcos]]. Se supplementation in hypothyroid patients decreased MDA levels [[kravchenko-2023-thyroid-hormones-minerals-AITD]].
- **4-HNE (4-Hydroxynonenal)**: A reactive aldehyde product of omega-6 PUFA oxidation; both a biomarker and a mediator of oxidative damage.

### DNA Oxidation

- **8-oxo-dG (8-oxo-2'-deoxyguanosine)**: The primary biomarker of oxidative DNA damage. Elevated in arsenic-exposed populations [[balali-mood-2021-toxic-mechanisms-five-heavy-metals]]. Generated by Cr(VI) primarily at supraphysiological concentrations [[salnikov-2008-metal-carcinogenesis]].

### Protein Oxidation

- **Protein carbonyls**: Products of direct oxidation of amino acid side chains (particularly Pro, Arg, Lys, Thr) by metal-catalyzed reactions. A stable and widely used marker of protein oxidative damage.

### Antioxidant Enzyme Activity

- **SOD activity**: Decreased in PCOS patients (9.30 vs 17.39 IU/ml; P < 0.001) [[abudawood-2021-antioxidant-heavy-metals-pcos]]. In nickel exposure, shows an inverse U-shaped relationship with urinary nickel [[liu-2025-cardiometabolic-nickel]].
- **CAT activity**: Reduced by lead, nickel, and cadmium exposure in multiple organ systems.
- **GPx activity**: Inhibited by mercury (direct enzyme inhibition) and decreased in PCOS [[abudawood-2021-antioxidant-heavy-metals-pcos]].

### Redox Status Markers

- **GSH/GSSG ratio**: Reflects overall cellular redox balance. Decreased GSH in PCOS patients negatively correlates with As, Pb, Hg levels [[abudawood-2021-antioxidant-heavy-metals-pcos]].
- **TOS (Total Oxidant Status) / TAS (Total Antioxidant Status)**: Composite markers. PCOS women show lower TAS and higher TOS [[smovrsnik-2023-heavy-metals-oxidative-stress-pcos]].
- **hs-CRP and TNF-alpha**: Inflammatory markers elevated alongside oxidative stress markers in PCOS [[smovrsnik-2023-heavy-metals-oxidative-stress-pcos]].

## Role in Specific Diseases

### Carcinogenesis

Oxidative stress contributes to cancer through DNA damage, genomic instability, and activation of proliferative signaling, but its importance as a primary mechanism varies by metal:
- **[[chromium]]**: Oxidative DNA damage is secondary to Cr-DNA adducts; 8-oxo-dG occurs mainly at supraphysiological doses [[salnikov-2008-metal-carcinogenesis]].
- **[[nickel]]**: Oxidative stress is secondary to epigenetic modifications and HIF-1alpha stabilization [[salnikov-2008-metal-carcinogenesis]].
- **[[arsenic]]**: ROS debated as primary vs. secondary mechanism; arsenic primarily acts through cellular proliferation, NF-kB signaling, and epigenetic changes [[salnikov-2008-metal-carcinogenesis]].
- **[[cadmium]]**: Induces ROS, inhibits DNA repair, and acts as a metalloestrogen binding ERalpha; carcinogenicity likely involves epigenetic pathways [[tarhonska-2022-cadmium-breast-cancer-mechanisms]], [[genchi-2020-cadmium-toxicity]]].

### Neurodegeneration and Ferroptosis

- **Parkinson's disease**: Iron accumulation in the substantia nigra catalyzes Fenton reactions; GPX4 downregulation triggers [[ferroptosis]] in dopaminergic neurons; gut dysbiosis mediates metal-to-brain pathology via the gut-brain axis [[pendergrass-2026-microbial-metallomics-parkinsons-ferroptosis]].
- **Alzheimer's disease**: Multiple metals (Pb, Hg, Cd, Fe, Cu, Mn) contribute to oxidative damage in AD through ROS generation, mitochondrial dysfunction, and disruption of metal homeostasis in the brain [[blazewicz-2023-metal-profiles-asd]].
- **ASD [[autism-spectrum-disorder]]**: Hg inhibits GSH; Cd disrupts thiol groups; Pb affects ALAD -- all converging on oxidative stress and mitochondrial dysfunction. Toxic metals compete with [[zinc]] for protein binding sites, effectively creating functional zinc deficiency [[blazewicz-2023-metal-profiles-asd]], [[ogrady-2025-metal-dyshomeostasis-asd]]].

### Cardiovascular Disease

- Nickel exposure is associated with CVD; oxidative stress (SOD/MDA changes) is the primary proposed mechanism. Cardiac toxicity is mitigated by melatonin and ascorbic acid and exacerbated in antioxidant-deficient mice [[liu-2025-cardiometabolic-nickel]].
- Cadmium damages endothelial cells, raises LDL profiles, and increases atherosclerosis risk via lipid aggregation [[rasin-2025-cadmium-exposure-health-review]].

### Chronic Kidney Disease

- CKD pathogenesis involves oxidative stress, mitochondrial dysfunction, ferroptosis, and inflammation in an interconnected network. As CKD progresses, declining GFR reduces the ability to eliminate toxicants, creating a vicious cycle of metal accumulation [[mishra-2022-molecular-mechanisms-heavy-metals-ckd]].
- Arsenic increases ROS via MAPK/NF-kB; cadmium impairs ETC complexes II/III; mercury disrupts mitochondrial membrane potential [[mishra-2022-molecular-mechanisms-heavy-metals-ckd]].
- GPX4 loss of function triggers ferroptosis in renal tubular cells; iron-restricted diet is protective in animal models [[mishra-2022-molecular-mechanisms-heavy-metals-ckd]].

### PCOS

Oxidative stress is proposed as a central mechanism linking heavy metal exposure to PCOS pathology:
- PCOS patients have elevated serum As, Cd, Pb, Hg with decreased SOD and GSH [[abudawood-2021-antioxidant-heavy-metals-pcos]].
- Positive correlations between Sb, Pb, Cd and MDA, TNF-alpha, HOMA-IR [[smovrsnik-2023-heavy-metals-oxidative-stress-pcos]].
- Supplementation with Zn, Cr, Se, Mg, Ca shows potential for reducing OS and improving endocrine parameters [[smovrsnik-2023-heavy-metals-oxidative-stress-pcos]].
- Heavy metals interact with sulfhydryl groups in GSH, forming organo-metallic complexes; they can disrupt insulin gene promoter activity and reproductive hormone levels [[smovrsnik-2023-heavy-metals-oxidative-stress-pcos]].

### Endometriosis

- Vitamins C and E supplementation reduces systemic oxidative stress indicators in endometriosis patients (randomized triple-blind placebo-controlled trial) [[piecuch-2022-nutrition-endometriosis-review]].
- Iron overload in peritoneal fluid causes embryotoxicity via ferroptosis [[piecuch-2022-nutrition-endometriosis-review]].
- PTEs (Ni, Pb, Bi) elevated in peritoneal fluid of endometriosis patients may impair oocyte maturation and fertilization via excess ROS [[lopez-botella-2023-peritoneal-fluid-metals-endometriosis]].

### Autism Spectrum Disorder

- Toxic metals (Hg, Cd, Pb) and essential metal deficiency (Zn) converge on oxidative stress and mitochondrial dysfunction as shared pathomechanisms in ASD [[blazewicz-2023-metal-profiles-asd]].
- Gut pathologies from Hg, Cd, Pb exposure and zinc deficiency overlap: intestinal barrier dysfunction, inflammation, and microbiota dysbiosis [[ogrady-2025-metal-dyshomeostasis-asd]].

## Oxidative Stress in Host-Pathogen Interactions

### Macrophage Oxidative Burst

The host immune system weaponizes oxidative stress against pathogens. NADPH oxidase in activated macrophages and neutrophils generates superoxide within phagolysosomes to kill engulfed bacteria. This "oxidative burst" also involves copper and zinc pumped into phagosomes to intoxicate bacteria [[cassat-2012-metal-acquisition-staphylococcus-aureus]].

### Pathogen SODs as Virulence Factors

Pathogens have evolved antioxidant defenses to survive the oxidative burst:
- **Mn-SOD (SodA/SodM) in *[[staphylococcus-aureus]]***: Manganese-dependent SOD is critical for oxidative stress defense; manganese acquisition via MntABC is a virulence requirement. Host calprotectin sequesters manganese and zinc to limit bacterial SOD activity [[cassat-2012-metal-acquisition-staphylococcus-aureus]].
- **Mn as SOD cofactor in Streptococci**: Mn is the primary cofactor for SOD across pathogenic *Streptococcus* species; cadmium disrupts Mn uptake/efflux in *S. pneumoniae*, indirectly increasing oxidative stress susceptibility [[akbari-2022-metal-homeostasis-streptococci]].
- **Ni-SOD in *Streptomyces* spp.**: A nickel-dependent SOD that protects against oxidative stress in plant hosts [[maier-2019-nickel-microbial-pathogenesis]].

### H. pylori Urease Antioxidant Function

*[[helicobacter-pylori]]* urease has a remarkable dual function beyond urea hydrolysis: the holo-enzyme (Ni-bound) acts as both a urea hydrolase **and** an oxidant quencher via a Met/Met-sulfoxide cycle. Even the apo-enzyme (Ni-free) retains this antioxidant role. This allows *H. pylori* to survive the oxidative environment of the inflamed gastric mucosa [[maier-2019-nickel-microbial-pathogenesis]].

### Hydrogenases and Acid/Oxidative Stress

- **[[salmonella-typhimurium]]**: Contains 4 [NiFe] hydrogenases (Hya, Hyb, Hyc, Hyd); Hyb is most important for virulence. Triple mutant is completely avirulent [[maier-2019-nickel-microbial-pathogenesis]].
- **[[shigella-flexneri]]**: H2-uptake hydrogenases combat acid stress in phagolysosomes, partly related to oxidative conditions [[maier-2019-nickel-microbial-pathogenesis]].

## Therapeutic Implications

### Antioxidant Supplementation

- **[[selenium]]**: Se supplementation (200 ug/day) increases GPx3 and selenoprotein P, decreases MDA, and reduces anti-TPO antibodies in Hashimoto's thyroiditis [[brock-2015-selenium-thyroid-autoimmunity]], [[kravchenko-2023-thyroid-hormones-minerals-AITD]]]. Se is the backbone of the selenoproteome including GPX4, the central brake on [[ferroptosis]].
- **[[zinc]]**: Supplementation enhances intestinal barrier function, reduces permeability, exerts anti-inflammatory effects, and promotes beneficial gut bacteria [[ogrady-2025-metal-dyshomeostasis-asd]]. Lower Zn in PCOS is associated with lower CAT activity and higher MDA [[smovrsnik-2023-heavy-metals-oxidative-stress-pcos]].
- **Vitamins C and E**: Reduce systemic oxidative stress in endometriosis [[piecuch-2022-nutrition-endometriosis-review]]. Vitamin E terminates lipid peroxidation chain reactions in membranes.
- **Melatonin and ascorbic acid**: Mitigate nickel-induced cardiac toxicity in animals; mice deficient in endogenous antioxidants show exacerbated nickel toxicity [[liu-2025-cardiometabolic-nickel]].
- **Mg, Ca supplementation**: Reduces TNF-alpha, weight, BMI in PCOS; Ca + vitamin D decreases LH and hs-CRP [[smovrsnik-2023-heavy-metals-oxidative-stress-pcos]].

### The Ascorbate-Chromium Paradox

Ascorbate plays a paradoxical role in [[chromium]] toxicity: it is the primary intracellular reductant of Cr(VI), accounting for ~90% of Cr(VI) reduction and generating Cr-DNA adducts and reactive intermediates. Simultaneously, ascorbate is needed as an antioxidant for repair. This creates a paradox where the same molecule drives both damage and defense [[salnikov-2008-metal-carcinogenesis]]. A similar paradox exists with [[cadmium]] and [[nickel]]: vitamin C in the presence of Cd/Ni causes Fenton-type DNA breaks [[genchi-2020-cadmium-toxicity]].

### Probiotic Antioxidative Capacity

[[probiotics]] counteract heavy metal-induced oxidative stress through multiple mechanisms: biosorption, bioprecipitation, bioaccumulation, biotransformation, and organic acid secretion. Approximately 60% of ingested heavy metals are absorbed in the intestine, causing oxidative stress and barrier damage. Metal-sequestering *Lactobacillus* and *Bifidobacterium* strains are proposed as targeted interventions [[anchidin-norocel-2025-heavy-metal-gut-probiotics-biosensors]], [[pendergrass-2026-microbial-metallomics-parkinsons-ferroptosis]]].

### Metal Chelation

Chelation therapy (EDTA, DMSA, DMPS) reduces toxic metal burden and can alleviate inflammation, oxidative damage, and barrier dysfunction. However, chelators have significant side effects and may also remove essential metals [[balali-mood-2021-toxic-mechanisms-five-heavy-metals]], [[ogrady-2025-metal-dyshomeostasis-asd]]].

## Connections

### Metal Entities
- [[iron]] -- Fenton reaction; ferroptosis; substantia nigra accumulation in PD
- [[copper]] -- Fenton-like reaction; phagolysosomal toxicity; elevated in PCOS
- [[chromium]] -- reduction intermediates; ascorbate paradox; Cr-DNA adducts
- [[nickel]] -- indirect ROS via ascorbate depletion, iron displacement; SOD/catalase imbalance
- [[arsenic]] -- GSH depletion; reactive methylated intermediates; debated primary mechanism
- [[cadmium]] -- thiol binding; ETC inhibition; metallothionein sequestration
- [[lead]] -- ALAD inhibition; heme disruption; antioxidant enzyme depletion
- [[mercury]] -- thiol binding; GPx inhibition; BBB crossing
- [[manganese]] -- mitochondrial dysfunction; paradoxical (Mn-SOD cofactor yet neurotoxic in excess)
- [[selenium]] -- GPX selenoproteins; ferroptosis defense; thyroid protection
- [[zinc]] -- Cu/Zn-SOD cofactor; competition target for toxic metals in ASD

### Disease Entities
- [[breast-cancer]] -- Cd metalloestrogen activity; metal-ROS-epigenetic interactions
- [[alzheimers-disease]] -- multi-metal oxidative damage; amyloid-metal interactions
- [[parkinsons-disease]] -- iron-ferroptosis axis; Mn parkinsonism; gut-brain pathway
- [[autism-spectrum-disorder]] -- Hg/Cd/Pb/Zn-deficiency convergence on OS
- [[chronic-kidney-disease]] -- vicious cycle of metal accumulation and OS
- [[endometriosis]] -- peritoneal iron overload; ferroptosis; vitamin C/E therapy
- [[pcos]] -- metal burden with decreased SOD/GSH; supplementation potential

### Concept Pages
- [[ferroptosis]] -- iron-dependent lipid peroxidation cell death; GPX4 as brake
- [[epigenetic-modifications]] -- often co-occurs with oxidative stress in metal carcinogenesis
- [[hypoxic-signaling]] -- nickel-specific; HIF-1alpha stabilization via ascorbate depletion
- [[metal-carcinogenesis]] -- oxidative stress as one of several mechanisms
- [[metabolic-syndrome]] -- oxidative stress proposed as link to nickel exposure and MetS
- [[nutritional-immunity]] -- host metal sequestration starves pathogen antioxidant enzymes
- [[glutathione]] -- the primary intracellular antioxidant; GSH depletion by toxic metals is a central OS mechanism
- [[DNA-damage]] -- downstream consequence of ROS; 8-oxo-dG as biomarker

### Pathogen Entities
- [[helicobacter-pylori]] -- urease antioxidant function; Met/Met-sulfoxide cycle
- [[staphylococcus-aureus]] -- Mn-SOD virulence factor; calprotectin metal sequestration
- [[salmonella-typhimurium]] -- [NiFe] hydrogenases for phagolysosomal survival
- [[shigella-flexneri]] -- H2-uptake hydrogenases combat oxidative/acid stress
