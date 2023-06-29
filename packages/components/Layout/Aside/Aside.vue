<script setup lang="ts">
import { computed } from 'vue'

import type { AsideProps, AsideSlots } from './aside'


const props = defineProps<AsideProps>()

defineSlots<AsideSlots>()

const asideStyle = computed(() => ({
  width: props.width || 'var(--vi-aside-width)'
}))
</script>

<template>
  <aside class="vi-aside" :style="asideStyle">
    <slot />
  </aside>
</template>

<style lang="scss">
.vi-aside {
  display: block;
  box-sizing: border-box;
  overflow: auto;
}
</style>