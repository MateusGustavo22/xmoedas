/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',

    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      display1: { max: '768px' },
    },
   
    extend: {
      boxShadow: {
        '3xl': '0 0 10px rgba(0,0,0,.24)',
      },
    },
  },
  plugins: [],
};
