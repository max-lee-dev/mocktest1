interface PostCaptionProps {
  caption: string;
  setCaption: (caption: string) => void;
}

export default function PostCaption({ caption, setCaption }: PostCaptionProps) {
  return (
    <div className="space-y-2">
      <label htmlFor="caption" className="block font-medium">
        Caption
      </label>
      <textarea
        id="caption"
        value={caption}
        onChange={(e) => setCaption(e.target.value)}
        placeholder="Write a caption..."
        className="w-full h-32 p-4 border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 resize-none"
      />
    </div>
  );
} 