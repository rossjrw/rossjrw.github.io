module.exports = {
  variants: {
    extend: {
      justifySelf: ['odd', 'even'],
      translate: ['odd', 'even'],
      zIndex: ['hover']
    }
  },
  theme: {
    aspectRatio: { 'none': 0, '1/1': [1, 1], '1/2': [1, 2] },
    extend: {
      width: { 'big': '30rem' },
      maxWidth: { 'text': '50ch' },
      fontFamily: {
        sans: ['Aileron', 'sans-serif'],
        serif: ['Lora', 'serif']
      }
    },
  },
  plugins: [ require("tailwindcss-aspect-ratio") ]
}
