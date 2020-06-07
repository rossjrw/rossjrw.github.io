import Vue from "vue"
import Vuex from "vuex"

Vue.use(Vuex)

import toml from "toml"

import { State, Project, ProjectList } from './types'
import projects from '!!raw-loader!./projects.toml'

function makeProjectList(projects: Project[]): ProjectList {
  return projects.reduce(
    (acc: ProjectList, project: Project, index: number) => {
      acc[index] = project
      return acc
    }, {})
}

export default new Vuex.Store({
  strict: process.env.NODE_ENV !== 'production',
  state: {
    projects: makeProjectList(toml.parse(projects).project)
  } as State
})
