<script setup lang="ts">
import type { ColProps } from './'


withDefaults(defineProps<ColProps>(), {
  span: 1
})
</script>

<template>
  <div class="vi-col" :style="{ flex: span }">
    <slot />
  </div>
</template>

<style lang="scss">
</style>