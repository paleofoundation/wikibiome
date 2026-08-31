import type { Metadata } from "next";
import { notFound, redirect } from "next/navigation";
import { DiseaseArticle } from "@/app/_components/DiseaseArticle";
import { WikiArticle } from "@/app/_components/WikiArticle";
import { canonicalDiseaseId, getDiseaseRecord, getWikiPage, plainText } from "@/lib/wikibiome";

type RouteProps = { params: Promise<{ id: string }> };

export async function generateMetadata({ params }: RouteProps): Promise<Metadata> {
  const { id } = await params;
  const disease = getDiseaseRecord(id);
  const page = disease?.page ?? getWikiPage(id);
  if (!page) return { title: "Article not found — WikiBiome" };
  const title = `${page.title} — WikiBiome`;
  const description = plainText(page.overview).slice(0, 180) || `Read the ${page.title} record in WikiBiome.`;

  return {
    title,
    description,
    alternates: disease ? { canonical: `/article/${disease.canonicalId}` } : undefined,
    openGraph: { title, description, type: "article", images: [] },
    twitter: { card: "summary", title, description, images: [] },
  };
}

export default async function ArticlePage({ params }: RouteProps) {
  const { id } = await params;
  const disease = getDiseaseRecord(id);
  if (disease && canonicalDiseaseId(id) !== id) {
    redirect(`/article/${disease.canonicalId}#signature`);
  }
  if (disease) return <DiseaseArticle record={disease} />;
  const page = getWikiPage(id);
  if (!page) notFound();
  return <WikiArticle page={page} />;
}
