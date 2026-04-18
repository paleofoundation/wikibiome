---
title: "Probiotics (General)"
type: intervention
created: 2026-04-09
updated: 2026-04-09
last_substantive_update: 2026-04-09
sources: []
tags: [probiotic, strain-specific, gut-microbiome, immunomodulation, evidence-based]
intervention_class: probiotic
cureva_status: partial
karen_brain_primitives: [5, 8]

triangles:
  - condition: "[[ulcerative-colitis]]"
    I_to_f: "Multi-strain probiotics (VSL#3: 8 strains including L. plantarum, B. breve, S. thermophilus) restore butyrate production, compete with pathobionts for niche space, and modulate Th17/Treg balance. E. coli Nissle 1917 produces microcins against pathogenic E. coli."
    I_to_f_evidence: "strong"
    I_to_D: "VSL#3 maintains remission in UC with efficacy comparable to mesalazine in RCTs. E. coli Nissle 1917 is as effective as mesalazine for maintaining remission (Kruis et al.). Strongest probiotic evidence of any IBD subtype."
    I_to_D_evidence: "RCT"
    f_to_D: "UC shows profound butyrate producer depletion (F. prausnitzii, Roseburia) and pathobiont enrichment. Butyrate is the primary colonocyte fuel; its depletion creates an energy crisis driving mucosal inflammation."
    status: validated

  - condition: "[[ibs]]"
    I_to_f: "Specific strains modulate visceral hypersensitivity (B. infantis 35624), restore serotonin metabolism (L. rhamnosus GG), and reduce mast cell activation. Multi-strain formulations improve microbial diversity."
    I_to_f_evidence: "moderate"
    I_to_D: "B. infantis 35624 reduces global IBS symptoms, abdominal pain, and bloating in RCTs. L. rhamnosus GG improves IBS-D symptoms. Multi-strain probiotics (e.g., Bio-Kult) show benefit in meta-analyses, though effect sizes are modest."
    I_to_D_evidence: "RCT"
    f_to_D: "IBS microbiome shows reduced Lactobacillus, Bifidobacterium, and F. prausnitzii with enrichment of Firmicutes/Bacteroidetes ratio imbalance. Dysbiosis correlates with symptom severity."
    status: validated

  - condition: "[[multiple-sclerosis]]"
    I_to_f: "Multi-strain probiotics restore butyrate production (suppresses Th17, induces Treg), produce AhR ligands (indole derivatives activating astrocyte anti-inflammatory programs), and strengthen the intestinal barrier to reduce microbial translocation."
    I_to_f_evidence: "moderate"
    I_to_D: "RCTs show multi-strain formulations improve EDSS scores, reduce inflammatory markers (CRP, IL-6), and modulate gene expression in PBMCs. Strongest probiotic evidence among neurological diseases."
    I_to_D_evidence: "RCT"
    f_to_D: "MS microbiome shows depleted SCFA producers and enriched pro-inflammatory taxa. Butyrate depletion and AhR ligand deficiency contribute to Th17-driven neuroinflammation."
    status: promising

  - condition: "[[depression]]"
    I_to_f: "Psychobiotics (L. helveticus R0052, B. longum R0175) modulate the gut-brain axis via GABA production, tryptophan metabolism, and vagal afferent signaling. Reduce cortisol and inflammatory cytokines."
    I_to_f_evidence: "moderate"
    I_to_D: "Meta-analyses show modest but significant antidepressant effect of specific probiotic strains. L. helveticus + B. longum combination reduces depression and anxiety scores. Effects stronger in clinical depression than healthy volunteers."
    I_to_D_evidence: "RCT"
    f_to_D: "Depression microbiome shows depleted Coprococcus and Faecalibacterium with reduced DOPAC and butyrate synthesis capacity. Gut-brain axis disruption mediates peripheral-to-central inflammation."
    status: promising

targets:
  taxa: [lactobacillus, bifidobacterium, streptococcus-thermophilus, faecalibacterium-prausnitzii, escherichia-coli]
  enzymes: []
  metals: []
  ecological: [niche-competition, butyrate-restoration, barrier-integrity, immune-modulation, AhR-ligand-production]
platform: cureva
---

> **Research summary — not medical advice.** This page synthesizes published research on a mechanism-level intervention. It is not a clinical recommendation. Consult a qualified healthcare provider before making any changes to diet, supplementation, or treatment.

## Overview

**Probiotics** are live microorganisms that, when administered in adequate amounts, confer a health benefit on the host. The critical principle in probiotic medicine is **strain specificity** -- benefits demonstrated for one strain do NOT transfer to other strains, even within the same species. *Lactobacillus rhamnosus* GG and *Lactobacillus rhamnosus* ATCC 7469 are as different therapeutically as aspirin and acetaminophen.

> **Clinical disclaimer:** Probiotic selection must be strain-specific and condition-matched. "Take a probiotic" is not a medical recommendation. Immunocompromised patients (transplant, chemotherapy, advanced HIV) face risk of bacteremia/fungemia from live organisms. Probiotic quality varies enormously between manufacturers; third-party-verified products are preferred. All probiotic decisions should involve clinical supervision.

---

## Strain-Specific Evidence Table

