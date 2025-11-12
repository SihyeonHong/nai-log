import Link from "next/link";

export default function LogoTitle() {
  return (
    <Link href="/" className="group">
      <span className="bg-primary p-1 font-mono text-lg font-bold tracking-tight text-white sm:text-xl md:text-2xl">
        nai.log
      </span>
      <div className="bg-primary mt-1 h-0.5 w-full"></div>
    </Link>
  );
}
