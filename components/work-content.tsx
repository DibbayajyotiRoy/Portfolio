"use client";

import TitledParagraph from "@/components/titled-paragraph";
import Reveal from "@/components/reveal";
import StatLine from "@/components/stat-line";
import ChapterClose from "@/components/chapter-close";
import Link from "next/link";
import { useState } from "react";
import { profile } from "@/lib/content/profile";
import { getProject } from "@/lib/content/projects";
import { sound } from "@/lib/sound";

// Project facts (links, comparison slugs) come from lib/content/projects.ts.
// The prose below is this page's own. /about carries the short narrative form.
const klinder = getProject("klinder-oss");
const ahtml = getProject("ahtml");
const diffcore = getProject("diffcore");
const whatbroke = getProject("whatbroke");
const royui = getProject("roy-ui");
const fresco = getProject("fresco");
const learningCopilot = getProject("learning-copilot");

const WorkContent = () => {
  const [isTLDRShown, setIsTLDRShown] = useState(false);

  return (
    <>
      <button
        onClick={() => {
          sound.viewSwitch();
          setIsTLDRShown(!isTLDRShown);
          window.scrollTo({ top: 0, behavior: "smooth" });
        }}
        className="text-base sm:sticky mt-6 sm:mt-0 sm:top-9 z-10 bg-white dark:bg-blackout border dark:border-whiteout/50 rounded-md px-2 py-0.5 border-blackout transition-transform duration-150 ease-out active:scale-[0.97]"
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
                I&apos;m {profile.firstName}, a {profile.title}. (
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
                 <Link href="/projects/ahtml" className="font-semibold underline">{ahtml.name}</Link> (16-package @ahtmljs npm scope + Python SDK for the agent web),{" "}
                <Link href="/projects/roy-ui" className="font-semibold underline">{royui.name}</Link> (zero-config React component library),{" "}
                <Link href="/projects/klinder-oss" className="font-semibold underline">{klinder.name}</Link> (unified analytics + session replay + email SDK),{" "}
                <Link href="/projects/diffcore" className="font-semibold underline">{diffcore.name}</Link> (fast WebAssembly JSON diff: RFC 6902 Patch, React hook, CLI),{" "}
                <Link href="/projects/fresco" className="font-semibold underline">{fresco.name}</Link> (live wallpapers for Linux, a Wallpaper Engine alternative in Rust + GTK4),{" "}
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
            <Reveal>
              <TitledParagraph title="what I do">
                <p>Hi, I&apos;m <Link href={profile.links.linkedin} target="_blank" className="underline font-semibold">{profile.firstName}</Link>! I&apos;m a {profile.title}, currently working at{" "}
                  <span className="font-semibold">{profile.employer.name}</span>.
                  I focus on shipping production-grade SaaS platforms, integrating REST APIs, and building cutting-edge user-facing dashboards in Next.js.
                  Beyond engineering, I have a deep interest in Next.js performance optimization, Core Web Vitals, Rust backend development, and modern design systems.
                </p>
              </TitledParagraph>
            </Reveal>

            <Reveal>
              <TitledParagraph title="experience">
                <div className="flex flex-col gap-4">
                  <p>
                    Since {profile.employer.since} at <span className="font-semibold">{profile.employer.name}</span>, I&apos;ve shipped HR SaaS modules (employee records, leave workflow, and role-based access controls) used across partner organisations.
                    I designed 12+ REST endpoints in Node.js/Express with PostgreSQL, deployed services to Ubuntu VMs on a Proxmox cluster with nginx reverse proxies, Let&apos;s Encrypt TLS, and systemd supervision.
                    I cut page load time by eliminating N+1 queries, adding composite indexes, and splitting Next.js bundle routes.
                  </p>
                  <StatLine
                    value="3.4s → 1.9s"
                    context="page load after the Next.js optimization pass, ~44% faster"
                  />
                </div>
              </TitledParagraph>
            </Reveal>

            <Reveal>
              <TitledParagraph title="projects">
                <div className="flex flex-col gap-6">
                  <div className="flex flex-col gap-3">
                    <p>
                      <Link href="/projects/whatbroke" className="font-semibold underline">{whatbroke.name}</Link>: An open-source (Apache-2.0) zero-config, local-only CLI and read-only MCP server that turns a crash into grounded, secret-free, git-anchored context for an AI coding agent, then verifies the fix. Wrap a dev command (<span className="font-mono text-sm">npx @whatbroke/whatbroke run -- npm test</span>) and on a crash it writes a redacted, git-anchored bundle and ranks the responsible files with no LLM (the green-commit journal intersected with the stack trace). After the agent edits, <span className="font-mono text-sm">verify_fix</span> re-runs the exact captured command and reports fixed, same-failure, or different-failure. Node/TypeScript is first-class, with Python (pytest) and Go (go test) via an adapter layer; delivered over MCP, a prefilled GitHub issue, the terminal, and a CI GitHub Action.
                    </p>
                    <StatLine
                      value="90.3% / 100%"
                      context="top-1 / top-3 suspect-ranking accuracy over 35 real regression scenarios, CI-gated"
                    />
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

                  <div className="flex flex-col gap-3">
                    <p>
                      <Link href={ahtml.primaryUrl} target="_blank" rel="noopener noreferrer" className="font-semibold underline">{ahtml.name}</Link>: A shipped sixteen-package npm scope (<span className="font-mono text-sm">@ahtmljs/*</span>) at v{ahtml.version}, plus the <span className="font-mono text-sm">ahtml</span> Python SDK, for making web content cheaply and safely consumable by AI agents. Framework adapters for Next.js, Astro, SvelteKit, Vite, and Hono emit MCP, OpenAPI, JSON-LD, llms.txt, and the AHTML snapshot with one config line; a client SDK, LangChain loader, and CLI cover the consuming side. 700+ passing tests across the scope and 91%→100% fact-extraction accuracy.
                    </p>
                    <StatLine
                      value="4.5-7.3×"
                      context="fewer tokens than raw HTML for the same page content"
                    />
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

                  <div className="flex flex-col gap-3">
                    <p>
                      <Link href={diffcore.primaryUrl} target="_blank" rel="noopener noreferrer" className="font-semibold underline">{diffcore.name}</Link>: A fast Rust + WebAssembly JSON diff engine on npm. It returns real <span className="font-mono text-sm">JSON Pointer</span> paths and decoded values, emits standard <span className="font-mono text-sm">RFC 6902 JSON Patch</span>, and ships three-way merge, undo/redo, a React hook, and a CLI. Two of the four leaders in the JSON-diff market are effectively stale; Diffcore is the actively-shipped, RFC-6902-compliant alternative.
                    </p>
                    <StatLine
                      value="2.3-3.0×"
                      context="faster than fast-json-patch in head-to-head benchmarks (4-8× vs jsondiffpatch)"
                    />
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

                  <p className="text-sm sm:text-base opacity-80">
                    Also shipped:{" "}
                    <Link href="/projects/klinder-oss" className="font-semibold underline">{klinder.name}</Link> (unified analytics, session replay, and email triggers in one SDK),{" "}
                    <Link href="/projects/roy-ui" className="font-semibold underline">{royui.name}</Link> (zero-config React component library with a batteries-included DataTable),{" "}
                    <Link href="/projects/fresco" className="font-semibold underline">{fresco.name}</Link> (live wallpapers for Linux in Rust + GTK4), and{" "}
                    <Link href={learningCopilot.primaryUrl} target="_blank" rel="noopener noreferrer" className="font-semibold underline">{learningCopilot.name}</Link> (AWS Bedrock learning assistant, top 500 in AI for Bharat).{" "}
                    <Link href="/projects" className="font-semibold underline">all projects →</Link>
                  </p>
                </div>
              </TitledParagraph>
            </Reveal>

            <Reveal>
              <TitledParagraph title="open source">
                <div className="flex flex-col gap-2">
                  <p>
                    I contribute upstream to tools I use: seven merged PRs to the observability and replication layers of <Link href="/open-source" className="font-semibold underline">ReductStore</Link>, a Rust time-series database for robotics and industrial IoT (replication diagnostics, instance-wide usage statistics, per-bucket usage metrics, system-log capture, a unified $system event sink, pipelined replication batch sending, and replication payload compression), plus a false-positive diagnostic fix merged into Meta&apos;s Pyrefly type checker. Reviewed and merged by the maintainers; the first ReductStore PR shipped in v1.20 with a public endorsement.
                  </p>
                  <p className="text-sm flex flex-wrap gap-x-4 gap-y-1">
                    <Link href="/open-source" className="font-semibold underline">Contributions + maintainer endorsement →</Link>
                    <Link href="https://github.com/reductstore/reductstore/pull/1417" target="_blank" rel="noopener noreferrer" className="underline">PR #1417 →</Link>
                  </p>
                </div>
              </TitledParagraph>
            </Reveal>

            <Reveal>
              <TitledParagraph title="npm">
                <p className="text-sm sm:text-base opacity-80">
                  Each product&apos;s live npm download counts are on its own page:{" "}
                  <Link href="/projects/whatbroke" className="underline">whatbroke</Link>,{" "}
                  <Link href="/projects/ahtml" className="underline">AHTML</Link>,{" "}
                  <Link href="/projects/roy-ui" className="underline">Roy UI</Link>,{" "}
                  <Link href="/projects/diffcore" className="underline">Diffcore</Link>.
                </p>
              </TitledParagraph>
            </Reveal>

            <Reveal>
              <TitledParagraph title="older work">
                <p className="text-sm sm:text-base opacity-80">
                  <Link href="https://github.com/DibbayajyotiRoy/BloodLink" target="_blank" rel="noopener noreferrer" className="underline">BloodLink</Link>: blood donor / seeker matching platform with PostgreSQL geolocation, ~100 pilot users (2024).{" "}
                  <Link href="https://github.com/DibbayajyotiRoy/Rust-FullStack-App" target="_blank" rel="noopener noreferrer" className="underline">EMS</Link>: real-time Employee Management System in Rust and React.{" "}
                  <Link href="https://github.com/DibbayajyotiRoy/LunarSite" target="_blank" rel="noopener noreferrer" className="underline">LunarSite</Link>: ML pipeline for lunar mineral prediction (NITA-ISRO 2024).{" "}
                  <Link href="https://github.com/DibbayajyotiRoy/Carbon-Tracker" target="_blank" rel="noopener noreferrer" className="underline">CarbonFootprintTracker</Link>: sustainability calculator with smart recommendations.
                </p>
              </TitledParagraph>
            </Reveal>

            <Reveal>
              <TitledParagraph title="skills">
                <p>
                  TypeScript, JavaScript, Rust, and Python. Frontend: React, Next.js, Tailwind CSS, TanStack Query.
                  Backend: Node.js, Hono, Express, REST APIs, Server-Sent Events, Zod, OAuth, JWT.
                  Infrastructure: Linux, Proxmox VE, nginx, systemd, Docker, Cloudflare Workers, AWS (Bedrock, DynamoDB, CloudWatch).
                  Databases: PostgreSQL (Neon, RLS, partitioning), DynamoDB, MongoDB, Redis.
                  AI/ML: AWS Bedrock, multi-model orchestration with fallback, streaming inference, prompt engineering, agent design.
                </p>
              </TitledParagraph>
            </Reveal>

            <Reveal>
              <TitledParagraph title="honors">
                <p>
                  Hackathon wins including the {profile.honors[0].name} ({profile.honors[0].year}) and the {profile.honors[1].name}. The full list of awards and recognition is on{" "}
                  <Link href="/about" className="font-semibold underline">/about</Link>.
                </p>
              </TitledParagraph>
            </Reveal>

            <Reveal>
              <TitledParagraph title="writing">
                <p>
                  Long-form engineering notes on production incidents, AI engineering with AWS Bedrock, Next.js SEO, and Rust + WebAssembly performance. Read at{" "}
                  <Link href="/writing" className="font-semibold underline">/writing</Link>.
                </p>
              </TitledParagraph>
            </Reveal>

            <Reveal>
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
            </Reveal>

            <Reveal>
              <TitledParagraph title="My Focus">
                <p>
                  My goal is to build software that is both robust and efficient. Rust has completely transformed my approach to engineering, moving me from just building &quot;web apps&quot; to designing reliable systems.
                  I&apos;d love to contribute to core infrastructure projects, high-performance engines, or any challenge that requires deep technical precision.
                </p>
              </TitledParagraph>
            </Reveal>

            <hr className="border-blackout dark:border-whiteout opacity-25" />

            <Reveal>
              <TitledParagraph title="About Me">
                <p>
                  I started my journey with a curiosity for how things are built, which led me to a {profile.education.degree} at {profile.education.institution}.
                  Web development allows me to design things and share them with anyone, anywhere, instantly. Web always wins.
                </p>
              </TitledParagraph>
            </Reveal>

            <hr className="border-blackout dark:border-whiteout opacity-25" />

            <Reveal>
              <TitledParagraph title="Why Rust?">
                <p>
                  I have a deep appreciation for <span className="font-semibold">Rust</span> as a systems programming language.
                  It&apos;s truly a Swiss Army knife, whether it&apos;s low-level hardware control, building high-performance 3D game engines, or developing blazingly fast async backend services and microservices, Rust delivers both safety and speed without compromise.
                </p>
                <p className="mt-4">
                  The strict compiler, the ownership model, and the zero-cost abstractions make it a joy to work with once you master it.
                  I believe Rust is the future of infrastructure, and I&apos;m constantly exploring its potential in WebAssembly, edge computing on Cloudflare Workers (workers-rs), and real-time systems.
                </p>
              </TitledParagraph>
            </Reveal>
          </>
        )}
        <ChapterClose line="That's the work. If any of it maps to what you need, let's talk." />
      </div>
    </>
  );
};

export default WorkContent;
