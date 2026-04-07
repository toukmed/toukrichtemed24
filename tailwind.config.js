/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.html', './src/**/*.js'],
  theme: {
    extend: {
      colors: {
        primary: { DEFAULT: '#1E40AF', light: '#3B82F6', dark: '#1E3A8A' },
        accent:  { DEFAULT: '#F97316', light: '#FB923C', dark: '#EA580C' },
        whatsapp: '#25D366',
      },
      fontFamily: {
        sans: ['Inter', 'Cairo', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
