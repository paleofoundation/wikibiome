#!/usr/bin/env python3
"""
Fix broken wikilinks across the WikiBiome knowledge base.
Only replaces links where the target entity file actually exists.
"""

import os
import re
from pathlib import Path
from collections import defaultdict

BASE = Path(__file__).resolve().parent.parent

# Directories to search
SEARCH_DIRS = [
    BASE / "wiki/entities",
    BASE / "wiki/concepts",
    BASE / "wiki/sources",
    BASE / "wiki/interventions",
    BASE / "wiki/analyses",
    BASE / "cureva/signatures",
    BASE / "cureva/stops",
    BASE / "cureva/interventions",
]

# All entity files that exist (without extension)
def get_existing_entities():
    entities = set()
    entity_dirs = [
        BASE / "wiki/entities",
        BASE / "wiki/concepts",
        BASE / "wiki/interventions",
        BASE / "wiki/signatures",
        BASE / "cureva/signatures",
        BASE / "cureva/stops",
        BASE / "cureva/interventions",
    ]
    for d in entity_dirs:
        if d.exists():
            for f in d.glob("*.md"):
                entities.add(f.stem)
    return entities

existing = get_existing_entities()

# Build the mapping: wrong_link_target -> correct_link_target
# Only include mappings where the correct target exists in the wiki
def build_mapping(existing):
    candidates = {}

    # --- Metals: capitalized forms ---
    metals = [
        "aluminum", "arsenic", "cadmium", "chromium", "cobalt", "copper",
        "iron", "lead", "magnesium", "manganese", "mercury", "molybdenum",
        "nickel", "selenium", "tin", "zinc", "iodine", "bismuth", "gallium",
        "platinum",
    ]
    for m in metals:
        cap = m.capitalize()
        if m in existing:
            candidates[cap] = m

    # --- Organism genus names (capitalized single word) ---
    organisms_single = [
        "bacteroides", "bifidobacterium", "lactobacillus", "clostridium",
        "roseburia", "akkermansia", "prevotella", "coprococcus", "flavonifractor",
        "collinsella", "eggerthella", "sutterella", "dialister", "fusobacterium",
        "blautia", "ruminococcus", "streptococcus", "enterococcus", "klebsiella",
        "desulfovibrio", "veillonella", "lactococcus", "faecalibacterium",
        "acinetobacter", "actinomyces", "aeromonas", "alistipes", "allisonella",
        "alloprevotella", "anaerostipes", "aspergillus", "bacillus", "bilophila",
        "brucella", "butyricimonas", "campylobacter", "candida", "cryptococcus",
        "debaryomyces", "dorea", "enterobacteriaceae", "eubacterium",
        "gardnerella", "gordonibacter", "helicobacter", "hungatella",
        "intestinibacter", "lachnospira", "lachnospiraceae", "leptotrichia",
        "malassezia", "methanobrevibacter", "mycobacterium", "neisseria",
        "odoribacter", "oscillospiraceae", "oxalobacter", "parabacteroides",
        "parasutterella", "parvimonas", "peptostreptococcus", "phascolarctobacterium",
        "porphyromonas", "proteus", "pseudomonas", "purpureocillium",
        "saccharomyces", "salmonella", "shigella", "staphylococcus", "torulaspora",
        "yersinia", "escherichia", "clostridioides",
    ]
    for org in organisms_single:
        cap = org.capitalize()
        if org in existing:
            candidates[cap] = org

    # --- Species names with spaces → hyphenated lowercase ---
    species_map = {
        # Organism full names
        "Faecalibacterium prausnitzii": "faecalibacterium-prausnitzii",
        "Eggerthella lenta": "eggerthella-lenta",
        "Akkermansia muciniphila": "akkermansia-muciniphila",
        "Bacteroides fragilis": "bacteroides-fragilis",
        "Bacteroides thetaiotaomicron": "bacteroides-thetaiotaomicron",
        "Bacteroides vulgatus": "bacteroides-vulgatus",
        "Prevotella copri": "prevotella-copri",
        "Fusobacterium nucleatum": "fusobacterium-nucleatum",
        "Fusobacterium varium": "fusobacterium-varium",
        "Candida albicans": "candida-albicans",
        "Candida auris": "candida-auris",
        "Candida tropicalis": "candida-tropicalis",
        "Pseudomonas aeruginosa": "pseudomonas-aeruginosa",
        "Helicobacter pylori": "helicobacter-pylori",
        "Clostridioides difficile": "clostridioides-difficile",
        "Clostridium symbiosum": "clostridium-symbiosum",
        "Ruminococcus gnavus": "ruminococcus-gnavus",
        "Ruminococcus albus": "ruminococcus-albus",
        "Klebsiella pneumoniae": "klebsiella-pneumoniae",
        "Staphylococcus aureus": "staphylococcus-aureus",
        "Streptococcus agalactiae": "streptococcus-agalactiae",
        "Streptococcus pneumoniae": "streptococcus-pneumoniae",
        "Streptococcus thermophilus": "streptococcus-thermophilus",
        "Streptococcus mutans": "streptococcus",  # fallback to genus if no species page
        "Salmonella typhimurium": "salmonella-typhimurium",
        "Shigella flexneri": "shigella-flexneri",
        "Escherichia coli": "escherichia-coli",
        "Methanobrevibacter smithii": "methanobrevibacter-smithii",
        "Mycobacterium tuberculosis": "mycobacterium-tuberculosis",
        "Neisseria meningitidis": "neisseria-meningitidis",
        "Porphyromonas gingivalis": "porphyromonas-gingivalis",
        "Proteus mirabilis": "proteus-mirabilis",
        "Saccharomyces cerevisiae": "saccharomyces-cerevisiae",
        "Parvimonas micra": "parvimonas-micra",
        "Peptostreptococcus stomatis": "peptostreptococcus-stomatis",
        "Yersinia pestis": "yersinia-pestis",
        "Gordonibacter urolithinfaciens": "gordonibacter-urolithinfaciens",
        "Campylobacter jejuni": "campylobacter-jejuni",
        "Cryptococcus neoformans": "cryptococcus-neoformans",
        # Diseases with spaces/capitals
        "Type 2 Diabetes": "type-2-diabetes",
        "Type 2 diabetes": "type-2-diabetes",
        "Type 1 Diabetes": "type-1-diabetes",
        "Type 1 diabetes": "type-1-diabetes",
        "type 2 diabetes": "type-2-diabetes",
        "type 1 diabetes": "type-1-diabetes",
        "Depression": "depression",
        "Schizophrenia": "schizophrenia",
        "Parkinson's Disease": "parkinsons-disease",
        "Parkinson's disease": "parkinsons-disease",
        "Parkinsons Disease": "parkinsons-disease",
        "Parkinsons disease": "parkinsons-disease",
        "Parkinson Disease": "parkinsons-disease",
        "Parkinson disease": "parkinsons-disease",
        "Alzheimer's Disease": "alzheimers-disease",
        "Alzheimer's disease": "alzheimers-disease",
        "Alzheimers Disease": "alzheimers-disease",
        "Alzheimers disease": "alzheimers-disease",
        "Alzheimer Disease": "alzheimers-disease",
        "Autism Spectrum Disorder": "autism-spectrum-disorder",
        "Autism spectrum disorder": "autism-spectrum-disorder",
        "autism spectrum disorder": "autism-spectrum-disorder",
        "Colorectal Cancer": "colorectal-cancer",
        "Colorectal cancer": "colorectal-cancer",
        "colorectal cancer": "colorectal-cancer",
        "Breast Cancer": "breast-cancer",
        "Breast cancer": "breast-cancer",
        "breast cancer": "breast-cancer",
        "Chronic Kidney Disease": "chronic-kidney-disease",
        "Chronic kidney disease": "chronic-kidney-disease",
        "chronic kidney disease": "chronic-kidney-disease",
        "Multiple Sclerosis": "multiple-sclerosis",
        "Multiple sclerosis": "multiple-sclerosis",
        "multiple sclerosis": "multiple-sclerosis",
        "Cardiovascular Disease": "cardiovascular-disease",
        "Cardiovascular disease": "cardiovascular-disease",
        "cardiovascular disease": "cardiovascular-disease",
        "Inflammatory Bowel Disease": "inflammatory-bowel-disease",
        "Inflammatory bowel disease": "inflammatory-bowel-disease",
        "inflammatory bowel disease": "inflammatory-bowel-disease",
        "Crohn's Disease": "crohns-disease",
        "Crohn's disease": "crohns-disease",
        "Crohns Disease": "crohns-disease",
        "Crohns disease": "crohns-disease",
        "Ulcerative Colitis": "ulcerative-colitis",
        "Ulcerative colitis": "ulcerative-colitis",
        "ulcerative colitis": "ulcerative-colitis",
        "Rheumatoid Arthritis": "rheumatoid-arthritis",
        "Rheumatoid arthritis": "rheumatoid-arthritis",
        "rheumatoid arthritis": "rheumatoid-arthritis",
        "Celiac Disease": "celiac-disease",
        "Celiac disease": "celiac-disease",
        "celiac disease": "celiac-disease",
        "Gastric Cancer": "gastric-cancer",
        "Gastric cancer": "gastric-cancer",
        "gastric cancer": "gastric-cancer",
        "Ovarian Cancer": "ovarian-cancer",
        "Ovarian cancer": "ovarian-cancer",
        "ovarian cancer": "ovarian-cancer",
        "Pancreatic Cancer": "pancreatic-cancer",
        "Pancreatic cancer": "pancreatic-cancer",
        "pancreatic cancer": "pancreatic-cancer",
        "Hashimoto's Thyroiditis": "hashimotos-thyroiditis",
        "Hashimotos Thyroiditis": "hashimotos-thyroiditis",
        "Graves Disease": "graves-disease",
        "Graves' Disease": "graves-disease",
        "Graves' disease": "graves-disease",
        "Irritable Bowel Syndrome": "ibs",
        "irritable bowel syndrome": "ibs",
        "Parkinson": "parkinsons-disease",
        "Alzheimer": "alzheimers-disease",
        "Endometriosis": "endometriosis",
        "endometriosis": "endometriosis",
        "Obesity": "obesity",
        "Hypertension": "hypertension",
        "Fibromyalgia": "fibromyalgia",
        "Long COVID": "long-covid",
        "Long-COVID": "long-covid",
        "Long Covid": "long-covid",
        "PCOS": "pcos",
        "PMDD": "pmdd",
        "GERD": "gerd",
        "Necrotizing Enterocolitis": "necrotizing-enterocolitis",
        "necrotizing enterocolitis": "necrotizing-enterocolitis",
        "Cerebral Palsy": "cerebral-palsy",
        "cerebral palsy": "cerebral-palsy",
        "Female Infertility": "female-infertility",
        "female infertility": "female-infertility",
        "Erectile Dysfunction": "erectile-dysfunction",
        "erectile dysfunction": "erectile-dysfunction",
    }

    for wrong, correct in species_map.items():
        if correct in existing:
            candidates[wrong] = correct

    return candidates

