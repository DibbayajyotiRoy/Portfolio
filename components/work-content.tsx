"use client";

import TitledParagraph from "@/components/titled-paragraph";
import Link from "next/link";
import { useState } from "react";
import { profile } from "@/lib/content/profile";
import { getProject } from "@/lib/content/projects";

// Project facts (links, comparison slugs) come from lib/content/projects.ts.
// The prose below is this page's own — /about carries the short narrative form.
const klinder = getProject("klinder-oss");
const ahtml = getProject("ahtml");
const diffcore = getProject("diffcore");
const whatbroke = getProject("whatbroke");
const royui = getProject("roy-ui");
const learningCopilot = getProject("learning-copilot");

const WorkContent = () => {
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
                I&apos;m {profile.firstName}, a {profile.title} based in {profile.location}. (
                <Link href={profile.links.linkedin} target="_blank" className="underline font-semibold">LinkedIn</Link>
                {" / "}
                <Link href={profile.links.github} target="_blank" className="underline font-semibold">GitHub</Link>
                )
              </p>
              <p>
                I specialize in frontend development with strong backend experience, using TypeScript, React, Next.js, and Rust to build production-ready systems.
              </p>
              <p>
                Currently shipping production-grade SaaS platforms at {profile.employer.name}.
              </p>
              <p>Some projects you can check out:{" "}
                <Link href="/projects/whatbroke" className="font-semibold underline">{whatbroke.name}</Link> (git-anchored crash capture for AI coding agents over MCP),{" "}
                <Link href="/projects/ahtml" className="font-semibold underline">{ahtml.name}</Link> (7-package @ahtmljs npm scope for the agent web),{" "}
                <Link href="/projects/roy-ui" className="font-semibold underline">{royui.name}</Link> (zero-config React component library),{" "}
                <Link href="/projects/klinder-oss" className="font-semibold underline">{klinder.name}</Link> (unified analytics + session replay + email SDK),{" "}
                <Link href="/projects/diffcore" className="font-semibold underline">{diffcore.name}</Link> (fast WebAssembly JSON diff — RFC 6902 Patch, React hook, CLI),{" "}
                <Link href={learningCopilot.primaryUrl} target="_blank" rel="noopener noreferrer" className="font-semibold underline">{learningCopilot.name}</Link> (AWS Bedrock AI assistant, top 500 AI for Bharat hackathon).
              </p>
              <p>
                {profile.education.degree} candidate ({profile.education.graduationYear}). Winner of several national hackathons including {profile.honors[0].name}.
              </p>
              <p>
                I love building blazingly fast tools and infrastructure. I&apos;m always looking for opportunities to contribute to the Rust ecosystem or build production-grade systems that push the boundaries of performance!
              </p>
            </div>
          </TitledParagraph>
        ) : (
          <>
            <TitledParagraph title="what I do">
              <p>Hi, I&apos;m <Link href={profile.links.linkedin} target="_blank" className="underline font-semibold">{profile.firstName}</Link>! I&apos;m a {profile.title} based in {profile.location}, currently working at{" "}
                <span className="font-semibold">{profile.employer.name}</span>.
                I focus on shipping production-grade SaaS platforms, integrating REST APIs, and building cutting-edge user-facing dashboards in Next.js.
                Beyond engineering, I have a deep interest in Next.js performance optimization, Core Web Vitals, Rust backend development, and modern design systems.
              </p>
            </TitledParagraph>

            <TitledParagraph title="experience">
              <p>
                Since {profile.employer.since} at <span className="font-semibold">{profile.employer.name}</span>, I&apos;ve shipped HR SaaS modules — employee records, leave workflow, and role-based access controls — used across partner organisations.
                I designed 12+ REST endpoints in Node.js/Express with PostgreSQL, deployed services to Ubuntu VMs on a Proxmox cluster with nginx reverse proxies, Let&apos;s Encrypt TLS, and systemd supervision.
                I cut page load time from 3.4s to 1.9s (~44%) by eliminating N+1 queries, adding composite indexes, and splitting Next.js bundle routes.
              </p>
            </TitledParagraph>

            <TitledParagraph title="projects">
              <div className="flex flex-col gap-5">
                <div className="flex flex-col gap-2">
                  <p>
                    <Link href={klinder.primaryUrl} target="_blank" rel="noopener noreferrer" className="font-semibold underline">{klinder.name}</Link>: An open-source SDK that unifies event tracking, error-based session recording, and automatic email trigger workflows in one install — replacing what teams normally stitch together with PostHog, LogRocket, and Customer.io. Typed events with Zod validation, edge ingestion on Cloudflare Workers + Queues, Neon Postgres with Row-Level Security for multi-tenant isolation, and a Rust port via workers-rs in progress targeting sub-10ms p95 latency.
                  </p>
                  <p className="text-sm flex flex-wrap gap-x-4 gap-y-1">
                    <Link href="/projects/klinder-oss" className="font-semibold underline">Details →</Link>
                    <Link href={klinder.primaryUrl} target="_blank" rel="noopener noreferrer" className="underline">Open the demo →</Link>
                    {klinder.comparison && (
                      <Link href={klinder.comparison.slug} className="underline">{klinder.comparison.label} →</Link>
                    )}
                  </p>
                </div>

                <div className="flex flex-col gap-2">
                  <p>
                    <Link href="/projects/whatbroke" className="font-semibold underline">{whatbroke.name}</Link>: An open-source (Apache-2.0) terminal capture layer for local Node/TypeScript crashes. Wrap a dev command — <span className="font-mono text-sm">whatbroke run npm test</span> — and when it dies it packages the error, the diff since the code last worked, and a deterministically-ranked guess at the responsible file, secrets scrubbed by a mandatory redaction gate, then serves it to a coding agent (Claude Code, Cursor) over a read-only MCP server. The ranking intersects the crash stack with files changed since the last green commit — no LLM, no network, byte-identical output.
                  </p>
                  <p className="text-sm flex flex-wrap gap-x-4 gap-y-1">
                    <Link href="/projects/whatbroke" className="font-semibold underline">Details →</Link>
                    {whatbroke.links.npm && (
                      <Link href={whatbroke.links.npm} target="_blank" rel="noopener noreferrer" className="underline">npm →</Link>
                    )}
                    {whatbroke.links.github && (
                      <Link href={whatbroke.links.github} target="_blank" rel="noopener noreferrer" className="underline">GitHub →</Link>
                    )}
                  </p>
                </div>

                <div className="flex flex-col gap-2">
                  <p>
                    <Link href="/projects/roy-ui" className="font-semibold underline">{royui.name}</Link>: An open-source (MIT) React component library for dashboards, admin panels, and internal tools. It ships a batteries-included <span className="font-mono text-sm">DataTable</span> — search, date-range and time filters, sort, pagination, drag-to-reorder and edge-drag-resize columns, hide/restore, CSV/JSON import-export — plus a custom date range picker with no <span className="font-mono text-sm">date-fns</span> dependency and an analog/digital time picker. TypeScript-first, RSC-safe, tree-shakable ESM, sub-12&nbsp;KB, zero config. A styled, install-don&apos;t-copy-paste alternative to shadcn/ui and TanStack Table for Next.js 15, Vite, Remix, and TanStack Start.
                  </p>
                  <p className="text-sm flex flex-wrap gap-x-4 gap-y-1">
                    <Link href="/projects/roy-ui" className="font-semibold underline">Details →</Link>
                    {royui.links.demo && (
                      <Link href={royui.links.demo} target="_blank" rel="noopener noreferrer" className="underline">Live docs →</Link>
                    )}
                    {royui.links.npm && (
                      <Link href={royui.links.npm} target="_blank" rel="noopener noreferrer" className="underline">npm →</Link>
                    )}
                    {royui.links.github && (
                      <Link href={royui.links.github} target="_blank" rel="noopener noreferrer" className="underline">GitHub →</Link>
                    )}
                  </p>
                </div>

                <div className="flex flex-col gap-2">
                  <p>
                    <Link href={ahtml.primaryUrl} target="_blank" rel="noopener noreferrer" className="font-semibold underline">{ahtml.name}</Link>: A shipped seven-package npm scope (<span className="font-mono text-sm">@ahtmljs/*</span>) at v{ahtml.version} for making web content cheaply consumable by AI agents.{" "}
                    <Link href="https://www.npmjs.com/package/@ahtmljs/schema" target="_blank" rel="noopener noreferrer" className="underline">@ahtmljs/schema</Link> defines the canonical snapshot with RAG-ready <span className="font-mono text-sm">Document.chunks</span>;{" "}
                    <Link href="https://www.npmjs.com/package/@ahtmljs/next" target="_blank" rel="noopener noreferrer" className="underline">@ahtmljs/next</Link> and{" "}
                    <Link href="https://www.npmjs.com/package/@ahtmljs/vite" target="_blank" rel="noopener noreferrer" className="underline">@ahtmljs/vite</Link> emit MCP, OpenAPI, JSON-LD, llms.txt, and the AHTML snapshot at <span className="font-mono text-sm">/.well-known/ahtml.json</span> with one config line;{" "}
                    <Link href="https://www.npmjs.com/package/@ahtmljs/agent" target="_blank" rel="noopener noreferrer" className="underline">@ahtmljs/agent</Link> is the client SDK with ETag caching, dry-run safety gates, and hostile-agent regression tests;{" "}
                    <Link href="https://www.npmjs.com/package/@ahtmljs/langchain" target="_blank" rel="noopener noreferrer" className="underline">@ahtmljs/langchain</Link> turns any AHTML site into a LangChain.js <span className="font-mono text-sm">Document[]</span> with citation metadata;{" "}
                    <Link href="https://www.npmjs.com/package/@ahtmljs/hono" target="_blank" rel="noopener noreferrer" className="underline">@ahtmljs/hono</Link> mounts the same emitter on any Hono runtime (Node, Bun, Deno, Cloudflare Workers, AWS Lambda); and{" "}
                    <Link href="https://www.npmjs.com/package/@ahtmljs/cli" target="_blank" rel="noopener noreferrer" className="underline">@ahtmljs/cli</Link> ships <span className="font-mono text-sm">ahtml doctor</span> to validate the discovery chain in CI. 344 passing tests across the scope.
                  </p>
                  <p className="text-sm flex flex-wrap gap-x-4 gap-y-1">
                    <Link href="/projects/ahtml" className="font-semibold underline">Details →</Link>
                    <Link href={ahtml.primaryUrl} target="_blank" rel="noopener noreferrer" className="underline">npm scope →</Link>
                    {ahtml.links.github && (
                      <Link href={ahtml.links.github} target="_blank" rel="noopener noreferrer" className="underline">GitHub →</Link>
                    )}
                    {ahtml.comparison && (
                      <Link href={ahtml.comparison.slug} className="underline">{ahtml.comparison.label} →</Link>
                    )}
                  </p>
                </div>

                <div className="flex flex-col gap-2">
                  <p>
                    <Link href={diffcore.primaryUrl} target="_blank" rel="noopener noreferrer" className="font-semibold underline">{diffcore.name}</Link>: A fast Rust + WebAssembly JSON diff engine on npm — written in Rust, compiled to WASM, it returns real <span className="font-mono text-sm">JSON Pointer</span> paths and decoded values (not opaque hashes), emits standard <span className="font-mono text-sm">RFC 6902 JSON Patch</span>, and ships <span className="font-mono text-sm">applyPatch</span> / <span className="font-mono text-sm">revertPatch</span>, three-way merge, undo/redo, a React hook, and a CLI. In head-to-head benchmarks it is <span className="italic">2.3–3.0×</span> faster than <span className="font-mono text-sm">fast-json-patch</span> and <span className="italic">4–8×</span> faster than <span className="font-mono text-sm">jsondiffpatch</span>. The wedge: two of the four leaders in the JSON-diff market (<span className="font-mono text-sm">fast-json-patch</span> last shipped 2022, <span className="font-mono text-sm">deep-diff</span> last 2018) are effectively stale — Diffcore is the actively-shipped, RFC-6902-compliant alternative.
                  </p>
                  <p className="text-sm flex flex-wrap gap-x-4 gap-y-1">
                    <Link href="/projects/diffcore" className="font-semibold underline">Details →</Link>
                    {diffcore.links.npm && (
                      <Link href={diffcore.links.npm} target="_blank" rel="noopener noreferrer" className="underline">npm install diffcore →</Link>
                    )}
                    {diffcore.links.demo && (
                      <Link href={diffcore.links.demo} target="_blank" rel="noopener noreferrer" className="underline">Live demo →</Link>
                    )}
                    {diffcore.comparison && (
                      <Link href={diffcore.comparison.slug} className="underline">{diffcore.comparison.label} →</Link>
                    )}
                  </p>
                </div>

                <div className="flex flex-col gap-2">
                  <p>
                    <Link href={learningCopilot.primaryUrl} target="_blank" rel="noopener noreferrer" className="font-semibold underline">{learningCopilot.name}</Link>: An AWS Bedrock-powered AI learning assistant with structured, level-adaptive explanations, auto-generated D2 diagrams, and real-time streaming responses. Engineered multi-model fallback (Nova Pro → Nova Lite) for resilience under rate limits. Cost-aware architecture with DynamoDB conversation memory (30-day TTL) and per-mode token budgets. Selected top 500 in the AI for Bharat hackathon.
                  </p>
                  <p className="text-sm flex flex-wrap gap-x-4 gap-y-1">
                    <Link href={learningCopilot.primaryUrl} target="_blank" rel="noopener noreferrer" className="font-semibold underline">Try it →</Link>
                  </p>
                </div>
              </div>
            </TitledParagraph>

            <TitledParagraph title="open source">
              <div className="flex flex-col gap-2">
                <p>
                  I contribute upstream to tools I use — most recently replication diagnostics for <Link href="/open-source" className="font-semibold underline">ReductStore</Link>, a Rust time-series database: merged by the maintainer, shipping in v1.20.
                </p>
                <p className="text-sm flex flex-wrap gap-x-4 gap-y-1">
                  <Link href="/open-source" className="font-semibold underline">Contributions + maintainer endorsement →</Link>
                  <Link href="https://github.com/reductstore/reductstore/pull/1417" target="_blank" rel="noopener noreferrer" className="underline">PR #1417 →</Link>
                </p>
              </div>
            </TitledParagraph>

            <TitledParagraph title="npm">
              <p className="text-sm sm:text-base opacity-80">
                Each product&apos;s live npm download counts are on its own page —{" "}
                <Link href="/projects/whatbroke" className="underline">whatbroke</Link>,{" "}
                <Link href="/projects/ahtml" className="underline">AHTML</Link>,{" "}
                <Link href="/projects/roy-ui" className="underline">Roy UI</Link>,{" "}
                <Link href="/projects/diffcore" className="underline">Diffcore</Link>.
              </p>
            </TitledParagraph>

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
                Hackathon wins including the {profile.honors[0].name} ({profile.honors[0].year}) and the {profile.honors[1].name}. The full list of awards and recognition is on{" "}
                <Link href="/about" className="font-semibold underline">/about</Link>.
              </p>
            </TitledParagraph>

            <TitledParagraph title="writing">
              <p>
                Long-form engineering notes on production incidents, AI engineering with AWS Bedrock, Next.js SEO, and Rust + WebAssembly performance — read at{" "}
                <Link href="/writing" className="font-semibold underline">/writing</Link>.
              </p>
            </TitledParagraph>

            <TitledParagraph title="topics">
              <p>
                Deep dives by area:{" "}
                <Link href="/rust" className="underline">Rust engineering</Link>,{" "}
                <Link href="/webassembly" className="underline">WebAssembly</Link>,{" "}
                <Link href="/ai-engineering" className="underline">AI engineering</Link>,{" "}
                <Link href="/nextjs-seo" className="underline">Next.js SEO</Link>, and{" "}
                <Link href="/distributed-systems" className="underline">distributed systems</Link>.
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
                I started my journey with a curiosity for how things are built, which led me to a {profile.education.degree} at {profile.education.institution}.
                Web development allows me to design things and share them with anyone, anywhere, instantly. Web always wins.
              </p>
            </TitledParagraph>

            <hr className="border-blackout dark:border-whiteout opacity-25" />

            <TitledParagraph title="Why Rust?">
              <p>
                I have a deep appreciation for <span className="font-semibold">Rust</span> as a systems programming language.
                It&apos;s truly a Swiss Army knife—whether it&apos;s low-level hardware control, building high-performance 3D game engines, or developing blazingly fast async backend services and microservices, Rust delivers both safety and speed without compromise.
              </p>
              <p className="mt-4">
                The strict compiler, the ownership model, and the zero-cost abstractions make it a joy to work with once you master it.
                I believe Rust is the future of infrastructure, and I&apos;m constantly exploring its potential in WebAssembly, edge computing on Cloudflare Workers (workers-rs), and real-time systems.
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
