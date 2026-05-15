import type { Metadata } from "next";

const baseUrl = process.env.VERCEL_PROJECT_PRODUCTION_URL
  ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
  : "https://dibbayajyoti.com";

export const metadata: Metadata = {
  title: "Klinder-OSS vs PostHog — Open-Source Analytics + Session + Email SDK",
  description:
    "Klinder-OSS vs PostHog in 2026. One open-source SDK that unifies typed event tracking, error-based session recording, and email trigger workflows — replacing PostHog + LogRocket + Customer.io.",
  alternates: { canonical: "/klinder-vs-posthog" },
  openGraph: {
    title: "Klinder-OSS vs PostHog — Unified analytics + session + email SDK",
    description:
      "One install replaces PostHog + LogRocket + Customer.io: typed events with Zod, error-triggered session recording, and behavior-driven email workflows.",
    url: `${baseUrl}/klinder-vs-posthog`,
    type: "article",
  },
  twitter: {
    title: "Klinder-OSS vs PostHog",
    description:
      "Open-source SDK unifying analytics, session recording, and email triggers in one install.",
  },
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "TechArticle",
  "@id": "https://dibbayajyoti.com/klinder-vs-posthog#article",
  "headline": "Klinder-OSS vs PostHog: choosing an open-source product analytics stack in 2026",
  "url": "https://dibbayajyoti.com/klinder-vs-posthog",
  "datePublished": "2026-05-15",
  "dateModified": "2026-05-15",
  "inLanguage": "en",
  "description":
    "Side-by-side comparison of Klinder-OSS (unified analytics + session recording + email SDK) and PostHog (full product analytics suite).",
  "keywords": [
    "klinder vs posthog",
    "open source posthog alternative",
    "open source logrocket alternative",
    "self-hosted product analytics",
    "session recording sdk",
    "email automation sdk",
    "cloudflare workers analytics",
  ],
  "author": { "@id": "https://dibbayajyoti.com/#person" },
  "publisher": { "@id": "https://dibbayajyoti.com/#person" },
  "isPartOf": { "@id": "https://dibbayajyoti.com/#website" },
  "mainEntityOfPage": "https://dibbayajyoti.com/klinder-vs-posthog",
  "mentions": [
    { "@id": "https://dibbayajyoti.com/work#klinder-oss" },
    {
      "@type": "SoftwareApplication",
      "name": "PostHog",
      "applicationCategory": "BusinessApplication",
      "url": "https://posthog.com",
    },
  ],
  "breadcrumb": {
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://dibbayajyoti.com" },
      { "@type": "ListItem", "position": 2, "name": "Klinder vs PostHog", "item": "https://dibbayajyoti.com/klinder-vs-posthog" },
    ],
  },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "@id": "https://dibbayajyoti.com/klinder-vs-posthog#faq",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What does Klinder-OSS replace that PostHog does not?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Klinder-OSS bundles three jobs: typed product analytics, error-based session recording, and behaviour-triggered email workflows. PostHog covers analytics and session replay but not email automation — that traditionally requires Customer.io, Loops, or Resend wired separately. With Klinder, the same event that fires a funnel can also send the email, with one SDK.",
      },
    },
    {
      "@type": "Question",
      "name": "Is Klinder-OSS open source?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Klinder-OSS is MIT-licensed, source-available, and self-hostable on Cloudflare Workers + Neon Postgres or any Postgres-compatible database. PostHog is also open source (MIT for the OSS edition) but is much heavier to self-host.",
      },
    },
    {
      "@type": "Question",
      "name": "How fast is Klinder ingestion?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Edge ingestion runs on Cloudflare Workers + Cloudflare Queues. The Rust port via workers-rs is targeting sub-10 ms p95 latency. PostHog Cloud routes to a regional API; ingestion latency depends on your distance from the chosen region.",
      },
    },
    {
      "@type": "Question",
      "name": "Does Klinder-OSS support multi-tenant isolation?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Storage is Neon Postgres with Row-Level Security (RLS) for multi-tenant isolation, suitable for SaaS teams that need hard data boundaries between customer workspaces.",
      },
    },
    {
      "@type": "Question",
      "name": "Should I move off PostHog?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "No — PostHog is the right answer if you need the full product-analytics suite (funnels, retention, cohorts, feature flags, A/B testing, surveys) out of the box. Klinder-OSS is the right answer if you want one lightweight SDK that does the three jobs most early-stage SaaS teams stitch together: events, session recording on errors, and lifecycle email.",
      },
    },
  ],
};

export default function KlinderVsPostHogLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      {children}
    </>
  );
}
