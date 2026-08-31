import { WikiArticle } from "@/app/_components/WikiArticle";
import { getWikiPage } from "@/lib/wikibiome";

export default function Home() {
  const page = getWikiPage("gut-microbiome");

  if (!page) {
    throw new Error("The Gut Microbiome foundation article is missing from the WikiBiome corpus.");
  }

  return <WikiArticle page={page} home />;
}
