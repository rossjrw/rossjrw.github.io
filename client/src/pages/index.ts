import { createSSRApp } from "vue"
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
import { renderToString } from "@vue/server-renderer"

import "@/root.css"
import App from "../components/App.vue"

// Prerendered marker is set during the prerender script, or undefined if
// we are not prerendering (during development)
declare let _PRERENDERED_: boolean | undefined
const prerendered = "_PRERENDERED_" in window && _PRERENDERED_

const app = createSSRApp(App)

library.add(faArrowRight, faGoogleDrive, faPython, faGithub, faLinkedinIn)
app.component("FontAwesomeIcon", FontAwesomeIcon)

if (!prerendered) {
  // If we are not prerendered, expose the prerendered string so that the
  // prerender script can pick it up later
  interface PrerenderWindow extends Window {
    prerenderedString: string
  }
  // TODO Try to extract this at some point - the function adds 11KiB to
  // the bundle
  renderToString(app).then(
    (str) =>
      ((window as unknown as PrerenderWindow).prerenderedString = str)
  )
}

app.mount("#app", Boolean(prerendered))
