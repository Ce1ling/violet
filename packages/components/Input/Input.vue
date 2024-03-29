<script setup lang="ts">
import { computed, ref, watch, h, useSlots, nextTick, onMounted } from 'vue'
import { Icon as ViIcon } from '../index'

import type { InputProps, InputIcon, InputSlots, InputEmits } from './input'

const props = withDefaults(defineProps<InputProps>(), {
  type: 'text',
  disabled: false,
  clearable: false,
  showPwd: false,
  rows: '2',
  limit: '',
  showLimit: false,
  limitSeparator: ' / ',
})

const emit = defineEmits<InputEmits>()

defineSlots<InputSlots>()

const slots = useSlots()

const viInputEl = ref<HTMLInputElement>()
const isShowClear = ref(false)
const isShowPwd = ref(false)
const isPwdInput = ref(props.type === 'password')
const lineHeight = ref('')

const inputClass = computed(() => ({
  'is-disabled': props.disabled,
  'vi-input-textarea': props.type === 'textarea',
  'vi-input-group': slots.prepend || slots.append,
}))

const mixedStyle = computed(() => ({ lineHeight: lineHeight.value }))

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

const getIconAttrs = (type: InputIcon) => {
  return typeof type === 'string' ? { name: type, size: 'inherit' } : type
}

const RenderLimit = () => {
  const currentLen = props.modelValue.length
  const limit = Number(props.limit)

  return h(
    'span',
    {
      class: [
        `vi-input__limit-${props.type === 'textarea' ? props.type : 'input'}`,
        { 'is-max': currentLen >= limit },
      ],
    },
    `${currentLen}${props.limitSeparator}${limit}`
  )
}

watch(
  () => props.modelValue,
  val => {
    if (props.clearable) {
      isShowClear.value = !!val
    }
    if (props.showPwd) {
      isShowPwd.value = !!val
    }
  }
)

onMounted(async () => {
  await nextTick()
  lineHeight.value = `${viInputEl.value!.offsetHeight - 1}px`
})

defineExpose({
  inputEl: viInputEl,
})
</script>

<template>
  <div class="vi-input" :class="inputClass">
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
      <RenderLimit v-if="limit.trim() && showLimit" />
    </template>
    <template v-else>
      <div class="vi-input__prepend" :style="mixedStyle" v-if="$slots.prepend">
        <slot name="prepend" />
      </div>
      <span class="vi-input__prefix-icon" v-if="$slots.prefix || prefixIcon">
        <vi-icon v-bind="getIconAttrs(prefixIcon)" v-if="prefixIcon" />
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
      <span class="vi-input__suffix-icon" v-if="$slots.suffix || suffixIcon">
        <vi-icon v-bind="getIconAttrs(suffixIcon)" v-if="suffixIcon" />
        <slot name="suffix" v-else />
      </span>
      <vi-icon
        class="vi-input__input-clear"
        title="清除"
        name="CloseCircle"
        size="16px"
        color="var(--vi-input-icon-color)"
        hover-color="var(--vi-color-primary)"
        @click="clearInput"
        v-if="isShowClear"
      />
      <vi-icon
        class="vi-input__input-show-hidden"
        :title="isPwdInput ? '显示' : '隐藏'"
        :name="isPwdInput ? 'VisibilityOff' : 'Visibility'"
        size="16px"
        color="var(--vi-input-icon-color)"
        hover-color="var(--vi-color-primary)"
        @click="toggleShowPwd"
        v-if="props.type === 'password' && isShowPwd"
      />
      <RenderLimit v-if="limit.trim() && showLimit" />
      <div class="vi-input__append" :style="mixedStyle" v-if="$slots.append">
        <slot name="append" />
      </div>
    </template>
  </div>
</template>

<style lang="scss">
.vi-input {
  width: 100%;
  border: 1px solid var(--vi-input-border-color);
  border-radius: var(--vi-base-radius);
  transition: all var(--vi-animation-duration);
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
    box-shadow: 0 0 0 1px var(--vi-color-primary);

    .vi-input__prepend,
    .vi-input__append {
      border-color: var(--vi-color-primary);
      box-shadow: 0 0 0 1px var(--vi-color-primary);
      color: var(--vi-color-primary);
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
    &::placeholder {
      color: var(--vi-input-placeholder-color);
    }
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
      color: var(--vi-input-limit-color);
      line-height: 12px;
      &.is-max {
        color: var(--vi-color-danger);
      }
    }
    &-textarea {
      position: absolute;
      right: 8px;
      bottom: 8px;
    }
    &-input {
      flex-shrink: 0;
    }
  }
  &__prefix-icon,
  &__suffix-icon {
    display: flex;
    align-items: center;
    flex-shrink: 0;
    color: var(--vi-input-icon-color);
  }
  &__prepend,
  &__append {
    color: #808080;
    // color: var(--vi-color-info-deep);
    background-color: var(--vi-input-mixed-bg-color);
    padding: 0 16px;
    border-width: 0;
    border-style: solid;
    border-color: var(--vi-input-border-color);
    transition: all var(--vi-animation-duration);
  }
  &__prepend {
    border-right-width: 1px;
  }
  &__append {
    border-left-width: 1px;
  }
  &.is-disabled {
    background-color: var(--vi-input-disabled-color);
    cursor: not-allowed;
    &:hover {
      border-color: var(--vi-input-border-color);
    }
    .vi-input__input {
      cursor: not-allowed;
    }
  }
}
</style>
