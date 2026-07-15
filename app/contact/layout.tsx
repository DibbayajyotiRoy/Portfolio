import type { Metadata } from "next";

const baseUrl = process.env.VERCEL_PROJECT_PRODUCTION_URL
  ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
  : "https://dibbayajyoti.com";

export const metadata: Metadata = {
  title: "Contact — Dibbayajyoti Roy | Hire, Collaborate, Ask",
  description:
    "Get in touch with Dibbayajyoti Roy — Full Stack Engineer. Email, LinkedIn, X, GitHub. Open to roles, contracts, and OSS questions.",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Contact — Dibbayajyoti Roy",
    description:
      "Email, LinkedIn, X, GitHub. Open to engineering roles, contract work, and open-source questions.",
    url: `${baseUrl}/contact`,
    type: "website",
  },
  twitter: {
    title: "Contact — Dibbayajyoti Roy",
    description:
      "Email, LinkedIn, X, GitHub. Open to engineering roles and OSS questions.",
  },
};

const contactPageJsonLd = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  "@id": "https://dibbayajyoti.com/contact#contactpage",
  "name": "Contact Dibbayajyoti Roy",
  "url": "https://dibbayajyoti.com/contact",
  "description":
    "Contact channels for Dibbayajyoti Roy — email, LinkedIn, X, GitHub, Discord.",
  "mainEntity": { "@id": "https://dibbayajyoti.com/#person" },
  "breadcrumb": {
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://dibbayajyoti.com" },
      { "@type": "ListItem", "position": 2, "name": "Contact", "item": "https://dibbayajyoti.com/contact" },
    ],
  },
  "inLanguage": "en-US",
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(contactPageJsonLd) }} />
      {children}
    </>
  );
}
