import Vue from "vue"
import Vuex from "vuex"

Vue.use(Vuex)

import toml from "toml"

import { State } from './types'
import projects from '!!raw-loader!./projects.toml'

export default new Vuex.Store({
  strict: process.env.NODE_ENV !== 'production',
  state: {
    projects: projects
  } as State
})
