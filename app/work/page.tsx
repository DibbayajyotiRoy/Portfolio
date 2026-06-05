import WorkContent from "@/components/work-content";

// Metadata for this route lives in app/work/layout.tsx — a single definition,
// so the title and description cannot diverge between the page and its layout.
//
// Live npm download stats moved to each product's own hub page
// (/projects/<slug>) — see components/npm-stats.tsx, now per-product.

export default function WorkPage() {
  return (
    <main className="flex my-[140px] sm:my-[200px] justify-end sm:justify-center">
      <section className="max-w-[626px] pl-9 pr-6 sm:pl-0 sm:pr-0 sm:px-10">
        <h2 className="font-mono uppercase text-sm font-semibold opacity-25">
          application
        </h2>
        <h1 className="flex items-baseline flex-wrap sm:gap-3 my-2 sm:my-4 text-3xl sm:text-[32px] font-semibold">
          <span className="sm:w-auto w-full">Full Stack Software Engineer</span>
          <span className="opacity-50 w-full sm:w-auto text-[18px] sm:text-[22px]">Rust Enthusiast</span>
        </h1>
        <WorkContent />
      </section>
    </main>
  );
}
