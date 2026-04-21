#!/usr/bin/env python3
"""
Categorize and move remaining unique files from the disorganized folder
into the canonical folder's subtopic directories.
"""

import argparse
import os
import shutil
from pathlib import Path
from collections import defaultdict

# Canonical subtopic folders (for reference)
AMINO_ACIDS = "Amino acids Autism spectrum disorder (ASD)"
ANTIBIOTICS = "Antibiotics Autism spectrum disorder (ASD) microbiome"
ANTIDEPRESSANTS = "Antidepressants Autism spectrum disorder (ASD) microbiome"
AUTOIMMUNE = "Microbiome Autism spectrum disorder (ASD) autoimmune"
BILE_ACIDS = "Bile acids Autism spectrum disorder (ASD)"
BIOMARKERS = "Microbial biomarkers Autism spectrum disorder (ASD)"
COMORBIDITIES = "Comorbidities Autism spectrum disorder (ASD) microbiome"
DIET = "Microbiome diet Autism spectrum disorder (ASD)"
DRUG_REPURPOSING = "Drug repurposing Autism spectrum disorder (ASD) microbiome"
DYSBIOSIS = "Dysbiosis Autism spectrum disorder (ASD)"
ENV_EXPOSURES = "Environmental exposures Autism spectrum disorder (ASD) microbiome"
FERMENTED = "Fermented foods Autism spectrum disorder (ASD)"
FIBER = "Dietary fiber Autism spectrum disorder (ASD)"
FMT = "FMT Autism spectrum disorder (ASD)"
FUNGAL = "Fungal microbiota Autism spectrum disorder (ASD)"
GUT_BRAIN = "Microbiome and gut-brain axis Autism spectrum disorder (ASD)"
HEAVY_METALS = "Heavy metals Autism spectrum disorder (ASD) microbiome"
IMMUNE = "Immune response Autism spectrum disorder (ASD) microbiome"
INDOLES = "Indoles Autism spectrum disorder (ASD)"
INFLAMMATION = "Microbiome and inflammation Autism spectrum disorder (ASD)"
KETO = "Keto diet Autism spectrum disorder (ASD) microbiome"
LIT_REVIEW = "Literature review Autism spectrum disorder (ASD)"
MED_DIET = "Mediterranean diet Autism spectrum disorder (ASD) microbiome"
MENDELIAN = "Mendelian randomization Autism spectrum disorder (ASD) microbiome"
META_ANALYSIS = "Meta-analysis Autism spectrum disorder (ASD)"
METABOLITES = "Microbial metabolites Autism spectrum disorder (ASD)"
METABOLOMICS = "Metabolomics Autism spectrum disorder (ASD)"
METAGENOMICS = "Metagenomic analysis Autism spectrum disorder (ASD)"
METFORMIN = "Metformin Autism spectrum disorder (ASD) microbiome"
MICROBIOME_COMPOSITION = "Microbiome composition Autism spectrum disorder (ASD)"
MICROBIOME_HOST = "Microbiome-host interactions Autism spectrum disorder (ASD)"
MICROBIOME_REVIEW = "Microbiome review Autism spectrum disorder (ASD)"
MICROBIOME_DRUGS = "Microbiome-modulating drugs Autism spectrum disorder (ASD)"
MICROBIOME_TARGETED = "Microbiome-targeted therapy Autism spectrum disorder (ASD)"
MYCOBIOME = "Mycobiome Autism spectrum disorder (ASD)"
NEUROINFLAMMATION = "Microbiome and neuroinflammation Autism spectrum disorder (ASD)"
NICKEL = "Nickel Autism spectrum disorder (ASD) microbiome"
NSAIDS = "NSAIDs Autism spectrum disorder (ASD) microbiome"
POLYPHENOLS = "Dietary polyphenols Autism spectrum disorder (ASD)"
PREBIOTICS = "Prebiotics Autism spectrum disorder (ASD) treatment"
PROBIOTICS = "Probiotics Autism spectrum disorder (ASD) treatment"
SCFAS = "SCFAs Autism spectrum disorder (ASD)"
SHOTGUN = "Shotgun metagenomics Autism spectrum disorder (ASD)"
STATINS = "Statins Autism spectrum disorder (ASD) microbiome"
SYNBIOTICS = "Synbiotics Autism spectrum disorder (ASD) treatment"
SYSTEMATIC_REVIEW = "Systematic review Autism spectrum disorder (ASD)"
TRACE_METALS = "Trace metals Autism spectrum disorder (ASD) microbiome"
VIRAL = "Viral microbiota Autism spectrum disorder (ASD)"
VIROME = "Virome Autism spectrum disorder (ASD)"

