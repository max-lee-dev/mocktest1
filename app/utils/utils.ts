import { auth } from "./firebase";
import { signInAnonymously, signOut } from "firebase/auth";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";

export const handleSignIn = async () => {
  await signInAnonymously(auth);
};

export const handleSignOut = async () => {
  await signOut(auth);
};

export const signInWithGoogle = async () => {
  try {
    const provider = new GoogleAuthProvider();
    const result = await signInWithPopup(auth, provider);
    return result.user;
  } catch (error) {
    console.error("Error signing in with Google:", error);
    throw error;
  }
};

export const getUser = async () => {
  const user = auth.currentUser;
  return user;
};
