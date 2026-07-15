import Link from "next/link";
import TitledParagraph from "@/components/titled-paragraph";
import Reveal from "@/components/reveal";
import ChapterClose from "@/components/chapter-close";
import Timeline from "@/components/timeline";
import { profile } from "@/lib/content/profile";
import { coreProducts } from "@/lib/content/projects";

// Chronological journey, built only from real profile facts (no invented
// dates). sort keys place "July 2025" between the 2025 awards and 2026, and the
// graduation last as a forward-looking cap; they are ordering hints, not shown.
const milestones = [
  ...profile.honors.map((honor) => ({
    sort: honor.year,
    year: String(honor.year),
    label: "award",
    title: `${honor.result}, ${honor.name}`,
    note: honor.note,
  })),
  {
    sort: 2025.5,
    year: profile.employer.since,
    label: "role",
    title: `Joined ${profile.employer.name}`,
    note: "Full-time, core team",
    current: true,
  },
  {
    sort: 2026.9,
    year: String(profile.education.graduationYear),
    label: "education",
    title: `Graduating, ${profile.education.degree}`,
    note: profile.education.institution,
  },
].sort((a, b) => a.sort - b.sort);

export default function AboutPage() {
  return (
    <main className="flex my-[140px] sm:my-[200px] justify-end sm:justify-center">
      <section className="max-w-[626px] pl-9 pr-6 sm:pl-0 sm:pr-0 sm:px-10">
        <h1 className="flex items-baseline flex-wrap sm:gap-3 my-2 sm:my-4 text-3xl sm:text-[32px] font-semibold">
          <span className="sm:w-auto w-full">{profile.name}</span>
          <span className="opacity-50 w-full sm:w-auto text-[18px] sm:text-[22px]">
            full-stack engineer, Rust systems builder
          </span>
        </h1>

        <div className="flex flex-col gap-6 sm:gap-8 mt-10 text-blackout/90 dark:text-whiteout/90">
          <Reveal>
            <TitledParagraph title="who">
              <p>
                I&apos;m a {profile.title} and Rust developer.
                I currently ship production SaaS at{" "}
                <span className="font-semibold">{profile.employer.name}</span>{" "}
                and run a parallel track building open-source developer tools.
                My day job is HR SaaS: REST APIs, PostgreSQL, Next.js performance
                optimization, and Linux infrastructure. My night job is Rust backend
                engineering, Rust + WebAssembly, and RAG / AI agent infrastructure.
              </p>
            </TitledParagraph>
          </Reveal>

          <Reveal>
            <TitledParagraph title="now">
              <p>
                I&apos;m a core team member at{" "}
                <span className="font-semibold">{profile.employer.name}</span>{" "}
                building the{" "}
                <span className="font-semibold">AI Video Interviewer</span>, an
                AI agent that conducts candidate interviews end to end. Right now
                my focus is making the agent better and getting it ready for
                public use.
              </p>
            </TitledParagraph>
          </Reveal>

          <Reveal>
            <TitledParagraph title="what I build">
              <div className="flex flex-col gap-3">
                <p>
                  Three products anchor what I do publicly. Each solves a real
                  problem I hit and could not find a clean answer to. The
                  detailed writeups live on{" "}
                  <Link href="/work" className="font-semibold underline">/work</Link>,
                  and deeper topic pages cover{" "}
                  <Link href="/rust" className="underline">Rust engineering</Link>,{" "}
                  <Link href="/webassembly" className="underline">WebAssembly</Link>,{" "}
                  <Link href="/ai-engineering" className="underline">AI engineering</Link>,{" "}
                  <Link href="/nextjs-seo" className="underline">Next.js SEO</Link>, and{" "}
                  <Link href="/distributed-systems" className="underline">distributed systems</Link>.
                </p>
                {coreProducts.map((project) => (
                  <p key={project.id}>
                    <Link
                      href={project.primaryUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-semibold underline"
                    >
                      {project.name}
                    </Link>
                    : {project.oneLiner}
                  </p>
                ))}
              </div>
            </TitledParagraph>
          </Reveal>

          <Reveal>
            <TitledParagraph title="how I think">
              <p>
                I optimize for shipping. Production beats perfect. I prefer
                boring infrastructure (Postgres, nginx, systemd, Docker) and
                experimental edges (Rust, WASM, Cloudflare Workers, AI agents).
                I write before I commit and benchmark before I ship.
              </p>
            </TitledParagraph>
          </Reveal>

          <Reveal>
            <TitledParagraph title="background">
              <Timeline items={milestones} />
              <p className="mt-5">
                Eligible for Germany Opportunity Card / EU Blue Card and the
                Netherlands Highly Skilled Migrant programme.
              </p>
            </TitledParagraph>
          </Reveal>

          <Reveal>
            <TitledParagraph title="reach out">
              <p>
                Find me on{" "}
                <Link
                  href={profile.links.x}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold underline"
                >
                  X
                </Link>
                . Hiring, contract, OSS questions - all welcome. Full options at{" "}
                <Link href="/contact" className="font-semibold underline">/contact</Link>.
              </p>
            </TitledParagraph>
          </Reveal>
        </div>

        <ChapterClose line="If you got this far, we should probably talk." />
      </section>
    </main>
  );
}
