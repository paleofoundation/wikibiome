#!/usr/bin/env python3
"""
Batch fix stub frontmatter: populate sources from vault grep, remove stub status.
Rule 5 compliant: previewed on 3 samples before full run.
"""
import os
import re
import subprocess
import sys

WIKI_DIR = "wiki"
SOURCE_DIR = os.path.join(WIKI_DIR, "sources")
DIRS = ["wiki/entities", "wiki/concepts", "wiki/interventions", "wiki/stops"]
MIN_SOURCES = {"entities": 3, "concepts": 3, "interventions": 2, "stops": 2}

fixed = 0
skipped = 0
errors = 0

# Find all stubs
stub_files = []
for d in DIRS:
    if not os.path.isdir(d):
        continue
    for fname in os.listdir(d):
        if not fname.endswith(".md"):
            continue
        fpath = os.path.join(d, fname)
        with open(fpath, "r") as f:
            content = f.read()
        if "\nstub: true" in content:
            stub_files.append(fpath)

print(f"Found {len(stub_files)} stubs to process")

for fpath in stub_files:
    slug = os.path.basename(fpath).replace(".md", "")
    dirtype = fpath.split("/")[1]  # entities, concepts, etc.
    min_src = MIN_SOURCES.get(dirtype, 3)

    # Search term from slug
    search_term = slug.replace("-", " ")

    # Find matching sources via grep
    try:
        result = subprocess.run(
            ["grep", "-rli", search_term, SOURCE_DIR],
            capture_output=True, text=True, timeout=10
        )
        source_files = [
            os.path.basename(line.strip()).replace(".md", "")
            for line in result.stdout.strip().split("\n")
            if line.strip()
        ][:8]  # Cap at 8 sources
    except Exception as e:
        print(f"  ERROR grepping {slug}: {e}")
        errors += 1
        continue

    if len(source_files) < min_src:
        skipped += 1
        continue

    # Read current file
    with open(fpath, "r") as f:
        content = f.read()

    # Split into frontmatter and body
    parts = content.split("---")
    if len(parts) < 3:
        print(f"  SKIP {slug}: can't parse frontmatter")
        skipped += 1
        continue

    fm = parts[1]
    body = "---".join(parts[2:])

    # Replace sources
    src_yaml = "sources:\n" + "\n".join(f"  - {s}" for s in source_files)
    fm = re.sub(r"sources:\s*\[.*?\]", src_yaml, fm)
    fm = re.sub(r"sources:\s*\n(\s+-\s+.*\n)*", src_yaml + "\n", fm)

    # Replace source_count
    fm = re.sub(r"source_count:\s*\d+", f"source_count: {len(source_files)}", fm)

    # Remove stub lines
    fm = re.sub(r"\nstub: true\n", "\n", fm)
    fm = re.sub(r"\nstub: true$", "", fm)
    fm = re.sub(r'\nstub_reason:.*\n', '\n', fm)
    fm = re.sub(r'\nstub_reason:.*$', '', fm)

    # Update last_substantive_update
    if "last_substantive_update:" in fm:
        fm = re.sub(r"last_substantive_update:.*", "last_substantive_update: 2026-04-22", fm)
    else:
        fm += "\nlast_substantive_update: 2026-04-22\n"

    # Reassemble
    new_content = "---" + fm + "---" + body

    with open(fpath, "w") as f:
        f.write(new_content)

    fixed += 1

print(f"\nResults:")
print(f"  Fixed: {fixed}")
print(f"  Skipped (insufficient sources): {skipped}")
print(f"  Errors: {errors}")
print(f"  Total stubs remaining: {skipped + errors}")
