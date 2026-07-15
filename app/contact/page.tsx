import Link from "next/link";
import TitledParagraph from "@/components/titled-paragraph";
import Reveal from "@/components/reveal";

type Channel = {
  label: string;
  href: string;
  handle: string;
  best_for: string;
  external?: boolean;
};

const primaryChannel: Channel = {
  label: "Book a call",
  href: "https://cal.com/dibbayajyoti",
  handle: "cal.com/dibbayajyoti",
  best_for: "Hiring, contracts, OSS questions, sponsorships. Fastest way to reach me.",
  external: true,
};

const channels: Channel[] = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/dibbayajyoti-roy/",
    handle: "linkedin.com/in/dibbayajyoti-roy",
    best_for: "Recruiters, formal intros, role discussions.",
    external: true,
  },
  {
    label: "X / Twitter",
    href: "https://x.com/dibbayajyoti",
    handle: "@dibbayajyoti",
    best_for: "Quick replies, build-in-public threads, Klinder / Diffcore / AHTML updates.",
    external: true,
  },
  {
    label: "GitHub",
    href: "https://github.com/DibbayajyotiRoy",
    handle: "DibbayajyotiRoy",
    best_for: "Issues, PRs, OSS collaboration. File a repo issue if it’s code-specific.",
    external: true,
  },
  {
    label: "Medium",
    href: "https://medium.com/@dibbayajyoti",
    handle: "@dibbayajyoti",
    best_for: "Long-form engineering writing.",
    external: true,
  },
  {
    label: "Discord",
    href: "https://discord.com/users/om165_",
    handle: "om165_",
    best_for: "Casual chat, OSS hand-offs.",
    external: true,
  },
];

export default function ContactPage() {
  return (
    <main className="flex my-[140px] sm:my-[200px] justify-end sm:justify-center">
      <section className="max-w-[626px] pl-9 pr-6 sm:pl-0 sm:pr-0 sm:px-10">
        <Reveal>
          <h1 className="flex items-baseline flex-wrap sm:gap-3 my-2 sm:my-4 text-3xl sm:text-[32px] font-semibold">
            <span className="sm:w-auto w-full">Get in touch</span>
            <span className="opacity-50 w-full sm:w-auto text-[18px] sm:text-[22px]">
              book a call, it&apos;s fastest
            </span>
          </h1>
        </Reveal>

        <div className="flex flex-col gap-6 sm:gap-8 mt-10 text-blackout/90 dark:text-whiteout/90">
          <Reveal delay={0.05}>
            <TitledParagraph title="open to">
              <ul className="flex flex-col gap-1.5 list-disc pl-5">
                <li>Full-time Full Stack / Backend / Rust roles (EU + remote).</li>
                <li>Contract work in Next.js, Rust + WASM, Cloudflare Workers, AWS Bedrock.</li>
                <li>OSS questions about <span className="font-semibold">Klinder-OSS</span>, <span className="font-semibold">Diffcore</span>, and <span className="font-semibold">@ahtmljs/*</span>.</li>
                <li>Speaking, podcast, technical interviews on Rust / WASM / agentic web.</li>
              </ul>
            </TitledParagraph>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="rounded-md border border-blackout/15 dark:border-whiteout/15 p-5 flex flex-col gap-3">
              <span className="font-semibold text-lg">
                {primaryChannel.label}
              </span>
              <p className="text-sm opacity-70">{primaryChannel.best_for}</p>
              <Link
                href={primaryChannel.href}
                target="_blank"
                rel="noopener noreferrer"
                className="self-start rounded-md border border-blackout dark:border-whiteout/50 px-4 py-1.5 font-medium font-mono text-sm transition-transform duration-150 ease-out hover:opacity-80 active:scale-[0.97]"
              >
                {primaryChannel.handle}
              </Link>
            </div>
          </Reveal>

          <Reveal delay={0.15}>
            <TitledParagraph title="channels">
              <ul className="flex flex-col gap-5">
                {channels.map((c) => (
                  <li key={c.label} className="flex flex-col gap-1">
                    <div className="flex items-baseline gap-2 flex-wrap">
                      <span className="font-semibold">{c.label}</span>
                      <Link
                        href={c.href}
                        target={c.external ? "_blank" : undefined}
                        rel={c.external ? "noopener noreferrer" : undefined}
                        className="font-mono text-sm underline underline-offset-4"
                      >
                        {c.handle}
                      </Link>
                    </div>
                    <p className="text-sm opacity-70">{c.best_for}</p>
                  </li>
                ))}
              </ul>
            </TitledParagraph>
          </Reveal>

          <Reveal delay={0.1}>
            <TitledParagraph title="availability">
              <p>
                Available for remote work globally and open to relocation in the
                EU (Germany Opportunity Card / Blue Card / Netherlands HSM
                eligible).
              </p>
            </TitledParagraph>
          </Reveal>

          <Reveal delay={0.1}>
            <TitledParagraph title="response time">
              <p>
                X DMs typically within 24 hours on weekdays. GitHub issues on my
                repos within 48 hours. For anything time-sensitive, book a slot
                on cal.com/dibbayajyoti and ping me on X.
              </p>
            </TitledParagraph>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
