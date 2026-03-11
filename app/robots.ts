import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  const baseUrl = 'https://jurmola.com'

  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/admin/', '/cover/', '/news/category/'], // Блокируем служебные директории и дублирующийся контент
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
  }
}

