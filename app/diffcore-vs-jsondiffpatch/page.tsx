import Link from "next/link";
import TitledParagraph from "@/components/titled-paragraph";

type Row = { feature: string; diffcore: string; jsondiffpatch: string };

const rows: Row[] = [
  { feature: "Engine", diffcore: "Rust + WebAssembly", jsondiffpatch: "Pure JavaScript" },
  { feature: "Throughput", diffcore: "360–490 MB/s sustained", jsondiffpatch: "~110–140 MB/s" },
  { feature: "Speed-up vs JS baseline", diffcore: "3.3–4.1× faster", jsondiffpatch: "1× (the baseline)" },
  { feature: "Diff format", diffcore: "Standard RFC 6902 JSON Patch", jsondiffpatch: "Custom delta format" },
  { feature: "Path format", diffcore: "Real RFC 6901 JSON Pointer", jsondiffpatch: "Custom path strings" },
  { feature: "applyPatch / revertPatch", diffcore: "Built-in, round-trip safe", jsondiffpatch: "patch / unpatch (custom)" },
  { feature: "React hook", diffcore: "useDiff (first-party)", jsondiffpatch: "None — bring your own" },
  { feature: "CLI", diffcore: "diffcore --json, --silent", jsondiffpatch: "None first-party" },
  { feature: "Streaming engine", diffcore: "Yes — multi-GB files", jsondiffpatch: "In-memory only" },
  { feature: "Runtimes", diffcore: "Node, Browser, Bun, Deno, CF Workers, Vercel Edge, Electron, Tauri", jsondiffpatch: "Node, Browser" },
  { feature: "WASM bundling", diffcore: "Embedded Base64 — zero config", jsondiffpatch: "N/A" },
  { feature: "Memory cleanup", diffcore: "Auto via FinalizationRegistry", jsondiffpatch: "Manual / GC" },
  { feature: "Last release", diffcore: "2026-05 (active)", jsondiffpatch: "2024-10" },
  { feature: "License", diffcore: "MIT", jsondiffpatch: "MIT" },
];

const faq = [
  {
    q: "Is Diffcore faster than jsondiffpatch?",
    a: "Yes — 3.3 to 4.1× on the same payloads, because the diff itself runs in Rust compiled to WebAssembly. Sustained throughput is 360–490 MB/s. The gap widens on large nested objects.",
  },
  {
    q: "Does it emit standard RFC 6902 JSON Patch?",
    a: "Yes. Real RFC 6901 paths, decoded values, interoperable with fast-json-patch, jsondiffpatch, and any IETF-compliant consumer.",
  },
  {
    q: "Does it have a React hook?",
    a: "useDiff returns the JSON Patch and decoded values for two state objects, with automatic memoization.",
  },
  {
    q: "Can it handle multi-GB files?",
    a: "Yes — the streaming engine diffs without holding both documents in memory.",
  },
];

