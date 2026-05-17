import Link from "next/link";
import TitledParagraph from "@/components/titled-paragraph";

type FaqItem = { q: string; a: string };

const faq: FaqItem[] = [
  {
    q: "Is Dibbayajyoti Roy available for Rust backend engineer roles?",
    a: "Yes. He is open to full-time and contract Rust backend roles — async API development, systems programming, and edge runtimes — remote globally and relocation-eligible in the EU.",
  },
  {
    q: "What has Dibbayajyoti Roy built in Rust?",
    a: "Diffcore — a Rust + WebAssembly JSON diff engine published on npm; the Rust port of Klinder-OSS on workers-rs; and EMS, a real-time Employee Management System written in Rust with a React frontend.",
  },
  {
    q: "Does he do Rust + WebAssembly work?",
    a: "Yes. Diffcore is written in Rust and compiled to WebAssembly via wasm-bindgen, then shipped to npm so JavaScript and TypeScript projects get native-speed diffing with no native addon.",
  },
  {
    q: "Does he use Rust on Cloudflare Workers?",
    a: "Yes. The Klinder-OSS analytics ingestion path is being ported to Rust on workers-rs — the Cloudflare Workers runtime for Rust — targeting sub-10ms p95 latency at the edge.",
  },
];

export default function RustPage() {
  return (
    <main className="flex my-[140px] sm:my-[200px] justify-end sm:justify-center">
      <section className="max-w-[626px] pl-9 pr-6 sm:pl-0 sm:pr-0 sm:px-10">
        <h2 className="font-mono uppercase text-sm font-semibold opacity-25">
          topic
        </h2>
        <h1 className="flex items-baseline flex-wrap sm:gap-3 my-2 sm:my-4 text-3xl sm:text-[32px] font-semibold">
          <span className="sm:w-auto w-full">Rust Engineering</span>
          <span className="opacity-50 w-full sm:w-auto text-[18px] sm:text-[22px]">
            backend, systems &amp; WebAssembly in Rust
          </span>
        </h1>

        <div className="flex flex-col gap-6 sm:gap-8 mt-10 text-blackout/90 dark:text-whiteout/90">
          <TitledParagraph title="overview">
            <p>
              I&apos;m Dibbayajyoti Roy — a full-stack and Rust backend engineer
              based in Agartala, India. Rust is the language I reach for when
              correctness and performance both matter: async backend services,
              Rust API development, systems programming, and code that compiles
              to WebAssembly. This page collects the Rust work I do, the
              problems it solves, and where it fits in a production stack.
            </p>
          </TitledParagraph>

          <TitledParagraph title="what I've built in Rust">
            <div className="flex flex-col gap-3">
              <p>
                <Link
                  href="https://www.npmjs.com/package/diffcore"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold underline"
                >
                  Diffcore
                </Link>{" "}
                — a JSON diff engine written in Rust and compiled to
                WebAssembly, published on npm. It returns standard RFC 6902 JSON
                Patch and benchmarks several times faster than optimized
                pure-JavaScript diff libraries. The full write-up is on{" "}
                <Link href="/webassembly" className="underline">
                  the WebAssembly page
                </Link>
                .
              </p>
              <p>
                <Link
                  href="https://klinder-oss.vercel.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold underline"
                >
                  Klinder-OSS
                </Link>{" "}
                — the analytics ingestion path is being ported to Rust on
                workers-rs (Rust for Cloudflare Workers) to push p95 latency
                under 10ms at the edge. More on{" "}
                <Link href="/distributed-systems" className="underline">
                  distributed systems
                </Link>
                .
              </p>
              <p>
                <Link
                  href="https://github.com/DibbayajyotiRoy/Rust-FullStack-App"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold underline"
                >
                  EMS
                </Link>{" "}
                — a real-time Employee Management System with a Rust backend and
                a React frontend, built to learn Rust web services end to end.
              </p>
            </div>
          </TitledParagraph>

          <TitledParagraph title="where Rust fits">
            <p>
              I use Rust for the parts of a system that have to be fast and
              predictable: Rust API development and async backend services,
              Rust microservices, performance-critical paths compiled to
              WebAssembly, and worker runtimes like Cloudflare Workers via
              workers-rs. The strict compiler, the ownership model, and
              zero-cost abstractions mean Rust performance optimization is
              mostly a design-time activity — not a profiling fire drill after
              ship.
            </p>
          </TitledParagraph>

          <TitledParagraph title="why Rust">
            <p>
              Rust changed how I approach engineering — from building &quot;web
              apps&quot; to designing reliable systems. It is a genuine Swiss
              Army knife: low-level control, high-performance engines, and
              blazingly fast backend services, all without trading safety for
              speed. I believe Rust is the future of infrastructure, and I keep
              exploring its edge in WebAssembly, edge computing, and real-time
              systems.
            </p>
          </TitledParagraph>

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

          <TitledParagraph title="related">
            <p className="text-sm opacity-80">
              Keep reading:{" "}
              <Link href="/webassembly" className="underline">
                WebAssembly engineering
              </Link>
              {" · "}
              <Link href="/distributed-systems" className="underline">
                distributed systems
              </Link>
              {" · "}
              <Link href="/work" className="underline">
                projects &amp; experience
              </Link>
              {" · "}
              <Link href="/contact" className="underline">
                hire me for Rust work
              </Link>
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
