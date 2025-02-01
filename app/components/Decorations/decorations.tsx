export const Squiggle = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 100 100">
    <path
      d="M10 50 Q 25 25, 40 50 T 70 50"
      stroke="currentColor"
      strokeWidth="4"
      fill="none"
    />
  </svg>
);

export const DotPattern = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 100 100">
    <circle cx="20" cy="20" r="5" fill="currentColor" />
    <circle cx="40" cy="20" r="5" fill="currentColor" />
    <circle cx="60" cy="20" r="5" fill="currentColor" />
    <circle cx="20" cy="40" r="5" fill="currentColor" />
    <circle cx="40" cy="40" r="5" fill="currentColor" />
    <circle cx="60" cy="40" r="5" fill="currentColor" />
  </svg>
);

export const Zigzag = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 100 100">
    <path
      d="M10 30 L 30 70 L 50 30 L 70 70 L 90 30"
      stroke="currentColor"
      strokeWidth="4"
      fill="none"
    />
  </svg>
);

export const DecorativeCircle = ({ className }: { className?: string }) => (
  <div className={`${className} bg-[#E8A0BF] rounded-full opacity-20`} />
);

export function BackgroundDecorations() {
  return null;
} 