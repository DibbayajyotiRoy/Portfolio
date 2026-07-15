import Reveal from "@/components/reveal";

export type TimelineItem = {
  year: string;
  label?: string;
  title: string;
  note?: string;
  current?: boolean;
};

// Vertical milestone timeline: a connector line with ring markers (filled for
// the current/ongoing entry), a mono year, an optional category label, and a
// per-item scroll reveal so the journey reads in sequence.
const Timeline = ({ items }: { items: TimelineItem[] }) => {
  return (
    <ol className="mt-1 flex flex-col gap-6 border-l border-blackout/15 dark:border-whiteout/15 pl-6">
      {items.map((item, i) => (
        <li key={`${item.year}-${item.title}`} className="relative">
          <span
            aria-hidden
            className={`absolute top-[6px] -left-[29px] h-2.5 w-2.5 rounded-full ${
              item.current
                ? "bg-blackout dark:bg-whiteout"
                : "border-[1.5px] border-zinc-400 dark:border-zinc-500 bg-whiteout dark:bg-zinc-900"
            }`}
          />
          <Reveal delay={i * 0.05}>
            <div className="flex items-baseline gap-2.5 flex-wrap">
              <span className="font-mono text-xs uppercase tracking-wide opacity-50 [font-variant-numeric:tabular-nums]">
                {item.year}
              </span>
              {item.label ? (
                <span className="font-mono text-[10px] uppercase tracking-wide opacity-35">
                  {item.label}
                </span>
              ) : null}
              {item.current ? (
                <span className="font-mono text-[10px] uppercase tracking-wide opacity-50">
                  now
                </span>
              ) : null}
            </div>
            <p className="font-semibold mt-0.5">{item.title}</p>
            {item.note ? (
              <p className="text-sm text-zinc-500 dark:text-zinc-400 mt-0.5">
                {item.note}
              </p>
            ) : null}
          </Reveal>
        </li>
      ))}
    </ol>
  );
};

export default Timeline;
