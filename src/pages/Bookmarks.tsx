import { Layout } from "@/components/Layout";
import { bookmarks } from "@/data/projects";

const Bookmarks = () => {
  return (
    <Layout>
      <h1 className="text-3xl font-bold tracking-tight mb-2">Bookmarks</h1>
      <p className="text-muted-foreground mb-12">
        Competitions, certifications, mentorship, and more.
      </p>

      <div className="space-y-14">
        {Object.entries(bookmarks).map(([category, items]) => (
          <section key={category}>
            <h2 className="text-xs font-bold tracking-widest uppercase text-muted-foreground mb-4">
              {category}
            </h2>
            <ul className="space-y-2">
              {items.map((item, i) => (
                <li key={i} className="text-sm">
                  {item}
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </Layout>
  );
};

export default Bookmarks;
