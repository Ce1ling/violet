<script setup lang="ts">
type Props = {
  label: string
  name: string
}
defineProps<Props>()

</script>

<template>
  <div class="vi-tab-plane">
    <slot></slot>
  </div>
</template>

<style scoped>
.vi-tab-plane {
  padding: var(--default-padding);
  border: 1px solid var(--border-color);
  border-top: none;
  border-radius: 0 0 var(--border-radius) var(--border-radius);
}
</style>