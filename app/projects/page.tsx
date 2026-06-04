import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { coreProducts } from "@/lib/content/projects";
import { hubs } from "@/lib/content/hubs";
import { getAccent } from "@/lib/content/brand";

const baseUrl = process.env.VERCEL_PROJECT_PRODUCTION_URL
  ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
  : "https://dibbayajyoti.com";

export const metadata: Metadata = {
  title: "Projects — Dibbayajyoti Roy | whatbroke, AHTML, Roy UI, Klinder, Diffcore",
  description:
    "Open-source products built by Dibbayajyoti Roy: whatbroke (git-anchored crash capture over MCP), AHTML (the agent-web contract layer), Roy UI (zero-config React components), Klinder-OSS (unified analytics SDK), and Diffcore (Rust/WASM JSON diff).",
  alternates: { canonical: "/projects" },
  openGraph: {
    title: "Projects — Dibbayajyoti Roy",
    description:
      "Open-source products: whatbroke, AHTML, Roy UI, Klinder-OSS, and Diffcore.",
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
  name: "Projects — Dibbayajyoti Roy",
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
          projects · 2026
        </h2>
        <h1 className="flex items-baseline flex-wrap sm:gap-3 my-2 sm:my-4 text-3xl sm:text-[32px] font-semibold">
          <span className="sm:w-auto w-full">Projects</span>
          <span className="opacity-50 w-full sm:w-auto text-[18px] sm:text-[22px]">
            things I built and ship
          </span>
        </h1>

        <ul className="flex flex-col gap-8 mt-12">
          {coreProducts.map((p) => {
            const accent = getAccent(p.id);
            const hub = hubs[p.id];
            return (
              <li key={p.id}>
                <Link
                  href={`/projects/${p.id}`}
                  className="group block border-l-2 pl-5 transition-opacity"
                  style={{ borderColor: accent.accent }}
                >
                  <h3 className="text-xl font-semibold flex items-center gap-3 flex-wrap">
                    <Image
                      src={`/logos/${p.id}.svg`}
                      alt=""
                      width={26}
                      height={26}
                      className="rounded-md"
                    />
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
                  <span className="mt-2 inline-block text-sm underline opacity-70 group-hover:opacity-100">
                    Read about {p.name} →
                  </span>
                </Link>
              </li>
            );
          })}
        </ul>

        <p className="text-sm opacity-70 mt-14">
          Want the narrative version with the full résumé context? See{" "}
          <Link href="/work" className="underline">
            /work
          </Link>
          , or read{" "}
          <Link href="/about" className="underline">
            about the maker
          </Link>
          .
        </p>
      </section>
    </main>
  );
}
