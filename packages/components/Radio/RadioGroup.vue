<script setup lang="ts">
import { computed, h, useSlots } from 'vue'


interface Props {
  modelValue: string
  isButton?: boolean
  gap?: string
}
interface Emits {
  (e: 'update:modelValue', label: string): void
}
const props = withDefaults(defineProps<Props>(), {
  isButton: false,
  gap: '18px'
})
const slots = useSlots()
const emit = defineEmits<Emits>()

const getGap = computed(() => !props.isButton ? props.gap : '0')

const RenderSlots = () => slots.default && slots.default().map(v => h(v, { 
  modelValue: props.modelValue,
  isBtn: props.isButton,
  'onUpdate:modelValue': (val: string) => emit('update:modelValue', val)
}))

</script>

<template>
  <div class="vi-radio-btn" :class="{ 'is-button': props.isButton }">
    <RenderSlots />
  </div>
</template>

<style lang="scss">
.vi-radio-btn {
  display: inline-flex;
  gap: v-bind(getGap);

  &.is-button .vi-radio {
    &:first-child {
      border-radius: var(--vi-base-radius) 0 0 var(--vi-base-radius);
    }
    &:last-child {
      border-radius: 0 var(--vi-base-radius) var(--vi-base-radius) 0;
      border-right: 1px solid var(--vi-color-info);
      &.is-checked {
        border-color: var(--vi-color-primary);
      }
    }
  }
}
</style>