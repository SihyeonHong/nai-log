import type { Metadata } from "next";
import { notFound } from "next/navigation";

import Header from "@/components/Header";
import Post from "@/components/Post";
import { getAllPosts, getMarkdownContent } from "@/utils/github";

export const revalidate = 3600; // ISR 설정

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function Page({ params }: PageProps) {
  const { slug } = await params;
  const post = await getMarkdownContent(`${slug}.md`);

  if (!post) {
    notFound();
  }

  return (
    <div className="mx-auto max-w-4xl px-4 py-8">
      <Header />
      <Post post={post}></Post>
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
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = await getMarkdownContent(`${slug}.md`);

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
