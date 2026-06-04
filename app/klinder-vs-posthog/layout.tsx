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

export default function KlinderVsPostHogLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      {children}
    </>
  );
}
