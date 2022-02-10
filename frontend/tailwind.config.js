module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    container:{
      center:true
    },
    extend: {},
    fontFamily: { sans: ['Helvetica', 'Arial', 'sans-serif'] },
  },
  plugins: [require('daisyui')],
};
 