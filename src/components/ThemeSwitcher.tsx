"use client";

import { Sun, Moon } from "lucide-react";
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";

import cn from "@/utils/classname";

export default function ThemeSwitcher() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    // Prevents hydration mismatch
    return <div className="bg-muted h-6 w-12 animate-pulse rounded-full" />;
  }

  const toggleTheme = () => {
    setTheme(resolvedTheme === "dark" ? "light" : "dark");
  };

  return (
    <button
      onClick={toggleTheme}
      className={cn(
        "relative inline-flex h-6 w-12 items-center rounded-full transition-all duration-300 ease-in-out",
        "focus:ring-offset-background focus:ring-2 focus:ring-offset-2 focus:outline-none",
        "hover:scale-105 active:scale-95",
        resolvedTheme === "dark"
          ? "from-theme-switcher-dark to-theme-switcher-dark-hover bg-gradient-to-r"
          : "from-theme-switcher-light to-theme-switcher-light-hover bg-gradient-to-r",
      )}
    >
      <span
        className={cn(
          "inline-flex h-5 w-5 transform items-center justify-center rounded-full bg-white shadow-lg transition-all duration-300 ease-in-out",
          resolvedTheme === "dark" ? "translate-x-6" : "translate-x-0",
        )}
      >
        {resolvedTheme === "dark" ? (
          <Moon className="text-theme-switcher-dark h-3 w-3" />
        ) : (
          <Sun className="text-theme-switcher-light h-3 w-3" />
        )}
      </span>
    </button>
  );
}
