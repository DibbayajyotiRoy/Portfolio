import type { Metadata } from "next";

const baseUrl = process.env.VERCEL_PROJECT_PRODUCTION_URL
  ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
  : "https://dibbayajyoti.com";

export const metadata: Metadata = {
  title: "WebAssembly Engineering — Dibbayajyoti Roy | Rust → WASM on npm",
  description:
    "WebAssembly engineering by Dibbayajyoti Roy — Rust compiled to WASM and shipped to npm. Diffcore, a Rust WASM JSON diff engine running on Node, browsers, Bun, Deno, Cloudflare Workers, and Vercel Edge.",
  keywords: [
    "webassembly engineer",
    "rust webassembly",
    "rust wasm",
    "wasm json diff",
    "rust wasm diff",
    "compile rust to webassembly",
    "wasm-bindgen",
    "webassembly npm package",
  ],
  alternates: { canonical: "/webassembly" },
  openGraph: {
    title: "WebAssembly Engineering — Dibbayajyoti Roy",
    description:
      "Rust compiled to WebAssembly and shipped to npm — Diffcore, a Rust/WASM JSON diff engine running on every JavaScript runtime.",
    url: `${baseUrl}/webassembly`,
    type: "profile",
  },
  twitter: {
    title: "WebAssembly Engineering — Dibbayajyoti Roy",
    description:
      "Rust → WASM on npm. Diffcore: a Rust/WebAssembly JSON diff engine for every JS runtime.",
  },
};

const collectionPageJsonLd = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  "@id": "https://dibbayajyoti.com/webassembly#collection",
  "name": "WebAssembly Engineering — Dibbayajyoti Roy",
  "url": "https://dibbayajyoti.com/webassembly",
  "description":
    "WebAssembly engineering by Dibbayajyoti Roy — Rust compiled to WASM and published to npm, including the Diffcore JSON diff engine.",
  "about": [
    { "@type": "Thing", "name": "WebAssembly" },
    { "@type": "Thing", "name": "Rust (programming language)" },
    { "@type": "SoftwareApplication", "name": "Diffcore", "@id": "https://dibbayajyoti.com/work#diffcore" },
  ],
  "mainEntity": { "@id": "https://dibbayajyoti.com/#person" },
  "breadcrumb": {
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://dibbayajyoti.com" },
      { "@type": "ListItem", "position": 2, "name": "WebAssembly", "item": "https://dibbayajyoti.com/webassembly" },
    ],
  },
  "inLanguage": "en-US",
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "@id": "https://dibbayajyoti.com/webassembly#faq",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What WebAssembly project has Dibbayajyoti Roy shipped?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Diffcore — a JSON diff engine written in Rust, compiled to WebAssembly, and published on npm. It runs on Node, browsers, Bun, Deno, Cloudflare Workers, Vercel Edge, Electron, and Tauri.",
      },
    },
    {
      "@type": "Question",
      "name": "Why compile to WebAssembly instead of writing pure JavaScript?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A diff is CPU-bound work over large objects. Running it as Rust compiled to WebAssembly gives several times the throughput of optimized pure-JavaScript while remaining an ordinary npm install — no native addon and no platform-specific binaries.",
      },
    },
    {
      "@type": "Question",
      "name": "How is the WASM module bundled in an npm package?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Diffcore embeds the WASM module as Base64 inside the package, so it is zero-config — there is no separate .wasm file to host, import, or configure a loader for. It works immediately after npm install.",
      },
    },
    {
      "@type": "Question",
      "name": "Does WebAssembly work on edge runtimes?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Because the engine is WebAssembly, it runs unchanged on Cloudflare Workers and Vercel Edge alongside Node and the browser — one build artifact for every runtime.",
      },
    },
  ],
};

export default function WebAssemblyLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionPageJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      {children}
    </>
  );
}
