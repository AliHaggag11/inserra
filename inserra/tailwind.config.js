/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Afacad', 'sans-serif'],
      },
      borderColor: {
        DEFAULT: 'var(--border)',
      },
      colors: {
        border: 'var(--border)',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        'footer-blue': '#1e3a8a',
      },
      backgroundColor: {
        DEFAULT: 'hsl(var(--background))',
      },
      textColor: {
        DEFAULT: 'hsl(var(--foreground))',
      },
    },
  },
  plugins: [],
}