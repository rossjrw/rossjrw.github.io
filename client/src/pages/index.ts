import { createApp } from "vue"
import "@fontsource/lora/latin-400.css"
import "@fontsource/aileron/latin-400.css"
import "@fontsource/aileron/latin-600.css"
import "@fontsource/aileron/latin-700.css"
import "@fontsource/aileron/latin-800.css"
import "@fontsource/libre-franklin/latin-400.css"
import { library } from "@fortawesome/fontawesome-svg-core"
import { faArrowRight } from "@fortawesome/free-solid-svg-icons"
import {
  faPython,
  faGithub,
  faGoogleDrive,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome"

import "@/root.css"
import App from "../components/App.vue"

library.add(faArrowRight, faGoogleDrive, faPython, faGithub, faLinkedinIn)

const app = createApp(App)
app.component("FontAwesomeIcon", FontAwesomeIcon)
app.mount("#app")
