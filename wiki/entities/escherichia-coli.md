---

title: Escherichia coli
type: entity
subtype: microbe
created: 2026-04-09
updated: 2026-04-11
sources:
  - khorsand-2022-enterobacteriaceae-ecoli-ibd-ibdmdb-metagenomics
  - zhu-2022-berberine-uc-cancer-therapy
  - maes-2026-shotgun-metagenomics-mdd-nimetox
  - kurhaluk-2025-oxidative-stress-gut-microbiota-male-fertility
  - wallen-2022-metagenomics-parkinsons-microbiome-signature
  - asangba-2023-microbiome-ovarian-cancer-diagnostic-prognostic
source_count: 6
tags: [pathogen, nickel, iron, hydrogenase, urease, UPEC, UTI, yersiniabactin, NikABCDE]
metal_dependencies: [nickel, iron, zinc, manganese, cobalt]
key_enzymes: [NiFe-hydrogenase (Hyd-1/2/3/4), urease (STEC), enterobactin/aerobactin/yersiniabactin (siderophores), zinc-metalloproteinase, MnSOD]
platform: wikibiome
last_substantive_update: 2026-04-22
seo_target: "Escherichia coli nickel hydrogenase urease UPEC iron siderophore"
wikipedia_differentiation: "Complete NikABCDE transport biology plus yersiniabactin dual iron-nickel metallophore system linking pathotype-specific metal dependencies to virulence"
conditions_enriched_in: [urinary-tract-infection, inflammatory-bowel-disease, colorectal-cancer]
conditions_depleted_in: []
pathogenic_potential: commensal-turned-pathogen
---

# Escherichia coli

A Gram-negative bacterium that spans the commensal-pathogen spectrum, with pathogenic variants (UPEC, STEC, EHEC) deploying nickel-dependent enzymes as virulence factors. *E. coli* is the model organism for nickel transport biology -- the NikABCDE system was first characterized here -- and pathogenic strains have co-opted nickel metabolism for urinary tract colonization, gut survival, and acid resistance.

## Metal-Dependent Virulence Factors

### [NiFe] Hydrogenases
*E. coli* encodes multiple [NiFe] hydrogenases [[maier-2019-nickel-microbial-pathogenesis]]:

- Hyd-1 (HyaABC): membrane-bound, H2-uptake. Expressed under aerobic/microaerobic conditions.
- Hyd-2 (HybOABC): membrane-bound, H2-uptake. Most active under anaerobic conditions with alternative electron acceptors.
- Hyd-3 (HycBCDEFG): cytoplasmic, H2-evolving. Part of the formate hydrogenlyase (FHL) complex; produces H2 during mixed-acid fermentation.
- Hyd-4 (HyfABCDEFGHIR): second FHL-associated complex.

- In pathogenic *E. coli*, hydrogenases provide:
 - Respiratory flexibility in the oxygen-variable gut environment.
 - Acid resistance: Hyd-3/FHL consumes formate and produces H2 + CO2, removing acidic fermentation products.
 - Energy generation in nutrient-limited intracellular niches (for UPEC inside bladder epithelial cells).

### Urease (in Shiga Toxin-Producing E. coli)
- STEC/EHEC strains use urease for acid survival during gastric transit [[maier-2019-nickel-microbial-pathogenesis]].
- Urease-mediated ammonia production buffers pH, enabling survival through the stomach to reach the intestinal colonization site.
- Not all *E. coli* pathotypes carry urease -- it is primarily found in STEC and some UPEC strains.

### Ni-Acireductone Dioxygenase (ARD)
- Part of the methionine salvage pathway; the Ni-bound form is present in *E. coli* and other gamma-proteobacteriaceae.
- Provides metabolic flexibility depending on available metal cofactors.

### Fe-Dependent Virulence
- Enterobactin: the canonical high-affinity siderophore (Ka for Fe3+ = ~10^52).
- Aerobactin: found in many UPEC and invasive strains; functions at lower affinity but under a broader range of conditions.
- Yersiniabactin: see below -- dual iron/nickel role.
- ChuA/Chu system: heme uptake receptor in EHEC and UPEC.
- Shiga toxin expression is iron-regulated (repressed by Fur under high iron; induced under iron limitation).

## Metal Acquisition Systems

### NikABCDE -- The Model Nickel Transporter
- First characterized Ni-specific ABC transporter [[maier-2019-nickel-microbial-pathogenesis]].
- NikA: periplasmic Ni-binding protein.
- NikB/NikC: integral membrane permease subunits.
- NikD/NikE: ATP-binding cassette subunits providing energy.
- Regulated by NikR (nickel-responsive repressor) -- under high Ni, NikR represses nikABCDE to prevent toxicity.
- This system is the paradigm for understanding nickel import across all bacteria; homologs found in [[salmonella-typhimurium]], [[helicobacter-pylori]] (NiuBDE), and many other pathogens.

### Yersiniabactin -- A Dual Iron/Nickel Metallophore
- Originally characterized as an iron siderophore in *Yersinia pestis*, but the UPEC yersiniabactin also binds extracellular nickel [[maier-2019-nickel-microbial-pathogenesis]].
- In uropathogenic *E. coli*, yersiniabactin serves a dual role:
 - Iron acquisition for growth.
 - Nickel import for hydrogenase/urease metalation during UTI.
- Nickel transport via yersiniabactin is upregulated during urinary tract infection, suggesting active nickel scavenging in the urinary environment.
- This dual-specificity metallophore represents a metabolically efficient strategy: one molecule, two essential metals.