mapping = build_mapping(existing)

print(f"Built mapping with {len(mapping)} entries")
print(f"Found {len(existing)} existing entity files")

# Stats
total_files_modified = 0
total_replacements = 0
category_stats = defaultdict(lambda: {"files": 0, "replacements": 0})

def fix_wikilinks_in_file(filepath, mapping):
    """Fix wikilinks in a single file. Returns (modified, count)."""
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    original = content
    total = 0

    for wrong, correct in mapping.items():
        # Match [[Wrong]] and [[Wrong|display text]]
        # Escape special regex chars in wrong
        wrong_escaped = re.escape(wrong)

        # Pattern 1: [[Wrong]] - exact match, no pipe
        pattern1 = r'\[\[' + wrong_escaped + r'\]\]'
        replacement1 = f'[[{correct}]]'
        new_content, n = re.subn(pattern1, replacement1, content)
        content = new_content
        total += n

        # Pattern 2: [[Wrong|display]] - preserve display text
        pattern2 = r'\[\[' + wrong_escaped + r'(\|[^\]]+)\]\]'
        replacement2 = r'[[' + correct + r'\1]]'
        new_content, n = re.subn(pattern2, replacement2, content)
        content = new_content
        total += n

    if content != original:
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(content)
        return True, total
    return False, total

# Process all files
for search_dir in SEARCH_DIRS:
    if not search_dir.exists():
        print(f"  SKIP (not found): {search_dir}")
        continue

    dir_label = str(search_dir).replace(str(BASE) + "/", "")
    dir_files = 0
    dir_replacements = 0

    for filepath in sorted(search_dir.glob("*.md")):
        modified, count = fix_wikilinks_in_file(filepath, mapping)
        if modified:
            dir_files += 1
            dir_replacements += count
            total_files_modified += 1
            total_replacements += count

    category_stats[dir_label]["files"] = dir_files
    category_stats[dir_label]["replacements"] = dir_replacements
    print(f"  {dir_label}: {dir_files} files modified, {dir_replacements} replacements")

print(f"\n{'='*50}")
print(f"TOTAL: {total_files_modified} files modified, {total_replacements} replacements")
print(f"\nBreakdown by directory:")
for cat, stats in sorted(category_stats.items()):
    print(f"  {cat}: {stats['files']} files, {stats['replacements']} replacements")
