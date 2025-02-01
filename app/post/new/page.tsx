"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/app/context/AuthContext";
import Navbar from "@/app/components/Navbar/Navbar";
import ImageUpload from "@/app/components/PostComponents/ImageUpload";
import PostCaption from "@/app/components/PostComponents/PostCaption";
import { createPost } from "@/app/utils/firebaseUtils";

export default function NewPostPage() {
  const [image, setImage] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [caption, setCaption] = useState("");
  const [uploading, setUploading] = useState(false);
  const { user, loading } = useAuth();
  const router = useRouter();

  if (!user && !loading) {
    router.push("/");
    return null;
  }

  const handleSubmit = async () => {
    if (!image || !caption || !user) return;

    try {
      setUploading(true);
      await createPost(image, caption, user);
      router.push(`/profile/${user.uid}`);
    } catch (error) {
      console.error("Error creating post:", error);
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="min-h-screen bg-surface">
      <main className="max-w-2xl mx-auto p-4">
        <Navbar user={user} loading={loading} />
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-border">
          <h1 className="text-2xl font-bold mb-6 bg-gradient-to-r from-primary via-secondary to-tertiary bg-clip-text text-transparent">
            Create New Post
          </h1>
          <ImageUpload
            setImage={setImage}
            previewUrl={previewUrl}
            setPreviewUrl={setPreviewUrl}
          />
          <PostCaption caption={caption} setCaption={setCaption} />
          <button
            onClick={handleSubmit}
            className="w-full bg-primary text-white py-3 rounded-xl font-medium mt-6 hover:opacity-90 transition-opacity disabled:opacity-50"
            disabled={!image || !caption || uploading}
          >
            {uploading ? "Uploading..." : "Share Post"}
          </button>
        </div>
      </main>
    </div>
  );
} 