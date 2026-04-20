---
title: "Asangba 2023 — Diagnostic and prognostic potential of the microbiome in ovarian cancer treatment response"
type: source
created: 2026-04-14
updated: 2026-04-14
authors: [Asangba AE, Chen J, Goergen KM, Larson MC, Oberg AL, Casarin J, Multinu F, Kaufmann SH, Mariani A, Chia N, Walther-Antonio MRS]
corresponding_author: "Abigail E. Asangba"
corresponding_email: "asangba.abigail@mayo.edu"
institution: "Mayo Clinic, Rochester, MN"
year: 2023
journal: "Scientific Reports"
doi: "10.1038/s41598-023-27555-x"
evidence_level: case-control
sample_size: "n=64 women (34 ovarian cancer, 30 benign gynecologic controls)"
tags: [ovarian-cancer, microbiome, 16S-rRNA, multi-site-sampling, stage-grade-histology, treatment-response, mayo-clinic, Dialister, Corynebacterium, Prevotella, Peptoniphilus]
library_category: causal
platform: both
condition: "ovarian cancer"
karen_brain_primitives: [1, 4]
metals_discussed: [iron, zinc]
taxa_discussed: [dialister, corynebacterium, prevotella, peptoniphilus, lactobacillus-iners, lactobacillus-crispatus, porphyromonas, fusobacterium-nucleatum, bacteroides-fragilis, ezakiella, streptococcus, fenollaria, facklamia, anaeroglobus, ruminococcus, mobiluncus, dialister-propionicifaciens, microbacterium-lacus, methyloruburm, corynebacterium-tuberculostearicum, achromobacter, atopobium, actinomyces-turicensis, escherichia-coli, faecalibacterium-prausnitzii]
key_findings:
  - "Ovarian cancer cohort had significantly higher alpha-diversity in the lower reproductive tract vs. benign controls (unweighted UniFrac p=0.049, Observed ASVs p=0.049); beta-diversity significantly differed across multiple body sites"
  - "Enrichment of several pathogenic taxa in the OC cohort (Dialister, Corynebacterium, Prevotella, Peptoniphilus) with depletion of Microbacterium lacus; advanced-stage and high-grade disease showed further accumulation of pathobionts"
  - "Microbiome composition correlated with treatment response — patients with adverse events at 2 and 4 years post-diagnosis showed significantly different diversity in uterus, LRT, and omentum, supporting diagnostic and prognostic utility"
---

# Asangba 2023 — Diagnostic and prognostic potential of the microbiome in ovarian cancer treatment response

