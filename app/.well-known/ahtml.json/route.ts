// AHTML discovery manifest. Any AHTML-aware agent starts here to learn the
// site's snapshot, MCP, OpenAPI, and llms.txt endpoints.
import { createWellKnownRoute } from "@ahtmljs/next/well-known";
import { AHTML_CONFIG } from "@/lib/ahtml";

export const { GET } = createWellKnownRoute(AHTML_CONFIG);
