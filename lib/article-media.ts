export type ArticleMedia = {
  pageId: string;
  title: string;
  label: string;
  src: string;
  socialSrc: string;
  width: number;
  height: number;
  socialWidth: number;
  socialHeight: number;
  alt: string;
  caption: string;
  description: string;
  credit: string;
  provenance: string;
  created: string;
};

export const ARTICLE_MEDIA_DIGITAL_SOURCE_TYPE =
  "https://cv.iptc.org/newscodes/digitalsourcetype/trainedAlgorithmicMedia";

const articleMedia: Record<string, ArticleMedia> = {
  nickel: {
    pageId: "nickel",
    title: "Metallic nickel specimens",
    label: "Material specimen",
    src: "/media/nickel-technical-specimen-v2.webp",
    socialSrc: "/media/nickel-technical-specimen-v2-social.webp",
    width: 1254,
    height: 1254,
    socialWidth: 1200,
    socialHeight: 630,
    alt: "Silvery nickel pellets and irregular metallic nickel specimens on a pale cool blue-gray field.",
    caption: "Metallic nickel shown as pellets and irregular specimens. Appearance varies with purity and processing.",
    description: "WikiBiome technical specimen visualization of elemental nickel on a restrained cool laboratory field.",
    credit: "WikiBiome / Microbiome Medicine",
    provenance: "Technical specimen visualization",
    created: "2026-08-31",
  },
  "akkermansia-muciniphila": {
    pageId: "akkermansia-muciniphila",
    title: "Akkermansia muciniphila morphology",
    label: "Morphology reconstruction",
    src: "/media/akkermansia-muciniphila-morphology-v2.webp",
    socialSrc: "/media/akkermansia-muciniphila-morphology-v2-social.webp",
    width: 1536,
    height: 1024,
    socialWidth: 1200,
    socialHeight: 630,
    alt: "Scientific morphology reconstruction of an isolated oval Akkermansia muciniphila cell with fine surface filaments.",
    caption: "Representative morphology of A. muciniphila: an oval, Gram-negative, nonmotile, non-spore-forming bacterium. Surface structures vary by strain and culture conditions.",
    description: "WikiBiome microscopy-informed morphology reconstruction of Akkermansia muciniphila; it is an illustration, not a micrograph.",
    credit: "WikiBiome / Microbiome Medicine",
    provenance: "Microscopy-informed reconstruction",
    created: "2026-08-31",
  },
};

export function getArticleMedia(pageId: string) {
  return articleMedia[pageId];
}

export function getArticleMediaEntries() {
  return Object.values(articleMedia);
}

export function articleMediaStructuredData(media: ArticleMedia, origin: string, articlePath: string) {
  const articleUrl = new URL(articlePath, origin).toString();
  const imageUrl = new URL(media.src, origin).toString();
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${articleUrl}#webpage`,
    url: articleUrl,
    name: media.title,
    primaryImageOfPage: {
      "@type": "ImageObject",
      "@id": `${articleUrl}#primaryimage`,
      contentUrl: imageUrl,
      thumbnailUrl: imageUrl,
      name: media.title,
      caption: media.caption,
      description: media.description,
      encodingFormat: "image/webp",
      width: media.width,
      height: media.height,
      representativeOfPage: true,
      creditText: media.credit,
      creator: {
        "@type": "Organization",
        name: "WikiBiome, a project of Microbiome Medicine",
        url: "https://wikibiome.com",
      },
      digitalSourceType: ARTICLE_MEDIA_DIGITAL_SOURCE_TYPE,
      dateCreated: media.created,
    },
  };
}
