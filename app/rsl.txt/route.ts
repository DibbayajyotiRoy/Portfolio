// RSL (Really Simple Licensing) / Content Signals for AI crawlers, advertised
// by the AHTML discovery manifest. States the site's search / ai_input /
// ai_train permissions and attribution terms in a machine-readable form.
import { policyToRsl } from "@ahtmljs/schema";
import { AHTML_CONFIG } from "@/lib/ahtml";

export function GET() {
  const body = policyToRsl(AHTML_CONFIG.policy!, AHTML_CONFIG.site, {
    publisher: "Dibbayajyoti Roy",
  });
  return new Response(body, {
    headers: {
      "content-type": "text/plain; charset=utf-8",
      "cache-control": "public, max-age=3600",
    },
  });
}
