<script setup lang="ts">
import { computed } from 'vue'


interface Props {
  visible: boolean
  disabled?: boolean
}
const props = withDefaults(defineProps<Props>(), {
  disabled: false
})

const getStyles = computed(() => ({
  backgroundColor: props.disabled ? 'transparent' : undefined
}))

</script>

<template>
  <div class="vi-mask" v-show="visible" :style="getStyles">
    <slot />
  </div>
</template>

<style lang="scss">
.vi-mask {
  background-color: var(--vi-color-mask-black);
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 9999;
}
</style>