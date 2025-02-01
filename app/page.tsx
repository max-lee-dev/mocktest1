"use client";
import { BackgroundDecorations } from "./components/Decorations/decorations";
import StoriesRow from "./components/Stories/StoriesRow";
import PostsList from "./components/PostComponents/PostsList";
import Navbar from "./components/Navbar/Navbar";
import StoriesRowSkeleton from "./components/Skeletons/StoriesRowSkeleton";
import PostsListSkeleton from "./components/Skeletons/PostsListSkeleton";
import { useAuth } from "./context/AuthContext";

export default function Home() {
  const { user, loading } = useAuth();
  const mockStories = [
    {
      id: 1,
      username: "John Doe",
      avatar: "/images/default-avatar.png"
    }
  ];
  return (
    <div className="min-h-screen bg-surface">
      <div className="max-w-2xl mx-auto p-4">
        <Navbar user={user} loading={loading} />
        <StoriesRow stories={mockStories} />
        <div className="mt-8">
          <PostsList />
        </div>
      </div>
    </div>
  );
}


