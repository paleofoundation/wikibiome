import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { WikiSource } from "@/app/_components/WikiSource";
import { getSource } from "@/lib/wikibiome";

type RouteProps = { params: Promise<{ id: string }> };

export async function generateMetadata({ params }: RouteProps): Promise<Metadata> {
  const { id } = await params;
  const source = getSource(id);
  if (!source) return { title: "Source not found — WikiBiome" };
  const title = `${source.title} — WikiBiome source`;
  const description = `${source.authors?.join(", ") || "WikiBiome source"}. ${source.journal || "Journal pending"}, ${source.year || "year pending"}.`;
  return {
    title,
    description,
    openGraph: { title, description, type: "article", images: [] },
    twitter: { card: "summary", title, description, images: [] },
  };
}

export default async function SourcePage({ params }: RouteProps) {
  const { id } = await params;
  const source = getSource(id);
  if (!source) notFound();
  return <WikiSource id={id} source={source} />;
}
