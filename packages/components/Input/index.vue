<script setup lang="ts">
import { computed, nextTick, onMounted, ref, watch, h } from 'vue'
import { Icon as ViIcon } from '../index'

interface Props {
  modelValue: string
  type?: string
  placeholder?: string
  disabled?: boolean
  clearable?: boolean
  showPwd?: boolean
  rows?: string
  limit?: string
  showLimit?: boolean
}
const props = withDefaults(defineProps<Props>(), {
  type: 'text',
  placeholder: '',
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

const viInputEl = ref<HTMLInputElement>()
const isShowClear = ref(false)
const isShowPwd = ref(false)
const isPwdInput = ref(false)

const classObj = computed(() => ({ 'is-disabled': props.disabled }))

const handleInput = ({ target }: Event) => {
  emit('update:modelValue', (target as HTMLInputElement).value)
}
const handleFocus = () => {
}
const clearInput = () => {
  emit('update:modelValue', '')
  viInputEl.value?.focus()
}
const toggleShowPwd = (e: MouseEvent) => {
  (e.target as HTMLElement).style.userSelect = 'none'
  viInputEl.value!.type = isPwdInput.value ? 'text' : 'password'
  isPwdInput.value = !isPwdInput.value
  viInputEl.value!.focus()
}
const RenderLimit = () => h('span', {
  class: [
    `vi-input__limit-${props.type === 'textarea' ? props.type : 'input'}`, 
    { 'tip': props.modelValue.length >= Number(props.limit) }
  ],
  innerText: `${props.modelValue.length} / ${props.limit}`
})

onMounted(() => {
  nextTick(() => isPwdInput.value = viInputEl.value!.type === 'password')

  if (!props.clearable && !props.showPwd) { return }

  watch(() => props.modelValue, val => {
    const state = val ? true : false
    if (props.clearable) { isShowClear.value = state }
    if (props.showPwd) { isShowPwd.value = state }
  })
})

</script>

<template>
  <div class="vi-input" :class="classObj">
    <template v-if="type === 'textarea'">
      <textarea 
        ref="viInputEl" 
        class="vi-input__input" 
        :placeholder="placeholder" 
        :value="modelValue" 
        :disabled="disabled" 
        :rows="rows" 
        :maxlength="limit" 
        @input="handleInput" 
        @focus="handleFocus" 
      ></textarea>
      <render-limit v-if="limit.trim() && showLimit" />
    </template>
    <template v-else>
      <input 
        ref="viInputEl" 
        class="vi-input__input" 
        :type="type" 
        :placeholder="placeholder" 
        :value="modelValue" 
        :disabled="disabled" 
        :maxlength="limit" 
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
        v-if="props.type === 'password' && isShowPwd" 
      />
      <render-limit v-if="limit.trim() && showLimit" />
    </template>
  </div>
</template>

<style lang="scss">
.vi-input {
  // test
  width: 400px;
  // width: 100%;
  border: 1px solid var(--info-color);
  border-radius: var(--border-radius);
  transition: all .3s;
  display: flex;
  align-items: center;
  overflow: hidden;
  position: relative;
  
  &:hover {
    border-color: #808080;
  }
  &:focus-within {
    border-color: var(--primary-color);
  }
  &__input {
    width: 100%;
    height: 100%;
    padding: 6px 8px;
    border-radius: var(--border-radius);
  }
  &__limit {
    &-textarea,
    &-input {
      font-size: 12px;
      color: var(--info-color);
      line-height: 12px;
      &.tip { color: var(--danger-color); }
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
  .vi-icon {
    margin-right: 8px;
  }
}
</style>