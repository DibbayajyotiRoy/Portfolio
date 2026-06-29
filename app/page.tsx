import ScrollContainer from "@/components/scroll-container";

// Identity / recruiting FAQ lives on the homepage ONLY (and is true + visible
// here). It used to be injected sitewide from app/layout.tsx, which put a second
// FAQPage on every topic page and triggered the GSC "Duplicate field 'FAQPage'"
// error on /rust and /distributed-systems. One FAQPage per URL, max.
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
        "text": "AHTML (Agentic HTML) is a shipped nine-package npm scope built by Dibbayajyoti Roy at @ahtmljs/* (v0.9.5) for making web content cheaply consumable by AI agents. The scope ships @ahtmljs/schema (canonical semantic snapshot with RAG-ready Document.chunks), @ahtmljs/next (Next.js plugin emitting MCP, OpenAPI, JSON-LD, llms.txt, and the AHTML snapshot at /.well-known/ahtml.json), @ahtmljs/agent (typed client SDK with ETag caching, dry-run safety gates, hostile-agent regressions), @ahtmljs/vite (cross-framework Vite plugin with byte-identical output to the Next.js plugin), @ahtmljs/langchain (LangChain.js document loader preserving citation anchors and byte ranges), @ahtmljs/hono (Hono adapter for Node, Bun, Deno, Cloudflare Workers, and AWS Lambda), @ahtmljs/kv (pluggable KV and cache backends), @ahtmljs/webmcp (WebMCP tool registry & browser bookmarklet for page actions), and @ahtmljs/cli (the ahtml doctor command that validates a site's discovery chain in CI). 363 passing tests across the scope. Repo: github.com/DibbayajyotiRoy/AHTML."
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

export default async function Home() {

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <ScrollContainer />
    </>
  );
}
