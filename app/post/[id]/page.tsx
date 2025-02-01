"use client";
import PostContent from "./PostContent";
import Navbar from "@/app/components/Navbar/Navbar";
import { useAuth } from "@/app/context/AuthContext";

export default function PostPage({ params }: { params: { id: string } }) {
  const { user, loading } = useAuth();
  return (
    <div className="min-h-screen bg-surface">
      <div className="max-w-2xl mx-auto p-4">
        <Navbar user={user} loading={loading} />
        <PostContent postId={params.id} />
      </div>
    </div>
  );
} 