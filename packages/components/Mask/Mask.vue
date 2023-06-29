<script setup lang="ts">
import { computed } from 'vue'

import type { MaskProps, MaskSlots } from './mask'


const props = withDefaults(defineProps<MaskProps>(), {
  disabled: false,
  zIndex: new Date().getFullYear()
})

defineSlots<MaskSlots>()

const maskStyles = computed(() => ({
  backgroundColor: props.disabled ? 'transparent' : undefined,
  zIndex: props.zIndex
}))
</script>

<template>
  <div class="vi-mask" v-show="visible" :style="maskStyles">
    <slot />
  </div>
</template>

<style lang="scss">
.vi-mask {
  background-color: var(--vi-color-mask-black);
  position: fixed;
  inset: 0;
}
</style>