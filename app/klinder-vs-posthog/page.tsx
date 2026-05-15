import Link from "next/link";
import TitledParagraph from "@/components/titled-paragraph";

type Row = { feature: string; klinder: string; posthog: string };

const rows: Row[] = [
  { feature: "Scope", klinder: "Events + session recording + email triggers in one SDK", posthog: "Analytics + session replay + flags + experiments" },
  { feature: "Replaces", klinder: "PostHog + LogRocket + Customer.io", posthog: "Mixpanel / Amplitude / Hotjar" },
  { feature: "Install footprint", klinder: "Single npm install", posthog: "JS snippet + back-end API config" },
  { feature: "Event typing", klinder: "Zod-validated, typed at compile time", posthog: "Stringly-typed by default" },
  { feature: "Session recording trigger", klinder: "Error-based (only when something breaks)", posthog: "Sample-based (continuous)" },
  { feature: "Email workflows", klinder: "First-class — events → email triggers", posthog: "Not bundled — needs Customer.io / Loops" },
  { feature: "Ingestion runtime", klinder: "Cloudflare Workers + Queues (edge)", posthog: "Regional Cloud API or self-hosted ClickHouse" },
  { feature: "Storage", klinder: "Neon Postgres with Row-Level Security", posthog: "ClickHouse" },
  { feature: "Multi-tenant isolation", klinder: "RLS-enforced", posthog: "Project-level partitioning" },
  { feature: "Self-host complexity", klinder: "Single Worker + Postgres", posthog: "Helm chart, ClickHouse, Kafka, etc." },
  { feature: "Rust performance path", klinder: "workers-rs port, sub-10 ms p95 target", posthog: "N/A" },
  { feature: "License", klinder: "MIT", posthog: "MIT (OSS edition)" },
  { feature: "Best for", klinder: "Early-stage SaaS that wants one tool not three", posthog: "Teams needing full PA suite (funnels, flags, cohorts, experiments)" },
];

const faq = [
  {
    q: "What does Klinder-OSS replace that PostHog does not?",
    a: "Email automation. PostHog handles analytics and session replay; Customer.io / Loops handle behaviour-triggered email. Klinder collapses both into one SDK so the same event that fires a funnel also triggers the email.",
  },
  {
    q: "Is Klinder-OSS self-hostable?",
    a: "Yes — runs on Cloudflare Workers + Cloudflare Queues for ingestion, Neon Postgres (or any Postgres) for storage, with Hono as the API layer. MIT-licensed.",
  },
  {
    q: "How fast is ingestion?",
    a: "Edge ingestion on Cloudflare Workers. The in-progress Rust workers-rs port targets sub-10 ms p95 latency.",
  },
  {
    q: "Should I move off PostHog?",
    a: "No, if you need the full product-analytics suite. Yes, if you mostly need typed events + error-triggered session replay + lifecycle email and want to maintain one lightweight SDK instead of three vendors.",
  },
];

export default function KlinderVsPostHogPage() {
  return (
    <main className="flex my-[140px] sm:my-[200px] justify-end sm:justify-center">
      <section className="max-w-[626px] pl-9 pr-6 sm:pl-0 sm:pr-0 sm:px-10">
        <h2 className="font-mono uppercase text-sm font-semibold opacity-25">
          comparison · 2026
        </h2>
        <h1 className="flex items-baseline flex-wrap sm:gap-3 my-2 sm:my-4 text-3xl sm:text-[32px] font-semibold">
          <span className="sm:w-auto w-full">Klinder-OSS vs PostHog</span>
          <span className="opacity-50 w-full sm:w-auto text-[18px] sm:text-[22px]">
            three tools collapsed into one SDK
          </span>
        </h1>

        <div className="flex flex-col gap-6 sm:gap-8 mt-10 text-blackout/90 dark:text-whiteout/90">
          <TitledParagraph title="tldr">
            <p>
              <Link
                href="https://klinder-oss.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                className="underline font-semibold"
              >
                Klinder-OSS
              </Link>{" "}
              is one open-source SDK that unifies typed event tracking,
              error-based session recording, and behaviour-triggered email
              workflows — the work that normally needs PostHog + LogRocket
              + Customer.io stitched together.{" "}
              <Link
                href="https://posthog.com"
                target="_blank"
                rel="noopener noreferrer"
                className="underline"
              >
                PostHog
              </Link>{" "}
              is the full product-analytics suite (funnels, flags, cohorts,
              experiments) and remains the right call if you need that
              breadth.
            </p>
          </TitledParagraph>

          <TitledParagraph title="install">
            <pre className="text-sm bg-blackout/5 dark:bg-whiteout/5 rounded-md p-3 overflow-x-auto font-mono">
{`# coming soon to npm — currently demo at klinder-oss.vercel.app
npm install klinder`}
            </pre>
          </TitledParagraph>

          <TitledParagraph title="side by side">
            <div className="overflow-x-auto -mx-2 px-2">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="border-b border-blackout/30 dark:border-whiteout/30">
                    <th className="text-left py-2 pr-3 font-semibold">Feature</th>
                    <th className="text-left py-2 pr-3 font-semibold">Klinder-OSS</th>
                    <th className="text-left py-2 font-semibold">PostHog</th>
                  </tr>
                </thead>
                <tbody>
                  {rows.map((r) => (
                    <tr
                      key={r.feature}
                      className="border-b border-blackout/10 dark:border-whiteout/10 align-top"
                    >
                      <td className="py-2 pr-3 font-medium">{r.feature}</td>
                      <td className="py-2 pr-3">{r.klinder}</td>
                      <td className="py-2">{r.posthog}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </TitledParagraph>

          <TitledParagraph title="example">
            <pre className="text-sm bg-blackout/5 dark:bg-whiteout/5 rounded-md p-3 overflow-x-auto font-mono leading-relaxed">
{`import { klinder } from "klinder";

klinder.track("checkout_failed", {
  cartValue: 49.0,
  reason: "stripe_decline",
});
// Same call: typed event, session recording started on error,
// drip email workflow "abandoned-cart-recovery" enrolled.`}
            </pre>
          </TitledParagraph>

          <TitledParagraph title="when to pick what">
            <div className="flex flex-col gap-3">
              <p>
                <span className="font-semibold">Pick Klinder-OSS</span> if you
                are an early-stage SaaS that wants events, session replay on
                errors, and lifecycle email behind one typed SDK on edge
                infrastructure you control.
              </p>
              <p>
                <span className="font-semibold">Pick PostHog</span> if you need
                the full product-analytics suite — feature flags, A/B
                experiments, cohorts, surveys — and have a team to operate
                ClickHouse (or are happy on PostHog Cloud).
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

          <TitledParagraph title="try klinder">
            <div className="flex flex-col gap-3">
              <p>
                <Link
                  href="https://klinder-oss.vercel.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline font-semibold"
                >
                  Open the live demo →
                </Link>{" "}
                or read the project notes at{" "}
                <Link href="/work" className="underline font-semibold">
                  /work
                </Link>
                .
              </p>
              <p>
                Questions or want to integrate it?{" "}
                <Link href="/contact" className="underline">Get in touch</Link>.
              </p>
            </div>
          </TitledParagraph>

          <TitledParagraph title="related">
            <p className="text-sm opacity-80">
              Other comparisons:{" "}
              <Link href="/diffcore-vs-jsondiffpatch" className="underline">Diffcore vs jsondiffpatch</Link>
              {" · "}
              <Link href="/ahtml-vs-llms-txt" className="underline">AHTML vs llms.txt</Link>
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
