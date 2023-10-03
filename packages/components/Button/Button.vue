<script setup lang="ts">
import { computed, h } from 'vue'
import tinycolor from 'tinycolor2'

import { Icon as ViIcon } from '../index'

import type { ButtonProps, ButtonEmits, ButtonSlots } from './button'

const props = withDefaults(defineProps<ButtonProps>(), {
  type: 'primary',
  text: false,
  round: false,
  circle: false,
  disabled: false,
  loading: false,
  isPrefix: true,
  plain: false,
  size: 'normal',
  disableShadow: false,
})

const emit = defineEmits<ButtonEmits>()

defineSlots<ButtonSlots>()

const buttonClass = computed(() => [
  `vi-button--${props.type}`,
  `vi-button--${props.size}`,
  {
    'is-text-btn': props.text,
    'is-round': props.round,
    'is-circle': props.circle,
    'is-disabled': props.disabled,
    'is-loading': props.loading,
    'is-plain': props.plain,
  },
])

const buttonStyle = computed(() => {
  const styleVars = [
    ['--vi-button-bg-color', props.bgColor],
    ['--vi-button-border-color', props.bgColor],
    ['--vi-button-text-color', props.color],
    ['--vi-button-bg-color-weak', plainBgColor.value],
  ]

  if (props.bgColor && props.bgColor.trim() !== '') {
    styleVars.push(
      [`--vi-color-${props.type}-deep`, props.bgColor],
      [`--vi-color-${props.type}`, props.bgColor]
    )
  }

  if (props.disableShadow) {
    styleVars.push(['box-shadow', 'none'])
  }

  return Object.fromEntries(styleVars)
})

const plainBgColor = computed(
  () => props.bgColor && tinycolor(props.bgColor)?.setAlpha(0.2).toRgbString()
)

const RenderIcon = () =>
  props.loading &&
  h(ViIcon, {
    name: 'Loading',
    size: '16px',
    cursor: 'wait',
    loading: true,
  })

const handleClick = (e: MouseEvent) => !props.disabled && emit('click', e)
</script>

<template>
  <button
    class="vi-button"
    :class="buttonClass"
    :style="buttonStyle"
    @click="handleClick"
  >
    <slot name="prefix">
      <RenderIcon v-if="isPrefix" />
    </slot>
    <span class="vi-button__inner">
      <slot />
    </span>
    <slot name="suffix">
      <RenderIcon v-if="!isPrefix" />
    </slot>
  </button>
</template>

<style lang="scss">
$types: primary, success, info, warning, danger;

.vi-button {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4px;
  width: auto;
  text-align: center;
  cursor: pointer;
  border: none;
  font-size: var(--vi-font-size-base);
  padding: var(--vi-button-padding-normal);
  border-radius: var(--vi-base-radius);
  color: var(--vi-color-black);
  background-color: var(--vi-color-white);
  transition: all var(--vi-button-animation-duration);

  &__inner {
    font-size: inherit;
  }

  @each $t in $types {
    &--#{$t} {
      --vi-button-bg-color: var(--vi-color-#{$t});
      --vi-button-border-color: var(--vi-color-#{$t});
      --vi-button-text-color: var(--vi-color-white);

      color: var(--vi-button-text-color);
      background-color: var(--vi-button-bg-color);
      border: 1px solid transparent;

      &:hover {
        opacity: var(--vi-opacity-half);
        box-shadow: var(--vi-button-shadow) var(--vi-color-#{$t}-deep);
      }
      &:active {
        opacity: 1;
        box-shadow: var(--vi-button-shadow) var(--vi-color-#{$t});
      }
      &.is-plain {
        --vi-button-text-color: var(--vi-button-bg-color);
        --vi-button-bg-color-weak: var(--vi-color-#{$t}-weak);

        color: var(--vi-button-text-color);
        background-color: var(--vi-button-bg-color-weak);
        border-color: var(--vi-button-border-color);
        &:hover {
          opacity: 1;
          color: var(--vi-color-white);
          background-color: var(--vi-button-bg-color);
        }
        &:active {
          opacity: var(--vi-opacity-half);
        }
      }
      &.is-loading.is-plain {
        opacity: var(--vi-opacity-half);
        color: var(--vi-button-text-color);
        background-color: var(--vi-button-bg-color-weak);
      }
      &.is-disabled.is-plain {
        opacity: var(--vi-opacity-half);
        color: var(--vi-button-text-color);
        background-color: var(--vi-button-bg-color-weak);
      }
    }
  }

  &.is-text-btn {
    color: var(--vi-color-black);
    background-color: transparent;
    box-shadow: none;

    @each $t in $types {
      &.vi-button--#{$t} {
        --vi-button-text-color: var(--vi-color-#{$t});
        color: var(--vi-button-text-color);

        &:hover {
          background-color: var(--vi-color-#{$t}-weak);
        }
      }
    }
  }
  &.is-round {
    border-radius: var(--vi-rounded);
  }
  &.is-circle {
    width: var(--vi-button-circle-normal);
    height: var(--vi-button-circle-normal);
    border-radius: 50%;
    word-break: keep-all;
  }
  &.is-loading {
    opacity: var(--vi-opacity-half);
    cursor: wait;
    box-shadow: none;
  }
  &.is-disabled {
    opacity: var(--vi-opacity-half);
    cursor: not-allowed;
    box-shadow: none;
  }

  &--small {
    padding: var(--vi-button-padding-small);
    font-size: var(--vi-font-size-small);
    &.is-circle {
      width: var(--vi-button-circle-small);
      height: var(--vi-button-circle-small);
    }
  }
  &--large {
    padding: var(--vi-button-padding-large);
    font-size: var(--vi-font-size-large);
    &.is-circle {
      padding: 0;
      width: var(--vi-button-circle-large);
      height: var(--vi-button-circle-large);
    }
  }
}
</style>
