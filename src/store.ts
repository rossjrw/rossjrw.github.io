import Vue from "vue"
import Vuex from "vuex"
import toml from "toml"

import { State } from '@/types'
import projects from '!!raw-loader!./projects.toml'
import { makeProjectList } from '@/functions/parseProjects'

Vue.use(Vuex)

export default new Vuex.Store({
  strict: process.env.NODE_ENV !== 'production',
  state: {
    projects: makeProjectList(toml.parse(projects).project)
  } as State
})
