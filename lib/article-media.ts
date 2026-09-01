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
  bifidobacterium: {
    pageId: "bifidobacterium",
    title: "Bifidobacterium morphology",
    label: "Morphology reconstruction",
    src: "/media/bifidobacterium-morphology-v1.webp",
    socialSrc: "/media/bifidobacterium-morphology-v1-social.webp",
    width: 1536,
    height: 1024,
    socialWidth: 1200,
    socialHeight: 630,
    alt: "Microscopy-informed reconstruction of Bifidobacterium cells with characteristic Y-shaped and V-shaped branching rods and clubbed ends on a pale cool field.",
    caption: "Representative Bifidobacterium morphology, including irregular bifid and club-shaped rods. Cell shape varies by species and culture conditions; this is an educational reconstruction, not a micrograph.",
    description: "WikiBiome microscopy-informed morphology reconstruction of Bifidobacterium with characteristic bifid and pleomorphic rod forms.",
    credit: "WikiBiome / Microbiome Medicine",
    provenance: "Microscopy-informed reconstruction",
    created: "2026-09-01",
  },
  "candida-albicans": {
    pageId: "candida-albicans",
    title: "Candida albicans morphology",
    label: "Morphology reconstruction",
    src: "/media/candida-albicans-morphology-v1.webp",
    socialSrc: "/media/candida-albicans-morphology-v1-social.webp",
    width: 1536,
    height: 1024,
    socialWidth: 1200,
    socialHeight: 630,
    alt: "Microscopy-informed reconstruction of oval Candida albicans yeast cells with budding pairs and a short pseudohyphal chain on a pale cool field.",
    caption: "Representative C. albicans yeast and pseudohyphal forms, with budding cells and constrictions between elongated cells. Morphology changes with growth state; this is an educational reconstruction, not a clinical micrograph.",
    description: "WikiBiome microscopy-informed fungal morphology reconstruction of Candida albicans in budding yeast and pseudohyphal growth forms.",
    credit: "WikiBiome / Microbiome Medicine",
    provenance: "Microscopy-informed fungal morphology reconstruction",
    created: "2026-09-01",
  },
  "alzheimers-disease": {
    pageId: "alzheimers-disease",
    title: "Alzheimer’s disease pathology",
    label: "Pathology reconstruction",
    src: "/media/alzheimers-disease-pathology-v2.webp",
    socialSrc: "/media/alzheimers-disease-pathology-v2-social.webp",
    width: 1536,
    height: 1024,
    socialWidth: 1200,
    socialHeight: 630,
    alt: "An anatomically detailed sagittal cutaway of a human brain on a pale cool clinical field.",
    caption: "Pathology-informed reconstruction of a sagittal human brain specimen, with restrained emphasis on structures commonly discussed in Alzheimer’s disease. This is an educational illustration, not a diagnostic image.",
    description: "WikiBiome pathology-informed reconstruction for the Alzheimer’s disease record; it is an illustration, not a tissue photograph or diagnostic image.",
    credit: "WikiBiome / Microbiome Medicine",
    provenance: "Pathology-informed reconstruction",
    created: "2026-08-31",
  },
  dysbiosis: {
    pageId: "dysbiosis",
    title: "Dysbiotic microbial community",
    label: "Community reconstruction",
    src: "/media/dysbiosis-microbial-community-v2.webp",
    socialSrc: "/media/dysbiosis-microbial-community-v2-social.webp",
    width: 1536,
    height: 1024,
    socialWidth: 1200,
    socialHeight: 630,
    alt: "A microscopy-informed mixed microbial community with rods, cocci, curved rods, and branching forms on a pale cool field.",
    caption: "Representative mixed microbial morphologies arranged as an uneven community. Dysbiosis is an ecological state rather than a single visible structure; this reconstruction is not a diagnostic micrograph.",
    description: "WikiBiome microscopy-informed reconstruction of an uneven mixed microbial community for the dysbiosis record.",
    credit: "WikiBiome / Microbiome Medicine",
    provenance: "Microscopy-informed community reconstruction",
    created: "2026-08-31",
  },
  "escherichia-coli": {
    pageId: "escherichia-coli",
    title: "Escherichia coli morphology",
    label: "Morphology reconstruction",
    src: "/media/escherichia-coli-morphology-v1.webp",
    socialSrc: "/media/escherichia-coli-morphology-v1-social.webp",
    width: 1536,
    height: 1024,
    socialWidth: 1200,
    socialHeight: 630,
    alt: "Microscopy-informed reconstruction of three rod-shaped Escherichia coli cells with peritrichous flagella and fine pili on a pale cool field.",
    caption: "Representative E. coli bacilli with rounded ends, peritrichous flagella, and fine pili. Surface structures vary by strain and culture conditions; this is an educational reconstruction, not a micrograph.",
    description: "WikiBiome microscopy-informed morphology reconstruction of Escherichia coli bacilli with representative flagella and pili.",
    credit: "WikiBiome / Microbiome Medicine",
    provenance: "Microscopy-informed reconstruction",
    created: "2026-09-01",
  },
  "helicobacter-pylori": {
    pageId: "helicobacter-pylori",
    title: "Helicobacter pylori morphology",
    label: "Morphology reconstruction",
    src: "/media/helicobacter-pylori-morphology-v1.webp",
    socialSrc: "/media/helicobacter-pylori-morphology-v1-social.webp",
    width: 1536,
    height: 1024,
    socialWidth: 1200,
    socialHeight: 630,
    alt: "Microscopy-informed reconstruction of three curved Helicobacter pylori cells with several long flagella emerging from one pole on a pale cool field.",
    caption: "Representative H. pylori cells with curved-to-helical bodies and tufts of sheathed flagella at one pole. Morphology varies with growth state; this is an educational reconstruction, not a micrograph.",
    description: "WikiBiome microscopy-informed morphology reconstruction of Helicobacter pylori with curved cell bodies and polar flagellar tufts.",
    credit: "WikiBiome / Microbiome Medicine",
    provenance: "Microscopy-informed reconstruction",
    created: "2026-09-01",
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
