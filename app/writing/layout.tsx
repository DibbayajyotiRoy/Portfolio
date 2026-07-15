import type { Metadata } from "next";

const baseUrl = process.env.VERCEL_PROJECT_PRODUCTION_URL
  ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
  : "https://dibbayajyoti.com";

export const metadata: Metadata = {
  title: "Writing: Dibbayajyoti Roy | Engineering Notes on Rust, Next.js, AI",
  description:
    "Long-form engineering articles by Dibbayajyoti Roy: production incidents, AI engineering with AWS Bedrock, Next.js SEO in 2026, and Rust + WebAssembly performance work.",
  alternates: { canonical: "/writing" },
  openGraph: {
    title: "Writing: Dibbayajyoti Roy",
    description:
      "Engineering articles by Dibbayajyoti Roy. Production debugging, AI engineering, Next.js SEO, Rust + WASM performance.",
    url: `${baseUrl}/writing`,
    type: "website",
  },
  twitter: {
    title: "Writing: Dibbayajyoti Roy",
    description:
      "Engineering articles by Dibbayajyoti Roy. Production debugging, AI engineering, Next.js SEO, Rust + WASM.",
  },
};

const collectionPageJsonLd = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  "@id": "https://dibbayajyoti.com/writing#collection",
  "name": "Writing: Dibbayajyoti Roy",
  "url": "https://dibbayajyoti.com/writing",
  "description":
    "Engineering articles by Dibbayajyoti Roy on production incidents, AI engineering, Next.js SEO, and Rust + WebAssembly performance.",
  "mainEntity": { "@id": "https://dibbayajyoti.com/#person" },
  "breadcrumb": {
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://dibbayajyoti.com" },
      { "@type": "ListItem", "position": 2, "name": "Writing", "item": "https://dibbayajyoti.com/writing" },
    ],
  },
  "inLanguage": "en-US",
};

export default function WritingLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionPageJsonLd) }} />
      {children}
    </>
  );
}
