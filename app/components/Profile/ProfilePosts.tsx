"use client";
import { useState, useEffect } from 'react';
import { onSnapshot } from 'firebase/firestore';
import { getUserPosts } from '@/app/utils/firebaseUtils';
import { Post } from '@/app/types';
import Image from 'next/image';
import Link from 'next/link';
import { useAuth } from '@/app/context/AuthContext';

export default function ProfilePosts() {
  const [posts, setPosts] = useState<Post[]>([]);
  const { user } = useAuth();

  useEffect(() => {
    if (!user?.uid) return;

    const fetchPosts = async () => {
      const q = await getUserPosts(user.uid);
      const unsubscribe = onSnapshot(q, (snapshot) => {
        const newPosts = snapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        })) as Post[];
        setPosts(newPosts);
      });
      return unsubscribe;
    };

    fetchPosts().then(unsubscribe => {
      return () => unsubscribe();
    });
  }, [user?.uid]);

  if (!user) return null;

  return (
    <div className="grid grid-cols-3 gap-4">

      {posts.map((post) => (
        <Link key={post.id} href={`/post/${post.id}`} className="aspect-square">
          <Image
            src={post.imageUrl}
            alt={post.caption}
            width={300}
            height={300}
            className="w-full h-full object-cover rounded-lg border-2 border-black"
          />
        </Link>
      ))}
    </div>
  );
} 