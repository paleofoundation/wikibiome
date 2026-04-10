---
title: "Metal Ion Acquisition in Staphylococcus aureus: Overcoming Nutritional Immunity"
type: source
created: 2026-04-09
updated: 2026-04-09
authors: [James E. Cassat, Eric P. Skaar]
journal: Seminars in Immunopathology
year: 2012
tags: [Staphylococcus-aureus, iron, manganese, zinc, copper, nutritional-immunity, siderophores, calprotectin, metal-acquisition, virulence, heme, MRSA, biofilm]
doi: "10.1007/s00281-011-0294-4"
---

# Metal Ion Acquisition in Staphylococcus aureus: Overcoming Nutritional Immunity

## Overview

Landmark review establishing that [[nutritional-immunity]] extends far beyond [[iron]] sequestration to encompass [[manganese]], [[zinc]], and [[copper]] restriction by the vertebrate host. [[staphylococcus-aureus]] has evolved dedicated, often redundant acquisition systems for each of these metals, and disruption of any single system attenuates virulence. The paper frames host-pathogen metal competition as an "arms race" in which host proteins like [[calprotectin]], [[lactoferrin]], transferrin, and NRAMP1 restrict metal availability while *S. aureus* counters with [[siderophores-metallophores]], heme piracy, and high-affinity transporters.

## Iron Acquisition

### The Preferred Source: Heme

- Heme is the most abundant [[iron]] source in vertebrates, representing up to 80% of total body iron.
- *S. aureus* hemolysins (alpha-hemolysin, bi-component leukocidins) lyse red blood cells to release hemoglobin, which is further degraded to heme and free iron.
- The **Isd (iron-regulated surface determinant) system** is the primary heme acquisition pathway:
  - **IsdB** and **IsdH**: cell-surface receptors anchored by sortase. IsdB binds hemoglobin directly; IsdH binds hemoglobin-haptoglobin complexes. Both extract heme from host hemoproteins.
  - **IsdA**: surface protein that receives heme passed from IsdB/IsdH through the cell wall. Also confers resistance to defensins, antimicrobial fatty acids, and human skin innate defenses.
  - **IsdC**: cell-wall-anchored conduit that shuttles heme from IsdA to the membrane transporter.
  - **IsdDEF**: ABC transporter complex that imports heme across the cell membrane. IsdD and IsdE are lipoproteins; IsdF is the permease.
  - **IsdG** and **IsdI**: cytoplasmic heme-degrading monooxygenases that cleave the tetrapyrrole ring to release iron. These have structural similarity to each other but differ from canonical heme oxygenases.
- The entire Isd locus is transcriptionally regulated by **Fur** (ferric uptake regulator) and repressed under iron-replete conditions.
- Inactivation of *isdB* alone causes a significant decrease in virulence in murine sepsis models. IsdB vaccination has been explored as a staphylococcal vaccine candidate (Phase I clinical trial completed).
- IsdA also contributes to nasal colonization independently of its heme transport role -- it promotes adhesion to desquamated nasal epithelial cells and resistance to bactericidal lipids on the skin.

### Siderophore-Mediated Iron Acquisition

- *S. aureus* produces two endogenous [[siderophores-metallophores]]:
  - **Staphyloferrin A (SA)**: a 479 Da polycarboxylate siderophore encoded by the *sfaABCD* gene cluster. Binds iron with high affinity to compete with host transferrin and [[lactoferrin]].
  - **Staphyloferrin B (SB)**: a 448 Da compound (L-2,3-diaminopropionic acid, 1,2-diaminoethane, and alpha-ketoglutaric acid). Encoded by the *sbnA-sbnI* operon; synthesis requires SbnC, SbnE, SbnF, and Shell. More structurally complex than SA.
  - A third siderophore, **aureochelin**, has been proposed but not fully characterized.
- Iron-loaded staphyloferrin A is imported via **HtsABC** (heme transport system, also recognizes SA-Fe); iron-loaded staphyloferrin B via **SirABC**. Both are ABC transporters powered by the **FhuC** ATPase.
- Siderophore biosynthesis genes are Fur-regulated: derepressed under iron limitation.
- Functional redundancy: inactivation of SA alone or SB alone does not abolish iron acquisition, but combined loss of *sfa* and *sbn* produces a statistically significant reduction in colony recovery from organs of intravenously infected mice.
- Siderophore production also contributes to [[biofilm]] formation and staphylococcal abscess formation.

