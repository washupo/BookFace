/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        brownPrimary: "#642B13",
        beigePrimary: "#B29588",
        whitePrimary: "#EDF6F6",
      },
      fontSize: {
        13: "13px",
        15: "15px",
        20: "20px",
      },
      padding: {
        15: "15px",
        20: "20px",
        30: "30px",
      },
      gap: {
        15: "15px",
        20: "20px",
        25: "25px",
        30: "30px",
      },
      fontFamily: {
        fkGrotesk: "FKGrotesk",
        fkGroteskBold: "FKGroteskBold",
      },
      borderRadius: {
        5: "5px",
      }
    },
  },
  plugins: [],
}

