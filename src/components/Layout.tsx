import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Header } from "./Header";
import { Linkedin, Twitter, BookOpen, PenLine } from "lucide-react";

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 max-w-[900px] w-full mx-auto px-6 py-16">
        {children}
      </main>

      <footer className="border-t border-border">
        <div className="max-w-[900px] mx-auto px-6 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground">© 2026 Kay Jasanya</p>
          <div className="flex items-center gap-4">
            <a
              href="https://www.linkedin.com/in/jaskay"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
              title="LinkedIn"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href="https://x.com/JasanyaKayode"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
              title="X"
            >
              <Twitter className="w-4 h-4" />
            </a>
            <a
              href="https://jaskay.medium.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
              title="Medium"
            >
              <PenLine className="w-4 h-4" />
            </a>
            <a
              href="https://www.linkedin.com/newsletters/6979264804028829696/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
              title="Newsletter"
            >
              <BookOpen className="w-4 h-4" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};
