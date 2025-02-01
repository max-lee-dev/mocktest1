import { Post } from "@/app/types";
import NewPost from "./NewPost";

const mockProfilePosts: Post[] = [
  {
    id: 1,
    username: "user",
    avatar: "https://i.pravatar.cc/150?img=1",
    image: "https://picsum.photos/300/300?random=1",
    likes: 123,
    caption: "My first post!"
  },
  // Add more mock posts as needed
];

export default function ProfilePosts() {
  return (
    <div className="grid grid-cols-3 gap-4">
      <NewPost />
      {mockProfilePosts.map((post) => (
        <div
          key={post.id}
          className="aspect-square border-2 border-black rounded-lg overflow-hidden shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
        >
          <img
            src={post.image}
            alt={post.caption}
            className="w-full h-full object-cover"
          />
        </div>
      ))}
    </div>
  );
} 