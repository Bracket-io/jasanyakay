import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useTheme } from "@/hooks/useTheme";
import { Sun, Moon, Monitor, Menu, X } from "lucide-react";

const navLinks = [
  { to: "/work", label: "Work" },
  { to: "/about", label: "About" },
  { to: "/resume", label: "Résumé" },
  { to: "/speaking", label: "Speaking" },
];

export const Header = () => {
  const { theme, toggleTheme } = useTheme();
  const [mobileOpen, setMobileOpen] = useState(false);
  const { pathname } = useLocation();
  const ThemeIcon = theme === "light" ? Sun : theme === "dark" ? Moon : Monitor;
  const isActive = (to: string) => pathname === to || (to === "/work" && (pathname.startsWith("/project") || pathname.startsWith("/case-studies")));

  return <header className="site-header w-full">
    <div className="max-w-[1280px] mx-auto px-6 py-7 flex items-center justify-between">
      <Link to="/" className="site-wordmark" aria-label="Kay Jasanya, home"><span>Kay Jasanya<span className="wordmark-period">.</span></span></Link>
      <nav aria-label="Main navigation" className="hidden md:flex items-center gap-7">
        {navLinks.map(link=><Link key={link.to} to={link.to} aria-current={isActive(link.to) ? "page" : undefined} className={`text-sm transition-colors ${isActive(link.to) ? "text-foreground" : "text-muted-foreground hover:text-foreground"}`}>{link.label}</Link>)}
        <a href="#contact" className="header-contact">Let’s talk <span aria-hidden="true">↗</span></a>
        <button onClick={toggleTheme} className="theme-button text-muted-foreground hover:text-foreground transition-colors" title={`Theme: ${theme}`} aria-label="Toggle theme"><ThemeIcon className="w-4 h-4" /></button>
      </nav>
      <div className="flex items-center gap-4 md:hidden">
        <button onClick={toggleTheme} className="theme-button text-muted-foreground hover:text-foreground transition-colors" title={`Theme: ${theme}`} aria-label="Toggle theme"><ThemeIcon className="w-4 h-4" /></button>
        <button onClick={()=>setMobileOpen(!mobileOpen)} className="text-foreground p-2" aria-label="Toggle menu" aria-expanded={mobileOpen} aria-controls="mobile-navigation">{mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}</button>
      </div>
    </div>
    {mobileOpen && <nav id="mobile-navigation" aria-label="Mobile navigation" className="md:hidden border-t border-border"><div className="max-w-[1280px] mx-auto px-6 py-4 flex flex-col gap-4">{navLinks.map(link=><Link key={link.to} to={link.to} onClick={()=>setMobileOpen(false)} aria-current={isActive(link.to) ? "page" : undefined} className={`text-sm py-2 transition-colors ${isActive(link.to) ? "text-foreground" : "text-muted-foreground hover:text-foreground"}`}>{link.label}</Link>)}<a href="#contact" onClick={()=>setMobileOpen(false)} className="text-sm py-2">Let’s talk ↗</a></div></nav>}
  </header>;
};
