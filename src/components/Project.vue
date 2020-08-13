<template>
  <div>
    {{project.name}} {{project.date}}
    <p v-for="(tech, index) in project.tech" :key="tech">
    <span class="icon">
      <PolyBullet :shape="index + 3" :colour="'black'"/>
    </span>
    {{tech}}
    </p>
  </div>
</template>

<script lang="ts">
import Vue from "vue"

import PolyBullet from '@/components/PolyBullet.vue'

export default Vue.extend({
  name: "Project",
  props: ["project"],
  components: {
    PolyBullet,
  },
})
</script>
