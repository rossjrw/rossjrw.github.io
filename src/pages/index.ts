import Vue from "vue"
import VueGithubCorners from "vue-gh-corners"
import "fontsource-lora/latin-400.css"
import "fontsource-aileron/latin-400-normal.css"
import "fontsource-aileron/latin-600-normal.css"
import "fontsource-aileron/latin-700-normal.css"
import "fontsource-aileron/latin-800-normal.css"
import "fontsource-metropolis/all-400-normal.css"
import { library } from "@fortawesome/fontawesome-svg-core"
import { faArrowRight } from "@fortawesome/free-solid-svg-icons"
import {
  faPython, faGithub, faGoogleDrive, faLinkedinIn
} from "@fortawesome/free-brands-svg-icons"

import '@/root.css'
import App from '@/components/App.vue'
import store from '@/store'

library.add(faArrowRight, faGoogleDrive, faPython, faGithub, faLinkedinIn)

Vue.use(VueGithubCorners)

new Vue({
  el: '#app',
  template: '<App/>',
  components: { App },
  store,
  render: h => h(App),
})
