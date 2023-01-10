<script setup lang="ts">
import { computed, onMounted, Transition, ref, onBeforeUnmount } from 'vue'
import type { Options } from './types'
import { Icon as ViIcon } from '../index'

type Props = {
  type: Options['type']
  content: string
  duration?: number
  yPosition?: string
}
const props = withDefaults(defineProps<Props>(), {
  type: 'info',
  duration: 3000,
  yPosition: '20px'
})

const visible = ref(false)

const classList = computed(() => {
  return `vi-toast--${props.type}`
})
const getYPosition = computed(() => {
  return props.yPosition
})
const zIndex = computed(() => {
  const year = new Date().getFullYear()
  return year
})

let timer: number | null = null
onMounted(() => {
  visible.value = true
  timer = setTimeout(() => visible.value = false, props.duration)
})
onBeforeUnmount(() => {
  clearTimeout(timer as number)
  timer = null
})

</script>

<template>
  <Transition name="vi-toast">
    <div class="vi-toast" :class="classList" v-show="visible">
      <slot name="prefix">
        <!-- <vi-icon name="Warning" /> -->
      </slot>
      {{ content }}
    </div>
  </Transition>
</template>

<style lang="scss">
@keyframes show {
  from {
    transform: translate(-50%, -100%) scale(0.5);
  }
  to {
    transform: translate(-50%, 0%) scale(1);
  }
}
.vi-toast-enter-active {
  animation: show .3s ease;
}
.vi-toast-leave-active {
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