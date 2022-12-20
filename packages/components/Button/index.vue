<script setup lang="ts">
import { computed, h, reactive } from 'vue'
import { Icon as ViIcon } from '../index'

type Props = {
  type?: string
  text?: boolean
  round?: boolean
  circle?: boolean
  disabled?: boolean
  loading?: boolean
  bgColor?: string
  color?: string
  prefix?: boolean
}
const props = withDefaults(defineProps<Props>(), {
  type: 'primary',
  text: false,
  round: false,
  circle: false,
  disabled: false,
  loading: false,
  prefix: true
})
const emit = defineEmits(['click'])

const color = reactive({
  primary: '#802ae8',
  success: '#72d342',
  warning: '#e2b72b',
  danger: '#e25f2b'
})

const buttonClass = computed(() => {
  const classList: string[] = []

  if (props.text) { classList.push('text-color') }
  if (props.round) { classList.push('round') }
  if (props.circle) { classList.push('circle') } 
  if (props.disabled) { classList.push('disabled') }
  if (props.loading) { classList.push('loading') }

  return classList
})
const getBgColor = computed(() => props.bgColor 
  ? props.bgColor 
  : color[props.type as keyof typeof color]
)
const getColor = computed(() => {
  if (props.text && !props.color) { return color[props.type as keyof typeof color] }
  return props.color ? props.color : '#fff'
})

const RenderIcon = () => {
  if (!props.loading) return null

  return h(ViIcon, {
    name: 'loading',
    size: '16px',
    cursor: 'wait',
    loading: true
  })
}
const handleClick = (e: MouseEvent) => !props.disabled ? emit('click', e) : null
</script>

<template>
  <button 
    @click="handleClick"
    class="vi-button" 
    :class="buttonClass">
    <slot name="prefix">
      <RenderIcon v-if="prefix" />
    </slot>
    <span>
      <slot></slot>
    </span>
    <slot name="suffix">
      <RenderIcon v-if="!prefix" />
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
