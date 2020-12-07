import { Project, ProjectImageFunc, ProjectImage } from  "@/types"

function matchingImages (
  project: Project,
  func: ProjectImageFunc,
  wantsFallback = false
): ProjectImage[] {
  return project.images.filter(image => {
    if (wantsFallback) {
      return (
        image.func === func &&
        'fallback' in image &&
        image.fallback === wantsFallback
      )
    }
    return image.func === func
  })
}

export function hasImage (project: Project, func: ProjectImageFunc): boolean {
  /**
   * Check if a given project has an image that serves the desired function.
   */
  return 'images' in project && matchingImages(project, func).length > 0
}

export function getImage (
  project: Project,
  func: ProjectImageFunc,
  wantsFallback: boolean,
  returnAllImages: true
): string[] | undefined
export function getImage (
  project: Project,
  func: ProjectImageFunc,
  wantsFallback: boolean,
  returnAllImages: false
): string | undefined
export function getImage (
  project: Project,
  func: ProjectImageFunc,
  wantsFallback: boolean,
  returnAllImages = false
): string[] | string | undefined {
  /**
   * Get the image of a project that serves the desired function.
   */
  const images = matchingImages(project, func, wantsFallback)
  if (images.length === 0) {
    return undefined
  }
  if (returnAllImages) {
    return images.map(image => require('@/assets/projects/' + image.href))
  }
  return require('@/assets/projects/' + images[0].href)
}

export function imageType (project: Project, func: ProjectImageFunc): string {
  /**
   * Get the filetype of an image.
   */
  const url = project.images.filter(image => image.func === func)[0].href
  return url.split(".").slice(-1)[0]
}
