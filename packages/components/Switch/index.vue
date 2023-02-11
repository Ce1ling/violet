<script setup lang="ts">
import { ref } from 'vue'

type Props = {
  onColor: string
  offColor: string
  modelValue: boolean
}
const props = withDefaults(defineProps<Props>(), {
  onColor: 'var(--primary-color)',
  offColor: 'var(--shadow-color)'
})
type Emits = {
  (e: 'update:modelValue', checked: boolean): void
}
const emit = defineEmits<Emits>()

const checked = ref(props.modelValue)

const toggleChecked = () => {
  checked.value = !checked.value
  emit('update:modelValue', checked.value)
}

</script>

<template>
  <div class="vi-switch" :class="{ 'is-checked': checked }" @click="toggleChecked">
    <div class="vi-switch__active"></div>
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
}
</style>