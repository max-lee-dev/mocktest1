import { PostsListProps } from "@/app/types";
import Post from './Post';

export default function PostsList({ posts }: PostsListProps) {
  return (
    <div className="flex flex-col gap-8">
      {posts.map((post) => (
        <Post key={post.id} {...post} />
      ))}
    </div>
  );
} 