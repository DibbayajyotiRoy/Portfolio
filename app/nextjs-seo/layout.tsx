import type { Metadata } from "next";

const baseUrl = process.env.VERCEL_PROJECT_PRODUCTION_URL
  ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
  : "https://dibbayajyoti.com";

export const metadata: Metadata = {
  title: "Next.js SEO: Dibbayajyoti Roy | Metadata API, JSON-LD, llms.txt",
  description:
    "Next.js SEO by Dibbayajyoti Roy: the Next.js Metadata API, JSON-LD structured data, sitemap optimization, llms.txt for AI crawlers, and Core Web Vitals performance. This site is the case study.",
  keywords: [
    "nextjs seo",
    "nextjs seo 2026",
    "nextjs metadata api",
    "json-ld nextjs",
    "nextjs structured data",
    "llms.txt nextjs",
    "nextjs sitemap optimization",
    "core web vitals nextjs",
    "nextjs ai seo",
    "nextjs performance optimization",
  ],
  alternates: { canonical: "/nextjs-seo" },
  openGraph: {
    title: "Next.js SEO: Dibbayajyoti Roy",
    description:
      "Next.js Metadata API, JSON-LD structured data, llms.txt for AI crawlers, and Core Web Vitals. Next.js SEO done as engineering.",
    url: `${baseUrl}/nextjs-seo`,
    type: "profile",
  },
  twitter: {
    title: "Next.js SEO: Dibbayajyoti Roy",
    description:
      "Next.js Metadata API, JSON-LD, llms.txt, Core Web Vitals. Next.js SEO as engineering.",
  },
};

const collectionPageJsonLd = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  "@id": "https://dibbayajyoti.com/nextjs-seo#collection",
  "name": "Next.js SEO: Dibbayajyoti Roy",
  "url": "https://dibbayajyoti.com/nextjs-seo",
  "description":
    "Next.js SEO by Dibbayajyoti Roy: the Next.js Metadata API, JSON-LD structured data, sitemap optimization, llms.txt for AI crawlers, and Core Web Vitals.",
  "about": [
    { "@type": "Thing", "name": "Next.js" },
    { "@type": "Thing", "name": "Search engine optimization" },
    { "@type": "Thing", "name": "Structured data" },
    { "@type": "Thing", "name": "Core Web Vitals" },
  ],
  "mainEntity": { "@id": "https://dibbayajyoti.com/#person" },
  "breadcrumb": {
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://dibbayajyoti.com" },
      { "@type": "ListItem", "position": 2, "name": "Next.js SEO", "item": "https://dibbayajyoti.com/nextjs-seo" },
    ],
  },
  "inLanguage": "en-US",
};

export default function NextjsSeoLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionPageJsonLd) }} />
      {children}
    </>
  );
}
