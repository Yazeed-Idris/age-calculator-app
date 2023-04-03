/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'Poppins': ['Poppins', 'sans serif']
    },
    extend: {
      colors: {
        'Purple': 'hsl(259, 100%, 65%)',
        'Light-Red': 'hsl(0, 100%, 67%)',
        'White': 'hsl(0, 0%, 100%)',
        'Off-White': 'hsl(0, 0%, 94%)',
        'Light-Grey': 'hsl(0, 0%, 86%)',
        'Smokey-Grey': 'hsl(0, 1%, 44%)',
        'Off-Black': 'hsl(0, 0%, 8%)',
      }
    },
  },
  plugins: [],
}

