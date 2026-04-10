import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  const baseUrl = process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : 'https://dibbayajyoti.com'

  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: '/tailwind/',
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
  }
}
