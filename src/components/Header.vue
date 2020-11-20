<template>
  <div class="header has-text-centered">
    <div class="logo-container">
      <img src="@/assets/logos/rossjrw.png"/>
    </div>
    <div class="name-container">
      <p class="title is-2">
        rossjrw
      </p>
      <p class="subtitle is-5">
        Ross Williams
      </p>
    </div>
    <div class="bio-container">
      <p>
        Test
      </p>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue"

export default Vue.extend({})
</script>

<style>
.header {
  padding: 3rem;
  margin-bottom: 2rem;
}

.header img {
  max-width: 12rem;
}
</style>
