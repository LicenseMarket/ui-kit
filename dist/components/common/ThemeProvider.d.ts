import React from "react";
type Theme = "dark" | "light" | "system";
type ThemeStore = {
    theme: Theme;
    setTheme: (theme: Theme) => void;
};
export declare const useThemeStore: import("zustand").UseBoundStore<import("zustand").StoreApi<ThemeStore>>;
export declare function ThemeProvider({ children, defaultTheme, storageKey, }: {
    children: React.ReactNode;
    defaultTheme?: Theme;
    storageKey?: string;
}): import("react/jsx-runtime").JSX.Element;
export declare const useTheme: () => {
    theme: Theme;
    setTheme: (theme: Theme) => void;
};
export {};
