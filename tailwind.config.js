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
      dmsans: ['DM Sans'],
      sans: ['Noto Sans', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
    },
    // fontSize: {
    //   base: '14px' //
    // },
    extend: {
      colors: {
        primary: '#6016FC',
        badgeGreen: '#16FCD2',
        lighterWhite: '#FFFFFF99',
        purple: '#800080',
        mazarine: ' #273C76',
        byzantium: '#702963'
      },
      backgroundImage: {
        'image': "url('/images/bgImage.jpg)",
      }
    },
  },
  plugins: [],
}

