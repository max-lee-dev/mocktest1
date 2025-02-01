import { ProfileButtonProps } from "@/app/types";

export default function ProfileButton({ user }: ProfileButtonProps) {
  return (
    <div className="w-10 h-10 rounded-full border-2 border-black">
      <a href="/profile">
        {user.displayName}
      </a>
    </div>
  );
} 