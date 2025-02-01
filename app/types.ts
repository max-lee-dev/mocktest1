import { Timestamp } from 'firebase/firestore';

export interface User {
  displayName: string;
  uid: string;
  email: string | null;
  photoURL: string | null;
}

export interface Story {
  id: number;
  username: string;
  avatar: string;
}

export interface Comment {
  id: string;
  userId: string;
  username: string;
  userAvatar: string;
  text: string;
  createdAt: Timestamp;
}

export interface Post {
  id: string;
  userId: string;
  username: string;
  userAvatar: string;
  imageUrl: string;
  caption: string;
  likes: number;
  likedBy: string[];
  comments: Comment[];
  createdAt: Timestamp;
}

export interface NavbarProps {
  user: User | null;
  loading: boolean;
}

export interface ProfileButtonProps {
  user: User;
}

export interface StoriesRowProps {
  stories: Story[];
}

export interface StoryIconProps {
  username: string;
  avatar: string;
}

export interface PostProps {
  username: string;
  avatar: string;
  image: string;
  likes: number;
  caption: string;
}

export interface PostsListProps {
  posts: Post[];
}

export interface PostButtonsProps {
  onLike?: () => void;
  onComment?: () => void;
  onShare?: () => void;
}

export interface UserDocument {
  uid: string;
  displayName: string | null;
  photoURL: string | null;
  email: string | null;
  followers: number;
  following: number;
  bio: string;
  createdAt: Timestamp;
  // Add any other fields you want to track
} 