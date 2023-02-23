<script setup lang="ts">
import { computed } from 'vue'

interface Props {
  padding?: string
  height?: string
}
const props = defineProps<Props>()

const getHeight = computed(() => props.height || 'var(--vi-footer-height)')
const getPadding = computed(() => props.padding || 'var(--vi-footer-padding)')
</script>

<template>
  <footer class="vi-footer">
    <slot />
  </footer>
</template>

<style lang="scss">
.vi-footer {
  display: block;
  box-sizing: border-box;
  height: v-bind(getHeight);
  padding: v-bind(getPadding);
}
</style>