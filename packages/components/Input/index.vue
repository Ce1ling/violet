<script setup lang="ts">
import { computed, ref, watch, h, useSlots } from 'vue'
import { Icon as ViIcon } from '../index'

type Icon = typeof ViIcon | string
interface Props {
  modelValue: string
  type?: string
  disabled?: boolean
  clearable?: boolean
  showPwd?: boolean
  rows?: string
  limit?: string
  showLimit?: boolean
  preIcon?: Icon
  sufIcon?: Icon
}
const props = withDefaults(defineProps<Props>(), {
  type: 'text',
  disabled: false,
  clearable: false,
  showPwd: false,
  rows: '2',
  limit: '',
  showLimit: false
})
interface Emits {
  (e: 'update:modelValue', value: string): void
}
const emit = defineEmits<Emits>()

const slots = useSlots()
const viInputEl = ref<HTMLInputElement>()
const isShowClear = ref(false)
const isShowPwd = ref(false)
const isPwdInput = ref(props.type === 'password')

const classObj = computed(() => ({ 
  'is-disabled': props.disabled,
  'vi-input-textarea': props.type === 'textarea',
  'vi-input-group': slots.prepend || slots.append
}))
const getLineHeight = computed(() => `${viInputEl.value!.offsetHeight - 1}px`)

const handleInput = ({ target }: Event) => {
  emit('update:modelValue', (target as HTMLInputElement).value)
}
const clearInput = () => {
  emit('update:modelValue', '')
  viInputEl.value?.focus()
}
const toggleShowPwd = () => {
  const el = viInputEl.value!
  el.type = isPwdInput.value ? 'text' : 'password'
  isPwdInput.value = !isPwdInput.value
  el.focus()
}
const RenderLimit = () => h('span', {
  class: [
    `vi-input__limit-${props.type === 'textarea' ? props.type : 'input'}`, 
    { 'is-max': props.modelValue.length >= Number(props.limit) }
  ],
}, `${props.modelValue.length} / ${props.limit}`)
const getIconAttrs = (type: Icon) => {
  return typeof type === 'string' 
    ? { name: type, size: 'inherit' }
    : type
}

watch(() => props.modelValue, val => {
  if (props.clearable) { isShowClear.value = !!val }
  if (props.showPwd) { isShowPwd.value = !!val }
})

</script>

<template>
  <div class="vi-input" :class="classObj">
    <template v-if="type === 'textarea'">
      <textarea 
        ref="viInputEl" 
        class="vi-input__input" 
        autocomplete="off"
        :value="modelValue" 
        :disabled="disabled" 
        :rows="rows" 
        :maxlength="limit" 
        @input="handleInput" 
        v-bind="$attrs"
      ></textarea>
      <render-limit v-if="limit.trim() && showLimit" />
    </template>
    <template v-else>
      <div class="vi-input__prepend" v-if="$slots.prepend">
        <slot name="prepend" />
      </div>
      <span class="vi-input__prefix-icon" v-if="$slots.prefix || preIcon">
        <vi-icon v-bind="getIconAttrs(preIcon)" v-if="preIcon" />
        <slot name="prefix" v-else />
      </span>
      <input 
        ref="viInputEl" 
        class="vi-input__input" 
        autocomplete="off"
        :type="type" 
        :value="modelValue" 
        :disabled="disabled" 
        :maxlength="limit" 
        @input="handleInput" 
        v-bind="$attrs"
      />
      <span class="vi-input__suffix-icon" v-if="$slots.suffix || sufIcon">
        <vi-icon v-bind="getIconAttrs(sufIcon)" v-if="sufIcon" />
        <slot name="suffix" v-else />
      </span>
      <vi-icon 
        class="vi-input__input-clear"
        title="清除" 
        name="CloseCircle" 
        size="16px" 
        color="var(--vi-color-info)" 
        hover-color="var(--vi-color-primary)" 
        @click="clearInput" 
        v-if="isShowClear" 
      />
      <vi-icon 
        class="vi-input__input-show-hidden"
        :title="isPwdInput ? '显示' : '隐藏'" 
        :name="isPwdInput ? 'VisibilityOff': 'Visibility'" 
        size="16px" 
        color="var(--vi-color-info)" 
        hover-color="var(--vi-color-primary)" 
        @click="toggleShowPwd" 
        v-if="props.type === 'password' && isShowPwd" 
      />
      <render-limit v-if="limit.trim() && showLimit" />
      <div class="vi-input__append" v-if="$slots.append">
        <slot name="append" />
      </div>
    </template>
  </div>
</template>

<style lang="scss">
.vi-input {
  width: 100%;
  border: 1px solid var(--vi-color-info);
  border-radius: var(--vi-base-radius);
  transition: all .3s;
  display: flex;
  overflow: hidden;
  position: relative;
  padding: 0 8px;
  gap: 8px;

  &:hover {
    border-color: #808080;
    .vi-input__prepend,
    .vi-input__append {
      border-color: #808080;
    }
  }
  &:focus-within {
    border-color: var(--vi-color-primary);
    .vi-input__prepend,
    .vi-input__append {
      border-color: var(--vi-color-primary);
    }
  }
  &-textarea {
    padding: 0;
    .vi-input__input {
      padding: 6px 8px;
    }
  }
  &-group {
    padding: 0;
  }
  &__input {
    width: 100%;
    height: 100%;
    padding: 6px 0;
    border-radius: var(--vi-base-radius);
    &-clear,
    &-show-hidden {
      user-select: none;
      display: flex;
      align-items: center;
    }
  }
  &__limit {
    &-textarea,
    &-input {
      display: flex;
      align-items: center;
      font-size: 12px;
      color: var(--vi-color-info);
      line-height: 12px;
      &.is-max { color: var(--vi-color-danger); }
    }
    &-textarea {
      position: absolute;
      right: 8px;
      bottom: 8px;
    }
    &-input {
      flex-shrink: 0;
      margin-right: 8px;
    }
  }
  &__prefix-icon,
  &__suffix-icon {
    display: flex;
    align-items: center;
    flex-shrink: 0;
    color: var(--vi-color-info);
  }
  &__prepend,
  &__append {
    color: #909399;
    background-color: #f4ecfd;
    padding: 0 16px;
    border-width: 0;
    border-style: solid;
    border-color: var(--vi-color-info);
    transition: all .3s;
    line-height: v-bind(getLineHeight);
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
    &:hover {
      border-color: var(--vi-color-info);
    }
    .vi-input__input {
      cursor: not-allowed;
    }
  }
}
</style>