<template>
  <div class="hero is-fullheight">
    <div class="hero-body">
      <div class="container has-text-centered">
        <div id="svg-preview">
          <img :src="svgData">
        </div>
        <form class="field">
          <LogoGeneratorColour v-for="(colour, name) in colours"
                               :key="name"
                               :name="name"
                               v-model="colours[name]"/>
        </form>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue"

import LogoGeneratorColour from "@/components/LogoGeneratorColour.vue"
import logoSvg from "!!raw-loader!@/assets/logos/rossjrw.2020.inkscape.svg"

export default Vue.extend({
  name: "LogoGenerator",
  components: { LogoGeneratorColour },
  data() {
    return {
      colours: {
        'cover-fill-grey':    "#757575",
        'cover-border-grey':  "#000000",
        'radiation-lightest': "#ffd687",
        'radiation-lighter':  "#f6c25b",
        'radiation':          "#e1a634",
        'radiation-darker':   "#bd8416",
        'radiation-darkest':  "#b2780b",
      }
    }
  },
  computed: {
    svgData: function () {
      console.log("Updating")
      let svgData = logoSvg
      Object.entries(this.colours).forEach(
        ([name, colour]: [string, string]) => {
          console.log(name, colour)
          svgData = svgData.replace(
            new RegExp(`(id="${name}"[\\s\\S]+?stop-color:)#[0-9a-f]{6}`),
            `$1${colour}`
          )
        }
      )
      return URL.createObjectURL(
        new Blob([svgData], { type: 'image/svg+xml' })
      )
    }
  }
})
</script>
