"use client";
import { useParams } from "next/navigation";
import { useState, useEffect } from "react";
import { Post } from "@/app/types";
import PostCard from "@/app/components/PostComponents/PostCard";
import Navbar from "@/app/components/Navbar/Navbar";
import { useAuth } from "@/app/context/AuthContext";
import { getPost } from "@/app/utils/firebaseUtils";

export default function PostPage() {
  const params = useParams();
  const postId = params?.id as string;
  const { user } = useAuth();
  const [post, setPost] = useState<Post | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadPost() {
      if (postId) {
        const fetchedPost = await getPost(postId);
        setPost(fetchedPost);
      }
      setLoading(false);
    }

    loadPost();
  }, [postId]);

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

  if (!post) {
    return (
      <div className="min-h-screen bg-surface">
        <div className="max-w-2xl mx-auto p-4">
          <Navbar user={user} loading={loading} />
          <div className="bg-white rounded-xl p-8 text-center">
            <h1 className="text-2xl font-bold">Post not found</h1>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-surface">
      <div className="max-w-2xl mx-auto p-4">
        <Navbar user={user} loading={loading} />
        <PostCard post={post} />
      </div>
    </div>
  );
} 