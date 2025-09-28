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
    return (
      <div className="bg-background-secondary h-6 w-12 animate-pulse rounded-full" />
    );
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
        resolvedTheme === "dark" ? "bg-gray-600" : "bg-gray-200",
      )}
    >
      <span
        className={cn(
          "inline-flex h-5 w-5 transform items-center justify-center rounded-full bg-white shadow-lg transition-all duration-300 ease-in-out",
          resolvedTheme === "dark" ? "translate-x-6" : "translate-x-0",
        )}
      >
        {resolvedTheme === "dark" ? (
          <Moon className="h-3 w-3 text-gray-800" />
        ) : (
          <Sun className="h-3 w-3 text-gray-800" />
        )}
      </span>
    </button>
  );
}
