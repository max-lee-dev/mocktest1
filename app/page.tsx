"use client";
import { handleSignIn } from "./utils/utils";

export default function Home() {
  return (
    <main className="container mx-auto">
      <h1>Hello World</h1>
      <div>
        <button onClick={handleSignIn}>Sign in</button>
      </div>
    </main>
  );
}


