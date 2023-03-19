<script setup lang="ts">
import { ref, computed } from 'vue'
import { Icon as ViIcon } from '../index'

type AlertType = 'primary' | 'success' | 'info' | 'warning' | 'danger'
interface Props {
  type?: AlertType
  dark?: boolean
  closable?: boolean
  preIcon?: boolean | string
  center?: 'none' | 'text' | 'all'
  title?: string
  content?: string
}
interface Emits {
  (e: 'close', event: MouseEvent): void
}
const props = withDefaults(defineProps<Props>(), {
  type: 'primary',
  dark: false,
  closable: false,
  preIcon: false,
  center: 'none',
  title: '',
  content: ''
})
const emit = defineEmits<Emits>()

const show = ref<boolean>(true)
type PreIconObj = {
  [k in AlertType]?: string
}
const defaultPreIcon: PreIconObj = {
  'primary': 'CheckCircleFill',
  'success': 'CheckCircleFill',
  'info': 'InfoCircleFill',
  'warning': 'WarningCircleFill',
  'danger': 'CloseCircleFill'
}

const classObj = computed(() => [`vi-alert--${props.type}`, {
  'is-dark': props.dark,
  'is-center': props.center === 'text',
  'is-center-all': props.center === 'all',
  'has-title': props.title.trim()
}])
const getPreIcon = computed(() => typeof props.preIcon === 'string' 
  ? props.preIcon 
  : defaultPreIcon[props.type]!
)

const handleClose = (e: MouseEvent) => {
  emit('close', e)
  show.value = false
}

</script>

<template>
  <Transition name="vi-alert-fade">
    <div class="vi-alert" :class="classObj" v-if="show">
      <div class="vi-alert__inner">
        <vi-icon 
          cursor="defualt"
          :name="getPreIcon" 
          :size="title.trim() && '24px'"
          v-if="preIcon" 
        />
        <div class="vi-alert__inner-text">
          <span class="vi-alert__inner-text-title" v-if="title.trim()">
            {{ title }}
          </span>
          <span class="vi-alert__inner-text-content" v-if="content.trim()">
            {{ content }}
          </span>
          <slot v-else />
        </div>
      </div>
      <div class="vi-alert__close" @click="handleClose" v-if="closable">
        <slot name="close">
          <vi-icon name="Close" />
        </slot>
      </div>
    </div>
  </Transition>
</template>

<style lang="scss">
.vi-alert-fade-leave-active {
  opacity: 0;
  transform: translateY(-100%);
  transition: all var(--vi-animation-duration);
}

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
  &__close {
    cursor: pointer;
    flex-shrink: 0;
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
  &.has-title {
    .vi-alert__inner-text {
      display: flex;
      flex-direction: column;
      font-size: var(--vi-font-size-small);
      &-title { font-weight: bolder; }
      &-content { font-size: var(--vi-font-size-small); }
    }
  }
}
</style>