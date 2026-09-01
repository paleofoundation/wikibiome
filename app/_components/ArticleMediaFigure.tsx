import {
  ARTICLE_MEDIA_LICENSE_LABEL,
  getArticleMediaIdentifierReviewLabel,
  getArticleMediaReviewLabel,
  type ArticleMedia,
} from "@/lib/article-media";

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
        <dl className="article-media-record" aria-label="Scientific image record">
          <div>
            <dt>Identifiers</dt>
            <dd>{media.scientificIdentifiers.map((identifier) => (
              <a href={identifier.url} target="_blank" rel="noreferrer" key={`${identifier.propertyID}-${identifier.value}`}>{identifier.compact}</a>
            ))}</dd>
          </div>
          <div>
            <dt>Media status</dt>
            <dd><span>{getArticleMediaReviewLabel(media)}</span><span>{getArticleMediaIdentifierReviewLabel(media)}</span><a href={media.license} target="_blank" rel="license noreferrer">{ARTICLE_MEDIA_LICENSE_LABEL}</a></dd>
          </div>
        </dl>
      </figcaption>
    </figure>
  );
}
