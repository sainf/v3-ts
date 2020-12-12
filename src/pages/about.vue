<template>
  <article class="container pt-8 px-4 mx-auto prose">
    <h1>About us</h1>
    <p>
      Quisque id odio. Donec mi odio, faucibus at, scelerisque quis, convallis in, nisi. Donec mi
      odio, faucibus at, scelerisque quis, convallis in, nisi. Maecenas nec odio et ante tincidunt
      tempus. Cras varius. In consectetuer turpis ut velis. s
    </p>
    <p>
      <b>The current count is: {{ count }}</b>
    </p>
    <p>Test Vue readonly (btn copy.count++)</p>
    <p>
      <button class="px-3 py-2 border border-gray-300 rounded-md shadow" @click="copy.count++">
        count is: {{ copy.count }}
      </button>
    </p>
  </article>
</template>
<script lang="ts">
import { defineComponent, readonly } from 'vue'
import { globalState } from '../store/store'

export default defineComponent({
  setup() {
    return {
      copy: readonly(globalState),
    }
  },
})
</script>
