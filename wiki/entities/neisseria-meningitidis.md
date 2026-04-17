---

title: Neisseria meningitidis
type: entity
subtype: microbe
created: 2026-04-09
updated: 2026-04-16
last_substantive_update: 2026-04-16
sources: [maier-2019-nickel-microbial-pathogenesis, patil-2021-infection-metallomics-critical-care, patil-2021-infection-metallomics-covid-era, forbes-2019-fungal-mycobiome-neurological-disease, kun-2023-microbiota-thyroid-cancer]
source_count: 5
metal_dependencies: [nickel, iron, zinc, manganese]
key_enzymes: [Ni-GloI (glyoxalase I), ribonucleotide reductase, transferrin-binding proteins TbpA/TbpB, lactoferrin-binding proteins LbpA/LbpB, Fur (ferric uptake regulator), zinc-dependent carbonic anhydrase]
tags: [pathogen, meningitis, sepsis, nasopharyngeal-commensal, Ni-GloI, iron-piracy, serogroup-vaccines, meningitis-belt]
platform: wikibiome
last_substantive_update: 2026-04-16
seo_target: "Neisseria meningitidis nickel glyoxalase meningitis iron acquisition virulence"
wikipedia_differentiation: "Nickel-dependent glyoxalase I as selective drug target with structural distinction from human Zn-GloI; infection metallomics diagnostic framework (siderophore monitoring, metalloprotein tracking); multi-metal dependency map (Ni for GloI, Fe for multiple piracy systems, Zn for carbonic anhydrase, Mn for oxidative defense); meningitidis BBB crossing metal requirements — depth absent from Wikipedia's clinical/epidemiological focus"
conditions_enriched_in: [bacterial-meningitis, meningococcal-septicemia]
conditions_depleted_in: []
pathogenic_potential: commensal-turned-pathogen
gram_stain: "negative"
oxygen_requirement: "aerobic/microaerophilic"
---

# Neisseria meningitidis

A Gram-negative diplococcus that is simultaneously a **nasopharyngeal commensal** (carried asymptomatically by 10–35% of the population) and a devastating invasive pathogen causing **bacterial meningitis and meningococcal septicemia**. The transition from harmless carriage to life-threatening invasion is one of microbiology's most dramatic phenotypic switches — and metal-dependent virulence enzymes are central to sustaining the explosive growth that makes this pathogen so lethal.

## Taxonomy and Normal Biology

- Family Neisseriaceae, order Neisseriales, class Betaproteobacteria.
- Gram-negative diplococcus; coffee-bean shaped pairs typical of the genus.
- **12 serogroups** defined by capsular polysaccharide chemistry; A, B, C, W, X, and Y cause >99% of invasive disease.
- The nasopharynx is the primary ecological niche; transmission is respiratory droplet. At this site, *N. meningitidis* competes with commensal *Neisseria* species (*N. lactamica*, *N. cinerea*) that provide natural immunological priming in childhood — explaining why *N. lactamica* carriage is associated with reduced meningococcal disease risk.

## Multi-Metal Dependency Profile

Unlike many bacterial pathogens with one or two key metal dependencies, *N. meningitidis* has an unusually **broad metal dependency profile** across four metals:

### Nickel: Glyoxalase I

*N. meningitidis* possesses a confirmed **Ni-dependent glyoxalase I (GloI)** that detoxifies **methylglyoxal** — the toxic byproduct of glycolysis that accumulates during rapid growth [[maier-2019-nickel-microbial-pathogenesis]]:

