import { ProfileButtonProps } from "@/app/types";
import { useRouter } from "next/navigation";
import Image from 'next/image';

export default function ProfileButton({ user }: ProfileButtonProps) {
  const router = useRouter();
  return (
    <div className="w-16 h-16 hover:scale-105 cursor-pointer transition-transform   rounded-full border-2 border-black" onClick={() => router.push(`/profile/${user?.uid}`)} >
      <Image
        src={user?.photoURL || '/images/default-avatar.png'}
        alt={user?.displayName || 'Profile'}
        width={64}
        height={64}
        className="rounded-full "
      />
    </div >
  );
} 