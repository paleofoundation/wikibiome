import type { Metadata } from "next";
import { headers } from "next/headers";
import { notFound, redirect } from "next/navigation";
import { DiseaseArticle } from "@/app/_components/DiseaseArticle";
import { WikiArticle } from "@/app/_components/WikiArticle";
import { articleMediaStructuredData, getArticleMedia } from "@/lib/article-media";
import { canonicalDiseaseId, getDiseaseRecord, getWikiPage, plainText } from "@/lib/wikibiome";

type RouteProps = { params: Promise<{ id: string }> };

async function requestOrigin() {
  const incomingHeaders = await headers();
  const host = incomingHeaders.get("x-forwarded-host") ?? incomingHeaders.get("host") ?? "wikibiome.com";
  const protocol = incomingHeaders.get("x-forwarded-proto") ?? (host.includes("localhost") ? "http" : "https");
  return `${protocol}://${host}`;
}

export async function generateMetadata({ params }: RouteProps): Promise<Metadata> {
  const { id } = await params;
  const requestedPage = getWikiPage(id);
  const disease = requestedPage && ["disease", "signature"].includes(requestedPage.category)
    ? getDiseaseRecord(id)
    : undefined;
  const page = disease?.page ?? requestedPage;
  if (!page) return { title: "Article not found — WikiBiome" };
  const canonicalId = disease?.canonicalId ?? page.id;
  const media = getArticleMedia(canonicalId);
  const title = `${page.title} — WikiBiome`;
  const description = plainText(page.overview).slice(0, 180) || `Read the ${page.title} record in WikiBiome.`;
  const origin = media ? await requestOrigin() : undefined;
  const socialImage = media && origin ? new URL(media.socialSrc, origin).toString() : undefined;

  return {
    title,
    description,
    alternates: { canonical: `/article/${canonicalId}` },
    openGraph: {
      title,
      description,
      type: "article",
      images: media && socialImage ? [{ url: socialImage, width: media.socialWidth, height: media.socialHeight, alt: media.alt }] : [],
    },
    twitter: {
      card: media ? "summary_large_image" : "summary",
      title,
      description,
      images: socialImage ? [socialImage] : [],
    },
  };
}

export default async function ArticlePage({ params }: RouteProps) {
  const { id } = await params;
  const requestedPage = getWikiPage(id);
  if (!requestedPage) notFound();
  const disease = ["disease", "signature"].includes(requestedPage.category)
    ? getDiseaseRecord(id)
    : undefined;
  if (disease && requestedPage.category === "signature" && canonicalDiseaseId(id) !== id) {
    redirect(`/article/${disease.canonicalId}#signature`);
  }
  const canonicalId = disease?.canonicalId ?? requestedPage.id;
  const media = getArticleMedia(canonicalId);
  const origin = media ? await requestOrigin() : undefined;
  const schema = media && origin
    ? articleMediaStructuredData(media, origin, `/article/${canonicalId}`)
    : undefined;

  return (
    <>
      {schema && (
        <script
          type="application/ld+json"
          data-article-media-schema
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replaceAll("<", "\\u003c") }}
        />
      )}
      {disease ? <DiseaseArticle record={disease} /> : <WikiArticle page={requestedPage} />}
    </>
  );
}
