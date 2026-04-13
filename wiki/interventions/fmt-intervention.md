---
title: "Fecal Microbiota Transplantation (FMT)"
type: intervention
created: 2026-04-09
updated: 2026-04-09
sources: []
tags: [biophysical, microbiome-reset, FMT, SCFA-restoration, barrier-repair, evidence-based]
intervention_class: biophysical
cureva_status: partial
last_substantive_update: 2026-04-13
karen_brain_primitives: [5, 8, 9]

triangles:
  - condition: "[[clostridioides-difficile-infection]]"
    I_to_f: "FMT restores colonization resistance by reintroducing a diverse anaerobic community that competes with C. difficile for nutrients (especially bile acid metabolism) and ecological niches. Donor microbiota converts primary bile acids to secondary bile acids that inhibit C. difficile germination."
    I_to_f_evidence: "strong"
    I_to_f_sources: []
    I_to_D: "FMT achieves 80-95% cure rate for recurrent C. difficile infection across multiple RCTs and systematic reviews. FDA-approved for recurrent CDI (Rebyota, Vowst). Gold standard indication."
    I_to_D_evidence: "RCT"
    I_to_D_sources: []
    f_to_D: "Recurrent CDI is defined by loss of colonization resistance — depleted Firmicutes, absent secondary bile acid production, loss of SCFA-producing anaerobes. FMT directly reverses this ecological collapse."
    f_to_D_sources: []
    status: validated

  - condition: "[[ulcerative-colitis]]"
    I_to_f: "FMT increases microbial diversity, restores SCFA-producing taxa (Faecalibacterium, Roseburia), and reduces mucosal-adherent pathobionts. Restores butyrate production for colonocyte energy and barrier integrity."
    I_to_f_evidence: "moderate"
    I_to_f_sources: []
    I_to_D: "Multiple RCTs show FMT induces clinical remission in 24-32% of UC patients vs 5-9% placebo. Pooled NNT ~5. Multi-donor and intensive protocols show higher response rates. Donor selection critically affects outcomes."
    I_to_D_evidence: "RCT"
    I_to_D_sources: []
    f_to_D: "UC microbiome shows reduced diversity, depleted Firmicutes, and decreased SCFA production. Butyrate deficiency impairs colonocyte metabolism and barrier function, perpetuating mucosal inflammation."
    f_to_D_sources: []
    status: validated

  - condition: "[[parkinsons-disease]]"
    I_to_f: "FMT may restore gut barrier integrity and reduce alpha-synuclein aggregation triggered by dysbiotic LPS exposure. Restores SCFA production that modulates enteric nervous system function and microglial activation via the gut-brain axis."
    I_to_f_evidence: "preliminary"
    I_to_f_sources: []
    I_to_D: "Pilot RCTs show improvement in constipation (the most common non-motor PD symptom) and preliminary signals for motor symptom improvement. Engraftment correlates with clinical response. Larger RCTs underway."
    I_to_D_evidence: "quasi-experimental"
    I_to_D_sources: []
    f_to_D: "PD patients show depleted SCFA-producing bacteria, enriched Enterobacteriaceae, increased intestinal permeability, and enteric alpha-synuclein deposits years before motor onset. The gut-brain axis is central to PD pathogenesis."
    f_to_D_sources: []
    status: promising

  - condition: "[[hypertension]]"
    I_to_f: "FMT from normotensive donors may restore SCFA-producing taxa that modulate renin-angiotensin signaling, vascular tone (via GPR41/43 receptors), and renal sodium handling."
    I_to_f_evidence: "preliminary"
    I_to_f_sources: []
    I_to_D: "Fan et al. 2025 published the first RCT of FMT for hypertension, demonstrating significant blood pressure reduction in treatment-resistant hypertensive patients. Single study — replication needed."
    I_to_D_evidence: "RCT"
    I_to_D_sources: []
    f_to_D: "Hypertensive patients show decreased microbial diversity, reduced SCFA producers, and increased Prevotella/Klebsiella. Germ-free mice receiving hypertensive donor microbiota develop elevated BP."
    f_to_D_sources: []
    status: promising

  - condition: "[[autism-spectrum-disorder]]"
    I_to_f: "FMT restores microbial diversity and SCFA production in the characteristically depleted ASD gut microbiome. May reduce 4-ethylphenylsulfate and other microbial metabolites implicated in ASD behavioral symptoms."
    I_to_f_evidence: "moderate"
    I_to_f_sources: []
    I_to_D: "Open-label MTT (Microbiota Transfer Therapy) in 18 ASD children showed 45% reduction in GI symptoms and 20-25% improvement in behavioral scores, sustained at 2-year follow-up. No RCTs yet."
    I_to_D_evidence: "case-series"
    I_to_D_sources: []
    f_to_D: "ASD children show reduced Prevotella, Bifidobacterium, and overall diversity. Microbial metabolites (p-cresol, 4EPS) cross the blood-brain barrier and modulate GABAergic and serotonergic signaling."
    f_to_D_sources: []
    status: promising

  - condition: "[[schizophrenia]]"
    I_to_f: "FMT may modulate the gut-brain axis via SCFA restoration, tryptophan metabolism normalization, and reduction of systemic inflammatory cytokines that cross the blood-brain barrier."
    I_to_f_evidence: "preliminary"
    I_to_f_sources: []
    I_to_D: "Preclinical evidence only. Germ-free mice colonized with schizophrenia-patient microbiota develop behavioral abnormalities. No human FMT trials published for schizophrenia to date."
    I_to_D_evidence: "animal-model"
    I_to_D_sources: []
    f_to_D: "Schizophrenia patients show altered gut microbiome composition, elevated intestinal permeability markers, and dysregulated tryptophan/kynurenine metabolism. The gut-brain-immune axis is implicated in psychosis."
    f_to_D_sources: []
    status: in-progress

