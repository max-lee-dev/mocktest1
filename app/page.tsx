"use client";
import { auth } from "@/app/utils/firebase";
import { signInAnonymously } from "firebase/auth";

export default function Home() {
  return (
    <main className="container mx-auto">
      <h1>Hello World</h1>
      <div>
        <button
          onClick={() => {
            signInAnonymously(auth).then((user) => {
              console.log(user);
            });
          }}

        >
          Sign in
        </button>
      </div>
    </main>
  );
}


