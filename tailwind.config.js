module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './features/**/*.{js,ts,jsx,tsx}',
    './node_modules/flowbite/**/*.js',
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        'main-layout': '16rem 1fr',
      },
      gridTemplateRows: {
        'main-layout': 'auto auto auto',
      },
      colors: {
        primary: '#ba0c2f',
        secondary: '#041e42',
      },
    },
    fontFamily: {
      sans: [
        'Open Sans',
        'ui-sans-serif',
        'system-ui',
        '-apple-system',
        'BlinkMacSystemFont',
        'Segoe UI',
        'Roboto',
        'Helvetica Neue',
        'Arial',
        'Noto Sans',
        'sans-serif',
        'Apple Color Emoji',
        'Segoe UI Emoji',
        'Segoe UI Symbol',
        'Noto Color Emoji',
      ],
    },
  },
  plugins: [require('@tailwindcss/typography'), require('daisyui')],
};
