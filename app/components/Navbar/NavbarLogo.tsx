import { useRouter } from "next/navigation";

export default function NavbarLogo() {
  const router = useRouter();

  return (
    <div className="relative cursor-pointer hover:scale-105 transition-transform" onClick={() => router.push('/')}>
      <h1 className="text-4xl font-bold text-primary bg-clip-text text-transparent">
        maxgram
      </h1>
    </div>
  );
} 