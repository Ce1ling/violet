<script setup lang="ts">
import { computed, onMounted, Transition, ref, onBeforeUnmount } from 'vue'
import type { Options } from './index'
import { Icon as ViIcon } from '../index'

type Props = {
  type: Options['type']
  yPosition?: string
  duration: number
}
const props = withDefaults(defineProps<Props>(), {
  type: 'info',
  yPosition: '0px',
  duration: 3000
})

const year = new Date().getFullYear()
const visible = ref(false)

const classList = computed(() => {
  return `vi-toast--${props.type}`
})
const getYPosition = computed(() => {
  return props.yPosition
})
const zIndex = computed(() => {
  return year + 1
})
let timer: number
onMounted(() => {
  visible.value = true
  timer = setTimeout(() => visible.value = false, props.duration)
})
onBeforeUnmount(() => {
  clearTimeout(timer)
})

</script>

<template>
  <Transition name="vi-toast">
    <div class="vi-toast" :class="classList" v-show="visible">
      <slot name="prefix">
        <!-- <vi-icon name="Warning" /> -->
      </slot>
      <slot></slot>
    </div>
  </Transition>
</template>

<style lang="scss">
@keyframes show {
  from {
    transform: translate(-50%, -100%) scale(.5);
    // test
    transform: translate(-50%, -100%);
  }
  to {
    transform: translate(-50%, 0%) scale(1);
    // test
    transform: translate(-50%, 0%);
  }
}
.vi-toast-enter-active,
.vi-toast-leave-active {
  animation: show .3s ease;
}
.vi-toast-enter-from,
.vi-toast-leave-to {
  animation: show .3s ease reverse;
}
.vi-toast {
  position: fixed;
  left: 50%;
  transform: translateX(-50%);
  top: v-bind(getYPosition);
  z-index: v-bind(zIndex);
  padding: 8px 28px;
  border-radius: var(--border-radius);
  border: 1px solid var(--shadow-color);

  &--primary {
    background-color: #f1e2ff;
    color: var(--primary-color);
    box-shadow: 2px 2px 8px 0 #f1e2ff;
  }
  &--success {
    background-color: #eaffe0;
    color: var(--success-color);
    box-shadow: 2px 2px 8px 0 #eaffe0;
  }
  &--info {
    background-color: #ececec;
    color: #666666;
    box-shadow: 2px 2px 8px 0 #ececec;
  }
  &--warning {
    background-color: #fff8e0;
    color: var(--warning-color);
    box-shadow: 2px 2px 8px 0 #fff8e0;
  }
  &--danger {
    background-color: #ffe4da;
    color: var(--danger-color);
    box-shadow: 2px 2px 8px 0 #ffe4da;
  }
}
</style>