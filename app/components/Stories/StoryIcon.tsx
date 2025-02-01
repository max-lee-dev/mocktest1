import { StoryIconProps } from "@/app/types";

export default function StoryIcon({ username, avatar }: StoryIconProps) {
  return (
    <div className="flex flex-col items-center gap-1 min-w-[80px]">
      <div className="w-16 h-16 rounded-xl border-2 border-black p-1 bg-secondary shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all">
        <img
          src={avatar}
          alt={username}
          className="w-full h-full rounded-lg object-cover"
        />
      </div>
      <span className="text-sm truncate w-full text-center">
        {username}
      </span>
    </div>
  );
} 