---

title: Iron-Sulfur Clusters
type: concept
created: 2026-04-17
updated: 2026-04-17
last_substantive_update: 2026-04-17
sources: [darwiche-2025-synergistic-toxicity-nickel-copper-iron-sulfur-ecoli, sanchez-rosario-2026-bmdc-metal-antimicrobial-mrsa-biofilm, wang-2025-engineering-copper-antimicrobial-materials-post-antibiotic, barras-2018-silver-antibiotic-synergy-mismetallation, goh-2024-group-b-streptococcus-metal-stress-mismetallation-ros, bopp-2024-o2-uncoupling-rieske-oxygenase-iron-ros-adaptation, corrales-2024-iron-chelating-antifungal-collismycin-candida, andrei-2020-copper-homeostasis-bacteria-ins-outs, nong-2026-sod-deficiency-oxidative-stress-ecoli, bastida-martinez-2025-pexr-peroxide-stress-metal-sensing-myxococcus, zheng-2025-cuer-copa-cusfabc-copper-detoxification-vibrio, khochtali-2025-pcob-copper-efflux-disordered-region-caulobacter, williams-2025-streptococcus-mitis-h2o2-biofilm-inhibition-smutans, jaishankar-2014-heavy-metal-toxicity-mechanisms, capdevila-2024-metal-sensing-metalloregulators]
source_count: 15
tags: [iron-sulfur, Fe-S, metalloenzyme, electron-transfer, mis-metallation, butyrate-synthesis, metal-toxicity-mechanism, anaerobic-metabolism]
karen_brain_primitives: [1, 3, 4, 5, 8]
seo_target: "iron sulfur clusters microbiome metal toxicity butyrate"
platform: wikibiome
---

# Iron-Sulfur Clusters

## Overview

**Iron-sulfur (Fe-S) clusters** are among the most ancient and ubiquitous metal cofactors in biology, present in all domains of life. These inorganic prosthetic groups -- typically [2Fe-2S] or [4Fe-4S] configurations -- mediate electron transfer, enzymatic catalysis, and regulatory sensing across hundreds of proteins. In the context of the gut microbiome, Fe-S clusters occupy a uniquely consequential position: they are simultaneously the metabolic backbone of beneficial butyrate-producing bacteria and the primary intracellular target of toxic metal exposure. This dual role makes Fe-S cluster biology a linchpin connecting environmental metal contamination to gut dysbiosis.

## Structure and Assembly

Fe-S clusters consist of iron atoms coordinated with inorganic sulfide (S2-) and typically ligated to cysteine residues on proteins. The two most common forms:

- **[2Fe-2S]** -- Found in Rieske oxygenases, ferredoxins, and regulatory proteins like IRP-1. Rieske [2Fe-2S] centers in oxygenases can generate reactive oxygen species when uncoupled from substrate [[bopp-2024-o2-uncoupling-rieske-oxygenase-iron-ros-adaptation]].
- **[4Fe-4S]** -- Found in aconitase, fumarase, dehydratases, and the Wood-Ljungdahl pathway enzymes essential to anaerobic metabolism.

Assembly requires dedicated machinery -- the **ISC (iron-sulfur cluster) system** in most bacteria and mitochondria, and the **SUF system** under oxidative stress conditions. ISC assembly genes are upregulated under combined nickel-copper exposure, indicating the cell's attempt to repair ongoing Fe-S damage [[darwiche-2025-synergistic-toxicity-nickel-copper-iron-sulfur-ecoli]].

## Fe-S Clusters as the Primary Target of Metal Toxicity

A paradigm shift in metal toxicology: **Fe-S clusters, not DNA or lipids, are the primary intracellular target of copper and nickel toxicity** [[darwiche-2025-synergistic-toxicity-nickel-copper-iron-sulfur-ecoli]], [[wang-2025-engineering-copper-antimicrobial-materials-post-antibiotic]], [[sanchez-rosario-2026-bmdc-metal-antimicrobial-mrsa-biofilm]]. The mechanism is [[mis-metallation]], not reactive oxygen species (ROS).

