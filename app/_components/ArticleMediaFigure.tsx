import type { ArticleMedia } from "@/lib/article-media";

export function ArticleMediaFigure({ media }: { media: ArticleMedia }) {
  return (
    <figure className="article-media-figure">
      <div className="article-media-stage">
        <img
          src={media.src}
          width={media.width}
          height={media.height}
          alt={media.alt}
          loading="lazy"
          decoding="async"
        />
        <span>Scientific plate</span>
      </div>
      <figcaption>
        <strong>WikiBiome conceptual illustration</strong>
        <p>{media.caption}</p>
        <small>{media.credit} · Original AI-generated artwork</small>
      </figcaption>
    </figure>
  );
}
