<script setup lang="ts">
import { computed } from 'vue'

import type { RowProps } from './'


const props = withDefaults(defineProps<RowProps>(), {
  gap: '10px',
  justify: 'start',
  align: 'start'
})

const getStyles = computed(() => ({
  gap: props.gap,
  justifyContent: props.justify,
  alignItems: props.align
}))
</script>

<template>
  <div class="vi-row" :style="getStyles">
    <slot />
  </div>
</template>

<style lang="scss">
.vi-row {
  display: flex;
}
</style>