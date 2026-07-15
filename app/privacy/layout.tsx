import type { Metadata } from "next";

const baseUrl = process.env.VERCEL_PROJECT_PRODUCTION_URL
  ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
  : "https://dibbayajyoti.com";

export const metadata: Metadata = {
  title: "Privacy: Dibbayajyoti Roy",
  description:
    "Privacy notice for dibbayajyoti.com. What is collected, by whom, and how to opt out. Vercel Analytics + Speed Insights only: no cookies, no tracking pixels.",
  alternates: { canonical: "/privacy" },
  openGraph: {
    title: "Privacy: Dibbayajyoti Roy",
    description:
      "Privacy notice for dibbayajyoti.com. Anonymous Vercel analytics only: no cookies, no tracking pixels.",
    url: `${baseUrl}/privacy`,
    type: "website",
  },
  robots: { index: true, follow: true },
};

const privacyJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": "https://dibbayajyoti.com/privacy#page",
  "name": "Privacy Notice",
  "url": "https://dibbayajyoti.com/privacy",
  "description":
    "Privacy notice for dibbayajyoti.com. Vercel Analytics and Speed Insights collect anonymous request metadata only: no cookies, no tracking pixels.",
  "isPartOf": { "@id": "https://dibbayajyoti.com/#website" },
  "breadcrumb": {
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://dibbayajyoti.com" },
      { "@type": "ListItem", "position": 2, "name": "Privacy", "item": "https://dibbayajyoti.com/privacy" },
    ],
  },
  "dateModified": "2026-05-15",
  "inLanguage": "en-US",
};

export default function PrivacyLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(privacyJsonLd) }} />
      {children}
    </>
  );
}
