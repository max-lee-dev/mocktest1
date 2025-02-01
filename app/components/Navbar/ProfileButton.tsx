import { ProfileButtonProps } from "@/app/types";
import { useRouter } from "next/navigation";

export default function ProfileButton({ user }: ProfileButtonProps) {
  const router = useRouter();
  return (
    <div className="w-14 h-14 hover:scale-105 cursor-pointer transition-transform   rounded-full border-2 border-black" onClick={() => router.push('/profile')} >
      <img src={user.photoURL || undefined} alt={user.displayName} className="w-full h-full object-cover rounded-full" />


    </div >
  );
} 