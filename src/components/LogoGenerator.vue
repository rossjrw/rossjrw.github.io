<template>
  <div class="hero is-fullheight">
    <div class="hero-body">
      <div class="container has-text-centered">
        <div id="svg-preview" class="level">
          <img class="level-item" style="height: 200px" :src="svgData">
          <img class="level-item" style="height: 120px" :src="svgData">
          <img class="level-item" style="height: 60px" :src="svgData">
          <img class="level-item" style="height: 30px" :src="svgData">
        </div>
        <form class="field">
          <LogoGeneratorColour v-for="(colour, name) in colours"
                               :key="name"
                               :name="name"
                               v-model="colours[name]"
                               @randomise="setRandomColour(name)"/>
          <div class="field-body">
            <div class="field">
              <a class="button is-link is-outlined"
                 @click="setRandomColour()">
                Randomise All
              </a>
            </div>
          </div>
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
  },
  methods: {
    setRandomColour: function (name?: string) {
      if (name) {
        this.colours[name] = this.getRandomColour()
      } else {
        Object.keys(this.colours).forEach(
          (name: string) => { this.colours[name] = this.getRandomColour() }
        )
      }
    },
    getRandomColour: function () {
      return `#${Math.floor(Math.random()*16777215).toString(16)}`
    }
  }
})
</script>
