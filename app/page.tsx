"use client";
import { BackgroundDecorations } from "./components/Decorations/decorations";
import StoriesRow from "./components/Stories/StoriesRow";
import PostsList from "./components/Posts/PostsList";
import Navbar from "./components/Navbar/Navbar";
import StoriesRowSkeleton from "./components/Skeletons/StoriesRowSkeleton";
import PostsListSkeleton from "./components/Skeletons/PostsListSkeleton";
import { useAuth } from "./context/AuthContext";
import { Story } from "./types";
import { Post } from "./types";

const mockStories: Story[] = [
  { id: 1, username: "sarah_design", avatar: "https://i.pravatar.cc/150?img=1" },
  { id: 2, username: "mike.dev", avatar: "https://i.pravatar.cc/150?img=2" },
  { id: 3, username: "alex_photo", avatar: "https://i.pravatar.cc/150?img=3" },
  { id: 4, username: "design_daily", avatar: "https://i.pravatar.cc/150?img=4" },
];

const mockPosts: Post[] = [
  {
    id: 1,
    username: "sarah_design",
    avatar: "https://i.pravatar.cc/150?img=1",
    image: "https://picsum.photos/600/600?random=1",
    likes: 234,
    caption: "Exploring new design trends! 🎨 #NeumorphismDesign",
  },
  {
    id: 2,
    username: "mike.dev",
    avatar: "https://i.pravatar.cc/150?img=2",
    image: "https://picsum.photos/600/600?random=2",
    likes: 542,
    caption: "Building something cool with React and Tailwind! 💻",
  },
];

export default function Home() {
  const { user, loading } = useAuth();

  return (
    <div className="relative min-h-screen">
      <BackgroundDecorations />
      <main className="max-w-2xl mx-auto p-4 relative">
        <Navbar user={user} loading={loading} />
        {loading ? (
          <>
            <StoriesRowSkeleton />
            <PostsListSkeleton />
          </>
        ) : (
          <>
            <StoriesRow stories={mockStories} />
            <PostsList posts={mockPosts} />
          </>
        )}
      </main>
    </div>
  );
}


