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
        'max-500': { 'raw': '(max-width: 500px)' },
        'max-400': { 'raw': '(max-width: 400px)' },
      }
    },
  },
  plugins: [],
}

export default config // ✅ Faqat shu kerak
