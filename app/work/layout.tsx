import type { Metadata } from "next";
import { getProject } from "@/lib/content/projects";

const baseUrl = process.env.VERCEL_PROJECT_PRODUCTION_URL
  ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
  : "https://dibbayajyoti.com";

// Facts (versions, descriptions, keywords, links) come from lib/content/projects.ts
// so the JSON-LD here cannot drift from what the rest of the site renders.
const klinder = getProject("klinder-oss");
const diffcore = getProject("diffcore");
const learningCopilot = getProject("learning-copilot");
const ahtml = getProject("ahtml");

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
  "name": klinder.name,
  "url": klinder.primaryUrl,
  "codeRepository": klinder.links.github,
  "programmingLanguage": ["TypeScript", "Rust"],
  "runtimePlatform": ["Cloudflare Workers", "Node.js"],
  "applicationCategory": "DeveloperApplication",
  "operatingSystem": "Cross-platform",
  "license": "https://opensource.org/licenses/MIT",
  "description": klinder.seoDescription,
  "keywords": klinder.keywords,
  "author": { "@id": "https://dibbayajyoti.com/#person" },
  "creator": { "@id": "https://dibbayajyoti.com/#person" },
  "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" },
};

const diffcoreJsonLd = {
  "@context": "https://schema.org",
  "@type": ["SoftwareSourceCode", "SoftwareApplication"],
  "@id": "https://dibbayajyoti.com/work#diffcore",
  "name": diffcore.name,
  "alternateName": ["diffcore", "diffcore npm", "rust wasm json diff", "diffcore json patch"],
  "url": diffcore.primaryUrl,
  "sameAs": [
    diffcore.links.npm,
    diffcore.links.github,
    diffcore.links.demo,
  ],
  "codeRepository": diffcore.links.github,
  "softwareVersion": diffcore.version,
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
  "description": diffcore.seoDescription,
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
  "keywords": diffcore.keywords,
  "author": { "@id": "https://dibbayajyoti.com/#person" },
  "creator": { "@id": "https://dibbayajyoti.com/#person" },
  "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" },
};

const learningCopilotJsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "@id": "https://dibbayajyoti.com/work#learning-copilot",
  "name": learningCopilot.name,
  "url": learningCopilot.primaryUrl,
  "applicationCategory": "EducationalApplication",
  "operatingSystem": "Web",
  "description": learningCopilot.seoDescription,
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
  "softwareVersion": ahtml.version,
  "codeRepository": ahtml.links.github,
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
  "url": ahtml.primaryUrl,
  "sameAs": [
    ahtml.links.github,
    ahtml.links.npmOrg,
  ],
  "creator": { "@id": "https://dibbayajyoti.com/#person" },
  "author": { "@id": "https://dibbayajyoti.com/#person" },
  "description": ahtml.seoDescription,
  "keywords": ahtml.keywords,
  "numberOfItems": 9,
  "inLanguage": "en",
};

const ahtmlSchemaJsonLd = {
  ...ahtmlBase,
  "@id": "https://dibbayajyoti.com/work#ahtmljs-schema",
  "name": "@ahtmljs/schema",
  "url": "https://www.npmjs.com/package/@ahtmljs/schema",
  "description":
    "Canonical semantic snapshot schema for AHTML. TypeScript types + JSON Schema + validator + dual serializers (lossless JSON and token-optimal compact text). Ships the Document.chunks primitive for deterministic RAG-ready IDs and byte ranges.",
  "keywords": ["@ahtmljs/schema", "AHTML schema", "RAG schema", "JSON Schema", "agent snapshot", "document chunks"],
};

const ahtmlNextJsonLd = {
  ...ahtmlBase,
  "@id": "https://dibbayajyoti.com/work#ahtmljs-next",
  "name": "@ahtmljs/next",
  "url": "https://www.npmjs.com/package/@ahtmljs/next",
  "runtimePlatform": ["Next.js 14+", "Node.js"],
  "description":
    "Next.js plugin for AHTML. One route handler emits MCP, OpenAPI, JSON-LD, llms.txt, and the AHTML snapshot from a single extractor pipeline; auto-discovers routes from App or Pages Router. Zero migration. Reachable at /.well-known/ahtml.json.",
  "keywords": ["@ahtmljs/next", "AHTML Next.js plugin", "agent-friendly Next.js", "MCP server Next.js", "well-known agent endpoint"],
};

const ahtmlAgentJsonLd = {
  ...ahtmlBase,
  "@id": "https://dibbayajyoti.com/work#ahtmljs-agent",
  "name": "@ahtmljs/agent",
  "url": "https://www.npmjs.com/package/@ahtmljs/agent",
  "description":
    "Client SDK for AI agents consuming any AHTML-emitting site. ETag-cached snapshot fetch, structured action dispatch, dry-run safety gates, and optional tokenizer adapters (OpenAI o200k_base, Anthropic) for exact prompt cost. Hardened with hostile-agent regression tests.",
  "keywords": ["@ahtmljs/agent", "AI agent SDK", "agent action dispatch", "agent safety gate", "tokenizer cost"],
};

