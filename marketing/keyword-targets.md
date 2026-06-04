# Keyword targets — low competition, high intent

The wedge: don't fight for "json diff" (giant SERP). Fight for the
specific, intent-loaded queries where buyers / users with a real problem
are searching.

Format: keyword · monthly volume estimate · competition · intent · which page wins.

Volume estimates assume DataForSEO / Ahrefs ranges; ground-truth via
Search Console once you have impressions data.

---

## Diffcore — Tier 1 (write briefs first)

| Keyword | Vol | Comp | Intent | Page |
| --- | --- | --- | --- | --- |
| RFC 6902 typescript | 50–100 | low | implementer | `/diffcore-vs-jsondiffpatch` + new article |
| json patch react hook | 30–80 | low | code | new article: "Building optimistic UIs with RFC 6902 Patch in React" |
| jsondiffpatch alternative | 100–300 | medium | comparison | `/diffcore-vs-jsondiffpatch` |
| fast-json-patch alternative | 50–150 | low | comparison | new comparison page `/diffcore-vs-fast-json-patch` |
| streaming json diff | 30–100 | low | engineer | new article on the streaming engine + benchmarks |
| wasm json diff | 50–150 | low | engineer | `/diffcore-vs-jsondiffpatch` |
| json diff cli | 100–250 | medium | tooling | new article + repo README hits |
| undo redo react | 800–1500 | high | implementer | new article: "applyPatch / revertPatch as the cleanest undo/redo primitive" |

## Diffcore — Tier 2

- diffcore npm
- rust wasm json diff
- json pointer typescript
- compare json objects deeply
- json patch test runner

---

## Klinder-OSS — Tier 1

| Keyword | Vol | Comp | Intent | Page |
| --- | --- | --- | --- | --- |
| open source posthog alternative | 500–1200 | medium | comparison | `/klinder-vs-posthog` |
| open source logrocket alternative | 200–500 | medium | comparison | new `/klinder-vs-logrocket` |
| customer.io alternative open source | 100–300 | low | comparison | new `/klinder-vs-customerio` |
| self-hosted session replay | 300–700 | medium | implementer | new article |
| cloudflare workers analytics | 300–600 | medium | implementer | new article: "Building product analytics on Cloudflare Workers + Neon" |
| neon postgres rls multi-tenant | 100–300 | low | architect | new article — broad audience beyond Klinder |
| posthog vs amplitude | 1000+ | high | comparison | new article (top of funnel for Klinder) |

## Klinder-OSS — Tier 2

- klinder oss
- email automation event-based open source
- error-based session recording
- single sdk product analytics email

---

## AHTML — Tier 1 (own the category)

| Keyword | Vol | Comp | Intent | Page |
| --- | --- | --- | --- | --- |
| agentic html | 50–150 (new) | very low | category | `/ahtml-vs-llms-txt` + new "What is AHTML" article |
| ahtml npm | <50 (new) | none | navigational | `/work` + dedicated `/ahtml` hub |
| llms.txt vs ahtml | <50 (new) | none | comparison | `/ahtml-vs-llms-txt` |
| stable rag chunk ids | 50–100 | low | implementer | new article |
| mcp server next.js | 200–500 | low | implementer | new article: "Emit MCP + AHTML + llms.txt from one Next.js plugin" |
| .well-known/ahtml.json | <50 (new) | none | navigational | live endpoint + spec page |
| langchain document loader website | 300–700 | medium | implementer | new article featuring `@ahtmljs/langchain` |
| typed ai agent sdk | 100–300 | low | implementer | new article featuring `@ahtmljs/agent` |

## AHTML — Tier 2

- @ahtmljs/schema
- @ahtmljs/next
- @ahtmljs/agent
- agentic web spec
- ai-friendly html

---

## whatbroke — Tier 1 (own the category)

