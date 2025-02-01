"use client";
import { useState, useEffect } from "react";
import { Post } from "@/app/types";
import PostCard from "@/app/components/PostComponents/PostCard";
import { getPost } from "@/app/utils/firebaseUtils";

export default function PostContent({ postId }: { postId: string }) {
  const [post, setPost] = useState<Post | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadPost() {
      const fetchedPost = await getPost(postId);
      setPost(fetchedPost);
      setLoading(false);
    }

    loadPost();
  }, [postId]);

  if (loading) {
    return <div className="animate-pulse bg-white rounded-xl h-[600px]"></div>;
  }

  if (!post) {
    return (
      <div className="bg-white rounded-xl p-8 text-center">
        <h1 className="text-2xl font-bold">Post not found</h1>
      </div>
    );
  }

  return <PostCard post={post} />;
} 