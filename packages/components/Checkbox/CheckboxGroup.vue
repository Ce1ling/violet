<script setup lang="ts">
import { useSlots, h } from 'vue'
import type { VNode } from 'vue'
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

/**
 * `disable` 参数为 `true` 返回一个禁用的 vNode，`false` 返回未禁用的。
 * @param {Object} vNode Vue 虚拟 DOM
 * @param {Boolean} disable 是否为禁用节点
 */
const renderDisabled = (vNode: VNode, disable: boolean) => disable 
  ? h(vNode, { disabled: true }) 
  : h(vNode)

const RenderSlots = () => slots.default && slots.default().map(vNode => {
  console.log('vnode', vNode);
  const nProps = vNode.props as CheckboxProps
  const checkedTotal = slots.default!().filter(n => (n.props as CheckboxProps).modelValue).length
  if (checkedTotal >= props.max) { return renderDisabled(vNode, !nProps.modelValue) }
  if (checkedTotal <= props.min) { return renderDisabled(vNode, nProps.modelValue) }
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