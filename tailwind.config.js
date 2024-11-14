/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px'
    },
    fontFamily: {
      dmSans: ['DM Sans'],
      sans: ['Noto Sans', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
    },
    extend: {
      color: {
        primary: '#6016FC',
        badgeGreen: '#16FCD2',
        lighterWhite: '#FFFFFF99'
      }
    },
  },
  plugins: [],
}

