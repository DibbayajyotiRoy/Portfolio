# Brand system — one maker, five products

The portfolio (dibbayajyoti.com) is the umbrella. Each product is a child brand
that must read as "from the same maker" while staying distinguishable. The whole
architecture is one rule: **one neutral base, one type family, exactly one accent
per product.**

## Tokens

- **Neutral base:** whiteout `#F7F7F7` (light) / blackout `#080808` (dark).
- **Type:** Geist Sans + Geist Mono everywhere. Mono is used for anything a
  machine reads — install lines, protocol names, file paths, URLs.
- **Reserved:** `pink-400` is for portfolio chrome only (selection, nav). No
  child product may use it — that keeps the umbrella distinct from its children.

## Accent grid (the set)

| Product | Accent | Mark | Lane |
|---|---|---|---|
| whatbroke | `#FFB020` amber + redaction-black | cracked ring / block cursor | terminal forensics |
| AHTML | `#00D26A` green | `< >` brackets + routing node | the protocol / contract layer |
| Roy UI | `#2CCFFF → #0044FF` cyan→blue | stacked DataTable cells | polished UI, dark-first (`#050507`) |
| Klinder-OSS | `#9D7BFF` violet | concentric signal | unified analytics |
| Diffcore | `#FF7A3C` rust-orange | add-over-delete diff | fast Rust/WASM |

Source of truth: [`lib/content/brand.ts`](lib/content/brand.ts). Logo marks live
in [`public/logos/`](public/logos/). OG cards render through one shared template
([`lib/og.tsx`](lib/og.tsx)) so accent + mark + title are the only variables —
consistency is enforced mechanically, not by discipline.

## Voice / tone

- Lowercase, precise, engineer-to-engineer. State the mechanism, not the hype.
  No "revolutionary" / "game-changing".
- Lead with the moment (whatbroke), the contract (AHTML), the constraint
  (Roy UI: "RSC-safe, sub-12 KB, zero config").
- whatbroke's house line is the model: "it diagnoses; it does not fix."

## Do / Don't

**Do:** Geist only · monochrome base + one accent per product · mono for
machine-readable text · render all OG cards from the shared template · dark-first
for product surfaces.

**Don't:** mix two accents in one product · use the dead name "bugpack"
(it's `whatbroke`) · borrow another product's accent · introduce new typefaces or
gradients · ship raster where SVG works (marks, favicons, OG glyphs are vector).
