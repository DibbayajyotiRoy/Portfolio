import type { Metadata, Viewport } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import Footer from "@/components/footer";
import Nav from "@/components/nav";
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/next"

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

const baseUrl = process.env.VERCEL_PROJECT_PRODUCTION_URL 
  ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
  : "https://dibbayajyoti.com";

export const metadata: Metadata = {
  title: "Dibbayajyoti Roy – Full Stack & Rust Backend Engineer",
  description: "Dibbayajyoti Roy — hackathon winner and Full Stack Engineer at Yupcha Softwares. Rust backend, WebAssembly, React, and Next.js. Explore projects and experience.",
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
    title: "Dibbayajyoti Roy – Full Stack & Rust Backend Engineer",
    description: "Hackathon-winning Full Stack Engineer building production-grade systems with Rust, WebAssembly, React, and Next.js. Based in Agartala, India.",
    images: [
      {
        url: `/opengraph-image.png`,
        width: 1200,
        height: 630,
        alt: "Dibbayajyoti Roy – Full Stack & Rust Backend Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dibbayajyoti Roy – Full Stack & Rust Backend Engineer",
    description: "Hackathon-winning Full Stack Engineer building production-grade systems with Rust, WebAssembly, React, and Next.js. Based in Agartala, India.",
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
  "description": "Full Stack Software Engineer specializing in Rust, React, and Next.js. Creator of Klinder-OSS (unified analytics + session replay + email SDK), diffcore (Rust/WASM npm), AHTML (the seven-package @ahtmljs agentic-web scope), whatbroke (git-anchored crash capture over MCP), Roy UI (zero-config React component library), and Fresco (a Rust + GTK4 live-wallpaper app for Linux). Builds production-grade SaaS platforms at Yupcha Softwares.",
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": "https://dibbayajyoti.com"
  },
  "sameAs": [
    "https://github.com/DibbayajyotiRoy",
    "https://linkedin.com/in/dibbayajyoti-roy/",
    "https://x.com/dibbayajyoti",
    "https://medium.com/@dibbayajyoti",
    "https://discord.com/users/om165_",
    "https://www.npmjs.com/org/ahtmljs",
    "https://www.npmjs.com/package/@whatbroke/whatbroke",
    "https://www.npmjs.com/package/@roy-ui/ui",
    "https://www.npmjs.com/package/diffcore",
    "https://github.com/DibbayajyotiRoy/whatbroke",
    "https://github.com/DibbayajyotiRoy/RoyUI",
    "https://github.com/DibbayajyotiRoy/AHTML"
  ],
  "jobTitle": "Full Stack Software Engineer",
  "hasOccupation": {
    "@type": "Occupation",
    "name": "Full Stack Software Engineer",
    "occupationalCategory": "15-1252.00",
    "skills": "Rust, TypeScript, React, Next.js, Node.js, Python, FastAPI, Go, Docker, Android, Systems Programming"
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
    "Rust", "TypeScript", "JavaScript", "React", "Next.js", "Node.js",
    "Hono", "Express.js", "REST APIs", "Server-Sent Events", "Zod",
    "WebAssembly", "Rust WASM", "wasm-bindgen", "workers-rs",
    "JSON Diff", "JSON Patch", "RFC 6902", "RFC 6901", "JSON Pointer",
    "State Synchronization", "Optimistic UI", "Undo Redo", "Diff Algorithms",
    "Systems Programming", "Web Development", "Docker",
    "AWS Bedrock", "AWS DynamoDB", "AWS CloudWatch",
    "Cloudflare Workers", "Cloudflare Queues",
    "Neon Postgres", "PostgreSQL", "Redis", "MongoDB",
    "nginx", "systemd", "Proxmox VE", "Linux Infrastructure",
    "SaaS Development", "Multi-tenant Architecture", "Edge Computing",
    "Session Replay", "Product Analytics", "Email Automation",
    "AI Engineering", "Multi-model Orchestration", "Streaming Inference",
    "Agentic Web", "AI Crawler Optimization", "llms.txt", "SEO for AI Search"
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
  "description": "Personal portfolio of Dibbayajyoti Roy — Full Stack & Rust backend engineer specializing in WebAssembly, Next.js, and AI engineering.",
  "publisher": {
    "@id": "https://dibbayajyoti.com/#person"
  },
  "inLanguage": "en-US"
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="alternate" type="text/plain" href="/llms.txt" title="llms.txt — AI-friendly site summary" />
        <link rel="alternate" type="text/plain" href="/llms-full.txt" title="llms-full.txt — extended professional profile" />
        <link rel="me" href="https://github.com/DibbayajyotiRoy" />
        <link rel="me" href="https://linkedin.com/in/dibbayajyoti-roy/" />
        <link rel="me" href="https://x.com/dibbayajyoti" />
        <link rel="me" href="https://medium.com/@dibbayajyoti" />
        <link rel="author" href="https://dibbayajyoti.com/work" />
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
        className={`${GeistSans.variable} ${GeistMono.variable} relative font-sans bg-whiteout selection:text-white selection:bg-pink-400 dark:bg-zinc-900 text-blackout dark:text-zinc-100`}
      >
        <ThemeProvider attribute="class">
          <Nav/>
          <noscript>
              <div style={{ padding: '2rem', maxWidth: '800px', margin: '0 auto' }}>
                <h1>Dibbayajyoti Roy — Full Stack &amp; Rust Backend Engineer</h1>
                <p>Full Stack Software Engineer and Rust backend engineer based in Agartala, India, currently at Yupcha Softwares Pvt. Ltd. Specializing in Rust, WebAssembly, TypeScript, React, and Next.js for building high-performance systems and production-grade SaaS platforms.</p>
                <h2>Key Skills</h2>
                <p>Rust, TypeScript, React, Next.js, Node.js, WebAssembly, Hono, REST APIs, Cloudflare Workers, AWS Bedrock, Neon Postgres, Docker, Linux infrastructure, Systems Programming.</p>
                <h2>Flagship Projects</h2>
                <ul>
                  <li><strong>Klinder-OSS</strong> — Open-source SDK that unifies event tracking, error-based session recording, and automatic email trigger workflows in one install. PostHog + LogRocket + Customer.io combined. <a href="https://klinder-oss.vercel.app">klinder-oss.vercel.app</a></li>
                  <li><strong>diffcore</strong> — Rust + WebAssembly diff library on npm, built for fast and compact diffs in production JavaScript bundles. <a href="https://www.npmjs.com/package/diffcore">npmjs.com/package/diffcore</a></li>
                  <li><strong>AHTML (Agentic HTML)</strong> — Shipped seven-package npm scope (@ahtmljs/*, v0.9.0) that makes web content cheaply consumable by AI agents: a canonical agent snapshot, Next.js / Vite / Hono adapters, an agent SDK with dry-run safety gates, a LangChain.js loader, and an <code>ahtml doctor</code> CLI. <a href="https://www.npmjs.com/org/ahtmljs">npmjs.com/org/ahtmljs</a></li>
                  <li><strong>Learning Copilot</strong> — AWS Bedrock AI learning assistant (Nova Pro / Nova Lite multi-model fallback). Top 500 AI for Bharat hackathon. <a href="https://ai-for-bharat.vercel.app">ai-for-bharat.vercel.app</a></li>
                  <li>EMS — Real-time Employee Management System in Rust and React.</li>
                  <li>BloodLink — Blood donor-seeker matching platform; ~100 pilot users.</li>
                </ul>
                <h2>Awards</h2>
                <ul>
                  <li>Winner — NITA Arjuna 2.0 National Hackathon (2025), 200+ teams</li>
                  <li>Winner — Technovate Project Exhibition (2025)</li>
                  <li>1st Runner-Up — NITA–ISRO Space Hackathon (2024)</li>
                  <li>Top 500 — AI for Bharat Hackathon (2026)</li>
                </ul>
                <h2>Writing</h2>
                <p>See <a href="/writing">/writing</a> for engineering articles on Next.js SEO, Redis production debugging, and AI engineering with AWS Bedrock.</p>
                <p>Contact: dibbayajyoti@gmail.com | LinkedIn: linkedin.com/in/dibbayajyoti-roy/ | GitHub: github.com/DibbayajyotiRoy | X: x.com/dibbayajyoti</p>
              </div>
          </noscript>
          {children}
          <Footer />
        </ThemeProvider>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}

