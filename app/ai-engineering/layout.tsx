import type { Metadata } from "next";

const baseUrl = process.env.VERCEL_PROJECT_PRODUCTION_URL
  ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
  : "https://dibbayajyoti.com";

export const metadata: Metadata = {
  title: "AI Engineering: Dibbayajyoti Roy | AWS Bedrock, RAG, Agentic Web",
  description:
    "AI engineering by Dibbayajyoti Roy: AWS Bedrock applications with Nova Pro multi-model fallback and streaming inference, RAG architecture, the MCP protocol, LangChain.js, and AI crawler optimization.",
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
    title: "AI Engineering: Dibbayajyoti Roy",
    description:
      "AWS Bedrock applications, RAG architecture, multi-model fallback, MCP, and LangChain.js. AI engineering by Dibbayajyoti Roy.",
    url: `${baseUrl}/ai-engineering`,
    type: "profile",
  },
  twitter: {
    title: "AI Engineering: Dibbayajyoti Roy",
    description:
      "AWS Bedrock, RAG, multi-model fallback, MCP, LangChain.js. AI engineering.",
  },
};

const collectionPageJsonLd = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  "@id": "https://dibbayajyoti.com/ai-engineering#collection",
  "name": "AI Engineering: Dibbayajyoti Roy",
  "url": "https://dibbayajyoti.com/ai-engineering",
  "description":
    "AI engineering by Dibbayajyoti Roy: AWS Bedrock applications, RAG architecture, multi-model orchestration, the MCP protocol, and agentic web infrastructure.",
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

export default function AiEngineeringLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionPageJsonLd) }} />
      {children}
    </>
  );
}
