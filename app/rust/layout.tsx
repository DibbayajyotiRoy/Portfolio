import type { Metadata } from "next";

const baseUrl = process.env.VERCEL_PROJECT_PRODUCTION_URL
  ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
  : "https://dibbayajyoti.com";

export const metadata: Metadata = {
  title: "Rust Engineering — Dibbayajyoti Roy | Backend, WebAssembly, Systems",
  description:
    "Rust backend engineering by Dibbayajyoti Roy — Rust + WebAssembly libraries on npm, workers-rs on Cloudflare Workers, async API development, Rust microservices, and high-performance systems programming.",
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
    title: "Rust Engineering — Dibbayajyoti Roy",
    description:
      "Rust backend engineering — Rust + WebAssembly on npm, workers-rs edge runtimes, async API development, and systems programming.",
    url: `${baseUrl}/rust`,
    type: "profile",
  },
  twitter: {
    title: "Rust Engineering — Dibbayajyoti Roy",
    description:
      "Rust backend engineer — Rust + WebAssembly, workers-rs, async APIs, systems programming.",
  },
};

const collectionPageJsonLd = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  "@id": "https://dibbayajyoti.com/rust#collection",
  "name": "Rust Engineering — Dibbayajyoti Roy",
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

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "@id": "https://dibbayajyoti.com/rust#faq",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Is Dibbayajyoti Roy available for Rust backend engineer roles?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Dibbayajyoti Roy is open to full-time and contract Rust backend engineer roles — async API development, systems programming, and edge runtimes — remote globally and relocation-eligible in the EU (Germany Opportunity Card, EU Blue Card, Netherlands HSM).",
      },
    },
    {
      "@type": "Question",
      "name": "What has Dibbayajyoti Roy built in Rust?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Diffcore — a Rust + WebAssembly JSON diff engine published on npm; the Rust port of Klinder-OSS on workers-rs for Cloudflare Workers; and EMS, a real-time Employee Management System with a Rust backend and React frontend.",
      },
    },
    {
      "@type": "Question",
      "name": "Does he do Rust and WebAssembly work?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Diffcore is written in Rust and compiled to WebAssembly with wasm-bindgen, then shipped to npm so JavaScript and TypeScript projects get native-speed diffing with no native addon and no separate .wasm file to host.",
      },
    },
    {
      "@type": "Question",
      "name": "Does he use Rust on Cloudflare Workers?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. The Klinder-OSS analytics ingestion path is being ported to Rust on workers-rs — the Cloudflare Workers runtime for Rust — targeting sub-10ms p95 latency at the edge.",
      },
    },
  ],
};

export default function RustLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionPageJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      {children}
    </>
  );
}
