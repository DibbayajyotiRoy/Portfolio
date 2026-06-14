"use client";

import { useState } from "react";

// Fresco's product accent (see lib/content/brand.ts). Used inline because it is
// a one-off, not a Tailwind token.
const TEAL = "#10C7B6";

const APT = "sudo apt install ./fresco_*.deb";
const INSTALLER =
  "curl -fsSL https://github.com/DibbayajyotiRoy/fresco/releases/latest/download/install.sh | bash";
const RELEASES = "https://github.com/DibbayajyotiRoy/Fresco/releases/latest";

function CopyButton({ text }: { text: string }) {
  const [copied, setCopied] = useState(false);
  return (
    <button
      type="button"
      aria-label={copied ? "Copied" : "Copy command"}
      title={copied ? "Copied" : "Copy"}
      onClick={() => {
        navigator.clipboard?.writeText(text).then(() => {
          setCopied(true);
          setTimeout(() => setCopied(false), 1500);
        });
      }}
      className="grid h-9 w-9 shrink-0 place-items-center rounded-lg border border-blackout/10 text-blackout/60 transition-colors hover:border-blackout/25 hover:text-blackout dark:border-whiteout/10 dark:text-whiteout/60 dark:hover:border-whiteout/25 dark:hover:text-whiteout"
    >
      {copied ? (
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke={TEAL}
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden
        >
          <path d="M5 13l4 4L19 7" />
        </svg>
      ) : (
        <svg
          width="15"
          height="15"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden
        >
          <rect x="9" y="9" width="11" height="11" rx="2" />
          <path d="M5 15V5a2 2 0 0 1 2-2h10" />
        </svg>
      )}
    </button>
  );
}

function CommandBox({ command }: { command: string }) {
  return (
    <div className="flex items-start gap-2 rounded-xl border border-blackout/10 bg-blackout/[0.03] p-3 dark:border-whiteout/10 dark:bg-whiteout/[0.03]">
      <pre className="m-0 min-w-0 flex-1 whitespace-pre-wrap break-all font-mono text-sm leading-relaxed">
        {command}
      </pre>
      <CopyButton text={command} />
    </div>
  );
}

export function FrescoInstall() {
  return (
    <div className="flex flex-col gap-4 rounded-2xl border border-blackout/10 bg-blackout/[0.02] p-5 dark:border-whiteout/10 dark:bg-whiteout/[0.02] sm:p-6">
      <div className="flex items-center gap-3">
        <span
          className="grid h-11 w-11 shrink-0 place-items-center rounded-xl"
          style={{ backgroundColor: `${TEAL}22`, color: TEAL }}
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden
          >
            <path d="M21 8 12 3 3 8v8l9 5 9-5V8z" />
            <path d="m3 8 9 5 9-5" />
            <path d="M12 13v10" />
          </svg>
        </span>
        <div>
          <div className="font-semibold leading-tight">Download the .deb</div>
          <div className="text-sm leading-tight opacity-60">
            From GitHub releases
          </div>
        </div>
      </div>

      <p className="text-sm opacity-85 sm:text-base">
        Grab the latest <span className="font-mono text-sm">.deb</span> and
        double-click it, or install from the terminal:
      </p>
      <CommandBox command={APT} />

      <p className="text-sm opacity-85 sm:text-base">
        Prefer one command? Run the installer:
      </p>
      <CommandBox command={INSTALLER} />

      <a
        href={RELEASES}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 self-start rounded-xl px-4 py-2.5 text-sm font-semibold transition-transform hover:-translate-y-0.5"
        style={{ backgroundColor: TEAL, color: "#03100e" }}
      >
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden
        >
          <path d="M12 3v12" />
          <path d="m7 11 5 5 5-5" />
          <path d="M5 21h14" />
        </svg>
        Latest release
      </a>
    </div>
  );
}
