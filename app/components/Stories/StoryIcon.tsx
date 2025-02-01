import Image from "next/image";

export default function StoryIcon({ src, alt }: { src: string; alt: string }) {
  return (
    <Image
      src={src}
      alt={alt}
      width={56}
      height={56}
      className="w-14 h-14 rounded-full border-2 border-black"
    />
  );
} 