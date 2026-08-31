import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Layout } from "@/components/Layout";
import { projects } from "@/data/projects";
import {
  getCaseStudy,
  readingTime,
  caseStudySections,
} from "@/data/caseStudies";
import { ArrowUpRight, ChevronDown } from "lucide-react";

/** Renders text, visually marking [Add ...] placeholders. */
const T = ({ children }: { children: string }) => {
  const parts = children.split(/(\[[^\]]+\])/g);
  return (
    <>
      {parts.map((part, i) =>
        part.startsWith("[") && part.endsWith("]") ? (
          <span
            key={i}
            className="border border-dashed border-border px-1.5 py-0.5 text-muted-foreground italic"
          >
            {part}
          </span>
        ) : (
          <span key={i}>{part}</span>
        )
      )}
    </>
  );
};

const Section = ({
  id,
  label,
  children,
}: {
  id: string;
  label: string;
  children: React.ReactNode;
}) => (
  <section id={id} className="scroll-mt-24 border-t border-border pt-10 mb-20">
    <h2 className="text-xs font-bold tracking-widest uppercase text-muted-foreground mb-8">
      {label}
    </h2>
    {children}
  </section>
);

const Field = ({ label, value }: { label: string; value: string }) => (
  <div className="mb-6 last:mb-0">
    <p className="text-xs uppercase tracking-widest text-muted-foreground mb-1.5">
      {label}
    </p>
    <p className="text-[15px] leading-relaxed max-w-[62ch]">
      <T>{value}</T>
    </p>
  </div>
);

const Bullets = ({ items }: { items: string[] }) => (
  <ul className="space-y-2 text-[15px] leading-relaxed max-w-[62ch]">
    {items.map((item, i) => (
      <li key={i} className="pl-4 relative">
        <span className="absolute left-0 text-muted-foreground">—</span>
        <T>{item}</T>
      </li>
    ))}
  </ul>
);

const Flow = ({ steps }: { steps: string[] }) => (
  <ol className="text-sm space-y-0 max-w-[52ch]">
    {steps.map((step, i) => (
      <li key={i}>
        <div className="border border-border px-4 py-3 leading-relaxed">
          <T>{step}</T>
        </div>
        {i < steps.length - 1 && (
          <div className="text-muted-foreground text-center py-1">↓</div>
        )}
      </li>
    ))}
  </ol>
);

const ProjectPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const index = projects.findIndex((p) => p.slug === slug);
  const project = projects[index];
  const study = slug ? getCaseStudy(slug) : undefined;
  const next = projects[(index + 1) % projects.length];
  const prev = projects[(index - 1 + projects.length) % projects.length];

  const [progress, setProgress] = useState(0);
  const [tocOpen, setTocOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const height = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(height > 0 ? (window.scrollY / height) * 100 : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [slug]);

  if (!project || !study) {
    return (
      <Layout>
        <p className="text-muted-foreground">Case study not found.</p>
        <Link to="/work" className="text-sm underline mt-4 inline-block">
          ← Back to all work
        </Link>
      </Layout>
    );
  }

  const minutes = readingTime(study);

  return (
    <Layout>
      {/* Reading progress */}
      <div className="fixed top-0 left-0 right-0 h-0.5 bg-transparent z-50">
        <div
          className="h-full bg-foreground transition-[width] duration-150"
          style={{ width: `${progress}%` }}
        />
      </div>

      <Link
        to="/work"
        className="text-xs text-muted-foreground hover:text-foreground transition-colors mb-12 inline-block"
      >
        ← Back to all work
      </Link>

      {/* Hero */}
      <header className="mb-16">
        {study.independent && (
          <p className="text-xs tracking-widest uppercase text-muted-foreground mb-3">
            Independent project
          </p>
        )}
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
          {study.title}
        </h1>
        <p className="text-lg leading-relaxed max-w-[60ch] mb-6">
          <T>{study.headline}</T>
        </p>
        <p className="text-[15px] text-muted-foreground leading-relaxed max-w-[62ch] mb-8">
          <T>{study.summary}</T>
        </p>

        <dl className="grid grid-cols-2 lg:grid-cols-4 gap-6 border-t border-b border-border py-6 text-sm">
          {[
            ["Role", study.meta.role],
            ["Timeline", study.meta.timeline],
            ["Product stage", study.meta.stage],
            ["Ownership", study.meta.ownership],
          ].map(([label, value]) => (
            <div key={label}>
              <dt className="text-xs uppercase tracking-widest text-muted-foreground mb-1">
                {label}
              </dt>
              <dd>
                <T>{value}</T>
              </dd>
            </div>
          ))}
        </dl>

        <div className="flex flex-wrap items-center gap-x-6 gap-y-2 mt-5 text-xs text-muted-foreground">
          <span>{minutes} min read</span>
          {study.externalLink && (
            <a
              href={study.externalLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-foreground hover:underline"
            >
              View the product <ArrowUpRight className="w-3 h-3" />
            </a>
          )}
        </div>
      </header>

      <div className="lg:grid lg:grid-cols-[1fr_200px] lg:gap-12 lg:items-start">
        <div className="lg:order-1 min-w-0">
          {/* Mobile TOC */}
          <div className="lg:hidden mb-12 border border-border">
            <button
              onClick={() => setTocOpen(!tocOpen)}
              className="w-full flex items-center justify-between px-4 py-3 text-xs font-bold tracking-widest uppercase"
              aria-expanded={tocOpen}
            >
              Contents
              <ChevronDown
                className={`w-4 h-4 transition-transform ${tocOpen ? "rotate-180" : ""}`}
              />
            </button>
            {tocOpen && (
              <nav className="px-4 pb-4 flex flex-col gap-2">
                {caseStudySections.map((s) => (
                  <a
                    key={s.id}
                    href={`#${s.id}`}
                    onClick={() => setTocOpen(false)}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {s.label}
                  </a>
                ))}
              </nav>
            )}
          </div>

          {/* 00 — Executive summary */}
          <Section id="summary" label="At a glance">
            <div className="grid sm:grid-cols-2 gap-x-10 gap-y-8">
              {[
                ["The Challenge", study.executiveSummary.challenge],
                ["My Role", study.executiveSummary.role],
                ["The Approach", study.executiveSummary.approach],
                ["The Outcome", study.executiveSummary.outcome],
              ].map(([label, value]) => (
                <div key={label}>
                  <h3 className="text-sm font-bold mb-2">{label}</h3>
                  <p className="text-[15px] text-muted-foreground leading-relaxed">
                    <T>{value}</T>
                  </p>
                </div>
              ))}
            </div>
          </Section>

          {/* 01 — Context */}
          <Section id="context" label="01 — Context">
            <Field label="Product context" value={study.context.product} />
            <Field label="Users" value={study.context.users} />
            <Field
              label="Existing workflow"
              value={study.context.existingWorkflow}
            />
            <Field
              label="Market / organizational context"
              value={study.context.marketOrOrg}
            />
            <Field label="Constraints" value={study.context.constraints} />
            <Field
              label="Why the problem mattered"
              value={study.context.whyItMattered}
            />
          </Section>

          {/* 02 — Problem */}
          <Section id="problem" label="02 — The Problem">
            <Field label="User goal" value={study.problem.userGoal} />
            <Field
              label="Existing experience"
              value={study.problem.existingExperience}
            />
            <div className="mb-6">
              <p className="text-xs uppercase tracking-widest text-muted-foreground mb-2">
                Friction
              </p>
              <Bullets items={study.problem.friction} />
            </div>
            <Field label="Why it mattered" value={study.problem.whyItMattered} />
            <div className="mt-8">
              <p className="text-xs uppercase tracking-widest text-muted-foreground mb-3">
                Before — the workflow that existed
              </p>
              <Flow steps={study.problem.beforeFlow} />
            </div>
          </Section>

          {/* 03 — Discovery */}
          <Section id="discovery" label="03 — Discovery">
            <div className="mb-8">
              <h3 className="text-sm font-bold mb-3">
                Questions I needed to answer
              </h3>
              <Bullets items={study.discovery.questions} />
            </div>
            <div className="mb-10">
              <h3 className="text-sm font-bold mb-3">Evidence</h3>
              <Bullets items={study.discovery.evidence} />
            </div>
            <h3 className="text-sm font-bold mb-4">What I found</h3>
            <div className="space-y-6">
              {study.discovery.findings.map((f, i) => (
                <div key={i} className="border-l-2 border-border pl-5">
                  <p className="text-[15px] leading-relaxed mb-2 max-w-[62ch]">
                    <T>{f.observation}</T>
                  </p>
                  <p className="text-xs text-muted-foreground mb-1">
                    Evidence: <T>{f.evidence}</T>
                  </p>
                  <p className="text-xs text-muted-foreground">
                    Why it mattered: <T>{f.whyItMattered}</T>
                  </p>
                </div>
              ))}
            </div>
          </Section>

          {/* 04 — Key insight */}
          <Section id="insight" label="04 — The Key Insight">
            <blockquote className="border-l-2 border-foreground pl-6 mb-10">
              <p className="text-xl sm:text-2xl font-bold tracking-tight leading-snug max-w-[46ch]">
                <T>{study.insight.quote}</T>
              </p>
            </blockquote>
            <div className="space-y-1 max-w-[52ch] text-sm">
              <div className="border border-border px-4 py-3">
                <p className="text-xs uppercase tracking-widest text-muted-foreground mb-1">
                  What we believed
                </p>
                <T>{study.insight.believed}</T>
              </div>
              <p className="text-muted-foreground text-center py-1">↓</p>
              <div className="border border-border px-4 py-3">
                <p className="text-xs uppercase tracking-widest text-muted-foreground mb-1">
                  What we discovered
                </p>
                <T>{study.insight.discovered}</T>
              </div>
              <p className="text-muted-foreground text-center py-1">↓</p>
              <div className="border border-border px-4 py-3">
                <p className="text-xs uppercase tracking-widest text-muted-foreground mb-1">
                  How the strategy changed
                </p>
                <T>{study.insight.changed}</T>
              </div>
            </div>
          </Section>

          {/* 05 — Strategy */}
          <Section id="strategy" label="05 — Product Strategy">
            <div className="mb-8">
              <p className="text-xs uppercase tracking-widest text-muted-foreground mb-2">
                Product hypothesis
              </p>
              <p className="text-lg font-bold tracking-tight leading-snug max-w-[52ch]">
                <T>{study.strategy.hypothesis}</T>
              </p>
            </div>
            <div className="mb-10">
              <h3 className="text-sm font-bold mb-3">Strategic principles</h3>
              <Bullets items={study.strategy.principles} />
            </div>
            <div className="mb-10">
              <h3 className="text-sm font-bold mb-3">Target experience</h3>
              <Flow steps={study.strategy.targetFlow} />
            </div>
            <div>
              <h3 className="text-sm font-bold mb-3">
                What we deliberately did not try to solve
              </h3>
              <Bullets items={study.strategy.notSolving} />
            </div>
          </Section>

          {/* 06 — Options */}
          <Section id="options" label="06 — Options & Trade-offs">
            <div className="overflow-x-auto mb-10 -mx-6 px-6">
              <table className="w-full min-w-[640px] text-sm border-collapse">
                <thead>
                  <tr className="border-b border-border text-left">
                    {["Option", "Description", "Benefits", "Limitations", "Complexity"].map(
                      (h) => (
                        <th
                          key={h}
                          className="py-3 pr-4 text-xs uppercase tracking-widest text-muted-foreground font-bold align-bottom"
                        >
                          {h}
                        </th>
                      )
                    )}
                  </tr>
                </thead>
                <tbody>
                  {study.options.rows.map((o) => (
                    <tr key={o.label} className="border-b border-border align-top">
                      <td className="py-4 pr-4 font-bold">{o.label}</td>
                      <td className="py-4 pr-4 text-muted-foreground">
                        <T>{o.description}</T>
                      </td>
                      <td className="py-4 pr-4 text-muted-foreground">
                        <T>{o.benefits}</T>
                      </td>
                      <td className="py-4 pr-4 text-muted-foreground">
                        <T>{o.limitations}</T>
                      </td>
                      <td className="py-4 pr-4 text-muted-foreground">
                        <T>{o.complexity}</T>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="border-l-2 border-foreground pl-6 space-y-6">
              <Field label="The decision" value={study.options.decision} />
              <Field label="Why" value={study.options.why} />
              <Field label="What we gave up" value={study.options.gaveUp} />
              <Field label="Why it was worth it" value={study.options.worthIt} />
            </div>
          </Section>

          {/* 07 — Prioritization */}
          <Section id="prioritization" label="07 — Prioritization & MVP Scope">
            <div className="overflow-x-auto mb-10 -mx-6 px-6">
              <table className="w-full min-w-[640px] text-sm border-collapse">
                <thead>
                  <tr className="border-b border-border text-left">
                    {["Opportunity", "User impact", "Effort", "Decision", "Reasoning"].map(
                      (h) => (
                        <th
                          key={h}
                          className="py-3 pr-4 text-xs uppercase tracking-widest text-muted-foreground font-bold align-bottom"
                        >
                          {h}
                        </th>
                      )
                    )}
                  </tr>
                </thead>
                <tbody>
                  {study.prioritization.rows.map((r, i) => (
                    <tr key={i} className="border-b border-border align-top">
                      <td className="py-4 pr-4">
                        <T>{r.item}</T>
                      </td>
                      <td className="py-4 pr-4 text-muted-foreground">
                        <T>{r.impact}</T>
                      </td>
                      <td className="py-4 pr-4 text-muted-foreground">
                        <T>{r.effort}</T>
                      </td>
                      <td className="py-4 pr-4 font-bold">{r.decision}</td>
                      <td className="py-4 pr-4 text-muted-foreground">
                        <T>{r.reasoning}</T>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <Field label="The MVP" value={study.prioritization.mvp} />
            <div>
              <p className="text-xs uppercase tracking-widest text-muted-foreground mb-2">
                What I cut
              </p>
              <Bullets items={study.prioritization.cut} />
            </div>
          </Section>

          {/* 08 — Experience & decisions */}
          <Section id="decisions" label="08 — Product Experience & Key Decisions">
            <div className="space-y-10">
              {study.keyDecisions.map((d, i) => (
                <div key={i} className="border-t border-border pt-6 first:border-0 first:pt-0">
                  <h3 className="text-sm font-bold mb-4">
                    <T>{d.area}</T>
                  </h3>
                  <Field label="The problem" value={d.problem} />
                  <Field label="The decision" value={d.decision} />
                  <Field label="Why" value={d.why} />
                  <Field label="Alternative considered" value={d.alternative} />
                </div>
              ))}
            </div>
          </Section>

          {/* 09 — Execution */}
          <Section id="execution" label="09 — Execution">
            <div className="mb-10">
              <h3 className="text-sm font-bold mb-3">What I owned</h3>
              <Bullets items={study.execution.owned} />
            </div>
            <div className="mb-10">
              <h3 className="text-sm font-bold mb-4">Cross-functional work</h3>
              <dl className="space-y-4 text-sm max-w-[62ch]">
                {study.execution.crossFunctional.map((c, i) => (
                  <div key={i}>
                    <dt className="text-xs uppercase tracking-widest text-muted-foreground mb-1">
                      {c.fn}
                    </dt>
                    <dd className="leading-relaxed">
                      <T>{c.detail}</T>
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
            <div>
              <h3 className="text-sm font-bold mb-4">Delivery</h3>
              <ol className="space-y-5 text-sm max-w-[62ch]">
                {study.execution.delivery.map((d, i) => (
                  <li key={i} className="border-l-2 border-border pl-5">
                    <p className="text-xs uppercase tracking-widest text-muted-foreground mb-1">
                      {d.phase}
                    </p>
                    <p className="leading-relaxed">
                      <T>{d.detail}</T>
                    </p>
                  </li>
                ))}
              </ol>
            </div>
          </Section>

          {/* 10 — Measurement */}
          <Section id="measurement" label="10 — Measurement Strategy">
            <Field
              label="Primary outcome"
              value={study.measurement.primaryOutcome}
            />
            <div className="grid sm:grid-cols-2 gap-x-10 gap-y-8 my-8">
              {study.measurement.metrics.map((m) => (
                <div key={m.category} className="border-t border-border pt-4">
                  <div className="flex items-baseline justify-between gap-3 mb-2">
                    <h3 className="text-sm font-bold">{m.category}</h3>
                    <span className="text-xs text-muted-foreground uppercase tracking-widest">
                      {m.status}
                    </span>
                  </div>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    {m.items.map((item, i) => (
                      <li key={i}>
                        <T>{item}</T>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <Field label="Why these metrics" value={study.measurement.why} />
          </Section>

          {/* 11 — Outcomes */}
          <Section id="outcomes" label="11 — Outcomes">
            <div className="mb-10">
              <h3 className="text-sm font-bold mb-3">
                {study.outcomes.earlyStage ? "Early learnings" : "Results"}
              </h3>
              <Bullets items={study.outcomes.results} />
            </div>
            <div className="grid sm:grid-cols-2 gap-x-10 gap-y-8">
              <div>
                <h3 className="text-sm font-bold mb-3">What we validated</h3>
                <Bullets items={study.outcomes.validated} />
              </div>
              <div>
                <h3 className="text-sm font-bold mb-3">
                  What was invalidated
                </h3>
                <Bullets items={study.outcomes.invalidated} />
              </div>
              <div>
                <h3 className="text-sm font-bold mb-3">Unexpected findings</h3>
                <Bullets items={study.outcomes.unexpected} />
              </div>
            </div>
          </Section>

          {/* 12 — Reflection */}
          <Section id="reflection" label="12 — Reflection">
            <div className="mb-10">
              <h3 className="text-sm font-bold mb-3">What I'd do differently</h3>
              <Bullets items={study.reflection.doDifferently} />
            </div>
            <div>
              <h3 className="text-sm font-bold mb-3">What I learned</h3>
              <Bullets items={study.reflection.learned} />
            </div>
          </Section>

          {/* Prev / next */}
          <nav className="border-t border-border pt-8 flex flex-wrap items-baseline justify-between gap-4">
            {prev && prev.slug !== project.slug ? (
              <Link
                to={`/project/${prev.slug}`}
                className="text-xs text-muted-foreground hover:text-foreground transition-colors"
              >
                ← Previous: {prev.title}
              </Link>
            ) : (
              <Link
                to="/work"
                className="text-xs text-muted-foreground hover:text-foreground transition-colors"
              >
                ← All work
              </Link>
            )}
            {next && next.slug !== project.slug && (
              <Link
                to={`/project/${next.slug}`}
                className="text-sm font-bold hover:underline"
              >
                Next: {next.title} →
              </Link>
            )}
          </nav>
        </div>

        {/* Desktop sticky TOC */}
        <nav className="hidden lg:block lg:order-2 sticky top-24">
          <p className="text-xs font-bold tracking-widest uppercase text-muted-foreground mb-4">
            Contents
          </p>
          <ul className="space-y-2">
            {caseStudySections.map((s) => (
              <li key={s.id}>
                <a
                  href={`#${s.id}`}
                  className="text-xs text-muted-foreground hover:text-foreground transition-colors"
                >
                  {s.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </Layout>
  );
};

export default ProjectPage;
