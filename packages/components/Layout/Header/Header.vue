<script setup lang="ts">
import { computed } from 'vue'

import type { HeaderProps } from './'


const props = defineProps<HeaderProps>()

const getStyles = computed(() => ({
  height: props.height || 'var(--vi-header-height)',
  padding: props.padding || 'var(--vi-header-padding)'
}))

</script>

<template>
  <header class="vi-header" :style="getStyles">
    <slot />
  </header>
</template>

<style lang="scss">
.vi-header {
  display: block;
  box-sizing: border-box;
}
</style>