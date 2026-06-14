import { type ReactNode } from "react";
import Link from "next/link";
import { FrescoInstall } from "@/components/fresco-install";

/**
 * Per-product hub content for /projects/<slug>.
 *
 * projects.ts owns the *facts* (name, links, version, keywords, SEO
 * description). This module owns the *prose* of each canonical product hub —
 * the inverted-pyramid answer, how-it-works, a comparison table, and FAQ
 * rendered as visible prose (NOT FAQPage schema, which Google retired
 * 2026-05-07). Keyed by Project.id.
 */

export interface HubSection {
  title: string;
  body: ReactNode;
}

export interface HubContent {
  metaTitle: string;
  metaDescription: string;
  /** Mono kicker above the H1, e.g. "open-source product · MCP + CLI". */
  kicker: string;
  /** Dimmed H1 subtitle. */
  subtitle: string;
  jsonLdType: "SoftwareApplication" | "SoftwareSourceCode";
  /** schema.org applicationCategory when jsonLdType is SoftwareApplication. */
  applicationCategory?: string;
  programmingLanguage?: string[];
  operatingSystem?: string;
  sections: HubSection[];
}

const codeBlock = (code: string) => (
  <pre className="text-sm bg-blackout/5 dark:bg-whiteout/5 rounded-md p-3 font-mono leading-relaxed whitespace-pre-wrap break-all">
    {code}
  </pre>
);

const CheckIcon = () => (
  <svg
    viewBox="0 0 24 24"
    width="16"
    height="16"
    fill="none"
    stroke="currentColor"
    strokeWidth="3"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="inline-block shrink-0 text-emerald-500"
    role="img"
    aria-label="yes"
  >
    <path d="M5 13l4 4L19 7" />
  </svg>
);

const CrossIcon = () => (
  <svg
    viewBox="0 0 24 24"
    width="16"
    height="16"
    fill="none"
    stroke="currentColor"
    strokeWidth="3"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="inline-block shrink-0 text-rose-500"
    role="img"
    aria-label="no"
  >
    <path d="M6 6l12 12M18 6L6 18" />
  </svg>
);

/** Cells may be a bare "✅"/"❌" or an icon followed by a qualifier
 *  ("❌ Wayland-only"). Render the leading mark as an SVG icon. */
const renderCell = (cell: string): ReactNode => {
  const yes = cell.replace(/^✅\s*/, "");
  if (yes !== cell)
    return yes ? (
      <span className="inline-flex items-center gap-1.5">
        <CheckIcon />
        {yes}
      </span>
    ) : (
      <CheckIcon />
    );
  const no = cell.replace(/^❌\s*/, "");
  if (no !== cell)
    return no ? (
      <span className="inline-flex items-center gap-1.5">
        <CrossIcon />
        <span className="opacity-70">{no}</span>
      </span>
    ) : (
      <CrossIcon />
    );
  return cell;
};

