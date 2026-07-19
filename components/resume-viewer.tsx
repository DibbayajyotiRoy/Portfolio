"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { profile } from "@/lib/content/profile";
import { sound } from "@/lib/sound";

// In-page résumé preview: PNG renders of the PDF's pages (see
// profile.resume.previews) shown one at a time, paginated with arrow buttons
// overlaid on the left/right edges — no native browser PDF viewer chrome.
// Clicking the page or "open PDF" shows the actual PDF; "download" saves it.
const ResumeViewer = () => {
  const { path, previews } = profile.resume;
  const [page, setPage] = useState(0);

  const goTo = (next: number) => {
    sound.viewSwitch();
    setPage(next);
  };

  // Fetch-then-save instead of a bare <a download>, so a failed fetch can
  // play the error sound rather than silently navigating to a 404.
  const download = async () => {
    try {
      const res = await fetch(path);
      if (!res.ok) throw new Error(String(res.status));
      const url = URL.createObjectURL(await res.blob());
      const a = document.createElement("a");
      a.href = url;
      a.download = path.split("/").pop() ?? "resume.pdf";
      a.click();
      URL.revokeObjectURL(url);
      sound.success();
    } catch {
      sound.error();
    }
  };

  const arrowClass =
    "absolute top-1/2 -translate-y-1/2 z-10 h-10 w-10 rounded-full border border-blackout/30 dark:border-whiteout/30 bg-white/90 dark:bg-blackout/90 text-lg leading-none transition-transform duration-150 ease-out hover:scale-105 active:scale-95 disabled:opacity-0 disabled:pointer-events-none";

  return (
    <div className="flex flex-col gap-3">
      <div className="relative">
        <button
          onClick={() => goTo(page - 1)}
          disabled={page === 0}
          aria-label="Previous page"
          className={`${arrowClass} left-2`}
        >
          ←
        </button>
        <button
          onClick={() => goTo(page + 1)}
          disabled={page === previews.length - 1}
          aria-label="Next page"
          className={`${arrowClass} right-2`}
        >
          →
        </button>
        <Link
          href={path}
          target="_blank"
          rel="noopener noreferrer"
          title="Open the résumé PDF"
        >
          <Image
            key={previews[page]}
            src={previews[page]}
            alt={`Résumé of ${profile.name}, page ${page + 1} of ${previews.length}`}
            width={1275}
            height={1650}
            className="w-full h-auto rounded-md border border-blackout/15 dark:border-whiteout/15 bg-white"
          />
        </Link>
      </div>
      <div className="flex items-center justify-between flex-wrap gap-3 font-mono text-sm">
        <span className="opacity-60 [font-variant-numeric:tabular-nums]">
          page {page + 1} / {previews.length}
        </span>
        <p className="flex gap-4">
          <Link
            href={path}
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:opacity-80"
          >
            open PDF →
          </Link>
          <button onClick={download} className="underline hover:opacity-80">
            download ↓
          </button>
        </p>
      </div>
    </div>
  );
};

export default ResumeViewer;
