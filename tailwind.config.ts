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
        'color-border':   'var(--color-border)',
      },
    },
  },
  plugins: [],
};
export default config;
