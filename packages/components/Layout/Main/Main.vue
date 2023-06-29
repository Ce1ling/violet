<script setup lang="ts">
import { computed } from 'vue'

import type { MainProps, MainSlots } from './main'


const props = defineProps<MainProps>()

defineSlots<MainSlots>()

const mainStyle = computed(() => ({
  padding: props.padding || 'var(--vi-main-padding)'
}))
</script>

<template>
  <main class="vi-main" :style="mainStyle">
    <slot />
  </main>
</template>

<style lang="scss">
.vi-main {
  display: block;
  box-sizing: border-box;
  overflow: auto;
  flex: 1;
}
</style>