import './root.scss'
import Vue from "vue"

import App from './App.vue'
import store from './store'

const vm = new Vue({
  el: '#app',
  template: '<App/>',
  components: { App },
  store,
  render: h => h(App),
})
