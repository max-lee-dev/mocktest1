import { HeartIcon, CommentIcon, ShareIcon } from "../Icons/PostIcons";

interface PostButtonsProps {
  onLike?: () => void;
  onComment?: () => void;
  onShare?: () => void;
}

export default function PostButtons({ onLike, onComment, onShare }: PostButtonsProps) {
  return (
    <div className="flex items-center gap-4 mb-2">
      <button
        onClick={onLike}
        className="hover:scale-110 transition-transform text-black hover:text-[#FF8FB1]"
      >
        <HeartIcon className="w-7 h-7" />
      </button>
      <button
        onClick={onComment}
        className="hover:scale-110 transition-transform text-black hover:text-[#B5F1CC]"
      >
        <CommentIcon className="w-7 h-7" />
      </button>
      <button
        onClick={onShare}
        className="hover:scale-110 transition-transform text-black hover:text-[#FFD93D]"
      >
        <ShareIcon className="w-7 h-7" />
      </button>
    </div>
  );
} 