<script setup lang="ts">
import { computed, onMounted, watch } from 'vue'
import { Icon as ViIcon } from '../index'

interface Props {
  modelValue: number
  disabled?: boolean
  step?: number
  min?: number
  max?: number
  toFixed?: number
}
interface Emits {
  (e: 'update:modelValue', num: number): void
}
const props = withDefaults(defineProps<Props>(), {
  disabled: false,
  step: 1,
  min: -Infinity,
  max: Infinity
})
const emit = defineEmits<Emits>()

const classObj = computed(() => ({ 
  'is-disabled': props.disabled,
}))

/** 
 * 更新 v-model 的值，但此方法会判断是否超过了 最大/最小 限制。
 * @param {Number} num 如果传递了此参数，则根据此参数判断是否超过了 最大/最小 限制。
 * @return {Boolean} 返回 true 则超过了限制，false 未超过。
 **/
const updateModelValue = (num?: number): boolean => {
  const val = num ?? props.modelValue
  if ((val > props.max) || (val < props.min)) {
    emit('update:modelValue', val > props.max ? props.max : props.min)
    return true
  }
  emit('update:modelValue', val)
  return false
}
const handleInput = ({ target }: Event) => {
  updateModelValue(Number((target as HTMLInputElement).value))
}
type MathType = 'increment' | 'decrement'
const mathOperation = (type: MathType) => {
  if (props.disabled) { return }
  updateModelValue(type === 'increment' 
    ? props.modelValue + props.step 
    : props.modelValue - props.step)
}

watch(() => props.modelValue, val => updateModelValue(val))

onMounted(() => updateModelValue())

</script>

<template>
  <div class="vi-steper" :class="classObj">
    <div class="vi-steper__prepend">
      <vi-icon name="Minus" @click="mathOperation('decrement')" />
    </div>
    <input 
      class="vi-steper__input" 
      type="number" 
      title=""
      :value="toFixed ? modelValue.toFixed(toFixed) : modelValue" 
      :disabled="disabled" 
      :min="props.min"
      :max="props.max"
      @input="handleInput" 
      autocomplete="off"
    />
    <div class="vi-steper__append">
      <vi-icon name="Plus" @click="mathOperation('increment')" />
    </div>
  </div>
</template>

<style lang="scss">
.vi-steper {
  width: 100%;
  width: 150px;
  padding: 0;
  border: 1px solid var(--vi-color-info);
  border-radius: var(--vi-base-radius);
  transition: all var(--vi-animation-duration);
  display: flex;
  overflow: hidden;
  position: relative;
  user-select: none;

  &:hover {
    border-color: var(--vi-color-black-weak);
    .vi-steper__prepend,
    .vi-steper__append {
      border-color: #808080;
    }
  }
  &:focus-within {
    border-color: var(--vi-color-primary);
    .vi-steper__prepend,
    .vi-steper__append {
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
  &__prepend,
  &__append {
    color: var(--vi-color-black-weak);
    background-color: var(--vi-color-primary-weak);
    padding: 0 var(--vi-base-padding);
    padding: 0 8px;
    border-width: 0;
    border-style: solid;
    border-color: var(--vi-color-info);
    transition: all var(--vi-animation-duration);
    display: flex;
    align-items: center;
    > .vi-icon { 
      transition: none;
      &:hover { color: var(--vi-color-primary); }
    }
  }
  &__prepend {
    border-right-width: 1px;
  }
  &__append {
    border-left-width: 1px;
  }
  &.is-disabled {
    background-color: #eeeeee;
    cursor: not-allowed;
    &:hover { border-color: var(--vi-color-info); }
    .vi-steper__input { 
      cursor: not-allowed;
      color: var(--vi-color-black-weak);
    }
    .vi-steper__prepend,
    .vi-steper__append {
      background-color: var(--vi-color-info-weak);
      border-color: var(--vi-color-info);
      pointer-events: none;
    } 
  }
}
</style>