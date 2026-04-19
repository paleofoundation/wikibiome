---
title: Metal Homeostasis
type: concept
created: 2026-04-10
updated: 2026-04-10
sources: [bao-2024-iron-homeostasis-intestinal-immunity-gut-microbiota, akbari-2022-metal-homeostasis-streptococci, cassat-2012-metal-acquisition-staphylococcus-aureus]
source_count: 3
tags: [metal-homeostasis, iron, zinc, copper, hepcidin, ferroportin, ZIP, ZnT, CTR1, ATP7A, ATP7B, Fur, NikR, nutritional-immunity]
platform: wikibiome
karen_brain_primitives: [1, 2, 3, 4, 8, 9]
seo_target: "metal homeostasis microbiome"
last_substantive_update: 2026-04-10
---

# Metal Homeostasis

The biological processes by which organisms maintain proper intracellular and systemic concentrations of essential metals -- importing what is needed, storing excess safely, and exporting or sequestering surplus. Both host and microbial systems have evolved elaborate metal homeostasis machinery. When these systems fail -- through genetic defects, toxic metal exposure, infection, or chronic inflammation -- the result is disease.

## Host Metal Homeostasis

### Iron (Fe)
The most tightly regulated metal in the body, controlled by the [[hepcidin]]-ferroportin axis [[bao-2024-iron-homeostasis-intestinal-immunity-gut-microbiota]]:
- **Import**: Dietary non-heme iron reduced to Fe2+ by DcytB, transported into enterocytes via DMT1 (SLC11A2). Heme iron imported via HCP1.
- **Storage**: Intracellular ferritin sequesters excess iron as a mineralized core; liver is the primary storage organ.
- **Regulation**: Hepcidin (hepatic peptide hormone) binds ferroportin, causing its internalization and degradation, blocking iron export from enterocytes and macrophages. Hepcidin is increased by inflammation (IL-6/STAT3) and iron loading; decreased by iron deficiency, erythropoietic demand, and hypoxia.
- **Export**: Ferroportin (SLC40A1) is the sole known cellular iron exporter; hephaestin/ceruloplasmin oxidize Fe2+ to Fe3+ for transferrin loading.
- **Sensing**: Iron regulatory proteins (IRP1/IRP2) bind iron-responsive elements (IREs) in mRNA, post-transcriptionally controlling ferritin, ferroportin, DMT1, and transferrin receptor expression.

### Zinc (Zn)
- **Import**: ZIP family transporters (SLC39A, 14 members) move Zn into cytoplasm from extracellular space or organelles.
- **Export/sequestration**: ZnT family (SLC30A, 10 members) move Zn out of cytoplasm into organelles or extracellular space.
- **Regulation**: MTF-1 (metal-responsive transcription factor) senses cytoplasmic Zn and activates metallothionein and ZnT1 transcription.
- **Clinical**: ZIP4 mutations cause acrodermatitis enteropathica (severe Zn deficiency); ZnT8 autoantibodies are a marker of type 1 diabetes.

### Copper (Cu)
- **Import**: CTR1 (SLC31A1) is the primary copper importer; requires reduction of Cu2+ to Cu+ by STEAP reductases.
- **Intracellular trafficking**: Copper chaperones (CCS for SOD1, Cox17 for cytochrome c oxidase, ATOX1 for ATP7A/B) deliver Cu to specific targets.
- **Export**: ATP7A (Menkes protein) in intestine and most tissues; ATP7B (Wilson protein) in liver for biliary excretion and ceruloplasmin loading.
- **Clinical**: Menkes disease (ATP7A loss) causes systemic Cu deficiency; Wilson's disease (ATP7B loss) causes hepatic/neurological Cu overload.

## Pathogen Metal Homeostasis

Microbes face a dual challenge: acquiring essential metals from a host that actively withholds them [[nutritional-immunity]], while defending against metal toxicity weaponized by immune cells [[cassat-2012-metal-acquisition-staphylococcus-aureus]]:

- **Fur (ferric uptake regulator)**: Master Fe-sensing transcription factor in most bacteria; represses siderophore genes when Fe is sufficient.
- **NikR**: Nickel-responsive regulator in H. pylori; controls [[urease]] and nickel transporter expression.
- **Zur**: Zinc uptake regulator; controls Zn import and ZnuABC transporter expression.
- **MntR**: Manganese-responsive regulator controlling Mn import.
- **Siderophore systems**: High-affinity iron chelators [[siderophores-metallophores]] produced under iron limitation; enterobactin, pyoverdine, mycobactin, staphyloferrin.
- **Efflux pumps**: CzcCBA (Cd/Zn/Co), CopA (Cu), and others protect bacteria from metal toxicity.

## When Homeostasis Fails

Disruption of metal homeostasis drives disease through:
1. **[[mis-metallation]]**: Toxic metals displace essential metals from enzyme active sites (Cd for Zn, Pb for Ca, Ni for Fe in non-cognate sites).
2. **Fenton chemistry**: Free Fe or Cu catalyzes hydroxyl radical generation, causing [[oxidative-stress]] and [[ferroptosis]].
3. **Immune dysfunction**: Zn deficiency impairs T cell function; Fe overload feeds pathogen growth; Cu deficiency reduces neutrophil killing.
4. **Microbiome disruption**: Excess metals kill metal-sensitive commensals; deficiency starves metal-dependent beneficial bacteria.

## See Also

- [[hepcidin]] -- master regulator of iron homeostasis
- [[nutritional-immunity]] -- host metal-withholding defense
- [[mis-metallation]] -- toxic metal displacement of essential metals
- [[metallomics]] -- systems-level metal measurement
- [[pathogen-metal-acquisition]] -- microbial strategies to overcome host defenses

## Key Sources

- [[akbari-2022-metal-homeostasis-streptococci]]
