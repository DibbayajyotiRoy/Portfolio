import type { Metadata } from "next";

const baseUrl = process.env.VERCEL_PROJECT_PRODUCTION_URL
  ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
  : "https://dibbayajyoti.com";

export const metadata: Metadata = {
  title: "Diffcore vs jsondiffpatch: Fast WASM JSON Diff with RFC 6902 Patch",
  description:
    "Diffcore vs jsondiffpatch in 2026. Real RFC 6901 paths, RFC 6902 Patch output, applyPatch / revertPatch, React useDiff hook, CLI, and a streaming engine. 3.3 to 4.1× faster than optimized pure-JS diff.",
  alternates: { canonical: "/diffcore-vs-jsondiffpatch" },
  openGraph: {
    title: "Diffcore vs jsondiffpatch: Fast WASM JSON Diff",
    description:
      "Side-by-side: real JSON Pointer paths, RFC 6902 JSON Patch output, applyPatch / revertPatch, React hook, CLI, streaming engine. 3.3-4.1× faster.",
    url: `${baseUrl}/diffcore-vs-jsondiffpatch`,
    type: "article",
  },
  twitter: {
    title: "Diffcore vs jsondiffpatch",
    description:
      "Real RFC 6901 paths, RFC 6902 Patch, React hook, CLI, streaming. 3.3-4.1× faster than pure-JS diff.",
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
    "Side-by-side comparison of Diffcore (Rust + WebAssembly JSON diff engine on npm) vs jsondiffpatch: RFC compliance, performance, React hook, CLI, streaming engine.",
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

export default function DiffcoreVsJsonDiffPatchLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      {children}
    </>
  );
}
