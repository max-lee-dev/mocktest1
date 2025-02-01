"use client";
import { Post } from "@/app/types";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from 'next/image';
import { useAuth } from "@/app/context/AuthContext";
import { toggleLike, isPostLiked } from "@/app/utils/firebaseUtils";
import { HeartIcon, CommentIcon, ShareIcon } from "../Icons/PostIcons";
import { AnimateInView } from "../Animations/AnimateInView";
import { AnimatedButton } from "../Animations/AnimatedButton";
import CommentInput from './CommentInput';
import CommentList from './CommentList';
import { useRouter } from "next/navigation";
import { formatTimeAgo } from '@/app/utils/dateUtils';

interface PostCardProps {
  post: Post;
}

export default function PostCard({ post }: PostCardProps) {
  const router = useRouter();
  const { user } = useAuth();
  const [isLiked, setIsLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(post.likes);
  const [isLoading, setIsLoading] = useState(false);
  const [showComments, setShowComments] = useState(false);

  const latestComment = post.comments?.[0];
  const commentCount = post.comments?.length || 0;

  const formattedDate = post.createdAt.toDate().toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
  });

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

  const handleImageClick = () => {
    router.push(`/post/${post.id}`);
  };

  return (
    <AnimateInView className="border-2 border-black rounded-xl p-4 bg-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
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

      <div
        onClick={handleImageClick}
        className="mb-4 cursor-pointer"
      >
        <Image
          src={post.imageUrl || '/images/default-post.png'}
          alt={post.caption || 'Post image'}
          width={600}
          height={600}
          className="w-full aspect-square object-cover rounded-lg border-2 border-black"
        />
      </div>

      <div className="flex items-center justify-between mb-4">
        <div className="flex gap-4">
          <AnimatedButton onClick={handleLike} disabled={isLoading}>
            <HeartIcon className={`w-7 h-7 ${isLiked ? 'fill-red-500 stroke-red-500' : ''}`} />
          </AnimatedButton>
          <AnimatedButton onClick={() => setShowComments(!showComments)}>
            <CommentIcon className={`w-7 h-7 ${showComments ? 'fill-current' : ''}`} />
          </AnimatedButton>
          <AnimatedButton>
            <ShareIcon className="w-7 h-7" />
          </AnimatedButton>
        </div>
        <span
          className="text-xs mr-2 text-gray-500 cursor-help"
          title={formattedDate}
        >
          {formatTimeAgo(post.createdAt.toDate())}
        </span>
      </div>

      <div className="font-medium mb-2">
        {likeCount} likes
      </div>

      <div className="mb-2">
        <span className="font-bold mr-2">{post.username}</span>
        {post.caption}
      </div>

      <div className="mb-2 text-sm">
        {commentCount > 0 && (
          <button
            onClick={() => setShowComments(true)}
            className="text-gray-500 hover:text-gray-700"
          >
            View all {commentCount} comments
          </button>
        )}
        {latestComment && (
          <div className="mt-1">
            <span className="font-bold mr-2">{latestComment.username}</span>
            {latestComment.text}
          </div>
        )}
      </div>

      {showComments && (
        <div className="space-y-4 mt-4 pt-4 border-t-2 border-gray-100">
          <CommentList postId={post.id} comments={post.comments || []} />
          <CommentInput postId={post.id} />
        </div>
      )}
    </AnimateInView>
  );
} 