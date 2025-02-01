"use client";
import { useParams } from "next/navigation";
import { useState, useEffect } from "react";
import { User } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import { db } from "@/app/utils/firebase";
import Navbar from "@/app/components/Navbar/Navbar";
import ProfileHeader from "@/app/components/Profile/ProfileHeader";
import ProfilePosts from "@/app/components/Profile/ProfilePosts";
import { useAuth } from "@/app/context/AuthContext";

export default function ProfilePage() {
  const params = useParams();
  const userId = params?.id as string;
  const { user } = useAuth();
  const [profileUser, setProfileUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadProfile() {
      if (userId) {
        const userDoc = await getDoc(doc(db, "users", userId));
        if (userDoc.exists()) {
          setProfileUser(userDoc.data() as User);
        }
      }
      setLoading(false);
    }

    loadProfile();
  }, [userId]);

  if (loading) {
    return (
      <div className="min-h-screen bg-surface">
        <div className="max-w-2xl mx-auto p-4">
          <Navbar user={user} loading={loading} />
          <div className="animate-pulse bg-white rounded-xl h-[600px]"></div>
        </div>
      </div>
    );
  }

  if (!profileUser) {
    return (
      <div className="min-h-screen bg-surface">
        <div className="max-w-2xl mx-auto p-4">
          <Navbar user={user} loading={loading} />
          <div className="bg-white rounded-xl p-8 text-center">
            <h1 className="text-2xl font-bold">Profile not found</h1>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-surface">
      <div className="max-w-2xl mx-auto p-4">
        <Navbar user={user} loading={loading} />
        <ProfileHeader user={profileUser} isOwnProfile={user?.uid === userId} />
        <ProfilePosts userId={userId} />
      </div>
    </div>
  );
} 