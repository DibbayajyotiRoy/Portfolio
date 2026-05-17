import type { Metadata } from "next";

const baseUrl = process.env.VERCEL_PROJECT_PRODUCTION_URL
  ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
  : "https://dibbayajyoti.com";

export const metadata: Metadata = {
  title: "Distributed Systems & Backend — Dibbayajyoti Roy | Redis, Edge, Postgres",
  description:
    "Distributed systems and backend engineering by Dibbayajyoti Roy — edge ingestion on Cloudflare Workers, Redis polling optimization, multi-tenant Postgres with RLS, and backend scaling.",
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
    title: "Distributed Systems & Backend — Dibbayajyoti Roy",
    description:
      "Edge ingestion on Cloudflare Workers, Redis optimization, multi-tenant Postgres with RLS, and backend scaling.",
    url: `${baseUrl}/distributed-systems`,
    type: "profile",
  },
  twitter: {
    title: "Distributed Systems & Backend — Dibbayajyoti Roy",
    description:
      "Edge ingestion, Redis optimization, multi-tenant Postgres with RLS, backend scaling.",
  },
};

const collectionPageJsonLd = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  "@id": "https://dibbayajyoti.com/distributed-systems#collection",
  "name": "Distributed Systems & Backend — Dibbayajyoti Roy",
  "url": "https://dibbayajyoti.com/distributed-systems",
  "description":
    "Distributed systems and backend engineering by Dibbayajyoti Roy — edge ingestion on Cloudflare Workers, Redis optimization, multi-tenant Postgres with Row-Level Security, and backend scaling.",
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

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "@id": "https://dibbayajyoti.com/distributed-systems#faq",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What distributed systems work has Dibbayajyoti Roy done?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "He built the Klinder-OSS analytics pipeline — edge ingestion on Cloudflare Workers and Cloudflare Queues with Neon Postgres and Row-Level Security for multi-tenant isolation — and runs production backend services on a Proxmox cluster behind nginx.",
      },
    },
    {
      "@type": "Question",
      "name": "What was the Redis polling bottleneck?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A naive SCAN over a remote Redis was timing out at 100 seconds in production. Switching to batched MGET with client-side filtering gave a ~90% efficiency improvement and eliminated the timeouts.",
      },
    },
    {
      "@type": "Question",
      "name": "How does he handle multi-tenant SaaS isolation?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Neon Postgres with Row-Level Security, so tenant isolation is enforced at the database layer rather than trusted to application code.",
      },
    },
    {
      "@type": "Question",
      "name": "What backend scaling work has he shipped?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "On production HR SaaS he cut page load from 3.4s to 1.9s by eliminating N+1 queries, adding composite indexes, and splitting Next.js bundle routes, and designed 12+ REST endpoints in Node.js and Express on PostgreSQL.",
      },
    },
  ],
};

export default function DistributedSystemsLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionPageJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      {children}
    </>
  );
}
