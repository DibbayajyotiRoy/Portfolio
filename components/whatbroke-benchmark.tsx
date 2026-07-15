"use client";

import { BarChart } from "@/components/dither-kit/bar-chart";
import { Bar } from "@/components/dither-kit/bar";
import { XAxis } from "@/components/dither-kit/x-axis";
import { YAxis } from "@/components/dither-kit/y-axis";
import { Tooltip } from "@/components/dither-kit/tooltip";

// whatbroke's real, measured suspect-ranking accuracy (v0.3.0 README): top-1
// 90.3%, top-3 100% over 31 scored cases from 35 regression scenarios, CI-gated.
const data = [
  { metric: "top-1", accuracy: 90.3 },
  { metric: "top-3", accuracy: 100 },
];

const config = {
  accuracy: { label: "suspect accuracy", color: "green" as const },
};

const WhatbrokeBenchmark = () => {
  return (
    <div>
      <div className="h-[150px] w-full max-w-[340px]">
        <BarChart data={data} config={config} bloom="low">
          <YAxis tickCount={3} tickFormatter={(t) => `${t}%`} />
          <XAxis dataKey="metric" />
          <Bar dataKey="accuracy" variant="gradient" />
          <Tooltip valueFormatter={(v) => `${v}%`} />
        </BarChart>
      </div>
      <p className="mt-2 text-sm opacity-60 max-w-[44ch]">
        top-1 / top-3 suspect-ranking accuracy over 35 real regression
        scenarios, CI-gated.
      </p>
    </div>
  );
};

export default WhatbrokeBenchmark;
