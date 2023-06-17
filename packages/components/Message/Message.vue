<script setup lang="ts">
import { ref, computed, onMounted, Transition, nextTick } from 'vue'
import { Icon as ViIcon } from '../index'
import { useTimeout } from '../../hooks'
import { getADByVar } from '../../utils/dom/animation'

import type { MessageProps, MessageExpose } from './message'


const props = withDefaults(defineProps<MessageProps>(), {
  duration: 3000,
  closable: false,
  isHtmlStr: false,
  prefix: '',
  zIndex: new Date().getFullYear()
})

const visible = ref<boolean>(false)
const messageEl = ref<HTMLElement | null>(null)
const height = ref<number>(0)
const offset = ref<number>(0)
const gap = ref<number>(20)
const transitionDuration = ref<number>(0)
const iconMap = {
  primary: 'CheckCircle',
  success: 'CheckCircle',
  info: 'InfoCircle',
  warning: 'WarningCircle',
  danger: 'CloseCircle'
}
/** `animation duration` 的缩写 */
const ad = getADByVar(document.body, '--vi-animation-duration', 1000)

const messageClass = computed(() => `vi-message--${props.type}`)
const messageStyles = computed(() => ({
  top: offset.value + 'px',
  zIndex: props.zIndex,
  transition: `top ${transitionDuration.value}s ease`
}))

const setOffset = (value: number) => {
  offset.value = value
}
const handleClose = () => {
  visible.value = false
  useTimeout(() => document.body.removeChild(messageEl.value!), ad)
  props.close(props._id)
}

defineExpose<MessageExpose>({
  _id: props._id,
  _height: height,
  _gap: gap,
  _ad: ad,
  _setOffset: setOffset,
  close: handleClose
})

onMounted(async () => {
  visible.value = true
  if (props.duration !== 0) {
    useTimeout(() => visible.value = false, props.duration)
  }
  await nextTick()
  height.value = messageEl.value!.getBoundingClientRect().height
  useTimeout(() => transitionDuration.value = ad / 1000, ad)
})
</script>

<template>
  <Transition name="vi-message-fade">
    <div ref="messageEl" class="vi-message" :class="messageClass" :style="messageStyles" v-show="visible">
      <vi-icon :name="prefix ? prefix : iconMap[type]" />
      <span v-if="isHtmlStr" v-html="content"></span>
      <span v-else>{{ content }}</span>
      <vi-icon name="Close" v-if="closable" @click="handleClose" />
    </div>
  </Transition>
</template>

<style lang="scss">
$types: primary, success, info, warning, danger;

.vi-message {
  position: fixed;
  left: 50%;
  transform: translateX(-50%);
  padding: 8px 28px;
  border-radius: var(--vi-base-radius);
  border: 1px solid var(--vi-message-border-color);
  display: flex;
  align-items: center;
  gap: 8px;
  
  @each $t in $types {
    &--#{$t} {
      --vi-message-bg-color: var(--vi-color-#{$t}-weak);
      --vi-message-color: var(--vi-color-#{$t});
      background-color: var(--vi-message-bg-color);
      color: var(--vi-message-color);
      box-shadow: 2px 2px 8px 0 var(--vi-message-bg-color);
    }
  }
}

@keyframes vi-message-zoom-in {
  from {
    transform: translate(-50%, -100%);
    opacity: 0;
  }
  to {
    transform: translate(-50%, 0%);
    opacity: 1;
  }
}

.vi-message-fade {
  &-enter-active {
    animation: vi-message-zoom-in var(--vi-animation-duration) ease;
  }
  &-leave-active {
    animation: vi-message-zoom-in var(--vi-animation-duration) ease reverse;
  }
}
</style>