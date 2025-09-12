"use client";
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";

export default function Button() {
  const { theme, resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    // Prevents hydration mismatch
    return <button disabled>Loading...</button>;
  }

  const toggleTheme = () => {
    setTheme(resolvedTheme === "dark" ? "light" : "dark");
  };

  return (
    <button
      className="cursor-pointer p-3 text-pink-700 dark:text-pink-300"
      onClick={toggleTheme}
    >
      Dark / Light
    </button>
  );
}
