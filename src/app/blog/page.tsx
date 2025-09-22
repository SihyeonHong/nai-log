// app/blog/page.tsx
import type { Metadata } from "next";
import Link from "next/link";

import Header from "@/components/Header";
import PostTitle from "@/components/ui/PostTitle";
import TagsContainer from "@/components/ui/TagsContainer";
import formatDate from "@/utils/formatDate";
import { getAllPosts } from "@/utils/github";

// ISR 설정 - 1시간마다 재생성
export const revalidate = 3600;

// 메타데이터 설정
export const metadata: Metadata = {
  title: "블로그",
  description: "개발 블로그입니다.",
};

// Server Component - async 함수로 직접 데이터 페칭
export default async function BlogPage() {
  const posts = await getAllPosts();

  return (
    <div className="container mx-auto px-4 py-8">
      <Header />
      <PostTitle>블로그</PostTitle>
      {/* mb-8 text-4xl */}
      {posts.length === 0 ? (
        <p className="text-gray-500">아직 포스트가 없습니다.</p>
      ) : (
        <div className="space-y-8">
          {posts.map((post) => (
            <article key={post.slug} className="border-b pb-8">
              <h2 className="mb-4 text-2xl">
                <Link
                  href={`/blog/${post.slug}`}
                  className="transition-colors hover:text-blue-600"
                >
                  {post.meta.title}
                </Link>
              </h2>

              <div className="mb-4 text-gray-600">
                <time dateTime={formatDate(post.meta.uploadedAt)}>
                  {formatDate(post.meta.uploadedAt)}
                </time>
              </div>

              {post.meta.description && (
                <p className="mb-4 text-gray-700">{post.meta.description}</p>
              )}

              <span className="cursor-default rounded-full bg-gray-200 px-3 py-1 text-sm text-gray-700">
                bg-gray-200 text-gray-700
              </span>
              {post.meta.tags && post.meta.tags.length > 0 && (
                <TagsContainer tags={post.meta.tags} />
              )}
            </article>
          ))}
        </div>
      )}
    </div>
  );
}
