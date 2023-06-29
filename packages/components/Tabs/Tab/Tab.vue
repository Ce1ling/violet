<script setup lang="ts">
import type { TabProps, TabSlots } from './tab'


defineProps<TabProps>()

defineSlots<TabSlots>()
</script>

<template>
  <div class="vi-tab-plane">
    <slot />
  </div>
</template>

<style>
.vi-tab-plane {
  padding: var(--vi-base-padding);
}
</style>