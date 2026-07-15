import Link from "next/link";
import TitledParagraph from "@/components/titled-paragraph";
import Reveal from "@/components/reveal";
import ChapterClose from "@/components/chapter-close";

type FaqItem = { q: string; a: string };

const faq: FaqItem[] = [
  {
    q: "What distributed systems work has Dibbayajyoti Roy done?",
    a: "He built the Klinder-OSS analytics pipeline (edge ingestion on Cloudflare Workers and Queues with Neon Postgres and Row-Level Security for multi-tenant isolation) and runs production backend services on a Proxmox cluster.",
  },
  {
    q: "What was the Redis polling bottleneck?",
    a: "A naive SCAN over a remote Redis was timing out at 100 seconds in production. Switching to batched MGET with client-side filtering gave a ~90% efficiency improvement and eliminated the timeouts. The full incident write-up is on the writing page.",
  },
  {
    q: "How does he handle multi-tenant SaaS isolation?",
    a: "Neon Postgres with Row-Level Security, so tenant isolation is enforced at the database layer rather than trusted to application code.",
  },
  {
    q: "What backend scaling work has he shipped?",
    a: "On production HR SaaS he cut page load from 3.4s to 1.9s by eliminating N+1 queries, adding composite indexes, and splitting Next.js bundle routes, and designed 12+ REST endpoints in Node.js and Express.",
  },
];

export default function DistributedSystemsPage() {
  return (
    <main className="flex my-[140px] sm:my-[200px] justify-end sm:justify-center">
      <section className="max-w-[626px] pl-9 pr-6 sm:pl-0 sm:pr-0 sm:px-10">
        <h2 className="font-mono uppercase text-sm font-semibold opacity-25">
          topic
        </h2>
        <h1 className="flex items-baseline flex-wrap sm:gap-3 my-2 sm:my-4 text-3xl sm:text-[32px] font-semibold">
          <span className="sm:w-auto w-full">Distributed Systems</span>
          <span className="opacity-50 w-full sm:w-auto text-[18px] sm:text-[22px]">
            edge ingestion, Redis &amp; backend scaling
          </span>
        </h1>

        <div className="flex flex-col gap-6 sm:gap-8 mt-10 text-blackout/90 dark:text-whiteout/90">
          <Reveal>
            <TitledParagraph title="overview">
              <p>
                I&apos;m Dibbayajyoti Roy, a backend and distributed systems
                engineer. This is the work that lives between the request and the
                database: edge ingestion, queue-backed pipelines, multi-tenant
                data isolation, Redis optimization, and the unglamorous
                distributed systems debugging that keeps production healthy. This
                page collects it.
              </p>
            </TitledParagraph>
          </Reveal>

          <Reveal>
            <TitledParagraph title="Klinder-OSS: an edge ingestion pipeline">
              <p>
                <Link
                  href="https://klinder-oss.vercel.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold underline"
                >
                  Klinder-OSS
                </Link>{" "}
                ingests analytics events at the edge on Cloudflare Workers and
                Cloudflare Queues, then persists to Neon Postgres with Row-Level
                Security for multi-tenant isolation. The ingestion path is being
                ported to Rust via workers-rs to push p95 latency under 10ms. See{" "}
                <Link href="/rust" className="underline">
                  Rust engineering
                </Link>
                . Compared against a hosted analytics product on{" "}
                <Link href="/klinder-vs-posthog" className="underline">
                  Klinder-OSS vs PostHog
                </Link>
                .
              </p>
            </TitledParagraph>
          </Reveal>

          <Reveal>
            <TitledParagraph title="the Redis polling bottleneck">
              <p>
                A real production incident: a naive SCAN over a remote Redis was
                timing out at 100 seconds. Moving to batched MGET with client-side
                filtering produced a ~90% efficiency improvement and zero
                timeouts. It is a small case study in distributed systems
                debugging: the fix was the access pattern, not the hardware. The
                full write-up is on the{" "}
                <Link href="/writing" className="font-semibold underline">
                  writing page
                </Link>
                .
              </p>
            </TitledParagraph>
          </Reveal>

          <Reveal>
            <TitledParagraph title="production backend">
              <p>
                On HR SaaS at Yupcha Softwares I designed 12+ REST endpoints in
                Node.js and Express on PostgreSQL, deployed to Ubuntu VMs on a
                Proxmox cluster behind nginx reverse proxies with Let&apos;s
                Encrypt TLS and systemd supervision, and cut page load from 3.4s
                to 1.9s by eliminating N+1 queries, adding composite indexes, and
                splitting Next.js bundle routes. Everyday backend scaling work.
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
                <Link href="/klinder-vs-posthog" className="underline">
                  Klinder-OSS vs PostHog
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
          <ChapterClose line="Debugging something gnarly in production? I like those. Let's talk." />
        </Reveal>
      </section>
    </main>
  );
}
