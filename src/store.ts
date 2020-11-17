import Vue from "vue"
import Vuex from "vuex"

import { State } from "@/types"
import { projects } from "@/projects"

Vue.use(Vuex)

export default new Vuex.Store({
  strict: process.env.NODE_ENV !== 'production',
  state: { projects } as State
})