- Methylglyoxal (MG) is produced non-enzymatically from dihydroxyacetone phosphate during high glycolytic flux. At the growth rates achieved during bloodstream invasion, MG generation is substantial and potentially lethal if not detoxified.
- The glyoxalase system (GloI + GloII) converts MG to non-toxic D-lactate via the intermediate S-lactoylglutathione. In *N. meningitidis*, this critical first step requires Ni2+ as cofactor.
- **Structural distinction from the human enzyme**: Human GloI is **Zn-dependent**; *N. meningitidis* GloI is **Ni-dependent**. This divergence at the active site coordination chemistry — Ni vs. Zn — creates a potential selective drug target. An inhibitor designed for the Ni-coordination geometry would block bacterial GloI without affecting human Zn-GloI.
- *N. gonorrhoeae* (the gonococcus) also possesses Ni-GloI, extending this nickel dependency across the pathogenic *Neisseria* genus — relevant to gonorrhea treatment, where antibiotic resistance is a growing crisis.
- Nickel uptake in *N. meningitidis* involves ABC-type transporters; the FurB/NikR regulatory system controls nickel homeostasis under the competing demands of nickel sufficiency for GloI vs. avoidance of nickel toxicity.

### Iron: Multi-System Piracy

Iron is the most critical metal for *N. meningitidis* virulence. Unlike many Gram-negative pathogens, *N. meningitidis* **does not produce classical siderophores** — instead, it relies entirely on **direct receptor-mediated piracy** of host iron-binding proteins [[patil-2021-infection-metallomics-critical-care]]:

- **Transferrin-binding proteins (TbpA/TbpB)**: TbpA is an outer membrane TonB-dependent transporter; TbpB is a lipoprotein that binds transferrin and presents it to TbpA. Together they strip iron directly from human transferrin — a uniquely human-adapted system (meningococcal TbpB has no affinity for transferrin from most other mammals).
- **Lactoferrin-binding proteins (LbpA/LbpB)**: Acquire iron from lactoferrin at mucosal surfaces — the primary iron source at the nasopharyngeal colonization stage.
- **Hemoglobin/haptoglobin receptors (HmbR, HpuAB)**: Access heme-iron from hemoglobin (HmbR) and the haptoglobin-hemoglobin complex (HpuAB). HpuAB is a two-component system with a TonB-dependent transporter (HpuB) and a surface lipoprotein (HpuA).
- **Iron-regulated gene expression**: The Fur (ferric uptake regulator) repressor controls transcription of iron acquisition genes. Under iron-replete conditions, Fur-Fe2+ represses uptake systems; under iron limitation (as in the CSF after crossing the BBB), Fur derepression triggers maximum expression of all iron piracy systems.

### Zinc: Carbonic Anhydrase and Beyond

- *N. meningitidis* expresses a **zinc-dependent carbonic anhydrase** (NahH/CafA family), which catalyzes CO2/HCO3⁻ interconversion — essential for pH regulation and bicarbonate-dependent gene expression in different anatomical compartments (nasopharynx vs. bloodstream vs. CSF have different CO2/bicarbonate tensions).
- Zinc is also required for multiple metalloprotease activities involved in immune evasion: zinc metalloproteases cleave host complement proteins and immunoglobulins.
- The host response to *N. meningitidis* includes calprotectin secretion — a zinc-sequestering protein that limits zinc availability to the pathogen at mucosal surfaces, directly targeting this metal dependency.

### Manganese: Oxidative Defense

- **Manganese superoxide dismutase (MnSOD)** protects *N. meningitidis* against the oxidative burst of neutrophils during invasive disease.
- MnSOD is particularly relevant during the transition from nasopharynx (low oxidative stress) to bloodstream (intense neutrophil-mediated oxidative killing).
- Manganese availability thus influences meningococcal survival during the critical early bloodstream phase before capsule-mediated resistance to complement killing is established.

## Pathogenesis: The Metal-Dependent Transition

Each stage of meningococcal pathogenesis has distinct metal requirements:

**Stage 1 — Nasopharyngeal colonization**:
- Initial attachment via Type IV pili (assembled without specific metal dependency) and Opa/Opc adhesins.
- At this stage: LbpA/LbpB acquires iron from lactoferrin; zinc carbonic anhydrase supports pH regulation; Ni-GloI supports the metabolic activity required for competitive colonization.

**Stage 2 — Invasion and bloodstream entry**:
- Breach of the nasopharyngeal epithelium requires metalloprotease activity (zinc-dependent) for extracellular matrix degradation.
- Capsular polysaccharide expression provides complement resistance; cap gene expression is iron-regulated.
- TbpA/TbpB activates in the iron-limited bloodstream, stripping transferrin of its iron load.
- MnSOD defends against neutrophil oxidative burst [[patil-2021-infection-metallomics-critical-care]].

