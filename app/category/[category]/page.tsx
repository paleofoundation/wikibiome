import type { Metadata } from "next";
import { WikiDirectory } from "@/app/_components/WikiDirectory";
import { categoryLabel, getCategoryPages } from "@/lib/wikibiome";

type RouteProps = { params: Promise<{ category: string }> };

export async function generateMetadata({ params }: RouteProps): Promise<Metadata> {
  const { category } = await params;
  const title = `${categoryLabel(category)} — WikiBiome`;
  const description = `Browse WikiBiome’s evidence-linked ${categoryLabel(category).toLowerCase()} records.`;
  return {
    title,
    description,
    openGraph: { title, description, type: "website", images: [] },
    twitter: { card: "summary", title, description, images: [] },
  };
}

export default async function CategoryPage({ params }: RouteProps) {
  const { category } = await params;
  const pages = getCategoryPages(category);
  const label = categoryLabel(category);
  const description = category === "signature"
    ? "A reconciled index: each signature opens inside its canonical disease record, where five evidence layers and the full disease narrative live together."
    : `An alphabetical index of ${label.toLowerCase()} in the public WikiBiome knowledge base.`;
  return <WikiDirectory title={label} kicker={category === "signature" ? "Generated disease atlas" : "Knowledge domain"} description={description} pages={pages} />;
}
