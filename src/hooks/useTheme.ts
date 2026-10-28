import { useState, useEffect } from "react";

type Theme = "light" | "dark" | "auto";

const getSystemTheme = (): "light" | "dark" =>
  window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";

export const useTheme = () => {
  const [theme, setTheme] = useState<Theme>(() => {
    const stored = localStorage.getItem("theme") as Theme | null;
    return stored === "light" || stored === "dark" || stored === "auto" ? stored : "light";
  });

  useEffect(() => {
    localStorage.setItem("theme", theme);
    const resolved = theme === "auto" ? getSystemTheme() : theme;
    document.documentElement.classList.toggle("dark", resolved === "dark");
  }, [theme]);

  useEffect(() => {
    if (theme !== "auto") return;
    const preference = window.matchMedia("(prefers-color-scheme: dark)");
    const update = () => document.documentElement.classList.toggle("dark", preference.matches);
    preference.addEventListener("change", update);
    return () => preference.removeEventListener("change", update);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => {
      if (prev === "light") return "dark";
      if (prev === "dark") return "auto";
      return "light";
    });
  };

  return { theme, toggleTheme };
};
