import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://dibbayajyoti.com'
  const now = new Date()

  return [
    {
      url: baseUrl,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: 1,
    },
    {
      url: `${baseUrl}/work`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/writing`,
      lastModified: now,
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: now,
      changeFrequency: 'yearly' as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/diffcore-vs-jsondiffpatch`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: 0.85,
    },
    {
      url: `${baseUrl}/klinder-vs-posthog`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: 0.85,
    },
    {
      url: `${baseUrl}/ahtml-vs-llms-txt`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: 0.85,
    },
    {
      url: `${baseUrl}/privacy`,
      lastModified: now,
      changeFrequency: 'yearly' as const,
      priority: 0.3,
    },
  ]
}
