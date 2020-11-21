import Vue from "vue"

import "@/root.scss"
import LogoGenerator from "@/components/LogoGenerator.vue"

new Vue({
  el: "#app",
  template: "<LogoGenerator/>",
  components: { LogoGenerator },
  render: h => h(LogoGenerator),
})
