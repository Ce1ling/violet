<script setup lang="ts">
import { ref, computed, reactive } from 'vue'

type Props = {
  type?: string
  text?: boolean
  round?: boolean
  circle?: boolean
  disabled?: boolean
  loading?: boolean
  bgColor?: string
  color?: string
}
const props = withDefaults(defineProps<Props>(), {
  type: 'primary',
  text: false,
  round: false,
  circle: false,
  disabled: false,
  loading: false
})
const emit = defineEmits(['click'])


const color = reactive({
  primary: '#802ae8',
  success: '#72d342',
  warning: '#e2b72b',
  danger: '#e25f2b'
})

const buttonClass = computed(() => {
  const classList = [`vi-button__${props.type}`]

  if (props.text) { classList.push('text-color') }
  if (props.round) { classList.push('round') }
  if (props.circle) { classList.push('circle') } 
  if (props.disabled) { classList.push('disabled') }
  if (props.loading) { classList.push('loading') }

  return classList
})
const getBgColor = computed(() => {
  if (props.bgColor) {
    return props.bgColor
  }
  return color[props.type]
})
const getColor = computed(() => {
  if (props.color) {
    return props.color
  }
  return '#ffffff'
})

const handleClick = (e: Event) => {
  if (props.disabled) { return false; }
  emit('click', e)
}
</script>

<template>
  <button 
    @click="handleClick"
    class="vi-button" 
    :class="buttonClass">
    <slot></slot>
  </button>
</template>

<style scoped lang="scss">
.vi-button {
  font-size: 14px;
  padding: 8px 18px;
  border: none;
  border-radius: var(--border-raduis);
  text-align: center;
  cursor: pointer;
  transition: none;
  color: v-bind(getColor);
  background-color: v-bind(getBgColor);
  &:hover { filter: brightness(110%); }
  &:active { filter: brightness(100%); }
}
// 文字按钮
.text-color {
  background-color: transparent;
  color: v-bind(getBgColor);
}
// 圆角按钮
.round {
  border-radius: 20px;
}
// 圆形按钮
.circle {
  width: 38px;
  height: 38px;
  font-size: 12px;
  padding: 8px;
  line-height: 0;
  border-radius: 50%;
}
// 加载状态
.loading {
  opacity: 0.5;
  pointer-events: none;
}
// 禁用状态
.disabled {
  opacity: 0.5 !important;
  cursor: not-allowed !important;
  &:hover { filter: brightness(100%); }
}
</style>