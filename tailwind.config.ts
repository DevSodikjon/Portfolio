import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './node_modules/swiper/**/*.{js,ts}', // 🟢 Qo‘shib qo‘yilgan
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      screens: {
        'max-1500': { 'raw': '(max-width: 1500px)' },
        'max-1400': { 'raw': '(max-width: 1400px)' },
        'max-1300': { 'raw': '(max-width: 1300px)' },
        'max-1200': { 'raw': '(max-width: 1200px)' },
        'max-1100': { 'raw': '(max-width: 1100px)' },
        'max-1000': { 'raw': '(max-width: 1000px)' },
        'max-900': { 'raw': '(max-width: 900px)' },
        'max-800': { 'raw': '(max-width: 800px)' },
        'max-768': { 'raw': '(max-width: 768px)' },
        'max-700': { 'raw': '(max-width: 700px)' },
        'max-640': { 'raw': '(max-width: 640px)' },
        'max-600': { 'raw': '(max-width: 600px)' },
        'max-540': { 'raw': '(max-width: 540px)' },
        'max-500': { 'raw': '(max-width: 500px)' },
        'max-480': { 'raw': '(max-width: 480px)' },
        'max-425': { 'raw': '(max-width: 425px)' },
        'max-414': { 'raw': '(max-width: 414px)' },
        'max-400': { 'raw': '(max-width: 400px)' },
        'max-390': { 'raw': '(max-width: 390px)' },
        'max-375': { 'raw': '(max-width: 375px)' },
        'max-370': { 'raw': '(max-width: 370px)' },
        'max-360': { 'raw': '(max-width: 360px)' },
        'max-350': { 'raw': '(max-width: 350px)' },
        'max-340': { 'raw': '(max-width: 340px)' },
        'max-320': { 'raw': '(max-width: 320px)' },
        'max-300': { 'raw': '(max-width: 300px)' },
      }
    },
  },
  plugins: [],
}

export default config // ✅ Faqat shu kerak
