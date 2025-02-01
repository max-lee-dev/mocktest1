import { Post } from "@/app/types";
import { useState } from "react";
import Link from "next/link";
import Image from 'next/image';

interface PostCardProps {
  post: Post;
}

export default function Post({ post }: PostCardProps) {
  const [isLiked, setIsLiked] = useState(false);

  return (
    <div className="border-2 border-black rounded-xl p-4 bg-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
      {/* Post Header */}
      <div className="flex items-center gap-3 mb-4">
        <Link href={`/profile/${post.userId}`}>
          <Image
            src={post.userAvatar || '/images/default-avatar.png'}
            alt={post.username || 'User'}
            width={40}
            height={40}
            className="w-10 h-10 rounded-full border-2 border-black"
          />
        </Link>
        <Link href={`/profile/${post.userId}`} className="font-bold hover:underline">
          {post.username}
        </Link>
      </div>

      {/* Post Image */}
      <div className="rounded-lg border-2 border-black overflow-hidden mb-4">
        <Image
          src={post.imageUrl || '/images/default-post.png'}
          alt={post.caption || 'Post image'}
          width={600}
          height={600}
          className="w-full aspect-square object-cover"
        />
      </div>

      {/* Post Actions */}
      <div className="flex items-center gap-4 mb-2">
        <button
          onClick={() => setIsLiked(!isLiked)}
          className="hover:scale-110 transition-transform"
        >
          {isLiked ? (
            <svg width="24" height="24" fill="red" viewBox="0 0 24 24">
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
            </svg>
          ) : (
            <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
            </svg>
          )}
        </button>
        <span className="font-medium">{post.likes} likes</span>
      </div>

      {/* Caption */}
      <div>
        <span className="font-bold mr-2">{post.username}</span>
        {post.caption}
      </div>

      {/* Timestamp */}
      <p className="text-sm text-gray-500 mt-2">
        {post.createdAt?.toDate().toLocaleDateString()}
      </p>
    </div>
  );
} 