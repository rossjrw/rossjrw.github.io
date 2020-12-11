module.exports = {
  variants: {
    extend: {
      gradientColorStops: ['group-hover'],
      textOpacity: ['group-hover'],
      translate: ['group-hover'],
      transitionDuration: ['group-hover'],
      transitionTimingFunction: ['group-hover'],
      width: ['group-hover']
    }
  },
  theme: {
    aspectRatio: { 'none': 0, '1/1': [1, 1], '1/2': [1, 2] },
    filter: { 'desat': 'saturate(0.75) brightness(1.2)' },
    extend: {
      width: { 'big': '30rem' },
      maxWidth: { 'text': '50ch' },
      fontFamily: {
        sans: ['Aileron', 'sans-serif'],
        serif: ['Lora', 'serif']
      },
      screens: { '3xl': '1920px' }
    },
  },
  plugins: [
    require("tailwindcss-aspect-ratio"),
    require("tailwindcss-filters")
  ]
}
