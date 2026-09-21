import { useState } from "react";
import { Layout } from "@/components/Layout";
import { bookmarks } from "@/data/bookmarks";
import { ChevronRight } from "lucide-react";

const categories = Array.from(
  new Set(bookmarks.map((item) => item.category || "Other"))
);

const extractYear = (year?: string) => {
  if (!year) return 0;

  const match = year.match(/\d{4}/);
  return match ? Number(match[0]) : 0;
};

const Bookmarks = () => {
  const [openFolder, setOpenFolder] = useState<string | null>(null);

  const toggle = (category: string) => {
    setOpenFolder((current) =>
      current === category ? null : category
    );
  };

  return (
    <Layout>
      <h1 className="text-3xl font-bold tracking-tight mb-2">
        Recognition
      </h1>

      <p className="text-muted-foreground mb-12 text-sm leading-relaxed max-w-[600px]">
        Awards, fellowships, publications, press, teaching, mentorship, and
        other work worth keeping on record.
      </p>

      <div className="space-y-1">
        {categories.map((category) => {
          const items = bookmarks
            .filter((item) => (item.category || "Other") === category)
            .sort(
              (a, b) => extractYear(b.year) - extractYear(a.year)
            );

          const isOpen = openFolder === category;

          return (
            <div key={category}>
              <button
                type="button"
                onClick={() => toggle(category)}
                className="w-full flex items-center gap-3 py-4 border-b border-border text-left hover:text-foreground transition-colors"
              >
                <ChevronRight
                  className={`w-4 h-4 text-muted-foreground transition-transform ${
                    isOpen ? "rotate-90" : ""
                  }`}
                />

                <span className="text-sm font-bold">
                  {category}
                </span>

                <span className="text-xs text-muted-foreground ml-auto">
                  {items.length}
                </span>
              </button>

              {isOpen && (
                <div className="pl-7 py-4 space-y-4 border-b border-border">
                  {items.map((item, index) => (
                    <div
                      key={`${item.title}-${index}`}
                      className="flex items-start justify-between gap-6"
                    >
                      <div className="min-w-0">
                        {item.url ? (
                          <a
                            href={item.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sm hover:underline"
                          >
                            {item.title}
                          </a>
                        ) : (
                          <span className="text-sm">
                            {item.title}
                          </span>
                        )}

                        {item.organization && (
                          <div className="text-xs text-muted-foreground mt-1">
                            {item.organization}
                          </div>
                        )}

                        {item.description && (
                          <div className="text-xs text-muted-foreground mt-1">
                            {item.description}
                          </div>
                        )}
                      </div>

                      {item.year && (
                        <span className="text-xs text-muted-foreground whitespace-nowrap">
                          {item.year}
                        </span>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </Layout>
  );
};

export default Bookmarks;
