import StorySkeleton from './StorySkeleton';

export default function StoriesRowSkeleton() {
  return (
    <div className="relative mb-8">
      <div className="absolute inset-0 bg-secondary opacity-10 rounded-xl" />
      <div className="flex gap-4 overflow-x-auto pb-4 relative">
        {[1, 2, 3, 4].map((i) => (
          <StorySkeleton key={i} />
        ))}
      </div>
    </div>
  );
} 