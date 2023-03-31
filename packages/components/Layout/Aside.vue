<script setup lang="ts">
import { computed } from 'vue'

interface Props {
  width?: string
}
const props = defineProps<Props>()

const getStyles = computed(() => ({
  width: props.width || 'var(--vi-aside-width)'
}))

</script>

<template>
  <aside class="vi-aside" :style="getStyles">
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