| Keyword | Vol | Comp | Intent | Page |
| --- | --- | --- | --- | --- |
| local dev crash | 200–500 | low | implementer | `/projects/whatbroke` + new "Capturing local crashes deterministically" article |
| git-anchored debugging | <50 (new) | very low | category | `/projects/whatbroke` + new "What is git-anchored debugging" article |
| deterministic bug ranking | <50 (new) | very low | category | `/projects/whatbroke` |
| which file broke my test | 50–150 | low | implementer | new article: "Intersecting your crash stack with files changed since green" |
| mcp debugging | 100–300 | low | implementer | new comparison page `/whatbroke-vs-sentry` |
| mcp claude code | 300–700 | medium | implementer | new article: "A read-only MCP crash server for Claude Code" |
| node crash capture | 100–250 | low | tooling | `/projects/whatbroke` + repo README |
| git bisect alternative | 100–300 | low | comparison | new article: "Stop bisecting — anchor to the last green commit" |

## whatbroke — Tier 2

- @whatbroke/whatbroke
- mcp crash server
- read-only mcp server
- last green commit debugging
- secret redaction crash report

---

## Roy UI — Tier 1 (intercept shadcn intent)

| Keyword | Vol | Comp | Intent | Page |
| --- | --- | --- | --- | --- |
| react data table | 2000–5000 | high | implementer | `/projects/roy-ui` + new "Batteries-included React DataTable" article |
| react datatable nextjs 15 | 200–500 | low | implementer | new article: "Drop-in DataTable for Next.js 15 (RSC-safe)" |
| shadcn alternative | 1000–3000 | high | comparison | new comparison page `/roy-ui-vs-shadcn` |
| shadcn data table | 500–1200 | medium | comparison | `/roy-ui-vs-shadcn` |
| tanstack table alternative | 200–500 | medium | comparison | new comparison page `/roy-ui-vs-tanstack-table` |
| react date range picker | 1500–3000 | high | implementer | new article: "A date range picker with zero date-fns dependency" |
| react time picker | 500–1200 | medium | implementer | new article featuring the analog/digital time picker |
| analog time picker react | 50–150 | low | implementer | `/projects/roy-ui` + demo |
| next.js 15 components | 300–700 | medium | implementer | `/projects/roy-ui` |

## Roy UI — Tier 2

- @roy-ui/ui
- zero-config react component library
- rsc-safe component library
- tree-shakable react components
- csv export react table

---

## Competitor-gap pull

Run this once a quarter:

1. List your three biggest competitors per product.
2. Pull their top 50 organic ranking keywords (Ahrefs / SEMrush / DataForSEO).
3. Subtract any keyword you already rank top-30 for.
4. From what's left, take any with volume > 50 and difficulty < 30.
5. That's your next 10 article topics.

Specific competitors to mine:

- Diffcore → jsondiffpatch.com, fast-json-patch GitHub README, microdiff README, npmtrends comparison pages.
- Klinder → posthog.com/blog, plausible.io/blog (positioning mining, not keyword steal), logrocket.com/blog.
- AHTML → llmstxt.org, modelcontextprotocol.io, Anthropic engineering blog, LangChain JS docs.
- whatbroke → sentry.io/blog, jam.dev, replay.io, modelcontextprotocol.io, git-bisect tutorials.
- Roy UI → ui.shadcn.com, tanstack.com/table, mui.com/x/react-data-grid, ag-grid.com, react-day-picker docs.

---

## Brief structure

Every article brief follows the same skeleton (this is the seo-content-brief skill output):

- **Title** — primary keyword in first 60 chars.
- **Slug** — kebab-case, primary keyword.
- **Meta description** — 150–160 chars, primary keyword + benefit.
- **H1** — same as title or close.
- **Outline** — 4–7 H2s covering: problem framing → existing solutions → why they fall short → your approach → code example → tradeoffs → CTA.
- **Internal links** — at least one to relevant product hub, one to a comparison page, one to /work.
- **Word count target** — 1500–2200 (long enough to be cited, short enough that you actually finish it).
- **CTA** — install command + link to demo or repo.
- **Schema** — TechArticle JSON-LD.
