<script setup lang="ts">
import { computed } from 'vue'

interface Props {
  padding?: string
  height?: string
}
const props = defineProps<Props>()

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