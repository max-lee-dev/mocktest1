import { User } from "@/app/types";
import Image from 'next/image';
import { signOut } from 'firebase/auth';
import { auth } from '@/app/utils/firebase';
import { useRouter } from 'next/navigation';

interface ProfileHeaderProps {
  user: User;
}

export default function ProfileHeader({ user }: ProfileHeaderProps) {
  const router = useRouter();

  const handleSignOut = async () => {
    try {
      await signOut(auth);
      router.push('/');
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };

  return (
    <div className="flex flex-col items-center gap-4 mb-8">
      <Image
        src={user?.photoURL || '/images/default-avatar.png'}
        alt={user?.displayName || 'Profile'}
        width={80}
        height={80}
        className="w-20 h-20 rounded-full border-2 border-black"
      />
      <h1 className="text-2xl font-bold">{user.displayName}</h1>
      <button
        onClick={handleSignOut}
        className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px]"
      >
        Sign Out
      </button>
    </div>
  );
} 