# Explicit filename-prefix overrides for tricky cases (checked first).
# Map: filename keyword (case-insensitive substring) -> target folder
EXPLICIT_OVERRIDES = [
    # Probiotic strains / fermented milk
    ("Lactiplantibacillus", PROBIOTICS),
    ("Psychobiotics and fecal", PROBIOTICS),
    # GABA / aminobutyrate -> amino acids (before "butyrate" catches it)
    ("Aminobutyrate Shunt", AMINO_ACIDS),
    ("GABA", AMINO_ACIDS),
    # Folate / methionine / N-acetylcysteine -> amino acids
    ("Folate\u2013Methionine", AMINO_ACIDS),
    ("Folic Acid", AMINO_ACIDS),
    ("Folate Receptor", AMINO_ACIDS),
    ("folic acid metabolism", AMINO_ACIDS),
    ("N-Acetylcysteine", AMINO_ACIDS),
    ("glutathione", AMINO_ACIDS),
    # SCFA / propionic acid
    ("propionic acid", SCFAS),
    ("propionate", SCFAS),
    ("butyrate", SCFAS),
    ("4- Ethylphenol", METABOLITES),
    ("p-cresol", METABOLITES),
    # Metals (order matters: heavy metal > metal)
    ("Heavy Metal", HEAVY_METALS),
    ("Heavy metals", HEAVY_METALS),
    ("heavy metal", HEAVY_METALS),
    ("metallomic", TRACE_METALS),
    ("Metallomics", TRACE_METALS),
    ("metallometabolome", TRACE_METALS),
    ("Metal Dyshomeostasis", TRACE_METALS),
    ("Metal Profiles", TRACE_METALS),
    ("arsenic", TRACE_METALS),
    ("Copper", TRACE_METALS),
    ("lead exposure", TRACE_METALS),
    ("Lead with Gut", HEAVY_METALS),
    ("trace element", TRACE_METALS),
    ("metal exposure", TRACE_METALS),
    ("in utero", ENV_EXPOSURES),
    # Gut-brain axis
    ("Gut-Brain", GUT_BRAIN),
    ("gut\u2013brain", GUT_BRAIN),
    ("brain-gut", GUT_BRAIN),
    ("Brain-Gut", GUT_BRAIN),
    ("gut to brain", GUT_BRAIN),
    ("microbiota\u2013gut\u2013brain", GUT_BRAIN),
    ("Gut-Immune-Brain", GUT_BRAIN),
    # Autoimmune
    ("autoimmune", AUTOIMMUNE),
    ("Candida albicans", FUNGAL),
    # Virome / bacteriome
    ("bacteriome virome", VIROME),
    ("virome", VIROME),
    ("phage", VIROME),
    # FMT
    ("Microbiota Transfer Therapy", FMT),
    ("fecal microbiota transplantation", FMT),
    ("fecal microbial transplantation", FMT),
    # Probiotic/prebiotic treatment combos
    ("Prebiotics and probiotics", PROBIOTICS),
    ("Prebiotics, probiotics", PROBIOTICS),
    # Maternal / prenatal infections / environmental
    ("Maternal Infection", ENV_EXPOSURES),
    ("maternal adverse", ENV_EXPOSURES),
    ("Prenatal Valproate", DRUG_REPURPOSING),
    ("valproic", DRUG_REPURPOSING),
    ("Valproic", DRUG_REPURPOSING),
    ("prenatal-risk-factors", META_ANALYSIS),
    ("Air Pollution", ENV_EXPOSURES),
    ("Developmental Neuropathology of Environmental", ENV_EXPOSURES),
    # Diabetes / gestational diabetes / comorbidities
    ("gestational diabetes", COMORBIDITIES),
    ("Gestational diabetes", COMORBIDITIES),
    ("Maternal Diabetes", COMORBIDITIES),
    ("diabetic mothers", COMORBIDITIES),
    ("Attention Deficit", COMORBIDITIES),
    ("Gastrointestinal, Behaviour", COMORBIDITIES),
    ("heterogeneity of autism and associations with gastr", COMORBIDITIES),
    # Drugs
    ("Drug repurposing", DRUG_REPURPOSING),
    ("Metformin", METFORMIN),
    ("metformin", METFORMIN),
    ("Serotonin Reuptake", ANTIDEPRESSANTS),
    ("Antidepressants", ANTIDEPRESSANTS),
    ("Medication use", MICROBIOME_DRUGS),
    ("PHARMACOLOGY OF MICROBIOME", MICROBIOME_TARGETED),
    ("microbiome-targeted", MICROBIOME_TARGETED),
    ("Interventions targeting the gut microbiota", MICROBIOME_TARGETED),
    ("Therapeutic Regulati", MICROBIOME_TARGETED),
    ("Therapeutic Regulat", MICROBIOME_TARGETED),
    ("Modulation of Gut Microbiome", MICROBIOME_TARGETED),
    # Biomarker / leaky gut
    ("leaky gut", BIOMARKERS),
    ("biomarker", BIOMARKERS),
    # Meta-analysis / systematic review
    ("meta-analysis", META_ANALYSIS),
    ("Meta-analysis", META_ANALYSIS),
    ("meta\u2010analysis", META_ANALYSIS),
    ("Multi\u2010angle meta", META_ANALYSIS),
    ("systematic review", SYSTEMATIC_REVIEW),
    ("Systematic Review", SYSTEMATIC_REVIEW),
    # Neuroinflammation / inflammation
    ("neuroinflamma", NEUROINFLAMMATION),
    ("TNF", INFLAMMATION),
    # Immune
    ("Immune System", IMMUNE),
    ("Immune-", IMMUNE),
    # Ketogenic
    ("ketogenic", KETO),
    # Mendelian
    ("Mendelian", MENDELIAN),
    # Diet / nutrition
    ("Dietary polyphenols", POLYPHENOLS),
    ("polyphenol", POLYPHENOLS),
    ("Dietary interventions", DIET),
    ("Diet Can Impact", DIET),
    ("Tailored Gut Microbiome-Based and Dietary", DIET),
    ("Effect of maternal diet", DIET),
    ("nutrition and gut microbiome", DIET),
    ("dietary intake, and nutritional", DIET),
    ("Autism and nutrition", DIET),
    ("Novel Personalized Dietary Treatment", DIET),
    # Microbiome composition
    ("Altered gut microbiome and autism like behavior", MICROBIOME_COMPOSITION),
    ("Comparing the Gut Microbiome", MICROBIOME_COMPOSITION),
    # Dysbiosis
    ("dysbiosis", DYSBIOSIS),
    ("Dysbiosis", DYSBIOSIS),
    # Antibiotics
    ("Antibiotics", ANTIBIOTICS),
    ("antibiotics", ANTIBIOTICS),
    # 16S rRNA / metagenomics / shotgun
    ("16S rRNA", "16S rRNA sequencing Autism spectrum disorder (ASD)"),
    ("shotgun", SHOTGUN),
    ("metagenomic", METAGENOMICS),
    ("Metagenomics", METAGENOMICS),
    # Metabolomics
    ("Metabolomics", METABOLOMICS),
    ("metabolomics", METABOLOMICS),
    # Microbial metabolites
    ("microbiome derived", METABOLITES),
    ("microbiome-derived", METABOLITES),
    # Literature review catch-alls
    ("Etiology, Epidemiology", LIT_REVIEW),
    ("Causes, diagnosis", LIT_REVIEW),
    ("Empathizing", LIT_REVIEW),
    ("Precision Psychiatry", LIT_REVIEW),
    ("postmortem brain", LIT_REVIEW),
    ("Sex Hormones on Host Resistance", LIT_REVIEW),
    ("Listeria monocytogenes induces", LIT_REVIEW),
    ("Listeria monocytogenes folic", AMINO_ACIDS),
    ("social-robotics", LIT_REVIEW),
    ("Camouflaging", LIT_REVIEW),
    ("Heterogeneity and Treatment Options", LIT_REVIEW),
    ("physical exercise on Autism", META_ANALYSIS),
    # Microbiome-host
    ("microbiome-host interactions", MICROBIOME_HOST),
    ("Microbiome\u2013host", MICROBIOME_HOST),
    # Fermented
    ("Fermented", FERMENTED),
    ("fermented", FERMENTED),
    # Indoles
    ("indole", INDOLES),
    # Bile
    ("bile acid", BILE_ACIDS),
    # Amino acid generic
    ("amino acid", AMINO_ACIDS),
    ("Amino Acid", AMINO_ACIDS),
    # Oral microbiome / systematic review
    ("Oral Microbiome", SYSTEMATIC_REVIEW),
]

