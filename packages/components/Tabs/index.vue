<script setup lang="ts">
import { useSlots, watch, provide } from 'vue'
import TabHeader from './TabHeader.vue'
import TabContent from './TabContent.vue'

import type { TabsProps, TabsEmits } from './tabs'


const props = withDefaults(defineProps<TabsProps>(), {
  activeBgColor: 'var(--vi-color-primary)',
  bgColor: 'var(--vi-tabs-header-bg-color)',
  ifMode: false,
  removable: false
})
const emit = defineEmits<TabsEmits>()
const slots = useSlots()

provide<TabsProps>('tabsProps', props)
provide<TabsEmits>('tabsEmits', emit)
provide('tabsSlots', slots)

watch(() => props.modelValue, (val, oVal) => emit('change', val, oVal))
</script>

<template>
  <div class="vi-tabs">
    <TabHeader />
    <TabContent />
  </div>
</template>

<style lang="scss">
.vi-tabs {
  border-radius: var(--vi-base-radius) var(--vi-base-radius);
}
</style>