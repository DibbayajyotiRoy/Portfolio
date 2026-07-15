import type { Metadata } from "next";

const baseUrl = process.env.VERCEL_PROJECT_PRODUCTION_URL
  ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
  : "https://dibbayajyoti.com";

export const metadata: Metadata = {
  title: "Distributed Systems & Backend: Dibbayajyoti Roy | Redis, Edge, Postgres",
  description:
    "Distributed systems and backend engineering by Dibbayajyoti Roy: edge ingestion on Cloudflare Workers, Redis polling optimization, multi-tenant Postgres with RLS, and backend scaling.",
  keywords: [
    "distributed systems debugging",
    "redis bottleneck",
    "redis polling optimization",
    "redis optimization",
    "backend scaling",
    "cloudflare workers developer",
    "backend performance engineer",
    "multi-tenant saas",
    "neon postgres rls",
  ],
  alternates: { canonical: "/distributed-systems" },
  openGraph: {
    title: "Distributed Systems & Backend: Dibbayajyoti Roy",
    description:
      "Edge ingestion on Cloudflare Workers, Redis optimization, multi-tenant Postgres with RLS, and backend scaling.",
    url: `${baseUrl}/distributed-systems`,
    type: "profile",
  },
  twitter: {
    title: "Distributed Systems & Backend: Dibbayajyoti Roy",
    description:
      "Edge ingestion, Redis optimization, multi-tenant Postgres with RLS, backend scaling.",
  },
};

const collectionPageJsonLd = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  "@id": "https://dibbayajyoti.com/distributed-systems#collection",
  "name": "Distributed Systems & Backend: Dibbayajyoti Roy",
  "url": "https://dibbayajyoti.com/distributed-systems",
  "description":
    "Distributed systems and backend engineering by Dibbayajyoti Roy: edge ingestion on Cloudflare Workers, Redis optimization, multi-tenant Postgres with Row-Level Security, and backend scaling.",
  "about": [
    { "@type": "Thing", "name": "Distributed systems" },
    { "@type": "Thing", "name": "Redis" },
    { "@type": "Thing", "name": "Cloudflare Workers" },
    { "@type": "Thing", "name": "Backend engineering" },
  ],
  "mainEntity": { "@id": "https://dibbayajyoti.com/#person" },
  "breadcrumb": {
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://dibbayajyoti.com" },
      { "@type": "ListItem", "position": 2, "name": "Distributed Systems", "item": "https://dibbayajyoti.com/distributed-systems" },
    ],
  },
  "inLanguage": "en-US",
};

export default function DistributedSystemsLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionPageJsonLd) }} />
      {children}
    </>
  );
}
