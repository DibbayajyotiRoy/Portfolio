import { base } from "@/lib/content/brand";
import {
  renderOgImage,
  OG_SIZE,
  OG_CONTENT_TYPE,
} from "@/lib/og";

export const runtime = "edge";
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;
export const alt = "Projects by Dibbayajyoti Roy";

export default function OgImage() {
  return renderOgImage({
    kicker: "projects · open source",
    title: "Projects",
    subtitle: "whatbroke · AHTML · Roy UI · Klinder · Diffcore · Fresco",
    accent: base.whiteout,
    glyph: "▦",
  });
}
