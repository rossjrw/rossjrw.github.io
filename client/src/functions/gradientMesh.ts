import { Colours } from "@rossjrw/rossjrw.com-shared"

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
  colours = colours.map(colour => {
    if (typeof colour !== 'string') {
      colour = `rgba(${colour.join(", ")}, 1)`
    }
    return colour
  }) as Colours
  const gradients = colours.map(
    (colour, index) => [colour, points[index]]
  ).map(([colour, point]) => {
    const ellipse = `ellipse farthest-side at ${point}, ${colour}, transparent`
    return `radial-gradient(${ellipse})`
  })
  // gradients.push(`linear-gradient(to right, ${colours[0]}, ${colours[0]})`)
  gradients.push(`linear-gradient(to bottom, white, ${colours[0]})`)
  return gradients.join(", ")
}
