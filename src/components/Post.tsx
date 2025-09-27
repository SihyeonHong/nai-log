"use client";

import { useTheme } from "next-themes";
import { useEffect } from "react";

import TagsContainer from "@/components/ui/TagsContainer";
import type { Post } from "@/types/file";
import formatDate from "@/utils/formatDate";

interface PostProps {
  post: Post;
}

export default function Post({ post }: PostProps) {
  const { resolvedTheme } = useTheme();
  const { content } = post;
  const { title, tags, uploadedAt } = post.meta;

  const formattedDate = formatDate(uploadedAt);

  // 테마에 따른 highlight.js CSS 동적 로드
  useEffect(() => {
    const loadHighlightCSS = () => {
      // 기존 highlight.js CSS 링크 제거
      const existingLink = document.querySelector('link[href*="highlight.js"]');
      if (existingLink) {
        existingLink.remove();
      }

      // 새로운 CSS 링크 생성
      const link = document.createElement("link");
      link.rel = "stylesheet";
      link.href =
        resolvedTheme === "dark"
          ? "https://unpkg.com/@highlightjs/cdn-assets@11.9.0/styles/github-dark.min.css"
          : "https://unpkg.com/@highlightjs/cdn-assets@11.9.0/styles/github.min.css";

      document.head.appendChild(link);
    };

    if (resolvedTheme) {
      loadHighlightCSS();
    }
  }, [resolvedTheme]);

  return (
    <article>
      <header className="mb-4 flex flex-col gap-4">
        <p className="text-4xl font-bold">{title}</p>
      </header>

      <main className="bg-post-background rounded-lg p-4">
        <div
          className="prose prose-lg max-w-none"
          dangerouslySetInnerHTML={{ __html: content }}
        />
      </main>

      <footer>
        <div className="my-4 inline-flex gap-2">
          <span className="text-description">Uploaded at:</span>
          <time className="text-description" dateTime={formattedDate}>
            {formattedDate}
          </time>
        </div>
        <TagsContainer tags={tags} />
      </footer>
    </article>
  );
}
