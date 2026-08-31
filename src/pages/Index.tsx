import { Link } from "react-router-dom";
import { Layout } from "@/components/Layout";
import {
  selectedWork,
  impactMetrics,
  howIWork,
  bookmarks,
  capabilityGroups,
  siteLinks,
} from "@/data/projects";

const recognition =
  bookmarks.find((b) => b.label === "Recognition")?.items.slice(0, 6) ?? [];

const education = [
  "Johns Hopkins University — M.S. Engineering Management",
  "Morgan State University — MBA",
  "Morgan State University — B.S. Electrical Engineering",
];

const Index = () => {
  return (
    <Layout>
      {/* =========================================================
          1 — HERO / POSITIONING
      ========================================================= */}
      <section className="mb-20 sm:mb-28">
        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-3">
          Kay Jasanya
        </h1>

        <p className="text-lg sm:text-xl mb-2">
          Senior Product Manager
        </p>

        <p className="text-xs font-bold tracking-widest uppercase text-muted-foreground mb-8">
          Data · AI · Enterprise · 0→1
        </p>

        <p className="text-base leading-relaxed max-w-[620px] mb-10">
          I build data-driven, technical and enterprise products across
          technology, financial services, government, and startups — defining
          the problem, making the trade-offs explicit, and shipping systems that
          change how decisions get made.
        </p>

        <div className="flex flex-wrap items-center gap-x-6 gap-y-4 text-sm">
          <Link
            to="/work"
            className="border border-foreground px-4 py-2.5 hover:bg-foreground hover:text-background transition-colors"
          >
            View my work
          </Link>

          <Link
            to="/resume"
            className="text-muted-foreground hover:text-foreground transition-colors underline underline-offset-4"
          >
            Résumé
          </Link>

          <a
            href={siteLinks.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground transition-colors underline underline-offset-4"
          >
            LinkedIn
          </a>
        </div>
      </section>

      {/* =========================================================
          2 — SELECTED PRODUCT WORK
          Keep visible — this is the core portfolio evidence.
      ========================================================= */}
      <section className="mb-20 sm:mb-28">
        <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-2 mb-10">
          <h2 className="text-xs font-bold tracking-widest uppercase text-muted-foreground">
            Selected Product Work
          </h2>

          <Link
            to="/work"
            className="text-xs text-muted-foreground hover:text-foreground transition-colors"
          >
            All work →
          </Link>
        </div>

        <div className="space-y-12">
          {selectedWork.map((project) => (
            <article
              key={project.slug}
              className="border-b border-border pb-12 last:border-0 last:pb-0"
            >
              <p className="text-xs tracking-widest uppercase text-muted-foreground mb-3">
                {project.productCategory ?? project.category}
                {project.independent && " · Independent"}
              </p>

              <h3 className="text-xl sm:text-2xl font-bold tracking-tight mb-3">
                {project.title}
              </h3>

              <p className="text-base leading-relaxed max-w-[620px] mb-6">
                {project.headline ?? project.subtitle}
              </p>

              <dl className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-4 text-sm max-w-[640px] mb-6">
                <div>
                  <dt className="text-xs uppercase tracking-widest text-muted-foreground mb-1">
                    Role
                  </dt>
                  <dd>{project.role}</dd>
                </div>

                <div>
                  <dt className="text-xs uppercase tracking-widest text-muted-foreground mb-1">
                    Capabilities
                  </dt>
                  <dd className="text-muted-foreground">
                    {(project.capabilities ?? [project.scope]).join(" · ")}
                  </dd>
                </div>
              </dl>

              <Link
                to={`/project/${project.slug}`}
                className="text-sm font-bold hover:underline underline-offset-4"
              >
                Read case study →
              </Link>
            </article>
          ))}
        </div>
      </section>

      {/* =========================================================
          3 — PRODUCT CAPABILITIES
          Collapsible to reduce visual density.
      ========================================================= */}
      <section className="mb-20 sm:mb-28">
        <h2 className="text-xs font-bold tracking-widest uppercase text-muted-foreground mb-8">
          Product Capabilities
        </h2>

        <div className="border-t border-border">
          {capabilityGroups.map((group) => (
            <details
              key={group.title}
              className="group border-b border-border"
            >
              <summary className="flex items-center justify-between gap-6 py-5 cursor-pointer list-none select-none">
                <span className="text-sm font-bold">
                  {group.title}
                </span>

                <span
                  aria-hidden="true"
                  className="text-lg leading-none text-muted-foreground transition-transform duration-200 group-open:rotate-45"
                >
                  +
                </span>
              </summary>

              <div className="pb-6 pr-8 sm:pr-12">
                <p className="text-sm leading-relaxed">
                  {group.items.join(" · ")}
                </p>

                {group.tools && (
                  <p className="text-xs text-muted-foreground mt-3 leading-relaxed">
                    {group.tools}
                  </p>
                )}
              </div>
            </details>
          ))}
        </div>
      </section>

      {/* =========================================================
          4 — EXPERIENCE
          Keep visible — recruiters should not have to expand this.
      ========================================================= */}
      <section className="mb-20 sm:mb-28">
        <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-2 mb-10">
          <h2 className="text-xs font-bold tracking-widest uppercase text-muted-foreground">
            Experience
          </h2>

          <Link
            to="/resume"
            className="text-xs text-muted-foreground hover:text-foreground transition-colors"
          >
            Full experience →
          </Link>
        </div>

        <div className="space-y-10">

          {/* Elizabeth School of London */}
          <article className="border-b border-border pb-10">
            <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 mb-1">
              <h3 className="text-sm font-bold">
                Elizabeth School of London
              </h3>

              <span className="text-xs text-muted-foreground">
                Aug 2026 – Present
              </span>
            </div>

            <p className="text-sm text-muted-foreground mb-3">
              Assessments Officer
            </p>

            <ul className="space-y-1.5 text-sm leading-relaxed max-w-[640px]">
              <li>
                Manage assessment data and operational workflows across
                Level 4–6 programmes, maintaining accurate records across
                modules, assessments, submissions, grades, plagiarism
                results, and student outcomes.
              </li>

              <li>
                Build and maintain assessment tracking and Excel-based
                reporting systems, consolidating data from Moodle and
                academic processes to improve visibility, data accuracy,
                and workflow efficiency.
              </li>
            </ul>
          </article>

          {/* Aliov */}
          <article className="border-b border-border pb-10">
            <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 mb-1">
              <h3 className="text-sm font-bold">
                Aliov
              </h3>

              <span className="text-xs text-muted-foreground">
                Nov 2025 – Aug 2026
              </span>
            </div>

            <p className="text-sm text-muted-foreground mb-3">
              Founder & Product Manager
            </p>

            <ul className="space-y-1.5 text-sm leading-relaxed max-w-[640px]">
              <li>
                Conducted customer discovery with 50+ legal firms and
                75+ legal professionals, identifying pain points across
                client intake, case management, document tracking, and
                legal workflows.
              </li>

              <li>
                Defined and launched an MVP with 4+ core workflows and
                12+ product features across client, matter, document,
                task, and case management.
              </li>
            </ul>
          </article>

          {/* City of Baltimore */}
          <article className="border-b border-border pb-10">
            <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 mb-1">
              <h3 className="text-sm font-bold">
                City of Baltimore
              </h3>

              <span className="text-xs text-muted-foreground">
                Sep 2024 – Nov 2025
              </span>
            </div>

            <p className="text-sm text-muted-foreground mb-3">
              Data Product Manager
            </p>

            <ul className="space-y-1.5 text-sm leading-relaxed max-w-[640px]">
              <li>
                Led a city-wide analytics initiative leveraging{" "}
                <strong>41,000+ service records</strong> to identify
                systemic drivers of illegal dumping, designing
                interventions projected to reduce incidents by{" "}
                <strong>25%</strong>.
              </li>

              <li>
                Built and scaled a centralized reporting platform used
                across <strong>15+ agencies</strong>, reducing reporting
                cycle time by <strong>30%</strong> and increasing
                stakeholder engagement by <strong>40%</strong>.
              </li>
            </ul>
          </article>

          {/* Morgan State University */}
          <article className="border-b border-border pb-10">
            <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 mb-1">
              <h3 className="text-sm font-bold">
                Morgan State University
              </h3>

              <span className="text-xs text-muted-foreground">
                Jul 2023 – Sep 2024
              </span>
            </div>

            <p className="text-sm text-muted-foreground mb-3">
              Data Product Analyst
            </p>

            <ul className="space-y-1.5 text-sm leading-relaxed max-w-[640px]">
              <li>
                Led data strategy and analysis for environmental and
                redlining initiatives impacting{" "}
                <strong>7,600+ households</strong> across{" "}
                <strong>153 municipalities</strong>, informing policy
                and funding decisions.
              </li>

              <li>
                Designed and automated end-to-end reporting pipelines,
                increasing analytical throughput by{" "}
                <strong>90%</strong> and significantly reducing manual
                effort.
              </li>
            </ul>
          </article>

          {/* Oracle */}
          <article className="border-b border-border pb-10">
            <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 mb-1">
              <h3 className="text-sm font-bold">
                Oracle
              </h3>

              <span className="text-xs text-muted-foreground">
                Jun 2021 – Aug 2021
              </span>
            </div>

            <p className="text-sm text-muted-foreground mb-3">
              Product Manager
            </p>

            <ul className="space-y-1.5 text-sm leading-relaxed max-w-[640px]">
              <li>
                Designed and deployed{" "}
                <strong>5 SQL-driven analytics dashboards</strong> using
                APEX and Grafana, enabling real-time KPI tracking and
                improving operational visibility.
              </li>

              <li>
                Translated business requirements into scalable data
                solutions, aligning technical implementation with
                product needs.
              </li>
            </ul>
          </article>

          {/* Morgan Stanley */}
          <article>
            <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 mb-1">
              <h3 className="text-sm font-bold">
                Morgan Stanley
              </h3>

              <span className="text-xs text-muted-foreground">
                Jun 2019 – Aug 2019
              </span>
            </div>

            <p className="text-sm text-muted-foreground mb-3">
              Technology/Product Analyst
            </p>

            <ul className="space-y-1.5 text-sm leading-relaxed max-w-[640px]">
              <li>
                Built data-driven monitoring systems using Java,
                AngularJS, and Kafka across multiple enterprise
                systems.
              </li>

              <li>
                Developed analytic dashboards connected to Teradata
                databases, enabling real-time reporting for internal
                stakeholders.
              </li>
            </ul>
          </article>

        </div>
      </section>

      {/* =========================================================
          5 — SELECTED IMPACT
          Metric stays visible; explanation expands.
      ========================================================= */}
      <section className="mb-20 sm:mb-28">
        <h2 className="text-xs font-bold tracking-widest uppercase text-muted-foreground mb-8">
          Selected Impact
        </h2>

        <div className="border-t border-border">
          {impactMetrics.map((metric) => (
            <details
              key={metric.label}
              className="group border-b border-border"
            >
              <summary className="flex items-start justify-between gap-6 py-5 cursor-pointer list-none select-none">
                <div className="min-w-0">
                  <p className="text-3xl sm:text-4xl font-bold tracking-tight mb-1">
                    {metric.value}
                  </p>

                  <p className="text-sm font-bold">
                    {metric.label}
                  </p>
                </div>

                <span
                  aria-hidden="true"
                  className="text-lg leading-none text-muted-foreground mt-1 transition-transform duration-200 group-open:rotate-45"
                >
                  +
                </span>
              </summary>

              <div className="pb-6 pr-8 sm:pr-12">
                <p className="text-sm text-muted-foreground leading-relaxed max-w-[620px]">
                  {metric.detail}
                </p>
              </div>
            </details>
          ))}
        </div>
      </section>

      {/* =========================================================
          6 — HOW I THINK ABOUT PRODUCT
          Collapsible principles.
      ========================================================= */}
      <section className="mb-20 sm:mb-28">
        <h2 className="text-xs font-bold tracking-widest uppercase text-muted-foreground mb-8">
          How I Think About Product
        </h2>

        <div className="border-t border-border">
          {howIWork.map((principle) => (
            <details
              key={principle.title}
              className="group border-b border-border"
            >
              <summary className="flex items-center justify-between gap-6 py-5 cursor-pointer list-none select-none">
                <span className="text-sm font-bold">
                  {principle.title}
                </span>

                <span
                  aria-hidden="true"
                  className="text-lg leading-none text-muted-foreground transition-transform duration-200 group-open:rotate-45"
                >
                  +
                </span>
              </summary>

              <div className="pb-6 pr-8 sm:pr-12">
                <p className="text-sm text-muted-foreground leading-relaxed max-w-[620px]">
                  {principle.description}
                </p>
              </div>
            </details>
          ))}
        </div>
      </section>

      {/* =========================================================
          7 — EDUCATION & RECOGNITION
      ========================================================= */}
      <section className="mb-20 sm:mb-28">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 sm:gap-x-12">

          {/* Education */}
          <div>
            <h2 className="text-xs font-bold tracking-widest uppercase text-muted-foreground mb-6">
              Education
            </h2>

            <ul className="space-y-3 text-sm leading-relaxed">
              {education.map((line) => (
                <li key={line}>
                  {line}
                </li>
              ))}
            </ul>
          </div>

          {/* Recognition */}
          <div>
            <div className="flex items-baseline justify-between gap-4 mb-6">
              <h2 className="text-xs font-bold tracking-widest uppercase text-muted-foreground">
                Recognition
              </h2>

              <Link
                to="/recognition"
                className="text-xs text-muted-foreground hover:text-foreground transition-colors"
              >
                All →
              </Link>
            </div>

            <ul className="space-y-3 text-sm">
              {recognition.map((item) => (
                <li
                  key={item.title}
                  className="flex items-start justify-between gap-4"
                >
                  <span>
                    {item.title}
                  </span>

                  <span className="text-xs text-muted-foreground whitespace-nowrap">
                    {item.year}
                  </span>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </section>

      {/* =========================================================
          8 — CONTACT
      ========================================================= */}
      <section className="pb-8">
        <h2 className="text-xs font-bold tracking-widest uppercase text-muted-foreground mb-6">
          Contact
        </h2>

        <h3 className="text-2xl sm:text-3xl font-bold tracking-tight mb-4">
          Let's talk
        </h3>

        <p className="text-sm text-muted-foreground max-w-[620px] mb-6 leading-relaxed">
          I'm interested in Senior Product, Data Product, Technical
          Product and AI Product opportunities.
        </p>

        <div className="flex flex-wrap gap-x-6 gap-y-3 text-sm">
          <a
            href={`mailto:${siteLinks.email}`}
            className="underline underline-offset-4 hover:text-muted-foreground"
          >
            {siteLinks.email}
          </a>

          <a
            href={siteLinks.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="underline underline-offset-4 hover:text-muted-foreground"
          >
            LinkedIn
          </a>

          <a
            href={siteLinks.github}
            target="_blank"
            rel="noopener noreferrer"
            className="underline underline-offset-4 hover:text-muted-foreground"
          >
            GitHub
          </a>

          <Link
            to="/resume"
            className="underline underline-offset-4 hover:text-muted-foreground"
          >
            Résumé
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default Index;