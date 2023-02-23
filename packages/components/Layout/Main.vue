<script setup lang="ts">
import { computed } from 'vue'

interface Props {
  padding?: string
}
const props = defineProps<Props>()

const getPadding = computed(() => props.padding || 'var(--vi-main-padding)')
</script>

<template>
  <main class="vi-main">
    <slot />
  </main>
</template>

<style lang="scss">
.vi-main {
  display: block;
  box-sizing: border-box;
  overflow: auto;
  flex: 1;
  padding: v-bind(getPadding);
}
</style>