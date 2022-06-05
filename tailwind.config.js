module.exports = {
  darkMode: 'class',
  content: ['./pages/**/*.{js,jsx}', './components/**/*.{js, jsx}'],
  theme: {
    fontFamily: {
      'special-elite': ['"Special Elite"', 'cursive'],
    },
    extend: {
      keyframes: {
        act_show: {
          '0%': { visibility: 'hidden', opacity: '0' },
          '15%': { visibility: 'hidden', opacity: '0' },
          '50%': { visibility: 'visible', opacity: '0' },
          '100%': { visibility: 'visible', opacity: '100' },
        },
      },
      animation: {
        neon_act_show: 'act_show 2s ease-in forwards',
      },
    },
  },
  variants: {
    extend: {
      width: ['hover'],
      animation: ['group-hover'],
    },
  },
  plugins: [],
};
