<template>
  <div class="h-screen">
    <GithubCorner url="https://github.com/rossjrw/rossjrw.github.io"
                  colorScheme="black"/>
    <div class="py-12 px-6">
      <div class="container mx-auto max-w-screen-lg">
        <div class="flex items-center justify-evenly">
          <img :src="svgData" class="h-48">
          <img :src="svgData" class="h-28">
          <img :src="svgData" class="h-14">
          <img :src="svgData" class="h-8">
        </div>
        <form>
          <LogoGeneratorColour v-for="(colour, name) in colours"
                               :key="name"
                               :name="name"
                               v-model="colours[name]"
                               @randomise="setRandomColour(name)"/>
          <div>
            <div class="flex justify-center">
              <button type="button"
                      class="border border-blue-700 rounded px-5 py-2 m-1
                             text-blue-700"
                      @click="setRandomColour()">
                Randomise All
              </button>
              <a class="border border-green-500 rounded px-5 py-2 m-1
                        text-green-500"
                 :href="svgData"
                 download>
                Download SVG
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
import GithubCorner from "vue-github-corners"

import LogoGeneratorColour from "@/components/LogoGeneratorColour.vue"
import logoSvg from "!!raw-loader!@/assets/logos/rossjrw.2020.inkscape.svg"

export default Vue.extend({
  name: "LogoGenerator",
  components: { LogoGeneratorColour, GithubCorner },
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
      return `#${(Math.floor(Math.random()*2**24)).toString(16).padStart(6, 0)}`
    }
  }
})
</script>
