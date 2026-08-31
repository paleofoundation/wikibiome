import sharp from "sharp";
import { mkdir } from "node:fs/promises";
import { join } from "node:path";

const root = process.cwd();
const masters = join(root, "work", "media-masters");
const output = join(root, "public", "media");

const images = [
  {
    source: "nickel-metal-microbiome-interface-master.png",
    target: "nickel-metal-microbiome-interface",
    title: "Nickel at the metal–microbiome interface",
    description: "Conceptual scientific illustration of nickel at a microbial biofilm and intestinal mucosal interface.",
  },
  {
    source: "akkermansia-muciniphila-mucus-layer-master.png",
    target: "akkermansia-muciniphila-mucus-layer",
    title: "Akkermansia muciniphila in the intestinal mucus layer",
    description: "Conceptual scientific illustration of Akkermansia muciniphila in its mucin-rich intestinal niche.",
  },
  {
    source: "alzheimers-gut-brain-metal-system-master.png",
    target: "alzheimers-gut-brain-metal-system",
    title: "Alzheimer's disease as a gut–brain–metal system",
    description: "Conceptual scientific illustration of gut–brain, microbial, fibrillar, and metallomic research relationships.",
  },
  {
    source: "dysbiosis-destabilized-ecosystem-master.png",
    target: "dysbiosis-destabilized-ecosystem",
    title: "Dysbiosis as a destabilized microbial ecosystem",
    description: "Conceptual scientific illustration of one continuous microbial ecosystem with uneven structure and barrier interactions.",
  },
  {
    source: "low-nickel-diet-exposure-intervention-master.png",
    target: "low-nickel-diet-exposure-intervention",
    title: "Low-nickel diet as an exposure intervention",
    description: "Conceptual scientific illustration of selective dietary nickel exposure management.",
  },
  {
    source: "plant-based-diet-nickel-paradox-master.png",
    target: "plant-based-diet-nickel-paradox",
    title: "The plant-based diet and nickel exposure paradox",
    description: "Conceptual scientific illustration of nutrient-rich plant foods and dietary nickel exposure in susceptible contexts.",
  },
];

function xmp({ title, description }) {
  const escape = (value) => value.replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;");
  return `<?xpacket begin="﻿" id="W5M0MpCehiHzreSzNTczkc9d"?>
<x:xmpmeta xmlns:x="adobe:ns:meta/">
  <rdf:RDF xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#">
    <rdf:Description rdf:about="" xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:photoshop="http://ns.adobe.com/photoshop/1.0/" xmlns:iptcExt="http://iptc.org/std/Iptc4xmpExt/2008-02-29/">
      <dc:title><rdf:Alt><rdf:li xml:lang="x-default">${escape(title)}</rdf:li></rdf:Alt></dc:title>
      <dc:description><rdf:Alt><rdf:li xml:lang="x-default">${escape(description)} Original AI-generated conceptual artwork; not microscopy, histology, or diagnostic imaging.</rdf:li></rdf:Alt></dc:description>
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
    .resize(1122, 1402, { fit: "cover", position: "attention" })
    .withXmp(metadata)
    .webp({ quality: 86, smartSubsample: true })
    .toFile(join(output, `${image.target}.webp`));

  await sharp(source)
    .resize(1200, 630, { fit: "cover", position: "attention" })
    .withXmp(metadata)
    .webp({ quality: 84, smartSubsample: true })
    .toFile(join(output, `${image.target}-social.webp`));
}

console.log(`Processed ${images.length} WikiBiome pilot masters into sidebar and social derivatives.`);
