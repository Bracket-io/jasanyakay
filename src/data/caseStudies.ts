import { projects, type Project } from "./projects";

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
    crossFunctional: {
      fn: string;
      detail: string;
    }[];
    delivery: {
      phase: string;
      detail: string;
    }[];
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
  detail: "[Add detail]",
  metric: "[Add verified metric]",
};

function scaffold(p: Project): CaseStudy {
  return {
    slug: p.slug,
    title: p.title,
    headline: p.headline ?? p.subtitle,
    summary: p.overview,

    meta: {
      role: p.role,
      timeline: p.timeline,
      stage: p.independent ? "0→1" : "Product / Data initiative",
      ownership: (p.capabilities ?? p.scope.split(", ")).join(" · "),
    },

    independent: p.independent,
    externalLink: p.externalLink,

    executiveSummary: {
      challenge: p.problem,
      role:
        p.owned?.join("; ") ??
        `${p.role} — product definition, discovery, and execution`,
      approach: p.approach.join(" "),
      outcome: p.outcome.join(" "),
    },

    context: {
      product: p.context,
      users: "[Add specific target users]",
      existingWorkflow: "[Add the workflow that existed before this work]",
      marketOrOrg: p.category ?? "[Add market or organizational context]",
      constraints: "[Add verified constraints]",
      whyItMattered: p.problem,
    },

    problem: {
      userGoal: "[Add what the user was trying to accomplish]",
      existingExperience: "[Add how users solved this before]",
      friction: [p.problem],
      whyItMattered: p.problem,
      beforeFlow: [
        "[Add starting point]",
        "[Add existing workflow step]",
        "[Add manual / inefficient step]",
        "[Add breakdown point]",
      ],
    },

    discovery: {
      questions: [
        "What are users actually trying to accomplish?",
        "What are they doing today instead?",
        "Where does the existing workflow break down?",
        "Which assumptions need to be validated before building more?",
      ],

      evidence: p.discovery ?? [P.evidence],

      findings:
        p.discovery?.map((item, index) => ({
          observation: item,
          evidence:
            index === 0
              ? "Direct discovery / workflow evidence"
              : "Observed during product exploration",
          whyItMattered:
            "Helped determine where product effort should be focused.",
        })) ?? [
          {
            observation: P.evidence,
            evidence: P.evidence,
            whyItMattered: P.detail,
          },
        ],
    },

    insight: {
      quote: p.keyInsight ?? P.evidence,
      believed:
        "The initial assumption was that the obvious feature or information gap was the primary problem.",
      discovered: p.keyInsight ?? P.evidence,
      changed:
        "The product direction was adjusted around the underlying user or operational problem rather than simply adding more functionality.",
    },

    strategy: {
      hypothesis:
        `If we address the core problem — ${p.problem.toLowerCase()} — with a focused workflow, users will be able to complete the relevant task with less friction.`,

      principles:
        p.productThinking.length
          ? p.productThinking
          : [
              "Start with the problem",
              "Prioritize the smallest useful experience",
              "Use evidence to guide iteration",
            ],

      targetFlow:
        p.approach.length
          ? p.approach
          : [
              "Understand the user need",
              "Reduce unnecessary steps",
              "Guide the user through the core workflow",
              "Measure the resulting behavior",
            ],

      notSolving: p.notBuilt
        ? [p.notBuilt]
        : ["Problems outside the core product scope"],
    },

    options: {
      rows:
        p.options?.map((o) => ({
          label: o.label,
          description: o.description,
          benefits: o.pros,
          limitations: o.cons,
          complexity: o.complexity ?? "Medium",
        })) ?? [],

      decision: p.decision ?? P.evidence,

      why:
        p.decision ??
        "The selected approach provided the best balance between user value, evidence, and implementation effort.",

      gaveUp:
        p.notBuilt ??
        "Broader functionality was deliberately deferred.",

      worthIt:
        "The trade-off kept the product focused on validating the most important assumption first.",
    },

    prioritization: {
      rows: [
        {
          item: "Core user problem",
          impact: "High",
          effort: "Medium",
          decision: "MVP",
          reasoning: "Directly addresses the reason the product exists.",
        },
        {
          item: "Supporting experience",
          impact: "Medium",
          effort: "Medium",
          decision: "Next",
          reasoning: "Useful once the core workflow is validated.",
        },
        {
          item: "Peripheral functionality",
          impact: "Low",
          effort: "High",
          decision: "Later",
          reasoning: "Would increase scope without proving the core hypothesis.",
        },
      ],

      mvp:
        "The MVP was intentionally constrained to the smallest experience capable of testing the central product hypothesis.",

      cut: p.notBuilt ? [p.notBuilt] : [],
    },

    keyDecisions: [
      {
        area: "Core experience",
        problem: p.problem,
        decision: p.decision ?? P.evidence,
        why: p.keyInsight ?? P.evidence,
        alternative: "Build a broader feature set before validating the core workflow.",
      },

      {
        area: "Scope",
        problem: "Limited time and product uncertainty.",
        decision:
          p.notBuilt ??
          "Keep the first version focused on the highest-value workflow.",
        why: "Reduced unnecessary complexity and preserved learning velocity.",
        alternative: "Attempt to solve adjacent problems in the initial release.",
      },
    ],

    execution: {
      owned: p.owned ?? p.execution,

      crossFunctional:
        p.collaborated?.map((c) => ({
          fn: "Collaboration",
          detail: c,
        })) ?? [],

      delivery: p.execution.map((item, index) => ({
        phase: `Phase ${index + 1}`,
        detail: item,
      })),
    },

    measurement: {
      primaryOutcome:
        "Evidence that the product solves the intended problem and changes the relevant user or operational behavior.",

      metrics: [
        {
          category: "Adoption",
          items: ["[Add verified adoption metric]"],
          status: "Proposed",
        },
        {
          category: "Engagement / Retention",
          items: ["[Add verified engagement or retention metric]"],
          status: "Proposed",
        },
        {
          category: "Efficiency / Outcome",
          items: ["[Add verified outcome metric]"],
          status: "Proposed",
        },
      ],

      why:
        "The metrics should connect directly to whether the product is being used and whether it improves the underlying problem.",
    },

    outcomes: {
      results: p.outcome,

      validated: [
        "The product could be built and put in front of real users or stakeholders.",
      ],

      invalidated: [
        "[Add an assumption that was disproven by evidence]",
      ],

      unexpected: [
        "[Add an unexpected finding]",
      ],

      earlyStage: p.independent,
    },

    reflection: {
      doDifferently: [
        "Validate the highest-risk assumption even earlier.",
        "Instrument the most important behavior before expanding the product.",
        "Be more aggressive about removing features that do not contribute to the core outcome.",
      ],

      learned: p.learnings,
    },
  };
}

