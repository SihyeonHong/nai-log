import PostList from "@/components/PostList";
import { getAllPosts } from "@/utils/github";

export default async function Container() {
  const posts = await getAllPosts();

  return (
    <div className="flex flex-1 flex-col gap-1 bg-purple-100 p-4">
      <PostList posts={posts} />
    </div>
  );
}
