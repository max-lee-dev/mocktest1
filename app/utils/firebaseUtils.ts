import { db, storage } from './firebase';
import { collection, addDoc, serverTimestamp, query, where, orderBy, doc, getDoc, setDoc, updateDoc, arrayUnion, arrayRemove } from 'firebase/firestore';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { User, Post, UserDocument, Comment } from '../types';
import { Timestamp } from 'firebase/firestore';

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

export async function createUserDocument(user: User): Promise<void> {
  const userDoc = await getDoc(doc(db, 'users', user.uid));

  if (!userDoc.exists()) {
    const newUser: UserDocument = {
      uid: user.uid,
      displayName: user.displayName,
      photoURL: user.photoURL,
      email: user.email,
      followers: 0,
      following: 0,
      bio: '',
      createdAt: serverTimestamp() as Timestamp,
    };

    await setDoc(doc(db, 'users', user.uid), newUser);
  }
}

export async function getUserDocument(userId: string): Promise<UserDocument | null> {
  try {
    const userDoc = await getDoc(doc(db, 'users', userId));
    if (userDoc.exists()) {
      return userDoc.data() as UserDocument;
    }
    return null;
  } catch (error) {
    console.error('Error fetching user:', error);
    return null;
  }
}

export async function toggleLike(postId: string, userId: string): Promise<boolean> {
  const postRef = doc(db, 'posts', postId);
  const postDoc = await getDoc(postRef);

  if (!postDoc.exists()) {
    throw new Error('Post not found');
  }

  const post = postDoc.data();
  const isLiked = post.likedBy?.includes(userId);

  await updateDoc(postRef, {
    likes: isLiked ? post.likes - 1 : post.likes + 1,
    likedBy: isLiked ? arrayRemove(userId) : arrayUnion(userId)
  });

  return !isLiked; // Returns the new like state
}

export async function isPostLiked(postId: string, userId: string): Promise<boolean> {
  const postDoc = await getDoc(doc(db, 'posts', postId));
  if (!postDoc.exists()) return false;

  const post = postDoc.data();
  return post.likedBy?.includes(userId) ?? false;
}

export async function addComment(
  postId: string,
  userId: string,
  username: string,
  userAvatar: string,
  text: string
): Promise<void> {
  const newComment: Comment = {
    id: crypto.randomUUID(),
    userId,
    username,
    userAvatar,
    text,
    createdAt: Timestamp.now(),
  };

  const postRef = doc(db, 'posts', postId);
  await updateDoc(postRef, {
    comments: arrayUnion(newComment)
  });
}

export async function deleteComment(
  postId: string,
  commentId: string
): Promise<void> {
  const postRef = doc(db, 'posts', postId);
  const postDoc = await getDoc(postRef);

  if (!postDoc.exists()) return;

  const post = postDoc.data();
  const commentToDelete = post.comments.find(
    (comment: Comment) => comment.id === commentId
  );

  if (commentToDelete) {
    await updateDoc(postRef, {
      comments: arrayRemove(commentToDelete)
    });
  }
} 