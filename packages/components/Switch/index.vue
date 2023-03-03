<script setup lang="ts">
import { computed } from 'vue'
import { Icon as ViIcon } from '../index'

interface Props {
  modelValue: boolean
  disabled?: boolean
  loading?: boolean
  isInside?: boolean
  onColor?: string
  offColor?: string
  onText?: string
  offText?: string
  onIcon?: string
  offIcon?: string
}
interface Emits {
  (e: 'update:modelValue', checked: boolean): void
}
const props = withDefaults(defineProps<Props>(), {
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
const emit = defineEmits<Emits>()

const icons = ['onIcon', 'offIcon']
const texts = ['onText', 'offText']

const classObj = computed(() => ({ 
  'is-checked': props.modelValue,
  'is-disabled': props.disabled || props.loading
}))

const toggleChecked = () => {
  if (props.disabled || props.loading) { return }
  emit('update:modelValue', !props.modelValue)
}
/** 
 * 添加激活状态类名
 * @param {Number} type 0 为 off，1 为 on。
 **/
const getDescClass = (type: 0 | 1) => ({ 
  'is-active': type ? props.modelValue : !props.modelValue
})
const hasDesc = (arr: string[]) => (arr.map(v => props[v]).filter(v => v)).length

</script>

<template>
  <div class="vi-switch">
    <template v-if="!isInside">
      <vi-icon :name="offIcon" :class="getDescClass(0)" v-if="hasDesc(icons)" />
      <div :class="getDescClass(0)" v-if="hasDesc(texts)">{{ offText }}</div>
    </template>
    <div class="vi-switch__inner" :class="classObj" @click="toggleChecked">
      <template v-if="isInside">
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
      <div class="vi-switch__active">
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
      <vi-icon :name="onIcon" :class="getDescClass(1)" v-if="hasDesc(icons)" />
      <div :class="getDescClass(1)" v-if="hasDesc(texts)">{{ onText }}</div>
    </template>
  </div>
</template>

<style lang="scss">
.vi-switch {
  display: flex;
  align-items: center;
  gap: 8px;

  .is-active {
    color: v-bind(onColor);
    transition: color var(--vi-animation-duration);
  }

  &__inner {
    width: 40px;
    max-width: 40px;
    height: 20px;
    background-color: v-bind(offColor);
    cursor: pointer;
    position: relative;
    border-radius: 10px;
    display: inline-flex;
    align-items: center;
    
    &-text {
      width: 1.5em;
      font-size: 12px;
      color: #fff;
      user-select: none;
      margin-left: 6px;
      transition: all var(--vi-animation-duration);
      text-overflow: ellipsis;
      white-space: nowrap;
      overflow: hidden;
      &.is-close { margin-left: 20px; }
    }
    &-icon {
      width: 2em;
      margin-left: 2px;
      color: #fff;
      user-select: none;
      transition: margin .3;
      &.is-close {
        margin-left: 18px;
      }
    }
    &.is-checked {
      background-color: v-bind(onColor);
      .vi-switch__active {
        left: calc(100% - 20px);
        border-color: v-bind(onColor);
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
    border: 2px solid v-bind(offColor);
  }
}
</style>