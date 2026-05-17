import type { Metadata } from "next";

const baseUrl = process.env.VERCEL_PROJECT_PRODUCTION_URL
  ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
  : "https://dibbayajyoti.com";

export const metadata: Metadata = {
  title: "Next.js SEO — Dibbayajyoti Roy | Metadata API, JSON-LD, llms.txt",
  description:
    "Next.js SEO by Dibbayajyoti Roy — the Next.js Metadata API, JSON-LD structured data, sitemap optimization, llms.txt for AI crawlers, and Core Web Vitals performance. This site is the case study.",
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
    title: "Next.js SEO — Dibbayajyoti Roy",
    description:
      "Next.js Metadata API, JSON-LD structured data, llms.txt for AI crawlers, and Core Web Vitals — Next.js SEO done as engineering.",
    url: `${baseUrl}/nextjs-seo`,
    type: "profile",
  },
  twitter: {
    title: "Next.js SEO — Dibbayajyoti Roy",
    description:
      "Next.js Metadata API, JSON-LD, llms.txt, Core Web Vitals — Next.js SEO as engineering.",
  },
};

const collectionPageJsonLd = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  "@id": "https://dibbayajyoti.com/nextjs-seo#collection",
  "name": "Next.js SEO — Dibbayajyoti Roy",
  "url": "https://dibbayajyoti.com/nextjs-seo",
  "description":
    "Next.js SEO by Dibbayajyoti Roy — the Next.js Metadata API, JSON-LD structured data, sitemap optimization, llms.txt for AI crawlers, and Core Web Vitals.",
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

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "@id": "https://dibbayajyoti.com/nextjs-seo#faq",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What does Next.js SEO involve in 2026?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The Next.js Metadata API for titles and canonicals, JSON-LD structured data, a generated sitemap and robots file, llms.txt for AI crawlers, and healthy Core Web Vitals. Together they tell both Google and AI search engines what a site is about.",
      },
    },
    {
      "@type": "Question",
      "name": "How does dibbayajyoti.com implement structured data?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Every route emits JSON-LD — Person, WebSite, and FAQPage on the homepage, plus AboutPage, ProfilePage, CollectionPage, SoftwareApplication, and TechArticle schema on the relevant pages — all cross-referenced by stable @id so the entity graph stays consistent.",
      },
    },
    {
      "@type": "Question",
      "name": "What is llms.txt and does this site use it?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "llms.txt is a plain-text summary of a site written for AI crawlers and LLMs. This site serves both /llms.txt and an extended /llms-full.txt, linked from the document head.",
      },
    },
    {
      "@type": "Question",
      "name": "Why move long-form articles off Medium onto a Next.js site?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Articles hosted on a third party send ranking signals to that domain. Publishing canonical content on your own Next.js site builds topical authority where it compounds for you.",
      },
    },
  ],
};

export default function NextjsSeoLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionPageJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      {children}
    </>
  );
}
