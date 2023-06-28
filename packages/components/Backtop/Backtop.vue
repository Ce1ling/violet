<script setup lang="ts">
import { ref, onMounted, onUnmounted, computed } from 'vue'

import type { CSSProperties } from 'vue'
import type { BacktopProps, BacktopSlots } from './backtop'


const props = withDefaults(defineProps<BacktopProps>(), {
  showHeight: 500,
  hideWidth: -Infinity,
  right: 50,
  bottom: 50,
  zIndex: 999,
  round: false,
  shadowColor: 'var(--vi-backtop-shadow-color)',
  normal: false
})

defineSlots<BacktopSlots>()

const show = ref(false)

const fixedStyle = computed<CSSProperties>(() => ({
  position: 'fixed',
  right: props.right + 'px', 
  bottom: props.bottom + 'px', 
  zIndex: props.zIndex,
}))
const backtopStyle = computed<CSSProperties>(() => {
  return Object.assign(props.normal ? {} : fixedStyle.value, {
    boxShadow: `0 0 8px ${props.shadowColor}`
  })
})
const backtopClass = computed(() => ({
  'is-round': props.round,
  'is-normal':  props.normal
}))

const handleScroll = () => {
  show.value = document.body.offsetWidth > props.hideWidth
    ? window.scrollY >= props.showHeight
    : false
}
const backtop = () => window.scrollTo({ top: 0 })

onMounted(() => {
  if (props.normal) {
    show.value = true
    return
  }
  window.addEventListener('scroll', handleScroll)
})
onUnmounted(() => window.removeEventListener('scroll', handleScroll))
</script>

<template>
  <div 
    class="vi-backtop" 
    :class="backtopClass"
    :style="backtopStyle"
    @click="backtop"
    v-if="show">
    <slot>
      <vi-icon 
        name="Up" 
        size="44px" 
        color="var(--vi-color-primary)" 
        class="vi-backtop__icon"
      />
    </slot>
  </div>
</template>

<style lang="scss">
.vi-backtop {
  user-select: none;
  border: 1px solid var(--vi-color-primary);
  background-color: var(--vi-backtop-bg-color);
  cursor: pointer;

  &:hover {
    background-color: var(--vi-color-primary);
    .vi-backtop__icon svg { color: var(--vi-backtop-icon-color) }
  }
  &__icon { display: block; }
  &.is-round {
    border-radius: 50%;
  }
  &.is-normal {
    display: inline-block;
  }
}
</style>