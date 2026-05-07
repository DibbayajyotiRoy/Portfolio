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
    "Systems Programming", "Web Development", "Docker",
    "AWS Bedrock", "AWS DynamoDB", "AWS CloudWatch",
    "Cloudflare Workers", "Cloudflare Queues",
    "Neon Postgres", "PostgreSQL", "Redis", "MongoDB",
    "nginx", "systemd", "Proxmox VE", "Linux Infrastructure",
    "SaaS Development", "Multi-tenant Architecture", "Edge Computing",
    "AI Engineering", "Multi-model Orchestration", "Streaming Inference"
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
        "text": "Klinder-OSS is an open-source product analytics SDK built by Dibbayajyoti Roy. It uses a TypeScript SDK for typed event tracking, Cloudflare Workers for edge event ingestion, Cloudflare Queues, Neon Postgres with Row-Level Security for multi-tenant isolation, and Hono for the API layer. A Rust port using workers-rs is in progress targeting sub-10ms p95 latency."
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

