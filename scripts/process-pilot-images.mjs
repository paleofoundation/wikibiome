import sharp from "sharp";
import { mkdir } from "node:fs/promises";
import { join } from "node:path";

const root = process.cwd();
const masters = join(root, "work", "media-masters");
const output = join(root, "public", "media");

const images = [
  {
    source: "nickel-technical-specimen-v2-master.png",
    target: "nickel-technical-specimen-v2",
    title: "Metallic nickel specimens",
    description: "Technical specimen visualization of silvery nickel pellets and irregular metallic nickel specimens on a cool laboratory field. Not a laboratory photograph.",
    width: 1254,
  },
  {
    source: "akkermansia-muciniphila-morphology-v2-master.png",
    target: "akkermansia-muciniphila-morphology-v2",
    title: "Akkermansia muciniphila morphology",
    description: "Microscopy-informed reconstruction of an oval, Gram-negative, nonmotile, non-spore-forming Akkermansia muciniphila cell. Scientific illustration; not a micrograph.",
    width: 1536,
  },
  {
    source: "alzheimers-disease-pathology-v2-master.png",
    target: "alzheimers-disease-pathology-v2",
    title: "Alzheimer’s disease pathology",
    description: "Pathology-informed reconstruction of a sagittal human brain specimen with restrained emphasis on structures commonly discussed in Alzheimer’s disease. Scientific illustration; not a diagnostic image or tissue photograph.",
    width: 1536,
  },
  {
    source: "dysbiosis-microbial-community-v2-master.png",
    target: "dysbiosis-microbial-community-v2",
    title: "Dysbiotic microbial community",
    description: "Microscopy-informed reconstruction of an uneven mixed microbial community. Scientific illustration; composition is representative and not a diagnostic micrograph.",
    width: 1536,
  },
  {
    source: "escherichia-coli-morphology-v1-master.png",
    target: "escherichia-coli-morphology-v1",
    title: "Escherichia coli morphology",
    description: "Microscopy-informed reconstruction of rod-shaped Escherichia coli cells with representative peritrichous flagella and fine pili. Scientific illustration; not a micrograph.",
    width: 1536,
  },
  {
    source: "helicobacter-pylori-morphology-v1-master.png",
    target: "helicobacter-pylori-morphology-v1",
    title: "Helicobacter pylori morphology",
    description: "Microscopy-informed reconstruction of curved-to-helical Helicobacter pylori cells with representative polar flagellar tufts. Scientific illustration; not a micrograph.",
    width: 1536,
  },
  {
    source: "bifidobacterium-morphology-v1-master.png",
    target: "bifidobacterium-morphology-v1",
    title: "Bifidobacterium morphology",
    description: "Microscopy-informed reconstruction of characteristic bifid, club-shaped, and pleomorphic Bifidobacterium rods. Scientific illustration; not a micrograph.",
    width: 1536,
  },
  {
    source: "candida-albicans-morphology-v1-master.png",
    target: "candida-albicans-morphology-v1",
    title: "Candida albicans morphology",
    description: "Microscopy-informed reconstruction of Candida albicans in budding yeast and short pseudohyphal growth forms. Scientific illustration; not a clinical micrograph.",
    width: 1536,
  },
];

function xmp({ title, description }) {
  const escape = (value) => value.replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;");
  return `<?xpacket begin="\uFEFF" id="W5M0MpCehiHzreSzNTczkc9d"?>
<x:xmpmeta xmlns:x="adobe:ns:meta/">
  <rdf:RDF xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#">
    <rdf:Description rdf:about="" xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:photoshop="http://ns.adobe.com/photoshop/1.0/" xmlns:iptcExt="http://iptc.org/std/Iptc4xmpExt/2008-02-29/">
      <dc:title><rdf:Alt><rdf:li xml:lang="x-default">${escape(title)}</rdf:li></rdf:Alt></dc:title>
      <dc:description><rdf:Alt><rdf:li xml:lang="x-default">${escape(description)}</rdf:li></rdf:Alt></dc:description>
      <dc:creator><rdf:Seq><rdf:li>WikiBiome / Microbiome Medicine</rdf:li></rdf:Seq></dc:creator>
      <photoshop:Credit>WikiBiome / Microbiome Medicine</photoshop:Credit>
      <iptcExt:DigitalSourceType>https://cv.iptc.org/newscodes/digitalsourcetype/trainedAlgorithmicMedia</iptcExt:DigitalSourceType>
    </rdf:Description>
  </rdf:RDF>
</x:xmpmeta>
<?xpacket end="w"?>`;
}

await mkdir(output, { recursive: true });

for (const image of images) {
  const source = join(masters, image.source);
  const metadata = xmp(image);
  await sharp(source)
    .resize({ width: image.width, withoutEnlargement: true })
    .withXmp(metadata)
    .webp({ quality: 86, smartSubsample: true })
    .toFile(join(output, `${image.target}.webp`));

  await sharp(source)
    .resize(1200, 630, { fit: "cover", position: "attention" })
    .withXmp(metadata)
    .webp({ quality: 84, smartSubsample: true })
    .toFile(join(output, `${image.target}-social.webp`));
}

console.log(`Processed ${images.length} WikiBiome technical image standards into sidebar and social derivatives.`);
