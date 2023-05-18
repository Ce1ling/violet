<script setup lang="ts">
import type { TabProps } from './tab'


defineProps<TabProps>()
</script>

<template>
  <div class="vi-tab-plane">
    <slot />
  </div>
</template>

<style scoped>
.vi-tab-plane {
  padding: var(--vi-base-padding);
  border: 1px solid var(--vi-tabs-border-color);
  border-top: none;
  border-radius: 0 0 var(--vi-base-radius) var(--vi-base-radius);
}
</style>