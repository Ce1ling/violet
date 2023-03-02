<script setup lang="ts">
import { computed, h } from 'vue'
import { Icon as ViIcon } from '../index'

interface Props {
  type?: 'primary' | 'success' | 'info' | 'warning' | 'danger'
  text?: boolean
  round?: boolean
  circle?: boolean
  disabled?: boolean
  loading?: boolean
  isPrefix?: boolean
  bgColor?: string
  color?: string
}
interface Emits {
  (e: 'click', event: MouseEvent): void
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

const emit = defineEmits<Emits>()

const classList = computed(() => [`vi-button--${props.type}`, {
  'is-text-btn': props.text,
  'is-round': props.round,
  'is-circle': props.circle,
  'is-disabled': props.disabled,
  'is-loading': props.loading
}])
const customColor = computed(() => ({ 
  color: props.color, 
  backgroundColor: props.bgColor
}))

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
    class="vi-button" 
    :class="classList" 
    :style="customColor"
    @click="handleClick">
    <slot name="prefix">
      <RenderIcon v-if="isPrefix" />
    </slot>
    <span>
      <slot />
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
  gap: 4px;
  width: auto;
  text-align: center;
  cursor: pointer;
  border: none;
  font-size: 14px;
  padding: 6px var(--vi-base-padding);
  border-radius: var(--vi-base-radius);
  color: var(--vi-color-black);
  background-color: var(--vi-color-white);
  transition: all var(--vi-button-animation-duration);
  &:hover { opacity: var(--vi-opacity-half); }
  &:active { opacity: 1; }

  &--primary {
    color: var(--vi-color-white);
    background-color: var(--vi-color-primary);
  }
  &--success {
    color: var(--vi-color-white);
    background-color: var(--vi-color-success);
  }
  &--info {
    color: var(--vi-color-white);
    background-color: var(--vi-color-info);
  }
  &--warning {
    color: var(--vi-color-white);
    background-color: var(--vi-color-warning);
  }
  &--danger {
    color: var(--vi-color-white);
    background-color: var(--vi-color-danger);
  }

  &.is-text-btn {
    color: var(--vi-color-black);
    background-color: transparent;
    &:hover { background-color: var(--vi-button-text-bg-color); }
    &:active { background-color: transparent; }

    &.vi-button--primary { color: var(--vi-color-primary); }
    &.vi-button--success { color: var(--vi-color-success); }
    &.vi-button--info { color: var(--vi-color-info); }
    &.vi-button--warning { color: var(--vi-color-warning); }
    &.vi-button--danger { color: var(--vi-color-danger); }
  }
  &.is-round {
    border-radius: var(--vi-button-round-radius);
  }
  &.is-circle {
    width: var(--vi-button-circle-wh);
    height: var(--vi-button-circle-wh);
    border-radius: 50%;
  }
  &.is-loading {
    opacity: 0.5;
    cursor: wait;
  }
  &.is-disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
}
</style>
