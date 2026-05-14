import type { Metadata } from "next";

const baseUrl = process.env.VERCEL_PROJECT_PRODUCTION_URL
  ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
  : "https://dibbayajyoti.com";

export const metadata: Metadata = {
  title: "Projects & Experience — Dibbayajyoti Roy | Rust, Next.js, AI",
  description:
    "Klinder-OSS (unified analytics + session replay + email SDK), Diffcore (Rust/WASM JSON diff with RFC 6902 Patch, React hook, CLI), Learning Copilot (AWS Bedrock). Hackathon wins, production engineering at Yupcha.",
  alternates: { canonical: "/work" },
  openGraph: {
    title: "Projects & Experience — Dibbayajyoti Roy",
    description:
      "Klinder-OSS, Diffcore, Learning Copilot, AHTML proposal. Full Stack Engineer shipping Rust, Next.js, and AWS Bedrock systems.",
    url: `${baseUrl}/work`,
    type: "profile",
  },
  twitter: {
    title: "Projects & Experience — Dibbayajyoti Roy",
    description:
      "Klinder-OSS, Diffcore, Learning Copilot, AHTML. Rust, Next.js, AWS Bedrock — hackathon-winning Full Stack Engineer.",
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
  "name": "Diffcore",
  "alternateName": ["diffcore", "diffcore npm", "rust wasm json diff", "diffcore json patch"],
  "url": "https://www.npmjs.com/package/diffcore",
  "sameAs": [
    "https://www.npmjs.com/package/diffcore",
    "https://github.com/DibbayajyotiRoy/rust-wasm-Library",
    "https://rust-wasm-library.vercel.app",
  ],
  "codeRepository": "https://github.com/DibbayajyotiRoy/rust-wasm-Library",
  "softwareVersion": "1.1.0",
  "programmingLanguage": ["Rust", "WebAssembly", "TypeScript", "JavaScript"],
  "runtimePlatform": [
    "WebAssembly",
    "Node.js",
    "Browser",
    "Bun",
    "Deno",
    "Cloudflare Workers",
    "Vercel Edge",
    "Electron",
    "Tauri",
  ],
  "applicationCategory": "DeveloperApplication",
  "operatingSystem": "Cross-platform",
  "license": "https://opensource.org/licenses/MIT",
  "description":
    "Fast WebAssembly JSON diff engine for JavaScript and TypeScript. Returns real JSON Pointer paths (RFC 6901) and decoded values, emits standard RFC 6902 JSON Patch, and ships applyPatch / revertPatch for state sync, undo/redo, and optimistic UI. Includes a React useDiff hook, a CLI, and a streaming engine for multi-GB files. Benchmarks at 3.3–4.1x optimized pure-JS diff (360–490 MB/s sustained).",
  "featureList": [
    "RFC 6902 JSON Patch output",
    "RFC 6901 JSON Pointer paths",
    "applyPatch and revertPatch (round-trip)",
    "React useDiff hook",
    "CLI with --json and --silent modes",
    "Streaming engine for multi-GB inputs",
    "Auto memory cleanup via FinalizationRegistry",
    "Zero-config embedded WASM (Base64)",
  ],
  "keywords": [
    "json diff",
    "fast json diff",
    "wasm json diff",
    "rust wasm diff",
    "json patch",
    "rfc 6902",
    "rfc 6901",
    "json pointer",
    "react json diff",
    "react diff hook",
    "useDiff hook",
    "json diff cli",
    "state sync",
    "optimistic ui",
    "undo redo",
    "object diff",
    "deep diff",
    "compare json",
    "applypatch",
    "fast-json-patch alternative",
    "jsondiffpatch alternative",
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

const ahtmlBase = {
  "@context": "https://schema.org",
  "@type": ["SoftwareSourceCode", "SoftwareApplication"],
  "programmingLanguage": ["TypeScript", "JavaScript"],
  "applicationCategory": "DeveloperApplication",
  "operatingSystem": "Cross-platform",
  "license": "https://opensource.org/licenses/MIT",
  "softwareVersion": "0.2.0",
  "codeRepository": "https://github.com/DibbayajyotiRoy/AHTML",
  "author": { "@id": "https://dibbayajyoti.com/#person" },
  "creator": { "@id": "https://dibbayajyoti.com/#person" },
  "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" },
  "isPartOf": { "@id": "https://dibbayajyoti.com/work#ahtml-scope" },
} as const;

const ahtmlScopeJsonLd = {
  "@context": "https://schema.org",
  "@type": "CreativeWorkSeries",
  "@id": "https://dibbayajyoti.com/work#ahtml-scope",
  "name": "AHTML — Agentic HTML (@ahtmljs scope)",
  "alternateName": ["Agentic HTML", "AHTML", "@ahtmljs", "@ahtmljs npm scope"],
  "url": "https://www.npmjs.com/org/ahtmljs",
  "sameAs": [
    "https://github.com/DibbayajyotiRoy/AHTML",
    "https://www.npmjs.com/org/ahtmljs",
  ],
  "creator": { "@id": "https://dibbayajyoti.com/#person" },
  "author": { "@id": "https://dibbayajyoti.com/#person" },
  "description":
    "AHTML (Agentic HTML) is a shipped five-package npm scope by Dibbayajyoti Roy for making web content cheaply consumable by AI agents — canonical semantic snapshot, Next.js + Vite plugins, agent client SDK, and LangChain.js loader. All packages live at @ahtmljs/* v0.2.0.",
  "keywords": ["AHTML", "Agentic HTML", "@ahtmljs", "AI crawlable HTML", "LLM-optimized markup", "agentic web", "MCP", "llms.txt"],
  "numberOfItems": 5,
  "inLanguage": "en",
};

const ahtmlSchemaJsonLd = {
  ...ahtmlBase,
  "@id": "https://dibbayajyoti.com/work#ahtmljs-schema",
  "name": "@ahtmljs/schema",
  "url": "https://www.npmjs.com/package/@ahtmljs/schema",
  "description":
    "Canonical semantic snapshot schema for AHTML. TypeScript types + JSON Schema + validator + dual serializers (lossless JSON and token-optimal compact text). Ships the Document.chunks primitive for deterministic RAG-ready IDs and byte ranges. 63 passing tests including property-fuzzing 100–500 cases per invariant.",
  "keywords": ["@ahtmljs/schema", "AHTML schema", "RAG schema", "JSON Schema", "agent snapshot", "document chunks"],
};

const ahtmlNextJsonLd = {
  ...ahtmlBase,
  "@id": "https://dibbayajyoti.com/work#ahtmljs-next",
  "name": "@ahtmljs/next",
  "url": "https://www.npmjs.com/package/@ahtmljs/next",
  "runtimePlatform": ["Next.js 14+", "Node.js"],
  "description":
    "Next.js plugin for AHTML. One route handler emits MCP, OpenAPI, JSON-LD, llms.txt, and the AHTML snapshot from a single extractor pipeline; auto-discovers routes from App or Pages Router. Zero migration. Reachable at /.well-known/ahtml.json. 38 passing tests.",
  "keywords": ["@ahtmljs/next", "AHTML Next.js plugin", "agent-friendly Next.js", "MCP server Next.js", "well-known agent endpoint"],
};

const ahtmlAgentJsonLd = {
  ...ahtmlBase,
  "@id": "https://dibbayajyoti.com/work#ahtmljs-agent",
  "name": "@ahtmljs/agent",
  "url": "https://www.npmjs.com/package/@ahtmljs/agent",
  "description":
    "Client SDK for AI agents consuming any AHTML-emitting site. ETag-cached snapshot fetch, structured action dispatch, dry-run safety gates, and optional tokenizer adapters (OpenAI o200k_base, Anthropic) for exact prompt cost. Hardened with hostile-agent regression tests. 28 passing tests.",
  "keywords": ["@ahtmljs/agent", "AI agent SDK", "agent action dispatch", "agent safety gate", "tokenizer cost"],
};

const ahtmlViteJsonLd = {
  ...ahtmlBase,
  "@id": "https://dibbayajyoti.com/work#ahtmljs-vite",
  "name": "@ahtmljs/vite",
  "url": "https://www.npmjs.com/package/@ahtmljs/vite",
  "runtimePlatform": ["Vite 5+", "SvelteKit", "SolidStart", "Astro"],
  "description":
    "Vite plugin counterpart to @ahtmljs/next. Same handler as middleware; one config-line opt-in for any Vite-based framework (SvelteKit, SolidStart, Astro, vanilla Vite). Byte-identical output to the Next.js plugin for true cross-framework parity. 9 passing tests.",
  "keywords": ["@ahtmljs/vite", "AHTML Vite plugin", "SvelteKit agent", "SolidStart agent", "Astro agent"],
};

const ahtmlLangchainJsonLd = {
  ...ahtmlBase,
  "@id": "https://dibbayajyoti.com/work#ahtmljs-langchain",
  "name": "@ahtmljs/langchain",
  "url": "https://www.npmjs.com/package/@ahtmljs/langchain",
  "runtimePlatform": ["@langchain/core 0.3+"],
  "description":
    "LangChain.js document loader for AHTML. Fetches any AHTML-emitting site and returns Document[] ready for vector stores; splits at Document.chunks boundaries with citation anchors, byte ranges, and source URLs preserved per chunk. URL → embeddings in three lines. 5 passing tests.",
  "keywords": ["@ahtmljs/langchain", "LangChain document loader", "RAG loader", "vector store ingest", "citation metadata"],
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
      "item": { "@id": "https://dibbayajyoti.com/work#ahtml-scope", "name": "AHTML — @ahtmljs npm scope", "url": "https://www.npmjs.com/org/ahtmljs" },
    },
    {
      "@type": "ListItem",
      "position": 3,
      "item": { "@id": "https://dibbayajyoti.com/work#diffcore", "name": "Diffcore", "url": "https://rust-wasm-library.vercel.app" },
    },
    {
      "@type": "ListItem",
      "position": 4,
      "item": { "@id": "https://dibbayajyoti.com/work#learning-copilot", "name": "Learning Copilot", "url": "https://ai-for-bharat.vercel.app" },
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
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ahtmlScopeJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ahtmlSchemaJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ahtmlNextJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ahtmlAgentJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ahtmlViteJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ahtmlLangchainJsonLd) }} />
      {children}
    </>
  );
}
