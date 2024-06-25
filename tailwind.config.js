/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js}"],
    theme: {
      extend: {
        colors: {
          'primary-color': '#ff0000',
          'second-color': '#fff',
          'third-color': '#231F20',
          'fourth-color': '#636363',
          'fifth-color': '#d3d3d3',
          'green': '#008000;',
          'white': '#fff',
        },
      },
    },
    plugins: [],
  }