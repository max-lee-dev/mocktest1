import { Comment } from '@/app/types';
import Image from 'next/image';
import Link from 'next/link';
import { useAuth } from '@/app/context/AuthContext';
import { deleteComment } from '@/app/utils/firebaseUtils';
import { AnimatedButton } from '../Animations/AnimatedButton';
import { formatTimeAgo } from '@/app/utils/dateUtils';

interface CommentListProps {
  postId: string;
  comments: Comment[];
}

export default function CommentList({ postId, comments }: CommentListProps) {
  const { user } = useAuth();

  const handleDelete = async (commentId: string) => {
    if (!user) return;
    try {
      await deleteComment(postId, commentId);
    } catch (error) {
      console.error('Error deleting comment:', error);
    }
  };

  return (
    <div className="space-y-3">
      {comments.map((comment) => (
        <div key={comment.id} className="flex items-start gap-2">
          <Link href={`/profile/${comment.userId}`}>
            <Image
              src={comment.userAvatar || '/images/default-avatar.png'}
              alt={comment.username}
              width={32}
              height={32}
              className="w-8 h-8 rounded-full border-2 border-black"
            />
          </Link>
          <div className="flex-1">
            <div className="flex items-center gap-2">
              <Link href={`/profile/${comment.userId}`} className="font-bold hover:underline">
                {comment.username}
              </Link>
              <span className="text-xs text-gray-500">
                {formatTimeAgo(comment.createdAt.toDate())}
              </span>
            </div>
            <p className="text-sm">{comment.text}</p>
          </div>
          {user?.uid === comment.userId && (
            <AnimatedButton
              onClick={() => handleDelete(comment.id)}
              className="text-red-500 text-sm hover:text-red-600"
            >
              Delete
            </AnimatedButton>
          )}
        </div>
      ))}
    </div>
  );
} 