"use client";
import Navbar from "../components/Navbar/Navbar";
import ProfileHeader from "../components/Profile/ProfileHeader";
import ProfileStats from "../components/Profile/ProfileStats";
import ProfilePosts from "../components/Profile/ProfilePosts";
import ProfileSkeleton from "../components/Skeletons/ProfileSkeleton";
import { useAuth } from "../context/AuthContext";

export default function ProfilePage() {
  const { user, loading } = useAuth();

  if (!user && !loading) {
    return <div>Please sign in to view your profile</div>;
  }

  return (
    <div className="relative min-h-screen">
      <main className="max-w-2xl mx-auto p-4 relative">
        <Navbar user={user} loading={loading} />
        {loading ? (
          <ProfileSkeleton />
        ) : (
          <>
            <ProfileHeader user={user!} />
            <ProfileStats
              postsCount={12}
              followersCount={234}
              followingCount={156}
            />
            <ProfilePosts />
          </>
        )}
      </main>
    </div>
  );
}
