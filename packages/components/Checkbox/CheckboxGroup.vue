<script setup lang="ts">
import { useSlots, h } from 'vue'
import type { Props as CheckboxProps } from './index.vue'

interface Props {
  gap?: string
  min?: number
  max?: number
}
const props = withDefaults(defineProps<Props>(), {
  gap: '18px',
  min: 0,
  max: Infinity
})
const slots = useSlots()

const RenderSlots = () => slots.default && slots.default().map(vNode => {
  const nProps = vNode.props as CheckboxProps
  const count = slots.default!().filter(n => (n.props as CheckboxProps).modelValue).length
  if (count >= props.max) {
    return !nProps.modelValue ? h(vNode, { disabled: true }) : h(vNode)
  }
  if (count <= props.min) {
    return nProps.modelValue ? h(vNode, { disabled: true }) : h(vNode)
  }
  return h(vNode)
})
</script>

<template>
  <div class="vi-checkbox-group">
    <RenderSlots />
  </div>
</template>

<style lang="scss">
.vi-checkbox-group {
  line-height: 0;
  display: inline-flex;
  gap: v-bind(gap);
}
</style>