**Citation:** Asangba AE, Chen J, Goergen KM, Larson MC, Oberg AL, Casarin J, Multinu F, Kaufmann SH, Mariani A, Chia N, Walther-Antonio MRS. *Diagnostic and prognostic potential of the microbiome in ovarian cancer treatment response.* Scientific Reports. 2023;13:730. DOI: [10.1038/s41598-023-27555-x](https://doi.org/10.1038/s41598-023-27555-x)

## Key Findings

- **Distinct OC-associated microbiome across multiple body sites.** Samples collected from vagina, cervix, uterus, Fallopian tubes, ovaries, ascites/peritoneal fluid, urine, omentum, and stool (n=64; 34 OC, 30 benign). The OC cohort showed significantly higher alpha-diversity in the lower reproductive tract (unweighted UniFrac p=0.049, Observed ASVs p=0.049). Beta-diversity significantly differed in uterus, Fallopian tubes, ovaries, and ascites/peritoneal fluid (case-control, evidence level).
- **Pathogen enrichment spans body sites.** **Dialister**, **Corynebacterium**, **Prevotella**, and **Peptoniphilus** were enriched in the OC cohort across multiple sites. **Microbacterium lacus** was notably depleted in OC ovaries. Enriched taxa in advanced stage included Peptoniphilus koenoeneniae, Facklamia hominis, Ruminococcus faecis, Fenollaria massiliensis (LRT), Anaeroglobus geminatus, Dialister propionicifaciens (urine).
- **Pathobionts accumulate with stage and grade.** High-grade OC LRT microbiomes showed enrichment of Streptococcus infantis, Fusobacterium nucleatum, Varibaculum cambriense, Escherichia coli, Faecalibacterium prausnitzii, and Bacteroides fragilis compared to low-grade.
- **Microbiome predicts treatment response.** Patients experiencing adverse events at 2 and 4 years post-diagnosis showed significantly different alpha- and beta-diversity in uterus, LRT, and omentum. Enriched taxa in adverse-event patients included Lactobacillus gasseri, Dialister invisus, Blautia pseudococcoides, Veillonella nakazawae, Bacteroides ovatus, Butyricicoccus faecihominis, Sutterella wadsworthensis. Prevotella bucalis was depleted in deceased patients.
- **Serous histology drives unique signal.** Serous OC (82.4% of cases) showed distinct LRT microbiome vs. other histologies, with enrichment of Facklamia hominis, Anaerococcus senegalensis, Lactobacillus iners, and Actinomyces turicensis.

## Methods

Prospective case-control at Mayo Clinic (2013 IRB). 64 women undergoing hysterectomy — 34 OC (94.1% malignant, 82.4% high-grade serous, 52.9% stage III), 30 benign gynecologic controls. V3–V5 16S rRNA Illumina sequencing on 751 samples collected across 9 body sites. Decontamination via filtering, adjustment for menopause/BMI, α- and β-diversity via UniFrac, Bray–Curtis; differential abundance via DESeq2 with FDR<0.10.

## Relevance to WikiBiome

- **[[ovarian-cancer]]** entity page — document that the OC signature is not limited to the upper reproductive tract; pathobiont enrichment spans vagina through stool. Add Dialister, Peptoniphilus, Facklamia hominis, Anaeroglobus geminatus as OC-enriched taxa.
- **[[bacteroides-fragilis]]**, **[[fusobacterium-nucleatum]]**, **[[escherichia-coli]]** — enriched in high-grade OC LRT. Reinforces the cross-condition pattern (shared with CRC, endometriosis, breast cancer).
- **[[lactobacillus-iners]]** — enriched in serous OC LRT. Consistent with L. iners as a dysbiosis marker rather than eubiosis marker.
- **[[dysbiosis|microbacterium-lacus]]** — depleted in OC ovaries, a novel ovarian-specific biomarker.
- Concept — multi-site microbiome sampling as a clinical tool; microbiome as prognostic marker beyond CA-125.

## Relevance to Cureva

- **Signature layer 2 (taxonomic)**: Adds confirmation of Dialister/Corynebacterium/Peptoniphilus/Prevotella enrichment on the [[ovarian-cancer-signature]]. Advance confidence for taxonomic layer.
- **Prognostic stratification**: Microbiome-based risk stratification for treatment response — candidate for a Cureva decision-support signal (adverse events predicted by gasseri/ovatus enrichment patterns).
- **Intervention targets**: Pathobionts enriched across sites (E. coli, F. nucleatum, B. fragilis in high-grade) suggest shared virulence-enzyme targets — [[beta-glucuronidase]], [[zinc-metalloprotease]], siderophore-mediated iron acquisition. Supports [[colorectal-cancer|target-eco-niche-shared-with-crc]].

## Contradictions / Tensions

- Stool microbiome showed fewer significant differences than reproductive-tract sites, partly contradicting the gut-centric framing of OC microbiome papers. Reinforces the pattern that local (tumor-adjacent) microbiome is more informative than distal stool for OC.
- Confirms Sipos 2021 review's observation that L. iners (not L. crispatus) enrichment is common in OC — but finds this is histology-dependent (serous > other).

## Open Questions

- Whether the LRT signature is cause or consequence of tumor-associated inflammation.
- Whether depletion of Microbacterium lacus in ovaries represents a protective taxon worth restoring.
- Replication needed in larger cohorts with balanced stage distribution (only 7 stage I+II in this cohort).

<!-- Karen's Brain primitives active: 1 (selective pressures favoring pathobionts in tumor microenvironment), 4 (metal-dependent virulence enzymes implied by enriched Fusobacterium/E. coli/Bacteroides fragilis) -->
