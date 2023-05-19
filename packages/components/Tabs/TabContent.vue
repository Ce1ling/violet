<script lang="ts" setup>
import { h, inject } from 'vue'
import { checkNodeType } from '../../utils/vue/node'

import type { VNode, VNodeArrayChildren } from 'vue'
import type { TabsProps, TabsSlots, TabsRenderResult } from './tabs'


const tabsProps = inject<TabsProps>('tabsProps')!
const tabsSlots = inject<TabsSlots>('tabsSlots')!

const hRenderTabContent = (vNode: VNode) => h(vNode, { style: { 
  display: tabsProps.modelValue === vNode.props?.name ? 'block' : 'none'
}})

const RenderTabContent = (): TabsRenderResult => {
  if (!tabsSlots.default) { return }

  const ifModeRender = (slots: VNode[]) => {
    return slots.map(vNode => {
      const type = checkNodeType(vNode.type.toString())
      if (type === 'normal') {
        return vNode.props?.name === tabsProps.modelValue
          ? slots.find(n => n.props?.name === tabsProps.modelValue)
          : null
      } 
      if (type === 'fragment') {
        return (vNode.children as VNodeArrayChildren)?.find(n => {
          return (n as VNode).props?.name === tabsProps.modelValue
        })
      }
    })
  }

  const normalModeRender = (slots: VNode[]) => {
    return slots.map(vNode => {
      const type = checkNodeType(vNode.type.toString())
      if (type === 'normal') { return hRenderTabContent(vNode) }
      if (type === 'fragment') {
        return (vNode.children as VNodeArrayChildren).map(n => {
          return hRenderTabContent(n as VNode)
        })
      }
    })
  }

  return tabsProps.ifMode 
    ? ifModeRender(tabsSlots.default()) 
    : normalModeRender(tabsSlots.default())
}
</script>

<template>
  <div class="vi-tabs__content" v-bind="$attrs">
    <RenderTabContent />
  </div>
</template>

<style lang="scss">
</style>