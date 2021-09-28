import Vue from "vue"
import VueGithubCorners from "vue-gh-corners"

import "@/root.css"
import LogoGenerator from "@/components/LogoGenerator.vue"

Vue.use(VueGithubCorners)

new Vue({
  el: "#app",
  template: "<LogoGenerator/>",
  components: { LogoGenerator },
  render: (h) => h(LogoGenerator),
})
