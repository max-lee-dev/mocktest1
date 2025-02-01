"use client";
import { createContext, useContext, useEffect, useState } from "react";
import { auth } from "./utils/firebase";
import { User } from "firebase/auth";

const AuthContext = createContext<{ user: User | null }>({ user: null });

export function Providers({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const unsubscribe = auth?.onAuthStateChanged((user) => {
      setUser(user);
    });

    return () => unsubscribe?.();
  }, []);

  return (
    <AuthContext.Provider value={{ user }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext); 