import sharp from "sharp";
import { mkdir } from "node:fs/promises";
import { join } from "node:path";
import { articleMediaPolicy, articleMediaRegistry } from "../lib/article-media-registry.mjs";

const root = process.cwd();
const masters = join(root, "work", "media-masters");
const output = join(root, "public", "media");

function validateMedia(media) {
  const requiredAuthorities = articleMediaPolicy.requiredAuthorities[media.subjectKind];
  if (!requiredAuthorities) throw new Error(`${media.pageId}: unsupported subject kind ${media.subjectKind}.`);
  const authorities = new Set(media.scientificIdentifiers.map((identifier) => identifier.authority));
  for (const authority of requiredAuthorities) {
    if (!authorities.has(authority)) throw new Error(`${media.pageId}: missing required ${authority} identifier.`);
  }
  const propertyIDs = new Set(media.scientificIdentifiers.map((identifier) => identifier.propertyID));
  for (const propertyID of articleMediaPolicy.requiredPropertyIDs[media.subjectKind]) {
    if (!propertyIDs.has(propertyID)) throw new Error(`${media.pageId}: missing required ${propertyID} identifier.`);
  }
  if (media.subjectKind === "taxon" && (!media.scientificName || !media.taxonomicRank)) {
    throw new Error(`${media.pageId}: taxa require a scientific name and taxonomic rank.`);
  }
  if (media.license !== articleMediaPolicy.license.url) throw new Error(`${media.pageId}: license does not match the media policy.`);
  if (!articleMediaPolicy.reviewStatuses[media.reviewStatus]) throw new Error(`${media.pageId}: unknown review status.`);
  if (!articleMediaPolicy.identifierReviewStatuses[media.identifierReviewStatus]) throw new Error(`${media.pageId}: controlled identifiers are not authority-verified.`);
}

function xmp(media) {
  const escape = (value) => String(value).replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;").replaceAll('"', "&quot;");
  const identifiers = media.scientificIdentifiers
    .flatMap((identifier) => [identifier.compact, identifier.url])
    .map((value) => `<rdf:li>${escape(value)}</rdf:li>`)
    .join("");
  const review = articleMediaPolicy.reviewStatuses[media.reviewStatus];
  return `<?xpacket begin="\uFEFF" id="W5M0MpCehiHzreSzNTczkc9d"?>
<x:xmpmeta xmlns:x="adobe:ns:meta/">
  <rdf:RDF xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#">
    <rdf:Description rdf:about="" xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:photoshop="http://ns.adobe.com/photoshop/1.0/" xmlns:iptcExt="http://iptc.org/std/Iptc4xmpExt/2008-02-29/" xmlns:xmpRights="http://ns.adobe.com/xap/1.0/rights/" xmlns:cc="http://creativecommons.org/ns#" xmlns:wb="https://wikibiome.com/ns/media/1.0/">
      <dc:title><rdf:Alt><rdf:li xml:lang="x-default">${escape(media.title)}</rdf:li></rdf:Alt></dc:title>
      <dc:description><rdf:Alt><rdf:li xml:lang="x-default">${escape(media.description)}</rdf:li></rdf:Alt></dc:description>
      <dc:creator><rdf:Seq><rdf:li>${escape(media.credit)}</rdf:li></rdf:Seq></dc:creator>
      <dc:subject><rdf:Bag>${identifiers}</rdf:Bag></dc:subject>
      <dc:rights><rdf:Alt><rdf:li xml:lang="x-default">© ${escape(media.created.slice(0, 4))} ${escape(media.credit)}. Licensed ${escape(articleMediaPolicy.license.shortName)}.</rdf:li></rdf:Alt></dc:rights>
      <photoshop:Credit>${escape(media.credit)}</photoshop:Credit>
      <iptcExt:DigitalSourceType>https://cv.iptc.org/newscodes/digitalsourcetype/trainedAlgorithmicMedia</iptcExt:DigitalSourceType>
      <xmpRights:Marked>True</xmpRights:Marked>
      <xmpRights:WebStatement>${escape(media.license)}</xmpRights:WebStatement>
      <xmpRights:UsageTerms><rdf:Alt><rdf:li xml:lang="x-default">${escape(articleMediaPolicy.license.name)}; attribution to ${escape(articleMediaPolicy.license.attributionName)}.</rdf:li></rdf:Alt></xmpRights:UsageTerms>
      <cc:license rdf:resource="${escape(media.license)}"/>
      <wb:SubjectKind>${escape(media.subjectKind)}</wb:SubjectKind>
      <wb:ReviewStatus>${escape(media.reviewStatus)}</wb:ReviewStatus>
      <wb:ReviewStatusLabel>${escape(review.label)}</wb:ReviewStatusLabel>
      <wb:IdentifierReviewStatus>${escape(media.identifierReviewStatus)}</wb:IdentifierReviewStatus>
      <wb:ReviewedOn>${escape(media.reviewedOn)}</wb:ReviewedOn>
    </rdf:Description>
  </rdf:RDF>
</x:xmpmeta>
<?xpacket end="w"?>`;
}

await mkdir(output, { recursive: true });

const images = Object.values(articleMediaRegistry);
for (const media of images) {
  validateMedia(media);
  const source = join(masters, media.masterSource);
  const metadata = xmp(media);
  await sharp(source)
    .resize({ width: media.width, withoutEnlargement: true })
    .withXmp(metadata)
    .webp({ quality: 86, smartSubsample: true })
    .toFile(join(root, "public", media.src));

  await sharp(source)
    .resize(media.socialWidth, media.socialHeight, { fit: "cover", position: "attention" })
    .withXmp(metadata)
    .webp({ quality: 84, smartSubsample: true })
    .toFile(join(root, "public", media.socialSrc));
}

console.log(`Processed ${images.length} WikiBiome image records with controlled identifiers, license, and review metadata.`);
