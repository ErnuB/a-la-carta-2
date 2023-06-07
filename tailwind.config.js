/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        'carta-primary': '#ff5311',
        'carta-secondary': '#91e0ff',
        'carta-tertiary': '#e66d3d',
        'whitecarta': "#fff"
      },
      fontFamily: {
        'prompt': 'Prompt'
      }
    }
  },
  plugins: []
};
