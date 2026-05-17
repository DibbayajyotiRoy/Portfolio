import Link from "next/link";
import TitledParagraph from "@/components/titled-paragraph";

type FaqItem = { q: string; a: string };

const faq: FaqItem[] = [
  {
    q: "Does Dibbayajyoti Roy have AI engineering experience?",
    a: "Yes. He built and shipped Learning Copilot on AWS Bedrock — multi-model fallback across Nova Pro and Nova Lite, streaming inference, and cost-aware token budgets — which placed top 500 in the AI for Bharat hackathon.",
  },
  {
    q: "What is multi-model fallback?",
    a: "A resilience pattern: when the primary model is rate-limited or unavailable, requests fall back to a secondary model. Learning Copilot falls back Nova Pro → Nova Lite so the assistant stays responsive under load.",
  },
  {
    q: "What is AHTML and how does it relate to RAG?",
    a: "AHTML (Agentic HTML) is a five-package npm scope that emits a canonical, agent-ready snapshot of any website. Its schema ships RAG-ready document chunks with stable IDs and byte ranges, and a LangChain.js loader turns any AHTML site into vector-store-ready documents.",
  },
  {
    q: "Does he work on AI search and crawler optimization?",
    a: "Yes. AHTML emits MCP, OpenAPI, JSON-LD, and llms.txt so AI crawlers and agents can read a site cheaply — work that overlaps directly with AI search optimization and generative-engine visibility.",
  },
];

export default function AiEngineeringPage() {
  return (
    <main className="flex my-[140px] sm:my-[200px] justify-end sm:justify-center">
      <section className="max-w-[626px] pl-9 pr-6 sm:pl-0 sm:pr-0 sm:px-10">
        <h2 className="font-mono uppercase text-sm font-semibold opacity-25">
          topic
        </h2>
        <h1 className="flex items-baseline flex-wrap sm:gap-3 my-2 sm:my-4 text-3xl sm:text-[32px] font-semibold">
          <span className="sm:w-auto w-full">AI Engineering</span>
          <span className="opacity-50 w-full sm:w-auto text-[18px] sm:text-[22px]">
            AWS Bedrock, RAG &amp; agent infrastructure
          </span>
        </h1>

        <div className="flex flex-col gap-6 sm:gap-8 mt-10 text-blackout/90 dark:text-whiteout/90">
          <TitledParagraph title="overview">
            <p>
              I&apos;m Dibbayajyoti Roy, and AI engineering is the half of my
              work that runs on models instead of CPUs: AWS Bedrock
              applications, RAG architecture, multi-model orchestration, and
              infrastructure that makes the web readable to AI agents. This page
              collects the AI systems I&apos;ve shipped and the patterns behind
              them.
            </p>
          </TitledParagraph>

          <TitledParagraph title="Learning Copilot — AWS Bedrock in production">
            <p>
              <Link
                href="https://ai-for-bharat.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold underline"
              >
                Learning Copilot
              </Link>{" "}
              is an AWS Bedrock-powered learning assistant. It uses multi-model
              fallback across Nova Pro and Nova Lite for resilience under rate
              limits, real-time streaming inference, structured level-adaptive
              explanations, and auto-generated D2 diagrams. The architecture is
              cost-aware — DynamoDB conversation memory with a 30-day TTL and
              per-mode token budgets. It placed top 500 in the AI for Bharat
              hackathon.
            </p>
          </TitledParagraph>

          <TitledParagraph title="AHTML — agentic web & RAG infrastructure">
            <p>
              <Link
                href="https://www.npmjs.com/org/ahtmljs"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold underline"
              >
                AHTML (Agentic HTML)
              </Link>{" "}
              is a shipped five-package npm scope for making web content cheaply
              consumable by AI agents. It defines a canonical semantic snapshot
              with RAG-ready document chunks, emits MCP, OpenAPI, JSON-LD, and
              llms.txt from a single pipeline, ships a typed agent client SDK,
              and includes a LangChain.js document loader that preserves
              citation anchors and byte ranges. See{" "}
              <Link href="/ahtml-vs-llms-txt" className="underline">
                AHTML vs llms.txt
              </Link>{" "}
              for how it compares.
            </p>
          </TitledParagraph>

          <TitledParagraph title="the AI stack">
            <p>
              AWS Bedrock (Nova Pro, Nova Lite), multi-model orchestration with
              graceful degradation, streaming inference, prompt engineering, and
              cost-aware design with per-mode token budgets. On the agent side:
              RAG architecture, the MCP protocol, LangChain.js loaders, and AI
              crawler optimization so sites stay visible to AI search.
            </p>
          </TitledParagraph>

          <TitledParagraph title="writing">
            <p>
              Long-form notes on AI engineering — including AWS Bedrock
              streaming patterns — are collected on the{" "}
              <Link href="/writing" className="font-semibold underline">
                writing page
              </Link>
              .
            </p>
          </TitledParagraph>

          <TitledParagraph title="faq">
            <ul className="flex flex-col gap-4">
              {faq.map((item) => (
                <li key={item.q} className="flex flex-col gap-1">
                  <h3 className="font-semibold">{item.q}</h3>
                  <p>{item.a}</p>
                </li>
              ))}
            </ul>
          </TitledParagraph>

          <TitledParagraph title="related">
            <p className="text-sm opacity-80">
              Keep reading:{" "}
              <Link href="/ahtml-vs-llms-txt" className="underline">
                AHTML vs llms.txt
              </Link>
              {" · "}
              <Link href="/nextjs-seo" className="underline">
                Next.js SEO
              </Link>
              {" · "}
              <Link href="/work" className="underline">
                projects &amp; experience
              </Link>
              {" · "}
              <Link href="/contact" className="underline">
                get in touch
              </Link>
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
