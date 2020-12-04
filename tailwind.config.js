module.exports = {
  purge: {
    content: ['./src/**/*.html'],
  },
  theme: {
    container: {
      center: true,
    },
    screens: {
      sm: "576px",
      md: "768px",
      lg: "992px",
      xl: "1200px",
      wl: "1500px"
    },
    extend: {
      colors: {
        'navy': {
          100: '#E7F1F8',
          200: '#95BBD2',
          300: '#719ABC',
          400: '#4D78A5',
          500: '#29568f',
          600: '#21457D',
          700: '#204374',
          800: '#132744',
          900: '#0A1524',
        },
        'gold': {
          100: '#FFFAE3',
          200: '#FFF2B3',
          300: '#FFF563',
          400: '#FFE04D',
          500: '#FFCC00',
          600: '#ECBE04',
          700: '#DFAE0C',
          800: '#AF8F2C',
          900: '#221902',
        },
        'harvest': {
          100: '#FFEEBD',
          200: '#FFDC69',
          700: '#F2A900',
          800: '#DE7C00',
        },
        'brown': {
          200: '#DCBFA6',
          300: '#AD7C59',
          400: '#88431E',
          500: '#57150B',
        }
      },
    },
  },
  variants: {},
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
