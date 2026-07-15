import Link from "next/link";
import TitledParagraph from "@/components/titled-paragraph";

export default function PrivacyPage() {
  return (
    <main className="flex my-[140px] sm:my-[200px] justify-end sm:justify-center">
      <section className="max-w-[626px] pl-9 pr-6 sm:pl-0 sm:pr-0 sm:px-10">
        <h2 className="font-mono uppercase text-sm font-semibold opacity-25">
          privacy
        </h2>
        <h1 className="flex items-baseline flex-wrap sm:gap-3 my-2 sm:my-4 text-3xl sm:text-[32px] font-semibold">
          <span className="sm:w-auto w-full">Privacy notice</span>
          <span className="opacity-50 w-full sm:w-auto text-[18px] sm:text-[22px]">
            short version: barely anything is collected
          </span>
        </h1>

        <div className="flex flex-col gap-6 sm:gap-8 mt-10 text-blackout/90 dark:text-whiteout/90">
          <TitledParagraph title="tldr">
            <p>
              <span className="font-semibold">No cookies. No tracking pixels. No third-party
              advertising.</span> Anonymous request metadata is collected by Vercel
              for traffic and performance reporting. Outbound links to npm,
              GitHub, Medium, X, and LinkedIn are governed by their own
              policies once you click them.
            </p>
          </TitledParagraph>

          <TitledParagraph title="what is collected">
            <ul className="flex flex-col gap-2 list-disc pl-5">
              <li>
                <span className="font-semibold">Vercel Analytics</span> — anonymous
                page-view counts, referrer, country, device class. No personal
                identifiers, no cross-site tracking, no cookies.{" "}
                <Link
                  href="https://vercel.com/docs/analytics/privacy-policy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline"
                >
                  policy
                </Link>
                .
              </li>
              <li>
                <span className="font-semibold">Vercel Speed Insights</span> —
                anonymous Core Web Vitals samples (LCP, INP, CLS) tied to a
                URL, not to a person.{" "}
                <Link
                  href="https://vercel.com/docs/speed-insights/privacy-policy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline"
                >
                  policy
                </Link>
                .
              </li>
              <li>
                <span className="font-semibold">Server access logs</span> from
                Vercel&apos;s edge include IP and user agent for security and
                rate limiting. Standard hosting telemetry, not behavioral
                tracking.
              </li>
            </ul>
          </TitledParagraph>

          <TitledParagraph title="what is not collected">
            <ul className="flex flex-col gap-2 list-disc pl-5">
              <li>No first- or third-party advertising cookies.</li>
              <li>No fingerprinting, no session replay, no heatmaps.</li>
              <li>No newsletter signup, so no email storage.</li>
              <li>No data sold or shared with brokers — there is no data to sell.</li>
            </ul>
          </TitledParagraph>

          <TitledParagraph title="contact">
            <p>
              If you book a call via{" "}
              <Link href="https://cal.com/dibbayajyoti" target="_blank" rel="noopener noreferrer" className="underline font-semibold">
                cal.com/dibbayajyoti
              </Link>
              , your booking details are handled by Cal.com per their privacy
              policy. I do not import contacts into a CRM or marketing tool.
              To have your details deleted, just ask me during or after the call.
            </p>
          </TitledParagraph>

          <TitledParagraph title="opt out">
            <p>
              The simplest opt-out is a tracker-blocking browser extension or
              your browser&apos;s built-in tracking protection — both will
              suppress Vercel Analytics. Do Not Track headers are also
              respected by Vercel Analytics by default.
            </p>
          </TitledParagraph>

          <TitledParagraph title="changes">
            <p>
              This page is updated when the data flow changes. Last updated:{" "}
              <span className="font-mono">2026-05-15</span>. Major changes are
              dated above. Questions? Book a call at{" "}
              <Link href="https://cal.com/dibbayajyoti" target="_blank" rel="noopener noreferrer" className="underline font-semibold">
                cal.com/dibbayajyoti
              </Link>
              .
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
