import Vue from "vue"

import '@/root.scss'
import App from '@/components/App.vue'
import store from '@/store'

new Vue({
  el: '#app',
  template: '<App/>',
  components: { App },
  store,
  render: h => h(App),
})
