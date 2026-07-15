import type { Metadata } from "next";
import Link from "next/link";
import TitledParagraph from "@/components/titled-paragraph";
import Reveal from "@/components/reveal";
import ChapterClose from "@/components/chapter-close";
import { contributions } from "@/lib/content/contributions";

const baseUrl = process.env.VERCEL_PROJECT_PRODUCTION_URL
  ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
  : "https://dibbayajyoti.com";

export const metadata: Metadata = {
  title:
    "Open Source Contributions by Dibbayajyoti Roy | ReductStore & Meta's Pyrefly",
  description:
    "Open-source contributions by Dibbayajyoti Roy: eight merged pull requests across two production Rust projects: seven to ReductStore (a time-series database for robotics & industrial IoT), spanning replication audit events (#1417, shipped in v1.20, endorsed by the co-founder), usage statistics (#1431), per-bucket usage metrics (#1474), system-log capture (#1481), a unified $system event sink (#1496), pipelined replication batch sending (#1527), and replication payload compression (#1538), plus a false-positive diagnostic fix merged into Meta's Pyrefly type checker (#3840).",
  alternates: { canonical: "/open-source" },
  openGraph: {
    title: "Open Source Contributions by Dibbayajyoti Roy",
    description:
      "Merged upstream work with receipts: seven ReductStore PRs across its observability and replication layers (replication audit events, usage statistics, per-bucket metrics, system-log capture, a unified $system event sink, pipelined batch sending, payload compression, with one endorsed by the maintainer) plus a diagnostic fix merged into Meta's Pyrefly type checker.",
    url: `${baseUrl}/open-source`,
    type: "website",
  },
};

const itemListJsonLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  "@id": `${baseUrl}/open-source#list`,
  name: "Open-source contributions by Dibbayajyoti Roy",
  itemListOrder: "https://schema.org/ItemListOrderAscending",
  numberOfItems: contributions.length,
  itemListElement: contributions.map((c, i) => ({
    "@type": "ListItem",
    position: i + 1,
    name: `${c.project}: ${c.prTitle} (PR #${c.prNumber})`,
    url: c.prUrl,
  })),
};

const collectionJsonLd = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  "@id": `${baseUrl}/open-source#collection`,
  name: "Open Source Contributions by Dibbayajyoti Roy",
  url: `${baseUrl}/open-source`,
  description: metadata.description,
  mainEntity: { "@id": "https://dibbayajyoti.com/#person" },
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: baseUrl },
      {
        "@type": "ListItem",
        position: 2,
        name: "Open Source",
        item: `${baseUrl}/open-source`,
      },
    ],
  },
  inLanguage: "en-US",
};

export default function OpenSourcePage() {
  return (
    <main className="flex my-[140px] sm:my-[200px] justify-end sm:justify-center">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionJsonLd) }}
      />
      <section className="max-w-[626px] pl-9 pr-6 sm:pl-0 sm:pr-0 sm:px-10">
        <h2 className="font-mono uppercase text-sm font-semibold opacity-25">
          open source · 2026
        </h2>
        <h1 className="flex items-baseline flex-wrap sm:gap-3 my-2 sm:my-4 text-3xl sm:text-[32px] font-semibold">
          <span className="sm:w-auto w-full">Open Source</span>
          <span className="opacity-50 w-full sm:w-auto text-[18px] sm:text-[22px]">
            merged upstream work, with receipts
          </span>
        </h1>

        <div className="flex flex-col gap-6 sm:gap-8 mt-10 text-blackout/90 dark:text-whiteout/90">
          {contributions.map((c) => (
            <Reveal key={c.id}>
            <article className="flex flex-col gap-6 sm:gap-8">
              <TitledParagraph title="contribution">
                <div className="flex flex-col gap-2">
                  <h3 className="text-xl font-semibold flex items-baseline gap-3 flex-wrap">
                    {c.project}
                    <span className="text-sm font-normal opacity-50">
                      {c.projectBlurb}
                    </span>
                  </h3>
                  <p>
                    <span className="font-mono text-sm">PR #{c.prNumber}</span>{" "}
                    <span className="font-semibold">{c.prTitle}</span>:{" "}
                    {c.summary}. Reviewed and merged by the maintainer
                    {c.shippedIn
                      ? `, shipping in ${c.project} ${c.shippedIn}.`
                      : ", shipping in an upcoming release."}
                  </p>
                  <p className="text-sm flex flex-wrap gap-x-4 gap-y-1">
                    <Link
                      href={c.prUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-semibold underline"
                    >
                      Read the PR on GitHub →
                    </Link>
                    <Link
                      href={c.repoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline"
                    >
                      {c.project} repo →
                    </Link>
                  </p>
                </div>
              </TitledParagraph>

              {c.endorsement && (
                <TitledParagraph title="from the maintainer">
                  <figure className="border-l-2 border-blackout/30 dark:border-whiteout/30 pl-5 flex flex-col gap-3">
                    <blockquote className="flex flex-col gap-3 italic">
                      {c.endorsement.quote.map((line) => (
                        <p key={line}>&ldquo;{line}&rdquo;</p>
                      ))}
                    </blockquote>
                    <figcaption className="text-sm opacity-70 not-italic">
                      - {c.endorsement.author}, {c.endorsement.authorTitle} ·{" "}
                      <Link
                        href={c.endorsement.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="underline"
                      >
                        on LinkedIn →
                      </Link>
                    </figcaption>
                  </figure>
                </TitledParagraph>
              )}
            </article>
            </Reveal>
          ))}
        </div>

        <Reveal>
        <p className="text-sm opacity-70 mt-14">
          These contributions sit alongside the things I build and ship myself.
          See{" "}
          <Link href="/projects" className="underline">
            /projects
          </Link>
          , the Rust work on{" "}
          <Link href="/rust" className="underline">
            /rust
          </Link>
          , or the full résumé on{" "}
          <Link href="/work" className="underline">
            /work
          </Link>
          .
        </p>
        </Reveal>

        <Reveal>
          <ChapterClose line="Maintain a Rust project and want a contributor? Let's talk." />
        </Reveal>
      </section>
    </main>
  );
}
