<template>
  <div class="field is-horizontal">
    <div class="field-label is-normal">
      <label class="label">
        {{ name }}
      </label>
    </div>
    <div class="field-body">
      <div class="field">
        <input type="color"
               class="input"
               :value="value"
               @change="$emit('input', $event.target.value)">
      </div>
      <div class="field is-narrow">
        <input type="text"
               class="input"
               :value="value"
               @input="$emit('input', $event.target.value)">
      </div>
      <div class="field is-narrow">
        <a class="button is-link is-outlined"
           @click="$emit('randomise')">
          Randomise
        </a>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue"

export default Vue.extend({
  props: {
    name: String,
    value: String,
  },
  methods: {
    getRandomColour: function () {
      return `#${Math.floor(Math.random()*16777215).toString(16)}`
    }
  }
})
</script>
