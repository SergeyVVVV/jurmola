import type { Article } from '../data/articles';

export type Language = 'ru' | 'en' | 'lv';

/**
 * Lightweight, single-language projection of an Article for list views.
 * Passing full Article objects into client components serialises every
 * article's fullContent in all three languages into the page HTML
 * (several megabytes per page view). Lists only need these fields.
 */
export interface ArticleCard {
  id: number;
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  imageUrl: string;
}

export function toArticleCard(article: Article, language: Language): ArticleCard {
  return {
    id: article.id,
    slug: article.slug,
    title: article.title[language],
    excerpt: article.excerpt[language],
    category: article.category[language],
    date: article.date,
    readTime: article.readTime,
    imageUrl: article.imageUrl,
  };
}

export function toArticleCards(articles: Article[], language: Language): ArticleCard[] {
  return articles.map((article) => toArticleCard(article, language));
}
