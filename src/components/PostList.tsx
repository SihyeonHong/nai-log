import Link from "next/link";

import TagsContainer from "@/components/ui/TagsContainer";
import { Post } from "@/types/file";
import formatDate from "@/utils/formatDate";

interface PostListProps {
  posts: Post[];
}

export default function PostList({ posts }: PostListProps) {
  return (
    <table className="w-full">
      <thead className="border-b border-[var(--color-border)]">
        <tr>
          <th className="border-r border-[var(--color-border)] p-2">Title</th>
          <th className="border-r border-[var(--color-border)] p-2">Date</th>
          <th className="p-2">Tags</th>
        </tr>
      </thead>
      <tbody>
        {posts.map((post) => (
          <tr key={post.slug} className="border-b border-[var(--color-border)]">
            <td className="border-r border-[var(--color-border)] p-2">
              <Link
                href={`/blog/${post.slug}`}
                className="text-xl font-semibold transition-colors hover:text-purple-700"
              >
                {post.meta.title}
              </Link>
            </td>
            <td className="border-r border-[var(--color-border)] p-2">
              <time
                className="mb-4 text-gray-600"
                dateTime={formatDate(post.meta.uploadedAt)}
              >
                {formatDate(post.meta.uploadedAt)}
              </time>
            </td>
            <td className="p-2">
              <TagsContainer tags={post.meta.tags} />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