def categorize_file(filename):
    """Determine the best category for a file based on its name.
    Uses longest-keyword-wins strategy across EXPLICIT_OVERRIDES.
    """
    fname = filename.lower()
    scored_matches = []
    for keyword, category in EXPLICIT_OVERRIDES:
        if keyword.lower() in fname:
            scored_matches.append((len(keyword), category))
    if scored_matches:
        scored_matches.sort(reverse=True)
        return scored_matches[0][1]
    # Default fallback: general microbiome review
    return MICROBIOME_REVIEW

def main():
    parser = argparse.ArgumentParser()
    parser.add_argument("--dry-run", action="store_true", help="Only print what would happen")
    args = parser.parse_args()

    source_dir = Path("/Users/kmfp/Documents/Claude/Raw/raw/Autism papers, but disorganized. Not yet added or ingested")
    canonical_dir = Path("/Users/kmfp/Documents/Claude/Raw/raw/Autism spectrum disorder (ASD)")
    
    # Track categorization results
    categorizations = defaultdict(list)
    moved_count = 0
    error_count = 0
    
    # Find all files (excluding .DS_Store)
    for file_path in sorted(source_dir.rglob("*")):
        if not file_path.is_file() or file_path.name == ".DS_Store":
            continue
        
        # Determine target category
        target_category = categorize_file(file_path.name)
        target_dir = canonical_dir / target_category
        
        if args.dry_run:
            categorizations[target_category].append(file_path.name)
            moved_count += 1
            continue
        
        # Create target directory if it doesn't exist
        target_dir.mkdir(parents=True, exist_ok=True)
        
        # Move file
        target_path = target_dir / file_path.name
        try:
            shutil.move(str(file_path), str(target_path))
            categorizations[target_category].append(file_path.name)
            moved_count += 1
            print(f"OK  {file_path.name} -> {target_category}")
        except Exception as e:
            error_count += 1
            print(f"ERR {file_path.name}: {e}")
    
    # Print summary grouped by category
    print(f"\n{'='*80}")
    print(f"Categorization Summary ({'DRY RUN' if args.dry_run else 'EXECUTED'}):")
    print(f"{'='*80}")
    for category in sorted(categorizations.keys()):
        files = categorizations[category]
        print(f"\n[{category}] ({len(files)} file(s)):")
        for fname in files:
            print(f"  - {fname}")
    
    print(f"\n{'='*80}")
    print(f"Total files: {moved_count}")
    print(f"Errors: {error_count}")
    print(f"{'='*80}")

if __name__ == "__main__":
    main()
