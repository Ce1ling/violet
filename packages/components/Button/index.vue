<script setup lang="ts">
import { computed, h } from 'vue'
import { Icon as ViIcon } from '../index'

type Props = {
  type?: 'primary' | 'success' | 'info' | 'warning' | 'danger'
  text?: boolean
  round?: boolean
  circle?: boolean
  disabled?: boolean
  loading?: boolean
  bgColor?: string
  color?: string
  isPrefix?: boolean
}
const props = withDefaults(defineProps<Props>(), {
  type: 'primary',
  text: false,
  round: false,
  circle: false,
  disabled: false,
  loading: false,
  isPrefix: true
})
type Emits = {
  (e: 'click', event: MouseEvent): void
}
const emit = defineEmits<Emits>()

const colorObj = {
  primary: 'var(--primary-color)',
  success: 'var(--success-color)',
  info: 'var(--info-color)',
  warning: 'var(--warning-color)',
  danger: 'var(--danger-color)'
}

const classObj = computed(() => ({
  'text-color': props.text,
  round: props.round,
  circle: props.circle,
  disabled: props.disabled,
  loading: props.loading
}))
const getBgColor = computed(() => props.bgColor 
  ? props.bgColor 
  : colorObj[props.type])
const getColor = computed(() => {
  if (props.text && !props.color) { return colorObj[props.type] }
  return props.color ? props.color : '#fff'
})

const RenderIcon = () => !props.loading || h(ViIcon, { 
  name: 'Loading', 
  size: '16px', 
  cursor: 'wait', 
  loading: true 
}) 
const handleClick = (e: MouseEvent) => props.disabled || emit('click', e)
</script>

<template>
  <button 
    @click="handleClick"
    class="vi-button" 
    :class="classObj">
    <slot name="prefix">
      <RenderIcon v-if="isPrefix" />
    </slot>
    <span>
      <slot></slot>
    </span>
    <slot name="suffix">
      <RenderIcon v-if="!isPrefix" />
    </slot>
  </button>
</template>

<style lang="scss">
.vi-button {
  display: flex;
  justify-content: center;
  align-items: center;
  width: auto;
  gap: 4px;
  font-size: 14px;
  padding: 6px 18px;
  border: none;
  border-radius: var(--border-radius);
  text-align: center;
  cursor: pointer;
  transition: none;
  color: v-bind(getColor);
  background-color: v-bind(getBgColor);
  transition: opacity 0.1s;
  &:hover { opacity: 0.677777; }
  &:active { opacity: 1; }

  // 文字按钮
  &.text-color {
    background-color: transparent;
    color: v-bind(getColor);
  }
  // 圆角按钮
  &.round {
    border-radius: 20px;
  }
  // 圆形按钮
  &.circle {
    width: 38px;
    height: 38px;
    font-size: 12px;
    padding: 8px;
    line-height: 0;
    border-radius: 50%;
  }
  // 加载状态
  &.loading {
    opacity: 0.5;
    cursor: wait;
  }
  // 禁用状态
  &.disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
}
</style>
