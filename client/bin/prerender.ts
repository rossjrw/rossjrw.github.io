import { JSDOM } from "jsdom"
import { writeFileSync } from "fs"

JSDOM.fromFile("./dist/index.html", {
  runScripts: "dangerously",
  resources: "usable",
}).then((dom) => {
  // Wait for Vue to render
  setInterval(() => {
    if (dom.window.prerenderedString) {
      const prerenderedString = dom.window.prerenderedString

      // Mark the output as prerendered
      const marker = dom.window.document.createElement("script")
      marker.textContent = "var _PRERENDERED_ = true;"
      dom.window.document.head.appendChild(marker)

      // Insert the prerendered string
      dom.window.document.querySelector("#app").innerHTML =
        prerenderedString

      const html = dom.serialize()

      writeFileSync("./dist/index.html", html)
      process.exit()
    }
  }, 100)
})

// If rendering fails, cancel instead of waiting forever
setTimeout(() => {
  throw new Error("Timed out")
}, 10000)
