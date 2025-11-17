import { MetadataRoute } from 'next'
import { articles } from './data/articles';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://jurmola.vercel.app';

  // Homepage (highest priority)
  const homepage = {
    url: baseUrl,
    lastModified: new Date(),
    changeFrequency: 'daily' as const,
    priority: 1.0,
  };

  // Top-level category pages (high priority for SEO)
  const categoryPages = [
    {
      url: `${baseUrl}/politics/`,
      lastModified: new Date(),
      changeFrequency: 'daily' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/culture/`,
      lastModified: new Date(),
      changeFrequency: 'daily' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/business/`,
      lastModified: new Date(),
      changeFrequency: 'daily' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/opinion/`,
      lastModified: new Date(),
      changeFrequency: 'daily' as const,
      priority: 0.9,
    },
  ];

  // Subcategory pages (news by category)
  const subcategoryPages = [
    {
      url: `${baseUrl}/news/category/politics/`,
      lastModified: new Date(),
      changeFrequency: 'daily' as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/news/category/culture/`,
      lastModified: new Date(),
      changeFrequency: 'daily' as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/news/category/business/`,
      lastModified: new Date(),
      changeFrequency: 'daily' as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/news/category/opinion/`,
      lastModified: new Date(),
      changeFrequency: 'daily' as const,
      priority: 0.7,
    },
  ];

  // Article pages (high priority content)
  const articleRoutes = articles.map((article) => ({
    url: `${baseUrl}/news/${article.slug}`,
    lastModified: new Date(article.date),
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }));

  // RSS feed (lower priority utility page)
  const rssFeed = {
    url: `${baseUrl}/feed.xml?lang=en`,
    lastModified: new Date(),
    changeFrequency: 'daily' as const,
    priority: 0.5,
  };

  return [homepage, ...categoryPages, ...subcategoryPages, ...articleRoutes, rssFeed];
}

