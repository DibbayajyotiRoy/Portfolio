import type { Metadata } from "next";

const baseUrl = process.env.VERCEL_PROJECT_PRODUCTION_URL
  ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
  : "https://dibbayajyoti.com";

export const metadata: Metadata = {
  title: "AHTML vs llms.txt: The Two Layers of the Agentic Web",
  description:
    "AHTML vs llms.txt in 2026. Why both exist, what each is for, and how the @ahtmljs/* npm scope ships AHTML, llms.txt, MCP, OpenAPI, and JSON-LD from one extractor.",
  alternates: { canonical: "/ahtml-vs-llms-txt" },
  openGraph: {
    title: "AHTML vs llms.txt: Two layers of the agentic web",
    description:
      "AHTML is the canonical machine-readable snapshot. llms.txt is the human-readable index. They sit at different layers and the @ahtmljs plugin emits both.",
    url: `${baseUrl}/ahtml-vs-llms-txt`,
    type: "article",
  },
  twitter: {
    title: "AHTML vs llms.txt",
    description:
      "Canonical machine-readable snapshot vs human-readable index. Both are emitted by @ahtmljs/next.",
  },
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "TechArticle",
  "@id": "https://dibbayajyoti.com/ahtml-vs-llms-txt#article",
  "headline": "AHTML vs llms.txt: how the two layers of the agentic web work together",
  "url": "https://dibbayajyoti.com/ahtml-vs-llms-txt",
  "datePublished": "2026-05-15",
  "dateModified": "2026-05-15",
  "inLanguage": "en",
  "description":
    "AHTML is the canonical machine-readable snapshot for AI agents. llms.txt is the human-readable index for LLM crawlers. They live at different layers and the @ahtmljs/next plugin emits both from a single extractor.",
  "keywords": [
    "ahtml vs llms.txt",
    "agentic html",
    "llms.txt",
    "agentic web",
    "ai crawler",
    "mcp server",
    "openapi for agents",
    "@ahtmljs/next",
    "well-known agent endpoint",
  ],
  "author": { "@id": "https://dibbayajyoti.com/#person" },
  "publisher": { "@id": "https://dibbayajyoti.com/#person" },
  "isPartOf": { "@id": "https://dibbayajyoti.com/#website" },
  "mainEntityOfPage": "https://dibbayajyoti.com/ahtml-vs-llms-txt",
  "mentions": [
    { "@id": "https://dibbayajyoti.com/work#ahtml-scope" },
    {
      "@type": "CreativeWork",
      "name": "llms.txt",
      "url": "https://llmstxt.org",
    },
  ],
  "breadcrumb": {
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://dibbayajyoti.com" },
      { "@type": "ListItem", "position": 2, "name": "AHTML vs llms.txt", "item": "https://dibbayajyoti.com/ahtml-vs-llms-txt" },
    ],
  },
};

export default function AhtmlVsLlmsTxtLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      {children}
    </>
  );
}
