<script setup lang="ts">
import { computed } from 'vue'
import { Icon as ViIcon } from '../index'

import type { 
  SwitchProps, 
  SwitchEmits, 
  SwitchState,
  SwitchIcons,
  SwitchTexts
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
  offIcon: ''
})
const emit = defineEmits<SwitchEmits>()

const icons: SwitchIcons = ['onIcon', 'offIcon']
const texts: SwitchTexts = ['onText', 'offText']

const getClasses = computed(() => ({ 
  'is-checked': props.modelValue,
  'is-disabled': props.disabled || props.loading
}))
const getStyles = computed(() => ({
  '--vi-switch-off-bg-color': props.offColor,
  '--vi-switch-on-bg-color': props.modelValue ? props.onColor : '',
  '--vi-switch-active-circle-color': props.modelValue ? props.onColor : props.offColor,
  width: props.width
}))

const toggleChecked = () => {
  if (props.disabled || props.loading) { return }
  emit('update:modelValue', !props.modelValue)
}
/** 
 * 为不同的状态添加激活状态类名
 * @param {Number} state 0 为 off 状态，1 为 on 状态。
 **/
const getDescClasses = (state: SwitchState) => ({ 
  'is-active': state ? props.modelValue : !props.modelValue
})
const getDescStyles = (state: SwitchState) => ({
  color: state 
    ? props.modelValue ? props.onColor : ''
    : !props.modelValue ? props.onColor : ''
})
const hasDesc = (arr: SwitchIcons | SwitchTexts) => {
  return (arr.map(v => props[v]).filter(v => v)).length
}
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
          :class="getDescClasses(0)" 
          :style="getDescStyles(0)" 
          v-if="hasDesc(icons)" 
        />
        <div 
          :class="getDescClasses(0)" 
          :style="getDescStyles(0)" 
          v-if="hasDesc(texts)">
          {{ offText }}
        </div>
      </template>
    </template>
    <div class="vi-switch__inner" :class="getClasses" :style="getStyles" @click="toggleChecked">
      <template v-if="isInside">
        <template v-if="$slots.on || $slots.off">
          <div class="vi-switch__inner-text" :class="{ 'is-close': !modelValue }">
            <slot :name="modelValue ? 'on' : 'off'" />
          </div>
        </template>
        <template v-else>
          <vi-icon 
            class="vi-switch__inner-icon" 
            :class="{ 'is-close': !modelValue }" 
            :name="modelValue ? onIcon : offIcon" 
            v-if="onIcon && offIcon" 
          />
          <span class="vi-switch__inner-text" :class="{ 'is-close': !modelValue }">
            {{ modelValue ? onText : offText }}
          </span>
        </template>
      </template>
      <div class="vi-switch__active" >
        <vi-icon 
          name="Loading" 
          size="inherit" 
          :color="modelValue ? onColor : offColor" 
          loading 
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
          :class="getDescClasses(1)" 
          :style="getDescStyles(1)" 
          v-if="hasDesc(icons)" 
        />
        <div 
          :class="getDescClasses(1)" 
          :style="getDescStyles(1)" 
          v-if="hasDesc(texts)">
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
    width: 40px;
    height: 20px;
    background-color: var(--vi-switch-off-bg-color);
    cursor: pointer;
    position: relative;
    border-radius: 10px;
    display: inline-flex;
    align-items: center;
    
    &-text {
      width: 1.5em;
      font-size: var(--vi-font-size-small);
      color: #fff;
      user-select: none;
      margin-left: 6px;
      transition: all var(--vi-animation-duration);
      text-overflow: ellipsis;
      white-space: nowrap;
      overflow: hidden;
      &.is-close { margin-left: 22px; }
    }
    &-icon {
      width: 2em;
      margin-left: 4px;
      color: #fff;
      user-select: none;
      transition: margin .3;
      &.is-close { margin-left: 20px; }
    }
    &.is-checked {
      background-color: var(--vi-switch-on-bg-color);
      .vi-switch__active {
        left: calc(100% - 20px);
        border-color: var(--vi-switch-active-circle-color);
      }
    }
    &.is-disabled {
      cursor: not-allowed;
      opacity: 0.5;
    }
  }
  &__active {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    width: 20px;
    height: 20px;
    background-color: #fff;
    position: absolute;
    top: 0;
    left: 0;
    border-radius: 10px;
    transition: left var(--vi-animation-duration);
    border: 2px solid var(--vi-switch-active-circle-color);
  }
}
</style>