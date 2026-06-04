/**
 * Single source of truth for project facts.
 *
 * The *facts* of each project — name, links, version, keywords, the
 * machine-readable SEO description — live here exactly once. Pages own their
 * own prose (a narrative line on /about, a detailed card on /work); they pull
 * the facts from this module so nothing drifts.
 *
 * `version` here is the published npm version. Keep it in sync with the
 * package's package.json — JSON-LD reads it straight from this field.
 */

export type ProjectTier = "product" | "hackathon";

export interface ProjectLinks {
  demo?: string;
  npm?: string;
  npmOrg?: string;
  github?: string;
}

export interface Project {
  id: string;
  name: string;
  tier: ProjectTier;
  /** Short noun phrase — e.g. for nav, chips, og copy. */
  tagline: string;
  links: ProjectLinks;
  /** Canonical single URL — used wherever only one link fits. */
  primaryUrl: string;
  /** Published npm version, when applicable. */
  version?: string;
  /** First-person "why I built it" line — rendered on /about. */
  oneLiner: string;
  /** Machine-readable description — rendered into JSON-LD on /work. */
  seoDescription: string;
  keywords: string[];
  comparison?: { slug: string; label: string };
}

export const projects: Project[] = [
  {
    id: "klinder-oss",
    name: "Klinder-OSS",
    tier: "product",
    tagline: "unified analytics + session replay + email SDK",
    links: {
      demo: "https://klinder-oss.vercel.app",
      github: "https://github.com/DibbayajyotiRoy",
    },
    primaryUrl: "https://klinder-oss.vercel.app",
    oneLiner:
      "I kept stitching PostHog, LogRocket, and Customer.io together on every project, so I built one SDK that unifies event tracking, error-based session recording, and email trigger workflows in a single install.",
    seoDescription:
      "Open-source SDK unifying event tracking, error-based session recording, and automatic email trigger workflows in one install. Edge ingestion on Cloudflare Workers + Queues, Neon Postgres with RLS for multi-tenant isolation, Hono API. Rust port via workers-rs in progress targeting sub-10ms p95 latency.",
    keywords: [
      "open source posthog alternative",
      "open source logrocket alternative",
      "self-hosted session replay",
      "product analytics SDK",
      "Cloudflare Workers",
      "Neon Postgres",
      "Rust workers-rs",
    ],
    comparison: { slug: "/klinder-vs-posthog", label: "Compare vs PostHog" },
  },
  {
    id: "ahtml",
    name: "AHTML",
    tier: "product",
    tagline: "agentic HTML — the @ahtmljs npm scope",
    links: {
      npmOrg: "https://www.npmjs.com/org/ahtmljs",
      github: "https://github.com/DibbayajyotiRoy/AHTML",
    },
    primaryUrl: "https://www.npmjs.com/org/ahtmljs",
    version: "0.9.0",
    oneLiner:
      "AI agents read websites slowly and expensively, so I built a seven-package npm scope (@ahtmljs/*) that emits a canonical, agent-ready snapshot of any site from one config line.",
    seoDescription:
      "AHTML (Agentic HTML) is a shipped seven-package npm scope by Dibbayajyoti Roy for making web content cheaply consumable by AI agents — canonical semantic snapshot, Next.js + Vite + Hono adapters, agent client SDK, LangChain.js loader, and an `ahtml doctor` CLI. All packages live at @ahtmljs/* v0.9.0.",
    keywords: [
      "AHTML",
      "Agentic HTML",
      "@ahtmljs",
      "AI crawlable HTML",
      "LLM-optimized markup",
      "agentic web",
      "MCP",
      "llms.txt",
    ],
    comparison: { slug: "/ahtml-vs-llms-txt", label: "Compare vs llms.txt" },
  },
  {
    id: "diffcore",
    name: "Diffcore",
    tier: "product",
    tagline: "fast Rust/WASM JSON diff engine",
    links: {
      demo: "https://rust-wasm-library.vercel.app",
      npm: "https://www.npmjs.com/package/diffcore",
      github: "https://github.com/DibbayajyotiRoy/rust-wasm-Library",
    },
    primaryUrl: "https://www.npmjs.com/package/diffcore",
    version: "1.2.0",
    oneLiner:
      "I needed a JSON diff fast enough for large client–server state sync and found the popular libraries either slow or unmaintained, so I wrote the engine in Rust and ship it to npm as WebAssembly.",
    seoDescription:
      "Fast WebAssembly JSON diff engine for JavaScript and TypeScript. Returns real JSON Pointer paths (RFC 6901) and decoded values, emits standard RFC 6902 JSON Patch, and ships applyPatch / revertPatch for state sync, undo/redo, and optimistic UI. Includes a React useDiff hook, a CLI, and a streaming engine for multi-GB files. Benchmarks 2.3–3.0× faster than fast-json-patch and 4–8× faster than jsondiffpatch in head-to-head tests (390–650 MB/s sustained throughput).",
    keywords: [
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
    comparison: {
      slug: "/diffcore-vs-jsondiffpatch",
      label: "Compare vs jsondiffpatch",
    },
  },
  {
    id: "whatbroke",
    name: "whatbroke",
    tier: "product",
    tagline: "git-anchored crash capture for AI coding agents",
    links: {
      npm: "https://www.npmjs.com/package/@whatbroke/whatbroke",
      github: "https://github.com/DibbayajyotiRoy/whatbroke",
    },
    primaryUrl: "https://www.npmjs.com/package/@whatbroke/whatbroke",
    version: "0.1.1",
    oneLiner:
      "When a test or server dies in my terminal I kept losing the context — what changed since it last worked, which file is to blame — so I built a CLI that wraps the command, captures a redacted, git-anchored crash bundle, and hands a ranked suspect to my coding agent over MCP.",
    seoDescription:
      "whatbroke is an open-source (Apache-2.0) terminal capture layer for local Node/TypeScript crashes by Dibbayajyoti Roy. It wraps a dev command, and when it crashes packages the error, the diff since the last green commit, and a deterministically-ranked guess at the responsible file — secrets scrubbed by a mandatory redaction gate — then serves it to a coding agent (Claude Code, Cursor) over a read-only MCP server. Ranking is deterministic with no LLM: it intersects the crash stack with files changed since the last passing run.",
    keywords: [
      "whatbroke",
      "local dev crash",
      "git-anchored debugging",
      "deterministic bug ranking",
      "crash context for AI agents",
      "mcp claude code",
      "mcp debugging",
      "node crash capture",
      "stack trace",
      "redacted crash logs",
    ],
  },
  {
    id: "roy-ui",
    name: "Roy UI",
    tier: "product",
    tagline: "zero-config React component library",
    links: {
      demo: "https://roy-ui-docs.vercel.app",
      npm: "https://www.npmjs.com/package/@roy-ui/ui",
      github: "https://github.com/DibbayajyotiRoy/RoyUI",
    },
    primaryUrl: "https://roy-ui-docs.vercel.app",
    version: "0.0.12",
    oneLiner:
      "Every dashboard I built started by re-wiring TanStack Table or copy-pasting shadcn and bolting on filters, so I built one React component library that ships a batteries-included DataTable, a no-dependency date range picker, and an analog/digital time picker — installed, not copy-pasted, with zero config.",
    seoDescription:
      "Roy UI (@roy-ui/ui) is an open-source (MIT) React component library by Dibbayajyoti Roy for dashboards, admin panels, and internal tools. It ships a fully-featured DataTable (search, date-range and time filters, sort, pagination, drag-to-reorder and resize columns, CSV/JSON import-export), a custom date range picker with no date-fns dependency, an analog/digital time picker, and animated primitives. TypeScript-first, RSC-safe, tree-shakable ESM, sub-12 KB, zero config — a batteries-included shadcn/ui and TanStack Table alternative for Next.js 15, Vite, Remix, and TanStack Start.",
    keywords: [
      "react component library",
      "react data table",
      "react data grid",
      "shadcn alternative",
      "shadcn data table",
      "tanstack table alternative",
      "react date range picker",
      "react time picker",
      "analog time picker react",
      "next.js 15 components",
      "rsc-safe react library",
      "zero config react ui",
    ],
  },
  {
    id: "learning-copilot",
    name: "Learning Copilot",
    tier: "hackathon",
    tagline: "AWS Bedrock AI learning assistant",
    links: { demo: "https://ai-for-bharat.vercel.app" },
    primaryUrl: "https://ai-for-bharat.vercel.app",
    oneLiner:
      "An AWS Bedrock-powered learning assistant with level-adaptive explanations, auto-generated diagrams, and multi-model fallback — selected top 500 in the AI for Bharat hackathon.",
    seoDescription:
      "AWS Bedrock-powered AI learning assistant with Nova Pro / Nova Lite multi-model fallback, structured level-adaptive explanations, auto-generated D2 diagrams, and real-time streaming responses. Top 500 in AI for Bharat hackathon.",
    keywords: [
      "AWS Bedrock",
      "AI learning assistant",
      "Nova Pro",
      "multi-model fallback",
      "streaming inference",
    ],
  },
];

export const getProject = (id: string): Project => {
  const project = projects.find((p) => p.id === id);
  if (!project) throw new Error(`Unknown project id: ${id}`);
  return project;
};

/** Public products only — the three things that anchor /about. */
export const coreProducts = projects.filter((p) => p.tier === "product");
