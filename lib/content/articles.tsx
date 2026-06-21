/**
 * On-domain long-form articles.
 *
 * These are the canonical home for writing that previously lived only on
 * Medium. Each article renders natively at /writing/<slug> with its own
 * TechArticle/BlogPosting JSON-LD and a canonical pointing at this domain, so
 * the search + AI-citation value accrues here instead of to medium.com.
 *
 * `mediumUrl`, when set, is the syndicated copy. The on-domain page is the
 * canonical original.
 */
import Link from "next/link";
import type { ReactNode } from "react";

export interface Article {
  slug: string;
  /** H1 title text. */
  title: string;
  /** Second-line tagline rendered next to the H1. */
  subtitle: string;
  /** <title> — keep the primary keyword inside the first ~60 chars. */
  metaTitle: string;
  /** Meta description — ~150–160 chars, primary keyword + benefit. */
  metaDescription: string;
  /** One-line summary for the /writing index list. */
  excerpt: string;
  datePublished: string; // ISO yyyy-mm-dd
  dateModified?: string;
  readingTime: string;
  schemaType: "TechArticle" | "BlogPosting";
  tags: string[];
  keywords: string[];
  /** Syndicated Medium copy, if one exists. */
  mediumUrl?: string;
  body: ReactNode;
}

const articles: Article[] = [
  {
    slug: "merged-into-pyrefly-and-reductstore",
    title: "Getting Code Merged Into Meta's Pyrefly and ReductStore",
    subtitle: "what actually lands an open-source contribution",
    metaTitle: "How I Got Code Merged Into Pyrefly & ReductStore",
    metaDescription:
      "How I landed merged Rust contributions in Meta's Pyrefly type checker and ReductStore: reproduce before claiming, pick deterministic bugs, and work with maintainers.",
    excerpt:
      "Merged Rust contributions in two production projects — Meta's Pyrefly type checker and ReductStore. The mechanics nobody tells you: reproduce before you claim, pick deterministic bugs, and treat maintainers as colleagues.",
    datePublished: "2026-06-21",
    readingTime: "6 min read",
    schemaType: "BlogPosting",
    tags: ["Open Source", "Rust", "Pyrefly", "ReductStore", "Contributing", "Software Engineering"],
    keywords: [
      "how to contribute to open source",
      "open source contribution",
      "first open source contribution",
      "getting code merged",
      "pyrefly",
      "reductstore",
      "rust open source",
    ],
    mediumUrl:
      "https://medium.com/@dibbayajyoti/how-i-got-my-code-merged-into-metas-pyrefly-and-reductstore-a-database-for-robotics-b80186e5ac8d",
    body: (
      <>
        <p>
          When I started contributing to open source, I had the same vague advice
          everyone has: "just contribute to open source." Nobody tells you the
          actual mechanics — how to pick an issue that won't evaporate, how to
          talk to maintainers, what to do when your first attempt goes nowhere.
          This is the write-up I wish I'd had.
        </p>
        <p>
          Over the past few months I landed merged contributions in two
          production Rust projects:{" "}
          <Link
            href="https://github.com/reductstore/reductstore"
            target="_blank"
            rel="noopener noreferrer"
          >
            ReductStore
          </Link>
          , a time-series database for robotics and industrial IoT, and{" "}
          <Link
            href="https://github.com/facebook/pyrefly"
            target="_blank"
            rel="noopener noreferrer"
          >
            pyrefly
          </Link>
          , Meta's Python type checker written in Rust. Here is how it actually
          went, including the parts that didn't work.
        </p>

        <h2>The first lesson: a contribution can evaporate before you finish</h2>
        <p>
          My first attempt taught me the most. I claimed a crash issue in pyrefly
          that looked clean and well-scoped. I set up the environment, started
          digging in, and then the reporter commented that they could no longer
          reproduce it. The maintainers' other fixes had resolved it incidentally.
          I never wrote a line of fix code, and the issue closed.
        </p>
        <p>
          That felt like wasted effort at the time. It wasn't. It taught me the
          single most important habit I now follow:{" "}
          <strong>reproduce the bug yourself, on the current code, before you
          claim anything.</strong>
        </p>
        <p>
          A crash that the reporter themselves can't trigger anymore is a ghost.
          An issue without reproduction steps is a maybe. Before I commit to an
          issue now, I get the failure to happen on my own machine, with my own
          steps, on the latest main branch. If I can't, I don't claim it, or I ask
          the reporter for specifics rather than guessing.
        </p>

        <h2>Picking the right issue matters more than picking a hard one</h2>
        <p>
          After that, I got selective. Not every "good first issue" is actually
          good for a first contribution. The categories I learned to weigh:
        </p>
        <ul>
          <li>
            <strong>
              Crashes and deterministic bugs are easier to land than features.
            </strong>{" "}
            A crash has a correct answer: it stops crashing, you add a regression
            test, done. A new feature or a new diagnostic rule has many defensible
            implementations, and the maintainers have to arbitrate which one they
            want. That arbitration means rounds of back-and-forth. For a first
            contribution, you want unambiguous success criteria.
          </li>
          <li>
            <strong>Avoid issues that might get fixed out from under you.</strong>{" "}
            Flaky, environment-dependent crashes can vanish as a side effect of
            unrelated work, which is exactly what happened to my first attempt. A
            deterministic logic bug — something that is wrong every single time for
            a clear reason — won't disappear on you.
          </li>
          <li>
            <strong>
              A maintainer-confirmed fix direction removes the riskiest unknown.
            </strong>{" "}
            The pyrefly issue I eventually landed was a false-positive diagnostic:
            the type checker told users to install stub packages for libraries
            that already shipped their own type information. A maintainer had
            already commented agreeing with the fix approach. That meant I wasn't
            guessing at what they wanted — I was implementing something they'd
            already blessed. That is the lowest-risk kind of issue to take.
          </li>
        </ul>

        <h2>Reproduce, then investigate, then code, in that order</h2>
        <p>
          The workflow that consistently worked for me is boring, and that's the
          point:
        </p>
        <ol>
          <li>Reproduce the issue locally on current main.</li>
          <li>
            Investigate read-only — find exactly where the bug lives and what the
            fix needs to touch, before writing anything.
          </li>
          <li>Align with the maintainer on approach and any genuine design questions.</li>
          <li>Implement the minimal change plus a regression test.</li>
          <li>
            Verify end-to-end yourself — don't trust that "tests pass" means it
            works.
          </li>
        </ol>
        <p>
          For the pyrefly fix, reproduction alone took real work. The diagnostic
          only fired under a specific configuration, with a real config file
          present and the package installed in the resolved environment. A naive
          run showed nothing. I had to understand the tool's preset and severity
          system before I could even see the bug. By the time I'd surfaced it, I
          had also located the exact function responsible and understood why it
          triggered. The investigation was most of the job. The fix itself was
          small.
        </p>

        <h2>Talk to maintainers like a colleague, not a petitioner</h2>
        <p>
          Early on I overthought every message. What I learned is that maintainers
          mostly want two things: evidence you've done your homework, and clarity
          about what you're asking.
        </p>
        <p>
          A claim comment that says "I'd like to take this" is fine. A claim
          comment that says "I reproduced this, here's the trigger condition,
          here's the function responsible, and here's the fix direction the
          maintainer already suggested — assigning to me?" gets a fast yes,
          because it shows you've already done the investigation.
        </p>
        <p>
          When there's a genuine design decision, surface it before you build,
          with your own recommendation attached. "Should this go at the call sites
          or inside the helper? I lean toward the call sites because the resolved
          path is available there — open to your preference" is far better than
          either guessing silently or asking an open-ended "how should I do this?"
          You're making it a one-line decision for a busy person, while showing
          you understand the tradeoff.
        </p>
        <p>
          And when a maintainer pushes back on your approach in review, concede
          cleanly. On one of my ReductStore contributions, a maintainer pointed
          out I'd put some state in the configuration struct when it belonged as a
          runtime component. He was right. "Good point, I took a shortcut there,
          reworking to follow the existing pattern" is the correct response.
          Defending a worse design to save face is how you lose a maintainer's
          trust.
        </p>

        <h2>What I actually built</h2>
        <p>
          <strong>
            <Link
              href="https://github.com/reductstore/reductstore"
              target="_blank"
              rel="noopener noreferrer"
            >
              ReductStore
            </Link>{" "}
            (Rust, time-series storage for robotics/IIoT):
          </strong>{" "}
          I contributed to the system-events and observability layer. The first
          contribution (
          <Link
            href="https://github.com/reductstore/reductstore/pull/1417"
            target="_blank"
            rel="noopener noreferrer"
          >
            PR #1417
          </Link>
          ) added replication diagnostics, emitting structured events into a
          system bucket so operators can query them like any other data. The
          second (
          <Link
            href="https://github.com/reductstore/reductstore/pull/1431"
            target="_blank"
            rel="noopener noreferrer"
          >
            PR #1431
          </Link>
          ) built usage-statistics reporting: each node emits its own metrics —
          traffic, record counts, storage size — as queryable records on an
          interval, with replicas forwarding to the primary for a consolidated
          view. Both shipped and were credited by the maintainer, who{" "}
          <Link
            href="https://www.linkedin.com/posts/atimin_featreplication-audit-events-by-dibbayajyotiroy-share-7469681078874705920-NSpe/"
            target="_blank"
            rel="noopener noreferrer"
          >
            thanked me publicly by name
          </Link>
          .
        </p>
        <p>
          <strong>
            <Link
              href="https://github.com/facebook/pyrefly"
              target="_blank"
              rel="noopener noreferrer"
            >
              pyrefly
            </Link>{" "}
            (Rust, Meta's Python type checker):
          </strong>{" "}
          I fixed a false-positive untyped-import diagnostic (
          <Link
            href="https://github.com/facebook/pyrefly/pull/3840"
            target="_blank"
            rel="noopener noreferrer"
          >
            PR #3840
          </Link>
          ). The checker recommended installing stub packages for libraries that
          already ship their own type markers (a <code>py.typed</code> file, per
          PEP 561), like modern versions of <code>requests</code>. The fix checks
          for that marker before warning, and crucially handles submodules
          correctly, since the marker lives at the package root, not in each
          submodule directory. It merged into Meta's repository.
        </p>
        <p>
          I want to be precise about scope, because it matters: this work sits in
          the observability and diagnostics layers of these systems. I did not
          design the storage engine's durability core or the type checker's
          inference engine. I contributed real, shipped features against
          well-defined parts of large codebases. That's a true description, and
          it's enough.
        </p>
        <p>
          One detail I'll admit felt good: the ReductStore maintainer announced
          the first contribution publicly, on his own channels, thanking me by
          name. I mention it not to boast but because it's the clearest signal
          that contributing well — rather than asking for recognition — is what
          earns it. You don't get credited for showing up. You get credited for
          being useful.
        </p>

        <h2>The habits that actually moved the needle</h2>
        <p>If I compress everything into the few things that made the difference:</p>
        <ul>
          <li>
            <strong>Reproduce before you claim.</strong> A bug you haven't seen
            fire is a bug you might not be able to fix.
          </li>
          <li>
            <strong>Investigate before you code.</strong> Reading code you didn't
            write, until you understand where the change goes and why, taught me
            more than any tutorial. The implementation is usually the small part.
          </li>
          <li>
            <strong>Verify before you trust.</strong> "The tests pass" is not the
            same as "the fix works." Run the original reproduction against your
            change and watch the bug disappear.
          </li>
          <li>
            <strong>Be accurate about what you did.</strong> Overstating your
            contributions is the one thing that backfires with exactly the
            technical people you want to impress. The honest version of good work
            is impressive on its own.
          </li>
        </ul>
        <p>
          None of this is clever. It's just the discipline of treating someone
          else's codebase with the care it deserves, and treating the maintainers
          as people whose time is worth not wasting. That's the whole thing.
        </p>
        <p>
          I'm a full-stack and Rust engineer focused on systems programming and
          developer tooling. See more of{" "}
          <Link href="/work">my work</Link>, the{" "}
          <Link href="/open-source">open-source contributions</Link> behind this
          post, or{" "}
          <Link href="/rust">what I do in Rust</Link>.
        </p>
      </>
    ),
  },
  {
    slug: "optimistic-ui-rfc-6902-react",
    title: "Optimistic UIs in React with RFC 6902 JSON Patch",
    subtitle: "apply, revert, and undo with one diff primitive",
    metaTitle: "Optimistic UI in React with RFC 6902 JSON Patch",
    metaDescription:
      "Build optimistic UIs, undo/redo, and state sync in React using RFC 6902 JSON Patch and a Rust/WASM diff. apply on click, revert on failure, replay for undo.",
    excerpt:
      "RFC 6902 JSON Patch gives you one primitive for optimistic updates, rollback on failure, and undo/redo. Here's the pattern, in React, with a Rust/WASM diff engine.",
    datePublished: "2026-06-15",
    readingTime: "8 min read",
    schemaType: "TechArticle",
    tags: ["React", "RFC 6902", "JSON Patch", "Optimistic UI", "Undo/Redo", "diffcore"],
    keywords: [
      "json patch react hook",
      "optimistic ui react",
      "undo redo react",
      "rfc 6902 typescript",
      "react state sync",
      "applyPatch revertPatch",
    ],
    body: (
      <>
        <p>
          An optimistic UI updates the screen <em>before</em> the server
          confirms the change. It feels instant, but it owes the user a promise:
          if the request fails, the UI has to put everything back exactly the way
          it was. Most React codebases keep that promise with ad-hoc snapshots —
          a deep clone here, a <code>useRef</code> of the old value there — and
          the bookkeeping rots as the state shape grows.
        </p>
        <p>
          There is a cleaner primitive hiding in plain sight:{" "}
          <strong>RFC 6902 JSON Patch</strong>. A patch is a tiny, standard,
          reversible description of <em>what changed</em>. If you compute one
          patch per mutation, you get optimistic apply, failure rollback, and
          undo/redo from the same object — no bespoke snapshot logic.
        </p>

        <h2>What a JSON Patch actually is</h2>
        <p>
          RFC 6902 defines a patch as an ordered list of operations against a
          JSON document, addressed by{" "}
          <Link
            href="https://datatracker.ietf.org/doc/html/rfc6901"
            target="_blank"
            rel="noopener noreferrer"
          >
            RFC 6901 JSON Pointer
          </Link>{" "}
          paths:
        </p>
        <pre>
          <code>{`[
  { "op": "replace", "path": "/user/name", "value": "Ada" },
  { "op": "add",     "path": "/user/roles/1", "value": "ops" },
  { "op": "remove",  "path": "/cart/items/0" }
]`}</code>
        </pre>
        <p>
          Because the format is standard, the same patch is understood by any
          IETF-compliant consumer on the server, in a queue, or in another
          service. And because every operation has an inverse, a patch can be
          turned around to undo itself — which is the whole trick.
        </p>

        <h2>The three jobs, one patch</h2>
        <p>
          I use{" "}
          <Link href="/projects/diffcore">diffcore</Link>, a JSON diff engine
          written in Rust and shipped to npm as WebAssembly, because the diff
          runs hot on every keystroke and I want it off the JS main thread budget.
          Any RFC 6902 library works; the pattern is what matters. The API is
          three functions:
        </p>
        <pre>
          <code>{`import { diff, applyPatch, revertPatch } from "diffcore";

const before = { user: { name: "Ada", roles: ["admin"] } };
const after  = { user: { name: "Ada", roles: ["admin", "ops"] } };

const patch = diff(before, after);
// [ { op: "add", path: "/user/roles/1", value: "ops" } ]

const next = applyPatch(before, patch);  // forward: the optimistic state
const back = revertPatch(next, patch);   // inverse: exactly the old state`}</code>
        </pre>
        <ul>
          <li>
            <strong>Optimistic apply</strong> — compute the next state, render it
            immediately, fire the request.
          </li>
          <li>
            <strong>Rollback</strong> — if the request rejects,{" "}
            <code>revertPatch</code> puts the document back, byte for byte. No
            stale clone to trust.
          </li>
          <li>
            <strong>Undo/redo</strong> — push each patch onto a stack. Undo is{" "}
            <code>revertPatch</code>; redo is <code>applyPatch</code>. The stack
            holds tiny diffs, not full document copies.
          </li>
        </ul>

        <h2>The React pattern</h2>
        <p>
          Wrap the mutation so the optimistic update and its rollback are the
          same code path:
        </p>
        <pre>
          <code>{`function useOptimistic(initial) {
  const [state, setState] = useState(initial);
  const undo = useRef([]); // stack of applied patches

  async function mutate(next, persist) {
    const patch = diff(state, next);
    if (patch.length === 0) return;

    setState(next);            // optimistic: render now
    undo.current.push(patch);

    try {
      await persist(patch);    // send the standard patch to the server
    } catch (err) {
      setState((s) => revertPatch(s, patch)); // promise kept: roll back
      undo.current.pop();
      throw err;
    }
  }

  return { state, mutate, undo };
}`}</code>
        </pre>
        <p>
          The server receives a standard JSON Patch, not your private payload
          shape, so the same endpoint serves your web app, a mobile client, and a
          background job. For high-frequency editors there is a{" "}
          <code>useDiff</code> hook that memoizes the patch between two state
          objects so you are not re-diffing on every render.
        </p>

        <h2>Why send the patch, not the whole object</h2>
        <p>
          Two clients editing the same record will clobber each other if each
          PUTs a full object — last write wins, silently. A patch carries only
          the intent (<code>add /user/roles/1</code>), so the server can apply
          changes that do not touch the same path concurrently, and you can
          detect the ones that do. It is also smaller on the wire, which matters
          once you are syncing on every keystroke. This is the same reason{" "}
          <Link href="/distributed-systems">state-sync systems</Link> lean on
          diffs instead of snapshots.
        </p>

        <h2>When this is worth it</h2>
        <p>
          Reach for the patch primitive when you have optimistic mutations,
          undo/redo, collaborative or multi-tab editing, or a "review changes"
          screen. For a form that saves once and navigates away, a single
          snapshot is simpler — don't over-build it. The win shows up exactly
          when the hand-rolled snapshot bookkeeping starts to hurt.
        </p>
        <p>
          The diff engine I used is{" "}
          <Link href="/projects/diffcore">diffcore</Link> — Rust compiled to
          WebAssembly, RFC 6902 in and out, with <code>applyPatch</code> /{" "}
          <code>revertPatch</code> and a <code>useDiff</code> hook. If you are
          weighing options, I wrote a{" "}
          <Link href="/diffcore-vs-jsondiffpatch">
            diffcore vs jsondiffpatch comparison
          </Link>
          .
        </p>
      </>
    ),
  },
  {
    slug: "nextjs-seo-2026",
    title: "Next.js SEO in 2026: A Practical Guide",
    subtitle: "metadata, JSON-LD, llms.txt, and Core Web Vitals",
    metaTitle: "Next.js SEO in 2026: A Practical Developer Guide",
    metaDescription:
      "A practical Next.js SEO guide for 2026: the Metadata API, JSON-LD structured data, llms.txt for AI crawlers, honest sitemaps, and Core Web Vitals (INP).",
    excerpt:
      "What actually moves the needle for Next.js SEO in 2026: the Metadata API, JSON-LD, llms.txt for AI crawlers, honest sitemaps, and INP — with the App Router specifics.",
    datePublished: "2026-03-01",
    dateModified: "2026-06-15",
    readingTime: "10 min read",
    schemaType: "TechArticle",
    tags: ["Next.js", "SEO", "Metadata API", "JSON-LD", "llms.txt", "Core Web Vitals"],
    keywords: [
      "next.js seo",
      "next.js metadata api",
      "next.js json-ld",
      "llms.txt",
      "next.js sitemap",
      "core web vitals inp",
      "app router seo",
    ],
    mediumUrl:
      "https://medium.com/@dibbayajyoti/next-js-seo-in-2026-a-developers-practical-guide-63449d44be22",
    body: (
      <>
        <p>
          Next.js gives you everything you need to rank, but the defaults are not
          enough and the surface area is wide. This is the short list of what
          actually moves the needle in 2026, with the App Router specifics — not
          generic SEO advice you have read a hundred times.
        </p>

        <h2>1. Treat the Metadata API as the source of truth</h2>
        <p>
          Every route should export <code>metadata</code> (or{" "}
          <code>generateMetadata</code> for dynamic routes). Set{" "}
          <code>metadataBase</code> once in the root layout so relative OG image
          URLs resolve, and set a per-page <code>alternates.canonical</code> so
          query-string and trailing-slash variants collapse to one indexable URL.
        </p>
        <pre>
          <code>{`export const metadata: Metadata = {
  metadataBase: new URL("https://example.com"),
  title: "Page title with the primary keyword up front",
  description: "150–160 chars, primary keyword + the benefit.",
  alternates: { canonical: "/the-page" },
  openGraph: { type: "article", images: ["/opengraph-image.png"] },
};`}</code>
        </pre>
        <p>
          Keep titles under ~60 characters and descriptions near 155 so they do
          not truncate in the SERP. Google rewrites descriptions often, so spend
          the effort on titles first.
        </p>

        <h2>2. Ship JSON-LD, and connect the nodes with @id</h2>
        <p>
          Structured data is how you become an <em>entity</em> instead of a page.
          A personal or product site wants a <code>Person</code> or{" "}
          <code>Organization</code> node and a <code>WebSite</code> node, plus
          page-type schema (<code>TechArticle</code>, <code>SoftwareApplication</code>,{" "}
          <code>BreadcrumbList</code>). The detail most people miss: give nodes a
          stable <code>@id</code> and reference them across pages so the graph is
          one connected entity, not isolated blobs.
        </p>
        <pre>
          <code>{`<script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "TechArticle",
      "@id": "https://example.com/writing/slug#article",
      "headline": "…",
      "author": { "@id": "https://example.com/#person" },
    }),
  }}
/>`}</code>
        </pre>

        <h2>3. Add llms.txt for AI crawlers</h2>
        <p>
          A growing share of discovery now runs through ChatGPT, Perplexity, and
          Claude, and they reward a clean, plain-text summary of your site. Serve{" "}
          <code>/llms.txt</code> (a concise map) and optionally{" "}
          <code>/llms-full.txt</code> (the long version). Keep the facts in these
          files identical to what your pages and JSON-LD say — contradictory
          numbers across your own surfaces erode citation confidence. This is its
          own discipline; I treat it as part of{" "}
          <Link href="/ai-engineering">AI-search optimization</Link>, and the{" "}
          <Link href="/projects/ahtml">AHTML project</Link> automates emitting it.
        </p>

        <h2>4. Make robots.txt explicit about AI bots</h2>
        <p>
          Decide deliberately whether GPTBot, ClaudeBot, PerplexityBot,
          Google-Extended and friends may crawl, and say so by name in{" "}
          <code>app/robots.ts</code>. Defaulting to silence means the answer is
          decided by someone else's defaults.
        </p>

        <h2>5. Keep sitemap lastmod honest</h2>
        <p>
          The biggest self-inflicted wound I see: generating{" "}
          <code>lastModified: new Date()</code> in <code>app/sitemap.ts</code> on
          every build. That tells Google every page changed on every deploy, so it
          learns to distrust the signal and crawls you less. Use stable,
          per-page dates and only bump one when that page's content actually
          changes.
        </p>

        <h2>6. Optimize for INP, not FID</h2>
        <p>
          Core Web Vitals in 2026 means <strong>INP</strong> (Interaction to Next
          Paint), LCP, and CLS — FID is gone. Next.js helps with LCP via the{" "}
          <code>next/image</code> component and font optimization, but INP is
          about your own JavaScript: break up long tasks, defer non-critical
          hydration, and keep the main thread free on interaction. Measure field
          data in Search Console's Core Web Vitals report, not just lab Lighthouse.
        </p>

        <h2>7. Render content server-side, then verify it</h2>
        <p>
          With the App Router this is mostly free — Server Components render HTML
          crawlers can read without executing your JS. Verify it: fetch your page
          with JavaScript disabled and confirm the headings and copy are present.
          If your content only appears after hydration, you are betting on the
          crawler running your bundle.
        </p>

        <h2>The short version</h2>
        <p>
          Metadata API on every route, a connected JSON-LD entity graph, llms.txt
          that agrees with your pages, an explicit robots.txt, an honest sitemap,
          INP discipline, and server-rendered content you actually verified. This
          site is built on exactly these rules — see the{" "}
          <Link href="/nextjs-seo">Next.js SEO hub</Link> for the deeper dive, or{" "}
          <Link href="/work">the projects</Link> for where it is applied.
        </p>
      </>
    ),
  },
  {
    slug: "redis-polling-bottleneck",
    title: "Fixing a Redis Polling Bottleneck in Production",
    subtitle: "from a 100-second SCAN to batched MGET",
    metaTitle: "Fixing a Redis Polling Bottleneck (SCAN → MGET)",
    metaDescription:
      "A production Redis incident: a naive SCAN-and-check loop timed out at 100s. Switching to batched MGET with client-side filtering cut work ~90% and ended the timeouts.",
    excerpt:
      "A naive SCAN-and-check loop over a remote Redis timed out at 100 seconds in production. Batched MGET with client-side filtering cut the work ~90% and ended the timeouts.",
    datePublished: "2026-02-01",
    readingTime: "6 min read",
    schemaType: "BlogPosting",
    tags: ["Redis", "Performance", "Node.js", "Distributed Systems", "Debugging"],
    keywords: [
      "redis scan slow",
      "redis mget batching",
      "redis polling performance",
      "node redis timeout",
      "redis production debugging",
    ],
    mediumUrl: "https://medium.com/p/afae306668ba",
    body: (
      <>
        <p>
          A background poller in one of our Node services started timing out in
          production. The job's only task was to read a set of task records out
          of Redis, check which ones were idle, and act on them. It worked fine in
          development and fell over at ~100 seconds against the real dataset. This
          is the short story of why, and the fix.
        </p>

        <h2>The naive version</h2>
        <p>
          The original loop did the obvious thing: <code>SCAN</code> the keyspace
          for matching keys, then for each key, <code>GET</code> the value,
          deserialize it, and check whether the task was idle.
        </p>
        <pre>
          <code>{`// one network round trip per key — the problem
for await (const key of redis.scanIterator({ MATCH: "task:*" })) {
  const raw = await redis.get(key);
  const task = JSON.parse(raw);
  if (isIdle(task)) await handle(task);
}`}</code>
        </pre>
        <p>
          Two things make this slow, and they compound. First,{" "}
          <code>SCAN</code> walks the entire keyspace in cursor-sized chunks — it
          is O(N) over every key in the database, not just the ones you want.
          Second, the per-key <code>GET</code> means one network round trip per
          task. Against a <em>remote</em> Redis, latency, not Redis itself, is the
          bottleneck: a few hundred microseconds of compute wrapped in a few
          milliseconds of network, thousands of times over. The schema had no
          secondary structure to narrow the scan, so the work grew with the whole
          database and blew past the 100-second timeout.
        </p>

        <h2>The fix: batch the reads, filter client-side</h2>
        <p>
          The keys still had to be discovered, but the per-key round trips were
          pure waste. Redis can return many values in a single command with{" "}
          <code>MGET</code>, so I collected keys in batches and fetched each batch
          in one trip, then did the idle check in application code.
        </p>
        <pre>
          <code>{`const BATCH = 500;
for (const batch of chunk(keys, BATCH)) {
  const values = await redis.mGet(batch);   // one round trip per 500 keys
  for (const raw of values) {
    const task = JSON.parse(raw);
    if (isIdle(task)) await handle(task);    // filter in the app, not per-GET
  }
}`}</code>
        </pre>
        <p>
          One round trip per 500 keys instead of one per key collapses the network
          cost by roughly the batch factor. Moving the idle check to the client
          meant Redis only ever did cheap bulk reads — no per-item logic on the
          server, no extra commands. Total work dropped about 90%, and the
          timeouts stopped.
        </p>

        <h2>Why this works, and the trade-off</h2>
        <p>
          The lesson is not "MGET is faster than GET" — it is that{" "}
          <strong>over a network, round trips dominate</strong>. Batching trades a
          little memory (you hold a batch of values at once) for a large cut in
          latency. <code>MGET</code> is the simplest tool; a pipeline or Lua
          script does the same when your reads are not uniform. The real fix for
          the underlying problem is to stop scanning the whole keyspace at all:
          maintain an index — a <code>SET</code> or sorted set of the keys you
          care about — so you read a known, bounded list instead of discovering it
          every cycle.
        </p>

        <h2>Takeaways</h2>
        <ul>
          <li>
            Profile where the time goes before you optimize. Here it was network
            round trips, not Redis throughput.
          </li>
          <li>
            <code>SCAN</code> is O(keyspace). If you scan on a hot path, you have
            already lost — keep an index of the keys you need.
          </li>
          <li>
            Batch remote reads (<code>MGET</code>, pipelines) and do filtering in
            the application when the per-item check is cheap.
          </li>
        </ul>
        <p>
          More notes like this on{" "}
          <Link href="/distributed-systems">distributed systems</Link> and the{" "}
          <Link href="/work">systems I build</Link>.
        </p>
      </>
    ),
  },
];

export default articles;

export const getArticle = (slug: string): Article | undefined =>
  articles.find((a) => a.slug === slug);

export const articleSlugs = articles.map((a) => a.slug);
