"use client";
import { useState } from 'react';
import { useAuth } from '@/app/context/AuthContext';
import { addComment } from '@/app/utils/firebaseUtils';
import { AnimatedButton } from '../Animations/AnimatedButton';

interface CommentInputProps {
  postId: string;
}

export default function CommentInput({ postId }: CommentInputProps) {
  const { user } = useAuth();
  const [comment, setComment] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!user || !comment.trim() || isSubmitting) return;

    setIsSubmitting(true);
    try {
      await addComment(
        postId,
        user.uid,
        user.displayName || 'Anonymous',
        user.photoURL || '/images/default-avatar.png',
        comment.trim()
      );
      setComment('');
    } catch (error) {
      console.error('Error adding comment:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2">
      <input
        type="text"
        value={comment}
        onChange={(e) => setComment(e.target.value)}
        placeholder="Add a comment..."
        className="flex-1 px-3 py-2 border-2 border-black rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
      />
      <AnimatedButton
        type="submit"
        disabled={!comment.trim() || isSubmitting}
        className="px-4 py-2 bg-black text-white rounded-lg disabled:opacity-50"
      >
        Post
      </AnimatedButton>
    </form>
  );
} 