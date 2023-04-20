<script setup lang="ts">
import { computed, h } from 'vue'
import { Icon as ViIcon } from '../index'
import tinycolor from 'tinycolor2'

interface Props {
  type?: 'primary' | 'success' | 'info' | 'warning' | 'danger'
  text?: boolean
  round?: boolean
  circle?: boolean
  disabled?: boolean
  loading?: boolean
  isPrefix?: boolean
  bgColor?: string
  color?: string
  plain?: boolean
}
interface Emits {
  (e: 'click', event: MouseEvent): void
}
const props = withDefaults(defineProps<Props>(), {
  type: 'primary',
  text: false,
  round: false,
  circle: false,
  disabled: false,
  loading: false,
  isPrefix: true,
  plain: false
})

const emit = defineEmits<Emits>()

const getClasses = computed(() => [`vi-button--${props.type}`, {
  'is-text-btn': props.text,
  'is-round': props.round,
  'is-circle': props.circle,
  'is-disabled': props.disabled,
  'is-loading': props.loading,
  'is-plain': props.plain
}])
const getStyles = computed(() => ({
  '--vi-button-bg-color': props.bgColor,
  '--vi-button-border-color': props.bgColor,
  '--vi-button-text-color': props.color,
  '--vi-button-bg-color-weak': getPlainBgColor.value
}))

const getPlainBgColor = computed(() => props.bgColor && tinycolor(props.bgColor)?.setAlpha(0.2).toRgbString())

const RenderIcon = () => props.loading && h(ViIcon, { 
  name: 'Loading', 
  size: '16px', 
  cursor: 'wait', 
  loading: true 
})
const handleClick = (e: MouseEvent) => !props.disabled && emit('click', e)

</script>

<template>
  <button 
    class="vi-button" 
    :class="getClasses" 
    :style="getStyles"
    @click="handleClick">
    <slot name="prefix">
      <render-icon v-if="isPrefix" />
    </slot>
    <span>
      <slot />
    </span>
    <slot name="suffix">
      <render-icon v-if="!isPrefix" />
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
  font-size: 14px;
  padding: 6px var(--vi-base-padding);
  border-radius: var(--vi-base-radius);
  color: var(--vi-color-black);
  background-color: var(--vi-color-white);
  transition: all var(--vi-button-animation-duration);
  &:hover { opacity: var(--vi-opacity-half); }
  &:active { opacity: 1; }

  @each $t in $types {
    &--#{$t} {
      --vi-button-bg-color: var(--vi-color-#{$t});
      --vi-button-border-color: var(--vi-color-#{$t});
      --vi-button-text-color: var(--vi-color-white);

      color: var(--vi-button-text-color);
      background-color: var(--vi-button-bg-color);
      border: 1px solid transparent;
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
        opacity: 0.5;
        color: var(--vi-button-text-color);
        background-color: var(--vi-button-bg-color-weak);
      }
      &.is-disabled.is-plain {
        opacity: 0.5;
        color: var(--vi-button-text-color);
        background-color: var(--vi-button-bg-color-weak);
      }
    }
  }

  &.is-text-btn {
    color: var(--vi-color-black);
    background-color: transparent;
    &:hover { background-color: var(--vi-button-text-bg-color); }
    &:active { background-color: transparent; }

    @each $t in $types {
      &.vi-button--#{$t} {
        --vi-button-text-color: var(--vi-color-#{$t});

        color: var(--vi-button-text-color);
      }
    }
  }
  &.is-round {
    border-radius: var(--vi-button-round-radius);
  }
  &.is-circle {
    width: var(--vi-button-circle-wh);
    height: var(--vi-button-circle-wh);
    border-radius: 50%;
  }
  &.is-loading {
    opacity: 0.5;
    cursor: wait;
  }
  &.is-disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
}
</style>
