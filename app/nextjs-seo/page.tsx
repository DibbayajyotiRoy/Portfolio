import Link from "next/link";
import TitledParagraph from "@/components/titled-paragraph";
import Reveal from "@/components/reveal";
import ChapterClose from "@/components/chapter-close";

type FaqItem = { q: string; a: string };

const faq: FaqItem[] = [
  {
    q: "What does Next.js SEO involve in 2026?",
    a: "The Next.js Metadata API for titles and canonicals, JSON-LD structured data, a generated sitemap and robots file, llms.txt for AI crawlers, and healthy Core Web Vitals. Together they tell both Google and AI search engines what a site is about.",
  },
  {
    q: "How does this site implement structured data?",
    a: "Every route emits JSON-LD (Person, WebSite, and FAQPage on the homepage, plus AboutPage, ProfilePage, CollectionPage, SoftwareApplication, and TechArticle schema on the relevant pages), all cross-referenced by stable @id so the entity graph stays consistent.",
  },
  {
    q: "What is llms.txt and does this site use it?",
    a: "llms.txt is a plain-text summary of a site written for AI crawlers and LLMs. This site serves both /llms.txt and an extended /llms-full.txt, linked from the document head.",
  },
  {
    q: "Why move long-form articles off Medium?",
    a: "Articles hosted on a third party send ranking signals to that domain. Publishing canonical content on your own Next.js site builds topical authority where it compounds for you.",
  },
];

export default function NextjsSeoPage() {
  return (
    <main className="flex my-[140px] sm:my-[200px] justify-end sm:justify-center">
      <section className="max-w-[626px] pl-9 pr-6 sm:pl-0 sm:pr-0 sm:px-10">
        <h2 className="font-mono uppercase text-sm font-semibold opacity-25">
          topic
        </h2>
        <h1 className="flex items-baseline flex-wrap sm:gap-3 my-2 sm:my-4 text-3xl sm:text-[32px] font-semibold">
          <span className="sm:w-auto w-full">Next.js SEO</span>
          <span className="opacity-50 w-full sm:w-auto text-[18px] sm:text-[22px]">
            structured data, llms.txt &amp; Core Web Vitals
          </span>
        </h1>

        <div className="flex flex-col gap-6 sm:gap-8 mt-10 text-blackout/90 dark:text-whiteout/90">
          <Reveal>
            <TitledParagraph title="overview">
              <p>
                I&apos;m Dibbayajyoti Roy, a Next.js engineer who treats SEO as
                an engineering problem, not an afterthought. Modern Next.js SEO is
                the Next.js Metadata API, JSON-LD structured data, sitemap and
                robots generation, llms.txt for AI crawlers, and Core Web Vitals.
                This site is the working example of all of it.
              </p>
            </TitledParagraph>
          </Reveal>

          <Reveal>
            <TitledParagraph title="what I implement">
              <p>
                The Next.js Metadata API for per-route titles, descriptions, and
                canonical URLs; JSON-LD structured data for every page type;
                programmatic <span className="font-mono text-sm">sitemap.ts</span>{" "}
                and <span className="font-mono text-sm">robots.ts</span>; llms.txt
                and llms-full.txt for AI search; Open Graph and Twitter cards; and
                Core Web Vitals work: bundle splitting, image optimization, and
                eliminating render-blocking cost.
              </p>
            </TitledParagraph>
          </Reveal>

          <Reveal>
            <TitledParagraph title="this site as a case study">
              <p>
                This portfolio is built with the Next.js App Router and ships a
                cross-referenced JSON-LD entity graph: a Person node, a WebSite
                node, FAQPage markup, and CollectionPage, ProfilePage,
                SoftwareApplication, and TechArticle schema on the pages that
                warrant it, all linked by stable{" "}
                <span className="font-mono text-sm">@id</span> so search engines
                and AI agents resolve one consistent entity. The topic pages you
                are reading, including this one, are themselves the structural
                SEO fix: clear silos for{" "}
                <Link href="/rust" className="underline">
                  Rust
                </Link>
                ,{" "}
                <Link href="/webassembly" className="underline">
                  WebAssembly
                </Link>
                ,{" "}
                <Link href="/ai-engineering" className="underline">
                  AI engineering
                </Link>
                , and{" "}
                <Link href="/distributed-systems" className="underline">
                  distributed systems
                </Link>
                .
              </p>
            </TitledParagraph>
          </Reveal>

          <Reveal>
            <TitledParagraph title="writing">
              <p>
                The full practical guide{" "}(
                <span className="italic">Next.js SEO in 2026</span>, covering the
                Metadata API, JSON-LD, llms.txt, sitemap optimization, and Core
                Web Vitals) is linked from the{" "}
                <Link href="/writing" className="font-semibold underline">
                  writing page
                </Link>
                .
              </p>
            </TitledParagraph>
          </Reveal>

          <Reveal>
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
          </Reveal>

          <Reveal>
            <TitledParagraph title="related">
              <p className="text-sm opacity-80">
                Keep reading:{" "}
                <Link href="/ai-engineering" className="underline">
                  AI engineering
                </Link>
                {" · "}
                <Link href="/ahtml-vs-llms-txt" className="underline">
                  AHTML vs llms.txt
                </Link>
                {" · "}
                <Link href="/writing" className="underline">
                  engineering writing
                </Link>
              </p>
            </TitledParagraph>
          </Reveal>
        </div>

        <Reveal>
          <ChapterClose line="Want your Next.js site to rank and load fast? Let's talk." />
        </Reveal>
      </section>
    </main>
  );
}
