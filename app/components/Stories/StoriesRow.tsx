import { StoriesRowProps } from "@/app/types";
import StoryIcon from './StoryIcon';
import Image from 'next/image';

export default function StoriesRow({ stories }: StoriesRowProps) {
  return (
    <div className="relative mb-8">
      <div className="absolute inset-0 bg-[#B5F1CC] opacity-10 rounded-xl" />
      <div className="flex gap-4 overflow-x-auto pb-4 relative">
        {stories.map((story) => (
          <Image
            key={story.id}
            src={story.avatar || '/images/default-avatar.png'}
            alt={story.username || 'User story'}
            width={56}
            height={56}
            className="w-14 h-14 rounded-full border-2 border-black"
          />
        ))}
      </div>
    </div>
  );
} 