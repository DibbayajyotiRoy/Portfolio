import Image from "next/image";
import Link from "next/link";
import { profile } from "@/lib/content/profile";

// In-page résumé preview: PNG renders of the PDF's pages (see
// profile.resume.previews) — no native browser PDF viewer chrome. Clicking a
// page or "open PDF" shows the actual PDF; "download" saves it.
const ResumeViewer = () => {
  const { path, previews } = profile.resume;

  return (
    <div className="flex flex-col gap-3">
      {previews.map((preview, i) => (
        <Link
          key={preview}
          href={path}
          target="_blank"
          rel="noopener noreferrer"
          title="Open the résumé PDF"
        >
          <Image
            src={preview}
            alt={`Résumé of ${profile.name}, page ${i + 1} of ${previews.length}`}
            width={1275}
            height={1650}
            className="w-full h-auto rounded-md border border-blackout/15 dark:border-whiteout/15 bg-white"
          />
        </Link>
      ))}
      <p className="flex gap-4 font-mono text-sm">
        <Link
          href={path}
          target="_blank"
          rel="noopener noreferrer"
          className="underline hover:opacity-80"
        >
          open PDF →
        </Link>
        <Link href={path} download className="underline hover:opacity-80">
          download ↓
        </Link>
      </p>
    </div>
  );
};

export default ResumeViewer;
