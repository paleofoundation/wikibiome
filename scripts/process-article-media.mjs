#!/usr/bin/env node

import sharp from "sharp";
import { mkdir, rename } from "node:fs/promises";
import { existsSync } from "node:fs";
import { basename, join, resolve } from "node:path";
import { articleMediaRegistry } from "../lib/article-media-registry.mjs";
import { articleMediaXmp } from "../lib/article-media-metadata.mjs";
import { assertArticleMediaRecord } from "../lib/article-media-validation.mjs";

const projectRoot = process.cwd();
const masters = resolve(projectRoot, "media/masters");
const output = resolve(projectRoot, "public/media-files");
const args = process.argv.slice(2);
const promotions = [];
for (let index = 0; index < args.length; index += 1) {
  if (args[index] !== "--promote") continue;
  if (!args[index + 1] || args[index + 2] !== "--source" || !args[index + 3]) {
    throw new Error("Each promotion requires --promote <page-id> --source <draft-path>.");
  }
  promotions.push({ pageId: args[index + 1], sourcePath: args[index + 3] });
  index += 3;
}

await mkdir(masters, { recursive: true });
await mkdir(output, { recursive: true });

for (const promotion of promotions) {
  const media = articleMediaRegistry[promotion.pageId];
  if (!media) throw new Error(`${promotion.pageId}: promotion is forbidden until a fully reviewed registry record exists.`);
  assertArticleMediaRecord(media);
  const target = join(masters, media.masterSource);
  if (existsSync(target)) throw new Error(`${promotion.pageId}: refusing to overwrite existing canonical master ${basename(target)}.`);
  const temporary = `${target}.promoting`;
  const source = resolve(projectRoot, promotion.sourcePath);
  const metadata = await sharp(source).metadata();
  if (!metadata.width || !metadata.height || metadata.width < media.width || metadata.height < media.height) {
    throw new Error(`${promotion.pageId}: selected draft is smaller than the required ${media.width}×${media.height} article master.`);
  }
  await sharp(source)
    .withXmp(articleMediaXmp(media))
    .png({ compressionLevel: 9, adaptiveFiltering: true })
    .toFile(temporary);
  await rename(temporary, target);
}

for (const media of Object.values(articleMediaRegistry)) {
  assertArticleMediaRecord(media);
  const source = join(masters, media.masterSource);
  const masterMetadata = await sharp(source).metadata();
  if (masterMetadata.format !== "png") throw new Error(`${media.pageId}: lossless master must be PNG.`);
  if (!masterMetadata.width || !masterMetadata.height || masterMetadata.width < media.width || masterMetadata.height < media.height) {
    throw new Error(`${media.pageId}: lossless master is smaller than the declared article dimensions.`);
  }
  const xmp = articleMediaXmp(media);
  const masterTemporary = `${source}.metadata`;
  const articleTemporary = join(output, `.${media.publishedFile}.processing`);
  const socialTemporary = join(output, `.${media.socialFile}.processing`);

  await sharp(source)
    .withXmp(xmp)
    .png({ compressionLevel: 9, adaptiveFiltering: true })
    .toFile(masterTemporary);
  await rename(masterTemporary, source);

  await sharp(source)
    .resize(media.width, media.height, { fit: "cover", position: "attention" })
    .withXmp(xmp)
    .webp({ quality: media.articleWebpQuality ?? 86, smartSubsample: true })
    .toFile(articleTemporary);
  await sharp(source)
    .resize(media.socialWidth, media.socialHeight, {
      fit: media.socialResizeFit ?? "cover",
      position: media.socialResizePosition ?? (media.socialResizeFit === "contain" ? "centre" : "attention"),
      background: media.socialBackground ?? "#f3f7fb",
    })
    .withXmp(xmp)
    .webp({ quality: media.socialWebpQuality ?? 92, smartSubsample: true })
    .toFile(socialTemporary);
  await rename(articleTemporary, join(output, media.publishedFile));
  await rename(socialTemporary, join(output, media.socialFile));
}

console.log(`Processed ${Object.keys(articleMediaRegistry).length} reviewed WikiBiome media records from canonical lossless masters.`);
