<script setup lang="ts">
import { ref, computed } from 'vue'
import { Icon as ViIcon } from '../index'

type PreIconObj = {
  'primary'?: string
  'success'?: string
  'info'?: string
  'warning'?: string
  'danger'?: string
}
interface Props {
  type?: string
  dark?: boolean
  closable?: boolean
  preIcon?: boolean
  customPreIcon?: PreIconObj
  center?: 'none' | 'text' | 'all'
}
interface Emits {
  (e: 'close', event: MouseEvent): void
}
const props = withDefaults(defineProps<Props>(), {
  type: 'primary',
  dark: false,
  closable: false,
  preIcon: false,
  center: 'none'
})
const emit = defineEmits<Emits>()

const show = ref<boolean>(true)
const preIconMap = ref<PreIconObj>({
  'primary': 'CheckCircleFill',
  'success': 'CheckCircleFill',
  'info': 'InfoCircleFill',
  'warning': 'WarningCircleFill',
  'danger': 'CloseCircleFill',
  ...props.customPreIcon
})

const classObj = computed(() => [`vi-alert--${props.type}`, {
  'is-dark': props.dark,
  'is-center': props.center === 'text',
  'is-center-all': props.center === 'all'
}])

const handleClose = (e: MouseEvent) => {
  emit('close', e)
  show.value = false
}

</script>

<template>
  <div class="vi-alert" :class="classObj" v-if="show">
    <div class="vi-alert__inner">
      <vi-icon :name="preIconMap[props.type]" v-if="preIcon" />
      <span class="vi-alert__inner-text">
        <slot />
      </span>
    </div>
    <vi-icon name="Close" @click="handleClose" v-if="closable" />
  </div>
</template>

<style lang="scss">
.vi-alert {
  width: 100%;
  padding: calc(var(--vi-base-padding) - 10px) var(--vi-base-padding);
  border-radius: var(--vi-base-radius);
  display: flex;
  align-items: center;
  gap: 8px;

  &__inner {
    width: 100%;
    display: flex;
    align-items: center;
    gap: 8px;
    &-text {
      width: 100%;
    }
  }
  &--primary {
    color: var(--vi-color-primary);
    background-color: var(--vi-color-primary-weak);
    &.is-dark {
      background-color: var(--vi-color-primary);
    }
  }
  &--success {
    color: var(--vi-color-success);
    background-color: var(--vi-color-success-weak);
    &.is-dark {
      background-color: var(--vi-color-success);
    }
  }
  &--info {
    color: var(--vi-color-info);
    background-color: var(--vi-color-info-weak);
    &.is-dark {
      background-color: var(--vi-color-info);
    }
  }
  &--warning {
    color: var(--vi-color-warning);
    background-color: var(--vi-color-warning-weak);
    &.is-dark {
      background-color: var(--vi-color-warning);
    }
  }
  &--danger {
    color: var(--vi-color-danger);
    background-color: var(--vi-color-danger-weak);
    &.is-dark {
      background-color: var(--vi-color-danger);
    }
  }
  &.is-dark {
    color: var(--vi-color-white);
  }
  &.is-center {
    .vi-alert__inner { 
      text-align: center;
    }
  }
  &.is-center-all {
    .vi-alert__inner {
      justify-content: center;
      &-text { width: auto; }
    }
  }
}
</style>