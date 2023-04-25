<script setup lang="ts">
import { computed, onMounted, watch, ref, nextTick } from 'vue'
import { Icon as ViIcon } from '../index'

interface Props {
  modelValue: number
  disabled?: boolean
  step?: number
  max?: number
  min?: number
  toFixed?: number
  position?: 'normal' | 'left' | 'right'
  iconSize?: string
}
interface Emits {
  (e: 'update:modelValue', n: number): void
}
const props = withDefaults(defineProps<Props>(), {
  disabled: false,
  step: 1,
  max: Infinity,
  min: -Infinity,
  toFixed: 0,
  position: 'normal'
})
const emit = defineEmits<Emits>()

const decrementEl = ref<HTMLDivElement>()
const inputWidth = ref<string>('0px')

const getClasses = computed(() => ({ 'is-disabled': props.disabled }))
const getPositionClass = computed(() => props.position === 'normal' || `is-${props.position}`)
const incrementClass = computed(() => ({ 'is-disabled': props.modelValue >= props.max }))
const decrementClass = computed(() => ({ 'is-disabled': props.modelValue <= props.min }))
const getIconSize = computed(() => props.iconSize 
  ? props.iconSize 
  : props.position === 'normal' ? '18px' : '12px'
)
const getInputStyles = computed(() => ({
  width: `calc(100% - ${inputWidth.value})`
}))

const updateModelValue = (n: number) => {
  if ((n > props.max) || (n < props.min)) {
    emit('update:modelValue', n > props.max ? props.max : props.min)
    return
  }
  emit('update:modelValue', n)
}
const handleInputBlur = ({ target }: Event) => {
  /** 此处不能使用 updateModelValue 更新，否则可输入大于限制的数值 */ 
  emit('update:modelValue', Number((target as HTMLInputElement).value))
}
type Action = 'increment' | 'decrement'
const calcStep = (action: Action) => {
  if (props.disabled) { return }
  updateModelValue(action === 'increment' 
    ? props.modelValue + props.step 
    : props.modelValue - props.step)
}
const getInputWidth = async () => {
  // normal 无需获取宽度
  /** 服了，难怪出现奇怪的 bug，原来是这里的 "===" 写成了 "=" */
  if (props.position === 'normal') { return }
  await nextTick()
  inputWidth.value = decrementEl.value?.offsetWidth + 'px'
}

watch(() => props.modelValue, val => updateModelValue(val))

onMounted(() => {
  updateModelValue(props.modelValue)
  getInputWidth()
})

</script>

<template>
  <div class="vi-stepper" :class="[getPositionClass, getClasses]">
    <div 
      ref="decrementEl" 
      class="vi-stepper__decrement" 
      :class="[getPositionClass, decrementClass]" 
      @click="calcStep('decrement')">
      <vi-icon 
        name="Minus" 
        class="vi-stepper__icon" 
        :size="getIconSize"
        :cursor="modelValue <= min ? 'not-allowed' : 'pointer'"
      />
    </div>
    <input 
      class="vi-stepper__input" 
      type="number" 
      autocomplete="off"
      title=""
      :value="modelValue.toFixed(toFixed)" 
      :disabled="disabled" 
      :style="getInputStyles"
      @input="handleInputBlur"
      @blur="handleInputBlur" 
      v-bind="$attrs"
    />
    <div 
      class="vi-stepper__increment" 
      :class="[getPositionClass, incrementClass]" 
      @click="calcStep('increment')">
      <vi-icon 
        name="Plus" 
        class="vi-stepper__icon" 
        :size="getIconSize"
        :cursor="modelValue >= max ? 'not-allowed' : 'pointer'"
      />
    </div>
  </div>
</template>

<style lang="scss">
.vi-stepper {
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
    .vi-stepper__decrement,
    .vi-stepper__increment {
      border-color: var(--vi-color-info);
    }
  }
  &:focus-within {
    border-color: var(--vi-color-primary);
    .vi-stepper__decrement,
    .vi-stepper__increment {
      border-color: var(--vi-color-primary);
    }
  }
  &__input {
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
    cursor: pointer;
    &:hover {
      .vi-stepper__icon { 
        color: var(--vi-color-primary);
      }
    }
    &.is-left {
      position: absolute;
      top: auto;
      right: auto;
      bottom: 0;
      left: 0;
      border: none;
      border-right: 1px solid var(--vi-color-gray);
      height: 50%;
    }
    &.is-right {
      position: absolute;
      top: auto;
      right: 0;
      bottom: 0;
      left: auto;
      border: none;
      border-left: 1px solid var(--vi-color-gray);
      height: 50%;
    }
    &.is-disabled {
      color: var(--vi-color-info);
      cursor: not-allowed;
      .vi-stepper__icon:hover { color: var(--vi-color-info); }
    }
  }
  &__decrement {
    border-right-width: 1px;
  }
  &__increment {
    border-left-width: 1px;
    &.is-left {
      top: 0;
      right: auto;
      bottom: auto;
      left: 0;
      border-bottom: 1px solid var(--vi-color-gray);
    }
    &.is-right {
      top: 0;
      right: 0;
      bottom: auto;
      left: auto;
      border-bottom: 1px solid var(--vi-color-gray);
    }
  }
  &.is-disabled {
    background-color: #eeeeee;
    cursor: not-allowed;
    &:hover { border-color: var(--vi-color-gray); }
    .vi-stepper__input { 
      cursor: not-allowed;
      color: var(--vi-color-black-weak);
    }
    .vi-stepper__decrement,
    .vi-stepper__increment {
      background-color: var(--vi-color-info-weak);
      border-color: var(--vi-color-gray);
      pointer-events: none;
    } 
  }
  &.is-left {
    justify-content: flex-end;
  }
  &.is-right {
    justify-content: flex-start;
  }
}
</style>