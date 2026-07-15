import Link from "next/link";

type ChapterCloseProps = {
  line: string;
};

// The one consistent page ending: a closing line and the single contact CTA.
// Replaces the per-page "Thanks for reading" boilerplate.
const ChapterClose = ({ line }: ChapterCloseProps) => {
  return (
    <div className="mt-14 sm:mt-20 border-t border-blackout/10 dark:border-whiteout/10 pt-8 flex flex-col gap-4">
      <p className="text-base sm:text-lg">{line}</p>
      <Link
        href="https://cal.com/dibbayajyoti"
        target="_blank"
        rel="noopener noreferrer"
        className="self-start rounded-md border border-blackout dark:border-whiteout/50 px-4 py-1.5 font-medium transition-transform duration-150 ease-out hover:opacity-80 active:scale-[0.97]"
      >
        Book a call
      </Link>
    </div>
  );
};

export default ChapterClose;
