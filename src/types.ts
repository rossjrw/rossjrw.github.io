export interface State {
  projects: ProjectList
}

export interface ProjectList {
  [id: number]: Project
}

export interface Project {
  name: string
  date: string
  tags: string[]
  desc: string
  link: ProjectLink[]
}

export interface ProjectLink {
  name: string
  href: string
}
