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
        'color-light':  'var(--color-light)',
        'color-dark':   'var(--color-dark)',
        'color-border-light':   'var(--color-border-light)',
        'color-border-dark':   'var(--color-border-dark)',
      },
    },
  },
  plugins: [],
  darkMode: 'class',
};
export default config;
