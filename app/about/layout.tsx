import type { Metadata } from "next";

const baseUrl = process.env.VERCEL_PROJECT_PRODUCTION_URL
  ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
  : "https://dibbayajyoti.com";

export const metadata: Metadata = {
  title: "About — Dibbayajyoti Roy | Full Stack Engineer & Rust Builder",
  description:
    "About Dibbayajyoti Roy — Full Stack Software Engineer based in Agartala, India, and a core team member building Yupcha's AI Video Interviewer. Builder behind Klinder-OSS, Diffcore (npm), and the @ahtmljs scope. Rust, Next.js, AWS Bedrock.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About — Dibbayajyoti Roy",
    description:
      "Full Stack Software Engineer and core team member building Yupcha's AI Video Interviewer. Creator of Klinder-OSS, Diffcore, and AHTML in Rust and TypeScript.",
    url: `${baseUrl}/about`,
    type: "profile",
  },
  twitter: {
    title: "About — Dibbayajyoti Roy",
    description:
      "Full Stack Engineer & Rust builder. Klinder-OSS, Diffcore, AHTML.",
  },
};

const aboutPageJsonLd = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  "@id": "https://dibbayajyoti.com/about#aboutpage",
  "name": "About Dibbayajyoti Roy",
  "url": "https://dibbayajyoti.com/about",
  "description":
    "About page for Dibbayajyoti Roy — Full Stack Software Engineer, creator of Klinder-OSS, Diffcore, and the @ahtmljs npm scope.",
  "mainEntity": { "@id": "https://dibbayajyoti.com/#person" },
  "breadcrumb": {
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://dibbayajyoti.com" },
      { "@type": "ListItem", "position": 2, "name": "About", "item": "https://dibbayajyoti.com/about" },
    ],
  },
  "inLanguage": "en-US",
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutPageJsonLd) }} />
      {children}
    </>
  );
}
