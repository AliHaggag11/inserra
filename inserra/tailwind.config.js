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
        'primary': {
          DEFAULT: '#1e1b4b',
          light: '#2e2a5c',
          dark: '#14123a',
        },
        'blue': {
          100: '#e6e5f0',
          200: '#cdcbe1',
          300: '#b4b1d2',
          400: '#9b97c3',
          500: '#827db4',
          600: '#6964a5',
          700: '#504b96',
          800: '#373287',
          900: '#1e1b4b',
        },
      },
      backgroundColor: {
        DEFAULT: 'hsl(var(--background))',
      },
      textColor: {
        DEFAULT: 'hsl(var(--foreground))',
      },
      gradientColorStops: theme => ({
        ...theme('colors'),
        'primary-gradient-start': '#2e2a5c',
        'primary-gradient-end': '#14123a',
      }),
    },
  },
  plugins: [],
}