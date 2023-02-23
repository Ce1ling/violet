<script setup lang="ts">
import { computed } from 'vue'

interface Props {
  padding?: string
  height?: string
}
const props = defineProps<Props>()

const getHeight = computed(() => props.height || 'var(--vi-header-height)')
const getPadding = computed(() => props.padding || 'var(--vi-header-padding)')
</script>

<template>
  <header class="vi-header">
    <slot />
  </header>
</template>

<style lang="scss">
.vi-header {
  display: block;
  box-sizing: border-box;
  height: v-bind(getHeight);
  padding: v-bind(getPadding);
}
</style>