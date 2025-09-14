import cn from "@/utils/classname";

interface DividerProps {
  direction?: "horizontal" | "vertical";
  className?: string;
}

export default function Divider({
  direction = "horizontal",
  className = "",
}: DividerProps) {
  const baseClasses = "my-4 border-[var(--color-border)]";

  const verticalClasses = "border-l h-full mx-2";
  const horizontalClasses = "border-t w-full my-4";

  const directionClasses =
    direction === "vertical" ? verticalClasses : horizontalClasses;

  return <div className={cn(baseClasses, directionClasses, className)} />;
}
