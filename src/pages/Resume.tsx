import { Layout } from "@/components/Layout";
import { siteLinks } from "@/data/projects";
import { Download, ExternalLink } from "lucide-react";

const Resume = () => {
  return (
    <Layout>
      <div className="max-w-[850px] mx-auto">

        {/* Header */}
        <section className="border-b border-border pb-10 mb-12">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6">
            <div>
              <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-3">
                Kay Jasanya
              </h1>

              <p className="text-lg text-muted-foreground">
                Senior Product Manager
              </p>
            </div>

            <div className="flex items-center gap-4 text-sm">
              <a
                href="/Kay Jasanya_SPM_.pdf"
                download="Kay-Jasanya-Senior-Product-Manager-Resume.pdf"
                className="inline-flex items-center gap-2 border border-foreground px-4 py-2 hover:bg-foreground hover:text-background transition-colors"
              >
                <Download className="w-4 h-4" />
                Download PDF
              </a>

              <a
                href={siteLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-muted-foreground hover:text-foreground transition-colors"
              >
                LinkedIn
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>

          <div className="flex flex-wrap gap-x-5 gap-y-2 text-sm text-muted-foreground mt-6">
            <span>London, UK</span>
            <span>·</span>

            <a
              href={`mailto:${siteLinks.email}`}
              className="hover:text-foreground transition-colors"
            >
              {siteLinks.email}
            </a>

            <span>·</span>

            <a
              href={siteLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-foreground transition-colors"
            >
              /in/jaskay
            </a>

            <span>·</span>

            <a
              href="/"
              className="hover:text-foreground transition-colors"
            >
              Portfolio
            </a>

            <span>·</span>

            <span>+44 7344-398-306</span>
          </div>
        </section>

        {/* Professional Summary */}
        <section className="mb-14">
          <SectionTitle title="Professional Summary" />

          <p className="text-base leading-7 max-w-[760px]">
            Senior Product Manager with 6+ years of experience building and
            scaling data-driven and digital products across fintech, civic
            technology, education, and enterprise environments. Experienced in
            product strategy, 0→1 development, workflow design, data products,
            and cross-functional delivery, combining product, data, engineering,
            and operational expertise to translate complex problems into
            scalable products and measurable outcomes.
          </p>
        </section>

        {/* Core Expertise */}
        <section className="mb-14">
          <SectionTitle title="Core Expertise" />

          <div className="space-y-5">
            <ExpertiseRow
              title="Product"
              items="Product Strategy · Product Discovery · Product Roadmapping · 0→1 Product Development · Product Requirements · User-Centred Design · Product Analytics"
            />

            <ExpertiseRow
              title="Leadership"
              items="Cross-Functional Leadership · Stakeholder Management · Agile/Scrum · Product Operations · Process Improvement · Pipeline Development"
            />

            <ExpertiseRow
              title="Data & Technology"
              items="Data Products · AI & Automation · SQL · Data Platforms · Workflow Systems · Analytics"
            />
          </div>
        </section>

        {/* Professional Experience */}
        <section className="mb-14">
          <SectionTitle title="Professional Experience" />

          <div className="space-y-12">

            <Experience
              company="Elizabeth School of London"
              role="Assessments Officer"
              period="Aug 2026 – Present"
              bullets={[
                <>
                  Manage assessment data and operational workflows across{" "}
                  <strong>Level 4–6 programmes</strong>, maintaining accurate
                  records across modules, assessments, submissions, grades,
                  plagiarism results, and student outcomes.
                </>,
                <>
                  Build and maintain <strong>assessment tracking and
                  Excel-based reporting systems</strong>, consolidating data
                  from Moodle and academic processes to improve visibility,
                  data accuracy, and workflow efficiency.
                </>,
              ]}
            />

            <Experience
              company="Aliov"
              role="Founder & Product Manager"
              period="Nov 2025 – Aug 2026"
              bullets={[
                <>
                  Conducted customer discovery by engaging{" "}
                  <strong>50+ legal firms and 75+ legal professionals</strong>,
                  leading structured interviews to identify pain points across
                  client intake, case management, document tracking, and legal
                  workflows; translated findings into product requirements and
                  a prioritised roadmap.
                </>,
                <>
                  Defined and launched the MVP for a legal CRM, designing{" "}
                  <strong>4+ core workflows and 12+ product features</strong>{" "}
                  across client, matter, document, task, and case management to
                  centralise fragmented legal operations.
                </>,
                <>
                  Designed product and data architecture using{" "}
                  <strong>Next.js and Supabase</strong>, structuring
                  interconnected records across clients, cases, documents,
                  tasks, and users; led iterative development, testing, and
                  launch from concept to working MVP.
                </>,
              ]}
            />

            <Experience
              company="City of Baltimore"
              role="Data Product Manager"
              period="Sep 2024 – Nov 2025"
              bullets={[
                <>
                  Led a city-wide analytics initiative leveraging{" "}
                  <strong>41,000+ service records</strong> to identify systemic
                  drivers of illegal dumping, designing interventions projected
                  to reduce incidents by <strong>25%</strong>.
                </>,
                <>
                  Architected cross-agency workflow improvements for 311
                  operations, increasing service completion rates from{" "}
                  <strong>&lt;50% to 75%</strong> by redefining SLAs and
                  operational processes.
                </>,
                <>
                  Built and scaled a centralized reporting platform used across{" "}
                  <strong>15+ agencies</strong>, reducing reporting cycle time
                  by <strong>30%</strong> and increasing stakeholder engagement
                  by <strong>40%</strong>.
                </>,
                <>
                  Directed a <strong>$60K</strong> multi-stakeholder
                  implementation across <strong>3 operational hubs and 5
                  executive offices</strong>, delivering infrastructure,
                  tooling, and systems on time and within budget.
                </>,
              ]}
            />

            <Experience
              company="Morgan State University"
              role="Data Product Analyst"
              period="Jul 2023 – Sep 2024"
              bullets={[
                <>
                  Led data strategy and analysis for environmental and redlining
                  initiatives impacting <strong>7,600+ households</strong>{" "}
                  across <strong>153 municipalities</strong>, informing policy
                  and funding decisions.
                </>,
                <>
                  Designed and automated end-to-end reporting pipelines,
                  increasing analytical throughput by <strong>90%</strong> and
                  significantly reducing manual effort.
                </>,
                <>
                  Managed and scaled operations for a <strong>12-person</strong>{" "}
                  team supporting programmes serving{" "}
                  <strong>3,500+ students</strong>, improving coordination and
                  delivery efficiency.
                </>,
              ]}
            />

            <Experience
              company="VMware"
              role="Product Manager"
              period="Jun 2022 – Aug 2022"
              bullets={[
                <>
                  Owned validation and testing strategy for enterprise device
                  management solutions (Workspace ONE UEM) across Linux-based
                  systems and Amazon WorkSpaces environments.
                </>,
                <>
                  Identified product gaps and performance constraints,
                  delivering recommendations that informed product roadmap and
                  go-to-market positioning.
                </>,
              ]}
            />

            <Experience
              company="Oracle"
              role="Product Manager"
              period="Jun 2021 – Aug 2021"
              bullets={[
                <>
                  Designed and deployed <strong>5 SQL-driven analytics
                  dashboards</strong> using APEX and Grafana, enabling real-time
                  KPI tracking and improving operational visibility.
                </>,
                <>
                  Translated business requirements into scalable data
                  solutions, aligning technical implementation with product
                  needs.
                </>,
              ]}
            />

            <Experience
              company="Oasis Inc."
              role="Product Analyst"
              period="Aug 2019 – Jun 2021"
              bullets={[
                <>
                  Led migration of <strong>1,500+ user records</strong> into a
                  centralized data system, improving data integrity,
                  accessibility, and long-term scalability.
                </>,
                <>
                  Designed operational workflows and logistics operations
                  supporting <strong>50+ monthly users</strong>, improving
                  service reliability.
                </>,
              ]}
            />

            <Experience
              company="Morgan Stanley"
              role="Technology/Product Analyst"
              period="Jun 2019 – Aug 2019"
              bullets={[
                <>
                  Built data-driven monitoring systems using Java, AngularJS,
                  and Kafka across multiple enterprise systems.
                </>,
                <>
                  Developed analytic dashboards connected to Teradata
                  databases, enabling real-time reporting for internal
                  stakeholders.
                </>,
              ]}
            />

          </div>
        </section>

        {/* Venture & Investment Experience */}
        <section className="mb-14">
          <SectionTitle title="Venture & Investment Experience" />

          <div className="space-y-8">

            <Experience
              company="London Venture Studio"
              role="Venture Builder"
              period="Jun 2026 – Present"
              bullets={[
                <>
                  Spearheading growth strategy for a venture studio by mapping
                  and analyzing <strong>34 London universities</strong>,
                  developing data-driven acquisition initiatives to recruit
                  student founders and establish a foundation for international
                  expansion.
                </>,
              ]}
            />

            <Experience
              company="Oregon Sports Angels"
              role="Product Analyst"
              period="Jun 2023 – Jan 2024"
              bullets={[
                <>
                  Created portfolio updates for <strong>31 startups</strong>,
                  improving investor visibility into company progress.
                </>,
              ]}
            />

            <Experience
              company="SupplyChangeCapital"
              role="Product Analyst"
              period="Sep 2022 – Dec 2022"
              bullets={[
                <>
                  Led data-driven due diligence on <strong>50+ startups</strong>{" "}
                  using Airtable, writing investment memos for impact
                  investments.
                </>,
              ]}
            />

            <Experience
              company="MotivateVC"
              role="Product Analyst"
              period="Jun 2022 – Sep 2022"
              bullets={[
                <>
                  Used Airtable, Excel, and Streak to support due diligence and
                  relationship management across <strong>100+ startups</strong>.
                </>,
              ]}
            />

            <Experience
              company="HBCUvc"
              role="Product Analyst"
              period="Aug 2021 – Jul 2023"
              bullets={[
                <>
                  Presented <strong>20+ memos and teasers</strong>, evaluating
                  pipeline companies and delivering investment recommendations.
                </>,
              ]}
            />

          </div>
        </section>

        {/* Fellowships */}
        <section className="mb-14">
          <SectionTitle title="Selected Fellowships" />

          <div className="space-y-5 text-sm">
            <Fellowship
              title="Harvard AWS NextGen Fellow"
              detail="Selected 25 teams from 500 applications"
              year="2023"
            />

            <Fellowship
              title="NSF I-Corps Fellow"
              detail="Customer discovery & product validation fellowship for founders"
              year="2023"
            />

            <Fellowship
              title="Stanford University Innovation Fellow"
              detail="Represented institution in a global innovation & entrepreneurship fellowship"
              year="2017"
            />
          </div>
        </section>

        {/* Education */}
        <section className="mb-14">
          <SectionTitle title="Education" />

          <div className="space-y-5">
            <Education
              school="Johns Hopkins University"
              degree="M.S. Engineering & Product Management"
              year="2023"
            />

            <Education
              school="Morgan State University"
              degree="MBA, Management"
              year="2025"
            />

            <Education
              school="Morgan State University"
              degree="B.S. Electrical Engineering"
              year="2020"
            />
          </div>
        </section>

        {/* Certifications */}
        <section className="pb-10">
          <SectionTitle title="Certifications" />

          <p className="text-sm leading-relaxed">
            Aha! Product Management · PSM I · Google Project Management ·
            Pendo Product-Led
          </p>
        </section>

      </div>
    </Layout>
  );
};

/* ---------- Reusable Components ---------- */

const SectionTitle = ({ title }: { title: string }) => (
  <h2 className="text-xs font-bold tracking-[0.18em] uppercase text-muted-foreground mb-7">
    {title}
  </h2>
);

const ExpertiseRow = ({
  title,
  items,
}: {
  title: string;
  items: string;
}) => (
  <div className="grid sm:grid-cols-[150px_1fr] gap-3 sm:gap-8 text-sm">
    <h3 className="font-bold">{title}</h3>
    <p className="text-muted-foreground leading-relaxed">{items}</p>
  </div>
);

const Experience = ({
  company,
  role,
  period,
  bullets,
}: {
  company: string;
  role: string;
  period: string;
  bullets: React.ReactNode[];
}) => (
  <article>
    <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 mb-4">
      <div>
        <h3 className="font-bold">{company}</h3>
        <p className="text-sm text-muted-foreground">{role}</p>
      </div>

      <span className="text-xs text-muted-foreground whitespace-nowrap">
        {period}
      </span>
    </div>

    <ul className="space-y-2.5 text-sm leading-relaxed max-w-[760px]">
      {bullets.map((bullet, index) => (
        <li key={index} className="relative pl-5">
          <span className="absolute left-0 top-[0.65em] w-1 h-1 rounded-full bg-current" />
          {bullet}
        </li>
      ))}
    </ul>
  </article>
);

const Fellowship = ({
  title,
  detail,
  year,
}: {
  title: string;
  detail: string;
  year: string;
}) => (
  <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
    <div>
      <span className="font-bold">{title}</span>
      <span className="text-muted-foreground"> — {detail}</span>
    </div>

    <span className="text-xs text-muted-foreground whitespace-nowrap">
      {year}
    </span>
  </div>
);

const Education = ({
  school,
  degree,
  year,
}: {
  school: string;
  degree: string;
  year: string;
}) => (
  <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
    <div>
      <h3 className="font-bold">{school}</h3>
      <p className="text-sm text-muted-foreground">{degree}</p>
    </div>

    <span className="text-xs text-muted-foreground whitespace-nowrap">
      {year}
    </span>
  </div>
);

export default Resume;