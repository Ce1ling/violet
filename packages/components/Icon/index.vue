<script setup lang="ts">
import { computed, ref } from "vue"

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
const iconName = computed(() => `#icon-${props.name}`)
const isLoading = computed(() => (props.name === 'loading') && props.loading)
</script>

<template>
  <svg 
    class="icon" v-bind="$attrs" 
    :class="{ 'icon-loading': isLoading }">
    <use :xlink:href="iconName" />
  </svg>
</template>

<style scoped lang='scss'>
@keyframes loading {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

.icon-loading {
  animation: loading 2s infinite linear;
}

.icon {
  color: v-bind(color);
  width: v-bind(size);
  height: v-bind(size);
  cursor: v-bind(cursor);
  fill: currentColor;
  vertical-align: middle;
  transition: color .2s;
  &:hover { color: v-bind(getHoverColor); }
}
</style>