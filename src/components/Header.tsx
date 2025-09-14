import LogoTitle from "@/components/LogoTitle";
import ThemeSwitcher from "@/components/ThemeSwitcher";

export default function Header() {
  return (
    <div className="flex justify-between p-3">
      <LogoTitle />
      <ThemeSwitcher />
    </div>
  );
}
