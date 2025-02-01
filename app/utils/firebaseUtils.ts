import { db, storage } from './firebase';
import { collection, addDoc, serverTimestamp, query, where, orderBy, doc, getDoc } from 'firebase/firestore';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { User, Post } from '../types';

export async function createPost(imageFile: Blob, caption: string, user: User) {
  try {
    // 1. Upload image to Firebase Storage
    const imageRef = ref(storage, `posts/${user.uid}/${Date.now()}`);
    await uploadBytes(imageRef, imageFile);
    const imageUrl = await getDownloadURL(imageRef);

    // 2. Create post in Firestore
    const postRef = await addDoc(collection(db, 'posts'), {
      userId: user.uid,
      username: user.displayName,
      userAvatar: user.photoURL,
      imageUrl,
      caption,
      likes: 0,
      createdAt: serverTimestamp(),
    });

    return { id: postRef.id };
  } catch (error) {
    console.error('Error in createPost:', error);
    throw error;
  }
}

export async function getUserPosts(userId: string) {
  const q = query(
    collection(db, "posts"),
    where("userId", "==", userId),
    orderBy("createdAt", "desc")
  );
  return q;
}

export async function getPost(postId: string): Promise<Post | null> {
  try {
    const postDoc = await getDoc(doc(db, "posts", postId));
    if (postDoc.exists()) {
      return { id: postDoc.id, ...postDoc.data() } as Post;
    }
    return null;
  } catch (error) {
    console.error("Error fetching post:", error);
    return null;
  }
} 