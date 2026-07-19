import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ExternalLink } from "lucide-react";
import { getArticle, articleSlugs } from "@/lib/content/articles";

const baseUrl = process.env.VERCEL_PROJECT_PRODUCTION_URL
  ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
  : "https://dibbayajyoti.com";

// Per-article related project/topic link, rendered after the article body.
const relatedLinks: Record<string, { href: string; label: string }> = {
  "redis-polling-bottleneck": {
    href: "/distributed-systems",
    label: "Distributed systems",
  },
  "merged-into-pyrefly-and-reductstore": {
    href: "/open-source",
    label: "Open source work",
  },
  "nextjs-seo-2026": { href: "/nextjs-seo", label: "Next.js SEO" },
  "optimistic-ui-rfc-6902-react": {
    href: "/projects/diffcore",
    label: "diffcore",
  },
  "fresco-linux-live-wallpaper-engine": {
    href: "/projects/fresco",
    label: "Fresco",
  },
};

export function generateStaticParams() {
  return articleSlugs.map((slug) => ({ slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const article = getArticle(params.slug);
  if (!article) return {};
  const url = `${baseUrl}/writing/${article.slug}`;
  return {
    title: article.metaTitle,
    description: article.metaDescription,
    keywords: article.keywords,
    alternates: { canonical: `/writing/${article.slug}` },
    openGraph: {
      title: article.metaTitle,
      description: article.metaDescription,
      url,
      type: "article",
      publishedTime: article.datePublished,
      modifiedTime: article.dateModified ?? article.datePublished,
      authors: ["Dibbayajyoti Roy"],
      tags: article.tags,
    },
    twitter: {
      card: "summary_large_image",
      title: article.metaTitle,
      description: article.metaDescription,
    },
  };
}

export default function ArticlePage({ params }: { params: { slug: string } }) {
  const article = getArticle(params.slug);
  if (!article) notFound();
  const url = `${baseUrl}/writing/${article.slug}`;

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": article.schemaType,
    "@id": `${url}#article`,
    headline: article.title,
    name: article.metaTitle,
    description: article.metaDescription,
    url,
    mainEntityOfPage: url,
    datePublished: article.datePublished,
    dateModified: article.dateModified ?? article.datePublished,
    inLanguage: "en",
    keywords: article.keywords,
    author: { "@id": "https://dibbayajyoti.com/#person" },
    publisher: { "@id": "https://dibbayajyoti.com/#person" },
    isPartOf: { "@id": "https://dibbayajyoti.com/writing#collection" },
    ...(article.mediumUrl ? { sameAs: [article.mediumUrl] } : {}),
  };

  const faqJsonLd = article.faq
    ? {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: article.faq.map((f) => ({
          "@type": "Question",
          name: f.question,
          acceptedAnswer: { "@type": "Answer", text: f.answer },
        })),
      }
    : null;

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: baseUrl },
      { "@type": "ListItem", position: 2, name: "Writing", item: `${baseUrl}/writing` },
      { "@type": "ListItem", position: 3, name: article.title, item: url },
    ],
  };

  return (
    <main className="flex my-[140px] sm:my-[200px] justify-end sm:justify-center">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      {faqJsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />
      )}
      <article className="max-w-[626px] pl-9 pr-6 sm:pl-0 sm:pr-0 sm:px-10">
        <nav className="font-mono text-sm opacity-50 mb-4">
          <Link href="/writing" className="hover:opacity-100 transition-opacity">
            writing
          </Link>{" "}
          / {article.slug}
        </nav>

        <h1 className="flex items-baseline flex-wrap sm:gap-3 my-2 sm:my-4 text-3xl sm:text-[32px] font-semibold">
          <span className="sm:w-auto w-full">{article.title}</span>
          <span className="opacity-50 w-full sm:w-auto text-[18px] sm:text-[22px]">
            {article.subtitle}
          </span>
        </h1>

        <p className="text-sm opacity-60 font-mono mt-2">
          {new Date(article.datePublished).toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
          })}{" "}
          · {article.readingTime}
        </p>

        <ul className="flex flex-wrap gap-2 mt-3">
          {article.tags.map((tag) => (
            <li
              key={tag}
              className="text-xs font-mono px-2 py-0.5 rounded border border-blackout/20 dark:border-whiteout/30 opacity-70"
            >
              {tag}
            </li>
          ))}
        </ul>

        <div className="article-body mt-10 text-blackout/90 dark:text-whiteout/90">
          {article.body}
          {article.faq && (
            <>
              <h2>FAQ</h2>
              {article.faq.map((f) => (
                <div key={f.question}>
                  <h3>{f.question}</h3>
                  <p>{f.answer}</p>
                </div>
              ))}
            </>
          )}
        </div>

        {relatedLinks[article.slug] && (
          <p className="text-sm opacity-80 mt-10">
            Related:{" "}
            <Link href={relatedLinks[article.slug].href} className="underline">
              {relatedLinks[article.slug].label} →
            </Link>
          </p>
        )}

        {article.mediumUrl && (
          <p className="text-sm opacity-60 mt-12">
            A version of this article is also published on{" "}
            <Link
              href={article.mediumUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="underline inline-flex items-baseline gap-1"
            >
              Medium
              <ExternalLink className="w-3 h-3 shrink-0 translate-y-0.5" aria-hidden />
            </Link>
            .
          </p>
        )}

        <p className="text-base sm:text-lg my-10 sm:my-16">
          Written by{" "}
          <Link href="/about" className="underline">
            Dibbayajyoti Roy
          </Link>
          . More in{" "}
          <Link href="/writing" className="underline">
            writing
          </Link>{" "}
          or see{" "}
          <Link href="/work" className="underline">
            the projects
          </Link>
          .
        </p>
      </article>
    </main>
  );
}
