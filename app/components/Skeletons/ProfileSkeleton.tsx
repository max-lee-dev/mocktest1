import PulseWrapper from "./PulseWrapper";

export default function ProfileSkeleton() {
  return (
    <>
      {/* Profile Header Skeleton */}
      <div className="flex items-center gap-8 mb-8">
        <PulseWrapper className="w-24 h-24 rounded-xl border-2 border-black bg-gray-200 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]" />
        <div className="space-y-4">
          <PulseWrapper className="h-8 w-48 bg-gray-200 rounded" />
          <PulseWrapper className="h-10 w-32 bg-gray-200 rounded-xl border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]" />
        </div>
      </div>

      {/* Profile Stats Skeleton */}
      <div className="flex gap-8 mb-8 p-4 border-2 border-black rounded-xl bg-gray-100 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
        {[1, 2, 3].map((i) => (
          <div key={i} className="text-center space-y-2">
            <div className="h-8 w-16 bg-gray-200 rounded animate-pulse mx-auto" />
            <div className="h-4 w-20 bg-gray-200 rounded animate-pulse" />
          </div>
        ))}
      </div>

      {/* Profile Bio Skeleton */}
      <div className="mb-8 space-y-2">
        <div className="h-4 w-32 bg-gray-200 rounded animate-pulse" />
        <div className="h-4 w-3/4 bg-gray-200 rounded animate-pulse" />
        <div className="h-4 w-1/2 bg-gray-200 rounded animate-pulse" />
      </div>

      {/* Profile Tabs Skeleton */}
      <div className="flex justify-center gap-8 mb-8 border-t-2 border-black pt-4">
        {['POSTS', 'SAVED', 'TAGGED'].map((_, i) => (
          <div key={i} className="h-6 w-20 bg-gray-200 rounded animate-pulse" />
        ))}
      </div>

      {/* Profile Posts Grid Skeleton */}
      <div className="grid grid-cols-3 gap-4">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((i) => (
          <div
            key={i}
            className="aspect-square border-2 border-black rounded-lg bg-gray-200 animate-pulse shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
          />
        ))}
      </div>
    </>
  );
} 