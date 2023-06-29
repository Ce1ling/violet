<script setup lang="ts">
import { computed } from 'vue'

import type { RowProps, RowSlots } from './row'


const props = withDefaults(defineProps<RowProps>(), {
  gap: '10px',
  justify: 'start',
  align: 'start'
})

defineSlots<RowSlots>()

const rowStyle = computed(() => ({
  gap: props.gap,
  justifyContent: props.justify,
  alignItems: props.align
}))
</script>

<template>
  <div class="vi-row" :style="rowStyle">
    <slot />
  </div>
</template>

<style lang="scss">
.vi-row {
  display: flex;
}
</style>