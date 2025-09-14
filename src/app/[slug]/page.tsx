// app/blog/[slug]/page.tsx
import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { getAllPosts, getMarkdownContent } from "@/utils/github";

// ISR 설정
export const revalidate = 3600;

interface BlogPostProps {
  params: {
    slug: string;
  };
}

export default async function BlogPost({ params }: BlogPostProps) {
  const { slug } = params;
  const post = await getMarkdownContent(`${slug}.md`);

  if (!post) {
    notFound();
  }

  return (
    <div className="container mx-auto max-w-4xl px-4 py-8">
      <article>
        <header className="mb-8">
          <h1 className="mb-4 text-4xl">{post.meta.title}</h1>

          <div className="mb-4 text-gray-600">
            <time dateTime={post.meta.uploadedAt}>
              {new Date(post.meta.uploadedAt).toLocaleDateString("ko-KR")}
            </time>
          </div>

          {post.meta.tags && post.meta.tags.length > 0 && (
            <div className="mb-6 flex flex-wrap gap-2">
              {post.meta.tags.map((tag: string) => (
                <span
                  key={tag}
                  className="rounded-full bg-gray-200 px-3 py-1 text-sm text-gray-700"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </header>

        <div
          className="prose prose-lg max-w-none"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
      </article>
    </div>
  );
}

// generateStaticParams - 빌드 시 모든 블로그 포스트의 경로 생성
export async function generateStaticParams() {
  const posts = await getAllPosts();

  return posts.map((post) => ({
    slug: post.slug,
  }));
}

// generateMetadata - 동적 메타데이터 생성
export async function generateMetadata({
  params,
}: BlogPostProps): Promise<Metadata> {
  const post = await getMarkdownContent(`${params.slug}.md`);

  if (!post) {
    return {
      title: "포스트를 찾을 수 없습니다",
    };
  }

  return {
    title: post.meta.title,
    description: post.meta.description || "블로그 포스트",
    authors: [{ name: "nai" }],
    keywords: ["unknown"],
    openGraph: {
      // 소셜 미디어 공유 시 정보
      title: post.meta.title,
      description: post.meta.description || "블로그 포스트",
      type: "article",
      publishedTime: post.meta.uploadedAt,
      tags: post.meta.tags,
      images: [
        {
          url: "이미지 URL",
          alt: "이미지 설명",
        },
      ],
      siteName: "사이트 이름",
    },
    twitter: {
      card: "summary_large_image", // 카드 타입
      title: post.meta.title,
      description: post.meta.description || "블로그 포스트",
      images: ["이미지 URL"],
    },
  };
}
