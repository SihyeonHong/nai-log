import PostTitle from "@/components/ui/PostTitle";
import TagsContainer from "@/components/ui/TagsContainer";
import type { Post } from "@/types/file";
import formatDate from "@/utils/formatDate";

interface PostProps {
  post: Post;
}

export default function Post({ post }: PostProps) {
  const { content } = post;
  const { title, tags, uploadedAt } = post.meta;
  const formattedDate = formatDate(uploadedAt);
  return (
    <article>
      <header>
        <PostTitle>{title}</PostTitle>
        <time className="mb-4 text-gray-600" dateTime={formattedDate}>
          {formattedDate}
        </time>
        <TagsContainer tags={tags} />
      </header>
      <main>
        <div
          className="prose prose-lg max-w-none"
          dangerouslySetInnerHTML={{ __html: content }}
        />
      </main>
    </article>
  );
}
