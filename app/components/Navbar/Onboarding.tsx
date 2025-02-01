import { signInWithGoogle } from "@/app/utils/utils";

export default function Onboarding() {
  return (
    <button
      onClick={signInWithGoogle}
    >
      Sign In with Google
    </button>
  );
} 