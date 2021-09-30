<template>
  <div>
    <img
      v-for="(image, index) in getImage(project, func, false, true)"
      class="absolute w-full h-full object-contain"
      :key="image"
      :src="image"
      :ref="`image-${index}`"
    />
  </div>
</template>

<script lang="ts">
import { PropType, defineComponent } from "vue"
import gsap, { Circ } from "gsap"

import { getImage } from "@/functions/images"
import { Project, ProjectImageFunc } from "@/types"

// TODO The space between clips could be configurable

export default defineComponent({
  name: "SwipeImage",
  props: {
    project: Object as PropType<Project>,
    func: String as PropType<ProjectImageFunc>,
  },
  methods: { getImage },
  mounted: function () {
    this.$nextTick(() => {
      const count = Object.keys(this.$refs).length
      const holdDuration = 3
      const swipeDuration = 2
      // In order for the animation timeline to loop and overlap with itself,
      // each element needs its own timeline
      const masterTimeline = gsap.timeline()
      // Construct a child timeline for each element
      Object.values(this.$refs).forEach(
        (swipeImage: HTMLImageElement, index) => {
          // Initial state
          gsap.set(swipeImage, {
            clipPath:
              "polygon(50% -50%, -50% 50%, -160% -60%, -60% -160%)",
          })
          const timeline = gsap.timeline({
            delay:
              (holdDuration + swipeDuration) * index - swipeDuration / 2,
            repeat: -1,
            repeatDelay:
              (holdDuration + swipeDuration) * count -
              holdDuration -
              2 * swipeDuration,
            defaults: { duration: swipeDuration, ease: Circ.easeInOut },
          })
          // Set clip to top left
          timeline.set(swipeImage, {
            clipPath:
              "polygon(50% -50%, -50% 50%, -140% -40%, -40% -140%)",
          })
          // Move clip to centre
          timeline.to(swipeImage, {
            clipPath: "polygon(150% 50%, 50% 150%, -40% 60%, 60% -40%)",
          })
          // Hold, then move clip to bottom left
          timeline.to(
            swipeImage,
            {
              clipPath:
                "polygon(250% 150%, 150% 250%, 60% 160%, 160% 60%)",
            },
            `+=${holdDuration}`
          )
          // Attach this element's timeline to the start of the master timeline
          masterTimeline.add(timeline, 0)
        }
      )
    })
  },
})
</script>
