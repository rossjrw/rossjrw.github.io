module.exports = {
  variants: {
    extend: {
      gradientColorStops: ['group-hover'],
      inset: ['group-hover'],
      textOpacity: ['group-hover'],
      translate: ['group-hover'],
      transitionDuration: ['group-hover'],
      transitionTimingFunction: ['group-hover'],
      width: ['group-hover']
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
