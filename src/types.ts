export interface State {
  projects: Project[]
}

export interface Project {
  name: string
  date: string
  desc: string
  link: ProjectLink[]
}

export interface ProjectLink {
  name: string
  href: string
}
