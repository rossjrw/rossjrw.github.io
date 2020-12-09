import Vue from "vue"
import VueGithubCorners from "vue-gh-corners"
import "fontsource-lora/latin-400.css"
import "fontsource-aileron/latin-400.css"
import "fontsource-aileron/latin-600.css"
import "fontsource-aileron/latin-700.css"

import '@/root.css'
import App from '@/components/App.vue'
import store from '@/store'

Vue.use(VueGithubCorners)

new Vue({
  el: '#app',
  template: '<App/>',
  components: { App },
  store,
  render: h => h(App),
})
