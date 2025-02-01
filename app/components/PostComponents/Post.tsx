import { PostProps } from "@/app/types";
import PostButtons from "./PostButtons";

export default function Post({ username, avatar, image, likes, caption }: PostProps) {
  return (
    <div className="border-2 border-black rounded-xl p-4 bg-white shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
      <div className="flex items-center gap-3 mb-4">
        <div className="w-10 h-10 rounded-full border-2 border-black overflow-hidden">
          <img
            src={avatar}
            alt={username}
            className="w-full h-full object-cover"
          />
        </div>
        <span className="font-medium">{username}</span>
      </div>
      <div className="rounded-lg border-2 border-black overflow-hidden mb-4">
        <img
          src={image}
          alt="Post"
          className="w-full h-full object-cover"
        />
      </div>
      <PostButtons
        onLike={() => console.log('Like clicked')}
        onComment={() => console.log('Comment clicked')}
        onShare={() => console.log('Share clicked')}
      />
      <div className="space-y-2">
        <div className="inline-block  border-black rounded-lg ">
          <p className="font-bold">{likes} likes</p>
        </div>
        <div className="rounded-lg">
          <p>
            <span className="font-bold px-2 py-0.5 rounded-md border ">
              {username}
            </span>{' '}
            <span className="ml-2">{caption}</span>
          </p>
        </div>
      </div>
    </div>
  );
} 