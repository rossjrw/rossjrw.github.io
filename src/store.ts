import Vue from "vue"
import Vuex from "vuex"

Vue.use(Vuex)

import { State } from './types'

export default new Vuex.Store({
  strict: process.env.NODE_ENV !== 'production',
  state: {
    projects: []
  } as State
})
