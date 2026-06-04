import Link from "next/link";

type Pkg = {
  name: string;
  blurb: string;
  npmId: string;
  href: string;
};

const PACKAGES: Pkg[] = [
  { name: "@ahtmljs/schema",    blurb: "canonical agent snapshot + RAG chunks",         npmId: "@ahtmljs/schema",    href: "https://www.npmjs.com/package/@ahtmljs/schema" },
  { name: "@ahtmljs/next",      blurb: "Next.js plugin → /.well-known/ahtml.json",      npmId: "@ahtmljs/next",      href: "https://www.npmjs.com/package/@ahtmljs/next" },
  { name: "@ahtmljs/agent",     blurb: "agent SDK with dry-run safety gates",           npmId: "@ahtmljs/agent",     href: "https://www.npmjs.com/package/@ahtmljs/agent" },
  { name: "@ahtmljs/vite",      blurb: "Vite plugin · byte-parity with next plugin",    npmId: "@ahtmljs/vite",      href: "https://www.npmjs.com/package/@ahtmljs/vite" },
  { name: "@ahtmljs/langchain", blurb: "LangChain.js loader · citation metadata",       npmId: "@ahtmljs/langchain", href: "https://www.npmjs.com/package/@ahtmljs/langchain" },
  { name: "@ahtmljs/hono",      blurb: "Hono adapter · Node · Bun · Deno · Workers",     npmId: "@ahtmljs/hono",      href: "https://www.npmjs.com/package/@ahtmljs/hono" },
  { name: "@ahtmljs/cli",       blurb: "ahtml doctor · discovery-chain linter for CI",   npmId: "@ahtmljs/cli",       href: "https://www.npmjs.com/package/@ahtmljs/cli" },
  { name: "diffcore",           blurb: "Rust/WASM JSON diff · RFC 6902 · React + CLI",  npmId: "diffcore",           href: "https://rust-wasm-library.vercel.app" },
];

type Stats = {
  version: string | null;
  firstPublishedAt: string | null;
  total: number | null;
};

const encodePkg = (id: string) => id.replace("/", "%2F");

async function fetchStats(id: string): Promise<Stats> {
  const enc = encodePkg(id);
  const today = new Date().toISOString().slice(0, 10);
  try {
    const [manifestRes, rangeRes] = await Promise.all([
      fetch(`https://registry.npmjs.org/${enc}`, { cache: "no-store" }),
      fetch(`https://api.npmjs.org/downloads/range/2010-01-01:${today}/${id}`, { cache: "no-store" }),
    ]);

    let version: string | null = null;
    let firstPublishedAt: string | null = null;
    if (manifestRes.ok) {
      const m = (await manifestRes.json()) as {
        "dist-tags"?: { latest?: string };
        time?: Record<string, string>;
      };
      version = m["dist-tags"]?.latest ?? null;
      firstPublishedAt = m.time?.created ?? null;
    }

    let total: number | null = null;
    if (rangeRes.ok) {
      const r = (await rangeRes.json()) as { downloads?: Array<{ downloads: number }> };
      if (Array.isArray(r.downloads)) {
        total = r.downloads.reduce((acc, d) => acc + (d.downloads || 0), 0);
      }
    }

    return { version, firstPublishedAt, total };
  } catch {
    return { version: null, firstPublishedAt: null, total: null };
  }
}

const fmtNum = (n: number) => n.toLocaleString("en-US");

const fmtDate = (iso: string | null) => {
  if (!iso) return null;
  const d = new Date(iso);
  return Number.isNaN(d.getTime())
    ? null
    : d.toLocaleDateString("en-US", { year: "numeric", month: "short", day: "2-digit" });
};

export default async function NpmStats() {
  const stats = await Promise.all(PACKAGES.map((p) => fetchStats(p.npmId)));
  const grandTotal = stats.reduce((a, s) => a + (s.total ?? 0), 0);
  const aggregatedCount = stats.filter((s) => s.total != null).length;

  return (
    <div className="flex flex-col gap-5">
      <div className="flex items-baseline justify-between gap-4 flex-wrap">
        <p className="text-sm sm:text-base opacity-70">
          Live npm stats — fetched fresh on every page load.
        </p>
        <p className="text-sm sm:text-base font-mono">
          <span className="font-semibold">{fmtNum(grandTotal)}</span>
          <span className="opacity-60"> total downloads · </span>
          <span className="font-semibold">{PACKAGES.length}</span>
          <span className="opacity-60"> packages</span>
        </p>
      </div>

      <ul className="flex flex-col divide-y divide-blackout/10 dark:divide-whiteout/10 border-y border-blackout/10 dark:border-whiteout/10">
        {PACKAGES.map((pkg, i) => {
          const s = stats[i];
          const date = fmtDate(s.firstPublishedAt);
          const isNew = s.total == null;

          return (
            <li key={pkg.name} className="flex items-center justify-between gap-4 py-3">
              <div className="flex flex-col min-w-0">
                <Link
                  href={pkg.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-sm sm:text-base font-semibold underline underline-offset-2 hover:opacity-80 truncate"
                >
                  {pkg.name}
                </Link>
                <div className="text-xs sm:text-sm opacity-60 mt-0.5 truncate">
                  {pkg.blurb}
                </div>
                <div className="text-[11px] sm:text-xs opacity-40 font-mono mt-0.5">
                  {s.version ? `v${s.version}` : "—"}
                  {date ? ` · since ${date}` : ""}
                </div>
              </div>

              <div className="flex flex-col items-end shrink-0">
                {isNew ? (
                  <span className="text-xs font-mono px-2 py-0.5 rounded border border-blackout/25 dark:border-whiteout/25 opacity-70">
                    new
                  </span>
                ) : (
                  <>
                    <span className="font-mono font-semibold text-lg sm:text-xl tabular-nums leading-none">
                      {fmtNum(s.total!)}
                    </span>
                    <span className="text-[10px] sm:text-[11px] opacity-50 font-mono mt-1 uppercase tracking-wide">
                      downloads
                    </span>
                  </>
                )}
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
