interface ProfileStatsProps {
  postsCount: number;
  followersCount: number;
  followingCount: number;
}

export default function ProfileStats({ postsCount, followersCount, followingCount }: ProfileStatsProps) {
  return (
    <div className="flex gap-8 mb-8 p-4 border-2 border-black rounded-xl bg-secondary/20 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
      <div className="text-center">
        <div className="font-bold text-xl">{postsCount}</div>
        <div className="text-sm">Posts</div>
      </div>
      <div className="text-center">
        <div className="font-bold text-xl">{followersCount}</div>
        <div className="text-sm">Followers</div>
      </div>
      <div className="text-center">
        <div className="font-bold text-xl">{followingCount}</div>
        <div className="text-sm">Following</div>
      </div>
    </div>
  );
} 