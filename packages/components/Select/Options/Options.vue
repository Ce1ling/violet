<script lang="ts" setup generic="T extends SelectOption[]">
import { inject } from 'vue'

import type { OptionsProps } from './options'
import type { SelectProps, SelectEmits, SelectOption } from '../select'


defineProps<OptionsProps>()

const selectProps = inject<SelectProps<T>>('selectProps')!
const selectEmits = inject<SelectEmits>('selectEmits')!

const getItemClass = (item: SelectOption) => ({
  'is-active': item.value === selectProps.modelValue
})

const handleItemClick = (item: SelectOption) => {
  selectEmits('update:modelValue', item.value)
}
</script>

<template>
  <Transition name="vi-select-zoom">
    <div class="vi-select-dropdown" v-show="show">
      <ul class="vi-select__list">
        <li 
          class="vi-select__list-item"
          :class="getItemClass(item)"
          v-for="(item, i) in options" 
          :key="i"
          @click="handleItemClick(item)"
        >
          {{ item.label }}
        </li>
      </ul>
    </div>
  </Transition>
</template>

<style lang="scss">
.vi-select {
  & &__list {
    background-color: var(--vi-color-white);
    padding: 0;
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

      &:hover {
        background-color: var(--vi-color-primary-weak);
      }
      
      &.is-active {
        color: var(--vi-color-primary);
        background-color: var(--vi-color-primary-weak);
      }
    }
  }
  .vi-select-dropdown {
    position: absolute;
    inset: 35px 0 0 0;
    z-index: 2023;
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