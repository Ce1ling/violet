<script setup lang="ts">
interface Props {
  label: string
  name: string
}
defineProps<Props>()

</script>

<template>
  <div class="vi-tab-plane">
    <slot />
  </div>
</template>

<style scoped>
.vi-tab-plane {
  padding: var(--vi-base-padding);
  border: 1px solid var(--vi-color-gray);
  border-top: none;
  border-radius: 0 0 var(--vi-base-radius) var(--vi-base-radius);
}
</style>