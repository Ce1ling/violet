<script setup lang="ts">
import { useSlots, h, computed } from 'vue'
import type { VNode } from 'vue'
import type { 
  Props as CheckboxProps, 
  Emits as CheckboxEmits, 
  ModelValue 
} from './index.vue'

interface Props {
  modelValue: string[]
  gap?: string
  min?: number
  max?: number
  isButton?: boolean
}
interface Emits extends CheckboxEmits {}
const props = withDefaults(defineProps<Props>(), {
  gap: '18px',
  min: 0,
  max: Infinity,
  isButton: false
})
const slots = useSlots()
/** 不可将 CheckboxEmits 传入此泛型中，因为 Vue(3.2.41) 泛型暂不支持从其他文件引入的类型 */
const emit = defineEmits<Emits>()

const getGap = computed(() => !props.isButton ? props.gap : '0')

/**
 * `disable` 参数为 `true` 返回一个禁用的 vNode，`false` 返回未禁用的。
 * @param {Object} vNode Vue 虚拟 DOM
 * @param {Boolean} disable 是否为禁用节点
 */
const hRender = (vNode: VNode, disable?: boolean) => h(vNode, { 
  disabled: disable || (vNode.props as CheckboxProps).disabled,
  isBtn: props.isButton,
  modelValue: props.modelValue,
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
  <div class="vi-checkbox-group" :class="{ 'is-button': props.isButton }">
    <RenderSlots />
  </div>
</template>

<style lang="scss">
.vi-checkbox-group {
  display: inline-flex;
  gap: v-bind(getGap);
  &.is-button .vi-checkbox {
    &:first-child {
      border-radius: var(--vi-border-radius) 0 0 var(--vi-border-radius);
    }
    &:last-child {
      border-radius: 0 var(--vi-border-radius) var(--vi-border-radius) 0;
      border-right: 1px solid var(--info-color);
      &.is-checked {
        border-color: var(--primary-color);
      }
    }
  }
}
</style>