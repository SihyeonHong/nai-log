"use client";

import { ThemeProvider as NextThemeProvider } from "next-themes";
import { ReactNode } from "react";

interface ProvidersProps {
  children: ReactNode;
}

export default function ThemeProvider({ children }: ProvidersProps) {
  return (
    <NextThemeProvider attribute="class" enableSystem defaultTheme="system">
      <div className="bg-background text-foreground min-h-screen transition-colors">
        {children}
      </div>
    </NextThemeProvider>
  );
}
