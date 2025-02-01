import { User } from "@/app/types";

interface ProfileHeaderProps {
  user: User;
}

export default function ProfileHeader({ user }: ProfileHeaderProps) {
  return (
    <div className="flex items-center gap-8 mb-8">
      <div className="w-24 h-24 rounded-xl border-2 border-black overflow-hidden bg-primary shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
        <img
          src={user.photoURL || "https://i.pravatar.cc/150?img=1"}
          alt={user.displayName || "Profile"}
          className="w-full h-full object-cover"
        />
      </div>
      <div>
        <h2 className="text-2xl font-bold mb-2">{user.displayName}</h2>
        <button className="bg-tertiary px-6 py-2 rounded-xl font-medium border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
          Edit Profile
        </button>
      </div>
    </div>
  );
} 