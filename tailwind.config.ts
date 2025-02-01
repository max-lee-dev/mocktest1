import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "#FF8FB1",
        secondary: "#B5F1CC",
        tertiary: "#FFD93D",
      },
      fontFamily: {
        sans: ['var(--font-lato)'],
      },
    },
  },
  plugins: [],
} satisfies Config;
