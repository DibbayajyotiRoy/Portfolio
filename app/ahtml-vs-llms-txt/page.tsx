import Link from "next/link";
import TitledParagraph from "@/components/titled-paragraph";

type Row = { feature: string; ahtml: string; llmsTxt: string };

const rows: Row[] = [
  { feature: "Layer", ahtml: "Canonical machine-readable snapshot", llmsTxt: "Human-readable site index" },
  { feature: "Audience", ahtml: "Agents that act on a site", llmsTxt: "LLM crawlers / discovery bots" },
  { feature: "Format", ahtml: "Typed schema (JSON or compact text)", llmsTxt: "Plain Markdown" },
  { feature: "Schema", ahtml: "Versioned JSON Schema + TS types", llmsTxt: "Convention only" },
  { feature: "Chunk identity", ahtml: "Deterministic IDs + byte ranges", llmsTxt: "None" },
  { feature: "Citation anchors", ahtml: "Per chunk, preserved through pipelines", llmsTxt: "None" },
  { feature: "Action dispatch", ahtml: "Yes — typed actions for agents", llmsTxt: "No" },
  { feature: "Cache validation", ahtml: "ETag", llmsTxt: "HTTP defaults" },
  { feature: "Discovery URL", ahtml: "/.well-known/ahtml.json", llmsTxt: "/llms.txt and /llms-full.txt" },
  { feature: "Plugin", ahtml: "@ahtmljs/next, @ahtmljs/vite", llmsTxt: "Same plugin emits llms.txt too" },
  { feature: "Client SDK", ahtml: "@ahtmljs/agent (typed, safety-gated)", llmsTxt: "None — fetch + parse" },
  { feature: "RAG loader", ahtml: "@ahtmljs/langchain (citation-preserving)", llmsTxt: "Generic Markdown loader" },
];

const faq = [
  {
    q: "Is AHTML a replacement for llms.txt?",
    a: "No — they sit at different layers. llms.txt is the human-readable index. AHTML is the canonical machine-readable snapshot. Agents use llms.txt to discover and AHTML to act.",
  },
  {
    q: "Do I have to choose one?",
    a: "No. @ahtmljs/next and @ahtmljs/vite emit both from a single extractor — plus MCP, OpenAPI, and JSON-LD.",
  },
  {
    q: "Where is the AHTML snapshot served?",
    a: "/.well-known/ahtml.json. The plugin auto-discovers App Router and Pages Router routes (or Vite framework routes).",
  },
  {
    q: "How is this different from RAG-ready Markdown?",
    a: "Document.chunks ships deterministic IDs and byte ranges — embeddings stay stable across deploys. Markdown gives you text but not stable chunk identity, anchors, or a typed action schema.",
  },
];

