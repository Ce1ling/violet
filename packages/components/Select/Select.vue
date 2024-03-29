<script lang="ts" setup generic="T extends SelectOption[]">
import { ref, computed, provide } from 'vue'
import { clickOutside as vClickOutside } from '../../directives/click-outside'
import { Input as ViInput, Icon as ViIcon } from '../index'
import Options from './Options/Options.vue'

import type { CSSProperties } from 'vue'
import type { 
  SelectProps, 
  SelectEmits, 
  SelectOption, 
  SelectPropsDefaults,
} from './select'
import type { OptionsExpose } from './Options/options'


const props = withDefaults<
  SelectProps<T>, 
  SelectPropsDefaults<T>
>(defineProps<SelectProps<T>>(), {
  disabled: false,
  clearable: false,
  multiple: false,
  max: Infinity
})
const emit = defineEmits<SelectEmits>()

provide<SelectProps<T>>('selectProps', props)
provide<SelectEmits>('selectEmits', emit)

const isFocus = ref<boolean>(false)
const showClearIcon = ref<boolean>(false)
const optionsRef = ref<OptionsExpose>()

const value = computed<SelectOption['value']>(() => {
  if (props.multiple) {
    const modelValues = props.options.map(item => props.modelValue.includes(item.value) ? item.label : '').filter(Boolean)
    return modelValues.join(', ')
  }
  const active = props.options.find(option => option.value === props.modelValue)
  return active ? active.label : ''
})

const selectClass = computed<CSSProperties>(() => ({
  'is-focus': isFocus.value,
  'is-disabled': props.disabled
}))

function handleClose (isRefEl: boolean) {
  if (props.multiple && isRefEl) {
    return
  }
  isFocus.value = false
}

const handleClick = () => {
  if (props.disabled) { return }
  isFocus.value = !isFocus.value
}

const handleInputMouseDown = (e: MouseEvent) => {
  e.preventDefault()
}

const handleMouseEnterLeave = (visible: boolean) => {
  if (props.disabled) { return }
  if (props.clearable) {
    showClearIcon.value = visible
  }
}

const handleClear = () => {
  emit('update:modelValue', props.multiple ? [] : '')
}
</script>

<template>
  <div 
    class="vi-select" 
    :class="selectClass"
    @click="handleClick" 
    v-click-outside:[optionsRef]="handleClose"
    @mouseenter="handleMouseEnterLeave(true)"
    @mouseleave="handleMouseEnterLeave(false)"
  >
    <vi-input 
      v-model="value" 
      placeholder="请选择" 
      class="vi-select__input"
      :style="{ cursor: disabled ? 'not-allowed' : 'pointer' }"
      @mousedown="handleInputMouseDown"
    >
      <template #suffix>
        <vi-icon 
          class="vi-select__input-icon" 
          name="Down" 
          v-show="!showClearIcon" 
          :cursor="disabled ? 'not-allowed' : 'pointer'" 
        />
        <vi-icon name="Close" v-show="showClearIcon" @click.stop="handleClear" />
      </template>
    </vi-input>
    <Options :show="isFocus" :options="<SelectOption[]>options" ref="optionsRef" />
  </div>
</template>

<style lang="scss">
.vi-select {
  position: relative;
  border-radius: var(--vi-base-radius);

  &__input {
    &-icon {
      transition: transform var(--vi-animation-duration);
    }
  }

  &.is-focus {
    .vi-input {
      border-color: var(--vi-color-primary);
    }

    .vi-select__input-icon {
      transform: rotate(180deg);
    }
  }

  &.is-disabled {
    color: var(--vi-select-disabled-color);
    background-color: var(--vi-select-disabled-bg-color);
    .vi-input:hover {
      border-color: var(--vi-select-disabled-border-color);
    }
  }
}
</style>