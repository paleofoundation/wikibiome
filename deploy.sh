#!/bin/bash
# WikiBiome Deploy Script
# Run this from your Raw/ folder (the Obsidian vault root)
# Vercel project "wikibiome" is already created and linked via .vercel/project.json

set -e

echo "=== WikiBiome Deploy ==="

# Step 1: Clean up stale git lock if present
if [ -f .git/index.lock ]; then
  rm .git/index.lock
  echo "Removed stale git lock file"
fi

# Step 2: Initialize git if needed
if [ ! -d .git ]; then
  git init
  git branch -m main
  echo "Initialized git repo"
else
  echo "Git repo already exists"
fi

# Step 3: Stage and commit
git add -A
if git diff --cached --quiet; then
  echo "No changes to commit"
else
  git commit -m "WikiBiome v7 — interactive microbiome metallomics encyclopedia

89 content pages, 245 sources, 177 DOIs, knowledge graph,
evidence matrix heatmap, full-text search.

Co-Authored-By: Claude Opus 4.6 <noreply@anthropic.com>"
  echo "Committed all files"
fi

# Step 4: Create GitHub repo (if not already linked)
if ! git remote | grep -q origin; then
  echo ""
  echo "Creating GitHub repo..."
  gh repo create wikibiome --public --source=. --remote=origin --push \
    --description "WikiBiome — Interactive microbiome metallomics encyclopedia"
  echo "Pushed to GitHub!"
else
  git push origin main
  echo "Pushed to existing remote"
fi

# Step 5: Deploy to Vercel (project already linked)
echo ""
echo "Deploying to Vercel..."
npx vercel deploy --prod --yes
echo ""
echo "=== Deploy complete! ==="
echo ""
echo "Your site is live at: https://wikibiome.vercel.app"
echo ""
echo "To add wikibiome.com:"
echo "  1. Go to https://vercel.com/karen-pendergrass-projects/wikibiome/settings/domains"
echo "  2. Type 'wikibiome.com' and click Add"
echo "  3. Update your DNS: add a CNAME record pointing to cname.vercel-dns.com"
