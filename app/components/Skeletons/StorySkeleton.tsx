import PulseWrapper from "./PulseWrapper";

export default function StorySkeleton() {
  return (
    <div className="flex flex-col items-center gap-1 min-w-[80px]">
      <PulseWrapper className="w-16 h-16 rounded-xl border-2 border-black p-1 bg-gray-200 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]" />
      <PulseWrapper className="h-3 w-16 bg-gray-200 rounded" />
    </div>
  );
} 