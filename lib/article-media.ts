export type ArticleMedia = {
  pageId: string;
  title: string;
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
  created: string;
};

export const ARTICLE_MEDIA_DIGITAL_SOURCE_TYPE =
  "https://cv.iptc.org/newscodes/digitalsourcetype/trainedAlgorithmicMedia";

const articleMedia: Record<string, ArticleMedia> = {
  nickel: {
    pageId: "nickel",
    title: "Nickel at the metal–microbiome interface",
    src: "/media/nickel-metal-microbiome-interface.webp",
    socialSrc: "/media/nickel-metal-microbiome-interface-social.webp",
    width: 1122,
    height: 1402,
    socialWidth: 1200,
    socialHeight: 630,
    alt: "Conceptual illustration of a nickel crystal lattice, metallic ions, a microbial biofilm, and an intestinal mucosal surface.",
    caption: "A conceptual view of nickel moving through a microbial biofilm at the intestinal mucosal interface.",
    description: "Original WikiBiome conceptual scientific illustration of nickel at the metal–microbiome interface; it is not microscopy or a clinical image.",
    credit: "WikiBiome / Microbiome Medicine",
    created: "2026-08-31",
  },
  "akkermansia-muciniphila": {
    pageId: "akkermansia-muciniphila",
    title: "Akkermansia muciniphila in the intestinal mucus layer",
    src: "/media/akkermansia-muciniphila-mucus-layer.webp",
    socialSrc: "/media/akkermansia-muciniphila-mucus-layer-social.webp",
    width: 1122,
    height: 1402,
    socialWidth: 1200,
    socialHeight: 630,
    alt: "Conceptual illustration of Akkermansia muciniphila cells within intestinal mucus above epithelial cells.",
    caption: "A conceptual view of A. muciniphila occupying its mucin-rich ecological niche above the intestinal epithelium.",
    description: "Original WikiBiome conceptual scientific illustration of Akkermansia muciniphila in the intestinal mucus layer; it is not microscopy.",
    credit: "WikiBiome / Microbiome Medicine",
    created: "2026-08-31",
  },
  "alzheimers-disease": {
    pageId: "alzheimers-disease",
    title: "Alzheimer's disease as a gut–brain–metal system",
    src: "/media/alzheimers-gut-brain-metal-system.webp",
    socialSrc: "/media/alzheimers-gut-brain-metal-system-social.webp",
    width: 1122,
    height: 1402,
    socialWidth: 1200,
    socialHeight: 630,
    alt: "Conceptual systems illustration of a brain, an intestinal microbiome, fibrillar forms, and metallic particles connected along a gut–brain axis.",
    caption: "A conceptual systems view of gut–brain signaling, microbial ecology, fibrillar structures, and metal redistribution in Alzheimer's disease research.",
    description: "Original WikiBiome conceptual scientific illustration of Alzheimer's disease research across the gut–brain–metal system; it is not diagnostic imaging.",
    credit: "WikiBiome / Microbiome Medicine",
    created: "2026-08-31",
  },
  dysbiosis: {
    pageId: "dysbiosis",
    title: "Dysbiosis as a destabilized microbial ecosystem",
    src: "/media/dysbiosis-destabilized-ecosystem.webp",
    socialSrc: "/media/dysbiosis-destabilized-ecosystem-social.webp",
    width: 1122,
    height: 1402,
    socialWidth: 1200,
    socialHeight: 630,
    alt: "Conceptual illustration of an uneven microbial community and disrupted ecological connections along one continuous intestinal mucosal surface.",
    caption: "A conceptual view of dysbiosis as a destabilized ecosystem with uneven community structure and barrier interactions—not a universal taxonomic signature.",
    description: "Original WikiBiome conceptual scientific illustration of dysbiosis as ecological instability; it is not microscopy or a diagnostic image.",
    credit: "WikiBiome / Microbiome Medicine",
    created: "2026-08-31",
  },
  "low-nickel-diet": {
    pageId: "low-nickel-diet",
    title: "Low-nickel diet as an exposure intervention",
    src: "/media/low-nickel-diet-exposure-intervention.webp",
    socialSrc: "/media/low-nickel-diet-exposure-intervention-social.webp",
    width: 1122,
    height: 1402,
    socialWidth: 1200,
    socialHeight: 630,
    alt: "Conceptual illustration of a selective filter reducing nickel-like particles approaching an intestinal microbial ecosystem.",
    caption: "A conceptual view of dietary nickel restriction as selective exposure management, not a depiction of detoxification or a cure.",
    description: "Original WikiBiome conceptual scientific illustration of a low-nickel diet as an exposure intervention; it is not medical advice.",
    credit: "WikiBiome / Microbiome Medicine",
    created: "2026-08-31",
  },
  "paradox-plant-based-diet-nickel-trap": {
    pageId: "paradox-plant-based-diet-nickel-trap",
    title: "The plant-based diet and nickel exposure paradox",
    src: "/media/plant-based-diet-nickel-paradox.webp",
    socialSrc: "/media/plant-based-diet-nickel-paradox-social.webp",
    width: 1122,
    height: 1402,
    socialWidth: 1200,
    socialHeight: 630,
    alt: "Conceptual illustration of nutrient-rich plant foods, nickel-like particles, an intestinal mucosal surface, and a microbial ecosystem.",
    caption: "A conceptual view of the tension between nutrient-rich plant foods and dietary nickel exposure in susceptible contexts—not a claim that plant foods are universally harmful.",
    description: "Original WikiBiome conceptual scientific illustration of the plant-based diet and nickel exposure paradox; it does not depict a universal hazard.",
    credit: "WikiBiome / Microbiome Medicine",
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
