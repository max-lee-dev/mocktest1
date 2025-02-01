
import { auth } from "./firebase";
import { signInAnonymously, signOut } from "firebase/auth";

export const handleSignIn = async () => {
  await signInAnonymously(auth);
};

export const handleSignOut = async () => {
  await signOut(auth);
};
