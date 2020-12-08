<template>
  <div class="relative">
    <img v-for="(image, index) in getImage(project, func, false, true)"
         class="absolute"
         :key="image"
         :src="image"
         :ref="`image-${index}`"/>
  </div>
</template>

<script lang="ts">
import Vue from "vue"
import gsap from "gsap"

import { getImage } from "@/functions/images"

export default Vue.extend({
  name: "SwipeImage",
  props: [ "project", "func" ],
  methods: { getImage },
  mounted: function (this: Vue) {
    this.$nextTick(() => {
      const count = Object.keys(this.$refs).length
      const holdDuration = 3
      const swipeDuration = 1
      // In order for the animation timeline to loop and overlap with itself,
      // each element needs its own timeline
      const masterTimeline = gsap.timeline()
      // Construct a child timeline for each element
      Object.values(this.$refs).forEach((swipeImage, index) => {
        const timeline = gsap.timeline({
          delay: (holdDuration + swipeDuration) * index - swipeDuration / 2,
          repeat: -1,
          repeatDelay: (
            (holdDuration + swipeDuration) * count -
            holdDuration - 2 * swipeDuration
          )
        })
        // Set clip to top left
        timeline.set(
          swipeImage,
          { clipPath: "polygon(50% -50%, -50% 50%, -150% -50%, -50% -150%)" }
        )
        // Move clip to centre
        timeline.to(
          swipeImage,
          {
            clipPath: "polygon(150% 50%, 50% 150%, -50% 50%, 50% -50%)",
            duration: swipeDuration
          }
        )
        // Hold, then move clip to bottom left
        timeline.to(
          swipeImage,
          {
            clipPath: "polygon(250% 150%, 150% 250%, 50% 150%, 150% 50%)",
            duration: swipeDuration
          },
          `+=${holdDuration}`
        )
        // Attach this element's timeline to the start of the master timeline
        masterTimeline.add(timeline, 0)
      })
    })
  }
})
</script>
