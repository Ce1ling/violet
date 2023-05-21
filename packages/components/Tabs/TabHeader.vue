<script lang="ts" setup>
import { h, inject, computed, ref, onMounted, reactive, watch, onBeforeUnmount } from 'vue'
import { Icon as ViIcon } from '../index'
import { checkNodeType } from '../../utils/vue/node'
import { useResizeObserver } from '../../hooks/useResizeObserver'

import type { VNode, VNodeArrayChildren } from 'vue'
import type { TabsProps, TabsEmits, TabsSlots, TabsNavbar, TabsRenderResult } from './tabs'
import type { TabProps } from './Tab/tab'
import type { TabsHeaderNodes, TabsHeaderRefEl } from './tabsHeader'


const { observe, unobserve } = useResizeObserver(handleTabsHeaderChange)

const tabsProps = inject<TabsProps>('tabsProps')!
const tabsEmits = inject<TabsEmits>('tabsEmits')!
const tabsSlots = inject<TabsSlots>('tabsSlots')!
const tabsNavbar = inject<TabsNavbar>('tabsNavbar')!

const tabsHeader = ref<TabsHeaderRefEl>(null)
const tabsHeaderBar = reactive({ width: 0, offset: 0 })
const tabsHeaderNodes: TabsHeaderNodes = getTabsHeaderNodes()

// TODO: 也许可以作为一个 props, 用于自定义 padding
const innerCardPadding = '6px'

const getStyles = computed(() => ({
  padding: tabsProps.type === 'inner-card' ? innerCardPadding : ''
}))

const getNavbarHeader = computed(() => {
  return tabsProps.type === 'inner-card' 
    ? `calc(${tabsNavbar.height} - ${parseInt(innerCardPadding) * 2}px)` 
    : tabsNavbar.height
})

const getBarStyles = computed(() => ({
  width: `${ tabsHeaderBar.width}px`,
  maxWidth: `${tabsHeaderBar.width}px`,
  height: getNavbarHeader.value,
  backgroundColor: tabsProps.activeBgColor,
  transform: `translateX(${tabsHeaderBar.offset}px)`,
}))

function getTabsHeaderNodes() {
  const slots = tabsSlots.default && tabsSlots.default().map(slot => {
    const type = checkNodeType(slot.type.toString())
    if (type === 'normal') {
      return { vNode: slot, ref: ref(null) }
    }
    if (type === 'fragment') {
      return (slot.children as VNodeArrayChildren).map(s => ({ vNode: (s as VNode), ref: ref(null) }))
    }
  }) || []

  return slots.filter(item => item).flat() as TabsHeaderNodes
}

function findIdx(vNodes: TabsHeaderNodes, target: string) {
  const i = vNodes.findIndex(node => node.vNode.props?.name === target)
  return i === -1 ? 0 : i
}

function handleTabsHeaderChange() {
  const i = findIdx(tabsHeaderNodes, tabsProps.modelValue)
  handleNavbar(tabsHeaderNodes[i].ref?.value)
}

/** 返回 `true` 允许切换, `false` 不允许 */
const onBeforeChange = (fn: TabsProps['beforeChange'], name: string) => {
  if (!fn) {
    tabsEmits('update:modelValue', name)
    return true
  }
  const isAllowChange = fn(name)
  if (isAllowChange) {
    tabsEmits('update:modelValue', name)
    return isAllowChange
  }
  return false
}

const renderRemoveIcon = (vNode: VNode, idx: number) => {
  if (!tabsProps.removable) { return }

  return h(ViIcon, { 
    name: 'Close', 
    class: 'vi-tabs__close-icon',
    onClick: (e: MouseEvent) => {
      e.stopPropagation()
      tabsEmits('tab-remove', vNode.props?.name, e)
      tabsHeaderNodes.splice(idx, 1)
    }
  })
}

const handleNavbar = (el: TabsHeaderRefEl) => {
  if (el) {
    const elRect = el.getBoundingClientRect()
    const parentElRect = tabsHeader.value?.getBoundingClientRect()!
    
    tabsHeaderBar.width = parseInt(elRect.width.toString())
    tabsHeaderBar.offset = elRect.left - parentElRect.left
  }
}

const hRenderTabHeader = (type: string, vNode: VNode, idx: number) => {
  const isActive = tabsProps.modelValue === vNode.props?.name

  return h(type, {
    ...vNode.props,
    class: ['vi-tabs__header-item', {
      'is-active': isActive
    }],
    ref: tabsHeaderNodes[idx].ref, 
    onClick: (e: MouseEvent) => {
      const { name } = vNode.props ?? {}
      tabsEmits('tab-click', name, e)
      const isAllowChange = onBeforeChange(tabsProps.beforeChange, name)
      // 允许切换才能处理 `滑块`
      if (isAllowChange) {
        handleNavbar(tabsHeaderNodes[idx].ref.value)
      }
    },
  }, [
    h('span', (vNode.props as TabProps)?.label), 
    renderRemoveIcon(vNode, idx)
  ])
}

const RenderTabHeader = (): TabsRenderResult => {
  return tabsSlots.default && tabsSlots.default().map((vNode, idx) => {
    const type = checkNodeType(vNode.type.toString())
    if (type === 'normal') {
      return hRenderTabHeader('div', vNode, idx)
    }
    if (type === 'fragment') {
      return (vNode.children as VNodeArrayChildren).map((n, i) => {
        return hRenderTabHeader('div', n as VNode, i)
      })
    }
  })
}

watch(() => tabsProps.modelValue, handleTabsHeaderChange)

onMounted(() => observe(tabsHeader.value!))

onBeforeUnmount(() => unobserve(tabsHeader.value!))
</script>

<template>
  <div class="vi-tabs__header" :style="getStyles" v-bind="$attrs" ref="tabsHeader">
    <div class="vi-tabs__bar" :style="getBarStyles" />
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
  background-color: var(--vi-tabs-header-bg-color);

  &-item {
    display: flex;
    align-items: center;
    flex-shrink: 0;
    padding: 8px var(--vi-base-padding);
    cursor: pointer;
    text-align: center;
    transition: all var(--vi-animation-duration);
    border-radius: var(--vi-base-radius) var(--vi-base-radius) 0 0;
    position: relative;

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
      --vi-tabs-active-color: var(--vi-color-white);

      color: var(--vi-tabs-active-color);
      .vi-tabs__close-icon:hover {
        border-radius: 50%;
        color: var(--vi-color-primary);
        background-color: var(--vi-color-primary-weak);
      }
    }
  }
  .vi-tabs__bar {
    transition: all var(--vi-animation-duration);
    position: absolute;
    left: 0;
    bottom: 0;
    border-radius: var(--vi-base-radius);
  }
}
</style>