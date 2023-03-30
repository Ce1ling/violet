<script setup lang="ts">
import { computed } from 'vue'

interface Props {
  gap?: string
  justify?: 'flex-start' | 'center' | 'flex-end' | 'space-between' | 'space-around' | 'space-evenly'
  align?: 'flex-start' | 'center' | 'flex-end'
}
const props = withDefaults(defineProps<Props>(), {
  gap: '10px',
  justify: 'flex-start',
  align: 'flex-start'
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