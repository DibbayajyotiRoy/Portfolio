import type { Metadata } from "next";

const baseUrl = process.env.VERCEL_PROJECT_PRODUCTION_URL
  ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
  : "https://dibbayajyoti.com";

export const metadata: Metadata = {
  title: "Rust Engineering: Dibbayajyoti Roy | Backend, WebAssembly, Systems",
  description:
    "Rust backend engineering by Dibbayajyoti Roy: Rust + WebAssembly libraries on npm, workers-rs on Cloudflare Workers, async API development, Rust microservices, and high-performance systems programming.",
  keywords: [
    "rust backend engineer",
    "rust developer india",
    "rust webassembly",
    "rust wasm",
    "rust systems programming",
    "rust api development",
    "rust performance optimization",
    "rust async backend",
    "rust microservices",
    "rust cloudflare workers",
    "workers-rs",
  ],
  alternates: { canonical: "/rust" },
  openGraph: {
    title: "Rust Engineering: Dibbayajyoti Roy",
    description:
      "Rust backend engineering: Rust + WebAssembly on npm, workers-rs edge runtimes, async API development, and systems programming.",
    url: `${baseUrl}/rust`,
    type: "profile",
  },
  twitter: {
    title: "Rust Engineering: Dibbayajyoti Roy",
    description:
      "Rust backend engineer: Rust + WebAssembly, workers-rs, async APIs, systems programming.",
  },
};

const collectionPageJsonLd = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  "@id": "https://dibbayajyoti.com/rust#collection",
  "name": "Rust Engineering: Dibbayajyoti Roy",
  "url": "https://dibbayajyoti.com/rust",
  "description":
    "Rust backend engineering, Rust + WebAssembly, workers-rs on Cloudflare Workers, async API development, and systems programming by Dibbayajyoti Roy.",
  "about": [
    { "@type": "Thing", "name": "Rust (programming language)" },
    { "@type": "Thing", "name": "WebAssembly" },
    { "@type": "Thing", "name": "Systems programming" },
    { "@type": "Thing", "name": "Backend engineering" },
  ],
  "mainEntity": { "@id": "https://dibbayajyoti.com/#person" },
  "breadcrumb": {
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://dibbayajyoti.com" },
      { "@type": "ListItem", "position": 2, "name": "Rust Engineering", "item": "https://dibbayajyoti.com/rust" },
    ],
  },
  "inLanguage": "en-US",
};

export default function RustLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionPageJsonLd) }} />
      {children}
    </>
  );
}
