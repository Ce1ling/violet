<script setup lang="ts">
import { inject } from 'vue'

import { TabsProps } from '../tabs'

import type { TabProps, TabSlots } from './tab'

const tabsProps = inject<TabsProps>('tabsProps')!

defineProps<TabProps>()
defineSlots<TabSlots>()
</script>

<template>
  <div
    class="vi-tab-plane"
    :style="{ padding: tabsProps.contentPadding ?? '' }"
  >
    <slot />
  </div>
</template>

<style>
.vi-tab-plane {
  padding: var(--vi-base-padding);
}
</style>
