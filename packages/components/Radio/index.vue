<script setup lang="ts">
import { computed  } from 'vue'

import type { RadioProps, RadioEmits } from './radio'


const props = withDefaults(defineProps<RadioProps>(), {
  disabled: false,
  border: false,
  isBtn: false
})
defineEmits<RadioEmits>()

const classObj = computed(() => ({
  'is-checked': props.modelValue === props.label,
  'is-disabled': props.disabled,
  'has-border': props.border && !props.isBtn,
  'is-button': props.isBtn
}))
</script>

<template>
  <label class="vi-radio" :class="classObj">
    <input 
      type="radio" 
      class="vi-radio__input"
      :name="modelValue" 
      :value="label" 
      :checked="modelValue === label"
      @input="$emit('update:modelValue', label)" 
      :disabled="disabled"
    />
    <span class="vi-radio__dot"></span>
    <span class="vi-radio__label">
      <slot />
    </span>
  </label>
</template>

<style lang="scss">
@keyframes vi-radio-zoom {
  from {
    transform: translate(-50%, -50%) scale(0);
  }
  to {
    transform: translate(-50%, -50%) scale(1);
  }
}
.vi-radio {
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
  user-select: none;
  position: relative;
  
  &:hover {
    .vi-radio__dot {
      border-color: var(--vi-color-primary);
    }
  }
  &__input {
    opacity: 0;
    cursor: pointer;
  }
  &__dot {
    width: 14px;
    height: 14px;
    border: 1px solid var(--vi-color-info);
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    border-radius: 50%;
    transition: all var(--vi-animation-duration);
  }
  &.is-checked {
    .vi-radio__dot {
      background-color: var(--vi-color-primary);
      border-color: var(--vi-color-primary);
      &::before {
        content: '';
        width: 4px;
        height: 4px;
        background-color: var(--vi-radio-dot-inner-color);
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        border-radius: 50%;
        animation: vi-radio-zoom var(--vi-animation-duration);
      }
    }
  }
  &.is-disabled {
    opacity: var(--vi-opacity-half);
    cursor: not-allowed;
    .vi-radio__dot {
      background-color: var(--vi-radio-dot-color);
      border-color: var(--vi-radio-dot-border-color);
    }
  }
  &.has-border {
    display: flex;
    align-items: center;
    border: 1px solid var(--vi-radio-border-color);
    padding: 2px 8px;
    border-radius: var(--vi-base-radius);
    &.is-checked {
      border-color: var(--vi-color-primary);
      color: var(--vi-color-primary);
    }
    .vi-radio__input {
      position: absolute;
    }
    .vi-radio__dot {
      position: relative;
      transform: translateY(0);
      top: 0;
    }
  }
  &.is-button {
    padding: 2px 12px;
    border: 1px solid var(--vi-radio-border-color);
    border-right: none;
    transition: all var(--vi-animation-duration);
    box-shadow: 1px 0 0 0 transparent;
    &:hover:not(.is-disabled, .is-checked) {
      color: var(--vi-color-primary);
    }
    &.is-checked {
      background-color: var(--vi-color-primary);
      color: var(--vi-color-white);
      border-color: var(--vi-color-primary);
      box-shadow: 1px 0 0 0 var(--vi-color-primary);
      z-index: 1;
    }
    .vi-radio__dot {
      display: none;
    }
    .vi-radio__input {
      position: absolute;
    }
  }
}
</style>