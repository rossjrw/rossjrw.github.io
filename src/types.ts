export interface State {
  projects: Project[]
}

export interface Project {
  id: number
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
