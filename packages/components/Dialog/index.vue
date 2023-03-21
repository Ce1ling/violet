<script setup lang="ts">
import { computed, watch } from 'vue'
import { Icon as ViIcon } from '../index'

interface Props {
  modelValue: boolean
  title: string
  content?: string
  width?: string
  showCloseBtn?: boolean
  appendToBody?: boolean
  zIndex?: number
  center?: boolean
  boxCenter?: boolean
}
interface Emits {
  (e: 'update:modelValue', val: boolean): void
  (e: 'open', val: boolean): void
  (e: 'close', val: boolean): void
}
const props = withDefaults(defineProps<Props>(), {
  width: '50%',
  showCloseBtn: true,
  appendToBody: false
})
const emit = defineEmits<Emits>()

const classObj = computed(() => ({
  'is-center': props.center,
  'is-box-center': props.boxCenter
}))

const handleClose = () => emit('update:modelValue', false)

watch(() => props.modelValue, val => val ? emit('open', val) : emit('close', val))
</script>

<template>
  <Teleport to="body" :disabled="!appendToBody">
    <Transition name="vi-dialog-fade">
      <div 
        class="vi-dialog vi-dialog-mask" 
        v-show="modelValue" 
        @click="handleClose" 
        :style="{ zIndex }"
        :class="classObj">
        <div class="vi-dialog-content" @click.stop="void" :style="{ width }">
          <header class="vi-dialog__header">
            <template v-if="$slots.header"> <slot name="header" /> </template>
            <span class="vi-dialog__header-title" v-else> {{ title }} </span>
            <button class="vi-dialog__header-close-btn" @click="handleClose" v-if="showCloseBtn">
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
    </Transition>
  </Teleport>
</template>

<style lang="scss">
@keyframes vi-dialog-fade {
  from {
    opacity: 0;
    transform: translate3d(0, -50%, 0);
  }
  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
}
@keyframes vi-dialog-mask-fade {
  from { opacity: 0; }
  to { opacity: 1; }
}

.vi-dialog-fade-enter-active {
  animation: vi-dialog-mask-fade var(--vi-animation-duration);
  .vi-dialog-content {
    animation: vi-dialog-fade var(--vi-animation-duration);
  }
}
.vi-dialog-fade-leave-active {
  animation: vi-dialog-mask-fade var(--vi-animation-duration) reverse;
  .vi-dialog-content {
    animation: vi-dialog-fade var(--vi-animation-duration) reverse;
  }
}

.vi-dialog {
  &-mask {
    width: 100vw;
    height: 100vh;
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 2023;
    background-color: var(--vi-color-mask-black);
  }
  &-content {
    margin: 10vh auto;
    background-color: var(--vi-color-white);
    border-radius: var(--vi-base-radius);
    box-shadow: var(--vi-dialog-shadow);

    .vi-dialog__header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: var(--vi-base-padding);
      font-size: var(--vi-font-size-18);
      font-weight: bolder;
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
      &-title { flex-grow: 1; }
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
}
</style>