### Iron Regulatory Network

- **Fur** (ferric uptake regulator): master iron-responsive transcriptional repressor conserved in Gram-positive and Gram-negative bacteria. In iron-replete conditions, Fe(II)-Fur binds a consensus DNA sequence (Fur box) upstream of iron-regulated genes, repressing transcription. Under iron limitation, Fur loses Fe(II) and derepresses the entire iron acquisition regulon.
- Fur also indirectly regulates virulence factors: *isd* genes, siderophore operons, hemolysins, and the surface proteins contributing to [[metal-dependent-virulence]].

### Host Iron Restriction

- Transferrin sequesters free extracellular iron (binding constant ~10^22 M^-1).
- [[lactoferrin]] binds iron at mucosal surfaces and in neutrophil granules; retains iron even at low pH.
- **Hemopexin** binds free heme; **haptoglobin** binds free hemoglobin -- both limit iron/heme availability.
- **Lipocalin-2 (siderocalin/NGAL)**: neutrophil lipocalin that directly binds catechol-type siderophores, interfering with siderophore-mediated iron acquisition. However, *S. aureus* siderophores are polycarboxylate-type and **resist lipocalin-2 binding** -- a stealth strategy. This is notable because catecholamine hormones can enhance growth of siderophore-deficient *S. aureus*, suggesting catecholamines serve as an alternative iron source.

## Manganese Acquisition and Oxidative Stress Defense

### Manganese Transport

- *S. aureus* imports [[manganese]] via two systems:
  - **MntABC**: ABC-type transporter (MntA = solute-binding protein, MntB = permease, MntC = ATPase). Regulated by **MntR**, a manganese-responsive metalloregulatory protein related to the DtxR family.
  - **MntH**: NRAMP-type (Natural Resistance-Associated Macrophage Protein family) proton-coupled divalent cation transporter. Homologous to the host NRAMP1 protein but functions in reverse -- importing Mn(II) into the bacterial cytoplasm.
- Mutation of *mntABC* alone does not abolish growth, but combined disruption of *mntABC* and *mntH* shows a growth defect in metal-depleted media, indicating redundancy.

### Mn-Dependent Enzymes and [[oxidative-stress]] Defense

- **SodA** and **SodM**: two superoxide dismutases that require [[manganese]] as cofactor.
  - SodA is the primary Mn-SOD; SodM is a cambialistic SOD capable of using either Mn or Fe as cofactor.
  - Mn-SOD activity detoxifies superoxide radicals generated by neutrophils during the [[oxidative-stress]] burst, directly contributing to resistance to neutrophil killing and survival within abscesses.
  - Mutation of *sodA* and *sodM* results in decreased bacterial recovery from infected kidneys in murine systemic infection models.
- **Catalase (KatA)**: uses heme-iron but indirectly depends on manganese because Mn-SOD converts superoxide to H2O2, which catalase then degrades to water and oxygen.
- Manganese acquisition therefore contributes directly to the virulence of several other bacterial pathogens as well, including *Salmonella* Typhimurium, *Mycobacterium tuberculosis*, and *Bacillus anthracis*.

### [[calprotectin]]-Mediated Manganese Restriction

- [[calprotectin]] (S100A8/A9 heterodimer) is the most abundant host protein in staphylococcal tissue abscesses.
- Released by degranulating neutrophils, calprotectin binds both Mn(II) and Zn(II) at two distinct metal-binding sites, creating a metal-depleted microenvironment at the infection site.
- Calprotectin-treated *S. aureus* is more susceptible to killing by neutrophils because Mn limitation cripples SodA/SodM activity, leaving bacteria unable to detoxify superoxide.
- In calprotectin-deficient mice, *S. aureus* recovery from abscesses is no different from wild-type mice -- demonstrating calprotectin's non-redundant role in manganese sequestration at the infection site.
- NRAMP1 in macrophages exports Mn(II) and other divalent cations from the phagolysosome, further restricting intracellular manganese availability to engulfed pathogens.

## Zinc Acquisition and Homeostasis

### Zinc as a Nutritional Target

