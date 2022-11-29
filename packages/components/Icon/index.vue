<script setup lang="ts">
import { computed, ref } from "vue"

type Props = {
  name: string
  size: string
  color?: string
  cursor?: string
}
const props = withDefaults(defineProps<Props>(), {
  size: '20px',
  color: '#000000',
  cursor: 'auto'
})

const iconName = computed(() => `#icon-${props.name}`)
</script>

<template>
  <svg class="icon" v-bind="$attrs" :style="{ color, width: size, height: size }">
    <use :xlink:href="iconName" />
  </svg>
</template>

<style scoped lang='scss'>
.icon {
  fill: currentColor;
  vertical-align: middle;
  cursor: v-bind(cursor);
}
</style>