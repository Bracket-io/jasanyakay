import { useParams, Link } from "react-router-dom";
import { Layout } from "@/components/Layout";
import { projects } from "@/data/projects";

const Section = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <section className="mb-12">
    <h2 className="text-xs font-bold tracking-widest uppercase text-muted-foreground mb-3">
      {title}
    </h2>
    <div className="text-sm leading-relaxed">{children}</div>
  </section>
);

const ProjectPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const index = projects.findIndex((p) => p.slug === slug);
  const project = projects[index];
  const next = projects[(index + 1) % projects.length];

  if (!project) {
    return (
      <Layout>
        <p className="text-muted-foreground">Project not found.</p>
        <Link to="/work" className="text-sm underline mt-4 inline-block">
          ← Back to work
        </Link>
      </Layout>
    );
  }

  return (
    <Layout>
      <Link
        to="/work"
        className="text-xs text-muted-foreground hover:text-foreground transition-colors mb-10 inline-block"
      >
        ← Back to work
      </Link>

      <h1 className="text-2xl font-bold tracking-tight mb-2">{project.title}</h1>
      <p className="text-sm text-muted-foreground mb-6 max-w-[640px] leading-relaxed">
        {project.subtitle}
      </p>


      {/* Metadata */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-12 text-sm border-t border-b border-border py-6">
        <div>
          <p className="text-xs text-muted-foreground uppercase tracking-widest mb-1">Role</p>
          <p>{project.role}</p>
        </div>
        <div>
          <p className="text-xs text-muted-foreground uppercase tracking-widest mb-1">Scope</p>
          <p>{project.scope}</p>
        </div>
        <div>
          <p className="text-xs text-muted-foreground uppercase tracking-widest mb-1">Timeline</p>
          <p>{project.timeline}</p>
        </div>
      </div>

      <Section title="Overview">
        <p>{project.overview}</p>
      </Section>

      <Section title="Problem">
        <p>{project.problem}</p>
      </Section>

      <Section title="Context">
        <p>{project.context}</p>
      </Section>

      <Section title="Approach">
        <ul className="space-y-1">
          {project.approach.map((item, i) => (
            <li key={i}>• {item}</li>
          ))}
        </ul>
      </Section>

      <Section title="Product Thinking">
        <ul className="space-y-1">
          {project.productThinking.map((item, i) => (
            <li key={i}>• {item}</li>
          ))}
        </ul>
      </Section>

      <Section title="Execution">
        <ul className="space-y-1">
          {project.execution.map((item, i) => (
            <li key={i}>• {item}</li>
          ))}
        </ul>
      </Section>

      <Section title="Outcome">
        <ul className="space-y-1">
          {project.outcome.map((item, i) => (
            <li key={i}>• {item}</li>
          ))}
        </ul>
      </Section>

      <Section title="Learnings">
        <ul className="space-y-1">
          {project.learnings.map((item, i) => (
            <li key={i}>• {item}</li>
          ))}
        </ul>
      </Section>
    </Layout>
  );
};

export default ProjectPage;
