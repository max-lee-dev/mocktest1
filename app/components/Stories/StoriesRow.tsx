import { StoriesRowProps } from "@/app/types";
import StoryIcon from './StoryIcon';

export default function StoriesRow({ stories }: StoriesRowProps) {
  return (
    <div className="relative mb-8">
      <div className="absolute inset-0 bg-[#B5F1CC] opacity-10 rounded-xl" />
      <div className="flex gap-4 overflow-x-auto pb-4 relative">
        {stories.map((story) => (
          <StoryIcon
            key={story.id}
            username={story.username}
            avatar={story.avatar}
          />
        ))}
      </div>
    </div>
  );
} 