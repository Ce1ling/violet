<script setup lang="ts">

interface Props {
  visible: boolean
}
defineProps<Props>()

</script>

<template>
  <div class="vi-mask" v-show="visible">
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