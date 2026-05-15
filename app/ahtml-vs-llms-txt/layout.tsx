import type { Metadata } from "next";

const baseUrl = process.env.VERCEL_PROJECT_PRODUCTION_URL
  ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
  : "https://dibbayajyoti.com";

export const metadata: Metadata = {
  title: "AHTML vs llms.txt — The Two Layers of the Agentic Web",
  description:
    "AHTML vs llms.txt in 2026. Why both exist, what each is for, and how the @ahtmljs/* npm scope ships AHTML, llms.txt, MCP, OpenAPI, and JSON-LD from one extractor.",
  alternates: { canonical: "/ahtml-vs-llms-txt" },
  openGraph: {
    title: "AHTML vs llms.txt — Two layers of the agentic web",
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

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "@id": "https://dibbayajyoti.com/ahtml-vs-llms-txt#faq",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Is AHTML a replacement for llms.txt?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "No. They sit at different layers. llms.txt is a human-readable index of important pages and notes for LLM crawlers. AHTML is a canonical machine-readable snapshot of a page (or whole site) — typed schema, deterministic chunk IDs, byte ranges, citation anchors. AHTML is what an agent actually reads to act; llms.txt is what an agent reads to discover.",
      },
    },
    {
      "@type": "Question",
      "name": "Do I have to choose one?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "No. The @ahtmljs/next and @ahtmljs/vite plugins emit both from a single extractor pipeline — plus MCP, OpenAPI, and JSON-LD — so adopting AHTML does not cost you llms.txt support.",
      },
    },
    {
      "@type": "Question",
      "name": "Where is the AHTML snapshot served?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "At /.well-known/ahtml.json, by convention. The plugin auto-discovers App Router and Pages Router routes in Next.js (or Vite-based frameworks like SvelteKit, SolidStart, Astro) and produces the snapshot at build or at request time with caching.",
      },
    },
    {
      "@type": "Question",
      "name": "How is AHTML different from RAG-ready Markdown?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "AHTML ships Document.chunks with deterministic IDs and byte ranges — the same chunk boundaries every time you build, so embeddings stay stable across deploys. Markdown gives you text but not stable chunk identity, citation anchors, or a typed schema for agent action dispatch.",
      },
    },
    {
      "@type": "Question",
      "name": "What does @ahtmljs/agent do that scraping a page does not?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "ETag-based caching, dry-run safety gates before destructive actions, hostile-agent regression tests, and tokenizer adapters (OpenAI o200k_base, Anthropic) so you know exact prompt cost before sending. It is the consumption side of the same contract the plugin emits.",
      },
    },
  ],
};

export default function AhtmlVsLlmsTxtLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      {children}
    </>
  );
}
