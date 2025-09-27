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
