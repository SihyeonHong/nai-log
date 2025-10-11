import Link from "next/link";

export default function LogoTitle() {
  return (
    <Link href="/" className="group">
      <span className="text-primary font-mono text-lg font-bold sm:text-xl md:text-2xl">
        nai.log
      </span>
    </Link>
  );
}
