<template>
  <div class="container pt-8 mx-auto">
    <HelloWorld msg="Hello Vue 3 + Vite + Tailwind CSS + Router" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import HelloWorld from '../components/HelloWorld.vue'

export default defineComponent({
  components: {
    HelloWorld,
  },
})
</script>
