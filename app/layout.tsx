import type { Metadata, Viewport } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import Footer from "@/components/footer";
import Nav from "@/components/nav";
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/next"
import { FramerProvider } from "@/components/framer-provider";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

const baseUrl = process.env.VERCEL_PROJECT_PRODUCTION_URL 
  ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
  : "https://dibbayajyoti.com";

export const metadata: Metadata = {
  title: "Dibbayajyoti Roy – Full Stack Software Engineer & Rust Enthusiast",
  description: "Dibbayajyoti Roy — hackathon winner and Full Stack Engineer at Yupcha Softwares. Rust, React, Next.js. Explore projects and experience.",
  metadataBase: new URL(baseUrl),
  alternates: {
    canonical: "/",
  },
  creator: "Dibbayajyoti Roy",
  publisher: "Dibbayajyoti Roy",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: baseUrl,
    siteName: "Dibbayajyoti Roy",
    title: "Dibbayajyoti Roy – Full Stack Software Engineer & Rust Enthusiast",
    description: "Hackathon-winning Full Stack Engineer building production-grade systems with Rust, React, and Next.js. Based in Agartala, India.",
    images: [
      {
        url: `/opengraph-image.png`,
        width: 1200,
        height: 630,
        alt: "Dibbayajyoti Roy – Full Stack Software Engineer & Rust Enthusiast",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dibbayajyoti Roy – Full Stack Software Engineer & Rust Enthusiast",
    description: "Hackathon-winning Full Stack Engineer building production-grade systems with Rust, React, and Next.js. Based in Agartala, India.",
    creator: "@DibbayajyotiRoy",
    images: [`/opengraph-image.png`],
  },
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": "https://dibbayajyoti.com/#person",
  "name": "Dibbayajyoti Roy",
  "alternateName": [
    "Dibyajyoti Roy",
    "Dibyojyoti Roy",
    "Dibayajyoti Roy"
  ],
  "url": "https://dibbayajyoti.com",
  "image": "https://dibbayajyoti.com/opengraph-image.png",
  "description": "Full Stack Software Engineer specializing in Rust, React, and Next.js. Building high-performance systems and production-grade SaaS platforms at Yupcha Softwares.",
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": "https://dibbayajyoti.com"
  },
  "sameAs": [
    "https://github.com/DibbayajyotiRoy",
    "https://linkedin.com/in/dibbayajyoti-roy/",
    "https://x.com/dibbayajyoti",
    "https://discord.com/users/om165_"
  ],
  "jobTitle": "Full Stack Software Engineer",
  "hasOccupation": {
    "@type": "Occupation",
    "name": "Full Stack Software Engineer",
    "occupationalCategory": "15-1252.00",
    "skills": "Rust, TypeScript, React, Next.js, Node.js, Docker, Systems Programming"
  },
  "worksFor": {
    "@type": "Organization",
    "name": "Yupcha Softwares Pvt. Ltd",
    "url": "https://yupcha.com"
  },
  "alumniOf": {
    "@type": "CollegeOrUniversity",
    "name": "ICFAI University Tripura"
  },
  "nationality": {
    "@type": "Country",
    "name": "India"
  },
  "knowsLanguage": ["English", "Hindi", "Bengali"],
  "knowsAbout": [
    "Rust", "TypeScript", "React", "Next.js", "Node.js",
    "Systems Programming", "Web Development", "Docker",
    "HonoJS", "ElysiaJS", "REST APIs", "SaaS Development"
  ],
  "award": [
    "Winner — NITA Arjuna 2.0 National Hackathon (2025)",
    "Winner — Technovate Project Exhibition",
    "1st Runner-Up — NITA–ISRO Space Hackathon (2024)"
  ],
  "contactPoint": {
    "@type": "ContactPoint",
    "email": "dibbayajyoti@gmail.com",
    "telephone": "+918731953807",
    "contactType": "personal"
  },
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Dashamighat",
    "addressLocality": "Agartala",
    "addressRegion": "Tripura",
    "addressCountry": "IN"
  }
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": "https://dibbayajyoti.com/#website",
  "name": "Dibbayajyoti Roy",
  "url": "https://dibbayajyoti.com",
  "description": "Personal portfolio of Dibbayajyoti Roy — Full Stack Software Engineer & Rust Enthusiast.",
  "publisher": {
    "@id": "https://dibbayajyoti.com/#person"
  },
  "inLanguage": "en-US"
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
      </head>
      <body
        className={`${GeistSans.variable} ${GeistMono.variable} 68e50d59-88e6-47d8-be3b-7aec8eb9f8af b5b5cc2f-bcfa-4b34-b5eb-419b51477b34 relative font-sans bg-whiteout selection:text-white 24576e23-44f4-4174-a049-9a0ebd609e65 selection:bg-pink-400 dark:bg-zinc-900 text-blackout dark:text-zinc-100`}
      >
        <ThemeProvider attribute="class">
          <FramerProvider>
            <Nav/>
            <noscript>
              <div style={{ padding: '2rem', maxWidth: '800px', margin: '0 auto' }}>
                <h1>Dibbayajyoti Roy — Full Stack Software Engineer & Rust Enthusiast</h1>
                <p>Full Stack Software Engineer based in Agartala, India, currently at Yupcha Softwares Pvt. Ltd. Specializing in Rust, TypeScript, React, and Next.js for building high-performance systems and production-grade SaaS platforms.</p>
                <h2>Key Skills</h2>
                <p>Rust, TypeScript, React, Next.js, Node.js, Docker, HonoJS, ElysiaJS, REST APIs, Systems Programming</p>
                <h2>Notable Projects</h2>
                <ul>
                  <li>EMS — Real-time Employee Management System built with Rust and React</li>
                  <li>LunarSite — AI-based lunar mineral prediction (NITA-ISRO hackathon)</li>
                  <li>BloodLink — Blood donor-seeker matching platform</li>
                  <li>CarbonFootprintTracker — AI-powered sustainability app</li>
                </ul>
                <h2>Awards</h2>
                <ul>
                  <li>Winner — NITA Arjuna 2.0 National Hackathon (2025)</li>
                  <li>Winner — Technovate Project Exhibition</li>
                  <li>1st Runner-Up — NITA–ISRO Space Hackathon (2024)</li>
                </ul>
                <p>Contact: dibbayajyoti@gmail.com | LinkedIn: linkedin.com/in/dibbayajyoti-roy/ | GitHub: github.com/DibbayajyotiRoy</p>
              </div>
            </noscript>
            {children}
            <Footer />
          </FramerProvider>
        </ThemeProvider>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}

export const revalidate = 300;
