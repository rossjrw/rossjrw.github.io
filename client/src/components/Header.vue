<template>
  <header
    class="
      p-12
      md:my-12
      grid grid-cols-1
      md:grid-cols-3
      gap-8
      justify-evenly
      items-center
      justify-items-center
      max-w-screen-lg
      mx-auto
    "
  >
    <div>
      <img class="max-h-48" src="@/assets/logos/rossjrw.png" />
    </div>
    <div class="text-center">
      <h1 class="text-7xl font-display font-semibold tracking-tight">
        rossjrw
      </h1>
      <p class="text-3xl font-display mt-1 text-center tracking-tight">
        Ross Williams
      </p>
    </div>
    <div class="space-y-2 m-3 flex flex-col items-start">
      <ProjectLink
        :link="{
          name: 'GitHub',
          href: 'https://github.com/rossjrw',
        }"
      />
      <ProjectLink
        :link="{
          name: 'LinkedIn',
          href: 'https://www.linkedin.com/in/rossjrw/',
        }"
      />
    </div>
  </header>
</template>

<script lang="ts">
import { defineComponent } from "vue"

import ProjectLink from "@/components/ProjectLink.vue"

export default defineComponent({
  name: "Header",
  components: { ProjectLink },
})
</script>
