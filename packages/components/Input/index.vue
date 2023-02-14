<script setup lang="ts">
import { computed, nextTick, onMounted, ref, watch } from 'vue'
import { Icon as ViIcon } from '../index'

interface Props {
  modelValue: string
  type?: string
  placeholder?: string
  disabled?: boolean
  clearable?: boolean
  showPwd?: boolean
}
const props = withDefaults(defineProps<Props>(), {
  type: 'text',
  placeholder: '',
  disabled: false,
  clearable: false,
  showPwd: false
})
interface Emits {
  (e: 'update:modelValue', value: string): void
}
const emit = defineEmits<Emits>()

const viInputEl = ref<HTMLInputElement>()
const isShowClear = ref(false)
const isShowPwd = ref(false)
const isPwdInput = ref(false)

const classObj = computed(() => ({
  'is-disabled': props.disabled,
}))

const handleInput = ({ target }: Event) => {
  emit('update:modelValue', (target as HTMLInputElement).value)
}
const handleFocus = () => {
}
const clearInput = () => {
  emit('update:modelValue', '')
  viInputEl.value?.focus()
}
const toggleShowPwd = () => {
  if (isPwdInput.value) {
    viInputEl.value!.type = 'text'
    viInputEl.value!.focus()
    isPwdInput.value = false
  } else {
    viInputEl.value!.type = 'password'
    viInputEl.value!.focus()
    isPwdInput.value = true
  }
}

onMounted(() => {
  nextTick(() => isPwdInput.value = viInputEl.value!.type === 'password')
  if (props.clearable) { 
    watch(() => props.modelValue, val => val 
      ? isShowClear.value = true 
      : isShowClear.value = false)
  } else if (props.showPwd) {
    watch(() => props.modelValue, val => val 
      ? isShowPwd.value = true
      : isShowPwd.value = false)
  }
})

</script>

<template>
  <div class="vi-input" :class="classObj">
    <input 
      ref="viInputEl"
      class="vi-input__input" 
      :type="type" 
      :placeholder="placeholder"
      :value="modelValue" 
      :disabled="disabled"
      @input="handleInput" 
      @focus="handleFocus"
    />
    <vi-icon 
      title="清除"
      name="CloseCircle" 
      size="16px"
      color="var(--info-color)" 
      hover-color="var(--primary-color)" 
      @click="clearInput"
      v-if="isShowClear"
    />
    <vi-icon 
      :title="isPwdInput ? '显示' : '隐藏'"
      :name="isPwdInput ? 'VisibilityOff': 'Visibility'" 
      size="16px"
      color="var(--info-color)" 
      hover-color="var(--primary-color)" 
      @click="toggleShowPwd"
      v-if="isShowPwd"
    />
  </div>
</template>

<style lang="scss">
.vi-input {
  // test
  width: 400px;
  // width: 100%;
  padding: 0 8px;
  border: 1px solid var(--info-color);
  border-radius: var(--border-radius);
  transition: all .3s;
  display: flex;
  align-items: center;
  &:hover {
    border-color: #808080;
  }
  &:focus-within {
    border-color: var(--primary-color);
  }
  &__input {
    width: 100%;
    height: 100%;
    padding: 6px 0;
  }

  &.is-disabled {
    background-color: #eeeeee;
    cursor: not-allowed;
    &:hover {
      border-color: var(--info-color);
    }
    .vi-input__input {
      cursor: not-allowed;
    }
  }
}
</style>