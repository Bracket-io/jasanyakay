import { useState, useEffect } from "react";

type Theme = "light" | "dark" | "auto";

const getSystemTheme = (): "light" | "dark" => {
  const hour = new Date().getHours();
  return hour >= 18 || hour < 6 ? "dark" : "light";
};

export const useTheme = () => {
  const [theme, setTheme] = useState<Theme>(() => {
    const stored = localStorage.getItem("theme") as Theme | null;
    return stored || "auto";
  });

  useEffect(() => {
    localStorage.setItem("theme", theme);
    const resolved = theme === "auto" ? getSystemTheme() : theme;
    document.documentElement.classList.toggle("dark", resolved === "dark");
  }, [theme]);

  // Re-check auto theme every minute
  useEffect(() => {
    if (theme !== "auto") return;
    const interval = setInterval(() => {
      const resolved = getSystemTheme();
      document.documentElement.classList.toggle("dark", resolved === "dark");
    }, 60000);
    return () => clearInterval(interval);
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
