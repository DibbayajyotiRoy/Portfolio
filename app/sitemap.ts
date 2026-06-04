import { MetadataRoute } from 'next'
import { coreProducts } from '@/lib/content/projects'

// IMPORTANT: do NOT use `new Date()` here. A fresh `lastmod` on every build tells
// Google every page changed every deploy — it learns to distrust the signal and
// deprioritizes crawling. Use honest, stable per-page dates and only bump a
// page's date when its content actually changes.
export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://dibbayajyoti.com'

  // Product hub pages — one per public product, kept in sync with projects.ts.
  const hubPages = [
    { path: '/projects', lastModified: '2026-06-04', changeFrequency: 'monthly' as const, priority: 0.9 },
    ...coreProducts.map((p) => ({
      path: `/projects/${p.id}`,
      lastModified: '2026-06-04',
      changeFrequency: 'monthly' as const,
      priority: 0.85,
    })),
  ]

  const pages = [
    { path: '', lastModified: '2026-05-25', changeFrequency: 'monthly' as const, priority: 1 },
    { path: '/work', lastModified: '2026-05-31', changeFrequency: 'monthly' as const, priority: 0.9 },
    ...hubPages,
    { path: '/about', lastModified: '2026-05-31', changeFrequency: 'monthly' as const, priority: 0.8 },
    { path: '/writing', lastModified: '2026-05-31', changeFrequency: 'weekly' as const, priority: 0.8 },
    { path: '/contact', lastModified: '2026-04-06', changeFrequency: 'yearly' as const, priority: 0.7 },
    { path: '/rust', lastModified: '2026-05-31', changeFrequency: 'monthly' as const, priority: 0.85 },
    { path: '/webassembly', lastModified: '2026-05-31', changeFrequency: 'monthly' as const, priority: 0.85 },
    { path: '/ai-engineering', lastModified: '2026-05-31', changeFrequency: 'monthly' as const, priority: 0.85 },
    { path: '/nextjs-seo', lastModified: '2026-05-31', changeFrequency: 'monthly' as const, priority: 0.85 },
    { path: '/distributed-systems', lastModified: '2026-05-31', changeFrequency: 'monthly' as const, priority: 0.85 },
    { path: '/diffcore-vs-jsondiffpatch', lastModified: '2026-05-31', changeFrequency: 'monthly' as const, priority: 0.85 },
    { path: '/klinder-vs-posthog', lastModified: '2026-05-31', changeFrequency: 'monthly' as const, priority: 0.85 },
    { path: '/ahtml-vs-llms-txt', lastModified: '2026-05-31', changeFrequency: 'monthly' as const, priority: 0.85 },
    { path: '/privacy', lastModified: '2026-05-18', changeFrequency: 'yearly' as const, priority: 0.3 },
  ]

  return pages.map((p) => ({
    url: `${baseUrl}${p.path}`,
    lastModified: p.lastModified,
    changeFrequency: p.changeFrequency,
    priority: p.priority,
  }))
}
