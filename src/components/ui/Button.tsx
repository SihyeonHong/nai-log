// 미완

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary";
  size?: "sm" | "md" | "lg";
  disabled?: boolean;
  fullWidth?: boolean;
  onClick?: () => void;
}

export default function Button({
  children,
  variant = "primary",
  size = "md",
  fullWidth = false,
  onClick,
  ...props
}: ButtonProps) {
  const baseClasses =
    "inline-flex items-center justify-center font-medium rounded-lg transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-50";

  //   const variantClasses = {
  //     primary:
  //       "bg-primary text-primary-foreground hover:bg-primary-hover active:bg-primary-active focus-visible:ring-primary",
  //     secondary:
  //       "bg-secondary text-secondary-foreground hover:bg-secondary-hover active:bg-secondary-active focus-visible:ring-secondary",
  //   };

  const variantClasses = {
    primary:
      "border-2 border-primary text-primary hover:border-primary active:border-primary-active focus-visible:ring-primary",
    secondary:
      "border-2 border-secondary text-secondary hover:border-secondary active:border-secondary-active focus-visible:ring-secondary",
  };

  const sizeClasses = {
    sm: "h-9 px-3 text-sm",
    md: "h-10 px-4 text-base",
    lg: "h-11 px-6 text-lg",
  };

  const widthClass = fullWidth ? "w-full" : "";

  const className = [
    baseClasses,
    variantClasses[variant],
    sizeClasses[size],
    widthClass,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <button className={className} onClick={onClick} {...props}>
      {children}
    </button>
  );
}
