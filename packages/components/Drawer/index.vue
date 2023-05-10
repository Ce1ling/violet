<script setup lang="ts">
import { computed, onMounted, watch } from 'vue'
import { Mask as ViMask, Icon as ViIcon } from '../index'
import { useScrollVisible } from '../../hooks'
import { getADByVar } from '../../utils/dom/animation'

interface Props {
  modelValue: boolean
  title?: string
  width?: string
  height?: string
  direction?: 'l-r' | 'r-l' | 't-b' | 'b-t'
  zIndex?: number
  showClose?: boolean
  appendToBody?: boolean
  mask?: boolean
  lockScroll?: boolean
  clickMaskClose?: boolean
  beforeClose?: (fn: () => void) => void
}
interface Emits {
  (e: 'update:modelValue', val: boolean): void
  (e: 'open' | 'close', val: boolean): void
}
const props = withDefaults(defineProps<Props>(), {
  width: '30%',
  height: '30%',
  zIndex: new Date().getFullYear(),
  direction: 'r-l',
  showClose: true,
  appendToBody: false,
  mask: true,
  lockScroll: true,
  clickMaskClose: true
})
const emit = defineEmits<Emits>()

const getClasses = computed(() => [`vi-drawer--${props.direction}`])
const getStyles = computed(() => ({ 
  width: getWHByDirection('width'),
  height: getWHByDirection('height'),
  zIndex: props.zIndex
}))
const animationDuration = computed(() => {
  return getADByVar(document.body, '--vi-animation-duration', 1000)
})
const visible = computed(() => props.modelValue)

/** 通过方位获取 "宽度" 或 "高度" */
const getWHByDirection = (target: 'width' | 'height') => {
  const x = ['l-r', 'r-l']
  const y = ['t-b', 'b-t']

  return target === 'width'
    ? x.includes(props.direction) ? props.width : undefined
    : y.includes(props.direction) ? props.height : undefined
}
const close = () => emit('update:modelValue', false)
const handleClose = () => {
  if (props.beforeClose) {
    props.beforeClose(close)
    return
  }

  close()
}
const handleMaskClose = () => {
  if (props.clickMaskClose) { handleClose() }
}
const handleLockScroll = () => {
  if (props.lockScroll) {
    useScrollVisible(visible, document.body, animationDuration.value)
  }
}

watch(() => props.modelValue, val => {
  emit('update:modelValue', val)
  emit(val ? 'open' : 'close', val)
})

onMounted(handleLockScroll)

</script>

<template>
  <Teleport to="body" :disabled="!appendToBody">
    <Transition name="vi-drawer-fade">
      <vi-mask :visible="modelValue" :disabled="!mask" @click="handleMaskClose">
        <div class="vi-drawer" :class="getClasses" @click.stop="void" :style="getStyles">
          <header class="vi-drawer__header" v-if="$slots.header || title">
            <div class="vi-drawer__header-title">
              <template v-if="$slots.header">
                <slot name="header" />
              </template>
              <span class="vi-drawer__header-text" v-else>
                {{ title }}
              </span>
            </div>
            <button class="vi-drawer__header-close-btn" @click="handleClose" v-if="showClose">
              <vi-icon name="Close" hover-color="var(--vi-color-primary)" />
            </button>
          </header>
          <div class="vi-drawer__body">
            <slot />
          </div>
          <footer class="vi-drawer__footer" v-if="$slots.footer">
            <slot name="footer" />
          </footer>
        </div>
      </vi-mask>
    </Transition>
  </Teleport>
</template>

<style lang="scss">
$ps: l-r, r-l, t-b, b-t;

.vi-drawer {
  position: fixed;
  display: flex;
  flex-direction: column;
  background-color: var(--vi-drawer-bg-color);
  box-shadow: var(--vi-shadow-dark);
  transition: all var(--vi-animation-duration);
  &__header {
    padding: var(--vi-base-padding);
    display: flex;
    justify-content: space-between;
    align-items: center;
    &-title { flex: 1; }
    &-text {
      font-weight: bolder;
      font-size: var(--vi-font-size-large);
    }
  }
  &__body {
    flex-grow: 1;
    padding: var(--vi-base-padding);
  }
  &__footer {
    padding: var(--vi-base-padding);
    display: flex;
    justify-content: flex-end;
    align-items: center;
    gap: var(--vi-base-padding);
  }

  &--l-r {
    left: 0;
    top: 0;
    height: 100%;
  }
  &--r-l {
    top: 0;
    right: 0;
    height: 100%;
  }
  &--t-b {
    top: 0;
    left: 0;
    width: 100%;
  }
  &--b-t {
    bottom: 0;
    left: 0;
    width: 100%;
  }
}

.vi-drawer-fade {
  &-enter-from,
  &-leave-to {
    transition: all var(--vi-animation-duration);
    opacity: 0;
    @each $p in $ps {
      .vi-drawer--#{$p} {
        @if $p == l-r {
          transform: translateX(-100%);
        }
        @if $p == r-l {
          transform: translateX(100%);
        }
        @if $p == t-b {
          transform: translateY(-100%);
        }
        @if $p == b-t {
          transform: translateY(100%);
        }
      }
    }
  }
}
</style>