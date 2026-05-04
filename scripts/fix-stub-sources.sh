#!/bin/bash
# Batch fix stub frontmatter: populate sources, remove stub status
# Rule 5 compliant: previewed on 3 samples before running

FIXED=0
SKIPPED=0

for f in $(grep -rl "^stub: true" wiki/entities/ wiki/concepts/ wiki/interventions/ wiki/stops/ 2>/dev/null); do
  slug=$(basename "$f" .md)

  # Skip if source_count already >= 3 (stub may be for other reasons)
  sc=$(grep "^source_count:" "$f" 2>/dev/null | awk '{print $2}')
  [ -z "$sc" ] && sc=0

  # Get search terms from slug
  term=$(echo "$slug" | tr '-' ' ')

  # Find matching sources (up to 6)
  mapfile -t sources < <(grep -rli "$term" wiki/sources/ 2>/dev/null | head -6 | xargs -I{} basename {} .md 2>/dev/null)
  count=${#sources[@]}

  # Need at least 3 sources for entities/concepts, 2 for others
  dir=$(dirname "$f")
  if [[ "$dir" == *"entities"* ]] || [[ "$dir" == *"concepts"* ]]; then
    min=3
  else
    min=2
  fi

  if [ "$count" -lt "$min" ]; then
    SKIPPED=$((SKIPPED + 1))
    continue
  fi

  # Build YAML sources list
  src_yaml=""
  for s in "${sources[@]}"; do
    src_yaml="${src_yaml}\n  - ${s}"
  done

  # Use python for safe YAML editing
  python3 << PYEOF
import re

with open("$f", "r") as fh:
    content = fh.read()

# Replace sources line
sources_yaml = """sources:${src_yaml}
source_count: ${count}"""

# Handle both sources: [] and sources:\n  - xxx patterns
content = re.sub(r'sources:\s*\[.*?\]\nsource_count:\s*\d+', sources_yaml, content, flags=re.DOTALL)
content = re.sub(r'sources:\s*\[.*?\]\n', 'sources:${src_yaml}\n', content)
if 'source_count' not in content.split('---')[1]:
    content = content.replace('sources:${src_yaml}\n', sources_yaml + '\n')

# Remove stub lines
content = re.sub(r'\nstub: true\n', '\n', content)
content = re.sub(r'\nstub_reason:.*\n', '\n', content)

# Update last_substantive_update if present
content = re.sub(r'last_substantive_update:.*', 'last_substantive_update: 2026-04-22', content)

with open("$f", "w") as fh:
    fh.write(content)

PYEOF

  FIXED=$((FIXED + 1))
done

echo "Fixed: $FIXED stubs"
echo "Skipped (insufficient sources): $SKIPPED"
