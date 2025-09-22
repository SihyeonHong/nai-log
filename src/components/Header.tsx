import LogoTitle from "@/components/LogoTitle";
import ThemeSwitcher from "@/components/ThemeSwitcher";

export default function Header() {
  return (
    <header className="flex justify-between p-3">
      <LogoTitle />
      <ThemeSwitcher />
    </header>
  );
}
