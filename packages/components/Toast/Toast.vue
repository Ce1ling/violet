<script setup lang="ts">
import { computed, onMounted, Transition, ref, onBeforeUnmount, h, nextTick } from 'vue'
import type { ComponentPublicInstance } from 'vue'
import type { Options, Ins } from './types'
import { Icon as ViIcon } from '../index'

type Props = {
  type: Options['type']
  content: string
  duration?: number
  closable?: boolean
  isHtmlStr?: boolean
  /** private prop */
  instances?: Ins[]
}
const props = withDefaults(defineProps<Props>(), {
  type: 'info',
  duration: 3000,
  closable: false,
  isHtmlStr: false
})

let timer: number | null = null
const visible = ref(false)
const toastEl = ref<HTMLElement>()
const height = ref<number>()
const offset = ref<string>('0px')
const gap = ref<number>(20)

const classList = computed(() => {
  return `vi-toast--${props.type}`
})
const getZIndex = computed(() => {
  return new Date().getFullYear()
})

const RenderIcon = () => {
  const map = {
    primary: 'CheckCircle',
    success: 'CheckCircle',
    info: 'InfoCircle',
    warning: 'WarningCircle',
    danger: 'CloseCircle'
  }
  return h(ViIcon, {
    name: map[props.type]
  })
}
const setOffset = (value: number) => {
  offset.value = value + 'px'
}
const handleClose = () => {
  visible.value = false
}

defineExpose({
  height,
  gap,
  setOffset,
  close: handleClose
})

onMounted(() => {
  visible.value = true
  if (props.duration !== 0) {
    timer = setTimeout(() => visible.value = false, props.duration)
  }
  nextTick(() => height.value = toastEl.value!.offsetHeight)
})
onBeforeUnmount(() => {
  clearTimeout(timer as number)
  timer = null
})

</script>

<template>
  <Transition name="vi-toast-fade">
    <div ref="toastEl" class="vi-toast" :class="classList" v-show="visible">
      <slot name="prefix">
        <RenderIcon />
      </slot>
      <span v-if="isHtmlStr" v-html="content"></span>
      <span v-else>{{ content }}</span>
      <vi-icon name="Close" v-if="closable" @click="handleClose" />
    </div>
  </Transition>
</template>

<style lang="scss">
@keyframes zoom-in {
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
  animation: zoom-in .3s ease;
}
.vi-toast-fade-leave-active {
  animation: zoom-in .3s ease reverse;
}

.vi-toast {
  position: fixed;
  left: 50%;
  transform: translateX(-50%);
  top: v-bind(offset);
  z-index: v-bind(getZIndex);
  padding: 8px 28px;
  border-radius: var(--border-radius);
  border: 1px solid var(--shadow-color);
  display: flex;
  align-items: center;
  gap: 8px;
  transition: top .3s ease;

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