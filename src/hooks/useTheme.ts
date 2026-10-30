import { useState, useEffect } from "react";

type Theme = "light" | "dark" | "auto";

const getSystemTheme = (): "light" | "dark" =>
  window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";

export const useTheme = () => {
  const [theme, setTheme] = useState<Theme>("light");
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    try {
      const stored = localStorage.getItem("theme");
      if (stored === "light" || stored === "dark" || stored === "auto") setTheme(stored);
    } catch { /* Theme switching also works without browser storage. */ }
    setLoaded(true);
  }, []);

  useEffect(() => {
    if (!loaded) return;
    try { localStorage.setItem("theme", theme); } catch { /* Storage is optional. */ }
    const resolved = theme === "auto" ? getSystemTheme() : theme;
    document.documentElement.classList.toggle("dark", resolved === "dark");
  }, [theme, loaded]);

  useEffect(() => {
    if (theme !== "auto") return;
    const preference = window.matchMedia("(prefers-color-scheme: dark)");
    const update = () => document.documentElement.classList.toggle("dark", preference.matches);
    preference.addEventListener("change", update);
    return () => preference.removeEventListener("change", update);
  }, [theme, loaded]);

  const toggleTheme = () => {
    setTheme((prev) => {
      if (prev === "light") return "dark";
      if (prev === "dark") return "auto";
      return "light";
    });
  };

  return { theme, toggleTheme };
};
