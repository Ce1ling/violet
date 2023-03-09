<script setup lang="ts">
import { computed } from "vue"
import { Icon as Iconify } from '@iconify/vue'
import { iconMaps } from './iconMaps'

type Props = {
  name: string
  size?: string
  color?: string
  cursor?: string
  hoverColor?: string
  loading?: boolean
  duration?: number
}
const props = withDefaults(defineProps<Props>(), {
  size: '14px',
  color: 'inherit',
  cursor: 'pointer',
  loading: false,
  duration: 2
})

const getHoverColor = computed(() => props.hoverColor ? props.hoverColor : props.color)
const iconName = computed(() => iconMaps[props.name])
const loadingDuration = computed(() => props.duration + 's')
</script>

<template>
  <i class="vi-icon">
    <Iconify 
      class="vi-icon__svg" 
      :class="{ 'vi-icon-loading': loading }" 
      :icon="iconName" 
    />
  </i>
</template>

<style lang='scss'>
@keyframes vi-icon-rotate {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}

.vi-icon {
  display: inline-block;
  font-style: normal;
  &__svg {
    fill: currentColor;
    color: v-bind(color);
    width: v-bind(size);
    height: v-bind(size);
    cursor: v-bind(cursor);
    &:hover { color: v-bind(getHoverColor); }
  }
  &-loading {
    animation: vi-icon-rotate v-bind(loadingDuration) infinite linear;
  }
}
</style>