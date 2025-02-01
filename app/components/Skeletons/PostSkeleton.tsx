import PulseWrapper from "./PulseWrapper";

export default function PostSkeleton() {
  return (
    <div className="border-2 border-black rounded-xl p-4 bg-white shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
      <div className="flex items-center gap-3 mb-4">
        <PulseWrapper className="w-10 h-10 rounded-full border-2 border-black bg-gray-200" />
        <PulseWrapper className="h-4 w-24 bg-gray-200 rounded" />
      </div>
      <div className="rounded-lg border-2 border-black overflow-hidden mb-4">
        <PulseWrapper className="w-full aspect-square bg-gray-200" />
      </div>
      <div className="flex items-center gap-4 mb-2">
        <PulseWrapper className="w-7 h-7 bg-gray-200 rounded" />
        <PulseWrapper className="w-7 h-7 bg-gray-200 rounded" />
        <PulseWrapper className="w-7 h-7 bg-gray-200 rounded" />
      </div>
      <div className="space-y-2">
        <PulseWrapper className="h-4 w-20 bg-gray-200 rounded" />
        <PulseWrapper className="h-4 w-3/4 bg-gray-200 rounded" />
      </div>
    </div>
  );
} 