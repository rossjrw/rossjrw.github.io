<template>
  <div class="h-screen">
    <github-corners repo="rossjrw/rossjrw.github.io"/>
    <div class="py-12 px-6">
      <div class="container mx-auto max-w-screen-lg">
        <div class="flex items-center justify-evenly">
          <img :src="svgData" class="h-48">
          <img :src="svgData" class="h-28">
          <img :src="svgData" class="h-14">
          <img :src="svgData" class="h-8">
        </div>
        <form>
          <LogoGeneratorColour v-for="(colour, index) in colours"
                               :key="colour"
                               :name="colour"
                               v-model="hexes[index]"
                               @randomise="setRandomColour(colour)"/>
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

import LogoGeneratorColour from "@/components/LogoGeneratorColour.vue"
import logoSvg from "!!raw-loader!@/assets/logos/rossjrw.2020.inkscape.svg"

export default Vue.extend({
  name: "LogoGenerator",
  components: { LogoGeneratorColour },
  data() {
    return {
      colours: [
        'cover-fill-grey',
        'cover-border-grey',
        'radiation-lightest',
        'radiation-lighter',
        'radiation',
        'radiation-darker',
        'radiation-darkest',
      ],
      hexes: [
        "#757575",
        "#000000",
        "#ffd687",
        "#f6c25b",
        "#e1a634",
        "#bd8416",
        "#b2780b",
      ],
    }
  },
  computed: {
    svgData () {
      let svgData = logoSvg
      this.colours.forEach(
        (name, index) => {
          svgData = svgData.replace(
            new RegExp(`(id="${name}"[\\s\\S]+?stop-color:)#[0-9a-f]{6}`),
            `$1${this.hexes[index]}`
          )
        }
      )
      return URL.createObjectURL(
        new Blob([svgData], { type: 'image/svg+xml' })
      )
    }
  },
  methods: {
    setRandomColour: function (colour?: string) {
      if (colour) {
        this.hexes.splice(
          this.colours.indexOf(colour),
          1,
          this.getRandomColour()
        )
      } else {
        this.hexes = Array.from({ length: 7 }, this.getRandomColour)
      }
    },
    getRandomColour: function () {
      const hex = Math.floor(Math.random()*2**24)
      return `#${hex.toString(16).padStart(6, "0")}`
    }
  }
})
</script>
