"use client";
import { useState, useEffect } from "react";
import { collection, query, orderBy, onSnapshot } from "firebase/firestore";
import { db } from "@/app/utils/firebase";
import { Post } from "@/app/types";
import PostCard from "./PostCard";
import PostsListSkeleton from "../Skeletons/PostsListSkeleton";

export default function PostsList() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const q = query(
      collection(db, "posts"),
      orderBy("createdAt", "desc")
    );

    const unsubscribe = onSnapshot(q, (snapshot) => {
      const newPosts = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      })) as Post[];

      setPosts(newPosts);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  if (loading) return <PostsListSkeleton />;

  return (
    <div className="flex flex-col gap-8">
      {posts.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </div>
  );
} 