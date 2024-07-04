/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "selector",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      // {'max': '1535px'}
      "sm": "320px",
      "md": "768px",
      "lg": "1360px",
    },
    extend: {
      colors: {
        "textSecondary": "#6E6E6E",
       "buttonPrimary": "#2F4EED",
       "buttonPrimaryHover": "#3A1DA0",
        "landingInput": "#F7F7F7",
        "landingInputText": "#838385",
        "landingCardBg": "#151515"
      },
      "boxShadow": {
        "customInset": "0px -4px 0px 0px rgba(0, 0, 0, 0.25) inset",
      }, 
    },
  },
  plugins: [],
};
