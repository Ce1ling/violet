<script setup lang="ts">
import { computed } from 'vue'

import type { MainProps } from './'


const props = defineProps<MainProps>()

const getStyles = computed(() => ({
  padding: props.padding || 'var(--vi-main-padding)'
}))

</script>

<template>
  <main class="vi-main" :style="getStyles">
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