"use client";
import { BackgroundDecorations } from "./components/Decorations/decorations";
import StoriesRow from "./components/Stories/StoriesRow";
import PostsList from "./components/PostComponents/PostsList";
import Navbar from "./components/Navbar/Navbar";
import StoriesRowSkeleton from "./components/Skeletons/StoriesRowSkeleton";
import PostsListSkeleton from "./components/Skeletons/PostsListSkeleton";
import { useAuth } from "./context/AuthContext";
import { Story } from "./types";

export default function Home() {
  const { user, loading } = useAuth();
  const mockStories: Story[] = [
    { id: 1, username: "sarah_design", avatar: "https://i.pravatar.cc/150?img=1" },
    { id: 2, username: "mike.dev", avatar: "https://i.pravatar.cc/150?img=2" },
    { id: 3, username: "alex_photo", avatar: "https://i.pravatar.cc/150?img=3" },
    { id: 4, username: "design_daily", avatar: "https://i.pravatar.cc/150?img=4" },
  ];
  return (
    <div className="min-h-screen bg-surface">
      <div className="max-w-2xl mx-auto p-4">
        <Navbar user={user} loading={loading} />
        <StoriesRow stories={mockStories} loading={loading} />
        <div className="mt-8">
          <PostsList />
        </div>
      </div>
    </div>
  );
}


