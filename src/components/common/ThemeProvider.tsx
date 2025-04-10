import React, { useEffect } from "react";
import { create } from "zustand";

type Theme = "dark" | "light" | "system";

type ThemeStore = {
  theme: Theme;
  setTheme: (theme: Theme) => void;
};

export const useThemeStore = create<ThemeStore>((set) => ({
  theme: "system",
  setTheme: (theme: Theme) => {
    localStorage.setItem("lm-theme", theme);
    set({ theme });
  },
}));

export function ThemeProvider({
  children,
  defaultTheme = "system",
  storageKey = "lm-theme",
}: {
  children: React.ReactNode;
  defaultTheme?: Theme;
  storageKey?: string;
}) {
  const { setTheme } = useThemeStore();
  const theme = useThemeStore((state) => state.theme);

  // Set initial theme from localStorage or default value
  useEffect(() => {
    const savedTheme =
      (localStorage.getItem(storageKey) as Theme) || defaultTheme;
    setTheme(savedTheme);
  }, [defaultTheme, storageKey, setTheme]);

  // Sync theme changes to the DOM
  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove("light", "dark");

    if (theme === "system") {
      const systemTheme = window.matchMedia("(prefers-color-scheme: dark)")
        .matches
        ? "dark"
        : "light";
      root.classList.add(systemTheme);
    } else {
      root.classList.add(theme);
    }
  }, [theme]);

  return <>{children}</>;
}

// Hook for accessing theme and setTheme
export const useTheme = () => {
  const { theme, setTheme } = useThemeStore();
  return { theme, setTheme };
};
