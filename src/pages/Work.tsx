import { useState } from "react";
import { Link } from "react-router-dom";
import { Layout } from "@/components/Layout";
import { projects } from "@/data/projects";
import { ArrowUpRight } from "lucide-react";

const categories = [
  "All",
  ...Array.from(new Set(projects.map((p) => p.category).filter(Boolean))),
];

const Work = () => {
  const [active, setActive] = useState("All");

  const filtered =
    active === "All" ? projects : projects.filter((p) => p.category === active);

  return (
    <Layout>
      <h1 className="text-3xl font-bold tracking-tight mb-2">
        Selected Product Work
      </h1>
      <p className="text-muted-foreground mb-8 max-w-[600px] text-sm leading-relaxed">
        Products and systems I've led across fintech, civic technology, applied
        AI, and enterprise data — framed as problem, decision, and outcome.
      </p>

      <div className="flex flex-wrap gap-2 mb-12">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActive(cat!)}
            className={`text-xs px-3 py-1.5 border transition-colors ${
              active === cat
                ? "bg-foreground text-background border-foreground"
                : "border-border text-muted-foreground hover:text-foreground"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="space-y-10">
        {filtered.map((project) => {
          const body = (
            <>
              <p className="text-xs text-muted-foreground mb-2">
                {project.role} · {project.timeline} · {project.category}
              </p>
              <h2 className="text-base font-bold group-hover:underline mb-2 inline-flex items-center gap-1">
                {project.title}
                {project.externalLink && <ArrowUpRight className="w-3.5 h-3.5" />}
              </h2>
              <p className="text-sm text-muted-foreground mb-3 max-w-[640px] leading-relaxed">
                {project.subtitle}
              </p>
              <dl className="space-y-2 text-sm max-w-[640px]">
                <div>
                  <dt className="text-xs uppercase tracking-widest text-muted-foreground">
                    Problem
                  </dt>
                  <dd className="text-muted-foreground">{project.problem}</dd>
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

      <section className="mt-20 border-t border-border pt-10">
        <h2 className="text-lg font-bold tracking-tight mb-3">
          Building something interesting? Let's talk.
        </h2>
        <Link to="/contact" className="text-sm underline hover:text-muted-foreground">
          Get in touch
        </Link>
      </section>
    </Layout>
  );
};

export default Work;
