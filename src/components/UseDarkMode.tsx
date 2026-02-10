import { useEffect, useState } from "react";

type Theme = "light" | "dark";

export function UseDarkMode(): [
  boolean,
  React.Dispatch<React.SetStateAction<boolean>>,
] {
  const getInitialTheme = (): boolean => {
    if (typeof window === "undefined") return false;

    const storedTheme = localStorage.getItem("theme") as Theme | null;
    if (storedTheme) return storedTheme === "dark";

    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  };

  const [isDark, setIsDark] = useState<boolean>(getInitialTheme);

  useEffect(() => {
    const root = document.documentElement;
    root.classList.toggle("dark", isDark);
    localStorage.setItem("theme", isDark ? "dark" : "light");
  }, [isDark]);

  return [isDark, setIsDark];
}

