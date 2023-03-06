<script setup lang="ts">
import { computed, onMounted, watch } from 'vue'
import { Icon as ViIcon } from '../index'

interface Props {
  modelValue: number
  disabled?: boolean
  step?: number
  max?: number
  min?: number
  toFixed?: number
}
interface Emits {
  (e: 'update:modelValue', n: number): void
}
const props = withDefaults(defineProps<Props>(), {
  disabled: false,
  step: 1,
  max: Infinity,
  min: -Infinity
})
const emit = defineEmits<Emits>()

const classObj = computed(() => ({ 
  'is-disabled': props.disabled,
}))

const handleInputBlur = ({ target }: Event) => {
  emit('update:modelValue', Number((target as HTMLInputElement).value))
}
type MathType = 'increment' | 'decrement'
const mathOperation = (type: MathType) => {
  if (props.disabled) { return }
  emit('update:modelValue', type === 'increment' 
    ? props.modelValue + props.step 
    : props.modelValue - props.step)
}

watch(() => props.modelValue, val => {
  if ((val > props.max) || (val < props.min)) {
    emit('update:modelValue', val > props.max ? props.max : props.min)
  }
})

onMounted(() => emit('update:modelValue', props.modelValue))

</script>

<template>
  <div class="vi-steper" :class="classObj">
    <div class="vi-steper__decrement">
      <vi-icon 
        name="Minus" 
        class="vi-steper__icon" 
        size="18px"
        @click="mathOperation('decrement')" 
      />
    </div>
    <input 
      class="vi-steper__input" 
      type="number" 
      title=""
      :value="toFixed ? modelValue.toFixed(toFixed) : modelValue" 
      :disabled="disabled" 
      @input="handleInputBlur"
      @blur="handleInputBlur" 
      autocomplete="off"
    />
    <div class="vi-steper__increment">
      <vi-icon 
        name="Plus" 
        class="vi-steper__icon" 
        size="18px"
        @click="mathOperation('increment')" 
      />
    </div>
  </div>
</template>

<style lang="scss">
.vi-steper {
  width: 100%;
  width: 150px;
  padding: 0;
  border: 1px solid var(--vi-color-gray);
  border-radius: var(--vi-base-radius);
  transition: all var(--vi-animation-duration);
  display: flex;
  overflow: hidden;
  position: relative;
  user-select: none;

  &:hover {
    border-color: var(--vi-color-info);
    .vi-steper__decrement,
    .vi-steper__increment {
      border-color: var(--vi-color-info);
    }
  }
  &:focus-within {
    border-color: var(--vi-color-primary);
    .vi-steper__decrement,
    .vi-steper__increment {
      border-color: var(--vi-color-primary);
    }
  }
  &__input {
    width: 100%;
    height: 100%;
    padding: 6px 0;
    border-radius: var(--vi-base-radius);
    text-align: center;
  }
  &__decrement,
  &__increment {
    color: var(--vi-color-black-weak);
    background-color: #f6f6f6;
    padding: 0 var(--vi-base-padding);
    padding: 0 8px;
    border-width: 0;
    border-style: solid;
    border-color: var(--vi-color-gray);
    transition: all var(--vi-animation-duration);
    display: flex;
    align-items: center;
    > .vi-steper__icon { 
      transition: none;
      &:hover { color: var(--vi-color-primary); }
    }
  }
  &__decrement {
    border-right-width: 1px;
  }
  &__increment {
    border-left-width: 1px;
  }
  &.is-disabled {
    background-color: #eeeeee;
    cursor: not-allowed;
    &:hover { border-color: var(--vi-color-gray); }
    .vi-steper__input { 
      cursor: not-allowed;
      color: var(--vi-color-black-weak);
    }
    .vi-steper__decrement,
    .vi-steper__increment {
      background-color: var(--vi-color-info-weak);
      border-color: var(--vi-color-gray);
      pointer-events: none;
    } 
  }
}
</style>