### Hydrogenase Maturation
- HypABCDEF: accessory proteins for [NiFe] active site assembly, shared across all four hydrogenases.
- HypB is a GTPase/nickel metallochaperone; HypA delivers nickel to HypB.

## Nutritional Immunity Evasion

- Lipocalin-2: host protein that sequesters enterobactin-Fe complexes. UPEC strains carrying yersiniabactin or salmochelin evade lipocalin-2.
- Calprotectin: sequesters Zn, Mn, and Ni at infection sites.
- Lactoferrin: sequesters iron in mucosal secretions and urine.
- UPEC nickel transport upregulation during UTI suggests the pathogen senses host-mediated nickel restriction and responds with increased scavenging.

## Disease Associations

- Urinary tract infections (UTI): UPEC is the #1 cause of community-acquired UTI; nickel transport upregulated during infection [[maier-2019-nickel-microbial-pathogenesis]].
- Hemolytic uremic syndrome (HUS): STEC/EHEC (O157:H7); Shiga toxin is iron-regulated [[maier-2019-nickel-microbial-pathogenesis]].
- Neonatal meningitis: K1 capsular strains.
- Traveler's diarrhea: ETEC strains.
- Crohn's disease-associated: adherent-invasive *E. coli* (AIEC) in the ileum.
- Bacteremia/sepsis: from urinary or GI source; *E. coli* translocation from the gut is a major source of sepsis in severe COVID-19 [[bernard-raichon2022-dysbiosis-translocation-bacteremia-covid|Bernard-Raichon2022-dysbiosis-translocation-bacteremia-covid]].
- Chronic kidney disease: Enterobacteriaceae including *E. coli* are enriched and LPS translocation contributes to uremic inflammation [[alobaidi-2025-gut-kidney-axis-ckd-mechanisms-therapeutics]] [[borges-2016-uremic-toxins-inflammatory-markers-ckd]].
- GERD / esophageal dysbiosis: Enterobacteriaceae including *E. coli* are enriched in a Type II (LPS-driven) esophageal microbiome signature associated with erosive disease [[chen-2024-esophageal-dysbiosis-tlr2-barrier-integrity-gerd]] [[alageel-2025-microbiome-composition-gerd-systematic-review]].
- Endometriosis: Gram-negative *E. coli* and related Enterobacteriaceae are enriched in cervical, vaginal, and gut compartments; nickel-sensitive IBS symptoms overlap with endometriosis dysbiosis [[akiyama-2019-cervical-mucus-microbial-colonization-endometriosis]] [[borghini-2020-endometriosis-nickel-ibs]] [[colonetti-2023-gut-vaginal-microbiota-endometriosis-meta-analysis]].
- Colorectal cancer: colibactin-producing and mucosa-associated *E. coli* are enriched and drive genotoxic damage [[bars-cortina-2024-16s-vs-shotgun-crc]] [[cao-2025-metabolic-interactions-microbial-metabolites-crc]].
- Necrotizing enterocolitis: Enterobacteriaceae bloom (including *E. coli*) precedes NEC onset in preterm infants [[torrazza-2013-intestinal-microbial-ecology-nec]] [[pendergrass-2026-nickel-nec-preterm-gut]].
- Type 1 diabetes: *Bacteroides dorei*-like and *E. coli* populations with immunoinhibitory LPS structures alter early immune priming and are linked to T1D progression [[davis-richardson-2015-bacteroides-dorei-t1d-model]] [[vatanen-2018-teddy-gut-microbiome-t1d-nature]].

## Connection to Environmental Metal Exposure

- Dietary nickel excreted in urine provides substrate for UPEC nickel scavenging during UTI -- higher dietary nickel may theoretically support UPEC virulence [[maier-2019-nickel-microbial-pathogenesis]].
- Gut *E. coli* populations are exposed to dietary metals; iron supplementation is known to promote pathogenic *E. coli* expansion in the gut [[bao-2024-iron-homeostasis-intestinal-immunity-gut-microbiota]].
- Yersiniabactin's dual iron/nickel specificity means environmental iron AND nickel both feed UPEC metal acquisition [[maier-2019-nickel-microbial-pathogenesis]].
- Agricultural metal contamination selects for metal-tolerant *E. coli* in food-animal production.
- Synergistic toxicity of copper, nickel, iron, and sulfur modulates *E. coli* stress and survival responses [[darwiche-2025-synergistic-toxicity-nickel-copper-iron-sulfur-ecoli]].

## Connections

- [[metal-dependent-virulence]] -- [NiFe] hydrogenases, STEC urease, yersiniabactin dual Fe/Ni metallophore
- [[nickel]] -- NikABCDE is the paradigmatic nickel transporter; yersiniabactin also scavenges Ni
- [[iron]] -- enterobactin, aerobactin, yersiniabactin; Shiga toxin is iron-regulated
- [[salmonella-typhimurium]] -- closely related; shares NikABCDE architecture and multiple hydrogenases
- [[helicobacter-pylori]] -- NiuBDE is homologous to NikABCDE
- [[proteus-mirabilis]] -- both cause UTI with nickel-dependent virulence mechanisms
- [[nutritional-immunity]] -- lipocalin-2 and calprotectin counteract E. coli metal acquisition
- [[staphylococcus-aureus]] -- yersiniabactin (Ni-binding) parallels staphylopine (Ni-binding)
- [[co-selection]] -- metal resistance plasmids carrying ESBL and carbapenemase genes
- [[antimicrobial-resistance]] -- ESBL-producing and carbapenem-resistant E. coli are major AMR threats
