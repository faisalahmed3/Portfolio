/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        night: "#0f0f0f",         // Deep dark background
        crimson: "#DC2626",       // Red-600
        redlight: "#F87171",      // Red-400
        redsoft: "#FECACA",       // Red-200
        graylight: "#E5E7EB",     // Light gray text
      },
      fontFamily: {
        sans: ["Outfit", "sans-serif"],
      },
    },
  },
  plugins: [
    require("daisyui"),
  ],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#DC2626",     // crimson
          secondary: "#F87171",   // light red
          accent: "#FECACA",      // soft red
          neutral: "#0f0f0f",     // dark background
          "base-100": "#0f0f0f",  // page background
          info: "#60A5FA",
          success: "#4ade80",
          warning: "#facc15",
          error: "#f87171",
        },
      },
    ],
    darkTheme: "mytheme", // Optional: use this theme in dark mode
  },
};