const Table = ({
  headers,
  rows,
}: {
  headers: string[];
  rows: string[][];
}) => (
  <div className="overflow-x-auto -mx-2 px-2">
    <table className="w-full text-sm border-collapse">
      <thead>
        <tr className="border-b border-blackout/30 dark:border-whiteout/30">
          {headers.map((h, i) => (
            <th
              key={h}
              className={`text-left py-2 font-semibold ${i < headers.length - 1 ? "pr-3" : ""}`}
            >
              {h}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows.map((r) => (
          <tr
            key={r[0]}
            className="border-b border-blackout/10 dark:border-whiteout/10 align-top"
          >
            {r.map((cell, i) => (
              <td
                key={i}
                className={`py-2 ${i < r.length - 1 ? "pr-3" : ""} ${i === 0 ? "font-medium" : ""}`}
              >
                {renderCell(cell)}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

const Faq = ({ items }: { items: { q: string; a: string }[] }) => (
  <ul className="flex flex-col gap-4">
    {items.map((item) => (
      <li key={item.q} className="flex flex-col gap-1">
        <h3 className="font-semibold">{item.q}</h3>
        <p>{item.a}</p>
      </li>
    ))}
  </ul>
);

export const hubs: Record<string, HubContent> = {
  fresco: {
    metaTitle:
      "Fresco — live wallpapers for Linux (a Wallpaper Engine alternative)",
    metaDescription:
      "Fresco is a free, open-source GTK4 app that sets videos, GIFs, images, slideshows, and playlists as hardware-accelerated live wallpapers on Pop!_OS, Ubuntu, Mint, and Debian (X11). A simple GUI alternative to Wallpaper Engine and Lively for Linux.",
    kicker: "open-source product · Rust + GTK4 · GPL-3.0",
    subtitle: "live wallpapers for Linux, made easy",
    jsonLdType: "SoftwareApplication",
    applicationCategory: "DesktopEnhancementApplication",
    operatingSystem: "Linux (X11)",
    programmingLanguage: ["Rust"],
    sections: [
      {
        title: "tldr",
        body: (
          <p>
            <strong>Fresco</strong> is a live-wallpaper app for Linux. Pick any
            looping video (mp4/webm/mkv), animated GIF, image, image{" "}
            <em>slideshow</em>, or multi-video <em>playlist</em>, click{" "}
            <span className="font-mono text-sm">Set</span>, and close the app —
            your wallpaper keeps playing and comes back on login. It runs as a
            proper GTK4/libadwaita desktop app you install from a{" "}
            <span className="font-mono text-sm">.deb</span>, with GPU
            hardware-accelerated playback so CPU stays near zero. Windows has
            Wallpaper Engine and macOS has Lively; Fresco is the simple,
            open-source equivalent for Linux.
          </p>
        ),
      },
      {
        title: "what it does",
        body: (
          <ul className="list-disc pl-5 flex flex-col gap-1">
            <li><strong>Any media</strong> — looping video, animated GIF, static image, image slideshow, or a multi-video playlist.</li>
            <li><strong>Hardware-accelerated</strong> — GPU video decode (VA-API / NVDEC) keeps CPU near zero without degrading quality.</li>
            <li><strong>Drag-to-crop editor</strong> — frame exactly the region you want.</li>
            <li><strong>Wallpaper library</strong> — saved thumbnails, recently-used, and search.</li>
            <li><strong>Set &amp; forget</strong> — close the app and the wallpaper keeps playing; it&apos;s restored automatically on login.</li>
            <li><strong>Battery-aware</strong> — pause on battery, or pause and resume any time.</li>
            <li><strong>Multi-monitor</strong> — a different wallpaper per display.</li>
          </ul>
        ),
      },
      {
        title: "how it works",
        body: (
          <p>
            Fresco ships two binaries:{" "}
            <span className="font-mono text-sm">fresco</span>, the GTK4/libadwaita
            GUI you can close, and{" "}
            <span className="font-mono text-sm">frescod</span>, a lightweight
            daemon that paints a desktop-level X11 window with an embedded{" "}
            <Link
              href="https://mpv.io"
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
            >
              mpv
            </Link>{" "}
            instance per monitor. Because the heavy lifting is mpv with hardware
            decode, even a 4K video wallpaper costs almost no CPU. Run{" "}
            <span className="font-mono text-sm">frescod --check</span> any time for
            hardware-decode diagnostics.
          </p>
        ),
      },
      {
        title: "fresco vs other linux options",
        body: (
          <Table
            headers={["", "Fresco", "Hidamari", "mpvpaper", "Wallpaper Engine"]}
            rows={[
              ["GUI app (no terminal)", "✅", "✅", "❌", "✅"],
              ["Works on GNOME / X11", "✅", "✅", "❌ Wayland-only", "❌"],
              ["Drag-to-crop", "✅", "❌", "❌", "✅"],
              ["Playlists", "✅", "❌", "manual", "✅"],
              ["Wallpaper library", "✅", "❌", "❌", "✅"],
              ["Free & open source", "✅", "✅", "✅", "❌ paid, Windows"],
            ]}
          />
        ),
      },
      {
        title: "supported distributions",
        body: (
          <>
            <Table
              headers={["Distro", "Versions"]}
              rows={[
                ["Pop!_OS", "22.04 (primary target)"],
                ["Ubuntu", "22.04, 24.04"],
                ["Linux Mint", "21, 22"],
                ["Debian", "12 (Bookworm)"],
                ["elementary OS", "7"],
              ]}
            />
            <p className="text-sm opacity-70 mt-2">
              An X11 session is required today. Wayland support is on the roadmap.
            </p>
          </>
        ),
      },
      {
        title: "install",
        body: <FrescoInstall />,
      },
      {
        title: "faq",
        body: (
          <Faq
            items={[
              {
                q: "Is there a Wallpaper Engine for Linux?",
                a: "Yes — Fresco is a free, open-source live-wallpaper app for Linux that works like Wallpaper Engine: pick a video and set it as your animated desktop background.",
              },
              {
                q: "How do I set a video as my wallpaper on Ubuntu, Pop!_OS, or Debian?",
                a: "Install the Fresco .deb, open it, click + Add, choose your video, and click Set as Wallpaper.",
              },
              {
                q: "Does it work on Wayland or GNOME?",
                a: "It runs on GNOME and any X11 session today (Pop!_OS, Ubuntu, Mint, Debian). Wayland support is on the roadmap.",
              },
              {
                q: "Will a video wallpaper drain my battery or CPU?",
                a: "Fresco uses GPU hardware decoding so CPU stays near zero, and it can automatically pause on battery.",
              },
              {
                q: "What media formats are supported?",
                a: "mp4, webm, mkv, avi, and mov video, plus animated GIFs, static images (jpg/png/webp), folders as slideshows, and multi-video playlists.",
              },
            ]}
          />
        ),
      },
    ],
  },
  whatbroke: {
    metaTitle:
      "whatbroke — git-anchored crash capture for AI coding agents (CLI + MCP)",
    metaDescription:
      "whatbroke wraps your dev command, captures local Node/TypeScript crashes as a redacted, git-anchored bug bundle with deterministic file ranking, and serves it to Claude Code or Cursor over MCP. Open source, Apache-2.0, no LLM in the ranking.",
    kicker: "open-source product · CLI + MCP · Apache-2.0",
    subtitle: "git-anchored crash capture for AI coding agents",
    jsonLdType: "SoftwareApplication",
    applicationCategory: "DeveloperApplication",
    operatingSystem: "Linux, macOS, Windows (Node.js 18+)",
    programmingLanguage: ["TypeScript"],
    sections: [
      {
        title: "tldr",
        body: (
          <p>
            <strong>whatbroke</strong> is a terminal-side capture layer for local
            Node and TypeScript crashes. You wrap a command you already run —{" "}
            <span className="font-mono text-sm">whatbroke run npm test</span> —
            and when it dies, whatbroke packages the error, the diff since the
            code last worked, and a deterministically-ranked guess at the
            responsible file, with secrets scrubbed, then serves it to your
            coding agent over a read-only MCP server. It diagnoses; it does not
            fix. The ranking uses no LLM and makes no network call.
          </p>
        ),
      },
      {
        title: "install",
        body: codeBlock(
          `npm install -g @whatbroke/whatbroke

whatbroke run npm test     # wrap any dev command
whatbroke mcp              # start the read-only MCP server for your agent
whatbroke show             # print the latest redacted bundle
whatbroke doctor           # check your setup`
        ),
      },
      {
        title: "how it works",
        body: (
          <div className="flex flex-col gap-3">
            <p>
              The pipeline is{" "}
              <span className="font-mono text-sm">
                crash → capture → git-anchored context → deterministic suspect
                ranking → redaction gate → MCP
              </span>
              .
            </p>
            <p>
              Every time the wrapped command <em>passes</em>, whatbroke records
              the current commit as &ldquo;green&rdquo; in a local journal,
              keyed by the normalized command and branch. When the command{" "}
              <em>fails</em>, it intersects the files on the crash stack trace
              with the files changed since that last green commit and scores
              them with fixed integer weights — a file both on the stack and
              changed since green ranks highest. That is the moat: accumulated
              local ground truth a SaaS monitor cannot see and an LLM cannot
              reproduce from a prompt.
            </p>
            <p>
              Before anything leaves the process, a mandatory redaction gate
              scrubs secrets — the bundle type is branded so it is a
              compile-time error to route an unredacted bundle to any output.
              The MCP server is read-only and stdio-only, exposing tools like{" "}
              <span className="font-mono text-sm">get_suspects</span>,{" "}
              <span className="font-mono text-sm">get_diff_vs_green</span>, and{" "}
              <span className="font-mono text-sm">get_logs</span> to your agent.
            </p>
          </div>
        ),
      },
      {
        title: "vs the alternatives",
        body: (
          <Table
            headers={["", "whatbroke", "raw stack trace", "Sentry", "git bisect"]}
            rows={[
              ["Where it runs", "Local terminal", "Local terminal", "Production", "Local terminal"],
              ["Names the file", "Yes, ranked", "Sometimes", "Yes (prod errors)", "Finds commit, not file"],
              ["Uses git history", "Diff since last green", "No", "Release tags", "Bisects commits"],
              ["Agent-ready (MCP)", "Yes", "No", "No", "No"],
              ["Secrets scrubbed", "Mandatory gate", "No", "Configurable", "n/a"],
              ["Deterministic", "Yes, no LLM", "n/a", "n/a", "Yes"],
            ]}
          />
        ),
      },
      {
        title: "faq",
        body: (
          <Faq
            items={[
              {
                q: "How does deterministic bug ranking work without an LLM?",
                a: "whatbroke intersects the files on the crash stack trace with the files changed since the last passing run of the same command, then scores them with fixed integer weights. There is no model call and no randomness — the same crash produces byte-identical output, which a test in the repo asserts.",
              },
              {
                q: "Does it work with Claude Code and Cursor?",
                a: "Yes. whatbroke runs a local read-only MCP server, so any MCP-aware coding agent — Claude Code, Cursor, and others — can pull the ranked suspects, the diff since the last green commit, and the redacted logs directly into context.",
              },
              {
                q: "Is whatbroke a replacement for Sentry?",
                a: "No. Sentry monitors production; whatbroke captures the local terminal crash — the test or server that died in your shell before anything shipped. They are complementary and fill different gaps.",
              },
              {
                q: "What languages does it support?",
                a: "Node and TypeScript projects in v1, with parsers for the major test runners. Source-map resolution and non-Node languages are on the roadmap.",
              },
            ]}
          />
        ),
      },
    ],
  },

  "roy-ui": {
    metaTitle:
      "Roy UI — React component library (data table, time picker, shadcn alternative)",
    metaDescription:
      "Roy UI is a zero-config React + Next.js 15 component library: a batteries-included DataTable, a no-dependency date range picker, and an analog/digital time picker. TypeScript-first, RSC-safe, tree-shakable ESM, sub-12 KB. A styled shadcn/ui and TanStack Table alternative.",
    kicker: "open-source product · React library · MIT",
    subtitle: "zero-config React components for data-heavy UIs",
    jsonLdType: "SoftwareApplication",
    applicationCategory: "DeveloperApplication",
    operatingSystem: "Web (React 18+, Next.js 13–15, Vite, Remix, Astro)",
    programmingLanguage: ["TypeScript", "React"],
    sections: [
      {
        title: "tldr",
        body: (
          <p>
            <strong>Roy UI</strong> (
            <span className="font-mono text-sm">@roy-ui/ui</span>) is a React
            component library for dashboards, admin panels, and internal tools.
            It ships a fully-featured DataTable — search, date-range and time
            filters, sort, pagination, drag-to-reorder and edge-drag-resize
            columns, hide/restore, CSV/JSON import-export — plus a custom date
            range picker with no <span className="font-mono text-sm">date-fns</span>{" "}
            dependency and an analog/digital time picker. You{" "}
            <span className="italic">install</span> it; you don&rsquo;t copy-paste
            it. Zero config, no Tailwind required, RSC-safe, tree-shakable ESM,
            sub-12&nbsp;KB.
          </p>
        ),
      },
      {
        title: "install",
        body: codeBlock(
          `npm install @roy-ui/ui

import { DataTable, DateRangePicker, TimePicker } from "@roy-ui/ui";

// no Tailwind plugin, no theme provider, no design-token boilerplate —
// each component imports its own scoped CSS as a side effect.`
        ),
      },
      {
        title: "why it exists",
        body: (
          <div className="flex flex-col gap-3">
            <p>
              Most React data UIs start the same way: pull in TanStack Table for
              the headless engine, then hand-build the styling, the date filter,
              the column menu, and the CSV export — or copy-paste a shadcn table
              and maintain it forever. Roy UI ships that whole surface as one
              styled, typed component.
            </p>
            <p>
              It is React Server Components-safe out of the box — each
              interactive component carries its own{" "}
              <span className="font-mono text-sm">&quot;use client&quot;</span>{" "}
              boundary in the published bundle, so it drops into a Next.js 15 App
              Router project without you wiring boundaries by hand. Theming is
              CSS custom properties (<span className="font-mono text-sm">--royui-*</span>),
              not a runtime theme object.
            </p>
          </div>
        ),
      },
      {
        title: "vs the alternatives",
        body: (
          <Table
            headers={["", "Roy UI", "shadcn/ui", "TanStack Table", "MUI"]}
            rows={[
              ["Install", "npm install", "copy-paste CLI", "npm install", "npm install"],
              ["Ships styles", "Yes", "Yes (Tailwind)", "No (headless)", "Yes"],
              ["Tailwind required", "No", "Yes", "No", "No"],
              ["Full DataTable", "Yes", "No", "Engine only", "DataGrid (paid tiers)"],
              ["Time picker", "Analog + digital", "No", "No", "Basic"],
              ["RSC-safe", "Yes, built in", "Manual", "Manual", "Provider needed"],
              ["Bundle", "sub-12 KB", "varies", "small", "large"],
            ]}
          />
        ),
      },
      {
        title: "faq",
        body: (
          <Faq
            items={[
              {
                q: "Is Roy UI a shadcn/ui alternative?",
                a: "Yes, for data-heavy UIs. Where shadcn gives you copy-paste Tailwind components you own and maintain, Roy UI is a single npm install that ships a full DataTable, date range picker, and time picker with their styles included — no Tailwind, no per-component copy-paste.",
              },
              {
                q: "Does it have a React data table with filters and export?",
                a: "Yes. The DataTable includes search, date-range and time filtering, sort, pagination, drag-to-reorder and resize columns, hide/restore via a column menu, and CSV/JSON import-export — all in one component.",
              },
              {
                q: "Does it work with Next.js 15 and the App Router?",
                a: "Yes. Components are RSC-safe with their own client boundaries baked into the published bundle, and the library is ESM, tree-shakable, and works with Next.js 13–15, Vite, Remix, Astro, and TanStack Start.",
              },
              {
                q: "Do I need Tailwind or a theme provider?",
                a: "No. There is no Tailwind plugin, no PostCSS step, and no theme provider. Each component imports its own scoped CSS, and you theme via --royui-* CSS variables.",
              },
            ]}
          />
        ),
      },
    ],
  },

  ahtml: {
    metaTitle:
      "AHTML — make your site readable by AI agents (MCP, OpenAPI, llms.txt from one config)",
    metaDescription:
      "AHTML is the contract layer of the agent web — a seven-package @ahtmljs scope (Next.js, Vite, Hono adapters + agent SDK, LangChain loader, CLI) that emits MCP, OpenAPI 3.1, JSON-LD, llms.txt, and a token-optimal signed snapshot from one config line. MIT.",
    kicker: "open-source product · 7 npm packages · MIT",
    subtitle: "the contract layer of the agent web",
    jsonLdType: "SoftwareSourceCode",
    programmingLanguage: ["TypeScript"],
    sections: [
      {
        title: "tldr",
        body: (
          <p>
            <strong>AHTML</strong> (Agentic HTML) lets a website declare a single
            semantic snapshot of a page and emit, from that one source, every
            protocol an AI agent might want: an MCP tool manifest, an OpenAPI 3.1
            document, JSON-LD, an llms.txt shim, and a token-optimal, optionally
            signed snapshot. One config in, every agent-readable protocol out —
            RSS, but for AI agents. It is a seven-package npm scope (
            <span className="font-mono text-sm">@ahtmljs/*</span>) at v0.9.0.
          </p>
        ),
      },
      {
        title: "install",
        body: codeBlock(
          `npm install @ahtmljs/next       # Next.js plugin
npm install @ahtmljs/vite       # Vite / SvelteKit / SolidStart / Astro
npm install @ahtmljs/hono       # Hono · Node · Bun · Deno · Workers · Lambda
npm install @ahtmljs/agent      # typed client SDK for agents
npm install @ahtmljs/langchain  # RAG document loader
npm install @ahtmljs/schema     # types + JSON Schema + validator
npm install -g @ahtmljs/cli     # ahtml doctor — validate the discovery chain`
        ),
      },
      {
        title: "the seven packages",
        body: (
          <Table
            headers={["Package", "What it does"]}
            rows={[
              ["@ahtmljs/schema", "Canonical snapshot types, validator, dual serializers, emitters. Edge-safe."],
              ["@ahtmljs/next", "Next.js plugin — one route emits MCP, OpenAPI, JSON-LD, llms.txt, snapshot."],
              ["@ahtmljs/vite", "Vite plugin — byte-identical output for SvelteKit, SolidStart, Astro."],
              ["@ahtmljs/hono", "Hono adapter — same handler on Node, Bun, Deno, Workers, Lambda."],
              ["@ahtmljs/agent", "Typed client SDK — ETag caching, retries, dry-run gates, tokenizer cost."],
              ["@ahtmljs/langchain", "LangChain.js loader — chunks with citation anchors preserved."],
              ["@ahtmljs/cli", "ahtml doctor — walks the discovery chain end to end; CI-wirable."],
            ]}
          />
        ),
      },
      {
        title: "why it wins",
        body: (
          <div className="flex flex-col gap-3">
            <p>
              The moat is not being best at any one protocol — it is being the
              only thing that emits all of them from one source of truth. And it
              is measured: on a fact-extraction benchmark with real tokenizers
              and real model calls, the AHTML compact snapshot hits 95% accuracy
              at roughly half the tokens of raw HTML, and the canonical JSON form
              hits 100% — versus 91% for plain HTML and 89% for llms.txt.
            </p>
            <p>
              It is framework-native and additive: your existing Next.js, Vite,
              or Hono app becomes an MCP server at{" "}
              <span className="font-mono text-sm">/ahtml/mcp.json</span> — same
              database, same auth, one deploy — instead of you standing up a
              separate server.
            </p>
          </div>
        ),
      },
      {
        title: "faq",
        body: (
          <Faq
            items={[
              {
                q: "How do I add MCP to a Next.js app?",
                a: "Install @ahtmljs/next and wrap your config. The plugin auto-discovers routes and emits an MCP tool manifest at /ahtml/mcp.json from the same snapshot it uses for OpenAPI, JSON-LD, and llms.txt — no separate MCP server to write or deploy.",
              },
              {
                q: "Is AHTML a replacement for llms.txt or JSON-LD?",
                a: "No — it emits both, plus MCP and OpenAPI, from one config. llms.txt is a human-readable index and JSON-LD targets search engines; AHTML adds typed actions, cost and reversibility metadata, freshness, and a signed snapshot on top, and generates the others for you.",
              },
              {
                q: "Does it work outside Next.js?",
                a: "Yes. @ahtmljs/vite covers SvelteKit, SolidStart, Astro, and vanilla Vite, and @ahtmljs/hono covers Node, Bun, Deno, Cloudflare Workers, and AWS Lambda — all with byte-identical output.",
              },
            ]}
          />
        ),
      },
    ],
  },

  "klinder-oss": {
    metaTitle:
      "Klinder-OSS — open-source analytics + session replay + email SDK in one install",
    metaDescription:
      "Klinder-OSS unifies event tracking, error-based session replay, and email trigger workflows in a single SDK. Edge ingestion on Cloudflare Workers + Queues, Neon Postgres with RLS, Hono API, with a Rust workers-rs port in progress. An open-source PostHog + LogRocket alternative.",
    kicker: "open-source product · unified SDK",
    subtitle: "analytics + session replay + email, one install",
    jsonLdType: "SoftwareApplication",
    applicationCategory: "DeveloperApplication",
    operatingSystem: "Web (Cloudflare Workers, Neon Postgres)",
    programmingLanguage: ["TypeScript", "Rust"],
    sections: [
      {
        title: "tldr",
        body: (
          <p>
            <strong>Klinder-OSS</strong> is one SDK that unifies event tracking,
            error-based session recording, and email trigger workflows — the
            three things teams usually stitch together from PostHog, LogRocket,
            and Customer.io. Edge ingestion runs on Cloudflare Workers and Queues
            with Neon Postgres (row-level security for multi-tenant isolation)
            behind a Hono API; a Rust port on workers-rs is in progress targeting
            sub-10ms p95 at the edge.
          </p>
        ),
      },
      {
        title: "why it exists",
        body: (
          <p>
            Every project ended up wiring an analytics SDK, a session-replay SDK,
            and an email-automation tool together by hand. Klinder-OSS collapses
            those into one install so an error can trigger a recording and an
            email workflow without three vendors and three integrations.
          </p>
        ),
      },
    ],
  },

  diffcore: {
    metaTitle:
      "Diffcore — fast Rust/WASM JSON diff engine for JavaScript (RFC 6902 JSON Patch)",
    metaDescription:
      "Diffcore is a WebAssembly JSON diff engine for JS/TS: real JSON Pointer paths (RFC 6901), standard RFC 6902 JSON Patch output, applyPatch/revertPatch, a React useDiff hook, a CLI, and a streaming engine for multi-GB files. 2.3–3.0× faster than fast-json-patch.",
    kicker: "open-source product · Rust + WASM on npm",
    subtitle: "fast Rust/WASM JSON diff engine",
    jsonLdType: "SoftwareSourceCode",
    programmingLanguage: ["Rust", "WebAssembly", "TypeScript"],
    sections: [
      {
        title: "tldr",
        body: (
          <p>
            <strong>Diffcore</strong> is a JSON diff engine written in Rust and
            compiled to WebAssembly, shipped to npm so JavaScript and TypeScript
            projects get native-speed diffing with no native addon. It returns
            real JSON Pointer paths (RFC 6901) and decoded values, emits standard
            RFC 6902 JSON Patch, and ships{" "}
            <span className="font-mono text-sm">applyPatch</span> /{" "}
            <span className="font-mono text-sm">revertPatch</span> for state
            sync, undo/redo, and optimistic UI — plus a React{" "}
            <span className="font-mono text-sm">useDiff</span> hook, a CLI, and a
            streaming engine for multi-GB files.
          </p>
        ),
      },
      {
        title: "install",
        body: codeBlock(
          `npm install diffcore

import { diff, applyPatch } from "diffcore";
const patch = diff(a, b);   // RFC 6902 JSON Patch
const next = applyPatch(a, patch);`
        ),
      },
      {
        title: "why it's fast",
        body: (
          <p>
            The engine is Rust compiled with wasm-bindgen, so there is no native
            addon to build and no separate <span className="font-mono text-sm">.wasm</span>{" "}
            file to host. In head-to-head benchmarks it runs 2.3–3.0× faster than
            fast-json-patch and 4–8× faster than jsondiffpatch, sustaining
            390–650&nbsp;MB/s.
          </p>
        ),
      },
    ],
  },
};
