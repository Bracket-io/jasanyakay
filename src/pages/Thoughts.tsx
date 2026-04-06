import { Layout } from "@/components/Layout";
import { thoughts } from "@/data/projects";

const Thoughts = () => {
  return (
    <Layout>
      <h1 className="text-3xl font-bold tracking-tight mb-2">Thoughts</h1>
      <p className="text-muted-foreground mb-12">
        Writing on product strategy, venture capital, and building systems.
      </p>

      <div className="space-y-8">
        {thoughts.map((post, i) => (
          <a
            key={i}
            href={post.link}
            target="_blank"
            rel="noopener noreferrer"
            className="block group border-b border-border pb-8 last:border-0"
          >
            <p className="text-xs text-muted-foreground mb-2">
              {post.date} · {post.category}
            </p>
            <h2 className="text-base font-bold group-hover:underline mb-1">
              {post.title}
            </h2>
            <p className="text-sm text-muted-foreground">
              {post.description}
            </p>
          </a>
        ))}
      </div>
    </Layout>
  );
};

export default Thoughts;
