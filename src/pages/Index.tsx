import { Link } from "react-router-dom";
import { Layout } from "@/components/Layout";
import {
  selectedWork,
  impactMetrics,
  howIWork,
  experience,
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
      {/* 1 — Hero / positioning */}
      <section className="mb-28">
        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-3">
          Kay Jasanya
        </h1>
        <p className="text-lg sm:text-xl mb-2">Senior Product Manager</p>
        <p className="text-xs font-bold tracking-widest uppercase text-muted-foreground mb-8">
          Data · AI · Enterprise · 0→1
        </p>
        <p className="text-base leading-relaxed max-w-[620px] mb-10">
          I build data-driven, technical and enterprise products across
          technology, financial services, government, and startups — defining
          the problem, making the trade-offs explicit, and shipping systems that
          change how decisions get made.
        </p>
        <div className="flex flex-wrap items-center gap-x-6 gap-y-3 text-sm">
          <Link
            to="/work"
            className="border border-foreground px-4 py-2 hover:bg-foreground hover:text-background transition-colors"
          >
            View my work
          </Link>
          <a
            href={siteLinks.resume}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground transition-colors underline"
          >
            Download résumé
          </a>
          <a
            href={siteLinks.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground transition-colors underline"
          >
            LinkedIn
          </a>
        </div>
      </section>

      {/* 2 — Selected Product Work */}
      <section className="mb-28">
        <div className="flex items-baseline justify-between mb-10">
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
              <h3 className="text-xl font-bold tracking-tight mb-3">
                {project.title}
              </h3>
              <p className="text-base leading-relaxed max-w-[620px] mb-5">
                {project.headline ?? project.subtitle}
              </p>

              <dl className="grid sm:grid-cols-2 gap-x-10 gap-y-3 text-sm max-w-[640px] mb-5">
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
                className="text-sm font-bold hover:underline"
              >
                Read case study →
              </Link>
            </article>
          ))}
        </div>
      </section>

      {/* 3 — Product capabilities */}
      <section className="mb-28">
        <h2 className="text-xs font-bold tracking-widest uppercase text-muted-foreground mb-10">
          Product Capabilities
        </h2>
        <div className="grid sm:grid-cols-2 gap-x-12 gap-y-10">
          {capabilityGroups.map((group) => (
            <div key={group.title} className="border-t border-border pt-4">
              <h3 className="text-sm font-bold mb-2">{group.title}</h3>
              <p className="text-sm leading-relaxed">
                {group.items.join(" · ")}
              </p>
              {group.tools && (
                <p className="text-xs text-muted-foreground mt-2">
                  {group.tools}
                </p>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* 4 — Experience */}
      <section className="mb-28">
        <div className="flex items-baseline justify-between mb-10">
          <h2 className="text-xs font-bold tracking-widest uppercase text-muted-foreground">
            Experience
          </h2>
          <Link
            to="/experience"
            className="text-xs text-muted-foreground hover:text-foreground transition-colors"
          >
            Full experience →
          </Link>
        </div>
        <div className="space-y-8">
          {experience.slice(0, 4).map((role) => (
            <div
              key={role.company}
              className="border-b border-border pb-8 last:border-0"
            >
              <div className="flex flex-wrap items-baseline justify-between gap-2 mb-1">
                <h3 className="text-sm font-bold">{role.company}</h3>
                <span className="text-xs text-muted-foreground">
                  {role.period}
                </span>
              </div>
              <p className="text-sm text-muted-foreground mb-3">{role.role}</p>
              <ul className="space-y-1.5 text-sm max-w-[640px]">
                {role.highlights.slice(0, 2).map((h) => (
                  <li key={h}>{h}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* 5 — Selected Impact */}
      <section className="mb-28">
        <h2 className="text-xs font-bold tracking-widest uppercase text-muted-foreground mb-10">
          Selected Impact
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-10">
          {impactMetrics.map((metric) => (
            <div key={metric.label} className="border-t border-border pt-4">
              <p className="text-3xl font-bold tracking-tight mb-2">
                {metric.value}
              </p>
              <p className="text-sm font-bold mb-1">{metric.label}</p>
              <p className="text-xs text-muted-foreground leading-relaxed">
                {metric.detail}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 6 — How I Think About Product */}
      <section className="mb-28">
        <h2 className="text-xs font-bold tracking-widest uppercase text-muted-foreground mb-10">
          How I Think About Product
        </h2>
        <div className="grid sm:grid-cols-2 gap-x-12 gap-y-10">
          {howIWork.map((principle) => (
            <div key={principle.title}>
              <h3 className="text-sm font-bold mb-2">{principle.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {principle.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 7 — Education & Recognition */}
      <section className="mb-28">
        <div className="grid sm:grid-cols-2 gap-x-12 gap-y-12">
          <div>
            <h2 className="text-xs font-bold tracking-widest uppercase text-muted-foreground mb-6">
              Education
            </h2>
            <ul className="space-y-2 text-sm">
              {education.map((line) => (
                <li key={line}>{line}</li>
              ))}
            </ul>
          </div>
          <div>
            <div className="flex items-baseline justify-between mb-6">
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
            <ul className="space-y-2 text-sm">
              {recognition.map((item) => (
                <li
                  key={item.title}
                  className="flex items-baseline justify-between gap-4"
                >
                  <span>{item.title}</span>
                  <span className="text-xs text-muted-foreground whitespace-nowrap">
                    {item.year}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* 8 — Contact */}
      <section>
        <h2 className="text-xs font-bold tracking-widest uppercase text-muted-foreground mb-6">
          Contact
        </h2>
        <h3 className="text-2xl font-bold tracking-tight mb-4">Let's talk</h3>
        <p className="text-sm text-muted-foreground max-w-[620px] mb-6 leading-relaxed">
          I'm interested in Senior Product, Data Product, Technical Product and
          AI Product opportunities.
        </p>
        <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm">
          <a
            href={`mailto:${siteLinks.email}`}
            className="underline hover:text-muted-foreground"
          >
            {siteLinks.email}
          </a>
          <a
            href={siteLinks.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-muted-foreground"
          >
            LinkedIn
          </a>
          <a
            href={siteLinks.github}
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-muted-foreground"
          >
            GitHub
          </a>
          <a
            href={siteLinks.resume}
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-muted-foreground"
          >
            Résumé
          </a>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
