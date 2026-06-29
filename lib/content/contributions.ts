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
  /** Upstream version the change ships in; omit if merged but not yet in a tagged release. */
  shippedIn?: string;
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
  {
    id: "reductstore-usage-statistics",
    project: "ReductStore",
    projectBlurb: "Rust time-series database",
    repoUrl: "https://github.com/reductstore/reductstore",
    prTitle: "Feat/usage statistics",
    prNumber: 1431,
    prUrl: "https://github.com/reductstore/reductstore/pull/1431",
    shippedIn: "v1.20",
    summary:
      "every node now writes its own usage statistics — read/write traffic counted at the storage-engine level plus storage-size snapshots — as queryable $system records on a 60-second interval, with replicas forwarding to the primary for one consolidated, operational view of the whole instance",
    seoDescription:
      "Merged contribution to ReductStore (Rust time-series database) by Dibbayajyoti Roy: instance-wide usage statistics — read/write traffic and storage totals — written as queryable $system records every 60 seconds, with replicas forwarding to the primary for a consolidated operational view. PR #1431, reviewed and merged by the maintainer, shipped in ReductStore v1.20.",
  },
  {
    id: "reductstore-per-bucket-usage-stats",
    project: "ReductStore",
    projectBlurb: "Rust time-series database",
    repoUrl: "https://github.com/reductstore/reductstore",
    prTitle: "Feat/per bucket usage stats",
    prNumber: 1474,
    prUrl: "https://github.com/reductstore/reductstore/pull/1474",
    summary:
      "usage telemetry gains per-bucket granularity — each bucket emits its own $system event alongside the instance total — plus new written_entries, read_entries, and record_count metrics, so operators can attribute traffic and storage to individual buckets instead of only the instance as a whole",
    seoDescription:
      "Merged contribution to ReductStore (Rust time-series database) by Dibbayajyoti Roy: per-bucket usage statistics emitted as $system events alongside the instance total, adding written_entries, read_entries, and record_count metrics. PR #1474, reviewed and merged by the maintainer; merged to main and shipping in an upcoming release.",
  },
  {
    id: "reductstore-system-logs",
    project: "ReductStore",
    projectBlurb: "Rust time-series database",
    repoUrl: "https://github.com/reductstore/reductstore",
    prTitle: "feat(syslog): capture log messages to $system/logs/<instance> (#1467)",
    prNumber: 1481,
    prUrl: "https://github.com/reductstore/reductstore/pull/1481",
    summary:
      "the database can now capture its own log output as queryable data — an opt-in pipeline writes system log messages into a $system/logs/<instance>/messages stream at a configurable severity level, so a node's logs can be queried as time-series records alongside its other system events instead of only scrolling past on stdout",
    seoDescription:
      "Merged contribution to ReductStore (Rust time-series database) by Dibbayajyoti Roy: an opt-in pipeline that captures the instance's own log messages into $system/logs/<instance>/messages as queryable system events at a configurable severity level, with a reentrancy guard so writing a log never recurses into itself. PR #1481 (resolving issue #1467), reviewed and merged by the maintainer; merged to main and shipping in an upcoming release.",
  },
  {
    id: "pyrefly-pytyped-untyped-import",
    project: "Pyrefly",
    projectBlurb: "Meta's Python type checker",
    repoUrl: "https://github.com/facebook/pyrefly",
    prTitle:
      "Fix untyped-import false positive for packages with py.typed marker (#3445)",
    prNumber: 3840,
    prUrl: "https://github.com/facebook/pyrefly/pull/3840",
    summary:
      "Pyrefly flagged a false-positive untyped-import diagnostic for libraries that ship their own types — it recommended installing stub packages even when a PEP 561 py.typed marker was present (e.g. modern requests). The fix detects that marker before warning, walking to the package root so it works for both top-level imports and submodules",
    seoDescription:
      "Merged contribution to Pyrefly (Meta's open-source, Rust-built Python type checker) by Dibbayajyoti Roy: fixes a false-positive untyped-import diagnostic by detecting the PEP 561 py.typed marker at the package root before recommending stub packages, correctly handling both top-level imports and submodules. PR #3840, imported and merged by a Meta maintainer via codesync, shipping in an upcoming release.",
  },
];
