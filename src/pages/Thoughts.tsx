import { useState } from "react";
import { Layout } from "@/components/Layout";
import { thoughts } from "@/data/projects";
import { ArrowUpRight } from "lucide-react";

const categories = ["All", ...Array.from(new Set(thoughts.map((t) => t.category)))];

const Thoughts = () => {
  const [active, setActive] = useState("All");

  const filtered =
    active === "All" ? thoughts : thoughts.filter((t) => t.category === active);

  return (
    <Layout>
      <h1 className="text-3xl font-bold tracking-tight mb-2">Thinking in Public</h1>
      <p className="text-muted-foreground mb-8 max-w-[600px] text-sm leading-relaxed">
        Essays and research on product strategy, data products, civic systems,
        fintech, and applied AI.
      </p>

      <div className="flex flex-wrap gap-2 mb-12">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActive(cat)}
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

      <div className="space-y-8">
        {filtered.map((post, i) => (
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
            <h2 className="text-base font-bold group-hover:underline mb-1 inline-flex items-center gap-1">
              {post.title}
              <ArrowUpRight className="w-3.5 h-3.5" />
            </h2>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-[640px]">
              {post.description}
            </p>
          </a>
        ))}
      </div>
    </Layout>
  );
};

export default Thoughts;
