<script setup lang="ts">
import { computed, h, useSlots } from 'vue'


interface Props {
  isButton?: boolean
  gap?: string
}
const props = withDefaults(defineProps<Props>(), {
  isButton: false,
  gap: '18px'
})
const slots = useSlots()

const getGap = computed(() => !props.isButton ? props.gap : '0')

const RenderSlots = () => slots.default && slots.default().map(v => h(v, { 
  isBtn: props.isButton 
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
      border-radius: var(--vi-border-radius) 0 0 var(--vi-border-radius);
    }
    &:last-child {
      border-radius: 0 var(--vi-border-radius) var(--vi-border-radius) 0;
      border-right: 1px solid var(--info-color);
      &.is-checked {
        border-color: var(--primary-color);
      }
    }
  }
}
</style>