- [[zinc]] is essential for *S. aureus* as a cofactor for numerous enzymes and as a structural component of zinc-finger proteins (~5% of bacterial proteomes contain zinc-binding proteins).
- Host zinc deficiency increases susceptibility to staphylococcal infections; conversely, zinc supplementation in children reduces incidence of lower respiratory tract infections and acute diarrheal disease.
- [[calprotectin]] sequesters zinc alongside manganese in abscesses, creating a dual metal restriction that synergistically impairs staphylococcal survival.

### Zinc Transport Systems

- **AdcABC** (also known as ZnuABC in other species): primary high-affinity ABC-type zinc importer. AdcA is the extracellular solute-binding protein with high zinc affinity.
- **AdcAII**: a second zinc-binding lipoprotein that provides an alternative uptake route, ensuring zinc acquisition even when AdcA is saturated or sequestered.
- **Cnt system (staphylopine)**: *S. aureus* produces the broad-spectrum metallophore **staphylopine**, a nicotianamine-like molecule synthesized by CntKLM enzymes and exported by CntE. Staphylopine chelates zinc, [[nickel]], cobalt, and other transition metals extracellularly and is reimported as metal-staphylopine complexes via the **CntABCDF** transporter. This system is particularly important in [[calprotectin]]-rich abscess environments where free metal concentrations are extremely low.
- Zinc import is regulated by **Zur** (zinc uptake regulator), a Fur-family metalloregulatory protein. Under zinc-replete conditions, Zn-Zur represses zinc acquisition genes.

### Zinc Resistance

- **CzrAB**: a zinc-responsive efflux system. CzrA is a metalloregulatory sensor; CzrB is a cation diffusion facilitator (CDF) family exporter that pumps excess zinc out of the cell.
- Zinc resistance genes have been characterized on both chromosomal and plasmid elements, and **czr** operons are found alongside [[copper]] and cobalt resistance genes.
- The dual challenge of zinc limitation (by calprotectin) and zinc toxicity (by macrophage zinc mobilization into phagolysosomes) means *S. aureus* must simultaneously express import and export systems depending on the microenvironment.

## Copper: Exploiting Toxicity to Battle Pathogens

### Copper Toxicity in the Phagolysosome

- Unlike iron, manganese, and zinc (which hosts restrict), [[copper]] levels **increase** at infection sites. Macrophages actively import copper into phagolysosomes via the CTR1 and ATP7A transporters to kill engulfed bacteria.
- Copper toxicity mechanisms include: Fenton-like generation of hydroxyl radicals, [[oxidative-stress]] induction, protein misfolding (mismetallation of iron-sulfur clusters), and membrane damage.
- *S. aureus* strains that are more sensitive to copper (KatA and AhpC mutants) are more susceptible to copper-mediated killing, confirming that copper toxicity acts partly through reactive oxygen species.

### Copper Resistance in *S. aureus*

- **CopA**: a P-type ATPase copper efflux pump. Induced by copper exposure and regulated by the copper-sensitive operon repressor **CsoR**.
- **CopZ**: a copper metallochaperone that binds Cu(I) in the cytoplasm and delivers it to CopA for export. Predicted to prevent inappropriate copper binding to cytoplasmic proteins ([[mis-metallation]]).
- The *copAZ* operon is essential for copper homeostasis; *copA* mutants show increased intracellular copper accumulation and are attenuated in vivo.
- Copper-coated surfaces have been shown to rapidly kill MRSA, supporting development of copper-containing antimicrobial materials for hospital environments.

## Nickel and Cobalt

- [[nickel]] acquisition by *S. aureus* is mediated primarily through the **staphylopine** metallophore system (Cnt), which chelates nickel alongside zinc and cobalt.
- Nickel is required as cofactor for **urease**, which is important for *S. aureus* skin survival (human sweat contains ~22 mM urea) and kidney colonization.
- Cobalt transport overlaps with nickel and zinc pathways; the CzrAB efflux system also provides resistance to excess cobalt.

## The Nutritional Immunity Arms Race

### Host Metal-Sequestering Arsenal

