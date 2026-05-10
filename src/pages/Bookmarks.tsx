import { useState, useMemo } from "react";
import { Layout } from "@/components/Layout";
import { bookmarks } from "@/data/projects";
import { ChevronRight } from "lucide-react";

const Bookmarks = () => {
  const [openFolder, setOpenFolder] = useState<string | null>(null);

  const toggle = (label: string) => {
    setOpenFolder((prev) => (prev === label ? null : label));
  };

  const sortedBookmarks = useMemo(() => {
    const extractYear = (yearStr?: string) => {
      if (!yearStr) return 0;
      const match = yearStr.match(/(\d{4})/);
      return match ? parseInt(match[1], 10) : 0;
    };

    const folders = [...bookmarks].sort((a, b) =>
      a.label.localeCompare(b.label)
    );

    return folders.map((folder) => ({
      ...folder,
      items: [...folder.items].sort((a, b) => {
        const yearA = extractYear(a.year);
        const yearB = extractYear(b.year);
        return yearB - yearA;
      }),
    }));
  }, []);

  return (
    <Layout>
      <h1 className="text-3xl font-bold tracking-tight mb-2">Bookmarks</h1>
      <p className="text-muted-foreground mb-12">
        Competitions, certifications, mentorship, and more.
      </p>

      <div className="space-y-1">
        {sortedBookmarks.map((folder) => (
          <div key={folder.label}>
            <button
              onClick={() => toggle(folder.label)}
              className="w-full flex items-center gap-3 py-3 border-b border-border text-left hover:text-foreground transition-colors group"
            >
              <ChevronRight
                className={`w-4 h-4 text-muted-foreground transition-transform ${
                  openFolder === folder.label ? "rotate-90" : ""
                }`}
              />
              <span className="text-sm font-bold">{folder.label}</span>
              <span className="text-xs text-muted-foreground ml-auto">
                {folder.items.length}
              </span>
            </button>

            {openFolder === folder.label && (
              <div className="pl-7 py-3 space-y-3 border-b border-border">
                {folder.items.map((item, i) => (
                  <div key={i} className="flex items-baseline justify-between gap-4">
                    {item.link ? (
                      <a
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm hover:underline"
                      >
                        {item.title}
                      </a>
                    ) : (
                      <span className="text-sm">{item.title}</span>
                    )}
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
        ))}
      </div>
    </Layout>
  );
};

export default Bookmarks;
