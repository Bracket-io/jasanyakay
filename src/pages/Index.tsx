import { Link } from "react-router-dom";
import { Layout } from "@/components/Layout";
import {
  selectedWork,
  thoughts,
  impactMetrics,
  howIWork,
  experience,
  bookmarks,
} from "@/data/projects";
import { ArrowUpRight } from "lucide-react";

const recognition =
  bookmarks.find((b) => b.label === "Recognition")?.items.slice(0, 6) ?? [];

const Index = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="mb-24">
        <h1 className="text-4xl font-bold tracking-tight mb-2">Kay Jasanya</h1>
        <p className="text-lg mb-6">Product Leader</p>
        <p className="text-base leading-relaxed max-w-[600px] mb-6">
          I build and scale digital products that turn complex problems into
          simple, useful experiences.
        </p>
        <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-muted-foreground">
          <Link to="/work" className="text-foreground hover:underline">
            View selected work
          </Link>
          <a
            href="mailto:iamjasanyakay@gmail.com"
            className="hover:text-foreground transition-colors"
          >
            Get in touch
          </a>
        </div>
      </section>

      {/* Impact Snapshot */}
      <section className="mb-24">
        <p className="text-xs font-bold tracking-widest uppercase text-muted-foreground mb-8">
          Impact Snapshot
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-8">
          {impactMetrics.map((metric) => (
            <div key={metric.label} className="border-t border-border pt-4">
              <p className="text-2xl font-bold tracking-tight mb-1">
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

      {/* Selected Product Work */}
      <section className="mb-24">
        <div className="flex items-center justify-between mb-8">
          <p className="text-xs font-bold tracking-widest uppercase text-muted-foreground">
            Selected Product Work
          </p>
          <Link
            to="/work"
            className="text-xs text-muted-foreground hover:text-foreground transition-colors"
          >
            View all →
          </Link>
        </div>

        <div className="space-y-10">
          {selectedWork.map((project) => {
            const body = (
              <>
                <p className="text-xs text-muted-foreground mb-2">
                  {project.role} · {project.timeline} · {project.category}
                </p>
                <h3 className="text-base font-bold group-hover:underline mb-2 inline-flex items-center gap-1">
                  {project.title}
                  {project.externalLink && (
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  )}
                </h3>
                <dl className="space-y-2 text-sm max-w-[640px]">
                  <div>
                    <dt className="text-xs uppercase tracking-widest text-muted-foreground">
                      Problem
                    </dt>
                    <dd className="text-muted-foreground">{project.problem}</dd>
                  </div>
                  <div>
                    <dt className="text-xs uppercase tracking-widest text-muted-foreground">
                      What I did
                    </dt>
                    <dd className="text-muted-foreground">
                      {project.approach[0]}
                    </dd>
                  </div>
                  <div>
                    <dt className="text-xs uppercase tracking-widest text-muted-foreground">
                      Outcome
                    </dt>
                    <dd>{project.outcome[0]}</dd>
                  </div>
                </dl>
              </>
            );

            return project.externalLink ? (
              <a
                key={project.slug}
                href={project.externalLink}
                target="_blank"
                rel="noopener noreferrer"
                className="block group border-b border-border pb-10 last:border-0"
              >
                {body}
              </a>
            ) : (
              <Link
                key={project.slug}
                to={`/project/${project.slug}`}
                className="block group border-b border-border pb-10 last:border-0"
              >
                {body}
              </Link>
            );
          })}
        </div>
      </section>

      {/* How I Work */}
      <section className="mb-24">
        <p className="text-xs font-bold tracking-widest uppercase text-muted-foreground mb-8">
          How I Work
        </p>
        <div className="grid sm:grid-cols-2 gap-x-12 gap-y-8">
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

      {/* Experience */}
      <section className="mb-24">
        <p className="text-xs font-bold tracking-widest uppercase text-muted-foreground mb-8">
          Experience
        </p>
        <div className="space-y-8">
          {experience.map((role) => (
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
                {role.highlights.map((h) => (
                  <li key={h} className="text-muted-foreground">
                    {h}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Recognition */}
      <section className="mb-24">
        <div className="flex items-center justify-between mb-8">
          <p className="text-xs font-bold tracking-widest uppercase text-muted-foreground">
            Recognition
          </p>
          <Link
            to="/recognition"
            className="text-xs text-muted-foreground hover:text-foreground transition-colors"
          >
            View all →
          </Link>
        </div>
        <div className="grid sm:grid-cols-2 gap-x-12 gap-y-2">
          {recognition.map((item) => (
            <div
              key={item.title}
              className="flex items-baseline justify-between gap-4 text-sm"
            >
              <span>{item.title}</span>
              <span className="text-xs text-muted-foreground whitespace-nowrap">
                {item.year}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* Thinking in Public */}
      <section className="mb-24">
        <div className="flex items-center justify-between mb-8">
          <p className="text-xs font-bold tracking-widest uppercase text-muted-foreground">
            Thinking in Public
          </p>
          <Link
            to="/thinking"
            className="text-xs text-muted-foreground hover:text-foreground transition-colors"
          >
            View all →
          </Link>
        </div>
        <div className="space-y-6">
          {thoughts.slice(0, 4).map((post, i) => (
            <a
              key={i}
              href={post.link}
              target="_blank"
              rel="noopener noreferrer"
              className="block group border-b border-border pb-6 last:border-0"
            >
              <p className="text-xs text-muted-foreground mb-1">
                {post.date} · {post.category}
              </p>
              <h3 className="text-sm font-bold group-hover:underline">
                {post.title}
              </h3>
            </a>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section>
        <p className="text-xs font-bold tracking-widest uppercase text-muted-foreground mb-6">
          Contact
        </p>
        <h2 className="text-2xl font-bold tracking-tight mb-4">
          Building something interesting? Let's talk.
        </h2>
        <p className="text-sm text-muted-foreground max-w-[600px] mb-6 leading-relaxed">
          Open to senior product roles, advisory work, and conversations about
          data products, civic systems, and fintech.
        </p>
        <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm">
          <a
            href="mailto:iamjasanyakay@gmail.com"
            className="underline hover:text-muted-foreground"
          >
            iamjasanyakay@gmail.com
          </a>
          <a
            href="https://www.linkedin.com/in/jaskay"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-muted-foreground"
          >
            LinkedIn
          </a>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
