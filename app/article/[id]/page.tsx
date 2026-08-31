import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { WikiArticle } from "@/app/_components/WikiArticle";
import { getWikiPage, plainText } from "@/lib/wikibiome";

type RouteProps = { params: Promise<{ id: string }> };

export async function generateMetadata({ params }: RouteProps): Promise<Metadata> {
  const { id } = await params;
  const page = getWikiPage(id);
  if (!page) return { title: "Article not found — WikiBiome" };
  const title = `${page.title} — WikiBiome`;
  const description = plainText(page.overview).slice(0, 180) || `Read the ${page.title} record in WikiBiome.`;

  return {
    title,
    description,
    openGraph: { title, description, type: "article", images: [] },
    twitter: { card: "summary", title, description, images: [] },
  };
}

export default async function ArticlePage({ params }: RouteProps) {
  const { id } = await params;
  const page = getWikiPage(id);
  if (!page) notFound();
  return <WikiArticle page={page} />;
}
