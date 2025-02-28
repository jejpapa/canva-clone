/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./index.html",              // Include your HTML entry point
      "./src/**/*.{js,ts,jsx,tsx}", // Adjust this to match your project’s source files
    ],
    theme: {
      extend: {},                  // Optionally extend the default theme here
    },
    plugins: [
      require('tailwind-scrollbar-hide'), // Add the scrollbar-hide plugin
    ],
  };