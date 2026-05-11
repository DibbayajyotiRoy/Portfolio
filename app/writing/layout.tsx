import type { Metadata } from "next";

const baseUrl = process.env.VERCEL_PROJECT_PRODUCTION_URL
  ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
  : "https://dibbayajyoti.com";

export const metadata: Metadata = {
  title: "Writing — Dibbayajyoti Roy | Engineering Notes on Rust, Next.js, AI",
  description:
    "Long-form engineering articles by Dibbayajyoti Roy — production incidents, AI engineering with AWS Bedrock, Next.js SEO in 2026, and Rust + WebAssembly performance work.",
  alternates: { canonical: "/writing" },
  openGraph: {
    title: "Writing — Dibbayajyoti Roy",
    description:
      "Engineering articles by Dibbayajyoti Roy. Production debugging, AI engineering, Next.js SEO, Rust + WASM performance.",
    url: `${baseUrl}/writing`,
    type: "website",
  },
  twitter: {
    title: "Writing — Dibbayajyoti Roy",
    description:
      "Engineering articles by Dibbayajyoti Roy. Production debugging, AI engineering, Next.js SEO, Rust + WASM.",
  },
};

const collectionPageJsonLd = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  "@id": "https://dibbayajyoti.com/writing#collection",
  "name": "Writing — Dibbayajyoti Roy",
  "url": "https://dibbayajyoti.com/writing",
  "description":
    "Engineering articles by Dibbayajyoti Roy on production incidents, AI engineering, Next.js SEO, and Rust + WebAssembly performance.",
  "mainEntity": { "@id": "https://dibbayajyoti.com/#person" },
  "breadcrumb": {
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://dibbayajyoti.com" },
      { "@type": "ListItem", "position": 2, "name": "Writing", "item": "https://dibbayajyoti.com/writing" },
    ],
  },
  "inLanguage": "en-US",
};

const redisArticleJsonLd = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  "@id": "https://dibbayajyoti.com/writing#redis-polling-bottleneck",
  "headline": "How I Fixed a Redis Polling Bottleneck That Was Timing Out in Production",
  "url": "https://medium.com/p/afae306668ba",
  "mainEntityOfPage": "https://medium.com/p/afae306668ba",
  "datePublished": "2026-02-01",
  "inLanguage": "en",
  "description":
    "A production incident — naive SCAN over a remote Redis timed out at 100s. Switched to batched MGET with client-side filtering for ~90% efficiency improvement and zero timeouts.",
  "keywords": ["Redis", "SCAN", "MGET", "production debugging", "performance", "Node.js"],
  "author": { "@id": "https://dibbayajyoti.com/#person" },
  "publisher": { "@id": "https://dibbayajyoti.com/#person" },
  "isPartOf": { "@id": "https://dibbayajyoti.com/writing#collection" },
};

const seoArticleJsonLd = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  "@id": "https://dibbayajyoti.com/writing#nextjs-seo-2026",
  "headline": "Next.js SEO in 2026: A Developer's Practical Guide",
  "url": "https://medium.com/@dibbayajyoti/next-js-seo-in-2026-a-developers-practical-guide-63449d44be22",
  "mainEntityOfPage":
    "https://medium.com/@dibbayajyoti/next-js-seo-in-2026-a-developers-practical-guide-63449d44be22",
  "datePublished": "2026-03-01",
  "inLanguage": "en",
  "description":
    "Practical guide covering structured data (JSON-LD), llms.txt for AI crawlers, zero-click optimization, sitemap configuration, and what actually moves the needle for Next.js sites in 2026.",
  "keywords": ["Next.js", "SEO", "JSON-LD", "llms.txt", "AI crawlers", "Core Web Vitals"],
  "author": { "@id": "https://dibbayajyoti.com/#person" },
  "publisher": { "@id": "https://dibbayajyoti.com/#person" },
  "isPartOf": { "@id": "https://dibbayajyoti.com/writing#collection" },
};

const itemListJsonLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  "@id": "https://dibbayajyoti.com/writing#articles",
  "name": "Articles by Dibbayajyoti Roy",
  "itemListOrder": "https://schema.org/ItemListOrderDescending",
  "numberOfItems": 2,
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "item": { "@id": "https://dibbayajyoti.com/writing#nextjs-seo-2026" } },
    { "@type": "ListItem", "position": 2, "item": { "@id": "https://dibbayajyoti.com/writing#redis-polling-bottleneck" } },
  ],
};

export default function WritingLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionPageJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(redisArticleJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(seoArticleJsonLd) }} />
      {children}
    </>
  );
}
