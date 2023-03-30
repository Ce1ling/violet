<script setup lang="ts">
import { useSlots, h, computed } from 'vue'

import type { VNode } from 'vue'
import type { 
  ModelValue, 
  Props as CheckboxProps, 
  Emits as CheckboxEmits
} from './index.vue'

interface Props {
  modelValue: string[]
  gap?: string
  min?: number
  max?: number
  isBtn?: boolean
  border?: boolean
}
interface Emits extends CheckboxEmits {}
const props = withDefaults(defineProps<Props>(), {
  gap: '18px',
  min: 0,
  max: Infinity,
  isBtn: false,
  border: false
})
const slots = useSlots()
/** 不可将 CheckboxEmits 传入此泛型中，因为 Vue(3.2.41) 泛型暂不支持从其他文件引入的类型 */
const emit = defineEmits<Emits>()

const getClasses = computed(() => ({ 
  'is-button': props.isBtn 
}))
const getStyles = computed(() => ({
  gap: !props.isBtn ? props.gap : '0'
}))

/**
 * 渲染 VNode
 * @param {Object} vNode Vue 虚拟 DOM
 * @param {Boolean} disable 是否为禁用节点，为 `true` 返回一个禁用的 vNode，`false` 返回未禁用的。
 */
const hRender = (vNode: VNode, disable?: boolean) => h(vNode, { 
  disabled: disable || (vNode.props as CheckboxProps).disabled,
  modelValue: props.modelValue,
  isBtn: props.isBtn,
  border: props.border,
  'onUpdate:modelValue': (val: ModelValue) => emit('update:modelValue', val)
})

const RenderSlots = () => slots.default && slots.default().map(vNode => {
  const vProps = vNode.props as CheckboxProps
  const checkedTotal = props.modelValue.length
  const checked = props.modelValue.filter(v => v === vProps.label).length

  if (checkedTotal >= props.max) { return hRender(vNode, !checked) }
  if (checkedTotal <= props.min) { return hRender(vNode, !!checked) }

  return hRender(vNode)
})

</script>

<template>
  <div class="vi-checkbox-group" :class="getClasses" :style="getStyles">
    <RenderSlots />
  </div>
</template>

<style lang="scss">
.vi-checkbox-group {
  display: inline-flex;
  &.is-button .vi-checkbox {
    &:first-child {
      border-radius: var(--vi-base-radius) 0 0 var(--vi-base-radius);
    }
    &:last-child {
      border-radius: 0 var(--vi-base-radius) var(--vi-base-radius) 0;
      border-right: 1px solid var(--vi-color-info);
      &.is-checked {
        border-color: var(--vi-color-primary);
      }
    }
  }
}
</style>