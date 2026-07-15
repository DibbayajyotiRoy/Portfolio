// Per-page AHTML snapshot for AI agents. GET /ahtml/<route> returns the
// token-optimal compact form (or ?fmt=json / json-seq), so agents read typed
// entities and actions instead of scraping the HTML.
import { createAHTMLRoute } from "@ahtmljs/next/handler";
import { buildSnapshot, AHTML_CONFIG } from "@/lib/ahtml";

export const { GET, HEAD } = createAHTMLRoute(buildSnapshot, AHTML_CONFIG);
