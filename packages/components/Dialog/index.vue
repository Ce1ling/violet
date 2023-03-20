<script setup lang="ts">
import { Icon as ViIcon } from '../index'

interface Props {
  modelValue: boolean
  title: string
}
interface Emits {
  (e: 'update:modelValue', val: boolean): void
  (e: 'close', val: boolean): void
}
const props = withDefaults(defineProps<Props>(), {
})
const emit = defineEmits<Emits>()

const handleClose = () => {
  emit('update:modelValue', false)
  emit('close', props.modelValue)
}

</script>

<template>
  <div class="vi-dialog vi-dialog-mask" v-show="modelValue" @click="handleClose">
    <div class="vi-dialog-content" @click.stop="void">
      <header class="vi-dialog__header">
        <span class="vi-dialog__header-title">{{ title }}</span>
        <slot name="header" />
        <button class="vi-dialog__header-close-btn" @click="handleClose">
          <vi-icon 
            name="Close" 
            size="18px"
            hover-color="var(--vi-color-primary)" 
          />
        </button>
      </header>
      <section class="vi-dialog__body">
        <slot />
      </section>
      <footer class="vi-dialog__footer">
        <slot name="footer" />
      </footer>
    </div>
  </div>
</template>

<style lang="scss">

@keyframes vi-dialog-fade-in {
  from {
    opacity: 0;
    transform: translate(0%, -10%);
  }
  to {
    opacity: 1;
    transform: translate(0%, 0%);
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
    width: 50%;
    margin: 10vh auto;
    background-color: var(--vi-color-white);
    padding: var(--vi-base-padding);
    border-radius: var(--vi-base-radius);
    animation: vi-dialog-fade-in var(--vi-animation-duration);

    .vi-dialog__header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      .vi-dialog__header-title {
        font-size: var(--vi-font-size-18);
        font-weight: bolder;
      }
    }
    .vi-dialog__body {
      padding: var(--vi-base-padding) 0;
    }
    .vi-dialog__footer {
      display: flex;
      align-items: center;
      gap: 18px;
      padding: var(--vi-base-padding) 0;
    }
  }
}
</style>