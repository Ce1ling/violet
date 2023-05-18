<script setup lang="ts">
import { computed, h, useSlots } from 'vue'

import type { RadioGroupProps, RadioGroupEmits } from './radioGroup'


const props = withDefaults(defineProps<RadioGroupProps>(), {
  isButton: false,
  gap: '18px'
})
const emit = defineEmits<RadioGroupEmits>()

const slots = useSlots()

const getClasses = computed(() => ({
  'is-button': props.isButton
}))
const getStyles = computed(() => ({
  gap: !props.isButton ? props.gap : '0'
}))

const RenderSlots = () => slots.default && slots.default().map(v => h(v, { 
  modelValue: props.modelValue,
  isBtn: props.isButton,
  border: props.border,
  'onUpdate:modelValue': (val: string) => emit('update:modelValue', val)
}))
</script>

<template>
  <div class="vi-radio-btn" :class="getClasses" :style="getStyles">
    <RenderSlots />
  </div>
</template>

<style lang="scss">
.vi-radio-btn {
  display: inline-flex;

  &.is-button .vi-radio {
    &:first-child {
      border-radius: var(--vi-base-radius) 0 0 var(--vi-base-radius);
    }
    &:last-child {
      border-radius: 0 var(--vi-base-radius) var(--vi-base-radius) 0;
      border-right: 1px solid var(--vi-radio-border-color);
      &.is-checked {
        border-color: var(--vi-color-primary);
      }
    }
  }
}
</style>