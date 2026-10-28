import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useTheme } from "@/hooks/useTheme";
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
        (to === "/work" && (pathname.startsWith("/project") || pathname.startsWith("/case-studies")));

  return (
    <header className="site-header w-full">
      <div className="max-w-[1280px] mx-auto px-6 py-7 flex items-center justify-between">
        <Link
          to="/"
          className="site-wordmark" aria-label="Kay Jasanya, home"
        >
          <span>Kay Jasanya<span className="wordmark-period">.</span></span>
        </Link>

        {/* Desktop nav */}
        <nav aria-label="Main navigation" className="hidden md:flex items-center gap-7">
          {navLinks.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              aria-current={isActive(l.to) ? "page" : undefined}
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

          <a href="#contact" className="header-contact">Let’s talk <span aria-hidden="true">↗</span></a>

          <button
            onClick={toggleTheme}
            className="theme-button text-muted-foreground hover:text-foreground transition-colors"
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
            className="theme-button text-muted-foreground hover:text-foreground transition-colors"
            title={`Theme: ${theme}`}
            aria-label="Toggle theme"
          >
            {themeIcon}
          </button>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="text-foreground p-2"
            aria-label="Toggle menu"
            aria-expanded={mobileOpen}
            aria-controls="mobile-navigation"
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
        <nav id="mobile-navigation" aria-label="Mobile navigation" className="md:hidden border-t border-border">
          <div className="max-w-[1280px] mx-auto px-6 py-4 flex flex-col gap-4">
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
            <a href="#contact" onClick={() => setMobileOpen(false)} className="text-sm py-2">Let’s talk ↗</a>
          </div>
        </nav>
      )}
    </header>
  );
};