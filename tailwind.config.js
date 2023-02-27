/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      "primary-brown": "#3C2A21",
      "secondary-brown": "#D5CEA3",
      "primary-white": "#E5E5CB",
      "primary-black": "#000000",
    },
    extend: {
      backgroundImage: {
        hero: "url('/assets/3.jpg')",
        about: "url('/assets/9.jpg')",
        order: "url('/assets/11.jpg')",
        music: "url('/assets/12.jpg')",
      },
    },
  },
  plugins: [],
};
