# Listicle outreach playbook

Goal: get added to existing top-ranking "Best X" / "Top Y" listicles where
your competitors already appear. Backlink + traffic + authority compound.

## Find the targets

For each product, run these queries:

### Diffcore

- `"best json diff library" 2025`
- `"top json diff" javascript`
- `"compare json diff libraries"`
- `"jsondiffpatch alternative"`
- `"fast-json-patch alternative"`
- `"json diff" "wasm"`

### Klinder-OSS

- `"best open source posthog alternative"`
- `"top self-hosted analytics" 2025`
- `"open source session replay"`
- `"open source customer.io alternative"`
- `"alternatives to logrocket open source"`

### AHTML

- `"llms.txt tools"`
- `"best mcp servers" 2025`
- `"agentic web tools"`
- `"langchain document loaders" "list"`
- `"how to make site llm-friendly"`

For each query, capture the top 10 organic results that aren't the
official tool sites. Those are your outreach list.

## Score each target

Add a column for each:

- Domain Rating / Authority (use any free tool — `ahrefs.com/website-authority-checker` works).
- Article date — anything over 18 months old probably won't get updated.
- Author identifiable? — yes is much higher response rate than "Editorial team".
- Has a contact form / email at the bottom of the page?

Cull anything DR < 25 or > 24 months old. You want the live, indexed,
authoritative pages.

## Outreach template

Subject: `quick suggestion for your "{title}" article`

> Hi {name},
>
> Read your "{title}" — solid breakdown. Wanted to flag {tool name} as a
> candidate for a future update. {one specific reason it fits the article's
> framing}. {one specific concrete fact about the tool — RFC compliance,
> benchmark number, package count}.
>
> If it's helpful: {tool URL} · {repo URL}.
>
> No worries either way — figured it was worth a heads up. Thanks for
> writing the piece.
>
> — Dibbayajyoti
> {site URL}

### Why this works

- Compliments first, then the ask.
- Gives them facts they can paste in without having to research.
- Two URLs only — no kitchen sink.
- Explicit "no worries either way" — lowers the social cost of declining
  and ironically raises response rate.

### Don't

- Don't mass-blast. 5 to 10 personalized emails per week beats 100 generic ones.
- Don't follow up more than once. One follow-up after 10 days, then drop it.
- Don't offer a guest post in the same email — separate ask, separate thread.

## Tracking

For each outreach: target URL · author · sent-on · response · added-on · backlink-URL.
Review monthly.

## When you get added

- Add the link to your own swipe file — useful for future outreach
  ("I'm cited on {existing site}, would value a similar mention here").
- Write a public thank-you on X tagging the author.
- If they update with your link, monitor referrer traffic in Vercel
  Analytics — that page is now a recurring acquisition asset.
