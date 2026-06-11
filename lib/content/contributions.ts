/**
 * Single source of truth for open-source contribution facts.
 *
 * Same contract as ./projects: the *facts* of each contribution — links, PR
 * number, ship version, the maintainer's endorsement quote — live here
 * exactly once. /open-source renders them in full; /work and /rust carry
 * their own compact prose and link here so nothing drifts.
 */

export interface ContributionEndorsement {
  /** Verbatim lines quoted from the public post. */
  quote: string[];
  author: string;
  authorTitle: string;
  /** Public URL of the post the quote is taken from. */
  url: string;
}

export interface Contribution {
  id: string;
  /** Upstream project name — e.g. "ReductStore". */
  project: string;
  /** Short noun phrase — what the upstream project is. */
  projectBlurb: string;
  repoUrl: string;
  /** Merged PR title as it appears upstream. */
  prTitle: string;
  prNumber: number;
  prUrl: string;
  /** Upstream version the change ships in. */
  shippedIn: string;
  /** What the contribution does — rendered on /open-source. */
  summary: string;
  /** Machine-readable description — rendered into JSON-LD. */
  seoDescription: string;
  endorsement?: ContributionEndorsement;
}

export const contributions: Contribution[] = [
  {
    id: "reductstore-replication-audit",
    project: "ReductStore",
    projectBlurb: "Rust time-series database",
    repoUrl: "https://github.com/reductstore/reductstore",
    prTitle: "Feat/replication audit events",
    prNumber: 1417,
    prUrl: "https://github.com/reductstore/reductstore/pull/1417",
    shippedIn: "v1.20",
    summary:
      "replication tasks now emit aggregated, status-keyed telemetry into a queryable $system bucket, so users can query replication sync state like any other data and build diagnostic dashboards and notifications on top of it — instead of having no visibility",
    seoDescription:
      "Merged contribution to ReductStore (Rust time-series database) by Dibbayajyoti Roy: replication tasks emit aggregated, status-keyed statistics into a queryable $system bucket for diagnostic dashboards and notifications. PR #1417, reviewed and merged by the maintainer, shipping in ReductStore v1.20.",
    endorsement: {
      quote: [
        "In next version 1.20, #ReductStore will provide statistics from replication tasks in the $system bucket so you can query them as other data and use them for diagnostic dashboards and notifications.",
        "Thanks Dibbayajyoti Roy for an amazing contribution! \u{1F44F}\u{1F44F}\u{1F44F}",
      ],
      author: "Alexey Timin",
      authorTitle: "Software Engineer | Co-Founder @ ReductStore",
      url: "https://www.linkedin.com/posts/atimin_featreplication-audit-events-by-dibbayajyotiroy-share-7469681078874705920-NSpe/",
    },
  },
];
