<script setup lang="ts">
import { computed } from 'vue'

interface Props {
  direction?: 'row' | 'column' | 'row-reverse' | 'column-reverse'
  justify?: 'start' | 'center' | 'end' | 'space-between' | 'space-around' | 'space-evenly'
  align?: 'start' | 'center' | 'end'
  flex?: string
  gap?: string
}
const props = withDefaults(defineProps<Props>(), {
  direction: 'row',
  flex: '1',
  gap: '0'
})

const getStyles = computed(() => ({
  flexDirection: props.direction,
  justifyContent: props.justify,
  alignItems: props.align,
  flex: props.flex,
  gap: props.gap
}))

</script>

<template>
  <div class="vi-flex" :style="getStyles">
    <slot />
  </div>
</template>

<style lang="scss">
.vi-flex {
  display: flex;
}
</style>