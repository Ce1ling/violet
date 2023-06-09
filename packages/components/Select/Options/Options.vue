<script lang="ts" setup generic="T extends SelectOption[]">
import { ref, inject, computed } from 'vue'
import { Icon as ViIcon } from '../../index'

import type { OptionsProps, OptionsExpose } from './options'
import type { SelectProps, SelectEmits, SelectOption } from '../select'


defineProps<OptionsProps>()

const optionsEl = ref<HTMLElement | null>(null)

const selectProps = inject<SelectProps<T>>('selectProps')!
const selectEmits = inject<SelectEmits>('selectEmits')!

const dropdownStyles = computed(() => ({
  zIndex: new Date().getFullYear()
}))

const getItemClass = (item: SelectOption) => ({
  'is-active': selectProps.multiple 
    ? selectProps.modelValue.includes(item.value) 
    : item.value === selectProps.modelValue
})

const handleItemClick = (item: SelectOption) => {
  if (selectProps.multiple) {
    const arr = [...selectProps.modelValue]

    if (arr.includes(item.value)) { 
      arr.splice(arr.indexOf(item.value), 1)
    } else {
      arr.push(item.value)
    }

    if (arr.length > Number(selectProps.max)) { return }

    selectEmits('update:modelValue', arr)
    return
  }
  selectEmits('update:modelValue', item.value)
}

defineExpose<OptionsExpose>({
  optionsEl
})
</script>

<template>
  <Transition name="vi-select-zoom">
    <div class="vi-select-dropdown" ref="optionsEl" v-show="show" :style="dropdownStyles">
      <ul class="vi-select__list">
        <li 
          class="vi-select__list-item"
          :class="getItemClass(item)"
          v-for="(item, i) in options" 
          :key="i"
          @click.stop="handleItemClick(item)"
        >
          {{ item.label }}
          <vi-icon 
            name="Check" 
            class="vi-select__list-item-icon" 
            v-show="selectProps.modelValue.includes(item.value)" 
          />
        </li>
      </ul>
    </div>
  </Transition>
</template>

<style lang="scss">
.vi-select {
  & &__list {
    background-color: var(--vi-color-white);
    padding: 4px 0;
    margin: 10px 0;
    overflow: hidden;
    border-radius: var(--vi-base-radius);
    box-shadow: var(--vi-select-shadow);

    &-item {
      list-style: none;
      padding: 8px;
      margin: 0;
      cursor: pointer;
      transition: var(--vi-animation-duration);
      position: relative;

      &-icon {
        position: absolute;
        top: 50%;
        right: 10px;
        transform: translateY(-50%);
      }

      &:hover {
        background-color: var(--vi-color-primary-weak);
      }
      
      &.is-active {
        color: var(--vi-color-primary);
      }
    }
  }
  &-dropdown {
    position: absolute;
    inset: 35px 0 0 0;
  }
}

@keyframes vi-select-dropdown-zoom {
  from {
    transform: scaleY(0);
    transform-origin: top center;
    opacity: 0;
  }
  to {
    transform: scaleY(1);
    transform-origin: top center;
    opacity: 1;
  }
}

.vi-select-zoom {
  &-enter-active {
    animation: vi-select-dropdown-zoom calc(var(--vi-animation-duration) / 2);
  }
  &-leave-active {
    animation: vi-select-dropdown-zoom calc(var(--vi-animation-duration) / 2) reverse;
  }
}
</style>