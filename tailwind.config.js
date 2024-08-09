/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        ".scrollbar-hide": {
          "&::-webkit-scrollbar": {
            width: "0px",
          },
        },
        ".scrollbar-show-on-hover": {
          "&:hover::-webkit-scrollbar": {
            width: "5px",
          },
          "&:hover::-webkit-scrollbar-thumb": {
            "background-color": "rgba(0, 0, 0, 0.5)",
            "border-radius": "10px",
          },
        },
        ".scrollbar-thumb-hover": {
          "&:hover::-webkit-scrollbar-thumb": {
            "background-color": "rgba(0, 0, 0, 0.7)",
          },
        },
      };

      addUtilities(newUtilities, ["responsive", "hover"]);
    },
  ],
};
