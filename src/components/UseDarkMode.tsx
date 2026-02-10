import { useEffect, useState } from "react";

type ThemeMode = "light" | "dark" | "system";

type DarkModeState = {
  isDark: boolean;
  mode: ThemeMode;
  setMode: React.Dispatch<React.SetStateAction<ThemeMode>>;
};

const getStoredMode = (): ThemeMode => {
  if (typeof window === "undefined") return "light";
  const stored = localStorage.getItem("theme");
  if (stored === "light" || stored === "dark" || stored === "system") {
    return stored;
  }
  return "system";
};

const getSystemDark = (): boolean => {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(prefers-color-scheme: dark)").matches;
};

export function UseDarkMode(): DarkModeState {
  const [mode, setMode] = useState<ThemeMode>(getStoredMode);
  const [isDark, setIsDark] = useState<boolean>(() => {
    if (typeof window === "undefined") return false;
    const stored = localStorage.getItem("theme") as ThemeMode | null;
    if (stored === "dark") return true;
    if (stored === "light") return false;
    return getSystemDark();
  });

  useEffect(() => {
    if (typeof window === "undefined") return undefined;
    const media = window.matchMedia("(prefers-color-scheme: dark)");
    const applyTheme = (dark: boolean) => {
      setIsDark(dark);
      document.documentElement.classList.toggle("dark", dark);
    };

    if (mode === "system") {
      applyTheme(media.matches);
      const onChange = (event: MediaQueryListEvent) => {
        applyTheme(event.matches);
      };
      media.addEventListener("change", onChange);
      return () => media.removeEventListener("change", onChange);
    }

    applyTheme(mode === "dark");
    return undefined;
  }, [mode]);

  useEffect(() => {
    if (typeof window === "undefined") return;
    localStorage.setItem("theme", mode);
  }, [mode]);

  return { isDark, mode, setMode };
}

