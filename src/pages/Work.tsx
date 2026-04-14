import { useState } from "react";
import { Link } from "react-router-dom";
import { Layout } from "@/components/Layout";
import { projects } from "@/data/projects";
import { ArrowUpRight } from "lucide-react";

const categories = ["All", ...Array.from(new Set(projects.map((p) => p.category).filter(Boolean)))];

const Work = () => {
  const [active, setActive] = useState("All");

  const filtered = active === "All" ? projects : projects.filter((p) => p.category === active);

  return (
    <Layout>
      <h1 className="text-3xl font-bold tracking-tight mb-2">Portfolio</h1>
      <p className="text-muted-foreground mb-8">
        Selected projects across product, data, and venture capital.
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
        {filtered.map((project) =>
          project.externalLink ? (
            <a
              key={project.slug}
              href={project.externalLink}
              target="_blank"
              rel="noopener noreferrer"
              className="block group border-b border-border pb-10 last:border-0"
            >
              <h2 className="text-base font-bold group-hover:underline mb-1 inline-flex items-center gap-1">
                {project.title}
                <ArrowUpRight className="w-3.5 h-3.5" />
              </h2>
              <p className="text-sm text-muted-foreground mb-1">
                {project.subtitle}
              </p>
              <p className="text-xs text-muted-foreground">{project.year}</p>
            </a>
          ) : (
            <Link
              key={project.slug}
              to={`/project/${project.slug}`}
              className="block group border-b border-border pb-10 last:border-0"
            >
              <h2 className="text-base font-bold group-hover:underline mb-1">
                {project.title}
              </h2>
              <p className="text-sm text-muted-foreground mb-1">
                {project.subtitle}
              </p>
              <p className="text-xs text-muted-foreground">{project.year}</p>
            </Link>
          )
        )}
      </div>
    </Layout>
  );
};

export default Work;
