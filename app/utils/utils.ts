import { log } from "console";
import { auth } from "./firebase";
import { signInAnonymously, signOut } from "firebase/auth";

export const handleSignIn = async () => {
  console.log("sign in");
};

export const handleSignOut = async () => {
  await signOut(auth);
};
