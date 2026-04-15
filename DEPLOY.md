# WikiBiome Deploy Instructions

Open Terminal on your Mac and run these commands one at a time.

## Step 1: Navigate to the project
```
cd ~/Documents/Raw
```

## Step 2: Build the content data
```
node scripts/build-content.cjs
```
You should see output ending with "279 content pages" and "Output written to: src/content.generated.json"

## Step 3: Build the site with Vite
```
npx vite build
```
This compiles the React app into the `dist/` folder. Takes about 10-20 seconds.

## Step 4: Generate static HTML for SEO
```
node scripts/generate-static.cjs
```
You should see it generate article pages, category pages, 13 special pages, sitemap.xml, and robots.txt.

## Step 5: Deploy to Vercel
```
vercel deploy --prod
```
If prompted to log in, follow the instructions. Once deployed, it will show the live URL (wikibiome.com).

## All-in-one command (copy-paste this)
```
cd ~/Documents/Raw && node scripts/build-content.cjs && npx vite build && node scripts/generate-static.cjs && vercel deploy --prod
```

## If something goes wrong
- **"command not found: vercel"** → Run `npm install -g vercel` first
- **"command not found: npx"** → Run `brew install node` first
- **Vite build errors** → Check the error message; usually a typo in wikibiome-v8.jsx
- **Content build warnings** → These are usually non-fatal; check if the final line says "Output written to"
