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
      </div>
      <figcaption>
        <strong>{media.label}</strong>
        <p>{media.caption}</p>
        <small>{media.credit} · {media.provenance}</small>
      </figcaption>
    </figure>
  );
}
