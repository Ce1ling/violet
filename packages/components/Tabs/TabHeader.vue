<script lang="ts" setup>
import {
  h,
  inject,
  computed,
  ref,
  onMounted,
  reactive,
  watch,
  onBeforeUnmount,
  nextTick,
} from 'vue'

import { Icon as ViIcon } from '../index'
import { checkNodeType } from '../../utils/vue/node'
import { useResizeObserver } from '../../hooks/useResizeObserver'

import type { VNode, VNodeArrayChildren } from 'vue'
import type {
  TabsProps,
  TabsEmits,
  TabsSlots,
  TabsNavbar,
  TabsRenderResult,
} from './tabs'
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

const getStyles = computed(() => ({
  padding: tabsProps.type === 'inner-card' ? tabsProps.headerPadding : '',
  justifyContent: tabsProps.center ? 'center' : '',
}))

const getNavbarHeight = computed(() => {
  return tabsProps.type === 'inner-card'
    ? `calc(${tabsNavbar.height} - ${parseInt(tabsProps.headerPadding!) * 2}px)`
    : tabsNavbar.height
})

const getNavbarWidth = computed(() => {
  if (tabsProps.type === 'normal' && tabsProps.barHalf) {
    return tabsHeaderBar.width / 2
  }
  return tabsHeaderBar.width
})

const getNavbarOffset = computed(() => {
  if (tabsProps.type === 'normal' && tabsProps.barHalf) {
    return tabsHeaderBar.offset + getNavbarWidth.value / 2
  }
  return tabsHeaderBar.offset
})

const getBarStyles = computed(() => ({
  width: `${getNavbarWidth.value}px`,
  maxWidth: `${getNavbarWidth.value}px`,
  height: getNavbarHeight.value,
  backgroundColor: tabsProps.activeBgColor,
  transform: `translateX(${getNavbarOffset.value}px)`,
}))

function getTabsHeaderNodes() {
  const slots =
    (tabsSlots.default &&
      tabsSlots.default().map(slot => {
        const type = checkNodeType(slot.type.toString())
        if (type === 'normal') {
          return { vNode: slot, ref: ref(null) }
        }
        if (type === 'fragment') {
          return (slot.children as VNodeArrayChildren).map(s => ({
            vNode: s as VNode,
            ref: ref(null),
          }))
        }
      })) ||
    []

  return slots.filter(item => item).flat() as TabsHeaderNodes
}

function findIdx(vNodes: TabsHeaderNodes, target: string) {
  const i = vNodes.findIndex(node => node.vNode.props?.name === target)
  return i === -1 ? 0 : i
}

function handleTabsHeaderChange() {
  const i = findIdx(tabsHeaderNodes, tabsProps.modelValue)
  handleNavbar(tabsHeaderNodes[i]?.ref?.value)
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

const handleTabRemove = (idx: number) => {
  const index = tabsHeaderNodes.findIndex(
    n => n.vNode.props?.name === tabsProps.modelValue
  )
  // 当前高亮的 tab 被移除了则更新 v-model
  if (index === -1) {
    const firstNode = tabsHeaderNodes[0]?.vNode.props?.name
    const currentPrevNode = tabsHeaderNodes[idx - 1]?.vNode.props?.name
    tabsEmits('update:modelValue', idx === 0 ? firstNode : currentPrevNode)
    return
  }
  // 其他 tab 被移除则仅更新滑块
  handleNavbar(tabsHeaderNodes[index]?.ref.value)
}

const renderRemoveIcon = (vNode: VNode, idx: number) => {
  if (!tabsProps.removable) {
    return
  }

  return h(ViIcon, {
    name: 'Close',
    class: 'vi-tabs__close-icon',
    onClick: async (e: MouseEvent) => {
      e.stopPropagation()
      tabsHeaderNodes.splice(idx, 1)
      tabsEmits('tab-remove', vNode.props?.name, e)
      await nextTick()
      handleTabRemove(idx)
    },
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

  return h(
    type,
    {
      ...vNode.props,
      class: [
        'vi-tabs__header-item',
        {
          'is-active': isActive,
        },
      ],
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
    },
    [h('span', (vNode.props as TabProps)?.label), renderRemoveIcon(vNode, idx)]
  )
}

const RenderTabHeader = (): TabsRenderResult => {
  return (
    tabsSlots.default &&
    tabsSlots.default().map((vNode, idx) => {
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
  )
}

watch(() => tabsProps.modelValue, handleTabsHeaderChange)

onMounted(() => observe(tabsHeader.value!))

onBeforeUnmount(() => unobserve(tabsHeader.value!))
</script>

<template>
  <div
    class="vi-tabs__header"
    :style="getStyles"
    v-bind="$attrs"
    ref="tabsHeader"
  >
    <div class="vi-tabs__bar" :style="getBarStyles" />
    <RenderTabHeader />
  </div>
</template>

<style lang="scss">
.vi-tabs__header {
  display: flex;
  border-radius: var(--vi-base-radius) var(--vi-base-radius) 0 0;
  position: relative;
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
    transition: transform var(--vi-animation-duration);
    position: absolute;
    left: 0;
    bottom: 0;
    border-radius: var(--vi-base-radius);
  }
}
</style>
