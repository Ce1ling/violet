<script setup lang="ts">
import { useSlots, watch, provide, computed } from 'vue'
import TabHeader from './TabHeader.vue'
import TabContent from './TabContent.vue'

import type { TabsProps, TabsEmits, TabsSlots, TabsNavbar } from './tabs'


const props = withDefaults(defineProps<TabsProps>(), {
  activeBgColor: 'var(--vi-color-primary)',
  bgColor: 'var(--vi-tabs-header-bg-color)',
  ifMode: false,
  removable: false,
  padding: '6px',
  barHeight: '2px',
  center: false
})
const emit = defineEmits<TabsEmits>()
const slots = useSlots()

const getClasses = computed(() => ({
  'vi-tabs--normal': props.type === 'normal',
  'vi-tabs--inner-card': props.type === 'inner-card',
}))

provide<TabsProps>('tabsProps', props)
provide<TabsEmits>('tabsEmits', emit)
provide<TabsSlots>('tabsSlots', slots)
provide<TabsNavbar>('tabsNavbar', {
  height: props.type === 'normal' ? props.barHeight : '100%'
})

watch(() => props.modelValue, (val, oVal) => emit('change', val, oVal))
</script>

<template>
  <div class="vi-tabs" :class="getClasses">
    <TabHeader />
    <TabContent />
  </div>
</template>

<style lang="scss">
.vi-tabs {
  border: 1px solid var(--vi-tabs-border-color);
  border-radius: var(--vi-base-radius) var(--vi-base-radius);

  &--normal {
    border-color: transparent;

    .vi-tabs__header {
      --vi-tabs-header-bg-color: transparent;
      &::before {
        content: '';
        width: 100%;
        border-bottom: 2px solid var(--vi-tabs-navbar-bg-color);
        position: absolute;
        left: 0;
        bottom: 0;
      }
    }
    .is-active {
      --vi-tabs-active-color: var(--vi-color-primary);
    }
  }
  &--inner-card {
    border-color: var(--vi-tabs-header-bg-color);
    
    .vi-tabs__header {
      .vi-tabs__bar {
        bottom: unset;
        box-shadow: var(--vi-tabs-navbar-shadow);
      }
    }
  }
}
</style>