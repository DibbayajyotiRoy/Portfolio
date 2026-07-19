"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { profile } from "@/lib/content/profile";
import { sound } from "@/lib/sound";

// Role-targeted résumés (see profile.resumes). The in-page preview is a PNG
// render of each PDF's page — no native browser PDF viewer chrome. Tabs
// switch the preview; open/download act on the actual PDF.
const ResumeViewer = () => {
  const [active, setActive] = useState(0);
  const resume = profile.resumes[active];

  return (
    <div className="flex flex-col gap-3">
      <div className="flex flex-wrap gap-2">
        {profile.resumes.map((r, i) => (
          <button
            key={r.path}
            onClick={() => {
              sound.viewSwitch();
              setActive(i);
            }}
            className={`rounded-md border px-3 py-1 font-mono text-sm transition-transform duration-150 ease-out active:scale-[0.97] ${
              i === active
                ? "border-blackout dark:border-whiteout/50 font-medium"
                : "border-blackout/30 dark:border-whiteout/20 opacity-60 hover:opacity-90"
            }`}
          >
            {r.label}
          </button>
        ))}
      </div>
      <Link
        href={resume.path}
        target="_blank"
        rel="noopener noreferrer"
        title={`Open the ${resume.label} résumé PDF`}
      >
        <Image
          src={resume.preview}
          alt={`${resume.label} résumé of ${profile.name}, page 1`}
          width={1275}
          height={1650}
          className="w-full h-auto rounded-md border border-blackout/15 dark:border-whiteout/15 bg-white"
        />
      </Link>
      <p className="flex gap-4 font-mono text-sm">
        <Link
          href={resume.path}
          target="_blank"
          rel="noopener noreferrer"
          className="underline hover:opacity-80"
        >
          open PDF →
        </Link>
        <Link href={resume.path} download className="underline hover:opacity-80">
          download ↓
        </Link>
      </p>
    </div>
  );
};

export default ResumeViewer;
