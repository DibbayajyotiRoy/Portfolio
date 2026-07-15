import Link from "next/link";
import TitledParagraph from "@/components/titled-paragraph";
import Reveal from "@/components/reveal";
import ChapterClose from "@/components/chapter-close";

type FaqItem = { q: string; a: string };

const faq: FaqItem[] = [
  {
    q: "What WebAssembly project has Dibbayajyoti Roy shipped?",
    a: "Diffcore is a JSON diff engine written in Rust, compiled to WebAssembly, and published on npm. It runs on Node, browsers, Bun, Deno, Cloudflare Workers, Vercel Edge, Electron, and Tauri.",
  },
  {
    q: "Why compile to WebAssembly instead of writing pure JavaScript?",
    a: "A diff is CPU-bound work over large objects. Running it as Rust compiled to WASM gives several times the throughput of optimized pure-JS while staying a normal npm install: no native addon, no platform-specific binaries.",
  },
  {
    q: "How is the WASM module bundled?",
    a: "Diffcore embeds the WASM module as Base64 inside the package, so it is zero-config: there is no separate .wasm file to host, import, or configure a loader for. It just works after npm install.",
  },
  {
    q: "Does it work on edge runtimes?",
    a: "Yes. Because the engine is WebAssembly, it runs unchanged on Cloudflare Workers and Vercel Edge alongside Node and the browser.",
  },
];

export default function WebAssemblyPage() {
  return (
    <main className="flex my-[140px] sm:my-[200px] justify-end sm:justify-center">
      <section className="max-w-[626px] pl-9 pr-6 sm:pl-0 sm:pr-0 sm:px-10">
        <h2 className="font-mono uppercase text-sm font-semibold opacity-25">
          topic
        </h2>
        <h1 className="flex items-baseline flex-wrap sm:gap-3 my-2 sm:my-4 text-3xl sm:text-[32px] font-semibold">
          <span className="sm:w-auto w-full">WebAssembly</span>
          <span className="opacity-50 w-full sm:w-auto text-[18px] sm:text-[22px]">
            Rust compiled to WASM, shipped to npm
          </span>
        </h1>

        <div className="flex flex-col gap-6 sm:gap-8 mt-10 text-blackout/90 dark:text-whiteout/90">
          <Reveal>
            <TitledParagraph title="overview">
              <p>
                I&apos;m Dibbayajyoti Roy, a WebAssembly engineer who writes
                performance-critical code in Rust and ships it as WASM that
                ordinary JavaScript and TypeScript projects can install. The
                promise of Rust + WebAssembly is simple: native-speed compute,
                delivered as a normal dependency, running everywhere JavaScript
                runs. This page covers what I&apos;ve built with it and how.
              </p>
            </TitledParagraph>
          </Reveal>

          <Reveal>
            <TitledParagraph title="diffcore: a Rust/WASM diff engine">
              <p>
                <Link
                  href="https://www.npmjs.com/package/diffcore"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold underline"
                >
                  Diffcore
                </Link>{" "}
                is a WebAssembly JSON diff engine. The diff itself runs in Rust
                compiled to WASM. It returns real RFC 6901 JSON Pointer paths and
                standard RFC 6902 JSON Patch, ships{" "}
                <span className="font-mono text-sm">applyPatch</span> /{" "}
                <span className="font-mono text-sm">revertPatch</span>, a React{" "}
                <span className="font-mono text-sm">useDiff</span> hook, a CLI,
                and a streaming engine for multi-GB files. In head-to-head
                benchmarks it runs several times faster than optimized pure-JS
                diff libraries. The full breakdown is on{" "}
                <Link href="/diffcore-vs-jsondiffpatch" className="underline">
                  Diffcore vs jsondiffpatch
                </Link>
                .
              </p>
            </TitledParagraph>
          </Reveal>

          <Reveal>
            <TitledParagraph title="how it's built">
              <p>
                The Rust source is compiled to WebAssembly with wasm-bindgen, then
                the WASM module is embedded as Base64 inside the npm package, so
                there is nothing to host and no loader to configure. Memory is
                cleaned up automatically via{" "}
                <span className="font-mono text-sm">FinalizationRegistry</span>.
                The result installs and behaves like any other npm library while
                doing its real work in WebAssembly.
              </p>
            </TitledParagraph>
          </Reveal>

          <Reveal>
            <TitledParagraph title="where WebAssembly wins">
              <p>
                WASM earns its place on CPU-bound work (diffing, parsing,
                encoding, compression), where pure JavaScript leaves throughput on
                the table. Because the output is WebAssembly, the same build runs
                on Node, browsers, Bun, Deno, Cloudflare Workers, Vercel Edge,
                Electron, and Tauri. One artifact, every runtime. For the language
                side of this work, see{" "}
                <Link href="/rust" className="underline">
                  Rust engineering
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
                <Link href="/rust" className="underline">
                  Rust engineering
                </Link>
                {" · "}
                <Link href="/projects/diffcore" className="underline">
                  Diffcore (Rust/WASM)
                </Link>
                {" · "}
                <Link href="/diffcore-vs-jsondiffpatch" className="underline">
                  Diffcore vs jsondiffpatch
                </Link>
                {" · "}
                <Link href="/work" className="underline">
                  projects &amp; experience
                </Link>
              </p>
            </TitledParagraph>
          </Reveal>
        </div>

        <Reveal>
          <ChapterClose line="Have a performance problem WASM might solve? Let's talk." />
        </Reveal>
      </section>
    </main>
  );
}
