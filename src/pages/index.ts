import Vue from "vue"
import "fontsource-lora"

import '@/root.css'
import App from '@/components/App.vue'
import store from '@/store'

new Vue({
  el: '#app',
  template: '<App/>',
  components: { App },
  store,
  render: h => h(App),
})
