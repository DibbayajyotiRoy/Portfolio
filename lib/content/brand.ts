/**
 * Brand system — one maker, five products, one neutral base, one accent each.
 *
 * The umbrella brand is monochrome (whiteout #F7F7F7 / blackout #080808) with
 * Geist Sans + Geist Mono. `pink-400` is reserved for portfolio chrome only, so
 * no child product uses it. Each product owns exactly one accent; that single
 * rule is the whole brand architecture and is what makes the five read as a set.
 *
 * Keyed by Project.id (see ./projects). Consumed by the project hub pages and by
 * the shared OpenGraph image template (lib/og.tsx).
 */

export interface ProductAccent {
  /** Primary accent hex — the one color this product is allowed. */
  accent: string;
  /** A short mark glyph used in the OG card and hub kicker. */
  glyph: string;
  /** One-word descriptor of the visual lane, for alt text / aria. */
  lane: string;
}

export const accents: Record<string, ProductAccent> = {
  whatbroke: { accent: "#FFB020", glyph: "▮", lane: "terminal-amber" },
  ahtml: { accent: "#00D26A", glyph: "</>", lane: "protocol-green" },
  "roy-ui": { accent: "#2CCFFF", glyph: "▦", lane: "ui-cyan" },
  "klinder-oss": { accent: "#9D7BFF", glyph: "◉", lane: "analytics-violet" },
  diffcore: { accent: "#FF7A3C", glyph: "±", lane: "diff-rust" },
};

/** Neutral base tokens shared by every surface. */
export const base = {
  blackout: "#080808",
  whiteout: "#F7F7F7",
} as const;

export const getAccent = (id: string): ProductAccent =>
  accents[id] ?? { accent: base.whiteout, glyph: "·", lane: "neutral" };
