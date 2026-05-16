import Link from "next/link";
import TitledParagraph from "@/components/titled-paragraph";
import { profile } from "@/lib/content/profile";
import { coreProducts } from "@/lib/content/projects";

export default function AboutPage() {
  return (
    <main className="flex my-[140px] sm:my-[200px] justify-end sm:justify-center">
      <section className="max-w-[626px] pl-9 pr-6 sm:pl-0 sm:pr-0 sm:px-10">
        <h2 className="font-mono uppercase text-sm font-semibold opacity-25">
          about
        </h2>
        <h1 className="flex items-baseline flex-wrap sm:gap-3 my-2 sm:my-4 text-3xl sm:text-[32px] font-semibold">
          <span className="sm:w-auto w-full">{profile.name}</span>
          <span className="opacity-50 w-full sm:w-auto text-[18px] sm:text-[22px]">
            engineer, builder, Rust enthusiast
          </span>
        </h1>

        <div className="flex flex-col gap-6 sm:gap-8 mt-10 text-blackout/90 dark:text-whiteout/90">
          <TitledParagraph title="who">
            <p>
              I&apos;m a {profile.title} from {profile.location}.
              I currently ship production SaaS at{" "}
              <span className="font-semibold">{profile.employer.name}</span>{" "}
              and run a parallel track building open-source developer tools.
              My day job is HR SaaS — REST APIs, PostgreSQL, Linux infrastructure.
              My night job is Rust, WebAssembly, and AI agent infrastructure.
            </p>
          </TitledParagraph>

          <TitledParagraph title="what I build">
            <div className="flex flex-col gap-3">
              <p>
                Three products anchor what I do publicly. Each solves a real
                problem I hit and could not find a clean answer to — the
                detailed writeups live on{" "}
                <Link href="/work" className="font-semibold underline">/work</Link>.
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
                  </Link>{" "}
                  — {project.oneLiner}
                </p>
              ))}
            </div>
          </TitledParagraph>

          <TitledParagraph title="how I think">
            <p>
              I optimize for shipping. Production beats perfect. I prefer
              boring infrastructure (Postgres, nginx, systemd, Docker) and
              experimental edges (Rust, WASM, Cloudflare Workers, AI agents).
              I write before I commit and benchmark before I ship.
            </p>
          </TitledParagraph>

          <TitledParagraph title="background">
            <p>
              {profile.education.degree} at {profile.education.institution}{" "}
              (Class of {profile.education.graduationYear}).
            </p>
            <ul className="mt-3 flex flex-col gap-1">
              {profile.honors.map((honor) => (
                <li key={`${honor.name}-${honor.year}`}>
                  <span className="font-semibold">{honor.result}</span>
                  {" — "}
                  {honor.name} ({honor.year}
                  {honor.note ? `, ${honor.note}` : ""})
                </li>
              ))}
            </ul>
            <p className="mt-3">
              Eligible for Germany Opportunity Card / EU Blue Card and the
              Netherlands Highly Skilled Migrant programme.
            </p>
          </TitledParagraph>

          <TitledParagraph title="reach out">
            <p>
              The fastest way to reach me is{" "}
              <Link
                href={`mailto:${profile.links.email}`}
                className="font-semibold underline"
              >
                email
              </Link>
              {" "}or{" "}
              <Link
                href={profile.links.x}
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold underline"
              >
                X
              </Link>
              . Hiring, contract, OSS questions — all welcome. Full options at{" "}
              <Link href="/contact" className="font-semibold underline">/contact</Link>.
            </p>
          </TitledParagraph>
        </div>

        <p className="text-base sm:text-lg my-10 sm:my-20">
          Thanks for stopping by. Love your work, keep it up!
        </p>
      </section>
    </main>
  );
}