export default function AhtmlVsLlmsTxtPage() {
  return (
    <main className="flex my-[140px] sm:my-[200px] justify-end sm:justify-center">
      <section className="max-w-[626px] pl-9 pr-6 sm:pl-0 sm:pr-0 sm:px-10">
        <h2 className="font-mono uppercase text-sm font-semibold opacity-25">
          comparison · 2026
        </h2>
        <h1 className="flex items-baseline flex-wrap sm:gap-3 my-2 sm:my-4 text-3xl sm:text-[32px] font-semibold">
          <span className="sm:w-auto w-full">AHTML vs llms.txt</span>
          <span className="opacity-50 w-full sm:w-auto text-[18px] sm:text-[22px]">
            two layers of the agentic web
          </span>
        </h1>

        <div className="flex flex-col gap-6 sm:gap-8 mt-10 text-blackout/90 dark:text-whiteout/90">
          <TitledParagraph title="tldr">
            <p>
              <Link
                href="https://www.npmjs.com/org/ahtmljs"
                target="_blank"
                rel="noopener noreferrer"
                className="underline font-semibold"
              >
                AHTML
              </Link>{" "}
              is the canonical machine-readable snapshot of a site for AI
              agents — typed schema, deterministic chunk IDs, byte ranges,
              citation anchors, action dispatch.{" "}
              <Link
                href="https://llmstxt.org"
                target="_blank"
                rel="noopener noreferrer"
                className="underline"
              >
                llms.txt
              </Link>{" "}
              is the human-readable index of important URLs and notes for
              LLM crawlers. They sit at different layers — and the{" "}
              <Link
                href="https://www.npmjs.com/package/@ahtmljs/next"
                target="_blank"
                rel="noopener noreferrer"
                className="underline"
              >
                @ahtmljs/next
              </Link>{" "}
              plugin emits both from a single extractor.
            </p>
          </TitledParagraph>

          <TitledParagraph title="install">
            <pre className="text-sm bg-blackout/5 dark:bg-whiteout/5 rounded-md p-3 overflow-x-auto font-mono">
{`npm install @ahtmljs/next      # Next.js plugin
npm install @ahtmljs/vite      # Vite / SvelteKit / SolidStart / Astro
npm install @ahtmljs/agent     # client SDK
npm install @ahtmljs/langchain # RAG loader
npm install @ahtmljs/schema    # types + JSON Schema + validator`}
            </pre>
          </TitledParagraph>

          <TitledParagraph title="side by side">
            <div className="overflow-x-auto -mx-2 px-2">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="border-b border-blackout/30 dark:border-whiteout/30">
                    <th className="text-left py-2 pr-3 font-semibold">Feature</th>
                    <th className="text-left py-2 pr-3 font-semibold">AHTML</th>
                    <th className="text-left py-2 font-semibold">llms.txt</th>
                  </tr>
                </thead>
                <tbody>
                  {rows.map((r) => (
                    <tr
                      key={r.feature}
                      className="border-b border-blackout/10 dark:border-whiteout/10 align-top"
                    >
                      <td className="py-2 pr-3 font-medium">{r.feature}</td>
                      <td className="py-2 pr-3">{r.ahtml}</td>
                      <td className="py-2">{r.llmsTxt}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </TitledParagraph>

          <TitledParagraph title="example">
            <pre className="text-sm bg-blackout/5 dark:bg-whiteout/5 rounded-md p-3 overflow-x-auto font-mono leading-relaxed">
{`// next.config.mjs
import { withAhtml } from "@ahtmljs/next";
export default withAhtml({}); // emits MCP + OpenAPI + JSON-LD + llms.txt + AHTML

// agent side
import { AhtmlClient } from "@ahtmljs/agent";

const client = new AhtmlClient({ origin: "https://dibbayajyoti.com" });
const snapshot = await client.fetch();   // ETag-cached
await client.dispatch("contact", { dryRun: true });`}
            </pre>
          </TitledParagraph>

          <TitledParagraph title="when to use what">
            <div className="flex flex-col gap-3">
              <p>
                <span className="font-semibold">Use llms.txt</span> when you
                want the easiest possible signal to LLM crawlers — a Markdown
                index of pages they should look at. Cheap to ship, almost no
                investment.
              </p>
              <p>
                <span className="font-semibold">Use AHTML</span> when agents
                will actually read or act on your site — RAG ingestion that
                needs stable chunk identity, dispatching typed actions,
                exact prompt cost prediction, dry-run safety gates.
              </p>
              <p>
                <span className="font-semibold">Use both</span>, ideally — the{" "}
                <Link
                  href="https://www.npmjs.com/package/@ahtmljs/next"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline"
                >
                  @ahtmljs/next
                </Link>{" "}
                plugin emits llms.txt, MCP, OpenAPI, JSON-LD, and AHTML from
                one config line.
              </p>
            </div>
          </TitledParagraph>

          <TitledParagraph title="faq">
            <ul className="flex flex-col gap-4">
              {faq.map((item) => (
                <li key={item.q} className="flex flex-col gap-1">
                  <p className="font-semibold">{item.q}</p>
                  <p>{item.a}</p>
                </li>
              ))}
            </ul>
          </TitledParagraph>

          <TitledParagraph title="try ahtml">
            <div className="flex flex-col gap-3">
              <p>
                <Link
                  href="https://www.npmjs.com/org/ahtmljs"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline font-semibold"
                >
                  Browse the npm scope →
                </Link>{" "}
                or read the source on{" "}
                <Link
                  href="https://github.com/DibbayajyotiRoy/AHTML"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline font-semibold"
                >
                  GitHub
                </Link>
                .
              </p>
              <p>
                Live AHTML snapshot from this site:{" "}
                <Link
                  href="/.well-known/ahtml.json"
                  className="underline font-mono text-sm"
                >
                  /.well-known/ahtml.json
                </Link>
                . Questions or want help integrating?{" "}
                <Link href="/contact" className="underline">Get in touch</Link>.
              </p>
            </div>
          </TitledParagraph>

          <TitledParagraph title="related">
            <p className="text-sm opacity-80">
              Other comparisons:{" "}
              <Link href="/diffcore-vs-jsondiffpatch" className="underline">Diffcore vs jsondiffpatch</Link>
              {" · "}
              <Link href="/klinder-vs-posthog" className="underline">Klinder-OSS vs PostHog</Link>
              {" · "}
              <Link href="/projects/ahtml" className="underline">About AHTML</Link>
              {" · "}
              <Link href="/work" className="underline">all projects</Link>
            </p>
          </TitledParagraph>
        </div>

        <p className="text-base sm:text-lg my-10 sm:my-20">
          Thanks for reading. Love your work, keep it up!
        </p>
      </section>
    </main>
  );
}