targets:
  taxa: [clostridioides-difficile, enterobacteriaceae, faecalibacterium-prausnitzii, roseburia-spp, bifidobacterium-spp]
  enzymes: [bile-salt-hydrolase, butyrate-kinase]
  metals: []
  ecological: [restores-colonization-resistance, restores-SCFA-production, repairs-barrier-integrity, restores-bile-acid-metabolism, increases-microbial-diversity]
platform: cureva
---

## Overview

**Fecal microbiota transplantation (FMT)** transfers a complete microbial community from a healthy screened donor to a recipient, aiming to restore microbial diversity, colonization resistance, and metabolic function. It represents the most direct form of microbiome intervention — a wholesale ecological reset rather than incremental modulation.

> **Clinical disclaimer:** FMT carries risks of pathogen transmission (including multidrug-resistant organisms and viruses), variable engraftment, and unknown long-term consequences. Currently FDA-approved only for recurrent C. difficile infection. All other indications are investigational.

---

## Mechanism of Action

FMT operates through **ecological restoration** rather than single-target pharmacology:

1. **Colonization resistance**: Donor anaerobes compete with pathogens for nutrients and attachment sites, re-establishing the competitive exclusion that antibiotics destroyed
2. **SCFA restoration**: Reintroduced Firmicutes (Faecalibacterium, Roseburia, Eubacterium) produce butyrate, propionate, and acetate — fueling colonocytes, maintaining barrier integrity, and modulating immune tolerance
3. **Bile acid metabolism**: Donor bacteria expressing bile salt hydrolase convert primary bile acids to secondary forms (deoxycholic, lithocholic acid) that inhibit C. difficile spore germination
4. **Barrier repair**: SCFA-driven colonocyte nutrition restores tight junction integrity, reducing translocation of LPS and microbial metabolites
5. **Immune retraining**: Diverse microbial antigens re-educate mucosal immune responses toward tolerance (Treg induction) rather than chronic inflammation

---

## Protocols and Administration

| Parameter | Options | Notes |
|-----------|---------|-------|
| **Delivery route** | Colonoscopy, nasogastric tube, capsule (oral) | Colonoscopy has highest single-dose efficacy for CDI; capsules improving |
| **Donor screening** | Stool + blood panel (MDRO, HIV, HBV, HCV, parasites, C. diff) | Universal donor programs (stool banks) standardize screening |
| **Donor selection** | "Super-donors" with high diversity and SCFA production | Donor effects explain much of the outcome variance in UC trials |
| **Dosing frequency** | Single infusion (CDI) vs multi-session (UC, 5-40 infusions) | UC and other chronic conditions may require intensive protocols |
| **FDA-approved products** | Rebyota (rectal), Vowst (oral capsules) | For recurrent CDI only; standardized manufactured products |

---

## Monitoring

- **Engraftment**: 16S rRNA or metagenomic sequencing at baseline, 1 month, 3 months to assess donor microbiota colonization
- **Clinical response**: Condition-specific outcome measures (CDI recurrence, UC Mayo score, PD UPDRS)
- **Adverse events**: Monitor for fever, abdominal pain, bacteremia, new infections for 30 days post-FMT
- **Long-term**: Metabolic and autoimmune screening annually (unknown long-term donor microbiota effects on recipient metabolism)

---

## Contraindications and Risks

- **Immunocompromised patients**: Risk of bacteremia and invasive infections. Absolute contraindication in severe immunosuppression (neutropenia, uncontrolled HIV).
- **Pathogen transmission**: Cases of ESBL-producing E. coli bacteremia (including one death) prompted enhanced donor screening requirements.
- **Unknown long-term effects**: Donor microbiota may transmit metabolic phenotypes (obesity, autoimmune risk). Long-term registry data still accumulating.
- **Regulatory status**: Investigational for all indications except recurrent CDI. IRB approval required for research use in other conditions.
- **Antibiotic exposure**: Recent broad-spectrum antibiotics in the recipient reduce engraftment. Vancomycin taper-then-FMT protocol for CDI optimizes niche availability.

---

## Connections

**Entities:** [[clostridioides-difficile]], [[faecalibacterium-prausnitzii]], [[roseburia-spp]]

**Concepts:** [[colonization-resistance]], [[SCFA-production]], [[barrier-integrity]], [[gut-brain-axis]], [[bile-acid-metabolism]]

**Related interventions:** [[probiotics-general]] (incremental vs wholesale microbiome modulation), [[mediterranean-diet]] (dietary SCFA promotion)

**Signatures:** [[clostridioides-difficile-infection]], [[ulcerative-colitis]], [[parkinsons-disease]], [[autism-spectrum-disorder]], [[hypertension]]
