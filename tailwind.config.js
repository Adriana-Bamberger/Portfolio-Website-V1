/** @type {import('tailwindcss').Config} */
export default {
  content: ['./client/**/*.{html,js,jsx,ts,tsx}'],
  theme: {
    extend: {
      borderRadius: {
        custom: '2rem',
      },
      colors: {
        clr1: '#E40303',
        clr2: '#FF8C00',
        clr3: '#FFED00',
        clr4: '#008026',
        clr5: '#24408E',
        clr6: '#732982',
        clr7: '#414141',
        clr8: '#B3B3B3',
        clr9: '#E6E6E6',
        clr10: '#ffffff',
        clr11: '#1E1E1E',
      },
      backgroundImage: {
        'background-large':
          "url('/client/public/Images/Background/background-large.png')",
        'background-medium':
          "url('/client/public/Images/Background/background-medium.png')",
        'background-small':
          "url('/client/public/Images/Background/background-small.png')",
        'background-extra-large':
          "url('/client/public/Images/Background/background-extra-large.png')",
      },
      animation: {
        marquee: 'marquee 40s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': {
            transform: 'translateX(calc(-1 * var(--scroll-distance)))',
          },
        },
      },
    },
  },
  plugins: [],
}
