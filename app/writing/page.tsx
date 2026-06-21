import Link from "next/link";
import TitledParagraph from "@/components/titled-paragraph";
import articles from "@/lib/content/articles";

const baseUrl = process.env.VERCEL_PROJECT_PRODUCTION_URL
  ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
  : "https://dibbayajyoti.com";

const itemListJsonLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  "@id": `${baseUrl}/writing#articles`,
  name: "Articles by Dibbayajyoti Roy",
  itemListOrder: "https://schema.org/ItemListOrderDescending",
  numberOfItems: articles.length,
  itemListElement: articles.map((a, i) => ({
    "@type": "ListItem",
    position: i + 1,
    url: `${baseUrl}/writing/${a.slug}`,
    name: a.title,
  })),
};

export default function WritingPage() {
  return (
    <main className="flex my-[140px] sm:my-[200px] justify-end sm:justify-center">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListJsonLd) }}
      />
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
              performance work. Articles are published here; some are also
              syndicated to Medium.
            </p>
          </TitledParagraph>

          <TitledParagraph title="articles">
            <ol className="flex flex-col gap-7 list-none">
              {articles.map((article) => (
                <li key={article.slug} className="flex flex-col gap-2">
                  <h3 className="text-lg sm:text-xl font-semibold leading-snug">
                    <Link
                      href={`/writing/${article.slug}`}
                      className="underline underline-offset-4 hover:opacity-80"
                    >
                      {article.title}
                    </Link>
                  </h3>
                  <p className="text-sm opacity-60 font-mono">
                    {new Date(article.datePublished).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                    })}{" "}
                    · {article.readingTime}
                  </p>
                  <p className="text-base sm:text-lg leading-relaxed">
                    {article.excerpt}
                  </p>
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
              Upcoming: AWS Bedrock streaming patterns, Cloudflare Workers + Neon
              Postgres RLS for multi-tenant SaaS, and Rust workers-rs latency
              benchmarks against TypeScript handlers. Follow on{" "}
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
