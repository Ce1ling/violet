<script setup lang="ts">
import { computed, ref, watch } from 'vue'
import { Icon as ViIcon } from '../index'

type Props = {
  onColor: string
  offColor: string
  modelValue: boolean
  disabled: boolean
  loading: boolean
}
const props = withDefaults(defineProps<Props>(), {
  onColor: 'var(--primary-color)',
  offColor: 'var(--shadow-color)',
  disabled: false,
  loading: false
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
  <div class="vi-switch" :class="classObj" @click="toggleChecked">
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
</template>

<style lang="scss">
.vi-switch {
  width: 40px;
  max-width: 40px;
  height: 20px;
  background-color: v-bind(offColor);
  cursor: pointer;
  position: relative;
  border-radius: 10px;
  .vi-switch__input {
    opacity: 0;
  }
  .vi-switch__active {
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
</style>