<script setup lang="ts">
import { computed } from 'vue'
import { Icon as ViIcon } from '../index'

import type {
  SwitchProps,
  SwitchEmits,
  SwitchState,
  SwitchIcons,
  SwitchTexts,
  SwitchSlots,
} from './switch'

const props = withDefaults(defineProps<SwitchProps>(), {
  onColor: 'var(--vi-color-primary)',
  offColor: 'var(--vi-color-shadow)',
  disabled: false,
  loading: false,
  isInside: false,
  onText: '',
  offText: '',
  onIcon: '',
  offIcon: '',
  size: 'normal',
})

const emit = defineEmits<SwitchEmits>()

defineSlots<SwitchSlots>()

const icons: SwitchIcons = ['onIcon', 'offIcon']
const texts: SwitchTexts = ['onText', 'offText']

const switchClass = computed(() => [
  `vi-switch--${props.size}`,
  {
    'is-checked': props.modelValue,
    'is-disabled': props.disabled,
    'is-loading': props.loading,
  },
])

const switchStyle = computed(() => ({
  '--vi-switch-off-bg-color': props.offColor,
  '--vi-switch-on-bg-color': props.modelValue ? props.onColor : '',
  '--vi-switch-active-circle-border-color': props.modelValue
    ? props.onColor
    : props.offColor,
  width:
    props.width ?? (hasDesc(icons) || hasDesc(texts))
      ? 'unset'
      : 'var(--vi-switch-width)',
  minWidth: hasDesc(icons) || hasDesc(texts) ? 'var(--vi-switch-width)' : '',
}))

const toggleChecked = () => {
  if (props.disabled || props.loading) return

  emit('update:modelValue', !props.modelValue)
}

/**
 * 为不同的状态添加激活状态类名
 * @param {Number} state 0 为 off 状态，1 为 on 状态。
 **/
const getDescClass = (state: SwitchState) => ({
  'is-active': state ? props.modelValue : !props.modelValue,
})

const getDescStyle = (state: SwitchState) => ({
  color: state
    ? props.modelValue
      ? props.onColor
      : ''
    : !props.modelValue
    ? props.onColor
    : '',
})

const hasDesc = (arr: SwitchIcons | SwitchTexts) =>
  !!arr.map(e => props[e]).filter(Boolean).length
</script>

<template>
  <div class="vi-switch">
    <template v-if="!isInside">
      <template v-if="$slots.on">
        <slot name="on" />
      </template>
      <template v-else>
        <vi-icon
          :name="offIcon"
          :class="getDescClass(0)"
          :style="getDescStyle(0)"
          v-if="hasDesc(icons)"
        />
        <div
          :class="getDescClass(0)"
          :style="getDescStyle(0)"
          v-if="hasDesc(texts)"
        >
          {{ offText }}
        </div>
      </template>
    </template>
    <div
      class="vi-switch__inner"
      :class="switchClass"
      :style="switchStyle"
      @click="toggleChecked"
    >
      <template v-if="isInside">
        <template v-if="$slots.on || $slots.off">
          <div
            class="vi-switch__inner-text"
            :class="{ 'is-close': !modelValue }"
            :style="{ marginLeft: modelValue ? '4px' : '20px' }"
          >
            <slot :name="modelValue ? 'on' : 'off'" />
          </div>
        </template>
        <template v-else>
          <vi-icon
            class="vi-switch__inner-icon"
            :class="{ 'is-close': !modelValue }"
            :name="modelValue ? onIcon : offIcon"
            :style="{ marginLeft: modelValue ? '4px' : '20px' }"
            v-if="onIcon && offIcon"
          />
          <span
            class="vi-switch__inner-text"
            :class="{ 'is-close': !modelValue }"
            :style="{ marginRight: modelValue ? '20px' : '4px' }"
            v-if="(onText.trim() || offText.trim()) !== ''"
          >
            {{ modelValue ? onText : offText }}
          </span>
        </template>
      </template>
      <div class="vi-switch__active">
        <vi-icon
          name="Loading"
          size="inherit"
          :color="modelValue ? onColor : offColor"
          loading
          cursor="wait"
          v-if="loading"
        />
      </div>
    </div>
    <template v-if="!isInside">
      <template v-if="$slots.off">
        <slot name="off" />
      </template>
      <template v-else>
        <vi-icon
          :name="onIcon"
          :class="getDescClass(1)"
          :style="getDescStyle(1)"
          v-if="hasDesc(icons)"
        />
        <div
          :class="getDescClass(1)"
          :style="getDescStyle(1)"
          v-if="hasDesc(texts)"
        >
          {{ onText }}
        </div>
      </template>
    </template>
  </div>
</template>

<style lang="scss">
.vi-switch {
  display: flex;
  align-items: center;
  gap: 8px;

  .is-active {
    transition: color var(--vi-animation-duration);
  }
  &__inner {
    // width: var(--vi-switch-width);
    height: var(--vi-switch-height);
    background-color: var(--vi-switch-off-bg-color);
    cursor: pointer;
    position: relative;
    border-radius: var(--vi-switch-height);
    display: inline-flex;
    align-items: center;

    &-text {
      font-size: var(--vi-font-size-small);
      color: #fff;
      user-select: none;
      margin-left: 6px;
      margin-right: 6px;
      transition: all var(--vi-animation-duration);
      text-overflow: ellipsis;
      white-space: nowrap;
      overflow: hidden;

      &.is-close {
        margin-left: calc(
          var(--vi-switch-height) + var(--vi-switch-border-width)
        );
      }
    }
    &-icon {
      // width: 2em;
      // margin-left: 4px;
      color: #fff;
      user-select: none;
      transition: margin 0.3s;

      &.is-close {
        margin-left: 20px;
      }
    }
    &.is-checked {
      background-color: var(--vi-switch-on-bg-color);

      .vi-switch__active {
        left: calc(100% - var(--vi-switch-height));
        border-color: var(--vi-switch-active-circle-border-color);
      }
    }
    &.is-disabled {
      cursor: not-allowed;
      opacity: 0.5;
    }
    &.is-loading {
      cursor: wait;
      opacity: 0.5;
    }
  }
  &__active {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    width: var(--vi-switch-height);
    height: var(--vi-switch-height);
    background-color: var(--vi-switch-active-circle-color);
    position: absolute;
    top: 0;
    left: 0;
    border-radius: var(--vi-switch-height);
    transition: left var(--vi-animation-duration);
    border: var(--vi-switch-border-width) solid
      var(--vi-switch-active-circle-border-color);
  }
  &--small {
    --vi-switch-width: 32px;
    --vi-switch-height: 16px;
  }
  &--large {
    --vi-switch-width: 50px;
    --vi-switch-height: 26px;
  }
}
</style>
