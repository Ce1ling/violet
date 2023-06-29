<script setup lang="ts">
import { computed } from 'vue'

import type { FooterProps, FooterSlots } from './footer'


const props = defineProps<FooterProps>()

defineSlots<FooterSlots>()

const footerStyle = computed(() => ({
  height: props.height || 'var(--vi-footer-height)',
  padding: props.padding || 'var(--vi-footer-padding)'
}))
</script>

<template>
  <footer class="vi-footer" :style="footerStyle">
    <slot />
  </footer>
</template>

<style lang="scss">
.vi-footer {
  display: block;
  box-sizing: border-box;
}
</style>