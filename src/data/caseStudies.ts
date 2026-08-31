import { projects, type Project } from "./projects";

// ---------------------------------------------------------------------------
// Long-form case study schema
//
// Every section is optional and placeholder-tolerant: the page renders a
// structurally complete case study even before real evidence is added.
// Placeholders use the [Add ...] convention so gaps are obvious.
// ---------------------------------------------------------------------------

export interface Finding {
  observation: string;
  evidence: string;
  whyItMattered: string;
}

export interface OptionRow {
  label: string;
  description: string;
  benefits: string;
  limitations: string;
  complexity: "Low" | "Medium" | "High" | string;
}

export interface PriorityRow {
  item: string;
  impact: string;
  effort: string;
  decision: "MVP" | "Next" | "Later" | "Not pursuing" | string;
  reasoning: string;
}

export interface KeyDecision {
  area: string;
  problem: string;
  decision: string;
  why: string;
  alternative: string;
}

export interface MetricGroup {
  category: string;
  items: string[];
  /** Distinguishes measured results from proposed future measurement */
  status: "Measured" | "Proposed";
}

export interface CaseStudy {
  slug: string;
  title: string;
  headline: string;
  summary: string;
  meta: {
    role: string;
    timeline: string;
    stage: string;
    ownership: string;
  };
  independent?: boolean;
  externalLink?: string;
  executiveSummary: {
    challenge: string;
    role: string;
    approach: string;
    outcome: string;
  };
  context: {
    product: string;
    users: string;
    existingWorkflow: string;
    marketOrOrg: string;
    constraints: string;
    whyItMattered: string;
  };
  problem: {
    userGoal: string;
    existingExperience: string;
    friction: string[];
    whyItMattered: string;
    beforeFlow: string[];
  };
  discovery: {
    questions: string[];
    evidence: string[];
    findings: Finding[];
  };
  insight: {
    quote: string;
    believed: string;
    discovered: string;
    changed: string;
  };
  strategy: {
    hypothesis: string;
    principles: string[];
    targetFlow: string[];
    notSolving: string[];
  };
  options: {
    rows: OptionRow[];
    decision: string;
    why: string;
    gaveUp: string;
    worthIt: string;
  };
  prioritization: {
    rows: PriorityRow[];
    mvp: string;
    cut: string[];
  };
  keyDecisions: KeyDecision[];
  execution: {
    owned: string[];
    crossFunctional: { fn: string; detail: string }[];
    delivery: { phase: string; detail: string }[];
  };
  measurement: {
    primaryOutcome: string;
    metrics: MetricGroup[];
    why: string;
  };
  outcomes: {
    results: string[];
    validated: string[];
    invalidated: string[];
    unexpected: string[];
    earlyStage?: boolean;
  };
  reflection: {
    doDifferently: string[];
    learned: string[];
  };
}

const P = {
  evidence: "[Add evidence]",
  insight: "[Add discovery insight]",
  decision: "[Add actual product decision]",
  metric: "[Add verified metric]",
  detail: "[Add detail]",
};

