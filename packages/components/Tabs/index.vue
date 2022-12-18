<script setup lang="ts">
import { onMounted, provide, ref, useSlots, h, watch, computed, nextTick, onUpdated } from 'vue'

type Props = {
  active: string;
  bgColor?: string;
  ifMode?: boolean;
}
const props = withDefaults(defineProps<Props>(), {
  active: '',
  bgColor: '#eee',
  ifMode: false
})
const emits = defineEmits(['change'])
const slots = useSlots()

const defualtActive = ref<string>(props.active)

watch(() => props.active, val => {
  if (val) { defualtActive.value = val }
})

const RenderTabHeader = () => {
  return slots.default && 
    slots.default().map(vNode => h('div', {
      class: ['vi-tabs__header__item', {
        'vi-tab__active': defualtActive.value === vNode.props?.name
      }],
      innerHTML: vNode.props?.label,
      onClick: () => {
        defualtActive.value = vNode.props?.name
      }
    }))
}
const RenderTabContent = () => {
  if (!slots.default) { return }
  return props.ifMode 
    ? slots.default().find(vNode => vNode.props?.name === defualtActive.value)
    : slots.default().map(vNode => h(vNode, { style: { 
      display: defualtActive.value === vNode.props?.name ? 'block' : 'none' 
    }}))
}


</script>

<template>
  <div class="vi-tabs">
    <div class="vi-tabs__header">
      <RenderTabHeader />
    </div>
    <div class="vi-tabs__content">
      <RenderTabContent />
    </div>
  </div>
</template>

<style lang="scss">
.vi-tab__active {
  color: #fff;
  background-color: var(--primary-color);
}

.vi-tabs {
  .vi-tabs__header {
    display: flex;
    border-radius: var(--border-radius) var(--border-radius) 0 0;
    user-select: none;
    background-color: v-bind(bgColor);
    position: relative;
    z-index: 1;
    overflow: hidden;
    &__item {
      flex-shrink: 0;
      padding: 8px 18px;
      border-radius: var(--border-radius) var(--border-radius) 0 0;
      cursor: pointer;
      text-align: center;
      transition: background-color .3s;
    }
  }
}
</style>
