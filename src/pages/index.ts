import Vue from "vue"
import "fontsource-lora/latin-400.css"
import "fontsource-aileron/latin-400.css"
import "fontsource-aileron/latin-600.css"
import "fontsource-aileron/latin-700.css"
import "fontsource-aileron/latin-800.css"
import { library } from "@fortawesome/fontawesome-svg-core"
import { faArrowRight } from "@fortawesome/free-solid-svg-icons"

import '@/root.css'
import App from '@/components/App.vue'
import store from '@/store'

library.add(faArrowRight)

new Vue({
  el: '#app',
  template: '<App/>',
  components: { App },
  store,
  render: h => h(App),
})
