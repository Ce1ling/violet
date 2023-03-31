<script setup lang="ts">
import { computed } from 'vue'

interface Props {
  padding?: string
  height?: string
}
const props = defineProps<Props>()

const getStyles = computed(() => ({
  height: props.height || 'var(--vi-footer-height)',
  padding: props.padding || 'var(--vi-footer-padding)'
}))

</script>

<template>
  <footer class="vi-footer" :style="getStyles">
    <slot />
  </footer>
</template>

<style lang="scss">
.vi-footer {
  display: block;
  box-sizing: border-box;
}
</style>