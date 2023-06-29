<script setup lang="ts">
import { computed } from 'vue'

import type { HeaderProps, HeaderSlots } from './header'


const props = defineProps<HeaderProps>()

defineSlots<HeaderSlots>()

const headerStyle = computed(() => ({
  height: props.height || 'var(--vi-header-height)',
  padding: props.padding || 'var(--vi-header-padding)'
}))
</script>

<template>
  <header class="vi-header" :style="headerStyle">
    <slot />
  </header>
</template>

<style lang="scss">
.vi-header {
  display: block;
  box-sizing: border-box;
}
</style>