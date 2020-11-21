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
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue"

export default Vue.extend({
  props: {
    name: String,
    value: String,
  }
})
</script>
