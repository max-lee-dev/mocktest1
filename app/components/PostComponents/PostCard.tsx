"use client";
import { Post } from "@/app/types";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from 'next/image';
import { useAuth } from "@/app/context/AuthContext";
import { toggleLike, isPostLiked } from "@/app/utils/firebaseUtils";

interface PostCardProps {
  post: Post;
}

export default function PostCard({ post }: PostCardProps) {
  const { user } = useAuth();
  const [isLiked, setIsLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(post.likes);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function checkLikeStatus() {
      if (user) {
        const liked = await isPostLiked(post.id, user.uid);
        setIsLiked(liked);
      }
    }
    checkLikeStatus();
  }, [post.id, user]);

  const handleLike = async () => {
    if (!user || isLoading) return;

    setIsLoading(true);
    try {
      const newLikeState = await toggleLike(post.id, user.uid);
      setIsLiked(newLikeState);
      setLikeCount(prev => newLikeState ? prev + 1 : prev - 1);
    } catch (error) {
      console.error('Error toggling like:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="bg-white rounded-xl p-6 border-2 border-border shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all duration-200">
      {/* Post Header */}
      <div className="flex items-center gap-4 mb-6">
        <Link href={`/profile/${post.userId}`} className="group">
          <div className="p-1 rounded-full bg-gradient-to-tr from-primary via-secondary to-tertiary">
            <Image
              src={post.userAvatar || '/images/default-avatar.png'}
              alt={post.username || 'User'}
              width={40}
              height={40}
              className="rounded-full border-2 border-border group-hover:scale-105 transition-transform"
            />
          </div>
        </Link>
        <Link href={`/profile/${post.userId}`}>
          <h2 className="font-bold text-lg hover:text-primary transition-colors">
            {post.username}
          </h2>
        </Link>
      </div>

      {/* Post Image */}
      <div className="relative mb-6 rounded-lg border-2 border-border overflow-hidden shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
        <Image
          src={post.imageUrl || '/images/default-post.png'}
          alt={post.caption || 'Post image'}
          width={600}
          height={600}
          className="w-full aspect-square object-cover"
        />
      </div>

      {/* Post Actions */}
      <div className="flex items-center gap-4 mb-4">
        <button
          onClick={handleLike}
          disabled={isLoading}
          className="hover:scale-110 transition-transform disabled:opacity-50"
        >
          {isLiked ? (
            <svg className="w-8 h-8 text-primary fill-current" viewBox="0 0 24 24">
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
            </svg>
          ) : (
            <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
            </svg>
          )}
        </button>
        <span className="font-bold text-lg">{likeCount} likes</span>
      </div>

      {/* Caption */}
      <div className="space-y-2">
        <Link href={`/profile/${post.userId}`} className="font-bold hover:text-primary transition-colors">
          {post.username}
        </Link>
        <p className="text-gray-700">{post.caption}</p>
        <p className="text-sm text-gray-500">
          {post.createdAt?.toDate().toLocaleDateString()}
        </p>
      </div>
    </div>
  );
} 