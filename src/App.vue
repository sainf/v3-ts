<template>
  <div class="w-full h-full">
    <Menu />
    <RouterView class="w-full h-full container pt-8 mx-auto" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import Menu from './components/Menu.vue'

export default defineComponent({
  components: {
    Menu,
  },
})
</script>
