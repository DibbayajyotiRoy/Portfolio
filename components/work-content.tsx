"use client";

import TitledParagraph from "@/components/titled-paragraph";
import Link from "next/link";
import { useState, type ReactNode } from "react";
import { ExternalLink } from "lucide-react";
import { AnimatePresence } from "framer-motion";
import Image from "next/image";

interface WorkContentProps {
  npmStatsSlot?: ReactNode;
}

const WorkContent = ({ npmStatsSlot }: WorkContentProps) => {
  const [isTLDRShown, setIsTLDRShown] = useState(false);

  return (
    <>
      <button
        onClick={() => {
          setIsTLDRShown(!isTLDRShown);
          window.scrollTo({ top: 0, behavior: "smooth" });
        }}
        className="text-base sm:sticky mt-6 sm:mt-0 sm:top-9 z-10 bg-white dark:bg-blackout border dark:border-whiteout/50 rounded-md px-2 py-0.5 border-blackout"
      >
        {!isTLDRShown
          ? "Too much text? show TLDR"
          : "More details? show everything"}
      </button>

      <div className="flex flex-col gap-6 sm:gap-8 mt-10 text-blackout/90 dark:text-whiteout/90">
        {isTLDRShown ? (
          <TitledParagraph title="TLDR">
            <div className="flex flex-col gap-2 sm:gap-3">
              <p>
                I'm Dibbayajyoti, a Full Stack Developer based in Agartala, India. (
                <Link href="https://linkedin.com/in/dibbayajyoti-roy/" target="_blank" className="underline font-semibold">LinkedIn</Link>
                {" / "}
                <Link href="https://github.com/DibbayajyotiRoy" target="_blank" className="underline font-semibold">GitHub</Link>
                )
              </p>
              <p>
                I specialize in frontend development with strong backend experience, using TypeScript, React, Next.js, and Rust to build production-ready systems.
              </p>
              <p>
                Currently shipping production-grade SaaS platforms at Yupcha Softwares.
              </p>
              <p>Some projects you can check out:{" "}
                <Link href="https://klinder-oss.vercel.app" target="_blank" rel="noopener noreferrer" className="font-semibold underline">Klinder-OSS</Link> (unified event tracking + session recording + email triggers SDK),{" "}
                <Link href="https://www.npmjs.com/org/ahtmljs" target="_blank" rel="noopener noreferrer" className="font-semibold underline">AHTML</Link> (5-package @ahtmljs npm scope for AI-agent-friendly web),{" "}
                <Link href="https://rust-wasm-library.vercel.app" target="_blank" rel="noopener noreferrer" className="font-semibold underline">Diffcore</Link> (fast WebAssembly JSON diff — RFC 6902 Patch, React hook, CLI),{" "}
                <Link href="https://ai-for-bharat.vercel.app" target="_blank" rel="noopener noreferrer" className="font-semibold underline">Learning Copilot</Link> (AWS Bedrock AI assistant, top 500 AI for Bharat hackathon).
              </p>
              <p>
                B.Tech in Computer Science candidate (2026). Winner of several national hackathons including NITA Arjuna 2.0.
              </p>
              <p>
                I love building blazingly fast tools and infrastructure. I&apos;m always looking for opportunities to contribute to the Rust ecosystem or build production-grade systems that push the boundaries of performance!
              </p>
            </div>
          </TitledParagraph>
        ) : (
          <>
            <TitledParagraph title="what I do">
              <p>Hi, I&apos;m <Link href="https://linkedin.com/in/dibbayajyoti-roy/" target="_blank" className="underline font-semibold">Dibbayajyoti</Link>! I'm a Full Stack Software Engineer based in Agartala, India, currently working at{" "}
                <span className="font-semibold">Yupcha Softwares Pvt. Ltd</span>. 
                I focus on shipping production-grade SaaS platforms, integrating REST APIs, and building cutting-edge user-facing dashboards. 
                Beyond engineering, I have a deep interest in web performance, Core Web Vitals, and modern design systems.
              </p>
            </TitledParagraph>

            <TitledParagraph title="experience">
              <p>
                Since July 2025 at <span className="font-semibold">Yupcha Softwares Pvt. Ltd</span>, I&apos;ve shipped HR SaaS modules — employee records, leave workflow, and role-based access controls — used across partner organisations.
                I designed 12+ REST endpoints in Node.js/Express with PostgreSQL, deployed services to Ubuntu VMs on a Proxmox cluster with nginx reverse proxies, Let&apos;s Encrypt TLS, and systemd supervision.
                I cut page load time from 3.4s to 1.9s (~44%) by eliminating N+1 queries, adding composite indexes, and splitting Next.js bundle routes.
              </p>
            </TitledParagraph>

            <TitledParagraph title="projects">
              <div className="flex flex-col gap-5">
                <p>
                  <Link href="https://klinder-oss.vercel.app" target="_blank" rel="noopener noreferrer" className="font-semibold underline">Klinder-OSS</Link>: An open-source SDK that unifies event tracking, error-based session recording, and automatic email trigger workflows in one install — replacing what teams normally stitch together with PostHog, LogRocket, and Customer.io. Typed events with Zod validation, edge ingestion on Cloudflare Workers + Queues, Neon Postgres with Row-Level Security for multi-tenant isolation, and a Rust port via workers-rs in progress targeting sub-10ms p95 latency.
                </p>
                <p>
                  <Link href="https://www.npmjs.com/org/ahtmljs" target="_blank" rel="noopener noreferrer" className="font-semibold underline">AHTML</Link>: A shipped five-package npm scope (<span className="font-mono text-sm">@ahtmljs/*</span>) at v0.2.0 for making web content cheaply consumable by AI agents.{" "}
                  <Link href="https://www.npmjs.com/package/@ahtmljs/schema" target="_blank" rel="noopener noreferrer" className="underline">@ahtmljs/schema</Link> defines the canonical snapshot with RAG-ready <span className="font-mono text-sm">Document.chunks</span>;{" "}
                  <Link href="https://www.npmjs.com/package/@ahtmljs/next" target="_blank" rel="noopener noreferrer" className="underline">@ahtmljs/next</Link> and{" "}
                  <Link href="https://www.npmjs.com/package/@ahtmljs/vite" target="_blank" rel="noopener noreferrer" className="underline">@ahtmljs/vite</Link> emit MCP, OpenAPI, JSON-LD, llms.txt, and the AHTML snapshot at <span className="font-mono text-sm">/.well-known/ahtml.json</span> with one config line;{" "}
                  <Link href="https://www.npmjs.com/package/@ahtmljs/agent" target="_blank" rel="noopener noreferrer" className="underline">@ahtmljs/agent</Link> is the client SDK with ETag caching, dry-run safety gates, and hostile-agent regression tests;{" "}
                  <Link href="https://www.npmjs.com/package/@ahtmljs/langchain" target="_blank" rel="noopener noreferrer" className="underline">@ahtmljs/langchain</Link> turns any AHTML site into a LangChain.js <span className="font-mono text-sm">Document[]</span> with citation metadata. 143 passing tests across the scope. Repo:{" "}
                  <Link href="https://github.com/DibbayajyotiRoy/AHTML" target="_blank" rel="noopener noreferrer" className="underline">github.com/DibbayajyotiRoy/AHTML</Link>.
                </p>
                <p>
                  <Link href="https://rust-wasm-library.vercel.app" target="_blank" rel="noopener noreferrer" className="font-semibold underline">Diffcore</Link>: A fast WebAssembly JSON diff engine on npm — written in Rust, returns real <span className="font-mono text-sm">JSON Pointer</span> paths and decoded values (not opaque hashes), emits standard <span className="font-mono text-sm">RFC 6902 JSON Patch</span>, and ships <span className="font-mono text-sm">applyPatch</span> / <span className="font-mono text-sm">revertPatch</span>, three-way merge, undo/redo, a React hook, and a CLI. <span className="italic">3.3–4.1×</span> faster than optimized pure-JS diff. The wedge: two of the four leaders in the JSON-diff market (<span className="font-mono text-sm">fast-json-patch</span> last shipped 2022, <span className="font-mono text-sm">deep-diff</span> last 2018) are effectively stale — Diffcore is the actively-shipped, RFC-6902-compliant alternative. npm:{" "}
                  <Link href="https://www.npmjs.com/package/diffcore" target="_blank" rel="noopener noreferrer" className="underline">diffcore</Link>.
                </p>
                <p>
                  <Link href="https://ai-for-bharat.vercel.app" target="_blank" rel="noopener noreferrer" className="font-semibold underline">Learning Copilot</Link>: An AWS Bedrock-powered AI learning assistant with structured, level-adaptive explanations, auto-generated D2 diagrams, and real-time streaming responses. Engineered multi-model fallback (Nova Pro → Nova Lite) for resilience under rate limits. Cost-aware architecture with DynamoDB conversation memory (30-day TTL) and per-mode token budgets. Selected top 500 in the AI for Bharat hackathon.
                </p>
              </div>
            </TitledParagraph>

            {npmStatsSlot && (
              <TitledParagraph title="npm">
                {npmStatsSlot}
              </TitledParagraph>
            )}

            <TitledParagraph title="older work">
              <p className="text-sm sm:text-base opacity-80">
                <Link href="https://github.com/DibbayajyotiRoy/BloodLink" target="_blank" rel="noopener noreferrer" className="underline">BloodLink</Link> — blood donor / seeker matching platform with PostgreSQL geolocation, ~100 pilot users (2024).{" "}
                <Link href="https://github.com/DibbayajyotiRoy/Rust-FullStack-App" target="_blank" rel="noopener noreferrer" className="underline">EMS</Link> — real-time Employee Management System in Rust and React.{" "}
                <Link href="https://github.com/DibbayajyotiRoy/LunarSite" target="_blank" rel="noopener noreferrer" className="underline">LunarSite</Link> — ML pipeline for lunar mineral prediction (NITA–ISRO 2024).{" "}
                <Link href="https://github.com/DibbayajyotiRoy/Carbon-Tracker" target="_blank" rel="noopener noreferrer" className="underline">CarbonFootprintTracker</Link> — sustainability calculator with smart recommendations.
              </p>
            </TitledParagraph>

            <TitledParagraph title="skills">
              <p>
                TypeScript, JavaScript, Rust, and Python. Frontend: React, Next.js, Tailwind CSS, TanStack Query.
                Backend: Node.js, Hono, Express, REST APIs, Server-Sent Events, Zod, OAuth, JWT.
                Infrastructure: Linux, Proxmox VE, nginx, systemd, Docker, Cloudflare Workers, AWS (Bedrock, DynamoDB, CloudWatch).
                Databases: PostgreSQL (Neon, RLS, partitioning), DynamoDB, MongoDB, Redis.
                AI/ML: AWS Bedrock, multi-model orchestration with fallback, streaming inference, prompt engineering, agent design.
              </p>
            </TitledParagraph>

            <TitledParagraph title="honors">
              <p>
                I&apos;ve been fortunate to win several competitions, including the NITA Arjuna 2.0 National Hackathon (2025) and the Technovate Project Exhibition. 
                I was also the 1st Runner-Up in the NITA–ISRO Space Hackathon (2024).
              </p>
            </TitledParagraph>

            <TitledParagraph title="writing">
              <p>
                Long-form engineering notes on production incidents, AI engineering with AWS Bedrock, Next.js SEO, and Rust + WebAssembly performance — read at{" "}
                <Link href="/writing" className="font-semibold underline">/writing</Link>.
              </p>
            </TitledParagraph>

            <TitledParagraph title="My Focus">
              <p>
                My goal is to build software that is both robust and efficient. Rust has completely transformed my approach to engineering, moving me from just building &quot;web apps&quot; to designing reliable systems. 
                I&apos;d love to contribute to core infrastructure projects, high-performance engines, or any challenge that requires deep technical precision.
              </p>
            </TitledParagraph>
            
            <hr className="border-blackout dark:border-whiteout opacity-25" />

            <TitledParagraph title="About Me">
              <p>
                I started my journey with a curiosity for how things are built, which led me to a B.Tech in Computer Science at ICFAI University Tripura. 
                Web development allows me to design things and share them with anyone, anywhere, instantly. Web always wins.
              </p>
            </TitledParagraph>

            <hr className="border-blackout dark:border-whiteout opacity-25" />

            <TitledParagraph title="Why Rust?">
              <p>
                I have a deep appreciation for <span className="font-semibold">Rust</span> as a systems programming language. 
                It&apos;s truly a Swiss Army knife—whether it&apos;s low-level hardware control, building high-performance 3D game engines, or developing blazingly fast backend services, Rust delivers both safety and speed without compromise.
              </p>
              <p className="mt-4">
                The strict compiler, the ownership model, and the zero-cost abstractions make it a joy to work with once you master it. 
                I believe Rust is the future of infrastructure, and I&apos;m constantly exploring its potential in edge computing and real-time systems.
              </p>
            </TitledParagraph>
          </>
        )}
        <p className="text-base sm:text-lg my-10 sm:my-20">
          Thanks for reading this. Love your work, keep it up!
        </p>
      </div>
    </>
  );
};

export default WorkContent;
