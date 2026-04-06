import { Link } from "react-router-dom";
import { useTheme } from "@/hooks/useTheme";
import { Sun, Moon, Monitor } from "lucide-react";

export const Header = () => {
  const { theme, toggleTheme } = useTheme();

  const themeIcon = theme === "light" ? <Sun className="w-4 h-4" /> : theme === "dark" ? <Moon className="w-4 h-4" /> : <Monitor className="w-4 h-4" />;

  return (
    <header className="w-full border-b border-border">
      <div className="max-w-[900px] mx-auto px-6 py-5 flex items-center justify-between">
        <Link to="/" className="text-sm font-bold tracking-tight hover:underline">
          Kay Jasanya
        </Link>
        <nav className="flex items-center gap-6">
          <Link to="/portfolio" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            Portfolio
          </Link>
          <Link to="/thoughts" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            Thoughts
          </Link>
          <Link to="/bookmarks" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            Bookmarks
          </Link>
          <Link to="/about" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            About
          </Link>
          <button
            onClick={toggleTheme}
            className="text-muted-foreground hover:text-foreground transition-colors"
            title={`Theme: ${theme}`}
          >
            {themeIcon}
          </button>
        </nav>
      </div>
    </header>
  );
};