const overrides: Record<string, (c: CaseStudy) => CaseStudy> = {
  bracket: (c) => ({
    ...c,

    context: {
      ...c.context,

      users:
        "Young people trying to make better decisions about budgeting, saving, and investing",

      existingWorkflow:
        "Users relied on a fragmented mix of sources including YouTube, ChatGPT, financial websites, and conversations with other people.",

      marketOrOrg:
        "Independent fintech/product experiment focused on financial decision-making",

      constraints:
        "Independent build, limited resources, need to validate the problem quickly before investing heavily in functionality.",

      whyItMattered:
        "Students had access to information but still faced uncertainty around what information to trust and what action to take.",
    },

    problem: {
      ...c.problem,

      userGoal:
        "Make practical financial decisions with greater clarity and confidence.",

      existingExperience:
        "Users searched across different sources, consumed advice, compared options, and were often left to determine the appropriate next step themselves.",

      friction: [
        "Financial information was fragmented across multiple sources",
        "Users had difficulty determining which information to trust",
        "Information consumption did not always translate into action",
      ],

      whyItMattered:
        "The product opportunity was to reduce the gap between knowing about a financial concept and being able to make a practical decision.",

      beforeFlow: [
        "User has a financial question",
        "Searches YouTube, ChatGPT, websites, or other sources",
        "Finds multiple explanations or recommendations",
        "Attempts to decide what applies to them",
        "Takes action — or remains uncertain",
      ],
    },

    discovery: {
      questions: [
        "How do young people currently make financial decisions?",
        "Which sources do they trust?",
        "What do they do when information from different sources conflicts?",
        "Is the real problem financial education or decision-making?",
        "Which product experience could provide value beyond existing information sources?",
      ],

      evidence: [
        "20+ student interviews",
        "Questions about financial habits and weekly routines",
        "Review of existing sources including YouTube and ChatGPT",
        "Early product usage from 100+ users",
        "Higher-than-desired churn after initial adoption",
      ],

      findings: [
        {
          observation:
            "Young people were already actively looking for financial information.",
          evidence:
            "Interviews with 20+ students explored their existing financial habits and information-seeking behavior.",
          whyItMattered:
            "This shifted the problem away from simply creating another educational content source.",
        },
        {
          observation:
            "Students used multiple general-purpose information sources.",
          evidence:
            "YouTube, ChatGPT, and other sources were part of the existing information landscape.",
          whyItMattered:
            "Bracket needed a clearer reason to exist than simply aggregating information.",
        },
        {
          observation:
            "Initial adoption did not automatically translate into retention.",
          evidence:
            "More than 100 users joined the platform, while churn was higher than desired.",
          whyItMattered:
            "The product needed to investigate ongoing value and retention rather than treating acquisition as the final success criterion.",
        },
      ],
    },

    insight: {
      quote:
        "The problem wasn't access to information; it was turning information into a decision you could actually act on.",

      believed:
        "The initial opportunity appeared to be helping young people access better financial information.",

      discovered:
        "Young people already had many sources of financial information. The bigger opportunity was structuring that information into a more actionable decision experience.",

      changed:
        "The product direction emphasized guided decisions and focused workflows instead of attempting to become a comprehensive financial information library.",
    },

    strategy: {
      hypothesis:
        "If financial information is organized around the decision a user is trying to make, rather than presented as a library of content, users should be able to move from question to action with less uncertainty.",

      principles: [
        "Design around decisions, not information volume",
        "Reduce choice overload",
        "Use existing user behavior as a starting point",
        "Prototype quickly before investing heavily",
        "Treat retention as an important validation signal",
      ],

      targetFlow: [
        "User identifies a financial decision",
        "Bracket structures the relevant information",
        "User evaluates the relevant options",
        "Bracket provides a clear next step",
        "User acts and returns when another decision arises",
      ],

      notSolving: [
        "Full financial account aggregation",
        "Automated financial transactions",
        "Comprehensive financial education across every topic",
      ],
    },

    measurement: {
      primaryOutcome:
        "Whether users continue returning to Bracket when they have financial decisions to make.",

      metrics: [
        {
          category: "Adoption",
          items: ["100+ users joined during the early product period"],
          status: "Measured",
        },
        {
          category: "Retention",
          items: ["Churn was higher than desired"],
          status: "Measured",
        },
        {
          category: "Decision behavior",
          items: [
            "Repeat decision completion",
            "Return usage",
            "Completion of core decision flows",
          ],
          status: "Proposed",
        },
      ],

      why:
        "The early product demonstrated that attracting users was possible, but the higher-than-desired churn made retention and repeat value the more important next product question.",
    },

    outcomes: {
      results: [
        "Interviewed 20+ students during discovery",
        "Built and launched the initial product",
        "100+ users joined during the early product period",
        "Observed higher-than-desired churn",
      ],

      validated: [
        "There was sufficient interest for more than 100 people to join the early product.",
        "Young people actively seek financial information from multiple sources.",
      ],

      invalidated: [
        "Initial adoption alone was not enough evidence that the product was creating sustained value.",
      ],

      unexpected: [
        "Retention became a more important product problem than initial acquisition.",
      ],

      earlyStage: true,
    },

    reflection: {
      doDifferently: [
        "Instrument retention and core behavior from the first release.",
        "Spend more time understanding why users churned before expanding the feature set.",
        "Validate the highest-risk retention assumptions with users earlier.",
      ],

      learned: [
        "20+ interviews were valuable for understanding behavior before building.",
        "Existing alternatives can be useful evidence about what users already do rather than simply competitors to replace.",
        "Lovable allowed the product to move from wireframes to a usable experience much faster.",
        "100+ users provided meaningful early validation, but churn showed that acquisition is only the beginning of product validation.",
      ],
    },
  }),

  ede: (c) => ({
    ...c,

    context: {
      ...c.context,
      users:
        "People interested in experimenting with AI and African-language NLP",
      existingWorkflow:
        "Users interested in African-language AI had to work across general-purpose models, scattered datasets, and research tools.",
      marketOrOrg:
        "Independent AI/NLP experiment focused on low-resource language technology",
      constraints:
        "Limited data availability, limited resources, and difficulty establishing reliable evaluation signals.",
    },

    problem: {
      ...c.problem,
      userGoal:
        "Explore and use AI capabilities for African-language inputs.",
      existingExperience:
        "Users relied on general-purpose AI systems that may perform unevenly across lower-resource languages.",
      friction: [
        "Uneven model performance",
        "Limited language-specific datasets",
        "Difficulty evaluating whether changes actually improved quality",
      ],
      whyItMattered:
        "Without better data and evaluation, product improvements could not be confidently distinguished from noise.",
    },

    measurement: {
      primaryOutcome:
        "Quality and usefulness of African-language AI responses under a repeatable evaluation approach.",
      metrics: [
        {
          category: "Product",
          items: ["Public demo released"],
          status: "Measured",
        },
        {
          category: "Evaluation",
          items: [
            "Language/task-specific quality evaluation",
            "Response accuracy",
          ],
          status: "Proposed",
        },
        {
          category: "Adoption",
          items: ["Public usage and repeat experimentation"],
          status: "Proposed",
        },
      ],
      why:
        "For a low-resource NLP experiment, evaluation quality is necessary before usage or model changes can be interpreted correctly.",
    },
  }),

  gradezy: (c) => ({
    ...c,

    context: {
      ...c.context,
      users:
        "Assessment staff and other users responsible for reviewing student assessment records",
      existingWorkflow:
        "Assessment work involved moving between student records, spreadsheets, exported files, and other systems to identify and process records requiring attention.",
      marketOrOrg:
        "Education operations and assessment workflow automation",
      constraints:
        "The product needed to work with existing institutional processes rather than requiring users to replace their entire assessment stack.",
    },

    problem: {
      ...c.problem,
      userGoal:
        "Review and process assessment records without unnecessary repetitive data-handling work.",
      existingExperience:
        "Users manually moved information between systems and files and repeated similar checks across records.",
      friction: [
        "Repeated manual processing",
        "Unnecessary file-handling steps",
        "Human effort spent on predictable processing rather than exceptions",
      ],
      whyItMattered:
        "Every repetitive step increased operational effort and created another opportunity for inconsistent processing.",
    },

    strategy: {
      ...c.strategy,
      hypothesis:
        "If predictable assessment-processing steps are automated while human judgment remains in the workflow for exceptions, assessment staff can spend less time on repetitive processing and more time on work requiring review.",

      principles: [
        "Automate predictable work",
        "Keep humans in the loop for exceptions",
        "Remove unnecessary handoffs",
        "Work with existing systems where possible",
        "Reduce operational complexity rather than adding another layer",
      ],
    },

    measurement: {
      primaryOutcome:
        "Reduction in manual assessment-processing effort while maintaining the quality of review.",

      metrics: [
        {
          category: "Efficiency",
          items: [
            "Manual processing time",
            "Number of manual workflow steps",
          ],
          status: "Proposed",
        },
        {
          category: "Accuracy",
          items: [
            "Records processed correctly",
            "Exception rate",
          ],
          status: "Proposed",
        },
        {
          category: "Adoption",
          items: [
            "Number of assessment workflows using the automation",
          ],
          status: "Proposed",
        },
      ],

      why:
        "The core value proposition is operational efficiency, so measurement should focus on time, manual effort, and accuracy rather than page views.",
    },
  }),

  citiwatch: (c) => ({
    ...c,

    meta: {
      ...c.meta,
      stage: "Data / AI product exploration",
    },

    context: {
      ...c.context,
      users:
        "City leadership, operational teams, analysts, and stakeholders responsible for addressing illegal dumping",
      existingWorkflow:
        "Illegal dumping was largely identified through reactive reporting and existing city processes, while the camera network was not fully leveraged for proactive analytics.",
      marketOrOrg:
        "City of Baltimore civic technology and public-sector analytics",
      constraints:
        "Existing infrastructure, operational capacity, privacy considerations, technical feasibility, and the need for city leadership buy-in.",
      whyItMattered:
        "A more proactive detection model could help the city focus limited operational resources on locations where intervention could have the greatest effect.",
    },

    problem: {
      ...c.problem,
      userGoal:
        "Identify where and when illegal dumping is most likely to occur so city resources can respond more proactively.",
      existingExperience:
        "The city relied heavily on reactive reports and had camera infrastructure that was not being fully used as an analytical signal.",
      friction: [
        "Reactive rather than proactive detection",
        "Large camera network made uniform monitoring impractical",
        "Technical detection alone would not guarantee an actionable response",
      ],
      whyItMattered:
        "The value of the product depended on turning camera data into a practical operational decision rather than simply generating more alerts.",
      beforeFlow: [
        "Illegal dumping occurs",
        "Incident is observed or reported",
        "City receives or processes the report",
        "Operational team responds",
        "Patterns are difficult to use proactively",
      ],
    },

    discovery: {
      questions: [
        "Where is illegal dumping concentrated?",
        "How could existing cameras provide a more proactive signal?",
        "Which locations should receive analytical attention first?",
        "Could AI/ML reliably detect relevant activity?",
        "What would make a detection actionable for city operations?",
      ],

      evidence: [
        "Analysis of camera coverage",
        "Geographic analysis of dumping patterns",
        "Exploration of AI/ML detection with Google",
        "Stakeholder discussions with city leadership and operational teams",
      ],

      findings: [
        {
          observation:
            "The camera network represented an existing infrastructure opportunity.",
          evidence:
            "CitiWatch cameras were already deployed across the city.",
          whyItMattered:
            "The opportunity could be approached through better use of existing infrastructure rather than immediately requiring new infrastructure.",
        },
        {
          observation:
            "Detection needed to be geographically targeted.",
          evidence:
            "Analysis focused on identifying higher-impact areas rather than treating every camera location equally.",
          whyItMattered:
            "Targeting could make limited analytical and operational resources more effective.",
        },
        {
          observation:
            "AI detection was only valuable if it could lead to action.",
          evidence:
            "The work connected technical exploration with operational and leadership discussions.",
          whyItMattered:
            "This prevented the project from becoming an AI demonstration disconnected from the city's actual needs.",
        },
      ],
    },

    insight: {
      quote:
        "The opportunity wasn't simply to add AI to cameras; it was to identify where better detection could create an actionable city response.",

      believed:
        "The initial opportunity could be framed as using AI to automatically detect illegal dumping through the existing camera network.",

      discovered:
        "The more important product problem was determining where detection would create operational value and how the city would act on that signal.",

      changed:
        "The strategy shifted toward targeted camera optimization, geographic prioritization, and actionable analytics rather than treating automated detection as the end product.",
    },

    measurement: {
      primaryOutcome:
        "Whether camera analytics could produce actionable intelligence that improved how the city prioritizes illegal-dumping response.",

      metrics: [
        {
          category: "Coverage",
          items: [
            "High-priority areas covered by optimized camera placement",
          ],
          status: "Proposed",
        },
        {
          category: "Detection",
          items: [
            "Detection precision",
            "Detection recall",
            "False-positive rate",
          ],
          status: "Proposed",
        },
        {
          category: "Operations",
          items: [
            "Time from detection to response",
            "Actionable alerts",
          ],
          status: "Proposed",
        },
      ],

      why:
        "A successful civic analytics product needs to connect technical model performance to an operational outcome. A high-performing model that produces no useful response would not solve the city's problem.",
    },

    outcomes: {
      results: [
        "Developed a data-driven framework for camera optimization",
        "Explored AI/ML-assisted illegal-dumping detection with Google",
        "Identified higher-impact geographic areas for targeted attention",
        "Translated technical analysis into recommendations for city leadership",
      ],

      validated: [
        "Existing camera infrastructure could be considered as an analytical asset rather than only a monitoring asset.",
        "Geographic prioritization provided a useful way to focus the problem.",
      ],

      invalidated: [
        "The assumption that AI detection alone represented the complete product solution.",
      ],

      unexpected: [
        "Operational actionability became as important as technical detection capability.",
      ],
    },
  }),
};

export function getCaseStudy(slug: string): CaseStudy | undefined {
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return undefined;
  }

  const base = scaffold(project);
  const override = overrides[slug];

  return override ? override(base) : base;
}

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