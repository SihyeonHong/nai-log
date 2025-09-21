import Link from "next/link";

export default function Container() {
  return (
    <div className="flex flex-1 flex-col gap-1 bg-purple-100 p-4">
      <Link href="/tester">Go to Tester</Link>
      <Link href="/blog">blog 목록</Link>
      <Link href="/ql-classnames">ql-classnames</Link>
    </div>
  );
}
