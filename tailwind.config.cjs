module.exports = {
  content: [
    './src/**/*.{html,svelte,js,ts}'
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
  ],
};
