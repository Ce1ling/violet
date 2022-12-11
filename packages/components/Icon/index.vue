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
}
const props = withDefaults(defineProps<Props>(), {
  size: '20px',
  color: '#000000',
  cursor: 'pointer',
  loading: true
})

const getHoverColor = computed(() => props.hoverColor ? props.hoverColor : props.color)
const iconName = computed(() => iconMaps[props.name])
const isLoading = computed(() => (props.name === 'loading') && props.loading)
</script>

<template>
  <i class="vi-icon" :title="props.name">
    <Iconify class="icon" :icon="iconName" :class="{ 'icon-loading': isLoading }"/>
  </i>
</template>

<style scoped lang='scss'>
@keyframes loading {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}

.icon-loading {
  animation: loading 2s infinite linear;
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