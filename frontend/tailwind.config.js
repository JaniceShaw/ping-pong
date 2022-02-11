module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    container: {
      center: true,
    },
    extend: {
      colors: {
        primary: '#3F3D56',
        primary_light: '#ABA6ED',
        secondary: '#FFAA00',
        bg_light: '#FFFAFD',
      },
    },
    fontFamily: { sans: ['Helvetica', 'Arial', 'sans-serif'] },
  },
  plugins: [require('daisyui')],
};
