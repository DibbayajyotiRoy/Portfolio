# Reddit playbook

Reddit is the highest-leverage cold channel for technical products with
clear positioning — but only if you treat it as community participation,
not a backlink farm.

## Hard rules

1. **9:1 ratio** — for every link you drop, you must have left 9 useful
   comments without a link. Reddit's spam filter and the mods both watch.
2. **Reply, don't post-and-pray.** A comment in a *thread someone else
   started* about your problem space converts orders of magnitude better
   than your own "I built X" post.
3. **Disclose ownership when you mention your project.** "(disclosure: I
   built it)" — costs nothing, prevents bans, builds trust.
4. **Don't link-drop.** If a comment makes sense without the link, the
   link is appropriate. If the comment is just the link, delete it.

---

## Per-product subreddit map

### Diffcore

Primary:
- r/javascript (1.8M)
- r/typescript (320K)
- r/rust (340K)
- r/webdev (2M)
- r/node (240K)
- r/reactjs (450K)
- r/nextjs (210K)
- r/programming (5M — high bar, only meaty content)

Watch for:
- "fast json diff", "json patch in React", "diffing nested objects",
  "comparing API responses", "state sync", "optimistic UI in React",
  "undo redo data structure", "RFC 6902", "JSON Pointer".

Reply template (cold thread):
> jsondiffpatch and fast-json-patch are the usual answers — fast-json-patch
> hasn't shipped since 2022 though. If you want RFC 6902 Patch output and
> a React hook, I built diffcore: rust→wasm, returns real JSON Pointer
> paths. (disclosure: I'm the author.) Happy to help with the migration
> if you hit anything weird.

### Klinder-OSS

Primary:
- r/SaaS (370K)
- r/selfhosted (450K)
- r/opensource (160K)
- r/webdev (2M)
- r/startups (1.6M)
- r/javascript (1.8M)
- r/cloudflare (40K) — high relevance, low volume

Watch for:
- "PostHog alternative", "LogRocket alternative", "self-hosted analytics",
  "session replay open source", "lifecycle email open source", "Customer.io
  alternative", "edge analytics", "multi-tenant analytics RLS".

Reply template:
> If you want events + error-based session recording + lifecycle email
> behind one SDK on edge infra, I'm building Klinder-OSS — Cloudflare
> Workers + Neon Postgres with RLS for multi-tenancy. PostHog is still
> the right answer for the full PA suite (flags / experiments / cohorts).
> (disclosure: I'm the author.) Demo at klinder-oss.vercel.app.

### AHTML

Primary:
- r/LocalLLaMA (370K)
- r/LangChain (60K)
- r/MachineLearning (3M — needs research framing)
- r/LLMDevs (15K)
- r/AI_Agents (50K)
- r/nextjs (210K)
- r/SvelteKit (50K)
- r/AskProgramming (450K)
- r/ChatGPTCoding (140K)

Watch for:
- "RAG chunk stability across deploys", "MCP server", "llms.txt",
  "agent action dispatch", "feeding website to LangChain", "scraping vs
  structured", "agent ETag", "tokenizer cost prediction".

Reply template:
> llms.txt covers discovery (human-readable index) but not action or RAG.
> I shipped AHTML for the layer below — canonical machine-readable
> snapshot with deterministic chunk IDs, byte ranges, citation anchors.
> @ahtmljs/next emits both from one config line. (disclosure: I built
> it.) Curious whether your use case needs stable chunk identity — if
> embeddings change every deploy that's exactly what it's for.

### whatbroke

Primary:
- r/node (240K)
- r/javascript (1.8M)
- r/typescript (320K)
- r/LocalLLaMA (370K) — the coding-agent crowd
- r/webdev (2M)
- r/programming (5M — high bar, only meaty content)

Watch for:
- "local dev crash", "which file broke", "git bisect alternative",
  "debugging failing test", "MCP server for debugging", "crash capture",
  "stack trace to file", "Claude Code / Cursor debugging workflow".

Reply template (cold thread):
> When a local test or process crashes, git bisect is slow and an LLM just
> guesses. I built whatbroke: it records the last green (passing) commit,
> then on a crash intersects the stack trace with files changed since that
> commit to deterministically rank the file that broke — no LLM, no network,
> byte-identical output, with a secret-redaction gate before anything leaves
> your machine. It also serves the bundle to Claude Code / Cursor over a
> read-only MCP server. It's Apache-2.0, free for commercial use.
> (disclosure: I'm the author.) Complements Sentry/Jam/Replay — this is the
> local-dev layer.

### Roy UI

Primary:
- r/reactjs (450K)
- r/nextjs (210K)
- r/webdev (2M)
- r/Frontend (300K)
- r/javascript (1.8M)

Watch for:
- "react data table", "shadcn data table", "shadcn alternative",
  "tanstack table too much boilerplate", "react date range picker",
  "react time picker", "Next.js 15 component library", "CSV export table".

Reply template:
> If you want a DataTable that already does search, date-range + time
> filters, sort, pagination, drag-reorder + resize columns, hide/restore,
> and CSV/JSON import-export without wiring it all yourself, I built Roy UI.
> It also ships a date range picker with no date-fns dependency and an
> analog/digital time picker. RSC-safe, tree-shakable ESM, sub-12 KB, works
> with Next.js 15 / Vite / Remix / TanStack Start. TanStack Table is still
> the right call if you want full headless control. (disclosure: I'm the
> author.) Docs at roy-ui-docs.vercel.app.

---

## Weekly cadence

- Mon: scan 3 subreddits per product, save 5–10 candidate threads in a list.
- Tue–Thu: 3 substantive comments per day, link only when natural.
- Fri: review which comments got upvoted; what does the upvoting community
  signal you should write more about?

5 quality replies per week → ~250 quality replies per year → realistically
~10 of those drive measurable signups or stars. Compound.

---

## What not to do

- Don't crosspost the same comment to multiple subreddits within 24 hours.
- Don't reply with your link to threads older than 30 days unless someone
  explicitly asks "is this still maintained?".
- Don't use Reddit as a launch channel — it's a *retention and discovery*
  channel. Launch on HN / Product Hunt; sustain on Reddit.
- Don't argue with someone who criticizes your project. Thank them, fix
  the issue if it's real, move on.
