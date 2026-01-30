import type { SyntheticEvent } from 'react';
import type { Article } from '../data/articles';

/** Local cover route for external images. */
export function getArticleImageUrl(article: Pick<Article, 'imageUrl' | 'slug'>): string {
  return article.imageUrl.startsWith('/') ? article.imageUrl : `/cover/${article.slug}`;
}

export function getArticleImageAbsoluteUrl(
  article: Pick<Article, 'imageUrl' | 'slug'>,
  baseUrl: string
): string {
  const url = getArticleImageUrl(article);
  return url.startsWith('http') ? url : `${baseUrl}${url}`;
}

/** Fallback URL when article cover fails to load (e.g. broken CDN). */
export const ARTICLE_IMAGE_FALLBACK = 'https://picsum.photos/seed/0/800/600';

export function onArticleImageError(e: SyntheticEvent<HTMLImageElement>): void {
  const el = e.currentTarget;
  el.onerror = null;
  el.src = ARTICLE_IMAGE_FALLBACK;
}
