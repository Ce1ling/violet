<script setup lang="ts">
import { computed } from "vue"
import { Icon as Iconify } from '@iconify/vue'
import { iconMaps } from './iconMaps'

import type { IconProps } from './icon'


const props = withDefaults(defineProps<IconProps>(), {
  size: '14px',
  color: 'inherit',
  cursor: 'pointer',
  loading: false,
  duration: 2
})

const iconName = computed(() => iconMaps[props.name])
const getClasses = computed(() => ({ 'is-loading': props.loading }))
const getStyles = computed(() => ({
  width: props.size,
  height: props.size,
  cursor: props.cursor,
  '--vi-icon-color': props.color,
  '--vi-icon-hover-color': props.hoverColor ? props.hoverColor : props.color,
  '--vi-icon-loading-duration': props.duration + 's'
}))
</script>

<template>
  <i class="vi-icon">
    <Iconify 
      class="vi-icon__svg" 
      :class="getClasses" 
      :style="getStyles"
      :icon="iconName" 
    />
  </i>
</template>

<style lang='scss'>
.vi-icon {
  display: block;
  font-style: normal;
  &__svg {
    fill: currentColor;
    color: var(--vi-icon-color);
    &:hover { color: var(--vi-icon-hover-color); }
  }
  .is-loading {
    animation: vi-icon-rotate var(--vi-icon-loading-duration) infinite linear;
  }
}

@keyframes vi-icon-rotate {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}
</style>