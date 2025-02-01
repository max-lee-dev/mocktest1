"use client";
import Image from 'next/image';
import SkeletonProfile from '../Skeletons/SkeletonProfile';

interface Story {
  id: number;
  username: string;
  avatar: string;
}

interface StoriesRowProps {
  stories: Story[];
  loading?: boolean;
}

export default function StoriesRow({ stories, loading = true }: StoriesRowProps) {
  if (loading) {
    return (
      <div className="relative mb-8">
        <div className="flex gap-4 overflow-x-auto pb-4">
          {[1, 2, 3, 4, 5].map((id) => (
            <SkeletonProfile key={id} />
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="relative mb-8">
      <div className="flex gap-4 overflow-x-auto pb-4">
        {stories.map((story) => (
          <div key={story.id} className="flex flex-col items-center gap-1">
            <Image
              src={story.avatar || '/images/default-avatar.png'}
              alt={story.username || 'User story'}
              width={56}
              height={56}
              className="w-14 h-14 rounded-full border-2 border-black"
            />
            <span className="text-xs font-medium truncate w-14 text-center">
              {story.username}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
} 