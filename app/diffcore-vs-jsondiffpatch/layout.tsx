import type { Metadata } from "next";

const baseUrl = process.env.VERCEL_PROJECT_PRODUCTION_URL
  ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
  : "https://dibbayajyoti.com";

export const metadata: Metadata = {
  title: "Diffcore vs jsondiffpatch — Fast WASM JSON Diff with RFC 6902 Patch",
  description:
    "Diffcore vs jsondiffpatch in 2026. Real RFC 6901 paths, RFC 6902 Patch output, applyPatch / revertPatch, React useDiff hook, CLI, and a streaming engine — 3.3 to 4.1× faster than optimized pure-JS diff.",
  alternates: { canonical: "/diffcore-vs-jsondiffpatch" },
  openGraph: {
    title: "Diffcore vs jsondiffpatch — Fast WASM JSON Diff",
    description:
      "Side-by-side: real JSON Pointer paths, RFC 6902 JSON Patch output, applyPatch / revertPatch, React hook, CLI, streaming engine. 3.3–4.1× faster.",
    url: `${baseUrl}/diffcore-vs-jsondiffpatch`,
    type: "article",
  },
  twitter: {
    title: "Diffcore vs jsondiffpatch",
    description:
      "Real RFC 6901 paths, RFC 6902 Patch, React hook, CLI, streaming. 3.3–4.1× faster than pure-JS diff.",
  },
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "TechArticle",
  "@id": "https://dibbayajyoti.com/diffcore-vs-jsondiffpatch#article",
  "headline": "Diffcore vs jsondiffpatch: a 2026 comparison",
  "url": "https://dibbayajyoti.com/diffcore-vs-jsondiffpatch",
  "datePublished": "2026-05-15",
  "dateModified": "2026-05-15",
  "inLanguage": "en",
  "description":
    "Side-by-side comparison of Diffcore (Rust + WebAssembly JSON diff engine on npm) vs jsondiffpatch — RFC compliance, performance, React hook, CLI, streaming engine.",
  "keywords": [
    "diffcore vs jsondiffpatch",
    "fast json diff",
    "wasm json diff",
    "rfc 6902 json patch",
    "rfc 6901 json pointer",
    "react json diff",
    "json diff cli",
    "jsondiffpatch alternative",
  ],
  "author": { "@id": "https://dibbayajyoti.com/#person" },
  "publisher": { "@id": "https://dibbayajyoti.com/#person" },
  "isPartOf": { "@id": "https://dibbayajyoti.com/#website" },
  "mainEntityOfPage": "https://dibbayajyoti.com/diffcore-vs-jsondiffpatch",
  "mentions": [
    { "@id": "https://dibbayajyoti.com/work#diffcore" },
    {
      "@type": "SoftwareApplication",
      "name": "jsondiffpatch",
      "applicationCategory": "DeveloperApplication",
      "url": "https://www.npmjs.com/package/jsondiffpatch",
    },
  ],
  "breadcrumb": {
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://dibbayajyoti.com" },
      { "@type": "ListItem", "position": 2, "name": "Diffcore vs jsondiffpatch", "item": "https://dibbayajyoti.com/diffcore-vs-jsondiffpatch" },
    ],
  },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "@id": "https://dibbayajyoti.com/diffcore-vs-jsondiffpatch#faq",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Is Diffcore faster than jsondiffpatch?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Diffcore runs the diff in Rust compiled to WebAssembly. Sustained throughput is 360–490 MB/s, which is 3.3–4.1× faster than optimized pure-JavaScript diff implementations like jsondiffpatch on the same payloads. The exact ratio depends on payload shape, but the gap widens on large nested objects.",
      },
    },
    {
      "@type": "Question",
      "name": "Does Diffcore emit standard RFC 6902 JSON Patch?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Diffcore emits standard RFC 6902 JSON Patch with real RFC 6901 JSON Pointer paths and decoded values — interoperable with fast-json-patch, jsondiffpatch, and any IETF-compliant consumer. jsondiffpatch returns its own delta format that requires its own apply / unapply functions.",
      },
    },
    {
      "@type": "Question",
      "name": "Does Diffcore have a React hook?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Diffcore ships a useDiff React hook that returns the JSON Patch and decoded values for two state objects, with automatic memoization. jsondiffpatch has no first-party React hook.",
      },
    },
    {
      "@type": "Question",
      "name": "Does Diffcore have a CLI?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Diffcore ships a CLI with --json (machine-readable patch output) and --silent (exit code only) modes — useful in CI to fail builds when JSON fixtures drift. jsondiffpatch does not ship a first-party CLI.",
      },
    },
    {
      "@type": "Question",
      "name": "Can Diffcore handle multi-GB JSON files?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Diffcore includes a streaming engine that diffs arbitrarily large inputs without holding both documents in memory. jsondiffpatch is in-memory only.",
      },
    },
    {
      "@type": "Question",
      "name": "Where does Diffcore run?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Node.js, browsers, Bun, Deno, Cloudflare Workers, Vercel Edge, Electron, and Tauri. The WASM module is embedded via Base64 — zero-config, no separate .wasm file to host or import.",
      },
    },
  ],
};

export default function DiffcoreVsJsonDiffPatchLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      {children}
    </>
  );
}
