<script setup lang="ts">
import { computed } from 'vue'

import type { FlexProps, FlexSlots } from './flex'


const props = withDefaults(defineProps<FlexProps>(), {
  direction: 'row',
  flex: '1',
  gap: '0'
})

defineSlots<FlexSlots>()

const flexStyle = computed(() => ({
  flexDirection: props.direction,
  justifyContent: props.justify,
  alignItems: props.align,
  flex: props.flex,
  gap: props.gap
}))
</script>

<template>
  <div class="vi-flex" :style="flexStyle">
    <slot />
  </div>
</template>

<style lang="scss">
.vi-flex {
  display: flex;
}
</style>