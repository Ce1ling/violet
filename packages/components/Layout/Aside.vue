<script setup lang="ts">
import { computed } from 'vue'

interface Props {
  width?: string
}
const props = defineProps<Props>()

const getWidth = computed(() => props.width || 'var(--vi-aside-width)')
</script>

<template>
  <aside class="vi-aside">
    <slot />
  </aside>
</template>

<style lang="scss">
.vi-aside {
  display: block;
  box-sizing: border-box;
  overflow: auto;
  width: v-bind(getWidth);
}
</style>