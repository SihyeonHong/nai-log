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
    return <button disabled>Loading...</button>;
  }

  const darkClasses = `bg-gray-600 dark:bg-gray-500`;
  const lightClasses = `bg-gray-200 dark:bg-gray-600`;
  const resolvedClasses = resolvedTheme === "dark" ? darkClasses : lightClasses;

  const baseClassses = `relative inline-flex items-center w-11 h-6
    rounded-full border-2 border-transparent
    transition-colors duration-200 ease-in-out focus:outline-none 
    focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-offset-2
    dark:focus:ring-offset-gray-800`;

  const buttonClasses = `inline-block h-5 w-5 transform rounded-full bg-white
    shadow ring-0 transition duration-200 ease-in-out
    ${resolvedTheme === "dark" ? "translate-x-5" : "translate-x-0"}`;

  const toggleTheme = () => {
    setTheme(resolvedTheme === "dark" ? "light" : "dark");
  };

  return (
    <button className={cn(baseClassses, resolvedClasses)} onClick={toggleTheme}>
      <span className={cn(buttonClasses)}>
        {resolvedTheme === "dark" ? (
          <Moon className="mx-auto h-5 w-5 p-1 text-gray-800" />
        ) : (
          <Sun className="mx-auto h-5 w-5 p-1 text-gray-800" />
        )}
      </span>
    </button>
  );
}
