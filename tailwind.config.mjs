/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        lavender: {
          50: '#F7F4FB',
          100: '#EFE8F5',
          200: '#E3D8F0',
          300: '#CDBBE2',
          400: '#B49ED0',
          500: '#9D86C4',
          600: '#7E68A6',
          700: '#5E4A82',
          800: '#3F3158',
          900: '#241B33',
        },
        cream: '#FBF8F3',
        sand: '#EFE6D9',
        ink: '#2B2530',
        blush: {
          DEFAULT: '#F2D9DC',
          200: '#F8E8EA',
          400: '#ECC4C9',
        },
      },
      fontFamily: {
        serif: ['Newsreader', 'ui-serif', 'Georgia', 'serif'],
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        soft: '14px',
      },
      maxWidth: {
        prose: '65ch',
      },
      boxShadow: {
        card: '0 1px 2px rgba(43,37,48,0.04), 0 8px 24px -12px rgba(94,74,130,0.18)',
      },
    },
  },
  plugins: [],
};
