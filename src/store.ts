import Vue from "vue"
import Vuex from "vuex"

Vue.use(Vuex)

import toml from "toml"

import { State, Project } from './types'
import projects from '!!raw-loader!./projects.toml'

export default new Vuex.Store({
  strict: process.env.NODE_ENV !== 'production',
  state: {
    projects: toml.parse(projects).map(
      (project: Project, index: number) => {
        project.id = index
        return project
      }
    )
  } as State
})
