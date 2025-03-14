/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        primary: '#ff6f61',
        secondary: '#4f46e5',
        accent: '#22d3ee',
      },
    },
  },
};
