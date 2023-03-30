<script setup lang="ts">
import { computed } from 'vue'

interface Props {
  gap?: string
  justify?: 'start' | 'center' | 'end' | 'space-between' | 'space-around' | 'space-evenly'
  align?: 'start' | 'center' | 'end'
}
const props = withDefaults(defineProps<Props>(), {
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