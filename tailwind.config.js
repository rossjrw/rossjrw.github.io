module.exports = {
  variants: {
    extend: {
      zIndex: ['hover']
    }
  },
  theme: {
    aspectRatio: { 'none': 0, '1/1': [1, 1], '1/2': [1, 2] },
    extend: {
      width: { 'big': '30rem' },
      maxWidth: { 'text': '50ch' }
    },
    fontFamily: { serif: ['Lora', 'serif'] }
  },
  plugins: [ require("tailwindcss-aspect-ratio") ]
}