const ahtmlViteJsonLd = {
  ...ahtmlBase,
  "@id": "https://dibbayajyoti.com/work#ahtmljs-vite",
  "name": "@ahtmljs/vite",
  "url": "https://www.npmjs.com/package/@ahtmljs/vite",
  "runtimePlatform": ["Vite 5+", "SvelteKit", "SolidStart", "Astro"],
  "description":
    "Vite plugin counterpart to @ahtmljs/next. Same handler as middleware; one config-line opt-in for any Vite-based framework (SvelteKit, SolidStart, Astro, vanilla Vite). Byte-identical output to the Next.js plugin for true cross-framework parity.",
  "keywords": ["@ahtmljs/vite", "AHTML Vite plugin", "SvelteKit agent", "SolidStart agent", "Astro agent"],
};

const ahtmlLangchainJsonLd = {
  ...ahtmlBase,
  "@id": "https://dibbayajyoti.com/work#ahtmljs-langchain",
  "name": "@ahtmljs/langchain",
  "url": "https://www.npmjs.com/package/@ahtmljs/langchain",
  "runtimePlatform": ["@langchain/core 0.3+"],
  "description":
    "LangChain.js document loader for AHTML. Fetches any AHTML-emitting site and returns Document[] ready for vector stores; splits at Document.chunks boundaries with citation anchors, byte ranges, and source URLs preserved per chunk. URL → embeddings in three lines.",
  "keywords": ["@ahtmljs/langchain", "LangChain document loader", "RAG loader", "vector store ingest", "citation metadata"],
};

const ahtmlHonoJsonLd = {
  ...ahtmlBase,
  "@id": "https://dibbayajyoti.com/work#ahtmljs-hono",
  "name": "@ahtmljs/hono",
  "url": "https://www.npmjs.com/package/@ahtmljs/hono",
  "runtimePlatform": ["Hono 4+", "Node.js", "Bun", "Deno", "Cloudflare Workers", "AWS Lambda"],
  "description":
    "Hono.js adapter for AHTML. The same emitter handler mounts on any Hono app, so a single config line exposes MCP, OpenAPI, JSON-LD, llms.txt, and the AHTML snapshot across every Hono runtime — Node, Bun, Deno, Cloudflare Workers, and AWS Lambda — with byte-identical output to the Next.js and Vite plugins.",
  "keywords": ["@ahtmljs/hono", "AHTML Hono plugin", "MCP server Hono", "edge agent endpoint", "Cloudflare Workers agent", "Bun Deno agent"],
};

const ahtmlKvJsonLd = {
  ...ahtmlBase,
  "@id": "https://dibbayajyoti.com/work#ahtmljs-kv",
  "name": "@ahtmljs/kv",
  "url": "https://www.npmjs.com/package/@ahtmljs/kv",
  "runtimePlatform": ["Node.js", "Upstash Redis", "Cloudflare KV"],
  "description":
    "Pluggable KV and cache backends for AHTML — in-memory, Upstash Redis, and Cloudflare KV. Drop-in replacements for the AHTMLClient cache and rate-limiting surfaces, so snapshot caching and token-bucket policy work the same on a single server or across an edge fleet.",
  "keywords": ["@ahtmljs/kv", "AHTML cache backend", "Upstash Redis cache", "Cloudflare KV", "agent rate limiting", "pluggable kv store"],
};

const ahtmlWebmcpJsonLd = {
  ...ahtmlBase,
  "@id": "https://dibbayajyoti.com/work#ahtmljs-webmcp",
  "name": "@ahtmljs/webmcp",
  "url": "https://www.npmjs.com/package/@ahtmljs/webmcp",
  "runtimePlatform": ["Browser", "WebMCP"],
  "description":
    "Registers AHTML page actions as WebMCP browser tools — the bridge between AHTML's structured action contracts and the W3C WebML CG WebMCP API, so an in-page agent can discover and invoke a site's typed actions as native browser tools.",
  "keywords": ["@ahtmljs/webmcp", "WebMCP", "browser agent tools", "page actions", "W3C WebMCP", "in-page agent"],
};

const ahtmlCliJsonLd = {
  ...ahtmlBase,
  "@id": "https://dibbayajyoti.com/work#ahtmljs-cli",
  "name": "@ahtmljs/cli",
  "url": "https://www.npmjs.com/package/@ahtmljs/cli",
  "applicationCategory": "DeveloperApplication",
  "description":
    "Command-line doctor for AHTML. `ahtml doctor` walks a site's discovery chain end to end — /.well-known/ahtml.json, the snapshot, MCP, OpenAPI, and llms.txt — validates each against the AHTML lint rules, and exits non-zero on failure so it can be wired straight into CI.",
  "keywords": ["@ahtmljs/cli", "ahtml doctor", "AHTML validator", "agent endpoint linter", "CI agent check"],
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
      "item": { "@id": "https://dibbayajyoti.com/work#klinder-oss", "name": klinder.name, "url": klinder.primaryUrl },
    },
    {
      "@type": "ListItem",
      "position": 2,
      "item": { "@id": "https://dibbayajyoti.com/work#ahtml-scope", "name": "AHTML — @ahtmljs npm scope", "url": ahtml.primaryUrl },
    },
    {
      "@type": "ListItem",
      "position": 3,
      "item": { "@id": "https://dibbayajyoti.com/work#diffcore", "name": diffcore.name, "url": diffcore.primaryUrl },
    },
    {
      "@type": "ListItem",
      "position": 4,
      "item": { "@id": "https://dibbayajyoti.com/work#learning-copilot", "name": learningCopilot.name, "url": learningCopilot.primaryUrl },
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
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ahtmlHonoJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ahtmlKvJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ahtmlWebmcpJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ahtmlCliJsonLd) }} />
      {children}
    </>
  );
}
