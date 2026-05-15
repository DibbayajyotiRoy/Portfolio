# 30–60 day experiments

Six experiments. Each has a hypothesis, an action, a measurement window,
and a kill / double-down decision rule. Run two at a time so the signal
isn't muddied. Review every Friday.

---

## E1 — Comparison pages drive product traffic

**Hypothesis:** the three new comparison pages outrank or peer with
existing comparison content for `{product} vs {competitor}` queries
within 60 days.

**Action:** ship the three pages (done), submit each via GSC URL
Inspection, link from /work and footer (done), share each on the matching
subreddit and X.

**Measure:** impressions / clicks / position in GSC for the comparison
queries. Vercel Analytics referrer breakdown for each page.

**Window:** 60 days from indexing.

**Decision:** if any comparison page reaches average position < 15 with
> 200 impressions, double down — write 2 more comparison pages for that
product (`/diffcore-vs-fast-json-patch`, `/klinder-vs-logrocket`,
`/ahtml-vs-mcp`). If a page sits at position > 30 with no movement, the
positioning is wrong — rewrite the H1 + TLDR + first table row.

---

## E2 — Reddit replies convert to npm downloads

**Hypothesis:** disciplined Reddit participation (5 quality replies per
week, see [reddit-playbook.md](./reddit-playbook.md)) drives a measurable
lift in weekly npm downloads for at least one of `diffcore` or
`@ahtmljs/*`.

**Action:** 5 replies per week for 8 weeks, logged in a sheet with
permalink + product mentioned + upvotes after 24h.

**Measure:** Weekly npm downloads (already pulled by `components/npm-stats.tsx`).
Compare 4-week trailing average before / during / after.

**Window:** 8 weeks of activity + 2-week tail = 10 weeks.

**Decision:** if downloads lift > 20% above pre-campaign baseline AND
the threads with highest upvote correlate with download spikes, double
down to 10 replies/week. If no measurable lift after 6 weeks, stop —
that hour/day is better spent writing.

---

## E3 — Listicle outreach yields backlinks

**Hypothesis:** 5 personalized outreach emails per week (see
[listicle-outreach.md](./listicle-outreach.md)) converts at 10–15% to a
listing within 60 days.

**Action:** 5 emails per week for 8 weeks. One follow-up only after 10
days. Track opens (use any email tool).

**Measure:** count of new backlinks added (verified via GSC > Links or
Ahrefs free backlinks check). Compare DR distribution.

**Window:** 8 weeks of sending + 4 weeks of tail = 12 weeks.

**Decision:** if conversion rate > 8%, double down — increase to 10
emails/week and pitch guest posts to the highest-DR responders. If <
3% with non-template emails, the targeting is off — go back to keyword
research and find better-aligned listicles.

---

## E4 — One long-form article per month outranks landing pages

**Hypothesis:** a 1500–2200-word article on a Tier 1 keyword from
[keyword-targets.md](./keyword-targets.md) generates more cumulative
traffic over 90 days than the matching product landing page.

**Action:** publish 2 articles in 60 days. Pick from the Tier 1 list.
Each links to its product hub and at least one comparison page.

**Measure:** GSC clicks/impressions per URL. GA4 organic users by landing page.

**Window:** 90 days post-publish per article.

**Decision:** if articles outperform landing pages, the content engine
is the priority — schedule 2/month for the next quarter. If they
underperform and the landing page is winning, the answer is more
landing pages, not articles — write product-page variants targeting
specific buyer intents (`klinder for cloudflare workers`, `klinder for
multi-tenant SaaS`).

---

## E5 — CTAs on /work move clicks to product hubs

**Hypothesis:** explicit per-project CTAs (Demo · GitHub · Compare)
shipped this round increase outbound click rate from /work by ≥ 30%.

**Action:** the CTAs are now live on /work. Add Vercel Analytics
custom events `cta_click_klinder_demo`, `cta_click_diffcore_npm`,
`cta_click_compare_diffcore`, etc. (Vercel Analytics supports
`track('cta_click_X')` calls.)

**Measure:** custom event count per CTA per week. Outbound link clicks
to klinder-oss.vercel.app, npmjs.com/package/diffcore,
npmjs.com/org/ahtmljs.

**Window:** 30 days from instrumentation live.

**Decision:** if any CTA hits > 50 clicks/month, that's a high-intent
slot — A/B test the wording (`Open the demo →` vs `Try it live →`). If
all CTAs underperform, audit page friction (scroll depth, time on page).

*Note:* CTAs are visually live but the custom event instrumentation is
still TODO. Add `import { track } from "@vercel/analytics"` and wire
each CTA's onClick when you're ready.

---

## E6 — AHTML category-creation outperforms competitor-fight

**Hypothesis:** content that *defines a new category* (AHTML, agentic
HTML, well-known agent endpoint) compounds faster than content that
fights an established SERP.

**Action:** publish "What is AHTML?" canonical article + push it to
the agentic-web Reddit communities + ensure `agentic html` JSON-LD
keywords are present everywhere. Compare against Diffcore's
fight-the-incumbent strategy.

**Measure:** branded vs unbranded query split in GSC. AHTML brand
queries (`ahtml`, `agentic html`, `@ahtmljs`) growing month-over-month
is the leading indicator.

**Window:** 90 days.

**Decision:** if AHTML brand queries outpace Diffcore competitor-keyword
queries, the lesson is that *category creation > competitor fight* for
your SEO posture — invest more in AHTML. If the opposite, Diffcore's
fight-the-stale-incumbents wedge is the model — replicate it for any
other product where competitors have stalled.

---

## What success looks like at day 60

- 9 indexed URLs in GSC, all with at least 50 impressions over 28 days.
- ≥ 2 comparison pages at average position < 20.
- ≥ 5 backlinks from Wave 1 directories per product.
- ≥ 1 listicle inclusion from outreach.
- Reddit referrer traffic is measurable (not noise) in Vercel Analytics.
- npm `diffcore` and `@ahtmljs/*` weekly downloads are measurably higher
  than the 4-week pre-launch trailing average.

What success does NOT look like:

- Top-3 ranking on a single keyword. SEO is cumulative; one ranking is
  noise. Look at the *distribution* of rankings shifting upward.

---

## What to never optimize for

- DR / DA score itself. They're proxy metrics. The real metric is clicks.
- Pageviews on `/`. The homepage's job is to send qualified traffic to
  product hubs, not to rank for anything. Don't chase /'s position.
- Newsletter signups. You don't have a newsletter and shouldn't add one
  unless you commit to publishing on a fixed cadence. Better: link to X
  and Medium in /contact (already done).
