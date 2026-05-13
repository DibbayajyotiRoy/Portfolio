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
  "description": "Full Stack Software Engineer specializing in Rust, React, and Next.js. Creator of Klinder-OSS (unified analytics + session replay + email SDK), diffcore (Rust/WASM npm), and the AHTML (Agentic HTML) proposal. Builds production-grade SaaS platforms at Yupcha Softwares.",
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": "https://dibbayajyoti.com"
  },
  "sameAs": [
    "https://github.com/DibbayajyotiRoy",
    "https://linkedin.com/in/dibbayajyoti-roy/",
    "https://x.com/dibbayajyoti",
    "https://medium.com/@dibbayajyoti",
    "https://discord.com/users/om165_"
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
  "description": "Personal portfolio of Dibbayajyoti Roy — Full Stack Software Engineer & Rust Enthusiast.",
  "publisher": {
    "@id": "https://dibbayajyoti.com/#person"
  },
  "inLanguage": "en-US"
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "@id": "https://dibbayajyoti.com/#faq",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Who is Dibbayajyoti Roy?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Dibbayajyoti Roy is a Full Stack Software Engineer based in Agartala, India, specializing in TypeScript, Rust, React, and Next.js. He works at Yupcha Softwares Pvt. Ltd building production-grade SaaS platforms and is the creator of Klinder-OSS, an open-source product analytics SDK."
      }
    },
    {
      "@type": "Question",
      "name": "What programming languages does Dibbayajyoti Roy use?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "TypeScript, JavaScript (ES2023), Rust, SQL, and Python. His primary stack is React and Next.js on the frontend, Node.js and Hono on the backend, and Rust for high-performance systems. He also works with AWS Bedrock, Cloudflare Workers, and Neon Postgres."
      }
    },
    {
      "@type": "Question",
      "name": "What hackathons has Dibbayajyoti Roy won?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Winner of NITA Arjuna 2.0 National Hackathon (2025, among 200+ teams), Winner of Technovate Project Exhibition (2025), 1st Runner-Up at NITA–ISRO Space Hackathon (2024), and top 500 in the AI for Bharat hackathon (2026)."
      }
    },
    {
      "@type": "Question",
      "name": "What is Klinder-OSS?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Klinder-OSS is an open-source SDK built by Dibbayajyoti Roy that unifies three jobs in a single install: typed event tracking with Zod validation, error-based session recording, and automatic email trigger workflows from product behavior. It replaces the typical PostHog + LogRocket + Customer.io stack. Edge ingestion runs on Cloudflare Workers + Queues; storage is Neon Postgres with Row-Level Security for multi-tenant isolation; the API layer is Hono. A Rust port using workers-rs is in progress targeting sub-10ms p95 latency. Live at klinder-oss.vercel.app."
      }
    },
    {
      "@type": "Question",
      "name": "What is diffcore?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "diffcore is a fast WebAssembly JSON diff engine for JavaScript and TypeScript, built by Dibbayajyoti Roy in Rust and published on npm. It returns real JSON Pointer paths (RFC 6901) and decoded values — not opaque hashes — and emits standard RFC 6902 JSON Patch output, interoperable with fast-json-patch, jsondiffpatch, and any IETF-compliant consumer. It ships applyPatch and revertPatch for state sync, undo/redo, and optimistic UI, includes a React useDiff hook and a CLI, plus a streaming engine for multi-GB files. Benchmarks at 3.3 to 4.1 times optimized pure-JS diff (360–490 MB/s sustained). Runs on Node, browsers, Bun, Deno, Cloudflare Workers, Vercel Edge, Electron, and Tauri. Install: npm install diffcore. Live demo: rust-wasm-library.vercel.app."
      }
    },
    {
      "@type": "Question",
      "name": "What is AHTML (Agentic HTML)?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "AHTML, short for Agentic HTML, is an in-progress format proposal by Dibbayajyoti Roy intended to replace HTML for AI agent consumption of the web. Its goals are more efficient token usage, faster agent crawl latency, and a substrate that lets publishers monetize agent-readable data — enabling websites to sell structured access to LLM and agent crawlers."
      }
    },
    {
      "@type": "Question",
      "name": "What is Learning Copilot by Dibbayajyoti Roy?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Learning Copilot is an AI-powered learning assistant built by Dibbayajyoti Roy using AWS Bedrock (Nova Pro and Nova Lite), Next.js, and DynamoDB. It generates structured, level-adaptive explanations with auto-generated D2 diagrams and real-time streaming responses. It placed in the top 500 of the AI for Bharat hackathon and is live at ai-for-bharat.vercel.app."
      }
    },
    {
      "@type": "Question",
      "name": "Does Dibbayajyoti Roy have AI and machine learning experience?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Dibbayajyoti Roy has hands-on AI engineering experience including: AWS Bedrock multi-model orchestration (Nova Pro and Nova Lite) with fallback and graceful degradation, streaming inference, prompt engineering, cost-aware architecture with per-mode token budgets, and agent design. He built and shipped a production AI learning assistant placed in the top 500 of the AI for Bharat hackathon."
      }
    },
    {
      "@type": "Question",
      "name": "What are Dibbayajyoti Roy's notable projects?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Klinder-OSS (open-source product analytics SDK on Cloudflare Workers and Neon Postgres), Learning Copilot (AWS Bedrock AI assistant, top 500 AI for Bharat hackathon), BloodLink (blood donor-seeker matching platform with ~100 pilot users), and EMS (real-time Employee Management System in Rust and React)."
      }
    },
    {
      "@type": "Question",
      "name": "Is Dibbayajyoti Roy eligible to work in Europe?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Dibbayajyoti Roy is eligible for the Germany Opportunity Card, EU Blue Card, and Netherlands Highly Skilled Migrant (HSM) programme."
      }
    }
  ]
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />
      </head>
      <body
        className={`${GeistSans.variable} ${GeistMono.variable} relative font-sans bg-whiteout selection:text-white selection:bg-pink-400 dark:bg-zinc-900 text-blackout dark:text-zinc-100`}
      >
        <ThemeProvider attribute="class">
          <Nav/>
          <noscript>
              <div style={{ padding: '2rem', maxWidth: '800px', margin: '0 auto' }}>
                <h1>Dibbayajyoti Roy — Full Stack Software Engineer &amp; Rust Enthusiast</h1>
                <p>Full Stack Software Engineer based in Agartala, India, currently at Yupcha Softwares Pvt. Ltd. Specializing in Rust, TypeScript, React, and Next.js for building high-performance systems and production-grade SaaS platforms.</p>
                <h2>Key Skills</h2>
                <p>Rust, TypeScript, React, Next.js, Node.js, WebAssembly, Hono, REST APIs, Cloudflare Workers, AWS Bedrock, Neon Postgres, Docker, Linux infrastructure, Systems Programming.</p>
                <h2>Flagship Projects</h2>
                <ul>
                  <li><strong>Klinder-OSS</strong> — Open-source SDK that unifies event tracking, error-based session recording, and automatic email trigger workflows in one install. PostHog + LogRocket + Customer.io combined. <a href="https://klinder-oss.vercel.app">klinder-oss.vercel.app</a></li>
                  <li><strong>diffcore</strong> — Rust + WebAssembly diff library on npm, built for fast and compact diffs in production JavaScript bundles. <a href="https://www.npmjs.com/package/diffcore">npmjs.com/package/diffcore</a></li>
                  <li><strong>AHTML (Agentic HTML)</strong> — In-progress proposed format to replace HTML for AI agent consumption: efficient token usage, faster crawls, and a substrate for owners to monetize agent-readable data.</li>
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

