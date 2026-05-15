# GSC + GA4 + Bing setup checklist

One-time wiring. Do this once, then it feeds every other workflow.

## Search Console

1. Go to https://search.google.com/search-console.
2. Add `https://dibbayajyoti.com` as a **Domain property** (preferred — covers www, http/https, all subdomains).
3. Verify with a DNS TXT record on Cloudflare / your registrar.
4. After verification, in **Sitemaps**, submit `https://dibbayajyoti.com/sitemap.xml`.
5. Use **URL Inspection** on each of the 9 URLs in `sitemap.ts` and click *Request indexing* for each. Order:
   - `/`
   - `/work`
   - `/about`
   - `/diffcore-vs-jsondiffpatch`
   - `/klinder-vs-posthog`
   - `/ahtml-vs-llms-txt`
   - `/writing`
   - `/contact`
   - `/privacy`

GSC takes 2–14 days to start showing impressions. Don't refresh frantically.

## Bing Webmaster Tools

1. Go to https://www.bing.com/webmasters.
2. *Import from Google Search Console* — picks up the verified property.
3. Submit the same sitemap URL.
4. Bing now powers ChatGPT search — this matters more than people think.

## Google Analytics 4

1. Create a GA4 property at https://analytics.google.com.
2. Get the Measurement ID (`G-XXXXXXXXXX`).
3. Vercel Analytics is already wired in `app/layout.tsx`. To add GA4 alongside, install `@next/third-parties` and add `<GoogleAnalytics gaId="G-XXX" />` after `<SpeedInsights />`. Keep both — Vercel for fast first-party numbers, GA4 for organic-traffic attribution and audience.

## CrUX field data

1. Visit https://pagespeed.web.dev/ and run each of the 9 URLs.
2. Note the **Origin Summary** — that's what Google ranks on. Page-level CrUX won't exist yet for low-traffic URLs; origin will.
3. Targets: LCP < 2.5s, INP < 200ms, CLS < 0.1 on mobile.

## Indexing API (optional, advanced)

Google's Indexing API officially supports JobPosting and BroadcastEvent
schemas only — but it accepts and processes other URL types in practice.
If you want push-on-publish indexing, set up a service account at
https://console.cloud.google.com → enable Indexing API → grant the
service account *Owner* on the GSC property → POST to
`https://indexing.googleapis.com/v3/urlNotifications:publish`.

Skip this until you're publishing 2+ articles per week.

## Verification it worked

After 7 days, GSC > Performance should show:

- Impressions on `dibbayajyoti.com` and `dibbayajyoti roy` queries.
- Impressions on at least one of `diffcore`, `ahtml`, `klinder` queries.
- All 9 URLs reported as *Indexed* in Coverage.

If anything is "Discovered, currently not indexed" after 14 days, that
URL probably needs more inbound links — that's what the directory and
listicle work is for.
