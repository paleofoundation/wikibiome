#!/bin/bash
# WikiBiome Deploy Script
# Run this from your Raw/ folder (the Obsidian vault root)
# Usage: bash deploy.sh

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
  git commit -m "WikiBiome update — $(date '+%Y-%m-%d %H:%M')

Co-Authored-By: Claude Opus 4.6 <noreply@anthropic.com>"
  echo "Committed all files"
fi

# Step 4: Push to GitHub if remote exists (optional, skip if gh not installed)
if git remote | grep -q origin; then
  git push origin main 2>/dev/null && echo "Pushed to GitHub" || echo "GitHub push skipped (no connection or auth)"
else
  echo "No GitHub remote configured — skipping git push"
fi

# Step 5: Deploy to Vercel
echo ""
echo "Deploying to Vercel..."
npx vercel deploy --prod --yes
echo ""
echo "=== Deploy complete! ==="
echo ""
echo "Your site is live at: https://wikibiome.com"
echo ""
echo "Crawlable pages:"
echo "  /                          Homepage (static HTML)"
echo "  /article/{slug}            220 article pages (static HTML + SPA)"
echo "  /category/{category}       11 category pages (static HTML + SPA)"
echo "  /signatures                Disease signatures (SPA)"
echo "  /explore                   Knowledge graph (SPA)"
echo "  /matrix                    Evidence matrix (SPA)"
echo "  /sitemap.xml               Sitemap for search engines"
echo "  /robots.txt                Robots file"
