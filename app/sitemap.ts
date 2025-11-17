import { MetadataRoute } from 'next'

const articles = [
  { id: 1, slug: "jurmola-man-11-years-wedding-excuse", date: "Nov 15, 2025" },
  { id: 2, slug: "riga-monument-mystery-just-some-guy", date: "Nov 15, 2025" },
  { id: 3, slug: "latvian-potato-achieves-sentience", date: "Nov 14, 2025" },
  { id: 4, slug: "baltic-sea-actually-large-puddle", date: "Nov 13, 2025" },
  { id: 5, slug: "daugava-river-only-tuesdays-thursdays", date: "Nov 12, 2025" },
  { id: 6, slug: "latvian-language-87-percent-silence", date: "Nov 11, 2025" },
  { id: 7, slug: "jurmola-man-life-savings-perfectly-round-stone", date: "Nov 10, 2025" },
  { id: 8, slug: "latvia-moving-east-geographic-adjustment", date: "Nov 9, 2025" },
  { id: 9, slug: "london-banker-jurmola-compacting-beach-sand", date: "Nov 16, 2025" },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://jurmola.vercel.app';

  // Main pages
  const routes = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'daily' as const,
      priority: 1,
    },
    {
      url: `${baseUrl}/feed.xml?lang=en`,
      lastModified: new Date(),
      changeFrequency: 'daily' as const,
      priority: 0.8,
    },
  ];

  // Article pages
  const articleRoutes = articles.map((article) => ({
    url: `${baseUrl}/article/${article.slug}`,
    lastModified: new Date(article.date),
    changeFrequency: 'weekly' as const,
    priority: 0.9,
  }));

  return [...routes, ...articleRoutes];
}

