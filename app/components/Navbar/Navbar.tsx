import { NavbarProps } from "@/app/types";
import NavbarLogo from "./NavbarLogo";
import Onboarding from "./Onboarding";
import ProfileButton from "./ProfileButton";

export default function Navbar({ user, loading }: NavbarProps) {
  return (
    <header className="flex justify-between items-center mb-8 relative">
      <NavbarLogo />
      {loading ? (
        <div className="flex items-center gap-4">
          <div className="w-10 h-10 rounded-full bg-gray-200 animate-pulse" />
        </div>
      ) : (
        <>
          {user ? <ProfileButton user={user} /> : <Onboarding />}
        </>
      )}
    </header>
  );
} 