### How Toxic Metals Destroy Fe-S Clusters

| Metal | Mechanism | Key Evidence |
|-------|-----------|-------------|
| **Copper (Cu+)** | Targets thiolate sulfur ligands in Fe-S clusters, displacing iron | Copper surfaces kill bacteria even under anaerobic conditions, proving ROS is not required [[wang-2025-engineering-copper-antimicrobial-materials-post-antibiotic]] |
| **Nickel (Ni2+)** | Occupies Fe2+ binding sites in ISC assembly scaffolds | ISC deletion mutants show growth impairment only under combined Ni+Cu exposure [[darwiche-2025-synergistic-toxicity-nickel-copper-iron-sulfur-ecoli]] |
| **Cadmium (Cd2+)** | Displaces iron from Fe-S clusters, releasing free Fe2+ that catalyzes Fenton reactions | Cadmium-driven Fe2+ release amplifies [[oxidative-stress]] as a secondary effect [[jaishankar-2014-heavy-metal-toxicity-mechanisms]] |
| **Silver (Ag+)** | Disrupts Fe-S clusters through mis-metallation; synergizes with antibiotics | Silver-antibiotic synergy partly explained by Fe-S damage [[barras-2018-silver-antibiotic-synergy-mismetallation]] |
| **Gallium (Ga3+)** | Incorporates into Fe-S assembly as a redox-inactive Fe3+ mimic -- a Trojan horse | Poisons aconitase, succinate dehydrogenase, Fur, and IscR |

### Synergistic Toxicity: Nickel + Copper

The combination of nickel and copper is far more toxic than either metal alone. **Darwiche et al. (2025)** demonstrated this in *E. coli*: Cu+ attacks existing Fe-S clusters while Ni2+ simultaneously blocks the ISC repair machinery. The cell cannot destroy clusters fast enough to keep up with incoming damage AND cannot rebuild them. This synergistic mechanism explains why environmental co-exposures (e.g., welding fumes containing both metals) are disproportionately harmful [[darwiche-2025-synergistic-toxicity-nickel-copper-iron-sulfur-ecoli]].

A secondary consequence: Fe-S cluster repair consumes cysteine for sulfur donation, triggering a **sulfur starvation response** that compounds the metabolic crisis [[darwiche-2025-synergistic-toxicity-nickel-copper-iron-sulfur-ecoli]].

## Fe-S Clusters in Butyrate-Producing Commensals

Nearly all major butyrate-producing commensals depend on Fe-S cluster enzymes for their core metabolism. This shared vulnerability creates a unifying mechanism linking heavy metal exposure to the loss of SCFA production observed across inflammatory and neurodegenerative diseases.

### Fe-S-Dependent Commensals

| Organism | Fe-S Function | Consequence of Disruption |
|----------|--------------|--------------------------|
| **[[faecalibacterium-prausnitzii]]** | Fe-S clusters in butyrate synthesis enzymes | Loss of the "single most consistent dysbiosis marker" |
| **[[roseburia]]** | Fe-S clusters in butyrate pathway | Vulnerable to Cd/Pb displacement |
| **[[lachnospiraceae]]** | Fe-S clusters for butyrate synthesis | "Universal dysbiosis sentinel" -- depletion seen across IBD, CRC, metabolic disease |
| **[[blautia]]** | Fe-S clusters in Wood-Ljungdahl acetogenic pathway | Loss of acetate production and cross-feeding |
| **[[anaerostipes]]** | Fe-S clusters in butyryl-CoA dehydrogenase | Reduced butyrate from lactate conversion |
| **[[eubacterium]]** | Fe-S clusters in butyrate enzymes | Depleted across inflammatory conditions |
| **[[ruminococcus]]** | Fe-S clusters in ferredoxins for anaerobic metabolism | Loss of fiber fermentation capacity |
| **[[clostridium]]** | Fe-S clusters in ferredoxins | Central to anaerobic fermentation |

