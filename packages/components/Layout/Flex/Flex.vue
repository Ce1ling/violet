<script setup lang="ts">
import { computed } from 'vue'

import type { FlexProps } from './'


const props = withDefaults(defineProps<FlexProps>(), {
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