/** Generic, honest scaffold derived from the short summary already on file. */
function scaffold(p: Project): CaseStudy {
  return {
    slug: p.slug,
    title: p.title,
    headline: p.headline ?? p.subtitle,
    summary: p.overview,
    meta: {
      role: p.role,
      timeline: p.timeline,
      stage: p.independent ? "0→1" : "[Add product stage]",
      ownership: (p.capabilities ?? p.scope.split(", ")).join(" · "),
    },
    independent: p.independent,
    externalLink: p.externalLink,
    executiveSummary: {
      challenge: p.problem,
      role: p.owned?.join("; ") ?? `${p.role} — [Add areas you personally owned]`,
      approach: p.approach[0] ?? P.detail,
      outcome: p.outcome[0] ?? P.metric,
    },
    context: {
      product: p.context,
      users: "[Add target users]",
      existingWorkflow: "[Add the workflow that existed before this work]",
      marketOrOrg: "[Add market or organizational context]",
      constraints: "[Add constraints: budget, compliance, data, staffing, timeline]",
      whyItMattered: p.problem,
    },
    problem: {
      userGoal: "[Add what the user was trying to accomplish]",
      existingExperience: "[Add how users solved this before]",
      friction: p.problem
        .split(/[.;] ?/)
        .filter(Boolean)
        .slice(0, 3),
      whyItMattered: "[Add user or business impact of the problem]",
      beforeFlow: ["[Add step]", "[Add step]", "[Add step]", "[Add breakdown point]"],
    },
    discovery: {
      questions: [
        "[Add question you needed to answer]",
        "[Add assumption that needed validating]",
        "[Add question about where the friction actually was]",
      ],
      evidence: p.discovery ?? [P.evidence, P.evidence],
      findings: [
        {
          observation: p.discovery?.[0] ?? P.insight,
          evidence: P.evidence,
          whyItMattered: P.detail,
        },
        { observation: P.insight, evidence: P.evidence, whyItMattered: P.detail },
        { observation: P.insight, evidence: P.evidence, whyItMattered: P.detail },
      ],
    },
    insight: {
      quote: p.keyInsight ?? P.insight,
      believed: "[Add what you initially believed]",
      discovered: p.keyInsight ?? "[Add what you discovered]",
      changed: "[Add how this changed the strategy]",
    },
    strategy: {
      hypothesis:
        "If we [add change], then [add expected behavior] will happen because [add reasoning].",
      principles: p.productThinking.length
        ? p.productThinking
        : ["[Add guiding principle]", "[Add guiding principle]"],
      targetFlow: ["[Add step]", "[Add step]", "[Add step]", "[Add outcome]"],
      notSolving: p.notBuilt
        ? [p.notBuilt]
        : ["[Add what you deliberately did not try to solve]"],
    },
    options: {
      rows:
        p.options?.map((o) => ({
          label: o.label,
          description: "[Add description]",
          benefits: o.pros,
          limitations: o.cons,
          complexity: "[Add]",
        })) ?? [
          {
            label: "Option A",
            description: P.detail,
            benefits: P.detail,
            limitations: P.detail,
            complexity: "[Add]",
          },
          {
            label: "Option B",
            description: P.detail,
            benefits: P.detail,
            limitations: P.detail,
            complexity: "[Add]",
          },
        ],
      decision: p.decision ?? P.decision,
      why: p.decision ? "[Add the reasoning behind this decision]" : P.decision,
      gaveUp: p.notBuilt ?? "[Add what you gave up by choosing this]",
      worthIt: "[Add why the trade-off fit the product strategy]",
    },
    prioritization: {
      rows: [
        {
          item: "[Add opportunity or feature]",
          impact: "[Add]",
          effort: "[Add]",
          decision: "MVP",
          reasoning: "[Add reasoning]",
        },
        {
          item: "[Add opportunity or feature]",
          impact: "[Add]",
          effort: "[Add]",
          decision: "Next",
          reasoning: "[Add reasoning]",
        },
        {
          item: "[Add opportunity or feature]",
          impact: "[Add]",
          effort: "[Add]",
          decision: "Not pursuing",
          reasoning: "[Add reasoning]",
        },
      ],
      mvp: "[Add what made the first version intentionally small]",
      cut: p.notBuilt ? [p.notBuilt] : ["[Add what you deliberately cut]"],
    },
    keyDecisions: [
      {
        area: "[Add product area or screen]",
        problem: "[Add the user problem this area solved]",
        decision: P.decision,
        why: P.evidence,
        alternative: "[Add the alternative considered]",
      },
      {
        area: "[Add product area or screen]",
        problem: "[Add the user problem this area solved]",
        decision: P.decision,
        why: P.evidence,
        alternative: "[Add the alternative considered]",
      },
    ],
    execution: {
      owned: p.owned ?? p.execution,
      crossFunctional: p.collaborated
        ? p.collaborated.map((c) => ({ fn: "Collaboration", detail: c }))
        : [
            { fn: "Engineering", detail: "[Add how you worked with engineering]" },
            { fn: "Design", detail: "[Add how you worked with design]" },
            { fn: "Data", detail: "[Add how you worked with data]" },
            { fn: "Stakeholders", detail: "[Add alignment or disagreement moment]" },
          ],
      delivery: [
        { phase: "Phase 1", detail: "[Add what shipped and what you learned]" },
        { phase: "Phase 2", detail: "[Add iteration or key change]" },
        { phase: "Phase 3", detail: "[Add decision made during execution]" },
      ],
    },
    measurement: {
      primaryOutcome: "[Add the behavior or business result that mattered most]",
      metrics: [
        { category: "Adoption", items: ["[Add metric]"], status: "Proposed" },
        { category: "Efficiency", items: ["[Add metric]"], status: "Proposed" },
      ],
      why: "[Add why these metrics were chosen over alternatives]",
    },
    outcomes: {
      results: p.outcome,
      validated: ["[Add assumption that was validated]"],
      invalidated: ["[Add assumption that proved wrong]"],
      unexpected: ["[Add unexpected finding]"],
      earlyStage: p.independent,
    },
    reflection: {
      doDifferently: [
        "[Add a decision you would revisit]",
        "[Add something you would validate earlier]",
        "[Add complexity you would remove]",
      ],
      learned: p.learnings,
    },
  };
}

