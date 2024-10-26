/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}", // Note the addition of the `app` directory.
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    // screens: {
    //   sm: "340px",
    //   md: "768px",
    //   lg: "1024px",
    //   xl: "1440px",
    //   "2xl": "1920px",
    // },
    extend: {
      colors: {
        black: "#000000",

        "clr-505050": "#505050",
        "clr-888": "#888888",
        
        sidebar : {
          active: "#E8ECF1",
          background : "#E8ECF1"
        }
      },
    },
  },
  plugins: [
    require("@tailwindcss/forms"),
    // ...
  ],
};
