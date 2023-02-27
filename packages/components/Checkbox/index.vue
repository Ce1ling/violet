<script setup lang="ts">
import { computed  } from 'vue'

export interface Props {
  modelValue: boolean
  label?: string
  disabled?: boolean
  border?: boolean
  isBtn?: boolean
}
interface Emits {
  (e: 'update:modelValue', label: string): void
}
const props = withDefaults(defineProps<Props>(), {
  label: '',
  disabled: false,
  border: false,
  isBtn: false
})
defineEmits<Emits>()

const classObj = computed(() => ({
  'is-checked': props.modelValue,
  'is-disabled': props.disabled,
  'has-border': props.border && !props.isBtn,
  'is-button': props.isBtn
}))

</script>

<template>
  <label class="vi-checkbox" :class="classObj">
    <input 
      type="checkbox" 
      class="vi-checkbox__input"
      :name="label" 
      :value="label" 
      :checked="modelValue"
      @input="$emit('update:modelValue', !modelValue)" 
      :disabled="disabled"
    />
    <span class="vi-checkbox__square"></span>
    <span class="vi-checkbox__label">
      <slot v-if="$slots.default" />
      <template v-else>{{ label }}</template>      
    </span>
  </label>
</template>

<style lang="scss">
@keyframes vi-checkbox-zoom {
  from {
    transform: rotate(45deg) scale(0);
  }
  to {
    transform: rotate(45deg) scale(1);
  }
}
.vi-checkbox {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
  user-select: none;
  position: relative;
  
  &:hover {
    .vi-checkbox__square {
      border-color: var(--primary-color);
    }
  }
  &__input {
    opacity: 0;
    cursor: pointer;
  }
  &__square {
    width: 14px;
    height: 14px;
    border: 1px solid var(--info-color);
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    border-radius: 2px;
    transition: all var(--vi-animation-duration);
  }
  &.is-checked {
    .vi-checkbox__square {
      background-color: var(--primary-color);
      border-color: var(--primary-color);
      &::before {
        content: '';
        width: 4px;
        height: 8px;
        background-color: transparent;
        position: absolute;
        border: 1px solid var(--vi-color-white);
        border-top: none;
        border-left: none;
        top: 1px;
        left: 4px;
        transform: rotate(45deg);
        animation: vi-checkbox-zoom var(--vi-animation-duration);
      }
    }
  }
  &.is-disabled {
    opacity: var(--vi-opacity-half);
    cursor: not-allowed;
    .vi-checkbox__square {
      background-color: var(--info-color);
      border-color: var(--info-color);
    }
  }
  &.has-border {
    display: flex;
    align-items: center;
    border: 1px solid var(--info-color);
    padding: 2px 8px;
    border-radius: var(--vi-border-radius);
    &.is-checked:not(.is-disabled) {
      border-color: var(--primary-color);
    }
    .vi-checkbox__input {
      position: absolute;
    }
    .vi-checkbox__square {
      position: relative;
      transform: translateY(0);
      top: 0;
    }
  }
  &.is-button {
    padding: 2px 12px;
    border: 1px solid var(--info-color);
    border-right: none;
    transition: all var(--vi-animation-duration);
    box-shadow: 1px 0 0 0 transparent;
    &:hover:not(.is-disabled, .is-checked) {
      color: var(--primary-color);
    }
    &.is-checked {
      background-color: var(--primary-color);
      color: var(--vi-font-color-white);
      border-color: var(--primary-color);
      box-shadow: 1px 0 0 0 var(--primary-color);
      z-index: 1;
    }
    .vi-checkbox__square {
      display: none;
    }
    .vi-checkbox__input {
      position: absolute;
    }
  }
}
</style>