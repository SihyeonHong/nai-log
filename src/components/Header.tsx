import LogoTitle from "@/components/LogoTitle";
import ThemeSwitcher from "@/components/ThemeSwitcher";

export default function Header() {
  return (
    <header className="bg-background/80 border-border sticky top-0 z-50 border-b backdrop-blur-md">
      <div className="mx-auto max-w-6xl px-4 py-4 sm:px-6">
        <div className="flex items-center justify-between">
          <LogoTitle />
          <ThemeSwitcher />
        </div>
      </div>
    </header>
  );
}
