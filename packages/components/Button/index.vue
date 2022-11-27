<script setup lang="ts">
import { computed } from 'vue'

type Props = {
  type?: string
  text?: boolean
  round?: boolean
  circle?: boolean
  disabled?: boolean
  loading?: boolean
}
const props = withDefaults(defineProps<Props>(), {
  type: 'primary',
  text: false,
  round: false,
  circle: false,
  disabled: false,
  loading: false
})
const emits = defineEmits(['click'])


const buttonClass = computed(() => {
  const classList = [`vi-button__${props.type}`]

  if (props.text) { classList.push(`text-color-${props.type}`) }
  if (props.round) { classList.push('round') }
  if (props.circle) { classList.push('circle') } 
  if (props.disabled) { classList.push('disabled') }
  if (props.loading) { classList.push('loading') }

  return classList
})

const handleClick = (e: Event) => {
  if (props.disabled) { return false; }
  emits('click', e)
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
$success-pri-color: #72d342;
$success-sec-color: #7be247;

$warn-pri-color: #e2b72b;
$warn-sec-color: #eec12d;

$danger-pri-color: #e25f2b;
$danger-sec-color: #f76d37;

.vi-button {
  font-size: 14px;
  padding: 8px 18px;
  border: none;
  border-radius: var(--border-raduis);
  text-align: center;
  cursor: pointer;
  transition: none;
  color: #fff;
  &:hover {
    color: #fff;
    background-color: var(--secondary-color);
  }
  &:active { background-color: var(--primary-color); }
  // 按钮种类
  &__normal {
    color: #000;
    background-color: #fff;
    border: 1px solid #ddd;
  }
  &__primary {
    background-color: var(--primary-color);
  }
  &__success {
    background-color: $success-pri-color;
    &:hover { background-color: $success-sec-color; }
    &:active { background-color: $success-pri-color; }
  }
  &__warn {
    background-color: $warn-pri-color;
    &:hover { background-color: $warn-sec-color; }
    &:active { background-color: $warn-pri-color; }
  }
  &__danger {
    background-color: $danger-pri-color;
    &:hover { background-color: $danger-sec-color; }
    &:active { background-color: $danger-pri-color; }
  }
}
.text-color {
  &-primary {
    background-color: transparent;
    color: var(--primary-color);
  }
  &-success {
    background-color: transparent;
    color: $success-pri-color;
  }
  &-warn {
    background-color: transparent;
    color: $warn-pri-color;
  }
  &-danger {
    background-color: transparent;
    color: $danger-pri-color;
  }
}
[class*="text-color"] {
  transition: background-color .2s;
}
.round {
  border-radius: 20px;
}
.circle {
  width: 48px;
  height: 48px;
  padding: 8px;
  line-height: 0;
  border-radius: 50%;
}
.disabled {
  opacity: 0.5 !important;
  cursor: not-allowed !important;
  background-color: var(--primary-color) !important;
  &:hover { background-color: var(--primary-color) !important; }
  &:active { background-color: var(--primary-color) !important; }
}
.loading {
  opacity: 0.5;
  pointer-events: none;
}
</style>