/**
 * AHTML (Agentic HTML) snapshot source for this site.
 *
 * One buildSnapshot() models every agent-facing route; @ahtmljs/next emits the
 * per-page snapshot, the /.well-known discovery manifest, an MCP tool manifest,
 * and an OpenAPI 3.1 spec from it. Dogfooding the @ahtmljs scope on the
 * portfolio that ships it: agents read typed entities and actions instead of
 * scraping HTML. Everything here derives from lib/content (no restated facts).
 */
import { snapshot, type Snapshot } from "@ahtmljs/schema";
import type { AHTMLConfig } from "@ahtmljs/next";
import { profile } from "@/lib/content/profile";
import { coreProducts, type Project } from "@/lib/content/projects";
import articles from "@/lib/content/articles";

const SITE = "https://dibbayajyoti.com";

export const AHTML_CONFIG: AHTMLConfig = {
  site: SITE,
  policy: {
    agents_welcome: true,
    attribution_required: true,
    republish: "attribution_only",
    contact: profile.links.cal,
    content_signals: { search: "allowed", ai_input: "allowed", ai_train: "allowed" },
  },
  default_ttl: 3600,
  routes: [
    { path: "/", page_type: "home" },
    { path: "/about", page_type: "profile" },
    { path: "/projects", page_type: "product_list" },
    ...coreProducts.map((p) => ({ path: `/projects/${p.id}`, page_type: "product_detail" })),
    { path: "/writing", page_type: "category" },
    ...articles.map((a) => ({ path: `/writing/${a.slug}`, page_type: "article" })),
  ],
  emit_mcp: true,
  emit_openapi: true,
};

// The MCP and OpenAPI emitters read config via getConfig() (globalThis), not an
// explicit override. Every AHTML route imports this module, so setting it here
// guarantees the site URL and policy resolve at runtime.
if (typeof globalThis !== "undefined") {
  (globalThis as Record<string, unknown>).__ahtml_config ??= AHTML_CONFIG;
}

const POLICY = AHTML_CONFIG.policy!;

function readingMinutes(rt: string): number | undefined {
  const n = Number.parseInt(rt, 10);
  return Number.isFinite(n) ? n : undefined;
}

function personEntity() {
  return {
    id: "profile:dibbayajyoti-roy",
    type: "profile" as const,
    freshness: "static" as const,
    name: profile.name,
    kind: "person" as const,
    handle: "@dibbayajyoti",
    homepage: SITE,
    bio: `${profile.title} at ${profile.employer.name}. Rust and WebAssembly, Next.js, and AI engineering. Creator of AHTML, whatbroke, diffcore, Klinder-OSS, Roy UI, and Fresco.`,
    attributes: {
      role: profile.title,
      employer: profile.employer.name,
      education: `${profile.education.degree}, ${profile.education.institution}`,
      github: profile.links.github,
      linkedin: profile.links.linkedin,
      x: profile.links.x,
    },
  };
}

function productEntity(p: Project) {
  const attributes: Record<string, string> = { tagline: p.tagline };
  if (p.version) attributes.version = p.version;
  if (p.links.npm) attributes.npm = p.links.npm;
  if (p.links.npmOrg) attributes.npm_org = p.links.npmOrg;
  if (p.links.github) attributes.repo = p.links.github;
  if (p.links.demo) attributes.demo = p.links.demo;
  return {
    id: `product:${p.id}`,
    type: "product" as const,
    freshness: "static" as const,
    name: p.name,
    brand: profile.name,
    description: p.seoDescription,
    attributes,
  };
}

function productAction(p: Project) {
  const url = p.links.npm ?? p.links.npmOrg ?? p.links.demo ?? p.links.github ?? p.primaryUrl;
  const onNpm = Boolean(p.links.npm ?? p.links.npmOrg);
  return {
    id: `open-${p.id}`,
    label: onNpm ? `View ${p.name} on npm` : `Open ${p.name}`,
    target: `product:${p.id}`,
    category: "navigate" as const,
    auth: "none" as const,
    cost: { category: "free" as const },
    execute_url: url,
    method: "GET" as const,
    confirmation: "none" as const,
  };
}

function articleDoc(a: (typeof articles)[number]) {
  const rt = readingMinutes(a.readingTime);
  return {
    id: `document:${a.slug}`,
    type: "document" as const,
    freshness: "static" as const,
    title: a.title,
    author: profile.name,
    published_at: a.datePublished,
    modified_at: a.dateModified ?? a.datePublished,
    summary: a.excerpt,
    ...(rt !== undefined ? { reading_time: rt } : {}),
    tags: a.tags,
    canonical_url: `${SITE}/writing/${a.slug}`,
  };
}

function snapshotFor(segments: string[]): Snapshot | null {
  const [a, b] = segments;
  const url = segments.length ? `${SITE}/${segments.join("/")}` : SITE;

  if (segments.length === 0) {
    return snapshot(SITE, "home").ttl(3600).policy(POLICY)
      .add(personEntity())
      .links({ canonical: SITE, self: SITE })
      .build();
  }
  if (a === "about" && !b) {
    return snapshot(url, "profile").ttl(3600).policy(POLICY)
      .add(personEntity())
      .links({ canonical: `${SITE}/about`, self: url })
      .build();
  }
  if (a === "projects" && !b) {
    return snapshot(url, "product_list").ttl(3600).policy(POLICY)
      .add(...coreProducts.map(productEntity))
      .action(...coreProducts.map(productAction))
      .links({ canonical: `${SITE}/projects`, self: url })
      .build();
  }
  if (a === "projects" && b) {
    const p = coreProducts.find((x) => x.id === b);
    if (!p) return null;
    return snapshot(url, "product_detail").ttl(3600).policy(POLICY)
      .add(productEntity(p))
      .action(productAction(p))
      .links({ canonical: `${SITE}/projects/${p.id}`, self: url, parent: `${SITE}/projects` })
      .build();
  }
  if (a === "writing" && !b) {
    return snapshot(url, "category").ttl(3600).policy(POLICY)
      .add(...articles.map(articleDoc))
      .links({ canonical: `${SITE}/writing`, self: url })
      .build();
  }
  if (a === "writing" && b) {
    const art = articles.find((x) => x.slug === b);
    if (!art) return null;
    return snapshot(url, "article").ttl(3600).policy(POLICY)
      .add(articleDoc(art))
      .links({ canonical: `${SITE}/writing/${art.slug}`, self: url, parent: `${SITE}/writing` })
      .build();
  }
  return null;
}

/** Per-route snapshot for the /ahtml/<path> handler. */
export async function buildSnapshot(segments: string[], _req: Request): Promise<Snapshot | null> {
  return snapshotFor(segments ?? []);
}

/** Every modeled snapshot, for the MCP tool manifest and OpenAPI spec. */
export function getAllSnapshots(): Snapshot[] {
  const paths: string[][] = [
    [],
    ["about"],
    ["projects"],
    ...coreProducts.map((p) => ["projects", p.id]),
    ["writing"],
    ...articles.map((a) => ["writing", a.slug]),
  ];
  return paths
    .map(snapshotFor)
    .filter((s): s is Snapshot => s !== null);
}
