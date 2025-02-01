import { signInWithGoogle } from "@/app/utils/utils";

interface OnboardingProps {
  user: any | null;
}

export default function Onboarding({ user }: OnboardingProps) {
  if (user) {
    return <div className="w-10 h-10 rounded-full border-2 border-black"></div>;
  }

  return (
    <button
      onClick={signInWithGoogle}
      className="bg-[#FFD93D] px-6 py-2 rounded-xl font-medium shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] border-2 border-black transition-all hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-none relative overflow-hidden"
    >
      <span className="relative z-10">Sign in</span>
      <div className="absolute inset-0 bg-[#FFF5E4] opacity-20 squiggle-animation"></div>
    </button>
  );
}   