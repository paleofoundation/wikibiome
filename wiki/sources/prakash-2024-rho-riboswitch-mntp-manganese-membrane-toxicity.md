---
title: "Prakash 2024 — Rho and Riboswitch-Dependent Regulations of mntP Gene Expression Evade Manganese and Membrane Toxicities"
type: source
created: 2026-04-09
updated: 2026-04-09
authors: [Anand Prakash, Arunima Kalita, Kanika Bhardwaj, Rajesh Kumar Mishra, Debarghya Ghose, Gursharan Kaur, Neha Verma, Bibhusita Pani, Evgeny Nudler, Dipak Dutta]
year: 2024
journal: "Journal of Biological Chemistry"
doi: "10.1016/j.jbc.2024.108043"
tags: [mismetallation, metal-homeostasis, manganese, manganese-toxicity, MntP, riboswitch, Rho-termination, yybP-ykoY, membrane-protein-toxicity, ROS, cell-filamentation, Escherichia-coli, gene-regulation, MntR, Fur]
library_category: metal_homeostasis_bacteria
platform: wikibiome
condition: "manganese efflux regulation"
evidence_level: in-vitro
metals_discussed: [iron, manganese]
taxa_discussed: [escherichia-coli]
karen_brain_primitives: [3, 4]
key_findings: ["Rho-dependent transcription termination", "Excess Mn activates the riboswitch"]
---

# Why This Paper Matters

This paper reveals an elegant dual regulatory mechanism controlling manganese efflux in E. coli: the mntP manganese exporter is regulated by BOTH a Mn-dependent riboswitch (yybP-ykoY family) in its 5'-UTR AND Rho-dependent transcription termination at the same region. The key insight for the wiki's [[mis-metallation]] framework is that **uncontrolled overexpression of the MntP membrane protein is itself toxic** -- causing slow growth, cell filamentation, and ROS production. This means bacteria face a double-edged sword: too little MntP allows Mn accumulation and mis-metallation, but too much MntP causes membrane protein toxicity. Rho-dependent termination acts as a safety valve to prevent MntP overexpression while the riboswitch allows Mn-responsive activation when needed.

# Key Claims

- **MntP** is the primary Mn efflux pump in E. coli; its deletion makes cells highly Mn-sensitive
- The mntP 5'-UTR contains a **229-nucleotide yybP-ykoY riboswitch** that senses Mn2+ and switches between "off" (RBS occluded) and "on" (RBS accessible) conformations
- **Rho-dependent transcription termination** efficiently terminates mntP transcription at the riboswitch region, limiting baseline expression
- **Excess Mn activates the riboswitch**, which partially suppresses Rho-dependent termination by restoring coupling between transcription and translation
- **Deletion of the riboswitch** (delta-RS strains) paradoxically renders E. coli **Mn-sensitive** rather than Mn-resistant -- because without the riboswitch, Rho termination is abolished, leading to **uncontrolled MntP overexpression**
- **Excessive MntP expression** causes: slow growth, cell filamentation, and reactive oxygen species (ROS) production -- classic symptoms of membrane protein overexpression toxicity
- Free Mn does **NOT directly influence Rho's termination function** -- Mn and Rho operate independently on the mntP transcript
- Multiple regulators control MntP: MntR (primary Mn sensor), Fur (iron regulator), riboswitch (Mn-sensing RNA), and Rho termination
- Inhibition of Rho by bicyclomycin (BCM) causes ~20-fold upregulation of mntP ORF expression

# Methods & Findings

## Rho-Dependent Termination
- BCM (Rho inhibitor) treatment: 20-fold increase in mntP transcript by RT-PCR
- In vitro transcription assays: Rho generates premature termination products at the 5'-UTR and early ORF regions
- Streptavidin bead fractionation: Rho-terminated products released to supernatant; without Rho, full-length transcripts remained template-bound
- NusG enhances Rho termination at the mntP locus

## Riboswitch-Rho Interplay
- Reporter constructs with T7A1 promoter + 5'-UTR + mntP ORF fused to lacZ or YFP
- Mn shock (8 mM): 9-fold increase in beta-gal activity, 16-fold increase in YFP fluorescence
- BCM treatment: 23-28-fold increase in reporter activity (comparable to riboswitch activation)
- Combined BCM + Mn: 25-30-fold increase -- suggesting riboswitch activation partially overcomes Rho termination
- Construct 3 (truncated riboswitch, +20 to +439): Mn had no effect on reporter, confirming first 19 nt essential for riboswitch formation

## Membrane Protein Toxicity
- delta-RS strains (riboswitch deleted): Mn-sensitive, matching delta-mntP phenotype in growth assays
- Spot assays on Mn-supplemented agar: delta-RS colonies reduced at 2-3 mM MnCl2
- Confocal microscopy: delta-RS cells show filamentation
- Flow cytometry: delta-RS cells produce elevated ROS
- These phenotypes match known membrane protein overexpression toxicity

# Connections

- [[mis-metallation]] -- MntP regulation prevents both Mn-dependent mis-metallation (from underexpression) and membrane toxicity (from overexpression)
- [[manganese]] -- MntP as primary Mn efflux pump with complex multi-layered regulation
- [[metal-homeostasis]] -- riboswitch + Rho termination as dual regulatory layers
- [[gene-regulation|riboswitch]] -- yybP-ykoY Mn-sensing riboswitch controlling translation initiation
- [[metal-sensing]] -- MntR, Fur, and riboswitch as three independent Mn-sensing mechanisms
- [[oxidative-stress]] -- ROS from membrane protein overexpression toxicity
- [[iron]] -- Fur regulation of MntP links iron and manganese homeostasis
- [[gene-regulation]] -- Rho-dependent termination as safety valve for membrane protein expression