| Host Factor | Metal(s) Restricted | Mechanism |
|---|---|---|
| Transferrin | Fe(III) | High-affinity extracellular iron binding |
| [[lactoferrin]] | Fe(III) | Iron binding at mucosal surfaces; retains iron at low pH |
| Hemopexin | Heme-Fe | Binds free heme in plasma |
| Haptoglobin | Hb-Fe | Binds free hemoglobin |
| Lipocalin-2 (NGAL) | Fe (via siderophores) | Sequesters catechol-type siderophores (ineffective against SA/SB) |
| [[calprotectin]] (S100A8/A9) | Mn(II), Zn(II), Ni(II) | Released by neutrophils in abscesses; dominant metal restriction at infection sites |
| NRAMP1 (SLC11A1) | Mn(II), Fe(II), Ni(II) | Macrophage phagolysosomal metal export |
| ATP7A / CTR1 | Cu(I) import into phagosome | Copper weaponization against engulfed bacteria |

### *S. aureus* Counter-Strategies

- **Heme piracy** (Isd system): bypasses transferrin/lactoferrin by extracting iron directly from hemoglobin.
- **Stealth siderophores**: staphyloferrin A and B are polycarboxylate-type, evading lipocalin-2 binding.
- **Staphylopine metallophore**: broad-spectrum chelator that competes with [[calprotectin]] for Mn, Zn, Ni in abscess environments.
- **Redundant transport systems**: multiple parallel importers for each metal ensure continued acquisition even when one system is blocked.
- **Copper export** (CopAZ): rapid efflux prevents copper poisoning in the phagolysosome.
- **Hemolysins and leukocidins**: lyse host cells to release intracellular metal stores and simultaneously destroy the immune cells deploying nutritional immunity.

## Clinical Implications

### MRSA and Metal-Antibiotic Co-Resistance

- Methicillin-resistant *S. aureus* (MRSA) strains frequently carry **metal resistance genes on the same mobile genetic elements** (SCCmec cassettes, plasmids, transposons) as antibiotic resistance determinants.
- Environmental metal exposure in hospitals (copper surfaces, zinc-containing antiseptics) and agriculture (zinc/copper feed supplements) can **co-select** for antibiotic resistance, complicating infection control strategies.
- Community-acquired MRSA (CA-MRSA) strains show enhanced metal acquisition capability, contributing to their ability to cause disease in otherwise healthy individuals.

### Therapeutic Opportunities

- IsdB vaccination explored as anti-staphylococcal strategy (Phase I trial completed); targets heme acquisition to starve bacteria of iron.
- Anti-IsdB and anti-Hla monoclonal antibodies show promise as passive immunization approaches.
- Copper-coated hospital surfaces reduce MRSA environmental contamination.
- Targeting metal acquisition systems (siderophore biosynthesis, Isd pathway) could yield novel [[pathogen-metal-acquisition]]-directed therapeutics that avoid the resistance problems of conventional antibiotics.
- Imaging mass spectrometry (IMS and LA-ICPMS) has revealed that mature staphylococcal abscesses are essentially devoid of manganese and zinc, confirming the biological relevance of calprotectin-mediated metal restriction in vivo.

## Connections

- [[staphylococcus-aureus]] -- the central organism; review covers its complete metal acquisition toolkit
- [[iron]] -- the most extensively studied nutritional immunity target; Isd heme uptake and siderophore systems
- [[zinc]] -- AdcABC/AdcAII import, Cnt/staphylopine scavenging, CzrAB efflux
- [[manganese]] -- MntABC/MntH import, SodA/SodM superoxide dismutase metalation
- [[copper]] -- CopAZ efflux, phagolysosomal copper toxicity
- [[nickel]] -- staphylopine-mediated acquisition, urease cofactor
- [[nutritional-immunity]] -- the central host defense concept; extends beyond iron to Mn/Zn/Cu
- [[calprotectin]] -- dominant metal-sequestering protein at infection sites; restricts Mn and Zn
- [[lactoferrin]] -- mucosal iron restriction
- [[siderophores-metallophores]] -- staphyloferrin A/B (siderophores) and staphylopine (metallophore)
- [[pathogen-metal-acquisition]] -- general framework for understanding bacterial metal theft
- [[metal-dependent-virulence]] -- Mn-SOD, heme-dependent catalase, zinc-dependent enzymes all required for full virulence
- [[oxidative-stress]] -- Mn-SOD/catalase defense against neutrophil oxidative burst; copper Fenton chemistry
- [[biofilm]] -- siderophore and metal acquisition contribute to biofilm formation on medical devices
