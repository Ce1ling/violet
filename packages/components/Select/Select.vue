<script lang="ts" setup generic="T extends SelectOption[]">
import { ref, computed, provide } from 'vue'
import { clickOutside as vClickOutside } from '../../directives/click-outside'
import { Input as ViInput, Icon as ViIcon } from '../index'
import Options from './Options/Options.vue'

import type { CSSProperties } from 'vue'
import type { SelectProps, SelectEmits, SelectOption } from './select'

const props = defineProps<SelectProps<T>>()
const emit = defineEmits<SelectEmits>()

provide<SelectProps<T>>('selectProps', props)
provide<SelectEmits>('selectEmits', emit)

const isFocus = ref<boolean>(false)

const value = computed<SelectOption['value']>(() => {
  const active = props.options.find(option => option.value === props.modelValue)
  return active ? active.label : ''
})

const getClasses = computed<CSSProperties>(() => ({
  'is-focus': isFocus.value
}))

const handleClick = () => {
  isFocus.value = !isFocus.value
}

const handleInputMouseDown = (e: MouseEvent) => {
  e.preventDefault()
}

const handleClose = () => {
  isFocus.value = false
}
</script>

<template>
  <div 
    class="vi-select" 
    :class="getClasses"
    @click="handleClick" 
    v-click-outside="handleClose"
  >
    <vi-input 
      v-model="value" 
      placeholder="请选择" 
      class="vi-select__input"
      :style="{ cursor: 'pointer' }"
      @mousedown="handleInputMouseDown"
    >
      <template #suffix>
        <vi-icon class="vi-select__input-icon" name="Down" />
      </template>
    </vi-input>
    <Options :show="isFocus" :options="<SelectOption[]>options" />
  </div>
</template>

<style lang="scss">
.vi-select {
  width: 200px;
  position: relative;

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
}
</style>