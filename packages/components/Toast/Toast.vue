<script setup lang="ts">
import { 
  ref, 
  nextTick, 
  computed, 
  onMounted, 
  Transition, 
} from 'vue'
import { Icon as ViIcon } from '../index'
import { useTimeout } from '../../hooks/useTimeout'

import type { Options } from './types'


type Props = {
  type: Options['type']
  content: string
  duration?: number
  closable?: boolean
  isHtmlStr?: boolean
  prefix?: string
  /** private props */
  _id: string
  close: (id: string) => void
}
const props = withDefaults(defineProps<Props>(), {
  type: 'info',
  duration: 3000,
  closable: false,
  isHtmlStr: false,
  prefix: ''
})

const visible = ref(false)
const toastEl = ref<HTMLElement>()
const height = ref<number>()
const offset = ref<string>('0px')
const gap = ref<number>(20)
const iconMap = {
  primary: 'CheckCircle',
  success: 'CheckCircle',
  info: 'InfoCircle',
  warning: 'WarningCircle',
  danger: 'CloseCircle'
}

const classList = computed(() => {
  return `vi-toast--${props.type}`
})
const getZIndex = computed(() => {
  return new Date().getFullYear()
})

const setOffset = (value: number) => {
  offset.value = value + 'px'
}
const handleClose = () => {
  visible.value = false
  useTimeout(() => document.body.removeChild(toastEl.value!), 300)
  props.close(props._id)
}

defineExpose({
  _id: props._id,
  height,
  gap,
  setOffset,
  close: handleClose
})

onMounted(() => {
  visible.value = true
  if (props.duration !== 0) {
    useTimeout(() => visible.value = false, props.duration)
  }
  nextTick(() => height.value = toastEl.value!.offsetHeight)
})

</script>

<template>
  <Transition name="vi-toast-fade">
    <div ref="toastEl" class="vi-toast" :class="classList" v-show="visible">
      <vi-icon :name="prefix ? prefix : iconMap[type]" />
      <span v-if="isHtmlStr" v-html="content"></span>
      <span v-else>{{ content }}</span>
      <vi-icon name="Close" v-if="closable" @click="handleClose" />
    </div>
  </Transition>
</template>

<style lang="scss">
@keyframes vi-toast-zoom-in {
  from {
    transform: translate(-50%, -100%) scale(0.5);
    opacity: 0;
  }
  to {
    transform: translate(-50%, 0%) scale(1);
    opacity: 1;
  }
}
.vi-toast-fade-enter-active {
  animation: vi-toast-zoom-in .3s ease;
}
.vi-toast-fade-leave-active {
  animation: vi-toast-zoom-in .3s ease reverse;
}

.vi-toast {
  position: fixed;
  left: 50%;
  transform: translateX(-50%);
  top: v-bind(offset);
  z-index: v-bind(getZIndex);
  padding: 8px 28px;
  border-radius: var(--vi-base-radius);
  border: 1px solid var(--vi-color-shadow);
  display: flex;
  align-items: center;
  gap: 8px;
  transition: top .3s ease;

  &--primary {
    background-color: #f1e2ff;
    color: var(--vi-color-primary);
    box-shadow: 2px 2px 8px 0 #f1e2ff;
  }
  &--success {
    background-color: #eaffe0;
    color: var(--vi-color-success);
    box-shadow: 2px 2px 8px 0 #eaffe0;
  }
  &--info {
    background-color: #ececec;
    color: #666666;
    box-shadow: 2px 2px 8px 0 #ececec;
  }
  &--warning {
    background-color: #fff8e0;
    color: var(--vi-color-warning);
    box-shadow: 2px 2px 8px 0 #fff8e0;
  }
  &--danger {
    background-color: #ffe4da;
    color: var(--vi-color-danger);
    box-shadow: 2px 2px 8px 0 #ffe4da;
  }
}
</style>