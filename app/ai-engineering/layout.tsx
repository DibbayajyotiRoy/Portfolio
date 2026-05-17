import type { Metadata } from "next";

const baseUrl = process.env.VERCEL_PROJECT_PRODUCTION_URL
  ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
  : "https://dibbayajyoti.com";

export const metadata: Metadata = {
  title: "AI Engineering — Dibbayajyoti Roy | AWS Bedrock, RAG, Agentic Web",
  description:
    "AI engineering by Dibbayajyoti Roy — AWS Bedrock applications with Nova Pro multi-model fallback and streaming inference, RAG architecture, the MCP protocol, LangChain.js, and AI crawler optimization.",
  keywords: [
    "ai engineering",
    "aws bedrock",
    "aws bedrock streaming",
    "rag architecture",
    "multi-model fallback",
    "nova pro aws",
    "mcp protocol",
    "langchain js",
    "agentic html",
    "ai crawler optimization",
    "ai search optimization",
  ],
  alternates: { canonical: "/ai-engineering" },
  openGraph: {
    title: "AI Engineering — Dibbayajyoti Roy",
    description:
      "AWS Bedrock applications, RAG architecture, multi-model fallback, MCP, and LangChain.js — AI engineering by Dibbayajyoti Roy.",
    url: `${baseUrl}/ai-engineering`,
    type: "profile",
  },
  twitter: {
    title: "AI Engineering — Dibbayajyoti Roy",
    description:
      "AWS Bedrock, RAG, multi-model fallback, MCP, LangChain.js — AI engineering.",
  },
};

const collectionPageJsonLd = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  "@id": "https://dibbayajyoti.com/ai-engineering#collection",
  "name": "AI Engineering — Dibbayajyoti Roy",
  "url": "https://dibbayajyoti.com/ai-engineering",
  "description":
    "AI engineering by Dibbayajyoti Roy — AWS Bedrock applications, RAG architecture, multi-model orchestration, the MCP protocol, and agentic web infrastructure.",
  "about": [
    { "@type": "Thing", "name": "AI engineering" },
    { "@type": "Thing", "name": "AWS Bedrock" },
    { "@type": "Thing", "name": "Retrieval-augmented generation" },
    { "@type": "Thing", "name": "AI agents" },
  ],
  "mainEntity": { "@id": "https://dibbayajyoti.com/#person" },
  "breadcrumb": {
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://dibbayajyoti.com" },
      { "@type": "ListItem", "position": 2, "name": "AI Engineering", "item": "https://dibbayajyoti.com/ai-engineering" },
    ],
  },
  "inLanguage": "en-US",
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "@id": "https://dibbayajyoti.com/ai-engineering#faq",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Does Dibbayajyoti Roy have AI engineering experience?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. He built and shipped Learning Copilot on AWS Bedrock — multi-model fallback across Nova Pro and Nova Lite, streaming inference, and cost-aware token budgets — which placed top 500 in the AI for Bharat hackathon. He also built AHTML, a five-package npm scope for agentic web and RAG infrastructure.",
      },
    },
    {
      "@type": "Question",
      "name": "What is multi-model fallback?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Multi-model fallback is a resilience pattern: when the primary model is rate-limited or unavailable, requests fall back to a secondary model. Learning Copilot falls back from Nova Pro to Nova Lite so the assistant stays responsive under load.",
      },
    },
    {
      "@type": "Question",
      "name": "What is AHTML and how does it relate to RAG?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "AHTML (Agentic HTML) is a five-package npm scope that emits a canonical, agent-ready snapshot of any website. Its schema ships RAG-ready document chunks with stable IDs and byte ranges, and a LangChain.js loader turns any AHTML site into vector-store-ready documents.",
      },
    },
    {
      "@type": "Question",
      "name": "Does he work on AI search and crawler optimization?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. AHTML emits MCP, OpenAPI, JSON-LD, and llms.txt so AI crawlers and agents can read a site cheaply — work that overlaps directly with AI search optimization and generative-engine visibility.",
      },
    },
  ],
};

export default function AiEngineeringLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionPageJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      {children}
    </>
  );
}
