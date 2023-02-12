<script setup lang="ts">
import { computed, ref, watch } from 'vue'
import { Icon as ViIcon } from '../index'

type Props = {
  onColor: string
  offColor: string
  modelValue: boolean
  disabled: boolean
  loading: boolean
  onContent: string
  offContent: string
  isInside: boolean
}
const props = withDefaults(defineProps<Props>(), {
  onColor: 'var(--primary-color)',
  offColor: 'var(--shadow-color)',
  disabled: false,
  loading: false,
  isInside: false
})
type Emits = {
  (e: 'update:modelValue', checked: boolean): void
}
const emit = defineEmits<Emits>()

const checked = ref(props.modelValue)

watch(() => props.modelValue, n => checked.value = n)

const classObj = computed(() => {
  return { 
    'is-checked': checked.value,
    'is-disabled': props.disabled || props.loading
  }
})

const toggleChecked = () => {
  if (props.disabled || props.loading) { return }
  checked.value = !checked.value
  emit('update:modelValue', checked.value)
}

</script>

<template>
  <div class="vi-switch">
    <div :class="{ 'is-active': !checked }" v-if="!isInside && onContent">{{ onContent }}</div>
    <div class="vi-switch__inner" :class="classObj" @click="toggleChecked">
      <span v-if="isInside" class="vi-switch__inner-text" :class="{ 'is-close': !checked }">
        {{ checked ? onContent : offContent }}
      </span>
      <div class="vi-switch__active">
        <vi-icon 
          name="Loading" 
          size="inherit" 
          :color="checked ? onColor : offColor" 
          loading 
          v-if="loading"
        />
      </div>
    </div>
    <div :class="{ 'is-active': checked }" v-if="!isInside && offContent">{{ offContent }}</div>
  </div>
</template>

<style lang="scss">
.vi-switch {
  display: flex;
  align-items: center;
  gap: 8px;

  .is-active {
    color: v-bind(onColor);
    transition: color .3s;
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
      transition: all .3s;
      text-overflow: ellipsis;
      white-space: nowrap;
      overflow: hidden;
      &.is-close {
        margin-left: 20px;
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
    transition: left .3s;
    border: 2px solid v-bind(offColor);
  }
}
</style>