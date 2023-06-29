<script setup lang="ts">
import type { ColProps, ColSlots } from './col'


withDefaults(defineProps<ColProps>(), {
  span: 1
})

defineSlots<ColSlots>()
</script>

<template>
  <div class="vi-col" :style="{ flex: span }">
    <slot />
  </div>
</template>

<style lang="scss">
</style>