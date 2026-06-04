# Path to 100K visitors — overview

Goal: 100K monthly organic visitors to dibbayajyoti.com inside 12 months.

Five product hubs anchor the strategy — Klinder-OSS, Diffcore, AHTML,
whatbroke (Apache-2.0, fully open source, free for commercial use), and
Roy UI (MIT). The portfolio is the entity hub. Every piece of content links
back to one or more product hubs and one or more comparison pages.

## Site additions shipped this round

In-codebase work that ships immediately when you push:

- `/about` — biographical hub, AboutPage JSON-LD
- `/contact` — channels + open-to + response time, ContactPage JSON-LD
- `/privacy` — minimal data notice, WebPage JSON-LD
- `/diffcore-vs-jsondiffpatch` — comparison + FAQ schema (strongest wedge)
- `/klinder-vs-posthog` — comparison + FAQ schema
- `/ahtml-vs-llms-txt` — comparison + FAQ schema (category-defining)
- Updated `sitemap.ts` — 9 URLs total
- Updated `nav` and `footer` — `about`, `contact`, comparison-page links
- CTAs added to every project card on `/work` (demo · GitHub · Compare)

## Off-site work still owned by you

The rest of the path needs your hands and your accounts. The other docs
in this folder are step-by-step playbooks for each:

- [`gsc-setup-checklist.md`](./gsc-setup-checklist.md) — connect Search Console + GA4 + Bing Webmaster
- [`directory-submissions.md`](./directory-submissions.md) — backlinks across the five products
- [`reddit-playbook.md`](./reddit-playbook.md) — subreddits to monitor + reply templates
- [`listicle-outreach.md`](./listicle-outreach.md) — listicles to get on + outreach template
- [`keyword-targets.md`](./keyword-targets.md) — low-comp / high-intent terms + briefs
- [`experiments-30-60-day.md`](./experiments-30-60-day.md) — what to measure, when to keep, when to kill

## 30 / 60 / 90 day plan

### Days 0–30 — wire the foundations

- Push the new pages and verify `/sitemap.xml` reflects all 9 URLs.
- Connect GSC + Bing + GA4 ([gsc-setup-checklist.md](./gsc-setup-checklist.md)).
- Submit sitemap.xml to GSC and Bing.
- Submit each new URL via GSC URL Inspection → Request indexing.
- Run baseline Lighthouse / CrUX on `/`, `/work`, `/writing`, the three comparison pages.
- Submit to the top 10 directories per product ([directory-submissions.md](./directory-submissions.md) — Wave 1).
- Post one launch thread per product on the matching subreddit ([reddit-playbook.md](./reddit-playbook.md)).

### Days 31–60 — first content + outreach

- Publish 2 articles targeting `/keyword-targets.md` Tier 1 terms.
- Send first 10 listicle outreach emails ([listicle-outreach.md](./listicle-outreach.md)).
- Submit to the next 15 directories per product (Wave 2).
- Reply to 5 relevant Reddit threads per week (no link drops — see playbook).
- Pull GSC for first impressions; rewrite titles/descriptions on any URL with CTR < 1% at impressions > 50.

### Days 61–90 — double down

- Pick 2 winning experiments from [experiments-30-60-day.md](./experiments-30-60-day.md) and double the budget.
- Kill anything flat. Document why so you don't repeat it.
- Publish 4 more articles, weighted toward whichever hub is converting.
- Pitch 2 podcasts in the agentic-web / Rust / WASM space.

## Measurement

Single dashboard, three tabs:

1. **Acquisition** — GSC clicks/impressions/CTR/position, GA4 organic users, Reddit referrer.
2. **Engagement** — `/work` and comparison-page time-on-page, scroll depth, CTA clicks (Vercel Analytics events).
3. **Distribution** — npm weekly downloads per package (already pulled by `components/npm-stats.tsx`), GitHub stars, signups to Klinder demo.

Review weekly on Friday. Anything that hasn't moved in 4 weeks gets rewritten or killed.
