<script lang="ts" setup>
import { h, inject, computed } from 'vue'
import { Icon as ViIcon } from '../index'
import { checkNodeType } from '../../utils/vue/node'

import type { VNode, VNodeArrayChildren } from 'vue'
import type { TabsProps, TabsEmits, TabsSlots, TabsRenderResult } from './tabs'
import type { TabProps } from './Tab/tab'


const tabsProps = inject<TabsProps>('tabsProps')!
const tabsEmits = inject<TabsEmits>('tabsEmits')!
const tabsSlots = inject<TabsSlots>('tabsSlots')!

const getHeaderStyles = computed(() => ({
  backgroundColor: tabsProps.bgColor
}))

const onBeforeChange = (fn: TabsProps['beforeChange'], name: string) => {
  if (!fn) {
    tabsEmits('update:modelValue', name)
    return
  }
  if (fn(name)) {
    tabsEmits('update:modelValue', name)
  }
}

const renderRemoveIcon = (vNode: VNode) => {
  if (!tabsProps.removable) { return }

  return h(ViIcon, { 
    name: 'Close', 
    class: 'vi-tabs__close-icon',
    onClick: (e: MouseEvent) => {
      e.stopPropagation()
      tabsEmits('tab-remove', vNode.props?.name, e)
    }
  })
}

const hRenderTabHeader = (type: string, vNode: VNode) => {
  const isActive = tabsProps.modelValue === vNode.props?.name

  return h(type, {
    ...vNode.props,
    class: ['vi-tabs__header-item', {
      'is-active': isActive
    }],
    style: {
      backgroundColor: isActive ? tabsProps.activeBgColor : ''
    },
    onClick: (e: MouseEvent) => {
      const { name } = vNode.props ?? {}
      tabsEmits('tab-click', name, e)
      onBeforeChange(tabsProps.beforeChange, name)
    },
  }, [
    h('span', (vNode.props as TabProps)?.label), 
    renderRemoveIcon(vNode)
  ])
}

const RenderTabHeader = (): TabsRenderResult => {
  return tabsSlots.default && tabsSlots.default().map(vNode => {
    const type = checkNodeType(vNode.type.toString())
    if (type === 'normal') {
      return hRenderTabHeader('div', vNode)
    }
    if (type === 'fragment') {
      return vNode.children && (vNode.children as VNodeArrayChildren).map(n => {
        return hRenderTabHeader('div', n as VNode)
      })
    }
  })
}
</script>

<template>
  <div class="vi-tabs__header" :style="getHeaderStyles" v-bind="$attrs">
    <RenderTabHeader />
  </div>
</template>

<style lang="scss">
.vi-tabs__header {
  display: flex;
  border-radius: var(--vi-base-radius) var(--vi-base-radius) 0 0;
  position: relative;
  border: 1px solid var(--vi-tabs-border-color);
  border-bottom: none;
  overflow: hidden;
  &-item {
    display: flex;
    align-items: center;
    flex-shrink: 0;
    padding: 8px var(--vi-base-padding);
    cursor: pointer;
    text-align: center;
    transition: all var(--vi-animation-duration);
    border-radius: var(--vi-base-radius) var(--vi-base-radius) 0 0;
    &:hover {
      color: var(--vi-color-primary);
    }
    .vi-tabs__close-icon {
      border-radius: 50%;
      transition: all var(--vi-animation-duration);
      margin-left: 4px;
      &:hover {
        color: var(--vi-color-white);
        background-color: var(--vi-color-primary);
        user-select: none;
      }
    }
    &.is-active {
      .vi-tabs__close-icon:hover {
        border-radius: 50%;
        color: var(--vi-color-primary);
        background-color: var(--vi-color-primary-weak);
      }
    }
    &.is-active {
      color: var(--vi-color-white);
    }
  }
}
</style>