| Strain | Condition | Evidence Level | Key Findings |
|--------|-----------|---------------|--------------|
| *B. infantis* 35624 | [[ibs]] | RCT (validated) | Reduces global symptoms, pain, bloating; normalizes IL-10/IL-12 ratio |
| *L. rhamnosus* GG (LGG) | [[ibs]]-D, antibiotic-associated diarrhea | RCT (validated) | Reduces IBS-D symptoms; prevents AAD in children and adults |
| *E. coli* Nissle 1917 | [[ulcerative-colitis]] | RCT (validated) | Maintains remission; efficacy equivalent to mesalazine |
| VSL#3 (8-strain) | [[ulcerative-colitis]], pouchitis | RCT (validated) | Maintains remission; prevents pouchitis recurrence |
| *L. helveticus* R0052 + *B. longum* R0175 | [[depression]] | RCT (promising) | Reduces depression/anxiety scores; lowers cortisol |
| *L. plantarum* PS128 | [[autism-spectrum-disorder]] | RCT (promising) | Improves opposition/defiance behaviors; modulates dopamine |
| Multi-strain (various) | [[multiple-sclerosis]] | RCT (promising) | Improves EDSS; reduces CRP and IL-6; modulates PBMC gene expression |
| *L. reuteri* DSM 17938 | Infant colic, functional GI | RCT (validated) | Reduces crying time; well-studied safety in infants |
| *S. boulardii* CNCM I-745 | *C. difficile* recurrence | RCT (validated) | Reduces CDI recurrence as adjunct to antibiotics |
| *B. coagulans* GBI-30, 6086 | [[ibs]], abdominal pain | RCT (promising) | Reduces abdominal pain and bloating |

---

## The Dual Functionality Requirement

Effective probiotic strains must satisfy two functional requirements simultaneously:

1. **Ecological function**: The strain must survive transit, engraft (even transiently), and modify the gut ecosystem -- competing with pathobionts for niche space, producing SCFAs, strengthening the barrier, or producing antimicrobial compounds.

2. **Immunological function**: The strain must interact with the mucosal immune system to modulate the Th1/Th2/Th17/Treg balance, reduce inflammatory cytokines, or activate tolerogenic pathways (e.g., AhR ligand production, butyrate-mediated HDAC inhibition).

Strains that only survive transit without immune engagement, or that modulate immunity without ecological persistence, show weaker clinical effects. The strongest-evidence strains (VSL#3, E. coli Nissle 1917, B. infantis 35624) demonstrably satisfy both requirements.

---

## Metal Sponge Caveat

Many probiotic organisms bind and sequester heavy metals in the gut lumen -- a property sometimes marketed as "detoxification." This has important implications:

- **Benefit**: Lactobacillus and Bifidobacterium strains can bind [[lead]], [[cadmium]], [[mercury]], and [[arsenic]], reducing intestinal absorption (demonstrated in animal models and limited human trials)
- **Risk**: Metal-binding probiotics may also sequester essential metals ([[zinc]], [[iron]], [[selenium]]), potentially worsening nutritional deficiencies in already-depleted patients
- **Clinical implication**: When using probiotics in patients with both toxic metal exposure AND essential metal deficiency, separate probiotic dosing from essential metal supplementation by 2+ hours
- **Research gap**: No RCTs have systematically evaluated the impact of probiotic metal sequestration on essential mineral status in deficient populations

---

## Dosage and Administration

- **CFU range**: Most evidence supports 1-50 billion CFU/day, strain-dependent
- **Timing**: Generally with or shortly before meals (bile acid exposure varies by strain)
- **Duration**: Minimum 4-8 weeks for clinical assessment; effects often wane after discontinuation
- **Form**: Refrigerated capsules or sachets generally preferred; some spore-forming strains (B. coagulans) are shelf-stable
- **Quality**: Third-party verification (USP, NSF, ConsumerLab) recommended; label claims frequently inaccurate

---

## Contraindications and Risks

- **Immunocompromised patients**: Risk of bacteremia (Lactobacillus), fungemia (Saccharomyces), or endocarditis; probiotics should be used with extreme caution or avoided
- **Short bowel syndrome**: Increased risk of D-lactic acidosis from Lactobacillus overgrowth
- **Central venous catheters**: Saccharomyces boulardii can contaminate lines and cause fungemia
- **Critically ill patients**: PROPATRIA trial showed increased mortality with probiotics in severe acute pancreatitis
- **SIBO**: Some patients with small intestinal bacterial overgrowth may worsen with additional live organisms

---

## Connections

**Entities:** [[lactobacillus]], [[bifidobacterium]], [[streptococcus-thermophilus]], [[faecalibacterium-prausnitzii]], [[escherichia-coli]]

**Concepts:** [[dysbiosis]], [[gut-microbiome]], [[immune-balance]], [[gut-brain-axis]], [[short-chain-fatty-acids]], [[indoles]]

**Related interventions:** [[ecoli-nissle-1917]] (specific strain page), probiotics asd dysbiosis (ASD-specific), [[fmt-intervention]] (related live biotherapeutic), [[vitamin-d-supplementation]] (synergistic in PCOS), [[prebiotics]] (synergistic with probiotics as synbiotics)

**Signatures:** [[ulcerative-colitis]], [[ibs]], [[multiple-sclerosis]], [[depression]], [[autism-spectrum-disorder]]


---

> **Educational content, not medical advice.** This page describes mechanisms by which the intervention interacts with the microbiome and metal ecology. It is not a treatment recommendation. Clinical decisions about any intervention should be made with a qualified healthcare practitioner who knows your individual history.
