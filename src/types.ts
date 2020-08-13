export type Tag =
  // Project status - must have exactly 1
  | "completed"
  | "working"
  | "unfinished"
  | "abandoned"
  // Other tags
  | "utility"

export type State = {
  projects: ProjectList
}

export type ProjectList = {
  [id: number]: Project
}

export type Project =  {
  name: string
  date: number[][]
  tags: Tag[]
  desc: string
  link: ProjectLink[]
}

export type ProjectLink = {
  name: string
  href: string
}