export default function DiffcoreVsJsonDiffPatchPage() {
  return (
    <main className="flex my-[140px] sm:my-[200px] justify-end sm:justify-center">
      <section className="max-w-[626px] pl-9 pr-6 sm:pl-0 sm:pr-0 sm:px-10">
        <h2 className="font-mono uppercase text-sm font-semibold opacity-25">
          comparison · 2026
        </h2>
        <h1 className="flex items-baseline flex-wrap sm:gap-3 my-2 sm:my-4 text-3xl sm:text-[32px] font-semibold">
          <span className="sm:w-auto w-full">Diffcore vs jsondiffpatch</span>
          <span className="opacity-50 w-full sm:w-auto text-[18px] sm:text-[22px]">
            fast WASM diff with RFC 6902 Patch
          </span>
        </h1>

        <div className="flex flex-col gap-6 sm:gap-8 mt-10 text-blackout/90 dark:text-whiteout/90">
          <TitledParagraph title="tldr">
            <p>
              <Link
                href="https://www.npmjs.com/package/diffcore"
                target="_blank"
                rel="noopener noreferrer"
                className="underline font-semibold"
              >
                Diffcore
              </Link>{" "}
              runs the diff in Rust compiled to WebAssembly, returns standard{" "}
              <span className="font-mono text-sm">RFC 6902 JSON Patch</span>{" "}
              with real <span className="font-mono text-sm">RFC 6901</span>{" "}
              paths, ships <span className="font-mono text-sm">applyPatch</span>{" "}
              / <span className="font-mono text-sm">revertPatch</span>, a React{" "}
              <span className="font-mono text-sm">useDiff</span> hook, a CLI,
              and a streaming engine for multi-GB files. Benchmarks: 3.3 to
              4.1× faster than optimized pure-JS diff.{" "}
              <Link
                href="https://www.npmjs.com/package/jsondiffpatch"
                target="_blank"
                rel="noopener noreferrer"
                className="underline"
              >
                jsondiffpatch
              </Link>{" "}
              is the long-time pure-JS option with a custom delta format.
            </p>
          </TitledParagraph>

          <TitledParagraph title="install">
            <pre className="text-sm bg-blackout/5 dark:bg-whiteout/5 rounded-md p-3 overflow-x-auto font-mono">
{`npm install diffcore`}
            </pre>
          </TitledParagraph>

          <TitledParagraph title="side by side">
            <div className="overflow-x-auto -mx-2 px-2">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="border-b border-blackout/30 dark:border-whiteout/30">
                    <th className="text-left py-2 pr-3 font-semibold">Feature</th>
                    <th className="text-left py-2 pr-3 font-semibold">Diffcore</th>
                    <th className="text-left py-2 font-semibold">jsondiffpatch</th>
                  </tr>
                </thead>
                <tbody>
                  {rows.map((r) => (
                    <tr
                      key={r.feature}
                      className="border-b border-blackout/10 dark:border-whiteout/10 align-top"
                    >
                      <td className="py-2 pr-3 font-medium">{r.feature}</td>
                      <td className="py-2 pr-3">{r.diffcore}</td>
                      <td className="py-2">{r.jsondiffpatch}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </TitledParagraph>

          <TitledParagraph title="example">
            <pre className="text-sm bg-blackout/5 dark:bg-whiteout/5 rounded-md p-3 overflow-x-auto font-mono leading-relaxed">
{`import { diff, applyPatch } from "diffcore";

const before = { user: { name: "Ada", roles: ["admin"] } };
const after  = { user: { name: "Ada", roles: ["admin", "ops"] } };

const patch = diff(before, after);
// [ { op: "add", path: "/user/roles/1", value: "ops" } ]

const next = applyPatch(before, patch);  // { user: { name: "Ada", roles: ["admin", "ops"] } }`}
            </pre>
          </TitledParagraph>

          <TitledParagraph title="when to pick what">
            <div className="flex flex-col gap-3">
              <p>
                <span className="font-semibold">Pick Diffcore</span> if you want
                standard RFC 6902 output (interoperable with any IETF-compliant
                consumer), need real React or CLI tooling, run on edge runtimes,
                or are diffing payloads big enough that JS speed matters.
              </p>
              <p>
                <span className="font-semibold">Pick jsondiffpatch</span> if you
                are already deep into its custom delta format and the
                visualizer / formatters that come with it, or if WebAssembly
                in your runtime is genuinely off the table.
              </p>
            </div>
          </TitledParagraph>

          <TitledParagraph title="faq">
            <ul className="flex flex-col gap-4">
              {faq.map((item) => (
                <li key={item.q} className="flex flex-col gap-1">
                  <p className="font-semibold">{item.q}</p>
                  <p>{item.a}</p>
                </li>
              ))}
            </ul>
          </TitledParagraph>

          <TitledParagraph title="try diffcore">
            <div className="flex flex-col gap-3">
              <p>
                <Link
                  href="https://www.npmjs.com/package/diffcore"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline font-semibold"
                >
                  Install from npm →
                </Link>{" "}
                or open the{" "}
                <Link
                  href="https://rust-wasm-library.vercel.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline font-semibold"
                >
                  live demo →
                </Link>
              </p>
              <p>
                Source on{" "}
                <Link
                  href="https://github.com/DibbayajyotiRoy/rust-wasm-Library"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline"
                >
                  GitHub
                </Link>
                . Issues, PRs, and benchmark contributions welcome.
              </p>
            </div>
          </TitledParagraph>

          <TitledParagraph title="related">
            <p className="text-sm opacity-80">
              Other comparisons:{" "}
              <Link href="/klinder-vs-posthog" className="underline">Klinder-OSS vs PostHog</Link>
              {" · "}
              <Link href="/ahtml-vs-llms-txt" className="underline">AHTML vs llms.txt</Link>
              {" · "}
              <Link href="/projects/diffcore" className="underline">About Diffcore</Link>
              {" · "}
              <Link href="/work" className="underline">all projects</Link>
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