/** Per-project overrides where real content exists. */
const overrides: Record<string, (c: CaseStudy) => CaseStudy> = {
  "environmental-justice": (c) => ({
    ...c,
    meta: { ...c.meta, stage: "Scaling an existing process" },
    context: {
      ...c.context,
      users:
        "Policy analysts and program staff producing environmental justice analysis, and the city leadership who acted on it",
      existingWorkflow:
        "Grant and environmental data was collected and processed manually, city by city, with non-standard inputs and repeated rework.",
      marketOrOrg:
        "Redlining and Justice40 initiatives inside a municipal performance and innovation office, spanning 153 cities.",
      constraints:
        "Public-sector tooling and procurement limits, no dedicated engineering team, stakeholders spread across agencies and cities.",
    },
    problem: {
      ...c.problem,
      userGoal:
        "Produce comparable, defensible analysis across many cities fast enough to inform live policy decisions.",
      existingExperience:
        "Analysts pulled and reshaped each city's data by hand, then rebuilt the same analysis per city.",
      friction: [
        "Non-standard inputs meant every city required bespoke handling",
        "Manual processing introduced errors that were expensive to trace",
        "Turnaround was slow enough that analysis lagged the decisions it should have informed",
      ],
      whyItMattered:
        "Decisions affecting 7,600+ households depended on this analysis; delay and rework directly reduced the amount of evidence available to policymakers.",
      beforeFlow: [
        "Request arrives from policy stakeholders",
        "Analyst locates and manually cleans each city's data",
        "Analysis rebuilt per city, format varies",
        "Findings reformatted by hand for reporting → slow, error-prone, hard to repeat",
      ],
    },
    measurement: {
      primaryOutcome:
        "Time from policy question to defensible multi-city answer, and the marginal cost of adding a city.",
      metrics: [
        {
          category: "Efficiency",
          items: ["Weekly research output up 90%", "Manual processing steps removed"],
          status: "Measured",
        },
        {
          category: "Quality",
          items: ["[Add verified error / rework reduction]"],
          status: "Proposed",
        },
        {
          category: "Adoption",
          items: ["[Add number of stakeholders / recurring reports using the templates]"],
          status: "Proposed",
        },
      ],
      why: "Cycle time and marginal cost per city were the constraints on how much evidence policy decisions could use.",
    },
    outcomes: {
      results: [
        "Analysis supporting decisions across 153 cities and 7,600+ households",
        "Weekly research output increased by 90%",
        "Reusable, policy-ready reporting templates replaced bespoke per-city work",
      ],
      validated: [
        "Standardizing inputs made each additional city cheaper rather than more expensive",
      ],
      invalidated: ["[Add assumption that proved wrong]"],
      unexpected: ["[Add unexpected finding]"],
    },
  }),
  "oracle-dashboards": (c) => ({
    ...c,
    meta: { ...c.meta, stage: "Internal enterprise product" },
    context: {
      ...c.context,
      users:
        "Engineering teams needing operational signal, and business stakeholders needing performance reporting",
      existingWorkflow:
        "KPIs were compiled manually into periodic reports, so decisions waited on the reporting cycle.",
      marketOrOrg: "Enterprise technology organization with many stakeholder teams.",
      constraints:
        "Internship-length timeline, existing data platforms and access controls, competing KPI requests.",
    },
    problem: {
      ...c.problem,
      userGoal:
        "See current performance on the few metrics that drive a decision, without asking someone to build a report.",
      existingExperience:
        "Stakeholders requested reports and waited, or maintained their own spreadsheets.",
      friction: [
        "Manual reporting delayed decisions",
        "Each team defined the same metrics slightly differently",
        "Requested KPI list far exceeded what could be delivered well",
      ],
      whyItMattered:
        "Slow, inconsistent metrics meant operational issues surfaced late. [Add verified metric for baseline delay]",
      beforeFlow: [
        "Team needs a KPI",
        "Request goes to whoever owns the data",
        "Manual pull and spreadsheet assembly",
        "Report circulated days later → decision already stale",
      ],
    },
    measurement: {
      primaryOutcome:
        "Whether teams stopped requesting manual reports and used the dashboards to make decisions.",
      metrics: [
        {
          category: "Adoption",
          items: ["5 dashboards deployed across teams", "[Add active users / usage frequency]"],
          status: "Proposed",
        },
        {
          category: "Efficiency",
          items: ["Manual reporting overhead reduced", "[Add verified time saved]"],
          status: "Proposed",
        },
      ],
      why: "Adoption was the real test: a correct dashboard nobody opens has not solved the reporting problem.",
    },
  }),
  bracket: (c) => ({
    ...c,
    meta: { ...c.meta, stage: "0→1" },
    outcomes: { ...c.outcomes, earlyStage: true },
  }),
  ede: (c) => ({
    ...c,
    meta: { ...c.meta, stage: "0→1 / experimental" },
    outcomes: { ...c.outcomes, earlyStage: true },
  }),
};

export function getCaseStudy(slug: string): CaseStudy | undefined {
  const project = projects.find((p) => p.slug === slug);
  if (!project) return undefined;
  const base = scaffold(project);
  const override = overrides[slug];
  return override ? override(base) : base;
}

/** Rough reading time for the rendered case study. */
export function readingTime(c: CaseStudy): number {
  const words = JSON.stringify(c).split(/\s+/).length;
  return Math.max(4, Math.round(words / 200));
}

export const caseStudySections = [
  { id: "summary", label: "At a glance" },
  { id: "context", label: "01 — Context" },
  { id: "problem", label: "02 — The Problem" },
  { id: "discovery", label: "03 — Discovery" },
  { id: "insight", label: "04 — Key Insight" },
  { id: "strategy", label: "05 — Product Strategy" },
  { id: "options", label: "06 — Options & Trade-offs" },
  { id: "prioritization", label: "07 — Prioritization & MVP" },
  { id: "decisions", label: "08 — Experience & Decisions" },
  { id: "execution", label: "09 — Execution" },
  { id: "measurement", label: "10 — Measurement" },
  { id: "outcomes", label: "11 — Outcomes" },
  { id: "reflection", label: "12 — Reflection" },
];
