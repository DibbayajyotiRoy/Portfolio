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

/** A published npm package shown in the live-stats block on a product hub. */
export interface NpmPackage {
  name: string;
  blurb: string;
  npmId: string;
  href: string;
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
  /** Published npm packages — drives the live-stats block on the product hub. */
  npmPackages?: NpmPackage[];
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
    version: "1.1.0",
    oneLiner:
      "AI agents read websites slowly and expensively, so I built a sixteen-package npm scope (@ahtmljs/*) plus a Python SDK that lets any site publish an agent-readable, token-efficient snapshot — and emits MCP, OpenAPI, JSON-LD, llms.txt, RSL, and Markdown from one config.",
    seoDescription:
      "AHTML (Agentic HTML) is a shipped sixteen-package npm scope by Dibbayajyoti Roy — plus the `ahtml` Python SDK — for making web content cheaply and safely consumable by AI agents: a canonical semantic snapshot with typed, priced actions (x402) and verified-agent auth (RFC 9421), Next.js + Astro + SvelteKit + Vite + Hono adapters, an agent client SDK with a dry-run sandbox, LangChain loaders, agent-traffic insights, a language-agnostic conformance corpus, the AHTML Index registry, and a CLI that scores and converts any URL into MCP tools. All packages at @ahtmljs/* v1.1.0, MIT, 700+ tests. Measured: 4.5–7.3× fewer tokens than raw HTML and fact-extraction accuracy up from 91% to 100%.",
    keywords: [
      "AHTML",
      "Agentic HTML",
      "@ahtmljs",
      "AI crawlable HTML",
      "LLM-optimized markup",
      "agentic web",
      "MCP",
      "llms.txt",
      "site to MCP server",
      "verified agents",
      "x402",
      "RSL",
    ],
    comparison: { slug: "/ahtml-vs-llms-txt", label: "Compare vs llms.txt" },
    npmPackages: [
      { name: "@ahtmljs/schema",      blurb: "the contract layer · snapshot types, validator, emitters",       npmId: "@ahtmljs/schema",      href: "https://www.npmjs.com/package/@ahtmljs/schema" },
      { name: "@ahtmljs/next",        blurb: "Next.js plugin → /.well-known/ahtml.json + MCP",                 npmId: "@ahtmljs/next",        href: "https://www.npmjs.com/package/@ahtmljs/next" },
      { name: "@ahtmljs/astro",       blurb: "Astro integration · same five-endpoint surface",                 npmId: "@ahtmljs/astro",       href: "https://www.npmjs.com/package/@ahtmljs/astro" },
      { name: "@ahtmljs/sveltekit",   blurb: "SvelteKit server hook · same five-endpoint surface",             npmId: "@ahtmljs/sveltekit",   href: "https://www.npmjs.com/package/@ahtmljs/sveltekit" },
      { name: "@ahtmljs/vite",        blurb: "Vite plugin · byte-parity with next plugin",                     npmId: "@ahtmljs/vite",        href: "https://www.npmjs.com/package/@ahtmljs/vite" },
      { name: "@ahtmljs/hono",        blurb: "Hono adapter · Node · Bun · Deno · Workers · Lambda",            npmId: "@ahtmljs/hono",        href: "https://www.npmjs.com/package/@ahtmljs/hono" },
      { name: "@ahtmljs/extract",     blurb: "framework-neutral extractor pipeline + plugin API",              npmId: "@ahtmljs/extract",     href: "https://www.npmjs.com/package/@ahtmljs/extract" },
      { name: "@ahtmljs/agent",       blurb: "agent SDK · dry-run sandbox · works on any URL",                 npmId: "@ahtmljs/agent",       href: "https://www.npmjs.com/package/@ahtmljs/agent" },
      { name: "@ahtmljs/langchain",   blurb: "LangChain.js loader · citation metadata",                        npmId: "@ahtmljs/langchain",   href: "https://www.npmjs.com/package/@ahtmljs/langchain" },
      { name: "@ahtmljs/cli",         blurb: "init · score · doctor · turn any site into MCP tools",           npmId: "@ahtmljs/cli",         href: "https://www.npmjs.com/package/@ahtmljs/cli" },
      { name: "@ahtmljs/kv",          blurb: "pluggable KV & cache backends · Memory · Upstash · Cloudflare",  npmId: "@ahtmljs/kv",          href: "https://www.npmjs.com/package/@ahtmljs/kv" },
      { name: "@ahtmljs/webmcp",      blurb: "W3C WebMCP bridge · page actions as browser tools",              npmId: "@ahtmljs/webmcp",      href: "https://www.npmjs.com/package/@ahtmljs/webmcp" },
      { name: "@ahtmljs/insights",    blurb: "agent-traffic analytics · zero-PII · OTel export",               npmId: "@ahtmljs/insights",    href: "https://www.npmjs.com/package/@ahtmljs/insights" },
      { name: "@ahtmljs/conformance", blurb: "language-agnostic conformance corpus + certification runner",    npmId: "@ahtmljs/conformance", href: "https://www.npmjs.com/package/@ahtmljs/conformance" },
      { name: "@ahtmljs/index",       blurb: "the AHTML Index · registry + crawler + MCP query surface",       npmId: "@ahtmljs/index",       href: "https://www.npmjs.com/package/@ahtmljs/index" },
      { name: "@ahtmljs/badge",       blurb: "hosted score badge · README-embeddable SVG",                     npmId: "@ahtmljs/badge",       href: "https://www.npmjs.com/package/@ahtmljs/badge" },
    ],
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
    npmPackages: [
      { name: "diffcore", blurb: "Rust/WASM JSON diff · RFC 6902 · React + CLI", npmId: "diffcore", href: "https://www.npmjs.com/package/diffcore" },
    ],
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
    npmPackages: [
      { name: "@whatbroke/whatbroke", blurb: "git-anchored crash bundles over MCP · CLI", npmId: "@whatbroke/whatbroke", href: "https://www.npmjs.com/package/@whatbroke/whatbroke" },
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
    npmPackages: [
      { name: "@roy-ui/ui", blurb: "zero-config React components · DataTable + pickers", npmId: "@roy-ui/ui", href: "https://www.npmjs.com/package/@roy-ui/ui" },
    ],
  },
  {
    id: "fresco",
    name: "Fresco",
    tier: "product",
    tagline: "live wallpapers for Linux",
    links: {
      github: "https://github.com/DibbayajyotiRoy/Fresco",
    },
    primaryUrl: "https://github.com/DibbayajyotiRoy/Fresco",
    version: "0.0.3",
    oneLiner:
      "Windows has Wallpaper Engine and macOS has Lively, but every Linux option was terminal-only or abandoned, so I built a proper GTK4 desktop app that sets any video, GIF, or image as a hardware-accelerated live wallpaper — install a .deb, pick media, done.",
    seoDescription:
      "Fresco is an open-source (GPL-3.0) live-wallpaper app for Linux by Dibbayajyoti Roy, written in Rust with GTK4/libadwaita. It sets looping videos (mp4/webm/mkv), animated GIFs, images, slideshows, and multi-video playlists as your desktop wallpaper on Pop!_OS, Ubuntu, Linux Mint, Debian, and elementary OS (X11), with GPU hardware-accelerated playback (VA-API / NVDEC), a drag-to-crop editor, a searchable wallpaper library, multi-monitor support, and battery-aware pausing. A simple GUI alternative to Wallpaper Engine and Lively for Linux.",
    keywords: [
      "live wallpaper linux",
      "wallpaper engine linux",
      "wallpaper engine alternative linux",
      "video wallpaper linux",
      "animated wallpaper ubuntu",
      "live wallpaper pop os",
      "linux desktop wallpaper app",
      "gtk4 wallpaper",
      "mpv wallpaper",
      "lively wallpaper linux",
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
