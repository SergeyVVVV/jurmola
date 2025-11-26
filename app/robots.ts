import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  const baseUrl = 'https://jurmola.com'

  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/admin/'], // Блокируем служебные директории
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
  }
}

