import { Project, ProjectList } from '@/types'

export function makeProjectList (
  projects: Project[],
): ProjectList {
  return projects.reduce(
    (acc: ProjectList, project: Project, index: number) => {
      acc[index] = project
      return acc
    }, []
  )
}
