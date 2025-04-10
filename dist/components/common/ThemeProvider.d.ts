import React from "react";
type Theme = "dark" | "light" | "system";
export declare const useThemeStore: any;
export declare function ThemeProvider({ children, defaultTheme, storageKey, }: {
    children: React.ReactNode;
    defaultTheme?: Theme;
    storageKey?: string;
}): import("react/jsx-runtime").JSX.Element;
export declare const useTheme: () => {
    theme: any;
    setTheme: any;
};
export {};
