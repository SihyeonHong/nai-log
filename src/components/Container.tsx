import Link from "next/link";

export default function Container() {
  return (
    <div className="flex-1 bg-purple-100 p-4">
      <Link href="/tester">Go to Tester</Link>
    </div>
  );
}
