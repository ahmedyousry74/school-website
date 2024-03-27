/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js}"],
    theme: {
      extend: {
        colors: {
          'primary-color': '#400A0A',
          'second-color': '#F2E8D5',
          'third-color': '#231F20',
          'fourth-color': '#636363',
          'fifth-color': '#d3d3d3',
          'white': '#fff',
        },
      },
    },
    plugins: [],
  }