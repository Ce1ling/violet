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
  size: '20px',
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
  <i class="vi-icon" :title="props.name">
    <Iconify class="icon" :icon="iconName" :class="{ 'icon-loading': loading }"/>
  </i>
</template>

<style lang='scss'>
@keyframes loading {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}

.icon-loading {
  animation: loading v-bind(loadingDuration) infinite linear;
}

.vi-icon {
  font-style: normal;
  .icon {
    fill: currentColor;
    transition: color .2s;
    color: v-bind(color);
    width: v-bind(size);
    height: v-bind(size);
    cursor: v-bind(cursor);
    &:hover { color: v-bind(getHoverColor); }
  }
}
</style>