<script setup lang="ts">
import { h, useSlots } from 'vue'


const slots = useSlots()

const RenderSlot = () => slots.default && slots.default().map(vNode => h(vNode, { isBtn: true }))
</script>

<template>
  <div class="vi-checkbox-btn">
    <RenderSlot />
  </div>
</template>

<style lang="scss">
.vi-checkbox-btn {
  display: flex;
  align-items: center;
  .vi-checkbox {
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