/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: '480px',
    //   md: '640px',
      md: '768px',
      // lg: '1020px',
      lg: '976px',
      xl: '1440px'
      // xl: '1279px'
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
        purple: '#3F2379',
        mazarine: '#273C76',
        byzantium: '#792366',

      },
      // backgroundImage: {
      //   'image': "url('/images/bgImage.jpg)",
      // }
    },
  },
  safelist: [
    "bg-purple",
    "bg-mazarine",
    "bg-byzantium",
    "text-purple",
    "text-mazarine",
    "text-byzantium",
    "text-lighterWhite",
    // { pattern: /bg-\[#.+\]/ },
    // { pattern: /text-\[#.+\]/ },
  ],
  plugins: [],
}

