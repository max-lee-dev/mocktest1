import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#FF3040',
        secondary: '#FFD93D',
        border: '#2C3333',
        'text-primary': '#2C3333',
        'text-secondary': '#78716c',
        background: '#FFFFFF',
      },
      fontFamily: {
        sans: ['var(--font-lato)'],
      },
    },
  },
  plugins: [],
}

export default config;
