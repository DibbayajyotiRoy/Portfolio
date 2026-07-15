import Link from "next/link";
import TitledParagraph from "@/components/titled-paragraph";
import Reveal from "@/components/reveal";
import ChapterClose from "@/components/chapter-close";
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
        <Reveal>
          <h1 className="flex items-baseline flex-wrap sm:gap-3 my-2 sm:my-4 text-3xl sm:text-[32px] font-semibold">
            <span className="sm:w-auto w-full">Writing</span>
            <span className="opacity-50 w-full sm:w-auto text-[18px] sm:text-[22px]">
              Rust, Next.js &amp; AI engineering
            </span>
          </h1>
        </Reveal>

        <div className="flex flex-col gap-6 sm:gap-8 mt-10 text-blackout/90 dark:text-whiteout/90">
          <Reveal delay={0.05}>
            <TitledParagraph title="intro">
              <p>
                Notes from production incidents,{" "}
                <Link href="/rust" className="underline">
                  Rust
                </Link>{" "}
                + WASM performance work,{" "}
                <Link href="/nextjs-seo" className="underline">
                  Next.js SEO
                </Link>
                , and AI engineering.
              </p>
            </TitledParagraph>
          </Reveal>

          <TitledParagraph title="articles">
            <ol className="flex flex-col gap-7 list-none">
              {articles.map((article, i) => (
                <li key={article.slug}>
                  <Reveal
                    delay={0.1 + i * 0.05}
                    className="flex flex-col gap-1.5"
                  >
                    <h3
                      className={
                        i === 0
                          ? "text-xl sm:text-2xl font-semibold leading-snug"
                          : "text-lg sm:text-xl font-semibold leading-snug"
                      }
                    >
                      <Link
                        href={`/writing/${article.slug}`}
                        className="underline underline-offset-4 hover:opacity-80"
                      >
                        {article.title}
                      </Link>
                    </h3>
                    <p className="text-base leading-relaxed">
                      {article.excerpt}
                    </p>
                    <p className="text-sm opacity-60 font-mono">
                      {new Date(article.datePublished).toLocaleDateString(
                        "en-US",
                        {
                          year: "numeric",
                          month: "long",
                        }
                      )}{" "}
                      · {article.readingTime}
                      <span className="opacity-50">
                        {" "}
                        · {article.tags.join(", ")}
                      </span>
                    </p>
                  </Reveal>
                </li>
              ))}
            </ol>
          </TitledParagraph>

          <Reveal delay={0.1}>
            <TitledParagraph title="more soon">
              <p>
                Upcoming: AWS Bedrock streaming patterns, Cloudflare Workers +
                Neon Postgres RLS, and Rust workers-rs latency benchmarks.
                Follow on{" "}
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
          </Reveal>
        </div>

        <Reveal delay={0.1}>
          <ChapterClose line="Want to talk through any of these topics? My calendar is open." />
        </Reveal>
      </section>
    </main>
  );
}
