type StatLineProps = {
  value?: string | null;
  context: string;
  accent?: string;
};

// Display metric pulled out of prose: big tabular-mono value + one line of
// context. Missing data renders an em-dash sentinel, never a fake number.
const StatLine = ({ value, context, accent }: StatLineProps) => {
  return (
    <div className="flex items-baseline gap-x-3 gap-y-1 flex-wrap">
      <span
        className={`font-mono text-2xl sm:text-3xl font-semibold tracking-tight [font-variant-numeric:tabular-nums] ${
          value ? "" : "opacity-40"
        }`}
        style={accent && value ? { color: accent } : undefined}
      >
        {value ?? "n/a"}
      </span>
      <span className="text-sm opacity-60 max-w-[44ch]">{context}</span>
    </div>
  );
};

export default StatLine;
