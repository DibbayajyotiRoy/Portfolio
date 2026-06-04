import { ImageResponse } from "next/og";
import { base } from "@/lib/content/brand";

/**
 * Shared OpenGraph card renderer — one code path for every product hub.
 *
 * Brand rule made mechanical: blackout background, monochrome type, exactly one
 * accent per card, mono for the machine-readable lines (kicker + domain). Only
 * `accent`, `glyph`, `title`, `subtitle`, and `kicker` vary between products, so
 * the five cards are guaranteed to read as one system. Uses system fonts (no
 * edge font fetch) for robustness.
 */

export const OG_SIZE = { width: 1200, height: 630 };
export const OG_CONTENT_TYPE = "image/png";

export interface OgParams {
  kicker: string;
  title: string;
  subtitle: string;
  accent: string;
  glyph: string;
}

const MONO = "ui-monospace, SFMono-Regular, Menlo, monospace";
const SANS = "ui-sans-serif, system-ui, -apple-system, Segoe UI, sans-serif";

export function renderOgImage({
  kicker,
  title,
  subtitle,
  accent,
  glyph,
}: OgParams) {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: base.blackout,
          color: base.whiteout,
          padding: "72px 80px",
          position: "relative",
        }}
      >
        {/* accent rule, top */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: 8,
            background: accent,
          }}
        />

        {/* kicker */}
        <div
          style={{
            display: "flex",
            fontFamily: MONO,
            fontSize: 26,
            textTransform: "uppercase",
            letterSpacing: 2,
            color: accent,
          }}
        >
          {kicker}
        </div>

        {/* title + subtitle */}
        <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 28,
              fontFamily: SANS,
              fontSize: 104,
              fontWeight: 700,
              lineHeight: 1.0,
            }}
          >
            <span
              style={{
                fontFamily: MONO,
                color: accent,
                fontSize: 88,
              }}
            >
              {glyph}
            </span>
            {title}
          </div>
          <div
            style={{
              display: "flex",
              fontFamily: SANS,
              fontSize: 40,
              color: "rgba(247,247,247,0.6)",
              lineHeight: 1.15,
            }}
          >
            {subtitle}
          </div>
        </div>

        {/* footer: maker + domain */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            fontFamily: MONO,
            fontSize: 26,
            color: "rgba(247,247,247,0.55)",
          }}
        >
          <span>Dibbayajyoti Roy</span>
          <span>dibbayajyoti.com</span>
        </div>
      </div>
    ),
    { ...OG_SIZE }
  );
}
