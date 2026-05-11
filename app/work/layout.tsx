import type { Metadata } from "next";

const baseUrl = process.env.VERCEL_PROJECT_PRODUCTION_URL
  ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
  : "https://dibbayajyoti.com";

export const metadata: Metadata = {
  title: "Projects & Experience — Dibbayajyoti Roy | Rust, Next.js, AI",
  description:
    "Klinder-OSS (unified analytics + session replay + email SDK), diffcore (Rust/WASM npm), Learning Copilot (AWS Bedrock). Hackathon wins, production engineering at Yupcha.",
  alternates: { canonical: "/work" },
  openGraph: {
    title: "Projects & Experience — Dibbayajyoti Roy",
    description:
      "Klinder-OSS, diffcore, Learning Copilot, AHTML proposal. Full Stack Engineer shipping Rust, Next.js, and AWS Bedrock systems.",
    url: `${baseUrl}/work`,
    type: "profile",
  },
  twitter: {
    title: "Projects & Experience — Dibbayajyoti Roy",
    description:
      "Klinder-OSS, diffcore, Learning Copilot, AHTML. Rust, Next.js, AWS Bedrock — hackathon-winning Full Stack Engineer.",
  },
};

const workPageJsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfilePage",
  "@id": "https://dibbayajyoti.com/work#profilepage",
  "name": "Dibbayajyoti Roy — Projects, Skills & Experience",
  "url": "https://dibbayajyoti.com/work",
  "description":
    "Professional profile of Dibbayajyoti Roy — projects (Klinder-OSS, diffcore, Learning Copilot, AHTML), skills, experience, and hackathon achievements.",
  "mainEntity": { "@id": "https://dibbayajyoti.com/#person" },
  "breadcrumb": {
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://dibbayajyoti.com" },
      { "@type": "ListItem", "position": 2, "name": "Work", "item": "https://dibbayajyoti.com/work" },
    ],
  },
  "dateModified": new Date().toISOString().split("T")[0],
  "inLanguage": "en-US",
};

const klinderJsonLd = {
  "@context": "https://schema.org",
  "@type": ["SoftwareSourceCode", "SoftwareApplication"],
  "@id": "https://dibbayajyoti.com/work#klinder-oss",
  "name": "Klinder-OSS",
  "url": "https://klinder-oss.vercel.app",
  "codeRepository": "https://github.com/DibbayajyotiRoy",
  "programmingLanguage": ["TypeScript", "Rust"],
  "runtimePlatform": ["Cloudflare Workers", "Node.js"],
  "applicationCategory": "DeveloperApplication",
  "operatingSystem": "Cross-platform",
  "license": "https://opensource.org/licenses/MIT",
  "description":
    "Open-source SDK unifying event tracking, error-based session recording, and automatic email trigger workflows in one install. Edge ingestion on Cloudflare Workers + Queues, Neon Postgres with RLS for multi-tenant isolation, Hono API. Rust port via workers-rs in progress targeting sub-10ms p95 latency.",
  "keywords": [
    "open source posthog alternative",
    "open source logrocket alternative",
    "self-hosted session replay",
    "product analytics SDK",
    "Cloudflare Workers",
    "Neon Postgres",
    "Rust workers-rs",
  ],
  "author": { "@id": "https://dibbayajyoti.com/#person" },
  "creator": { "@id": "https://dibbayajyoti.com/#person" },
  "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" },
};

const diffcoreJsonLd = {
  "@context": "https://schema.org",
  "@type": ["SoftwareSourceCode", "SoftwareApplication"],
  "@id": "https://dibbayajyoti.com/work#diffcore",
  "name": "diffcore",
  "url": "https://www.npmjs.com/package/diffcore",
  "programmingLanguage": ["Rust", "WebAssembly", "JavaScript"],
  "runtimePlatform": ["WebAssembly", "Node.js", "Browser"],
  "applicationCategory": "DeveloperApplication",
  "operatingSystem": "Cross-platform",
  "description":
    "Rust + WebAssembly diff library published on npm. Built for high-performance JavaScript bundles where bundle size and runtime speed both matter — drop-in API with WASM-grade throughput.",
  "keywords": [
    "rust wasm diff",
    "webassembly diff library",
    "fast javascript diff",
    "diff npm package",
    "rust wasm npm",
  ],
  "author": { "@id": "https://dibbayajyoti.com/#person" },
  "creator": { "@id": "https://dibbayajyoti.com/#person" },
  "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" },
};

const learningCopilotJsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "@id": "https://dibbayajyoti.com/work#learning-copilot",
  "name": "Learning Copilot",
  "url": "https://ai-for-bharat.vercel.app",
  "applicationCategory": "EducationalApplication",
  "operatingSystem": "Web",
  "description":
    "AWS Bedrock-powered AI learning assistant with Nova Pro / Nova Lite multi-model fallback, structured level-adaptive explanations, auto-generated D2 diagrams, and real-time streaming responses. Top 500 in AI for Bharat hackathon.",
  "author": { "@id": "https://dibbayajyoti.com/#person" },
  "creator": { "@id": "https://dibbayajyoti.com/#person" },
  "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" },
};

const ahtmlJsonLd = {
  "@context": "https://schema.org",
  "@type": "CreativeWork",
  "@id": "https://dibbayajyoti.com/work#ahtml",
  "name": "AHTML — Agentic HTML",
  "alternateName": ["Agentic HTML", "AHTML"],
  "creator": { "@id": "https://dibbayajyoti.com/#person" },
  "author": { "@id": "https://dibbayajyoti.com/#person" },
  "description":
    "AHTML (Agentic HTML) is an in-progress proposed format / plugin by Dibbayajyoti Roy to replace HTML for AI agent consumption of the web. Goals: efficient token usage, faster agent crawl latency, and a substrate that lets publishers monetize agent-readable data.",
  "keywords": ["AHTML", "Agentic HTML", "AI crawlable HTML", "LLM-optimized markup", "agentic web"],
  "inLanguage": "en",
};

const projectsItemListJsonLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  "@id": "https://dibbayajyoti.com/work#projects",
  "name": "Projects by Dibbayajyoti Roy",
  "numberOfItems": 4,
  "itemListOrder": "https://schema.org/ItemListOrderDescending",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "item": { "@id": "https://dibbayajyoti.com/work#klinder-oss", "name": "Klinder-OSS", "url": "https://klinder-oss.vercel.app" },
    },
    {
      "@type": "ListItem",
      "position": 2,
      "item": { "@id": "https://dibbayajyoti.com/work#diffcore", "name": "diffcore", "url": "https://www.npmjs.com/package/diffcore" },
    },
    {
      "@type": "ListItem",
      "position": 3,
      "item": { "@id": "https://dibbayajyoti.com/work#learning-copilot", "name": "Learning Copilot", "url": "https://ai-for-bharat.vercel.app" },
    },
    {
      "@type": "ListItem",
      "position": 4,
      "item": { "@id": "https://dibbayajyoti.com/work#ahtml", "name": "AHTML — Agentic HTML" },
    },
  ],
};

export default function WorkLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(workPageJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(projectsItemListJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(klinderJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(diffcoreJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(learningCopilotJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ahtmlJsonLd) }} />
      {children}
    </>
  );
}
