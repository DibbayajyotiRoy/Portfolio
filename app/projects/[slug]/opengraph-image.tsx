import { getProject } from "@/lib/content/projects";
import { hubs } from "@/lib/content/hubs";
import { getAccent } from "@/lib/content/brand";
import {
  renderOgImage,
  OG_SIZE,
  OG_CONTENT_TYPE,
} from "@/lib/og";

export const runtime = "edge";
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;
export const alt = "Project by Dibbayajyoti Roy";

export function generateStaticParams() {
  return Object.keys(hubs).map((slug) => ({ slug }));
}

export default function OgImage({ params }: { params: { slug: string } }) {
  const hub = hubs[params.slug];
  const project = getProject(params.slug);
  const accent = getAccent(params.slug);
  return renderOgImage({
    kicker: hub?.kicker ?? "project",
    title: project.name,
    subtitle: hub?.subtitle ?? project.tagline,
    accent: accent.accent,
    glyph: accent.glyph,
  });
}
