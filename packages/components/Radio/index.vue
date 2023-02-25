<script setup lang="ts">
import { computed  } from 'vue'

interface Props {
  modelValue: string
  label: string
  disabled?: boolean
  border?: boolean
  isBtn?: boolean
}
interface Emits {
  (e: 'update:modelValue', label: string): void
}
const props = withDefaults(defineProps<Props>(), {
  disabled: false,
  border: false,
  isBtn: false
})
defineEmits<Emits>()

const classObj = computed(() => ({
  'is-checked': props.modelValue === props.label,
  'is-disabled': props.disabled,
  'has-border': props.border,
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
      border-color: var(--primary-color);
    }
  }
  &__input {
    opacity: 0;
    cursor: pointer;
  }
  &__dot {
    width: 14px;
    height: 14px;
    border: 1px solid var(--info-color);
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    border-radius: 50%;
    transition: all var(--vi-animation-duration);
  }
  &.is-checked {
    .vi-radio__dot {
      background-color: var(--primary-color);
      border-color: var(--primary-color);
      &::before {
        content: '';
        width: 4px;
        height: 4px;
        background-color: var(--vi-color-white);
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
    &.is-checked {
      border-color: var(--primary-color);
      color: var(--primary-color);
    }
    .vi-radio__input {
      position: absolute;
    }
    .vi-radio__dot {
      position: relative;
      transform: translate(0);
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
    .vi-radio__dot {
      display: none;
    }
    .vi-radio__input {
      position: absolute;
    }
  }
}
</style>