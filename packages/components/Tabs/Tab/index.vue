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
}
</style>