### The Exception That Proves the Rule

**[[phascolarctobacterium]]** notably lacks Fe-S dependency, using a biotin-dependent pathway instead. This makes it resilient to metal-driven dysbiosis -- an observation consistent with Primitive 1 (metals as selective pressures selecting for organisms with alternative cofactors).

## Fe-S Clusters in Sulfur-Reducing Organisms

- **[[desulfovibrio]]** -- Fe-S clusters are central to dissimilatory sulfate reduction; the dsrAB (dissimilatory sulfite reductase) enzyme complex contains multiple Fe-S centers.
- **[[bilophila]]** -- Fe-S clusters in dissimilatory sulfite reductase enable H2S production from taurine-derived sulfite.
- **[[methanobrevibacter-smithii]]** -- Fe-S clusters in hydrogenases for H2 oxidation coupled to methanogenesis.

## Fe-S Clusters in Regulatory Sensing

Fe-S clusters also function as metal and redox sensors:

- **Fur (Ferric Uptake Regulator)** -- Uses an Fe-S-associated sensing mechanism to regulate iron acquisition genes.
- **IscR** -- An [2Fe-2S]-containing transcription factor that senses Fe-S cluster status and regulates ISC/SUF assembly genes.
- **IRP-1 (Iron Regulatory Protein 1)** -- Contains a [4Fe-4S] cluster when iron is replete (functioning as cytoplasmic aconitase); loses the cluster under iron depletion, converting to an RNA-binding protein that stabilizes transferrin receptor mRNA. Nickel oxidizes iron in this cluster, disrupting iron homeostasis signaling.

## Ecological and Clinical Significance

The Fe-S cluster story connects several WikiBiome themes:

1. **Environmental metal exposure → Fe-S damage → SCFA producer depletion → barrier dysfunction → inflammation** -- a mechanistic chain from contamination to disease.
2. **Antimicrobial metal surfaces** (copper, silver) exploit Fe-S vulnerability therapeutically [[wang-2025-engineering-copper-antimicrobial-materials-post-antibiotic]], [[sanchez-rosario-2026-bmdc-metal-antimicrobial-mrsa-biofilm]].
3. **[[cuproptosis]]** -- Fe-S cluster destabilization is step 5 of the cuproptotic cascade, linking Fe-S biology to copper-induced cell death.
4. **Iron chelation** as antifungal strategy: collismycin A disrupts Fe-S cluster-dependent pathways in [[candida-albicans]] [[corrales-2024-iron-chelating-antifungal-collismycin-candida]].
5. **SOD deficiency** triggers massive metabolic rewiring in *E. coli*, including upregulated siderophore production, partly through Fe-S cluster vulnerability [[nong-2026-sod-deficiency-oxidative-stress-ecoli]].

## Cross-References

- [[mis-metallation]] -- Fe-S clusters as canonical mis-metallation targets
- [[oxidative-stress]] -- Secondary ROS from Fe2+ release after Fe-S disruption
- [[cuproptosis]] -- Fe-S destabilization in copper-induced cell death
- [[siderophores-metallophores]] -- Competition for iron affects Fe-S assembly
- [[short-chain-fatty-acids]] -- SCFA production depends on Fe-S enzymes
- [[iron]] -- Fe-S clusters as major iron utilization pathway
- [[copper]] -- Cu+ targets Fe-S thiolate ligands
- [[nickel]] -- Ni2+ blocks ISC assembly
- [[gallium]] -- Ga3+ Trojan horse strategy targeting Fe-S proteins
- [[cadmium]] -- Cd2+ displaces Fe from clusters
- [[antimicrobial-metals]] -- Therapeutic exploitation of Fe-S vulnerability
