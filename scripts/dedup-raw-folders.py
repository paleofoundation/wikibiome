#!/usr/bin/env python3
"""
dedup-raw-folders.py

Content-hash deduplication for paper folders under raw/.

Use case: a new folder of papers (e.g. "Autism papers, but disorganized")
overlaps with an already-organized library folder (e.g. "Autism spectrum
disorder (ASD)"). This script finds byte-identical files between the two
and, when run with --delete, removes the duplicates from the NEW (disorganized)
folder only — the organized library is never touched.

What it does NOT do:
- It does not delete files from the organized/canonical folder.
- It does not touch intra-folder duplicates in the organized folder
  (those are often intentional cross-filing under multiple topical subfolders).
- It does not compare by filename — only by md5 of file bytes.

Usage:
    # Dry run (default) — just prints the report, touches nothing.
    python3 scripts/dedup-raw-folders.py \
        --canonical "raw/Autism spectrum disorder (ASD)" \
        --new       "raw/Autism papers, but disorganized. Not yet added or ingested"

    # Actually remove duplicates from the NEW folder.
    python3 scripts/dedup-raw-folders.py \
        --canonical "raw/Autism spectrum disorder (ASD)" \
        --new       "raw/Autism papers, but disorganized. Not yet added or ingested" \
        --delete

A log of every removal is written to:
    wiki/analyses/dedup-YYYY-MM-DD-<new-folder-slug>.md
"""

import argparse
import hashlib
import os
import re
import sys
from datetime import date
from pathlib import Path

EXTS = {".pdf", ".docx", ".doc"}


def hash_file(path: Path) -> str:
    h = hashlib.md5()
    with path.open("rb") as f:
        for chunk in iter(lambda: f.read(1 << 20), b""):
            h.update(chunk)
    return h.hexdigest()


def index_folder(root: Path) -> dict[str, list[Path]]:
    """Map md5 -> list of paths in this folder."""
    index: dict[str, list[Path]] = {}
    for p in root.rglob("*"):
        if p.is_file() and p.suffix.lower() in EXTS:
            index.setdefault(hash_file(p), []).append(p)
    return index


def slugify(s: str) -> str:
    s = re.sub(r"[^\w\s-]", "", s).strip().lower()
    return re.sub(r"[-\s]+", "-", s)[:60]


def main() -> int:
    ap = argparse.ArgumentParser(description=__doc__, formatter_class=argparse.RawDescriptionHelpFormatter)
    ap.add_argument("--canonical", required=True, help="Canonical/organized folder — never modified")
    ap.add_argument("--new",       required=True, help="New/disorganized folder — duplicates removed from here")
    ap.add_argument("--delete",    action="store_true", help="Actually delete duplicates (default: dry run)")
    ap.add_argument("--log-dir",   default="wiki/analyses", help="Where to write the dedup log")
    args = ap.parse_args()

    canonical = Path(args.canonical).resolve()
    new       = Path(args.new).resolve()

    for label, root in (("canonical", canonical), ("new", new)):
        if not root.is_dir():
            print(f"error: --{label} path is not a directory: {root}", file=sys.stderr)
            return 2

    if canonical == new or new.is_relative_to(canonical) or canonical.is_relative_to(new):
        print("error: --canonical and --new must be distinct, non-nested directories", file=sys.stderr)
        return 2

    print(f"Hashing canonical: {canonical}")
    can_idx = index_folder(canonical)
    print(f"  {sum(len(v) for v in can_idx.values())} files, {len(can_idx)} unique contents")

    print(f"Hashing new:       {new}")
    new_idx = index_folder(new)
    print(f"  {sum(len(v) for v in new_idx.values())} files, {len(new_idx)} unique contents")

    overlap_hashes = set(can_idx) & set(new_idx)
    only_new      = set(new_idx) - set(can_idx)

    dupes_in_new: list[tuple[Path, Path]] = []  # (new_file, canonical_match)
    for h in overlap_hashes:
        canonical_match = can_idx[h][0]
        for p in new_idx[h]:
            dupes_in_new.append((p, canonical_match))

    print()
    print(f"Overlap (same bytes, both folders): {len(overlap_hashes)} unique contents, "
          f"{len(dupes_in_new)} file(s) in the new folder are duplicates of canonical")
    print(f"Unique to new (keep these): {len(only_new)} contents")

    # Write a log — even on dry run — so Karen has a reviewable record.
    Path(args.log_dir).mkdir(parents=True, exist_ok=True)
    log_path = Path(args.log_dir) / f"dedup-{date.today().isoformat()}-{slugify(new.name)}.md"

    lines = []
    lines.append(f"# Dedup report — {date.today().isoformat()}")
    lines.append("")
    lines.append(f"- Canonical: `{canonical}`")
    lines.append(f"- New:       `{new}`")
    lines.append(f"- Mode:      {'DELETE' if args.delete else 'dry-run'}")
    lines.append("")
    lines.append(f"- Files in new that duplicate canonical: **{len(dupes_in_new)}**")
    lines.append(f"- Files unique to new (kept): **{len(only_new)}**")
    lines.append("")
    lines.append("## Duplicates removed from new folder")
    lines.append("")
    if not dupes_in_new:
        lines.append("_none_")
    else:
        for new_path, canon_path in sorted(dupes_in_new):
            lines.append(f"- ~~`{new_path.relative_to(new.parent)}`~~  ⇒ already in canonical as `{canon_path.relative_to(canonical.parent)}`")

    log_path.write_text("\n".join(lines) + "\n", encoding="utf-8")
    print(f"\nLog written: {log_path}")

    # Actually delete only in --delete mode.
    if args.delete:
        removed = 0
        for new_path, _ in dupes_in_new:
            try:
                new_path.unlink()
                removed += 1
            except OSError as e:
                print(f"  skip (error): {new_path}: {e}", file=sys.stderr)
        print(f"Deleted {removed} duplicate file(s) from: {new}")
    else:
        print("Dry run — no files deleted. Re-run with --delete to remove them.")

    return 0


if __name__ == "__main__":
    sys.exit(main())
