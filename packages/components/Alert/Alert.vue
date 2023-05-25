<script setup lang="ts">
import { ref, computed } from 'vue'
import { Icon as ViIcon } from '../index'

import type { AlertProps, AlertEmits, AlertDefaultPreIcon } from './alert'


const props = withDefaults(defineProps<AlertProps>(), {
  type: 'primary',
  dark: false,
  closable: false,
  preIcon: false,
  center: 'none',
  title: '',
  content: ''
})
const emit = defineEmits<AlertEmits>()

const show = ref<boolean>(true)

const defaultPreIcon: AlertDefaultPreIcon = {
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
const getPreIcon = computed(() => {
  return typeof props.preIcon === 'string' 
    ? props.preIcon 
    : defaultPreIcon[props.type]!
})

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
$types: primary, success, info, warning, danger;

.vi-alert {
  width: 100%;
  padding: calc(var(--vi-base-padding) - 10px) var(--vi-base-padding);
  border-radius: var(--vi-base-radius);
  display: flex;
  align-items: center;
  gap: 8px;

  @each $t in $types {
    &--#{$t} {
      --vi-alert-bg-color: var(--vi-color-#{$t}-weak);
      --vi-alert-color: var(--vi-color-#{$t});
      color: var(--vi-alert-color);
      background-color: var(--vi-alert-bg-color);
      &.is-dark {
        background-color: var(--vi-alert-color);
      }
    }
  }

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

.vi-alert-fade-leave-active {
  opacity: 0;
  transform: translateY(-100%);
  transition: all var(--vi-animation-duration);
}
</style>