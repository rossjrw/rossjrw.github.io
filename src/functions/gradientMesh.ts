import { zip } from "lodash"

import { Colours } from '@/types'

export function gradientMesh (
  colours: Colours,
): string {
  /**
   * From four starting colours, generates a faux gradient mesh that can be
   * applied to an element as a background image.
   *
   * Starting colours should be ordered from light to dark.
   */
  const points = ["top left", "top right", "bottom left", "bottom right"]
  const gradients = zip(colours, points).map(([colour, point]) => {
    if (typeof colour !== 'string') {
      colour = `rgba(${colour.join(", ")}, 0)`
    }
    const ellipse = `ellipse farthest-side at ${point}, ${colour}, transparent`
    return `radial-gradient(${ellipse})`
  })
  // gradients.push(`linear-gradient(to right, ${colours[0]}, ${colours[0]})`)
  gradients.push(`linear-gradient(to bottom, white, ${colours[0]})`)
  console.log(gradients)
  return gradients.join(", ")
}
