import { Link } from "react-router-dom";
import { Layout } from "@/components/Layout";
import { selectedWork, thoughts, bookmarks } from "@/data/projects";
import { ArrowUpRight } from "lucide-react";

const Index = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="mb-20">
        <h1 className="text-4xl font-bold tracking-tight mb-2">Kay Jasanya</h1>
        <p className="text-lg text-muted-foreground mb-6">
          Data Product Manager building data-driven systems and decision tools.
        </p>
        <p className="text-sm text-muted-foreground">
          Focused on fintech, civic systems, and scalable product design.
        </p>
      </section>

      {/* Employers */}
      <section className="mb-20">
        <p className="text-xs font-bold tracking-widest uppercase text-muted-foreground mb-4">
          Experience
        </p>
        <div className="flex flex-wrap gap-x-8 gap-y-2 text-sm">
          <span>City of Baltimore</span>
          <span>Morgan Stanley</span>
          <span>Morgan State University</span>
          <span>Oracle</span>
          <span>VMware</span>
          <span>Johns Hopkins Hospital</span>
          <span>Oasis Inc.</span>
        </div>
      </section>

      {/* Selected Work */}
      <section className="mb-20">
        <p className="text-xs font-bold tracking-widest uppercase text-muted-foreground mb-8">
          Selected Work
        </p>
        <div className="space-y-8">
          {selectedWork.map((project) =>
            project.externalLink ? (
              <a
                key={project.slug}
                href={project.externalLink}
                target="_blank"
                rel="noopener noreferrer"
                className="block group border-b border-border pb-8 last:border-0"
              >
                <h3 className="text-base font-bold group-hover:underline mb-1 inline-flex items-center gap-1">
                  {project.title}
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </h3>
                <p className="text-sm text-muted-foreground">
                  {project.subtitle}
                </p>
              </a>
            ) : (
              <Link
                key={project.slug}
                to={`/project/${project.slug}`}
                className="block group border-b border-border pb-8 last:border-0"
              >
                <h3 className="text-base font-bold group-hover:underline mb-1">
                  {project.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {project.subtitle}
                </p>
              </Link>
            )
          )}
          <a
            href="https://www.figma.com/proto/qRgEiQswJ6Sch40Kws4ngJ/UX-Case-Study?type=design&node-id=3-10&t=LKQ3RoeyvxoVVcAm-0&scaling=contain&page-id=3%3A3"
            target="_blank"
            rel="noopener noreferrer"
            className="block group border-b border-border pb-8"
          >
            <h3 className="text-base font-bold group-hover:underline mb-1 inline-flex items-center gap-1">
              Brightly WorxHub redesign
              <ArrowUpRight className="w-3.5 h-3.5" />
            </h3>
            <p className="text-sm text-muted-foreground">
              Product UX case study
            </p>
          </a>
        </div>
      </section>

      {/* Thoughts Preview */}
      <section className="mb-20">
        <div className="flex items-center justify-between mb-8">
          <p className="text-xs font-bold tracking-widest uppercase text-muted-foreground">
            Thoughts
          </p>
          <Link
            to="/thoughts"
            className="text-xs text-muted-foreground hover:text-foreground transition-colors"
          >
            View all →
          </Link>
        </div>
        <div className="space-y-6">
          {thoughts.slice(0, 3).map((post, i) => (
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

      {/* Bookmarks Preview */}
      <section>
        <div className="flex items-center justify-between mb-8">
          <p className="text-xs font-bold tracking-widest uppercase text-muted-foreground">
            Bookmarks
          </p>
          <Link
            to="/bookmarks"
            className="text-xs text-muted-foreground hover:text-foreground transition-colors"
          >
            View all →
          </Link>
        </div>
        <div className="flex flex-wrap gap-3">
          {bookmarks.map((folder) => (
            <Link
              key={folder.label}
              to="/bookmarks"
              className="text-sm border border-border px-3 py-1.5 hover:bg-accent transition-colors"
            >
              {folder.label}
            </Link>
          ))}
        </div>
      </section>
    </Layout>
  );
};

export default Index;
