<script lang="ts" setup>
import { ref, watch, computed, onMounted, toRef } from 'vue'
import { Icon as ViIcon, Mask as ViMask } from '../index'
import { useMovable, useTimeout, useScrollVisible } from '../../hooks'
import { getADByVar } from '../../utils/dom/animation'

import type { DialogProps, DialogEmits, DialogSlots } from './dialog'

const props = withDefaults(defineProps<DialogProps>(), {
  title: '',
  width: '50%',
  showCloseBtn: true,
  appendToBody: false,
  mask: true,
  movable: false,
  lockScroll: true,
  clickMaskClose: true,
  destroy: false,
})

const emit = defineEmits<DialogEmits>()

defineSlots<DialogSlots>()

const dialogRef = ref<HTMLElement>()
const headerRef = ref<HTMLElement>()
const destructible = ref<boolean>(false)

const dialogClass = computed(() => ({
  'is-center': props.center,
  'is-box-center': props.boxCenter,
  'is-movable': props.movable,
}))

const animationDuration = computed(() => {
  return getADByVar(document.body, '--vi-animation-duration', 1000)
})

const close = () => emit('update:modelValue', false)

const handleClose = () => {
  if (props.beforeClose) {
    props.beforeClose(close)
  } else {
    close()
  }
}

const handleMaskClick = () => {
  if (props.clickMaskClose) {
    handleClose()
  }
}

const handleDestory = (visible: boolean) => {
  if (!props.destroy) return
  if (visible) {
    destructible.value = false
    return
  }

  // TODO: 如果能去掉这个异步任务，那么就可以使用 computed 优化 destroy
  useTimeout(() => (destructible.value = true), animationDuration.value)
}

const handleMovable = (visible: boolean) => {
  if (visible) {
    useMovable(dialogRef, headerRef, toRef(props, 'movable'))
  }
}

const handleLockScroll = () => {
  if (props.lockScroll) {
    useScrollVisible(
      toRef(props, 'modelValue'),
      document.body,
      animationDuration.value
    )
  }
}

watch(
  () => props.modelValue,
  val => {
    emit('update:modelValue', val)
    emit(val ? 'open' : 'close', val)

    handleDestory(val)
    handleMovable(val)
  }
)

onMounted(handleLockScroll)
</script>

<template>
  <Teleport to="body" :disabled="!appendToBody">
    <Transition name="vi-dialog-fade">
      <vi-mask :visible="modelValue" :disabled="!mask" @click="handleMaskClick">
        <div class="vi-dialog" :class="dialogClass" v-if="!destructible">
          <div
            class="vi-dialog__content"
            ref="dialogRef"
            :style="{ width }"
            @click.stop="void"
          >
            <header class="vi-dialog__header" ref="headerRef">
              <template v-if="$slots.header">
                <slot name="header" />
              </template>
              <span class="vi-dialog__header-title" v-else>
                {{ title }}
              </span>
              <button
                class="vi-dialog__header-close-btn"
                @click="handleClose"
                v-if="showCloseBtn"
              >
                <vi-icon
                  name="Close"
                  size="18px"
                  hover-color="var(--vi-color-primary)"
                />
              </button>
            </header>
            <section class="vi-dialog__body">
              <slot>{{ content }}</slot>
            </section>
            <footer class="vi-dialog__footer">
              <slot name="footer" />
            </footer>
          </div>
        </div>
      </vi-mask>
    </Transition>
  </Teleport>
</template>

<style lang="scss">
.vi-dialog {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;

  &__content {
    margin: 10vh auto;
    background-color: var(--vi-dialog-bg-color);
    border-radius: var(--vi-base-radius);
    box-shadow: var(--vi-dialog-shadow);

    .vi-dialog__header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: var(--vi-base-padding);
      &-title {
        font-size: var(--vi-font-size-xl);
        font-weight: bolder;
      }
    }
    .vi-dialog__body {
      padding: var(--vi-base-padding);
    }
    .vi-dialog__footer {
      display: flex;
      align-items: center;
      justify-content: flex-end;
      gap: 18px;
      padding: var(--vi-base-padding);
    }
  }
  &.is-center {
    text-align: center;
    .vi-dialog__header {
      justify-content: center;
      &-title {
        flex-grow: 1;
      }
    }
    .vi-dialog__footer {
      justify-content: center;
    }
  }
  &.is-box-center {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  &.is-movable {
    .vi-dialog__header {
      cursor: move;
      user-select: none;
    }
  }
}

@keyframes vi-dialog-fade {
  from {
    transform: translate3d(0, -10%, 0);
    opacity: 0;
  }
  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
}

.vi-dialog-fade {
  &-enter-active {
    transition: all var(--vi-animation-duration);
    .vi-dialog {
      animation: vi-dialog-fade var(--vi-animation-duration);
    }
  }
  &-leave-active {
    transition: all var(--vi-animation-duration);
    opacity: 0;
    .vi-dialog {
      animation: vi-dialog-fade var(--vi-animation-duration) reverse;
    }
  }
}
</style>
