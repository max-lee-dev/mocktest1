import { db, storage } from './firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { User } from '../types';

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