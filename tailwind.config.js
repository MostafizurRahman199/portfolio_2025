/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");

export default withMT({
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    // ... existing content from the second config ...
  ],
  theme: {
    extend: {},
  },
  plugins: [],
});