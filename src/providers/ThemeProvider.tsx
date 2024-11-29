"use client";

import { ThemeProvider as NextThemesProvider } from "next-themes";

export function ThemeProvider({ children, attribute, defaultTheme, ...props }: { children: React.ReactNode, attribute: string, defaultTheme: string }) {
    return <NextThemesProvider attribute={attribute} defaultTheme={defaultTheme} {...props}>{children}</NextThemesProvider>;
}
