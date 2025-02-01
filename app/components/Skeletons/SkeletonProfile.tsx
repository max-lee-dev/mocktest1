export default function SkeletonProfile() {
  return (
    <div className="flex flex-col items-center gap-1">
      <div className="w-14 h-14 rounded-full border-2 border-black bg-gray-200 animate-pulse" />
      <div className="w-14 h-2 bg-gray-200 rounded animate-pulse" />
    </div>
  );
} 