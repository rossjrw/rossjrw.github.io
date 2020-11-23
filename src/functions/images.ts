import { Project, ProjectImageFunc } from  "@/types"

export function hasImage (project: Project, func: ProjectImageFunc): boolean {
  /**
   * Check if a given project has an image that serves the desired function.
   */
  return 'images' in project && project.images.some(
    image => image.func === func
  )
}

export function getImage (project: Project, func: ProjectImageFunc): string {
  /**
   * Get the image of a project that serves the desired function.
   */
  if (!hasImage(project, func)) {
    throw new Error("IMAGE_NOT_FOUND")
  }
  const url = project.images.filter(image => image.func === func)[0].href
  return require('@/assets/projects/' + url)
}
