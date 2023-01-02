<script setup lang="ts">
import { computed, Transition } from 'vue'
import type { Options } from './index'

type Props = {
  type: Options['type']
}
const props = withDefaults(defineProps<Props>(), {
  type: 'info'
})

const type = {
  primary: 'var(--primary-color)',
  success: 'var(--success-color)',
  info: 'var(--info-color)',
  warning: 'var(--warning-color)',
  danger: 'var(--danger-color)'
}
const year = new Date().getFullYear()

const getBgColor = computed(() => {
  return type[props.type]
})
const getYPosition = computed(() => {
  return '20px'
})
const zIndex = computed(() => {
  return year + 1
})

</script>

<template>
  <Transition>
    <div class="vi-toast">
      <slot name="prefix">
        <vi-icon name="WarningCircle"></vi-icon>
      </slot>
      <slot></slot>
    </div>
  </Transition>
</template>

<style>
@keyframes show {
  from {
    transform: translateY(-100%) scale(0.5);
  }
  to {
    transform: translateY(0%) scale(1);
  }
}
.vi-toast {
  position: fixed;
  left: 50%;
  top: v-bind(getYPosition);
  background-color: v-bind(getBgColor);
  z-index: v-bind(zIndex);
  padding: 8px 28px;
  border-radius: var(--border-radius);
  border: 1px solid #b9b9b9;
}
.v-enter-active,
.v-leave-active {
  animation: show .3s ease;
  /* transition: opacity 0.5s ease; */
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>