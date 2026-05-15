import Link from "next/link";
import TitledParagraph from "@/components/titled-paragraph";

export default function AboutPage() {
  return (
    <main className="flex my-[140px] sm:my-[200px] justify-end sm:justify-center">
      <section className="max-w-[626px] pl-9 pr-6 sm:pl-0 sm:pr-0 sm:px-10">
        <h2 className="font-mono uppercase text-sm font-semibold opacity-25">
          about
        </h2>
        <h1 className="flex items-baseline flex-wrap sm:gap-3 my-2 sm:my-4 text-3xl sm:text-[32px] font-semibold">
          <span className="sm:w-auto w-full">Dibbayajyoti Roy</span>
          <span className="opacity-50 w-full sm:w-auto text-[18px] sm:text-[22px]">
            engineer, builder, Rust enthusiast
          </span>
        </h1>

        <div className="flex flex-col gap-6 sm:gap-8 mt-10 text-blackout/90 dark:text-whiteout/90">
          <TitledParagraph title="who">
            <p>
              I&apos;m a Full Stack Software Engineer from Agartala, India.
              I currently ship production SaaS at{" "}
              <span className="font-semibold">Yupcha Softwares Pvt. Ltd</span>{" "}
              and run a parallel track building open-source developer tools.
              My day job is HR SaaS — REST APIs, PostgreSQL, Linux infrastructure.
              My night job is Rust, WebAssembly, and AI agent infrastructure.
            </p>
          </TitledParagraph>

          <TitledParagraph title="what I build">
            <div className="flex flex-col gap-3">
              <p>
                Three products anchor what I do publicly. Each solves a real
                problem I hit and could not find a clean answer to.
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
                — one SDK that combines event tracking, error-based session
                recording, and email trigger workflows. The PostHog +
                LogRocket + Customer.io stack collapsed into a single install.
              </p>
              <p>
                <Link
                  href="https://www.npmjs.com/package/diffcore"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold underline"
                >
                  Diffcore
                </Link>{" "}
                — a fast WebAssembly JSON diff engine on npm written in Rust.
                Real RFC 6901 paths, RFC 6902 Patch output, applyPatch /
                revertPatch, React hook, CLI, streaming engine. 3.3 to 4.1×
                faster than optimized pure-JS diff. The two leading
                competitors haven&apos;t shipped a release since 2022 and 2018
                respectively — that&apos;s the wedge.
              </p>
              <p>
                <Link
                  href="https://www.npmjs.com/org/ahtmljs"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold underline"
                >
                  AHTML
                </Link>{" "}
                — five npm packages under <span className="font-mono text-sm">@ahtmljs/*</span>{" "}
                that turn any site into something AI agents can read cheaply.
                Schema, Next.js plugin, Vite plugin, agent SDK, LangChain
                loader. 143 passing tests across the scope.
              </p>
              <p>
                See full project list at{" "}
                <Link href="/work" className="font-semibold underline">/work</Link>.
              </p>
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
              B.Tech in Computer Science at ICFAI University Tripura
              (Class of 2026). Winner of NITA Arjuna 2.0 National Hackathon
              (2025, 200+ teams), Technovate Project Exhibition (2025), and
              1st Runner-Up at the NITA–ISRO Space Hackathon (2024).
              Top 500 in the AI for Bharat hackathon (2026).
            </p>
            <p className="mt-3">
              Eligible for Germany Opportunity Card / EU Blue Card and the
              Netherlands Highly Skilled Migrant programme.
            </p>
          </TitledParagraph>

          <TitledParagraph title="reach out">
            <p>
              The fastest way to reach me is{" "}
              <Link
                href="mailto:dibbayajyoti@gmail.com"
                className="font-semibold underline"
              >
                email
              </Link>
              {" "}or{" "}
              <Link
                href="https://x.com/dibbayajyoti"
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
