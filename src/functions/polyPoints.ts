import { range } from "lodash"

export function polyPoints (
  shape: number,
): string {
  /**
   * Takes a shape count and converts to polygon coordinates, relative to a
   * 100x100 viewBox.
   */
  const size = 100
  const points: [number, number][] = range(0, shape).map(
    index => {
      const angle = index * 2 * Math.PI / shape - Math.PI / 2
      return [
        Math.cos(angle) * size/2 + size/2,
        Math.sin(angle) * size/2 + size/2,
      ]
    }
  )
  return polystring(points)
}

function polystring (
  points: [number, number][],
): string {
  return points.map(point => point.join(",")).join(" ")
}
