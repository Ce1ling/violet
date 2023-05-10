<script setup lang="ts">
import { ref, nextTick, computed, onMounted, Transition } from 'vue'
import { Icon as ViIcon } from '../index'
import { useTimeout } from '../../hooks'
import { getADByVar } from '../../utils/dom/animation'

import type { Options } from './types'


interface Props {
  type: Options['type']
  content: string
  duration?: number
  closable?: boolean
  isHtmlStr?: boolean
  prefix?: string
  zIndex?: number
  /** private props */
  _id: string
  close: (id: string) => void
}
const props = withDefaults(defineProps<Props>(), {
  type: 'info',
  duration: 3000,
  closable: false,
  isHtmlStr: false,
  prefix: '',
  zIndex: new Date().getFullYear()
})

const visible = ref<boolean>(false)
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
/** 'ad' 是 'animation duration' 缩写 */
const ad = getADByVar(document.body, '--vi-animation-duration', 1000)

const getClasses = computed(() => `vi-toast--${props.type}`)
const getStyles = computed(() => ({
  top: offset.value,
  zIndex: props.zIndex
}))

const setOffset = (value: number) => {
  offset.value = value + 'px'
}
const handleClose = () => {
  visible.value = false
  useTimeout(() => document.body.removeChild(toastEl.value!), ad)
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
    <div ref="toastEl" class="vi-toast" :class="getClasses" :style="getStyles" v-show="visible">
      <vi-icon :name="prefix ? prefix : iconMap[type]" />
      <span v-if="isHtmlStr" v-html="content"></span>
      <span v-else>{{ content }}</span>
      <vi-icon name="Close" v-if="closable" @click="handleClose" />
    </div>
  </Transition>
</template>

<style lang="scss">
$types: primary, success, info, warning, danger;

.vi-toast {
  position: fixed;
  left: 50%;
  transform: translateX(-50%);
  padding: 8px 28px;
  border-radius: var(--vi-base-radius);
  border: 1px solid var(--vi-toast-border-color);
  display: flex;
  align-items: center;
  gap: 8px;
  transition: top var(--vi-animation-duration) ease;
  
  @each $t in $types {
    &--#{$t} {
      --vi-toast-bg-color: var(--vi-color-#{$t}-weak);
      --vi-toast-color: var(--vi-color-#{$t});
      background-color: var(--vi-toast-bg-color);
      color: var(--vi-toast-color);
      box-shadow: 2px 2px 8px 0 var(--vi-toast-bg-color);
    }
  }
}

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

.vi-toast-fade {
  &-enter-active {
    animation: vi-toast-zoom-in var(--vi-animation-duration) ease;
  }
  &-leave-active {
    animation: vi-toast-zoom-in var(--vi-animation-duration) ease reverse;
  }
}
</style>