import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import TitledParagraph from "@/components/titled-paragraph";
import NpmStats from "@/components/npm-stats";
import { projects, getProject, type Project } from "@/lib/content/projects";
import { hubs } from "@/lib/content/hubs";
import { getAccent } from "@/lib/content/brand";

const baseUrl = process.env.VERCEL_PROJECT_PRODUCTION_URL
  ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
  : "https://dibbayajyoti.com";

export function generateStaticParams() {
  return Object.keys(hubs).map((slug) => ({ slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const hub = hubs[params.slug];
  if (!hub) return {};
  const url = `${baseUrl}/projects/${params.slug}`;
  return {
    title: hub.metaTitle,
    description: hub.metaDescription,
    keywords: getProject(params.slug).keywords,
    alternates: { canonical: `/projects/${params.slug}` },
    openGraph: {
      title: hub.metaTitle,
      description: hub.metaDescription,
      url,
      type: "website",
    },
    twitter: {
      title: hub.metaTitle,
      description: hub.metaDescription,
      card: "summary_large_image",
    },
  };
}

const externalLinks = (p: Project) => {
  const out: { label: string; href: string }[] = [];
  if (p.links.demo) out.push({ label: "Live site / docs →", href: p.links.demo });
  if (p.links.npm) out.push({ label: "npm →", href: p.links.npm });
  if (p.links.npmOrg) out.push({ label: "npm scope →", href: p.links.npmOrg });
  if (p.links.github) out.push({ label: "GitHub →", href: p.links.github });
  return out;
};

export default function ProjectHubPage({
  params,
}: {
  params: { slug: string };
}) {
  const hub = hubs[params.slug];
  if (!hub) notFound();
  const project = getProject(params.slug);
  const accent = getAccent(params.slug);
  const url = `${baseUrl}/projects/${params.slug}`;

  const softwareJsonLd: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": hub.jsonLdType,
    "@id": `${url}#software`,
    name: project.name,
    url,
    description: project.seoDescription,
    sameAs: Object.values(project.links).filter(Boolean),
    author: { "@id": "https://dibbayajyoti.com/#person" },
    creator: { "@id": "https://dibbayajyoti.com/#person" },
    keywords: project.keywords,
    inLanguage: "en",
  };
  if (project.version) softwareJsonLd.softwareVersion = project.version;
  if (hub.applicationCategory)
    softwareJsonLd.applicationCategory = hub.applicationCategory;
  if (hub.operatingSystem) softwareJsonLd.operatingSystem = hub.operatingSystem;
  if (hub.programmingLanguage)
    softwareJsonLd.programmingLanguage = hub.programmingLanguage;

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: baseUrl },
      { "@type": "ListItem", position: 2, name: "Projects", item: `${baseUrl}/projects` },
      { "@type": "ListItem", position: 3, name: project.name, item: url },
    ],
  };

  const otherProducts = projects.filter(
    (p) => p.tier === "product" && p.id !== project.id
  );

  return (
    <main className="flex my-[140px] sm:my-[200px] justify-end sm:justify-center">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <section className="max-w-[626px] pl-9 pr-6 sm:pl-0 sm:pr-0 sm:px-10">
        <nav className="font-mono text-sm opacity-50 mb-4">
          <Link href="/projects" className="hover:opacity-100 transition-opacity">
            projects
          </Link>{" "}
          / {project.id}
        </nav>

        <div className="flex items-center gap-3 mb-3">
          <Image
            src={`/logos/${project.id}.svg`}
            alt={`${project.name} logo`}
            width={40}
            height={40}
            className="rounded-[9px]"
          />
          <h2
            className="font-mono uppercase text-sm font-semibold"
            style={{ color: accent.accent }}
          >
            {hub.kicker}
          </h2>
        </div>
        <h1 className="flex items-baseline flex-wrap sm:gap-3 my-2 sm:my-4 text-3xl sm:text-[32px] font-semibold">
          <span className="sm:w-auto w-full">{project.name}</span>
          <span className="opacity-50 w-full sm:w-auto text-[18px] sm:text-[22px]">
            {hub.subtitle}
          </span>
        </h1>

        <div className="flex flex-col gap-6 sm:gap-8 mt-10 text-blackout/90 dark:text-whiteout/90">
          {hub.sections.map((s) => (
            <TitledParagraph key={s.title} title={s.title}>
              {s.body}
            </TitledParagraph>
          ))}

          {project.npmPackages && project.npmPackages.length > 0 && (
            <TitledParagraph title="npm">
              <NpmStats packages={project.npmPackages} />
            </TitledParagraph>
          )}

          <TitledParagraph title="get it">
            <p className="flex flex-wrap gap-x-4 gap-y-1">
              {externalLinks(project).map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline font-medium"
                >
                  {l.label}
                </Link>
              ))}
            </p>
          </TitledParagraph>

          <TitledParagraph title="related">
            <p className="text-sm opacity-80">
              {project.comparison && (
                <>
                  <Link href={project.comparison.slug} className="underline">
                    {project.comparison.label}
                  </Link>
                  {" · "}
                </>
              )}
              Other projects:{" "}
              {otherProducts.map((p, i) => (
                <span key={p.id}>
                  <Link href={`/projects/${p.id}`} className="underline">
                    {p.name}
                  </Link>
                  {i < otherProducts.length - 1 ? " · " : ""}
                </span>
              ))}
              {" · "}
              <Link href="/work" className="underline">
                all work
              </Link>
              {" · "}
              <Link href="/about" className="underline">
                about the maker
              </Link>
            </p>
          </TitledParagraph>
        </div>

        <p className="text-base sm:text-lg my-10 sm:my-20">
          Built by{" "}
          <Link href="/about" className="underline">
            Dibbayajyoti Roy
          </Link>
          . Questions or want to use it?{" "}
          <Link href="/contact" className="underline">
            Get in touch
          </Link>
          .
        </p>
      </section>
    </main>
  );
}
