/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      spacing: {
        '255': '255px',
        '465': '465px',
        '60': '60px',
      },
      height: {
        '128': '100px',
      },
      backgroundSize: {
        'auto': 'auto',
        'cover': 'cover',
        'contain': 'contain',
        '50%': '50%',
        '99': '50px',
      }

    },
  },
  plugins: [],
}