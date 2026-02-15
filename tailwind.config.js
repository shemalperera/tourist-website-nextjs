/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Roboto: ["Roboto", "sans-serif"],
        Nunito: ["Nunito Sans", "sans-serif"],
        Poppins: ["Poppins", "sans-serif"],
        Montserrat: ["Montserrat", "sans-serif"]
      },
      colors: {
        // Configure your color palette here
        'redmix': '#d90429',
        'greenmix': '#2b9348',
        'bluemix': '#023047',
        'orangemix': '#f77f00',

      },
      keyframes: {
        slideDownFade: {
          '0%': {
            opacity: '0',
            transform: 'translateY(-30px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
      },
      animation: {
        slideDownFade: 'slideDownFade 0.8s ease-out forwards',
        slideDownFadeDelay: 'slideDownFade 0.8s ease-out 0.3s forwards',
      },
    
    },
  },
  plugins: [],
}
