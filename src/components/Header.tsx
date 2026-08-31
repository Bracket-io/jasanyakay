import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useTheme } from "@/hooks/useTheme";
import { siteLinks } from "@/data/projects";
import { Sun, Moon, Monitor, Menu, X } from "lucide-react";

export const Header = () => {
  const { theme, toggleTheme } = useTheme();
  const [mobileOpen, setMobileOpen] = useState(false);
  const { pathname } = useLocation();

  const themeIcon =
    theme === "light" ? (
      <Sun className="w-4 h-4" />
    ) : theme === "dark" ? (
      <Moon className="w-4 h-4" />
    ) : (
      <Monitor className="w-4 h-4" />
    );

  const navLinks = [
    { to: "/work", label: "Work" },
    { to: "/about", label: "About" },
  ];

  const isActive = (to: string) =>
    to === "/"
      ? pathname === "/"
      : pathname === to ||
        (to === "/work" && pathname.startsWith("/project"));

  return (
    <header className="w-full border-b border-border">
      <div className="max-w-[900px] mx-auto px-6 py-5 flex items-center justify-between">
        <Link
          to="/"
          className="text-sm font-bold tracking-tight hover:underline"
        >
          Kay Jasanya
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className={`text-sm transition-colors ${
                isActive(l.to)
                  ? "text-foreground"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {l.label}
            </Link>
          ))}

          <Link
            to="/resume"
            className={`text-sm transition-colors ${
              pathname === "/resume"
                ? "text-foreground"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            Résumé
          </Link>

          <button
            onClick={toggleTheme}
            className="text-muted-foreground hover:text-foreground transition-colors"
            title={`Theme: ${theme}`}
            aria-label="Toggle theme"
          >
            {themeIcon}
          </button>
        </nav>

        {/* Mobile toggle */}
        <div className="flex items-center gap-4 md:hidden">
          <button
            onClick={toggleTheme}
            className="text-muted-foreground hover:text-foreground transition-colors"
            title={`Theme: ${theme}`}
            aria-label="Toggle theme"
          >
            {themeIcon}
          </button>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="text-foreground"
            aria-label="Toggle menu"
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? (
              <X className="w-5 h-5" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <nav className="md:hidden border-t border-border">
          <div className="max-w-[900px] mx-auto px-6 py-4 flex flex-col gap-4">
            {navLinks.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setMobileOpen(false)}
                className={`text-sm transition-colors ${
                  isActive(l.to)
                    ? "text-foreground"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {l.label}
              </Link>
            ))}

            <Link
              to="/resume"
              onClick={() => setMobileOpen(false)}
              className={`text-sm transition-colors ${
                pathname === "/resume"
                  ? "text-foreground"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Résumé
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
};