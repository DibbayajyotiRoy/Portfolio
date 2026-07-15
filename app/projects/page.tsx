import type { Metadata } from "next";
import Link from "next/link";
import { coreProducts } from "@/lib/content/projects";
import { hubs } from "@/lib/content/hubs";
import { getAccent } from "@/lib/content/brand";
import Reveal from "@/components/reveal";
import StatLine from "@/components/stat-line";
import { DitherAvatar } from "@/components/dither-kit/avatar";
import WhatbrokeBenchmark from "@/components/whatbroke-benchmark";
import ChapterClose from "@/components/chapter-close";

const baseUrl = process.env.VERCEL_PROJECT_PRODUCTION_URL
  ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
  : "https://dibbayajyoti.com";

export const metadata: Metadata = {
  title: "Projects: Dibbayajyoti Roy | whatbroke, AHTML, Roy UI, Klinder, Diffcore, Fresco",
  description:
    "Open-source products built by Dibbayajyoti Roy: whatbroke (git-anchored crash capture over MCP), AHTML (the agent-web contract layer), Roy UI (zero-config React components), Klinder-OSS (unified analytics SDK), Diffcore (Rust/WASM JSON diff), and Fresco (live wallpapers for Linux).",
  alternates: { canonical: "/projects" },
  openGraph: {
    title: "Projects: Dibbayajyoti Roy",
    description:
      "Open-source products: whatbroke, AHTML, Roy UI, Klinder-OSS, Diffcore, and Fresco.",
    url: `${baseUrl}/projects`,
    type: "website",
  },
};

const itemListJsonLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  "@id": `${baseUrl}/projects#list`,
  name: "Projects by Dibbayajyoti Roy",
  itemListOrder: "https://schema.org/ItemListOrderAscending",
  numberOfItems: coreProducts.length,
  itemListElement: coreProducts.map((p, i) => ({
    "@type": "ListItem",
    position: i + 1,
    name: p.name,
    url: `${baseUrl}/projects/${p.id}`,
  })),
};

const collectionJsonLd = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  "@id": `${baseUrl}/projects#collection`,
  name: "Projects: Dibbayajyoti Roy",
  url: `${baseUrl}/projects`,
  description: metadata.description,
  mainEntity: { "@id": "https://dibbayajyoti.com/#person" },
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: baseUrl },
      { "@type": "ListItem", position: 2, name: "Projects", item: `${baseUrl}/projects` },
    ],
  },
  inLanguage: "en-US",
};

// Per-project story layer: a short hook and, where a real number exists in
// lib/content, one hero metric. No number in the content files → no StatLine.
const stories: Record<
  string,
  {
    hook: string;
    stat?: { value: string; context: string };
  }
> = {
  "klinder-oss": {
    hook: "Every project needed three vendor SDKs just to see what users do.",
  },
  ahtml: {
    hook: "AI agents read websites slowly and expensively. Sites needed a contract, not a scrape.",
    stat: {
      value: "4.5-7.3×",
      context: "fewer tokens than raw HTML, measured with real tokenizers",
    },
  },
  diffcore: {
    hook: "The popular JSON diff libraries were slow or unmaintained. So the engine is Rust.",
    stat: {
      value: "2.3-3.0×",
      context: "faster than fast-json-patch in head-to-head benchmarks",
    },
  },
  whatbroke: {
    hook: "A crash dies in the terminal and its context dies with it.",
  },
  "roy-ui": {
    hook: "Every dashboard started with re-wiring the same table. Once was enough.",
    stat: {
      value: "sub-12 KB",
      context: "tree-shakable ESM, zero config, RSC-safe",
    },
  },
  fresco: {
    hook: "Windows and macOS have live wallpapers. Linux deserved a real desktop app too.",
    stat: {
      value: "100+",
      context: "people running Fresco on Linux right now",
    },
  },
};

export default function ProjectsIndexPage() {
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
          projects
        </h2>
        <h1 className="flex items-baseline flex-wrap sm:gap-3 my-2 sm:my-4 text-3xl sm:text-[32px] font-semibold">
          <span className="sm:w-auto w-full">Projects</span>
          <span className="opacity-50 w-full sm:w-auto text-[18px] sm:text-[22px]">
            things I built and ship
          </span>
        </h1>

        <ul className="flex flex-col gap-12 mt-12">
          {coreProducts.map((p, i) => {
            const accent = getAccent(p.id);
            const hub = hubs[p.id];
            const story = stories[p.id];
            return (
              <li key={p.id}>
                <Reveal delay={i * 0.05}>
                  <Link
                    href={`/projects/${p.id}`}
                    className="group block border-l-2 pl-5 py-1 -my-1 rounded-r-md transition-colors duration-200"
                    style={
                      {
                        borderColor: accent.accent,
                        "--accent": accent.accent,
                      } as React.CSSProperties
                    }
                  >
                    <div className="transition-colors duration-200 group-hover:bg-[color-mix(in_srgb,var(--accent)_6%,transparent)] -ml-5 pl-5 pr-4 py-3 -my-3 rounded-r-md">
                      {story ? (
                        <p
                          className="font-mono text-xs uppercase tracking-wide mb-2"
                          style={{ color: accent.accent }}
                        >
                          {story.hook}
                        </p>
                      ) : null}
                      <h3 className="text-xl font-semibold flex items-center gap-3 flex-wrap">
                        <DitherAvatar name={p.id} size={28} className="rounded-md overflow-hidden shrink-0" />
                        {p.name}
                        <span className="text-sm font-normal opacity-50">
                          {p.tagline}
                        </span>
                      </h3>
                      <p className="mt-2 text-base opacity-80">
                        {hub ? hub.subtitle : p.tagline}.{" "}
                        {p.version ? (
                          <span className="font-mono text-sm opacity-60">
                            v{p.version}
                          </span>
                        ) : null}
                      </p>
                      {story?.stat ? (
                        <div className="mt-4">
                          <StatLine
                            value={story.stat.value}
                            context={story.stat.context}
                            accent={accent.accent}
                          />
                        </div>
                      ) : null}
                      {p.id === "whatbroke" ? (
                        <div className="mt-5">
                          <WhatbrokeBenchmark />
                        </div>
                      ) : null}
                      {/* TODO: real screenshot of {p.name} demo */}
                      <span className="mt-3 inline-block text-sm underline opacity-70 group-hover:opacity-100 transition-opacity">
                        Read about {p.name} →
                      </span>
                    </div>
                  </Link>
                </Reveal>
              </li>
            );
          })}
        </ul>

        <p className="text-sm opacity-70 mt-14">
          More context lives on{" "}
          <Link href="/work" className="underline">
            /work
          </Link>
          ,{" "}
          <Link href="/about" className="underline">
            about the maker
          </Link>
          , and{" "}
          <Link href="/open-source" className="underline">
            contributions to other projects
          </Link>
          .
        </p>

        <ChapterClose line="Like what I build? Let's talk about what you're building." />
      </section>
    </main>
  );
}
