<script setup lang="ts">
import { onMounted, provide, ref, useSlots, h, watch, computed, nextTick } from 'vue'

type Props = {
  active: string;
  bgColor?: string
}
const props = withDefaults(defineProps<Props>(), {
  bgColor: '#eee'
})
const emit = defineEmits(['change'])
const slots = useSlots()

const defualtActive = ref<string>(props.active || '')
const activeBg = ref<HTMLElement | null>(null)

provide('active', defualtActive)
watch(() => props.active, val => {
  if (val) { defualtActive.value = val }
})
const activeBgWidth = ref('0px')
const activeBgPosition = ref('0px')

const RenderTabHeader = () => {
  return slots.default && 
    slots.default().map(vNode => h('div', {
      class: ['vi-tab', { 
        'vi-tab__active': defualtActive.value === vNode.props?.label 
      }],
      innerHTML: vNode.props?.label,
      ref: 'activeBg',
      onClick: () => {
        defualtActive.value = vNode.props?.label
        activeBgPosition.value = '80px'
      }
    }))
}
const RenderTabContent = () => {
  return slots.default && 
    slots.default().find(vNode => vNode.props?.label === defualtActive.value)
}

onMounted(() => {
})
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
  // background-color: blueviolet;
}

.vi-tabs {
  .vi-tabs__header {
    display: flex;
    border-radius: var(--border-radius);
    user-select: none;
    background-color: v-bind(bgColor);
    position: relative;
    z-index: 1;
    &::before {
      content: '';
      background-color: var(--primary-color);
      border-radius: var(--border-radius);
      // width: v-bind(activeBgWidth);
      width: 60px;
      height: 100%;
      position: absolute;
      left: v-bind(activeBgPosition);
      top: 0;
      z-index: -1;
      transition: left .3s;
      cursor: pointer;
    }
    .vi-tab {
      padding: 8px 18px;
      border-radius: var(--border-radius);
      cursor: pointer;
      text-align: center;
      transition: color .3s;
    }    
  }
}
</style>