**Stage 3 — Blood-brain barrier crossing**:
- *N. meningitidis* crosses the BBB via transcellular (IgA1 protease-dependent), paracellular, and potentially Trojan horse mechanisms [[patil-2021-infection-metallomics-critical-care]].
- CSF is the most iron-poor compartment in the body; Fur derepression triggers maximum iron piracy system expression.
- The Ni-dependent GloI is critical here: rapid glycolytic growth in glucose-poor CSF generates methylglyoxal that would be lethal without efficient detoxification.

**Stage 4 — Meningitis and/or septicemic shock**:
- In meningitis: bacterial replication in CSF drives inflammatory cascade causing cerebral edema and elevated intracranial pressure.
- In septicemia (purpura fulminans): massive endotoxin (LPS) release causes disseminated intravascular coagulation, hemorrhagic skin necrosis, and multi-organ failure within hours of symptom onset.
- HmbR and HpuAB acquire heme-iron from the erythrocytes lysed during DIC, providing abundant iron for maximal growth.

## Clinical Significance

- **Case fatality rate**: 10–15% even with appropriate treatment; up to 20% of survivors have permanent sequelae (hearing loss, brain damage, limb amputation from gangrenous purpura).
- **Speed**: Can kill within 12–24 hours of symptom onset — empiric ceftriaxone must begin on clinical suspicion alone, before culture confirmation.
- **Epidemic potential**: The African meningitis belt (sub-Saharan Africa) experiences large cyclical serogroup A epidemics. MenAfriVac (conjugate serogroup A vaccine) has dramatically reduced epidemic meningitis in this region.
- **Vaccines**: Conjugate vaccines cover serogroups A, C, W, Y. Serogroup B is structurally similar to human polysaccharide (molecular mimicry), requiring protein-based vaccines (Bexsero, Trumenba) targeting factor H binding protein and other surface proteins.
- **Chemoprophylaxis**: Rifampicin or ciprofloxacin for close contacts to eradicate nasopharyngeal carriage.

## Infection Metallomics Diagnostic Framework

The infection metallomics approach can detect metalloprotein signatures of meningococcal invasion:

- TbpA/TbpB can theoretically be monitored as biomarkers of active meningococcal infection; transferrin-binding protein levels in CSF or serum may indicate active piracy
- Metallophore imaging in CNS infections tracks pathogen routing across the BBB [[patil-2021-infection-metallomics-critical-care]]
- Calprotectin elevation (the zinc/calcium-sequestering host response) in CSF is being explored as an adjunct diagnostic for bacterial versus viral meningitis

## Key Sources

- [[kun-2023-microbiota-thyroid-cancer]]

## Cross-References

- [[glyoxalase]] — confirmed Ni-GloI for methylglyoxal detoxification; structurally distinct from human Zn-GloI
- [[nickel]] — cofactor for GloI; Ni vs. Zn selectivity is the key to selective inhibitor design
- [[iron]] — acquired by four distinct host-protein piracy systems; critical for virulence at every stage
- [[zinc]] — carbonic anhydrase and metalloprotease activities; calprotectin-mediated host sequestration
- [[manganese]] — MnSOD for oxidative defense during neutrophil killing
- [[nutritional-immunity]] — transferrin withholds iron; lactoferrin withholds iron; calprotectin withholds zinc; all targeted by meningococcal receptor systems
- [[blood-brain-barrier]] — multiple mechanisms for BBB crossing, all metal-dependent
- [[mis-metallation]] — Ni in Zn-optimized human enzymes explains why gallium-like strategies might selectively target the Ni-GloI
- [[pseudomonas-aeruginosa]] — another confirmed Ni-GloI pathogen; Ni-GloI inhibition as cross-pathogen drug target
- [[yersinia-pestis]] — shares Ni-GloI dependency for explosive bloodstream growth
- [[streptococcus-pneumoniae]] — the other major bacterial meningitis pathogen; distinct metal dependencies
