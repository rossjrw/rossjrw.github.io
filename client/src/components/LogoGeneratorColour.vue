<template>
  <div class="flex items-center">
    <p class="font-bold w-40">{{ name }}</p>
    <input
      type="color"
      class="flex-grow border border-gray-200 rounded px-5 py-2 h-10 m-1"
      v-model="colorValue"
    />
    <input
      type="text"
      class="flex-none border border-gray-200 rounded px-5 py-2 h-10 m-1"
      v-model="colorValue"
    />
    <div class="flex-none">
      <button
        type="button"
        class="
          border border-blue-700
          rounded
          px-5
          py-2
          h-10
          m-1
          text-blue-700
        "
        @click="$emit('randomise')"
      >
        Randomise
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue"

export default defineComponent({
  props: {
    name: String,
    modelValue: String,
  },
  computed: {
    colorValue: {
      get(): string {
        return this.modelValue
      },
      set(input: string) {
        this.$emit("update:modelValue", input)
      },
    },
  },
})
</script>
