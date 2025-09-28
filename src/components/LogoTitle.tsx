import Link from "next/link";

export default function LogoTitle() {
  return (
    <Link href="/" className="group">
      <span className="font-title gradient-text text-lg font-bold transition-transform duration-200 group-hover:scale-105 sm:text-xl md:text-2xl">
        모르는 게 더 많을 나이
      </span>
    </Link>
  );
}
