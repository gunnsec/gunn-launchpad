/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        midnight: '#1B1B1B',
        dark: '#26252C',
        light: '#FFF8E8',
        grapefruit: '#FF6347',
        pomegranate: '#E03C31'
      }
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '2rem',
        sm: '3rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem',
      }
    }
  },
  plugins: [],
}
