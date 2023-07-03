<script setup lang="ts">
import { computed, watch  } from 'vue'

import type { CheckboxProps, CheckboxEmits, CheckboxSlots } from './checkbox'


const props = withDefaults(defineProps<CheckboxProps>(), {
  label: '',
  disabled: false,
  border: false,
  isBtn: false
})

const emit = defineEmits<CheckboxEmits>()

defineSlots<CheckboxSlots>()

const isChecked = computed(() => {
  return typeof props.modelValue !== 'boolean'
    ? props.modelValue.find(v => v === props.label) === props.label
    : props.modelValue
})

const checkboxClass = computed(() => ({
  'is-checked': isChecked.value,
  'is-disabled': props.disabled,
  'has-border': props.border && !props.isBtn,
  'is-button': props.isBtn
}))

const updateModelValue = () => {
  if (typeof props.modelValue === 'boolean') {
    emit('update:modelValue', !props.modelValue)
    return 
  }

  const arr = [...props.modelValue]
  const i = arr.indexOf(props.label)

  if (i === -1) { arr.push(props.label) } 
  else { arr.splice(i, 1) }

  emit('update:modelValue', arr)
}

watch(isChecked, (value, oldValue) => {
  emit('change', value, oldValue)
})
</script>

<template>
  <label class="vi-checkbox" :class="checkboxClass">
    <input 
      type="checkbox" 
      class="vi-checkbox__input"
      :name="label" 
      :value="label" 
      :checked="isChecked"
      @input="updateModelValue" 
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
.vi-checkbox {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
  user-select: none;
  position: relative;
  
  &:hover {
    .vi-checkbox__square {
      border-color: var(--vi-color-primary);
    }
  }
  &__input {
    opacity: 0;
    cursor: pointer;
  }
  &__square {
    width: 14px;
    height: 14px;
    border: 1px solid var(--vi-color-info);
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    border-radius: 2px;
    transition: all var(--vi-animation-duration);
  }
  &.is-checked {
    .vi-checkbox__square {
      background-color: var(--vi-color-primary);
      border-color: var(--vi-color-primary);
      &::before {
        content: '';
        width: 4px;
        height: 8px;
        background-color: transparent;
        position: absolute;
        border: 1px solid var(--vi-checkbox-square-inner-color);
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
      background-color: var(--vi-color-info);
      border-color: var(--vi-color-info);
    }
  }
  &.has-border {
    display: flex;
    align-items: center;
    border: 1px solid var(--vi-checkbox-border-color);
    padding: 2px 8px;
    border-radius: var(--vi-base-radius);
    &.is-checked:not(.is-disabled) {
      border-color: var(--vi-color-primary);
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
    border: 1px solid var(--vi-checkbox-border-color);
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
    .vi-checkbox__square {
      display: none;
    }
    .vi-checkbox__input {
      position: absolute;
    }
  }
}

@keyframes vi-checkbox-zoom {
  from {
    transform: rotate(45deg) scale(0);
  }
  to {
    transform: rotate(45deg) scale(1);
  }
}
</style>