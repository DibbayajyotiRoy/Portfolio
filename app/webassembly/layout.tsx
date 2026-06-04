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

export default function WebAssemblyLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionPageJsonLd) }} />
      {children}
    </>
  );
}
