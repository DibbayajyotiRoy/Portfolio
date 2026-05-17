import Link from "next/link";
import TitledParagraph from "@/components/titled-paragraph";
import { ExternalLink } from "lucide-react";

type Article = {
  title: string;
  url: string;
  date: string;
  readingTime: string;
  excerpt: string;
  tags: string[];
};

const articles: Article[] = [
  {
    title: "Next.js SEO in 2026: A Developer's Practical Guide",
    url: "https://medium.com/@dibbayajyoti/next-js-seo-in-2026-a-developers-practical-guide-63449d44be22",
    date: "March 2026",
    readingTime: "9 min read",
    excerpt:
      "The Next.js Metadata API, structured data (JSON-LD), llms.txt for AI crawlers, Core Web Vitals, sitemap optimization, and what actually moves the needle for Next.js SEO in 2026.",
    tags: ["Next.js SEO", "Metadata API", "JSON-LD", "llms.txt", "Core Web Vitals"],
  },
  {
    title: "How I Fixed a Redis Polling Bottleneck That Was Timing Out in Production",
    url: "https://medium.com/p/afae306668ba",
    date: "February 2026",
    readingTime: "6 min read",
    excerpt:
      "A Redis polling bottleneck in a Node.js service: a naive SCAN over a remote Redis timed out at 100 seconds in production. Switched to batched MGET with client-side filtering for a ~90% efficiency improvement and zero timeouts.",
    tags: ["Redis", "Distributed Systems", "Performance", "Debugging", "Node.js"],
  },
];

export default function WritingPage() {
  return (
    <main className="flex my-[140px] sm:my-[200px] justify-end sm:justify-center">
      <section className="max-w-[626px] pl-9 pr-6 sm:pl-0 sm:pr-0 sm:px-10">
        <h2 className="font-mono uppercase text-sm font-semibold opacity-25">
          archive
        </h2>
        <h1 className="flex items-baseline flex-wrap sm:gap-3 my-2 sm:my-4 text-3xl sm:text-[32px] font-semibold">
          <span className="sm:w-auto w-full">Writing</span>
          <span className="opacity-50 w-full sm:w-auto text-[18px] sm:text-[22px]">
            Rust, Next.js &amp; AI engineering
          </span>
        </h1>

        <div className="flex flex-col gap-6 sm:gap-8 mt-10 text-blackout/90 dark:text-whiteout/90">
          <TitledParagraph title="intro">
            <p>
              Long-form notes on production incidents,{" "}
              <Link href="/distributed-systems" className="underline">
                distributed systems
              </Link>{" "}
              debugging,{" "}
              <Link href="/ai-engineering" className="underline">
                AI engineering
              </Link>{" "}
              with AWS Bedrock, modern{" "}
              <Link href="/nextjs-seo" className="underline">
                Next.js SEO
              </Link>
              , and{" "}
              <Link href="/rust" className="underline">
                Rust
              </Link>{" "}
              +{" "}
              <Link href="/webassembly" className="underline">
                WebAssembly
              </Link>{" "}
              performance work. Articles currently published on Medium;
              canonical links below.
            </p>
          </TitledParagraph>

          <TitledParagraph title="articles">
            <ol className="flex flex-col gap-7 list-none">
              {articles.map((article) => (
                <li key={article.url} className="flex flex-col gap-2">
                  <h3 className="text-lg sm:text-xl font-semibold leading-snug">
                    <Link
                      href={article.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline underline-offset-4 inline-flex items-baseline gap-1.5 hover:opacity-80"
                    >
                      {article.title}
                      <ExternalLink className="w-3.5 h-3.5 shrink-0 translate-y-0.5" aria-hidden />
                    </Link>
                  </h3>
                  <p className="text-sm opacity-60 font-mono">
                    {article.date} · {article.readingTime}
                  </p>
                  <p className="text-base sm:text-lg leading-relaxed">{article.excerpt}</p>
                  <ul className="flex flex-wrap gap-2 mt-1">
                    {article.tags.map((tag) => (
                      <li
                        key={tag}
                        className="text-xs font-mono px-2 py-0.5 rounded border border-blackout/20 dark:border-whiteout/30 opacity-70"
                      >
                        {tag}
                      </li>
                    ))}
                  </ul>
                </li>
              ))}
            </ol>
          </TitledParagraph>

          <TitledParagraph title="more soon">
            <p>
              Upcoming: AWS Bedrock streaming patterns, Cloudflare Workers + Neon Postgres
              RLS for multi-tenant SaaS, and Rust workers-rs latency benchmarks against
              TypeScript handlers. Follow on{" "}
              <Link
                href="https://x.com/dibbayajyoti"
                target="_blank"
                rel="noopener noreferrer"
                className="underline font-semibold"
              >
                X
              </Link>{" "}
              or{" "}
              <Link
                href="https://medium.com/@dibbayajyoti"
                target="_blank"
                rel="noopener noreferrer"
                className="underline font-semibold"
              >
                Medium
              </Link>{" "}
              to get them when they ship.
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
