import type { Metadata } from "next";

const baseUrl = process.env.VERCEL_PROJECT_PRODUCTION_URL 
  ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
  : "https://dibbayajyoti.com";

export const metadata: Metadata = {
  title: "Dibbayajyoti Roy — Projects, Skills & Experience",
  description: "What has Dibbayajyoti Roy built? Explore projects in Rust, React, and AI — plus hackathon wins and production engineering work.",
  alternates: {
    canonical: "/work",
  },
  openGraph: {
    title: "Dibbayajyoti Roy — Projects, Skills & Experience",
    description: "Full Stack Engineer at Yupcha Softwares. Rust, React, Next.js projects, hackathon wins, and professional experience.",
    url: `${baseUrl}/work`,
  },
  twitter: {
    title: "Dibbayajyoti Roy — Projects, Skills & Experience",
    description: "Full Stack Engineer at Yupcha Softwares. Rust, React, Next.js projects, hackathon wins, and professional experience.",
  },
};

const workPageJsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfilePage",
  "@id": "https://dibbayajyoti.com/work#profilepage",
  "name": "Dibbayajyoti Roy — Projects, Skills & Experience",
  "url": "https://dibbayajyoti.com/work",
  "description": "Professional profile of Dibbayajyoti Roy — projects, skills, experience, and hackathon achievements.",
  "mainEntity": {
    "@id": "https://dibbayajyoti.com/#person"
  },
  "breadcrumb": {
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://dibbayajyoti.com"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Work",
        "item": "https://dibbayajyoti.com/work"
      }
    ]
  },
  "dateModified": new Date().toISOString().split('T')[0],
  "inLanguage": "en-US"
};

export default function WorkLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(workPageJsonLd) }}
      />
      {children}
    </>
  );
}
