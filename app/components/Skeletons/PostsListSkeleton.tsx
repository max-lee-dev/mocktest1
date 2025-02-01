import PostSkeleton from './PostSkeleton';

export default function PostsListSkeleton() {
  return (
    <div className="flex flex-col gap-8">
      {[1, 2].map((i) => (
        <PostSkeleton key={i} />
      ))}
    </div>
  );
} 